/**
 * Created by Sara on 2015/11/14.
 */
module gd {
    export class RankCtrl extends mo.DataController {
        _rankDataDic:any;//{"rankType":[时间，数据]}
        _myRankDataDic:any;//{"rankType":[时间，数据]}
        _allRankDataDic:any;//{"allRank":[时间，数据]}
        _cacheMinute:number = 5;
        _initProp() {
            super._initProp();
            var self = this;
            self._rankDataDic = {};
            self._myRankDataDic = {};
            self._allRankDataDic = {};
        }

        /**
         * 获取公会相关排行版数据
         * @param rankType 类型：读取c_prop表
         * @param cb
         * @param target
         * @return [排行榜数据[UserRankEntity],{公会id：名称,公会id：名称...}]
         */
        getGuildRank(rankType, cb, target){
            var self = this;
            var rankData = self._allRankDataDic[rankType];
            if(rankData){
                var time:Date = rankData[0];
                var data = rankData[1];
                if(time.clone().addMinutes(self._cacheMinute).isAfter(Date.newDate())){
                    return cb.call(target,data);
                }
            }
            var argKeys = gc.iface.a_rank_getGuildRank_args;
            var args = {};
            args[argKeys.rankType] = rankType;
            mo.requestWaiting4Server(gc.iface.a_rank_getGuildRank, args, function (data) {
                var returnArr = [];
                returnArr[0] = data[gc.dsConsts.ExUserRankData.userRankList];
                returnArr[1] = data[gc.dsConsts.ExUserRankData.guildName];
                if(!data[gc.dsConsts.ExUserRankData.userRankList][0]) return mo.showMsg("该排行榜暂时没有数据");
                var time:Date = Date.newDate();
                self._allRankDataDic[rankType] = [time,returnArr];
                if (cb) cb.call(target,returnArr);
            });
        }

        /**
         * 获取排行版所有数据
         * @param rankType 类型：读取c_prop表
         * @param cb
         * @param target
         * @return [我的排名,我的数据(UserRankEntity),排行榜数据[UserRankEntity],[装备显示id,武器显示id,翅膀id,性别],{公会id：名称,公会id：名称...}]
         */
        getAllRankArr(rankType, cb, target){
            var self = this;
            var rankData = self._allRankDataDic[rankType];
            if(rankData){
                var time:Date = rankData[0];
                var data = rankData[1];
                if(time.clone().addMinutes(self._cacheMinute).isAfter(Date.newDate())){
                    return cb.call(target,data);
                }
            }
            var argKeys = gc.iface.a_rank_allRankArr_args;
            var args = {};
            args[argKeys.rankType] = rankType;
            mo.requestWaiting4Server(gc.iface.a_rank_allRankArr, args, function (data) {
                var returnArr = [];
                returnArr[0] = data[gc.dsConsts.ExUserRankData.userRank];
                returnArr[1] = data[gc.dsConsts.ExUserRankData.userRankData];
                returnArr[2] = data[gc.dsConsts.ExUserRankData.userRankList];
                returnArr[3] = [];
                returnArr[4] = data[gc.dsConsts.ExUserRankData.guildName];
                if(!data[gc.dsConsts.ExUserRankData.userRankList][0]){
                    mo.showMsg("该排行榜暂时没有数据");
                    return cb.call(target);
                }
                if(rankType == gc.c_prop.rankTypeKey.guildRank || rankType == gc.c_prop.rankTypeKey.guildCombatRank || rankType == gc.c_prop.rankTypeKey.chairmanCombatRank) return cb.call(target,returnArr);
                var oneId = data[gc.dsConsts.ExUserRankData.userRankList][0][gc.dsConsts.UserRankEntity.userId];
                var job = 0;
                if(rankType==gc.c_prop.rankTypeKey.zsRank){
                    job = 1;
                }else if(rankType==gc.c_prop.rankTypeKey.fsRank){
                    job = 2;
                }else if(rankType==gc.c_prop.rankTypeKey.dsRank){
                    job = 3;
                }
                gd.heroCtrl.getHeroDisplayByTempId(oneId,job,function(heroData){
                    returnArr[3] = heroData;
                    var time:Date = Date.newDate();
                    self._allRankDataDic[rankType] = [time,returnArr];
                    if (cb) cb.call(target,returnArr);
                },self);
            });
        }

        /**
         * 获取排名
         * @param rankType 类型：读取c_prop表
         * @param cb
         * @param target
         * @return {UserRankEntity}
         */
        getRankList(rankType, cb, target) {
            var self = this;
            var rankData = self._rankDataDic[rankType];
            if(rankData){
                var time:Date = rankData[0];
                var list = rankData[1];
                if(time.clone().addMinutes(self._cacheMinute).isAfter(Date.newDate())){
                    return cb.call(target,list);
                }
            }
            var argKeys = gc.iface.a_rank_getRankList_args;
            var args = {};
            args[argKeys.rankType] = rankType;
            mo.requestWaiting4Server(gc.iface.a_rank_getRankList, args, function (data) {
                var time:Date = Date.newDate();
                var list = data;
                self._rankDataDic[rankType] = [time,list];
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 获取个人排名
         * @param rankType 类型：读取c_prop表
         * @param cb
         * @param target
         * @return [排名，UserRankEntity]
         */
        getUserRank(rankType, cb, target) {
            var self = this;
            var rankData = self._myRankDataDic[rankType];
            if(rankData){
                var time:Date = rankData[0];
                var data = rankData[1];
                if(time.clone().addMinutes(self._cacheMinute).isAfter(Date.newDate())){
                    return cb.call(target,data);
                }
            }
            var argKeys = gc.iface.a_rank_getUserRank_args;
            var args = {};
            args[argKeys.rankType] = rankType;
            mo.requestWaiting4Server(gc.iface.a_rank_getUserRank, args, function (data) {
                var returnArr = [];
                returnArr[0] = data[gc.dsConsts.ExUserRankData.userRank];
                returnArr[1] = data[gc.dsConsts.ExUserRankData.userRankData];
                var time:Date = Date.newDate();
                self._myRankDataDic[rankType] = [time,data];
                if (cb) cb.call(target,returnArr);
            });
        }
    }
    export var rankCtrl:RankCtrl;
}