/**
 * Created by Administrator on 2015/10/13.
 */
module g_fight{
    export class FightUpWarn extends mo.gui.Comp{


        _tap_btn_star(){
            mo.moduleMgr.runModule(g_consts.moduleId.forge, {subModuleId : 1});
        }
        _tap_btn_stone(){
            mo.moduleMgr.runModule(g_consts.moduleId.forge, {subModuleId : 2});
        }
        _tap_btn_wing(){
            mo.moduleMgr.runModule(g_consts.moduleId.role, {subModuleId : 3});
        }
        _tap_btn_equip(){
            mo.moduleMgr.runModule(g_consts.moduleId.home, {subModuleId : 0});
        }

    }
}