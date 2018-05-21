/**
 * Created by Administrator on 2015/9/30.
 */
var g_shop;
(function (g_shop) {
    var ShopItem = (function (_super) {
        __extends(ShopItem, _super);
        function ShopItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ShopItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            //[物品id，数量，货币类型，正式价格,剩余购买次数,原价, 商店类型, 折扣]
            var self = this;
            self.name = "shop_cell_" + self.itemIndex;
            var data = self.data;
            var itemNum = data[1];
            var itemId = data[0];
            var moneyType = data[2];
            var moneyNum = data[3];
            var leftNum = data[4];
            var moneyNum0 = data[5];
            var discount = data[7];
            self.img_currency.source = uiHelper.resIco[utils.getCurrencyTypeItemId(moneyType)];
            self.ico_item.setData({ itemId: itemId, count: 0 });
            self.label_yb.text = moneyNum;
            self.grp_discount.visible = false;
            //if(moneyNum0==moneyNum){
            //    self.grp_discount.visible = false;
            //}else{
            //    self.grp_discount.visible = true;
            //    self.label_yb0.text = moneyNum0;
            //}
            self.ico_new.visible = discount > 0;
            if (discount > 0) {
                self.ico_new.source = mo.STR.format("ui_%s_discount", discount);
            }
            self.label_vipCanBuy.visible = false;
            self.btn_buy.visible = leftNum > 0 || leftNum == -1;
            self.ico_sellout.visible = !self.btn_buy.visible;
            var shopItemType = data[6];
            self.label_part.visible = false;
            if (shopItemType && shopItemType == gc.c_prop.shopTypeKey.equip) {
                self.label_part.visible = true;
                self.label_part.text = gd.equipCtrl.getEquipTypeName(itemId);
            }
            var reddot = gd.shopCtrl.isShopEquipReddot();
            self.img_red.visible = (shopItemType == gc.c_prop.shopTypeKey.equip) && reddot.indexOf(self.itemIndex) != -1;
        };
        p._tap_btn_buy = function () {
            var self = this;
            var data = self.data;
            var shopItemType = data[6];
            if (shopItemType && shopItemType == gc.c_prop.shopTypeKey.equip) {
                gd.shopCtrl.buy(shopItemType, self.itemIndex, 1, function () { }, self);
            }
            else {
                g_shop.ShopBuy.create().setData({ type: shopItemType, shopItem: self.data, index: self.itemIndex }).show();
            }
        };
        ShopItem.ON_BTN_BUY = "on_btn_buy";
        return ShopItem;
    })(mo.gui.ItemRenderer);
    g_shop.ShopItem = ShopItem;
    egret.registerClass(ShopItem,"g_shop.ShopItem");
})(g_shop || (g_shop = {}));

/**
 * Created by Administrator on 2015/9/30.
 */
var g_shop;
(function (g_shop) {
    var Shop = (function (_super) {
        __extends(Shop, _super);
        function Shop() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Shop,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_shop.ShopItem;
            self.registerClassByKey(gd.ShopCtrl, gd.ShopCtrl.ON_BUY_SUCC, self.reset);
        };
        p.reset = function (type) {
            var self = this;
            if (self.data.shopItemType != type)
                return;
            gd.shopCtrl.getList(type, function (itemList) {
                self.setData({ itemList: itemList });
                self.refreshList("list_items");
            }, self);
        };
        p.dataChanged = function () {
            var self = this;
            _super.prototype.dataChanged.call(this);
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.itemList;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var ico_item = cell.ico_item;
            ico_item.onClick(function () {
                g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(cell.data[0], 1) }).show();
            }, self);
        };
        return Shop;
    })(mo.gui.Layer);
    g_shop.Shop = Shop;
    egret.registerClass(Shop,"g_shop.Shop");
})(g_shop || (g_shop = {}));

/**
 * Created by Administrator on 2015/9/30.
 */
var g_shop;
(function (g_shop) {
    var ShopBuy = (function (_super) {
        __extends(ShopBuy, _super);
        function ShopBuy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ShopBuy,p=c.prototype;
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var shopItem = self.data.shopItem;
            var type = self.data.type;
            //[物品id，数量，货币类型，货币价格,剩余购买次数]
            var itemId = shopItem[0];
            var itemNum = shopItem[1];
            var moneyType = shopItem[2];
            var moneyNum = shopItem[3];
            var leftNum = shopItem[4];
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            self.buyNum = 1;
            self.label_name.text = itemInfo[gc.t_item_name];
            self.ico_item.setData({ itemId: itemId, count: 0 });
            self.label_desc.text = itemInfo[gc.t_item_note];
            self.label_num.text = self.buyNum;
            self.label_canBuyNum.visible = false;
            if (leftNum > 0) {
                self.label_canBuyNum.text = mo.STR.format("今日可购买%s个(每日05:00更新)", leftNum);
                self.label_canBuyNum.visible = true;
            }
            else {
                self.label_canBuyNum.visible = false;
            }
            var itemId = utils.getCurrencyTypeItemId(moneyType);
            uiHelper.setResGrp(self.grp_res, itemId, moneyNum);
        };
        p._getMaxBuyNum = function () {
            var self = this;
            var shopItem = self.data.shopItem;
            var moneyType = shopItem[2];
            var itemId = utils.getCurrencyTypeItemId(moneyType);
            var leftNum = shopItem[4];
            var price = shopItem[3];
            if (leftNum < 0) {
                return Math.max(1, Math.floor(gd.userCtrl.getItemNum(itemId) / price));
            }
            return leftNum;
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
            if (self.buyNum < self._getMaxBuyNum()) {
                self.buyNum++;
                self.showNum();
            }
        };
        p._tap_btn_min = function () {
            var self = this;
            self.buyNum -= 10;
            if (self.buyNum < 1)
                self.buyNum = 1;
            self.showNum();
        };
        p._tap_btn_max = function () {
            var self = this;
            self.buyNum += 10;
            if (self.buyNum > self._getMaxBuyNum())
                self.buyNum = self._getMaxBuyNum();
            self.showNum();
        };
        p.showNum = function () {
            var self = this;
            self.label_num.text = self.buyNum;
            self.grp_res.getChildByName("num").text = self.buyNum * self.data.shopItem[3];
        };
        p._tap_btn_ok = function () {
            var self = this;
            if (self.data.type == gc.c_prop.shopTypeKey.rebirth) {
                //转生商店
                gd.reBirthCtrl.buyRebirth(self.data.index, self.buyNum, self.close, self);
            }
            else {
                gd.shopCtrl.buy(self.data.type, self.data.index, self.buyNum, function () {
                    self.close();
                }, self);
            }
        };
        return ShopBuy;
    })(mo.gui.Dlg);
    g_shop.ShopBuy = ShopBuy;
    egret.registerClass(ShopBuy,"g_shop.ShopBuy");
})(g_shop || (g_shop = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_shop;
(function (g_shop) {
    g_shop.SUBMID_ITEM = 1;
    g_shop.SUBMID_MOJIN = 2;
    /**
     *
     * @author
     *
     */
    var ShopLayer2 = (function (_super) {
        __extends(ShopLayer2, _super);
        function ShopLayer2() {
            _super.apply(this, arguments);
            this._comps = [];
        }
        var d = __define,c=ShopLayer2,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            this.tab_str.dataProvider = self.viewStack;
            this.tab_str.selectedIndex = 0;
            self.tabLastSelectIndex = 0;
            //var group:any = self.viewStack.getElementAt(0);
            //var comp:any = ShopBuyEquip.create().setData({tray: group, itemList: self.data.itemList}).show();
            //self._comps.push(comp);
            //
            //
            //var group:any = self.viewStack.getElementAt(1);
            //comp = Shop.create().setData({tray: group}).show();
            //self._comps.push(comp);
            //
            //var group:any = self.viewStack.getElementAt(2);
            //comp = Shop.create().setData({tray: group}).show();
            //self._comps.push(comp);
            self._comps.push(g_shop.ShopBuyEquip.create().setData({ tray: self.container }).show());
            self._comps.push(g_shop.Shop.create().setData({ tray: self.container }).show());
            self._comps.push(g_shop.Shop.create().setData({ tray: self.container }).show());
            process.nextTick(function () {
                self.tab_str.selectedIndex = 0;
                self._tap_tab_str();
            });
        };
        p._hideAllComp = function () {
            var self = this;
            for (var i = 0, li = self._comps.length; i < li; i++) {
                self._comps[i].visible = false;
            }
        };
        p.dtor = function () {
            var self = this;
            _super.prototype.dtor.call(this);
            for (var i = 0, li = self._comps.length; i < li; i++) {
                mo.gui.helper.rm(self._comps[i]);
            }
            self._comps = null;
        };
        //_tap_btn_recharge(){
        //var self = this;
        //g_mid.Recharge.create().show();
        //}
        p._tap_tab_str = function () {
            var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            if (selectedIndex == 1) {
                needLvl = c_open[gc.id_c_open.stoneShop][gc.c_open_lvlRequired];
            }
            if (gd.userCtrl.getLvl() < needLvl) {
                process.nextTick(function () {
                    self.tab_str.selectedIndex = self.tabLastSelectIndex;
                    self.viewStack.selectedIndex = self.tabLastSelectIndex;
                });
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, needLvl);
            }
            self.tabLastSelectIndex = selectedIndex;
            self._hideAllComp();
            var comp = self._comps[selectedIndex];
            comp.visible = true;
            if (selectedIndex == 1) {
                gd.shopCtrl.getList(gc.c_prop.shopTypeKey.gem, function (itemList) {
                    comp.setData({ shopItemType: gc.c_prop.shopTypeKey.gem, itemList: itemList });
                }, self);
                //ws.recordEvent("进入【商城道具】模块", 1);
                self.resBar.showRes(true, true);
            }
            else if (selectedIndex == 2) {
                gd.shopCtrl.getList(gc.c_prop.shopTypeKey.normal, function (itemList) {
                    comp.setData({ shopItemType: gc.c_prop.shopTypeKey.normal, itemList: itemList });
                }, self);
                //ws.recordEvent("进入【探宝】模块", 1);
                self.resBar.showRes(true, true);
            }
            else if (selectedIndex == 0) {
                gd.shopCtrl.getList(gc.c_prop.shopTypeKey.equip, function (itemList) {
                    comp.setData({ itemList: itemList });
                }, self);
                self.resBar.showRes(true, true);
            }
        };
        p._tap_btn_recharge = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.recharge);
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        return ShopLayer2;
    })(mo.gui.Layer);
    g_shop.ShopLayer2 = ShopLayer2;
    egret.registerClass(ShopLayer2,"g_shop.ShopLayer2");
})(g_shop || (g_shop = {}));

/**
 * Created by SmallAiTT on 2015/7/15.
 */
var g_shop;
(function (g_shop) {
    logger.initLogger(g_shop, "g-shop");
    logger.setLvl("g-shop", 4);
    var ShopScene = (function (_super) {
        __extends(ShopScene, _super);
        function ShopScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ShopScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            g_base.modIdx = 5;
            gd.shopCtrl.getList(gc.c_prop.shopTypeKey.equip, function (itemList) {
                var layer = g_shop.ShopLayer2.create();
                layer.moduleParam = self.moduleParam;
                layer.setData({ itemList: itemList, type: gc.c_prop.shopTypeKey.equip }).show();
            }, self);
            g_base.BaseBottomBar.create().show();
        };
        return ShopScene;
    })(mo.gui.UIScene);
    g_shop.ShopScene = ShopScene;
    egret.registerClass(ShopScene,"g_shop.ShopScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = ShopScene;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
    });
})(g_shop || (g_shop = {}));

/**
 * Created by Administrator on 2015/9/30.
 */
var g_shop;
(function (g_shop) {
    var ShopBuyEquip = (function (_super) {
        __extends(ShopBuyEquip, _super);
        function ShopBuyEquip() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ShopBuyEquip,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_shop.ShopItem;
            self.registerClassByKey(gd.ShopCtrl, gd.ShopCtrl.ON_BUY_SUCC, self.reset);
            self.registerClassByKey(gd.UserCtrl, gd.UserCtrl.ON_TEN_LVL, self.reset);
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            self._setRefreshCost();
        };
        p._setRefreshCost = function () {
            var self = this;
            var grp = self.grp_refresh_cost;
            var label = grp.getChildByName("num");
            var img = grp.getChildByName("icon");
            var costNum = gd.shopCtrl.getRefreshCount(gc.c_prop.shopTypeKey.equip);
            label.text = costNum > 0 ? costNum : "免费";
            img.width = img.height = costNum > 0 ? NaN : 0;
        };
        p.dataChanged = function () {
            var self = this;
            _super.prototype.dataChanged.call(this);
            self.refreshList("list_items");
        };
        p.reset = function (type) {
            var self = this;
            if (type != gc.c_prop.shopTypeKey.equip)
                return;
            gd.shopCtrl.getList(gc.c_prop.shopTypeKey.equip, function (itemList) {
                self.setData({ itemList: itemList });
                self.refreshList("list_items");
                self._setRefreshCost();
            }, self);
        };
        p._data_list_items = function () {
            var self = this;
            process.nextTick(function () {
                mo.emitter.emit('shopList');
            });
            return self.data.itemList;
        };
        p._tap_btn_refresh = function () {
            var self = this;
            gd.shopCtrl.refresh(gc.c_prop.shopTypeKey.equip, false, function (itemList) {
                self.reset(gc.c_prop.shopTypeKey.equip);
            }, self);
        };
        p._tap_btn_buyAll = function () {
            var self = this;
            gd.shopCtrl.buyAll(gc.c_prop.shopTypeKey.equip, function () {
                self.reset(gc.c_prop.shopTypeKey.equip);
            }, self);
        };
        //_tap_btn_buyGold(){
        //    var self = this;
        //    gd.userCtrl.buyGold(function(){},self);
        //}
        p._initItem_list_items = function (cell) {
            var self = this;
            var ico_item = cell.ico_item;
            ico_item.showEquipName = true;
            ico_item.onClick(function () {
                g_base.BaseItemDetail.create().setData({
                    bdc: gd.BagDataCtrl.create(cell.data[0], null),
                    extra: [cell.data[9], cell.data[8]]
                }).show();
            }, self);
        };
        return ShopBuyEquip;
    })(mo.gui.Layer);
    g_shop.ShopBuyEquip = ShopBuyEquip;
    egret.registerClass(ShopBuyEquip,"g_shop.ShopBuyEquip");
})(g_shop || (g_shop = {}));

/**
 * Created by Administrator on 2015/10/6.
 */
var g_shop;
(function (g_shop) {
    var ArenaShop = (function (_super) {
        __extends(ArenaShop, _super);
        function ArenaShop() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaShop,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_shop.ArenaShopItem;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.prestige.toString(), self.updataJf);
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.label_sw.text = gd.userCtrl.getPrestige().toString();
        };
        p.updataJf = function () {
            var self = this;
            self.label_sw.text = gd.userCtrl.getPrestige().toString();
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.itemList;
        };
        return ArenaShop;
    })(mo.gui.Dlg);
    g_shop.ArenaShop = ArenaShop;
    egret.registerClass(ArenaShop,"g_shop.ArenaShop");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = ArenaShop;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.shopCtrl.getList(gc.c_prop.shopTypeKey.arena, function (itemList) {
                moduleParam.itemList = itemList;
                cb();
            }, this);
        });
    });
})(g_shop || (g_shop = {}));

/**
 * Created by Administrator on 2015/9/30.
 */
var g_shop;
(function (g_shop) {
    var ArenaShopItem = (function (_super) {
        __extends(ArenaShopItem, _super);
        function ArenaShopItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaShopItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            //[物品id，数量，货币类型，货币价格,剩余购买次数]
            var self = this;
            var data = self.data;
            var itemNum = data[1];
            var itemId = data[0];
            var moneyType = data[2];
            var moneyNum = data[3];
            var leftNum = data[4];
            self.ico_item.setData({ itemId: itemId, count: 0 });
            self.label_sw.text = moneyNum;
        };
        p._tap_btn_buy = function () {
            var self = this;
            g_shop.ShopBuy.create().setData({ type: gc.c_prop.shopTypeKey.arena, shopItem: self.data, index: self.itemIndex }).show();
        };
        return ArenaShopItem;
    })(mo.gui.ItemRenderer);
    g_shop.ArenaShopItem = ArenaShopItem;
    egret.registerClass(ArenaShopItem,"g_shop.ArenaShopItem");
})(g_shop || (g_shop = {}));

