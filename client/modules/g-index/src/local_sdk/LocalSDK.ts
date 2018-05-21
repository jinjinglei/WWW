/**
 * Created by SmallAiTT on 2015/7/21.
 */
module g_index{
    export class LocalSDK extends egret.Emitter{
        /*********************** LocalChannel的相关实现 开始 ***********************/
        isRememberPwd:boolean = true;
        _localLoginCb;
        _localLoginCtx;

        quickLoginLocal(cb:Function, ctx?:any){
            var self = this;
            //var argsObj = uw.iface.h_account_autoRegister_args, args = {};
            //args[argsObj.deviceId] = mo.getDeviceId();
            //args[argsObj.channelId] = egret.project.channelId;
            //mo.requestWaiting4Http(uw.iface.h_account_autoRegister, args, function(data){
            //    localSdk.saveUserAndPwd(data);
            //    cb.call(ctx);
            //}, self);
        }

        saveUserAndPwd(data){
            if (this.isRememberPwd) {
                //记住已经登陆过了和用户密码
                var strUser = data.name;
                var strPwd = data.pwd;

                mo.setLocalStorageItem(gc.Keys.logined, true, true);
                mo.setLocalStorageItem(gc.Keys.accountName, strUser, true);
                mo.setLocalStorageItem(gc.Keys.password, strPwd, true);
            }
        }

        checkLocal(cb, cbTarget, opt?){
            var self = this;
            var logined = mo.getLocalStorageItem(gc.Keys.logined, true);
            var userName = mo.getLocalStorageItem(gc.Keys.accountName, true);
            var pwd = mo.getLocalStorageItem(gc.Keys.password, true);
            if (logined && (userName!=null && pwd !=null)) {
                gd.AccountCtrl.login(userName, pwd, egret.project.channelId, function(data){
                    cb.call(cbTarget, true);
                }, self);
            }
            else {
                cb.call(cbTarget);
            }
        }

        loginLocal(userName:string, pwd:string, cb:Function, ctx?:any){
            var self  = this;
            if (userName == null || userName == "" || pwd == null || pwd == "") {
                mo.showMsg(gc.id_c_msgCode.loginNotNull);
            }
            else{
                gd.AccountCtrl.login(userName, pwd, egret.project.channelId, function(data){
                    localSdk.saveUserAndPwd({name:userName, pwd: pwd});
                    cb.call(ctx);
                    if(self._localLoginCb) self._localLoginCb.call(self._localLoginCtx, true);
                }, self);
            }
        }

        popLoginLocal(cb, ctx, opt?){
            var self  = this;
            IndexLogin.create().show();
            self._localLoginCb = cb;
            self._localLoginCtx = ctx;
        }

        registerLocal(userName:string, pwd1:string, pwd2:string, cb:Function, ctx?:any){
            var self = this;
            if (userName == null || pwd1 == null || pwd2 == null || userName == "" || pwd1 == "" || pwd2 == "") {
                mo.showMsg(gc.id_c_msgCode.loginNotNull);
            }
            else if (userName.length < 6 || userName.length >12){
                mo.showMsg(gc.id_c_msgCode.accountLengthNotCorrect);
            }
            else if (pwd1.length < 6 || pwd1.length >12){
                mo.showMsg(gc.id_c_msgCode.pwdLengthNotCorrect);
            }
            else if (pwd1 !== pwd2) {
                mo.showMsg(gc.id_c_msgCode.pwdNotSame);
            }
            else{
                //注册
                gd.AccountCtrl.registerAccount(userName, pwd1, egret.project.channelId, function(){
                    localSdk.saveUserAndPwd({name:userName, pwd: pwd1});
                    if(cb) cb.call(ctx);
                    if(self._localLoginCb) self._localLoginCb.call(self._localLoginCtx, true);
                }, this);
            }
        }
        /*********************** LocalChannel的相关实现 结束 ***********************/
    }

    export var localSdk:LocalSDK = new LocalSDK();
}