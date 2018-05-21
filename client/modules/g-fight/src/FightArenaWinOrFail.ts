/**
 * Created by Administrator on 2015/10/13.
 */
module g_fight{
    export class FightArenaWinOrFail extends FightDlg{
        btn_back;
        ico_fail;
        ico_win;
        ico_timeout;
        label_myName;
        label_myCombat;
        label_enemyName;
        label_enemyCombat;
        grp_failRank;
        grp_winRank;
        grp_res;
        label_failRank;
        label_winRank;
        label_gold;
        label_sw;
        upWarn;
        ico_myRole;
        ico_enemyRole;

        _initProp(){
            super._initProp();
        }

        _childrenCreated(){
            super._childrenCreated();
            //this.outsideClosable = true;
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var isWin = self.data.isWin;
            var isTimeout = self.data.isTimeout;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;
            var fightType = self.data.fightType;

            //{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,prestige:7,curRank:8,changeRank:9,updateUser:10,updatePkOut:11,updateArena:12}
            self.ico_win.visible = isWin;
            self.grp_winRank.visible = isWin;
            self.ico_fail.visible = !isWin && !isTimeout;
            self.ico_timeout.visible = isTimeout;
            self.grp_failRank.visible = !isWin;
            self.upWarn.visible = !isWin;
            self.label_myName.text = fightResult[gc.dsConsts.FightResult.attackMember][0];
            self.label_myCombat.text = fightResult[gc.dsConsts.FightResult.attackMember][1].toString();
            self.label_enemyName.text = fightResult[gc.dsConsts.FightResult.beAttackMember][0];
            self.label_enemyCombat.text = fightResult[gc.dsConsts.FightResult.beAttackMember][1].toString();
            self.ico_myRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.attackMember][2]);
            self.ico_enemyRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.beAttackMember][2]);
            if(fightType==gc.c_prop.fightTypeKey.challengeCupPk){
                self.grp_winRank.visible = false;
                self.grp_failRank.visible = false;
                self.grp_res.visible = false;
            }else{
                self.label_gold.text = fightResult[gc.dsConsts.FightResult.gold].toString();
                self.label_sw.text = fightResult[gc.dsConsts.FightResult.prestige].toString();
                if(isWin){
                    self.label_winRank.text = fightResult[gc.dsConsts.FightResult.curRank].toString();
                }else{
                    self.label_failRank.text = "竞技场排名"+fightResult[gc.dsConsts.FightResult.curRank];
                }
            }

            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
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
                self.btn_back.label = mo.STR.format("返回(%s)", second.toString());
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_back.label = mo.STR.format("返回(%s)", Math.floor(leftMillisecond/1000).toString());
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self._tap_btn_back();
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }
    }
}