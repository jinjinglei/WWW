/**
 * Created by Administrator on 2015/10/13.
 */
module g_fight {
    export class FightPKWinOrFail extends FightDlg {
        btn_ok;
        ico_fail;
        ico_win;
        ico_timeout;
        label_failPkValue;
        label_winPkValue;
        label_myRank;
        label_gold;
        label_exp;
        list_items;
        _Item_list_items;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            super._childrenCreated();
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var isWin = self.data.isWin;
            var isTimeout = self.data.isTimeout;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;

            //{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,prestige:7,curRank:8,changeRank:9,updateUser:10,updatePkOut:11,updateArena:12}
            self.ico_win.visible = isWin;
            self.label_winPkValue.visible = isWin;
            self.ico_fail.visible = !isWin && !isTimeout;
            self.ico_timeout.visible = isTimeout;
            self.label_failPkValue.visible = !isWin;
            self.label_myRank.text = fightResult[gc.dsConsts.FightResult.curRank];
            self.label_gold.text = fightResult[gc.dsConsts.FightResult.gold];
            self.label_exp.text = fightResult[gc.dsConsts.FightResult.expc];
            if(isWin){
                self.label_winPkValue.text = fightResult[gc.dsConsts.FightResult.killValue];
            }else{
                self.label_failPkValue.text = fightResult[gc.dsConsts.FightResult.killValue];
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
                self.btn_ok.label = mo.STR.format("确定(%s)", second.toString());
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_ok.label = mo.STR.format("确定(%s)", Math.floor(leftMillisecond/1000).toString());
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self._tap_btn_ok();
        }

        _tap_btn_ok(){
            var self = this;
            self.close();
        }

        _data_list_items():any[]{
            var self = this;
            return utils.itemObj2ObjArr(self.data.fightResult[gc.dsConsts.FightResult.items]);
        }
    }
}