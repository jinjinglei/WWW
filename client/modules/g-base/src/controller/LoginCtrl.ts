/**
 * Created by SmallAiTT on 2015/7/21.
 */
module g_base{
    export class LoginCtrl extends egret.Emitter{

        static ON_LOGIN_SUCC:string = "on_login_succ";
        static ON_LOGIN_FAIL:string = "on_login_fail";

        // n秒后没有收到登录信息认为是超时
        _timerId;
        _isLoginSucc;

        isLogout:boolean = false;
        isAutoLogin:boolean = false;
        loginOpt;

        //@override
        _initProp(){
            super._initProp();
            var self = this;
            self._isLoginSucc = false;
        }

        //检查渠道是否已经登录了
        loginChannel(loginInfo?){
            var self = this;
            self.loginOpt = loginInfo;
            var channel = mo_channel.getCurChannel();
            self.requestTimeOut();
            if(self.isLogout){
                channel.login(self.responseCb, self, self.loginOpt);
            }else{
                channel.checkLogin(self.checkLoginCb, self, loginInfo);
            }
        }

        changeAccount(){
            var self = this;
            self.isLogout = true;
            self._isLoginSucc = false;
            var channel = mo_channel.getCurChannel();
            channel.logout(function(){
                self.loginChannel(null);
            }, self);
        }

        checkLoginCb(succ){
            var self = this;
            var channel = mo_channel.getCurChannel();
            self.clearRequestTimeOut();
            if(succ){
                self.onLoginSucc();
                mo.stopWaiting();
            }else{
                if(channel.isAutoLogin){
                    self.requestTimeOut();
                    channel.login(self.responseCb, self, self.loginOpt);
                }else{
                    self.onLoginFail();
                    mo.stopWaiting();
                }
            }
        }

        requestTimeOut(){
            var self = this;
            mo.playWaiting();
            if(self._timerId == null){
                self._timerId = tm.setTimeout(function(){
                    self.clearRequestTimeOut();
                    self.onLoginFail();
                    mo.showErrMsg("请求超时了，请重新登录!",10);
                }, 80000);
            }
        }

        clearRequestTimeOut(){
            var self = this;
            if(self._timerId != null){
                mo.stopWaiting();
                tm.clearTimeout(self._timerId);
                self._timerId = null;
            }
        }

        //登录状态回调
        responseCb(isSucc){
            var self = this;
            if(self._isLoginSucc) return;
            self.clearRequestTimeOut();
            if(isSucc == true){
                self._isLoginSucc = true;
                self.onLoginSucc();
            }
            else {
                self.onLoginFail();
            }
            mo.stopWaiting();
        }

        onLoginSucc(){
            var self = this;
            self.emit(self.__class.ON_LOGIN_SUCC);
        }

        onLoginFail(){
            var self = this;
            self.emit(self.__class.ON_LOGIN_FAIL);
        }

        asyncAccount(loginInfo, cb){
            var self = this;
            mo.playWaiting();
            if(self._timerId == null){
                self._timerId = tm.setTimeout(function(){
                    self.clearRequestTimeOut();
                    mo.showErrMsg("请求超时了，请重新登录!",10);
                }, 80000);
            }

            var channel = mo_channel.getCurChannel();
            channel.login(function(succ){
                if(self._isLoginSucc) return;
                self.clearRequestTimeOut();
                self._isLoginSucc = !!succ;

                cb(succ);
            },self, loginInfo);
        }

        /**
         * 开始游戏
         */
        enterGame(isCreateRole:boolean){
            var self = this;
            g_cache.initGuideKeyCache();
            gd.UserCtrl.enterGame(function(data){
                if(!data){
                    //创角
                    g_base.CreateRole.create().setData({action: 0}).show();
                    g_cache.clearGuideKeyCache();
                }else{
                    mo.log("登陆成功！");
                    gd.activityCtrl.getInfo(function(){
                        //检查支付结果
                        var channel = mo_channel.getCurChannel();
                        channel.restorePayment();
                        //常在资源组
                        mo.R.moduleInfoMap['mapview'] = {};
                        //进入战斗
                        mo.moduleMgr.runModule(g_consts.moduleId.fight,null,function(){
                            var gift = mo_channel.getCurChannel().getHdpuProperty("GIFT");
                            if(gift && gift.length > 0){
                                gd.userCtrl.getWanbaGift(egret.Capabilities.os,gift,function(data){
                                    var code = data[gc.dsConsts.WanbaGift.code];
                                    if((data && code == 0) || (data && code== 1)) {
                                        WanbaGift.create().setData({type:code,giftId:gift,exData:isCreateRole}).show();
                                    }else{
                                        self.showNoticeOrFirstEnterGame(isCreateRole);
                                    }
                                },self);
                            }else{
                                self.showNoticeOrFirstEnterGame(isCreateRole);
                            }
                        });
                    });
                }
            }, self);
        }

        showNoticeOrFirstEnterGame(isCreateRole:boolean){
            var self = this;
            if(isCreateRole){
                mo.showMsg(gc.id_c_msgCode.firstEnterGame, {});
                mo.emitter.emit("logined");
            }else{
                gd.NoticeCtrl.getNewOne(function(data){
                    mo.showMsg(gc.id_c_msgCode.sysNotice, {sysNotice: data});
                    //在网络请求后通知引导启动
                    mo.emitter.emit("logined");
                },self);
            }
        }
    }

    export var loginCtrl:LoginCtrl = new LoginCtrl();
}
