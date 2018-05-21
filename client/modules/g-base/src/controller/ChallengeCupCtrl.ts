/**
 * Created by Administrator on 2016/1/8.
 */
module gd {
    export class ChallengeCupCtrl extends mo.DataController {
        static ON_ACT_END = "on_act_end";
        actTrigger;
        kingTrigger;

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.ChallengeCupData;
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
            self._initTrigger();
        }

        _initTrigger(){
            var self = this;
            var KEY = self.DATA_KEY;
            var info = self._data;
            //比服务器晚一秒结算
            var actLeftTime = info[KEY.activityLeftTime]+1;
            var kingLeftTime = info[KEY.leftTime]+1;

            self.removeTrigger();

            if(actLeftTime > 1){
                var nextCdTime = Date.newDate(Date.newDate().getTime()+actLeftTime*1000);
                var timeTrigger = self.actTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, function(){
                    info[KEY.activityLeftTime]--;
                }, self);
                timeTrigger.on(tm.Trigger.ON_END, self._onActEnd, self);
                tm.timer.add(timeTrigger);
            }if(kingLeftTime > 1){
                var nextCdTime = Date.newDate(Date.newDate().getTime()+kingLeftTime*1000);
                var timeTrigger = self.kingTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, function(){
                    info[KEY.leftTime]--;
                }, self);
                timeTrigger.on(tm.Trigger.ON_END, self._onActEnd, self);
                tm.timer.add(timeTrigger);
            }
        }

        _onActEnd(){
            var self = this;
            //活动结束
            self.removeTrigger();
            gd.fightCtrl.forceNormalCopy();
            self.getInfo(function(data){
                self.pushNotify(self.__class.ON_ACT_END, data);
            }, self);
        }

        //删除计时器
        removeTrigger(){
            var self = this;
            if(self.actTrigger){
                tm.timer.remove(self.actTrigger);
                self.actTrigger = null;
            }
            if(self.kingTrigger){
                tm.timer.remove(self.kingTrigger);
                self.kingTrigger = null;
            }
        }

        //获取擂台赛数据
        getInfo(cb,target){
            var self = this;
            self._initGuild(function() {
                mo.requestWaiting4Server(gc.iface.a_challengeCup_getInfo, {}, function (data) {
                    self.initData(data);
                    cb.call(target, data);
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

        //获取擂台赛活动是否开启 data [isOpen, now, openTime]
        nextOpenTime;
        isOpen:boolean = false;
        getIsOpen(cb, target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_challengeCup_getIsOpen, {}, function (data) {
                self.isOpen = data[0];
                self.nextOpenTime = Date.newDate(data[2]);
                cb.call(target);
            });
        }

        //发起战斗，挑战擂主
        startFight(cb,target){
            var self = this;
            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            if(self.getOpenLvl() > gd.userCtrl.getLvl()){
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, self.getOpenLvl());
            }
            var KEY = self.DATA_KEY;
            var info = self._data;
            var championUserId  = info[KEY.userId];
            var argsObj = gc.iface.a_challengeCup_startFight_args, args = {};
            args[argsObj.championUserId] = championUserId;
            mo.requestWaiting4Server(gc.iface.a_challengeCup_startFight, args, function (data) {
                var errCode = data[gc.dsConsts.ExChallengeCupFight.errCode];
                if (errCode){
                    cb.call(target, errCode);
                    return;
                }
                var userData = data[gc.dsConsts.ExChallengeCupFight.userData];
                if(userData) userCtrl.updateEntity(userData);

                var heroList = data[gc.dsConsts.ExChallengeCupFight.heroList];
                var otherDataList = data[gc.dsConsts.ExChallengeCupFight.otherDataList];
                var fightData = data[gc.dsConsts.ExChallengeCupFight.fightData];
                var heroCtrlList = [];
                for(var i = 0;i<heroList.length;i++){
                    var locHero = heroList[i];
                    var locHeroEntityCtrl = HeroEntityCtrl.createNewEnemy(locHero,fightData,otherDataList[i]);
                    heroCtrlList.push(locHeroEntityCtrl);
                }
                heroCtrlList.sort(gd.heroCtrl._sortHeroList);
                gd.fightCtrl.isSpFighting = true;

                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, heroCtrlList, gc.c_prop.fightTypeKey.challengeCupPk, self._data[self.DATA_KEY.nickName]);
                cb.call(target);
            })
        }
        //战斗结束
        endFight(isWin, cb, target){
            var argsObj = gc.iface.a_challengeCup_endFight_args, args = {};
            args[argsObj.isWin] = isWin;
            var self = this;
            mo.request4Server(gc.iface.a_challengeCup_endFight,args, function (fightResult){
                cb.call(target, fightResult);
            })
        }

        /**
         * 踩顶操作
         * @param op 0:踩 1：顶
         * @param cb
         * @param target
         */
        op(op, cb, target){
            var self = this;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.challengeCupCfg);
            //判断VIP
            var vip = userCtrl.getVip();
            var lvl = userCtrl.getLvl();
            var needLvl = cfg[17];
            if(vip<=0){
                //等级和行会
                if(lvl<needLvl||!guildCtrl.getData()){
                    return mo.showMsg(gc.id_c_msgCode.noRightarena);
                }
            }
            var argsObj = gc.iface.a_challengeCup_op_args, args = {};
            args[argsObj.op] = op;
            mo.request4Server(gc.iface.a_challengeCup_op,args, function (data){
                self.updateEntity(data);
                //得到物品
                var bagItems = {};

                var getItemId = cfg[16];
                bagItems[getItemId] = 1;
                var bag = gd.userUtils.getNewBag({},bagItems);
                var updateUser = {};
                updateUser[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(updateUser);
                cb.call(target, data);
            })
        }

        //获取总属性加成
        getPropTotal(){
            var ret = this.getPropAdd() + this.getPropDel();
            return ret;
        }

        //获取增加属性百分比
        getPropAdd(){
            /*
             参数13：每增加一点，对应增加属性（万分比）
             参数14：增加属性最高上限
            */
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.challengeCupCfg);
            var perProp = cfg[12];
            var maxProp = cfg[13];
            var upNum = this.get(gc.dsConsts.ChallengeCupData.upCount);
            var ret = perProp*upNum;
            if(ret> maxProp)  ret = maxProp;
            return ret;
        }

        //获取减少属性百分比
        getPropDel(){
            /*
             参数15：每减少一点，对应减少属性（万分比）
             参数16：减少属性最高上限
             */
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.challengeCupCfg);
            var perProp = cfg[14];
            var minProp = cfg[15];
            var downCount = this.get(gc.dsConsts.ChallengeCupData.downCount);
            var ret = perProp*downCount;
            if(ret< minProp)  ret = minProp;
            return ret;
        }

        //清楚cd
        clearCd(cb, target) {
            var self = this;
            mo.request4Server(gc.iface.a_challengeCup_clearCd, {}, function (data){
                userCtrl.updateEntity(data);
                cb.call(target, data);
            })
        }

        //登台
        toBeChampoin(cb, target) {
            var self = this;
            if(self.getOpenLvl() > gd.userCtrl.getLvl()){
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, self.getOpenLvl());
            }
            mo.request4Server(gc.iface.a_challengeCup_toBeChampion, {}, function (data) {
                if(data[self.DATA_KEY.userId] != gd.userCtrl.getId()){
                    mo.showMsg(gc.id_c_msgCode.someoneHoldArena);
                }
                self.initData(data);
                cb.call(target, data);
            })
        }

        //获得参与奖
        getRward(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.challengeCupCfg);
            return cfg[4].split(',');
        }

        //每次挑战需要消耗元宝
        getChallegeCost(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.challengeCupCfg);
            return cfg[9];
        }

        //披风物品id
        getFirstReward(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.challengeCupCfg);
            return cfg[5];
        }

        //获取达标防守时间,单位秒
        getDefTime(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.challengeCupCfg);
            return cfg[1];
        }

        //获取守擂排行
        getRank(cb, target){
            var self = this;
            mo.request4Server(gc.iface.a_challengeCup_getDurationTimeRankList, {}, function (data){
                //最后一个元素表示自己上榜信息
                self._myRank = data.pop();
                cb.call(target, data);
            })
        }

        //我的排行信息
        _myRank;
        getMyRank(){
            var self = this;
            return self._myRank;
        }

        //获取排名奖励和段位奖励
        //return [[金币,数量],[道具id,数量]
        getRankReward(rank){
            var c_challengeCupRankReward = mo.getJSONWithFileName(gc.cfg_c_challengeCupRankReward);
            var curData = null;
            for (var i = 1; i < 50; i++) {
                var locData = c_challengeCupRankReward[i];
                if (!locData) break;
                if (rank >= locData[gc.c_challengeCupRankReward_rangeStart]&&rank <= locData[gc.c_challengeCupRankReward_rangeEnd]){
                    curData = locData;
                    break;
                }
            }
            if (curData) {
                var gold = [gc.c_prop.spItemIdKey.gold, curData[gc.c_challengeCupRankReward_gold]];
                var reward = curData[gc.c_challengeCupRankReward_reward];
                var ary = [gold];
                ary = ary.concat(reward);
            }
            return ary;
        }

        getOpenLvl(){
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var openInfo = c_open[gc.id_c_open.challengeCup];
            return openInfo[gc.c_open_lvlRequired];
        }
    }
    export var challengeCupCtrl:ChallengeCupCtrl = ChallengeCupCtrl.getInstance();
}
