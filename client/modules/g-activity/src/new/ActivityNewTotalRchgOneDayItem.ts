/**
 * Created by admin on 16/2/24.
 */
module g_activity{
    export class ActivityNewTotalRchgOneDayItem extends mo.gui.ItemRenderer{

        label_desc;
        ico_hasGet;
        ico_unfinished;
        ico_finished;
        btn_get;
        list_items;
        _Item_list_items;
        ico_bg;
        ico_sel;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;

            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.rmb]);
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getDayRechargeStatus(gd.activityCtrl.getActivityValue(exActivity,gc.dsConsts.ActivityEntity.id), self.itemIndex);// 0:已经领取，1：可领取，2:不可领取

            if(status == 1){
                // 已经领取
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = true;
                self.ico_unfinished.visible = false;
                self.ico_finished.visible = false;
            }else if(status == 2){
                //未达到
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = false;
                self.ico_unfinished.visible = true;
                self.ico_finished.visible = false;
            }else{
                //未领取
                self.ico_sel.visible = true;
                self.ico_hasGet.visible = false;
                self.ico_unfinished.visible = false;
                self.ico_finished.visible = true;
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));

            var row:number = Math.ceil(self.list_items.dataProvider.length/4);
            self.list_items.height = row == 1 ? 95 : 95*row +5*(row -1);
            self.ico_bg.height = self.list_items.height+ 75 ;
        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }

    }
}