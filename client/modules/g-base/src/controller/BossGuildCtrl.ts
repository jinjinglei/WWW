/**
 * Created by Administrator on 2015/12/17.
 */

module gd {
    export class BossGuildCtrl extends mo.DataController {
        public static ON_BOSS_CALL_UPDATE:String = "ON_BOSS_CALL_UPDATE";
        public static ON_WORLD_BOSS_OPEN_CHANGE:String = "ON_WORLD_BOSS_OPEN_CHANGE";

        _bossListData:any ;
        _otherData:any;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.BossData;
            this._bossListData = {};
        }

        /**
         * 获取boss信息
         * @param cb
         * @param target
         */
        getInfo(cb, target) {
            var self = this;
            self._initGuild(function(){
                mo.requestWaiting4Server(gc.iface.a_boss_getGuildBossList, {}, function (data) {
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

        //获取boss
        getBossData(bossId){
            var self = this;
            return self._bossListData[bossId];
        }

        /**
         * 刷新boss信息
         * @param cb
         * @param target
         */
        freshData(cb, target) {
            var self = this;
            self._initGuild(function(){
                mo.request4Server(gc.iface.a_boss_getGuildBossList, {}, function (data) {
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

        //是否已经存在挑战的boss
        hasFightingBoss(){
            var self = this;
            for (var key in self._bossListData) {
                var locBossId = key;
                var locStatus = self.getBossStatus(locBossId);
                if(locStatus== BossFightCtrl.BOSS_STATUS.fighting){
                    return true;
                }
            }
            return false;
        }

        //本行会是否正在挑战boss
        hasGuildFightingBoss(){
            var self = this;
            for (var key in self._bossListData) {
                var locBossId = key;
                var locStatus = self.getBossStatus(locBossId);
                if (locStatus == BossFightCtrl.BOSS_STATUS.fighting) {
                    var locOtherData = self.getOtherData(locBossId);
                    var locGuildId = locOtherData[0];
                    if (locGuildId && guildCtrl.getData() && locGuildId == guildCtrl.get(gc.dsConsts.GuildEntity.id))
                        return true;
                }
            }
            return false;
        }

        /**
         * 获取其他数据
         * @param bossId
         * @returns [行会id,行会名称，是否上锁]
         */
        getOtherData(bossId){
            var self = this;
            var otherData = self._otherData[bossId];
            return otherData;
        }

        //是否限时
        isLimitTime(bossId){
            var self = this;
            var bossData = self._bossListData[bossId];
            var isLimit = bossData[gc.dsConsts.BossEntity.isLimit];
            return isLimit;
        }

        //获取限时开始时间
        getLimitStartTime(bossId){
            var self = this;
            var bossData = self._bossListData[bossId];
            return bossData[gc.dsConsts.BossEntity.limitStartTime];
        }

        //获取限时结束时间
        getLimitEndTime(bossId){
            var self = this;
            var bossData = self._bossListData[bossId];
            return bossData[gc.dsConsts.BossEntity.limitEndTime];
        }

        //获取原始id
        getOriginBossId(bossId){
            var self = this;
            var bossData = self._bossListData[bossId];
            return bossData[gc.dsConsts.BossEntity.originBossId];
        }

        /**
         * 判断boss状态
         * @param bossId
         * @returns {number} 1，未开启 ,2，正在挑战中 ,3，Boss正在休息 ,4，已被击杀,cd中 ,5，可召唤,6，结算中
         */
        getBossStatus(bossId) {
            var self = this;
            //没工会未开启
            //if (!guildCtrl.getData()) return 1;
            //var guildLvl = guildCtrl.get(gc.dsConsts.GuildEntity.lvl);
            //var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            //var c_data = c_bossParameter[bossId];
            //var openLvl = c_data[gc.c_bossParameter_openLvl];
            //未开启
            //if (guildLvl < openLvl) return 1;

            var bossData = self._bossListData[bossId];
            var status = bossData[gc.dsConsts.BossEntity.status];
            //正在挑战中
            if (status == 1) return BossFightCtrl.BOSS_STATUS.fighting;

            //结算中
            if (status == 2) return BossFightCtrl.BOSS_STATUS.prize;

            //Boss正在休息
            var nowDate = Date.newDate();
            if (nowDate.isBefore(self.getOpenStartTime()) || nowDate.isAfter(self.getOpenEndTime())) {
                return BossFightCtrl.BOSS_STATUS.sleep;
            }

            var cd = self.getOpenCd(bossId);
            //已被击杀,cd中
            if (cd > 0) return BossFightCtrl.BOSS_STATUS.cd;

            //可召唤
            return BossFightCtrl.BOSS_STATUS.canCall;
        }

        //获取开始时间
        getOpenStartTime() {
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var startTime = c_game[gc.id_c_game.worldBossCfg][5];
            var startTimeHours = parseInt(startTime.split(";")[0]);
            var startTimeMinutes = parseInt(startTime.split(";")[1]);

            var reTime = Date.newDate().clearTime();
            reTime.addHours(startTimeHours).addMinutes(startTimeMinutes);
            return reTime;
        }

        //获取结束时间
        getOpenEndTime() {
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var startTime = c_game[gc.id_c_game.worldBossCfg][6];
            var startTimeHours = parseInt(startTime.split(";")[0]);
            var startTimeMinutes = parseInt(startTime.split(";")[1]);

            var reTime = Date.newDate().clearTime();
            reTime.addHours(startTimeHours).addMinutes(startTimeMinutes);
            return reTime;
        }

        /**
         * 获取开启cd
         * @returns {number}
         */
        getOpenCd(bossId) {
            var self = this;
            /*            var status = self.getBossStatus(bossId);
             if(status!=1) return 0;*/
            var bossData = self._bossListData[bossId];


            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_data = c_bossParameter[bossId];
            var summonCd = c_data[gc.c_bossParameter_summonCd];
            var deathTime = bossData[gc.dsConsts.BossEntity.deathTime] || Date.newDate().addDays(-10);
            deathTime = new Date(deathTime);
            var diffSeconds = deathTime.getSecondsBetween(Date.newDate());
            var cd = summonCd - diffSeconds;
            cd = cd > 0 ? cd : 0;
            return cd;
        }

        //获取剩余消失时间
        getReDisappearSeconds(bossId) {
            var self = this;
            var bossData = self._bossListData[bossId];
            var startTime = bossData[gc.dsConsts.BossEntity.startTime];
            startTime = new Date(startTime);
            var c_boss = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
            var aliveTime = c_boss[gc.c_bossParameter_timeLimit];
            var diffSeconds = Date.newDate().getSecondsBetween(startTime.clone().addSeconds(aliveTime));
            diffSeconds = diffSeconds > 0 ? diffSeconds : 0;
            return diffSeconds;
        }

        //获取结算剩余时间
        getRePrizeSeconds(bossId) {
            var self = this;
            var bossData = self._bossListData[bossId];
            var endTime = bossData[gc.dsConsts.BossEntity.endTime];
            endTime = new Date(endTime);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var prizeTime = c_game[gc.id_c_game.worldBossCfg][8];
            var diffSeconds = Date.newDate().getSecondsBetween(endTime.clone().addSeconds(prizeTime));
            diffSeconds = diffSeconds > 0 ? diffSeconds : 0;
            return diffSeconds;
        }

        //是否在限时内
        isInStartTime(bossId){
            var self = this;
            var ret = true;
            var bossData = self._bossListData[bossId];
            var isLimit = self.isLimitTime(bossId);
            if(isLimit){
                var startTime = Date.newDate(self.getLimitStartTime(bossId));
                var endTime = Date.newDate(self.getLimitEndTime(bossId));
                var nowTime = Date.newDate();
                if(nowTime.isBefore(startTime) || nowTime.isAfter(endTime)) {
                    ret = false;
                }
            }
            return ret;
        }

        //是否在周几内
        isInWeek(bossId) {
            var self = this;
            var bossData = self._bossListData[bossId];
            var week = bossData[gc.dsConsts.BossEntity.week];
            if (week <= 0) return true;
            var nowDate = Date.newDate();
            var day = nowDate.getDay();
            if (week == 7 && day == 0) return true;
            if (week == day) return true;
            return false;
        }

        //获取在周几内
        getWeek(bossId) {
            var self = this;
            var bossData = self._bossListData[bossId];
            var week = bossData[gc.dsConsts.BossEntity.week];
            return week;
        }

        /**
         * 获取每周boss数据
         * @returns {"周几":[bossId,bossId]}
         */
        getWeekBossData(){
            var self = this;
            var reData = {};
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);

            for(var key in self._bossListData){
                if(!self.isInStartTime(key)) continue;
                if(!self.isLimitTime(key)) continue;
                var obj = c_bossParameter[key];
                if(!obj[gc.c_bossParameter_isOpen]) continue;
                var week = self._bossListData[key][gc.dsConsts.BossEntity.week];
                var locArr = reData[week]||[];
                locArr.push(key);
                reData[week] = locArr;
            }

            return reData;
        }

        //获取限时boss列表
        getLimitBossList(isFight):any{
            var self = this;
            var array = [];
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);

            for(var key in self._bossListData){
                if(!self.isInStartTime(key)) continue;
                if(!self.isLimitTime(key)) continue;
                if(!self.isInWeek(key)) continue;

                var obj = c_bossParameter[key];
                if(!obj[gc.c_bossParameter_isOpen]) continue;
                var status = self.getBossStatus(key);
                if(isFight){
                    if(status!=BossFightCtrl.BOSS_STATUS.fighting) continue;
                }else{
                    if(status==BossFightCtrl.BOSS_STATUS.fighting) continue;
                }
                array.push(obj);
            }
            array.sort(function(a, b){
                return a[gc.c_bossParameter_sort] - b[gc.c_bossParameter_sort];
            });
            return array;
        }

        //获取行会boss
        getBossList(isFight, level):any{
            var self = this;
            var array = [];
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);

            for(var key in self._bossListData){
                if(!self.isInStartTime(key)) continue;
                if(self.isLimitTime(key)) continue;
                var obj = c_bossParameter[key];
                if(!obj[gc.c_bossParameter_isOpen]) continue;
                var status = self.getBossStatus(key);
                if(isFight){
                    if(status!=BossFightCtrl.BOSS_STATUS.fighting) continue;
                }else{
                    if(status==BossFightCtrl.BOSS_STATUS.fighting) continue;
                    var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, key);
                    if(monsterInfo[gc.t_monster_level]!=level) continue;
                }
                array.push(obj);
            }
            array.sort(function(a, b){
                return a[gc.c_bossParameter_sort] - b[gc.c_bossParameter_sort];
            });
            return array;
        }

        getLockCost(){ //获取行会boss上锁花销(元宝)
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            return c_game[gc.id_c_game.newBossCfg][2];
        }

        getOpenChannelCost(){//获取开额外通道花销(元宝)
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            return c_game[gc.id_c_game.newBossCfg][1];
        }

        //获取复活次数
        getRepeatCount(bossId){
            var self = this;
            var bossData = self._bossListData[bossId];
            var repeatTime = bossData[gc.dsConsts.BossEntity.repeatTime];
            if(!repeatTime) repeatTime = Date.newDate();
            repeatTime = Date.newDate(repeatTime);

            bossData[gc.dsConsts.BossEntity.repeatTime] = repeatTime;

            if(!(Date.newDate()).equalsDay(bossData[gc.dsConsts.BossEntity.repeatTime])){
                bossData[gc.dsConsts.BossEntity.repeatCount] = 0;
            }

            return bossData[gc.dsConsts.BossEntity.repeatCount];
        }

        //获取复活消耗
        getRepeatCost(bossId,isLock){
            var self = this;
            var costDiamond = 0;
            var repeatCount = self.getRepeatCount(bossId);
            var t_monsterData = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            var bossEntity = bossFightCtrl.getEntity(bossId);
            var openCd = bossEntity.getOpenCd();
            var repeatCost = gc.calGuildBossRepeat(t_monsterData[gc.t_monster_level],openCd,repeatCount);
            repeatCost = parseInt(repeatCost.toString());
            costDiamond+=repeatCost;
            //判断上锁
            if(isLock){
                var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
                var lockCost = c_game[gc.id_c_game.newBossCfg][2];      //副本字段区间
                costDiamond += lockCost;
            }
            return costDiamond;
        }

        //召唤系统
        openBoss(bossId,isLock, cb, target) {
            var self = this;
            if (!guildCtrl.isOpenBoss()) return mo.showMsg("此功能暂时关闭！");
            //限时控制
            if(!self.isInStartTime(bossId)){
                return mo.showMsg(gc.id_c_msgCode.timeOutCantCall);
            }


            var args = {};
            var argsKeys = gc.iface.a_boss_openBoss_args;
            args[argsKeys.bossId] = bossId;
            args[argsKeys.isLock] = isLock;
            mo.requestWaiting4Server(gc.iface.a_boss_openBoss, args, function (data) {
                bossFightCtrl.delEntity(bossId);

                var bossEntity = data[gc.dsConsts.ExBossData.bossEntity];
                self._bossListData[bossId] = bossEntity;
                var userData = data[gc.dsConsts.ExBossData.userData];
                var delBagItems = data[gc.dsConsts.ExBossData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                userCtrl.updateEntity(userData);

                self.pushNotify(self.__class.ON_BOSS_CALL_UPDATE);
                cb.call(target, data);
            });
        }

        //获取未击杀数量
        getNotKillNumByLvl(lvl){
            //BOSS_STATUS = {fighting:2,sleep:3,cd:4,canCall:5,prize:6};//2，正在挑战中 ,3，Boss正在休息 ,4，已被击杀,cd中 ,5，可召唤,6，结算中
            var self =this;
            var reNum = 0;
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            for(var key in self._bossListData){
                if(!self.isInStartTime(key)) continue;
                if(self.isLimitTime(key)) continue;
                var obj = c_bossParameter[key];
                if(!obj[gc.c_bossParameter_isOpen]) continue;

                var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, key);
                if(monsterInfo[gc.t_monster_level]!=lvl) continue;
                var status = self.getBossStatus(key);
                if(status==BossFightCtrl.BOSS_STATUS.cd||status==BossFightCtrl.BOSS_STATUS.prize) continue;
                reNum++;
            }
            return reNum;
        }

        checkAndShowLvlEnough(bossId):boolean{
            var self = this;
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_boss = c_bossParameter[bossId];
            if(gd.userCtrl.getLvl() < c_boss[gc.c_bossParameter_fightLvl]){
                mo.showMsg(gc.id_c_msgCode.noLvlchallengeBoss,c_boss[gc.c_bossParameter_fightLvl]);
                return false;
            }
            return true;
        }

    }
    export var bossGuildCtrl:BossGuildCtrl = BossGuildCtrl.getInstance();
}
