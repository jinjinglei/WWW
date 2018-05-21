/**
 * Created by Administrator on 2016/3/28.
 */
module g_coffers {
    export class CoffersRob extends mo.gui.Dlg {
        label_coffer;
        label_rate;
        label_cannotRob;
        label_failCount;
        grp_canRob;
        label_robCount;
        label_name;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//gc.dsConsts.ExDefenceData
            var isCanRob = data[gc.dsConsts.ExDefenceData.isCanLoot];

            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
            var per = 100-gameInfo[0]/100;
            self.label_cannotRob.text = per;
            self.label_failCount.text = data[gc.dsConsts.ExDefenceData.breakNum];
            self.label_coffer.text = utils.formatByWan2(data[gc.dsConsts.ExDefenceData.curResource]);
            self.label_rate.text = data[gc.dsConsts.ExDefenceData.lootRate];
            self.label_robCount.text = [gameInfo[7]-data[gc.dsConsts.ExDefenceData.todayLootNum], gameInfo[7]];
            self.grp_canRob.visible = isCanRob;
            self.label_cannotRob.visible = !isCanRob;
            self.label_name.text  = data[gc.dsConsts.ExDefenceData.serverName];
        }

        _tap_btn_rob(){
            var self = this;
            var data = self.data;//gc.dsConsts.ExDefenceData
            gd.coffersCtrl.fightCoffersStart(data[gc.dsConsts.ExDefenceData.serverId], function(){}, self);
        }
        _tap_btn_help(){
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
            var per = 100-gameInfo[0]/100;
            g_base.BaseShowTip.create().setData({id:60,param1:per+"%"}).show();
        }
    }
}