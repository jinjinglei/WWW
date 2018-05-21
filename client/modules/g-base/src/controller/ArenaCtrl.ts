/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class ArenaCtrl extends mo.DataController {
        _hasNotReadNewArenaRecord = 0;
        _fightRank:number;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.ArenaEntity;
        }
        initData(hasNotReadNewArenaRecord){
            this._hasNotReadNewArenaRecord = hasNotReadNewArenaRecord;
        }

        updateEntity(data?){
            super.updateEntity(data);
            pointCtrl.cal(gc.c_prop.pointRedKey.arena1);
        }

        /**
         * 获取数据
         * @param cb
         * @param target
         * @returns ds.ArenaEntity
         */
        getInfo(cb, target) {
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_arena_getInfo, {}, function (data) {
                self.init(data);
                pointCtrl.cal(gc.c_prop.pointRedKey.arena1);
                if (cb) cb.call(target,data);
            });
        }

        /*
                //是否有未阅读的记录
                hasNotReadNewArenaRecord(){
                    return this._hasNotReadNewArenaRecord > 0;
                }

                //设置记录阅读
                setRead(cb,target){
                    var self = this;
                    mo.request4Server(gc.iface.a_arena_setRead, {}, function (data) {
                        self._hasNotReadNewArenaRecord = 0;
                        if(cb) cb.call(target,data);
                    });
                }
        */


        //获取排名
        getRank(){
            var self = this;
            if(!self._data) return 0;
            return self.get(gc.dsConsts.ArenaEntity.rank);
        }

        //获取历史最高排名
        getHighRank(){
            var self = this;
            if(!self._data) return 0;
            return self.get(gc.dsConsts.ArenaEntity.highRank);
        }


        /**
         * 重置竞技场挑战对手
         * @param cb
         * @param target
         */
        resetArenaFightRanks(cb, target) {
            var self = this;
            var diamond = gd.userCtrl.getDiamond();
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.arenaCfg);
            var reNumData = self.get(gc.dsConsts.ArenaEntity.reNumData);
            var lastResetTime = reNumData[gc.c_prop.arenaDataKey.lastResetTime];
            if(lastResetTime){
                var gameCds = c_game[6]||999999;
                var nowTime = Date.newDate();
                var cds = (nowTime.getTime() - Date.newDate(lastResetTime).getTime())/1000;
                if(cds < gameCds){
                    var cosDiamond = c_game[7]||999999;
                    if(diamond < cosDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                }
            }
            mo.requestWaiting4Server(gc.iface.a_arena_resetFightRanks, {}, function (data) {
                self.updateEntity(data);
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 获取战斗用户列表
         * @param cb
         * @param target
         * @returns [gc.dsConsts.PKUserData]
         */
        getFightUserList(cb,target){
            //获取用户列表
            mo.requestWaiting4Server(gc.iface.a_arena_getFightUserList, {}, function (data) {
                if (cb) cb.call(target,data);
            });
        }

        //获取下一次挑战次数恢复时间,返回空则不需要倒计时
        getReNumNextSeconds(){
            var self = this;
            var reNum = self.getRePKNum();
            if(reNum>=0) return null;
            var curTime = commonUtils.getCurLastRefreshTime();
            //计算下一次恢复时间
            var reSeconds = Date.newDate().getSecondsBetween(curTime.addDays(1));
            return reSeconds;
        }

        //购买次数
        buyPKNum(cb,target){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var calBuyPKDiamond = c_game[gc.id_c_game.arenaCfg][4];      //参数5：购买挑战次数需要元宝
            //没有挑战次数！挑战次数不足，是否花费[ubb color=#6dd1ff]%s元宝[/ubb][/br]购买1次挑战次数？
            mo.showMsg(gc.id_c_msgCode.noArenaTimes, calBuyPKDiamond,  function(){
                mo.requestWaiting4Server(gc.iface.a_arena_buyPKNum, {}, function (data) {
                    userCtrl.updateEntity(data[gc.dsConsts.ExUserData.userData]);
                    self.updateEntity(data[gc.dsConsts.ExUserData.arenaData]);
                    if(cb) cb.call(target,data);
                });
            });
        }

        //获取剩余pk次数
        getRePKNum(){
            var self = this;
            if(!self._data) return 0;
            self._calReNumData();
            return self.get(gc.dsConsts.ArenaEntity.reNumData)[0]||0;
        }

        //获取下一次挑战次数恢复时间,返回空则不需要倒计时
        getCDSeconds(){
            var self = this;
            var nextFightTime = self.get(gc.dsConsts.ArenaEntity.reNumData)[gc.c_prop.arenaDataKey.nextFightTime]||Date.newDate();
            nextFightTime = new Date(nextFightTime);

            //计算下一次恢复时间
            var reSeconds = Date.newDate().getSecondsBetween(nextFightTime);

            if(reSeconds<0) reSeconds = 0;
            return reSeconds;
        }

        //刷新cd
        refreshCD(cb,target){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var freshDiamond = c_game[gc.id_c_game.arenaCfg][3];      //参数4：cd需要元宝
            //是否花费[ubb color=#6dd1ff]%s元宝[/ubb][/br]清除cd？
            mo.showMsg(gc.id_c_msgCode.cleanArenaTime, freshDiamond,  function(){
                mo.requestWaiting4Server(gc.iface.a_arena_refreshCD, {}, function (data) {
                    userCtrl.updateEntity(data[gc.dsConsts.ExUserData.userData]);
                    self.updateEntity(data[gc.dsConsts.ExUserData.arenaData]);
                    if(cb) cb.call(target,data);
                });
            });
        }

        /**
         * 挑战开始
         * @param rank
         * @param cb
         * @param target
         * @returns [ds.HeroEntityCtrl]
         */
        fightStart(rank,cb,target){
            var self = this;
            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            if(fightCtrl.isDie) return mo.showMsg("复活中，请稍后");
            var argsObj = gc.iface.a_arena_fightStart_args, args = {};
            args[argsObj.rank] = rank;

            var cdSeconds = self.getCDSeconds();
            if (cdSeconds > 0) {
                self.refreshCD(function () {
                    self.fightStart(rank, cb, target);
                }, self);
                return;
            }

            var rePkNum = self.getRePKNum();
            if (rePkNum <= 0) {
                self.buyPKNum(function () {
                    self.fightStart(rank, cb, target);
                }, self);
                return;
            }

            mo.requestWaiting4Server(gc.iface.a_arena_fightStart, args, function (data) {
                self._fightRank = rank;
                var updateArena = data[gc.dsConsts.ExArena.arenaData];
                if(updateArena) self.updateEntity(updateArena);
                var userData = data[gc.dsConsts.ExArena.userData];
                if(userData) userCtrl.updateEntity(userData);

                var heroList = data[gc.dsConsts.ExArena.heroList];
                var otherDataList = data[gc.dsConsts.ExArena.otherDataList];
                var fightData = data[gc.dsConsts.ExArena.fightData];
                var heroCtrlList = [];
                for(var i = 0;i<heroList.length;i++){
                    var locHero = heroList[i];
                    var locHeroEntityCtrl = HeroEntityCtrl.createNewEnemy(locHero,fightData,otherDataList[i]);
                    heroCtrlList.push(locHeroEntityCtrl);
                }
                heroCtrlList.sort(gd.heroCtrl._sortHeroList);
                gd.fightCtrl.isSpFighting = true;
                if (cb) cb.call(target,heroCtrlList);
            });
        }

        /**
         * 战斗
         * @param isWin
         * @param fightData
         * @param cb
         * @param target
         * @returns ds.FightResult
         */
        fightEnd(isWin, fightData, cb, target){
            var self = this;
            if(!self._fightRank) return;
            var argsObj = gc.iface.a_arena_fightEnd_args, args = {};
            args[argsObj.rank] = self._fightRank;
            args[argsObj.isWin] = isWin;
            args[argsObj.fightData] = fightData;

            mo.requestWaiting4Server(gc.iface.a_arena_fightEnd, args, function (fightResult) {
                var updateArena = fightResult[gc.dsConsts.FightResult.updateArena];
                if(updateArena){
                    self.updateEntity(updateArena);
                }
                var updateUser = fightResult[gc.dsConsts.FightResult.updateUser];
                if(updateUser){
                    userCtrl.updateEntity(updateUser);
                }

                var guildData = fightResult[gc.dsConsts.FightResult.guildData];
                if(guildData) guildCtrl.updateData(guildData);
                var guildPersonalData = fightResult[gc.dsConsts.FightResult.guildPersonalData];
                if(guildPersonalData) guildPersonalCtrl.updateData(guildPersonalData);

                var hasChangeRank = fightResult[gc.dsConsts.FightResult.hasChangeRank];
                if(hasChangeRank) mo.showMsg(gc.id_c_msgCode.rankChanged);
                if (cb) cb.call(target,fightResult);
            });
        }

        /**
         * 获取战斗记录
         * @param cb
         * @param target
         * @returns [ArenaRecordEntity]
         */
        getRecordList(cb,target){
            var self = this;
            var argsObj = gc.iface.a_arena_getRecordList_args, args = {};
            args[argsObj.index] = 0;
            args[argsObj.count] = 20;
            mo.requestWaiting4Server(gc.iface.a_arena_getRecordList, args, function (data) {
                if (cb) cb.call(target,data);
            });
        }
        /**
         * 获取剩余更新时间/s
         * @param cb
         * @param target
         */
        getRefreshRemainTime(cb){
            mo.request4Server(gc.iface.a_arena_getRefreshRemainTime,{},function(data){
                return cb(data);
            })
        }
        /**
         * 获取排行榜列表,50条
         * @param cb
         * @param target
         * @returns [gc.dsConsts.Rank]
         */
        getRankList(cb,target){
            mo.requestWaiting4Server(gc.iface.a_arena_getRankList, {}, function (data) {
                if (cb) cb.call(target,data);
            });
        }

        //获取排名奖励和段位奖励
        //return [金币，元宝，声望]
        getRankReward(rank?){
            var c_arenaRankReward = mo.getJSONWithFileName(gc.cfg_c_arenaRankReward);
            var prestige = 0;
            var gold = 0;
            var diamond = 0;
            var curData = null;
            for (var i = 1; i < 50; i++) {
                var locData = c_arenaRankReward[i];
                if (!locData) break;
                if (rank >= locData[gc.c_arenaRankReward_rangeStart]&&rank <= locData[gc.c_arenaRankReward_rangeEnd]){
                    curData = locData;
                    break;
                }
            }
            if (curData) {
                var rewardId = curData[gc.c_arenaRankReward_rewardId];
                var c_reward = mo.getJSONWithFileName(gc.cfg_c_reward);
                var c_rewardData = c_reward[rewardId];
                prestige = c_rewardData[gc.c_reward_prestige];
                gold = c_rewardData[gc.c_reward_gold];
                diamond = c_rewardData[gc.c_reward_diamond];
            }
            return [gold, diamond,prestige];
        }


        //计算排位赛信息，主要是恢复挑战次数
        private _calReNumData() {
            var self = this;
            //[剩余挑战次数，上一次恢复次数时间，下一次可以挑战的时间(cd)]
            //计算次数恢复
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var reNumData = self.get(gc.dsConsts.ArenaEntity.reNumData);

            //计算每日购买次数
            var reNum = reNumData[0]||0;
            var lastReplayTime = reNumData[1];
            var maxNum = c_game[gc.id_c_game.arenaCfg][1];//参数2：竞技场每天挑战次数
            var refreshData = commonUtils.calRefreshData(reNum,lastReplayTime,maxNum);
            reNumData[0] = refreshData[0];
            reNumData[1] = refreshData[1];
        }

    }
    export var arenaCtrl:ArenaCtrl = ArenaCtrl.getInstance();
}