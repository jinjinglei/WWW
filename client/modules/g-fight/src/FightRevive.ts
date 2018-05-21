/**
 * Created by Administrator on 2015/10/13.
 */
module g_fight{
    export class FightRevive extends FightDlg{
        btn_ok;

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
            var begTime = self.data.begTime;

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
    }
}