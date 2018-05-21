/**
   hd 主控制类
*/

module gd {

    export class HoodinnCtlr
    extends mo.DataController
    {
        // 客服消息变更
        public static ON_BUGCHAT_UPDATE = "ON_BUGCHAT_UPDATE";

        // 收到新的客服消息
        public static ON_NEWBUGCHAT_RECEIVED = "ON_NEWBUGCHAT_RECEIVED";

        // 即时消息变动
        public static ON_ANNOUNCE_UPDATE = "ON_ANNOUNCE_UPDATE";
        
        // 跑马灯消息变动
        public static ON_SYSNOTICE_UPDATE = "ON_SYSNOTICE_UPDATE";
        
        _initProp() {
            super._initProp();
        }

        private _lastBugChatId:number = 0; // 最近的客服消息ID
        getLastBugChatId():number {
            return this._lastBugChatId;
        }

        private _lastSysMsgId:number = 0; // 最近的通知消息id
        getLastSysMsgId():number {
            return this._lastSysMsgId;
        }

        // 锁定的服务器，如过开放服务器选区，则返回null
        static LockedServer():string {
            return this.UrlField('area', null);
        }

        // 通过分享进来的用户会有概数据
        static SharedUserKey():string {
            return this.UrlField('shareKey', null);
        }

        // 获得服务器传入的参数
        static UrlField(name:string, def:string = '', url:string = location.href):string {
            var res = url.match(new RegExp(`${name}=([0-9a-z]+)`, 'i'));
            return res ? res[1] : def;
        }

        openBugChatWindow() {
            this.syncBugChatData();
            this.pushNotify(this.__class.ON_BUGCHAT_UPDATE, this._bugchatDatas);

            // 定时5s刷新下数据
            this._tmrBugChatUpdate = new egret.Timer(5000, 0);
            this._tmrBugChatUpdate.addEventListener(egret.TimerEvent.TIMER, this.syncBugChatData, this);
            this._tmrBugChatUpdate.start();
        }

        private _tmrBugChatUpdate:egret.Timer;
        
        closeBugChatWindow() {
            this._tmrBugChatUpdate.stop();
            this._tmrBugChatUpdate = null;
        }
        
        // 刷新客服消息
        syncBugChatData() {
            var self = this;
            var argKeys = gc.iface.h_kefu_getList_args;
            var args = {};
            args[argKeys.lastId] = self._lastBugChatId;
            args[argKeys.openId] = gd.accountCtrl.get(gc.dsConsts.AccountEntity.sdkData).open_id;
            mo.request4Server(gc.iface.h_kefu_getList, args, function(dataList) {
                self._updateBugChatData(dataList);
            });
        }

        // 刷新系统消息，包括跑马灯、即时公告
        syncSysMsgData() {
            var self = this;
            var argKeys = gc.iface.a_chat_getNewSysMsgList_args;
            var args = {};
            args[argKeys.lastId] = self._lastSysMsgId;
            mo.request4Server(gc.iface.a_chat_getNewSysMsgList, args, function (dataList) {
                self._updateSysMsgData(dataList);
            });
        }

        private _bugchatDatas = [];
        getAllBugChats():any[] {
            return this._bugchatDatas;
        }

        // 即时通知
        private _annouDatas = [];
        getAllAnnounces():any[] {
            return this._annouDatas;
        }

        delAnnounce(uniqueId) {
            var self = this;
            for(var i = 0; i < self._annouDatas.length; ++i) {
                var locData = self._annouDatas[i];
                if(locData[gc.dsConsts.ChatData.uniqueId] == uniqueId) {
                    self._annouDatas.splice(i, 1);
                    break;
                }
            }
        }

        // 跑马灯消息
        private _noticeDatas = [];
        getAllNotices():any[] {
            return this._noticeDatas;
        }

        delNotice(uniqueId) {
            var self = this;
            for (var i = 0; i < self._noticeDatas.length; ++i) {
                var locData = self._noticeDatas[i];
                if (locData[gc.dsConsts.ChatData.uniqueId] == uniqueId) {
                    self._noticeDatas.splice(i, 1);

                    // 如过消息属于可以重复的，需要做－1，再判断是否移除
                    var sysArgs = locData[gc.dsConsts.ChatData.sysArgs];
                    var cfgid = sysArgs[0];
                    if (cfgid == 9999) {
                        var times = sysArgs[sysArgs.length - 2];
                        var interval = sysArgs[sysArgs.length - 1];

                        // 到期
                        if (times && interval) {
                            sysArgs[sysArgs.length - 2] = --times; 
                            if (times <= 0)
                                break;
                            
                            egret.setTimeout(function(locData) {
                                self._noticeDatas.push(locData);
                                self.pushNotify(self.__class.ON_SYSNOTICE_UPDATE, self._noticeDatas);
                            }, self, interval * 1000, locData);
                            break;
                        }
                        
                        // 播放到指定次数
                        if (times) {
                            sysArgs[sysArgs.length - 2] = --times;                            
                            if (times <= 0)
                                break;
                        }
                        
                        // 添加到最后
                        self._noticeDatas.push(locData);
                    }
                    
                    break;
                }
            }
        }
        
        private _updateBugChatData(dataList) {
            var c_chatSys = mo.getJSONWithFileName(gc.cfg_c_chatSys);
            for (var i = 0; i < dataList.length; ++i) {
                var locData = dataList[i];
                this._bugchatDatas.push(locData);
                var uid = locData[gc.dsConsts.ChatData.uniqueId];
                if (uid > this._lastBugChatId) {
                    // 新的消息
                    this._lastBugChatId = uid;
                    this.pushNotify(this.__class.ON_NEWBUGCHAT_RECEIVED, locData);
                }
            }
            this.pushNotify(this.__class.ON_BUGCHAT_UPDATE, this._bugchatDatas);
        }

        private _updateSysMsgData(dataList) {
            var chnNotice = false;
            var chnAnnou = false;
            for (var i = 0; i < dataList.length; ++i) {
                var locData = dataList[i];
                var subtype = locData[gc.dsConsts.ChatData.subType];
                switch (subtype) {
                case 1: { // 跑马灯
                    this._noticeDatas.push(locData);
                    chnNotice = true;
                } break;
                case 2: { // 即时公告
                    this._annouDatas.push(locData);
                    chnAnnou = true;
                } break;
                }

                var uid = locData[gc.dsConsts.ChatData.uniqueId];
                if (uid > this._lastSysMsgId) {
                    this._lastSysMsgId = uid;
                }
            }

            if (chnNotice)
                this.pushNotify(this.__class.ON_SYSNOTICE_UPDATE, this._noticeDatas);

            if (chnAnnou)
                this.pushNotify(this.__class.ON_ANNOUNCE_UPDATE, this._annouDatas);
        }

        // 推入一组通知消息，为了合并掉getNewList中的消息
        pushNotices(arr:any[]) {
            for (var i = 0; i < arr.length; ++i) {
                var locData = arr[i];
                // 为了和通过getSysMsg接口取得的消息做区分
                locData[gc.dsConsts.ChatData.uniqueId] += '::getnewlist';
                this._noticeDatas.push(locData);
            }
            this.pushNotify(this.__class.ON_SYSNOTICE_UPDATE, this._noticeDatas);
        }

        // 获得到系统通知的字符串
        getSysNoticeStr(chatData):string {
            var self = this;
            var type = chatData[gc.dsConsts.ChatData.type];
            var str = "";
            var sysArgs = chatData[gc.dsConsts.ChatData.sysArgs];
            var sysInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_chatSys, sysArgs[0]);
            if(sysArgs.length==1) {
                str = mo.STR.format(sysInfo[gc.c_chatSys_text]);
            } else if (sysArgs.length==2) {
                str = mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1]);
            } else if(sysArgs.length==3) {
                str = mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2]);
            } else if(sysArgs.length==4) {
                str = mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3]);
            } else if(sysArgs.length==5) {
                str = mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4]);
            } else if(sysArgs.length==6) {
                str = mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5]);
            } else if(sysArgs.length==7) {
                str = mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5],sysArgs[6]);
            } else if(sysArgs.length==8) {
                str = mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5],sysArgs[6],sysArgs[7]);
            }
            return str;
        }

        private _lastBugSendTime:Date;

        // 获得聊天的内容
        getBugChatStr(locData):string {
            var data = locData[gc.dsConsts.ChatData.userArgs];
            var who = data[0];
            var cnt = data[1];
            // ubb混杂多行好像会导致label崩溃，所以保护一下
            cnt = cnt.replace(/\n/g, ',');
            
            // 我自己发的，需要用颜色区分开            
            if (data[0] == gd.userCtrl.getName()) {
                return mo.STR.format("[ubb color=0xf7d26e]%s: %s[/ubb]", who, cnt);
            }
            return mo.STR.format("[ubb color=0xec964a]%s: %s[/ubb]", who, cnt);
        }

        // 发送一条消息        
        sendBugChat(content:string, cb:()=>void, ctx:any) {
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var sensitiveArr = c_game[gc.id_c_game.fuckWord][0].split(",");
            var cd = c_game[gc.id_c_game.chatCfg][1];
            var maxLength = c_game[gc.id_c_game.chatCfg][3];
            if (content == null || content == "") {
                return mo.showMsg(gc.id_c_msgCode.noWord);
            }
            else if (mo.STR.getStringLength(content) > maxLength) {
                return mo.showMsg(gc.id_c_msgCode.wordTooLong);
            }
            else if (mo.STR.checkSensitiveWord(content, sensitiveArr)) {
                return mo.showMsg(gc.id_c_msgCode.wordIllegal);
            }
            //限制5秒
            if(self._lastBugSendTime) {
                if(self._lastBugSendTime.getSecondsBetween(Date.newDate())<cd) return mo.showMsg(gc.id_c_msgCode.wordTooFast);
            }
            self._lastBugSendTime = Date.newDate();
            
            var argKeys = gc.iface.h_kefu_sendData_args;
            var args = {};
            args[argKeys.lastId] = this._lastBugChatId;
            args[argKeys.content] = content;
            args[argKeys.openId] = gd.accountCtrl.get(gc.dsConsts.AccountEntity.sdkData).open_id;
            args[argKeys.nickname] = gd.userCtrl.getName();
            args[argKeys.vipLevel] = gd.userCtrl.getVip();
            mo.requestWaiting4Server(gc.iface.h_kefu_sendData, args, function (dataList) {
                self._updateBugChatData(dataList);
                cb.call(ctx);
            });

        }
    }

    export var hoodinnCtlr = new HoodinnCtlr();
    
}
