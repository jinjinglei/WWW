module g_channel {

    /**
     * Egret联运
     */
    export class Channel10001 extends BaseSDKChannel {
        static CHANNEL_ID:number = 10001;

        defaultUI = false;
        appId= 249;

        _pollingInvId;
        _pollingIndex=0;
        id;

        isValidPay = true;
        _isRestoredPayment = false; //是否检查过未完成的支付

        supportCheck(){
            var self = this;
            async.series([
                function(cb1){
                    nest.share.isSupport(function(data){
                        self.isValidShare = data.share == 1;
                        cb1();
                    });
                },
                function(cb1){
                    nest.app.isSupport(function(data){
                        mo.log("---->nest.app.isSupport: " + JSON.stringify(data));
                        self.isValidAttention = data.attention == 1;
                        self.isValidSendToDesktop = data.sendToDesktop == 1;
                        cb1();
                    });
                },
                function(cb1){
                    nest.app.isSupport(function(data){
                        mo.log("---->nest.app.isSupport: " + JSON.stringify(data));
                        self.isValidAttention = data.attention == 1;
                        self.isValidSendToDesktop = data.sendToDesktop == 1;
                        cb1();
                    });
                },
                function(cb1){
                    //todo social还没有支持
//                  nest.social.isSupport(function(data){
//                      self.isValidSocial = data.social == 1;
//                      cb1();
//                  });
                    cb1();
                }
            ], function(err){
                mo.log("---->nest.app.isSupport check completly");
            });
        }

        afterLogin(option?){
            var self = this;
            self.isLogout = false;
            self._sdkData = [option.token];
            self.name = option.name;
            self.supportCheck();
        }

        validateToken(token):boolean{
            var self = this;
            return token.status != -1;
        }

        checkLogin(cb, cbTarget, option?){
            var self = this;
            var loginInfo:nest.user.LoginInfo = {};
            self.loginOpt =  option || loginInfo;

            if(self.isLogout) {
                cb.call(cbTarget, false);
                if(self._isAutoPopLogin){
                    self.login(cb, cbTarget, option);
                }
            }else{
                nest.user.checkLogin(self.loginOpt, function(tokenObj){
                    if(!self.validateToken(tokenObj)){
                        cb.call(cbTarget, false);
                        if(self._isAutoPopLogin){
                            self.login(cb, cbTarget, option);
                        }
                    }else{
                        self.afterLogin(tokenObj);
                        cb.call(cbTarget, true);
                    }
                });
            }
        }

        login (cb, cbTarget, option?){
            var self = this;
            var loginInfo:nest.user.LoginInfo = {};
            self.loginOpt =  option || loginInfo;

            nest.user.login(self.loginOpt, function(tokenObj1){
                if(self.validateToken(tokenObj1)){
                    self.afterLogin(tokenObj1);
                    cb.call(cbTarget, true);
                }else{
                    cb.call(cbTarget, false);
                }
            })
        }

        logout (cb, ctx){
            var self = this;
            self.stopPolling();
            self._isRestoredPayment = false;
            //nest.user.logout(self.loginOpt, function(tokenObj1){
            //    self.isLogout = true;
            //    if(cb) cb.call(ctx);
            //});
        }

        attention (){
            var self = this;
            var info = {};
            nest.app.attention(info,function(){});
        }

        stopPolling(){
            var self = this;
            if(self._pollingInvId){
                tm.clearInterval(self._pollingInvId);
                self._pollingInvId = null;
            }
        }

        /**
        * 开始轮询
        */

        startPolling (){
            var self = this;
            self._pollingIndex = 0;
            var arr = egret.project.payCheckFrq;//单位秒
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
                var pInfo:nest.iap.PayInfo = {
                    goodsId:goodsId,
                    goodsNumber:"1",
                    serverId:serverId,
                    ext:requestId
                };
                mo.log("--->pInfo: " + JSON.stringify(pInfo));
                nest.iap.pay(pInfo,function(){
                    mo.stopWaiting();
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

        share(option:nest.share.ShareInfo, cb, target){
            var self = this;
            var shareInfo:nest.share.ShareInfo = {
                title: option.title,
                description:  option.description,
                img_title:   option.img_title,
                img_url:   option.img_url,
                url:option.url
            };
            mo.log("---->shareInfo = "+ JSON.stringify(shareInfo));
            nest.share.share(shareInfo, function(data){
                mo.log("---->shareBack data = " + JSON.stringify(data));
                if(cb){
                    cb.call(target, data.result == 0);
                }
            });
        }

        sendToDesktop(option, cb, target){
            var self = this;
            nest.app.sendToDesktop(option, function(data){
                if(cb){
                    cb.call(target, data.result == 0);
                }
            });
        }
    }
}