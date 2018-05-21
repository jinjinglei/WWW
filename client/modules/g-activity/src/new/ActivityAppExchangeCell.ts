/**
 * Created by Administrator on 2016/6/4.
 */
module g_activity {
    export class ActivityAppExchangeCell extends mo.gui.ItemRenderer {
        ico_item;
        //label_item;
        label_score;


        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var data = self.data;//id,num,score;

            var itemId = data[0];
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);

            self.ico_item.setData({itemId: itemId, count: data[1]});
            //self.label_item.text = itemInfo[gc.t_item_name];
            self.label_score.text = data[2];
        }

        _tap_btn_exchange(){
            var self = this;
            var index = self.delegate.data.index;
            var exActivity = self.delegate.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), index+","+self.itemIndex, function () {
                self.dataChanged();
                self.delegate.dataChanged();
            }, self);
        }
    }
}