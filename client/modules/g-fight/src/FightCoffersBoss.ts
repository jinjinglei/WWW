/**
 * Created by Administrator on 2015/10/13.
 */
module g_fight{
    export class FightCoffersBoss extends FightDlg{
        btn_back;
        ico_win;
        ico_timeout;
        grp_res;
        label_ap;
        label_noRob;
        label_gold;
        label_gold2;
        label_hurt;

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
            self.ico_timeout.visible = isTimeout;
            self.grp_res.visible = isWin;
            if(fightResult[gc.dsConsts.FightResult.coffersStatus]==0){
                self.label_gold.text = "+"+fightResult[gc.dsConsts.FightResult.coffersPerson].toString();
                self.label_gold2.text = "+"+fightResult[gc.dsConsts.FightResult.coffersCommon].toString();
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
                self.label_ap.text = "-"+gameInfo[6];
                self.label_noRob.visible = false;
                self.label_hurt.text = ""+fightResult[gc.dsConsts.FightResult.coffersHurt];
            }else{
                self.label_noRob.visible = true;
                self.grp_res.visible = false;
                self.label_ap.text = "-0";
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
            gd.coffersCtrl.getLastEnemyDefeseData(function(defData){
                mo.moduleMgr.runModule(g_consts.moduleId.home, {subModuleId : g_consts.HS_SUBMID_COFFERS_SERVER, defData:defData, page:2});
            },self);
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