module gd{
    export class ActivityCtrl extends mo.DataController{

        static ON_FIRST_REWARD_RECEIVED = "on_first_";
        static ACTIVITY_OP:String = "ACTIVITY_OP";

        _dataList:any;

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.AccountEntity;
            this._dataList = [];
        }
        /**************************************************************首充*********************************************************************/
        //是否已经领取首充
        hasReceiveFirstRecharge(){
            var self = this;
            var fData = self.getFirstRecharge();
            if(!fData) return true;
            var id =  self.getActivityValue(fData,gc.dsConsts.ActivityEntity.id);
            var receiveData = self.getReceiveData(id);
            if(receiveData[0]) return true;
            return false;
        }

        /**
         * 是否已经充过值了。
         * @returns {boolean}
         */
        hasRecharged():boolean{
            return gd.rechargeCtrl.getAllCostRMB()>0;
        }

        /**
         * 获取首冲信息
         * @returns {gc.dsConsts.ExActivity}
         */
        getFirstRecharge(){
            var self = this;
            var exActivity = self._getExActivityByType(gc.c_prop.activityTypeKey.firstRecharge);
            return exActivity;
        }

        getFirstRechargeItems(){
            var self = this;
            var exActivity = self.getFirstRecharge();
            return exActivity[gc.dsConsts.ExActivity.activityItems][0][gc.dsConsts.ActivityItem.items];
        }
        /**
         * 获取累充领取状态
         * @param id
         * @param index
         * @returns {number} 0:已经领取，1：可领取，2:不可领取
         */
        getAllChargeCountStatus(id,index){
            var self = this;
            var exActivity = self._getExActivityById(id);
            var receiveData = self.getReceiveData(id);
            var activityItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            var allRecharge = exActivity[gc.dsConsts.ExActivity.allRecharge];
            var itemData = activityItems[index];
            var needCount = itemData[gc.dsConsts.ActivityItem.rmb] || 0;

            //判断是否可以领取
            //判断累充钻石是否达到
            if (allRecharge < needCount) return 2;

            //领取次数
            var receiveCount = receiveData[index] || 0;

            //未领取过，则可领取
            if(receiveCount<=0) return 1;

            return 0;
        }

        /**
         * 领取首充礼包。
         * @param cb
         * @param target
         */
        receiveFirstRecharge(cb:Function, target?:any){
            var self = this;
            if(!self.hasRecharged()){
                return mo.showMsg(gc.id_c_msgCode.cantGetNoCharge);
            }
            if(self.hasReceiveFirstRecharge()) return mo.showMsg("首充礼包已经领过，不能再领取！");
            //ws.recordEvent("领取首充奖励次数", 1);
            var fData = self.getFirstRecharge();
            var id =  self.getActivityValue(fData,gc.dsConsts.ActivityEntity.id);
            self.receive(id,0,function(){
                self.pushNotify(self.__class.ON_FIRST_REWARD_RECEIVED);
                cb.call(target);
            },self);
        }
        /**************************************************************七天*********************************************************************/
        /**
         * 获取7天登录领取状态
         * @param index
         * @returns {number} 0:已经领取，1：可领取，2:不可领取
         */
        getSevenLoginStatus(index){
            var self = this;
            var exActivity = self._getExActivityByType(gc.c_prop.activityTypeKey.sevenLogin);
            var id = self.getActivityValue(exActivity,gc.dsConsts.ActivityEntity.id);
            var receiveData = self.getReceiveData(id);
            if(receiveData.length<=0) {
                if(index==0)
                    return 1;
                else
                    return 2;
            }
            var lasDay = receiveData[receiveData.length-1];
            lasDay = new Date(lasDay);

            if (index > receiveData.length) {
                return 2;
            }

            //大于当前天数，不可领取
            if(index<receiveData.length){
                return 0;
            }else{
                if(!lasDay.equalsDay(Date.newDate())){
                    return 1;
                }else{
                    return 2;
                }
            }
/*
            //当前天数判断是否可以领取
            if(index==receiveData.length){
                var receiveTime = receiveData[index-1];
                if(!receiveTime) {
                    return 1;
                }
                receiveTime = new Date(receiveTime);
                if(!receiveTime.equalsDay(Date.newDate())){
                    return 1;
                }
            }*/

            return 0;
        }

        /**************************************************************签到*********************************************************************/
        /**
         * 获取签到信息
         * @returns {gc.dsConsts.ExActivity}
         */
        getSignActivity(){
            var self = this;
            var exActivity = self._getExActivityByType(gc.c_prop.activityTypeKey.sign);
            return exActivity;
        }

        //获取签到物品
        getSignItems(){
            var self = this;
            var exActivity = self.getSignActivity();
            if(!exActivity) return {};
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            if(!activity) return {};
            var signItems = activity[gc.dsConsts.ActivityEntity.exValues];
            return signItems;
        }
        /**************************************************************神秘商店*********************************************************************/
        /**
         * 神秘商店购买礼包
         * @param activityId 活动id
         * @param index 栏目项
         * @param cb
         * @param target
         * @return [是否暴击,获得积分]
         */
        buyMysterShop(activityId,index,cb,target) {
            var self = this;
            var argKeys = gc.iface.a_activity_buyMysterShop_args;
            var args = {};
            args[argKeys.activityId] = activityId;
            args[argKeys.index] = index;

            var currencyType = 0;
            var consume = 999999;
            var cfg_c_mysterShop = mo.getJSONWithFileName(gc.cfg_c_mysterShop);
            var exActivity = self._getExActivityByType(gc.c_prop.activityTypeKey.mysterShop);
            if(!exActivity) return mo.showMsg(gc.id_c_msgCode.activitiesEnd);
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            if(!activity) return mo.showMsg(gc.id_c_msgCode.activitiesEnd);
            var exValues = activity[gc.dsConsts.ActivityEntity.exValues];
            if (!exValues[0]) return mo.showMsg("参数错误");
            var mysterShop = cfg_c_mysterShop[exValues[0]];
            if (!mysterShop) return mo.showMsg("参数错误");
            switch (index){
                case 0:
                    var giftBag1 = mysterShop[gc.c_mysterShop_giftBag1];
                    currencyType=giftBag1[2];
                    consume=giftBag1[3];
                    break;
                case 1:
                    var giftBag2 = mysterShop[gc.c_mysterShop_giftBag2];
                    currencyType=giftBag2[2];
                    consume=giftBag2[3];
                    break;
            }
            if(currencyType == 1){      //金币
                if(gd.userCtrl.getGold() < consume){
                    gd.userCtrl.noGolds(function(){
                        self.buyMysterShop(activityId, index, cb, target);
                    }, self);
                    return
                }
            }else if(currencyType == 2){        //元宝
                if(gd.userCtrl.getDiamond() < consume) return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }else{
                return mo.showMsg("参数错误");
            }

            mo.requestWaiting4Server(gc.iface.a_activity_buyMysterShop, args, function (data) {
                var userData = data[gc.dsConsts.ExActivityData.userData]||{};
                var bagItems = data[gc.dsConsts.ExActivityData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExActivityData.equipBagItems]||{};
                var mysterShopArr = data[gc.dsConsts.ExActivityData.mysterShopArr]||[];
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                self.getInfo(function(){
                    self.pushNotify(self.__class.ACTIVITY_OP, {});
                },self);
                cb.call(target,mysterShopArr);
            });
        }


        buyAppMysterShop(activityId,index,cb,target) {
            var self = this;
            var argKeys = gc.iface.a_activity_buyMysterShop_args;
            var args = {};
            args[argKeys.activityId] = activityId;
            args[argKeys.index] = index;

            var currencyType = 0;
            var consume = 999999;
            var cfg_c_mysterShop = mo.getJSONWithFileName(gc.cfg_c_mysterShop);
            var exActivity = self._getExActivityByType(gc.c_prop.activityTypeKey.appMysterShop);
            if(!exActivity) return mo.showMsg(gc.id_c_msgCode.activitiesEnd);
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            if(!activity) return mo.showMsg(gc.id_c_msgCode.activitiesEnd);
            var exValues = activity[gc.dsConsts.ActivityEntity.exValues];
            if (!exValues[0]) return mo.showMsg("参数错误");
            var mysterShop = cfg_c_mysterShop[exValues[0]];
            if (!mysterShop) return mo.showMsg("参数错误");
            switch (index){
                case 0:
                    var giftBag1 = mysterShop[gc.c_mysterShop_giftBag1];
                    currencyType=giftBag1[2];
                    consume=giftBag1[3];
                    break;
                case 1:
                    var giftBag2 = mysterShop[gc.c_mysterShop_giftBag2];
                    currencyType=giftBag2[2];
                    consume=giftBag2[3];
                    break;
            }
            if(currencyType == 1){      //金币
                if(gd.userCtrl.getGold() < consume){
                    gd.userCtrl.noGolds(function(){
                        self.buyMysterShop(activityId, index, cb, target);
                    }, self);
                    return
                }
            }else if(currencyType == 2){        //元宝
                if(gd.userCtrl.getDiamond() < consume) return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }else{
                return mo.showMsg("参数错误");
            }

            mo.requestWaiting4Server(gc.iface.a_activity_buyMysterShop, args, function (data) {
                var userData = data[gc.dsConsts.ExActivityData.userData]||{};
                var bagItems = data[gc.dsConsts.ExActivityData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExActivityData.equipBagItems]||{};
                var mysterShopArr = data[gc.dsConsts.ExActivityData.mysterShopArr]||[];
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                self.getInfo(function(){
                    self.pushNotify(self.__class.ACTIVITY_OP, {});
                },self);
                cb.call(target,mysterShopArr);
            });
        }

        //获取神秘商店数据 activityId:活动id  startTime:活动开始时间  endTime：活动结束时间
        //return  [积分,[领取次数,领取次数,领取次数]]
        getMysterShopArr(activityId,startTime,endTime){
            var self = this;
            var activity = gd.userCtrl.getActivity()[activityId];
            var returnArr = [];
            if(!activity){
                returnArr = [0,[]];        //[积分,[领取次数,领取次数,领取次数],积分最后获得时间]
            }else{
                if(activity[2]){
                    var actTime = Date.newDate(activity[2]);
                    if(startTime && (Date.newDate(startTime).isAfter(actTime)||Date.newDate(endTime).isBefore(actTime))){        //判断积分是否是本次活动积分
                        returnArr = [0,[]];
                    }else{
                        returnArr = [activity[0],activity[1]];
                    }
                }
            }
            return returnArr;
        }

        exChangeMysterShop(activityId:number,index:any,cb:Function, target?:any){
            var self = this;
            self.receive(activityId,index,function(){
                mo.showMsg(gc.id_c_msgCode.redeemRewardMail);
                cb.call(target);
            },self);
        }
        /**************************************************************探宝*********************************************************************/
        /**
         * 获取探宝信息
         * @returns {gc.dsConsts.ExActivity}
         */
        getLotteryActivity(){
            var self = this;
            var exActivity = self._getExActivityByType(gc.c_prop.activityTypeKey.lottery);
            return exActivity;
        }

        /**
         * 探宝次数
         * @param index  1,10
         * @param cb
         * @returns {Array}  [{"id":num,...},..]
         */
        lottery(index,cb, cbtx?){
            var self = this;
            var fData = self.getLotteryActivity();
            if(!fData) return cb();

            var ownDiamond = userCtrl.getDiamond();
            var costDiamond = self.getLotteryCost(index);
            if(index==1 || index==10){
                if(ownDiamond < costDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
            }else{
               return mo.showMsg("参数错误！");
            }
            //判断钻石1
            var id =  self.getActivityValue(fData,gc.dsConsts.ActivityEntity.id);
            self.receive(id,index,function(data){
                var lotteryItemsArr = data[gc.dsConsts.ExActivityData.lotteryItemsArr]||[];
                cb.call(cbtx, lotteryItemsArr);
            },self);
        }

        getLotteryCost(index){
            var self = this;
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var disCount = cfg_c_game[gc.id_c_game.lotteryCostCfg][8] || 1;
            var cost1Diamond = cfg_c_game[gc.id_c_game.lotteryCostCfg][0] * disCount;
            var cost10Diamond = cfg_c_game[gc.id_c_game.lotteryCostCfg][1] * disCount;
            if(index == 1) return cost1Diamond;
            return cost10Diamond;
        }

        //五日目标
        getFiveTargetActivity(){
            var self = this;
            var exActivity = self._getExActivityByType(gc.c_prop.activityTypeKey.fiveDaysTarget);
            return exActivity;
        }

        //新四日
        getNewFourActivity(){
            var self = this;
            var exActivity = self._getExActivityByType(gc.c_prop.activityTypeKey.newFourDays);
            return exActivity;
        }

        //幸运卡罗牌
        luckyTalos(id, index, cb, cbtx?){
            var self = this;
            var lData = self.getLuckyTalosActivity(id);
            if(!lData) {
                console.log("找不到该活动");
                return cb();
            }
            if(index <0 || index > 3)
                return cb("参数错误")
            var exData =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exData);
            if(!exData) return cb("参数错误");
            var exValues =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues);
            var spItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
            if(!spItemId) return cb("参数错误");
            var ownValue = userCtrl.getItemNum(spItemId);
            var costValue  = exValues[0];
            if(spItemId == gc.c_prop.spItemIdKey.gold){
                if (ownValue < costValue) {
                    userCtrl.noGolds(function(){},this);
                    return;
                }
            }else if(spItemId == gc.c_prop.spItemIdKey.diamond){
                //判断钻石是否足够
                if (ownValue < costValue) return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }else {
                if(ownValue < costValue) return mo.showMsg("材料不足！");
            }

            //判断钻石1
            self.receive(id,index,function(data){
                var luckyTalosItemArr = data[gc.dsConsts.ExActivityData.luckyTalosItemArr]||[];
                cb.call(cbtx, luckyTalosItemArr);
            },self,spItemId);
        }

        getLuckyTalosCost(index, id){
            var self = this;
            var costDiamond = 9999;
            var lData = self.getLuckyTalosActivity(id);
            if(!lData) return;
            var exValues =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues);
            return exValues[0] || costDiamond;
        }

        getLuckyTalosActivity(id){
            var self = this;
            var exActivity = self._getExActivityById(id);
            return exActivity;
        }

        getActivity(id){
            var self = this;
            var exActivity = self._getExActivityById(id);
            return exActivity;
        }

        //获取活动ui信息
        getUiInfoActivity(id){
            var self = this;
            var lData = self.getLuckyTalosActivity(id);
            if(!lData) return;
            var exData = self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exData);
            return [exData[gc.c_prop.activityExDataTypeKey.titleIcon], exData[gc.c_prop.activityExDataTypeKey.desIcon]];//titleIcon, desIcon
        }

        //限时抢购
        limitPanicBuying(id, index, cb, cbtx){
            var self = this;
            var lData = self._getExActivityById(id);
            if(!lData) {
                return cb(mo.showMsg("找不到该活动"));
            }
            var receiveCount =  self.getLimitPanicBuyCount(id);
            var exValues2 =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues2);
            var limitNum =  exValues2[0] || 0;
            if(receiveCount >= limitNum) return mo.showMsg(gc.id_c_msgCode.activitiesEnd);
            var exData =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exData);
            if(!exData) return mo.showMsg("参数错误");
            var exValues =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues);
            var spItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
            if(!spItemId) return mo.showMsg("参数错误");

            var vipLimit = exData[gc.c_prop.activityExDataTypeKey.vipLimitLvl] || 0;
            var vip = gd.userCtrl.getVip();
            if(vip < vipLimit){
                return mo.showMsg("vip"+vipLimit+"以上才可购买");
            }

            var ownValue = userCtrl.getItemNum(spItemId);
            var costValue  = exValues[0];
            if(spItemId == gc.c_prop.spItemIdKey.gold){
                if (ownValue < costValue) {
                    userCtrl.noGolds(function(){},this);
                    return;
                }
            }else if(spItemId == gc.c_prop.spItemIdKey.diamond){
                //判断钻石是否足够
                if (ownValue < costValue) return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }else {
                if(ownValue < costValue) return mo.showMsg("材料不足！");
            }

            self.receive(id,index,function(data){
                mo.showMsg("购买成功,请到邮箱领取奖励！");
                cb.call(cbtx, data);
            },self);
        }

        getLimitPanicBuyCount(id){
            var activity = userCtrl.get(gc.dsConsts.UserEntity.activity);
            var receiveCount = activity[id] || 0;
            return receiveCount;
        }

        getLimitNum(id){
            var self = this;
            var lData = self._getExActivityById(id);
            if(!lData) return 0;
            var exValues2 =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues2);
            return exValues2[0] || 0;
        }

        //天天充值
        everydayCharge(id,index, cb, cbtx?){
            var self = this;
            var eData = self._getExActivityById(id);
            if(!eData) {
                return cb(mo.showMsg("找不到该活动"));
            }
            //验证是否可领取
            var days = eData[gc.dsConsts.ExActivity.days] || 0;//已充值到第几天
            if(index+1 > days){
                return mo.showMsg(gc.id_c_msgCode.goalNotGet);
            }
            var activity = userCtrl.get(gc.dsConsts.UserEntity.activity);
            var receiveData = activity[id]||[];
            var receiveCount = receiveData[index] || 0;
            if(receiveCount){
                return mo.showMsg("已领取请查看邮件!");
            }
            self.receive(id,index,function(data){
                mo.showMsg("领取成功,请到邮箱领取奖励！");
                cb.call(cbtx, data);
            },self);
        }

        /**
         * 获得消费返利领取状态
         * @param id
         * @param index
         * @returns {number} 1:已经领取，0：可领取，2:不可领取
         */
        getAllRebateStatus(id,index) {
            var self = this;
            var exActivity = self._getExActivityById(id);
            var receiveData = self.getReceiveData(id);
            var activityItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            var allCost = exActivity[gc.dsConsts.ExActivity.allCost];
            var itemData = activityItems[index];
            var needCount = itemData[gc.dsConsts.ActivityItem.diamond] || 0;

            //判断是否可以领取
            //判断累充钻石是否达到
            if (allCost < needCount) return 2;

            //领取次数
            var r = receiveData[1] || [];
            var receiveCount = r[index] || 0;

            //未领取过，则可领取
            return receiveCount;
        }

        /**
         * 获得消费返利领取状态
         * @param id
         * @param index
         * @returns {number} 1:已经领取，0：可领取，2:不可领取
         */
        getDayRechargeStatus(id,index) {
            var self = this;
            var exActivity = self._getExActivityById(id);
            var receiveData = self.getReceiveData(id);
            var activityItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            var todayRecharge = exActivity[gc.dsConsts.ExActivity.todayRecharge];
            var days = exActivity[gc.dsConsts.ExActivity.days];
            var itemData = activityItems[index];
            var needCount = itemData[gc.dsConsts.ActivityItem.rmb] || 0;

            //判断是否可以领取
            //判断累充钻石是否达到
            if (todayRecharge < needCount) return 2;

            //领取次数
            var r = receiveData[days] || [];
            var receiveCount = r[index] || 0;

            //未领取过，则可领取
            return receiveCount;
        }

        /**
         * 获得集字返利兑换次数
         * @param id
         * @param index
         * @returns {number}
         */
        getSetTheWordCount(id, index){
            var self = this;
            var receiveData = self.getReceiveData(id);
            return receiveData[index] || 0;
        }


        //集字换礼
        setTheWord(id,index, cb, cbtx?){
            var self = this;
            var eData = self._getExActivityById(id);
            if(!eData) {
                return mo.showMsg("找不到该活动");
            }
            self.receive(id,index,function(data){
                mo.showMsg("兑换成功,请到邮箱领取奖励！");
                cb.call(cbtx, data);
            },self);
        }
        /**
         * 获得V计划领取状态
         * @param id
         * @param index
         * @returns {number} 1:已经领取，0：可领取，2:不可领取
         */
        getVPlanStatus(id,index) {
            var self = this;
            var receiveData = self.getReceiveData(id);
            var receiveCount = receiveData[index] || 0;;
            //未领取过，则可领取
            return receiveCount;
        }

        /**
         * 领取V计划奖励
         * @param id
         * @param index
         * @returns {number} 1:已经领取，0：可领取，2:不可领取
         */
        vPlan(id, index,cb, cbtx?){
            var self = this;
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var exActivity = self._getExActivityById(id);
            if(!exActivity) {
                return cb(mo.showMsg("找不到该活动"));
            }
            var receiveData = self.getReceiveData(id);
            var activityItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            var rmb = exActivity[gc.dsConsts.ExActivity.maxPaymoney];//当前单笔充值最高金额
            var itemData = activityItems[index];
            var need = itemData[gc.dsConsts.ActivityItem.vPlan];
            var vipIndex  = 0;
            var needCreatDay = 30;
            if(need[0] == 10500){
                vipIndex =0
            }else {
                vipIndex = 1;
            }
            var needVip = cfg_c_game[gc.id_c_game.vPlanCfg][vipIndex] || 7;
            needCreatDay = cfg_c_game[gc.id_c_game.vPlanCfg][vipIndex+2] || 30;

            if(userCtrl.getVip() < needVip || rmb < need[1]){
                return mo.showMsg(gc.id_c_msgCode.vPlan, need[1]);
            }

            var now = Date.newDate();
            if(now.isBefore(new Date(userCtrl.get(gc.dsConsts.UserEntity.createTime)).clone().addDays(needCreatDay))){
                return mo.showMsg("需要至少创角"+needCreatDay+"天才可领取");
            }
            self.receive(id,index,function(data){
                mo.showMsg("兑换成功,请到邮箱领取奖励！");
                cb.call(cbtx, data);
            },self);
        }

        //幸运麻将牌
        luckyMajong(id, index, cb, cbtx?){
            var self = this;
            var lData = self.getActivity(id);
            if(!lData) {
                console.log("找不到该活动");
                return cb();
            }
            if(index <0 || index > 6)
                return cb("参数错误")
            var exData =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exData);
            if(!exData) return cb("参数错误");
            var exValues =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues);
            var spItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
            if(!spItemId) return cb("参数错误");
            var ownValue = userCtrl.getItemNum(spItemId);
            var costValue  = exValues[0];
            if(spItemId == gc.c_prop.spItemIdKey.gold){
                if (ownValue < costValue) {
                    userCtrl.noGolds(function(){},this);
                    return;
                }
            }else if(spItemId == gc.c_prop.spItemIdKey.diamond){
                //判断钻石是否足够
                if (ownValue < costValue) return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }else {
                if(ownValue < costValue) return mo.showMsg("材料不足！");
            }
            var oldValue = self.getLuckValue(id);
            //判断钻石1
            self.receive(id,index,function(data){
                var luckyTalosItemArr = data[gc.dsConsts.ExActivityData.luckyTalosItemArr]||[];
                var newValue = self.getLuckValue(id);
                if(newValue > oldValue){
                    mo.showMsg(gc.id_c_msgCode.majongLuckyPoint,self.getAddLuckValue(id));
                }else {
                    //mo.showMsg(gc.id_c_msgCode.majongLuckyPointMax);
                    var exItem = data[gc.dsConsts.ExActivityData.exItem];
                    for(var itemId in exItem){
                        var itemTmp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                        var itemName = itemTmp[gc.t_item_name] || "";
                        mo.showMsg(gc.id_c_msgCode.majongLuckyBonusTips, itemName, exItem[itemId]);
                        break;
                    }
                }
                cb.call(cbtx, luckyTalosItemArr);
            },self,spItemId);
        }

        //返回幸运值
        getLuckValue(id){
            var self = this;
            var activity = userCtrl.get(gc.dsConsts.UserEntity.activity);
            var receiveCount  = activity[id] || 0;
            return  receiveCount;
        }

        //幸运值增量
        getAddLuckValue(id){
            var self = this;
            var lData = self.getActivity(id);
            var exValues3 =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues3);
            return exValues3[0] || 5;
        }

        //用户调研
        userSurvey(activityId, index, report, cb?, cbtx?){
            var self = this;
            var lData = self.getActivity(activityId);
            if(!lData) {
                return mo.showMsg("找不到该活动");
            }
            var args = {};
            var argsKey = gc.iface.a_activity_report_args;
            args[argsKey.activityId] = activityId;
            args[argsKey.report] = report;
            mo.requestWaiting4Server(gc.iface.a_activity_report, args, function(data){
                self.receive(activityId, index, function(data){
                    if(cb)
                        cb.call(cbtx, data);
                })
            }, self);
        }

        //得到用户调研领奖状态
        getUserSurveyStatus(activityId){
            var self = this;
            var activity = userCtrl.get(gc.dsConsts.UserEntity.activity);
            var receiveCount  = activity[activityId] || 0;
            if(receiveCount !=1) {
                return 0;
            }else{
                return 1;
            }
        }

        //返回新麻将牌幸运值
        getNewLuckValue(id){
            var self = this;
            var activity = userCtrl.get(gc.dsConsts.UserEntity.activity);
            var receiveData  = activity[id] || [];
            return  receiveData[0] || 0;
        }

        //新幸运麻将牌
        newLuckyMajong(id, index, cb, cbtx?){
            var self = this;
            var lData = self.getActivity(id);
            if(!lData) {
                return mo.showMsg("找不到该活动");
            }
            var exData =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exData);
            if(!exData) return mo.showMsg("参数错误");
            var exValues =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues);
            var spItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
            if(!spItemId) return mo.showMsg("参数错误");
            var ownValue = userCtrl.getItemNum(spItemId);
            var costValue  = exValues[0];
            var count = self.getTodayActivityCount(id);
            var freeCount = self.getFreeDay(id);
            var totalDay = self.getTotalDay(id);
            if(count >= totalDay){
                return mo.showMsg("已达最大次数");
            }
            if(count >= freeCount) {
                if (spItemId == gc.c_prop.spItemIdKey.gold) {
                    if (ownValue < costValue) {
                        userCtrl.noGolds(function () {
                        }, this);
                        return;
                    }
                } else if (spItemId == gc.c_prop.spItemIdKey.diamond) {
                    //判断钻石是否足够
                    if (ownValue < costValue) return mo.showMsg(gc.id_c_msgCode.noDiamond);
                } else {
                    if (ownValue < costValue) return mo.showMsg("材料不足！");
                }
            }
            var oldValue = self.getLuckValue(id);
            //判断钻石1
            self.receive(id,index,function(data){
                var luckyTalosItemArr = data[gc.dsConsts.ExActivityData.luckyTalosItemArr]||[];
                var newValue = self.getLuckValue(id);
                if(newValue > oldValue){
                    mo.showMsg(gc.id_c_msgCode.majongLuckyPoint,self.getAddLuckValue(id));
                }else {
                    //mo.showMsg(gc.id_c_msgCode.majongLuckyPointMax);
                    var exItem = data[gc.dsConsts.ExActivityData.exItem];
                    for(var itemId in exItem){
                        var itemTmp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                        var itemName = itemTmp[gc.t_item_name] || "";
                        mo.showMsg(gc.id_c_msgCode.majongLuckyBonusTips, itemName, exItem[itemId]);
                        break;
                    }
                }
                cb.call(cbtx, luckyTalosItemArr);
            },self,spItemId);
        }

        /**
         * 得到活动今日已参与次数
         * @param activityId
         */
        getTodayNewLimitPanicBuyCount(activityId):number{
            var self = this;
            var activity = userCtrl.get(gc.dsConsts.UserEntity.activity);
            var receiveData = activity[activityId] || [0,Date.newDate()];
            var count = receiveData[0];
            var refreshTime = Date.newDate(receiveData[1]);

            if(refreshTime){
                refreshTime = Date.newDate(refreshTime);
                if(!refreshTime.equalsDay(Date.newDate())){
                    refreshTime = Date.newDate();
                    count = 0;
                }
            }

            receiveData[0] = count;
            receiveData[1] = refreshTime;
            activity[activityId] = receiveData;

            userCtrl.set(gc.dsConsts.UserEntity.activity,activity);
            return count;
        }


        //新每日限时抢购
        newLimitPanicBuy(id, index, cb, cbtx?){
            var self = this;
            var lData = self.getActivity(id);
            if(!lData) {
                return mo.showMsg("找不到该活动");
            }
            var exData =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exData);
            if(!exData) return mo.showMsg("参数错误");
            var vipLimit = exData[gc.c_prop.activityExDataTypeKey.vipLimitLvl] || 0;
            var fnName = exData[gc.c_prop.activityExDataTypeKey.funcName];
            var vip = gd.userCtrl.getVip();
            if(fnName && typeof gc[fnName] == "function") {
                var vipEnable = gc[fnName](vip, vipLimit);
                if(!vipEnable){
                    return mo.showMsg("vip"+vipLimit+"以上才可购买");
                }
            }else if(vip < vipLimit){
                return mo.showMsg("vip"+vipLimit+"以上才可购买");
            }
            var exValues =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exValues);
            var spItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
            if(!spItemId) return mo.showMsg("参数错误");
            var ownValue = userCtrl.getItemNum(spItemId);
            var costValue  = exValues[0];
            var count = self.getTodayNewLimitPanicBuyCount(id);
            var totalDay = self.getTotalDay(id);
            if(count >= totalDay){
                return mo.showMsg("已达今日购买最大次数");
            }

            if (spItemId == gc.c_prop.spItemIdKey.gold) {
                if (ownValue < costValue) {
                    userCtrl.noGolds(function () {
                    }, this);
                        return;
                }
            } else if (spItemId == gc.c_prop.spItemIdKey.diamond) {
                //判断钻石是否足够
                if (ownValue < costValue) return mo.showMsg(gc.id_c_msgCode.noDiamond);
            } else {
                if (ownValue < costValue) return mo.showMsg("材料不足！");
            }
            var oldValue = self.getLuckValue(id);
            //判断钻石1
            self.receive(id,index,function(data){
                mo.showMsg("领取成功,请到邮箱领取奖励！");
                cb.call(cbtx, data);
            },self);
        }


        /**************************************************************公用*********************************************************************/
        /**
         * 领取
         * @param id
         * @param index
         * @param cb
         * @param target
         */
        receive(activityId:number,index:number,cb:Function, target?:any,spItemId:number = 0){
            var self = this;

            var args = {};
            var argsKey = gc.iface.a_activity_receive_args;
            args[argsKey.activityId] = activityId;
            args[argsKey.index] = index;

            mo.requestWaiting4Server(gc.iface.a_activity_receive, args, function(data){
                var userData = data[gc.dsConsts.ExActivityData.userData]||{};
                var bagItems = data[gc.dsConsts.ExActivityData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExActivityData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                userCtrl.updateEntity(userData);
                egret.setTimeout(function() {
                    self.getInfo(function(){
                        self.pushNotify(self.__class.ACTIVITY_OP, {});
                    },self);
                }, self, 500);
                if(cb) cb.call(target, data);

                if(spItemId > 0&&spItemId == gc.c_prop.spItemIdKey.gold){
                    var getGold = data[gc.dsConsts.ExActivityData.getGold]||0;
                    if(getGold >0 ){
                        var clickTime = egret.setTimeout(function() {
                            mo.showMsg("获得金币: "+getGold);
                            egret.clearTimeout(clickTime);
                        }, self, 400);
                    }
                }
            });
        }

        //获取领取的数据
        getReceiveData(id){
            var activity = userCtrl.get(gc.dsConsts.UserEntity.activity);
            var receiveData = activity[id] || [];
            return receiveData;
        }

        getActivityValue(exActivity,key){
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            return activity[key];
        }

        /**
         * 获取主要活动列表
         * @returns [gc.dsConsts.ExActivity]
         */
        getMainList(){
            var self = this;
            var reList = [];
            for(var i = 0 ;i<self._dataList.length;i++){
                var locData = self._dataList[i];
                var locType = self.getActivityValue(locData,gc.dsConsts.ActivityEntity.type);
                if(locType==gc.c_prop.activityTypeKey.firstRecharge) continue;
                if(locType==gc.c_prop.activityTypeKey.lottery) continue;
                if(locType==gc.c_prop.activityTypeKey.fiveDaysTarget) continue;
                if(locType==gc.c_prop.activityTypeKey.sign) continue;
                if(locType==gc.c_prop.activityTypeKey.sevenLogin) continue;
                if(locType==gc.c_prop.activityTypeKey.redeemCode) continue;
                if(locType==gc.c_prop.activityTypeKey.challengeCup) continue;
                reList.push(locData);
            }
            reList.sort(function(ex1, ex2){
                return ex1[gc.dsConsts.ExActivity.activity][gc.dsConsts.ActivityEntity.sort]-ex2[gc.dsConsts.ExActivity.activity][gc.dsConsts.ActivityEntity.sort];
            })
            return reList;
        }

        getFuliList(){
            var self = this;
            var reList = [];
            for(var i = 0 ;i<self._dataList.length;i++){
                var locData = self._dataList[i];
                var locType = self.getActivityValue(locData,gc.dsConsts.ActivityEntity.type);
                if(locType==gc.c_prop.activityTypeKey.sign
                || locType==gc.c_prop.activityTypeKey.sevenLogin
                || locType == gc.c_prop.activityTypeKey.redeemCode) {
                    reList.push(locData);
                }
            }
            reList.sort(function(ex1, ex2){
                return ex1[gc.dsConsts.ExActivity.activity][gc.dsConsts.ActivityEntity.sort]-ex2[gc.dsConsts.ExActivity.activity][gc.dsConsts.ActivityEntity.sort];
            })
            return reList;
        }

        /**
         * 获取精彩活动列表。
         * @param cb
         * @param ctx
         * @returns gc.dsConsts.ActivityData
         */
        getInfo(cb:Function, ctx?:any){
            var self = this;
            mo.request4Server(gc.iface.a_activity_getList, {}, function(dataList){
                self._dataList = dataList;
                pointCtrl.cal(gc.c_prop.pointEffectKey.activity);
                pointCtrl.cal(gc.c_prop.pointRedKey.fuli);
                if(cb) cb.call(ctx, dataList);
            });
        }

        //判断是否红点
        isPointEffect(){
            var self = this;
            var mainDataList = self.getMainList();
            for(var i = 0;i<mainDataList.length;i++){
                var locData = mainDataList[i];
                var isNeedOp = locData[gc.dsConsts.ExActivity.isNeedOp];
                if(isNeedOp) return true;
            }
            return false;
        }

        //判断是否红点
        isFuliPointEffect(){
            var self = this;
            var mainDataList = self.getFuliList();
            for(var i = 0;i<mainDataList.length;i++){
                var locData = mainDataList[i];
                var isNeedOp = locData[gc.dsConsts.ExActivity.isNeedOp];
                if(isNeedOp) return true;
            }
            return false;
        }

        //判断是否红点
        isPoint(id){
            var self = this;
            var mainDataList = self.getMainList();
            for(var i = 0;i<mainDataList.length;i++){
                var locData = mainDataList[i];
                var locId = self.getActivityValue(locData,gc.dsConsts.ActivityEntity.id);
                if(id!=locId) continue;
                var isNeedOp = locData[gc.dsConsts.ExActivity.isNeedOp];
                if(isNeedOp) return true;
            }

            var fuliDataList = self.getFuliList();
            for(var i = 0;i<fuliDataList.length;i++){
                var locData = fuliDataList[i];
                var locId = self.getActivityValue(locData,gc.dsConsts.ActivityEntity.id);
                if(id!=locId) continue;
                var isNeedOp = locData[gc.dsConsts.ExActivity.isNeedOp];
                if(isNeedOp) return true;
            }
            return false;
        }

        /**
         * 根据类型获取ExActivity
         * @param type
         * @returns {*}
         */
        private _getExActivityByType(type){
            var self = this;
            for(var i = 0 ;i<self._dataList.length;i++){
                var locData = self._dataList[i];
                var locType = self.getActivityValue(locData,gc.dsConsts.ActivityEntity.type);
                if(locType==type){
                    return locData;
                }
            }
            return null;
        }

        /**
         * 根据类型获取ExActivity
         * @param id
         * @returns {*}
         */
        private _getExActivityById(id){
            var self = this;
            for(var i = 0 ;i<self._dataList.length;i++){
                var locData = self._dataList[i];
                var locId = self.getActivityValue(locData,gc.dsConsts.ActivityEntity.id);
                if(locId==id){
                    return locData;
                }
            }
            return null;
        }

        //得到活动每日免费次数
        getFreeDay(activityId){
            var self = this;
            var lData = self.getActivity(activityId);
            var exData =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exData);
            return exData[gc.c_prop.activityExDataTypeKey.freeDay] || 0;;
        }

        //得到活动每日总次数
        getTotalDay(activityId){
            var self = this;
            var lData = self.getActivity(activityId);
            var exData =  self.getActivityValue(lData,gc.dsConsts.ActivityEntity.exData);
            return exData[gc.c_prop.activityExDataTypeKey.totalDay] || 0;;
        }

        /**
         * 得到活动今日已参与次数
         * @param activityId
         */
        getTodayActivityCount (activityId):number{
            var self = this;
            var activity = userCtrl.get(gc.dsConsts.UserEntity.activity);
            var receiveData = activity[activityId] || [0, [0,Date.newDate()]];
            var count = receiveData[1][0];
            var refreshTime = Date.newDate(receiveData[1][1]);

            if(refreshTime){
                refreshTime = Date.newDate(refreshTime);
                if(!refreshTime.equalsDay(Date.newDate())){
                    refreshTime = Date.newDate();
                    count = 0;
                }
            }

            receiveData[1][0] = count;
            receiveData[1][1] = refreshTime;
            activity[activityId] = receiveData;

            userCtrl.set(gc.dsConsts.UserEntity.activity,activity);
            return count;
        }

    }
    export var activityCtrl:ActivityCtrl = ActivityCtrl.getInstance();
}