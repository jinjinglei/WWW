/**
 * Created by Administrator on 2016/1/6.
 */
module g_red{
    export class RedPacketSystem extends mo.gui.Dlg{

        dataChanged(){
            super.dataChanged();

        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RedPacketSystem;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            //gd.taskCtrl.getInfo(function() {
            cb();
            //}, this);
        });
    });
}