/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewVplan extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;
        head:g_comp.ActivityItem;
        btn_help:egret.gui.Button;
        label_activity_time:egret.gui.Label;
        label_cost_have:egret.gui.Label;
        actItems;

        btn_source:egret.gui.Button;
        medalType;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ActivityNewVplanItem;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.medalType = 0;
        }

        checkRedPoint(){
            var self = this;
            self.reset();
        }

        updateActivity(){
            var self = this;
            gd.activityCtrl.getInfo(function(){
               self.reset();
            });
        }

        reset(){
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];

            self.setData({"exActivity":gd.activityCtrl.getActivity(activity[gc.dsConsts.ActivityEntity.id])});

            var scroller = (<any>(self.list_items)).scroller;
            var scrollTop = scroller.scrollTop >=0?scroller.scrollTop:0;
            self.refreshList('list_items');
            process.nextTick(function(){
                if(!self.list_items)return;
                scroller.throwVertically(scrollTop,0);
            });
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;

            if(!exActivity)
                return;

            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //活动时间
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));

            //self.label_cost_have.text = gd.userCtrl.getDiamond();
            self.actItems = [];
            var index = 0;

            var items = activity[gc.dsConsts.ActivityEntity.exValues];
            var rewards = activity[gc.dsConsts.ActivityEntity.items];
            for(var key in items){
                var i = items[key] || {};
                var obj = {};
                obj["i"] = i;
                var reward = rewards[index] || {};
                obj["r"] = reward;
                obj["activityId"] = activity[gc.dsConsts.ActivityEntity.id];
                obj["p"] = self;
                obj["itemIndex"] = index;

                self.actItems.push(obj);
                index ++;
            }
            self.refreshList("list_items");


            var tempData = self.actItems[0];
            if( tempData){
                var data = tempData["i"];
                self.medalType = self.getMedalValue(data[0]);
            }
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

        _tap_btn_help(){
            var self = this;
            var helpId :number = self.medalType == 1 ? 227 :228;
            g_base.BaseShowTip.create().setData({id:214}).show();
        }

        _tap_btn_source(){
            var self = this;
            var detailId :number = self.medalType == 1 ? 225 :226;
            g_base.BaseShowTip.create().setData({id:detailId}).show();
        }

        getMedalValue(id):number{
            var medalArray = [10500,10490];
            for(var i = 0; i < medalArray.length;i++){
                if(id == medalArray[i]){
                    return i+1;
                }
            }
            return 0;
        }

    }
}