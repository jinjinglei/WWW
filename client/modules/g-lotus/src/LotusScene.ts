/**
 * Created by Administrator on 2016/1/5.
 */
module g_lotus{
    export class LotusScene extends mo.gui.UIScene {
        show() {
            var self = this;
            super.show();

            LotusLayer.create().setData(self.moduleParam.data).show();
        }
    }
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = LotusScene;
        moduleCfgItem.sysId = gc.id_c_open.expBox;// 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Lotus, cb){
            gd.demonLotusCtrl.getInfo(function(data){
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
}