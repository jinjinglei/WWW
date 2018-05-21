var egret;
(function (egret) {
    var project;
    (function (project) {
        /** 轮询间隔(秒) */
        project.payCheckFrq = [2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 5, 10, 20, 30, 60, 600, 1800, 3600];
        project.registerValueHandler(function (data) {
            project.setValue(data, "payCheckFrq");
        });
    })(project = egret.project || (egret.project = {}));
})(egret || (egret = {}));
var g_channel;
(function (g_channel) {
    logger.initLogger(g_channel, "g-channel");
    logger.setLvl("g-channel", 4);
    //注册支付配置
    function registerPayInfo(key, payInfoKey) {
        mo_channel.channelKeyMap[key] = payInfoKey;
    }
    g_channel.registerPayInfo = registerPayInfo;
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
    var BaseSDKChannel = (function (_super) {
        __extends(BaseSDKChannel, _super);
        function BaseSDKChannel() {
            _super.apply(this, arguments);
            this._isAutoPopLogin = true; //是否主动弹出Sdk登录界面
            this.isAutoLogin = false; //是否自动登录
            this.isValidShare = false;
            this.isValidAttention = false;
            this.isValidSendToDesktop = false;
            this.isLogout = false;
            this.isMultiAccount = false;
        }
        var d = __define,c=BaseSDKChannel,p=c.prototype;
        p.enterGame = function (cb, cbTarget) {
            var self = this;
            gd.AccountCtrl.loginBySdk(egret.project.channelId, self._sdkData, cb, cbTarget);
        };
        p.afterLogin = function (option) {
            mo.warn("afterLogin接口未实现");
        };
        p.afterLogout = function (cb, cbTarget) {
            if (cb)
                cb.call(cbTarget);
        };
        p.checkLogin = function (cb, cbtx, opt) {
            mo.warn("checkLogin接口未实现");
            if (cb)
                cb.call(cbtx);
        };
        p.login = function (cb, cbTarget, opt) {
            mo.warn("login接口未实现");
        };
        p.openBBS = function () {
            mo.warn("openBBS接口未实现");
        };
        p.validateToken = function (token) {
            mo.warn("validLoginData接口未实现");
            return false;
        };
        p.restorePayment = function () {
        };
        p.stopRestorePayment = function () {
        };
        //-----xhb
        p.bindMobile = function (cb, target) {
            cb.call(target, true);
        };
        p.isBindMobile = function (cb, target) {
            cb.call(target, false, false);
        };
        p.isShowShare = function (cb, target) {
            cb.call(target, false);
        };
        p.isSendToDesktopSucc = function (cb, target) {
            cb.call(target, false);
        };
        //增加定点日志
        p.addLog = function (action, userId) {
        };
        //hd { 提供通过wooolsdk控制的功能
        p.getDesktopInfo = function (pos, cb, target) {
            if (cb)
                cb.call(target, false, {});
        };
        p.setDesktopInfo = function (pos, cb, target) {
            if (cb)
                cb.call(target, false);
        };
        p.acquireDesktopReward = function (pos, cb, target) {
            if (cb)
                cb.call(target, false);
        };
        p.desktopShare = function (url, cb, target) {
            if (cb)
                cb.call(target, false);
        };
        // 记录数据点, action 是动作，data 是动作依赖的数据
        p.footmark = function (action, data) {
        };
        p.loadingProgress = function (val) {
        };
        //hd }
        // 获得渠道的标记
        p.channel = function () {
            return '';
        };
        // 获得老家的地址
        p.homeUrl = function () {
            return '';
        };
        //监听渠道SDK已经进入可以使用的状态
        p.onChannelReay = function (cb, ctx) {
            cb.call(ctx);
        };
        p.getHdpuProperty = function (key) { return ""; };
        //查询游戏设定
        p.getGameSetting = function (cb) {
            cb({});
        };
        ;
        return BaseSDKChannel;
    })(mo_channel.BaseChannel);
    g_channel.BaseSDKChannel = BaseSDKChannel;
    egret.registerClass(BaseSDKChannel,"g_channel.BaseSDKChannel");
})(g_channel || (g_channel = {}));

/**
 * 渠道列表
 */
var g_channel;
(function (g_channel) {
    g_channel.key = {
        /*==============runtime===============*/
        local: 99999 //本地测试的
        ,
        egretCommon: 10001 //Egret 联运
        ,
        qqBrowser: 10002 //Egret QQ浏览器
        ,
        liebao: 10003 //Egret 猎豹
        ,
        qqWan8Aos: 10004 //qq玩吧android
        ,
        xiaohuoban: 10005 //小伙伴
    };
    //
    /*==============注册支付配置===============*/
    g_channel.registerPayInfo(g_channel.key.local, gc.c_payInfo_99999);
    g_channel.registerPayInfo(g_channel.key.egretCommon, gc.c_payInfo_10001);
    g_channel.registerPayInfo(g_channel.key.qqBrowser, gc.c_payInfo_10001);
    g_channel.registerPayInfo(g_channel.key.liebao, gc.c_payInfo_10001);
    g_channel.registerPayInfo(g_channel.key.qqWan8Aos, gc.c_payInfo_10004);
    g_channel.registerPayInfo(g_channel.key.xiaohuoban, gc.c_payInfo_10001);
})(g_channel || (g_channel = {}));

var g_channel;
(function (g_channel) {
    /**
     * Egret联运
     */
    var Channel10001 = (function (_super) {
        __extends(Channel10001, _super);
        function Channel10001() {
            _super.apply(this, arguments);
            this.defaultUI = false;
            this.appId = 249;
            this._pollingIndex = 0;
            this.isValidPay = true;
            this._isRestoredPayment = false; //是否检查过未完成的支付
        }
        var d = __define,c=Channel10001,p=c.prototype;
        p.supportCheck = function () {
            var self = this;
            async.series([
                function (cb1) {
                    nest.share.isSupport(function (data) {
                        self.isValidShare = data.share == 1;
                        cb1();
                    });
                },
                function (cb1) {
                    nest.app.isSupport(function (data) {
                        mo.log("---->nest.app.isSupport: " + JSON.stringify(data));
                        self.isValidAttention = data.attention == 1;
                        self.isValidSendToDesktop = data.sendToDesktop == 1;
                        cb1();
                    });
                },
                function (cb1) {
                    nest.app.isSupport(function (data) {
                        mo.log("---->nest.app.isSupport: " + JSON.stringify(data));
                        self.isValidAttention = data.attention == 1;
                        self.isValidSendToDesktop = data.sendToDesktop == 1;
                        cb1();
                    });
                },
                function (cb1) {
                    //todo social还没有支持
                    //                  nest.social.isSupport(function(data){
                    //                      self.isValidSocial = data.social == 1;
                    //                      cb1();
                    //                  });
                    cb1();
                }
            ], function (err) {
                mo.log("---->nest.app.isSupport check completly");
            });
        };
        p.afterLogin = function (option) {
            var self = this;
            self.isLogout = false;
            self._sdkData = [option.token];
            self.name = option.name;
            self.supportCheck();
        };
        p.validateToken = function (token) {
            var self = this;
            return token.status != -1;
        };
        p.checkLogin = function (cb, cbTarget, option) {
            var self = this;
            var loginInfo = {};
            self.loginOpt = option || loginInfo;
            if (self.isLogout) {
                cb.call(cbTarget, false);
                if (self._isAutoPopLogin) {
                    self.login(cb, cbTarget, option);
                }
            }
            else {
                nest.user.checkLogin(self.loginOpt, function (tokenObj) {
                    if (!self.validateToken(tokenObj)) {
                        cb.call(cbTarget, false);
                        if (self._isAutoPopLogin) {
                            self.login(cb, cbTarget, option);
                        }
                    }
                    else {
                        self.afterLogin(tokenObj);
                        cb.call(cbTarget, true);
                    }
                });
            }
        };
        p.login = function (cb, cbTarget, option) {
            var self = this;
            var loginInfo = {};
            self.loginOpt = option || loginInfo;
            nest.user.login(self.loginOpt, function (tokenObj1) {
                if (self.validateToken(tokenObj1)) {
                    self.afterLogin(tokenObj1);
                    cb.call(cbTarget, true);
                }
                else {
                    cb.call(cbTarget, false);
                }
            });
        };
        p.logout = function (cb, ctx) {
            var self = this;
            self.stopPolling();
            self._isRestoredPayment = false;
            //nest.user.logout(self.loginOpt, function(tokenObj1){
            //    self.isLogout = true;
            //    if(cb) cb.call(ctx);
            //});
        };
        p.attention = function () {
            var self = this;
            var info = {};
            nest.app.attention(info, function () { });
        };
        p.stopPolling = function () {
            var self = this;
            if (self._pollingInvId) {
                tm.clearInterval(self._pollingInvId);
                self._pollingInvId = null;
            }
        };
        /**
        * 开始轮询
        */
        p.startPolling = function () {
            var self = this;
            self._pollingIndex = 0;
            var arr = egret.project.payCheckFrq; //单位秒
            if (self._pollingInvId)
                tm.clearInterval(self._pollingInvId);
            var poolFunc = function () {
                if (self._pollingInvId)
                    tm.clearInterval(self._pollingInvId);
                if (!arr[self._pollingIndex]) {
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
                mo.log("start interval arr[%s] = %s", self._pollingIndex, arr[self._pollingIndex]);
            };
            poolFunc(); //开始轮询
        };
        /**
         * 支付
         * @param rechargeId 支付的id
         * @param goodsId 渠道物品id
         * @param cb
         * @param target*/
        p.pay = function (rechargeId, goodsId, cb, target) {
            var self = this;
            mo.playWaiting();
            tm.setTimeout4Tick(function () {
                mo.stopWaiting();
            }, 2000);
            gd.rechargeCtrl.getRequest(rechargeId, goodsId, function (data) {
                var requestId = data[0];
                var serverId = data[1];
                var pInfo = {
                    goodsId: goodsId,
                    goodsNumber: "1",
                    serverId: serverId,
                    ext: requestId
                };
                mo.log("--->pInfo: " + JSON.stringify(pInfo));
                nest.iap.pay(pInfo, function () {
                    mo.stopWaiting();
                });
                self.startPolling(); //开始轮询
            }, self);
        };
        /**
         * 恢复支付结果，用于第一次登录到主城时检查*/
        p.restorePayment = function () {
            var self = this;
            if (!self._isRestoredPayment) {
                self.startPolling();
            }
        };
        p.stopRestorePayment = function () {
            var self = this;
            self.stopPolling();
        };
        /**
         * 分享
         * @param option
         * @param cb
         * @param target
         * @callback-param result 0 表示分享成功，-1表示用户取消*/
        p.share = function (option, cb, target) {
            var self = this;
            var shareInfo = {
                title: option.title,
                description: option.description,
                img_title: option.img_title,
                img_url: option.img_url,
                url: option.url
            };
            mo.log("---->shareInfo = " + JSON.stringify(shareInfo));
            nest.share.share(shareInfo, function (data) {
                mo.log("---->shareBack data = " + JSON.stringify(data));
                if (cb) {
                    cb.call(target, data.result == 0);
                }
            });
        };
        p.sendToDesktop = function (option, cb, target) {
            var self = this;
            nest.app.sendToDesktop(option, function (data) {
                if (cb) {
                    cb.call(target, data.result == 0);
                }
            });
        };
        Channel10001.CHANNEL_ID = 10001;
        return Channel10001;
    })(g_channel.BaseSDKChannel);
    g_channel.Channel10001 = Channel10001;
    egret.registerClass(Channel10001,"g_channel.Channel10001");
})(g_channel || (g_channel = {}));

var g_channel;
(function (g_channel) {
    /**
     * QQ浏览器
     */
    var Channel10002 = (function (_super) {
        __extends(Channel10002, _super);
        function Channel10002() {
            _super.apply(this, arguments);
            this.isMultiAccount = true;
            this._isAutoPopLogin = false;
        }
        var d = __define,c=Channel10002,p=c.prototype;
        p.validateToken = function (token) {
            var self = this;
            return token.token != null;
        };
        p.getLoginOpt = function () {
            return {
                "loginType": mo.getLocalStorageItem("loginType", true)
            };
        };
        p.openBBS = function () {
            nest.social.openBBS({}, function () { });
        };
        return Channel10002;
    })(g_channel.Channel10001);
    g_channel.Channel10002 = Channel10002;
    egret.registerClass(Channel10002,"g_channel.Channel10002");
})(g_channel || (g_channel = {}));

var g_channel;
(function (g_channel) {
    /**
     *
     */
    var Channel10003 = (function (_super) {
        __extends(Channel10003, _super);
        function Channel10003() {
            _super.apply(this, arguments);
            this.isValidSendToDesktop = true;
        }
        var d = __define,c=Channel10003,p=c.prototype;
        return Channel10003;
    })(g_channel.Channel10001);
    g_channel.Channel10003 = Channel10003;
    egret.registerClass(Channel10003,"g_channel.Channel10003");
})(g_channel || (g_channel = {}));

var g_channel;
(function (g_channel) {
    /**
     * QQwan8
     */
    var Channel10004 = (function (_super) {
        __extends(Channel10004, _super);
        function Channel10004() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Channel10004,p=c.prototype;
        p.login = function (cb, cbTarget, option) {
            var self = this, loginInfo = { loginType: "qq" };
            _super.prototype.login.call(this, cb, cbTarget, loginInfo);
        };
        return Channel10004;
    })(g_channel.Channel10001);
    g_channel.Channel10004 = Channel10004;
    egret.registerClass(Channel10004,"g_channel.Channel10004");
})(g_channel || (g_channel = {}));

var g_channel;
(function (g_channel) {
    (function (WooolSdkDesktopShowType) {
        WooolSdkDesktopShowType[WooolSdkDesktopShowType["WeiDuan"] = 0] = "WeiDuan";
        WooolSdkDesktopShowType[WooolSdkDesktopShowType["FenXiang"] = 1] = "FenXiang";
        WooolSdkDesktopShowType[WooolSdkDesktopShowType["GuangZhu"] = 2] = "GuangZhu";
        WooolSdkDesktopShowType[WooolSdkDesktopShowType["XiongDi"] = 3] = "XiongDi";
    })(g_channel.WooolSdkDesktopShowType || (g_channel.WooolSdkDesktopShowType = {}));
    var WooolSdkDesktopShowType = g_channel.WooolSdkDesktopShowType;
    ;
    (function (WooolSdkDesktopPosition) {
        WooolSdkDesktopPosition[WooolSdkDesktopPosition["Fight"] = 0] = "Fight";
        WooolSdkDesktopPosition[WooolSdkDesktopPosition["Home"] = 1] = "Home";
    })(g_channel.WooolSdkDesktopPosition || (g_channel.WooolSdkDesktopPosition = {}));
    var WooolSdkDesktopPosition = g_channel.WooolSdkDesktopPosition;
    ;
    ;
    function formatUrl(url) {
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
    g_channel.formatUrl = formatUrl;
    function getGameKey(url) {
        if (url === void 0) { url = location.href; }
        //var res = url.match(/game_key=(\w+)/);
        //return res ? res[1] : '';
        return "50f9bc36643e738e";
    }
    g_channel.getGameKey = getGameKey;
    /**
     * Egret联运
     */
    var Channel10005 = (function (_super) {
        __extends(Channel10005, _super);
        function Channel10005() {
            _super.apply(this, arguments);
            this.isAutoLogin = true;
            this._pollingIndex = 0;
            this._isRestoredPayment = false; //是否检查过未完成的支付
            this._channelReady = false;
        }
        var d = __define,c=Channel10005,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this, clazz = self.__class;
            _super.prototype._initProp.call(this);
            self.urlData = formatUrl();
            self.hGame = new hGame(self.urlData);
            self.hGame.ready(function () {
                g_channel.debug("--->hGame onReady!");
                self._channelReady = true;
                self._onChannelReadyCb.call(self._onChannelReadyCbtx);
            });
            self._logActions = [];
        };
        p.afterLogin = function (option) {
            var self = this;
            self.isLogout = false;
            self._sdkData = [option.token];
            self.name = option.name;
        };
        p.validateToken = function (token) {
            var self = this;
            return true;
        };
        p.checkLogin = function (cb, cbTarget, option) {
            var self = this;
            cb.call(cbTarget, false);
        };
        p.login = function (cb, cbTarget, option) {
            var self = this;
            var loginInfo = {};
            self.loginOpt = option || loginInfo;
            var ticket = self.urlData["ticket"];
            var login_type = self.urlData["login_type"];
            gd.AccountCtrl.loginBySdk(self.__class.CHANNEL_ID, [ticket, login_type], function (data) {
                cb.call(cbTarget, true);
            }, self);
        };
        p.logout = function (cb, ctx) {
            //var self = this;
            //self.stopPolling();
            //self._isRestoredPayment = false;
            //cb.call(ctx);
            this.hGame.logout();
        };
        p.stopPolling = function () {
            var self = this;
            if (self._pollingInvId) {
                tm.clearInterval(self._pollingInvId);
                self._pollingInvId = null;
            }
        };
        d(p, "isMultiAccount"
            ,function () {
                var ch = this.channel();
                if (ch == 'qqbrowser' ||
                    ch == 'x4399')
                    return true;
                return false;
            }
        );
        /**
        * 开始轮询
        */
        p.startPolling = function () {
            var self = this;
            self._pollingIndex = 0;
            var arr = egret.project.payCheckFrq; //单位秒
            if (self._pollingInvId)
                tm.clearInterval(self._pollingInvId);
            var poolFunc = function () {
                if (self._pollingInvId)
                    tm.clearInterval(self._pollingInvId);
                if (!arr[self._pollingIndex]) {
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
                mo.log("start interval arr[%s] = %s", self._pollingIndex, arr[self._pollingIndex]);
            };
            poolFunc(); //开始轮询
        };
        /**
         * 支付
         * @param rechargeId 支付的id
         * @param goodsId 渠道物品id
         * @param cb
         * @param target*/
        p.pay = function (rechargeId, goodsId, cb, target) {
            var self = this;
            mo.playWaiting();
            tm.setTimeout4Tick(function () {
                mo.stopWaiting();
            }, 2000);
            gd.rechargeCtrl.getRequest(rechargeId, goodsId, function (data) {
                var requestId = data[0];
                var serverId = data[1];
                var payData = data[2];
                var payType = "alipay_wap";
                g_channel.debug(payData, payType);
                self.hGame.pay(payData, payType, function (result) {
                    if (result.code == 0) {
                        mo.stopWaiting();
                    }
                    // 显示支付的返回信息
                    g_base.BaseShowMsg.create().setData({ msg: result.showMessage }).show();
                });
                self.startPolling(); //开始轮询
            }, self);
        };
        /**
         * 恢复支付结果，用于第一次登录到主城时检查*/
        p.restorePayment = function () {
            var self = this;
            if (!self._isRestoredPayment) {
                self.startPolling();
            }
        };
        p.stopRestorePayment = function () {
            var self = this;
            self.stopPolling();
        };
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
        p.isBindMobile = function (cb, target) {
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba') {
                return cb.call(target, false, false);
            }
            wooolsdk.queryBindState(function (ret) {
                // {"code":0, "data":{bindflag:0未绑定/1已绑定}}
                // {"code":-1} 不显示这个功能
                if (!ret)
                    cb.call(target, false, false);
                console.log("ret", JSON.stringify(ret));
                if (ret["code"] == 0)
                    cb.call(target, true, ret.data["bindflag"] == 1);
                else
                    cb.call(target, false, false);
            });
        };
        //绑定手机
        p.bindMobile = function (cb, target) {
            gd.userCtrl.getBindPhoneUrl(function (url) {
                wooolsdk.bindMobile(function (ret) {
                    console.log("bind_back:", JSON.stringify(ret));
                    // {"code":0, "data":{bindflag:0未绑定/1已绑定}}
                    if (!ret)
                        cb.call(target, false);
                    cb.call(target, ret.data["bindflag"] == 1);
                }, url);
            }, this);
        };
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
        p.getDesktopInfo = function (pos, cb, target) {
            wooolsdk.queryDesktopState(function (data) {
                if (data == null || data.code != 0) {
                    if (cb)
                        cb.call(target, false, {});
                    return;
                }
                if (cb)
                    cb.call(target, true, data.data ? data.data : {});
            }, pos);
        };
        /** 调用桌面提供的功能 */
        p.setDesktopInfo = function (pos, cb, target) {
            wooolsdk.addDesktop(function (data) {
                if (data == null || data.code != 0) {
                    if (cb)
                        cb.call(target, false);
                    return;
                }
                if (cb)
                    cb.call(target, true);
            }, pos);
        };
        /** 获取桌面的奖励 */
        p.acquireDesktopReward = function (pos, cb, target) {
            wooolsdk.addDesktopReward(function (data) {
                if (data == null || data.code != 0) {
                    if (cb)
                        cb.call(target, false);
                    return;
                }
                if (cb)
                    cb.call(target, true);
            }, pos);
        };
        /** 通过桌面分享 */
        p.desktopShare = function (url, cb, target) {
            wooolsdk.friendShare(url, function (data) {
                if (data == null || data.code != 0) {
                    if (cb)
                        cb.call(target, false);
                    return;
                }
                if (cb)
                    cb.call(target, true);
            });
        };
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
        p.footmark = function (action, data) {
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
        };
        p.channel = function () {
            var d = this.hGame.getPlatform();
            return d.code == 0 ? d.data.platform : '';
        };
        p.homeUrl = function () {
            var d = this.hGame.getWebUrl();
            return d.code == 0 ? d.data.url : '';
        };
        p.loadingProgress = function (val) {
            this.hGame.loadingProgress(val);
        };
        p.onChannelReay = function (cb, ctx) {
            var self = this;
            if (self._channelReady) {
                cb.call(ctx);
            }
            else {
                self._onChannelReadyCb = cb;
                self._onChannelReadyCbtx = ctx;
            }
        };
        p.getHdpuProperty = function (key) {
            var win = window;
            var hdp = win.hdParameters;
            if (hdp && hdp.hdpu) {
                var pars = hdp.hdpu.split('|');
                for (var i = 0; i < pars.length; i++) {
                    var item = pars[i];
                    var i_arr = item.split(':');
                    if (!i_arr || i_arr.length < 2)
                        continue;
                    if (i_arr[0] == key)
                        return i_arr[1];
                }
            }
            return "";
        };
        p.getGameSetting = function (cb) {
            wooolsdk.queryGameSetting(cb);
        };
        Channel10005.CHANNEL_ID = 10005;
        return Channel10005;
    })(g_channel.BaseSDKChannel);
    g_channel.Channel10005 = Channel10005;
    egret.registerClass(Channel10005,"g_channel.Channel10005");
    mo_channel.registerChannel(Channel10005);
})(g_channel || (g_channel = {}));

