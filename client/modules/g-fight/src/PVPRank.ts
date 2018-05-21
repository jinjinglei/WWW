/**
 * Created by Administrator on 2015/9/24.
 */
module g_fight{
    export class PVPRank extends g_base.CloseInfoDlg{
        list_rank;
        _Item_list_rank;
        label_myRank;
        label_myKillValue;
        grp_res0;
        grp_res1;
        btn_challengeLog;
        ico_red;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            this.outsideClosable = true;
            self.checkRedPoint();
        }

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_rank = PVPRankItem;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), this.checkRedPoint);
        }

        onEnter(){
            super.onEnter();
            var self = this;

            var myKillValue = gd.pkOutCtrl.getKillValue();


            self.label_myKillValue.text = myKillValue.toString();

            gd.pkOutCtrl.getMyRank(function(myRank){
                self.label_myRank.text = myRank.toString();
                var awards = gd.pkOutCtrl.getRankAward(myRank);
                uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, awards[1]);
                uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.starStone, awards[0]);

            },self);
        }

        dataChanged(){
            super.dataChanged();

        }

        checkRedPoint(){
            this.ico_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.rankPk);
        }

        _data_list_rank():any[]{
            var self = this;
            return self.data.rankData;
        }

        _tap_btn_info(){
            var self = this;
            PvpRankReward.create().show();
        }

        _tap_btn_challengeLog(){
            gd.pkOutCtrl.getRankPkRecordList(function(data){
                ChallengeLog.create().setData({logData:data}).show();
            }, this);
            gd.pkOutCtrl.setRankPkNewDeal(false);
        }
    }
}