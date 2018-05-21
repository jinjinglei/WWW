/**
 * Created by Administrator on 2016/1/5.
 */
var g_lotus;
(function (g_lotus) {
    var LotusLayer = (function (_super) {
        __extends(LotusLayer, _super);
        function LotusLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=LotusLayer,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._comps = [];
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.tab_btn.selectedIndex = 0;
            self._comps.push(g_lotus.LotusDetail.create().setData({ tray: self.container }).show());
            self._comps.push(g_lotus.LotusLvUp.create().setData({ tray: self.container }).show());
            self._comps.push(g_lotus.LotusAdvUp.create().setData({ tray: self.container }).show());
            self._comps.push(g_lotus.LotusTrea.create().setData({ tray: self.container }).show());
            process.nextTick(function () {
                self._tap_tab_btn();
            });
            self._checkRed();
        };
        p._checkRed = function () {
            var self = this;
            self.red0.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.demonLotus_1);
            self.red3.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.demonLotus_2);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            //var data = self.data;//[是否周卡,是否月卡,gc.dsConsts.DemonLotusEntity]
            //var isZhou = data[0];
            //var isYue = data[1];
            //var entity = data[2];
            //var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
            //var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
            //var zhouBuffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 3);
            //var yueBuffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 4);
            self._tap_tab_btn();
        };
        p._tap_tab_btn = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            var curComp = self._comps[selectedIndex];
            for (var i = 0, li = self._comps.length; i < li; i++) {
                self._comps[i].visible = selectedIndex == i;
            }
            if (selectedIndex < 3) {
                self.grp_lotus.visible = true;
            }
            else {
                self.grp_lotus.visible = false;
            }
            if (curComp)
                curComp.dataChanged();
        };
        p._tap_btn_back = function () {
            //var self = this;
            //self.close();
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        p._tap_btn_help = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            var lotusInfo = mo.getJSONWithFileName(gc.cfg_c_demonLotus)[0];
            if (selectedIndex == 0) {
                var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.expBox);
                g_base.BaseShowTip.create().setData({ id: 31, param1: openInfo[gc.c_open_lvlRequired] }).show();
            }
            else if (selectedIndex == 1) {
                g_base.BaseShowTip.create().setData({ id: 47, param1: lotusInfo[gc.c_demonLotus_advNeedLvl] }).show();
            }
            else if (selectedIndex == 2) {
                g_base.BaseShowTip.create().setData({ id: 48 }).show();
            }
            else if (selectedIndex == 3) {
                g_base.BaseShowTip.create().setData({ id: 49 }).show();
            }
        };
        return LotusLayer;
    })(mo.gui.Layer);
    g_lotus.LotusLayer = LotusLayer;
    egret.registerClass(LotusLayer,"g_lotus.LotusLayer");
})(g_lotus || (g_lotus = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_lotus;
(function (g_lotus) {
    var LotusDetail = (function (_super) {
        __extends(LotusDetail, _super);
        function LotusDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=LotusDetail,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
            self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.advanceLvl.toString(), self.dataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self._timerId = setInterval(function () {
                var entity = gd.demonLotusCtrl.getData(); //gc.dsConsts.DemonLotusEntity
                var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
                var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
                var advLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
                var demonLotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, advLv);
                self.label_expTotal.text = utils.formatByWan(gd.demonLotusCtrl.calNowGet() >> 0, 1) + "/" + utils.formatByWan(lvInfo[gc.c_lvl_storeLimit] + demonLotusInfo[gc.c_demonLotus_expcAccLimit], 1);
            }, 1000);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            clearInterval(self._timerId);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var entity = gd.demonLotusCtrl.getData(); //gc.dsConsts.DemonLotusEntity
            var isZhou = false;
            var isYue = false;
            var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
            var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
            var zhouBuffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 3);
            var yueBuffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 4);
            var advLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
            var demonLotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, advLv);
            self.label_zhou.textColor = isZhou ? 0x26E80E : 0x949393;
            self.label_yue.textColor = isYue ? 0x26E80E : 0x949393;
            self.label_zhou.text = mo.STR.format("产量提升%s%", Math.floor(zhouBuffInfo[gc.t_otherBuff_addHurt] / 100)) + (isZhou ? "（已激活）" : "（未激活）");
            self.label_yue.text = mo.STR.format("产量提升%s%", Math.floor(yueBuffInfo[gc.t_otherBuff_addHurt] / 100)) + (isYue ? "（已激活）" : "（未激活）");
            self.label_lv.text = lv.toString();
            self.label_expTotal.text = utils.formatByWan(gd.demonLotusCtrl.calNowGet() >> 0, 1) + "/" + utils.formatByWan(lvInfo[gc.c_lvl_storeLimit] + demonLotusInfo[gc.c_demonLotus_expcAccLimit], 1);
            self.label_expPerHour.text = utils.formatByWan(Math.floor((lvInfo[gc.c_lvl_expOutput] + demonLotusInfo[gc.c_demonLotus_expOutput]) * 60), 0) + "/分钟";
        };
        p._tap_btn_get = function () {
            var self = this;
            var entity = gd.demonLotusCtrl.getData(); //gc.dsConsts.DemonLotusEntity
            var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
            var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
            gd.demonLotusCtrl.getRevenue(function () {
                var advLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
                var demonLotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, advLv);
                self.label_expTotal.text = 0 + "/" + utils.formatByWan(lvInfo[gc.c_lvl_storeLimit] + demonLotusInfo[gc.c_demonLotus_expcAccLimit], 1);
            }, self);
        };
        p._tap_btn_opening = function () {
            g_lotus.LotusOpeningDlg.create().show();
        };
        p._tap_btn_back = function () {
            //var self = this;
            //self.close();
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        p._tap_btn_help = function () {
            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.expBox);
            g_base.BaseShowTip.create().setData({ id: 31, param1: openInfo[gc.c_open_lvlRequired] }).show();
        };
        return LotusDetail;
    })(mo.gui.Layer);
    g_lotus.LotusDetail = LotusDetail;
    egret.registerClass(LotusDetail,"g_lotus.LotusDetail");
})(g_lotus || (g_lotus = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_lotus;
(function (g_lotus) {
    var LotusLvUp = (function (_super) {
        __extends(LotusLvUp, _super);
        function LotusLvUp() {
            _super.apply(this, arguments);
        }
        var d = __define,c=LotusLvUp,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var entity = gd.demonLotusCtrl.getData(); //gc.dsConsts.DemonLotusEntity
            var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
            var curLv = lv;
            var nextLv = curLv + 1;
            var curLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, curLv);
            var nextLvInfo = mo.getJSONWithFileName(gc.cfg_c_lvl)[nextLv];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0]);
            var maxLv = gameInfo[1];
            self.label_curLv.text = curLv.toString();
            self.label_curAdd.text = utils.formatByWan(Math.floor(curLvInfo[gc.c_lvl_expOutput] * 60), 0) + "/分钟";
            self.label_curTotal.text = utils.formatByWan(curLvInfo[gc.c_lvl_storeLimit], 1);
            if (curLv >= maxLv) {
                //满级
                self.label_cannotLvUp.visible = true;
                self.label_cannotLvUp.text = mo.STR.format("已升至最高级");
                self.grp_next.visible = false;
                self.grp_lvUp.visible = false;
                self.label_cannotLvUp.visible = true;
            }
            else {
                self.grp_next.visible = true;
                self.label_nextLv.text = nextLv.toString();
                self.label_nextAdd.text = utils.formatByWan(Math.floor(nextLvInfo[gc.c_lvl_expOutput] * 60), 0) + "/分钟";
                self.label_nextTotal.text = utils.formatByWan(nextLvInfo[gc.c_lvl_storeLimit], 1);
                self.label_itemName.text = itemInfo[gc.t_item_name];
                self.ico_item.source = resHelper.getItemIconPath(gameInfo[0]);
                if (gd.userCtrl.getLvl() < nextLvInfo[gc.c_lvl_needLvl]) {
                    self.label_cannotLvUp.visible = true;
                    self.grp_lvUp.visible = false;
                    self.label_cannotLvUp.text = mo.STR.format("%s级可继续升级", nextLvInfo[gc.c_lvl_needLvl]);
                }
                else {
                    self.label_cannotLvUp.visible = false;
                    self.grp_lvUp.visible = true;
                    self.label_itemNum.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + nextLvInfo[gc.c_lvl_upLotusNum];
                    self.label_cannotLvUp.visible = false;
                }
            }
        };
        p._tap_btn_lvUp = function () {
            var self = this;
            gd.demonLotusCtrl.upLotus(function (data) {
                self._winEfxPlayer.play();
                self.dataChanged();
            }, self);
        };
        return LotusLvUp;
    })(mo.gui.Layer);
    g_lotus.LotusLvUp = LotusLvUp;
    egret.registerClass(LotusLvUp,"g_lotus.LotusLvUp");
})(g_lotus || (g_lotus = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_lotus;
(function (g_lotus) {
    var LotusAdvUp = (function (_super) {
        __extends(LotusAdvUp, _super);
        function LotusAdvUp() {
            _super.apply(this, arguments);
        }
        var d = __define,c=LotusAdvUp,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var entity = gd.demonLotusCtrl.getData(); //gc.dsConsts.DemonLotusEntity
            var curLv = entity[gc.dsConsts.DemonLotusEntity.lvl] || 0;
            var curAdvLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
            var nextAdvLv = curAdvLv + 1;
            var curLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, curAdvLv);
            var nextLvInfo = mo.getJSONWithFileName(gc.cfg_c_demonLotus)[nextAdvLv];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0]);
            var isMax = nextLvInfo == null;
            self.label_curLv.text = curAdvLv.toString();
            self.label_curAdd.text = Math.floor(curLvInfo[gc.c_demonLotus_genqiAccLimit]) + ""; //真气加成
            self.label_curTotal.text = curLvInfo[gc.c_demonLotus_expcAccLimit] + ""; //经验上限加成
            self.label_curExpAdd.text = utils.formatByWan(Math.floor(curLvInfo[gc.c_demonLotus_expOutput] * 60), 0) + "/分钟"; //经验加成
            if (isMax) {
                //满级
                self.label_cannotLvUp.visible = true;
                self.label_cannotLvUp.text = mo.STR.format("已升至最高阶");
                self.grp_next.visible = false;
                self.grp_lvUp.visible = false;
                self.label_cannotLvUp.visible = true;
            }
            else {
                self.grp_next.visible = true;
                self.ico_item.source = resHelper.getItemIconPath(gameInfo[0]);
                self.label_nextLv.text = nextAdvLv.toString();
                self.label_nextAdd.text = Math.floor(nextLvInfo[gc.c_demonLotus_genqiAccLimit]);
                self.label_nextTotal.text = nextLvInfo[gc.c_demonLotus_expcAccLimit];
                self.label_nextExpAdd.text = utils.formatByWan(Math.floor(nextLvInfo[gc.c_demonLotus_expOutput] * 60), 0) + "/分钟";
                if (curLv < curLvInfo[gc.c_demonLotus_advNeedLvl]) {
                    self.label_cannotLvUp.visible = true;
                    self.grp_lvUp.visible = false;
                    self.label_cannotLvUp.text = mo.STR.format("妖莲升至%s级可进阶", curLvInfo[gc.c_demonLotus_advNeedLvl]);
                }
                else {
                    self.label_cannotLvUp.visible = false;
                    self.grp_lvUp.visible = true;
                    self.label_itemName.text = itemInfo[gc.t_item_name];
                    self.label_itemNum.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + curLvInfo[gc.c_demonLotus_advCosLotus];
                }
            }
        };
        p._tap_btn_lvUp = function () {
            var self = this;
            gd.demonLotusCtrl.lotusAdvance(function (data) {
                if (data[0]) {
                    self._winEfxPlayer.play();
                }
                else {
                    self._failEfxPlayer.play();
                }
                self.dataChanged();
            }, self);
        };
        return LotusAdvUp;
    })(mo.gui.Layer);
    g_lotus.LotusAdvUp = LotusAdvUp;
    egret.registerClass(LotusAdvUp,"g_lotus.LotusAdvUp");
})(g_lotus || (g_lotus = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_lotus;
(function (g_lotus) {
    var LotusTrea = (function (_super) {
        __extends(LotusTrea, _super);
        function LotusTrea() {
            _super.apply(this, arguments);
        }
        var d = __define,c=LotusTrea,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.advanceLvl.toString(), self.dataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var entity = gd.demonLotusCtrl.getData(); //gc.dsConsts.DemonLotusEntity
            var curAvdLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
            var curTreaLv = entity[gc.dsConsts.DemonLotusEntity.treasureLvl] || 0;
            var nextTreaLv = curTreaLv + 1;
            var curLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, curTreaLv);
            var nextLvInfo = mo.getJSONWithFileName(gc.cfg_c_demonLotus)[nextTreaLv];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0]);
            var isMax = nextLvInfo == null;
            self.label_curLv.text = "Lv." + curTreaLv.toString();
            self.label_curProp.text = self.getPropStr(curLvInfo[gc.c_demonLotus_treaPropertys]);
            if (isMax) {
                //满级
                self.label_cannotLvUp.visible = true;
                self.label_cannotLvUp.text = mo.STR.format("已升至最高阶");
                self.grp_next.visible = false;
                self.grp_lvUp.visible = false;
                self.label_cannotLvUp.visible = true;
            }
            else {
                self.grp_next.visible = true;
                var zhenQiId = gc.c_prop.spItemIdKey.genuineQi;
                self.ico_item0.source = resHelper.getItemIconPath(gameInfo[0]);
                self.ico_item1.source = resHelper.getItemIconPath(zhenQiId);
                self.label_nextLv.text = "Lv." + nextTreaLv.toString();
                self.label_nextProp.text = self.getPropStr(nextLvInfo[gc.c_demonLotus_treaPropertys]);
                if (gd.userCtrl.getLvl() < curLvInfo[gc.c_demonLotus_treaNeedUserLvl]) {
                    self.label_cannotLvUp.visible = true;
                    self.grp_lvUp.visible = false;
                    self.label_cannotLvUp.text = mo.STR.format("人物升至%s级可培养莲宝", curLvInfo[gc.c_demonLotus_treaNeedUserLvl]);
                }
                else {
                    self.label_cannotLvUp.visible = false;
                    self.grp_lvUp.visible = true;
                    self.label_itemName0.text = itemInfo[gc.t_item_name];
                    self.label_itemNum0.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + curLvInfo[gc.c_demonLotus_treaCosLotus];
                    self.label_itemName1.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, zhenQiId)[gc.t_item_name];
                    var data = gd.demonLotusCtrl.calGenuineQi();
                    self.label_itemNum1.text = +data[0] + "/" + curLvInfo[gc.c_demonLotus_treaCosGenqi];
                }
            }
        };
        p.getPropStr = function (props) {
            var str = "";
            for (var i = 0; i < props.length; ++i) {
                var s = mo.STR.format("%s %s", gc.c_prop.heroProp[props[i][0]], props[i][1]);
                s += "[/br]";
                str += s;
            }
            return str;
        };
        p._tap_btn_trea = function () {
            var self = this;
            gd.demonLotusCtrl.treasureTrain(function (data) {
                if (data[0]) {
                    self._winEfxPlayer.play();
                }
                else {
                    self._failEfxPlayer.play();
                }
                self.dataChanged();
            }, self);
        };
        return LotusTrea;
    })(mo.gui.Layer);
    g_lotus.LotusTrea = LotusTrea;
    egret.registerClass(LotusTrea,"g_lotus.LotusTrea");
})(g_lotus || (g_lotus = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_lotus;
(function (g_lotus) {
    var LotusOpeningDlg = (function (_super) {
        __extends(LotusOpeningDlg, _super);
        function LotusOpeningDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=LotusOpeningDlg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._refreshUi();
            self.openingEfxPlayer = uiHelper.EfxPlayer.create(self.efx_opening);
        };
        p._refreshUi = function () {
            var self = this;
            var data = gd.demonLotusCtrl.getOpeningData();
            self.label_lotusLvl.text = data.lotusLvl;
            self.label_openingDay.text = data.conDays;
            self.label_add.text = data.addMult / 100;
            self.label_lmt.text = data.maxMult / 100;
            self.label_cost.text = data.cost;
            self.label_exp.text = data.exp / 10000;
            self.label_leftNum.text = [data.vip, data.leftNum, data.openingCount];
        };
        p._upOpening = function () {
            var self = this;
            self._refreshUi();
            self.openingEfxPlayer.play();
        };
        p._tap_btn_opening = function () {
            var self = this;
            gd.demonLotusCtrl.opening(self._upOpening, self);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 38 }).show();
        };
        return LotusOpeningDlg;
    })(mo.gui.Dlg);
    g_lotus.LotusOpeningDlg = LotusOpeningDlg;
    egret.registerClass(LotusOpeningDlg,"g_lotus.LotusOpeningDlg");
})(g_lotus || (g_lotus = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_lotus;
(function (g_lotus) {
    var LotusScene = (function (_super) {
        __extends(LotusScene, _super);
        function LotusScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=LotusScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            g_lotus.LotusLayer.create().setData(self.moduleParam.data).show();
        };
        return LotusScene;
    })(mo.gui.UIScene);
    g_lotus.LotusScene = LotusScene;
    egret.registerClass(LotusScene,"g_lotus.LotusScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = LotusScene;
        moduleCfgItem.sysId = gc.id_c_open.expBox; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.demonLotusCtrl.getInfo(function (data) {
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
})(g_lotus || (g_lotus = {}));

