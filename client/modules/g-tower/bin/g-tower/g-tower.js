/**
 * Created by Administrator on 2016/1/9.
 */
var g_tower;
(function (g_tower) {
    var TowerGain = (function (_super) {
        __extends(TowerGain, _super);
        function TowerGain() {
            _super.apply(this, arguments);
        }
        var d = __define,c=TowerGain,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var items = self.data.items;
            var freeTimesLeft = gd.copyCtrl.getPaTaTreasuryCount();
            var freeTimesMax = gd.copyCtrl.getMaxFreeTowerTimes();
            var costDimond = gd.copyCtrl.getPaTaTreasuryNeedDia();
            var buyCount = gd.copyCtrl.getPaTaTreasuryBuyCount();
            self.label_desc.text = costDimond > 0 ?
                mo.STR.format("消耗:")
                : mo.STR.format("今日剩余免费寻宝次数:%s/%s", freeTimesLeft, freeTimesMax);
            self.grp_cost.visible = costDimond > 0;
            self.grp_cost.includeInLayout = costDimond > 0;
            if (costDimond > 0) {
                uiHelper.setResGrp(self.grp_cost, gc.c_prop.spItemIdKey.diamond, costDimond);
            }
            uiHelper.setItemsGrp(self.grp_passAward, utils.itemObj2ObjArr(items));
        };
        p._tap_btn_again1 = function () {
            var self = this;
            gd.copyCtrl.paTaTreasury(function (data) {
                self.close();
                TowerGain.create().setData({ items: data }).show();
            }, self);
        };
        return TowerGain;
    })(mo.gui.Dlg);
    g_tower.TowerGain = TowerGain;
    egret.registerClass(TowerGain,"g_tower.TowerGain");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = g_tower.Tower;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.copyCtrl.getPaTaInfo(function () {
                cb();
            }, this);
        });
    });
})(g_tower || (g_tower = {}));

/**
 * Created by Administrator on 2016/1/9.
 */
var g_tower;
(function (g_tower) {
    var TowerTreasury = (function (_super) {
        __extends(TowerTreasury, _super);
        function TowerTreasury() {
            _super.apply(this, arguments);
        }
        var d = __define,c=TowerTreasury,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
            self.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_TOWER_TANBAO, self._setdData);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._setdData();
        };
        p._setdData = function () {
            var self = this;
            self._setPromptType();
            self._scollerHelper = new uiHelper.ScrollerHelper(self.list_items);
        };
        p._setPromptType = function () {
            var self = this;
            self.num.visible = false;
            self.consumption.visible = false;
            self.label_date.text = "妖塔已通关" + gd.copyCtrl.getTowerIndex(gd.copyCtrl.getTowerBaokuNum()) + "层";
            if (gd.copyCtrl.getPaTaTreasuryCount() <= 0) {
                self.consumption.visible = true;
                var buyMoney = gd.copyCtrl.getPaTaTreasuryNeedDia();
                self.buyMoney = buyMoney;
                self.label_yb.text = buyMoney;
                var freeTimesMax = gd.copyCtrl.getMaxFreeTowerTimes();
                var buyCount = gd.copyCtrl.getPaTaTreasuryBuyCount();
                self.label_Ybtxt.text = freeTimesMax + buyCount + 1;
            }
            else {
                self.num.visible = true;
                self.treasury_num.text = gd.copyCtrl.getPaTaTreasuryCount() + "/" + gd.copyCtrl.getMaxFreeTowerTimes();
            }
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            self._scollerHelper.resumeScroll();
            var treasuryData = mo.getJSONWithFileNameAndID(gc.cfg_t_paTaTreasury, gd.copyCtrl.getTowerBaokuNum());
            var treasury = treasuryData[gc.t_paTaTreasury_treasury];
            var exData = treasuryData[gc.t_paTaTreasury_exData] || [];
            var ret = [];
            for (var i = 0, li = treasury.length; i < li; ++i) {
                ret.push({ itemId: treasury[i][0], count: treasury[i][1] });
            }
            for (var i = 0, li = exData.length; i < li; ++i) {
                ret.push({ itemId: exData[i][0], count: exData[i][1] });
            }
            ret = gd.userUtils.getLoots(ret);
            ret.sort(function (a, b) {
                return mo.getJSONWithFileNameAndID(gc.cfg_t_item, b.itemId)[gc.t_item_color] - mo.getJSONWithFileNameAndID(gc.cfg_t_item, a.itemId)[gc.t_item_color];
            });
            return ret;
        };
        p._tap_btn_once = function () {
            var self = this;
            gd.copyCtrl.paTaTreasury(function (data) {
                self._setdData();
                g_tower.TowerGain.create().setData({ items: data }).show();
            }, self);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 105, param1: gd.copyCtrl.getMaxFreeTowerTimes() }).show();
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.home);
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var ico_item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
        };
        return TowerTreasury;
    })(mo.gui.Dlg);
    g_tower.TowerTreasury = TowerTreasury;
    egret.registerClass(TowerTreasury,"g_tower.TowerTreasury");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = TowerTreasury;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_tower || (g_tower = {}));

/**
 * Created by lihex on 4/19/16.
 */
var g_tower;
(function (g_tower) {
    var TowerPreview = (function (_super) {
        __extends(TowerPreview, _super);
        function TowerPreview() {
            _super.apply(this, arguments);
        }
        var d = __define,c=TowerPreview,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            mo.gui.helper.setSkinName(this, g_tower.TowerTreasury.__className);
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._setdData();
        };
        p._setdData = function () {
            var self = this;
            self._setPromptType();
        };
        p._setPromptType = function () {
            var self = this;
            self.label_date.text = "妖塔已通关" + gd.copyCtrl.getTowerIndex(gd.copyCtrl.getTowerBaokuNum()) + "层";
            self.label_Preview.text = "通关" + gd.copyCtrl.getTowerIndex(self.data.previewCopyId) + "层后解锁奖励";
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            var treasuryData = mo.getJSONWithFileNameAndID(gc.cfg_t_paTaTreasury, self.data.previewCopyId);
            var treasury = treasuryData[gc.t_paTaTreasury_treasury];
            var exData = treasuryData[gc.t_paTaTreasury_exData] || [];
            var ret = [];
            for (var i = 0, li = treasury.length; i < li; ++i) {
                ret.push({ itemId: treasury[i][0], count: treasury[i][1] });
            }
            for (var i = 0, li = exData.length; i < li; ++i) {
                ret.push({ itemId: exData[i][0], count: exData[i][1] });
            }
            ret = gd.userUtils.getLoots(ret);
            ret.sort(function (a, b) {
                return mo.getJSONWithFileNameAndID(gc.cfg_t_item, b.itemId)[gc.t_item_color] - mo.getJSONWithFileNameAndID(gc.cfg_t_item, a.itemId)[gc.t_item_color];
            });
            return ret;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var ico_item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
        };
        p.getCurrentSkinState = function () {
            return 'PreviewInterface';
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 105, param1: gd.copyCtrl.getMaxFreeTowerTimes() }).show();
        };
        p._tap_btn_close = function () {
        };
        return TowerPreview;
    })(mo.gui.Dlg);
    g_tower.TowerPreview = TowerPreview;
    egret.registerClass(TowerPreview,"g_tower.TowerPreview");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = g_tower.TowerTreasury;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_tower || (g_tower = {}));

var g_comp;
(function (g_comp) {
    /**
     *
     * @author
     *
     */
    var TowerMonster = (function (_super) {
        __extends(TowerMonster, _super);
        function TowerMonster() {
            _super.apply(this, arguments);
        }
        var d = __define,c=TowerMonster,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        //@override
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var copyId = self.data.copyId;
            //图像
            var displayId = mo.getJSONWithFileNameAndID(gc.cfg_t_paTaTreasury, copyId)[gc.t_paTaTreasury_displayId];
            self.img_boss.source = resHelper.getWorldBossIconPath(displayId);
            //第几层
            self.label_num.text = gd.copyCtrl.getTowerIndex(copyId);
            self.img_fighting.visible = false;
            var focusId = gd.copyCtrl.getFocusTowerCopyId();
            var isPassed = gd.copyCtrl.isTwerPassed(copyId);
            self.img_pass.visible = isPassed;
            self.img_fighting.visible = false;
            self.img_canGet.visible = false;
            if (focusId == copyId) {
                if (isPassed) {
                    var awardArr = gd.copyCtrl.getIsAwardArr(copyId);
                    var received = awardArr[1];
                    self.img_pass.visible = received;
                    self.img_canGet.visible = awardArr[0] && !awardArr[1];
                }
                else {
                    self.img_fighting.visible = gd.copyCtrl.getHighPata() == copyId;
                }
            }
        };
        return TowerMonster;
    })(mo.gui.Comp);
    g_comp.TowerMonster = TowerMonster;
    egret.registerClass(TowerMonster,"g_comp.TowerMonster");
})(g_comp || (g_comp = {}));

/**
 * Created by Administrator on 2016/1/9.
 */
var g_tower;
(function (g_tower) {
    var Tower = (function (_super) {
        __extends(Tower, _super);
        function Tower() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Tower,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._refreshMonster();
            self.refreshUI();
        };
        p.refreshUI = function () {
            var self = this;
            var curTowerCopyId = self.curTowerCopyId = gd.copyCtrl.getFocusTowerCopyId();
            var t_paTa = mo.getJSONWithFileNameAndID(gc.cfg_t_paTaTreasury, curTowerCopyId);
            var passAward = t_paTa[gc.t_paTaTreasury_award];
            var previewCopyId = gd.copyCtrl.findSpAward(curTowerCopyId);
            uiHelper.setItemsGrp(self.grp_passAward, utils.kvArrItems2ObjArr(passAward));
            self.label_num.text = gd.copyCtrl.getTowerIndex(curTowerCopyId);
            self.grp_preview.visible = previewCopyId != null; //当前关不显示奖励预览
            if (self.grp_preview.visible) {
                self.label_spAwardLayerNum.text = gd.copyCtrl.getTowerIndex(previewCopyId);
            }
            var awardArr = gd.copyCtrl.getIsAwardArr(curTowerCopyId);
            self.btn_getAward.visible = awardArr[0] && !awardArr[1];
            self.btn_enter.visible = !awardArr[0];
            self.label_treasureNum.text = gd.copyCtrl.isFirstTowerCopyId() ? "通关第一层后开启妖塔宝库" :
                mo.STR.format("(第%s层宝库)", gd.copyCtrl.getTowerIndex(gd.copyCtrl.getTowerBaokuNum()));
        };
        p._refreshMonster = function () {
            var self = this;
            var copyIds = gd.copyCtrl.getTowerMonList();
            for (var i = 0, li = copyIds.length; i < li; ++i) {
                var copyId = copyIds[i];
                var tm = self['tm' + i];
                tm.setData({ copyId: copyId });
                tm.dataChanged();
            }
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 104 }).show();
        };
        p._tap_btn_rank = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.rank, { rankType: gc.c_prop.rankTypeKey.paTaRank });
        };
        p._tap_btn_enter = function () {
            var self = this;
            gd.fightCtrl.enterCopy(self.curTowerCopyId);
        };
        p._tap_btn_getAward = function () {
            var self = this;
            gd.copyCtrl.paTaAward(self.curTowerCopyId, function () {
                self.refreshUI();
                self._refreshMonster();
            }, self);
        };
        p._tap_btn_treasure = function () {
            var self = this;
            if (gd.copyCtrl.isFirstTowerCopyId())
                return mo.showMsg(gc.id_c_msgCode.noLevelDown);
            mo.moduleMgr.runModule(g_consts.moduleId.towerTreasury);
        };
        p._tap_img_preview = function () {
            var self = this;
            var curTowerCopyId = self.curTowerCopyId;
            var previewCopyId = gd.copyCtrl.findSpAward(curTowerCopyId);
            if (previewCopyId) {
                g_tower.TowerPreview.create().setData({ previewCopyId: previewCopyId }).show();
            }
        };
        return Tower;
    })(mo.gui.Dlg);
    g_tower.Tower = Tower;
    egret.registerClass(Tower,"g_tower.Tower");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Tower;
        moduleCfgItem.sysId = gc.id_c_open.paTa;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.copyCtrl.getPaTaInfo(function () {
                cb();
            }, this);
        });
    });
})(g_tower || (g_tower = {}));

