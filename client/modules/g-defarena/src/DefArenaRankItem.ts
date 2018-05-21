/**
 * Created by Administrator on 2015/9/24.
 */
module g_defarena{
    export class DefArenaRankItem extends g_arena.ArenaRankItem{
        DS_DATA_KEY;
        label_combat;
        label_title;
        grp_res0;
        grp_res1;
        grp_res2;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.DS_DATA_KEY = gc.dsConsts.ChampionDurationTimeRank;
        }

        //@override
        seteRankReward(rank){
            var self = this;
            var awards = gd.challengeCupCtrl.getRankReward(rank);
            uiHelper.setResGrp(self.grp_res0, awards[0][0], awards[0][1]);
            uiHelper.setResGrp(self.grp_res1, awards[1][0], awards[1][1]);
            if(awards[2]){
                uiHelper.setResGrp(self.grp_res2, awards[2][0], awards[2][1]);
                self.grp_res2.visible = true;
            }else{
                self.grp_res2.visible = false;
            }
        }

        //@override
        setRankDesc(){
            var self = this;
            var data = self.data;
            var KEY = self.DS_DATA_KEY;
            self.label_title.text = "守擂最长时间";
            self.label_combat.text = mo.getTimeStr(data[KEY.durationTime] * 1000, true);
        }
    }
}