/**
 * Created by SmallAiTT on 2015/7/15.
 */

module g_forge {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_forge, "g-forge");
    logger.setLvl("g-forge", 4);

    export var roleChgEmitter:egret.Emitter;
    export var baseBottomBar:g_base.BaseBottomBar;
    export class ForgeScene extends mo.gui.UIScene{
        moduleParam:IModuleParam.Forge;
        show(){
            var self = this;
            super.show();
            g_base.modIdx = 3;

            var layer = g_base.BaseTopRole.create().setData({redType: 1}).show();
            g_forge.roleChgEmitter = layer.emitter;
            layer.hide4thRole(false);

            var fl:any = ForgeLayer.create();
            fl.moduleParam = self.moduleParam;
            fl.show();

            baseBottomBar = g_base.BaseBottomBar.create().show();
        }

        dtor(){
            super.dtor();
            g_forge.roleChgEmitter = null;
        }
    }



    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = ForgeScene;
        moduleCfgItem.onValid(function(moduleParam:IModuleParam.Forge){
            var openLvl, c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            if(moduleParam){
                if(moduleParam.subModuleId == 0){
                    openLvl = c_open[gc.id_c_open.strength][gc.c_open_lvlRequired];
                }else if(moduleParam.subModuleId == 1){
                    openLvl = c_open[gc.id_c_open.star][gc.c_open_lvlRequired];
                }else if(moduleParam.subModuleId == 2){
                    openLvl = c_open[gc.id_c_open.stone][gc.c_open_lvlRequired];
                }
            }
            if((openLvl!=null) && openLvl > gd.userCtrl.getLvl()){
                mo.showMsg(gc.id_c_msgCode.noRoleLvl, openLvl);
                return false;
            }
            return true;
        });
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
    });
}