/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_medal;
(function (g_medal) {
    var MedalCell = (function (_super) {
        __extends(MedalCell, _super);
        function MedalCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MedalCell,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var dataCtrl = self.data;
            var ico_item = self.ico_item;
            self.name = "cell_" + dataCtrl.tempId;
            ico_item.set('itemId', dataCtrl.tempId);
            self.ico_item.set('count', dataCtrl.count);
            self.ico_item.label_text.visible = false;
            self.label_name.text = dataCtrl.name;
        };
        return MedalCell;
    })(mo.gui.ItemRenderer);
    g_medal.MedalCell = MedalCell;
    egret.registerClass(MedalCell,"g_medal.MedalCell");
})(g_medal || (g_medal = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_medal;
(function (g_medal) {
    var dsConsts = gc.dsConsts;
    var MedalAchiItem = (function (_super) {
        __extends(MedalAchiItem, _super);
        function MedalAchiItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MedalAchiItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            self.ico_item.set('itemId', data[gc.t_medal_id]);
            self.label_name.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, data[gc.t_medal_id])[gc.t_item_name];
            self.label_loot.text = data[gc.t_medal_outputWay];
            //获取进度
            var lootArg = data[gc.t_medal_lootArg];
            var hasLottArg = lootArg != null;
            self.label_lootArg.visible = self.label_lootArg.includeInLayout = hasLottArg;
            if (hasLottArg) {
                var strTemp = "%s/%s";
                var type = lootArg[0], curNum = 0, maxNum = lootArg[1];
                if (type == 1) {
                    curNum = gd.pkOutCtrl.getAccWinCount();
                }
                if (type == 2) {
                    curNum = gd.userCtrl.get(dsConsts.UserEntity.coffersKillNum);
                }
                self.label_lootArg.text = mo.STR.format(strTemp, curNum, maxNum);
            }
        };
        p._tap_btn_detail = function () {
            var self = this;
            g_medal.PrintDetail.create().setData(self.data).show();
        };
        return MedalAchiItem;
    })(mo.gui.ItemRenderer);
    g_medal.MedalAchiItem = MedalAchiItem;
    egret.registerClass(MedalAchiItem,"g_medal.MedalAchiItem");
})(g_medal || (g_medal = {}));

/**
 * Created by Administrator on 2016/1/9.
 */
var g_medal;
(function (g_medal) {
    var Medal = (function (_super) {
        __extends(Medal, _super);
        function Medal() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Medal,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self.tabIndex = 0;
            self.tabCompArr = null;
            self.tabCompArr = [];
            self._Item_list_print = g_medal.PrintItem;
            self._Item_list_medal = g_medal.MedalCell;
            self._Item_list_achivement = g_medal.MedalAchiItem;
            self.warPrints = [];
            self.registerClassByKey(gd.userCtrl, gc.dsConsts.UserEntity.medalTitle.toString(), self._refreshUI);
            self.registerClassByKey(gd.MedalCtrl, gd.MedalCtrl.ON_STR_SUCC, self._refreshUI);
            self.registerClassByKey(gd.MedalCtrl, gd.MedalCtrl.ON_ACTVATE_SUCC, self._refreshUI);
            self.registerClassByKey(gd.userCtrl, gc.dsConsts.UserEntity.bag.toString(), self._refreshMedalGrp);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.grp_combat.visible = false;
            self.grp_print.visible = false;
            self.grp_medal.visible = false;
            self.img_printRed.visible = false;
            self.tabCompArr = [self.grp_combat, self.grp_print, self.grp_medal, self.grp_achivement];
            self.tab_medal.selectedIndex = 0;
            process.nextTick(function () {
                self._tap_tab_medal();
            });
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 44 }).show();
        };
        p._tap_img_printBg = function () {
            var self = this;
            var medalCtrl = gd.medalCtrl;
            var medalId = medalCtrl.getMedalTitle();
            var hasMedalId = !!medalId;
            if (!hasMedalId && self.warPrints.length == 0)
                return mo.showMsg(gc.id_c_msgCode.noMedalActivated);
            g_medal.MedalChange.create().show();
        };
        p._tap_tab_medal = function () {
            var self = this;
            var selectedIndex = self.tabIndex = self.tab_medal.selectedIndex;
            var tabCompArr = self.tabCompArr;
            var curComp = tabCompArr[selectedIndex];
            if (!curComp)
                return;
            for (var i = 0, l_i = tabCompArr.length; i < l_i; i++) {
                var locComp = tabCompArr[i];
                locComp.visible = false;
            }
            self._refreshUI();
            curComp.visible = true;
        };
        p._refreshUI = function () {
            var self = this;
            self._refreshTabComp();
            self.img_printRed.visible = gd.medalCtrl.isMedalUp().length > 0 || gd.medalCtrl.getToBeActivatedList().length > 0;
        };
        p._refreshTabComp = function () {
            var self = this, selectedIndex = self.tabIndex;
            if (selectedIndex == 0) {
                self._refreshCombatGrp();
            }
            else if (selectedIndex == 1) {
                self._refreshPrintGrp();
            }
            else if (selectedIndex == 2) {
                self._refreshMedalGrp();
            }
            else if (selectedIndex == 3) {
                self._refreshAchivementGrp();
            }
        };
        p._refreshCombatGrp = function () {
            var self = this;
            var medalCtrl = gd.medalCtrl;
            var medalId = medalCtrl.getMedalTitle();
            self.warPrints = medalCtrl.getWarPrintedList();
            self.img_onNoPrint.source = self.warPrints.length ? "ico_kepeidai" : "ico_wuzhanyind";
            var hasMedalId = !!medalId;
            self.ico_medalItem.visible = hasMedalId;
            self.img_onNoPrint.visible = !hasMedalId;
            setProps(self.grp_props, medalCtrl.getTotalPrintProperty(), 4);
            if (medalId) {
                self.ico_medalItem.setData({ itemId: medalId });
            }
        };
        p._refreshPrintGrp = function () {
            var self = this;
            var medalCtrl = gd.medalCtrl;
            var data = self.warPrints = medalCtrl.getAllWarPrintList();
            self.warPrints.sort(function (data1, data2) {
                var itemId1 = data1[0];
                var itemId2 = data2[0];
                var itemInfo1 = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId1);
                var itemInfo2 = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId2);
                var strId1 = gd.medalCtrl.transWarPrintData(itemId1)[1];
                var medalLvInfos = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
                var medalLvInfo1 = medalLvInfos[itemId1 * 100 + strId1 + 1];
                var strId2 = gd.medalCtrl.transWarPrintData(itemId2)[1];
                var medalLvInfo2 = medalLvInfos[itemId2 * 100 + strId2 + 1];
                var activeLvEnough1 = gd.userCtrl.getLvl() >= itemInfo1[gc.t_item_level];
                var activeLvEnough2 = gd.userCtrl.getLvl() >= itemInfo2[gc.t_item_level];
                var canActive1 = (!gd.medalCtrl.isActiveMedal(itemId1) && activeLvEnough1) ? 1 : 0;
                var canActive2 = (!gd.medalCtrl.isActiveMedal(itemId2) && activeLvEnough2) ? 1 : 0;
                var strItemEnough1 = gd.medalCtrl.isMedalItemEnough(itemId1);
                var strItemEnough2 = gd.medalCtrl.isMedalItemEnough(itemId2);
                var strLvEnough1 = !medalLvInfo1 || gd.userCtrl.getLvl() >= medalLvInfo1[gc.t_medalLvl_needLvl];
                var strLvEnough2 = !medalLvInfo2 || gd.userCtrl.getLvl() >= medalLvInfo2[gc.t_medalLvl_needLvl];
                var canStr1 = (strItemEnough1 && strLvEnough1) ? 1 : 0;
                var canStr2 = (strItemEnough2 && strLvEnough2) ? 1 : 0;
                if (canActive1 != canActive2) {
                    return canActive1 ? -1 : 1;
                }
                if (canStr1 != canStr2) {
                    return canStr1 ? -1 : 1;
                }
                if (strItemEnough1 != strItemEnough2) {
                    return strItemEnough1 ? 1 : -1;
                }
                if (!strLvEnough1 && !strLvEnough2) {
                    return medalLvInfo1[gc.t_medalLvl_needLvl] - medalLvInfo2[gc.t_medalLvl_needLvl];
                }
                if (activeLvEnough1 != activeLvEnough2) {
                    return itemInfo1[gc.t_item_level] - itemInfo2[gc.t_item_level];
                }
                var score1 = gd.medalCtrl.transWarPrintData(itemId1)[2];
                var score2 = gd.medalCtrl.transWarPrintData(itemId2)[2];
                if (score1 != score2) {
                    return score2 - score1;
                }
                return itemId1 - itemId2;
            });
            self.refreshList("list_print");
            self.label_noPrints.visible = self.warPrints.length == 0;
        };
        p._data_list_print = function () {
            var self = this, filter, sorter;
            return self.warPrints;
        };
        p._refreshMedalGrp = function () {
            var self = this;
            self.refreshList("list_medal");
        };
        p._data_list_medal = function () {
            var self = this, filter, sorter;
            var BDC = gd.BagDataCtrl;
            var list = BDC.getList(BDC.getFilterOpt(5), BDC.getSortOpt(5));
            self.label_noMedal.visible = list.length == 0;
            return list;
        };
        p._click_list_medal = function (event) {
            var self = this;
            var bdc = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: bdc }).show();
        };
        p._refreshAchivementGrp = function () {
            var self = this;
        };
        p._data_list_achivement = function () {
            var self = this;
            return gd.medalCtrl.getAchievmentMedal();
        };
        return Medal;
    })(mo.gui.Dlg);
    g_medal.Medal = Medal;
    egret.registerClass(Medal,"g_medal.Medal");
    /**
     * 设置属性
     * |属性1         |属性 splitNum+1
     * |属性2         |属性 splitNum+2
     * |属性splitNum  |属性 splitNum+3
     * @param grp
     * @param props 属性数组:[[属性类型,属性值],[属性类型,属性值],...]
     * @param splitNum 一列最多显示几个属性
     */
    function setProps(grp, props, splitNum) {
        var needPart = Math.ceil(props.length / splitNum);
        for (var i = 0, li = needPart; i < li; i++) {
            var label = grp.getChildByName('prop_part' + i);
            if (!label)
                break;
            var str = '';
            for (var j = 0, lj = splitNum; j < lj; j++) {
                var idx = j + (i * splitNum);
                var prop = props[idx];
                if (!prop)
                    break;
                str += mo.STR.format("[ubb color=#ebcd50]%s: [/ubb][ubb color=#4aca00] +%s[/ubb]", gc.c_prop.equipProp[prop[0]], prop[1]);
                if ((j + 1) < lj)
                    str += "[/br]";
            }
            label.text = str;
        }
    }
    g_medal.setProps = setProps;
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Medal;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_medal || (g_medal = {}));

/**
 * Created by lihex on 2/27/16.
 */
var g_medal;
(function (g_medal) {
    var MedalChooseItem = (function (_super) {
        __extends(MedalChooseItem, _super);
        function MedalChooseItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MedalChooseItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //[勋章id,强化等级,评分]
            self.ico_medalItem.setData({ itemId: data[0] });
        };
        p._tap_btn_equip = function () {
            var self = this;
            gd.medalCtrl.setMedalTitle(self.data[0], function () {
                self.delegate.close();
            }, self);
        };
        return MedalChooseItem;
    })(mo.gui.ItemRenderer);
    g_medal.MedalChooseItem = MedalChooseItem;
    egret.registerClass(MedalChooseItem,"g_medal.MedalChooseItem");
})(g_medal || (g_medal = {}));

/**
 * Created by lihex on 2/27/16.
 */
var g_medal;
(function (g_medal) {
    var MedalChange = (function (_super) {
        __extends(MedalChange, _super);
        function MedalChange() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MedalChange,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_print = g_medal.MedalChooseItem;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            self.dataChanged();
        };
        p.getCurrentSkinState = function () {
            var self = this;
            return gd.medalCtrl.getMedalTitle() ? "change" : "choose";
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var medalCtrl = gd.medalCtrl;
            self.warPrints = [];
            var data = medalCtrl.getWarPrintedList(gd.medalCtrl.getMedalTitle() ? 1 : 0);
            for (var i = 0; i < data.length; ++i) {
                if (gd.medalCtrl.isActiveMedal(data[i][0])) {
                    self.warPrints.push(data[i]);
                }
            }
            self.refreshList("list_print");
            var medalId = medalCtrl.getMedalTitle();
            if (medalId) {
                var info = medalCtrl.getWarPrintData(medalId);
                self.ico_medalItem.setData({ itemId: medalId });
            }
        };
        p._data_list_print = function () {
            var self = this, filter, sorter;
            return self.warPrints;
        };
        return MedalChange;
    })(mo.gui.Dlg);
    g_medal.MedalChange = MedalChange;
    egret.registerClass(MedalChange,"g_medal.MedalChange");
})(g_medal || (g_medal = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_medal;
(function (g_medal) {
    var PrintItem = (function (_super) {
        __extends(PrintItem, _super);
        function PrintItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PrintItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.img_red.visible = false;
            self.ico_medalItem.noAnimate = true;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //[勋章id,强化等级,评分]
            var itemId = data[0];
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            self.ico_item.set('itemId', data[0]);
            self.ico_item.label_text.visible = false;
            self.label_strLvl.text = data[1];
            self.label_grade.text = data[2];
            self.ico_medalItem.setData({ itemId: itemId });
            if (gd.medalCtrl.isActiveMedal(itemId)) {
                var medalLvInfos = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
                var nextMedalLvInfo = medalLvInfos[itemId * 100 + data[1] + 1];
                self.btn_str.visible = true;
                self.btn_active.visible = false;
                self.label_cannotActive.visible = false;
                if (!nextMedalLvInfo || gd.userCtrl.getLvl() >= nextMedalLvInfo[gc.t_medalLvl_needLvl]) {
                    self.label_cannotStr.visible = false;
                    self.img_red.visible = gd.medalCtrl.isMedalItemEnough(itemId);
                }
                else {
                    self.label_cannotStr.visible = true;
                    self.label_cannotStr.text = nextMedalLvInfo[gc.t_medalLvl_needLvl];
                    self.img_red.visible = false;
                }
            }
            else {
                self.btn_str.visible = false;
                self.btn_active.visible = true;
                self.label_cannotStr.visible = false;
                if (gd.userCtrl.getLvl() >= itemInfo[gc.t_item_level]) {
                    self.label_cannotActive.visible = false;
                    self.img_red.visible = true;
                }
                else {
                    self.label_cannotActive.visible = true;
                    self.label_cannotActive.text = itemInfo[gc.t_item_level];
                    self.img_red.visible = false;
                }
            }
            var t_medal = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, itemId);
            var metalType = t_medal[gc.t_medal_metalType];
            self.label_medal.visible = metalType == 3;
            if (metalType == 3) {
                self.label_medal.text = itemInfo[gc.t_item_name];
            }
        };
        p._tap_btn_str = function () {
            var self = this;
            g_medal.PrintStr.create().setData({ itemId: self.data[0] }).show();
        };
        p._tap_btn_active = function () {
            var self = this;
            gd.medalCtrl.activeMedal(self.data[0], function () {
                self.delegate._refreshPrintGrp();
            }, self);
        };
        PrintItem.ON_BTN_EQUIP = "on_btn_equip";
        return PrintItem;
    })(mo.gui.ItemRenderer);
    g_medal.PrintItem = PrintItem;
    egret.registerClass(PrintItem,"g_medal.PrintItem");
})(g_medal || (g_medal = {}));

/**
 * Created by lihex on 2/25/16.
 */
var g_medal;
(function (g_medal) {
    var PrintDetail = (function (_super) {
        __extends(PrintDetail, _super);
        function PrintDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PrintDetail,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.MedalCtrl, gd.MedalCtrl.ON_STR_SUCC, function () {
                self.setData(gd.medalCtrl.transWarPrintData(self.data[0]));
            });
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //[勋章id,强化等级,评分]
            var itemId = data[0];
            var strId = gd.medalCtrl.getStrId(itemId, data[1]);
            var props = gd.medalCtrl.getStrProperty(itemId, strId);
            g_medal.setProps(self.grp_props, props, 4);
            self.label_strLvl.text = data[1];
            self.ico_medalItem.setData({ itemId: itemId });
            var t_medal = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, itemId);
            self.label_loot.text = t_medal[gc.t_medal_outputWay];
        };
        p._tap_btn_str = function () {
            var self = this;
            g_medal.PrintStr.create().setData({ itemId: self.data[0] }).show();
        };
        return PrintDetail;
    })(mo.gui.Dlg);
    g_medal.PrintDetail = PrintDetail;
    egret.registerClass(PrintDetail,"g_medal.PrintDetail");
})(g_medal || (g_medal = {}));

/**
 * Created by lihex on 2/25/16.
 */
var g_medal;
(function (g_medal) {
    var PrintStr = (function (_super) {
        __extends(PrintStr, _super);
        function PrintStr() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PrintStr,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.bag.toString(), self.dataChanged);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.lvl.toString(), self.dataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ico_item0.label_text.visible = false;
            self.ico_item1.label_text.visible = false;
            self.ico_item.label_text.visible = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var itemId = self.data.itemId;
            self.ico_item.set('itemId', itemId);
            self.ico_medalItem.setData(self.data);
            self._setBeforeEquipInfo(self.grp_before);
            self._setAfterEquipInfo(self.grp_after);
            self._setRequireItems();
            var strId = gd.medalCtrl.getWarPrintData(itemId)[0];
            var medalLvInfos = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
            var medalLvInfo = medalLvInfos[strId + 1];
            if (!medalLvInfo || gd.userCtrl.getLvl() >= medalLvInfo[gc.t_medalLvl_needLvl]) {
                self.label_cannotStr.visible = false;
            }
            else {
                self.label_cannotStr.visible = true;
                self.label_cannotStr.text = medalLvInfo[gc.t_medalLvl_needLvl];
            }
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 44 }).show();
        };
        p._tap_btn_str = function () {
            var self = this;
            var itemId = gd.medalCtrl.transWarPrintData(self.data.itemId)[0];
            var medalLvInfos = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
            var nextMedalLvInfo = medalLvInfos[itemId * 100 + 1];
            if (nextMedalLvInfo && gd.userCtrl.getLvl() < nextMedalLvInfo[gc.t_medalLvl_needLvl]) {
                return mo.showMsg(gc.id_c_msgCode.NoLvlOpen);
            }
            var opt = gd.medalCtrl.getWarPrintStrOpt(self.data.itemId);
            if (!opt.isItemEnough) {
                if (!opt.medalEnough)
                    return mo.showMsg(gc.id_c_msgCode.noMedal); //勋章不足
                for (var i = 0, li = opt.reqItems.length; i < li; i++) {
                    var reqCfg = opt.reqItems[i];
                    var itemId = reqCfg[0];
                    var itemType = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId)[gc.t_item_type];
                    //碎片不足
                    if (itemType != gc.c_prop.itemTypeKey.medal && reqCfg[1] > gd.userCtrl.getItemNum(itemId)) {
                        if (g_base.GainWay.canBuyFromShop(itemId)) {
                            g_base.GainWayShop.create().setData({ itemId: itemId, count: reqCfg[1] }).show().onClose(function () {
                                self.dataChanged();
                            });
                        }
                        else {
                            g_base.GainWay.create().setData({ itemId: itemId }).show();
                        }
                        break;
                    }
                }
                return;
            }
            gd.medalCtrl.warPrintedStrength(opt, function () {
                self.dataChanged();
            }, self);
        };
        p._tap_ico_item0 = function () {
            var self = this;
            self.on_ico_item(0);
        };
        p._tap_ico_item1 = function () {
            var self = this;
            self.on_ico_item(1);
        };
        p.on_ico_item = function (idx) {
            var self = this;
            var itemId = self.data.itemId;
            var opt = gd.medalCtrl.getWarPrintStrOpt(itemId);
            var reqItems = opt.reqItems;
            var reqCfg = reqItems[idx];
            var bdc = gd.BagDataCtrl.create(reqCfg[0], 1);
            g_base.BaseItemDetail.create().setData({ bdc: bdc }).show();
        };
        p._setRequireItems = function () {
            var self = this;
            var itemId = self.data.itemId;
            var opt = gd.medalCtrl.getWarPrintStrOpt(itemId);
            var reqItems = opt.reqItems;
            var reqCfg = reqItems[0];
            self.grp_item0.visible = reqCfg != null;
            var strTemp = "%s: %s/%s";
            if (reqCfg) {
                var reqItemId = reqCfg[0];
                var reqNum = reqCfg[1];
                self.ico_item0.setData({ itemId: reqItemId });
                self.label_reqItem0.text = mo.STR.format(strTemp, self.ico_item0.label_text.text, gd.userCtrl.getItemNum(reqItemId), reqNum);
            }
            reqCfg = reqItems[1];
            self.grp_item1.visible = reqCfg != null;
            if (reqCfg) {
                var reqItemId = reqCfg[0];
                var reqNum = reqCfg[1];
                self.ico_item1.setData({ itemId: reqItemId });
                self.label_reqItem1.text = mo.STR.format(strTemp, self.ico_item1.label_text.text, gd.userCtrl.getItemNum(reqItemId), reqNum);
            }
        };
        p._setAfterEquipInfo = function (grp) {
            var self = this;
            var itemId = self.data.itemId;
            var label_name_lvl = grp.getChildByName('label_name_lvl');
            var label_score = grp.getChildByName('label_score');
            var label_props = grp.getChildByName("grp_props").getChildByName('label_props');
            var opt = gd.medalCtrl.getWarPrintStrOpt(itemId);
            self.grp_strReq.visible = !opt.isStrMax;
            self.grp_after.visible = !opt.isStrMax;
            self.grp_max.visible = opt.isStrMax;
            self.btn_str.visible = !opt.isStrMax;
            if (!opt.isStrMax) {
                var strId = opt.nextStrId;
                var t_medalLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_medalLvl, strId);
                label_name_lvl.text = mo.STR.format("[ubb color=#E8CA47]强化+%s[/ubb]", t_medalLvl[gc.t_medalLvl_lvl]);
                label_score.text = t_medalLvl[gc.t_medalLvl_grade];
                var props = gd.medalCtrl.getStrProperty(itemId, strId, false);
                var strTemp1 = "[ubb color=green]%s: +%s[/ubb][/br]";
                var propData, str = "";
                for (var i = 0, li = props.length; i < li; i++) {
                    propData = props[i];
                    var key = propData[0];
                    var baseV = propData[1];
                    str += mo.STR.format(strTemp1, gc.c_prop.equipProp[key], baseV);
                }
                label_props.text = str;
            }
        };
        p._setBeforeEquipInfo = function (grp) {
            var self = this;
            var itemId = self.data.itemId;
            var label_name_lvl = grp.getChildByName('label_name_lvl');
            var label_score = grp.getChildByName('label_score');
            var label_props = grp.getChildByName("grp_props").getChildByName('label_props');
            var strId = gd.medalCtrl.getWarPrintData(itemId)[0];
            var t_medalLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_medalLvl, strId);
            label_name_lvl.text = mo.STR.format("[ubb color=#E8CA47]强化+%s[/ubb]", t_medalLvl[gc.t_medalLvl_lvl]);
            label_score.text = t_medalLvl[gc.t_medalLvl_grade];
            var props = gd.medalCtrl.getStrProperty(itemId, strId, false);
            var strTemp1 = "[ubb]%s: +%s[/ubb][/br]";
            var propData, str = "";
            for (var i = 0, li = props.length; i < li; i++) {
                propData = props[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(strTemp1, gc.c_prop.equipProp[key], baseV);
            }
            label_props.text = str;
        };
        return PrintStr;
    })(mo.gui.Dlg);
    g_medal.PrintStr = PrintStr;
    egret.registerClass(PrintStr,"g_medal.PrintStr");
})(g_medal || (g_medal = {}));

