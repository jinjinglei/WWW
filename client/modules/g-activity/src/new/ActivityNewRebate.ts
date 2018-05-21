/**
 * Created by admin on 16/4/7.
 */
module g_activity {

    export class ActivityNewRebate extends mo.gui.Dlg {

        list_items:any;
        _Item_list_items;
        head:g_comp.ActivityItem;
        btn_help:egret.gui.Button;
        label_activity_time:egret.gui.Label;
        label_activity_desc:egret.gui.Label;
        label_all_charge:egret.gui.Label;
        actItems;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ActivityNewRebateItem;
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
            self.label_all_charge.text = exActivity[gc.dsConsts.ExActivity.allCost].toString();
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:203}).show();
        }

    }
}