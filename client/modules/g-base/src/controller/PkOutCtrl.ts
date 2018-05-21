/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class PkOutCtrl extends mo.DataController {
        _rank:number = 0;
        _curEnemyID:number = -1;
        _curFightType:number = 1;
        _curIsRevenge:number = 0;
        _pkRecordList:any;
        _hasNewDeal:boolean = false;
        _hasNewRankPkDeal:boolean = false;
        _bePkKill:boolean = false;
        _dataRefreshTime:any;
        autoPkOut:boolean = true;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.PkOutEntity;
            this._pkRecordList = [];
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
            self.getPkRecordList(function(){},self);
            //self._initRank();
            self.dealRecord();

            self.getRankPkRecordList(function(){},self);
            self.dealRankPkRecord();
            self._dataRefreshTime = Date.newDate();
        }

        //是否开启
        checkOpen(cb, target){
            var self = this;
            if(self._data)  return cb.call(target,true);
            //参数8：开启pk战力
            //var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl = c_open[gc.id_c_open.pkOut][gc.c_open_lvlRequired];
            //var needLvl = c_game[gc.id_c_game.pkOutCfg][7];
            if(userCtrl.getLvl()<needLvl) return cb.call(target,false);


            self.open(function(){
                cb.call(target,true);
            },self);
        }

        //获取杀戮值
        getKillValue(){
            var self = this;
            if(!self._data) return 0;
            if(self._dataRefreshTime&&!Date.newDate().equalsDay(self._dataRefreshTime)){
                self.open(function(){
                    self._dataRefreshTime = Date.newDate();
                },self);
            }
            return this.get(gc.dsConsts.PkOutEntity.killValue);
        }

        //获取pk值
        getPkValue(){
            var self = this;
            if(!self._data) return 0;
            return self.get(gc.dsConsts.PkOutEntity.pkValue);
        }

        //获取杀人胜利数
        getAccWinCount(){
            var self = this;
            if(!self._data) return 0;
            return self.get(gc.dsConsts.PkOutEntity.accWinCount);
        }

        calPkValue(){
            var self = this;
            if(!self._data) return;

            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var pkValue = self.get(gc.dsConsts.PkOutEntity.pkValue);
            var pkValueTime = self.get(gc.dsConsts.PkOutEntity.pkValueTime);
            pkValueTime = new Date(pkValueTime);
            var diffMinutes = pkValueTime.getMinutesBetween(Date.newDate());
            diffMinutes = diffMinutes/20;
            var intDiffMinutes = parseInt(diffMinutes.toString());
            if(intDiffMinutes>0){
                pkValue -= c_game[gc.id_c_game.pkOutCfg][0]*intDiffMinutes;
                pkValueTime.addMinutes(intDiffMinutes*20);
            }
            pkValue = pkValue<0?0:pkValue;
            self.set(gc.dsConsts.PkOutEntity.pkValue,pkValue);
            self.set(gc.dsConsts.PkOutEntity.pkValueTime,pkValueTime);
        }

        //获取我的排名
        getMyRank(cb,target) {
            var self = this;
            self.getRankList(function (dataList) {
                var myRank = 0;
                for (var i = 0; i < dataList.length; i++) {
                    var loData = dataList[i];
                    if (loData[gc.dsConsts.Rank.userId] == userCtrl.getId()) {
                        myRank = i+1;
                    }
                }
                if(myRank>0) return cb(myRank);
                self._initRank(cb,target);
            }, self);
        }

        /**
         * 获取排名奖励
         * @param rank
         * @returns [升星石数量，金币数量,元宝]
         */
        getRankAward(rank) {
            var c_pvpRankReward = mo.getJSONWithFileName(gc.cfg_c_pvpRankReward);
            var starStone = 0;
            var gold = 0;
            var diamond = 0;
            var curData = null;
            for (var i = 1; i < 100; i++) {
                var locData = c_pvpRankReward[i];
                if (!locData) break;
                curData = locData;
                if (rank <= locData[gc.c_pvpRankReward_range]) break;
            }
            if (curData) {
                starStone = curData[gc.c_pvpRankReward_starStone];
                gold = curData[gc.c_pvpRankReward_gold];
                diamond = curData[gc.c_pvpRankReward_diamond];
            }
            return [starStone, gold, diamond];
        }

        _initRank(cb?, target?){
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_getMyRank, {}, function (data) {
                self._rank = data;
                if (cb)  cb.call(target,data);
            });
        }

        //开启pk
        open(cb, target){
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_open, {}, function (data) {
                self.init(data);
                //self._initRank();
                if (cb)  cb.call(target,data);
            });
        }

        /**
         * 获取下一次对手剩余时间
         * @returns {number}
         */
        getReRefreshSeconds(){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cd2 = c_game[gc.id_c_game.pkOutCfg][4];
            var enemyIds = self.get(gc.dsConsts.PkOutEntity.enemyIds);
            var freshTime = self.get(gc.dsConsts.PkOutEntity.freshTime);
            freshTime = new Date(freshTime);
            if(enemyIds.length>=3) return 0;

            var reSeconds = Date.newDate().getSecondsBetween(freshTime.clone().addSeconds(cd2)) ;
            return reSeconds;
        }

        /**
         * 获取对手列表
         * @param cb
         * @param target
         * @returns [ds.PkOutUserData]
         */
        getEnemyList(cb, target){
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_getEnemyList, {}, function (data) {
                var puOutData = data[gc.dsConsts.ExPkOut.pkOutData];
                delete puOutData[gc.dsConsts.PkOutEntity.pkValue];
                self.updateEntity(puOutData);
                var enemyList = data[gc.dsConsts.ExPkOut.enemyList];
                if (cb)  cb.call(target,enemyList);
            });
        }

        //计算次数
        _calRefreshNum(){
            var self = this;
            var todayRefreshTime = self.get(gc.dsConsts.PkOutEntity.todayRefreshTime);
            var todayRefreshNum = self.get(gc.dsConsts.PkOutEntity.todayRefreshNum);
            if(!todayRefreshTime){
                todayRefreshNum = 0;
                todayRefreshTime = Date.newDate();
            }
            todayRefreshTime = Date.newDate(todayRefreshTime);
            //还没刷新过
            //不等于当天
            if(!todayRefreshTime.equalsDay(new Date())){
                todayRefreshNum = 0;
                todayRefreshTime = Date.newDate();
            }
            self.set(gc.dsConsts.PkOutEntity.todayRefreshTime,todayRefreshTime);
            self.set(gc.dsConsts.PkOutEntity.todayRefreshNum,todayRefreshNum);
        }

        /**
         * 刷新对手
         * @param cb
         * @param target
         * @returns [ds.PkOutUserData]
         */
        refreshEnemy(isWaiting,cb, target){
            var self = this;
            self._calRefreshNum();
            //是否花费[ubb color=#6dd1ff]%s元宝[/ubb][/br]寻找1个对手？
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var todayRefreshNum = self.get(gc.dsConsts.PkOutEntity.todayRefreshNum);
            var needDiamond = gc.calRefreshPKCost(todayRefreshNum);
            var requestFun = isWaiting? mo.requestWaiting4Server:mo.request4Server;
            var cbFun = function(){
                requestFun(gc.iface.a_pkOut_refreshEnemy, {}, function (data) {
                    var userData = data[gc.dsConsts.ExPkOut.userData];
                    if(userData) userCtrl.updateEntity(userData);
                    var pkOutData = data[gc.dsConsts.ExPkOut.pkOutData];
                    if(pkOutData) self.updateEntity(pkOutData);
                    self.getEnemyList(cb, target);
                });
            }

            var count = c_game[gc.id_c_game.pkCfg1][0];
            if(todayRefreshNum>count){
                mo.showMsg(gc.id_c_msgCode.findRival100, needDiamond, todayRefreshNum,count, cbFun);
            }else{
                mo.showMsg(gc.id_c_msgCode.findRival, needDiamond, todayRefreshNum,cbFun);
            }
        }

        //获取清除剩余秒数
        getClearReSeconds (){
            var refreshDate = Date.newDate().clearTime().addHours(24);
            var seconds = Date.newDate().getSecondsBetween(refreshDate);
            seconds = seconds < 0 ? 0:seconds;
            return seconds;
        }

        /**
         * 刷新对手
         * @param cb
         * @param target
         */
        clearPkValue(cb, target){
            var self = this;
            var pkValue = self.getPkValue();
            if(pkValue<=0)return mo.showMsg(gc.id_c_msgCode.noPKPoint);
            var needDiamond = gc.calClearPkCost(pkValue);
            mo.showMsg(gc.id_c_msgCode.ifClearPKPoint, needDiamond, function(){
                mo.request4Server(gc.iface.a_pkOut_clearPkValue, {}, function (data) {
                    var userData = data[gc.dsConsts.ExPkOut.userData];
                    if(userData) userCtrl.updateEntity(userData);
                    var pkOutData = data[gc.dsConsts.ExPkOut.pkOutData];
                    if(pkOutData) self.updateEntity(pkOutData);
                    if(cb){
                        cb.call(target);
                    }
                });
            });
        }

        //是否今天赢过
        isTodayRankWin(eid){
            var winData = this._getRankPkTime();
            var eids = winData[1]||[];
            if(eids.indexOf(eid)>-1){
                return true;
            }
            return false;
        }


        _getRankPkTime(){
            var self = this;
            //保存格式  ["日期",[eid,eid]]
            var exData = userCtrl.get(gc.dsConsts.UserEntity.exData);
            var winData = exData[gc.c_prop.userExDataKey.todayRankWin]||[];

            var time = winData[0];
            if(!time) time =  Date.newDate();
            var timeDate = Date.newDate(time);
            var eids = winData[1]||[];
            if(!Date.newDate().equalsDay(timeDate)){
                time =  Date.newDate();
                eids = [];
            }
            winData = [time,eids];
            return winData;
        }

        /**
         * 请求战斗开始，并且返回对方角色信息
         * @param enemyId
         * @param fightType
         * @param isRevenge 是否复仇
         * @param cb
         * @param target
         * @returns [ds.HeroEntityCtrl]
         */
        start(enemyId, fightType, isRevenge, cb, target){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl = c_open[gc.id_c_open.pkOut][gc.c_open_lvlRequired];
            if(!self._data) return mo.showMsg(gc.id_c_msgCode.pkNoOpen, needLvl,function(){},self);

            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            if(fightCtrl.isDie) return mo.showMsg("复活中，请稍后");

            self._curEnemyID = enemyId;
            self._curFightType = fightType;
            self._curIsRevenge = isRevenge || 0;


            var args = {};
            var argsKey = gc.iface.a_pkOut_start_args;
            args[argsKey.enemyId] = enemyId;
            args[argsKey.fightType] = fightType;
            args[argsKey.isRevenge] = self._curIsRevenge;
            mo.requestWaiting4Server(gc.iface.a_pkOut_start, args, function (data) {
                var pkOutData = data[gc.dsConsts.ExPkOut.pkOutData];
                self.updateEntity(pkOutData);
                var heroList = data[gc.dsConsts.ExPkOut.heroList];
                var otherDataList = data[gc.dsConsts.ExPkOut.otherDataList];
                var fightData = data[gc.dsConsts.ExPkOut.fightData];
                var heroCtrlList = [];
                for(var i = 0;i<heroList.length;i++){
                    var locHero = heroList[i];
                    var locHeroEntityCtrl = HeroEntityCtrl.createNewEnemy(locHero,fightData,otherDataList[i]);
                    heroCtrlList.push(locHeroEntityCtrl);
                }
                heroCtrlList.sort(gd.heroCtrl._sortHeroList);
                fightCtrl.isSpFighting = true;

                var guildData = data[gc.dsConsts.ExPkOut.guildData];
                if(guildData) guildCtrl.updateData(guildData);
                var guildPersonalData = data[gc.dsConsts.ExPkOut.guildPersonalData];
                if(guildPersonalData) guildPersonalCtrl.updateData(guildPersonalData);

                if (cb)  cb.call(target,heroCtrlList);
            });
        }

        /**
         * 战斗结束，获取收益
         * @param enemyId
         * @param isWin 是否胜利
         * @param cb
         * @param target
         * @returns ds.FightResult
         */
        end(isWin, fightData, cb, target){
            if(this._curEnemyID == -1)
                return;
            var self = this;
            var args = {};
            var tempEnemyId = this._curEnemyID;
            var argsKey = gc.iface.a_pkOut_end_args;
            args[argsKey.enemyId] = tempEnemyId;
            args[argsKey.fightData] = fightData;
            args[argsKey.isWin] = isWin;
            args[argsKey.fightType] = self._curFightType;
            args[argsKey.isRevenge] = self._curIsRevenge;

            this._curEnemyID = -1;
            mo.requestWaiting4Server(gc.iface.a_pkOut_end, args, function (fightResult) {

                var updateUser = fightResult[gc.dsConsts.FightResult.updateUser]||{};
                var bagItems = fightResult[gc.dsConsts.FightResult.bagItems];
                var equipBagItems = fightResult[gc.dsConsts.FightResult.equipBagItems];
                var bag = gd.userUtils.getNewBag({},bagItems);
                updateUser[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                updateUser[gc.dsConsts.UserEntity.equipBag] = equipBag;
                if(updateUser) gd.userCtrl.updateEntity(updateUser);
                var updatePkOut = fightResult[gc.dsConsts.FightResult.updatePkOut];
                if(updatePkOut) self.updateEntity(updatePkOut);
                self._initRank();

                if(!isWin){
                    var killValue = 0;
                    fightResult[gc.dsConsts.FightResult.killValue] = killValue;
                }
                if (cb)  cb.call(target,fightResult);
            });
        }

        /**
         * 获取排行列表，返回50名数据
         * @param cb
         * @param target
         * @returns [ds.Rank]
         */
        getRankList(cb, target){
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_getRankList, {}, function (dataList) {
                if (cb)  cb.call(target,dataList);
            });
        }


        /**
         * 获取个人战斗记录，最多20条
         * @param cb
         * @param target
         * @returns [ds.ArenaRecordEntity]
         */
        getPkRecordList(cb, target) {
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            mo.request4Server(gc.iface.a_pkOut_getPkRecordList, {}, function (dataList) {
                self._calRecord(dataList);
                self._pkRecordList = dataList;
                pointCtrl.cal(gc.c_prop.pointRedKey.pkout1);
                if (cb)  cb.call(target, dataList);
            });
        }

        //设置阅读
        setReadRecord(){
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_setPkRecordRead, {}, function (data) {});
        }

        //是否包含未阅读防守记录
        hasNewDeal(){
            var self = this;
            return self._hasNewDeal;
        }

        //是否包含未阅读防守记录
        setNewDeal(bool){
            var self = this;
            this._hasNewDeal = bool;
            pointCtrl.cal(gc.c_prop.pointRedKey.pkout1);
        }

        /**
         * 处理被抢
         * @param cb
         * @param target
         */
        dealRecord(cb?, target?){
            var self = this;
            self._dealRecord(gc.c_prop.fightTypeKey.pk, function (hasNewDeal) {
                if(hasNewDeal) self.setNewDeal(hasNewDeal);
            },self);
        }

        _calRecord(dataList){
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            for (var i = 0; i < dataList.length; i++) {
                var locData = dataList[i];
                var locIsWin = locData[gc.dsConsts.ArenaRecordEntity.isWin];
                var locUserId = locData[gc.dsConsts.ArenaRecordEntity.userId];
                var locEnemyId = locData[gc.dsConsts.ArenaRecordEntity.enemyId];

                var locItems = locData[gc.dsConsts.ArenaRecordEntity.fightData]["items"]||{};
                for(var key in locItems){
                    var locValue = locItems[key];
                    if(locValue==0) delete locItems[key];
                }



                if(locUserId==locEnemyId){
                    var killValue = 0,gold = 0,expc = 0,items = {},pkValue = 0;

                    //防守失败
                    if(!locIsWin){
                        //掉杀戮值
                        /*  killValue =  locData[gc.dsConsts.ArenaRecordEntity.fightData]["killValue"]||0;
                         killValue *=-1;*/
                        //掉pk值
                        pkValue = c_game[gc.id_c_game.pkOutCfg][11]||0;
                        pkValue *=-1;

                        //红名掉 金币和装备
                        //只有红名，才会被抢金币和装备
                        var ePkColor = locData[gc.dsConsts.ArenaRecordEntity.fightData]["ePkColor"];
                        if(ePkColor == gc.c_prop.pkNameColorKey.red){
                            gold =  locData[gc.dsConsts.ArenaRecordEntity.fightData]["gold"]||0;
                            gold *=-1;
                        }

                        var pkLootCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkLoot)[0];
                        pkLootCfg = pkLootCfg.split(",");
                        delete locItems[Math.floor(pkLootCfg[0])];
                    }else{
                        //防守成功，获得杀戮值
                        killValue =  locData[gc.dsConsts.ArenaRecordEntity.fightData]["killValue"]||0;
                        killValue = Math.floor(killValue/2);
                    }

                    locData[gc.dsConsts.ArenaRecordEntity.fightData]["killValue"] = killValue;
                    locData[gc.dsConsts.ArenaRecordEntity.fightData]["gold"] = gold;
                    locData[gc.dsConsts.ArenaRecordEntity.fightData]["expc"] = expc;
                    locData[gc.dsConsts.ArenaRecordEntity.fightData]["pkValue"] = pkValue;
                }else{
                    //进攻失败
                    if(!locIsWin){
                        //没有杀戮值
                        var killValue = 0;
                         locData[gc.dsConsts.ArenaRecordEntity.fightData]["killValue"] = killValue;
                    }
                }

                locData[gc.dsConsts.ArenaRecordEntity.fightData]["items"] = locItems;

            }

        }
        /**
         * 处理被抢
         * @param cb
         * @param target
         */
        _dealRecord(fightType, cb?, target?){
            var self = this;
            var args = {};
            var argsKey = gc.iface.a_pkOut_dealRecord_args;
            args[argsKey.fightType] = fightType;

            mo.request4Server(gc.iface.a_pkOut_dealRecord, args, function (data) {
                var userData = data[gc.dsConsts.ExPkOut.userData];
                userCtrl.updateEntity(userData);
                var pkOutData = data[gc.dsConsts.ExPkOut.pkOutData];
                self.updateEntity(pkOutData);

                var hasNewDeal = data[gc.dsConsts.ExPkOut.hasNewDeal];
                cb.call(target,hasNewDeal);
            });
        }

        /***************************************************排行榜相关***************************************************/

        /**
         * 获取排行榜个人战斗记录，最多20条
         * @param cb
         * @param target
         * @returns [ds.ArenaRecordEntity]
         */
        getRankPkRecordList(cb, target) {
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_getRankPkRecordList, {}, function (dataList) {
                self._calRecord(dataList);
                pointCtrl.cal(gc.c_prop.pointRedKey.rankPk);
                if (cb)  cb.call(target, dataList);
            });
        }

        //是否包含未阅读防守记录
        hasRankPkNewDeal(){
            var self = this;
            return self._hasNewRankPkDeal;
        }

        //是否包含未阅读防守记录
        setRankPkNewDeal(bool){
            var self = this;
            this._hasNewRankPkDeal = bool;
            pointCtrl.cal(gc.c_prop.pointRedKey.rankPk);
        }

        /**
         * 处理被抢
         * @param cb
         * @param target
         */
        dealRankPkRecord(cb?, target?){
            var self = this;
            self._dealRecord(gc.c_prop.fightTypeKey.rankPk, function (hasNewDeal) {
                if(hasNewDeal) self.setRankPkNewDeal(hasNewDeal);
            },self);
        }

        /***************************************************排行榜相关***************************************************/

        getRevengeList(cb?, target?){
            var self = this;
            self.getPkRecordList(function(dataList){
                for (var i = 0; i < dataList.length; i++) {
                    var locData = dataList[i];

                }
            },self);
        }

        /**
         * 获取对手列表
         * @param cb
         * @param target
         * @returns [ds.PkOutUserData]
         */
        getRevengeEnemyList(cb, target){
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_getRevengeEnemyList, {}, function (enemyList) {
                if (cb)  cb.call(target,enemyList);
            });
        }

        //是否被杀
        isBePkKill(){
            var self = this;
            return self._bePkKill;
        }

        //重置被杀
        resetBePkKill(){
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_resetBePkKill, {}, function (data) {
                self.setBePkKill(false);
            });
        }

        //设置被杀
        setBePkKill(bool){
            var self = this;
            self._bePkKill = bool;
            pointCtrl.cal(gc.c_prop.pointRedKey.bePkKill);
        }


        /*************************************************江湖探秘*******************************************************/
        treasureBiz(cb, target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_treasure_spies, {}, function (data) {
                var userData = data[gc.dsConsts.ExPkOut.userData];
                if(userData) userCtrl.updateEntity(userData);
                var pkOutData = data[gc.dsConsts.ExPkOut.pkOutData];
                if(pkOutData) self.updateEntity(pkOutData);
                self.getEnemyList(cb, target);
            });
        }

        incognito(cb, target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_pkOut_incognito, {}, function (data) {
                var userData = data[gc.dsConsts.Incognito.userData];
                if(userData) userCtrl.updateEntity(userData);
                var openTime = data[gc.dsConsts.Incognito.openTime];
                if(cb) cb.call(target, data);
            });
        }

        getExPkOutInfo(cb, target){
            var self = this;
            mo.request4Server(gc.iface.a_treasure_getExPkOutInfo, {}, function (data) {
                if(cb) cb.call(target, data);
            });
        }

        openTreasure(id, cb , target){
            var self = this;
            var args = {};
            var argsKey = gc.iface.a_treasure_open_args;
            args[argsKey.id] = id;
            mo.requestWaiting4Server(gc.iface.a_treasure_open, args, function (data) {
                if(cb) cb.call(target, data);
            });
        }

        /**
         * 处理秘宝被抢
         * @param cb
         * @param target
         */
        getTreasurePkRecordList(cb, target){
            var self = this;
            mo.request4Server(gc.iface.a_pkOut_getTreasurePkRecordList, {}, function (data) {
                if(cb) cb.call(target, data);
            });
        }

        /**
         * 合成秘宝碎片
         * @param ItemId
         * @param cb
         * @param target
         */
        compose(itemId, cb, target){
            var self = this;
            var args = {};
            var argsKey = gc.iface.a_treasure_compose_args;
            args[argsKey.itemId] = itemId;
            mo.requestWaiting4Server(gc.iface.a_treasure_compose,args, function(data){
                var user = {};
                var delBagItem = data[gc.dsConsts.ComposeInfo.delBagItem];
                var bag = gd.userUtils.getNewBag(delBagItem,{});
                user[gc.dsConsts.UserEntity.bag] = bag;
                userCtrl.updateEntity(user);
                if(cb) {
                    cb.call(target, data);
                }
            })
        }
    }
    export var pkOutCtrl:PkOutCtrl;
}