/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_bag;
(function (g_bag) {
    var BagCell = (function (_super) {
        __extends(BagCell, _super);
        function BagCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BagCell,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var dataCtrl = self.data;
            var ico_item = self.ico_item;
            mo.R.loadTo('BagScene', resHelper.getItemIconPath(dataCtrl.tempId), function () { });
            self.name = "cell_" + dataCtrl.tempId;
            ico_item.set('itemId', dataCtrl.tempId);
            self.ico_item.set('count', dataCtrl.count);
            self.ico_lock.visible = dataCtrl.islock;
        };
        return BagCell;
    })(mo.gui.ItemRenderer);
    g_bag.BagCell = BagCell;
    egret.registerClass(BagCell,"g_bag.BagCell");
})(g_bag || (g_bag = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_bag;
(function (g_bag) {
    /**
     *
     * @author
     *
     */
    var BagLayer = (function (_super) {
        __extends(BagLayer, _super);
        function BagLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BagLayer,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_bag.BagCell;
            self.showType = 1;
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_SMELT, function () {
                self._refresh();
            });
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BATCH_SMELT, function () {
                self._refresh();
            });
            self.registerClassByKey(gd.CustomCtrl, gd.CustomCtrl.ON_INHERITED, function () {
                self._refresh();
            });
            self.registerClassByKey(gd.CustomCtrl, gd.CustomCtrl.ON_CUSTOM, function () {
                self._refresh();
            });
            self.registerClassByKey(gd.UserCtrl, gd.UserCtrl.ON_ITEM_CHANGE, function () {
                self._refresh();
            });
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.tab_bag.selectedIndex = 0;
            self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
            self._scollerHelper = new uiHelper.ScrollerHelper(self.list_items);
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            self._scollerHelper.resumeScroll();
            var BDC = gd.BagDataCtrl;
            return (self.showType != 1) ?
                BDC.getList(BDC.getFilterOpt(self.showType), BDC.getSortOpt(self.showType))
                : BDC.getEquipList(gd.equipCtrl.getEquipList());
        };
        p._tap_btn_forge = function () {
            var self = this;
            self._scollerHelper.pauseScrollV();
            mo.moduleMgr.runModule(g_consts.moduleId.smelting);
        };
        p._tap_btn_sale = function () {
            var self = this;
            g_bag.BagSale.create().setData().show();
        };
        p._tap_tab_bag = function (event) {
            var self = this;
            self.showType = self.tab_bag.selectedIndex + 1;
            self._refresh();
            self.grp_equip.visible = self.tab_bag.selectedIndex == 0;
            if (self.tab_bag.selectedIndex == 0) {
                self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
            }
        };
        p._tap_btn_plus = function () {
            var self = this;
            gd.userCtrl.buyBagGrid(function () {
                self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
            }, self);
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
            self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
        };
        p._click_list_items = function (event) {
            var self = this;
            var bdc = event.item;
            if (bdc.type == gc.c_prop.itemTypeKey.chest || bdc.type == gc.c_prop.itemTypeKey.expBall
                || bdc.type == gc.c_prop.itemTypeKey.genuineQi) {
                g_bag.BagOpenBox.create().setData({ bdc: bdc }).show().onClose(self._refresh, self);
            }
            else {
                g_base.BaseItemDetail.create().setData({ bdc: bdc, item: event.itemRenderer, isBag: 1 }).show();
            }
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            this._scollerHelper.doDtor();
        };
        return BagLayer;
    })(mo.gui.Layer);
    g_bag.BagLayer = BagLayer;
    egret.registerClass(BagLayer,"g_bag.BagLayer");
})(g_bag || (g_bag = {}));

/**
 * Created by Administrator on 2015/9/30.
 */
var g_bag;
(function (g_bag) {
    var BagOpenBox = (function (_super) {
        __extends(BagOpenBox, _super);
        function BagOpenBox() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BagOpenBox,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var bdc = self.data.bdc;
            self.buyNum = bdc.count;
            self.label_name.text = bdc.name;
            self.ico_item.setData({ itemId: bdc.tempId, count: 0 });
            self.ico_item.label_text.visible = false;
            self.label_desc.text = bdc.note;
            self.label_num.text = self.buyNum;
            self.container.title = (bdc.type == gc.c_prop.itemTypeKey.chest) ? "tit_txt_g_useBox" : "tit_txt_g_useItem";
            var needItemData = gd.userCtrl.getNeedItems(bdc.tempId);
            if (needItemData[0] != 0) {
                self.buyNum = gd.userCtrl.getItemNum(needItemData[1]) / needItemData[0] >> 0;
                if (self.buyNum < 1)
                    self.buyNum = 1;
                if (self.buyNum > bdc.count)
                    self.buyNum = bdc.count;
                self.grp_cost.visible = true;
                self.btn_ok.icon = "btn_txt_g_kaiqig";
                self.ico_itemCost.source = resHelper.getItemIconPath(needItemData[1]);
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, needItemData[1]);
                self.label_itemCostName.text = itemInfo[gc.t_item_name];
                self.label_itemCostNum.text = gd.userCtrl.getItemNum(needItemData[1]) + "/" + needItemData[0] * self.buyNum;
                self.showNum();
            }
            else {
                self.grp_cost.visible = false;
                self.btn_ok.icon = "btn_txt_g_ok";
            }
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var bdc = self.data.bdc;
        };
        p._tap_btn_sub = function () {
            var self = this;
            if (self.buyNum > 1) {
                self.buyNum--;
                self.showNum();
            }
        };
        p._tap_btn_add = function () {
            var self = this;
            if (self.buyNum < self.data.bdc.count) {
                self.buyNum++;
                self.showNum();
            }
        };
        p._tap_btn_min = function () {
            var self = this;
            self.buyNum = 1;
            self.showNum();
        };
        p._tap_btn_max = function () {
            var self = this;
            self.buyNum = self.data.bdc.count;
            self.showNum();
        };
        p.showNum = function () {
            var self = this;
            var bdc = self.data.bdc;
            self.label_num.text = self.buyNum;
            var needItemData = gd.userCtrl.getNeedItems(bdc.tempId);
            if (needItemData[0] != 0) {
                self.label_itemCostNum.text = gd.userCtrl.getItemNum(needItemData[1]) + "/" + needItemData[0] * self.buyNum;
            }
        };
        p._tap_btn_ok = function () {
            var self = this;
            if (self.data.bdc.level > gd.userCtrl.getLvl()) {
                mo.showMsg(gc.id_c_msgCode.noLvlUse, self.data.bdc.level);
                return;
            }
            if (self.data.bdc.vip && self.data.bdc.vip > gd.userCtrl.getVip()) {
                mo.showMsg(gc.id_c_msgCode.vipItemRequire, self.data.bdc.vip);
                return;
            }
            var bdc = self.data.bdc;
            var needItemData = gd.userCtrl.getNeedItems(bdc.tempId);
            if (needItemData[0] != 0) {
                var itemId = needItemData[1];
                if (gd.userCtrl.getItemNum(needItemData[1]) < needItemData[0] * self.buyNum) {
                    if (g_base.GainWay.canBuyFromShop(itemId)) {
                        g_base.GainWayShop.create().setData({
                            itemId: itemId,
                            count: needItemData[0] * self.buyNum - gd.userCtrl.getItemNum(needItemData[1])
                        }).show().onClose(function () {
                            self.showNum();
                        });
                    }
                    else {
                        g_base.GainWay.create().setData({ itemId: itemId }).show();
                    }
                    return;
                }
            }
            gd.userCtrl.getBagChest(self.data.bdc.tempId, self.buyNum, function () {
                self.close();
            }, self);
        };
        return BagOpenBox;
    })(mo.gui.Dlg);
    g_bag.BagOpenBox = BagOpenBox;
    egret.registerClass(BagOpenBox,"g_bag.BagOpenBox");
})(g_bag || (g_bag = {}));

/**
 * Created by SmallAiTT on 2015/7/15.
 */
var g_bag;
(function (g_bag) {
    logger.initLogger(g_bag, "g-bag");
    logger.setLvl("g-bag", 4);
    var BagScene = (function (_super) {
        __extends(BagScene, _super);
        function BagScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BagScene,p=c.prototype;
        p.show = function () {
            _super.prototype.show.call(this);
            g_base.modIdx = 4;
            g_bag.BagLayer.create().show();
            g_base.BaseBottomBar.create().show();
        };
        return BagScene;
    })(mo.gui.UIScene);
    g_bag.BagScene = BagScene;
    egret.registerClass(BagScene,"g_bag.BagScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = BagScene;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
    });
})(g_bag || (g_bag = {}));

/**
 * Created by admin on 16/4/12.
 */
var g_bag;
(function (g_bag) {
    /**
     *
     * @author
     *
     */
    var BagSale = (function (_super) {
        __extends(BagSale, _super);
        function BagSale() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BagSale,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._selectArray = [false, false, false, false, false, false];
            self.sendAry = [];
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.items = gd.BagDataCtrl.getEquipSalesInfo();
            self.label_white.text = "装备(剩余" + self.items[1].length + ")";
            self.label_green.text = "装备(剩余" + self.items[2].length + ")";
            self.label_blue.text = "装备(剩余" + self.items[3].length + ")";
            self.label_purple.text = "装备(剩余" + self.items[4].length + ")";
            self.label_orange.text = "装备(剩余" + self.items[5].length + ")";
            self.label_below.text = "装备(剩余" + self.items['below'].length + ")";
            self._changeReward();
        };
        p._changeReward = function () {
            var self = this;
            var equips = {};
            var rewards = {};
            for (var i = 0; i < 6; i++) {
                if (self._selectArray[i]) {
                    var index = i == 0 ? 'below' : i;
                    var items = self.items[index];
                    for (var j = 0; j < items.length; j++) {
                        var bdc = items[j];
                        equips[bdc.equipId] = bdc;
                    }
                }
            }
            self.sendAry = [];
            for (var eId in equips) {
                self.sendAry.push(eId);
                var bdc = equips[eId];
                for (var x = 0; x < bdc.rewards.length; x++) {
                    var rId = bdc.rewards[x][0];
                    var rCount = bdc.rewards[x][1];
                    var now = rewards[rId];
                    if (!now) {
                        var item = mo.getJSONWithFileNameAndID(gc.cfg_t_item, rId);
                        rewards[rId] = { 'c': rCount, 'n': item[gc.t_item_name] };
                    }
                    else {
                        rewards[rId]['c'] = now['c'] + rCount;
                    }
                }
            }
            self._changeRewardView(rewards);
        };
        p._changeRewardView = function (rewards) {
            var self = this;
            self.label_items.text = "";
            if (self.grp_gold.parent)
                self.grp_gold_container.removeElement(self.grp_gold);
            if (self.grp_yuanbao.parent)
                self.grp_gold_container.removeElement(self.grp_yuanbao);
            for (var rId in rewards) {
                var rObj = rewards[rId];
                if (rId == 99) {
                    if (!self.grp_gold.parent)
                        self.grp_gold_container.addElement(self.grp_gold);
                    self.label_gold.text = "获得: " + rObj['c'];
                }
                else if (rId == 200) {
                    if (!self.grp_yuanbao.parent)
                        self.grp_gold_container.addElement(self.grp_yuanbao);
                    self.label_yuanbao.text = +rObj['c'];
                }
                else {
                    self.label_items.text = self.label_items.text + " " + rObj['n'] + "x" + rObj['c'];
                }
            }
        };
        p._tap_btn_sale = function () {
            var self = this;
            if (self.sendAry.length == 0)
                return mo.showMsg("未选择或者没有可出售装备");
            mo.showMsg(gc.id_c_msgCode.ifSellItem2, function () {
                gd.equipCtrl.sellEquipItem(self.sendAry, function () {
                    self.close();
                }, self);
            });
        };
        p._tap_btn_info = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 207 }).show();
        };
        p._chg_ckb_orange = function () {
            var self = this;
            self._selectArray[5] = !self._selectArray[5];
            self._changeReward();
        };
        p._chg_ckb_purple = function () {
            var self = this;
            self._selectArray[4] = !self._selectArray[4];
            self._changeReward();
        };
        p._chg_ckb_blue = function () {
            var self = this;
            self._selectArray[3] = !self._selectArray[3];
            self._changeReward();
        };
        p._chg_ckb_green = function () {
            var self = this;
            self._selectArray[2] = !self._selectArray[2];
            self._changeReward();
        };
        p._chg_ckb_white = function () {
            var self = this;
            self._selectArray[1] = !self._selectArray[1];
            self._changeReward();
        };
        p._chg_ckb_below = function () {
            var self = this;
            self._selectArray[0] = !self._selectArray[0];
            self._changeReward();
        };
        return BagSale;
    })(mo.gui.Layer);
    g_bag.BagSale = BagSale;
    egret.registerClass(BagSale,"g_bag.BagSale");
})(g_bag || (g_bag = {}));

