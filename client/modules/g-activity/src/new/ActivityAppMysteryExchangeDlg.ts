/**
 * Created by Administrator on 2016/6/4.
 */
module g_activity {
    export class ActivityAppMysteryExchangeDlg extends mo.gui.Dlg {
        label_score;
        _Item_list_items;
        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ActivityAppExchangeCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;

            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var scores = gd.activityCtrl.getMysterShopArr(activity[gc.dsConsts.ActivityEntity.id], activity[gc.dsConsts.ActivityEntity.startTime], activity[gc.dsConsts.ActivityEntity.endTime]);
            self.label_score.text = scores[0];
        }

        _data_list_items():any[]{
            var self = this;
            var exActivity = self.data.exActivity;
            var index = self.data.index;

            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var shopInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_mysterShop, activity[gc.dsConsts.ActivityEntity.exValues][0]);
            var items = shopInfo[gc.c_mysterShop_integralItem1];

            if(index==0){
                items = shopInfo[gc.c_mysterShop_integralItem1];
            }else if(index==1){
                items = shopInfo[gc.c_mysterShop_integralItem2];
            }else if(index==2){
                items = shopInfo[gc.c_mysterShop_integralItem3];
            }

            return items;
        }

    }
}