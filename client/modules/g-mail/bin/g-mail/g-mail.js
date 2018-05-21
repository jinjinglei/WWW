/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var Mail = (function (_super) {
        __extends(Mail, _super);
        function Mail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Mail,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_mails = g_mid.MailItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_list_empty.visible = false;
            if (self.moduleParam && self.moduleParam.mails) {
                self.setData({ mails: self.moduleParam.mails });
            }
        };
        p._data_list_mails = function () {
            var self = this;
            return self.data.mails;
        };
        p._click_list_mails = function (event) {
            var self = this;
            var mailInfo = event.item;
            gd.mailCtrl.setRead(mailInfo[gc.dsConsts.MailEntity.id], function () {
                g_mid.MailInfo.create().setData({
                    mailInfo: mailInfo
                }).show().onClose(function () {
                    self.refreshList('list_mails');
                });
            }, self);
        };
        p.dataChanged = function () {
            var self = this;
            _super.prototype.dataChanged.call(this);
            self.label_list_empty.visible = self.data.mails.length <= 0;
        };
        p._tap_btn_onekey = function () {
            var self = this;
            gd.mailCtrl.pickAllItems(function () {
                self.refreshList('list_mails');
            }, self);
        };
        return Mail;
    })(mo.gui.Dlg);
    g_mid.Mail = Mail;
    egret.registerClass(Mail,"g_mid.Mail");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Mail;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.mailCtrl.getList(function (data) {
                moduleParam.mails = data;
                cb();
            }, this);
        });
    });
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_mid;
(function (g_mid) {
    var MailItem = (function (_super) {
        __extends(MailItem, _super);
        function MailItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MailItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.img_new.visible = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data, KEY = gc.dsConsts.MailEntity;
            self.label_title.text = data[KEY.title];
            self.label_date.text = Date.newDate(data[KEY.addTime]).toFormat("YYYY-MM-DD HH24:MI:SS");
            self.img_new.visible = !data[KEY.isRead] && !data[KEY.isPicked];
            self.label_got.visible = data[KEY.isPicked];
            self.ico_attach.visible = Object.keys(data[KEY.items] || {}).length > 0;
        };
        return MailItem;
    })(mo.gui.ItemRenderer);
    g_mid.MailItem = MailItem;
    egret.registerClass(MailItem,"g_mid.MailItem");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var MailInfo = (function (_super) {
        __extends(MailInfo, _super);
        function MailInfo() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MailInfo,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            return utils.itemObj2ObjArr(self.data.mailInfo[gc.dsConsts.MailEntity.items]);
        };
        p.dataChanged = function () {
            var self = this;
            _super.prototype.dataChanged.call(this);
            var info = self.data.mailInfo, KEY = gc.dsConsts.MailEntity;
            var type = info[KEY.type], args = info[KEY.replaceArgs];
            if (args && args.length > 0) {
                var strArgs = [info[KEY.content]].concat(args);
                self.label_text.text = mo.STR.format.apply(mo.STR, strArgs);
            }
            else {
                self.label_text.text = info[KEY.content];
            }
            var hasAttachment = Object.keys((info[KEY.items] || {})).length > 0;
            self.btn_get.icon = hasAttachment ? "btn_txt_g_getattachment" : "btn_txt_g_ok";
            self.label_got.visible = info[KEY.isPicked] && hasAttachment;
            self.btn_get.visible = !self.label_got.visible;
        };
        p._tap_btn_get = function () {
            var self = this;
            var info = self.data.mailInfo, KEY = gc.dsConsts.MailEntity;
            var hasAttachment = Object.keys((info[KEY.items] || {})).length > 0;
            if (hasAttachment) {
                gd.mailCtrl.pickItems(info[KEY.id], function () {
                    self.close();
                }, self);
            }
            else {
                self.close();
            }
        };
        return MailInfo;
    })(mo.gui.Dlg);
    g_mid.MailInfo = MailInfo;
    egret.registerClass(MailInfo,"g_mid.MailInfo");
})(g_mid || (g_mid = {}));

