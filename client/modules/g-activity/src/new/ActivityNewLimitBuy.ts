/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewLimitBuy extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;
        head:g_comp.ActivityItem;

        btn_help:egret.gui.Button;
        label_activity_time:egret.gui.Label;
        label_activity_desc:egret.gui.Label;
        label_yuanbao_cost:egret.gui.Label;
        label_yuanbao_left:egret.gui.Label;
        label_buy_count:egret.gui.Label;
        label_vipHint:egret.gui.Label;

        ico_hasGet:egret.gui.UIAsset;
        ico_have_icon:egret.gui.UIAsset;
        ico_cost_icon:egret.gui.UIAsset;
        btn_buy:egret.gui.Button;
        actItems;


        _initProp(){
            var self = this;
            super._initProp();

           // self._Item_list_items = g_base.BaseItemCell;
            self._Item_list_items = ActivityNewCollectCharacterBaseItem;
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
            //self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");

            var exData = activity[gc.dsConsts.ActivityEntity.exData];
            var vipLimit = 0;
            if(exData){
                var costItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
                self.ico_have_icon.source = resHelper.getItemIconPath(costItemId);
                self.ico_cost_icon.source = resHelper.getItemIconPath(costItemId);
                self.label_yuanbao_cost.text = activity[gc.dsConsts.ActivityEntity.exValues][0] +"";
                self.label_yuanbao_left.text = gd.userCtrl.getItemNum(costItemId)+"";
                vipLimit = exData[gc.c_prop.activityExDataTypeKey.vipLimitLvl] || 0;
            }

            var buyCount = gd.activityCtrl.getLimitPanicBuyCount(activity[gc.dsConsts.ActivityEntity.id]);
            var limitCount = activity[gc.dsConsts.ActivityEntity.exValues2][0];
            self.label_buy_count.text = "当前已购买"+buyCount+"次";
            if(buyCount>=limitCount){
                self.label_buy_count.text = "已达到购买上限";
                self.ico_hasGet.visible = true;
            }else{
                self.ico_hasGet.visible = false;
            }

            self.label_vipHint.visible = vipLimit > 0;
            if( vipLimit > 0){
                self.label_vipHint.text = "vip"+vipLimit.toString()+"及以上才可购买";
            }
        }

        _data_list_items():any[]{
            var self = this;
            var  arr = [];
            for( var i = 0;i < self.actItems.length;i++){
                var data = self.actItems[i];
                var type = gc.dsConsts.ActivityItem.items;
                var obj = data[type];
                for(var key in obj){
                    arr.push({
                        itemId: key,
                        count: obj[key]
                    });
                }
            }

            //return utils.itemObj2ObjArr(self.actItems[gc.dsConsts.ActivityItem.items]);

            return arr;
        }

        _tap_btn_buy(){
            var self = this;
            var activity = self.data.exActivity[gc.dsConsts.ExActivity.activity];
            gd.activityCtrl.limitPanicBuying(activity[gc.dsConsts.ActivityEntity.id],0,function(data){
                self.setData(self.data);
            },self);
        }

        _click_list_items(event:egret.gui.ListEvent){
            var data = event.item;
            g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data["itemId"], null)}).show();
        }

        _tap_btn_help(){
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;
            subType = parseInt(subType);
            var helpType = subType == 0 ? 206:subType;
            g_base.BaseShowTip.create().setData({id:helpType}).show();
        }
    }
}