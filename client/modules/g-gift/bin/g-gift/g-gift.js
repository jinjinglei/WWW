/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_gift;
(function (g_gift) {
    /**
     *
     * @author
     *
     */
    var GiftEquip = (function (_super) {
        __extends(GiftEquip, _super);
        function GiftEquip() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftEquip,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_gift = g_gift.GiftEquipCell;
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            self.refreshList("list_gift");
        };
        p._data_list_gift = function () {
            var self = this;
            var talismans = gd.heroTalismanCtrl.getHaveTrump(self.hec.get(gc.dsConsts.HeroEntity.id));
            var gifts = [];
            for (var key in talismans) {
                gifts.push({ hec: self.hec, gift: talismans[key], giftInfo: mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, key) });
            }
            return gifts;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 219 }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return GiftEquip;
    })(mo.gui.Dlg);
    g_gift.GiftEquip = GiftEquip;
    egret.registerClass(GiftEquip,"g_gift.GiftEquip");
})(g_gift || (g_gift = {}));

/**
 * Created by Administrator on 2016/5/17.
 */
var g_gift;
(function (g_gift) {
    var GiftEquipCell = (function (_super) {
        __extends(GiftEquipCell, _super);
        function GiftEquipCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftEquipCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.data.hec;
            self.gift = self.data.gift; //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.data.giftInfo;
            self.label_name.text = [self.gift[0], self.giftInfo[gc.t_talisman_name]];
            self.label_ziZhi.text = self.gift[1];
            self.label_star.text = self.gift[2];
            self.ico_gift.setData({ itemId: self.giftInfo[gc.t_talisman_id] });
            var isEquip = self.giftInfo[gc.t_talisman_id] == gd.heroTalismanCtrl.getTalismanAdorn(self.hec.get(gc.dsConsts.HeroEntity.id));
            self.ico_equiped.visible = isEquip;
            self.btn_equip.visible = !isEquip;
        };
        p._tap_btn_equip = function () {
            var self = this;
            gd.heroTalismanCtrl.wearTrump(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function (data) {
                self.dataChanged();
                self.delegate.dataChanged();
            }, self);
        };
        return GiftEquipCell;
    })(mo.gui.ItemRenderer);
    g_gift.GiftEquipCell = GiftEquipCell;
    egret.registerClass(GiftEquipCell,"g_gift.GiftEquipCell");
})(g_gift || (g_gift = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_gift;
(function (g_gift) {
    /**
     *
     * @author
     *
     */
    var GiftForge = (function (_super) {
        __extends(GiftForge, _super);
        function GiftForge() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftForge,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_skill = g_gift.GiftSkillCell;
            self.registerClassByKey(gd.HeroTalismanCtrl, gd.HeroTalismanCtrl.ON_GIFT_CHANGED, self.onGiftChanged);
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            self.gift = self.get('gift'); //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.get('giftInfo');
            self.showStar(self.gift[2]);
            var giftPropObj = gd.heroTalismanCtrl.getPropObjBy(self.giftInfo[gc.t_talisman_id], self.gift[1], self.gift[0]);
            self.label_propL.text = self.getPropStr(giftPropObj, true);
            self.label_propR.text = self.getPropStr(giftPropObj, false);
            self.label_level.text = self.gift[0];
            self.label_ziZhi.text = self.gift[1];
            if (parseInt(self.giftInfo[gc.t_talisman_effectId]) > 0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }
            else {
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
            self.refreshList("list_skill");
        };
        p.onGiftChanged = function (giftId, gift) {
            var self = this;
            if (giftId == self.giftInfo[gc.t_talisman_id]) {
                self.data.gift = gift;
                self.dataChanged();
            }
        };
        p.showStar = function (star) {
            var self = this;
            for (var i = 0; i < star; ++i) {
                self.grp_star.getElementAt(i).source = "ico_star";
            }
            for (var i = star; i < self.grp_star.numElements; ++i) {
                if (i > 0) {
                    var t_talismanStar = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, self.giftInfo[gc.t_talisman_id] + i);
                    if (t_talismanStar[gc.t_talismanStar_skillId]) {
                        self.grp_star.getElementAt(i).source = "ico_xinjidenji";
                    }
                    else {
                        self.grp_star.getElementAt(i).source = "ico_star_gray";
                    }
                }
                else {
                    self.grp_star.getElementAt(i).source = "ico_star_gray";
                }
            }
        };
        p.getPropStr = function (propObj, isLeft) {
            var str = "";
            for (var i = 33; i <= 40; ++i) {
                if (isLeft && i % 2 == 0)
                    continue;
                if (!isLeft && i % 2 == 1)
                    continue;
                str += "[ubb color=#fff000]" + gc.c_prop.heroProp[i] + ": " + "[/ubb]";
                str += "[ubb color=#00ff00]+" + (propObj[i] || 0) + "[/ubb]";
                str += "\n";
            }
            return str;
        };
        p._data_list_skill = function () {
            var self = this;
            return gd.heroTalismanCtrl.getSkillList(self.giftInfo[gc.t_talisman_id], self.gift[4]);
        };
        p._tap_btn_lvUp = function () {
            var self = this;
            g_gift.GiftLvUp.create().setData({ hec: self.hec, gift: self.gift, giftInfo: self.giftInfo }).show();
        };
        p._tap_btn_xiLian = function () {
            var self = this;
            g_gift.GiftXiLian.create().setData({ hec: self.hec, gift: self.gift, giftInfo: self.giftInfo }).show();
        };
        p._tap_btn_upStar = function () {
            var self = this;
            g_gift.GiftUpStar.create().setData({ hec: self.hec, gift: self.gift, giftInfo: self.giftInfo }).show();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 220 }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return GiftForge;
    })(mo.gui.Dlg);
    g_gift.GiftForge = GiftForge;
    egret.registerClass(GiftForge,"g_gift.GiftForge");
})(g_gift || (g_gift = {}));

/**
 * Created by Administrator on 2016/5/17.
 */
var g_gift;
(function (g_gift) {
    var GiftGongMingCell = (function (_super) {
        __extends(GiftGongMingCell, _super);
        function GiftGongMingCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftGongMingCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            var gongMingInfo = self.data.gongMingInfo;
            var flags = self.data.flags;
            var talismans = gd.heroTalismanCtrl.getHaveTrump(hec.get(gc.dsConsts.HeroEntity.id));
            var resonance = gongMingInfo[gc.t_talismanRes_resonance];
            self.ico_gift0.setData({ itemId: resonance[0] });
            self.ico_gift1.setData({ itemId: resonance[1] });
            var isAllAct = true;
            if (flags && flags[0]) {
                self.ico_gift0.ico_gift.visible = true;
                self.label_noAct0.visible = false;
            }
            else {
                self.ico_gift0.ico_gift.visible = false;
                self.label_noAct0.visible = true;
                isAllAct = false;
            }
            if (flags && flags[1]) {
                self.ico_gift1.ico_gift.visible = true;
                self.label_noAct1.visible = false;
            }
            else {
                self.ico_gift1.ico_gift.visible = false;
                self.label_noAct1.visible = true;
                isAllAct = false;
            }
            if (resonance[2]) {
                self.ico_gift2.setData({ itemId: resonance[2] });
                self.ico_gift2.visible = true;
                self.ico_gongMingBg2.visible = true;
                if (flags && flags[2]) {
                    self.ico_gift2.ico_gift.visible = true;
                    self.label_noAct2.visible = false;
                }
                else {
                    self.ico_gift2.ico_gift.visible = false;
                    self.label_noAct2.visible = true;
                    isAllAct = false;
                }
            }
            else {
                self.ico_gift2.visible = false;
                self.ico_gongMingBg2.visible = false;
                self.label_noAct2.visible = false;
            }
            var type = gongMingInfo[gc.t_talismanRes_type];
            var props = gongMingInfo[gc.t_talismanRes_extraPro];
            var str = "";
            if (type == 1) {
                for (var i = 0; i < props.length; ++i) {
                    str += gc.c_prop.heroProp[props[i][0]];
                    str += "+" + props[i][1];
                    str += " ";
                }
                str = str.substr(0, str.length - 1);
            }
            else {
                var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, props[0][0]);
                str = skillInfo[gc.t_talismanSkill_name];
            }
            if (!isAllAct) {
                str = "[ubb color=#ff0000]" + str + "(未激活)[/ubb]";
            }
            else {
                str = "[ubb color=#00ff00]" + str + "[/ubb]";
            }
            self.label_effect.text = str;
            self.label_name.text = gongMingInfo[gc.t_talismanRes_name];
            self.label_desc.text = gongMingInfo[gc.t_talismanRes_desc];
        };
        return GiftGongMingCell;
    })(mo.gui.ItemRenderer);
    g_gift.GiftGongMingCell = GiftGongMingCell;
    egret.registerClass(GiftGongMingCell,"g_gift.GiftGongMingCell");
})(g_gift || (g_gift = {}));

/**
 * Created by Administrator on 2016/5/17.
 */
var g_gift;
(function (g_gift) {
    var GiftInfoCell = (function (_super) {
        __extends(GiftInfoCell, _super);
        function GiftInfoCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftInfoCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.registerClassByKey(gd.HeroTalismanCtrl, gd.HeroTalismanCtrl.ON_GIFT_CHANGED, self.onGiftChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            var giftId = giftInfo[gc.t_talisman_id];
            self.ico_gift.setData({ itemId: giftId });
            var talismans = gd.heroTalismanCtrl.getHaveTrump(hec.get(gc.dsConsts.HeroEntity.id));
            var gift = talismans[giftId]; //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            //self.label_name.text = (gift?("Lv."+gift[0]):"")+giftInfo[gc.t_talisman_name];
            self.label_combat.text = gd.heroTalismanCtrl.calTaliCombatById(hec.get(gc.dsConsts.HeroEntity.id), giftId);
            if (gift) {
                self.grp_has.visible = true;
                self.grp_no.visible = false;
                self.label_lv.text = gift[0];
                self.label_ziZhi.text = gift[1];
                self.label_star.text = gift[2];
                self.ico_gift.setData({ itemId: giftInfo[gc.t_talisman_id] });
            }
            else {
                self.grp_has.visible = false;
                self.grp_no.visible = true;
                //self.label_desc.text = giftInfo[gc.t_talisman_desc];
                if (gd.heroTalismanCtrl.isHaveTrupId(giftId)) {
                    self.btn_act.visible = true;
                    self.btn_gain.visible = false;
                }
                else {
                    self.btn_act.visible = false;
                    self.btn_gain.visible = true;
                }
                var star = giftInfo[gc.t_talisman_skillStar];
                for (var i = 0; i < star; ++i) {
                    self.grp_star.getElementAt(i).visible = true;
                }
                for (var i = star; i < self.grp_star.numElements; ++i) {
                    self.grp_star.getElementAt(i).visible = false;
                }
            }
        };
        p.onGiftChanged = function (giftId, gift) {
            var self = this;
            if (giftId == self.data.giftInfo[gc.t_talisman_id]) {
                self.dataChanged();
            }
        };
        p._tap_btn_detail = function () {
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            var talismans = gd.heroTalismanCtrl.getHaveTrump(hec.get(gc.dsConsts.HeroEntity.id));
            g_gift.GiftForge.create().setData({ hec: hec, gift: talismans[giftInfo[gc.t_talisman_id]], giftInfo: giftInfo }).show();
        };
        p._tap_btn_act = function () {
            var self = this;
            var giftInfo = self.data.giftInfo;
            var giftId = giftInfo[gc.t_talisman_id];
            gd.heroTalismanCtrl.useTrumpItem(self.data.giftInfo[gc.t_talisman_id], function () {
                self.dataChanged();
            }, self);
        };
        p._tap_btn_gain = function () {
            var self = this;
            var giftInfo = self.data.giftInfo;
            var giftId = giftInfo[gc.t_talisman_id];
            if (g_base.GainWay.canBuyFromShop(giftId)) {
                g_base.GainWayShop.create().setData({
                    itemId: giftId,
                    count: 1
                }).show().onClose(function () {
                    self.dataChanged();
                });
            }
            else {
                g_base.GainWay.create().setData({ itemId: giftId }).show();
            }
        };
        return GiftInfoCell;
    })(mo.gui.ItemRenderer);
    g_gift.GiftInfoCell = GiftInfoCell;
    egret.registerClass(GiftInfoCell,"g_gift.GiftInfoCell");
})(g_gift || (g_gift = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_gift;
(function (g_gift) {
    /**
     *
     * @author
     *
     */
    var GiftLayer = (function (_super) {
        __extends(GiftLayer, _super);
        function GiftLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftLayer,p=c.prototype;
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
            g_gift.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
            self._Item_list_giftInfo = g_gift.GiftInfoCell;
            self._Item_list_merge = g_gift.GiftMergeCell;
            self._Item_list_gongMing = g_gift.GiftGongMingCell;
            self.registerClassByKey(gd.HeroTalismanCtrl, gd.HeroTalismanCtrl.ON_GIFT_CHANGED, self.dataChanged);
            self.registerClassByKey(gd.HeroTalismanCtrl, gd.HeroTalismanCtrl.ON_GIFT_EQUIP_CHANGED, self.dataChanged);
        };
        p._heroChanged = function (hec) {
            var self = this;
            self.setData({ hec: hec });
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            if (g_gift.roleChgEmitter)
                g_gift.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            //默认取第一个英雄数据
            var hec = gd.heroCtrl.getMainHeroCtrl();
            self.setData({ hec: hec });
            self.tab_str.selectedIndex = 0;
            self._tap_tab_str();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            self._tap_tab_str();
        };
        p._tap_tab_str = function () {
            var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            self.grp_detail.visible = selectedIndex == 0;
            self.grp_list.visible = selectedIndex == 1;
            self.grp_merge.visible = selectedIndex == 2;
            self.grp_gongMing.visible = selectedIndex == 3;
            var hecId = self.hec.get(gc.dsConsts.HeroEntity.id);
            if (selectedIndex == 0) {
                var datas = gd.heroTalismanCtrl.calTaliCombat(hecId); //[总战力，总属性，法宝数，技能数，共鸣数]
                self.label_fabaoProp.text = gc.c_prop.heroJob[self.hec.job];
                self.label_addCombat.text = [gc.c_prop.heroJob[self.hec.job], datas[0]];
                self.label_numGift.text = datas[2];
                self.label_numSkill.text = datas[3];
                self.label_numGongMing.text = datas[4];
                self.label_propL.text = self.getPropStr(datas[1], true);
                self.label_propR.text = self.getPropStr(datas[1], false);
                var curGiftId = gd.heroTalismanCtrl.getTalismanAdorn(hecId);
                self.ico_gift.setData({ itemId: curGiftId });
            }
            else if (selectedIndex == 1) {
                self.refreshList("list_giftInfo");
            }
            else if (selectedIndex == 2) {
                self.refreshList("list_merge");
            }
            else if (selectedIndex == 3) {
                self.refreshList("list_gongMing");
            }
        };
        p.getPropStr = function (propObj, isLeft) {
            var str = "";
            for (var i = 33; i <= 40; ++i) {
                if (isLeft && i % 2 == 0)
                    continue;
                if (!isLeft && i % 2 == 1)
                    continue;
                str += "[ubb color=#fff000]" + gc.c_prop.heroProp[i] + ": " + "[/ubb]";
                str += "[ubb color=#00ff00]+" + (propObj[i] || 0) + "[/ubb]";
                str += "\n";
            }
            return str;
        };
        p._data_list_giftInfo = function () {
            var self = this;
            var hec = self.hec;
            var giftInfos = mo.getJSONWithFileName(gc.cfg_t_talisman);
            var gifts = [];
            for (var id in giftInfos) {
                var giftInfo = giftInfos[id];
                if (giftInfo[gc.t_talisman_job] == hec.job && giftInfo[gc.t_talisman_isOpen]) {
                    gifts.push({ hec: hec, giftInfo: giftInfo });
                }
            }
            gifts.sort(function (gift1, gift2) {
                var talismans = gd.heroTalismanCtrl.getHaveTrump(hec.get(gc.dsConsts.HeroEntity.id));
                var giftId1 = gift1.giftInfo[gc.t_talisman_id];
                var giftId2 = gift2.giftInfo[gc.t_talisman_id];
                var gift1 = talismans[giftId1]; //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                var gift2 = talismans[giftId2]; //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                if (gift1 != gift2) {
                    return gift1 ? -1 : 1;
                }
                var have1 = gd.heroTalismanCtrl.isHaveTrupId(giftId1);
                var have2 = gd.heroTalismanCtrl.isHaveTrupId(giftId2);
                if (have1 != have2) {
                    return have1 ? -1 : 1;
                }
                return giftId1 - giftId2;
            });
            return gifts;
        };
        p._data_list_merge = function () {
            var self = this;
            var hec = self.hec;
            var giftInfos = mo.getJSONWithFileName(gc.cfg_t_talisman);
            var mergeInfos = mo.getJSONWithFileName(gc.cfg_t_talismanCom);
            var giftMerges = [];
            for (var id in giftInfos) {
                var giftInfo = giftInfos[id];
                if (giftInfo[gc.t_talisman_job] == hec.job && giftInfo[gc.t_talisman_isOpen]) {
                    var mergeInfo = mergeInfos[id];
                    if (mergeInfo) {
                        giftMerges.push({ hec: hec, giftInfo: giftInfo, mergeInfo: mergeInfo });
                    }
                }
            }
            return giftMerges;
        };
        p._data_list_gongMing = function () {
            var self = this;
            var hec = self.hec;
            var giftInfos = mo.getJSONWithFileName(gc.cfg_t_talisman);
            var gongMingInfos = mo.getJSONWithFileName(gc.cfg_t_talismanRes);
            var giftGongMings = [];
            var gongMingFlags = gd.heroTalismanCtrl.getTalismanFg(hec.get(gc.dsConsts.HeroEntity.id));
            for (var id in giftInfos) {
                var giftInfo = giftInfos[id];
                if (giftInfo[gc.t_talisman_job] == hec.job && giftInfo[gc.t_talisman_isOpen]) {
                    for (var key in gongMingInfos) {
                        var gongMingInfo = gongMingInfos[key];
                        if (gongMingInfo[gc.t_talismanRes_resonance][0] == id) {
                            giftGongMings.push({ hec: hec, giftInfo: giftInfo, gongMingInfo: gongMingInfo, flags: gongMingFlags[key] });
                        }
                    }
                }
            }
            return giftGongMings;
        };
        p._tap_btn_change = function () {
            var self = this;
            g_gift.GiftEquip.create().setData({ hec: self.hec }).show();
        };
        p._tap_btn_help = function () {
            var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            var ids = [218, 218, 218, 218];
            g_base.BaseShowTip.create().setData({ id: ids[selectedIndex] }).show();
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        return GiftLayer;
    })(mo.gui.Layer);
    g_gift.GiftLayer = GiftLayer;
    egret.registerClass(GiftLayer,"g_gift.GiftLayer");
})(g_gift || (g_gift = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_gift;
(function (g_gift) {
    /**
     *
     * @author
     *
     */
    var GiftLvUp = (function (_super) {
        __extends(GiftLvUp, _super);
        function GiftLvUp() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftLvUp,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            self.gift = self.get('gift'); //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.get('giftInfo');
            var curLv = self.gift[0];
            var curPorpObj = gd.heroTalismanCtrl.getPropObjBy(self.giftInfo[gc.t_talisman_id], self.gift[1], curLv);
            var t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, self.giftInfo[gc.t_talisman_id] + curLv);
            var t_talismanLvlNext = mo.getJSONWithFileName(gc.cfg_t_talismanLvl)[self.giftInfo[gc.t_talisman_id] + curLv + 1];
            var maxZiZhi = gd.heroTalismanCtrl.getMaxZiZhi(self.giftInfo[gc.t_talisman_id], self.gift[3]);
            self.label_curLv.text = curLv;
            self.label_curProp.text = self.getPropStr(curPorpObj);
            self.label_ziZhi.text = [self.gift[1], maxZiZhi];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            var curStar = self.gift[2];
            self.label_canLvUp.text = t_talismanLvl[gc.t_talismanLvl_starLimit];
            var t_talismanLvls = mo.getJSONWithFileName(gc.cfg_t_talismanLvl);
            var curLvStar = t_talismanLvl[gc.t_talismanLvl_starLimit];
            for (var key in t_talismanLvls) {
                if (t_talismanLvls[key][gc.t_talismanLvl_starLimit] == curLvStar + 1) {
                    var nextStarLv = parseInt(key) % 1000;
                    break;
                }
            }
            if (nextStarLv) {
                self.label_canLvUpNext.text = mo.STR.format("%s级后星级上限：%s星", nextStarLv, curLvStar + 1);
            }
            else {
                self.label_canLvUpNext.text = "星级上限已至最高";
            }
            if (curLv >= gameInfo[3]) {
                self.label_cannotLvUp.visible = true;
                self.grp_lvUp.visible = false;
                self.grp_next.visible = false;
                self.label_lvUpNoLv.visible = false;
            }
            else if (gd.userCtrl.getLvl() < t_talismanLvlNext[gc.t_talismanLvl_userLv]) {
                var nextPorpObj = gd.heroTalismanCtrl.getPropObjBy(self.giftInfo[gc.t_talisman_id], self.gift[1], curLv + 1);
                self.label_cannotLvUp.visible = false;
                self.grp_lvUp.visible = false;
                self.label_lvUpNoLv.visible = true;
                self.label_lvUpNoLv.text = t_talismanLvlNext[gc.t_talismanLvl_userLv];
                self.grp_next.visible = true;
                self.label_nextLv.text = curLv + 1;
                self.label_nextProp.text = self.getPropStr(nextPorpObj);
            }
            else {
                var nextPorpObj = gd.heroTalismanCtrl.getPropObjBy(self.giftInfo[gc.t_talisman_id], self.gift[1], curLv + 1);
                self.label_cannotLvUp.visible = false;
                self.label_lvUpNoLv.visible = false;
                self.grp_lvUp.visible = true;
                self.grp_next.visible = true;
                self.label_nextLv.text = curLv + 1;
                self.label_nextProp.text = self.getPropStr(nextPorpObj);
                var needItems = t_talismanLvl[gc.t_talismanLvl_needItems];
                self.ico_item.source = resHelper.getItemIconPath(needItems[0][0]);
                self.label_itemName.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, needItems[0][0])[gc.t_item_name];
                self.label_itemNum.text = gd.userCtrl.getItemNum(needItems[0][0]) + "/" + needItems[0][1];
                if (needItems.length > 1) {
                    self.ico_item1.visible = true;
                    self.grp_item1.visible = true;
                    self.ico_item1.source = resHelper.getItemIconPath(needItems[1][0]);
                    self.label_itemName1.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, needItems[1][0])[gc.t_item_name];
                    self.label_itemNum1.text = gd.userCtrl.getItemNum(needItems[1][0]) + "/" + needItems[1][1];
                }
                else {
                    self.ico_item1.visible = false;
                    self.grp_item1.visible = false;
                }
            }
            if (parseInt(self.giftInfo[gc.t_talisman_effectId]) > 0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }
            else {
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
        };
        p.getPropStr = function (propObj) {
            var str = "";
            for (var i = 33; i <= 40; ++i) {
                var s = mo.STR.format("%s +%s", gc.c_prop.heroProp[i], propObj[i] || 0);
                s += "[/br]";
                str += s;
            }
            return str;
        };
        p._tap_btn_lvUp = function () {
            var self = this;
            var curLv = self.gift[0];
            var t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, self.giftInfo[gc.t_talisman_id] + curLv);
            var needItems = t_talismanLvl[gc.t_talismanLvl_needItems];
            var notEnoughId = 0;
            var needCount = 0;
            if (gd.userCtrl.getItemNum(needItems[0][0]) >= needItems[0][1]) {
                if (needItems.length > 1) {
                    if (gd.userCtrl.getItemNum(needItems[1][0]) < needItems[1][1]) {
                        notEnoughId = needItems[1][0];
                        needCount = needItems[1][1] - gd.userCtrl.getItemNum(needItems[1][0]);
                    }
                }
            }
            else {
                notEnoughId = needItems[0][0];
                needCount = needItems[0][1] - gd.userCtrl.getItemNum(needItems[0][0]);
            }
            if (notEnoughId) {
                var itemId = notEnoughId;
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({ itemId: itemId, count: needCount }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
            else {
                gd.heroTalismanCtrl.upTrumpLvl(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function (data) {
                    self.data.gift = data;
                    self.dataChanged();
                }, self);
            }
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 221 }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_buyLingYun = function () {
            g_gift.GiftBuyLingYun.create().show();
        };
        return GiftLvUp;
    })(mo.gui.Dlg);
    g_gift.GiftLvUp = GiftLvUp;
    egret.registerClass(GiftLvUp,"g_gift.GiftLvUp");
})(g_gift || (g_gift = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_gift;
(function (g_gift) {
    /**
     *
     * @author
     *
     */
    var GiftMerge = (function (_super) {
        __extends(GiftMerge, _super);
        function GiftMerge() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftMerge,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_skill = g_gift.GiftSkillCell;
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            self.giftInfo = self.get('giftInfo');
            var mergeInfos = mo.getJSONWithFileName(gc.cfg_t_talismanCom);
            var mergeInfo = mergeInfos[self.giftInfo[gc.t_talisman_id]];
            var item0 = mergeInfo[gc.t_talismanCom_reqItems1];
            var item1 = mergeInfo[gc.t_talismanCom_reqItems2];
            self.ico_gift0.setData({ itemId: item0 });
            self.ico_gift0.label_giftTitle.visible = false;
            self.ico_gift1.setData({ itemId: item1 });
            self.ico_gift1.label_giftTitle.visible = false;
            var t_gift = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, item0);
            self.label_name0.text = [mergeInfo[gc.t_talismanCom_needStar1], t_gift[gc.t_talisman_name]];
            self.label_lv0.text = mergeInfo[gc.t_talismanCom_needLvl1];
            var t_gift = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, item1);
            self.label_name1.text = [mergeInfo[gc.t_talismanCom_needStar2], t_gift[gc.t_talisman_name]];
            self.label_lv1.text = mergeInfo[gc.t_talismanCom_needLvl2];
            var gift0 = gd.heroTalismanCtrl.getGiftById(item0);
            if (gift0) {
                //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                if (gift0[0] < mergeInfo[gc.t_talismanCom_needLvl1]) {
                    self.label_no0.text = "(等级未达标)";
                }
                else if (gift0[2] < mergeInfo[gc.t_talismanCom_needStar1]) {
                    self.label_no0.text = "(星级未达标)";
                }
                else {
                    self.label_no0.text = "";
                }
            }
            else {
                self.label_no0.text = "(未激活)";
            }
            var gift1 = gd.heroTalismanCtrl.getGiftById(item1);
            if (gift1) {
                //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                if (gift1[0] < mergeInfo[gc.t_talismanCom_needLvl2]) {
                    self.label_no1.text = "(等级未达标)";
                }
                else if (gift1[2] < mergeInfo[gc.t_talismanCom_needStar2]) {
                    self.label_no1.text = "(星级未达标)";
                }
                else {
                    self.label_no1.text = "";
                }
            }
            else {
                self.label_no1.text = "(未激活)";
            }
            if (parseInt(self.giftInfo[gc.t_talisman_effectId]) > 0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }
            else {
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
        };
        p._data_list_skill = function () {
            var self = this;
            return gd.heroTalismanCtrl.getSkillList(self.giftInfo[gc.t_talisman_id]);
        };
        p._tap_btn_merge = function () {
            var self = this;
            gd.heroTalismanCtrl.compoundTrump(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function (data) {
                self.dataChanged();
            }, self);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 224 }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return GiftMerge;
    })(mo.gui.Dlg);
    g_gift.GiftMerge = GiftMerge;
    egret.registerClass(GiftMerge,"g_gift.GiftMerge");
})(g_gift || (g_gift = {}));

/**
 * Created by Administrator on 2016/5/17.
 */
var g_gift;
(function (g_gift) {
    var GiftMergeCell = (function (_super) {
        __extends(GiftMergeCell, _super);
        function GiftMergeCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftMergeCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            self.ico_gift.setData({ itemId: giftInfo[gc.t_talisman_id] });
            self.label_name.text = giftInfo[gc.t_talisman_name];
            self.label_desc.text = giftInfo[gc.t_talisman_desc];
        };
        p._tap_btn_merge = function () {
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            g_gift.GiftMerge.create().setData({ hec: hec, giftInfo: giftInfo }).show();
        };
        return GiftMergeCell;
    })(mo.gui.ItemRenderer);
    g_gift.GiftMergeCell = GiftMergeCell;
    egret.registerClass(GiftMergeCell,"g_gift.GiftMergeCell");
})(g_gift || (g_gift = {}));

/**
 * Created by SmallAiTT on 2015/7/15.
 */
var g_gift;
(function (g_gift) {
    var GiftScene = (function (_super) {
        __extends(GiftScene, _super);
        function GiftScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            g_base.modIdx = 3;
            var layer = g_base.BaseTopRole.create().setData({ redType: 2 }).show();
            layer.hideCombat();
            g_gift.roleChgEmitter = layer.emitter;
            var fl = g_gift.GiftLayer.create();
            fl.show();
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            g_gift.roleChgEmitter = null;
        };
        return GiftScene;
    })(mo.gui.UIScene);
    g_gift.GiftScene = GiftScene;
    egret.registerClass(GiftScene,"g_gift.GiftScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GiftScene;
        moduleCfgItem.sysId = gc.id_c_open.openTrump; // 系统id
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
    });
})(g_gift || (g_gift = {}));

/**
 * Created by Administrator on 2016/5/17.
 */
var g_gift;
(function (g_gift) {
    var GiftSkillCell = (function (_super) {
        __extends(GiftSkillCell, _super);
        function GiftSkillCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftSkillCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var skillObj = self.data;
            var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, skillObj.skillId);
            self.ico_skill.source = resHelper.getGiftSkillIconPath(skillObj.skillId);
            self.label_name.text = skillInfo[gc.t_talismanSkill_name];
            self.label_desc.text = skillInfo[gc.t_talismanSkill_desc];
            if (!skillObj.jiHuo) {
                self.label_jiHuo.visible = true;
                self.label_jiHuo.text = skillObj.star + 1;
                self.label_name.textColor = 0xff0000;
            }
            else {
                self.label_jiHuo.visible = false;
                self.label_name.textColor = 0x00ff00;
            }
        };
        return GiftSkillCell;
    })(mo.gui.ItemRenderer);
    g_gift.GiftSkillCell = GiftSkillCell;
    egret.registerClass(GiftSkillCell,"g_gift.GiftSkillCell");
})(g_gift || (g_gift = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_gift;
(function (g_gift) {
    /**
     *
     * @author
     *
     */
    var GiftUpStar = (function (_super) {
        __extends(GiftUpStar, _super);
        function GiftUpStar() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftUpStar,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_skill = g_gift.GiftSkillCell;
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            self.gift = self.get('gift'); //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.get('giftInfo');
            var curStar = self.gift[2];
            var t_talismanStar = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, self.giftInfo[gc.t_talisman_id] + curStar);
            var t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, self.giftInfo[gc.t_talisman_id] + self.gift[0]);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            var maxZiZhi = gd.heroTalismanCtrl.getMaxZiZhi(self.giftInfo[gc.t_talisman_id], self.gift[3]);
            self.showStar(self.gift[2]);
            self.label_ziZhi.text = maxZiZhi;
            if (curStar >= gameInfo[2]) {
                self.label_max.visible = true;
                self.label_cannotLvUp.visible = false;
                self.grp_upStar.visible = false;
            }
            else if (curStar >= t_talismanLvl[gc.t_talismanLvl_starLimit]) {
                self.label_max.visible = false;
                self.label_cannotLvUp.visible = true;
                self.grp_upStar.visible = false;
                for (var i = self.gift[0]; i <= gameInfo[3]; ++i) {
                    t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, self.giftInfo[gc.t_talisman_id] + i);
                    if (t_talismanLvl[gc.t_talismanLvl_starLimit] > curStar) {
                        break;
                    }
                }
                self.label_cannotLvUp.text = [i, t_talismanLvl[gc.t_talismanLvl_starLimit]];
            }
            else {
                self.label_max.visible = false;
                self.label_cannotLvUp.visible = false;
                self.grp_upStar.visible = true;
                var needItem = t_talismanStar[gc.t_talismanStar_needItems][0];
                self.ico_item.source = resHelper.getItemIconPath(needItem[0]);
                self.label_itemName.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, needItem[0])[gc.t_item_name];
                self.label_itemNum.text = gd.userCtrl.getItemNum(needItem[0]) + "/" + needItem[1];
            }
            self.refreshList("list_skill");
            if (parseInt(self.giftInfo[gc.t_talisman_effectId]) > 0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }
            else {
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
        };
        p.showStar = function (star) {
            var self = this;
            for (var i = 0; i < star; ++i) {
                self.grp_star.getElementAt(i).source = "ico_star";
            }
            for (var i = star; i < self.grp_star.numElements; ++i) {
                if (i > 0) {
                    var t_talismanStar = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, self.giftInfo[gc.t_talisman_id] + i);
                    if (t_talismanStar[gc.t_talismanStar_skillId]) {
                        self.grp_star.getElementAt(i).source = "ico_xinjidenji";
                    }
                    else {
                        self.grp_star.getElementAt(i).source = "ico_star_gray";
                    }
                }
                else {
                    self.grp_star.getElementAt(i).source = "ico_star_gray";
                }
            }
        };
        p._data_list_skill = function () {
            var self = this;
            return gd.heroTalismanCtrl.getSkillList(self.giftInfo[gc.t_talisman_id], self.gift[4]);
        };
        p._tap_btn_upStar = function () {
            var self = this;
            var curStar = self.gift[2];
            var t_talismanStar = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, self.giftInfo[gc.t_talisman_id] + curStar);
            var needItem = t_talismanStar[gc.t_talismanStar_needItems][0];
            var notEnoughId = 0;
            var needCount = 0;
            if (gd.userCtrl.getItemNum(needItem[0]) < needItem[1]) {
                notEnoughId = needItem[0];
                needCount = needItem[1] - gd.userCtrl.getItemNum(needItem[0]);
            }
            if (notEnoughId) {
                var itemId = notEnoughId;
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({ itemId: itemId, count: needCount }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
            else {
                gd.heroTalismanCtrl.upTrumpStar(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function (datas) {
                    self.data.gift = datas[0];
                    self.dataChanged();
                    g_gift.GiftUpStarResult.create().setData({ hec: self.hec, gift: self.gift, giftInfo: self.giftInfo, isGetSkill: datas[1], isHighStar: datas[2] }).show();
                }, self);
            }
        };
        p._tap_btn_reset = function () {
            var self = this;
            mo.showMsg(gc.id_c_msgCode.reRecast, function () {
                gd.heroTalismanCtrl.recastTrump(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function (data) {
                    self.data.gift = data;
                    self.dataChanged();
                }, self);
            });
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 223 }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_buyLingYun = function () {
            g_gift.GiftBuyLingYun.create().show();
        };
        return GiftUpStar;
    })(mo.gui.Dlg);
    g_gift.GiftUpStar = GiftUpStar;
    egret.registerClass(GiftUpStar,"g_gift.GiftUpStar");
})(g_gift || (g_gift = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_gift;
(function (g_gift) {
    /**
     *
     * @author
     *
     */
    var GiftUpStarResult = (function (_super) {
        __extends(GiftUpStarResult, _super);
        function GiftUpStarResult() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftUpStarResult,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._skillEfxPlayer = uiHelper.EfxPlayer.create(self.effect_skill);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var hec = self.data.hec;
            var gift = self.data.gift; //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            var giftInfo = self.data.giftInfo;
            var isGetSkill = self.data.isGetSkill;
            var isHighStar = self.data.isHighStar;
            var giftId = giftInfo[gc.t_talisman_id];
            var star = gift[2];
            var starInfos = mo.getJSONWithFileName(gc.cfg_t_talismanStar);
            var starInfo = starInfos[giftId + star - 1];
            var skillId = starInfo[gc.t_talismanStar_skillId];
            if (skillId) {
                var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, skillId);
                if (isGetSkill) {
                    self._skillEfxPlayer.play();
                    self.grp_skill.visible = true;
                    self.label_noAct.visible = false;
                    self.ico_skill.source = resHelper.getGiftSkillIconPath(skillId);
                    self.label_name.text = skillInfo[gc.t_talismanSkill_name];
                    self.label_desc.text = skillInfo[gc.t_talismanSkill_desc];
                }
                else {
                    self.grp_skill.visible = false;
                    self.label_noAct.visible = true;
                }
                self.label_noSkill.visible = false;
            }
            else {
                self.grp_skill.visible = false;
                self.label_noAct.visible = false;
                self.label_noSkill.visible = true;
            }
            self.label_star.text = [star - 1, star];
            if (!isHighStar) {
                self.label_ziZhi.text = [gd.heroTalismanCtrl.getMaxZiZhi(giftId, gift[3]), gd.heroTalismanCtrl.getMaxZiZhi(giftId, gift[3])];
            }
            else {
                self.label_ziZhi.text = [gd.heroTalismanCtrl.getMaxZiZhi(giftId, star - 1), "[ubb color=green]" + gd.heroTalismanCtrl.getMaxZiZhi(giftId, gift[3]) + "[/ubb]"];
            }
        };
        return GiftUpStarResult;
    })(mo.gui.Dlg);
    g_gift.GiftUpStarResult = GiftUpStarResult;
    egret.registerClass(GiftUpStarResult,"g_gift.GiftUpStarResult");
})(g_gift || (g_gift = {}));

/**
 * Created by Administrator on 2016/6/24.
 */
var g_gift;
(function (g_gift) {
    var GiftBuyLingYun = (function (_super) {
        __extends(GiftBuyLingYun, _super);
        function GiftBuyLingYun() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftBuyLingYun,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.img_item.source = resHelper.getItemIconPath(56);
            self.dataChanged();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.buyLingyunCfg);
            self.label_cost.text = gd.userCtrl.getBuyLingyunCos();
            self.label_num.text = gameInfo[0];
            var vip = gd.userCtrl.getVip();
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, vip);
            self.label_vip.text = gd.userCtrl.getBuyLingyunCount();
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
        };
        p._tap_btn_buy = function () {
            var self = this;
            gd.userCtrl.buyLingyun(function () {
                self.dataChanged();
            }, self);
        };
        return GiftBuyLingYun;
    })(mo.gui.Dlg);
    g_gift.GiftBuyLingYun = GiftBuyLingYun;
    egret.registerClass(GiftBuyLingYun,"g_gift.GiftBuyLingYun");
})(g_gift || (g_gift = {}));

var g_gift;
(function (g_gift) {
    var GiftXiLian = (function (_super) {
        __extends(GiftXiLian, _super);
        function GiftXiLian() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GiftXiLian,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.diamond.toString(), self.diamondChange);
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._successEfxPlayer = uiHelper.EfxPlayer.create(self.effect_success);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            self.gift = self.get('gift'); //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.get('giftInfo');
            var curZiZhi = self.gift[1];
            var maxZiZhi = gd.heroTalismanCtrl.getMaxZiZhi(self.giftInfo[gc.t_talisman_id], self.gift[3]);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            self.showStar(self.gift[2]);
            self.label_ziZhi.text = [curZiZhi, maxZiZhi];
            self.bar_process.maximum = maxZiZhi;
            self.bar_process.value = curZiZhi;
            self.label_result.visible = false;
            self.label_resultSafe.visible = false;
            if (curZiZhi >= maxZiZhi) {
                self.grp_xiLian.visible = false;
                self.label_max.visible = true;
            }
            else {
                self.grp_xiLian.visible = true;
                self.label_max.visible = false;
                self.ico_item.source = resHelper.getItemIconPath(gameInfo[0]);
                self.label_itemName.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0])[gc.t_item_name];
                self.label_itemNum.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + gameInfo[1];
            }
            self.label_cost.text = gameInfo[4];
            if (parseInt(self.giftInfo[gc.t_talisman_effectId]) > 0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }
            else {
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
        };
        p.showStar = function (star) {
            var self = this;
            for (var i = 0; i < star; ++i) {
                self.grp_star.getElementAt(i).source = "ico_star";
            }
            for (var i = star; i < self.grp_star.numElements; ++i) {
                if (i > 0) {
                    var t_talismanStar = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, self.giftInfo[gc.t_talisman_id] + i);
                    if (t_talismanStar[gc.t_talismanStar_skillId]) {
                        self.grp_star.getElementAt(i).source = "ico_xinjidenji";
                    }
                    else {
                        self.grp_star.getElementAt(i).source = "ico_star_gray";
                    }
                }
                else {
                    self.grp_star.getElementAt(i).source = "ico_star_gray";
                }
            }
        };
        p._tap_btn_xiLian = function () {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            var notEnoughId = 0;
            var needCount = 0;
            if (gd.userCtrl.getItemNum(gameInfo[0]) < gameInfo[1]) {
                notEnoughId = gameInfo[0];
                needCount = gameInfo[1] - gd.userCtrl.getItemNum(gameInfo[0]);
            }
            if (notEnoughId) {
                var itemId = notEnoughId;
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({ itemId: itemId, count: needCount }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
            else {
                gd.heroTalismanCtrl.baptizeTrump(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], self.btn_safe.selected, function (data, addZiZhi) {
                    self.data.gift = data;
                    self.dataChanged();
                    var curZiZhi = self.gift[1];
                    var oldZiZhi = curZiZhi - addZiZhi;
                    var values = [oldZiZhi];
                    if (addZiZhi > 0) {
                        values.unshift("[ubb color=green]洗炼成功：[/ubb]");
                        values.push("[ubb color=green]↑" + curZiZhi + "[/ubb]");
                        values.push("[ubb color=green]+" + (addZiZhi) + "[/ubb]");
                        self._successEfxPlayer.play();
                        self.label_result.text = values;
                        self.label_result.visible = true;
                        self.label_resultSafe.visible = false;
                    }
                    else if (addZiZhi < 0) {
                        values.unshift("[ubb color=red]洗炼失败：[/ubb]");
                        values.push("[ubb color=red]↓" + curZiZhi + "[/ubb]");
                        values.push("[ubb color=red]" + (addZiZhi) + "[/ubb]");
                        self.label_result.text = values;
                        self.label_result.visible = true;
                        self.label_resultSafe.visible = false;
                    }
                    else {
                        self.label_result.visible = false;
                        self.label_resultSafe.visible = true;
                    }
                    clearTimeout(self._hideTimerId);
                    self._hideTimerId = setTimeout(function () {
                        clearTimeout(self._hideTimerId);
                        self.label_result.visible = false;
                        self.label_resultSafe.visible = false;
                    }, 2000);
                }, self);
            }
        };
        p._tab_btn_safe = function () {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            if (gd.userCtrl.getDiamond() < gameInfo[4]) {
                self.btn_safe.selected = false;
                mo.showMsg(gc.id_c_msgCode.noDiamond);
            }
        };
        p.diamondChange = function () {
            var self = this;
            if (self.btn_safe.selected) {
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
                if (gd.userCtrl.getDiamond() < gameInfo[4]) {
                    self.btn_safe.selected = false;
                    mo.showMsg(gc.id_c_msgCode.noDiamond);
                }
            }
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 222 }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_buyLingYun = function () {
            g_gift.GiftBuyLingYun.create().show();
        };
        return GiftXiLian;
    })(mo.gui.Dlg);
    g_gift.GiftXiLian = GiftXiLian;
    egret.registerClass(GiftXiLian,"g_gift.GiftXiLian");
})(g_gift || (g_gift = {}));

