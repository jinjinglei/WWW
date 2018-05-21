/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewTotalRchgOneDay extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;
        head:g_comp.ActivityItem;
        btn_help:egret.gui.Button;
        label_activity_time:egret.gui.Label;
        label_activity_desc:egret.gui.Label;
        label_all_charge:egret.gui.Label;
        actItems;
        label_left_time;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ActivityNewTotalRchgOneDayItem;
        }

        refresh(){
            var self = this;
            gd.activityCtrl.getInfo(function(data){
                gd.activityCtrl.pushNotify(gd.ActivityCtrl.ACTIVITY_OP, {});
                var activity = gd.activityCtrl.getMainList();
                for(var a in activity){
                    var item = activity[a];
                    var id = item[gc.dsConsts.ExActivity.activity][gc.dsConsts.ActivityEntity.id];
                    if(id == self.data.exActivity[gc.dsConsts.ExActivity.activity][gc.dsConsts.ActivityEntity.id]){
                        self.data.exActivity = item;
                        self.reset();
                        return;
                    }
                }
            });
        }

        reset(){
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;

            if(!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            var today = exActivity[gc.dsConsts.ExActivity.todayRecharge];
            self.label_all_charge.text = today?today:0 + "";
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");

            var left = exActivity[gc.dsConsts.ExActivity.leftTime];
            if(left > 0){
                self.setCDTime(left);
            }
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:212}).show();
        }

        _timeInterval(){
            var self = this;
            self.label_left_time.text = mo.getTimeStr(self.hideLeftMillisecond) + " 后刷新";
        }

        _timeFinish(){
            var self = this;
            self.label_left_time.text = "";
            self.refresh();
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