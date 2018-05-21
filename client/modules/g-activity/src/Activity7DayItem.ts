/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class Activity7DayItem extends mo.gui.ItemRenderer{
        label_desc;
        ico_hasGet;
        btn_get;
        list_items;
        _Item_list_items;
        //itemList;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        }


        dataChanged(){
            super.dataChanged();
            var self = this;
            var actItem = self.data;

            self.label_desc.text = mo.STR.format("累计登录%s天", self.itemIndex+1);
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getSevenLoginStatus(self.itemIndex);// 0:已经领取，1：可领取，2:不可领取
            if(status==0){
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
            }else if(status==1){
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                self.btn_get.enabled = true;
            }else{
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                self.btn_get.enabled = false;
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));
        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }

        //_data_list_items():any[]{
        //    var self = this;
        //    return utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]);
        //}
        _tap_btn_get(){
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            gd.activityCtrl.receive(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex, function(){
                self.delegate.reset();
            },self);
        }
    }
}