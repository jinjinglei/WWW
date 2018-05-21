/**
 * Created by Administrator on 2015/10/23.
 */
module g_defarena{
    export class DefArenaRankRewardCell extends mo.gui.ItemRenderer{
        label_rank;
        ico_rank;
        grp_res0;
        grp_res1;
        grp_res2;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(self.data[gc.c_challengeCupRankReward_id]==null){
                return;
            }

            var rank = self.data[gc.c_challengeCupRankReward_id];
            var rankStrs = ["1st", "2nd", "3rd"];

            if(rank<=3){
                self.ico_rank.source = "ico_arena_"+rankStrs[rank-1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }else{
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }

            if(self.data[gc.c_challengeCupRankReward_id]>8){
                self.label_rank.size = 16;
            }else{
                self.label_rank.size = 20;
            }
            self.label_rank.text = self.data[gc.c_challengeCupRankReward_name];
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, self.data[gc.c_challengeCupRankReward_gold]);
            var itemInfo = self.data[gc.c_challengeCupRankReward_reward];
            uiHelper.setResGrp(self.grp_res1, itemInfo[0][0], itemInfo[0][1]);
            if(itemInfo[1]){
                uiHelper.setResGrp(self.grp_res2, itemInfo[1][0], itemInfo[1][1]);
                self.grp_res2.visible = true;
            }else{
                self.grp_res2.visible = false;
            }
        }
    }
}