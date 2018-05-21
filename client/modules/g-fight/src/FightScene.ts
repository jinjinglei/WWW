/**
 * Created by SmallAiTT on 2015/7/15.
 */
module g_fight {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_fight, "g-fight");
    logger.setLvl("g-fight", 4);

    export var stack:any[] = [];

    export class FightDlg extends mo.gui.Dlg{
        static show(data){
            var self = this;
            if(mo.moduleMgr.curModule.name == g_consts.moduleId.fight){
                mo.gui.Dlg.show.apply(self, arguments);
                FightDlg.clearCbData();
            }else{
                stack.push([self, data]);
            }
        }

        static cbData;
        static cbTimeoutKey;
        static showCallback(data){
            var self = this;
            FightDlg.cbData = data;
            var leftTime = FightDlg.cbData.begTime - Date.newDate().getTime();
            FightDlg.cbTimeoutKey = egret.setTimeout(function(){
                if(FightDlg.cbData.callback!=null) {
                    FightDlg.cbData.callback.call(FightDlg.cbData.target);
                }
                FightDlg.clearCbData();
            }, null, leftTime);
            self.show(data);
        }

        static clearCbData(){
            egret.clearTimeout(FightDlg.cbTimeoutKey);
            for(var i=0;i<stack.length; ++i){
                if(stack[i][1]==FightDlg.cbData){
                    stack.splice(i, 1);
                    break;
                }
            }
            FightDlg.cbData = null;
        }
    }
    export var baseTopBar;
    export var baseBottomBar;
    export class FightScene extends mo.gui.UIScene{
        moduleParam:IModuleParam.Fight;

        layer;

        show(){
            var self = this;
            super.show();
            g_base.modIdx = 0;

            self.layer = FightLayer.create().show();
            //中间入口按钮
            var layer = g_mid.FightMidBar.create();
            layer.moduleParam = self.moduleParam;
            layer.show();
            //下排按钮
            g_mid.FightBottomBar.create().show();
            while(stack.length){
                var arr = stack.pop();
                if(FightDlg.cbData && arr[1]==FightDlg.cbData){
                    var leftTime = FightDlg.cbData.begTime - Date.newDate().getTime();
                    if(leftTime>0){
                        arr[0].show(arr[1]);
                        FightDlg.clearCbData();
                    }
                }else{
                    arr[0].show(arr[1]);
                }
            }
            baseBottomBar = g_base.BaseBottomBar.create().show();
            baseTopBar = g_base.BaseTopBar.create('FightScene').show();
        }

        onExit(){
            super.onExit();
            baseTopBar = null;
        }

        openSubModule(subModuleId){
            switch (subModuleId){
                case g_consts.FS_SUBMID_SMELT:
                    mo.moduleMgr.runModule(g_consts.moduleId.smelting);
                    break;
                case g_consts.FS_SUBMID_PVP_OUT:
                    //none
                    break;
                case g_consts.FS_SUBMID_CHAT:
                    g_mid.Chat.create().show();
                    break;
            }
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = FightScene;
        mo.moduleMgr.registerModule(moduleCfgItem);

        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            //uw.ServerDataCtrl.initByServer(cb);

            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
            var mapID = copyInfo[gc.t_copy_displayID];
            mo.R.loadTo("mapview","dynamic2/map_" + mapID + "_small.jpg", function(){
                cb();
            });
        });
    });
}