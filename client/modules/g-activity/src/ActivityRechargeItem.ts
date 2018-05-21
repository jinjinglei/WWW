/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class ActivityRechargeItem extends mo.gui.ItemRenderer{
        label_desc;
        ico_hasGet;
        btn_get;
        list_items;
        _Item_list_items;
        ico_bg;
        effect_get;

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
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;

            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.rmb]);
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getAllChargeCountStatus(gd.activityCtrl.getActivityValue(exActivity,gc.dsConsts.ActivityEntity.id), self.itemIndex);// 0:已经领取，1：可领取，2:不可领取
            if(status==0){
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
                uiHelper.playUIEffect(self.effect_get, false);
            }else if(status==1){
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, true);
            }else{
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, false);
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));
            self.list_items.height =self.list_items.dataProvider.length>=4?195:95;
            self.ico_bg.height = self.list_items.height+90;
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
            var actItem = self.data;
            var status = gd.activityCtrl.getAllChargeCountStatus(gd.activityCtrl.getActivityValue(exActivity,gc.dsConsts.ActivityEntity.id), self.itemIndex);// 0:已经领取，1：可领取，2:不可领取
            if(status==0){
            }else if(status==1){
            }else{
                return mo.showMsg(gc.id_c_msgCode.totalChargeNotEnough1, actItem[gc.dsConsts.ActivityItem.rmb]);
            }
            gd.activityCtrl.receive(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex, function(){
                self.delegate.reset();
            },self);
        }
    }
}