/**
 * Created by Administrator on 2016/1/5.
 */
module g_heart{
    export class HeartScene extends mo.gui.UIScene {
        show() {
            var self = this;
            super.show();

            HeartLayer.create().setData(self.moduleParam.data).show();
        }
    }
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = HeartScene;
        moduleCfgItem.sysId = gc.id_c_open.heartStunt1;// 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.heartStuntCtrl.getInfo(function(data){
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
}