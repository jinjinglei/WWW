/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_custom;
(function (g_custom) {
    var CustomItem = (function (_super) {
        __extends(CustomItem, _super);
        function CustomItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CustomItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var equipType = self.data;
            if (equipType != null) {
                var resId = self._getPartTempResId(self.delegate.colorType, equipType);
                // 更换图标
                self.ico.source = mo.STR.format(resHelper.dynamicTemp, resHelper.dynamic.item, mo.STR.fill(resId, "000000"), "png");
                // 更换边框
                var color = self.delegate.colorType;
                self.ico_border.source = resHelper.getBorderByQuality(1, color);
                self.label_part.text = gc.c_prop.equipType[equipType];
            }
        };
        p._getPartTempResId = function (color, part) {
            var resIds = {};
            resIds[gc.c_prop.equipColorKey.orange] = [
                700026,
                700027,
                700028,
                700031,
                700029,
                700030 //定制手环
            ];
            resIds[gc.c_prop.equipColorKey.red] = [
                700032,
                700033,
                700034,
                700037,
                700035,
                700036 //定制手环
            ];
            return resIds[color][part];
        };
        p._tap_btn_goto = function () {
            var self = this;
            var tickets = gd.customCtrl.getCustomTicket(self.delegate.colorType);
            if (tickets.length) {
                mo.moduleMgr.runModule(g_consts.moduleId.custom, { itemId: tickets[0], equipType: self.data });
            }
            else {
                mo.showMsg("定制券不足!");
            }
        };
        return CustomItem;
    })(mo.gui.ItemRenderer);
    g_custom.CustomItem = CustomItem;
    egret.registerClass(CustomItem,"g_custom.CustomItem");
})(g_custom || (g_custom = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_custom;
(function (g_custom) {
    /**
     *
     * @author
     *
     */
    var CustomList = (function (_super) {
        __extends(CustomList, _super);
        function CustomList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CustomList,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_custom.CustomItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.CustomCtrl, gd.CustomCtrl.ON_CUSTOM, function () {
                self._refresh();
            });
            if (self.moduleParam && self.moduleParam.itemId) {
                var customPara = mo.getJSONWithFileNameAndID(gc.cfg_c_customParameter, self.moduleParam.itemId);
                self.tab_bag.selectedIndex = customPara[gc.c_customParameter_color] - gc.c_prop.equipColorKey.orange;
            }
            else if (self.moduleParam && self.moduleParam.color) {
                self.tab_bag.selectedIndex = self.moduleParam.color - gc.c_prop.equipColorKey.orange;
            }
            else {
                self.tab_bag.selectedIndex = 0;
            }
            self._tap_tab_bag();
        };
        p._tap_tab_bag = function () {
            var self = this;
            self.colorType = self.tab_bag.selectedIndex + gc.c_prop.equipColorKey.orange;
            self._refresh();
        };
        p._refresh = function () {
            var self = this;
            var scroller = (self.list_items).scroller;
            var scrollTop = scroller.scrollTop >= 0 ? scroller.scrollTop : 0;
            self.refreshList('list_items');
            process.nextTick(function () {
                if (!self.list_items)
                    return;
                scroller.throwVertically(scrollTop, 0);
            });
            self.label_tickets.text = [
                mo.STR.format("[ubb color=%s]%s[/ubb]", uiHelper.getColorByQuality(self.colorType), gc.c_prop.equipColor[self.colorType]),
                gd.customCtrl.getCustomTicket(self.colorType).length];
        };
        p._data_list_items = function () {
            return Object.keys(gc.c_prop.equipType);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 39 }).show();
        };
        return CustomList;
    })(mo.gui.Dlg);
    g_custom.CustomList = CustomList;
    egret.registerClass(CustomList,"g_custom.CustomList");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = CustomList;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_custom || (g_custom = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_custom;
(function (g_custom) {
    var CustomPropItem = (function (_super) {
        __extends(CustomPropItem, _super);
        function CustomPropItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CustomPropItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            self.label_prop.text = [gc.c_prop.equipProp[data[0]], data[1], Math.round(data[1] * gd.customCtrl.getExtrPropAddRatio() / 10000)];
            if (self.itemIndex == 0) {
                self.selected = true;
            }
        };
        return CustomPropItem;
    })(mo.gui.ItemRenderer);
    g_custom.CustomPropItem = CustomPropItem;
    egret.registerClass(CustomPropItem,"g_custom.CustomPropItem");
})(g_custom || (g_custom = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_custom;
(function (g_custom) {
    /**
     *
     * @author
     *
     */
    var Custom = (function (_super) {
        __extends(Custom, _super);
        function Custom() {
            _super.apply(this, arguments);
            this.choosedPropNum = 0;
        }
        var d = __define,c=Custom,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_custom.CustomPropItem;
            self.job = gc.c_prop.heroJobKey.zs;
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var jobs = gc.c_prop.heroJob;
            for (var job in jobs) {
                var item = self['ico_item_job' + job];
                if (item) {
                    item.onClick(self._onJobClick, self, job);
                    item.label_text.visible = false;
                }
            }
            self.label_count.text = gd.customCtrl.getMaxCustomPropNum();
            self._efxPlayer = uiHelper.EfxPlayer.createPlayer(self.efx);
            self._efxPlayer.setEndCallback(function () {
                self.close();
            }, self);
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p._tap_btn_sub = function () {
            var self = this;
            var limit = gd.customCtrl.getCustomLvlLimt(self.data.itemId);
            if (self.custom_lvl > limit[0]) {
                self.custom_lvl -= 10;
                self.custom_lvl = self.custom_lvl >= limit[0] ? self.custom_lvl : limit[0];
                self.showNum();
                self._updateWearLvl();
            }
        };
        p._tap_btn_add = function () {
            var self = this;
            var limit = gd.customCtrl.getCustomLvlLimt(self.data.itemId);
            if (self.custom_lvl < limit[1]) {
                self.custom_lvl += 10;
                self.custom_lvl = self.custom_lvl >= limit[1] ? limit[1] : self.custom_lvl;
                self.showNum();
                self._updateWearLvl();
            }
        };
        p.showNum = function () {
            var self = this;
            self.label_lvl.text = self.custom_lvl;
            var equips = gd.customCtrl.getTicketInfo(self.data.itemId, self.custom_lvl, self.data.equipType);
            var jobs = gc.c_prop.heroJob;
            for (var job in jobs) {
                var item = self['ico_item_job' + job];
                if (item) {
                    item.setData({ itemId: equips[job], count: 1 });
                }
            }
            self.refreshList("list_items");
        };
        p._moveLightBorder = function (item) {
            var self = this;
            var iW = item.width, iH = item.height;
            var bW = self.img_frame.width, bH = self.img_frame.height;
            self.img_frame.x = item.x - (bW - iW) / 2; //for png
            self.img_frame.y = item.y - (bH - iH) / 2;
        };
        p._onJobClick = function (item, target, job) {
            var self = this;
            self._moveLightBorder(item);
            self.job = job;
            self.refreshList("list_items");
            self.label_count.text = gd.customCtrl.getMaxCustomPropNum() - self.choosedPropNum;
            self._updateWearLvl();
        };
        p._updateWearLvl = function () {
            var self = this;
            var info = gd.customCtrl.getTicketInfo(self.data.itemId, self.custom_lvl, self.data.equipType);
            var equipTempId = info[self.job];
            self.label_needLvl.text = gd.equipCtrl.getEquipWearLvl(equipTempId);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var limit = gd.customCtrl.getCustomLvlLimt(self.data.itemId);
            self.label_range.text = limit;
            self.custom_lvl = limit[1];
            self.showNum();
            self._updateWearLvl();
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            var equips = gd.customCtrl.getTicketInfo(self.data.itemId, self.custom_lvl, self.data.equipType);
            return gd.equipCtrl.getBasePropArr(equips[self.job]);
        };
        p._click_list_items = function (event) {
            var self = this;
            var list = event.target;
            var items = list.selectedItems;
            var idxs = list.selectedIndices;
            var itemRenderer = event.itemRenderer;
            var idx = event.itemIndex;
            var item = event.item;
            if (event.itemIndex == 0) {
                process.nextTick(function () {
                    itemRenderer.selected = true;
                    if (idxs.indexOf(idx) == -1)
                        idxs.push(idx);
                    if (items.indexOf(item) == -1)
                        items.push(item);
                    list.selectedIndices = idxs;
                    list.selectedItems = items;
                });
                return mo.showMsg(gc.id_c_msgCode.mainProperty);
            }
            var num = items.length - 1;
            if (gd.customCtrl.getMaxCustomPropNum() - num < 0) {
                process.nextTick(function () {
                    itemRenderer.selected = false;
                    idxs.splice(idxs.indexOf(idx), 1);
                    items.splice(items.indexOf(item), 1);
                    list.selectedIndices = idxs;
                    list.selectedItems = items;
                });
                return mo.showMsg(gc.id_c_msgCode.fullProperty);
            }
            self.choosedPropNum = num;
            self.label_count.text = gd.customCtrl.getMaxCustomPropNum() - self.choosedPropNum;
        };
        p._tap_btn_custom = function () {
            var self = this;
            gd.customCtrl.customization(self.data.itemId, self.job, self.inputName.text, self.custom_lvl, self.list_items.selectedIndices, self.data.equipType, function () {
                self._efxPlayer.play();
            }, self);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 40 }).show();
        };
        return Custom;
    })(mo.gui.Dlg);
    g_custom.Custom = Custom;
    egret.registerClass(Custom,"g_custom.Custom");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Custom;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_custom || (g_custom = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_custom;
(function (g_custom) {
    var CustomCCEquip = (function (_super) {
        __extends(CustomCCEquip, _super);
        function CustomCCEquip() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CustomCCEquip,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            mo.gui.helper.setSkinName(this, "CCEquip");
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.img_title.source = "tit_txt_g_dizicuangcheng";
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
            var opt = gd.customCtrl.getInheritedEquipOpt(self.data.bdc.equipId);
            var nextEquipInfo = opt.nextEquipInfo;
            var tempId = nextEquipInfo.tempId;
            var itemTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, tempId);
            var name = nextEquipInfo.name;
            var level = itemTemp[gc.t_item_itemLvl];
            var label_name_lvl = grp.getChildByName('label_name_lvl');
            var label_score = grp.getChildByName('label_score');
            var label_props = grp.getChildByName("grp_props").getChildByName('label_props');
            label_name_lvl.text = mo.STR.format("[ubb color=%s]%s [/ubb][ubb color=#E8CA47]%s级[/ubb]", uiHelper.getColorByQuality(itemTemp[gc.t_item_color]), name, level);
            //属性
            var str = "";
            var basePropArr = nextEquipInfo.basePropArr;
            var addPropObj = utils.kvArr2KvObj(nextEquipInfo.extraPropArr);
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
            label_score.text = nextEquipInfo.scrore;
            self.grp_lvlEnough.visible = opt.nextEquipNeedLvlEnough;
            self.btn_chuanchen.visible = opt.nextEquipNeedLvlEnough;
            self.grp_lvlNotEnough.visible = !opt.nextEquipNeedLvlEnough;
            if (!opt.nextEquipNeedLvlEnough) {
                self.label_needLvl.text = opt.nextEquipNeedLvl;
            }
            uiHelper.setResGrp(self.grp_res, opt.costItemId, opt.costCount);
            uiHelper.setResGrp(self.grp_resMy, opt.costItemId, gd.userCtrl.getItemNum(opt.costItemId));
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
            var opt = gd.customCtrl.getInheritedEquipOpt(self.data.bdc.equipId);
            var nextEquipInfo = opt.nextEquipInfo;
            var itemId = opt.costItemId;
            if (!opt.isItemEnough) {
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({ itemId: itemId, count: opt.costCount - gd.userCtrl.getItemNum(opt.costItemId) }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
            else {
                gd.customCtrl.upCustomization(opt, function () {
                    self.setData({ bdc: gd.BagDataCtrl.create(nextEquipInfo.tempId, opt.equipId) });
                }, self);
            }
        };
        return CustomCCEquip;
    })(mo.gui.Dlg);
    g_custom.CustomCCEquip = CustomCCEquip;
    egret.registerClass(CustomCCEquip,"g_custom.CustomCCEquip");
})(g_custom || (g_custom = {}));

