/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_role;
(function (g_role) {
    g_role.SUBMID_SKILL = 1;
    g_role.SUBMID_WING = 3;
    /**
     *
     * @author
     *
     */
    var RoleLayer = (function (_super) {
        __extends(RoleLayer, _super);
        function RoleLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleLayer,p=c.prototype;
        p._heroChanged = function (hec, index) {
            var self = this;
            self.setData({ hec: hec });
            if (index < 3) {
                var unlocked = self._isWingUnlocked();
                self.btn_no_wing.visible = !unlocked;
                self.btn_wing_light.visible = unlocked;
            }
            else {
                self.btn_no_wing.visible = false;
                self.btn_wing_light.visible = false;
            }
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            g_role.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            // 注册事件监听
            self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_CHANGED, self.dataChanged);
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_WEAR_PAR_RING, self.dataChanged);
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BREAK_PAR_RING, self.dataChanged);
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BREAK_MERGED, self.dataChanged);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self.checkRedPoint);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.rebirthLvl.toString(), self._refreshRebirthGrp);
            g_role.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
            self.ico_medalItem.visible = false;
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var key in heroEquipIndies) {
                var item = self['eq_' + key];
                if (item)
                    item.onClick(self._onEquipItemClick, self, item);
            }
            var unlocked = self._isWingUnlocked();
            self.btn_no_wing.visible = !unlocked;
            self.btn_wing_light.visible = unlocked;
            self.hec = gd.heroCtrl.getMainHeroCtrl();
            self.setData({ hec: self.hec });
            var subModuleId = self.moduleParam.subModuleId;
            switch (subModuleId) {
                case g_role.SUBMID_SKILL:
                    self._tap_btn_skill();
                    break;
                case g_role.SUBMID_WING:
                    self._tap_btn_wing_light();
                    break;
            }
            self._refreshRebirthGrp();
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
        };
        p.checkRedPoint = function () {
            var self = this;
            var roleIndex = gd.heroCtrl.getHeroIndex(self.hec);
            var skillShowRed = false;
            var matrixShowRed = false;
            var wingShowRed = false;
            if (roleIndex == 0) {
                skillShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role1_skill);
            }
            else if (roleIndex == 1) {
                skillShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role2_skill);
            }
            else if (roleIndex == 2) {
                skillShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role3_skill);
            }
            if (roleIndex == 0) {
                matrixShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role1_realm);
            }
            else if (roleIndex == 1) {
                matrixShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role2_realm);
            }
            else if (roleIndex == 2) {
                matrixShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role3_realm);
            }
            if (roleIndex == 0) {
                wingShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role1_wing);
            }
            else if (roleIndex == 1) {
                wingShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role2_wing);
            }
            else if (roleIndex == 2) {
                wingShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role3_wing);
            }
            self.img_redSkill.visible = skillShowRed;
            self.img_redMatrix.visible = matrixShowRed;
            self.img_redWing.visible = wingShowRed;
        };
        p._isWingUnlocked = function () {
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
            return gd.userCtrl.getLvl() >= needLvl;
        };
        p._refreshRebirthGrp = function () {
            var self = this;
            var rebirthLvl = gd.reBirthCtrl.getRebirthLvl();
            if (rebirthLvl == 0) {
                self.grp_rebirth.visible = false;
            }
            else {
                self.grp_rebirth.visible = true;
                if (rebirthLvl >= 1 && rebirthLvl <= 10) {
                    self.img_rebirthNum.source = "txt_hz_" + rebirthLvl;
                }
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            if (!self.hec)
                return;
            self.updateEquipItems();
            self.checkRedPoint();
            //self.effect_role.startLoadByKey(22+(self.hec.job-1)*2+(2-self.hec.sex)-1);
            self.ico_avatar.setData({
                clothesID: self.hec.getClothDisplayID(),
                weaponID: self.hec.getWeaponDisplayID(),
                wingID: self.hec.getWingDisplayID(),
                sex: self.hec.sex,
                isKing: self.hec.getIsKing()
            });
        };
        p.updateEquipItems = function () {
            var self = this;
            var hec = self.hec;
            var equipData = hec.equipData;
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var part in heroEquipIndies) {
                var equipId = equipData[part];
                var item = self['eq_' + part];
                var data;
                if (item) {
                    data = { hec: hec, part: parseInt(part), equipId: equipId };
                    item.setData(data);
                }
            }
        };
        p._tap_btn_no_wing = function () {
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
            if (gd.userCtrl.getLvl() < needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, needLvl);
            }
        };
        p._tap_btn_skill = function () {
            var self = this;
            g_role.RoleSkill.create().setData({ hec: self.hec }).show();
        };
        p._tap_btn_detail = function () {
            var self = this;
            var hec = self.hec;
            g_role.RoleDetail.create().setData({ hec: hec }).show();
        };
        p._tap_btn_matrix = function () {
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.ream][gc.c_open_lvlRequired];
            if (gd.userCtrl.getLvl() < needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, needLvl);
            }
            g_role.RoleMatrix.create().setData({ hec: self.hec }).show();
        };
        p._tap_btn_wing_light = function () {
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
            if (gd.userCtrl.getLvl() < needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, needLvl);
            }
            var hec = this.hec;
            g_role.baseTopRole.hide4thRole(true);
            g_role.RoleWing.create().setData({ hec: hec }).show().onClose(function () {
                g_role.baseTopRole.hide4thRole(false);
            });
        };
        p._tap_btn_equip = function () {
            var self = this;
            var hec = self.hec;
            g_role.EquipDetail.create().setData({ hec: hec }).show();
        };
        p._onEquipItemClick = function (item) {
            var self = this;
            if (gd.equipCtrl.isBreakRing(item.part)) {
                if (item.equipId == null) {
                    g_role.RoleMatrixInfo.create().setData({ hec: item.hec, isMatrix: false, part: item.part })
                        .show().onClose(function () {
                        //g_role.baseTopRole.hide4thRole(false);
                    });
                }
                else {
                    g_role.BreakDetail.create().setData({ itemId: item.equipId, hero: item.hec })
                        .show().onClose(function () {
                        //g_role.baseTopRole.hide4thRole(false);
                    });
                }
            }
            else {
                if (item.canAdd) {
                    g_role.EquipChoose.create().setData({ hec: item.hec, part: item.part }).show();
                }
                if (!item.isEmpty) {
                    g_role.EquipDetail.create().setData({ hec: item.hec, part: item.part }).show();
                }
                if (item.isEmpty && !item.canAdd) {
                    mo.showMsg("无可穿戴装备");
                }
            }
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        p._tap_btn_buzhen = function () {
            var self = this;
            var openLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.fightList);
            var openVipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.buzhen);
            if (gd.userCtrl.getLvl() < openLvInfo[gc.c_open_lvlRequired] && gd.userCtrl.getVip() < openVipInfo[gc.c_open_lvlRequired]) {
                mo.showMsg(gc.id_c_msgCode.functionOpen, openLvInfo[gc.c_open_lvlRequired], openVipInfo[gc.c_open_lvlRequired]);
                return;
            }
            if (gd.heroCtrl.getList().length > 1) {
                g_role.RoleBuzhen.create().show().onClose(function () {
                    g_role.baseTopRole.dataChanged();
                });
            }
            else {
                mo.showMsg(gc.id_c_msgCode.noRole);
            }
        };
        return RoleLayer;
    })(mo.gui.Layer);
    g_role.RoleLayer = RoleLayer;
    egret.registerClass(RoleLayer,"g_role.RoleLayer");
})(g_role || (g_role = {}));

/**
 * Created by lihex on 9/19/15.
 */
var g_role;
(function (g_role) {
    /**
     *
     * @author
     *
     */
    var RoleDetail = (function (_super) {
        __extends(RoleDetail, _super);
        function RoleDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleDetail,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            g_role.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._heroChanged = function (hec) {
            var self = this;
            self.setData({ hec: hec });
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            g_role.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var hec = self.data.hec;
            var tempStr = "ID: %s[/br]" +
                "生    命:    %s[/br]" +
                "攻    击:    %s[/br]" +
                "物    防:    %s[/br]" +
                "法    防:    %s[/br]" +
                "命    中:    %s[/br]" +
                "闪    避:    %s[/br]" +
                "暴    击:    %s[/br]" +
                "抗    暴:    %s[/br]" +
                "伤害加深:    %s%[/br]" +
                "伤害减免:    %s%[/br]" +
                "麻    痹:    %s%[/br]" +
                "抗    麻:    %s%[/br]";
            var str = mo.STR.format(tempStr, hec.id, hec.maxHpFight, hec.attackFight, hec.defenceFight, hec.magicDefenceFight, hec.hitFight, hec.dodgeFight, hec.criticalFight, hec.disCriticalFight, Math.round(hec.damageIncreaseFight * 100), Math.round(hec.damageDecreaseFight * 100), Math.round(hec.benumbProFight * 100), Math.round(hec.disBenumbProFight * 100));
            self.label_prop.text = str;
        };
        return RoleDetail;
    })(mo.gui.Layer);
    g_role.RoleDetail = RoleDetail;
    egret.registerClass(RoleDetail,"g_role.RoleDetail");
})(g_role || (g_role = {}));

/**
 * Created by lihex on 9/19/15.
 */
var g_role;
(function (g_role) {
    /**
     *
     * @author
     *
     */
    var RoleMatrix = (function (_super) {
        __extends(RoleMatrix, _super);
        function RoleMatrix() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleMatrix,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            g_role.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._onHeroChanged, self);
            self.registerClassByKey(gd.HeroCtrl, gd.HeroCtrl.ON_WEAR_RUNE, self.reset);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.efx_btn.visible = false;
            //self.touchChildren = true;
            self.touchEnabled = true;
            self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onIconItemTap, self);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.reset();
        };
        p.reset = function () {
            var self = this;
            var hero = self.data.hec;
            var reamList = hero.getHeroRealmList();
            var reamInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_realm, reamList[0]);
            var reamEquipIds = reamList[1];
            var canEquipIndexs = reamList[2];
            var canUp = reamList[3];
            var curReamLayerProps = [[33, 0], [34, 0], [35, 0], [36, 0], [37, 0], [38, 0], [39, 0], [40, 0]];
            var curEquipProps = [];
            var isMax = mo.getJSONWithFileName(gc.cfg_c_realm)[reamList[0] + 1] == null;
            var rProps = reamInfo[gc.c_realm_propertys];
            for (var i = 0; i < curReamLayerProps.length; ++i) {
                for (var k = 0; k < rProps.length; ++k) {
                    if (curReamLayerProps[i][0] == rProps[k][0]) {
                        curReamLayerProps[i][1] += rProps[k][1];
                    }
                }
            }
            self.label_name.text = reamInfo[gc.c_realm_name];
            for (var i = 0; i < 6; ++i) {
                var icoItem = mo.gui.helper.getChild(self.grp_item, "ico_item" + i);
                if (!reamEquipIds[i] || reamEquipIds[i] == 0) {
                    icoItem.source = null;
                    continue;
                }
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemRealm, reamEquipIds[i]);
                var iProps = itemInfo[gc.t_itemRealm_propertys];
                for (var ik = 0; ik < iProps.length; ++ik) {
                    curEquipProps.push(iProps[ik]);
                }
                icoItem.source = resHelper.getItemIconPath(itemInfo[gc.t_item_id]);
            }
            for (var i = 0; i < 6; ++i) {
                var icoPlus = mo.gui.helper.getChild(self.grp_item, "ico_plus" + i);
                icoPlus.visible = false;
            }
            for (var i = 0; i < canEquipIndexs.length; ++i) {
                var icoPlus = mo.gui.helper.getChild(self.grp_item, "ico_plus" + canEquipIndexs[i]);
                icoPlus.visible = true && hero.isSelf;
            }
            uiHelper.playUIEffect(self.efx_btn, canUp && hero.isSelf);
            self.btn_up.visible = hero.isSelf && canUp;
            self.btn_equipAll.visible = hero.isSelf && !canUp;
            var str = "";
            for (var i = 0; i < curReamLayerProps.length; ++i) {
                var s = mo.STR.format("%s %s", gc.c_prop.heroProp[curReamLayerProps[i][0]], curReamLayerProps[i][1]);
                var addValue = 0;
                for (var k = 0; k < curEquipProps.length; ++k) {
                    if (curEquipProps[k][0] == curReamLayerProps[i][0]) {
                        addValue += curEquipProps[k][1];
                    }
                }
                if (addValue > 0) {
                    s += mo.STR.format(" [ubb color=green]+%s[/ubb]", addValue);
                }
                s += "[/br]";
                str += s;
            }
            self.label_desc.text = str;
            if (!isMax) {
                self.grp_item.visible = true;
                self.label_max.visible = false;
            }
            else {
                self.grp_item.visible = false;
                self.label_max.visible = true;
                self.btn_equipAll.visible = false;
            }
        };
        p._tap_btn_equipAll = function () {
            var self = this;
            var id = self.data.hec.get(gc.dsConsts.HeroEntity.id);
            gd.heroCtrl.wearAllRune(id, function () { }, self);
        };
        p._tap_btn_up = function () {
            var self = this;
            var id = self.data.hec.get(gc.dsConsts.HeroEntity.id);
            gd.heroCtrl.upRealm(id, function () {
                self.effect_round.visible = true;
                self.effect_round.startLoadByKey(16);
                self.effect_round.play(1);
                self.effect_round.addEventListener(egret.Event.COMPLETE, function (event) {
                    self.effect_round.visible = false;
                    self.effect_round.stop();
                }, self);
                egret.setTimeout(function () {
                    self.effect_word.visible = true;
                    self.effect_word.startLoadByKey(14);
                    self.effect_word.play(1);
                    self.effect_word.addEventListener(egret.Event.COMPLETE, function (event) {
                        self.effect_word.visible = false;
                        self.effect_word.stop();
                        self.reset();
                    }, self);
                    for (var i = 0; i < 6; ++i) {
                        var icoItem = mo.gui.helper.getChild(self.grp_item, "ico_item" + i);
                        var effect = new g_comp.UIEffect();
                        effect.x = icoItem.x + icoItem.width / 2;
                        effect.y = icoItem.y + icoItem.height / 2;
                        self.grp_item.addElement(effect);
                        effect.startLoadByKey(15);
                        effect.play(1);
                        effect.addEventListener(egret.Event.COMPLETE, function (event) {
                            self.grp_item.removeElement(event.currentTarget);
                        }, self);
                    }
                }, this, 1000);
            }, self);
        };
        p.onIconItemTap = function (e) {
            var self = this;
            var index = -1;
            for (var i = 0; i < 6; ++i) {
                var icoItem = mo.gui.helper.getChild(self.grp_item, "ico_item" + i);
                var point = icoItem.globalToLocal(e.stageX, e.stageY);
                var rect = new egret.Rectangle(0, 0, icoItem.width, icoItem.height);
                if (rect.containsPoint(point)) {
                    index = i;
                    break;
                }
            }
            if (index == -1)
                return;
            var hero = self.data.hec;
            if (!hero.isSelf && hero.getHeroRealmList()[1][index] == null)
                return;
            g_role.RoleMatrixInfo.create().setData({ hec: hero, isMatrix: true, part: index, delegate: self }).show();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 7 }).show();
        };
        p._onHeroChanged = function (hec) {
            var self = this;
            self.setData({ hec: hec });
            self.reset();
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            g_role.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._onHeroChanged, self);
        };
        return RoleMatrix;
    })(mo.gui.Layer);
    g_role.RoleMatrix = RoleMatrix;
    egret.registerClass(RoleMatrix,"g_role.RoleMatrix");
})(g_role || (g_role = {}));

/**
 * Created by lihex on 9/19/15.
 */
var g_role;
(function (g_role) {
    /**
     *
     * @author
     *
     */
    var RoleWing = (function (_super) {
        __extends(RoleWing, _super);
        function RoleWing() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleWing,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            g_role.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._heroChanged = function (hec) {
            var self = this;
            self.setData({ hec: hec });
            self._tap_btn_stopAuto();
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            g_role.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            this.efx_btn.visible = false;
            self._upStarEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit1);
            self._hitEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit2);
            self._evoEfxPlayer = uiHelper.EfxPlayer.createPlayGroup([self.efx_evo1, self.efx_evo2]);
            self.grp_stop.visible = false;
            self.checkAuto();
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            if (g_role.baseBottomBar)
                g_role.baseBottomBar.visible = false;
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            self._tap_btn_stopAuto();
            if (g_role.baseBottomBar)
                g_role.baseBottomBar.visible = true;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var hec = self.get('hec');
            var opt = hec.getWingOpt();
            self.img_wing.source = resHelper.getWingIconPath(opt.wingId);
            self.label_name.text = opt.wingName;
            self.label_lvl.text = opt.wingLvl + "";
            var isWingActivated = hec.isWingActived(); //是否激活
            var canEvo = false;
            if (hec.isSelf) {
                self.grp_train.visible = isWingActivated;
                self.btn_active.visible = !isWingActivated;
                self.btn_evolution.visible = isWingActivated;
                uiHelper.playUIEffect(self.efx_btn, !isWingActivated);
                if (isWingActivated) {
                    var starNum = opt.nowStarCount;
                    canEvo = starNum >= 10;
                    self.grp_train.visible = !canEvo;
                    self.btn_evolution.visible = canEvo;
                    uiHelper.playUIEffect(self.efx_btn, canEvo);
                    if (canEvo) {
                        self._tap_btn_stopAuto();
                    }
                }
                self.ico_str.visible = isWingActivated;
                self.label_cost_gold.text = opt.comTrain;
                self.label_cost_yuanbao.text = opt.advTrain;
                self.label_gold.text = gd.userCtrl.getGold().toString();
                self.label_yuanbao.text = gd.userCtrl.getDiamond().toString();
                self.label_feather.text = opt.featherCount;
                self.pb_exp.value = opt.nowExpPer;
                self.pb_exp.labelFunction = function (v, max) {
                    return mo.STR.format("%s/%s", opt.nowExp, opt.needExp);
                };
            }
            else {
                self.pb_exp.visible = false;
                //self.res_bar.visible = false;
                self.grp_res.visible = false;
                self.grp_train.visible = false;
                self.btn_active.visible = false;
                self.btn_evolution.visible = false;
                self.ico_str.visible = false;
            }
            var nowObj = opt.nowPro;
            var nextObj = opt.nextPro;
            //当前属性
            self.label_cAttack.text = nowObj[gc.c_prop.heroPropKey.attackTemp];
            self.label_cHp.text = nowObj[gc.c_prop.heroPropKey.maxHpTemp];
            self.label_cPDefense.text = nowObj[gc.c_prop.heroPropKey.defenceTemp];
            self.label_cMDefense.text = nowObj[gc.c_prop.heroPropKey.magicDefenceTemp];
            //下一星级属性
            self.grp_next.visible = isWingActivated && !canEvo;
            self.label_nAttack.text = nextObj[gc.c_prop.heroPropKey.attackTemp];
            self.label_nHp.text = nextObj[gc.c_prop.heroPropKey.maxHpTemp];
            self.label_nPDefense.text = nextObj[gc.c_prop.heroPropKey.defenceTemp];
            self.label_nMDefense.text = nextObj[gc.c_prop.heroPropKey.magicDefenceTemp];
            for (var i = 0, li = 10; i < li; i++) {
                var star_light = self.grp_star_light.getChildByName("star_" + i);
                star_light.visible = i < opt.nowStarCount;
            }
        };
        //培养一次
        p.fosOne = function (isNormal) {
            var self = this;
            var type;
            var hec = self.get('hec');
            var opt = hec.getWingOpt();
            if (isNormal) {
                if (opt.gold < opt.comTrain) {
                    gd.userCtrl.noGolds(function () { }, this);
                    self._tap_btn_stopAuto();
                    return;
                }
                type = gc.c_prop.wingFosTypeKey.comFoster;
            }
            else {
                if (opt.plumageCount <= 0 && opt.diamond < opt.advTrain) {
                    self._tap_btn_stopAuto();
                    return mo.showMsg(gc.id_c_msgCode.noDiamond);
                }
                type = gc.c_prop.wingFosTypeKey.advFoster;
            }
            var oldStarCount = opt.nowStarCount;
            hec.wingFos(opt, type, function (result) {
                self.dataChanged();
                var afterStarCount = hec.wingData[2];
                if (afterStarCount != oldStarCount)
                    self._upStarEfxPlayer.play();
                var isWingCrit = result[1];
                if (isWingCrit)
                    self._hitEfxPlayer.play();
            }, self);
        };
        //普通自动培养
        p._tap_btn_normalAuto = function () {
            var self = this;
            self._autoTimeId = setInterval(function () {
                self.fosOne(true);
            }, 1000);
            self.checkGrpStop(true);
        };
        p._tap_btn_highAuto = function () {
            var self = this;
            self._autoTimeId = setInterval(function () {
                self.fosOne(false);
            }, 1000);
            self.checkGrpStop(false);
        };
        p._tap_btn_stopAuto = function () {
            var self = this;
            clearInterval(self._autoTimeId);
            self.grp_stop.visible = false;
            self.grp_fos.visible = true;
        };
        p.checkGrpStop = function (isNormal) {
            var self = this;
            var hec = self.get('hec');
            var opt = hec.getWingOpt();
            self.grp_stop.visible = true;
            self.grp_fos.visible = false;
            self.grp_costDescAuto.visible = !isNormal;
            self.ico_costAuto.source = isNormal ? "ico_gold" : "ico_yuanbao";
            self.label_costAuto.text = isNormal ? opt.comTrain : opt.advTrain;
        };
        p._tap_btn_normal = function () {
            var self = this;
            self.fosOne(true);
        };
        p._tap_btn_high = function () {
            var self = this;
            self.fosOne(false);
        };
        p._tap_btn_checkAuto = function () {
            var self = this;
            self.checkAuto();
        };
        p.checkAuto = function () {
            var self = this;
            if (self.btn_checkAuto.selected) {
                self.btn_normalAuto.visible = true;
                self.btn_highAuto.visible = true;
                self.btn_normal.visible = false;
                self.btn_high.visible = false;
            }
            else {
                self.btn_normalAuto.visible = false;
                self.btn_highAuto.visible = false;
                self.btn_normal.visible = true;
                self.btn_high.visible = true;
            }
        };
        //进化
        p._tap_btn_evolution = function () {
            var self = this;
            var hec = self.get('hec');
            hec.upWing(function () {
                self.dataChanged();
                self._evoEfxPlayer.play();
            }, self);
        };
        //激活
        p._tap_btn_active = function () {
            var self = this;
            var hec = self.get('hec');
            hec.wingActivate(function () {
                self.dataChanged();
            }, self);
        };
        p._tap_btn_help = function () {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.wingCrit);
            g_base.BaseShowTip.create().setData({ id: 12, param1: gameInfo[7] }).show();
            self._tap_btn_stopAuto();
        };
        p._tap_ico_str = function () {
            var self = this;
            var hec = self.get('hec');
            var opt = hec.getWingOpt();
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.wingCrit);
            if (opt.wingLvl >= gameInfo[7]) {
                g_role.RoleWingStr.create().setData({ hec: self.data.hec }).show().onClose(function () {
                    self.dataChanged();
                });
                self._tap_btn_stopAuto();
            }
            else {
                mo.showMsg(gc.id_c_msgCode.wingLevelRequire, gameInfo[7]);
            }
        };
        p._tap_btn_keyUpgrade = function () {
            var self = this;
            g_role.RoleWingUpgrade.create().setData({ hec: self.data.hec, root: self }).show();
        };
        return RoleWing;
    })(mo.gui.Layer);
    g_role.RoleWing = RoleWing;
    egret.registerClass(RoleWing,"g_role.RoleWing");
})(g_role || (g_role = {}));

/**
 * Created by Administrator on 2016/2/22.
 */
var g_role;
(function (g_role) {
    var RoleWingStr = (function (_super) {
        __extends(RoleWingStr, _super);
        function RoleWingStr() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleWingStr,p=c.prototype;
        d(p, "isLeft"
            ,function () {
                return this._isLeft;
            }
            ,function (value) {
                this._isLeft = value;
                this.ico_selLeft.alpha = this.isLeft ? 1 : 0;
                this.ico_selRight.alpha = !this.isLeft ? 1 : 0;
            }
        );
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            g_role.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._heroChanged = function (hec) {
            var self = this;
            //self.btn_useYB.selected = false;
            self.setData({ hec: hec });
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            g_role.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.isLeft = true;
            self.grp_result.visible = false;
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._critEfxPlayer = uiHelper.EfxPlayer.create(self.effect_crit);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
            self._downEfxPlayer = uiHelper.EfxPlayer.create(self.effect_downLv);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var hec = self.data.hec;
            var opt = hec.getWingOpt();
            self.label_name.text = opt.wingName;
            self.label_wingName.text = self.isLeft ? "左翼" : "右翼";
            self.label_lvLeft.text = "左翼Lv." + opt.leftLvl;
            self.label_lvRight.text = "右翼Lv." + opt.rightLvl;
            var curLv = self.isLeft ? opt.leftLvl : opt.rightLvl;
            var nextLv = curLv + 1;
            var wingStrInfos = mo.getJSONWithFileName(gc.cfg_t_wingStrength);
            var strInfo = wingStrInfos[curLv];
            var nextStrInfo = wingStrInfos[nextLv];
            var isMax = nextStrInfo == undefined || !nextStrInfo.hasOwnProperty("A");
            self.label_curLv.text = curLv + "";
            self.label_curProp1.text = self.getPropStr(strInfo, self.isLeft, 1);
            self.label_curProp2.text = self.getPropStr(strInfo, self.isLeft, 2);
            if (isMax) {
                self.label_maxLv.visible = true;
                self.grp_next.visible = false;
                self.grp_lvUp.visible = false;
                self.label_needWingLv.visible = false;
            }
            else {
                self.label_maxLv.visible = false;
                self.grp_next.visible = true;
                if (opt.wingLvl >= strInfo[gc.t_wingStrength_needWingLvl]) {
                    self.grp_lvUp.visible = true;
                    self.label_needWingLv.visible = false;
                    self.label_cost.text = strInfo[gc.t_wingStrength_consume] + "";
                    var rate = strInfo[gc.t_wingStrength_successPro] / 100;
                    self.checkGrpCost();
                }
                else {
                    self.grp_lvUp.visible = false;
                    self.label_needWingLv.visible = true;
                    self.label_needWingLv.text = mo.STR.format("翅膀到达%s阶后可继续强化", strInfo[gc.t_wingStrength_needWingLvl]);
                }
                self.label_nextLv.text = nextLv;
                self.label_nextProp1.text = self.getPropStr(nextStrInfo, self.isLeft, 1);
                self.label_nextProp2.text = self.getPropStr(nextStrInfo, self.isLeft, 2);
            }
            self.label_yuanbao.text = gd.userCtrl.getDiamond().toString();
            self.label_feather.text = opt.featherCount;
        };
        p.checkGrpCost = function () {
            var self = this;
            var hec = self.data.hec;
            var opt = hec.getWingOpt();
            var curLv = self.isLeft ? opt.leftLvl : opt.rightLvl;
            var strInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_wingStrength, curLv);
            if (self.btn_useYB.selected) {
                if (opt.plumageCount >= strInfo[gc.t_wingStrength_consume]) {
                    if (self.grp_costYB.owner) {
                        self.grp_costYB.owner.removeElement(self.grp_costYB);
                    }
                }
                else {
                    if (opt.plumageCount <= 0) {
                        if (self.grp_cost.owner) {
                            self.grp_cost.owner.removeElement(self.grp_cost);
                        }
                    }
                    self.label_cost.text = opt.plumageCount + "";
                    self.label_costYB.text = (strInfo[gc.t_wingStrength_consume] - opt.plumageCount) * 5 + "";
                    self.grp_costParent.addElement(self.grp_costYB);
                }
            }
            else {
                if (self.grp_costYB.owner) {
                    self.grp_costYB.owner.removeElement(self.grp_costYB);
                }
                self.label_cost.text = strInfo[gc.t_wingStrength_consume] + "";
                self.grp_costParent.addElement(self.grp_cost);
            }
        };
        p._tap_btn_useYB = function () {
            var self = this;
            self.checkGrpCost();
        };
        p._tap_ico_selLeft = function () {
            var self = this;
            self.isLeft = true;
            //self.btn_useYB.selected = false;
            self.dataChanged();
        };
        p._tap_ico_selRight = function () {
            var self = this;
            self.isLeft = false;
            //self.btn_useYB.selected = false;
            self.dataChanged();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 42 }).show();
        };
        p._tap_btn_str = function () {
            var self = this;
            var hec = self.data.hec;
            var opt = hec.getWingOpt();
            var curLv = self.isLeft ? opt.leftLvl : opt.rightLvl;
            var strInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_wingStrength, curLv);
            if (opt.plumageCount >= strInfo[gc.t_wingStrength_consume] || self.btn_useYB.selected) {
                hec.wingStrength(opt, self.isLeft ? gc.c_prop.wingStrengthKey.left : gc.c_prop.wingStrengthKey.right, self.btn_useYB.selected, function (data) {
                    //[是否成功,强化后等级,是否暴击]
                    var isWin = data[0];
                    var lvTo = data[1];
                    var isCrit = data[2];
                    var isDown = data[3];
                    var lvFrom = self.isLeft ? opt.leftLvl : opt.rightLvl;
                    var infoFrom = mo.getJSONWithFileNameAndID(gc.cfg_t_wingStrength, lvFrom);
                    var infoTo = mo.getJSONWithFileNameAndID(gc.cfg_t_wingStrength, lvTo);
                    self.grp_result.visible = true;
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
            else {
                var itemId = gc.c_prop.spItemIdKey.plumage;
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({ itemId: itemId, count: strInfo[gc.t_wingStrength_consume] - opt.plumageCount }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
        };
        p._tap_btn_confirm = function () {
            var self = this;
            self.grp_result.visible = false;
        };
        p.getPropStr = function (strInfo, isLeft, num) {
            var str = "";
            if (isLeft) {
                if (num == 1) {
                    str = "翅膀攻击：+" + (strInfo[gc.t_wingStrength_attack] / 100).toFixed(1) + "%";
                }
                else if (num == 2) {
                    str = "翅膀物防：+" + (strInfo[gc.t_wingStrength_defence] / 100).toFixed(1) + "%";
                }
            }
            else {
                if (num == 1) {
                    str = "翅膀生命：+" + (strInfo[gc.t_wingStrength_maxHp] / 100).toFixed(1) + "%";
                }
                else if (num == 2) {
                    str = "翅膀法防：+" + (strInfo[gc.t_wingStrength_magicDefence] / 100).toFixed(1) + "%";
                }
            }
            return str;
        };
        return RoleWingStr;
    })(mo.gui.Layer);
    g_role.RoleWingStr = RoleWingStr;
    egret.registerClass(RoleWingStr,"g_role.RoleWingStr");
})(g_role || (g_role = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_role;
(function (g_role) {
    /**
     *
     * @author
     *
     */
    var RoleSkill = (function (_super) {
        __extends(RoleSkill, _super);
        function RoleSkill() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleSkill,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_skills = g_role.SkillItem;
            g_role.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._heroChanged = function (hec) {
            var self = this;
            self.setData({ hec: hec });
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            g_role.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.res_bar.visible = self.data.hec.isSelf;
            self.refreshList("list_skills");
        };
        p._data_list_skills = function () {
            var self = this;
            var heroEntityCtrl = self.data.hec;
            var obj;
            var skills = [];
            for (var i = 0; i < heroEntityCtrl.skillIds.length; ++i) {
                var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, heroEntityCtrl.skillIds[i]);
                if (skillInfo[gc.t_skill_canExtends])
                    continue;
                obj = {
                    heroID: heroEntityCtrl.get(gc.dsConsts.HeroEntity.id),
                    skillId: heroEntityCtrl.skillIds[i],
                    skillLv: heroEntityCtrl.skillLevels[i],
                    index: i,
                    hec: heroEntityCtrl
                };
                skills.push(obj);
            }
            return skills;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 1 }).show();
        };
        return RoleSkill;
    })(mo.gui.Layer);
    g_role.RoleSkill = RoleSkill;
    egret.registerClass(RoleSkill,"g_role.RoleSkill");
})(g_role || (g_role = {}));

/**
 * Created by lihex on 9/19/15.
 */
var g_role;
(function (g_role) {
    /**
     *
     * @author
     *
     */
    var EquipDetail = (function (_super) {
        __extends(EquipDetail, _super);
        function EquipDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EquipDetail,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            g_role.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
            // 注册事件监听
            self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_CHANGED, self.close);
        };
        p._heroChanged = function (hec) {
            var self = this;
            self.setData({ hec: hec });
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            g_role.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._tap_btn_replace = function () {
            var self = this;
            var part = self.data.part;
            var hec = self.data.hec;
            g_role.EquipChange.create().setData({ hec: hec, part: part }).show();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var part = self.data.part;
            var hec = self.data.hec;
            var isPartEquiped = hec.isPartEquiped(part);
            self.label_noEquip.visible = !isPartEquiped;
            self.scr_hasEquip.visible = isPartEquiped;
            self.btn_replace.visible = isPartEquiped && hec.isSelf;
            self.img_red.visible = false;
            if (!isPartEquiped)
                return;
            var tempId = hec.getEquipTempIdByPart(part);
            var equipId = hec.getEquipIdByPart(part);
            var equipInfo = hec.getEquipInfoByPart(part);
            var trans = gd.equipCtrl.equipTrans(equipInfo);
            self.ico_item.setData({ itemId: tempId });
            self.label_name.text = trans.name;
            var str = mo.STR.format("[ubb]评分:%s[/ubb]", trans.score);
            var basePropArr = trans.basePropArr;
            var addPropObj = utils.kvArr2KvObj(trans.extraPropArr);
            var strTemp1 = "[/br][ubb]%s: %s[/ubb][ubb] +%s[/ubb]";
            var strTemp2 = "[/br][ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb]";
            var propData;
            for (var i = 0, li = basePropArr.length; i < li; i++) {
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0 ? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            self.label_desc.text = str;
            //强化等级信息
            var strLvlInfo = hec.getStrLvlInfoByEquipPart(part);
            var strLvl = strLvlInfo[0];
            var propKey = strLvlInfo[1];
            var propV = strLvlInfo[2];
            var str = mo.STR.format("[/br][ubb]%s+%s[/ubb]", gc.c_prop.heroProp[propKey], propV);
            self.label_str_lvl.text = [strLvl, str];
            //升星等级
            var starLvlInfo = hec.getStarLvlInfoByEquipPart(part);
            var topOpt = hec.getUpStarOpt(part);
            var starLvl = starLvlInfo[0];
            var propV = starLvlInfo[1];
            var str = mo.STR.format("[/br][ubb]装备基础属性+%s%[/ubb]", propV);
            var topStr = topOpt.topLv > 0 ?
                mo.STR.format("[/br][/br][ubb]升星突破：Lv.%s[/ubb][/br]%s+%s", topOpt.topLv, gc.c_prop.heroProp[topOpt.topCurProp[0]], topOpt.topCurProp[1])
                : "";
            self.label_str_star.text = [starLvl, str, topStr];
            //宝石等级
            self.gem_stone.setData({ hec: hec, part: part });
            // 红点
            var equipReds = hec.isEquipReddot();
            self.img_red.visible = equipReds.indexOf(part) != -1;
        };
        return EquipDetail;
    })(mo.gui.Layer);
    g_role.EquipDetail = EquipDetail;
    egret.registerClass(EquipDetail,"g_role.EquipDetail");
})(g_role || (g_role = {}));

/**
 * Created by lihex on 9/19/15.
 */
var g_role;
(function (g_role) {
    /**
     *
     * @author
     *
     */
    var EquipChange = (function (_super) {
        __extends(EquipChange, _super);
        function EquipChange() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EquipChange,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_role.EquipChooseItem;
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            var part = self.data.part;
            var hec = self.data.hec;
            process.nextTick(function () {
                mo.emitter.emit("equipList");
            });
            return gd.BagDataCtrl.getEquipList(hec.getStanbyEquip(part));
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var part = self.data.part;
            var hec = self.data.hec;
            var equipId = hec.getEquipIdByPart(part);
            var trans = gd.equipCtrl.equipTrans(equipId);
            var tempId = hec.getEquipTempIdByPart(part);
            self.ico_curEquip.setData({ itemId: tempId });
            var bdc = gd.BagDataCtrl.create(tempId, equipId);
            var str = mo.STR.format("[ubb color=%s]%s[/ubb] [ubb]评分:%s[/ubb][/br]", uiHelper.getColorByQuality(bdc.quality), bdc.name, bdc.score);
            var basePropArr = bdc.proptys;
            var addPropObj = utils.kvArr2KvObj(trans.extraPropArr);
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var propData;
            for (var i = 0, li = basePropArr.length; i < li; i++) {
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0 ? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            self.label_curDesc.text = str;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var hec = self.get('hec');
            cell.emitter.on(g_role.EquipChooseItem.ON_BTN_EQUIP, function (equipId) {
                hec.changeEquip(self.get('part'), equipId, self.close, self);
            }, self);
        };
        return EquipChange;
    })(mo.gui.Dlg);
    g_role.EquipChange = EquipChange;
    egret.registerClass(EquipChange,"g_role.EquipChange");
})(g_role || (g_role = {}));

/**
 * Created by lihex on 9/19/15.
 */
var g_role;
(function (g_role) {
    /**
     *
     * @author
     *
     */
    var EquipChoose = (function (_super) {
        __extends(EquipChoose, _super);
        function EquipChoose() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EquipChoose,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_role.EquipChooseItem;
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            var part = self.data.part;
            var hec = self.data.hec;
            process.nextTick(function () {
                mo.emitter.emit("equipList");
            });
            return gd.BagDataCtrl.getEquipList(hec.getStanbyEquip(part));
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var hec = self.data.hec;
            cell.emitter.on(g_role.EquipChooseItem.ON_BTN_EQUIP, function (equipId) {
                hec.changeEquip(self.data.part, equipId, self.close, self);
            }, self);
        };
        return EquipChoose;
    })(mo.gui.Dlg);
    g_role.EquipChoose = EquipChoose;
    egret.registerClass(EquipChoose,"g_role.EquipChoose");
})(g_role || (g_role = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_role;
(function (g_role) {
    var EquipChooseItem = (function (_super) {
        __extends(EquipChooseItem, _super);
        function EquipChooseItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EquipChooseItem,p=c.prototype;
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
            var trans = gd.equipCtrl.equipTrans(bdc.equipId);
            self.ico_item.set('itemId', bdc.tempId);
            var str = mo.STR.format("[ubb color=%s]%s[/ubb] [ubb]评分:%s[/ubb][/br]", uiHelper.getColorByQuality(bdc.quality), bdc.name, bdc.score);
            var basePropArr = bdc.proptys;
            var addPropObj = utils.kvArr2KvObj(trans.extraPropArr);
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
        };
        p._tap_btn_equip = function () {
            var self = this;
            var bdc = self.data;
            self.emitter.emit(self.__class.ON_BTN_EQUIP, bdc.equipId, self);
        };
        EquipChooseItem.ON_BTN_EQUIP = "on_btn_equip";
        return EquipChooseItem;
    })(mo.gui.ItemRenderer);
    g_role.EquipChooseItem = EquipChooseItem;
    egret.registerClass(EquipChooseItem,"g_role.EquipChooseItem");
})(g_role || (g_role = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_role;
(function (g_role) {
    var SkillItem = (function (_super) {
        __extends(SkillItem, _super);
        function SkillItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=SkillItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var id = self.data.skillId;
            var level = self.data.skillLv;
            var index = self.data.index;
            var hec = self.data.hec;
            var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, id);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.skillRate);
            var openLv = gameInfo[4].split(",")[index];
            self.ico_skill.source = resHelper.getSkillIconPath(id);
            var damageScale = skillInfo[gc.t_skill_damage] / 10000;
            var buffID = skillInfo[gc.t_skill_buffID];
            if (level <= 0) {
                level = 1;
            }
            var cd = skillInfo[gc.t_skill_cd] * 10 / 1000;
            if (damageScale != 0) {
                var perLvScale = skillInfo[gc.t_skill_damageScaleA] / 10000;
                damageScale += (level - 1) * perLvScale;
                self.label_desc.text = mo.STR.format(skillInfo[gc.t_skill_desc], Math.abs(Math.round(-damageScale * 100)), cd);
            }
            else if (buffID != 0) {
                var buffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_buff, buffID);
                var perLvValue = buffInfo[gc.t_buff_linerScale];
                var value = (buffInfo[gc.t_buff_baseValue1] + perLvValue * (level - 1)) / 10000;
                value = Math.abs(value);
                self.label_desc.text = mo.STR.format(skillInfo[gc.t_skill_desc], Math.round(value * 100), cd);
            }
            else {
                self.label_desc.text = mo.STR.format(skillInfo[gc.t_skill_desc]);
            }
            if (gd.userCtrl.getLvl() < openLv) {
                self.ico_new.visible = false;
                self.label_open.text = mo.STR.format("角色%s级开放", openLv);
                self.label_open.visible = true;
                self.grp_needMoney.visible = false;
                self.label_name.text = mo.STR.format("%s", skillInfo[gc.t_skill_name]);
                self.btn_lvUp.visible = false;
            }
            else {
                self.ico_new.visible = level == 1;
                self.btn_lvUp.visible = true;
                self.label_name.text = mo.STR.format("%s Lv.%s", skillInfo[gc.t_skill_name], level);
                if (level < gd.userCtrl.getLvl()) {
                    self.label_open.visible = false;
                    self.grp_needMoney.visible = true;
                    self.btn_lvUp.enabled = true;
                    var lvInfos = mo.getJSONWithFileName(gc.cfg_c_lvl);
                    for (var id in lvInfos) {
                        if (lvInfos[id][gc.c_lvl_upSkillLevel] == level + 1) {
                            self.label_needMoney.text = lvInfos[id][gc.c_lvl_skillNeedGold];
                            break;
                        }
                    }
                }
                else {
                    self.label_open.visible = true;
                    self.grp_needMoney.visible = false;
                    self.btn_lvUp.enabled = false;
                    self.label_open.text = mo.STR.format("角色%s级可继续升级", gd.userCtrl.getLvl() + 1);
                }
            }
            if (!hec.isSelf) {
                self.label_open.visible = false;
                self.grp_needMoney.visible = false;
                self.ico_new.visible = false;
                self.btn_lvUp.visible = false;
            }
        };
        p._tap_btn_lvUp = function () {
            var self = this;
            gd.heroCtrl.upSkill(self.data.heroID, self.data.index, function () {
                self.data.skillLv += 1;
                self.efx_up.gotoAndPlay(0, 1);
                self.dataChanged();
            }, self);
        };
        return SkillItem;
    })(mo.gui.ItemRenderer);
    g_role.SkillItem = SkillItem;
    egret.registerClass(SkillItem,"g_role.SkillItem");
})(g_role || (g_role = {}));

/**
 * Created by Administrator on 2015/9/28.
 */
var g_role;
(function (g_role) {
    var RoleMatrixInfo = (function (_super) {
        __extends(RoleMatrixInfo, _super);
        function RoleMatrixInfo() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleMatrixInfo,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
            this.ico_item.label_text.visible = false;
        };
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!this.data.hec)
                return;
            self.reset();
        };
        p.reset = function () {
            var self = this;
            var hero = self.data.hec;
            var isMatrix = self.data.isMatrix;
            var part = self.data.part;
            var itemId = self.itemId = hero.getHeroRealmRune(part) || gd.equipCtrl.getInitBreakRing(part);
            var hasEquip = true;
            var canEquip;
            var itemInfo;
            if (isMatrix) {
                itemId = self.itemId = hero.getHeroRealmRune(part);
            }
            else {
                itemId = self.itemId = gd.equipCtrl.getInitBreakRing(part);
            }
            itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            self.ico_item.setData({ itemId: itemId, count: 0 });
            self.btn_equip.visible = false;
            self.btn_gainWay.visible = false;
            self.btn_merge.visible = false;
            self.btn_ok.visible = false;
            if (itemInfo[gc.t_item_type] == gc.c_prop.itemTypeKey.rebirth) {
                canEquip = gd.heroCtrl.getRealmCount(itemId) > 0 || gd.heroCtrl.isRuneCom(itemId) && gd.heroCtrl.canRuneCom(itemId);
                var reamList = hero.getHeroRealmList();
                var reamEquipIds = reamList[1];
                hasEquip = reamEquipIds[part] && reamEquipIds[part] != 0;
                var realmInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemRealm, itemId);
                self.label_prop.text = gd.heroCtrl.getPropsStr(realmInfo[gc.t_itemRealm_propertys]);
                var hasCount = gd.heroCtrl.getRealmCount(itemId);
                self.label_has.text = mo.STR.format("拥有 %s 件", hasCount);
                self.ico_red.visible = !hasEquip && canEquip;
                if (hasEquip) {
                    self.btn_ok.visible = true;
                }
                else {
                    if (hasCount >= 1) {
                        self.btn_equip.visible = true;
                    }
                    else {
                        var canMerge = gd.heroCtrl.isRuneCom(itemId) && gd.heroCtrl.canRuneCom(itemId);
                        if (canMerge) {
                            self.btn_merge.visible = true;
                        }
                        else {
                            self.btn_gainWay.visible = true;
                        }
                    }
                }
                self.label_name.text = itemInfo[gc.t_item_name];
                self.label_needLv.text = mo.STR.format("需求等级 lv%s", itemInfo[gc.t_item_level]);
            }
            else {
                //特殊戒指
                canEquip = hero.isTringReddot().indexOf(part) != -1;
                hasEquip = hero.getEquipIdByPart(self.data.part);
                var hasCount = gd.heroCtrl.getRealmCount(itemId);
                self.ico_red.visible = !hasEquip && canEquip;
                if (hasEquip) {
                    self.btn_ok.visible = true;
                }
                else {
                    if (hasCount >= 1) {
                        self.btn_equip.visible = true;
                    }
                    else {
                        self.btn_gainWay.visible = true;
                    }
                }
                self.label_has.text = mo.STR.format("拥有 %s 件", hasCount);
                self.label_name.text = itemInfo[gc.t_item_name];
                self.label_needLv.text = mo.STR.format("需求等级 lv%s", itemInfo[gc.t_item_level]);
                var breakInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemBreak, itemId);
                //self.label_prop.text = gd.heroCtrl.getPropsStr(breakInfo[gc.t_itemBreak_props]);
                self.label_prop.text = breakInfo[gc.t_itemBreak_desc];
            }
            self.label_has.visible = hero.isSelf;
        };
        p._tap_btn_merge = function () {
            var self = this;
            g_base.ItemMerge.create().setData({ itemId: self.itemId, delegate: self }).show();
        };
        p._tap_btn_ok = function () {
            this.close();
        };
        p._tap_btn_gainWay = function () {
            var self = this;
            var itemId = self.itemId;
            g_base.ItemMerge.create().setData({ itemId: itemId, delegate: self }).show();
        };
        p._tap_btn_equip = function () {
            var self = this;
            var id = self.data.hec.get(gc.dsConsts.HeroEntity.id);
            var index = self.data.part;
            var itemId = self.itemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            if (itemInfo[gc.t_item_type] == gc.c_prop.itemTypeKey.rebirth) {
                gd.heroCtrl.wearRune(id, index, function () {
                    self.data.delegate.reset();
                    self.close();
                }, self);
            }
            else {
                gd.equipCtrl.wearParRing(id, self.itemId, function () {
                    self.close();
                }, self);
            }
        };
        return RoleMatrixInfo;
    })(mo.gui.Dlg);
    g_role.RoleMatrixInfo = RoleMatrixInfo;
    egret.registerClass(RoleMatrixInfo,"g_role.RoleMatrixInfo");
})(g_role || (g_role = {}));

/**
 * Created by Administrator on 2015/9/30.
 */
var g_role;
(function (g_role) {
    var BreakDetail = (function (_super) {
        __extends(BreakDetail, _super);
        function BreakDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BreakDetail,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.btn_tupo.visible = self.data.hero.isSelf;
            var itemId = self.data.itemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var breakInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemBreak, itemId);
            self.ico_item.setData({ itemId: itemId, count: 0 });
            self.ico_item.label_text.visible = false;
            self.label_name.text = itemInfo[gc.t_item_name];
            //self.label_props.text = gd.heroCtrl.getPropsStr(breakInfo[gc.t_itemBreak_props]);
            self.label_props.text = breakInfo[gc.t_itemBreak_desc];
            var aimItem = parseInt(itemId) + 1;
            var itemInfos = mo.getJSONWithFileName(gc.cfg_t_item);
            if (itemInfos[aimItem] != null) {
                var compoInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_compound, aimItem);
                self.label_needLv.text = "Lv" + compoInfo[gc.c_compound_needLvl];
                self.grp_needLv.visible = true;
            }
            else {
                self.grp_needLv.visible = false;
            }
        };
        p._tap_btn_tupo = function () {
            var self = this;
            var aimItem = parseInt(self.data.itemId) + 1;
            var itemInfos = mo.getJSONWithFileName(gc.cfg_t_item);
            if (itemInfos[aimItem] != null) {
                g_role.BreakTuPo.create().setData({ itemId: self.data.itemId, aimItemId: aimItem, hero: self.data.hero, delegate: self }).show();
            }
            else {
                mo.showMsg("特戒已经突破到最高");
            }
        };
        return BreakDetail;
    })(mo.gui.Dlg);
    g_role.BreakDetail = BreakDetail;
    egret.registerClass(BreakDetail,"g_role.BreakDetail");
})(g_role || (g_role = {}));

/**
 * Created by Administrator on 2015/9/30.
 */
var g_role;
(function (g_role) {
    var BreakTuPo = (function (_super) {
        __extends(BreakTuPo, _super);
        function BreakTuPo() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BreakTuPo,p=c.prototype;
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var itemId = self.data.aimItemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var breakInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemBreak, itemId);
            var compoInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_compound, itemId);
            var reqItemId = compoInfo[gc.c_compound_reqItems1];
            var reqCount = compoInfo[gc.c_compound_reqCount1];
            var reqItemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, reqItemId);
            self.ico_item.setData({ itemId: itemId, count: 0 });
            self.ico_item.label_text.visible = false;
            self.label_name.text = itemInfo[gc.t_item_name];
            self.label_props.text = breakInfo[gc.t_itemBreak_desc];
            self.ico_item2.setData({ itemId: reqItemId, count: reqCount, pileCount: gd.heroCtrl.getRealmCount(reqItemId) });
            self.label_name2.text = reqItemInfo[gc.t_item_name];
            if (gd.userCtrl.get(gc.dsConsts.UserEntity.lvl) >= compoInfo[gc.c_compound_needLvl]) {
                self.grp_needLv.visible = false;
                self.btn_tupo.visible = true;
            }
            else {
                self.label_needLv.text = "Lv" + compoInfo[gc.c_compound_needLvl];
                self.grp_needLv.visible = true;
                self.btn_tupo.visible = false;
            }
        };
        p._tap_btn_tupo = function () {
            var self = this;
            var hero = self.data.hero;
            var id = hero.get(gc.dsConsts.HeroEntity.id);
            var breakId = self.data.itemId;
            var breId = parseInt(breakId);
            var c_compound = mo.getJSONWithFileName(gc.cfg_c_compound);
            var t_itemBreak = mo.getJSONWithFileName(gc.cfg_t_itemBreak);
            var equipData = gd.heroCtrl.getEquipData(id);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var index = t_itemBreak[breId][gc.t_itemBreak_position];
            if (!equipData[index] || equipData[index] != breId)
                return mo.showMsg("还未拥有用于突破的特戒");
            if (!c_compound[breId + 1])
                return mo.showMsg("特戒已经突破到最高");
            var aimItemId = self.data.aimItemId;
            var reqItems1 = c_compound[aimItemId][gc.c_compound_reqItems1];
            var reqCount1 = c_compound[aimItemId][gc.c_compound_reqCount1];
            var count = bag[reqItems1] || 0;
            if (count < reqCount1) {
                g_base.ItemMerge.create().setData({ itemId: reqItems1 }).show();
            }
            else {
                gd.equipCtrl.ringBreak(id, breakId, function () {
                    self.data.delegate.close();
                    self.close();
                }, self);
            }
        };
        p._tap_ico_item2 = function () {
            var self = this;
            var itemId = self.data.aimItemId;
            var compoInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_compound, itemId);
            var reqItemId = compoInfo[gc.c_compound_reqItems1];
            g_base.ItemMerge.create().setData({ itemId: reqItemId }).show();
        };
        return BreakTuPo;
    })(mo.gui.Dlg);
    g_role.BreakTuPo = BreakTuPo;
    egret.registerClass(BreakTuPo,"g_role.BreakTuPo");
})(g_role || (g_role = {}));

/**
 * Created by SmallAiTT on 2015/7/15.
 */
var g_role;
(function (g_role) {
    logger.initLogger(g_role, "g-role");
    logger.setLvl("g-role", 4);
    var RoleScene = (function (_super) {
        __extends(RoleScene, _super);
        function RoleScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            var layer = g_role.baseTopRole = g_base.BaseTopRole.create().show();
            g_role.roleChgEmitter = layer.emitter;
            var rl = g_role.RoleLayer.create();
            rl.moduleParam = self.moduleParam;
            rl.show();
            g_role.baseBottomBar = g_base.BaseBottomBar.create().show();
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            g_role.roleChgEmitter = null;
        };
        return RoleScene;
    })(mo.gui.UIScene);
    g_role.RoleScene = RoleScene;
    egret.registerClass(RoleScene,"g_role.RoleScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RoleScene;
        moduleCfgItem.onValid(function (moduleParam) {
            var openLvl, c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            if (moduleParam && moduleParam.subModuleId == 3) {
                openLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
            }
            if ((openLvl != null) && openLvl > gd.userCtrl.getLvl()) {
                mo.showMsg(gc.id_c_msgCode.noRoleLvl, openLvl);
                return false;
            }
            g_base.modIdx = 2;
            return true;
        });
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
    });
})(g_role || (g_role = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_role;
(function (g_role) {
    var EnemyTopRole = (function (_super) {
        __extends(EnemyTopRole, _super);
        function EnemyTopRole() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EnemyTopRole,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            mo.gui.helper.setSkinName(this, g_base.BaseTopRole.__className);
            self._curHeroIdx = 0;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_nickName.visible = true;
            self.img_title.visible = false;
            self.ico_hero0.onClick(self.onIconClick, self);
            self.ico_hero1.onClick(self.onIconClick, self);
            self.ico_hero2.onClick(self.onIconClick, self);
            self.ico_hero3.onClick(self.onIconClick, self);
            var hec = gd.enemyHeroCtrl.getHeroByIndex(0);
            self._curHeroIdx = 0;
            self.label_job.text = gc.c_prop.heroJob[hec.job];
            self.label_combat.text = hec.combat;
            self.label_nickName.text = gd.enemyHeroCtrl.getUserName();
            self.setRoleSelected(self.ico_hero0);
            self.dataChanged();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.ico_hero0.setData({ index: 0, heroCtrl: gd.enemyHeroCtrl });
            self.ico_hero1.setData({ index: 1, heroCtrl: gd.enemyHeroCtrl });
            self.ico_hero2.setData({ index: 2, heroCtrl: gd.enemyHeroCtrl });
            self.ico_hero3.setData({ index: 3, heroCtrl: gd.enemyHeroCtrl });
            self.img_title.source = ((self.data.redType || 0) == 0) ? "ntc_text_role" : "ntc_text_forge";
        };
        p.setRoleSelected = function (item) {
            var self = this;
            self.ico_hero0.setSelected(false);
            self.ico_hero1.setSelected(false);
            self.ico_hero2.setSelected(false);
            self.ico_hero3.setSelected(false);
            item.setSelected(true);
        };
        p.onIconClick = function (item) {
            var self = this;
            var index = item.data.index;
            if (gd.enemyHeroCtrl.hasHeroByIndex(index)) {
                self.setRoleSelected(item);
                self._curHeroIdx = index;
                var hec = gd.enemyHeroCtrl.getHeroByIndex(index);
                self.emitter.emit(self.__class.ON_HERO_CHANGED, hec, index, self);
                self.label_job.text = gc.c_prop.heroJob[hec.job];
                self.label_combat.text = hec.combat;
            }
        };
        p.hide4thRole = function (hide) {
            var self = this;
            self.ico_hero3.visible = !hide;
            self.ico_hero3.includeInLayout = !hide;
        };
        EnemyTopRole.ON_HERO_CHANGED = "on_hero_changed";
        return EnemyTopRole;
    })(mo.gui.MenuLayer);
    g_role.EnemyTopRole = EnemyTopRole;
    egret.registerClass(EnemyTopRole,"g_role.EnemyTopRole");
})(g_role || (g_role = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_role;
(function (g_role) {
    var RoleEnemyInfo = (function (_super) {
        __extends(RoleEnemyInfo, _super);
        function RoleEnemyInfo() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleEnemyInfo,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            mo.gui.helper.setSkinName(this, g_role.RoleLayer.__className);
        };
        p._heroChanged = function (hec, index) {
            var self = this;
            self.setData({ hec: hec });
            if (index < 3) {
                var unlocked = self._isWingUnlocked();
                self.btn_no_wing.visible = !unlocked;
                self.btn_wing_light.visible = unlocked;
            }
            else {
                self.btn_no_wing.visible = false;
                self.btn_wing_light.visible = false;
            }
        };
        p.dtor = function () {
            _super.prototype.dtor.call(this);
            var self = this;
            g_role.roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.checkRedPoint();
            var layer = self.topRoleLayer = g_role.EnemyTopRole.create().show();
            g_role.roleChgEmitter = layer.emitter;
            g_role.roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var key in heroEquipIndies) {
                var item = self['eq_' + key];
                item.onClick(self._onEquipItemClick, self, item);
            }
            var unlocked = self._isWingUnlocked();
            self.btn_no_wing.visible = !unlocked;
            self.btn_wing_light.visible = unlocked;
            self.hec = gd.enemyHeroCtrl.getMainHeroCtrl();
            self.setData({ hec: self.hec });
            self._refreshRebirthGrp();
            self["btn_buzhen"].visible = false;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
        };
        p._refreshRebirthGrp = function () {
            var self = this;
            var rebirthLvl = self.hec.getRebirthLvl();
            if (rebirthLvl == 0) {
                self.grp_rebirth.visible = false;
            }
            else {
                self.grp_rebirth.visible = true;
                if (rebirthLvl >= 1 && rebirthLvl <= 10) {
                    self.img_rebirthNum.source = "txt_hz_" + rebirthLvl;
                }
            }
        };
        p.checkRedPoint = function () {
            var self = this;
            self.img_redSkill.visible = false;
            self.img_redMatrix.visible = false;
            self.img_redWing.visible = false;
        };
        p._isWingUnlocked = function () {
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
            return gd.enemyHeroCtrl.getLvl() >= needLvl;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.hec = self.get('hec');
            if (!self.hec)
                return;
            self.updateEquipItems();
            //self.effect_role.startLoadByKey(22+(self.hec.job-1)*2+(2-self.hec.sex)-1);
            self.ico_avatar.setData({
                clothesID: self.hec.getClothDisplayID(),
                weaponID: self.hec.getWeaponDisplayID(),
                wingID: self.hec.getWingDisplayID(),
                sex: self.hec.sex,
                isKing: self.hec.getIsKing()
            });
            var printTitle = self.hec.getMedalTitle();
            var hasPrintTitle = !!printTitle;
            //有战印且是第一个英雄才显示
            self.ico_medalItem.visible = hasPrintTitle && (gd.enemyHeroCtrl.getMainHeroCtrl() == self.hec);
            if (hasPrintTitle)
                self.ico_medalItem.setData({ itemId: printTitle });
        };
        p.updateEquipItems = function () {
            var self = this;
            var hec = self.hec;
            var equipData = hec.equipData;
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var part in heroEquipIndies) {
                var equipId = equipData[part];
                var item = self['eq_' + part];
                var data;
                if (item) {
                    data = { hec: hec, part: parseInt(part), equipId: equipId };
                    item.setData(data);
                }
            }
        };
        p._tap_btn_skill = function () {
            var self = this;
            g_role.RoleSkill.create().setData({ hec: self.hec }).show();
        };
        p._tap_btn_detail = function () {
            var self = this;
            var hec = self.hec;
            g_role.RoleDetail.create().setData({ hec: hec }).show();
        };
        p._tap_btn_matrix = function () {
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.ream][gc.c_open_lvlRequired];
            if (gd.userCtrl.getLvl() < needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, needLvl);
            }
            //self.topRoleLayer.hide4thRole(true);
            g_role.RoleMatrix.create().setData({ hec: self.hec }).show().onClose(function () {
                //self.topRoleLayer.hide4thRole(false);
            });
        };
        p._tap_btn_wing_light = function () {
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
            if (gd.userCtrl.getLvl() < needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, needLvl);
            }
            var hec = this.hec;
            self.topRoleLayer.hide4thRole(true);
            g_role.RoleWing.create().setData({ hec: hec }).show().onClose(function () {
                self.topRoleLayer.hide4thRole(false);
            });
        };
        p._onEquipItemClick = function (item) {
            var self = this;
            if (gd.equipCtrl.isBreakRing(item.part)) {
                if (item.equipId != null) {
                    //self.topRoleLayer.hide4thRole(true);
                    g_role.BreakDetail.create().setData({ itemId: item.equipId, hero: item.hec }).show().onClose(function () {
                        //self.topRoleLayer.hide4thRole(false);
                    });
                }
            }
            else {
                if (!item.isEmpty) {
                    g_role.EquipDetail.create().setData({ hec: item.hec, part: item.part }).show();
                }
            }
        };
        p._tap_btn_back = function () {
            var self = this;
            self.topRoleLayer.close();
            self.close();
        };
        return RoleEnemyInfo;
    })(mo.gui.Layer);
    g_role.RoleEnemyInfo = RoleEnemyInfo;
    egret.registerClass(RoleEnemyInfo,"g_role.RoleEnemyInfo");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RoleEnemyInfo;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.enemyHeroCtrl.getShowHeroData(moduleParam.userId, function (data) {
                cb();
            }, this);
        });
    });
})(g_role || (g_role = {}));

/**
 * Created by admin on 16/5/3.
 */
/**
 * Created by lihex on 9/19/15.
 */
var g_role;
(function (g_role) {
    /**
     *
     * @author
     *
     */
    var RoleWingUpgrade = (function (_super) {
        __extends(RoleWingUpgrade, _super);
        function RoleWingUpgrade() {
            _super.apply(this, arguments);
            this.trainType = 0;
            this.isUseDiamond = false;
        }
        var d = __define,c=RoleWingUpgrade,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var recordWingTypeStr = gd.heroCtrl.getWingUpgradeTypeStr();
            recordWingTypeStr = recordWingTypeStr == "" ? "common" : recordWingTypeStr;
            self.setType(recordWingTypeStr);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
        };
        //tab_btn点击事件 一键   请求 升阶
        p._tap_btn_keyUpgrade = function () {
            var self = this;
            var heroEntity = self.data.hec;
            if (heroEntity == null) {
                return;
            }
            var id = heroEntity.id;
            var isUseStone = gd.heroCtrl.getIsUseStoneOpt();
            gd.heroCtrl.wingFos2Top(id, self.trainType, isUseStone, function () {
                //self.updateWing();
                var root = self.get('root');
                root.dataChanged();
                self.close();
            }, self);
        };
        p._chg_ckb_common = function () {
            var self = this;
            self.setType("common");
        };
        //高级培养
        p._chg_ckb_advanced = function () {
            var self = this;
            self.setType("advanced");
        };
        p._chg_ckb_useStone = function () {
            var self = this;
            //高级才生效
            if (self.trainType == gc.c_prop.wingFosTypeKey.advFoster) {
                var useStoneSelect = self.ckb_useStone.selected;
                gd.heroCtrl.setIsUseStoneOpt(useStoneSelect);
                self.showNeedResource();
            }
            else {
                self.ckb_useStone.selected = false;
            }
        };
        p.setType = function (type) {
            var self = this;
            var com = type == "common" ? true : false;
            self.ckb_common.selected = com;
            self.ckb_advanced.selected = !com;
            self.isUseDiamond = !com;
            if (com) {
                self.setTrainType(gc.c_prop.wingFosTypeKey.comFoster);
                self.ckb_useStone.selected = false;
            }
            else {
                self.setTrainType(gc.c_prop.wingFosTypeKey.advFoster);
                var isUseStone = gd.heroCtrl.getIsUseStoneOpt();
                self.ckb_useStone.selected = isUseStone;
            }
            gd.heroCtrl.setWingUpgradeTypeStr(type);
            self.updateWing();
            self.showNeedResource();
        };
        p.setTrainType = function (type) {
            var self = this;
            self.trainType = type;
        };
        p.checkCanOneKeyUpgrade = function () {
            return true;
        };
        p._tap_btn_close = function () {
            var self = this;
            self.close();
        };
        p.updateWing = function () {
            var self = this;
            var wingMap = self.getWingData();
            if (wingMap) {
                self.labelCurreLevel.text = wingMap["level"].toString();
                self.labelCurreStar.text = wingMap["star"].toString();
                self.labelNextLevel.text = wingMap["nextLevel"].toString();
            }
        };
        /*获取翅膀数据
         [id，名称，等级，当前属性{}，下一星级属性{}，当前星数，当前经验，普通培养所需，高级培养所需，拥有羽毛数量]
         翅膀[id,等级,星级,当前星经验]*/
        p.getWingData = function () {
            var self = this;
            var heroEntity = self.data.hec;
            if (heroEntity == null) {
                return null;
            }
            var opt = heroEntity.getWingOpt();
            var level = opt.wingLvl;
            var starValue = opt.nowStarCount;
            var idLimit = opt.wingIdLimit;
            var wingId = opt.wingId;
            var nowObj = {};
            nowObj["level"] = level;
            nowObj["star"] = starValue;
            if (wingId >= idLimit) {
                nowObj["nextLevel"] = nowObj["level"];
            }
            else {
                nowObj["nextLevel"] = nowObj["level"] + 1;
            }
            return nowObj;
        };
        p.showNeedResource = function () {
            var self = this;
            var hec = self.get('hec');
            var opt = hec.getWingOpt();
            var stepValue = 0;
            if (self.trainType == gc.c_prop.wingFosTypeKey.comFoster) {
                stepValue = opt.comTrain;
            }
            else {
                stepValue = opt.advTrain;
            }
            var count = self.getContNum(self.trainType);
            var value = stepValue * count;
            if (self.trainType == gc.c_prop.wingFosTypeKey.comFoster) {
                self.labelFeather.text = "升阶总需:" + value + "金币";
                self.labelMoney.text = "";
            }
            else {
                self.labelFeather.text = "升阶总需羽毛:" + count + "个";
                var featherCount = opt.featherCount;
                if (gd.heroCtrl.getIsUseStoneOpt() && featherCount < count) {
                    var leftNeedValue = (count - featherCount) * stepValue;
                    self.labelMoney.text = "当前升阶仍需:" + leftNeedValue + "元宝";
                }
                else {
                    self.labelMoney.text = "";
                }
            }
        };
        p.getContNum = function (type) {
            var self = this;
            var hec = self.get('hec');
            var opt = hec.getWingOpt();
            var wingId = opt.wingId;
            var starNum = opt.nowStarCount;
            var needTotalExp = self.getTotalNeedExp(wingId, starNum);
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.wingCrit);
            var addExp = 0;
            if (self.trainType == gc.c_prop.wingFosTypeKey.comFoster) {
                addExp = c_game[5];
            }
            else {
                addExp = c_game[0];
            }
            var curreExp = opt.nowExp;
            var count = Math.ceil((needTotalExp - curreExp) / addExp);
            return count;
        };
        p.getTotalNeedExp = function (id, starNum) {
            var items = mo.getJSONWithFileName(gc.cfg_t_wing);
            var totalExp = 0;
            var count = 10 - starNum;
            var idKey = id;
            for (var key in items) {
                if (key == idKey.toString() && count > 0) {
                    var data = items[key];
                    var exp = data[gc.t_wing_needExp];
                    totalExp += exp;
                    idKey += 1;
                    count -= 1;
                }
            }
            return totalExp;
        };
        return RoleWingUpgrade;
    })(mo.gui.Dlg);
    g_role.RoleWingUpgrade = RoleWingUpgrade;
    egret.registerClass(RoleWingUpgrade,"g_role.RoleWingUpgrade");
})(g_role || (g_role = {}));

/**
 * Created by lihex on 2016/6/20.
 */
var g_role;
(function (g_role) {
    var RoleBuzhen = (function (_super) {
        __extends(RoleBuzhen, _super);
        function RoleBuzhen() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleBuzhen,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_role.RoleBuzhenItem;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            var heroList = gd.heroCtrl.getFightList();
            if (!self.posArr) {
                self.posArr = [].concat(heroList);
            }
            return self.posArr;
        };
        p._click_list_items = function (event) {
            var self = this;
            var hec = event.item;
            console.log('hec.name = ', gc.c_prop.heroJob[hec.job]);
            if (!self.selectA) {
                self.selectA = hec;
            }
            else {
                self.selectB = hec;
                self._swapPos(self.selectA, self.selectB);
                self.selectA = null;
                self.selectB = null;
            }
        };
        p._swapPos = function (selectA, selectB) {
            var self = this;
            var posA = self.posArr.indexOf(selectA);
            var posB = self.posArr.indexOf(selectB);
            self.posArr[posA] = selectB;
            self.posArr[posB] = selectA;
            self.refreshList("list_items");
        };
        p._tap_btn_cancel = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_save = function () {
            var self = this;
            console.log("-->保存布阵");
            gd.heroCtrl.saveFightList(self.posArr, function () {
                self.close();
            }, self);
        };
        return RoleBuzhen;
    })(mo.gui.Dlg);
    g_role.RoleBuzhen = RoleBuzhen;
    egret.registerClass(RoleBuzhen,"g_role.RoleBuzhen");
})(g_role || (g_role = {}));

/**
 * Created by lihex on 2016/6/20.
 */
var g_role;
(function (g_role) {
    var RoleBuzhenItem = (function (_super) {
        __extends(RoleBuzhenItem, _super);
        function RoleBuzhenItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RoleBuzhenItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var hec = self.data;
            self.ico.source = mo.STR.format("avatar_%s_%s_0", hec.job, hec.sex); // job gender type
            self.label_name.text = gc.c_prop.heroJob[hec.job];
            self.label_num.text = self.itemIndex + 1;
        };
        return RoleBuzhenItem;
    })(mo.gui.ItemRenderer);
    g_role.RoleBuzhenItem = RoleBuzhenItem;
    egret.registerClass(RoleBuzhenItem,"g_role.RoleBuzhenItem");
})(g_role || (g_role = {}));

