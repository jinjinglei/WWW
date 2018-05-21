/**
 * Created by admin on 16/2/23.
 */
module g_activity{

    export class ActivityNewCenter extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ActivityNewCenterCell;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.reset);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        _data_list_items():any[]{
            return gd.activityCtrl.getMainList();
        }

        reset() {
            var self = this;
            self.refreshList("list_items");
        }

        /*
         activityType = {"1":'首冲',"2":'7天登陆',"3":'每日抢购',"4":'每日累充福利',"5":'全部累充福利',"6":'每日消费有礼',"7":'全部消费有礼',"8":'升级有奖',"9":'兑换码',"10":'文字说明',
         "11":'VIP升级奖励',"12":'时间段限购',"13":'签到',"14":'探宝',"15":'五日目标',"16":'单笔充值',"17":'神秘商店',"18":'王城擂台',"19":'蓝钻新手礼包',"20":'蓝钻成长礼包',
         "21":'蓝钻每日礼包',"22":'幸运塔罗牌',"23":'天天充值',"24":'限时抢购'};

         firstRecharge: number;
         sevenLogin: number;
         limitBuy: number;
         dayChargeCount: number;
         allChargeCount: number;
         dayCostCount: number;
         allCostCount: number;
         upLvl: number;
         redeemCode: number;
         text: number;
         upVip: number;
         limitBuyRange: number;
         sign: number;
         lottery: number;
         fiveDaysTarget: number;
         singleCharge: number;
         mysterShop: number;
         challengeCup: number;
         blueNewbie: number;
         blueGrowth: number;
         blueEveryday: number;
         luckyTalos: number;
         everydayCharge: number;
         limitPanicBuying: number;
         */
        _click_list_items(event:egret.gui.ListEvent) {
            var self = this;
            var data = event.item;
            var activity = data[gc.dsConsts.ExActivity.activity];
            var type = activity[gc.dsConsts.ActivityEntity.type];
            if(type == gc.c_prop.activityTypeKey.allChargeCount){
                ActivityNewRchg.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.singleCharge){
                ActivityNewSingleRchg.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.mysterShop){
                ActivityNewMysteryShop.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.luckyTalos){
                ActivityNewLuckyTalos.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.everydayCharge){
                ActivityNewEverydayRchg.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.limitPanicBuying){
                ActivityNewLimitBuy.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.rebate){
                ActivityNewRebate.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.dayRecharge){
                ActivityNewTotalRchgOneDay.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.setTheWord){
                ActivityNewCollectCharacter.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.vPlan){
                ActivityNewVplan.create().setData({exActivity:data}).show();
            }else if(type == gc.c_prop.activityTypeKey.appMysterShop){
                ActivityAppMysteryShop.create().setData({exActivity:data}).show();
            }
            else if(type == gc.c_prop.activityTypeKey.luckyMajong){
                ActivityNewMaJiangTalos.create().setData({exActivity:data}).show();
            }
            else if(type == gc.c_prop.activityTypeKey.userSurvey){
                ActivityNewAsk.create().setData({exActivity:data}).show();
            }
            else if(type == gc.c_prop.activityTypeKey.activityNotice){
                ActivityNewNotice.create().setData({exActivity:data}).show();
            }
            else if(type == gc.c_prop.activityTypeKey.newLuckyMajong){
                ActivityNewCardTalos.create().setData({exActivity:data}).show();
            }
            else if(type == gc.c_prop.activityTypeKey.newLimitPanicBuying){
                ActivityNewDayLimitBuy.create().setData({exActivity:data}).show();
            }
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:200}).show();
        }
    }
}