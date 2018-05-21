/**
 * Created by Administrator on 2015/12/17.
 */

module gd {
    export class BossWorldCtrl extends mo.DataController {
        public static ON_BOSS_CALL_UPDATE:String = "ON_BOSS_CALL_UPDATE";
        public static ON_WORLD_BOSS_OPEN_CHANGE:String = "ON_WORLD_BOSS_OPEN_CHANGE";
        public static BOSS_STATUS = {fighting:2,sleep:3,cd:4,canCall:5,prize:6};//2，正在挑战中 ,3，Boss正在休息 ,4，已被击杀,cd中 ,5，可召唤,6，结算中
        _bossListData:any ;
        _otherData:any;
        _nowDate:any;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.BossData;
        }

        /**
         * 获取boss信息
         * @param cb
         * @param target
         */
        getInfo(cb, target) {
            var self = this;
            self._initGuild(function(){
                mo.requestWaiting4Server(gc.iface.a_boss_getWorldBossList, {}, function (data) {
                    var otherData = data[gc.dsConsts.ExBossEntity.otherData];
                    self._otherData = otherData;
                    var nowDate = data[gc.dsConsts.ExBossEntity.nowDate];
                    self._nowDate = Date.newDate(nowDate);
                    var dataList = data[gc.dsConsts.ExBossEntity.bossList];
                    self._bossListData = {};
                    for (var i = 0; i < dataList.length; i++) {
                        var locData = dataList[i];
                        var locBossId = locData[gc.dsConsts.BossEntity.bossId];
                        self._bossListData[locBossId] = locData;
                    }
                    cb.call(target);
                });
            },self);
        }

        /**
         * 刷新boss信息
         * @param cb
         * @param target
         */
        freshData(cb, target) {
            var self = this;
            self._initGuild(function(){
                mo.request4Server(gc.iface.a_boss_getWorldBossList, {}, function (data) {
                    var otherData = data[gc.dsConsts.ExBossEntity.otherData];
                    self._otherData = otherData;
                    var dataList = data[gc.dsConsts.ExBossEntity.bossList];
                    self._bossListData = {};
                    for (var i = 0; i < dataList.length; i++) {
                        var locData = dataList[i];
                        var locBossId = locData[gc.dsConsts.BossEntity.bossId];
                        self._bossListData[locBossId] = locData;
                    }
                    cb.call(target);
                });
            },self);
        }

        private _initGuild(cb, target){
            if(guildCtrl.getData()){
                cb.call(target);
            }else{
                guildCtrl.getInfo(cb, target);
            }
        }

        //
        getBossData(bossId){
            var self = this;
            for(var key in self._bossListData){
                return self._bossListData[key];
            }
            return null;
            //todo 目前只有1个
            //var bossData = self._bossListData[bossId];
        }

        /**
         * 获取其他数据
         * @param bossId
         * @returns []
         */
        getOtherData(bossId){
            var self = this;
            var otherData = self._otherData[bossId];
            return otherData;
        }

        //是否限时
        isLimitTime(bossId){
            var self = this;
            var bossData = self.getBossData(bossId);
            var isLimit = bossData[gc.dsConsts.BossEntity.isLimit];
            return isLimit;
        }

        //获取限时开始时间
        getLimitStartTime(bossId){
            var self = this;
            var bossData = self.getBossData(bossId);
            return bossData[gc.dsConsts.BossEntity.limitStartTime];
        }

        //获取限时结束时间
        getLimitEndTime(bossId){
            var self = this;
            var bossData = self.getBossData(bossId);
            return bossData[gc.dsConsts.BossEntity.limitEndTime];
        }

        //获取原始id
        getOriginBossId(bossId){
            var self = this;
            var bossData = self.getBossData(bossId);
            return bossData[gc.dsConsts.BossEntity.originBossId];
        }

        /**
         * 判断boss状态
         * @param bossId
         * @returns {number} 1，未开启 ,2，正在挑战中 ,3，Boss正在休息 ,4，已被击杀,cd中 ,5，可召唤,6，结算中
         */
        getBossStatus(bossId) {
            var self = this;

            var bossData = self.getBossData(bossId);
            var status = bossData[gc.dsConsts.BossEntity.status];
            //正在挑战中
            if (status == 1) return BossFightCtrl.BOSS_STATUS.fighting;

            //结算中
            if (status == 2) return BossFightCtrl.BOSS_STATUS.prize;

            var openStartTime = self.getOpenStartTime(bossId);
            var openEndTime = self.getOpenEndTime(bossId);

            if(self._nowDate.isBefore(openStartTime)||self._nowDate.isAfter(openEndTime)){
                return BossFightCtrl.BOSS_STATUS.sleep;
            }

            var deathTime = bossData[gc.dsConsts.BossEntity.deathTime];
            if(deathTime){
                deathTime = Date.newDate(deathTime);
                if(self._nowDate.isAfter(openStartTime)&&self._nowDate.isBefore(openEndTime)){
                    return BossFightCtrl.BOSS_STATUS.cd;
                }
            }
            return BossFightCtrl.BOSS_STATUS.fighting;
        }

        //通过当前bossId获取当前正结算中/已被击杀的bossId
        getDeathBossId(bossId){
            var self = this;
            var bossData = self.getBossData(bossId);
            return bossData[gc.dsConsts.BossEntity.deathBossId] || bossId;
        }

        //获取开始时间
        getOpenStartTime(bossId) {
            var c_bossWorldData = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld,bossId);
            var startTime = c_bossWorldData[gc.c_bossWorld_startTime];
            var startTimeHours = parseInt(startTime[0]);
            var startTimeMinutes = parseInt(startTime[1]);

            var reTime = this._nowDate.clone().clearTime();
            reTime.addHours(startTimeHours).addMinutes(startTimeMinutes);
            return reTime;
        }

        //获取结束时间
        getOpenEndTime(bossId) {
            var c_bossWorldData = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld,bossId);
            var endTime = c_bossWorldData[gc.c_bossWorld_endTime];

            var endTimeHours = parseInt(endTime[0]);
            var endTimeMinutes = parseInt(endTime[1]);

            var reTime = this._nowDate.clone().clearTime();
            reTime.addHours(endTimeHours).addMinutes(endTimeMinutes);
            return reTime;
        }


        //获取剩余消失时间
        getReDisappearSeconds(bossId) {
            var self = this;
            var openEndTime = self.getOpenEndTime(bossId);
            var diffSeconds = this._nowDate.clone().getSecondsBetween(openEndTime);
            diffSeconds = diffSeconds > 0 ? diffSeconds : 0;
            return diffSeconds;
        }

        //获取结算剩余时间
        getRePrizeSeconds(bossId) {
            var self = this;
            var bossData = self.getBossData(bossId);
            var endTime = bossData[gc.dsConsts.BossEntity.endTime];
            endTime = Date.newDate(endTime);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var prizeTime = c_game[gc.id_c_game.worldBossCfg][8];
            var diffSeconds = self._nowDate.getSecondsBetween(endTime.clone().addSeconds(prizeTime));
            diffSeconds = diffSeconds > 0 ? diffSeconds : 0;
            return diffSeconds;
        }

        //是否在限时内
        isInStartTime(bossId){
            var self = this;
            var ret = true;
            var bossData = self.getBossData(bossId);
            var isLimit = self.isLimitTime(bossId);
            if(isLimit){
                var startTime = Date.newDate(self.getLimitStartTime(bossId));
                var endTime = Date.newDate(self.getLimitEndTime(bossId));
                var nowTime = self._nowDate.clone();
                if(nowTime.isBefore(startTime) || nowTime.isAfter(endTime)) {
                    ret = false;
                }
            }
            return ret;
        }


        //获取boss列表
        getBossList():any{
            var self = this;
            var array = [];
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);

            for(var key in self._bossListData){
                if(!self.isInStartTime(key)) continue;
                var obj = c_bossWorld[key];
                array.push(obj);
            }
            array.sort(function(a, b){
                return a[gc.c_bossParameter_sort] - b[gc.c_bossParameter_sort];
            });
            return array;
        }

        /**
         * 获取开启cd
         * @returns {number}
         */
        getOpenCd(bossId) {
            var self = this;
            return 0;
        }
    }
    export var bossWorldCtrl:BossWorldCtrl = BossWorldCtrl.getInstance();
}
