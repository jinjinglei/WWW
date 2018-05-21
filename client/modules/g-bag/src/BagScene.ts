/**
 * Created by SmallAiTT on 2015/7/15.
 */

module g_bag {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_bag, "g-bag");
    logger.setLvl("g-bag", 4);

    export class BagScene extends mo.gui.UIScene{
        show(){
            super.show();
            g_base.modIdx = 4;

            BagLayer.create().show();
            g_base.BaseBottomBar.create().show();
        }
    }



    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = BagScene;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
    });
}