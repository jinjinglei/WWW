module g_channel {

    //// hack-mo 当显示 [22] 消息时，调用平台的logout
    //var fun = mo.showMsg;
    //var waitAlert = false;
    //mo.showMsg = (code, ...args:any[]):boolean=>{
    //    var msg = null;
    //    if (code == gc.id_c_msgCode.loggedInOtherDevice)
    //        msg = '您的账号已在其他设备上登录！';
    //    else if (code == gc.id_c_msgCode.checkYourNet)
    //        msg = '连接服务器失败，请检查您的网络。';
    //
    //    if (msg) {
    //        if (waitAlert)
    //            return true;
    //        waitAlert = true;
    //
    //        g_base.BaseShowMsg.create().setData({msg:msg})
    //            .show()
    //            .onClose(function() {
    //                mo_channel.getCurChannel().logout();
    //            });
    //        return true;
    //    }
    //
    //    return fun.apply(mo, arguments);
    //};

    declare class hGame
    {
        constructor(...args);
    }

    declare class wooolsdk
    {
        constructor(...args);
        static queryBindState(callback?: Function): void;
        static bindMobile(callback: Function, url:string): void;
        static queryDesktopState(callback?:Function, pos?:number): void;
        static addDesktop(callback?:Function, pos?:number): void;
        static addDesktopReward(callback?:Function, pos?:number):void;
        static friendShare(url:string, callback?:Function):void;
        static queryGameSetting(callback:Function):void;
    }

    export enum WooolSdkDesktopShowType {
        WeiDuan = 0,
        FenXiang = 1,
        GuangZhu = 2,
        XiongDi = 3,
    };

    export enum WooolSdkDesktopPosition {
        Fight = 0,
        Home = 1
    };

    export interface WooolSdkDesktopResult {
        isfav:number;
        showType:WooolSdkDesktopShowType;
        flash:boolean;
    };

    export  function formatUrl(url?:any) {
        if (!url)
            url = location.href;
        var reg = /(?:[?&]+)([^&]+)=([^&]+)/g;
        var data = {};
        function fn(str, pro, value) {
            data[decodeURIComponent(pro)] = decodeURIComponent(value);
        }
        url.replace(reg, fn);

        if (DEBUG)
            data['debug'] = true;
        return data;
    }

    export function getGameKey(url:string = location.href) {
        //var res = url.match(/game_key=(\w+)/);
        //return res ? res[1] : '';
        return "50f9bc36643e738e";
    }

    /**
     * Egret联运
     */
    export class Channel10005 extends BaseSDKChannel {
        static CHANNEL_ID:number = 10005;
        isAutoLogin = true;

        _pollingInvId;
        _pollingIndex=0;
        id;

        _isRestoredPayment = false; //是否检查过未完成的支付

        hGame;
        urlData;
        _logActions;

        _channelReady:boolean = false;
        _onChannelReadyCb;
        _onChannelReadyCbtx;

        //@override
        _initProp(){
            var self = this, clazz = self.__class;
            super._initProp();
            self.urlData = formatUrl();
            self.hGame = new hGame(self.urlData);
            self.hGame.ready(function(){
                debug("--->hGame onReady!");
                self._channelReady = true;
                self._onChannelReadyCb.call(self._onChannelReadyCbtx);
            });
            self._logActions = [];            
        }

        afterLogin(option?){
            var self = this;
            self.isLogout = false;
            self._sdkData = [option.token];
            self.name = option.name;
        }

        validateToken(token):boolean{
            var self = this;
            return true;
        }

        checkLogin(cb, cbTarget, option?){
            var self = this;
            cb.call(cbTarget, false);
        }

        login (cb, cbTarget, option?){
            var self = this;
            var loginInfo:nest.user.LoginInfo = {};
            self.loginOpt =  option || loginInfo;

            var ticket = self.urlData["ticket"];
            var login_type = self.urlData["login_type"];

            gd.AccountCtrl.loginBySdk(self.__class.CHANNEL_ID, [ticket,login_type], function(data){
                cb.call(cbTarget, true);
            }, self);
        }

        logout (cb, ctx){
            //var self = this;
            //self.stopPolling();
            //self._isRestoredPayment = false;
            //cb.call(ctx);
            this.hGame.logout();
        }

        stopPolling(){
            var self = this;
            if(self._pollingInvId){
                tm.clearInterval(self._pollingInvId);
                self._pollingInvId = null;
            }
        }

        get isMultiAccount():boolean {
            var ch = this.channel();
            if (ch == 'qqbrowser' ||
                ch == 'x4399')
                return true;
            return false;
        }

        /**
        * 开始轮询
        */

        startPolling (){
            var self = this;
            self._pollingIndex = 0;
            var arr = egret.project.payCheckFrq; //单位秒
            if(self._pollingInvId) tm.clearInterval(self._pollingInvId);

            var poolFunc = function(){
                if(self._pollingInvId) tm.clearInterval(self._pollingInvId);
                if(!arr[self._pollingIndex]){//轮询周期结束，不再轮询
                    self._pollingIndex = 0;
                    mo.log("stop interval");
                    return;
                }
                self._pollingInvId = tm.setInterval(function () {
                    mo.log("----->request");
                    gd.rechargeCtrl.handleRequest(function (rstArr) {
                        mo.log("---->rstArr: ", JSON.stringify(rstArr));
                        var isFinished = rstArr[0]; // rstArr[0] = 1处理完了，0没有处理完
                        if (isFinished) {
                            mo.log("---->stop polling");
                            self.stopPolling();
                        }
                        self._isRestoredPayment = isFinished;
                    }, self);
                    self._pollingIndex++; //去下个访问服务器时间点
                    poolFunc();
                }, arr[self._pollingIndex] * 1000);
                mo.log("start interval arr[%s] = %s", self._pollingIndex, arr[self._pollingIndex])
            };
            poolFunc();//开始轮询
        }

        /**
         * 支付
         * @param rechargeId 支付的id
         * @param goodsId 渠道物品id
         * @param cb
         * @param target*/

        pay (rechargeId, goodsId, cb, target){
            var self = this;
            mo.playWaiting();

            tm.setTimeout4Tick(function(){
                mo.stopWaiting();
            }, 2000);

            gd.rechargeCtrl.getRequest(rechargeId, goodsId, function(data){
                var requestId = data[0];
                var serverId = data[1];
                var payData = data[2];

                var payType = "alipay_wap";
                debug(payData, payType);
                self.hGame.pay(payData, payType, function (result) {
                    if(result.code == 0){                        
                        mo.stopWaiting();
                    }

                    // 显示支付的返回信息
                    g_base.BaseShowMsg.create().setData({msg:result.showMessage}).show();
                });
                self.startPolling(); //开始轮询
            }, self);
        }

        /**
         * 恢复支付结果，用于第一次登录到主城时检查*/

        restorePayment(){
            var self = this;
            if(!self._isRestoredPayment){
                self.startPolling();
            }
        }

        stopRestorePayment(){
            var self = this;
            self.stopPolling();
        }

        /**
         * 分享
         * @param option
         * @param cb
         * @param target
         * @callback-param result 0 表示分享成功，-1表示用户取消*/
        /*
        share(option:nest.share.ShareInfo, cb, target){
            var self = this;
            this.hGame.share({
                title: option.title,
                message: option.description,
                imgUrl: option.img_url,
                url: option.url
            }, function (result:any) {
                if (result.code == 0) {
                    g_base.BaseShowMsg.create().setData({msg:'分享成功', interval:2}).show();
                } else {
                    g_base.BaseShowMsg.create().setData({msg:result.showMessage, interval:2}).show();
                }
                if (cb)
                    cb.call(target, result.code == 0);
            });
        }
        */

        //--------
        //是否绑定手机
        isBindMobile(cb:(isOpen:boolean, isBind:boolean)=>void,target){
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba'){ //玩吧强关
                return cb.call(target, false, false);
            }
            wooolsdk.queryBindState(function (ret)
            {
                // {"code":0, "data":{bindflag:0未绑定/1已绑定}}
                // {"code":-1} 不显示这个功能
                if(!ret) cb.call(target,false, false);
                console.log("ret", JSON.stringify(ret));
                if(ret["code"] == 0)
                    cb.call(target, true, ret.data["bindflag"] == 1);
                else
                    cb.call(target, false, false);
            });
        }

        //绑定手机
        bindMobile(cb,target){
            gd.userCtrl.getBindPhoneUrl(function(url){
                wooolsdk.bindMobile(function (ret)
                {
                    console.log("bind_back:", JSON.stringify(ret));
                    // {"code":0, "data":{bindflag:0未绑定/1已绑定}}
                    if(!ret) cb.call(target,false);
                    cb.call(target, ret.data["bindflag"] == 1);
                }, url);
            },this);
        }

        /*
         code:0,
         data:{
         from : "",
         isfav : data.code === -1 ? 0 : 1
         showType: 1 // 0或空=微端，1=分享，以后还会有2，3，4更多的
        */
        /*
        isShowShare(cb,target){
            wooolsdk.queryDesktopState(function (data)
            {
                // {"code":0, "message":"", "showMessage":' 已绑定', "data":{}}
                // {"code":-1, "message":"", "showMessage":' 未绑定', "data":{}}
                if(!data) cb.call(target,0);
                if(!data["showType"])
                    cb.call(target,0);
                else
                    cb.call(target,data["showType"]);
            });
        }
        */

        /** 获得桌面相关信息 
            @pos 0战斗 1主城
         */
        getDesktopInfo(pos:WooolSdkDesktopPosition, cb:(suc:boolean, data:WooolSdkDesktopResult)=>void, target) {
            wooolsdk.queryDesktopState(function(data) {
                if (data == null || data.code != 0) {
                    if (cb)
                        cb.call(target, false, {});
                    return;
                }
                if (cb)
                    cb.call(target, true, data.data ? data.data : {});
            }, pos);
        }

        /** 调用桌面提供的功能 */
        setDesktopInfo(pos:WooolSdkDesktopPosition, cb:(suc:boolean)=>void, target) {
            wooolsdk.addDesktop(function(data) {
                if (data == null || data.code != 0) {
                    if (cb)
                        cb.call(target, false);
                    return;
                }
                if (cb)
                    cb.call(target, true);
            }, pos);
        }

        /** 获取桌面的奖励 */
        acquireDesktopReward(pos:WooolSdkDesktopPosition, cb:(suc:boolean)=>void, target) {
            wooolsdk.addDesktopReward(function(data) {
                if (data == null || data.code != 0) {
                    if (cb)
                        cb.call(target, false);
                    return;
                }
                if (cb)
                    cb.call(target, true);
            }, pos);
        }

        /** 通过桌面分享 */
        desktopShare(url:string, cb:(suc:boolean)=>void, target) {
            wooolsdk.friendShare(url, function(data) {
                if (data == null || data.code != 0) {
                    if (cb)
                        cb.call(target, false);
                    return;
                }
                if (cb)
                    cb.call(target, true);
            });
        }
        
        //是否添加桌面成功
        /*
        isSendToDesktopSucc(cb,target){
            wooolsdk.queryDesktopState(function (data)
            {
                if (!data) {
                    cb.call(target, false, 0,0);
                    return;
                }
                
                if (data["code"] != 0) {
                    cb.call(target, false, 0,0);
                    return;
                }
                
                var fav = data["data"] ? data["data"]["isfav"] : 0;
                var st = data["data"] ? data["data"]["showType"] : 0;
                cb.call(target, true, fav,st);
            });
            }
        */

        //添加桌面
        /*
        sendToDesktop(option, cb, target){
            var self = this;
            wooolsdk.addDesktop(function (data)
            {
                // {"code":0, "message":"", "showMessage":' 绑定成功', "data":{}}
                // {"code":-1, "message":"", "showMessage":' 取消绑定', "data":{}};
                if(!data) cb.call(target,false);
                if(data["code"]==0)
                    cb.call(target,true);
                else
                    cb.call(target,false);
            });
        }
        */

        footmark(action:string, data:{}) {
            var srvid = gd.userCtrl.get(gc.dsConsts.UserEntity.serverIndexId);
            var srvinfo = gd.serverInfoCtrl.getServerInfoById(srvid);
            var baseData = {
                "game_key": getGameKey(),
                "open_id": gd.accountCtrl.get(gc.dsConsts.AccountEntity.sdkData).open_id,
                "role": gd.userCtrl.getId(),
                "nickname": gd.userCtrl.getName(),
                "area": srvid,
                "group": srvid
            };

            this.hGame.gameReport(action, baseData, data, null);
        }

        channel():string {
            var d = this.hGame.getPlatform();
            return d.code == 0 ? d.data.platform : '';
        }
        
        homeUrl():string {
            var d = this.hGame.getWebUrl();
            return d.code == 0 ? d.data.url : '';
        }

        loadingProgress(val:number) {
            this.hGame.loadingProgress(val);
        }

        onChannelReay(cb, ctx?){
            var self = this;
            if(self._channelReady){
                cb.call(ctx);
            }else{
                self._onChannelReadyCb = cb;
                self._onChannelReadyCbtx = ctx;
            }
        }

        getHdpuProperty(key):string{
            var win:any = window;
            var hdp:any = win.hdParameters;
            if(hdp && hdp.hdpu){
                var pars = hdp.hdpu.split('|');
                for(var i=0;i<pars.length;i++){
                    var item = pars[i];
                    var i_arr = item.split(':');
                    if(!i_arr || i_arr.length < 2)
                        continue;
                    if(i_arr[0] == key)
                    return i_arr[1];
                }
            }
            return "";
        }

        getGameSetting(cb:(data)=>void){
            wooolsdk.queryGameSetting(cb);
        }
    }

    mo_channel.registerChannel(Channel10005);
}
