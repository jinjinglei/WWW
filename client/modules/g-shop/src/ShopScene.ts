/**
 * Created by SmallAiTT on 2015/7/15.
 */

module g_shop {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_shop, "g-shop");
    logger.setLvl("g-shop", 4);

    export class ShopScene extends mo.gui.UIScene{
        moduleParam:IModuleParam.Shop;

        show(){
            var self = this;
            super.show();
            g_base.modIdx = 5;

            gd.shopCtrl.getList(gc.c_prop.shopTypeKey.equip,function(itemList){
                var layer = ShopLayer2.create();
                layer.moduleParam = self.moduleParam;
                layer.setData({itemList:itemList, type:gc.c_prop.shopTypeKey.equip}).show();
            },self);
            g_base.BaseBottomBar.create().show();
        }
    }



    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = ShopScene;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
    });
}