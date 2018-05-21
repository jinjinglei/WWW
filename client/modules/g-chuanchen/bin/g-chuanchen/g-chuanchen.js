/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_chuanchen;
(function (g_chuanchen) {
    var CCEquipChooseItem = (function (_super) {
        __extends(CCEquipChooseItem, _super);
        function CCEquipChooseItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CCEquipChooseItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_needLvl.visible = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.name = "eqp_cell_" + self.itemIndex;
            var bdc = self.data;
            self.ico_item.set('itemId', bdc.tempId);
            var str = mo.STR.format("[ubb color=%s]%s[/ubb] [ubb]评分:%s[/ubb][/br]", uiHelper.getColorByQuality(bdc.quality), bdc.name, gd.equipCtrl.getEquipEvaluate(bdc.equipId));
            var basePropArr = bdc.proptys;
            var addPropObj = gd.equipCtrl.getEquipExtraObj(bdc.equipId);
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var propData;
            for (var i = 0, li = basePropArr.length; i < li; i++) {
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0 ? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            self.label_desc.text = str;
            var opt = gd.equipCtrl.getInheritedEquipOpt(bdc.equipId);
            self.label_needLvl.visible = !opt.nextEquipNeedLvlEnough;
            self.btn_choose.visible = opt.nextEquipNeedLvlEnough;
            if (!opt.nextEquipNeedLvlEnough) {
                self.label_needLvl.text = opt.nextEquipNeedLvl;
            }
        };
        p._tap_btn_choose = function () {
            var self = this;
            g_chuanchen.CCEquip.create().setData({ bdc: self.data }).show();
        };
        CCEquipChooseItem.ON_BTN_EQUIP = "on_btn_equip";
        return CCEquipChooseItem;
    })(mo.gui.ItemRenderer);
    g_chuanchen.CCEquipChooseItem = CCEquipChooseItem;
    egret.registerClass(CCEquipChooseItem,"g_chuanchen.CCEquipChooseItem");
})(g_chuanchen || (g_chuanchen = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_chuanchen;
(function (g_chuanchen) {
    var Chuanchen = (function (_super) {
        __extends(Chuanchen, _super);
        function Chuanchen() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Chuanchen,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_chuanchen.CCEquipChooseItem;
            self._equips = [];
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_INHERITED, self._reset);
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            var tabStr = [], tabSource = { 1: "tab_txt_zansesz", 2: "tab_txt_fsisenz", 3: "tab_txt_daosisz" };
            var heroJob = gc.c_prop.heroJob;
            for (var k in heroJob) {
                var job = parseInt(k);
                if (job == gc.c_prop.heroJobKey.ys)
                    continue; //幻术师目前没有传承功能
                if (gd.heroCtrl.hasHeroByJob(job))
                    tabStr.push(tabSource[job]);
            }
            tabStr.push("tab_txt_beibao");
            self.tab_bag.dataProvider = new egret.gui.ArrayCollection(tabStr);
            process.nextTick(function () {
                self.tab_bag.selectedIndex = 0;
                self._tap_tab_bag(null);
            });
            for (var i = 0, li = 4; i < li; i++) {
                self['img_red' + i].visible = false;
            }
        };
        p._tap_tab_bag = function (event) {
            var self = this;
            self._reset();
            var dataGroup = self.tab_bag.getChildAt(0);
            for (var i = 0; i < dataGroup.numChildren; ++i) {
                dataGroup.getChildAt(i).selected = i == self.tab_bag.selectedIndex;
            }
        };
        p._reset = function () {
            var self = this;
            var type = self._getSelectedType();
            if (type < 99) {
                var hec = gd.heroCtrl.getHeroByJob(type);
                if (hec) {
                    self._equips = hec.getAllSpecialEquip();
                }
            }
            else {
                self._equips = gd.equipCtrl.getBagSpecialEquipList();
            }
            self.label_empty.visible = self._equips.length <= 0;
            self.refreshList('list_items');
            //设置红点
            var dotArr = gd.equipCtrl.getSpecialEquipDot();
            for (var i = 0, li = 4; i < li; i++) {
                self['img_red' + i].visible = dotArr[i] > 0;
            }
        };
        p._getSelectedType = function () {
            var self = this;
            var selectedItem = self.tab_bag.selectedItem;
            switch (selectedItem) {
                case "tab_txt_zansesz":
                    return 1;
                    break;
                case "tab_txt_fsisenz":
                    return 2;
                    break;
                case "tab_txt_daosisz":
                    return 3;
                    break;
                case "tab_txt_beibao":
                    return 99;
                    break;
            }
            return -1;
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            return gd.BagDataCtrl.getEquipList(self._equips);
        };
        p._initItem_list_items = function (cell) {
            var self = this;
        };
        return Chuanchen;
    })(mo.gui.Dlg);
    g_chuanchen.Chuanchen = Chuanchen;
    egret.registerClass(Chuanchen,"g_chuanchen.Chuanchen");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Chuanchen;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_chuanchen || (g_chuanchen = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_chuanchen;
(function (g_chuanchen) {
    var CCEquip = (function (_super) {
        __extends(CCEquip, _super);
        function CCEquip() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CCEquip,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var bdc = self.data.bdc;
            self.ico_item.set('itemId', bdc.tempId);
            self._setBeforeEquipInfo(self.grp_before, bdc);
            self._setAfterEquipInfo(self.grp_after);
        };
        p._setAfterEquipInfo = function (grp) {
            var self = this;
            var opt = gd.equipCtrl.getInheritedEquipOpt(self.data.bdc.equipId);
            var inheritedInfo = opt.inheritedInfo;
            var tempId = inheritedInfo[gc.t_inheritedEquip_nextId];
            grp.visible = tempId != 0;
            if (tempId == 0)
                return;
            var itemTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, tempId);
            var equipTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            var name = gd.equipCtrl.getEquipName(tempId);
            var level = itemTemp[gc.t_item_itemLvl];
            var label_name_lvl = grp.getChildByName('label_name_lvl');
            var label_score = grp.getChildByName('label_score');
            var label_props = grp.getChildByName("grp_props").getChildByName('label_props');
            label_name_lvl.text = mo.STR.format("[ubb color=%s]%s [/ubb][ubb color=#E8CA47]%s级[/ubb]", uiHelper.getColorByQuality(itemTemp[gc.t_item_color]), name, level);
            //属性
            var str = "";
            var basePropArr = equipTemp[gc.t_itemEquip_propertys];
            var addPropObj = utils.kvArr2KvObj(equipTemp[gc.t_itemEquip_fixProp]);
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var propData;
            for (var i = 0, li = basePropArr.length; i < li; i++) {
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0 ? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            label_props.text = str;
            label_score.text = gd.equipCtrl.getSpecialEquipEvaluate(tempId);
            self.grp_lvlEnough.visible = opt.nextEquipNeedLvlEnough;
            self.btn_chuanchen.visible = opt.nextEquipNeedLvlEnough;
            self.grp_lvlNotEnough.visible = !opt.nextEquipNeedLvlEnough;
            if (!opt.nextEquipNeedLvlEnough) {
                self.label_needLvl.text = opt.nextEquipNeedLvl;
            }
            uiHelper.setResGrp(self.grp_res, opt.itemId, opt.inheritedInfo[gc.t_inheritedEquip_num]);
            uiHelper.setResGrp(self.grp_resMy, opt.itemId, gd.userCtrl.getItemNum(opt.itemId));
        };
        p._setBeforeEquipInfo = function (grp, bdc) {
            var self = this;
            var label_name_lvl = grp.getChildByName('label_name_lvl');
            var label_score = grp.getChildByName('label_score');
            var label_props = grp.getChildByName("grp_props").getChildByName('label_props');
            label_name_lvl.text = mo.STR.format("[ubb color=%s]%s [/ubb][ubb color=#E8CA47]%s级[/ubb]", uiHelper.getColorByQuality(bdc.quality), bdc.name, bdc.itemLvl);
            label_score.text = bdc.score;
            //属性
            var str = "";
            var basePropArr = bdc.proptys;
            var addPropObj = gd.equipCtrl.getEquipExtraObj(bdc.equipId);
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var propData;
            for (var i = 0, li = basePropArr.length; i < li; i++) {
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0 ? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            label_props.text = str;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 25 }).show();
        };
        p._tap_btn_chuanchen = function () {
            var self = this;
            var opt = gd.equipCtrl.getInheritedEquipOpt(self.data.bdc.equipId);
            var nextId = opt.inheritedInfo[gc.t_inheritedEquip_nextId];
            var itemId = opt.itemId;
            if (itemId == 0) {
                return mo.showMsg("已达最高传承等级!");
            }
            if (!opt.isItemEnough) {
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({ itemId: itemId, count: opt.inheritedInfo[gc.t_inheritedEquip_num] - gd.userCtrl.getItemNum(opt.itemId) }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
            else {
                gd.equipCtrl.inheritedEquip(opt, function () {
                    self.setData({ bdc: gd.BagDataCtrl.create(nextId, opt.equipId) });
                }, self);
            }
        };
        return CCEquip;
    })(mo.gui.Dlg);
    g_chuanchen.CCEquip = CCEquip;
    egret.registerClass(CCEquip,"g_chuanchen.CCEquip");
})(g_chuanchen || (g_chuanchen = {}));

