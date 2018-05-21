/**
 * Created by Administrator on 2015/10/23.
 */
module g_fight{
    export class PvpRankRewardCell extends mo.gui.ItemRenderer{
        label_rank;
        grp_res0;
        grp_res1;

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(self.data[gc.c_pvpRankReward_id]==null){
                return;
            }

            if(self.data[gc.c_pvpRankReward_id]>20){
                self.label_rank.size = 18;
            }
            self.label_rank.text = self.data[gc.c_pvpRankReward_name];
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, self.data[gc.c_pvpRankReward_gold]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.starStone, self.data[gc.c_pvpRankReward_starStone]);
        }
    }
}