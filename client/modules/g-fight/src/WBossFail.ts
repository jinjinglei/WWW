/**
 * Created by lihex on 3/9/16.
 */
module g_fight{
    export class WBossFail extends FightDlg {
        btn_close;
        label_last;
        label_first;
        label_time;
        label_reward;
        label_damage;
        label_rank;
        ico_rank;
        ico_item;
        grp_reward;
        label_leftHp;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var result = self.data.result;
            var fec:gd.BossFightEntityCtrl = self.data.fec;
            var rank = result[gc.dsConsts.BossResult.myHurtRank];
            self.label_rank.text = rank;
            //失败奖励
            var rewardItems = result[gc.dsConsts.BossResult.items];
            uiHelper.setItemsGrp(self.grp_reward, utils.itemObj2ObjArr(rewardItems));
            self.label_damage.text = result[gc.dsConsts.BossResult.totalHurt];
            self.label_first.text = result[gc.dsConsts.BossResult.firstHurtName];
            self.label_leftHp.text = utils.formatByWan(fec.getCurHp());
        }
    }
}