/**
 * Created by Administrator on 2016/1/9.
 */

module g_worldboss{

    export class WBossList extends mo.gui.Dlg{

        label_call_time:mo.gui.Label;
        list_call:egret.gui.List;
        _Item_list_call;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_call = WBossCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self._refreshBossState);
        }

        _refreshBossState(){
            var self = this;
            gd.bossWorldCtrl.getInfo(function(){
                self.refreshList("list_call");
            }, self);
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:54}).show();
        }

        _data_list_call():any[] {
            var self = this, filter, sorter;
            return gd.bossWorldCtrl.getBossList();
        }

        _click_list_call(event:egret.gui.ListEvent) {
            var self = this;
            var boss = event.item;
            var bossid = boss[gc.c_bossWorld_id];
            if((gd.bossWorldCtrl.getBossStatus(bossid)== gd.BossFightCtrl.BOSS_STATUS.prize)){ //结算中
                return;
            }
            if((gd.bossWorldCtrl.getBossStatus(bossid)== gd.BossFightCtrl.BOSS_STATUS.fighting)){ //挑战中
                return;
            }
            mo.moduleMgr.runModule(g_consts.moduleId.wBossCall, {bossId: bossid});
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = WBossList;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Medal, cb){
            gd.bossWorldCtrl.getInfo(function(){
                cb();
            }, this);
        });
    });
}
