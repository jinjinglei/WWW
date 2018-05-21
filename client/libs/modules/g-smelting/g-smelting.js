/**
 * Created by Zhuang on 2016/4/25.
 */
var g_smelting;
(function (g_smelting) {
    var SmeltingBatch = (function (_super) {
        __extends(SmeltingBatch, _super);
        function SmeltingBatch() {
            _super.apply(this, arguments);
        }
        var d = __define,c=SmeltingBatch,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ckb_keep.selected = true;
            self._setData();
        };
        p._tap_btn_info = function () {
            g_base.BaseShowTip.create().setData({ id: 4 }).show();
        };
        p._setData = function () {
            var self = this;
            var isRetain = self.ckb_keep.selected;
            self.white_txt.text = "白色装备×" + gd.equipCtrl.getSmeltArr((isRetain ? 1 : 0), 1).length;
            self.green_txt.text = "绿色装备×" + gd.equipCtrl.getSmeltArr((isRetain ? 1 : 0), 2).length;
            self.blue_txt.text = "蓝色装备×" + gd.equipCtrl.getSmeltArr((isRetain ? 1 : 0), 3).length;
            self.purple_txt.text = "紫色装备×" + gd.equipCtrl.getSmeltArr((isRetain ? 1 : 0), 4).length;
            self.orange_txt.text = "橙色装备×" + gd.equipCtrl.getSmeltArr((isRetain ? 1 : 0), 5).length;
        };
        p._tap_btn_whiteResolve = function () {
            var self = this;
            self._ResolveEquip(1);
        };
        p._tap_btn_greenResolve = function () {
            var self = this;
            self._ResolveEquip(2);
        };
        p._tap_btn_blueResolve = function () {
            var self = this;
            self._ResolveEquip(3);
        };
        p._tap_btn_purpleResolve = function () {
            var self = this;
            self._ResolveEquip(4);
        };
        p._tap_btn_orangeResolve = function () {
            var self = this;
            self._ResolveEquip(5);
        };
        p._chg_ckb_keep = function () {
            var self = this;
            self._setData();
        };
        p._ResolveEquip = function (indx) {
            var self = this;
            var colorType = indx;
            var isRetain = self.ckb_keep.selected;
            var equipIds = gd.equipCtrl.getSmeltArr((isRetain ? 1 : 0), indx);
            if (gd.equipCtrl.getSmeltArr((isRetain ? 1 : 0), indx).length == 0) {
                return mo.showMsg("没有该类装备需要熔炼！");
            }
            gd.equipCtrl.smelt(equipIds, colorType, function () {
                self._setData();
            }, self);
        };
        return SmeltingBatch;
    })(g_base.CloseInfoDlg);
    g_smelting.SmeltingBatch = SmeltingBatch;
    egret.registerClass(SmeltingBatch,"g_smelting.SmeltingBatch");
})(g_smelting || (g_smelting = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_smelting;
(function (g_smelting) {
    var SmeltingItem = (function (_super) {
        __extends(SmeltingItem, _super);
        function SmeltingItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=SmeltingItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_SMELT, self.playEffect);
            self.efx.autoPlay = false;
            self.efx.visible = false;
            var refreshFunc = function () {
                self.efx.gotoAndStop(1);
                self.efx.visible = false;
                self.ico_item.visible = true;
            };
            self.emitter.on('dtor', function () {
                var _efx = self.efx;
                _efx.removeEventListener(egret.Event.COMPLETE, refreshFunc, self);
            });
            self.efx.addEventListener(egret.Event.COMPLETE, refreshFunc, self);
            self.ico_item.onClick(self._dropMe, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var equipId = self.data;
            self.grp_add.visible = !equipId;
            self.ico_item.visible = !!equipId;
            if (equipId) {
                var ico_item = self.ico_item;
                var tempId = gd.equipCtrl.getTempIdByEquipId(equipId);
                self.name = "cell_" + tempId;
                ico_item.set('itemId', tempId);
            }
        };
        p._tap_img_add = function () {
            var self = this;
            self.delegate.chooseEquipForIdx(self.itemIndex);
        };
        p._dropMe = function () {
            var self = this;
            self.delegate.dropEquipByIdx(self.itemIndex);
        };
        p.playEffect = function () {
            var self = this;
            self.ico_item.visible = false;
            self.efx.visible = true;
            self.efx.play(1);
        };
        return SmeltingItem;
    })(mo.gui.ItemRenderer);
    g_smelting.SmeltingItem = SmeltingItem;
    egret.registerClass(SmeltingItem,"g_smelting.SmeltingItem");
})(g_smelting || (g_smelting = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_smelting;
(function (g_smelting) {
    var Smelting = (function (_super) {
        __extends(Smelting, _super);
        function Smelting() {
            _super.apply(this, arguments);
            this._playingEffect = false;
            this._fromChoose = false;
            this._counter = 0;
        }
        var d = __define,c=Smelting,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._helpDataId = 4;
            self._Item_list_items = g_smelting.SmeltingItem;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var efx = cell.efx;
            var refreshFunc = function () {
                self._counter++;
                if (self._counter >= self.equipIds.length) {
                    self.refreshList("list_items");
                    self._playingEffect = false;
                }
            };
            self.emitter.on('dtor', function () {
                var _efx = efx;
                _efx.removeEventListener(egret.Event.COMPLETE, refreshFunc, self);
            });
            efx.addEventListener(egret.Event.COMPLETE, refreshFunc, self);
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            var equipIds = self._fromChoose ? self.equipIds : gd.equipCtrl.getSmeltArr(self.ckb_keep.selected ? 1 : 0);
            self._fromChoose = false;
            self.equipIds = self._fillArr(equipIds, 9, null);
            self._counter = 0;
            return equipIds;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ckb_keep.selected = true;
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BATCH_SMELT, function () {
                self.refreshList("list_items");
            });
        };
        p._tap_btn_batchResolve = function () {
            var self = this;
            g_smelting.SmeltingBatch.create().show();
        };
        p._tap_btn_resolve = function () {
            var self = this;
            if (self._playingEffect) {
                return;
            }
            var msg;
            if (self._hasCustomEquip) {
                msg = gc.id_c_msgCode.ifSmeltCustom;
            }
            if (self._hasSpecailEquip) {
                msg = gc.id_c_msgCode.ifSmeltHeirloom;
            }
            if (msg) {
                mo.showMsg(msg, function () {
                    self._doSmelting();
                });
            }
            else {
                self._doSmelting();
            }
        };
        p._doSmelting = function () {
            var self = this;
            var equipIds = self.equipIds.filter(function (equipId) {
                return equipId != null;
            });
            if (equipIds.length > 0) {
                self._playingEffect = true;
            }
            gd.equipCtrl.smelt(equipIds, 0, function () {
                self._hasSpecailEquip = false;
                self._hasCustomEquip = false;
            }, self);
        };
        p._chg_ckb_keep = function () {
            var self = this;
            self.refreshList("list_items");
        };
        p.chooseEquipForIdx = function (idx) {
            var self = this;
            var equips = self.equipIds.filter(function (equipId) {
                return equipId != null;
            });
            var layer = g_smelting.SmeltEquipChoose.create().setData({ equipIds: equips, maxNum: 9 }).show();
            layer.onClose(function (e) {
                if (layer.doWhat <= 0)
                    return; //点确定才真真添加
                self.equipIds = equips;
                self._fromChoose = true;
                self._hasSpecailEquip = layer.specialEquipNum > 0;
                self._hasCustomEquip = layer.customEquipNum > 0;
                self.refreshList("list_items");
            });
        };
        p.dropEquipByIdx = function (idx) {
            var self = this;
            self.equipIds[idx] = null;
            self._fromChoose = true;
            self.refreshList("list_items");
        };
        /**
         * 按指定长度末尾填充数组
         * @param arr
         * @param maxLen 指定长度
         * @param fillV 填充值
         * @returns {Array<any>}
         * @private
         */
        p._fillArr = function (arr, maxLen, fillV) {
            if (maxLen <= arr.length)
                return arr;
            for (var i = 0, li = maxLen - arr.length; i < li; i++) {
                arr.push(fillV);
            }
            return arr;
        };
        return Smelting;
    })(g_base.CloseInfoDlg);
    g_smelting.Smelting = Smelting;
    egret.registerClass(Smelting,"g_smelting.Smelting");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Smelting;
        moduleCfgItem.notOwnRes = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_smelting || (g_smelting = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_smelting;
(function (g_smelting) {
    var SmeltChooseItem = (function (_super) {
        __extends(SmeltChooseItem, _super);
        function SmeltChooseItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=SmeltChooseItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
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
            self.ckb_selected.selected = self.delegate.isSelected(bdc.equipId);
        };
        return SmeltChooseItem;
    })(mo.gui.ItemRenderer);
    g_smelting.SmeltChooseItem = SmeltChooseItem;
    egret.registerClass(SmeltChooseItem,"g_smelting.SmeltChooseItem");
})(g_smelting || (g_smelting = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_smelting;
(function (g_smelting) {
    /**
     *
     * @author
     *
     */
    var SmeltEquipChoose = (function (_super) {
        __extends(SmeltEquipChoose, _super);
        function SmeltEquipChoose() {
            _super.apply(this, arguments);
            this.specialEquipNum = 0;
            this.customEquipNum = 0;
            this.doWhat = 0; //0取消 1确定
            this.maxNum = 0;
        }
        var d = __define,c=SmeltEquipChoose,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_smelting.SmeltChooseItem;
            self.showType = 1;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.updateNum();
        };
        p.updateNum = function () {
            var self = this;
            var equipIds = self.data.equipIds || [];
            self.label_num.text = [equipIds.length, self.data.maxNum];
        };
        p.isSelected = function (equipId) {
            var self = this;
            var equipIds = self.data.equipIds || [];
            return equipIds.indexOf(equipId) >= 0;
        };
        p.pickEquip = function (equipId) {
            var self = this;
            var equipIds = self.data.equipIds || [];
            var idx = equipIds.indexOf(equipId);
            if (idx < 0) {
                equipIds.push(equipId);
                self.updateNum();
                if (gd.equipCtrl.isSpecialEquip(gd.equipCtrl.getTempIdByEquipId(equipId)))
                    self.specialEquipNum++;
                if (gd.equipCtrl.isCustomEquipByTempId(gd.equipCtrl.getTempIdByEquipId(equipId)))
                    self.customEquipNum++;
                if (equipIds.length >= self.data.maxNum) {
                    self._tap_btn_ok();
                }
            }
        };
        p.dropEquip = function (equipId) {
            var self = this;
            if (gd.equipCtrl.isSpecialEquip(gd.equipCtrl.getTempIdByEquipId(equipId)))
                self.specialEquipNum--;
            if (gd.equipCtrl.isCustomEquipByTempId(gd.equipCtrl.getTempIdByEquipId(equipId)))
                self.customEquipNum--;
            var equipIds = self.data.equipIds || [];
            var idx = equipIds.indexOf(equipId);
            if (idx >= 0) {
                equipIds.splice(idx, 1);
                self.updateNum();
            }
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            var BDC = gd.BagDataCtrl;
            return (self.showType != 1) ?
                BDC.getList(BDC.getFilterOpt(self.showType), BDC.getSortOpt(self.showType))
                : BDC.getEquipListUnlocked(gd.equipCtrl.getEquipList());
        };
        p._refresh = function () {
            var self = this;
            self.refreshList('list_items');
        };
        p._click_list_items = function (event) {
            var self = this;
            var bdc = event.item;
            var chooseItem = event.itemRenderer;
            chooseItem.ckb_selected.selected = !chooseItem.ckb_selected.selected;
            if (chooseItem.ckb_selected.selected) {
                self.pickEquip(bdc.equipId);
            }
            else {
                self.dropEquip(bdc.equipId);
            }
        };
        p._tap_btn_ok = function () {
            var self = this;
            self.doWhat = 1;
            self.close();
        };
        return SmeltEquipChoose;
    })(mo.gui.Dlg);
    g_smelting.SmeltEquipChoose = SmeltEquipChoose;
    egret.registerClass(SmeltEquipChoose,"g_smelting.SmeltEquipChoose");
})(g_smelting || (g_smelting = {}));

