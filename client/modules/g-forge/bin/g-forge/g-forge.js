/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_forge;
(function (g_forge) {
    g_forge.SUBMID_STR = 0;
    g_forge.SUBMID_STAR = 1;
    g_forge.SUBMID_GEM = 2;
    /**
     *
     * @author
     *
     */
    var ForgeLayer = (function (_super) {
        __extends(ForgeLayer, _super);
        function ForgeLayer() {
            _super.apply(this, arguments);
            this._btnStr = ["btn_txt_g_strength", "btn_txt_g_upstar", "btn_txt_g_uplvl"];
        }
        var d = __define,c=ForgeLayer,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            var redKey_intensify = {};
            redKey_intensify[0] = gc.c_prop.pointRedKey.role1_intensify;
            redKey_intensify[1] = gc.c_prop.pointRedKey.role2_intensify;
            redKey_intensify[2] = gc.c_prop.pointRedKey.role3_intensify;
            var redKey_star = {};
            redKey_star[0] = gc.c_prop.pointRedKey.role1_star;
            redKey_star[1] = gc.c_prop.pointRedKey.role2_star;
            redKey_star[2] = gc.c_prop.pointRedKey.role3_star;
            var redKey_gem = {};
            redKey_gem[0] = gc.c_prop.pointRedKey.role1_gem;
            redKey_gem[1] = gc.c_prop.pointRedKey.role2_gem;
            redKey_gem[2] = gc.c_prop.pointRedKey.role3_gem;
            self.redKeyArr = [redKey_intensify, redKey_star, redKey_gem]; //强化，升星，宝石
            self._comps = [];
            g_forge.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._heroChanged = function (hec) {
            var self = this;
            self.setData({ hec: hec });
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            if (g_forge.roleChgEmitter)
                g_forge.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var part in heroEquipIndies) {
                var item = self['eq_' + part];
                if (item) {
                    item.onClick(self._onEquipItemClick, self, item);
                }
            }
            self._comps.push(g_forge.EquipStrBase.create().setData({ tray: self.container }).show());
            self._comps.push(g_forge.EquipStrStar.create().setData({ tray: self.container, delegate: self }).show());
            self._comps.push(g_forge.EquipStrGem.create().setData({ tray: self.container }).show());
            self.img_border_light.visible = false;
            process.nextTick(function () {
                self.tab_str.selectedIndex = 0;
                self.tabLastSelectIndex = 0;
                var subModuleId = self.moduleParam.subModuleId;
                switch (subModuleId) {
                    case g_forge.SUBMID_STR:
                        self.tab_str.selectedIndex = 0;
                        break;
                    case g_forge.SUBMID_STAR:
                        self.tab_str.selectedIndex = 1;
                        break;
                    case g_forge.SUBMID_GEM:
                        self.tab_str.selectedIndex = 2;
                        break;
                }
                //默认取第一个英雄数据
                var hec = gd.heroCtrl.getMainHeroCtrl();
                self.setData({ hec: hec });
            });
        };
        //获取可以操作的装备部位
        p._getRealPart = function () {
            var self = this;
            var hec = self.hec;
            var part = (self.part != null) ? self.part : hec.getFirstEquipedPart();
            part = hec.isPartEquiped(part) ? part : hec.getFirstEquipedPart();
            return part;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            self.part = self._getRealPart();
            self.img_border_light.visible = self.hec.isNormalEquiped();
            if (self.hec.isNormalEquiped()) {
                self._moveLightBorder(self["eq_" + self.part]);
            }
            self._tap_tab_str();
        };
        p.updateEquipItems = function () {
            var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            var hec = self.hec;
            var equipData = hec.equipData;
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var part in heroEquipIndies) {
                var equipId = equipData[part];
                var iPart = parseInt(part);
                var item = self['eq_' + part];
                var data;
                if (item) {
                    switch (selectedIndex) {
                        case 0:
                            data = { hec: hec, part: iPart, equipId: equipId, showType: 1, strLvl: hec.getStrLvlByEquipPart(iPart) };
                            break;
                        case 1:
                            data = { hec: hec, part: iPart, equipId: equipId, showType: 2, starLvl: hec.getStarLvlByEquipPart(iPart) };
                            break;
                        case 2:
                            data = { hec: hec, part: iPart, equipId: equipId, showType: 3, gemInfo: hec.getGemInfoByPart(iPart) };
                            break;
                    }
                    item.setData(data);
                }
            }
        };
        p._onEquipItemClick = function (item) {
            var self = this;
            var hec = self.hec;
            var part = item.part;
            var hasEquip = hec.isPartEquiped(part);
            if (!hasEquip)
                return mo.showMsg(gc.id_c_msgCode.noEquipNow);
            self.part = part;
            self._moveLightBorder(item);
            self._tap_tab_str();
        };
        p._moveLightBorder = function (item) {
            var self = this;
            var iW = item.width, iH = item.height;
            var bW = self.img_border_light.width, bH = self.img_border_light.height;
            self.img_border_light.x = item.x - (bW - iW) / 2 + 2; //for png
            self.img_border_light.y = item.y - (bH - iH) / 2 + 3;
        };
        p._hideAllComp = function () {
            var self = this;
            for (var i = 0, li = self._comps.length; i < li; i++) {
                self._comps[i].visible = false;
            }
        };
        p._tap_tab_str = function () {
            var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            if (selectedIndex == 0) {
                needLvl = c_open[gc.id_c_open.strength][gc.c_open_lvlRequired];
            }
            else if (selectedIndex == 1) {
                needLvl = c_open[gc.id_c_open.star][gc.c_open_lvlRequired];
            }
            else if (selectedIndex == 2) {
                needLvl = c_open[gc.id_c_open.stone][gc.c_open_lvlRequired];
            }
            if (gd.userCtrl.getLvl() < needLvl) {
                process.nextTick(function () {
                    self.tab_str.selectedIndex = self.tabLastSelectIndex;
                });
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, needLvl);
            }
            var isEquiped = self.hec.isNormalEquiped();
            if (!isEquiped) {
                if (self.tab_str.selectedIndex != 0) {
                    process.nextTick(function () {
                        self.tab_str.selectedIndex = 0;
                    });
                    selectedIndex = 0;
                }
                mo.showMsg(gc.id_c_msgCode.noEquipNow);
            }
            self.tabLastSelectIndex = selectedIndex;
            self._hideAllComp();
            var comp = self._comps[selectedIndex];
            comp.visible = true;
            comp.setData({ hec: self.hec, part: self.part });
            self.btn_do.icon = self._btnStr[selectedIndex];
            self.updateEquipItems();
            self._updateRed();
            self._updateBtnVisible();
        };
        p._updateBtnVisible = function () {
            var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            var opt;
            self.label_open.visible = false;
            if (selectedIndex == 0) {
                opt = self.hec.getStrOpt(self.part);
                self.btn_do.visible = (opt != null) && (!opt.strMax);
            }
            else if (selectedIndex == 1) {
                opt = self.hec.getUpStarOpt(self.part);
                self.btn_do.visible = (opt != null) && !opt.strMax;
            }
            else if (selectedIndex == 2) {
                opt = self.hec.getUpGemOpt(self.part);
                self.btn_do.visible = (opt != null) && !opt.strMax;
                if (self.btn_do.visible) {
                    self.btn_do.visible = opt.roleLvlEnough;
                    self.label_open.visible = !opt.roleLvlEnough;
                    self.label_open.text = opt.nextNeedLvl;
                }
            }
        };
        p._tap_btn_do = function () {
            var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            var opt;
            var itemId;
            if (selectedIndex == 0) {
                opt = self.hec.getStrOpt(self.part);
                if (!opt.stoneEnough) {
                    itemId = gc.c_prop.spItemIdKey.intensify;
                    if (g_base.GainWay.canBuyFromShop(itemId)) {
                        g_base.GainWayShop.create().setData({ itemId: itemId, count: opt.costStone - opt.stone }).show().onClose(function () {
                            self.dataChanged();
                        });
                    }
                    else {
                        g_base.GainWay.create().setData({ itemId: itemId }).show();
                    }
                }
                else {
                    self.hec.strength(opt, function () {
                        self.dataChanged();
                    }, self);
                }
            }
            else if (selectedIndex == 1) {
                opt = self.hec.getUpStarOpt(self.part);
                if (!opt.stoneEnough) {
                    itemId = gc.c_prop.spItemIdKey.starStone;
                    if (g_base.GainWay.canBuyFromShop(itemId)) {
                        g_base.GainWayShop.create().setData({ itemId: itemId, count: opt.costStone - opt.stone }).show().onClose(function () {
                            self.dataChanged();
                        });
                    }
                    else {
                        g_base.GainWay.create().setData({ itemId: itemId }).show();
                    }
                }
                else {
                    self.hec.upStar(opt, function () {
                        self.dataChanged();
                    }, self);
                }
            }
            else if (selectedIndex == 2) {
                opt = self.hec.getUpGemOpt(self.part);
                if (!opt.stoneEnough) {
                    itemId = opt.gemDebrisId;
                    if (g_base.GainWay.canBuyFromShop(itemId)) {
                        g_base.GainWayShop.create().setData({ itemId: itemId, count: opt.costGemDebris - opt.gemDebris }).show().onClose(function () {
                            self.dataChanged();
                        });
                    }
                    else {
                        g_base.GainWay.create().setData({ itemId: itemId }).show();
                    }
                }
                else {
                    self.hec.upGem(opt, function () {
                        self.dataChanged();
                    }, self);
                }
            }
        };
        p._tap_btn_help = function () {
            var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            var ids = [8, 9, 10];
            g_base.BaseShowTip.create().setData({ id: ids[selectedIndex] }).show();
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        p._updateRed = function () {
            var self = this;
            var roleIndex = gd.heroCtrl.getHeroIndex(self.hec);
            var redKeyArr = self.redKeyArr;
            self.img_red0.visible = gd.pointCtrl.isShow(redKeyArr[0][roleIndex]);
            self.img_red1.visible = gd.pointCtrl.isShow(redKeyArr[1][roleIndex]);
            self.img_red2.visible = gd.pointCtrl.isShow(redKeyArr[2][roleIndex]);
        };
        return ForgeLayer;
    })(mo.gui.Layer);
    g_forge.ForgeLayer = ForgeLayer;
    egret.registerClass(ForgeLayer,"g_forge.ForgeLayer");
})(g_forge || (g_forge = {}));

var g_forge;
(function (g_forge) {
    /**
     *
     * @author
     *
     */
    var EquipStrBase = (function (_super) {
        __extends(EquipStrBase, _super);
        function EquipStrBase() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EquipStrBase,p=c.prototype;
        //@override
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_STR, function () {
                self._efxPlayer.play();
            });
            self.img_cost.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.intensify);
            self._efxPlayer = uiHelper.EfxPlayer.createPlayer(self.efx);
        };
        p._getRealPart = function () {
            var self = this;
            var hec = self.data.hec;
            var part = (self.data.part != null) ? self.data.part : hec.getFirstEquipedPart();
            part = hec.isPartEquiped(part) ? part : hec.getFirstEquipedPart();
            return part;
        };
        p._showEmpty = function () {
            var self = this;
            self.label_cost_stone.text = [gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.intensify), 0];
            self.label_cost_gold.text = 0 + "";
            self.label_curProp.visible = false;
            self.label_nextProp.visible = false;
            self.grp_noMax.visible = false;
            self.grp_max.visible = false;
            self.label_noRefineLv.visible = false;
            self.ico_refine.visible = false;
        };
        //@override
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var hec = self.data.hec;
            if (!hec) {
                self._showEmpty();
                return;
            }
            var part = self._getRealPart();
            self.part_item.setData({ part: part });
            if (part == null) {
                self._showEmpty();
                return;
            }
            self.label_curProp.visible = true;
            self.label_nextProp.visible = true;
            var opt = hec.getStrOpt(part);
            var propKey = opt.curStrInfo[1];
            var propV = opt.curStrInfo[2];
            self.label_curProp.text = [gc.c_prop.heroProp[propKey], propV];
            self.grp_noMax.visible = !opt.strMax;
            self.grp_max.visible = opt.strMax;
            if (!opt.strMax) {
                self.label_cost_stone.text = [opt.stone, opt.costStone];
                self.label_cost_gold.text = opt.costGold;
                var propKey = opt.nextStrInfo[1];
                var propV = opt.nextStrInfo[2];
                self.label_nextProp.text = [gc.c_prop.heroProp[propKey], propV];
            }
            self.label_nextProp.visible = !opt.strMax;
            var opt = hec.getStrOpt(part);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.equipRefineCfg);
            if (opt.strengthLvl >= gameInfo[0]) {
                self.ico_refine.visible = true;
                self.label_noRefineLv.visible = false;
            }
            else {
                self.ico_refine.visible = false;
                self.label_noRefineLv.visible = true;
                self.label_noRefineLv.text = gameInfo[0];
            }
        };
        p._tap_ico_refine = function () {
            var self = this;
            var hec = self.data.hec;
            var part = self._getRealPart();
            g_forge.RefineLayer.create().setData({ hec: hec, part: part }).show().onClose(function () {
                self.dataChanged();
            });
        };
        return EquipStrBase;
    })(mo.gui.Layer);
    g_forge.EquipStrBase = EquipStrBase;
    egret.registerClass(EquipStrBase,"g_forge.EquipStrBase");
})(g_forge || (g_forge = {}));

var g_forge;
(function (g_forge) {
    /**
     *
     * @author
     *
     */
    var EquipStrStar = (function (_super) {
        __extends(EquipStrStar, _super);
        function EquipStrStar() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EquipStrStar,p=c.prototype;
        //@override
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_UPSTAR, function () {
                self._efxPlayer.play();
            });
            self.img_cost.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.starStone);
            self._efxPlayer = uiHelper.EfxPlayer.createPlayer(self.efx);
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
        };
        p._getRealPart = function () {
            var self = this;
            var hec = self.data.hec;
            var part = (self.data.part != null) ? self.data.part : hec.getFirstEquipedPart();
            part = hec.isPartEquiped(part) ? part : hec.getFirstEquipedPart();
            return part;
        };
        p._showEmpty = function () {
            var self = this;
            self.label_prop_base.text = 0 + "";
            self.label_prop_next.text = 0 + "";
            self.label_cost_stone.text = [gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.starStone), 0];
            self.label_cost_gold.text = 0 + "";
        };
        //@override
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var hec = self.data.hec;
            if (!hec) {
                self._showEmpty();
                return;
            }
            var part = self._getRealPart();
            self.part_item.setData({ part: part });
            if (part == null) {
                self._showEmpty();
                return;
            }
            self.label_prop_base.visible = true;
            self.label_prop_next.visible = true;
            var opt = hec.getUpStarOpt(part);
            if (!opt.topNeed) {
                self.grp_tupo.visible = false;
                self.label_costDesc.text = "升星\n消耗";
                if (!opt.strMax) {
                    self.label_cost_stone.text = [opt.stone, opt.costStone];
                    self.label_cost_gold.text = opt.costGold;
                }
            }
            else {
                self.grp_tupo.visible = true;
                self.label_costDesc.text = "突破\n消耗";
                self.label_cost_stone.text = [opt.stone, opt.topCostStone];
                self.label_cost_gold.text = opt.topCostGold;
            }
            self.grp_max.visible = opt.strMax && opt.topMax;
            self.grp_noMax.visible = !self.grp_max.visible;
            self.label_star.text = opt.starLvl;
            self.label_tupo.text = opt.topLv;
            //属性
            self.label_prop_base.text = opt.curProp[1];
            self.label_prop_next.text = opt.nextProp[1];
            self.label_tupoProp.text = [gc.c_prop.heroProp[opt.topCurProp[0]], opt.topCurProp[1]];
        };
        p._tap_btn_tupo = function () {
            var self = this;
            var hec = self.data.hec;
            var part = self._getRealPart();
            var opt = hec.getUpStarOpt(part);
            if (!opt.topStoneEnough) {
                var itemId = gc.c_prop.spItemIdKey.starStone;
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({
                        itemId: itemId,
                        count: opt.costStone - opt.stone
                    }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
            else {
                hec.starTop(opt, function (data) {
                    //[是否成功]
                    var isWin = data[0];
                    if (isWin) {
                        self._winEfxPlayer.play();
                    }
                    else {
                        self._failEfxPlayer.play();
                    }
                    self.data.delegate.dataChanged();
                    self.dataChanged();
                }, self);
            }
        };
        return EquipStrStar;
    })(mo.gui.Layer);
    g_forge.EquipStrStar = EquipStrStar;
    egret.registerClass(EquipStrStar,"g_forge.EquipStrStar");
})(g_forge || (g_forge = {}));

var g_forge;
(function (g_forge) {
    /**
     *
     * @author
     *
     */
    var EquipStrGem = (function (_super) {
        __extends(EquipStrGem, _super);
        function EquipStrGem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EquipStrGem,p=c.prototype;
        //@override
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_UPGEM, function () {
                self._efxPlayer.play();
            });
            self._efxPlayer = uiHelper.EfxPlayer.createPlayer(self.efx);
        };
        p._getRealPart = function () {
            var self = this;
            var hec = self.data.hec;
            var part = (self.data.part != null) ? self.data.part : hec.getFirstEquipedPart();
            part = hec.isPartEquiped(part) ? part : hec.getFirstEquipedPart();
            return part;
        };
        p._showEmpty = function () {
            var self = this;
            self.gem_stone.setData({ hec: self.data.hec });
            self.label_cost_stone.text = [0, 0];
        };
        //@override
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var hec = self.data.hec;
            if (!hec) {
                self._showEmpty();
                return;
            }
            var part = self._getRealPart();
            self.part_item.setData({ part: part });
            if (part == null) {
                self._showEmpty();
                return;
            }
            self.gem_stone.setData({ hec: hec, part: part });
            var opt = hec.getUpGemOpt(part);
            self.grp_noMax.visible = !opt.strMax;
            self.grp_max.visible = opt.strMax;
            if (!opt.strMax) {
                self.label_cost_stone.text = [opt.gemDebris, opt.costGemDebris];
                self.img_cost.source = resHelper.getItemIconPath(opt.gemDebrisId);
            }
        };
        return EquipStrGem;
    })(mo.gui.Layer);
    g_forge.EquipStrGem = EquipStrGem;
    egret.registerClass(EquipStrGem,"g_forge.EquipStrGem");
})(g_forge || (g_forge = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_forge;
(function (g_forge) {
    var RefineLayer = (function (_super) {
        __extends(RefineLayer, _super);
        function RefineLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RefineLayer,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            g_forge.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._heroChanged = function (hec) {
            var self = this;
            self.setData({ hec: hec });
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            g_forge.baseBottomBar.visible = false;
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (g_forge.baseBottomBar)
                g_forge.baseBottomBar.visible = true;
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            if (g_forge.roleChgEmitter)
                g_forge.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.gold.toString(), self.dataChanged);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.diamond.toString(), self.dataChanged);
            self.hec = self.get('hec');
            self.part = self.get('part');
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var part in heroEquipIndies) {
                var item = self['eq_' + part];
                if (item) {
                    item.onClick(self._onEquipItemClick, self, item);
                }
            }
            self.img_border_light.visible = false;
            self.img_cost.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.intensify);
            self.ico_stone.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.intensify);
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._critEfxPlayer = uiHelper.EfxPlayer.create(self.effect_crit);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
            self._downEfxPlayer = uiHelper.EfxPlayer.create(self.effect_downLv);
        };
        p._getRealPart = function () {
            var self = this;
            var hec = self.data.hec;
            var part = (self.data.part != null) ? self.data.part : hec.getFirstEquipedPart();
            part = hec.isPartEquiped(part) ? part : hec.getFirstEquipedPart();
            return part;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            var hec = self.data.hec;
            var part = self._getRealPart();
            self.part_item.setData({ part: part });
            if (part == null) {
                self._showEmpty();
            }
            self.img_border_light.visible = self.hec.isNormalEquiped();
            if (self.hec.isNormalEquiped()) {
                self._moveLightBorder(self["eq_" + self.part]);
                self.updateItem();
            }
            self.updateEquipItems();
        };
        p.updateEquipItems = function () {
            var self = this;
            var hec = self.hec;
            var equipData = hec.equipData;
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var part in heroEquipIndies) {
                var equipId = equipData[part];
                var iPart = parseInt(part);
                var item = self['eq_' + part];
                var data;
                if (item) {
                    data = {
                        hec: hec,
                        part: iPart,
                        equipId: equipId,
                        showType: 4,
                        strLvl: hec.getStrLvlByEquipPart(iPart)
                    };
                    item.setData(data);
                }
            }
        };
        p._onEquipItemClick = function (item) {
            var self = this;
            var hec = self.hec;
            var part = item.part;
            var hasEquip = hec.isPartEquiped(part);
            if (!hasEquip)
                return mo.showMsg(gc.id_c_msgCode.noEquipNow);
            self.part = part;
            self._moveLightBorder(item);
            self.updateItem();
        };
        p._showEmpty = function () {
            var self = this;
            self.label_cost_stone.text = [gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.intensify), 0];
            self.label_cost_gold.text = 0 + "";
            self.label_curProp.visible = false;
            self.label_nextProp.visible = false;
            self.grp_jinglian.visible = false;
        };
        p.updateItem = function () {
            var self = this;
            var hec = self.data.hec;
            if (!hec) {
                self._showEmpty();
                return;
            }
            if (self._getRealPart() == null) {
                self._showEmpty();
                return;
            }
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.strength][gc.c_open_lvlRequired];
            if (gd.userCtrl.getLvl() < needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, needLvl);
            }
            var isEquiped = self.hec.isNormalEquiped();
            if (!isEquiped)
                return mo.showMsg(gc.id_c_msgCode.noEquipNow);
            var part = self.part;
            self.part_item.setData({ part: part });
            if (part == null) {
                self._showEmpty();
                return;
            }
            self.label_curProp.visible = true;
            self.label_nextProp.visible = true;
            var opt = hec.getRefineOpt(part);
            var propKey = opt.curRefineInfo[1];
            var propV = opt.curRefineInfo[2];
            self.label_curProp.text = [gc.c_prop.heroProp[propKey], (propV * 100).toFixed(1)];
            self.lable_curLv.text = opt.refineLv;
            self.grp_jinglian.visible = !opt.isMax;
            self.label_nextProp.visible = !opt.isMax;
            self.label_max.visible = opt.isMax;
            self.label_cannot.visible = false;
            if (!opt.isMax) {
                self.label_cost_stone.text = opt.costStone;
                self.label_cost_gold.text = opt.costGold;
                var propKey = opt.nextRefineInfo[1];
                var propV = opt.nextRefineInfo[2];
                self.label_nextProp.text = [gc.c_prop.heroProp[propKey], (propV * 100).toFixed(1)];
                if (opt.strengthLvl >= opt.needStrLv) {
                    self.grp_jinglian.visible = true;
                    self.label_cannot.visible = false;
                }
                else {
                    self.grp_jinglian.visible = false;
                    self.label_cannot.visible = true;
                    self.label_cannot.text = opt.needStrLv;
                }
            }
            self.label_gold.text = gd.userCtrl.getGold().toString();
            self.label_yuanbao.text = gd.userCtrl.getDiamond().toString();
            self.label_stone.text = opt.stone;
            self.label_nextProp.visible = !opt.isMax;
        };
        p._moveLightBorder = function (item) {
            var self = this;
            var iW = item.width, iH = item.height;
            var bW = self.img_border_light.width, bH = self.img_border_light.height;
            self.img_border_light.x = item.x - (bW - iW) / 2 + 2; //for png
            self.img_border_light.y = item.y - (bH - iH) / 2 + 3;
        };
        p._tap_btn_do = function () {
            var self = this;
            var opt;
            var itemId;
            opt = self.hec.getRefineOpt(self.part);
            if (!opt.stoneEnough) {
                itemId = gc.c_prop.spItemIdKey.intensify;
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({
                        itemId: itemId,
                        count: opt.costStone - opt.stone
                    }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
            else {
                self.hec.equipRefine(opt, function (data) {
                    //[是否成功,强化后等级,是否暴击,是否降级]
                    var isWin = data[0];
                    var isCrit = data[2];
                    var isDown = data[3];
                    if (isWin) {
                        self._winEfxPlayer.play();
                        if (isCrit) {
                            self._critEfxPlayer.play();
                        }
                    }
                    else {
                        self._failEfxPlayer.play();
                        if (isDown) {
                            self._downEfxPlayer.play();
                        }
                    }
                    self.dataChanged();
                }, self);
            }
        };
        p._tap_btn_help = function () {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.equipRefineCfg);
            g_base.BaseShowTip.create().setData({ id: 46, param1: gameInfo[0] }).show();
        };
        p._tap_btn_back = function () {
            this.close();
        };
        return RefineLayer;
    })(mo.gui.Layer);
    g_forge.RefineLayer = RefineLayer;
    egret.registerClass(RefineLayer,"g_forge.RefineLayer");
})(g_forge || (g_forge = {}));

/**
 * Created by SmallAiTT on 2015/7/15.
 */
var g_forge;
(function (g_forge) {
    logger.initLogger(g_forge, "g-forge");
    logger.setLvl("g-forge", 4);
    var ForgeScene = (function (_super) {
        __extends(ForgeScene, _super);
        function ForgeScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ForgeScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            g_base.modIdx = 3;
            var layer = g_base.BaseTopRole.create().setData({ redType: 1 }).show();
            g_forge.roleChgEmitter = layer.emitter;
            layer.hide4thRole(false);
            var fl = g_forge.ForgeLayer.create();
            fl.moduleParam = self.moduleParam;
            fl.show();
            g_forge.baseBottomBar = g_base.BaseBottomBar.create().show();
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            g_forge.roleChgEmitter = null;
        };
        return ForgeScene;
    })(mo.gui.UIScene);
    g_forge.ForgeScene = ForgeScene;
    egret.registerClass(ForgeScene,"g_forge.ForgeScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = ForgeScene;
        moduleCfgItem.onValid(function (moduleParam) {
            var openLvl, c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            if (moduleParam) {
                if (moduleParam.subModuleId == 0) {
                    openLvl = c_open[gc.id_c_open.strength][gc.c_open_lvlRequired];
                }
                else if (moduleParam.subModuleId == 1) {
                    openLvl = c_open[gc.id_c_open.star][gc.c_open_lvlRequired];
                }
                else if (moduleParam.subModuleId == 2) {
                    openLvl = c_open[gc.id_c_open.stone][gc.c_open_lvlRequired];
                }
            }
            if ((openLvl != null) && openLvl > gd.userCtrl.getLvl()) {
                mo.showMsg(gc.id_c_msgCode.noRoleLvl, openLvl);
                return false;
            }
            return true;
        });
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
    });
})(g_forge || (g_forge = {}));

