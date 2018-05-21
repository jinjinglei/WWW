/**
 * Created by Administrator on 2015/9/24.
 */
module g_defarena{
    export class DefArenaRank extends g_base.CloseInfoDlg{
        list_rank;
        _Item_list_rank;
        grp_res0;
        grp_res1;
        grp_res2;
        label_noRank;
        label_noFight;
        label_myTime;
        label_myRank;
        grp_hasRank;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_rank = DefArenaRankItem;
            mo.closeEmitter.on("DefarenaWinner", self.close, self);
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var myRank = gd.challengeCupCtrl.getMyRank();
            var hasRank = myRank != null;
            self.label_noRank.visible = !hasRank;
            self.label_noFight.visible = !hasRank;
            self.label_myRank.visible = hasRank;
            self.label_myTime.visible = hasRank;
            self.grp_hasRank.visible = hasRank;
            if(hasRank){
                self.label_myRank.text = myRank[gc.dsConsts.ChampionDurationTimeRank.rank];
                self.label_myTime.text = mo.getTimeStr(myRank[gc.dsConsts.ChampionDurationTimeRank.durationTime]*1000, true);
                var awards = gd.challengeCupCtrl.getRankReward(myRank[gc.dsConsts.ChampionDurationTimeRank.rank]);
                uiHelper.setResGrp(self.grp_res0, awards[0][0], awards[0][1]);
                uiHelper.setResGrp(self.grp_res1, awards[1][0], awards[1][1]);
                if(awards[2]){
                    uiHelper.setResGrp(self.grp_res2, awards[2][0], awards[2][1]);
                    self.grp_res2.visible = true;
                }else{
                    self.grp_res2.visible = false;
                }

            }


        }

        _data_list_rank():any[]{
            var self = this;
            return self.data.rankData;
        }
    }
}