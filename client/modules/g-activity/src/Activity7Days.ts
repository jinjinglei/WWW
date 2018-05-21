/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class Activity7Days extends mo.gui.Layer{
        label_title;
        label_date;
        label_desc;
        list_items;
        _Item_list_items;

        actItems;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = Activity7DayItem;
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

            self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            uiHelper.setEventTime(self.label_date, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }
    }
}