/**
 * Created by Administrator on 2016/1/5.
 */
module g_coffers{
    export class CoffersScene extends mo.gui.UIScene {
        show() {
            var self = this;
            super.show();

            CoffersLayer.create().setData(self.moduleParam.data).show();
        }
    }
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = CoffersScene;
        moduleCfgItem.sysId = gc.id_c_open.coffers;// 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.coffersCtrl.getInfo(function(data){
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
}