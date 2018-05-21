/**
 * Created by Administrator on 2015/9/24.
 */
module g_arena{
    export class ArenaRank extends g_base.CloseInfoDlg{
        list_rank;
        _Item_list_rank;
        label_myRank;
        grp_res0;
        grp_res1;

        _childrenCreated(){
            super._childrenCreated();
            this.outsideClosable = true;
        }

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_rank = ArenaRankItem;
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var myRank = gd.arenaCtrl.getRank();
            var awards = gd.arenaCtrl.getRankReward(myRank);

            self.label_myRank.text = myRank.toString();
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, awards[0]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.honor, awards[2]);
        }

        dataChanged(){
            super.dataChanged();

        }

        _data_list_rank():any[]{
            var self = this;
            return self.data.rankData;
        }

        _tap_btn_info(){
            var self = this;
            ArenaRankReward.create().show();
        }
    }
}