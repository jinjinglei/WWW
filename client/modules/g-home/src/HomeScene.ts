/**
 * Created by SmallAiTT on 2015/7/15.
 */

module g_home {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_home, "g-home");
    logger.setLvl("g-home", 4);

    export class HomeScene extends mo.gui.UIScene{
        moduleParam:IModuleParam.Home;

        show(){
            var self = this;
            super.show();
            g_base.modIdx = 1;

            // 显示背景
            var layer = HomeBg.create();
            layer.moduleParam = self.moduleParam;
            layer.show();
            g_mid.HomeMidBar.create().show();
            //下排按钮
            var bar = g_mid.HomeBottomBar.create();
            bar.moduleParam = self.moduleParam;
            bar.show();
            //中间聊天层
            g_mid.BaseMidBar.create().show();

            g_base.BaseBottomBar.create().show();
            g_base.BaseTopBar.create('HomeScene').show();
        }

        openSubModule(subModuleId,moduleParam){
            var self = this;
            switch (subModuleId){
                case g_consts.HS_SUBMID_DAILY:
                    mo.moduleMgr.runModule(g_consts.moduleId.taskDlg);
                    break;
                case g_consts.HS_SUBMID_SIGN:
                    mo.moduleMgr.runModule(g_consts.moduleId.fuliDlg);
                    break;
                case g_consts.HS_SUBMID_VIP_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.vipCopy, self.moduleParam);
                    break;
                case g_consts.HS_SUBMID_EQUIP_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.equipCopy);
                    break;
                case g_consts.HS_SUBMID_BOSS_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.bossCopy);
                    break;
                case g_consts.HS_SUBMID_STATE_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.stateCopy);
                    break;
                case g_consts.HS_SUBMID_ARENA_SHOP:
                    mo.moduleMgr.runModule(g_consts.moduleId.arenaShop);
                    break;
                case g_consts.HS_SUBMID_ARENA:
                    mo.moduleMgr.runModule(g_consts.moduleId.arena);
                    break;
                case g_consts.HS_SUBMID_GUILD:
                    gd.guildCtrl.getInfo(function(data){
                        var isGuild = data[0];
                        if(!isGuild){
                            mo.moduleMgr.runModule(g_consts.moduleId.guildListLayer);
                        }else{
                            mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer, moduleParam);
                        }
                    },self);
                    break;
                case g_consts.HS_SUBMID_KING:
                    mo.moduleMgr.runModule(g_consts.moduleId.king);
                    break;
                case g_consts.HS_SUBMID_COFFERS_SERVER:
                    mo.moduleMgr.runModule(g_consts.moduleId.coffersServer, moduleParam);
                    break;
                case g_consts.HS_SUBMID_GUILD_COPY_BOSS:
                    mo.moduleMgr.runModule(g_consts.moduleId.guildCopyBoss, {section: moduleParam["section"]});
                    break;
                case g_consts.HS_SUBMID_TOWER:
                    mo.moduleMgr.runModule(g_consts.moduleId.tower);
                    break;
                case g_consts.HS_SUBMID_HEART:
                    mo.moduleMgr.runModule(g_consts.moduleId.heart);
                    break;
            }
        }
    }



    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = HomeScene;
        moduleCfgItem.onValid(function(moduleParam:IModuleParam.Home){
            var openLvl, c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            if(moduleParam && moduleParam.subModuleId == 0){
                openLvl = c_open[gc.id_c_open.equipCopy][gc.c_open_lvlRequired];
            }else if(moduleParam && moduleParam.subModuleId == 1){
                openLvl = c_open[gc.id_c_open.bossCopy][gc.c_open_lvlRequired];
            }else if(moduleParam && moduleParam.subModuleId == 2){
                openLvl = c_open[gc.id_c_open.reamCopy][gc.c_open_lvlRequired];
            }else if(moduleParam && moduleParam.subModuleId == 3){
                openLvl = c_open[gc.id_c_open.stoneShop][gc.c_open_lvlRequired];
            }else if(moduleParam && moduleParam.subModuleId == 4){
                openLvl = c_open[gc.id_c_open.arena][gc.c_open_lvlRequired];
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
