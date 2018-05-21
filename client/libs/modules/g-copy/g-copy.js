/**
 * Created by lihex on 3/28/16.
 */
var g_copy;
(function (g_copy) {
    g_copy.vipBg = {
        7: ["icon_linyunsmg", "tit_txt_g_linyunsm"],
        10: ["icon_ditumeixindongfu", "tit_txt_g_meixindongfu"],
        14: ["icon_ditufengmoshendian", "tit_txt_g_fengmosendian"],
        17: ["icon_dituhuangquangk", "tit_txt_g_huangquanguiku"],
        19: ["icon_dituhaidimizen", "tit_txt_g_haidimizen"],
        20: ["icon_jiqinqidaidixin", "tit_txt_g_haidimizen"]
    };
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_copy;
(function (g_copy) {
    /**
     *
     * @author
     *
     */
    var BossCopy = (function (_super) {
        __extends(BossCopy, _super);
        function BossCopy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BossCopy,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_base.BaseItemCell;
            self._Item_list_copys = g_copy.BossCopyItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.bossAP = new g_base.ActionPlayer();
            self.bossAP.scaleX = self.bossAP.scaleY = 1.6;
            self.ico_monster.source = self.bossAP;
            self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var copyList = self.data.copyList;
            self.copyId = g_copy.curBossCopyId || gd.copyCtrl.getCurBossCopyId();
            self.list_copys.selectedItem = self.copyId;
            self.setCopyInfo(self.copyId);
        };
        p._tap_btn_enter = function () {
            var self = this;
            var needInfo = gd.copyCtrl.getBoosCopyEnterCost();
            var needItemId = needInfo[0];
            var needNum = needInfo[1];
            if (gd.userCtrl.getItemNum(needItemId) < needNum) {
                var itemId = gc.c_prop.spItemIdKey.bossTessera;
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({ itemId: itemId }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
                return;
            }
            gd.fightCtrl.enterCopy(this.copyId);
        };
        p._data_list_items = function () {
            var self = this;
            return gd.userUtils.getLoots(self.copyId ? gd.copyCtrl.getCopyLootList(self.copyId) : []);
        };
        p._data_list_copys = function () {
            var self = this;
            var copyList = [].concat(self.data.copyList);
            var nowLen = copyList.length;
            var tempList = gd.copyCtrl.getBossCopyTempList();
            //没有全部打通的情况下，倒数第一个副本为未解锁副本
            if (copyList.length < 3) {
                for (var i = 0, li = 3 - nowLen; i < li; i++) {
                    copyList.push(tempList[nowLen + i]);
                }
            }
            else {
                copyList = copyList.length == tempList.length ? copyList : copyList.concat(tempList[copyList.length]);
            }
            return copyList;
        };
        p._click_list_copys = function (event) {
            var self = this;
            var copyId = event.item;
            self.setCopyInfo(copyId);
        };
        p.setCopyInfo = function (copyId) {
            var self = this;
            self.copyId = copyId;
            g_copy.curBossCopyId = copyId;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            self.refreshList("list_items");
            self.label_rest.text = gd.copyCtrl.getCopyCount(self.copyId);
            //消耗
            var cfg = gd.copyCtrl.getBoosCopyEnterCost();
            uiHelper.setResGrp(self.grp_res, cfg[0], cfg[1]);
            //令牌拥有情况
            var bossTessera = gc.c_prop.spItemIdKey.bossTessera;
            var bossTesseraReplace = gc.c_prop.spItemIdKey.bossTesseraReplace;
            uiHelper.setResGrp(self.grp_boss_token, bossTessera, gd.userCtrl.getItemNum(bossTessera));
            uiHelper.setResGrp(self.grp_boss_token2, bossTesseraReplace, gd.userCtrl.getItemNum(bossTesseraReplace));
            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
            var passCon = gd.copyCtrl.getPassCon(copyId);
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, copyInfo[gc.t_copy_bossID]);
            self.titleDisplay.text = [monsterInfo[gc.t_monster_name], mo.STR.format("%s级", monsterInfo[gc.t_monster_level])];
            self.label_bossHp.text = utils.formatByWan(monsterInfo[gc.t_monster_maxHp]);
            self.label_combat.text = utils.formatByWan(monsterInfo[gc.t_monster_combat]);
            var idStr = monsterInfo[gc.t_monster_displayID];
            self.bossAP.loadRes("m" + idStr + "_4s", true);
            self.bossAP.playAction();
            //设置滚动条位置
            process.nextTick(function () {
                process.nextTick(function () {
                    var idx = self.list_copys.dataProvider.getItemIndex(self.copyId);
                    var pos = ((idx > 0) ? (idx - 1) : idx) * (83 + 47);
                    self.list_copys.scroller.throwHorizontally(pos);
                });
            });
        };
        p._tap_btn_left = function () {
            var self = this;
            var pos = self.list_copys.dataGroup.horizontalScrollPosition;
            pos -= 83 + 47;
            self.list_copys.scroller.throwHorizontally(pos);
        };
        p._tap_btn_right = function () {
            var self = this;
            var pos = self.list_copys.dataGroup.horizontalScrollPosition;
            pos += 83 + 47;
            self.list_copys.scroller.throwHorizontally(pos);
        };
        p.click_btn_close = function () {
            var self = this;
            g_copy.curBossCopyId = null;
            self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
        };
        p._tap_btn_buy_bossTicket = function () {
            var self = this;
            var itemId = gc.c_prop.spItemIdKey.bossTessera;
            if (g_base.GainWay.canBuyFromShop(itemId)) {
                g_base.GainWayShop.create().setData({ itemId: itemId }).show().onClose(function () {
                    self.dataChanged();
                });
            }
            else {
                g_base.GainWay.create().setData({ itemId: itemId }).show();
            }
        };
        p._tap_btn_info = function () {
            var self = this;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.bossTesseraReplace);
            var param1 = gameCfg[0];
            var param2 = gameCfg[1];
            var param3 = gd.userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.bossTesseraReplace);
            g_base.BaseShowTip.create().setData({ id: 14, param1: param1, param2: param2, param3: param3 }).show();
        };
        return BossCopy;
    })(mo.gui.Dlg);
    g_copy.BossCopy = BossCopy;
    egret.registerClass(BossCopy,"g_copy.BossCopy");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = BossCopy;
        moduleCfgItem.sysId = gc.id_c_open.bossCopy; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.copyCtrl.getCopyBossList(function (data) {
                moduleParam.copyList = data;
                cb();
            }, this);
        });
    });
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_copy;
(function (g_copy) {
    var BossCopyItem = (function (_super) {
        __extends(BossCopyItem, _super);
        function BossCopyItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BossCopyItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var copyId = self.data;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            self.label_name.text = copyData[gc.t_copy_name];
            var bossId = copyData[gc.t_copy_bossID];
            self.img_boss.source = resHelper.getMonsterHeadIconPath(bossId);
            self.enabled = !gd.copyCtrl.isCopyLocked(copyId);
            var passCon = gd.copyCtrl.checkPassCon(copyId);
            if (!self.enabled) {
                self.label_name.text = mo.STR.format("%s级解锁", passCon[1]);
            }
            self.invalidateSkinState();
        };
        return BossCopyItem;
    })(mo.gui.ItemRenderer);
    g_copy.BossCopyItem = BossCopyItem;
    egret.registerClass(BossCopyItem,"g_copy.BossCopyItem");
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_copy;
(function (g_copy) {
    var CopyItem = (function (_super) {
        __extends(CopyItem, _super);
        function CopyItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CopyItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.img_new.visible = false;
            self.btn_plus.visible = false;
            self.label_note.visible = false;
            self.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_CHALLENGE_NUM, self._updateRestStatus);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var copyId = self.data;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            self.label_name.text = copyData[gc.t_copy_name];
            self.enabled = !gd.copyCtrl.isCopyLocked(copyId);
            self._updateRestStatus();
            var starNum = gd.copyCtrl.getCopyStar(copyId);
            uiHelper.setStarGrp(self.grp_star, starNum);
            var conNotPass = gd.copyCtrl.checkPassCon(copyId);
            if (conNotPass) {
                var par1, par2;
                if (conNotPass[0] == 1) {
                    par1 = "等级";
                    par2 = conNotPass[1];
                }
                else if (conNotPass[0] == 2) {
                    par1 = "通关";
                    var needPassCopyId = conNotPass[1];
                    par2 = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, needPassCopyId)[gc.t_copy_name];
                }
                else if (conNotPass[0] == 3 && conNotPass[1] > 0) {
                    par1 = "元神";
                    par2 = conNotPass[1] + "级";
                }
                self.label_note.visible = !self.enabled;
                self.label_note.text = mo.STR.format("%s%s开启", par1, par2);
            }
        };
        p._updateRestStatus = function () {
            var self = this;
            var copyId = self.data;
            var copyCount = gd.copyCtrl.getCopyCount(copyId);
            self.label_rest.text = copyCount;
            self.btn_plus.visible = copyCount <= 0;
        };
        p._tap_btn_plus = function () {
            var self = this;
            var copyId = self.data;
            gd.copyCtrl.buyCopyCount1(copyId, function () {
                self._updateRestStatus();
            }, self);
        };
        p._tap_touch_rect = function () {
            var self = this;
            self.emitter.emit(self.__class.ON_ITEM_CLICK, self.data, self);
        };
        CopyItem.ON_ITEM_CLICK = "oick";
        return CopyItem;
    })(mo.gui.ItemRenderer);
    g_copy.CopyItem = CopyItem;
    egret.registerClass(CopyItem,"g_copy.CopyItem");
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_copy;
(function (g_copy) {
    /**
     *
     * @author
     *
     */
    var Copy = (function (_super) {
        __extends(Copy, _super);
        function Copy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Copy,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_copys = g_copy.CopyItem;
            self.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_CHALLENGE_NUM, self.dataChanged);
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p._data_list_copys = function () {
            var self = this;
            return self.data.copyList;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.img_title.source = self.data.copyType == gc.c_prop.copyTypeKey.equip ?
                "tit_txt_g_equipCopy" : "tit_txt_g_stateCopy";
            var tesseraKey = (self.data.copyType == gc.c_prop.copyTypeKey.equip) ?
                gc.c_prop.spItemIdKey.equipTessera : gc.c_prop.spItemIdKey.realmTessera;
            self.label_ticket.text = mo.STR.format("[ubb color=0x6deb82]%s[/ubb]: %s", gc.c_prop.spItemId[tesseraKey], gd.copyCtrl.getTesseraCount(tesseraKey));
        };
        p._initItem_list_copys = function (cell) {
            var self = this;
            cell.emitter.on(g_copy.CopyItem.ON_ITEM_CLICK, function (copyId) {
                g_base.CopyLoot.create().setData({ copyId: copyId }).show();
            }, self);
        };
        p._tap_btn_buy_ticket = function () {
            var self = this;
            var tesseraKey = (self.data.copyType == gc.c_prop.copyTypeKey.equip) ?
                gc.c_prop.spItemIdKey.equipTessera : gc.c_prop.spItemIdKey.realmTessera;
            gd.copyCtrl.buyTessera(tesseraKey, self.dataChanged, self);
        };
        return Copy;
    })(mo.gui.Dlg);
    g_copy.Copy = Copy;
    egret.registerClass(Copy,"g_copy.Copy");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Copy;
        moduleCfgItem.sysId = gc.id_c_open.equipCopy; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            moduleParam.copyType = gc.c_prop.copyTypeKey.equip;
            gd.copyCtrl.getCopyEquipList(function (data) {
                var copyList = [].concat(data).reverse();
                moduleParam.copyList = copyList;
                cb();
            }, this);
        });
    });
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_copy;
(function (g_copy) {
    /**
     *
     * @author
     *
     */
    var StateCopy = (function (_super) {
        __extends(StateCopy, _super);
        function StateCopy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=StateCopy,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            mo.gui.helper.setSkinName(self, g_copy.Copy.__className);
        };
        return StateCopy;
    })(g_copy.Copy);
    g_copy.StateCopy = StateCopy;
    egret.registerClass(StateCopy,"g_copy.StateCopy");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = StateCopy;
        moduleCfgItem.sysId = gc.id_c_open.reamCopy; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            moduleParam.copyType = gc.c_prop.copyTypeKey.state;
            gd.copyCtrl.getCopyStateList(function (data) {
                var copyList = [].concat(data).reverse();
                moduleParam.copyList = copyList;
                cb();
            }, this);
        });
    });
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_copy;
(function (g_copy) {
    var CopyEntryItem = (function (_super) {
        __extends(CopyEntryItem, _super);
        function CopyEntryItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CopyEntryItem,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.label_rest.visible = false;
            self.label_openLvl.visible = false;
            self.label_loot.visible = false;
            self.img_shadow.visible = false;
            var data = self.data;
            var copyType = data[0];
            self.img_icon.source = data[1];
            self.img_title.source = data[2];
            var enable = true;
            if (copyType == gc.c_prop.copyTypeKey.vip) {
                var needVip = data[3];
                self.img_shadow.visible = true;
                self.label_rest.visible = true;
                if (needVip < 20) {
                    self.label_loot.visible = true;
                }
                else {
                    self.label_rest.visible = false;
                }
                self.label_loot.text = gd.copyCtrl.getVipLootDesc(needVip);
                if (gd.userCtrl.getVip() >= needVip && needVip < 20) {
                    self.label_rest.text = mo.STR.format("今日剩余通关次数: %s", gd.copyCtrl.getVipCopyReTimes(needVip));
                }
                else {
                    self.label_rest.text = mo.STR.format("VIP%s开启", needVip);
                }
            }
            else {
                enable = gd.userCtrl.getLvl() >= gd.copyCtrl.getOpenLvl(copyType);
                self.label_openLvl.visible = !enable;
                self.label_openLvl.text = mo.STR.format("%s级开启", gd.copyCtrl.getOpenLvl(copyType));
            }
            self.rect_mask.visible = !enable;
        };
        return CopyEntryItem;
    })(mo.gui.ItemRenderer);
    g_copy.CopyEntryItem = CopyEntryItem;
    egret.registerClass(CopyEntryItem,"g_copy.CopyEntryItem");
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_copy;
(function (g_copy) {
    /**
     *
     * @author
     *
     */
    var CopyEntry = (function (_super) {
        __extends(CopyEntry, _super);
        function CopyEntry() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CopyEntry,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_copys = g_copy.CopyEntryItem;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.vip.toString(), function () {
                self.checkVipCopy();
                self.refreshList("list_copys");
            });
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            self.registerClassByKey(gd.RechargeCtrl, gd.RechargeCtrl.ON_RECHARGE_SUCC, function () {
                self.checkVipCopy();
                self.refreshList("list_copys");
            });
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
            self.checkVipCopy();
            self.refreshList("list_copys");
        };
        p.checkVipCopy = function () {
            var self = this;
            var vip = gd.userCtrl.getVip();
            self._copys = [
                //[类型, 背景图, 标题, vip等级]
                [gc.c_prop.copyTypeKey.equip, "ico_maoxianf", "ico_zhuangbeifubeng"],
                [gc.c_prop.copyTypeKey.state, "ico_yuanshengfu", "ico_yuanshenbeifubeng"],
                [gc.c_prop.copyTypeKey.hell, "ico_ylianyugfu", "ico_lianyufubeng"],
            ];
            self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[7][0], "ico_linyusmf", 7]);
            if (vip >= 7) {
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[10][0], "ico_meixindonfu", 10]);
            }
            if (vip >= 10) {
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[14][0], "ico_fengmosengdian", 14]);
            }
            if (vip >= 14) {
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[17][0], "ico_huangquanguiku", 17]);
            }
            if (vip >= 17) {
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[19][0], "ico_haidimizeng", 19]);
            }
            if (vip >= 19) {
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[20][0], "ico_jinqinqidait", 20]);
            }
        };
        p._data_list_copys = function () {
            var self = this;
            return self._copys;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
        };
        p._click_list_copys = function (event) {
            var self = this;
            var data = event.item;
            var copyType = data[0];
            switch (copyType) {
                case gc.c_prop.copyTypeKey.equip:
                    mo.moduleMgr.runModule(g_consts.moduleId.equipCopy);
                    break;
                case gc.c_prop.copyTypeKey.state:
                    mo.moduleMgr.runModule(g_consts.moduleId.stateCopy);
                    break;
                case gc.c_prop.copyTypeKey.hell:
                    mo.moduleMgr.runModule(g_consts.moduleId.bossCopy);
                    break;
                case gc.c_prop.copyTypeKey.vip:
                    var needVip = data[3];
                    if (needVip >= 20)
                        return;
                    mo.moduleMgr.runModule(g_consts.moduleId.vipCopy, { vip: needVip });
                    break;
            }
        };
        return CopyEntry;
    })(mo.gui.Dlg);
    g_copy.CopyEntry = CopyEntry;
    egret.registerClass(CopyEntry,"g_copy.CopyEntry");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        //moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = CopyEntry;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.copyCtrl.getInfo(function () {
                cb();
            }, this);
        });
    });
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_copy;
(function (g_copy) {
    var VipCopyItem = (function (_super) {
        __extends(VipCopyItem, _super);
        function VipCopyItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VipCopyItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.img_txt_bg.visible = false;
            var copyId = self.data;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            self.label_name.text = copyData[gc.t_copy_name];
            self.img_icon.source = g_copy.vipBg[gd.copyCtrl.getCopyVip(copyId)][0];
            var starNum = gd.copyCtrl.getCopyStar(copyId);
            uiHelper.setStarGrp(self.grp_star, starNum);
            self.grp_star.visible = starNum > 0;
            self.img_txt_bg.visible = starNum > 0;
            var conNotPass = gd.copyCtrl.checkPassCon(copyId);
            if (conNotPass) {
                self.label_unlockLvl.text = conNotPass[1]; //只可能是玩家等级不足
                self.img_txt_bg.visible = true;
            }
            self.enabled = conNotPass == null;
            self.invalidateSkinState();
        };
        p._tap_touch_rect = function () {
            var self = this;
            self.delegate.onCopyItemClick(self.data);
        };
        return VipCopyItem;
    })(mo.gui.ItemRenderer);
    g_copy.VipCopyItem = VipCopyItem;
    egret.registerClass(VipCopyItem,"g_copy.VipCopyItem");
})(g_copy || (g_copy = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_copy;
(function (g_copy) {
    /**
     *
     * @author
     *
     */
    var VipCopy = (function (_super) {
        __extends(VipCopy, _super);
        function VipCopy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VipCopy,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_copys = g_copy.VipCopyItem;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p._data_list_copys = function () {
            var self = this;
            return self.data.copyList;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.label_left_times.text = [gd.copyCtrl.getVipCopyReTimes(self.moduleParam.vip), gd.copyCtrl.getMaxVipCopyTimes(self.moduleParam.vip)];
            self.img_title.source = g_copy.vipBg[self.moduleParam.vip][1];
        };
        p.onCopyItemClick = function (copyId) {
            var self = this;
            g_base.VipCopyLoot.create().setData({ copyId: copyId }).show();
        };
        p._tap_btn_help = function () {
            var self = this;
            var vip = self.moduleParam.vip;
            g_base.BaseShowTip.create().setData({ id: 59, param1: vip, param2: gd.copyCtrl.getMaxVipCopyTimes(vip) }).show();
        };
        return VipCopy;
    })(mo.gui.Dlg);
    g_copy.VipCopy = VipCopy;
    egret.registerClass(VipCopy,"g_copy.VipCopy");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = VipCopy;
        moduleCfgItem.onValid(function (moduleParam) {
            if (moduleParam.vip > gd.userCtrl.getVip()) {
                mo.showMsg(gc.id_c_msgCode.vipRequire, moduleParam.vip);
                return false;
            }
            return true;
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.copyCtrl.getInfo(function () {
                moduleParam.copyList = gd.copyCtrl.getVipCopyList(moduleParam.vip);
                cb();
            }, this);
        });
    });
})(g_copy || (g_copy = {}));

