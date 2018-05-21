/**
 * Created by Administrator on 2015/12/22.
 */
module g_worldboss{
    export class WorldBossHurtList extends mo.gui.Dlg{
        moduleParam:IModuleParam.WorldBoss;

        list_items:egret.gui.List;
        _Item_list_items;
        hurt_data:any[];

        label_my_hurt:egret.gui.Label;
        label_my_index:egret.gui.Label;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = WorldBossHurtCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);

            fec.getHurtRankList(function(data){
                self.hurt_data = data;
                self.refreshList("list_items");
            },self);
            self.label_my_hurt.text = mo.STR.format("输出伤害:%s",utils.formatByWan(fec.getMyHurt()));
            self.label_my_index.text ="我的排名:"+fec.getMyRank();
        }

        dataChanged() {
            super.dataChanged();

        }

        _data_list_items():any[]{
            var self = this;
            return self.hurt_data;
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = WorldBossHurtList;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}