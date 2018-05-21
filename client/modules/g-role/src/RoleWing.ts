/**
 * Created by lihex on 9/19/15.
 */
module g_role {

    /**
     *
     * @author
     *
     */
    export class RoleWing extends mo.gui.Layer{

        img_wing:egret.gui.UIAsset;
        label_lvl:egret.gui.Label;
        label_name:egret.gui.Label;
        grp_star_light:egret.gui.Group;
        grp_next:egret.gui.Group;
        grp_train:egret.gui.Group;
        btn_evolution:egret.gui.Button;
        btn_active:egret.gui.Button;

        label_nAttack:egret.gui.Label;
        label_nHp:egret.gui.Label;
        label_nPDefense:egret.gui.Label;
        label_nMDefense:egret.gui.Label;

        label_cAttack:egret.gui.Label;
        label_cHp:egret.gui.Label;
        label_cPDefense:egret.gui.Label;
        label_cMDefense:egret.gui.Label;

        label_cost_gold:mo.gui.Label;
        label_cost_yuanbao:mo.gui.Label;
        label_gold:mo.gui.Label;
        label_yuanbao:mo.gui.Label;
        label_feather:mo.gui.Label;

        pb_exp:egret.gui.ProgressBar;
        //res_bar:g_comp.ResBar;
        grp_res;

        efx_btn:g_comp.UIEffect;
        efx_evo1:g_comp.UIEffect;
        efx_evo2:g_comp.UIEffect;
        efx_hit1:g_comp.UIEffect;
        efx_hit2:g_comp.UIEffect;

        _hitEfxPlayer:uiHelper.EfxPlayer;
        _upStarEfxPlayer:uiHelper.EfxPlayer;
        _evoEfxPlayer:uiHelper.EfxPlayer;

        grp_fos;
        btn_normal:egret.gui.Button;
        btn_high:egret.gui.Button;
        btn_normalAuto:egret.gui.Button;
        btn_highAuto:egret.gui.Button;
        btn_checkAuto:egret.gui.CheckBox;

        grp_stop;
        grp_costDescAuto;
        ico_costAuto;
        label_costAuto;
        btn_stopAuto:egret.gui.Button;
        btn_keyUpgrade:egret.gui.Button;

        ico_str;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }

        _heroChanged(hec){
            var self = this;
            self.setData({hec: hec});
            self._tap_btn_stopAuto();
        }

        dtor(){
            super.dtor();
            var self = this;
            roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            this.efx_btn.visible = false;
            self._upStarEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit1);
            self._hitEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit2);
            self._evoEfxPlayer = uiHelper.EfxPlayer.createPlayGroup([self.efx_evo1, self.efx_evo2]);
            self.grp_stop.visible = false;
            self.checkAuto();
        }

        onEnter(){
            super.onEnter();
            if(baseBottomBar) baseBottomBar.visible = false;
        }

        onExit(){
            super.onExit();
            var self = this;
            self._tap_btn_stopAuto();
            if(baseBottomBar)
                baseBottomBar.visible = true;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var hec:gd.HeroEntityCtrl = self.get('hec');

            var opt = hec.getWingOpt();
            self.img_wing.source = resHelper.getWingIconPath(opt.wingId);
            self.label_name.text = opt.wingName;
            self.label_lvl.text = opt.wingLvl + "";

            var isWingActivated = hec.isWingActived(); //是否激活
            var canEvo = false;
            if(hec.isSelf){
                self.grp_train.visible = isWingActivated;
                self.btn_active.visible = !isWingActivated;
                self.btn_evolution.visible = isWingActivated;

                uiHelper.playUIEffect(self.efx_btn, !isWingActivated);
                if(isWingActivated){
                    var starNum = opt.nowStarCount;
                    canEvo = starNum >= 10;
                    self.grp_train.visible = !canEvo;
                    self.btn_evolution.visible = canEvo;
                    uiHelper.playUIEffect(self.efx_btn, canEvo);
                    if(canEvo){
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
                self.pb_exp.labelFunction = function(v, max){
                    return mo.STR.format("%s/%s", opt.nowExp, opt.needExp);
                }
            }else{
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

            for(var i = 0, li = 10; i < li; i++){
                var star_light = self.grp_star_light.getChildByName("star_" +i);
                star_light.visible = i < opt.nowStarCount;
            }
        }

        //培养一次
        fosOne(isNormal){
            var self = this;
            var type;
            var hec:gd.HeroEntityCtrl = self.get('hec');

            var opt = hec.getWingOpt();

            if(isNormal){
                if(opt.gold < opt.comTrain) {
                    gd.userCtrl.noGolds(function(){},this);
                    self._tap_btn_stopAuto();
                    return;
                }
                type = gc.c_prop.wingFosTypeKey.comFoster;
            }else{
                if(opt.plumageCount <= 0 && opt.diamond < opt.advTrain) {
                    self._tap_btn_stopAuto();
                    return mo.showMsg(gc.id_c_msgCode.noDiamond);
                }
                type = gc.c_prop.wingFosTypeKey.advFoster;
            }

            var oldStarCount = opt.nowStarCount;
            hec.wingFos(opt, type, function(result){
                self.dataChanged();
                var afterStarCount = hec.wingData[2];
                if(afterStarCount != oldStarCount) self._upStarEfxPlayer.play();
                var isWingCrit = result[1];
                if(isWingCrit) self._hitEfxPlayer.play();
            }, self);
        }

        _autoTimeId;
        //普通自动培养
        _tap_btn_normalAuto(){
            var self = this;
            self._autoTimeId = setInterval(function(){
                self.fosOne(true);
            },1000);

            self.checkGrpStop(true);
        }
        _tap_btn_highAuto() {
            var self = this;
            self._autoTimeId = setInterval(function () {
                self.fosOne(false);
            }, 1000);
            self.checkGrpStop(false);
        }

        _tap_btn_stopAuto(){
            var self = this;
            clearInterval(self._autoTimeId);
            self.grp_stop.visible = false;
            self.grp_fos.visible = true;
        }
        checkGrpStop(isNormal){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.get('hec');
            var opt = hec.getWingOpt();
            self.grp_stop.visible = true;
            self.grp_fos.visible = false;
            self.grp_costDescAuto.visible = !isNormal;
            self.ico_costAuto.source = isNormal?"ico_gold":"ico_yuanbao";
            self.label_costAuto.text = isNormal?opt.comTrain:opt.advTrain;
        }

        _tap_btn_normal(){
            var self = this;
            self.fosOne(true);
        }
        _tap_btn_high(){
            var self = this;
            self.fosOne(false);
        }

        _tap_btn_checkAuto(){
            var self = this;
            self.checkAuto();
        }
        checkAuto(){
            var self = this;
            if(self.btn_checkAuto.selected){
                self.btn_normalAuto.visible = true;
                self.btn_highAuto.visible = true;
                self.btn_normal.visible = false;
                self.btn_high.visible = false;
            }else{
                self.btn_normalAuto.visible = false;
                self.btn_highAuto.visible = false;
                self.btn_normal.visible = true;
                self.btn_high.visible = true;
            }
        }

        //进化
        _tap_btn_evolution(){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.get('hec');
            hec.upWing(function(){
                self.dataChanged();
                self._evoEfxPlayer.play();
            }, self);
        }

        //激活
        _tap_btn_active(){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.get('hec');
            hec.wingActivate(function(){
                self.dataChanged();
            }, self);
        }

        _tap_btn_help(){
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.wingCrit);
            g_base.BaseShowTip.create().setData({id: 12, param1:gameInfo[7]}).show();
            self._tap_btn_stopAuto();
        }

        _tap_ico_str(){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.get('hec');
            var opt = hec.getWingOpt();
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.wingCrit);
            if(opt.wingLvl>=gameInfo[7]){
                RoleWingStr.create().setData({hec: self.data.hec}).show().onClose(function () {
                    self.dataChanged();
                });
                self._tap_btn_stopAuto();
            }else{
                mo.showMsg(gc.id_c_msgCode.wingLevelRequire, gameInfo[7]);
            }
        }

        _tap_btn_keyUpgrade(){
            var self = this;
            RoleWingUpgrade.create().setData({hec: self.data.hec,root:self}).show();
        }

    }
}