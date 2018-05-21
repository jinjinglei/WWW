/**
 * Created by Administrator on 2015/10/13.
 */
module g_fight {
    export class FightCopyWinOrFail extends FightDlg {
        btn_ok;
        ico_fail;
        ico_win;
        upWarn;
        list_items;
        _Item_list_items;
        ico_winStar;
        ico_noDieStar;
        ico_timeLmtStar;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            //this.outsideClosable = true;
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var isWin = self.data.isWin;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;

            //{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,prestige:7,curRank:8,changeRank:9,updateUser:10,updatePkOut:11,updateArena:12}
            self.ico_win.visible = isWin;
            self.ico_fail.visible = !isWin;
            self.upWarn.visible = !isWin;
            self.ico_winStar.visible = self.data.isWin;
            self.ico_noDieStar.visible = self.data.noDie;
            self.ico_timeLmtStar.visible = self.data.timeLmt;
            self.list_items.visible = isWin;
            if(isWin){
            }else{
            }

            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        }

        _data_list_items():any[]{
            var self = this;
            return self.data.items;
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
    }
}