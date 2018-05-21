/**
 * Created by lihex on 3/9/16.
 */
module g_fight{
    export class WBossWin extends FightDlg {
        btn_close;
        label_last;
        label_first;
        label_time;
        label_reward;
        label_damage;
        label_rank;
        ico_rank;
        ico_item;

        grp_rankReward:egret.gui.Group;
        grp_killReward:egret.gui.Group;
        img_killReward:egret.gui.UIAsset;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var result = self.data.result;
            var fec:gd.BossFightEntityCtrl = self.data.fec;
            var bossId = result[gc.dsConsts.BossResult.bossId];
            var ranRewardItems = result[gc.dsConsts.BossResult.items];
            //排名
            var rank = result[gc.dsConsts.BossResult.myHurtRank];
            if(rank<=3){
                var rankStrs = ["1st", "2nd", "3rd"];
                self.ico_rank.source = "ico_arena_"+rankStrs[rank-1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }else{
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }
            //排行奖励
            uiHelper.setItemsGrp(self.grp_rankReward, utils.itemObj2ObjArr(ranRewardItems));
            //击杀奖励
            var killUserName = result[gc.dsConsts.BossResult.killUserName];
            var lastKillerIsMe = killUserName == gd.userCtrl.getName();
            self.grp_killReward.visible = lastKillerIsMe;
            self.img_killReward.visible = lastKillerIsMe;
            if(lastKillerIsMe){
                var boss_data = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
                var c_last = boss_data[gc.c_bossWorld_lastShotAward];
                c_last.push(boss_data[gc.c_bossWorld_treasureAward]);
                uiHelper.setItemsGrp(self.grp_killReward, utils.kvArrItems2ObjArr(c_last));
            }
            //累计伤害
            self.label_damage.text = result[gc.dsConsts.BossResult.totalHurt];
            self.label_first.text = result[gc.dsConsts.BossResult.firstHurtName];
            self.label_last.text = result[gc.dsConsts.BossResult.killUserName];
            self.label_time.text = mo.getTimeStr(result[gc.dsConsts.BossResult.killTotalTime]*1000);
        }
    }
}