/**
 * Created by Administrator on 2015/12/22.
 */
module g_worldboss{
    export class GuildBossReward extends mo.gui.Dlg{
        moduleParam:IModuleParam.WorldBoss;

        item0:g_comp.BossRewardPanel;
        item1:g_comp.BossRewardPanel;
        item2:g_comp.BossRewardPanel;
        item3:g_comp.BossRewardPanel;
        item4:g_comp.BossRewardPanel;
        item5:g_comp.BossRewardPanel;
        item6:g_comp.BossRewardPanel;
        label_hurt:egret.gui.Label;

        _initProp() {
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.item0.label_index.text = "第1名:";
            self.item1.label_index.text = "第2-5名:";
            self.item2.label_index.text = "第6-10名:";
            self.item3.label_index.text = "第11-20名:";
            self.item4.label_index.text = "召唤奖:";
            self.item5.label_index.text = "行会奖:";
            self.item6.label_index.text = "最后一击:";
            self.item4.label_index.textColor = 0xEFB037;
            self.item5.label_index.textColor = 0xEFB037;
            self.item6.label_index.textColor = 0xEFB037;
            self.label_hurt.text = mo.STR.format("%s伤害/金币",10000/mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[4]);

            if(self.moduleParam){
                self.setData(self.moduleParam);
            }
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:26}).show();
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var bossId = self.moduleParam.bossId;
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_data = c_bossParameter[bossId];

            self.item0.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_rankAward1]));
            self.item1.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_rankAward2]));
            self.item2.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_rankAward3]));
            self.item3.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_rankAward4]));
            self.item4.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_summonAward]));
            self.item5.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_guildAward]));
            self.item6.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_lastShotAward]));
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = GuildBossReward;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}