/**
 * Created by Sara on 2016/6/23.
 */
module gd {
    export class NewFourDaysCtrl extends mo.DataController {
        static ON_RECEIVED = "on_received";
        static MAX_DAY = 4;

        _day :number;
        _items: any;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.FiveDaysTaret;
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
        }

        //初始化四日目标数据
        getInfo(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_fiveDaysTarget_getInfo1, {}, function (data) {
                //self.init(data);
                self._day =   data[gc.dsConsts.FiveDaysTaret.day];
                self._items = data[gc.dsConsts.FiveDaysTaret.items];
                cb.call(target,data);
            });
        }

        //得到特定天数的数据
        //[status 0 可领取 -2活动过期 -1未达成 1 已领取, [排行数据], 第几天]
        getItemInfoByDay(dayIdx) {
            var self = this;
            if (dayIdx < self._items.length){
                var item = self._items[dayIdx];
                var value = item[gc.dsConsts.ExFiveDaysTargetData.value];
                var status = -1;
                var exActivity = gd.activityCtrl.getNewFourActivity();
                var activityId = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
                var activityData = gd.userCtrl.getActivity() || {};
                var receiveData =  activityData[activityId] || [];
                var receiveCount = 0;
                receiveCount = receiveData[dayIdx] || -1;

                //获取领奖信息
                if (receiveCount > 0) {
                    return [receiveCount, item[gc.dsConsts.ExFiveDaysTargetData.rank], dayIdx];
                }

                //活动结束
                var curActDay = self.getCurActDay();
                if(curActDay >= self.__class.MAX_DAY){
                    return [-2, item[gc.dsConsts.ExFiveDaysTargetData.rank], dayIdx];
                }

                var wingSumLvl = 0;
                var gemSumLvl = 0;
                var realmSumLvl = 0;
                var heroMap = gd.heroCtrl.getHeroMap();
                for (var key in heroMap) {
                    var heroData = heroMap[key];
                    if(heroData.get(gc.dsConsts.HeroEntity.wingSumLvl)) wingSumLvl += parseInt(heroData.get(gc.dsConsts.HeroEntity.wingSumLvl));
                    if(heroData.get(gc.dsConsts.HeroEntity.gemSumLvl)) gemSumLvl += parseInt(heroData.get(gc.dsConsts.HeroEntity.gemSumLvl));
                    if(heroData.get(gc.dsConsts.HeroEntity.realmSumLvl)) realmSumLvl += parseInt(heroData.get(gc.dsConsts.HeroEntity.realmSumLvl));
                }
                wingSumLvl = (wingSumLvl/100);
                realmSumLvl = (realmSumLvl/100);
                var needValue = 99999999;
                var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
                var newFourNeedValue = c_game[gc.id_c_game.newFourNeedValue];
                switch (dayIdx) {
                    case 0:
                    {
                        needValue = newFourNeedValue[0];
                        if (wingSumLvl >= needValue) {
                            status = 0;
                        }
                        break;
                    }
                    case 1:
                    {
                        needValue = newFourNeedValue[1];
                        if (gemSumLvl >= needValue) {
                            status = 0;
                        }
                        break;
                    }
                    case 2:
                    {
                        needValue = newFourNeedValue[2];
                        if (realmSumLvl >= needValue) {
                            status = 0;
                        }
                        break;
                    }
                    case 3:
                    {
                        needValue = newFourNeedValue[3];
                        if (gd.userCtrl.getCombat() >= needValue) {
                            status = 0;
                        }
                        break;
                    }
                    case 4:
                        return [-1, [], dayIdx];
                        break;
                }
                return [status, item[gc.dsConsts.ExFiveDaysTargetData.rank], dayIdx];
            }
            return [-1, [], dayIdx];
        }

        getNormalTargetInfo(dayIdx){
            var self = this;
            //0 可领取 -2活动过期 -1未达成 1 已领取
            var status = gd.newFourDaysCtrl.getItemInfoByDay(dayIdx)[0];
            var finished = status >= 0;
            var outDate = status == -2;
            var canGet = status == 0;
            var isGot = status == 1;
            return [finished, canGet, isGot, outDate];
        }

        getRankList(dayIdx){
            var self = this;
            var rankList = gd.newFourDaysCtrl.getItemInfoByDay(dayIdx)[1];
            var ret = [];
            for(var i = 0, li = 3; i < li; i++){
                ret[i] = null;
                if(rankList[i]) ret[i] = rankList[i];
            }
            return ret;
        }

        //领奖
        receive(idx, cb, ctx?){
            var self = this;
            //不准领为开启的活动
            var todayIdx = self.getCurActDay();
            if(idx > todayIdx) return mo.showMsg(gc.id_c_msgCode.eventNoStart);
            //目标是否达成
            var normalTargetInfo = self.getNormalTargetInfo(idx);
            var finished = normalTargetInfo[0];
            var outDate = normalTargetInfo[3];
            if(!finished){
                if(outDate){//是否过期
                    return mo.showMsg(gc.id_c_msgCode.activitiesEnd);
                }else{
                    return mo.showMsg(gc.id_c_msgCode.goalNotGet);
                }
            }

            var exActivity = gd.activityCtrl.getNewFourActivity();
            gd.activityCtrl.receive(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), idx, function(){
                self.pushNotify(self.__class.ON_RECEIVED, idx);
                cb.call(ctx, idx);
            },self);
        }

        getActivityStartTime(){
            var exActivity = gd.activityCtrl.getNewFourActivity();
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            return activity[gc.dsConsts.ActivityEntity.startTime];
        }

        getActivityEndTime(){
            var self = this;
            var endTime = Date.newDate(self.getActivityStartTime());
            endTime.addDays(self.__class.MAX_DAY);
            endTime.setHours(0);
            endTime.setMinutes(0);
            endTime.setSeconds(0);
            return endTime;
        }
        //今天是活动第几天
        getCurActDay(){
            var self = this;
            var exActivity = gd.activityCtrl.getNewFourActivity();
            return exActivity[gc.dsConsts.ExActivity.days];
        }

        //是否认证过了
        isCertified(dayIdx){
            var self = this;
            var curActDay = self.getCurActDay();
            return dayIdx < curActDay;
        }

        isTodayTarget(dayIdx){
            var self = this;
            var curActDay = self.getCurActDay();
            return curActDay == dayIdx;
        }

        // 获取结算时间
        getCalTime(dayIdx){
            var self = this;
            var starTime = Date.newDate(self.getActivityStartTime());
            var endTime = Date.newDate(starTime);
            endTime.addDays(dayIdx+1);
            endTime.setHours(0);
            endTime.setMinutes(0);
            endTime.setSeconds(0);
            return endTime;
        }

        //获取改日目标开始时间
        getStarTime(dayIdx){
            var self = this;
            var starTime = Date.newDate(self.getActivityStartTime());
            var starTime = starTime.addDays(dayIdx);
            if (dayIdx > 0) {
                starTime.setHours(0);
                starTime.setMinutes(0);
                starTime.setSeconds(0)
            }
            return starTime;
        }
    }
    export var newFourDaysCtrl:NewFourDaysCtrl = NewFourDaysCtrl.getInstance();
}