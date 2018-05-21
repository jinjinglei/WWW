module egret.project{
    /** 轮询间隔(秒) */
    export var payCheckFrq:number[] = [2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 5, 10, 20, 30, 60, 600, 1800, 3600];
    project.registerValueHandler(function(data){
        project.setValue(data, "payCheckFrq");
    });
}

module g_channel {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_channel, "g-channel");
    logger.setLvl("g-channel", 4);

    //注册支付配置
    export function registerPayInfo(key, payInfoKey){
        mo_channel.channelKeyMap[key] = payInfoKey;
    }

    ///**
    // * Channel的基类
    // */
    //export class BaseChannel extends mo.Class{
    //    defaultUI:boolean = false;
    //    name = "";
    //    loginOpt;
    //    isLogout:boolean = false;
    //
    //    isValidPay = false; //是否开启支付
    //    isValidShare = false; // 开启社交分享
    //    isValidSocial = false; //是否能获取好友列表
    //    isValidSendToDesktop = false; //是否能推送桌面图标
    //    isValidAttention = false; //是否能关注公众号
    //    isMultiAccount = false; //是否是多账号
    //
    //    cb;
    //    cbTarget;
    //    init(){
    //        super.init.apply(this, arguments);
    //        //todo
    //    }
    //
    //    enterGame(cb, cbTarget){
    //        mo.warn("enterGame接口未实现");
    //    }
    //
    //    login(cb, cbTarget, option?){
    //        mo.warn("login接口未实现");
    //    }
    //
    //    afterLogin(option?){
    //        mo.warn("afterLogin接口未实现");
    //    }
    //
    //    logout(cb, cbTarget){
    //        mo.warn("logout接口未实现");
    //    }
    //
    //    afterLogout(cb, cbTarget){
    //        mo.warn("afterLogout接口未实现");
    //    }
    //
    //    pay(rechargeId, channelPayId, cb, target){
    //        mo.warn("pay接口未实现");
    //    }
    //
    //    restorePayment(){
    //        mo.warn("restorePayment接口未实现");
    //    }
    //
    //    stopRestorePayment(){
    //        mo.warn("stopRestorePayment接口未实现");
    //    }
    //
    //    share(option, cb, target){
    //        mo.warn("share接口未实现");
    //    }
    //
    //    social(option, cb, target){
    //        mo.warn("social接口未实现");
    //    }
    //
    //    sendToDesktop(option, cb, target){
    //        mo.warn("sendToDesktop接口未实现，默认返回成功！");
    //        cb.call(target, true);
    //    }
    //
    //    attention(option, cb, target){
    //        mo.warn("attention接口未实现");
    //    }
    //
    //    getLoginOpt(){
    //        return this.loginOpt;
    //    }
    //
    //    openBBS(){
    //        mo.warn("openBBS接口未实现");
    //    }
    //
    //    checkLogin(cb, cbtx, opt?){
    //        mo.warn("checkLogin接口未实现");
    //        if(cb) cb.call(cbtx);
    //    }
    //
    //}

    export class BaseSDKChannel extends mo_channel.BaseChannel{
        _sdkData;
        _isAutoPopLogin:boolean = true; //是否主动弹出Sdk登录界面
        isAutoLogin:boolean = false; //是否自动登录
        isValidShare:boolean = false;
        isValidAttention:boolean = false;
        isValidSendToDesktop:boolean = false;
        isLogout:boolean = false;
        isMultiAccount:boolean = false;

        enterGame (cb, cbTarget){
            var self = this;
            gd.AccountCtrl.loginBySdk(egret.project.channelId, self._sdkData, cb, cbTarget);
        }

        afterLogin(option?){
            mo.warn("afterLogin接口未实现");
        }

        afterLogout(cb, cbTarget){
            if(cb) cb.call(cbTarget);
        }

        checkLogin(cb, cbtx, opt?){
            mo.warn("checkLogin接口未实现");
            if(cb) cb.call(cbtx);
        }

        login(cb:Function, cbTarget?:any, opt?){
            mo.warn("login接口未实现");
        }

        openBBS(){
            mo.warn("openBBS接口未实现");
        }

        validateToken(token):boolean{
            mo.warn("validLoginData接口未实现");
            return false;
        }

        restorePayment(){

        }

        stopRestorePayment(){

        }

        //-----xhb
        bindMobile(cb, target){
            cb.call(target, true);
        }

        isBindMobile(cb:(isOpen:boolean, isBind:boolean)=>void,target){
            cb.call(target, false, false);
        }

        isShowShare(cb,target){
            cb.call(target, false);
        }

        isSendToDesktopSucc(cb,target){
            cb.call(target, false);
        }
        //增加定点日志
        addLog(action,userId){

        }

        //hd { 提供通过wooolsdk控制的功能
        getDesktopInfo(pos:WooolSdkDesktopPosition, cb:(suc:boolean, data:WooolSdkDesktopResult)=>void, target) {
            if (cb)
                cb.call(target, false, {});
        }

        setDesktopInfo(pos:WooolSdkDesktopPosition, cb:(suc:boolean)=>void, target) {
            if (cb)
                cb.call(target, false);
        }

        acquireDesktopReward(pos:WooolSdkDesktopPosition, cb:(suc:boolean)=>void, target) {
            if (cb)
                cb.call(target, false);
        }

        desktopShare(url:string, cb:(suc:boolean)=>void, target) {
            if (cb)
                cb.call(target, false);
        }
        
        // 记录数据点, action 是动作，data 是动作依赖的数据
        footmark(action:string, data:{}) {            
        }

        loadingProgress(val:number) {
        }

        //hd }

        // 获得渠道的标记
        channel():string {
            return '';
        }

        // 获得老家的地址
        homeUrl():string {
            return '';
        }

        //监听渠道SDK已经进入可以使用的状态
        onChannelReay(cb, ctx?){
            cb.call(ctx);
        }

        getHdpuProperty(key):string{return "";}

        //查询游戏设定
        getGameSetting(cb:(data)=>void){
            cb({});
        };
    }
}
