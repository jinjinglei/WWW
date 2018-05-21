/**
 * Created by SmallAiTT on 2015/5/8.
 */
module g_index{

    export class LocalChannel extends g_channel.BaseSDKChannel{
        static CHANNEL_ID:number = 99999;

        isAutoLogin = true;
        isRememberPwd:boolean;
        isMultiAccount = true;

        //@override
        _initProp():void{
            super._initProp();
            var self = this;
            self.defaultUI = true;
            self.isValidIAP = true;
            self.isRememberPwd = true;
        }

        //@override
        checkLogin(cb, ctx?, opt?){
            localSdk.checkLocal(cb, ctx, opt);
        }


        //@override
        login (cb:Function, cbTarget?:any, opt?){
            var self = this;
            g_base.loginCtrl.clearRequestTimeOut();
            localSdk.popLoginLocal(function(succ){
                cb.call(cbTarget, succ);
            }, self, opt);
        }

        //@override
        logout (cb:Function, cbTarget?:any){
            var self = this;
            mo.removeLocalStorageItem(gc.Keys.logined, true);
            cb.call(cbTarget);
            //todo 临时h5刷新
            if(window.parent){
                window.parent.location.reload();
            }else{
                location.reload();
            }
        }

        //@override
        enterGame (cb:Function, cbTarget?:any){
            var self = this;
        }

        //@override
        pay (rechargeId, channelPayId, cb, target){
            //var args = {};
            //var argsKey = uw.iface.a_recharge_recharge_args;
            //args[argsKey.rechargeId] = channelPayId;
            //args[argsKey.receiptData] = null;
            //args[argsKey.channel] = egret.project.channelId;
            //
            //mo.request4Http(uw.iface.a_recharge_recharge, args, cb, target);
        }
    }

    mo_channel.registerChannel(LocalChannel);
}