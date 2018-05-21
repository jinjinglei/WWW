/**
 * Created by SmallAiTT on 2015/7/21.
 */
var g_index;
(function (g_index) {
    var LocalSDK = (function (_super) {
        __extends(LocalSDK, _super);
        function LocalSDK() {
            _super.apply(this, arguments);
            /*********************** LocalChannel的相关实现 开始 ***********************/
            this.isRememberPwd = true;
        }
        var d = __define,c=LocalSDK,p=c.prototype;
        p.quickLoginLocal = function (cb, ctx) {
            var self = this;
            //var argsObj = uw.iface.h_account_autoRegister_args, args = {};
            //args[argsObj.deviceId] = mo.getDeviceId();
            //args[argsObj.channelId] = egret.project.channelId;
            //mo.requestWaiting4Http(uw.iface.h_account_autoRegister, args, function(data){
            //    localSdk.saveUserAndPwd(data);
            //    cb.call(ctx);
            //}, self);
        };
        p.saveUserAndPwd = function (data) {
            if (this.isRememberPwd) {
                //记住已经登陆过了和用户密码
                var strUser = data.name;
                var strPwd = data.pwd;
                mo.setLocalStorageItem(gc.Keys.logined, true, true);
                mo.setLocalStorageItem(gc.Keys.accountName, strUser, true);
                mo.setLocalStorageItem(gc.Keys.password, strPwd, true);
            }
        };
        p.checkLocal = function (cb, cbTarget, opt) {
            var self = this;
            var logined = mo.getLocalStorageItem(gc.Keys.logined, true);
            var userName = mo.getLocalStorageItem(gc.Keys.accountName, true);
            var pwd = mo.getLocalStorageItem(gc.Keys.password, true);
            if (logined && (userName != null && pwd != null)) {
                gd.AccountCtrl.login(userName, pwd, egret.project.channelId, function (data) {
                    cb.call(cbTarget, true);
                }, self);
            }
            else {
                cb.call(cbTarget);
            }
        };
        p.loginLocal = function (userName, pwd, cb, ctx) {
            var self = this;
            if (userName == null || userName == "" || pwd == null || pwd == "") {
                mo.showMsg(gc.id_c_msgCode.loginNotNull);
            }
            else {
                gd.AccountCtrl.login(userName, pwd, egret.project.channelId, function (data) {
                    g_index.localSdk.saveUserAndPwd({ name: userName, pwd: pwd });
                    cb.call(ctx);
                    if (self._localLoginCb)
                        self._localLoginCb.call(self._localLoginCtx, true);
                }, self);
            }
        };
        p.popLoginLocal = function (cb, ctx, opt) {
            var self = this;
            g_index.IndexLogin.create().show();
            self._localLoginCb = cb;
            self._localLoginCtx = ctx;
        };
        p.registerLocal = function (userName, pwd1, pwd2, cb, ctx) {
            var self = this;
            if (userName == null || pwd1 == null || pwd2 == null || userName == "" || pwd1 == "" || pwd2 == "") {
                mo.showMsg(gc.id_c_msgCode.loginNotNull);
            }
            else if (userName.length < 6 || userName.length > 12) {
                mo.showMsg(gc.id_c_msgCode.accountLengthNotCorrect);
            }
            else if (pwd1.length < 6 || pwd1.length > 12) {
                mo.showMsg(gc.id_c_msgCode.pwdLengthNotCorrect);
            }
            else if (pwd1 !== pwd2) {
                mo.showMsg(gc.id_c_msgCode.pwdNotSame);
            }
            else {
                //注册
                gd.AccountCtrl.registerAccount(userName, pwd1, egret.project.channelId, function () {
                    g_index.localSdk.saveUserAndPwd({ name: userName, pwd: pwd1 });
                    if (cb)
                        cb.call(ctx);
                    if (self._localLoginCb)
                        self._localLoginCb.call(self._localLoginCtx, true);
                }, this);
            }
        };
        return LocalSDK;
    })(egret.Emitter);
    g_index.LocalSDK = LocalSDK;
    egret.registerClass(LocalSDK,"g_index.LocalSDK");
    g_index.localSdk = new LocalSDK();
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/5/8.
 */
var g_index;
(function (g_index) {
    var LocalChannel = (function (_super) {
        __extends(LocalChannel, _super);
        function LocalChannel() {
            _super.apply(this, arguments);
            this.isAutoLogin = true;
            this.isMultiAccount = true;
        }
        var d = __define,c=LocalChannel,p=c.prototype;
        //@override
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.defaultUI = true;
            self.isValidIAP = true;
            self.isRememberPwd = true;
        };
        //@override
        p.checkLogin = function (cb, ctx, opt) {
            g_index.localSdk.checkLocal(cb, ctx, opt);
        };
        //@override
        p.login = function (cb, cbTarget, opt) {
            var self = this;
            g_base.loginCtrl.clearRequestTimeOut();
            g_index.localSdk.popLoginLocal(function (succ) {
                cb.call(cbTarget, succ);
            }, self, opt);
        };
        //@override
        p.logout = function (cb, cbTarget) {
            var self = this;
            mo.removeLocalStorageItem(gc.Keys.logined, true);
            cb.call(cbTarget);
            //todo 临时h5刷新
            if (window.parent) {
                window.parent.location.reload();
            }
            else {
                location.reload();
            }
        };
        //@override
        p.enterGame = function (cb, cbTarget) {
            var self = this;
        };
        //@override
        p.pay = function (rechargeId, channelPayId, cb, target) {
            //var args = {};
            //var argsKey = uw.iface.a_recharge_recharge_args;
            //args[argsKey.rechargeId] = channelPayId;
            //args[argsKey.receiptData] = null;
            //args[argsKey.channel] = egret.project.channelId;
            //
            //mo.request4Http(uw.iface.a_recharge_recharge, args, cb, target);
        };
        LocalChannel.CHANNEL_ID = 99999;
        return LocalChannel;
    })(g_channel.BaseSDKChannel);
    g_index.LocalChannel = LocalChannel;
    egret.registerClass(LocalChannel,"g_index.LocalChannel");
    mo_channel.registerChannel(LocalChannel);
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/7/23.
 */
var g_index;
(function (g_index) {
    var IndexRegister = (function (_super) {
        __extends(IndexRegister, _super);
        function IndexRegister() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexRegister,p=c.prototype;
        //+++++++++++++++++++点击事件设置区域 开始++++++++++++++++++++
        p._tap_btnRegister = function (sender) {
            var self = this;
            g_index.localSdk.registerLocal(self.inputUser.text, self.inputPwd.text, self.inputConfirmPwd.text, function () {
                self.close();
            });
        };
        p._tap_btnCancel = function (sender) {
            var self = this;
            self.close();
            g_index.IndexLogin.create().show();
        };
        return IndexRegister;
    })(mo.gui.Dlg);
    g_index.IndexRegister = IndexRegister;
    egret.registerClass(IndexRegister,"g_index.IndexRegister");
})(g_index || (g_index = {}));

var g_index;
(function (g_index) {
    /**
     *
     * @author
     *
     */
    var IndexLogin = (function (_super) {
        __extends(IndexLogin, _super);
        function IndexLogin() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexLogin,p=c.prototype;
        p.init = function () {
            _super.prototype.init.call(this);
            var self = this;
            //self.setData(localSdk.getAccountInfo());
        };
        //+++++++++++++++++++点击事件设置区域 开始++++++++++++++++++++
        p._tap_btnRegister = function () {
            var self = this;
            g_index.IndexRegister.create().show();
            self.close();
        };
        p._tap_btnRemember = function () {
            var self = this;
            g_index.localSdk.isRememberPwd = !g_index.localSdk.isRememberPwd;
            self.markRemember.visible = g_index.localSdk.isRememberPwd;
        };
        p._tap_btnQuickLogin = function () {
            var self = this;
            //localSdk.quickLoginLocal(function(){
            //	self.close();
            //	// 显示IndexLayer
            //	IndexLayer.create().show();
            //});
        };
        p._tap_btnLogin = function () {
            var self = this;
            g_index.localSdk.loginLocal(self.label_userName.text, self.label_pwd.text, function () {
                self.close();
            });
        };
        p._tap_btnForgetPwd = function () {
            //IndexForgetPwd.create().show();
            //this.close();
        };
        return IndexLogin;
    })(mo.gui.Dlg);
    g_index.IndexLogin = IndexLogin;
    egret.registerClass(IndexLogin,"g_index.IndexLogin");
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_index;
(function (g_index) {
    /**
     *
     * @author
     *
     */
    var IndexRetry = (function (_super) {
        __extends(IndexRetry, _super);
        function IndexRetry() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexRetry,p=c.prototype;
        p._tap_btn_retry = function () {
            var self = this;
            g_base.loginCtrl.loginChannel();
            self.close();
        };
        return IndexRetry;
    })(mo.gui.Layer);
    g_index.IndexRetry = IndexRetry;
    egret.registerClass(IndexRetry,"g_index.IndexRetry");
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_index;
(function (g_index) {
    /**
     *
     * @author
     *
     */
    var IndexBg = (function (_super) {
        __extends(IndexBg, _super);
        function IndexBg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexBg,p=c.prototype;
        return IndexBg;
    })(mo.gui.Layer);
    g_index.IndexBg = IndexBg;
    egret.registerClass(IndexBg,"g_index.IndexBg");
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_index;
(function (g_index) {
    /**
     *
     * @author
     *
     */
    var IndexLayer = (function (_super) {
        __extends(IndexLayer, _super);
        function IndexLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexLayer,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_new_server = g_index.IndexServerShortItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_curServer.touchChildren = self.label_curServer.touchEnabled = true;
            self.btn_change.visible = mo_channel.getCurChannel().isMultiAccount;
            self.label_ver.text = "v." + egret.project.gameVer; //从index.html读取版本号
        };
        ////+++++++++++++++++++点击事件设置区域 开始++++++++++++++++++++
        //_tap_btnLogout(){// 显示登录弹框
        //	this.close();// 关闭自己
        //	IndexLogin.create().show();
        //}
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.checkServersShow();
            //hd { 需要判断是否是锁定选区
            var srv = gd.HoodinnCtlr.LockedServer();
            if (srv) {
                // 先获取下改区服的信息
                var info = gd.serverInfoCtrl.getServerInfoById(parseInt(srv));
                if (info) {
                    // 如过找到了区，则锁定区服
                    self.lyr_serverSelect.visible = false;
                    self.lyr_serverNew.visible = false;
                    self.grp_lock.visible = true;
                    self.showCurServer(info, true);
                }
            }
            //hd }
        };
        p.checkServersShow = function () {
            var self = this;
            var lastId = mo.getLocalStorageItem("lastLoginServerId");
            if (lastId == null) {
                self.lyr_serverSelect.visible = false;
                self.lyr_serverNew.visible = true;
                self.refreshList("list_new_server");
                var goodServerInfo = gd.serverInfoCtrl.getNewGoodServerIndex();
                var list_idx = goodServerInfo[0];
                var index = goodServerInfo[1];
                if (list_idx >= 0) {
                    self.list_new_server.selectedIndex = list_idx;
                    self._selectServer(gd.serverInfoCtrl.getServerByIndex(index));
                }
            }
            else {
                self.lyr_serverSelect.visible = true;
                self.lyr_serverNew.visible = false;
                self.showCurServer(gd.serverInfoCtrl.getServerInfoById(lastId));
            }
        };
        p._tap_btn_login = function () {
            if (!egret.isNative) {
                gc.lzcl.waitingResult(function (result) {
                    g_base.loginCtrl.enterGame(false);
                });
            }
            else {
                g_base.loginCtrl.enterGame(false);
            }
        };
        p._tap_btn_cur_server = function () {
            var self = this;
            self.selectServer();
        };
        p._tap_btn_new_server = function () {
            var self = this;
            self.selectServer();
        };
        p._tap_label_curServer = function () {
            var self = this;
            self.selectServer();
        };
        p._tap_btn_change = function () {
            var self = this;
            self.close();
            g_base.loginCtrl.changeAccount();
        };
        p._tap_btn_notice = function () {
            var self = this;
            gd.NoticeCtrl.getNewOne(function (data) {
                mo.showMsg(gc.id_c_msgCode.sysNotice, { sysNotice: data });
            }, self);
        };
        p._click_list_new_server = function (event) {
            var self = this;
            var item = event.item;
            self._selectServer(item);
        };
        p._selectServer = function (item) {
            if (item[gc.dsConsts.ServerInfoEntity.isClose]) {
                return;
            }
            //self.list_server.selectedIndex = self.lastIndex = event.itemIndex;
            //self.selectData = item;
            mo.setLocalStorageItem("lastLoginServerId", item[gc.dsConsts.ServerInfoEntity.id]);
            var host = item[gc.dsConsts.ServerInfoEntity.host];
            var port = item[gc.dsConsts.ServerInfoEntity.port];
            mo.setLocalStorageItem(gc.Keys.key_host, host);
            mo.setLocalStorageItem(gc.Keys.key_port, port);
            var indexId = item[gc.dsConsts.ServerInfoEntity.indexId];
            gd.serverInfoCtrl.setSelectIndex(indexId);
            gd.serverInfoCtrl.setSelectServer(item);
        };
        p._data_list_new_server = function () {
            return gd.serverInfoCtrl.getNewServers();
        };
        p.selectServer = function () {
            var self = this;
            self.indexServer = g_index.IndexServer.create().show().onClose(function () {
                self.showCurServer(self.indexServer.selectData);
                self.checkServersShow();
            });
        };
        p.showCurServer = function (data, lock) {
            if (data == null)
                return;
            var self = this;
            mo.setLocalStorageItem("lastLoginServerId", data[gc.dsConsts.ServerInfoEntity.id]);
            //获取host,端口
            var host = data[gc.dsConsts.ServerInfoEntity.host];
            var port = data[gc.dsConsts.ServerInfoEntity.port];
            mo.setLocalStorageItem(gc.Keys.key_host, host);
            mo.setLocalStorageItem(gc.Keys.key_port, port);
            var indexId = data[gc.dsConsts.ServerInfoEntity.indexId];
            gd.serverInfoCtrl.setSelectIndex(indexId);
            gd.serverInfoCtrl.setSelectServer(data);
            var status = data[gc.dsConsts.ServerInfoEntity.status];
            var statusSources = ["ntc_weihu", "ntc_lianghao", "", "ntc_huobao", ""];
            var desc = data[gc.dsConsts.ServerInfoEntity.closeExplain];
            if (lock) {
                self.label_lock_server.text = data[gc.dsConsts.ServerInfoEntity.name] + "-" + data[gc.dsConsts.ServerInfoEntity.area];
                self.ico_lock_new.visible = data[gc.dsConsts.ServerInfoEntity.isNew];
                if (data[gc.dsConsts.ServerInfoEntity.isClose]) {
                    self.ico_lock_status.source = statusSources[0];
                }
                else {
                    self.ico_lock_status.source = statusSources[status];
                }
                self.label_lock_serverDesc.text = desc || "";
            }
            else {
                self.label_curServer.text = data[gc.dsConsts.ServerInfoEntity.name] + "-" + data[gc.dsConsts.ServerInfoEntity.area];
                self.ico_new.visible = data[gc.dsConsts.ServerInfoEntity.isNew];
                if (data[gc.dsConsts.ServerInfoEntity.isClose]) {
                    self.ico_status.source = statusSources[0];
                }
                else {
                    self.ico_status.source = statusSources[status];
                }
                self.label_serverDesc.text = desc || "";
            }
        };
        return IndexLayer;
    })(mo.gui.Layer);
    g_index.IndexLayer = IndexLayer;
    egret.registerClass(IndexLayer,"g_index.IndexLayer");
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_index;
(function (g_index) {
    var IndexServerItem = (function (_super) {
        __extends(IndexServerItem, _super);
        function IndexServerItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexServerItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p._onItemCountChanged = function (count, ctrl) {
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var status = self.data[gc.dsConsts.ServerInfoEntity.status];
            var statusSources = ["ntc_weihu", "ntc_lianghao", "", "ntc_huobao", ""];
            self.label_content.text = self.data[gc.dsConsts.ServerInfoEntity.name] + "-" + self.data[gc.dsConsts.ServerInfoEntity.area];
            self.ico_new.visible = self.data[gc.dsConsts.ServerInfoEntity.isNew];
            if (self.data[gc.dsConsts.ServerInfoEntity.isClose]) {
                self.ico_status.source = statusSources[0];
            }
            else {
                self.ico_status.source = statusSources[status];
            }
        };
        return IndexServerItem;
    })(mo.gui.ItemRenderer);
    g_index.IndexServerItem = IndexServerItem;
    egret.registerClass(IndexServerItem,"g_index.IndexServerItem");
})(g_index || (g_index = {}));

/**
 * Created by admin on 16/1/8.
 */
var g_index;
(function (g_index) {
    var IndexServerShortItem = (function (_super) {
        __extends(IndexServerShortItem, _super);
        function IndexServerShortItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexServerShortItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p._onItemCountChanged = function (count, ctrl) {
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var status = self.data[gc.dsConsts.ServerInfoEntity.status];
            var statusSources = ["ntc_weihu", "ntc_lianghao", "", "ntc_huobao", ""];
            self.label_content.text = self.data[gc.dsConsts.ServerInfoEntity.name] + "-" + self.data[gc.dsConsts.ServerInfoEntity.area];
            if (self.data[gc.dsConsts.ServerInfoEntity.isClose]) {
                self.ico_status.source = statusSources[0];
            }
            else {
                self.ico_status.source = statusSources[status];
            }
        };
        return IndexServerShortItem;
    })(mo.gui.ItemRenderer);
    g_index.IndexServerShortItem = IndexServerShortItem;
    egret.registerClass(IndexServerShortItem,"g_index.IndexServerShortItem");
})(g_index || (g_index = {}));

/**
 * Created by Administrator on 2015/10/5.
 */
var g_index;
(function (g_index) {
    var IndexServerRangeItem = (function (_super) {
        __extends(IndexServerRangeItem, _super);
        function IndexServerRangeItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexServerRangeItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_name.touchEnabled = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.label_name.text = self.data;
        };
        p._tap_btn_range = function () {
            var self = this;
            var bdc = self.data;
            self.emitter.emit(self.__class.ON_BTN_RANGE, self.itemIndex, self);
        };
        IndexServerRangeItem.ON_BTN_RANGE = "ON_BTN_RANGE";
        return IndexServerRangeItem;
    })(mo.gui.ItemRenderer);
    g_index.IndexServerRangeItem = IndexServerRangeItem;
    egret.registerClass(IndexServerRangeItem,"g_index.IndexServerRangeItem");
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_index;
(function (g_index) {
    /**
     *
     * @author
     *
     */
    var IndexServer = (function (_super) {
        __extends(IndexServer, _super);
        function IndexServer() {
            _super.apply(this, arguments);
            this.index = 0;
            this.lastIndex = 0;
        }
        var d = __define,c=IndexServer,p=c.prototype;
        //@override
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_server = g_index.IndexServerItem;
            self._Item_list_serverRange = g_index.IndexServerRangeItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.list_serverRange.selectedIndex = 0;
            self.list_server.selectedIndex = 0;
        };
        p._initItem_list_serverRange = function (cell) {
            var self = this;
            cell.emitter.on(g_index.IndexServerRangeItem.ON_BTN_RANGE, function (index) {
                self.index = index;
                self.list_serverRange.selectedIndex = self.index;
                self.refreshList("list_server");
                process.nextTick(function () {
                    process.nextTick(function () {
                        self.list_server.selectedIndex = 0;
                    });
                });
            }, self);
        };
        p._data_list_serverRange = function () {
            return gd.serverInfoCtrl.getTitleList().reverse();
        };
        p._data_list_server = function () {
            var self = this;
            var index = 0;
            if (self.index == 0) {
                index = 0;
            }
            else {
                index = gd.serverInfoCtrl.getTitleList().length - 1 - self.index + 1;
            }
            return gd.serverInfoCtrl.getServerList(index).reverse();
        };
        p._click_list_server = function (event) {
            var self = this;
            var item = event.item;
            if (item[gc.dsConsts.ServerInfoEntity.status] == 0) {
                self.list_server.selectedIndex = self.lastIndex;
                return;
            }
            self.list_server.selectedIndex = self.lastIndex = event.itemIndex;
            self.selectData = item;
            var host = item[gc.dsConsts.ServerInfoEntity.host];
            var port = item[gc.dsConsts.ServerInfoEntity.port];
            mo.setLocalStorageItem(gc.Keys.key_host, host);
            mo.setLocalStorageItem(gc.Keys.key_port, port);
            var indexId = item[gc.dsConsts.ServerInfoEntity.indexId];
            gd.serverInfoCtrl.setSelectIndex(indexId);
            gd.serverInfoCtrl.setSelectServer(item);
            self.close();
        };
        return IndexServer;
    })(mo.gui.Dlg);
    g_index.IndexServer = IndexServer;
    egret.registerClass(IndexServer,"g_index.IndexServer");
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/7/15.
 */
var egret;
(function (egret) {
    var project;
    (function (project) {
        /** 是否开启模拟战斗 */
        project.fightSimulateEnabled = true;
        project.registerValueHandler(function (data) {
            project.setValue(data, "fightSimulateEnabled", true);
        });
    })(project = egret.project || (egret.project = {}));
})(egret || (egret = {}));
var g_index;
(function (g_index) {
    logger.initLogger(g_index, "g-index");
    logger.setLvl("g-index", 4);
    var IndexScene = (function (_super) {
        __extends(IndexScene, _super);
        function IndexScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=IndexScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            // 显示背景
            g_index.IndexBg.create().show();
            //渠道已准备好
            var ch = mo_channel.getCurChannel();
            ch.onChannelReay(function () {
                self._afterIndexBg();
            }, self);
        };
        p._afterIndexBg = function () {
            var self = this;
            var loginCtrl = g_base.loginCtrl;
            gc.initData(function () {
                loginCtrl.on(g_base.LoginCtrl.ON_LOGIN_SUCC, self.on_login_succ);
                loginCtrl.on(g_base.LoginCtrl.ON_LOGIN_FAIL, self.on_login_fail);
                loginCtrl.loginChannel();
            }, self);
        };
        p.onExit = function () {
            var self = this;
            _super.prototype.onExit.call(this);
            g_base.loginCtrl.un(g_base.LoginCtrl.ON_LOGIN_SUCC, self.on_login_succ);
            g_base.loginCtrl.un(g_base.LoginCtrl.ON_LOGIN_FAIL, self.on_login_fail);
        };
        p.on_login_succ = function () {
            var self = this;
            gd.serverInfoCtrl.getInfo(function () {
                //gd.NoticeCtrl.getNewOne(function(data){
                g_index.IndexLayer.create().show();
                //if(mo.getLocalStorageItem("noticeTime")!=data[gc.dsConsts.NoticeEntity.updateTime]
                //    ||mo.getLocalStorageItem("noticeCloseCount")<5){
                //    if(mo.getLocalStorageItem("noticeTime")!=data[gc.dsConsts.NoticeEntity.updateTime]){
                //        mo.setLocalStorageItem("noticeCloseCount", 0);
                //        mo.setLocalStorageItem("noticeTime", data[gc.dsConsts.NoticeEntity.updateTime]);
                //    }
                //    g_base.Notice.create().setData(data).show();
                //}
                //},self);
                // 关闭平台的加载进度
                mo_channel.getCurChannel().loadingProgress(100);
            }, self);
        };
        p.on_login_fail = function () {
            var self = this;
            //重试
            g_index.IndexRetry.create().show();
        };
        return IndexScene;
    })(mo.gui.UIScene);
    g_index.IndexScene = IndexScene;
    egret.registerClass(IndexScene,"g_index.IndexScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = IndexScene;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
    });
})(g_index || (g_index = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_index;
(function (g_index) {
    /**
     *
     * @author
     *
     */
    var UserAgreement = (function (_super) {
        __extends(UserAgreement, _super);
        function UserAgreement() {
            _super.apply(this, arguments);
        }
        var d = __define,c=UserAgreement,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            self.label_content.text = self.moduleParam["content"];
        };
        p._tap_btn_ok = function () {
            this.close();
        };
        return UserAgreement;
    })(mo.gui.Dlg);
    g_index.UserAgreement = UserAgreement;
    egret.registerClass(UserAgreement,"g_index.UserAgreement");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = UserAgreement;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.protocolContentCtrl.getInfo(function (data) {
                moduleParam["content"] = data[gc.dsConsts.ProtocolContentEntity.content];
                cb();
            }, this);
        });
    });
})(g_index || (g_index = {}));

