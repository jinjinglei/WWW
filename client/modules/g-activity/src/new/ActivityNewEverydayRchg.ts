/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewEverydayRchg extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;
        head:g_comp.ActivityItem;
        btn_help:egret.gui.Button;
        label_activity_time:egret.gui.Label;
        label_activity_desc:egret.gui.Label;
        label_cost_have:egret.gui.Label;
        label_activity_charged:egret.gui.Label;
        actItems;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ActivityNewEverydayRchgItem;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
            self.registerClassByKey(gd.RechargeCtrl, gd.RechargeCtrl.ON_RECHARGE_SUCC, self.rechargeSuccess);
        }

        rechargeSuccess(){
            var self = this;
            gd.activityCtrl.getInfo(function(){
               self.reset();
            });
        }

        checkRedPoint(){
            var self = this;
            self.reset();
        }

        reset(){
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];

            self.setData({"exActivity":gd.activityCtrl.getActivity(activity[gc.dsConsts.ActivityEntity.id])});

            var scroller = (<any>(self.list_items)).scroller;
            var scrollTop = scroller.scrollTop >=0?scroller.scrollTop:0;
            self.refreshList('list_items');
            process.nextTick(function(){
                if(!self.list_items)return;
                scroller.throwVertically(scrollTop,0);
            });
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
            self.label_cost_have.text = gd.userCtrl.getDiamond();

            self.actItems = [];
            var items = mo.getJSONWithFileName(gc.cfg_c_everydayCharge);
            var day = exActivity[gc.dsConsts.ExActivity.days];

            self.label_activity_charged.text = "今日已充值"+exActivity[gc.dsConsts.ExActivity.todayRecharge]+"元 , 已完成"+day+"天";

            var user_activity = gd.userCtrl.get(gc.dsConsts.UserEntity.activity);
            var ua_everyday_charge = user_activity[activity[gc.dsConsts.ActivityEntity.id]];

            var i = 0;
            for(var key in items){
                var obj = items[key];
                obj["activityId"] = activity[gc.dsConsts.ActivityEntity.id];
                obj["index"] = i;
                if((i+1)<=day){
                    if(ua_everyday_charge && ua_everyday_charge[i] > 0){
                        obj["status"] = 1;  //  已经领取
                    }else{
                        obj["status"] = 3;  //未领取
                    }
                }else{
                    obj["status"] = 2;      //未达到
                }
                self.actItems.push(obj);
                i++;
            }


            self.refreshList("list_items");
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

        _tap_btn_charge(){
            mo.moduleMgr.pushModule(g_consts.moduleId.recharge);
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:205}).show();
        }

    }
}