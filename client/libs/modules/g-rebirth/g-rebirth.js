/**
 * Created by Administrator on 2016/1/21.
 */
var g_rebirth;
(function (g_rebirth) {
    var Rebirth = (function (_super) {
        __extends(Rebirth, _super);
        function Rebirth() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Rebirth,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.userCtrl, gc.dsConsts.UserEntity.rebirthExp.toString(), self._refreshUi);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 18 }).show();
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this._refreshUi();
        };
        p._refreshUi = function () {
            var self = this;
            var curRebirthLvl = gd.reBirthCtrl.getRebirthLvl();
            var nextRebirthLvl = curRebirthLvl + 1;
            var curRebirthData = gd.reBirthCtrl.getRebirthCfg(curRebirthLvl);
            var nextRebirthData = gd.reBirthCtrl.getRebirthCfg(nextRebirthLvl);
            var propKeyArr = ["maxHpTemp", "attackTemp", "defenceTemp", "magicDefenceTemp", "hitTemp", "dodgeTemp", "criticalTemp", "disCriticalTemp"];
            if (nextRebirthData)
                self.label_maxLvl.text = [nextRebirthData.rebirthLvl, nextRebirthData.limitLvl];
            self.label_curLvl.text = curRebirthLvl + "";
            self.label_curPropDes.text = curRebirthLvl;
            self.label_nextPropDes.text = nextRebirthLvl;
            var strTemp1 = "%s：%s[/br]";
            var strTemp2 = "%s+%s[/br]";
            var curPorpStr = "", nextPorpStr = "";
            for (var i = 0, l_i = propKeyArr.length; i < l_i; i++) {
                var key = propKeyArr[i];
                var propKey = gc.c_prop.heroPropKey[key];
                if (!propKey)
                    continue;
                if (curRebirthData) {
                    curPorpStr += mo.STR.format(strTemp1, gc.c_prop.heroProp[propKey], curRebirthData[key]);
                }
                else {
                    curPorpStr += mo.STR.format(strTemp1, gc.c_prop.heroProp[propKey], 0);
                }
                if (nextRebirthData) {
                    nextPorpStr += mo.STR.format(strTemp2, gc.c_prop.heroProp[propKey], nextRebirthData[key]);
                }
            }
            self.label_curProp.text = curPorpStr;
            self.label_nextProp.text = nextPorpStr;
            if (nextRebirthData)
                self.label_costExp.text = mo.STR.format("[ubb color=0xFFD400]%s[/ubb]", nextRebirthData.exp);
            self.label_curExp.text = mo.STR.format("[ubb color=0xFFD400]%s[/ubb]", gd.reBirthCtrl.getRebirthExp());
            if (nextRebirthData)
                self.label_openNextLvl.text = [nextRebirthData.lvl, nextRebirthData.rebirthLvl];
            self.label_curExp2.text = mo.STR.format("[ubb color=0xFFD400]%s[/ubb]", gd.reBirthCtrl.getRebirthExp());
            self._checkVisible(curRebirthData, nextRebirthData);
        };
        p._checkVisible = function (curRebirthData, nextRebirthData) {
            var self = this;
            self.label_maxLvl.visible = true;
            //未转生
            if (!curRebirthData) {
                //标题
                self.img_noReTitle.visible = true;
                self.grp_reTitle.visible = false;
                self.label_curLvl.visible = false;
                //属性
                self.label_0_propDes.visible = true;
                self.label_curPropDes.visible = false;
                self.label_no_PropDes.visible = false;
                self.label_nextPropDes.visible = true;
            }
            else {
                //标题
                self.img_noReTitle.visible = false;
                self.grp_reTitle.visible = true;
                self.label_curLvl.visible = true;
                //属性
                self.label_0_propDes.visible = false;
                self.label_curPropDes.visible = true;
                if (nextRebirthData) {
                    self.label_no_PropDes.visible = false;
                    self.label_nextPropDes.visible = true;
                    if (gd.userCtrl.getLvl() >= nextRebirthData.lvl) {
                        //转生前
                        self.grp_1.visible = true;
                        self.grp_2.visible = false;
                    }
                    else {
                        //转生后
                        self.grp_1.visible = false;
                        self.grp_2.visible = true;
                    }
                }
                else {
                    //最高转生了
                    self.label_no_PropDes.visible = true;
                    self.label_nextPropDes.visible = false;
                    self.grp_1.visible = false;
                    self.grp_2.visible = true;
                    self.label_openNextLvl.visible = false;
                    self.label_maxLvl.visible = false;
                }
            }
        };
        p._tap_btn_rebirth = function () {
            var self = this;
            gd.reBirthCtrl.rebirth(self._refreshUi, self);
        };
        p._tap_btn_getExp = function () {
            g_rebirth.RebirthExp.create().show();
        };
        return Rebirth;
    })(mo.gui.Dlg);
    g_rebirth.Rebirth = Rebirth;
    egret.registerClass(Rebirth,"g_rebirth.Rebirth");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Rebirth;
        moduleCfgItem.sysId = gc.id_c_open.rebirth; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
    });
})(g_rebirth || (g_rebirth = {}));

/**
 * Created by Administrator on 2016/1/21.
 */
var g_rebirth;
(function (g_rebirth) {
    var RebirthExp = (function (_super) {
        __extends(RebirthExp, _super);
        function RebirthExp() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RebirthExp,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.userCtrl, gc.dsConsts.UserEntity.rebirthExp.toString(), self._refreshUi);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._refreshUi();
        };
        p._refreshUi = function () {
            var self = this;
            self._refreshExp();
            self._refreshItems();
        };
        p._refreshExp = function () {
            var self = this;
            var curRebirthLvl = gd.reBirthCtrl.getRebirthLvl();
            var nextRebirthLvl = curRebirthLvl + 1;
            var nextRebirthData = gd.reBirthCtrl.getRebirthCfg(nextRebirthLvl);
            if (!nextRebirthData)
                return;
            var all = nextRebirthData.exp;
            var now = gd.reBirthCtrl.getRebirthExp();
            var per = now / all;
            per = per >= 1 ? 1 : per;
            var precent = self.img_exp.height - Math.floor((1 - per) * self.img_exp.height);
            self.img_exp.mask = new egret.Rectangle(0, self.img_exp.height - precent, self.img_exp.width, precent);
            self.label_exp.text = [(now / 10000).toFixed(1), (all / 10000).toFixed(1)];
        };
        p._refreshItems = function () {
            var self = this;
            var items = gd.reBirthCtrl.getItems();
            for (var i = 0; i < 3; i++) {
                var itemId = items[i];
                var grp = self["grp_" + i];
                if (!itemId) {
                    grp.visible = false;
                    continue;
                }
                grp.visible = true;
                self._updateItem(i, itemId);
            }
        };
        p._updateItem = function (index, itemId) {
            var self = this;
            var ico_item = self["ico_item" + index];
            ico_item.setData({ itemId: itemId, count: 1 });
            ico_item.label_text.visible = false;
            ico_item.onClick(self._showDetai, self, itemId);
            var t_item = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var name = t_item[gc.t_item_name];
            var quality = t_item[gc.t_item_color];
            var str = mo.STR.format("[ubb color=%s]%s[/ubb]", uiHelper.getColorByQuality(quality), name);
            var label_name = self["label_name" + index];
            label_name.text = str;
            var label_num = self["label_num" + index];
            var btn_buy = self["btn_buy" + index];
            var btn_use = self["btn_use" + index];
            var data = gd.reBirthCtrl.getItemBagDataCtrl(itemId);
            if (!data) {
                //背包里没有这个东西
                label_num.text = 0;
                btn_buy.visible = true;
                btn_use.visible = false;
            }
            else {
                label_num.text = data.count;
                btn_buy.visible = false;
                btn_use.visible = true;
            }
        };
        p._showDetai = function (comp, ico, itemId) {
            var self = this;
            var bdc = gd.BagDataCtrl.create(itemId, null);
            g_base.BaseItemDetail.create().setData({ bdc: bdc }).show();
        };
        p.calUseBtn = function (index) {
            var self = this;
            var items = gd.reBirthCtrl.getItems();
            var data = gd.reBirthCtrl.getItemBagDataCtrl(items[index]);
            if (!data)
                return;
            g_bag.BagOpenBox.create().setData({ bdc: data }).show().onClose(self._refreshUi, self);
            ;
        };
        p.calBuyBtn = function (index) {
            var self = this;
            var data = gd.reBirthCtrl.getItemShopData(index);
            //购买次数不足
            if (data[4] <= 0) {
                mo.showMsg(gc.id_c_msgCode.buyLimitNow);
                return;
            }
            g_shop.ShopBuy.create().setData({ type: gc.c_prop.shopTypeKey.rebirth, shopItem: data, index: index }).show().onClose(self._refreshUi, self);
        };
        p._tap_btn_use0 = function () {
            this.calUseBtn(0);
        };
        p._tap_btn_use1 = function () {
            this.calUseBtn(1);
        };
        p._tap_btn_use2 = function () {
            this.calUseBtn(2);
        };
        p._tap_btn_buy0 = function () {
            this.calBuyBtn(0);
        };
        p._tap_btn_buy1 = function () {
            this.calBuyBtn(1);
        };
        p._tap_btn_buy2 = function () {
            this.calBuyBtn(2);
        };
        return RebirthExp;
    })(mo.gui.Dlg);
    g_rebirth.RebirthExp = RebirthExp;
    egret.registerClass(RebirthExp,"g_rebirth.RebirthExp");
})(g_rebirth || (g_rebirth = {}));

