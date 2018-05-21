/**
 * Created by Administrator on 2015/12/22.
 */
module g_worldboss{
    export class WBossReward extends mo.gui.Dlg{
        moduleParam:IModuleParam.WorldBoss;

        grp_lastAttkItems:egret.gui.Group;
        label_hurt:egret.gui.Label;

        list_items:egret.gui.List;
        _Item_list_items;
        list_failItems:egret.gui.List;
        _Item_list_failItems;

        tab_btn;
        grp_fail;
        grp_win;

        _initProp() {
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;

            self._Item_list_items = WBossRewardItem;
            self._Item_list_failItems = WBossRewardItem;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var bossId = self.moduleParam.bossId;
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);
            var c_data = c_bossWorld[bossId];
            var c_last = c_data[gc.c_bossWorld_lastShotAward];
            c_last.push(c_data[gc.c_bossWorld_treasureAward]);
            uiHelper.setItemsGrp(self.grp_lastAttkItems, utils.kvArrItems2ObjArr(c_last));
            self.grp_win.visible = true;
            self.grp_fail.visible = false;
        }

        _tap_tab_btn() {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            self.grp_win.visible = selectedIndex==0;
            self.grp_fail.visible = selectedIndex!=0;
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:55}).show();
        }

        _data_list_items():any[] {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            //是否已击杀
            var killed = stats == gd.BossFightCtrl.BOSS_STATUS.cd;
            if(killed){
                bossId = gd.bossWorldCtrl.getDeathBossId(bossId);
            }
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);
            var c_data = c_bossWorld[bossId];
            return [
                ["1", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward1])],
                ["2", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward2])],
                ["3", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward3])],
                ["4-10", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward4])],
                ["11-50", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward5])],
                ["51-200", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward6])],
                ["201-1000", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward7])]
            ];
        }

        _data_list_failItems():any[]{
            var self = this;
            var bossId = self.moduleParam.bossId;
            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            //是否已击杀
            var killed = stats == gd.BossFightCtrl.BOSS_STATUS.cd;
            if(killed){
                bossId = gd.bossWorldCtrl.getDeathBossId(bossId);
            }
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);
            var c_data = c_bossWorld[bossId];
            return [
                ["1", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward1])],
                ["2", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward2])],
                ["3", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward3])],
                ["4-10", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward4])],
                ["11-50", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward5])],
                ["51-200", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward6])],
                ["201-1000", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward7])]
            ];
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = WBossReward;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}