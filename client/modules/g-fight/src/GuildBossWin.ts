/**
 * Created by Administrator on 2015/12/29.
 */
module g_fight{
    export class GuildBossWin extends FightDlg{
        btn_close;
        label_last;
        label_first;
        label_time;
        label_reward;
        label_damage;
        label_rank;
        ico_rank;
        ico_item;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.ico_item.label_text.visible = false;
            self.ico_item.onClick(function(){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(this.get('itemId'), null)}).show();
            },self.ico_item);
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var result = self.data.result;
            var fec:gd.BossFightEntityCtrl = self.data.fec;

            var bossId = result[gc.dsConsts.BossResult.bossId];
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
            var bossParamInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
            var itemAry;
            if(rank == 1){
                itemAry = bossParamInfo[gc.c_bossParameter_rankAward1][0];
            }else if(rank >=2 && rank<=5){
                itemAry = bossParamInfo[gc.c_bossParameter_rankAward2][0];
            }else if(rank>=6 && rank<=10){
                itemAry = bossParamInfo[gc.c_bossParameter_rankAward3][0];
            }
            if(itemAry){
                self.ico_item.visible = true;
                self.ico_item.setData({itemId:itemAry[0],count:itemAry[1]});
            }else{
                self.ico_item.visible = false;
            }
            self.label_damage.text = result[gc.dsConsts.BossResult.totalHurt];
            self.label_reward.text = result[gc.dsConsts.BossResult.hurtGold];
            self.label_time.text = mo.getTimeStr(result[gc.dsConsts.BossResult.killTotalTime]*1000);
            self.label_first.text = result[gc.dsConsts.BossResult.firstHurtName];
            self.label_last.text = result[gc.dsConsts.BossResult.killUserName];

            //var leftTime = Math.ceil((begTime-egret.getTimer())/1000);
            //self.setCDTime(leftTime);
        }

        _tap_btn_close(){
            //gd.guildCtrl.getInfo(function(){},this);
        }

        onExit(){
            super.onExit();
            var self = this;
            if(self.data.callback!=null){
                self.data.callback.call(self.data.target);
            }
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }
        timeTrigger;
        setCDTime(second){
            var self = this;
            if(second>0){
                if(self.timeTrigger){
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
                self.btn_close.label = mo.STR.format("返回(%s)", second.toString());
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_close.label = mo.STR.format("返回(%s)", Math.floor(leftMillisecond/1000).toString());
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self.close();
        }
    }
}