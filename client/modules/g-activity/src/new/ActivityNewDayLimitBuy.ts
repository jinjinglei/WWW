/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewDayLimitBuy extends ActivityNewLimitBuy{


        _initProp(){
            var self = this;
            super._initProp();

        }

        dataChanged(){
            //super.dataChanged();
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
            var funName = "";
            if(exData){
                var costItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
                self.ico_have_icon.source = resHelper.getItemIconPath(costItemId);
                self.ico_cost_icon.source = resHelper.getItemIconPath(costItemId);
                self.label_yuanbao_cost.text = activity[gc.dsConsts.ActivityEntity.exValues][0] +"";
                self.label_yuanbao_left.text = gd.userCtrl.getItemNum(costItemId)+"";

                funName = exData[gc.c_prop.activityExDataTypeKey.funcName]||"";
            }

            var activityID  = activity[gc.dsConsts.ActivityEntity.id];
            var buyCount = gd.activityCtrl.getTodayNewLimitPanicBuyCount(activityID);
            var limitCount = gd.activityCtrl.getTotalDay(activityID);

            var totalCount = limitCount;
            var vipLevel = gd.userCtrl.getVip();
            var vipLimit = exData[gc.c_prop.activityExDataTypeKey.vipLimitLvl] || 0;
            if( funName.length > 0&& typeof gc[funName] == "function"){
                totalCount = gc[funName](vipLevel,vipLimit);
            }
            self.label_vipHint.visible = vipLimit > 0;
            if( vipLimit > 0){
                self.label_vipHint.text = "vip"+vipLimit.toString()+"及以上才可购买";
            }

            self.label_buy_count.text = "今日购买次数:"+buyCount+"/"+totalCount;

            if(buyCount>=totalCount){
                self.label_buy_count.text = "已达到购买上限";
                self.ico_hasGet.visible = true;
            }else{
                self.ico_hasGet.visible = false;
            }

        }

        _tap_btn_buy(){
            var self = this;
            var activity = self.data.exActivity[gc.dsConsts.ExActivity.activity];
            gd.activityCtrl.newLimitPanicBuy(activity[gc.dsConsts.ActivityEntity.id],0,function(data){
                self.setData(self.data);
            },self);
        }

    }
}