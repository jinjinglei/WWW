/**
 * Created by admin on 16/4/14.
 */
module g_fight {
    export class FightTreasureItem extends mo.gui.ItemRenderer {

        ico_item;
        label_time;

        _initProp(){
            super._initProp();
            var self = this;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.ico_item.onClick(function(data){

            });
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            self._reset();
        }

        _reset(){
            var self = this;
            var data = self.data;
            var treasure = data['t'];
            var obj = data['o'];
            self.ico_item.setData({itemId:treasure[gc.t_treasure_id] , count: 1});
            self.cleanCDTime();
            if(obj[gc.dsConsts.TreasureInfo.status] == 0){
                self.label_time.visible = false;
            }else if(obj[gc.dsConsts.TreasureInfo.status] == 1){
                self.label_time.visible = true;
                self._resetTime(obj[gc.dsConsts.TreasureInfo.openTime]);
            }else if(obj[gc.dsConsts.TreasureInfo.status] == 2){
                //已经解锁
                self.label_time.visible = true;
                self.label_time.text= mo.STR.format("[ubb color=#3AF5AA]%s[/ubb]","已解锁");
            }
        }

        _resetTime(lastStartTime){
            var self = this;
            var ls = new Date(lastStartTime);
            var lt = ls.getSecondsBetween(Date.newDate());
            self.setCDTime(self.data['t'][gc.t_treasure_guardTime] - lt);
        }

        _timeInterval(){
            var self = this;
            self.label_time.text = mo.getTimeStr(self.hideLeftMillisecond);
        }

        _timeFinish(){
            var self = this;
            self.label_time.text = "已解锁";
        }

        timeTrigger;
        hideLeftMillisecond = -1;
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
            }
        }
        cleanCDTime(){
            var self = this;
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.hideLeftMillisecond = endTime1 - now;
            if (self.hideLeftMillisecond < 0) self.hideLeftMillisecond = 0;
            self._timeInterval();
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self.hideLeftMillisecond = -1;
            self._timeFinish();
        }
    }
}