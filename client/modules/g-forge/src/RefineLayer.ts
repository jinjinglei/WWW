/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_forge {

    export class RefineLayer extends mo.gui.Layer {


        container:egret.gui.Group;
        btn_do:egret.gui.Button;
        img_border_light:egret.gui.UIAsset;
        hec:gd.HeroEntityCtrl;
        part;

        lable_curLv;
        label_curProp:mo.gui.Label;
        label_nextProp:mo.gui.Label;
        label_cost_stone:mo.gui.Label;
        label_cost_gold:mo.gui.Label;
        img_cost:egret.gui.UIAsset;
        ico_stone;

        data:gd.IHeroPart;
        part_item:g_comp.Part_Item;

        efx:g_comp.UIEffect;
        _efxPlayer:uiHelper.EfxPlayer;

        grp_jinglian:egret.gui.Group;
        label_max;
        label_cannot;

        label_gold;
        label_yuanbao;
        label_stone;

        effect_win;
        effect_fail;
        effect_crit;
        effect_downLv;
        _winEfxPlayer:uiHelper.EfxPlayer;
        _failEfxPlayer:uiHelper.EfxPlayer;
        _critEfxPlayer:uiHelper.EfxPlayer;
        _downEfxPlayer:uiHelper.EfxPlayer;
        //@override
        _initProp() {
            var self = this;
            super._initProp();
            roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }

        _heroChanged(hec) {
            var self = this;
            self.setData({hec: hec});
        }

        onEnter() {
            super.onEnter();
            baseBottomBar.visible = false;
        }

        onExit() {
            super.onExit();
            var self = this;
            if (baseBottomBar)
                baseBottomBar.visible = true;
        }

        dtor() {
            super.dtor();
            var self = this;
            if (roleChgEmitter)roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.gold.toString(), self.dataChanged);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.diamond.toString(), self.dataChanged);

            self.hec = self.get('hec');
            self.part = self.get('part');
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var part in heroEquipIndies) {
                var item:g_comp.Equip_Item = self['eq_' + part];
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
        }

        _getRealPart(){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.data.hec;
            var part = (self.data.part != null)? self.data.part : hec.getFirstEquipedPart();
            part = hec.isPartEquiped(part)? part : hec.getFirstEquipedPart();
            return part;
        }
        
        dataChanged() {
            super.dataChanged();
            var self = this;
            self.hec = self.get('hec');
            var hec:gd.HeroEntityCtrl = self.data.hec;
            var part = self._getRealPart();
            self.part_item.setData({part : part});
            if(part == null){
                self._showEmpty();
            }

            self.img_border_light.visible = self.hec.isNormalEquiped();
            if (self.hec.isNormalEquiped()) {
                self._moveLightBorder(self["eq_" + self.part]);
                self.updateItem();
            }
            self.updateEquipItems();
        }

        updateEquipItems() {
            var self = this;
            var hec = self.hec;
            var equipData = hec.equipData;
            var heroEquipIndies = gc.c_prop.heroEquipIndex;
            for (var part in heroEquipIndies) {
                var equipId = equipData[part];
                var iPart = parseInt(part);
                var item:g_comp.Equip_Item = self['eq_' + part];
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
        }

        _onEquipItemClick(item:g_comp.Equip_Item) {
            var self = this;
            var hec:gd.HeroEntityCtrl = self.hec;
            var part = item.part;
            var hasEquip = hec.isPartEquiped(part);
            if (!hasEquip) return mo.showMsg(gc.id_c_msgCode.noEquipNow);
            self.part = part;
            self._moveLightBorder(item);
            self.updateItem();
        }

        _showEmpty() {
            var self = this;
            self.label_cost_stone.text = [gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.intensify), 0];
            self.label_cost_gold.text = 0 + "";
            self.label_curProp.visible = false;
            self.label_nextProp.visible = false;

            self.grp_jinglian.visible = false;
        }

        updateItem() {
            var self = this;
            var hec:gd.HeroEntityCtrl = self.data.hec;
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
            if (!isEquiped) return mo.showMsg(gc.id_c_msgCode.noEquipNow);

            var part = self.part;
            self.part_item.setData({part: part});
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
                } else {
                    self.grp_jinglian.visible = false;
                    self.label_cannot.visible = true;
                    self.label_cannot.text = opt.needStrLv;
                }
            }
            self.label_gold.text = gd.userCtrl.getGold().toString();
            self.label_yuanbao.text = gd.userCtrl.getDiamond().toString();
            self.label_stone.text = opt.stone;
            self.label_nextProp.visible = !opt.isMax;
        }

        _moveLightBorder(item:g_comp.Equip_Item) {
            var self = this;
            var iW = item.width, iH = item.height;
            var bW = self.img_border_light.width, bH = self.img_border_light.height;
            self.img_border_light.x = item.x - (bW - iW) / 2 + 2;//for png
            self.img_border_light.y = item.y - (bH - iH) / 2 + 3;
        }

        _tap_btn_do() {
            var self = this;
            var opt:any;
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
                } else {
                    g_base.GainWay.create().setData({itemId: itemId}).show();
                }
            } else {
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
                    } else {
                        self._failEfxPlayer.play();
                        if (isDown) {
                            self._downEfxPlayer.play();
                        }
                    }
                    self.dataChanged();
                }, self);
            }
        }

        _tap_btn_help() {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.equipRefineCfg);
            g_base.BaseShowTip.create().setData({id: 46, param1: gameInfo[0]}).show();
        }

        _tap_btn_back() {
            this.close();
        }

    }
}
