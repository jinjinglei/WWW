/**
 * Created by Sara on 2016/4/6.
 */
module gd {
    export class GuildCopyCtrl extends mo.DataController {
        static ON_GUILD_COPY_CD_CLEAR:string = "on_guild_copy_cd_clear";

        _guildCopyArr:any;
        curFightGuildBossId;
        _initProp() {
            super._initProp();
            this._guildCopyArr = [-1];
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
        }

        //更新数据
        updateData(data){
            var self = this;
            if(!self._data) return;
            self.updateEntity(data);
        }

        //获得所有章节
        getGuildSection(){
            var self = this;
            var t_guildCopy = mo.getJSONWithFileName(gc.cfg_t_guildCopy);
            var ret = [];
            for(var i = 1, li = Object.keys(t_guildCopy).length; i <= li; ++i){
                ret.push(t_guildCopy[i]);
            }
            return ret;
        }

        //获取章节信息
        getSectionInfo(sectionId){
            var self = this;
            return mo.getJSONWithFileNameAndID(gc.cfg_t_guildCopy, sectionId);
        }

        //获取该章节所有boss
        getGuildBossList(sectionId){
            var self = this;
            var sectionInfo = self.getSectionInfo(sectionId);
            var bossIdRange = sectionInfo[gc.t_guildCopy_section];
            var bossList = [];
            for(var bossId = parseInt(bossIdRange[0]), li = parseInt(bossIdRange[1]); bossId <= li; ++bossId){
                bossList.push(bossId);
            }
            return bossList;
        }
        //获取副本长度
        getGuildBossListLength(sectionId){
            var self = this;
            var sectionInfo = self.getSectionInfo(sectionId);
            var bossIdRange = sectionInfo[gc.t_guildCopy_section];
            return parseInt(bossIdRange[1]) - parseInt(bossIdRange[0]) + 1;
        }

        //获取boss进度
        getGuildProgress(bossId){
            var self = this;
            var returnProgress = 0;
            var guildCopyData = gd.guildCtrl.get(gc.dsConsts.GuildEntity.guildCopyData);
            if(!guildCopyData[bossId]) return 0;
            if(guildCopyData[bossId][0]) returnProgress =guildCopyData[bossId][0];
            return returnProgress;
        }

        //获取当前进度bossid      reutrn {"章节id":当前bossid,"章节id":当前bossid,...}       当前bossid    -1:打完所有
        getNewGuildBossId(){
            var self = this;
            var obj = {};
            if(!gd.guildCtrl.getData()) return obj;
            var guildCopyData = gd.guildCtrl.get(gc.dsConsts.GuildEntity.guildCopyData);
            var t_guildCopy = mo.getJSONWithFileName(gc.cfg_t_guildCopy);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var needProgress = c_game[gc.id_c_game.guildCopyCfg][2];
            for(var key in t_guildCopy){
                var section = t_guildCopy[key][gc.t_guildCopy_section];
                var start = section[0];
                var end = section[1];
                var isCom = true;
                for(var i = start;i<=end;i++){
                    if(!guildCopyData[i] || !guildCopyData[i][0]|| guildCopyData[i][0] < needProgress) {
                        obj[key] = i;
                        isCom = false;
                        break;
                    }
                }
                if(isCom) obj[key] = -1;
            }
            return obj;
        }

        //获取章节当前bossId
        getCurBossId(sectionId){
            var self = this;
            var curBossId = self.getNewGuildBossId()[sectionId];
            if(curBossId < 0){ //通关了,就显示最后一只boss
                var sectionInfo = self.getSectionInfo(sectionId);
                curBossId = parseInt(sectionInfo[gc.t_guildCopy_section][1]);
            }
            return curBossId;
        }

        //是否通关某个boss
        isBossKilled(sectionId, bossId){
            var self = this;
            var curBossId = self.getNewGuildBossId()[sectionId];
            if(curBossId > 0){
                return parseInt(curBossId) > parseInt(bossId);
            }
            return true;
        }

        //获取副本CD状态
        getGuildCopyCdState(){
            var self = this;
            var state = {
                threshold: mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildCopyCfg)[3] //阈值,秒
                ,needBuy: false
            }
            state.needBuy = self.isNeedClearFightCD();
            return state;
        }

        //是否需要清战斗CD
        isNeedClearFightCD(){
            var self = this;
            var isCopy = false;
            var progressCtrl = gd.copyCtrl.getCopyProgressCtrl(gc.c_prop.copyTypeKey.guild);
            var refreshTime = progressCtrl.get(gc.dsConsts.CopyProgressEntity.refreshTime);
            if(refreshTime) {
                //判断cd
                var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
                var timeLimit = c_game[gc.id_c_game.guildCopyCfg][3];
                var pCopyId = progressCtrl.get(gc.dsConsts.CopyProgressEntity.pCopyId)||0;     //cd秒数
                var second = (Date.newDate().getTime() - Date.newDate(refreshTime).getTime()) / 1000;
                if(pCopyId >= timeLimit){
                    if(second < pCopyId) isCopy = true;
                }
            }
            return isCopy
        }

        //获取副本cd,返回秒
        getGuildCopyCd(){
            var self = this;

            var progressCtrl = gd.copyCtrl.getCopyProgressCtrl(gc.c_prop.copyTypeKey.guild);
            var pCopyId = progressCtrl.get(gc.dsConsts.CopyProgressEntity.pCopyId)||0;     //cd秒数
            var refreshTime = progressCtrl.get(gc.dsConsts.CopyProgressEntity.refreshTime);
            if(refreshTime) {
                var second = (Date.newDate().getTime()-Date.newDate(refreshTime).getTime())/1000;
                pCopyId -= second;
            }
            if(pCopyId < 0) pCopyId = 0;
            
            return pCopyId;
        }

        //获取重置剩余秒数
        getResetCd(){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var resetDay = c_game[gc.id_c_game.guildCopyCfg][1];
            var returnSeconds = 0;
            var resetTime = gd.guildCtrl.get(gc.dsConsts.GuildEntity.resetTime);
            if(!resetTime) return returnSeconds;
            var nextResetTime = Date.newDate(resetTime).addDays(resetDay);
            if(Date.newDate()>=nextResetTime) return returnSeconds;
            returnSeconds = (nextResetTime.getTime()-Date.newDate().getTime())/1000;
            return returnSeconds;
        }

        //获取章节里副本数量
        getCompletedNum(sectionId){
            var self = this;
            var curBossId = parseInt(self.getNewGuildBossId()[sectionId]);
            if(curBossId > 0){
                var sectionInfo = self.getSectionInfo(sectionId);
                return curBossId - parseInt(sectionInfo[gc.t_guildCopy_section][0]);
            }
            return self.getGuildBossListLength(sectionId);
        }

        /**
         * 行会副本开始
         * @param chapterId 章节ID
         * @param bossId
         * @param cb
         * @param target
         * @returns []
         */
        guildStart(chapterId,bossId,cb,target){
            var self = this;
            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            if(fightCtrl.isDie) return mo.showMsg("复活中，请稍后");
            var cdTime = self.getGuildCopyCd();
            var needBuy = self.getGuildCopyCdState().needBuy;
            if(cdTime && needBuy){
                var cleanCost = gc.calGuildCopyCd(gd.guildCopyCtrl.getGuildCopyCd());
                mo.showMsg(gc.id_c_msgCode.buyTime, cleanCost, function () {
                    if(gd.userCtrl.getGold() < cleanCost){
                        gd.userCtrl.noGolds(function () {
                            self.clearGuildCopy(bossId, function () {}, self);
                        }, self);
                    }else{
                        self.clearGuildCopy(bossId, function () {}, self);
                    }
                });
                return;
            }
            var t_guildCopy = mo.getJSONWithFileName(gc.cfg_t_guildCopy);
            if(!t_guildCopy[chapterId]) return mo.showMsg("数据异常");
            var section = t_guildCopy[chapterId][gc.t_guildCopy_section];
            if(bossId<section[0]||bossId>section[1]) return mo.showMsg("数据异常");
            var openLvl = t_guildCopy[chapterId][gc.t_guildCopy_openLvl];
            if(!gd.guildCtrl.getData())  return mo.showMsg("数据异常");
            var lvl = gd.guildCtrl.get(gc.dsConsts.GuildEntity.lvl);
            if(openLvl > lvl) return  mo.showMsg("行会等级不足");
            this._guildCopyArr[0] = chapterId;
            this._guildCopyArr[1] = bossId;

            var argKeys = gc.iface.a_copy_guildStart_args;
            var args = {};
            args[argKeys.copyId] = chapterId;
            args[argKeys.bossId] = bossId;
            self.curFightGuildBossId = bossId;

            mo.requestWaiting4Server(gc.iface.a_copy_guildStart, args, function (data) {
                gd.fightCtrl.isSpFighting = true;
                var guildBossInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_guildCopyBoss, bossId);
                var copyId = guildBossInfo[gc.t_guildCopyBoss_copyId];
                if(mo.moduleMgr.curModule.name != g_consts.moduleId.fight)
                    mo.moduleMgr.runModule(g_consts.moduleId.fight);
                gd.fightLayer.onEnterCopy({pveType:gc.c_prop.fightTypeKey.guildCopy, copyID:copyId, bossId:bossId});
                cb.call(target, data);
            });
        }

        //行会副本结束        return[是否胜利,进度（需要除以100）,伤害,获得物品]
        guildEnd(isWin, cb, target){
            if(this._guildCopyArr[0]==-1)
                return;
            var self = this;

            var copyId = this._guildCopyArr[0];
            var bossId = this._guildCopyArr[1];
            var argKeys = gc.iface.a_copy_guildEnd_args;
            var args = {};
            args[argKeys.copyId] = copyId;
            args[argKeys.bossId] = bossId;
            args[argKeys.isWin] = isWin;
            self._guildCopyArr[0] = -1;
            mo.requestWaiting4Server(gc.iface.a_copy_guildEnd, args, function (data) {
                var msg = data[gc.dsConsts.ExCopyProgress.msg]||"";
                if(msg.length>0){
                    mo.showMsg(msg);
                    return cb.call(target,[0,0,{}]);
                }
                var userData = data[gc.dsConsts.ExCopyProgress.userData]||{};
                var copyProgressData = data[gc.dsConsts.ExCopyProgress.copyProgress]||{};
                var bagItems = data[gc.dsConsts.ExCopyProgress.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExCopyProgress.equipBagItems]||{};

                var isWin = data[gc.dsConsts.ExCopyProgress.isWin];
                var progress = data[gc.dsConsts.ExCopyProgress.progress]||0;
                var items = data[gc.dsConsts.ExCopyProgress.items]||{};

                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                if(userData) gd.userCtrl.updateEntity(userData);
                if(copyProgressData) gd.copyCtrl.updateCopyProgressCtrl(gc.c_prop.copyTypeKey.guild,copyProgressData);

                //公会贡献
                var guildData = data[gc.dsConsts.ExCopyProgress.guildData];
                if(guildData) guildCtrl.updateData(guildData);

                cb.call(target,[isWin,progress,items]);
            });
        }

        //行会副本重置
        guildCopyReset(cb, target){
            var self = this;

            mo.showMsg(gc.id_c_msgCode.resetCopy,function(){
                mo.requestWaiting4Server(gc.iface.a_copy_guildCopyReset, {}, function (updateGuildData) {
                    if(updateGuildData){
                        if(gd.guildCtrl.getData()){gd.guildCtrl.updateEntity(updateGuildData);}else{gd.guildCtrl.initData(updateGuildData);}
                    }
                    cb.call(target,updateGuildData);
                });
            });
        }

        //公会副本清除CD
        clearGuildCopy(bossId,cb,target){
            var self = this;
            var argKeys = gc.iface.a_copy_clearGuildCopy_args;
            var args = {};
            args[argKeys.bossId] = bossId;
            mo.requestWaiting4Server(gc.iface.a_copy_clearGuildCopy, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var copyProgressData = data[gc.dsConsts.ExUserData.copyProgressData]||{};
                gd.userCtrl.updateEntity(userData);
                gd.copyCtrl.updateCopyProgressCtrl(gc.c_prop.copyTypeKey.guild,copyProgressData);
                self.pushNotify(self.__class.ON_GUILD_COPY_CD_CLEAR);
                cb.call(target,data);
            });
        }

        //获取副本购买次数
        getBuyCopyCount(){
            var self = this;
            var type = gc.c_prop.copyTypeKey.guild;
            var copyProgressCtrl = gd.copyCtrl.getCopyProgressCtrl(type);
            var buyCopyCount = 1;
            var resetTime = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetTime);     //购买时间
            var resetCounts = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetCounts);     //子副本今日购买次数
            if(!resetTime) return buyCopyCount;
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate())) resetCounts = {};
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate()) || !resetCounts.hasOwnProperty(type)) return buyCopyCount;
            return resetCounts[type] + 1;
        }

        //获取公会副本今日剩余次数
        getCopyCount(bossId){
            var self = this;
            var c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var copyProgressCtrl = gd.copyCtrl.getCopyProgressCtrl(gc.c_prop.copyTypeKey.guild);
            var vip = gd.userCtrl.getVip() || 0;        //vip等级
            var maxTimes = c_vip[vip][gc.c_vip_guildFbCount];
            var vipExt = maxTimes - c_vip[0][gc.c_vip_guildFbCount];

            if(!copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.refreshTime)) return maxTimes;
            var refreshTime = Date.newDate(copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.refreshTime));     //最后一次通关子副本时间
            var timesPerDay = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.timesPerDay);     //子副本剩余挑战次数
            if(!refreshTime || !refreshTime.equalsDay(Date.newDate()) || !timesPerDay.hasOwnProperty(bossId)) return maxTimes;
            return parseInt(timesPerDay[bossId]) + vipExt;
        }

        getMaxCopyCount(){
            var self = this;
            return mo.getJSONWithFileNameAndID(gc.cfg_c_vip, gd.userCtrl.getVip())[gc.c_vip_guildFbCount];
        }

        /**
         * 行会副本领取奖励
         * @param type
         * @param typeId
         * @param cb
         * @param target
         * @returns []
         */
        guildCopyAward(type,typeId,cb,target){
            var self = this;

            var argKeys = gc.iface.a_copy_guildCopyAward_args;
            var args = {};
            args[argKeys.type] = type;
            args[argKeys.typeId] = typeId;
            mo.requestWaiting4Server(gc.iface.a_copy_guildCopyAward, args, function (data) {
                var userData = data[gc.dsConsts.ExCopyProgress.userData]||{};
                var copyProgressData = data[gc.dsConsts.ExCopyProgress.copyProgress]||{};
                var bagItems = data[gc.dsConsts.ExCopyProgress.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExCopyProgress.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                if(userData) gd.userCtrl.updateEntity(userData);
                if(copyProgressData) gd.copyCtrl.updateCopyProgressCtrl(gc.c_prop.copyTypeKey.guild,copyProgressData);

                cb.call(target,copyProgressData);
            });
        }

        _calProgress(progress){
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var needProgress = c_game[gc.id_c_game.guildCopyCfg][2];
            progress = Math.floor(progress/needProgress*10000)/100;
            if(progress > 100) progress = 100;
            return progress
        }

        getSectionIdByBossId(bossId){
            var self = this;
            var t_guildCopy = mo.getJSONWithFileName(gc.cfg_t_guildCopy);
            for(var id in t_guildCopy){
                var section = t_guildCopy[id][gc.t_guildCopy_section];
                if(parseInt(bossId) >= parseInt(section[0]) && parseInt(bossId) <= parseInt(section[1])){
                    return parseInt(id);
                }
            }
            return -1;
        }

        //单个boss最大击杀次数
        getMaxKillTimes(){
            return mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildCopyCfg)[2];
        }
    }
    export var guildCopyCtrl:GuildCopyCtrl;
    export var guildCopyCtrl:GuildCopyCtrl = GuildCopyCtrl.getInstance() ;
}
