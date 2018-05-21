/**
 * Created by Administrator on 2015/9/24.
 */
module g_arena{
    export class ArenaRankItem extends mo.gui.ItemRenderer{
        DS_DATA_KEY;
        label_lvl;
        label_name;
        label_combat;
        label_rank;
        ico_head;
        ico_rank;
        grp_res0;
        grp_res1;

       //@override
       _initProp(){
           var self = this;
           super._initProp();
           self.DS_DATA_KEY = gc.dsConsts.Rank;
       }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
            var KEY = self.DS_DATA_KEY;
            var rank = data[KEY.rank];
            var rankStrs = ["1st", "2nd", "3rd"];

            self.label_name.text = data[KEY.name];
            self.label_lvl.text = data[KEY.lvl];
            //设置对比项目
            self.setRankDesc();
            if(rank<=3){
                self.ico_rank.source = "ico_arena_"+rankStrs[rank-1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }else{
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }
            self.ico_head.setData({icoId:data[KEY.iconId], vip:data[KEY.vip]});
            //设置奖励
            self.seteRankReward(rank);
        }

        seteRankReward(rank){
            var self = this;
            var awards = gd.arenaCtrl.getRankReward(rank);
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, awards[0]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.honor, awards[2]);
        }

        setRankDesc(){
            var self = this;
            var data = self.data;
            self.label_combat.text = data[self.DS_DATA_KEY.combat];
        }
    }
}