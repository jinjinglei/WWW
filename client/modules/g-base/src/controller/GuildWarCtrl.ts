/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class GuildWarCtrl extends mo.DataController {
        static ON_GUILD_WAR_FIGHT:string = "ON_GUILD_WAR_FIGHT";
        static ON_GUILD_LIST_UPDATE:string = "ON_GUILD_LIST_UPDATE";
        static ON_GUILD_ATK_UPDATE:string = "ON_GUILD_ATK_UPDATE";
        static ON_GUILD_DEF_UPDATE:string = "ON_GUILD_DEF_UPDATE";
        static ON_GUILD_OPEN_CHANGE:string = "ON_GUILD_OPEN_CHANGE";
        _fightServerId:any;
        _fightGuildId:any;
        _fightDoor:any;
        _pointsRankList:any;
        _chairRankList:any;
        _userRankList:any;
        _fightRecordArr:any;
        _isEnter:boolean;
        _lastRecordId:number;
        curGuildServer;//记录当前攻打的行会数据
        curDoor;
        _isOpen:number;
        _cfgData:any;
        _guildWarList:any;
        _guildListUpdateNum:number;
        _sceneType:number;//1：列表，2：进攻，3：防守
        _attackWarServerId:any;
        _attackWarGuildId:any;
        _updateAttackWarDic:any;
        _defenceData:any;
        _isFighting:boolean;
        _overTime:Date;
        _lastMyData:any;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.MyGuildWarData;
            this._fightRecordArr = [];
            this._isEnter = false;
            this._lastRecordId = 0;
            this._isOpen = 0;
            this._guildListUpdateNum = 0;
            this._updateAttackWarDic = {};
            this._isFighting = false;
        }

        //设置同步场景位置 1：列表，2：进攻，3：防守
        setSyncSceneType(sceneType){
            this._sceneType = sceneType;
        }

        //退出同步场景
        exitSyncScenne(){
            this._sceneType = 0;
        }

        /**
         * 获取个人数据
         * @param cb
         * @param target
         * @returns ds.Consts.MyGuildWarData
         */
        getInfo(cb, target){
            var self = this;
            var guildId = guildCtrl.getId();
            mo.requestWaiting4Server(gc.iface.a_guildWar_getInfo, {}, function (data) {
                self.init(data);
                if (cb) cb.call(target,data);
            });
        }

        setCfgData(cfgData){
            this._cfgData = cfgData;
        }

        /**
         * 获取配置数据
         * @returns ["行会战开战星期","行会战开始结束时间","可报名时间星期","可报名时间"]
         */
        getCfgData(){
            return this._cfgData;
        }

        //获取是否正在开启行会战
        isOpening(){
            return this._isOpen;
        }

        //设置活动
        setIsOpen(value){
            var self = this;
            var oldValue = self._isOpen;
            if(oldValue==value) return;
            self._isOpen = value;
            if(value==1){
                //开启
                self.pushNotify(self.__class.ON_GUILD_OPEN_CHANGE);
                self._overTime = null;
            }else{
                //结束
                //todo 界面的变化？
                self._overTime = Date.newDate();
            }
        }

        //获取距离行会战开启时间
        getOpenReSeconds(){
            return 30*60*60;
        }

        /**
         * 获取报名组别
         * @param cb
         * @param target
         * @returns [groupId,行会战力]
         */
        getSignUpData(cb, target){
            var self = this;
            var guildId = guildCtrl.getId();
            if(!guildId) return cb.call(target,[0,0]);

            var argKeys = gc.iface.a_guildWar_getSignUpData_args;
            var args = {};
            args[argKeys.guildId] = guildId;
            mo.requestWaiting4Server(gc.iface.a_guildWar_getSignUpData, args, function (data) {
                var signGroupId = data[gc.dsConsts.SignData.signGroupId];
                var lastGroupId = data[gc.dsConsts.SignData.lastGroupId];
                var lastGuildRank = data[gc.dsConsts.SignData.lastGuildRank];
                var lastUserRank = data[gc.dsConsts.SignData.lastUserRank];
                var isPrize = data[gc.dsConsts.SignData.isPrize];

                self._lastMyData = [lastGroupId,lastGuildRank,lastUserRank,isPrize];
                if (cb) cb.call(target,[signGroupId]);
            });
        }

        /**
         * 获取我最后的信息
         * @returns [组别，行会排名，个人排名]
         */
        getLastMyData = function(){
            var self = this;
            if(!self._lastMyData) return [null,null,null];
            return self._lastMyData;
        }

        /**
         * 报名
         * @param groupId 组别id
         * @param cb
         * @param target
         */
        signUp(groupId,cb, target){
            var self = this;
            var argKeys = gc.iface.a_guildWar_signUp_args;
            var args = {};
            args[argKeys.groupId] = groupId;
            mo.requestWaiting4Server(gc.iface.a_guildWar_signUp, args, function (signGroupId) {
                if (cb) cb.call(target,signGroupId);
            });
        }

        /**
         * 获取行会列表
         * @param cb
         * @param target
         * @returns [gc.dsConsts.GuildServer]
         */
        getGuildList(cb, target) {
            var self = this;
            var args = {};
            var guildId = guildCtrl.getId();
            if(!guildId) return cb.call(target,[]);
            if(self._guildWarList) return cb.call(target,self._guildWarList);
            var argKeys = gc.iface.a_guildWar_getGuildList_args;
            var args = {};
            args[argKeys.guildId] = guildId;
            mo.requestWaiting4Server(gc.iface.a_guildWar_getGuildList, args, function (guildWarList) {
                var reList = self._calGuildWarList(guildWarList);
                self._guildWarList = reList;
                if (cb) cb.call(target,reList);
            });
        }

        _calGuildWarList = function(guildWarList){
            var self = this;
            //排序在客户端做
            guildWarList = self._sortGuildWarList(guildWarList);
            //城门已被击破的行会放列表后面
            var temp1Arr = [];
            var temp2Arr = [];
            for(var i = 0;i<guildWarList.length;i++){
                var locGuildWar = guildWarList[i];
                var doorLives = locGuildWar[gc.dsConsts.GuildServer.doorLives];
                if(doorLives>0)
                    temp1Arr.push(locGuildWar);
                else
                    temp2Arr.push(locGuildWar);
            }
            var reList = temp1Arr.concat(temp2Arr);
            return reList;
        }

        //排序
        _sortGuildWarList = function (guildWarList) {
            var self = this;
            self._sortGuildWarList1(guildWarList);
            var firstData = guildWarList[0];
            var maxPoints = 0;
            if (firstData) {
                maxPoints = firstData[gc.dsConsts.GuildServer.points];
            }
            for (var i = 0; i < guildWarList.length; i++) {
                var locData = guildWarList[i];
                locData[gc.dsConsts.GuildServer.maxPoints] = maxPoints;
                locData[gc.dsConsts.GuildServer.progress] = Math.floor(Math.floor(locData[gc.dsConsts.GuildServer.points]) / Math.floor(locData[gc.dsConsts.GuildServer.maxPoints]) * 100);
            }
            return guildWarList;
        }

        //排序
        _sortGuildWarList1(list) {
            //__guildWarGroupDic
            //数据结构：[行会id,行会积分]
            var sortKeyArr = [gc.dsConsts.GuildServer.points, gc.dsConsts.GuildServer.doorLives, gc.dsConsts.GuildServer.lastLootTime]; //排序规则：积分＞守卫存活数＞最后掠夺升序
            var sortType = [-1, 1, 1]; //积分降序，守卫存活数升序,最后掠夺升序
            list.sort(function (a, b) {
                for (var i = 0; i < 3; i++) {
                    var type = sortType[i];
                    if (a[sortKeyArr[i]] > b[sortKeyArr[i]]) {
                        return type <= 0 ? -1 : 1;
                    }
                    else if (a[sortKeyArr[i]] < b[sortKeyArr[i]]) {
                        return type <= 0 ? 1 : -1;
                    }
                }
                return 0;
            });
            return list;
        }

        /**
         * 获取战斗攻击数据
         * @param serverId
         * @param guildId
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildWarData
         */
        getWarAttackData(serverId,guildId,cb, target) {
            var self = this;
            self._attackWarServerId = serverId;
            self._attackWarGuildId = guildId;

            var oldData = self._updateAttackWarDic[serverId+"|"+guildId];
            if(oldData) return cb.call(target,oldData);
            var argKeys = gc.iface.a_guildWar_getWarAttackData_args;
            var args = {};
            args[argKeys.serverId] = serverId;
            args[argKeys.guildId] = guildId;
            mo.requestWaiting4Server(gc.iface.a_guildWar_getWarAttackData, args, function (data) {
                self._updateAttackWarDic[serverId+"|"+guildId] = data;
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 获取战斗防守数据
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildWarData
         */
        getWarDefenceData(cb, target) {
            var self = this;
            var guildId = guildCtrl.getId();
            if(!guildId) return cb.call(target,null);
            if(self._defenceData) return cb.call(target, self._defenceData);
            var argKeys = gc.iface.a_guildWar_getWarDefenceData_args;
            var args = {};
            args[argKeys.guildId] = guildId;
            mo.requestWaiting4Server(gc.iface.a_guildWar_getWarDefenceData, args, function (data) {
                self._defenceData = data;
                if (cb) cb.call(target,data);
            });
        }

        //上阵
        upDoor(door, cb, target){
            var self = this;
            if (gd.fightCtrl.isSpFighting && self._isFighting) return mo.showMsg(gc.id_c_msgCode.nowAttack);

            var argKeys = gc.iface.a_guildWar_upDoor_args;
            var args = {};
            args[argKeys.door] = door;
            mo.requestWaiting4Server(gc.iface.a_guildWar_upDoor, args, function (data) {
                //如果data=1 ，则认为已经有人上阵，需要刷新界面
                if(data == 1){
                    mo.showMsg(gc.id_c_msgCode.haveGuard);
                }
                self._defenceData = null;
                self.syncData();
                if (cb) cb.call(target,data);
            });
        }

        //下阵
        downDoor(door,cb, target){
            var self = this;
            var argKeys = gc.iface.a_guildWar_downDoor_args;
            var args = {};
            args[argKeys.door] = door;
            mo.requestWaiting4Server(gc.iface.a_guildWar_downDoor, args, function (data) {
                self._defenceData = null;
                self.syncData();
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 获取所有排名
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildWarAllRank
         */
        getGuildWarAllRank(cb, target) {
            var args = {};
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_guildWar_getGuildWarAllRank, args, function (data) {
                self._pointsRankList = data[gc.dsConsts.GuildWarAllRank.guildArr];
                self._chairRankList = data[gc.dsConsts.GuildWarAllRank.chairArr];
                self._userRankList = data[gc.dsConsts.GuildWarAllRank.userArr];
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 获取上次排行
         * @param groupId
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildWarAllRank
         */
        getLastRankList(groupId, cb, target){
            var self = this;
            var argKeys = gc.iface.a_guildWar_getLastRankList_args;
            var args = {};
            args[argKeys.groupId] = groupId;
            mo.requestWaiting4Server(gc.iface.a_guildWar_getLastRankList, args, function (data) {
                self._pointsRankList = data[gc.dsConsts.GuildWarAllRank.guildArr];
                self._chairRankList = data[gc.dsConsts.GuildWarAllRank.chairArr];
                self._userRankList = data[gc.dsConsts.GuildWarAllRank.userArr];
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 获取我的行会排名
         * @returns gc.dsConsts.GuildWarRank
         */
        getMyPointRank(){
            var self = this;
            var myGuildId = guildCtrl.getId();
            var myServerId = userCtrl.get(gc.dsConsts.UserEntity.serverId);
            for(var i= 0 ;i<self._pointsRankList.length ; i++){
                var locRankData  = self._pointsRankList[i];
                var locGuildId = locRankData[gc.dsConsts.GuildWarRank.guildId];
                var locServerId = locRankData[gc.dsConsts.GuildWarRank.serverId];
                if(myGuildId == locGuildId&&locServerId==myServerId)
                    return locRankData;
            }
            return null;
        }

        /**
         * 获取我的会长排名
         * @returns gc.dsConsts.GuildWarUserRank
         */
        getMyChairRank(){
            var self = this;
            var myId = userCtrl.getId();
            var myServerId = userCtrl.get(gc.dsConsts.UserEntity.serverId);
            for(var i= 0 ;i<self._chairRankList.length ; i++){
                var locRankData  = self._chairRankList[i];
                var locUserId = locRankData[gc.dsConsts.GuildWarUserRank.userId];
                var locServerId = locRankData[gc.dsConsts.GuildWarUserRank.serverId];
                if(locUserId == myId&&locServerId==myServerId)
                    return locRankData;
            }
            return null;
        }

        /**
         * 获取我的排名
         * @returns gc.dsConsts.GuildWarUserRank
         */
        getMyUserRank(){
            var self = this;
            var myId = userCtrl.getId();
            var myServerId = userCtrl.get(gc.dsConsts.UserEntity.serverId);
            for(var i= 0 ;i<self._userRankList.length ; i++){
                var locRankData  = self._userRankList[i];
                var locUserId = locRankData[gc.dsConsts.GuildWarUserRank.userId];
                var locServerId = locRankData[gc.dsConsts.GuildWarUserRank.serverId];
                if(locUserId == myId&&locServerId==myServerId)
                    return locRankData;
            }
            return null;
        }

        /**
         * 获取己方防守记录
         * @param cb
         * @param target
         * @returns [gc.dsConsts.GuildWarDefenceRecord]
         */
        getDefenceRecordList(cb, target) {
            var args = {};
            mo.requestWaiting4Server(gc.iface.a_guildWar_getDefenceRecordList, args, function (data) {
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 获取攻击战况
         * @param cb
         * @param target
         * @returns [gc.dsConsts.GuildWarAttackRecord]
         */
        getAttackRecordList(cb, target) {
            var args = {};
            mo.requestWaiting4Server(gc.iface.a_guildWar_getAttackRecordList, args, function (data) {
                if (cb) cb.call(target,data);
            });
        }

        //开始攻击守卫门
        fightStartDoor(serverId,guildId,door,cb, target){
            var self = this;

            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            if(fightCtrl.isDie) return mo.showMsg("复活中，请稍后");
            var argKeys = gc.iface.a_guildWar_fightStartDoor_args;
            var args = {};
            args[argKeys.serverId] = serverId;
            args[argKeys.guildId] = guildId;
            args[argKeys.door] = door;
            self._fightServerId = serverId;
            self._fightGuildId = guildId;
            self._fightDoor = door;
            //判断防守中
            var isDefence = self.get(gc.dsConsts.MyGuildWarData.isDefence);
            if(isDefence) return mo.showMsg("防守中，请先进行下阵!");
            //是否己方被击破
            var doorLives = self.get(gc.dsConsts.MyGuildWarData.doorLives);
            if(doorLives<=0) return  mo.showMsg(gc.id_c_msgCode.noSnatch);

            //判断cd
            //次数，元宝
            if(self.getFightCd()>0){
                mo.showMsg(gc.id_c_msgCode.buyManyCD, self.getClearCdCount(), self.getClearCdCost(), function(){
                    self.clearCd(function(){
                        self.fightStartDoor(serverId,guildId,door,cb, target);
                    },self);
                });
                return;
            }
            mo.requestWaiting4Server(gc.iface.a_guildWar_fightStartDoor, args, function (data) {
                var myGuildWarData = data[gc.dsConsts.GuildFightData.myGuildWarData];
                if(myGuildWarData) self.updateEntity(myGuildWarData);

                var isBreak = data[gc.dsConsts.GuildFightData.isBreak];
                if(isBreak){
                    //已经被击破
                    mo.showMsg(gc.id_c_msgCode.guardDown,function(){
                        self._updateAttackWarDic = {};
                        self.pushNotify(self.__class.ON_GUILD_ATK_UPDATE,serverId,guildId);
                    });
                    return;
                }

                var directWin = data[gc.dsConsts.GuildFightData.directWin];
                var getPoints = data[gc.dsConsts.GuildFightData.getPoints];
                if(directWin){
                    //直接胜利
                    //该门没有守卫防守，您直接对该门造成了%s点的伤害。
                    mo.showMsg(gc.id_c_msgCode.noGuard,getPoints,function(){
                        self._updateAttackWarDic = {};
                        self.pushNotify(self.__class.ON_GUILD_ATK_UPDATE,serverId,guildId);
                    });
                    return;
                }

                var heroList = data[gc.dsConsts.GuildFightData.heroList];
                var otherDataList = data[gc.dsConsts.GuildFightData.otherDataList];
                var fightData = data[gc.dsConsts.GuildFightData.fightData];
                var heroCtrlList = [];
                for(var i = 0;i<heroList.length;i++){
                    var locHero = heroList[i];
                    var locHeroEntityCtrl = HeroEntityCtrl.createNewEnemy(locHero,fightData,otherDataList[i]);
                    heroCtrlList.push(locHeroEntityCtrl);
                }
                heroCtrlList.sort(gd.heroCtrl._sortHeroList);
                gd.fightCtrl.isSpFighting = true;
                self._isFighting = true;
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, heroCtrlList, gc.c_prop.fightTypeKey.guildWar);
                process.nextTick(function(){
                    process.nextTick(function(){
                        process.nextTick(function(){
                            process.nextTick(function(){
                                self.pushNotify(self.__class.ON_GUILD_WAR_FIGHT,serverId,door);
                            });
                        });
                    });
                });
                if (cb) cb.call(target,heroCtrlList);
            });
        }

        //结束攻击守卫门
        fightEndDoor(isWin,cb, target){
            var self = this;
            self._isFighting = false;
            var argKeys = gc.iface.a_guildWar_fightEndDoor_args;
            var args = {};
            args[argKeys.serverId] = self._fightServerId;
            args[argKeys.guildId] = self._fightGuildId;
            args[argKeys.door] = self._fightDoor;
            args[argKeys.isWin] = isWin;
            mo.requestWaiting4Server(gc.iface.a_guildWar_fightEndDoor, args, function (data) {
                var coffersStatus = data[gc.dsConsts.FightResult.coffersStatus];
                if(coffersStatus==1){
                    self.set(gc.dsConsts.MyGuildWarData.nextFightTime,Date.newDate());
                }
                var guildWarStatus = data[gc.dsConsts.FightResult.guildWarStatus];
                //黑科技~
                if(guildWarStatus==2){
                    mo.showMsg("活动已经结束！");
                }
                if(guildWarStatus==3){
                    mo.showMsg("抢夺失败！CD重置！");
                    self.set(gc.dsConsts.MyGuildWarData.nextFightTime,Date.newDate());
                }
                if (cb) cb.call(target,data);
            });
        }

        //进入行会战
        enter(cb, target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_guildWar_enter, {}, function (data) {
                self._isEnter = true;
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 获取上周积分情况
         * @param groupId
         * @param cb
         * @param target
         * @returns [gc.dsConsts.GuildWarRank]
         */
        getLastPointsRankList(groupId,cb, target) {
            if (cb) cb.call(target);
        }

        /**
         * 清除cd
         * @param cb
         * @param target
         */
        clearCd(cb, target) {
            var self = this;
            var args = {};
            mo.requestWaiting4Server(gc.iface.a_guildWar_clearCd , args, function (data) {
                var userData = data[gc.dsConsts.ExMyGuildWarData.userData];
                userCtrl.updateEntity(userData);
                var myGuildWarData = data[gc.dsConsts.ExMyGuildWarData.myGuildWarData];
                self.updateEntity(myGuildWarData);
                cb.call(target,data);
            });
        }

        /**
         * 鼓舞
         * @param cb
         * @param target
         */
        inspire(cb, target) {
            var self = this;
            var args = {};
            mo.requestWaiting4Server(gc.iface.a_guildWar_inspire , args, function (data) {
                var userData = data[gc.dsConsts.ExMyGuildWarData.userData];
                userCtrl.updateEntity(userData);
                var myGuildWarData = data[gc.dsConsts.ExMyGuildWarData.myGuildWarData];
                self.updateEntity(myGuildWarData);
                cb.call(target,data);
            });
        }

        //获取鼓舞消耗
        getInspireCost(){
            var todayCount = userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.inspireGuildWar);
            var costDiamond = gc.calInspireGuildWar(todayCount+1);
            return costDiamond;
        }

        //获取清除cd消耗
        getClearCdCost(){
            var todayCount = userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.clearGuildWarCount);
            var costDiamond = gc.calClearGuildWarCd(todayCount+1);
            return costDiamond;
        }

        //获取鼓舞次数
        getInspireCount(){
            var todayCount = userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.inspireGuildWar);
            return todayCount+1;
        }

        //获取清除cd次数
        getClearCdCount(){
            var todayCount = userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.clearGuildWarCount);
            return todayCount+1;
        }

        //3秒一次
        syncData(){
            var self = this;
            if(!self.getData()) return;
            if(!self._isEnter) return;
            if(!self.isOpening()){
                if(self._overTime){
                    var diffSeconds = self._overTime.getSecondsBetween(new Date());
                    if(diffSeconds>60){
                        return;
                    }
                }else{
                    return;
                }
            }

            //同步我的个人数据，攻守消息
            var argKeys = gc.iface.a_guildWar_syncData_args;
            var args = {};
            args[argKeys.sceneType] = self._sceneType;
            var attackDataParams = [self._attackWarServerId,self._attackWarGuildId];
            if(self._sceneType==2){
                args[argKeys.attackData] = attackDataParams;
            }

            var oldMyGuildRefreshId = self.get(gc.dsConsts.MyGuildWarData.myGuildRefreshId);
            mo.request4Server(gc.iface.a_guildWar_syncData , args, function (data) {
                var myGuildWarData = data[gc.dsConsts.GuildWarSyncData.myGuildWarData];
                if(myGuildWarData){
                    self.updateEntity(myGuildWarData);
                }
                var fightRecordArr = data[gc.dsConsts.GuildWarSyncData.fightRecordArr];
                self._calFightRecord(fightRecordArr);

                //刷新行会列表
                var guildList = data[gc.dsConsts.GuildWarSyncData.guildList];
                if(guildList){
                    var reList = self._calGuildWarList(guildList);
                    self._guildWarList = reList;
                    self.pushNotify(self.__class.ON_GUILD_LIST_UPDATE);
                }
                //刷新攻击数据
                var attackData = data[gc.dsConsts.GuildWarSyncData.attackData];
                if(attackData){
                    self._updateAttackWarDic[attackDataParams[0]+"|"+attackDataParams[1]] = attackData;
                    self.pushNotify(self.__class.ON_GUILD_ATK_UPDATE,self._attackWarServerId,self._attackWarGuildId);
                }
                //刷新防守
                var defenceData = data[gc.dsConsts.GuildWarSyncData.defenceData];
                if(defenceData){
                    self._defenceData = defenceData;
                    self.pushNotify(self.__class.ON_GUILD_DEF_UPDATE);
                }
            });
        }

        _calFightRecord(fightRecordArr){
            var self = this;
            var tempArr = [];
            for(var i = fightRecordArr.length-1 ;i>=0;i--){
                var locData = fightRecordArr[i];
                var locId = locData[gc.dsConsts.GuildWarFightRecord.id];
                var locType = locData[gc.dsConsts.GuildWarFightRecord.type];
                if(locType==1){
                    var locAttackData = locData[gc.dsConsts.GuildWarFightRecord.attackData];
                    var locUserName = locAttackData[0];
                    if(locUserName == userCtrl.getName()) continue;
                }
                if(locId>self._lastRecordId){
                    tempArr.unshift(locData);
                }
                if(tempArr.length>=6) break;

            }
            self._fightRecordArr = tempArr;
            if(tempArr.length<=0) return;
            self._lastRecordId = tempArr[tempArr.length-1][gc.dsConsts.GuildWarFightRecord.id];
            //只显示6条
            var attackStr = "[ubb size=20 color=#00b1f1]%s[/ubb][ubb size=20 color=#ffff00]攻打了[/ubb][ubb size=20 color=#7030a1][%s][/ubb][ubb size=20 color=#ffe599]%s门[/ubb]";
            var beAttackStr = "[ubb size=20 color=#ffe599]行会%s门正在被[/ubb][ubb size=20 color=#7030a1][%s][/ubb][ubb size=20 color=#ff0000]%s[/ubb][ubb size=20 color=#ffe599]攻打[/ubb]";
            var str = "";
            for(var i=0; i<tempArr.length; ++i){
                var locData = tempArr[i];
                var type = locData[gc.dsConsts.GuildWarFightRecord.type];
                if(type == 1){
                    var attackData = locData[gc.dsConsts.GuildWarFightRecord.attackData];//[玩家名，服务器名,行会名，门]
                    str = mo.STR.format(attackStr, attackData[0], attackData[2], gc.c_prop.guildWarDoor[attackData[3]]);
                }else if(type == 2){
                    var beAttackData = locData[gc.dsConsts.GuildWarFightRecord.beAttackData];//[门，服务器名,行会名,玩家名]
                    str = mo.STR.format(beAttackStr, gc.c_prop.guildWarDoor[beAttackData[0]], beAttackData[2], beAttackData[3]);
                }

                g_msg.UIMsgTextCtrl.push(str);
            }
        }

        //获取cd
        getFightCd(){
            var self = this;
            var nextFightTime = self.get(gc.dsConsts.MyGuildWarData.nextFightTime);
            nextFightTime = Date.newDate(nextFightTime);
            var reSenconds = Date.newDate().getSecondsBetween(nextFightTime);
            if(reSenconds<=0) reSenconds = 0;
            return reSenconds;
        }

        //鼓舞剩余时间
        getInspireReSeconds(){
            var self = this;
            var nextFightTime = self.get(gc.dsConsts.MyGuildWarData.inspireEndTime);
            nextFightTime = Date.newDate(nextFightTime);
            var reSenconds = Date.newDate().getSecondsBetween(nextFightTime);
            if(reSenconds<=0) reSenconds = 0;
            return reSenconds;
        }

        //获取行会战剩余时间
        getOverReSeconds(){
            var self = this;
            var nextFightTime = self.get(gc.dsConsts.MyGuildWarData.warEndTime);
            nextFightTime = Date.newDate(nextFightTime);
            var reSenconds = Date.newDate().getSecondsBetween(nextFightTime);
            if(reSenconds<=0) reSenconds = 0;
            return reSenconds;
        }
    }
    export var guildWarCtrl:GuildWarCtrl = GuildWarCtrl.getInstance() ;
}