/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class AccountCtrl extends mo.DataController {
        loginKey:any;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.AccountEntity;
        }

        //获取id
        getId(){
            if(!this._data) return 0;
            return this._data[gc.dsConsts.AccountEntity.id];
        }

        //获取状态
        getStatus(){
            if(!this._data) return 0;
            return this._data[gc.dsConsts.AccountEntity.status];
        }

        //获取sdk数据
        getSdkData(){
            if(!this._data) return {};
            return this._data[gc.dsConsts.AccountEntity.sdkData];
        }

        //判断是否游客
        isGuest(){
            var self = this;
            var sdkData = self.getSdkData();
            var isGuest = false;
/*            if(userCtrl.getData()&&userCtrl.getLvl()>50){
                isGuest = false;
            }else {
                if(sdkData["is_guest"]) isGuest = true;
            }*/

            if(sdkData["is_guest"]=="1") isGuest = true;
            
            return isGuest;
        }

        //获取登录的key
        getLoginKey(){
            return this.loginKey;
        }

        static login = function (name, pwd, channelId, cb, target) {
            var self = this;
            var argsObj = gc.iface.h_account_login_args, args = {};
            args[argsObj.name] = name;
            args[argsObj.pwd] = pwd;
            args[argsObj.channelId] = channelId;
            mo.requestWaiting4Http(gc.iface.h_account_login, args, function (data) {
                //ws.recordEvent("登陆成功的人数", 1);
                var accountData = data[gc.dsConsts.ExAccount.account];
                accountCtrl.loginKey = data[gc.dsConsts.ExAccount.loginKey];
                accountCtrl.init(accountData);
                if (cb) cb.call(target, accountData);
            });
        };

        static loginBySdk = function (channelId, sdkData, cb, target) {
            var self = this;
            var args = {};
            var argsKeys = gc.iface.h_account_loginBySdk_args;
            args[argsKeys.channelId] = channelId;
            args[argsKeys.sdkData] = sdkData;
            args[argsKeys.deviceId] = mo.getDeviceId();
            //注意了，同步账号比较特殊，需要调用的是request4Http接口
            mo.requestWaiting4Http(gc.iface.h_account_loginBySdk, args, function (data) {
                //ws.recordEvent("登陆成功的人数", 1);
                var accountData = data[gc.dsConsts.ExAccount.account];
                accountCtrl.loginKey = data[gc.dsConsts.ExAccount.loginKey];
                accountCtrl.init(accountData);
                if (cb) cb.call(target, accountData);
            });
        };

        //注册
        static registerAccount = function (name, pwd, channelId, cb, target) {
            var self = this;
            var argsObj = gc.iface.h_account_register_args, args = {};
            args[argsObj.name] = name;
            args[argsObj.pwd] = pwd;
            args[argsObj.channelId] = channelId;
            args[argsObj.deviceId] = mo.getDeviceId();
            mo.requestWaiting4Http(gc.iface.h_account_register, args, function (data) {
                //ws.recordEvent("注册帐号的人数", 1);
                var accountData = data[gc.dsConsts.ExAccount.account];
                accountCtrl.loginKey = data[gc.dsConsts.ExAccount.loginKey];
                accountCtrl.init(accountData);
                if (cb) cb.call(target, accountData);
            });
        }
    }
    export var accountCtrl:AccountCtrl = AccountCtrl.getInstance();
}
