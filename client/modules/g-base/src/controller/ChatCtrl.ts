/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class ChatCtrl extends mo.DataController {
        public static ON_GUILD_CHAT_UPDATE:String = "ON_GUILD_CHAT_UPDATE";
        public static ON_CHAT_UPDATE:String = "ON_CHAT_UPDATE";
        public static ON_NOTICE_UPDATE:String = "ON_NOTICE_UPDATE";
        public static ON_LOTTERY_UPDATE:String = "ON_LOTTERY_UPDATE";
        public static ON_GUILD_LOTTERY_UPDATE:String = "ON_GUILD_LOTTERY_UPDATE";
        public static ON_GUILD_CHANGED:String = "ON_GUILD_CHANGED";
        public static ON_IMPOTANT_UPDATE:String = "ON_IMPOTANT_UPDATE";
        public static ON_MODE_UPDATE:String = "ON_MODE_UPDATE";
        public static ON_TREASURE_LOST:string = "ON_TREASURE_LOST";

        _lastId:number;//最后的id
        _lastTime:Date;//最后的id
        //_noticeList:any;//走马灯
        _allList:any;//聊天窗口所有消息
        _vipList:any;//聊天窗口VIP消息
        _importantList:any;//重要消息
        _lotteryList:any;//探宝窗口所有消息
        _guildLotteryList:any;//公会探宝窗口所有消息
        _lastSendTime:Date;

        _guildLastId:number;//最后的id
        _guildList:any;//当前公会聊天窗口所有消息
u
        _channelMsg:any[] = [];

        _syncSeconds:number = 5;//几秒钟同步一次

        isFollowNormalUser:number = 1;
        isAutoBuyLaba:number = 0;

        _initProp() {
            super._initProp();
            var self = this;
            self._lastId = 0;
            self._lastTime = Date.newDate();
            //self._noticeList = [];
            self._allList = [];
            self._vipList = [];
            self._importantList = [];
            //self._noticeList = [];
            self._lotteryList = [];
            self._guildLotteryList = [];
            self._guildLastId = 0;
            self._guildList = [];
        }

        initData(data?){
            var self = this;
            self.syncData();
        }

        //获取最后的id
        getLastId (){
            return this._lastId;
        }

        //获取公会最后的id
        getGuildLastId (){
            return this._guildLastId;
        }

        /**
         * 获取走马灯消息
         * @returns [gc.dsConsts.ChatData]
         */
        getNoticeList(){
            return null; //return this._noticeList;
        }

        //删除一条信息
        delNotice(uniqueId){
            /*
             var self = this;
             for(var i = 0;i<self._noticeList.length;i++){
             var locData = self._noticeList[i];
             if(locData[gc.dsConsts.ChatData.uniqueId]==uniqueId){
             self._noticeList.splice(i, 1);
             break;
             }
             }
             */
        }

        /**
         * 获取所有消息
         * @returns [gc.dsConsts.ChatData]
         */
        getAllList(){
            var self = this;
            if(self.isFollowNormalUser){
                return self._allList;
            }else{
                return self._vipList;
            }
        }

        /**
         * 获取重要信息
         * @returns {any}
         */
        getImportantList(){
            return this._importantList;
        }

        /**
         * 获取当前公会所有消息
         * @returns [gc.dsConsts.ChatData]
         */
        getGuildAllList(){
            return this._guildList;
        }

        /**
         * 获取探宝消息
         * @returns [gc.dsConsts.ChatData]
         */
        getLotteryList(){
            return this._lotteryList;
        }

        /**
         * 获取公会探宝消息
         * @returns [gc.dsConsts.ChatData]
         */
        getGuildLotteryList(){
            return this._guildLotteryList;
        }

        /**
         * 获取现在离最后一条消息的秒数
         * @returns {number}
         */
        getLastDiffSeconds(){
            return 0;
        }

        followModeChange(){
            var self = this;
            self.pushNotify(self.__class.ON_MODE_UPDATE);
        }

        //发送数据
        sendData(content,type, islaba,cb, cbTarget){
            var self = this;
            if(type!=gc.c_prop.chatTypeKey.user&&type!=gc.c_prop.chatTypeKey.guild) return mo.showMsg("聊天类型错误");
            if(accountCtrl.isGuest()) return mo.showMsg(gc.id_c_msgCode.touristForbidTalk);
            if(accountCtrl.getStatus()<4 && userCtrl.getLvl()<30) return mo.showMsg(gc.id_c_msgCode.noLvlToTalk);
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
            //综合聊天限制时间限制5秒
            if(self._lastSendTime && type==gc.c_prop.chatTypeKey.user){
                if(self._lastSendTime.getSecondsBetween(Date.newDate())<cd) return mo.showMsg(gc.id_c_msgCode.wordTooFast);
            }
            self._lastSendTime = Date.newDate();
            var guildId = 0;
            if(guildCtrl.getData()) guildId = gd.guildPersonalCtrl.getGuildId();
            var argKeys = gc.iface.a_chat_sendData_args;
            var args = {};
            args[argKeys.content] = content;
            args[argKeys.type] = type;
            args[argKeys.lastId] = self._lastId;
            args[argKeys.guildId] = guildId;
            args[argKeys.guildLastId] = self._guildLastId;
            args[argKeys.isLittleHorn] = islaba?1:0;
            mo.requestWaiting4Server(gc.iface.a_chat_sendData, args, function (data) {
                var dataList = data[gc.dsConsts.AllChatData.worldChat];
                var dataGuildList = data[gc.dsConsts.AllChatData.guildChat];
                var isOri = data[gc.dsConsts.AllChatData.isOri];//是否原公会
                if(!isOri){
                    var guildId = data[gc.dsConsts.AllChatData.guildId];
                    gd.guildPersonalCtrl.set(gc.dsConsts.GuildPersonalEntity.guildId, guildId);
                    self.pushNotify(self.__class.ON_GUILD_CHANGED);
                }
                self._updateData(dataList);
                self._updateGuildData(dataGuildList,isOri);
                var userData = data[gc.dsConsts.AllChatData.userData];
                var delBagItem = data[gc.dsConsts.AllChatData.delBagItems];
                if(userData) {
                    var bag = gd.userUtils.getNewBag(delBagItem, {});
                    userData[gc.dsConsts.UserEntity.bag] = bag;
                    userCtrl.updateEntity(userData);
                }
                cb.call(cbTarget);
            });
        }

        //打开窗口时调用
        openWindow(){
            var self = this;
            self.syncData();

            self.onNewAll();
        }

        //关闭窗口时调用
        closeWindow(){

        }

        updateNewMsg(newId){
            var self = this;
            if(newId>self._lastId){
                self.syncData();
            }
        }

        //同步数据
        syncData(){
            var self = this;
            var guildId = 0;
            if(guildCtrl.getData()) guildId = gd.guildPersonalCtrl.getGuildId();
            var argKeys = gc.iface.a_chat_getNewList_args;
            var args = {};
            args[argKeys.lastId] = self._lastId;
            args[argKeys.guildId] = guildId;
            args[argKeys.guildLastId] = self._guildLastId;
            mo.request4Server(gc.iface.a_chat_getNewList, args, function (data) {
                var dataList = data[gc.dsConsts.AllChatData.worldChat];
                var dataGuildList = data[gc.dsConsts.AllChatData.guildChat];
                var isOri = data[gc.dsConsts.AllChatData.isOri];//是否原公会
                if(!isOri){
                    var guildId = data[gc.dsConsts.AllChatData.guildId];
                    gd.guildPersonalCtrl.set(gc.dsConsts.GuildPersonalEntity.guildId, guildId);
                    self.pushNotify(self.__class.ON_GUILD_CHANGED);
                }
                self._updateData(dataList);
                self._updateGuildData(dataGuildList,isOri);
            });
        }

        getChatDataStr(chatData){
            var self = this;
            var type = chatData[gc.dsConsts.ChatData.type];
            var str = "";
            if(type == gc.c_prop.chatTypeKey.user){
                var userArgs = chatData[gc.dsConsts.ChatData.userArgs];
                var isGM = userArgs[3];
                var guildName:string = userArgs[4];
                var chatContent:string = userArgs[2];
                if(isGM){
                    str = mo.STR.format("[ubb color=#ff0000]【GM %s】%s[/ubb]", userArgs[0],chatContent);
                }else{
                    if(userArgs[1]>0){
                        str = mo.STR.format("[ubb color=#ffad00]VIP%s [/ubb][ubb color=#00cdff]%s: [/ubb][ubb color=#ffffff]%s[/ubb]",userArgs[1], userArgs[0], chatContent);
                    }else{
                        str = mo.STR.format("[ubb color=#00cdff]%s: [/ubb][ubb color=#ffffff]%s[/ubb]",userArgs[0], chatContent);
                    }
                    if(guildName!=""){
                        str = mo.STR.format("[ubb color=#e76df5]%s[/ubb]", mo.trans4UBB(mo.STR.format("[%s]", guildName)))+str;
                    }
                }
            }else if(type == gc.c_prop.chatTypeKey.guild){
                var guildArgs = chatData[gc.dsConsts.ChatData.guildArgs];//玩家公会聊天参数 [用户名,vip,头衔,聊天内容]
                //[公会头衔][vip4 名字]: 内容 普通成员不显示头衔
                str = mo.STR.format("%s%s[ubb color=#00cdff]%s: [/ubb][ubb color=#ffffff]%s[/ubb]"
                    ,guildArgs[2] == gc.c_prop.guildPostKey.rankFile? "" : mo.STR.format("[ubb color=#F6EC6B][%s][/ubb]",gc.c_prop.guildPost[guildArgs[2]])
                    ,guildArgs[1] > 0? mo.STR.format("[ubb color=#ffad00]VIP%s [/ubb]", guildArgs[1]) : ""
                    , guildArgs[0]
                    , guildArgs[3]);
            }else {
                var sysArgs = chatData[gc.dsConsts.ChatData.sysArgs];
                var sysInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_chatSys, sysArgs[0]);
                str = "【系统】";
                if(sysArgs.length==2){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1]);
                }else if(sysArgs.length==3){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2]);
                }else if(sysArgs.length==4){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3]);
                }else if(sysArgs.length==5){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4]);
                }else if(sysArgs.length==6){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5]);
                }else if(sysArgs.length==7){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5],sysArgs[6]);
                }else if(sysArgs.length==8){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5],sysArgs[6],sysArgs[7]);
                }
            }
            return str;
        }


        private _updateData(dataList){
            var self = this;
            var c_chatSys = mo.getJSONWithFileName(gc.cfg_c_chatSys);
            var updateType = {};
            var noticesList = [];//跑马灯消息
            if(self._channelMsg.length > 0){
                var obj = self._channelMsg.slice(-1)[0];
                //深拷贝, 消息显示部分有修改数据的逻辑...
                noticesList.push({1:obj['1'],2:obj['2'],3:[obj['3'][0],obj['3'][1]]});
            }
            var hasInspire = 0;
            for(var i = 0;i<dataList.length;i++){
                var locData = dataList[i];
                var locType = locData[gc.dsConsts.ChatData.type];
                if(locType==gc.c_prop.chatTypeKey.sys||locType==gc.c_prop.chatTypeKey.lottery){
                    var locSysArgs = locData[gc.dsConsts.ChatData.sysArgs];
                    var locId = locSysArgs[0];
                    //黑科技~=============>
                    //霸主上线
                    if(locId==51){
                        var locNickName = locSysArgs[1];
                        if(locNickName!=userCtrl.getName())
                            mo.showMsg(gc.id_c_msgCode.kingCome,locSysArgs[1]);
                    }
                    //成为霸主
                    if(locId == 50){
                        var locNickName = locSysArgs[2];
                        if(locNickName==userCtrl.getName()){
                            userCtrl.setIsKing(true);
                            heroCtrl.calPropAndCombat();
                        }
                    }
                    //擂台开始
                    if(locId == 60){
                        if(userCtrl.getIsKing()){
                            heroCtrl.calPropAndCombat();
                            userCtrl.setIsKing(false);
                        }
                    }

                    if(locId == 39){
                        var locGuildName = locSysArgs[1];
                        if(guildCtrl.getData()&&locGuildName== guildCtrl.get(gc.dsConsts.GuildEntity.name)){
                            hasInspire = 1;
                        }
                    }

                    if(locId == 75){
                        //秘宝消息 , 被抢了
                        var treasureId = locSysArgs[3];
                        var targetId = locSysArgs[4];
                        if(targetId == gd.userCtrl.getId()){
                            //gd.userCtrl.deleteItem(treasureId,1);
                            gd.userCtrl.updateBagItems(treasureId,function(){},self);
                        }
                        //最后两个字段是用来做黑科技的,不能显示出来
                        locSysArgs[3] = "";
                        locSysArgs[4] = "";
                    }

                    //黑科技~<=============
                    var locC_chatSysData = c_chatSys[locId];
                    if(locC_chatSysData[gc.c_chatSys_ifNotice]){
                        updateType[0] = 1;
                        //self._pushNotice(locData);
                        noticesList.push(locData);
                    }else{
                        //重要消息
                        if(locC_chatSysData[gc.c_chatSys_ifImport]){
                            updateType[4] = 1;
                            self._pushImportantList(locData);
                        }else{
                            updateType[1] = 1;
                            self._pushAllList(locData);
                            self._pushVipList(locData);
                        }
                    }
                }

                if(locType==gc.c_prop.chatTypeKey.user){
                    updateType[1] = 1;
                    self._pushAllList(locData);

                    if(locData[gc.dsConsts.ChatData.userArgs][0] == gd.userCtrl.getName() || locData[gc.dsConsts.ChatData.userArgs][1] > 0 ||
                        locData[gc.dsConsts.ChatData.userArgs][6] == 1 ){
                        //Vip聊天 , 我的信息 , 喇叭信息
                        self._pushVipList(locData);
                    }
                }

                if(locType==gc.c_prop.chatTypeKey.lottery) {
                    updateType[2] = 1;
                    self._pushLotteryList(locData)
                }

                if(locType==gc.c_prop.chatTypeKey.guildLottery) {
                    updateType[3] = 1;
                    self._pushGuildLotteryList(locData)
                }

                self._lastId = locData[gc.dsConsts.ChatData.uniqueId];

                if(hasInspire) bossFightCtrl.syncInspire();
            }
            if(dataList.length>0){
                this._lastTime = Date.newDate();
            }
            if(updateType[0]){
                //self.onNewNotice();
                hoodinnCtlr.pushNotices(noticesList);
            }
            if(updateType[1]){
                self.onNewAll();
            }
            if(updateType[2]){
                self.onNewLottery();
            }
            if(updateType[3]){
                self.onNewGuildLottery();
            }
            if(updateType[4]){
                self.onNewImportant();
            }
        }

        private _updateGuildData(dataGuildList,isOri){
            var self = this;
            var updateType = {};
            for(var i = 0;i<dataGuildList.length;i++){
                var locData = dataGuildList[i];
                var locType = locData[gc.dsConsts.ChatData.type];

                if(locType==gc.c_prop.chatTypeKey.guild){
                    updateType[1] = 1;
                    self._pushGuildAllList(locData);
                }

                self._guildLastId = locData[gc.dsConsts.ChatData.uniqueId];
            }
            if(updateType[1]){
                self.onNewGuildChat();  //todo
            }
        }

        /*
         private _pushNotice(data){
         this._noticeList.push(data);

         }
         */

        private _pushAllList(data){
            var self = this;
            self._allList.push(data);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var limit = c_game[gc.id_c_game.chatCfg][2];
            if(self._allList.length>limit){
                self._allList.shift();
            }
        }

        private _pushImportantList(data){
            var self = this;
            self._importantList.push(data);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var limit = c_game[gc.id_c_game.chatCfg][2];
            if(self._importantList.length>limit){
                self._importantList.shift();
            }
        }

        private _pushGuildAllList(data){
            var self = this;
            self._guildList.push(data);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var limit = c_game[gc.id_c_game.chatCfg][2];
            if(self._guildList.length>limit){
                self._guildList.shift();
            }
        }

        private _pushLotteryList(data){
            var self = this;
            self._lotteryList.push(data);
            if(self._lotteryList.length>10){
                self._lotteryList.shift();
            }
        }

        private _pushGuildLotteryList(data){
            var self = this;
            self._guildLotteryList.push(data);
            if(self._guildLotteryList.length>10){
                self._guildLotteryList.shift();
            }
        }

        private _pushVipList(data){
            var self = this;
            self._vipList.push(data);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var limit = c_game[gc.id_c_game.chatCfg][2];
            if(self._vipList.length>limit){
                self._vipList.shift();
            }
        }

        /*
         //有新的走马灯通知
         onNewNotice(){
         var self = this;
         self.pushNotify(self.__class.ON_NOTICE_UPDATE, self.getNoticeList());
         }
         */

        newChannelNotice(msg){
            var self = this;
            self._channelMsg.push(msg);
        }

        //有新的聊天消息
        onNewAll(){
            var self = this;
            self.pushNotify(self.__class.ON_CHAT_UPDATE, self.getAllList());
        }

        //有新的探宝消息
        onNewLottery(){
            var self = this;
            self.pushNotify(self.__class.ON_LOTTERY_UPDATE, self.getLotteryList());
        }

        //有新的公会探宝消息
        onNewGuildLottery(){
            var self = this;
            self.pushNotify(self.__class.ON_GUILD_LOTTERY_UPDATE, self.getGuildLotteryList());
        }

        onNewGuildChat(){
            var self = this;
            self.pushNotify(self.__class.ON_GUILD_CHAT_UPDATE, self.getGuildAllList());
        }

        onNewImportant(){
            var self = this;
            self.pushNotify(self.__class.ON_IMPOTANT_UPDATE, self.getImportantList());
        }
    }

    export var chatCtrl:ChatCtrl = ChatCtrl.getInstance();
}
