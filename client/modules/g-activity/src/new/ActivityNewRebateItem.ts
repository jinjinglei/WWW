/**
 * Created by admin on 16/4/7.
 */
module g_activity{
    export class ActivityNewRebateItem extends mo.gui.ItemRenderer{
        label_desc;
        label_title;
        ico_hasGet;
        btn_get;
        list_items;
        _Item_list_items;
        ico_bg;
        ico_sel;
        ico_hint;
        effect_get;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            //self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;

            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.diamond]);
            var types = gd.activityCtrl.getActivityValue(exActivity,gc.dsConsts.ActivityEntity.exValues2) || [];
            if(types.length == 1){
                self.label_title.text = gc.c_prop.diamondCostType[types[0]];
                self.ico_hint.source = "txt_zhongxiaohao";
            }else{
                self.label_title.text = "";
                self.ico_hint.source = "txt_yuanbaozongxiaohao";
            }
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getAllRebateStatus(gd.activityCtrl.getActivityValue(exActivity,gc.dsConsts.ActivityEntity.id), self.itemIndex);// 1:已经领取，2：未达到，其他:可领取
            if(status==1){
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
                uiHelper.playUIEffect(self.effect_get, false);
            }else if(status==2){
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, false);
            }else{
                self.ico_sel.visible = true;
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, true);
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));
            var row:number = Math.ceil(self.list_items.dataProvider.length/4);
            self.list_items.height = row == 1 ? 95 : 95*row +5*(row -1);

            self.ico_bg.height = self.list_items.height+ 95 ;
        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }

        _tap_btn_get(){
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;
            var status = gd.activityCtrl.getAllRebateStatus(gd.activityCtrl.getActivityValue(exActivity,gc.dsConsts.ActivityEntity.id), self.itemIndex);// 1:已经领取，2：未达到，其他:可领取
            if(status==1 ){
                //已经领取
            }else if(status==2){
                return mo.showMsg("目标尚未达成!");
            }else{
                gd.activityCtrl.receive(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex, function(){
                    self.delegate.reset();
                },self);
            }
        }
    }
}