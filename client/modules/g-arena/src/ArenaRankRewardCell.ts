/**
 * Created by Administrator on 2015/10/23.
 */
module g_arena{
    export class ArenaRankRewardCell extends mo.gui.ItemRenderer{
        label_rank;
        grp_res0;
        grp_res1;

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(self.data[gc.c_arenaRankReward_id]==null){
                return;
            }

            if(self.data[gc.c_arenaRankReward_id]>8){
                self.label_rank.size = 16;
            }
            self.label_rank.text = self.data[gc.c_arenaRankReward_name];
            var rewardInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_reward, self.data[gc.c_arenaRankReward_rewardId]);
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, rewardInfo[gc.c_reward_gold]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.honor, rewardInfo[gc.c_reward_prestige]);
        }
    }
}