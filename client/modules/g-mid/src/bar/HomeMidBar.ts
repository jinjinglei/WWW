/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{

    export class HomeMidBar extends mo.gui.MenuLayer{
        moduleParam:IModuleParam.IModuleParam;

        btn_task:mo.gui.UIAsset;
        task_red:mo.gui.UIAsset;

        btn_print:g_comp.EfxAsset;//战印
        btn_recharge:g_comp.EfxAsset;
        btn_fuli:egret.gui.UIAsset; //福利
        fuli_red:egret.gui.UIAsset; //福利
        btn_rank:g_comp.EfxAsset; //琅琊榜
        btn_custom:g_comp.EfxAsset; //琅琊榜
        btn_heart:g_comp.EfxAsset;//心法
        btn_kings_fight:g_comp.EfxAsset;//擂台赛
        exp_red:egret.gui.UIAsset; //莲宝

        _initProp(){
            super._initProp();
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.ChallengeCupCtrl, gd.ChallengeCupCtrl.ON_ACT_END, function(data){
                var isOpen = data[gc.dsConsts.ChallengeCupData.isOpen];
                self.btn_kings_fight.playEffect(isOpen);
                if(!isOpen){//真的结束了才弹出
                    mo.moduleMgr.runModule(g_consts.moduleId.defarenaWinner);
                }
            });
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            var subModuleId = self.moduleParam.subModuleId;
            var param = self.moduleParam.param;
            switch (subModuleId){
                case g_consts.HS_SUBMID_DAILY:
                    self._tap_btn_task();
                    break;
                case g_consts.HS_SUBMID_SIGN:
                    self._tap_btn_fuli();
                    break;
                case g_consts.HS_SUBMID_CUSTOM_LIST:
                    self._tap_btn_custom();
                    break;
                case g_consts.HS_SUBMID_HEART:
                    self._tap_btn_heart();
                    break;
            }
            self._updateKingsFight();
            self._checkRed();
        }

        _checkRed(){
            var self = this;
            self.btn_print.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.medal));
            self.btn_heart.playEffect(false);
            self.task_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.task);
            self.fuli_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.fuli);
            self.btn_custom.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.custom));
            self.exp_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.demonLotus_main);
        }

        //擂台赛
        _updateKingsFight(){
            var self = this;
            gd.challengeCupCtrl.getIsOpen(function(data){
                self.btn_kings_fight.playEffect(gd.challengeCupCtrl.isOpen);
            }, self);
        }

        _tap_btn_kings_fight(){
            var self = this;
            var oldIsOpen = gd.challengeCupCtrl.isOpen;
            gd.challengeCupCtrl.getIsOpen(function(data){
                gd.challengeCupCtrl.isOpen?
                    mo.moduleMgr.runModule(g_consts.moduleId.defArena)
                    :mo.moduleMgr.runModule(g_consts.moduleId.defarenaWinner);
                self.btn_kings_fight.playEffect(gd.challengeCupCtrl.isOpen);
            }, self);
        }

        _tap_btn_task(){
            mo.moduleMgr.runModule(g_consts.moduleId.taskDlg);
        }

        _tap_btn_print(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.medal);
        }
        _tap_btn_heart(){
            mo.moduleMgr.runModule(g_consts.moduleId.heart);
        }

        _tap_btn_recharge(){
            mo.moduleMgr.runModule(g_consts.moduleId.recharge);
        }

        _tap_btn_fuli(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.fuliDlg);
        }

        _tap_btn_expBox(){
            mo.moduleMgr.runModule(g_consts.moduleId.lotus);
        }

        _tap_btn_custom(){
            mo.moduleMgr.runModule(g_consts.moduleId.customList);
        }
    }
}
