/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class CoffersCtrl extends mo.DataController {
        static ON_COFFERS_FIGHT:string = "ON_COFFERS_FIGHT";
        static ON_COFFERS_DEF_DATA_CHANGED:string = "ON_COFFERS_DEF_DATA_CHANGED";
        _fightServerId:any;
        _fightDoor:any;
        _lastData:any;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.CoffersEntity;
            this._lastData = [];
        }

        getInfo(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_coffers_getInfo, {}, function (data) {
                self.init(data);
                if (cb) cb.call(target,data);
            });
        }

        //获取下一次积分
        getNextWinPoints(){
            var coffers2Cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers2);
            var coffersWin =  userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.coffersWin);
            var points = coffers2Cfg[8];
            if(coffersWin >0){
                points+= coffers2Cfg[6];
            }
            return points;
        }

        //获取今天连胜
        getCoffersWin(){
            return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.coffersWin);
        }

        //获取个人红利
        getPersonResource(){
            var self = this;
            //a:当前玩家等级 b:当前金币贮藏量 c:领取金币参数1 d;领取金币参数2
            var userLvl = userCtrl.getLvl();
            var curRecource  = self.get(gc.dsConsts.CoffersEntity.resource);
            var coffersCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            var prame = coffersCfg[5];
            var prameArr = prame.split(",");
            var ret = gc.calCoffersPersonRecource(userLvl,curRecource, parseFloat(prameArr[0]),parseFloat(prameArr[1]));
            return ret;
        }

        /**
         * 获取英雄记录掠夺记录
         * @param cb
         * @param target
         * @returns [gc.dsConsts.CoffersRecord]
         */
        getLootRecordArr(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_coffers_getLootRecordArr, {}, function (data) {
                cb.call(target,data.reverse());
            });
        }

        //添砖建设
        build(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_coffers_build, {}, function (data) {
                var coffers = data[gc.dsConsts.ExCoffers.coffers];
                self.updateEntity(coffers);
                var userData = data[gc.dsConsts.ExCoffers.userData];
                userCtrl.updateEntityNotShow(userData);
                mo.showMsg("金币+"+data[gc.dsConsts.ExCoffers.addGold]+" "+"建设值+"+data[gc.dsConsts.ExCoffers.addBuildValue]);
                if (cb) cb.call(target,data);
            });
        }

        //获取今天建设次数
        getBuildNum(){
            return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.coffersBuild);
        }

        //激励
        addBuff(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_coffers_addBuff, {}, function (data) {
                var coffers = data[gc.dsConsts.ExCoffers.coffers];
                self.updateEntity(coffers);
                var userData = data[gc.dsConsts.ExCoffers.userData];
                var delBagItems = data[gc.dsConsts.ExCoffers.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;

                userCtrl.updateEntityNotShow(userData);
                mo.showMsg("激励值+"+data[gc.dsConsts.ExCoffers.addBuffExpc]);
                if (cb) cb.call(target,data);
            });
        }

        //获取今天激励次数
        getAddBuffNum(){
            return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.coffersBuffNum);
        }

        getAddPropByBuff() {
            var baseValue = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.buffBase) / 100;
            var curLv = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.buffLvl);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers2);
            var adds = gameInfo[4].split(",");
            var curAdd = parseInt(adds[curLv]) / 100;

            return baseValue + curAdd;
        }

        //获取今天剩余行动力
        getReAction(){
            var actionData = this.getActionData();
            var actionTotal = actionData[0];
            var toDayAction = userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.coffersAction);
            var reAction = actionTotal-toDayAction;
            if(reAction<0) reAction = 0;
            return reAction;
        }

        //获取下一次恢复的时间（秒）
        getActionReseconds(){
            var actionData = this.getActionData();
            return actionData[1];
        }

        //获取当前行动力数据
        getActionData = function(nowDate?){
            var startTime = (Date.newDate()).clearTime();
            nowDate = nowDate || Date.newDate();
            var coffersCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            var intervalMinutes = parseInt(coffersCfg[20]) ;
            var baseAction = parseInt(coffersCfg[21]);
            var intervalAction = parseInt(coffersCfg[22]);
            var diffMinutes = startTime.getMinutesBetween(nowDate);
            var actionNum = Math.floor(diffMinutes/intervalMinutes);
            var reSeconds = intervalMinutes*60 - startTime.getSecondsBetween(nowDate)+actionNum*intervalMinutes*60;
            var actionTotal = baseAction+ actionNum * intervalAction;
            return [actionTotal,reSeconds];
        }

        /**
         * 获取己方守卫数据
         * @param cb
         * @param target
         * @returns [gc.dsConsts.CofferUser]
         */
        getDefeseData(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_coffers_getDefeseData, {}, function (data) {
                cb.call(target,data);
            });
        }

        /**
         * 获取敌方守卫数据
         * @param serverId
         * @param serverName
         * @param cb
         * @param target
         * @returns gc.dsConsts.ExDefenceData
         */
        getEnemyDefeseData(serverId,serverName,cb,target){
            var self = this;
            self._lastData[0] = serverId;
            self._lastData[1] = serverName;
            var args = {};
            var argsKeys = gc.iface.a_coffers_getEnemyDefeseData_args;
            args[argsKeys.serverId] = serverId;
            mo.requestWaiting4Server(gc.iface.a_coffers_getEnemyDefeseData, args, function (data) {
                data[gc.dsConsts.ExDefenceData.serverName] = serverName;
                data[gc.dsConsts.ExDefenceData.serverId] = serverId;
                cb.call(target,data);
            });
        }

        //获取最近的服务器的国库数据
        getLastEnemyDefeseData(cb,target){
            var self = this;
            var serverId = self._lastData[0];
            var serverName = self._lastData[1];
            self.getEnemyDefeseData(serverId,serverName,cb,target);
        }

        /**
         * 获取防守记录
         * @param cb
         * @param target
         * @returns [gc.dsConsts.CoffersRecord]
         */
        getDefeseRecord(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_coffers_getDefeseRecord, {}, function (data) {
                cb.call(target,data.reverse());
            });
        }

        /**
         * 获取服务器列表状态
         * @param cb
         * @param target
         * @returns [gc.dsConsts.CoffersServer]
         */
        getServerArr(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_coffers_getServerArr, {}, function (data) {
                cb.call(target,data);
            });
        }

        //战斗开始
        fightStart(serverId,door,cb,target){
            var self = this;
            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            if(fightCtrl.isDie) return mo.showMsg("复活中，请稍后");
            var args = {};
            var argsKeys = gc.iface.a_coffers_fightStart_args;
            args[argsKeys.serverId] = serverId;
            args[argsKeys.door] = door;
            self._fightServerId = serverId;
            self._fightDoor = door;
            mo.requestWaiting4Server(gc.iface.a_coffers_fightStart, args, function (data) {
                var status = data[gc.dsConsts.ExCoffers.status];
                if(status==1){
                    mo.showMsg(gc.id_c_msgCode.gatesBroken,function(){
                        gd.coffersCtrl.getLastEnemyDefeseData(function(defData) {
                            self.pushNotify(self.__class.ON_COFFERS_DEF_DATA_CHANGED, defData);
                        },self);
                    });
                    return;
                }
                var userData = data[gc.dsConsts.ExCoffers.userData];
                userCtrl.updateEntity(userData);
                var heroList = data[gc.dsConsts.ExCoffers.heroList];
                var otherDataList = data[gc.dsConsts.ExCoffers.otherDataList];
                var fightData = data[gc.dsConsts.ExCoffers.fightData];
                var heroCtrlList = [];
                for(var i = 0;i<heroList.length;i++){
                    var locHero = heroList[i];
                    var locHeroEntityCtrl = HeroEntityCtrl.createNewEnemy(locHero,fightData,otherDataList[i]);
                    heroCtrlList.push(locHeroEntityCtrl);
                }
                heroCtrlList.sort(gd.heroCtrl._sortHeroList);
                gd.fightCtrl.isSpFighting = true;
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, heroCtrlList, gc.c_prop.fightTypeKey.coffers);
                process.nextTick(function(){
                    process.nextTick(function(){
                        process.nextTick(function(){
                            process.nextTick(function(){
                                self.pushNotify(self.__class.ON_COFFERS_FIGHT,serverId,door);
                            });
                        });
                    });
                });
                if (cb) cb.call(target,heroCtrlList);
            });
        }

        /**
         * 战斗结束
         * @param isWin
         * @param cb
         * @param target
         * @returns gc.dsConsts.FightResult
         */
        fightEnd(isWin,cb,target){
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_coffers_fightEnd_args;
            args[argsKeys.serverId] = self._fightServerId;
            args[argsKeys.door] = self._fightDoor;
            args[argsKeys.isWin] = isWin;
            mo.requestWaiting4Server(gc.iface.a_coffers_fightEnd, args, function (data) {
                var updateUser = data[gc.dsConsts.FightResult.updateUser]||{};
                var bagItems = data[gc.dsConsts.FightResult.bagItems];
                var bag = gd.userUtils.getNewBag({},bagItems);
                updateUser[gc.dsConsts.UserEntity.bag] = bag;
                if(updateUser) userCtrl.updateEntity(updateUser);
                var updateCoffers = data[gc.dsConsts.FightResult.updateCoffers];
                if(updateCoffers) self.updateEntity(updateCoffers);
                var coffersStatus = data[gc.dsConsts.FightResult.coffersStatus];



                //黑科技~
                if(coffersStatus==3){
                    mo.showMsg("跨服数据请求失败！");
                }
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 掠夺国库开始
         * @param serverId
         * @param cb
         * @param target
         * @returns 国库等级
         */
        fightCoffersStart(serverId,cb,target){
            var self = this;
            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            if(fightCtrl.isDie) return mo.showMsg("复活中，请稍后");
            var args = {};
            var argsKeys = gc.iface.a_coffers_fightCoffersStart_args;
            args[argsKeys.serverId] = serverId;
            self._fightServerId = serverId;
            mo.requestWaiting4Server(gc.iface.a_coffers_fightCoffersStart, args, function (data) {
                var userData = data[gc.dsConsts.ExCoffers.userData];
                userCtrl.updateEntity(userData);
                var coffersLvl = data[gc.dsConsts.ExCoffers.coffersLvl];
                var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, coffersLvl);
                gd.fightCtrl.isSpFighting = true;
                if(mo.moduleMgr.curModule.name != g_consts.moduleId.fight){
                    mo.moduleMgr.runModule(g_consts.moduleId.fight);
                    gd.fightLayer.onEnterCopy({pveType:gc.c_prop.fightTypeKey.coffersBoss, copyID:4003, loots:[[]], bossId:lvInfo[gc.c_lvl_cofferBoss]});
                }
                if (cb) cb.call(target,coffersLvl);
            });
        }

        /**
         * 掠夺国库结束
         * @param hurt
         * @param cb
         * @param target
         * @returns gc.dsConsts.FightResult
         */
        fightCoffersEnd(hurt,cb,target){
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_coffers_fightCoffersEnd_args;
            args[argsKeys.hurt] = hurt;
            args[argsKeys.serverId] = self._fightServerId;
            mo.requestWaiting4Server(gc.iface.a_coffers_fightCoffersEnd, args, function (data) {
                var updateUser = data[gc.dsConsts.FightResult.updateUser]||{};
                var bagItems = data[gc.dsConsts.FightResult.bagItems];
                var bag = gd.userUtils.getNewBag({},bagItems);
                updateUser[gc.dsConsts.UserEntity.bag] = bag;
                if(updateUser) userCtrl.updateEntity(updateUser);
                var updateCoffers = data[gc.dsConsts.FightResult.updateCoffers];
                if(updateCoffers) self.updateEntity(updateCoffers);
                var coffersStatus = data[gc.dsConsts.FightResult.coffersStatus];

                //黑科技~
                if(coffersStatus==3){
                    mo.showMsg("跨服数据请求失败！");
                }
                if (cb) cb.call(target,data);
            });
        }

        //获取今天掠夺次数
        getTodayLootNum(){
            return 10;
        }
    }
    export var coffersCtrl:CoffersCtrl = CoffersCtrl.getInstance() ;
}