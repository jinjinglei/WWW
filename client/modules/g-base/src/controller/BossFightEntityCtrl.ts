/**
 * Created by Administrator on 2015/12/17.
 */

module gd {
    export class BossFightEntityCtrl extends mo.DataController {
        public static START_FIGHT_BOSS_IN_FIGHT_SCENE = "START_FIGHT_BOSS_IN_FIGHT_SCENE";
        public static ON_START_FIGHT_BOSS = "ON_START_FIGHT_BOSS";
        public static ON_WORLD_BOSS_OPEN_CHANGE = "ON_WORLD_BOSS_OPEN_CHANGE";

        _syncIntervalId1:any;//同步句柄,5秒钟
        _syncIntervalId2:any;//同步句柄,2秒钟
        _hurtArr:any ;

        _firstHurtRankData:any;
        _firstHurtLastTime:any;
        _isOver:boolean;
        _bossId:any;
        _isOpen:number;
        _startTime:any;

        _roundHurt:number;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.BossData;
            this._hurtArr = [];
            this._isOver = true;
            this._isOpen = 0;
            this._roundHurt = 0;
        }

        setStartTime(time){
            var self =this;
            if(time) time = Date.newDate(time);
            self._startTime = time;
        }

        getStartTime(){
            return this._startTime;
        }

        public isOpen():boolean{
            return this._isOpen!=0;
        }

        //设置是否开启
        setIsOpen(value) {
            var self = this;
            var oldValue = self._isOpen;
            if(self._isOpen!=value){
                self._isOpen = value;

                if(bossCtrl.isGuildBoss(self._bossId)){
                    bossGuildCtrl.freshData(function(){
                        self.pushNotify(self.__class.ON_WORLD_BOSS_OPEN_CHANGE);
                    },self);
                }else{
                    bossWorldCtrl.freshData(function(){
                     self.pushNotify(self.__class.ON_WORLD_BOSS_OPEN_CHANGE);
                    },self);
                }

                if(oldValue==1){
                    self.onOver();
                }
            }
        }

        initilized():boolean{
            var self = this;
            return self._data?true:false;
        }

        setBossId(bossId){
            this._bossId = bossId;
        }

        mData(hurtArr,isEnd){
            var self = this;
            var str = JSON.stringify(hurtArr);
            var key = self.getMyKey();
            return mo.md5(key+str+isEnd);
        }

        //进入系统
        enter(cb, target){
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_boss_enter_args;
            args[argsKeys.bossId] = self._bossId;
            mo.requestWaiting4Server(gc.iface.a_boss_enter, args, function (data) {
                self.init(data);
                var lastExitTime = self.get(gc.dsConsts.BossData.lastExitTime);
                bossFightCtrl.setLastExitTime(lastExitTime);
                var isOver = self.get(gc.dsConsts.BossData.isOver);
                self._isOver = isOver;
                cb.call(target,data);
            });
        }

        //是否自己复活
        isSelfRepeat(){
            var self = this ;
            var isRepeat = self.get(gc.dsConsts.BossData.isRepeat);
            var callUserId = self.get(gc.dsConsts.BossData.callUserId);
            if(isRepeat&&callUserId== userCtrl.getId()){
                return true;
            }else{
                return false;
            }
        }

        //是否行会召唤
        isSelfCall(){
            var self = this ;
            var callUserGuildId = self.get(gc.dsConsts.BossData.callUserGuildId);
            if(callUserGuildId== guildCtrl.getId()){
                return true;
            }else{
                return false;
            }
        }

        //获取我的key值
        getMyKey() {
            return this.get(gc.dsConsts.BossData.myKey);
        }

        //获取BOSS总血量
        getTotalHp() {
            return this.get(gc.dsConsts.BossData.originHp);
        }
        //获取BOSS当前血量killTime
        getCurHp(){
            return this.get(gc.dsConsts.BossData.curHp);
        }

        //获取活动剩余时间
        getReOverSeconds(){
            var self = this;
            var type = self.getType();
            if(type == gc.c_prop.worldBossTypeKey.guild){
                return bossGuildCtrl.getReDisappearSeconds(self._bossId);
            }else{
                return bossWorldCtrl.getReDisappearSeconds(self._bossId);
            }
        }

        //获取开启cd
        getOpenCd(){
            var self = this;
            var type = self.getType();
            if(type == gc.c_prop.worldBossTypeKey.guild){
                return bossGuildCtrl.getOpenCd(self._bossId);
            }else{
                return bossWorldCtrl.getOpenCd(self._bossId);
            }
        }

        //获取战斗cd，返回秒
        getFightCd(){
            var self = this;
            var lastExitTime = bossFightCtrl.getLastExitTime();

            if(!lastExitTime) return 0;
            lastExitTime = Date.newDate(lastExitTime);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var exitCd = c_game[gc.id_c_game.worldBossCfg][1];
            var reSeconds = Date.newDate().getSecondsBetween(lastExitTime.clone().addSeconds(exitCd));
            reSeconds = reSeconds>0?reSeconds:0;
            return reSeconds;
        }

        //清除退出cd
        clearFightCd(cb,target){
            var self = this;
            var args = {};
            mo.requestWaiting4Server(gc.iface.a_boss_clearFightCd, args, function (data) {
                userCtrl.updateEntity(data);
                bossFightCtrl.setLastExitTime(Date.newDate().addDays(-1));
                cb.call(target,data);
            });
        }


        //获取我的伤害
        getMyHurt(){
            return this.get(gc.dsConsts.BossData.myHurt);
        }

        //获取类型
        getType(){
            var self = this;
            var isGuildBoss = bossCtrl.isGuildBoss(self._bossId);
            if(isGuildBoss){
               return gc.c_prop.worldBossTypeKey.guild;
            }else{
                return gc.c_prop.worldBossTypeKey.world;
            }
        }

        //获取我的伤害
        getMyRank(){
            return this.get(gc.dsConsts.BossData.myRank);
        }

        //对boss造成伤害
        hurt(hurt,heroId?){
            var self = this;
            var curHp = self.getCurHp();
            if(curHp<0) return;

            if(self.isLimitHp()){
                self._hurtArr.push([hurt,heroId,0]);
            }else{
                self._roundHurt+=hurt;
                curHp-=hurt;
                self._hurtArr.push([hurt,heroId,1]);
            }

            if(curHp<0) {
                curHp = 0;
                self._pushHurt(1);
            }
            self.set(gc.dsConsts.BossData.curHp,curHp);
        }

        isLimitHp(){
            var self = this;
            if(!bossCtrl.isGuildBoss(self._bossId)) return false;
            var totalHp = this.getTotalHp();
            var per = this._roundHurt/totalHp;
            return per>0.1;
        }

        private _pushHurt(isEnd){
            var self = this;
            if(self._isOver) return;
            isEnd = isEnd || 0;
            if(self._hurtArr.length<=0) return;
            var hurtDic = {};
            var hurtCount = 0;
            var hurtNum = 0;
            for(var i = 0;i<self._hurtArr.length;i++){
                var locHurtData = self._hurtArr[i];
                var locHurt = locHurtData[0];
                var locHeroId = locHurtData[1];
                var locIsHurt = locHurtData[2];

                var locHeroData = hurtDic[locHeroId]||[0,0,0];
                var locHurtCount = locHeroData[0]||0;
                var locHurtNum = locHeroData[1]||0;
                var locCurHurtCount = locHeroData[2]||0;//真实伤害

                locHurtCount = locHurtCount+locHurt;
                locHurtNum++;
                if(locIsHurt){
                    locCurHurtCount = locCurHurtCount+locHurt;
                }

                hurtCount+=locHurt;
                hurtNum++;

                hurtDic[locHeroId] = [locHurtCount,locHurtNum,locCurHurtCount];
            }
            self._hurtArr.length = 0;

            //var mData =self.mData(hurtDic,isEnd);
            var args = {};
            var argsKeys = gc.iface.a_boss_hurt_args;
            args[argsKeys.hurtDic] = hurtDic;
            args[argsKeys.isEnd] = isEnd;
            args[argsKeys.mData] = 1;
            args[argsKeys.bossId] = self.getBossId();
            args[argsKeys.hurtArr] = [hurtCount,hurtNum];
            mo.request4Server(gc.iface.a_boss_hurt, args, function (data) {
                var bossData = data[gc.dsConsts.ExTreasureBossData.bossData];
                var bagItem = data[gc.dsConsts.ExTreasureBossData.bagItem];
                if(!bossData) return;
                if(bagItem){
                    var userData = {};
                    var bag = gd.userUtils.getNewBag({},bagItem);
                    userData[gc.dsConsts.UserEntity.bag] = bag;
                    gd.userCtrl.updateEntity(userData);
                }
                var isOver = bossData[gc.dsConsts.BossData.isOver];
                self.updateEntity(bossData);
                if(isOver) self.onOver();
            });
        }

        //获取bossId,怪物id
        getBossId(){
            return this._bossId;
        }

        //获取鼓舞加成万分比
        getInspireHurt(){
            var self = this;
            if (!self._data) return 0;
            if (self.getInspireReSeconds() <= 0) return 0;
            return self.get(gc.dsConsts.BossData.inspireHurt);
        }

        //获取召唤者的名字
        getCallUserName(){
            return this.get(gc.dsConsts.BossData.callUserName);
        }

        //获取召唤者的公会
        getCallUserGuildName(){
            return this.get(gc.dsConsts.BossData.callUserGuildName);
        }

        //鼓舞
        inspire(cb,target){
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_boss_inspire_args;
            args[argsKeys.bossId] = self.getBossId();
            mo.requestWaiting4Server(gc.iface.a_boss_inspire, args, function (data) {
                var userData = data[gc.dsConsts.ExBossData.userData];
                if(userData) userCtrl.updateEntity(userData);
                var bossData = data[gc.dsConsts.ExBossData.bossData];
                if(bossData) self.updateEntity(bossData);
                //inspireAdd
                mo.showMsg(gc.id_c_msgCode.inspireAdd);
                cb.call(target,data);
            });
        }

        //获取鼓舞剩余时间(秒)
        getInspireReSeconds(){
            var self = this;
            var inspireEndTime = self.get(gc.dsConsts.BossData.inspireEndTime);
            inspireEndTime = Date.newDate(inspireEndTime);
            var reSeconds = Date.newDate().getSecondsBetween(inspireEndTime);
            reSeconds = reSeconds>0?reSeconds:0;
            return reSeconds;
        }

        //获取鼓舞次数
        getInspireNum(){
            var self = this;
            if(!self._data) return 0;
             return self.get(gc.dsConsts.BossData.inspireNum);
        }

        /**
         * 获取鼓舞名字列表
         * @param cb
         * @param target
         */
        getInspireRecordArr(cb,target){
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_boss_getInspireRecordArr_args;
            args[argsKeys.bossId] = self.getBossId();
            mo.requestWaiting4Server(gc.iface.a_boss_getInspireRecordArr, args, function (data) {
                cb.call(target,data);
            });
        }

        //同步鼓舞
        syncInspire(){
            var self = this;
            if(!self._data) return;
            var args = {};
            var argsKeys = gc.iface.a_boss_syncInspire_args;
            args[argsKeys.bossId] = self.getBossId();
            mo.requestWaiting4Server(gc.iface.a_boss_syncInspire, args, function (data) {
                if(data) self.updateEntity(data);
            });
        }

        //获取第一名伤害排名     gc.dsConsts.BossHurtRank
        getFirstHurtRank(cb,target){
            var self = this;
            if(!self._firstHurtLastTime){
                self._firstHurtLastTime = Date.newDate();
            }
            if(self._firstHurtRankData&&self._firstHurtLastTime.getSecondsBetween(Date.newDate())<10){
               return cb.call(target,self._firstHurtRankData);
            }
            self._firstHurtLastTime = Date.newDate();
            self._getFirstHurtRank(cb,target);
        }

        private _getFirstHurtRank(cb,target){
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_boss_getFirstHurtRank_args;
            args[argsKeys.bossId] = self.getBossId();
            mo.request4Server(gc.iface.a_boss_getFirstHurtRank, args, function (data) {
                self._firstHurtRankData = data;
                cb.call(target,data);
            });
        }

        //获取前20伤害排名     [gc.dsConsts.BossHurtRank]
        getHurtRankList(cb,target){
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_boss_getHurtRankList_args;
            args[argsKeys.bossId] = self.getBossId();
            mo.request4Server(gc.iface.a_boss_getHurtRankList, args, function (data) {
                cb.call(target,data);
            });
        }

        //可以参与战斗的用户等级
        getFightableLvl(){
            var self = this;
            var type =self.getType(), bossId = self.getBossId();
            var fightLvl = 0;
            if(type==gc.c_prop.worldBossTypeKey.guild){
                var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
                var c_data = c_bossParameter[bossId];
                fightLvl = c_data[gc.c_bossParameter_fightLvl];
            }
            return fightLvl;
        }

        //可以参与战斗的用户等级
        getFightMaxLvl(){
            var self = this;
            var type =self.getType(), bossId = self.getBossId();
            var fightLvl = 99999;
            if(type==gc.c_prop.worldBossTypeKey.guild){
                var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
                var c_data = c_bossParameter[bossId];
                fightLvl = c_data[gc.c_bossParameter_maxLvl];
            }
            return fightLvl;
        }

        //参与战斗
        startFight(cb,target){
            var self = this;
            var bossId = self.getBossId();

            //判断再次挑战的CD
            if(self.getFightCd() > 0) return mo.showMsg(gc.id_c_msgCode.challengeBossCd);
            //判断等级
            var fightLvl = self.getFightableLvl();
            var maxLvl = self.getFightMaxLvl();
            if(userCtrl.getLvl()<fightLvl||userCtrl.getLvl()>maxLvl) return mo.showMsg(gc.id_c_msgCode.noLvlchallengeBoss,fightLvl,maxLvl);

            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            var args = {};
            var argsKeys = gc.iface.a_boss_startFight_args;
            args[argsKeys.bossId] = bossId;
            mo.requestWaiting4Server(gc.iface.a_boss_startFight, args, function (data) {
                self._roundHurt = 0;
                var bossData = data[gc.dsConsts.ExBossData.bossData];
                var userData = data[gc.dsConsts.ExBossData.userData];
                if(userData)  userCtrl.updateEntity(userData);
                var isFirstEnter = bossData[gc.dsConsts.BossData.isFirstEnter];
                if(isFirstEnter) self._hurtArr.length = 0;
                self._isOver = false;
                gd.fightCtrl.isSpFighting = true;
                bossFightCtrl.setCurFightBossId(bossId);
                self._startUpdateInterval1();
                bossFightCtrl.clearUpdateIntervalId2();
                gd.curBFECtrl = self; //设置当前使用的bossFightEntityCtrl
                //进入战斗场景
                if(mo.moduleMgr.curModule.name == g_consts.moduleId.home){
                    mo.moduleMgr.runModule(g_consts.moduleId.fight);
                }else{
                    self.pushNotify(self.__class.START_FIGHT_BOSS_IN_FIGHT_SCENE);
                }
                gd.fightLayer.onEnterWorldBoss({bossId:self.getBossId()});
                self.pushNotify(self.__class.ON_START_FIGHT_BOSS);

                cb.call(target,bossData);
            });
        }
        //退出战斗
        exitFight(cb,target){
            var self = this;
            var bossId = self.getBossId();
            var args = {};
            var argsKeys = gc.iface.a_boss_exitFight_args;
            args[argsKeys.bossId] = bossId;
            self._pushHurt(1);
            mo.requestWaiting4Server(gc.iface.a_boss_exitFight, args, function (data) {
                self.clearUpdateIntervalId1();
                bossFightCtrl.startUpdateInterval2();
                bossFightCtrl.setLastExitTime(Date.newDate());
                bossFightCtrl.setCurFightBossId(null);
                cb.call(target,data);
            });
        }

        /**
         * 获取战斗结果
         * @param cb
         * @param target
         * @returns ds.BossResult
         */
        getBossResult(cb,target){
            var self = this;
            var bossId = self.getBossId();
            var args = {};
            var argsKeys = gc.iface.a_boss_getBossResult_args;
            args[argsKeys.bossId] = bossId;
            args[argsKeys.originBossId] = self.getOriginBossId();
            mo.requestWaiting4Server(gc.iface.a_boss_getBossResult, args, function (data) {
                cb.call(target,data);
            });
        }

        /**
         * 获取原始id
         * @returns {*|*|*|*|*|*|*|*|*|*|*}
         */
        getOriginBossId(){
            var self = this;
            var type = self.getType();
            if(type == gc.c_prop.worldBossTypeKey.guild){
                return bossGuildCtrl.getOriginBossId(self._bossId);
            }else{
                return bossWorldCtrl.getOriginBossId(self._bossId);
            }
        }

        /**
         * 获取结算结果
         * @param cb
         * @param target
         * @returns ds.BossResultData
         */
        getResultData(cb,target){
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_boss_getResultData_args;
            args[argsKeys.originBossId] = self.getOriginBossId();
            mo.requestWaiting4Server(gc.iface.a_boss_getResultData, args, function (data) {

                cb.call(target,data);
            });
        }

        isOver(){
            return this._isOver;
        }

        private _startUpdateInterval1(){
            var self = this;
            self.clearUpdateIntervalId1();
            self._syncIntervalId1 = mo.setInterval(self._update1,self,3*1000);//3秒

        }

        private _update1(){
            var self = this;
            self._pushHurt(0);
        }

        clearUpdateIntervalId1(){
            var self = this;
            if(self._syncIntervalId1){
                mo.clearInterval(self._syncIntervalId1);
                self._syncIntervalId1 = null;
            }
        }

        /********************************************/
        //监听数据改变
        onChangeData(){
            //数据改动
        }

        onOver(){
            //结束
            var self = this;
            if(self._isOver) return;
            self._isOver = true;

            bossFightCtrl.endAutoFight();

            self._hurtArr.length = 0;

            self.setIsOpen(0);
            self._getFirstHurtRank(function(){},this);
            self.clearUpdateIntervalId1();
            //有伤害才弹出
            var myHurt = self.getMyHurt();
            if(myHurt>0){
                gd.fightLayer.onWorldBossOver(self);
            }
            self.exitFight(function(){},self);
        }
    }
}
