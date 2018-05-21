/**
 * Created by SmallAiTT on 2015/7/15.
 */

module g_role {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_role, "g-role");
    logger.setLvl("g-role", 4);

    export var roleChgEmitter:egret.Emitter;
    export var baseBottomBar:g_base.BaseBottomBar;
    export var baseTopRole:g_base.BaseTopRole;

    export class RoleScene extends mo.gui.UIScene{
        moduleParam:IModuleParam.Role;
        show(){
            var self = this;
            super.show();

            var layer = g_role.baseTopRole = g_base.BaseTopRole.create().show();
            g_role.roleChgEmitter = layer.emitter;

            var rl = RoleLayer.create();
            rl.moduleParam = self.moduleParam;
            rl.show();

            baseBottomBar = g_base.BaseBottomBar.create().show();
        }

        dtor(){
            super.dtor();
            g_role.roleChgEmitter  = null;
        }
    }



    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RoleScene;
        moduleCfgItem.onValid(function(moduleParam:IModuleParam.Role){
            var openLvl, c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            if(moduleParam && moduleParam.subModuleId == 3){
                openLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
            }
            if((openLvl!=null) && openLvl > gd.userCtrl.getLvl()){
                mo.showMsg(gc.id_c_msgCode.noRoleLvl, openLvl);
                return false;
            }
            g_base.modIdx = 2;
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