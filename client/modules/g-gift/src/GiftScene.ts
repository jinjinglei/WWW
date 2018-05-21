/**
 * Created by SmallAiTT on 2015/7/15.
 */

module g_gift {
    export var roleChgEmitter:egret.Emitter;
    export class GiftScene extends mo.gui.UIScene{
        show(){
            var self = this;
            super.show();
            g_base.modIdx = 3;

            var layer = g_base.BaseTopRole.create().setData({redType: 2}).show();
            layer.hideCombat();
            roleChgEmitter = layer.emitter;

            var fl:any = GiftLayer.create();
            fl.show();
        }

        dtor(){
            super.dtor();
            roleChgEmitter = null;
        }
    }



    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GiftScene;
        moduleCfgItem.sysId = gc.id_c_open.openTrump;// 系统id
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
    });
}