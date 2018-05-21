/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewCollectCharacter extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;
        head:g_comp.ActivityItem;
        btn_help:egret.gui.Button;
        label_activity_time:egret.gui.Label;
        label_activity_desc:egret.gui.Label;
        label_cost_have:egret.gui.Label;
        actItems;

        btn_source:egret.gui.Button;
        subType;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ActivityNewCollectCharacterItem;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
            self.subType = 0;
        }

        checkRedPoint(){
            var self = this;
            self.reset();
        }

        updateActivity(){
            var self = this;

            var scroller = (<any>(self.list_items)).scroller;
            var scrollTop = scroller.scrollTop >=0?scroller.scrollTop:0;
            self.refreshList('list_items');
            process.nextTick(function(){
                if(!self.list_items)return;
                scroller.throwVertically(scrollTop,0);
            });

            //gd.activityCtrl.getInfo(function(){
            //   self.reset();
            //});
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
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            //self.label_cost_have.text = gd.userCtrl.getDiamond();

            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;
            self.subType = parseInt(subType);

            self.actItems = [];
            var index = 0;
            var items = activity[gc.dsConsts.ActivityEntity.exValues];
            var rewards = activity[gc.dsConsts.ActivityEntity.items];
            for(var key in items){
                var i = items[key] || {};
                var obj = {};
                obj["i"] = i;
                obj["c"] = gd.activityCtrl.getSetTheWordCount(activity[gc.dsConsts.ActivityEntity.id],index);
                var reward = rewards[index] || {};
                obj["r"] = reward;
                obj["activityId"] = activity[gc.dsConsts.ActivityEntity.id];
                obj["p"] = self;
                obj["index"] = index;
                self.actItems.push(obj);
                index ++;
            }
            self.refreshList("list_items");
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

        _tap_btn_help(){
            var self = this;
            var helpType = 214;
            if(self.subType <=1 ){
                helpType = self.subType == 1 ? 214:216;
            }
            else{
                helpType = self.subType;
            }

            g_base.BaseShowTip.create().setData({id:helpType}).show();
        }

        _tap_btn_source(){
            var self = this;
            var showType = 215;
            if(self.subType <=1 ){
                showType = self.subType == 1 ? 215:217;
            }
            else{
                showType = self.subType+1;
            }
            g_base.BaseShowTip.create().setData({id:showType}).show();
        }

    }
}