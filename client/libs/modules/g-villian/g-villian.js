/**
 * Created by Zhuang on 2016/7/4.
 */
var g_villian;
(function (g_villian) {
    /**
     *
     * @author
     *
     */
    var VillianLayer = (function (_super) {
        __extends(VillianLayer, _super);
        function VillianLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VillianLayer,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._targets = [
                ["bg_errengudishi1-3", [[229, 431], [204, 247], [47, 140]]],
                ["bg_errengudishiguan4-6", [[229, 431], [40, 295], [47, 140]]],
                ["bg_errengudishi7-9", [[229, 431], [30, 260], [215, 190]]],
                ["bg_errengudishiguan", [], [100, 240]]
            ];
            self.curStage = 3;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            gd.expeditionCtrl.getInfo(function (data) {
                var curData = data;
            }, self);
            self.dataChanged();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.ui_Villianbg.source = self._targets[self.curStage][0];
            self._setVillianEnemyPos();
        };
        p._setVillianEnemyPos = function () {
            var self = this;
            if (self._targets[self.curStage][1][0]) {
                self.villianEnemy_1.x = self._targets[self.curStage][1][0][0];
                self.villianEnemy_1.y = self._targets[self.curStage][1][0][1];
            }
            else {
                self.villianEnemy_1.visible = false;
            }
            if (self._targets[self.curStage][1][1]) {
                self.villianEnemy_2.x = self._targets[self.curStage][1][1][0];
                self.villianEnemy_2.y = self._targets[self.curStage][1][1][1];
            }
            else {
                self.villianEnemy_2.visible = false;
            }
            if (self._targets[self.curStage][1][2]) {
                self.villianEnemy_3.x = self._targets[self.curStage][1][2][0];
                self.villianEnemy_3.y = self._targets[self.curStage][1][2][1];
            }
            else {
                self.villianEnemy_3.visible = false;
            }
            if (!self.villianEnemy_1.visible && !self.villianEnemy_2.visible && !self.villianEnemy_3.visible) {
                self.villianEnemy_3.visible = true;
                self.villianEnemy_3.x = self._targets[self.curStage][2][0];
                self.villianEnemy_3.y = self._targets[self.curStage][2][1];
                self.villianEnemy_3.scaleX = 1.4;
                self.villianEnemy_3.scaleY = 1.4;
            }
        };
        p._tap_villianEnemy_1 = function () {
            var self = this;
            g_villian.VillianBattle.create().setData({ targe: 1 }).show();
        };
        p._tap_villianEnemy_2 = function () {
            var self = this;
            g_villian.VillianBattle.create().setData({ targe: 1 }).show();
        };
        p._tap_villianEnemy_3 = function () {
            var self = this;
            g_villian.VillianBattle.create().setData({ targe: 1 }).show();
        };
        p._tap_btn_villian_shop = function () {
            var self = this;
            g_villian.VillianShopLayer.create().show();
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 8 }).show();
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        return VillianLayer;
    })(mo.gui.Dlg);
    g_villian.VillianLayer = VillianLayer;
    egret.registerClass(VillianLayer,"g_villian.VillianLayer");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = VillianLayer;
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
    });
})(g_villian || (g_villian = {}));

var g_comp;
(function (g_comp) {
    /**
     *
     * Created by Zhuang on 2016/7/4.
     *
     */
    var VillianEnemy = (function (_super) {
        __extends(VillianEnemy, _super);
        function VillianEnemy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VillianEnemy,p=c.prototype;
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
        return VillianEnemy;
    })(mo.gui.Comp);
    g_comp.VillianEnemy = VillianEnemy;
    egret.registerClass(VillianEnemy,"g_comp.VillianEnemy");
})(g_comp || (g_comp = {}));

/**
 * Created by Zhuang on 2016/7/4.
 */
var g_villian;
(function (g_villian) {
    var VillianBattle = (function (_super) {
        __extends(VillianBattle, _super);
        function VillianBattle() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VillianBattle,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_villian.VillianHeroCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
            var self = this;
            self.ico_avatar.setData({ clothesID: null, weaponID: null, wingID: null, sex: 0, isKing: false });
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            // self.pkUser = self.data.pkTarget||self.data.enemy;
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            return gd.heroCtrl.getList();
        };
        p._click_list_items = function (event) {
            var self = this;
            var bdc = event.item;
            g_villian.VillianSoulLayer.create().setData({ curHero: bdc }).show();
        };
        p.onEnter = function () {
            var self = this;
            _super.prototype.onEnter.call(this);
            self.invalidateSkinState();
            var name, level, pkValue, vip, userId;
            if (!self.pkUser)
                return;
            var pkUser = self.pkUser;
            name = pkUser[gc.dsConsts.PkOutUserData.name];
            level = pkUser[gc.dsConsts.PkOutUserData.lvl];
            vip = pkUser[gc.dsConsts.PkOutUserData.vip];
            userId = pkUser[gc.dsConsts.PkOutUserData.userId];
            var nameTxt = self.getNameTxt(name);
            self.label_name.text = nameTxt;
            self.label_level.text = mo.STR.format("lv.%s", level);
            var pkValue = pkValue;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueYellow = gameCfg[5];
            var valueRed = gameCfg[6];
            var guildName = pkUser[gc.dsConsts.PkOutUserData.guildName] ? pkUser[gc.dsConsts.PkOutUserData.guildName] : "";
            self.label_guild.text = guildName == "" ? "" : mo.STR.format("[%s]", guildName);
            var itemId = 78;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            //self.label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
            if (vip > 0) {
                self.label_vipLv.text = vip.toString();
                self.label_name.parent.addElementAt(self.grp_vip, 0);
            }
            else {
                if (self.grp_vip.parent)
                    self.grp_vip.parent.removeElement(self.grp_vip);
            }
            gd.heroCtrl.getHeroDisplayByTempId(userId, 0, function (data) {
                self.ico_avatar.setData({ clothesID: data[0], weaponID: data[1], wingID: data[2], sex: data[3], isKing: data[4] });
            }, this);
        };
        p._tap_btn_attack = function () {
            var self = this;
            var name = self.pkUser[gc.dsConsts.PkOutUserData.name];
            var pkValue = gd.pkOutCtrl.getPkValue();
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueRed = gameCfg[6];
            if (pkValue < valueRed && pkValue + gameCfg[1] >= valueRed) {
                mo.showMsg(gc.id_c_msgCode.nameToRedIfGo, function () {
                    self.startPvp(name);
                });
            }
            else {
                self.startPvp(name);
            }
        };
        p.startPvp = function (name) {
            var self = this;
            gd.pkOutCtrl.start(this.pkUser[gc.dsConsts.PkOutUserData.userId], gc.c_prop.fightTypeKey.pk, self.data.pkTarget ? 0 : 1, function (pkTargets) {
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, pkTargets, gc.c_prop.fightTypeKey.pk, name);
            }, this);
            self.close();
        };
        p.getNameTxt = function (name) {
            var addStr = "";
            var nameArr = name.split('.');
            if (nameArr && nameArr.length > 0) {
                addStr = nameArr[0];
            }
            return addStr + ".神秘玩家";
        };
        return VillianBattle;
    })(mo.gui.Dlg);
    g_villian.VillianBattle = VillianBattle;
    egret.registerClass(VillianBattle,"g_villian.VillianBattle");
})(g_villian || (g_villian = {}));

/**
 * Created by Zhuang on 2016/7/4.
 */
var g_villian;
(function (g_villian) {
    var VillianHeroCell = (function (_super) {
        __extends(VillianHeroCell, _super);
        function VillianHeroCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VillianHeroCell,p=c.prototype;
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
        };
        return VillianHeroCell;
    })(mo.gui.ItemRenderer);
    g_villian.VillianHeroCell = VillianHeroCell;
    egret.registerClass(VillianHeroCell,"g_villian.VillianHeroCell");
})(g_villian || (g_villian = {}));

/**
 * Created by Zhuang on 2016/7/4.
 */
var g_villian;
(function (g_villian) {
    var VillianSoulLayer = (function (_super) {
        __extends(VillianSoulLayer, _super);
        function VillianSoulLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VillianSoulLayer,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_villian.VillianSoulCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            return gd.heroCtrl.getList();
        };
        p._click_list_items = function (event) {
            var self = this;
            var bdc = event.item;
            //VillianSoulLayer.create().setData({curHero:bdc}).show();
        };
        return VillianSoulLayer;
    })(mo.gui.Dlg);
    g_villian.VillianSoulLayer = VillianSoulLayer;
    egret.registerClass(VillianSoulLayer,"g_villian.VillianSoulLayer");
})(g_villian || (g_villian = {}));

/**
 * Created by Zhuang on 2016/7/4.
 */
var g_villian;
(function (g_villian) {
    var VillianSoulCell = (function (_super) {
        __extends(VillianSoulCell, _super);
        function VillianSoulCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VillianSoulCell,p=c.prototype;
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
        };
        return VillianSoulCell;
    })(mo.gui.ItemRenderer);
    g_villian.VillianSoulCell = VillianSoulCell;
    egret.registerClass(VillianSoulCell,"g_villian.VillianSoulCell");
})(g_villian || (g_villian = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_villian;
(function (g_villian) {
    /**
     *
     * @author
     *
     */
    var VillianShopLayer = (function (_super) {
        __extends(VillianShopLayer, _super);
        function VillianShopLayer() {
            _super.apply(this, arguments);
            this._comps = [];
        }
        var d = __define,c=VillianShopLayer,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_villian.VillianShopItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
        };
        p._data_list_items = function () {
            var self = this;
            return gd.heroCtrl.getList();
        };
        p._click_list_items = function (event) {
            var self = this;
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        return VillianShopLayer;
    })(mo.gui.Dlg);
    g_villian.VillianShopLayer = VillianShopLayer;
    egret.registerClass(VillianShopLayer,"g_villian.VillianShopLayer");
})(g_villian || (g_villian = {}));

/**
 * Created by Administrator on 2015/9/30.
 */
var g_villian;
(function (g_villian) {
    var VillianShopItem = (function (_super) {
        __extends(VillianShopItem, _super);
        function VillianShopItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=VillianShopItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            mo.gui.helper.setSkinName(this, g_shop.ArenaShopItem.__className);
        };
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
            //ShopBuy.create().setData({type:gc.c_prop.shopTypeKey.arena, shopItem:self.data, index:self.itemIndex}).show();
        };
        return VillianShopItem;
    })(mo.gui.ItemRenderer);
    g_villian.VillianShopItem = VillianShopItem;
    egret.registerClass(VillianShopItem,"g_villian.VillianShopItem");
})(g_villian || (g_villian = {}));

