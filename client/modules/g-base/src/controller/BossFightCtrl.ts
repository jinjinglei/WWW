/**
 * Created by Administrator on 2015/12/17.
 */

module gd {
    export class BossFightCtrl extends mo.DataController {
        public static ON_BOSS_CALL_UPDATE:String = "ON_BOSS_CALL_UPDATE";
        public static ON_BOSS_AUTO_FIGHT:String = "ON_BOSS_AUTO_FIGHT";
        public static ON_WORLD_BOSS_OPEN_CHANGE:String = "ON_WORLD_BOSS_OPEN_CHANGE";
        public static BOSS_STATUS = {fighting:2,sleep:3,cd:4,canCall:5,prize:6};//2，正在挑战中 ,3，Boss正在休息 ,4，已被击杀,cd中 ,5，可召唤,6，结算中

        _entityDic:any;
        _isAutoFight:boolean;
        _syncIntervalId2:any;
        _lastExitTime:any;
        _curFightBossId:any;//当前正在挑战的bossId
        _autoBossId:any;//自动挑战的bossId

        _openBossIds:any;
        _initProp() {
            super._initProp();
            this._entityDic = {};
            this._isAutoFight = false;
            this._openBossIds = [];
        }

        //获取开启的bossid组
        getOpenIds(){
            return this._openBossIds;
        }

        //通过类型获取
        getOpenIdsByType(type,isLimit?){
            var self = this;
            var openBossIds = [];
            var guildBossIds = [];
            var worldBossIds = [];
            var limitBossIds = [];
            for(var i = 0;i<self._openBossIds.length;i++){
                var locBossId = self._openBossIds[i];
                if(bossCtrl.isGuildBoss(locBossId)){
                    if(bossGuildCtrl.isLimitTime(locBossId)){
                        limitBossIds.push(locBossId);
                    }else{
                        guildBossIds.push(locBossId);
                    }

                }else{
                    worldBossIds.push(locBossId);
                }
            }
            switch (type){
                case gc.c_prop.worldBossTypeKey.world:
                    openBossIds = worldBossIds;
                    break;
                case gc.c_prop.worldBossTypeKey.guild:
                    if(isLimit){
                        openBossIds = limitBossIds;
                    }else{
                        openBossIds = guildBossIds;
                    }
                    break;
            }
            return openBossIds;
        }

        setOpenIds(openBossIds){
            openBossIds = openBossIds ||[];
            var self = this;
            var oldIds = self._openBossIds.concat();
            self._openBossIds = openBossIds;
            //如果存在，被移除，则关闭
            //如果不存在，
            for(var i = 0;i< oldIds.length;i++){
                var locBossId = oldIds[i];
                //开启
                if(self._openBossIds.indexOf(locBossId)==-1){
                    bossFightCtrl.getEntity(locBossId).setIsOpen(0);
                }
            }
            for(var i = 0;i< self._openBossIds.length;i++){
                var locBossId = self._openBossIds[i];
                bossFightCtrl.getEntity(locBossId).setIsOpen(1);
            }
        }

        //是否自动战斗
        isAutoFight(){
            return this._isAutoFight;
        }

        startAutoFight(){
            var self = this;
            self._isAutoFight = true;
            self.startUpdateInterval2();
        }

        endAutoFight(){
            var self = this;
            self._isAutoFight = false;
            self.clearUpdateIntervalId2();
        }

        getEntity(bossId){
            var self = this;
            var entity = self._getEntity(bossId);
            if(bossCtrl.isGuildBoss(bossId)){
                var bossData = bossGuildCtrl.getBossData(bossId);
                if(bossData){
                    var startTime = bossData[gc.dsConsts.BossEntity.startTime];
                    var eStartTime = entity.getStartTime();
                    if(eStartTime&&startTime){
                        startTime = Date.newDate(startTime);
                        if(!eStartTime.equals(startTime)){
                            self.delEntity(bossId);
                            entity = self._getEntity(bossId);
                        }
                    }
                    entity.setStartTime(startTime);
                }
            }
            return entity;
        }

        _getEntity(bossId){
            var self = this;
            var entity = self._entityDic[bossId];
            if(entity) return entity;
            entity = new BossFightEntityCtrl();
            entity.setBossId(bossId);
            self._entityDic[bossId] = entity;
            return entity;
        }

        delEntity(bossId){
            var self = this;
            var entity = self._entityDic[bossId];
            if(!entity) return ;
            entity.clearUpdateIntervalId1();
            delete self._entityDic[bossId];
        }

        syncInspire(){
            var self = this;
            for(var key in self._entityDic){
                var locEntity = self._entityDic[key];
                locEntity.syncInspire();
            }
        }

        startUpdateInterval2(){
            var self = this;
            self.clearUpdateIntervalId2();
            self._syncIntervalId2 = mo.setInterval(self._update2,self,2*1000);
        }

        clearUpdateIntervalId2(){
            var self = this;
            if(self._syncIntervalId2){
                mo.clearInterval(self._syncIntervalId2);
                self._syncIntervalId2 = null;
            }
        }

        private _update2(){
            var self = this;
            if(!self._isAutoFight) return;
            if(!self._autoBossId) return;
            var curEntity = self.getEntity(self._autoBossId);
            if(curEntity.getFightCd()>0) return;
            if(!fightCtrl.isSpFighting && !curEntity.isOver()){
                self.pushNotify(self.__class.ON_BOSS_AUTO_FIGHT);
                curEntity.startFight(function(){},this);
                self.clearUpdateIntervalId2();
            }
        }

        //设置自动bossid
        setAutoBossId(bossId){
            this._autoBossId = bossId;
        }

        //获取自动bossid
        getAutoBossId(){
            return this._autoBossId;
        }

        //设置当前正在挑战的bossId
        setCurFightBossId(bossId){
            this._curFightBossId = bossId;
        }

        //获取当前正在挑战的bossId
        getCurFightBossId(){
            return this._curFightBossId;
        }

        //获取最后退出时间
        getLastExitTime(){
            return this._lastExitTime;
        }

        //设置最后退出时间
        setLastExitTime(time){
            this._lastExitTime = time;
        }

        //是否有自动挑战的boss
        hasAutoFightBoss(){
            return this._autoBossId && this._isAutoFight;
        }
    }
    export var curBFECtrl:BossFightEntityCtrl;
    export var bossFightCtrl:BossFightCtrl = BossFightCtrl.getInstance();
}
