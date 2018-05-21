/**
 * Created by SmallAiTT on 2015/5/8.
 */
var egret;
(function (egret) {
    var project;
    (function (project) {
        /** 渠道id，默认99999为开发模式 */
        project.channelId = 99999;
        project.registerValueHandler(function (data) {
            project.setValue(data, "channelId");
        });
    })(project = egret.project || (egret.project = {}));
})(egret || (egret = {}));
var mo_channel;
(function (mo_channel) {
    mo_channel.log;
    mo_channel.debug;
    mo_channel.info;
    mo_channel.warn;
    mo_channel.error;
    logger.initLogger(mo_channel, "mo-channel");
    logger.setLvl("mo-channel", 4);
    mo_channel.channelMap = {};
    mo_channel.channelKeyMap = {};
    mo_channel.curChannelInstance;
    function getCurChannel() {
        var channelId = egret.project.channelId;
        if (!mo_channel.curChannelInstance) {
            var ChannelClass = mo_channel.channelMap[channelId];
            if (!ChannelClass)
                return mo_channel.error("尚未注册channelId为【%s】的渠道，请检查！", channelId);
            mo_channel.curChannelInstance = new ChannelClass;
        }
        return mo_channel.curChannelInstance;
    }
    mo_channel.getCurChannel = getCurChannel;
    function registerChannel(ChannelClass) {
        mo_channel.channelMap[ChannelClass.CHANNEL_ID] = ChannelClass;
    }
    mo_channel.registerChannel = registerChannel;
    var BaseChannel = (function (_super) {
        __extends(BaseChannel, _super);
        function BaseChannel() {
            _super.apply(this, arguments);
            this.defaultUI = false;
            this.isValidIAP = false;
            this.isSNOpen = false; // 开启社交网络
            this.name = "";
        }
        var d = __define,c=BaseChannel,p=c.prototype;
        p.enterGame = function (cb, cbTarget) {
            mo_channel.warn("enterGame接口未实现");
        };
        p.checkLogin = function (cb, target) {
            mo_channel.warn("checkLogin接口未实现");
        };
        p.login = function (cb, cbTarget) {
            mo_channel.warn("login接口未实现");
        };
        p.logout = function (cb, cbTarget) {
            mo_channel.warn("logout接口未实现");
        };
        p.pay = function (rechargeId, channelPayId, cb, target) {
            mo_channel.warn("pay接口未实现");
        };
        p.share = function (option, cb, target) {
            mo_channel.warn("share接口未实现");
        };
        p.social = function (option, cb, target) {
            mo_channel.warn("social接口未实现");
        };
        p.sendToDesktop = function (option, cb, target) {
            mo_channel.warn("sendToDesktop接口未实现，默认返回成功！");
            cb.call(target, true);
        };
        p.attention = function (option, cb, target) {
            mo_channel.warn("attention接口未实现");
        };
        p.getLoginOpt = function () {
            return this.loginOpt;
        };
        return BaseChannel;
    })(mo.Class);
    mo_channel.BaseChannel = BaseChannel;
    egret.registerClass(BaseChannel,"mo_channel.BaseChannel");
})(mo_channel || (mo_channel = {}));

/**
 * Created by SmallAiTT on 2015/5/8.
 */
var mo_channel;
(function (mo_channel) {
    var BaseSDKChannel = (function (_super) {
        __extends(BaseSDKChannel, _super);
        function BaseSDKChannel() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BaseSDKChannel,p=c.prototype;
        p.enterGame = function (cb, cbTarget) {
            var self = this, clazz = self.__class;
            var args = {};
            args[clazz.REQ_KEY_CHANNEL_ID] = egret.project.channelId;
            args[clazz.REQ_KEY_SDK_DATA] = self._sdkData;
            args[clazz.REQ_KEY_DEVICE_ID] = mo.getDeviceId();
            //注意了，同步账号比较特殊，需要调用的是request4Pomelo接口
            mo.request4Pomelo(clazz.REQ_ENTER_BY_SDK, args, cb, cbTarget);
        };
        return BaseSDKChannel;
    })(mo_channel.BaseChannel);
    mo_channel.BaseSDKChannel = BaseSDKChannel;
    egret.registerClass(BaseSDKChannel,"mo_channel.BaseSDKChannel");
})(mo_channel || (mo_channel = {}));

