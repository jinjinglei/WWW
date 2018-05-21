/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class HeroCtrl extends mo.DataController {

        public static ON_WEAR_RUNE:string = "ON_WEAR_RUNE";
        public static ON_CALL_HERO:string = "ON_CALL_HERO";
        public static ON_FIGHT_HERO_CHANGE:string = "ON_FIGHT_HERO_CHANGE";

        _heroMap:any;
        _skillCd:number;
        isSelf:boolean;
        isUseStoneOpt:boolean;
        wingUpgradeTypeStr:string;

        curSelRoleIdx;

        _initProp() {
            super._initProp();
            this._heroMap = {};
            this._skillCd = 0;
            this.isSelf = true;

            this.isUseStoneOpt = false;
            this.wingUpgradeTypeStr = "";
            this.curSelRoleIdx = 0;
        }

        initData(heroList){
            var self = this;
            for (var i = 0; i < heroList.length; i++) {
                var locHero = heroList[i];
                var heroEntityCtrl = new HeroEntityCtrl();
                heroEntityCtrl.init(locHero);
                self._heroMap[locHero[gc.dsConsts.HeroEntity.id]] = heroEntityCtrl;
            }
            userCtrl.updateCombat();
        }

        get skillCd(){
            return this._skillCd;
        }

        /**
         * 获取列表
         * @returns {Array}
         */
        getList(){
            var self = this;
            var reList = [];
            for(var key in self._heroMap){
                var locHeroCtrl = self._heroMap[key];
                reList.push(locHeroCtrl);
            }
          /*  var zhanShi = new HeroEntityCtrl();
            zhanShi.skillIds = [1,2,3,4,5];
            zhanShi.skillLevels = [2,2,2,2,2];
            //zhanShi.skillLevels = [2];

            var faShi = new HeroEntityCtrl();
            faShi.skillIds = [11,12,13,14,15];
            faShi.skillLevels = [2,2,2,2,2];

            var daoShi = new HeroEntityCtrl();
            daoShi.skillIds = [21,22,23,24,25];
            daoShi.skillLevels = [2,2,2,2,2];

            //reList = [zhanShi];
            reList = [zhanShi, faShi, daoShi];*/
            reList.sort(self._sortHeroFuc);
            return reList;
        }

        //是否获得了所有英雄
        isGetAllHero(){
            var self = this;
            var maxHeroNum = 4;
            return self.getList().length >= maxHeroNum;
        }

        //获取下一个待解锁的位置
        getNextIdxToBeOpen(){
            var self = this;
            var maxHeroNum = 4;
            for(var i = 1, li = maxHeroNum; i < li; i++){
                if(self.isToBeOpen(i)) return i;
            }
            return -1;
        }

        hasHeroByIndex(index){
            var heroList = this.getList();
            return heroList[index] != null;
        }

        hasHeroByJob(job){
            var heroList = this.getList();
            for(var i = 0, li = heroList.length; i < li; i++){
                if(heroList[i].job == job) return true;
            }
            return false;
        }

        hasHeroJobData(tempId){
            var self = this;
            for(var key in self._heroMap){
                var locHeroCtrl = self._heroMap[key];
                if(locHeroCtrl.get(gc.dsConsts.HeroEntity.tempId) == tempId) return locHeroCtrl;
            }
            return 0;
        }

        //根据职业获取HEC
        getHeroByJob(job){
            var heroList = this.getList();
            for(var i = 0, li = heroList.length; i < li; i++){
                if(heroList[i].job == job) return heroList[i];
            }
            return null;
        }

        //该位置是否是下一个待解锁的位置
        isToBeOpen(index){
            var heroList = this.getList();
            return index == heroList.length && !this.hasHeroByIndex(index);
        }

        //获取英雄开启条件配置[自然开启等级, 提前开启所需vip等级]
        getHeroOpenCfg(idx){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var cfg_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var vip = 0, c_vip, role2VipLvl=0, role3VipLvl=0;
            while((c_vip = cfg_vip[vip]) != null){
                var openRole2 = c_vip[gc.c_vip_openRole2];
                var openRole3 = c_vip[gc.c_vip_openRole3];
                if(role2VipLvl == 0 && openRole2 > 0){role2VipLvl = vip};
                if(role3VipLvl == 0 && openRole3 > 0){role3VipLvl = vip};
                if(role2VipLvl > 0 && role3VipLvl > 0) break;
                vip++;
            }
            var needLvl2 = c_open[gc.id_c_open.openRole2][gc.c_open_lvlRequired];
            var needLvl3 = c_open[gc.id_c_open.openRole3][gc.c_open_lvlRequired];
            var secndCfg = [needLvl2, role2VipLvl];//[等级，vip等级]
            var thirdCCfg = [needLvl3, role3VipLvl];
            var cfgArr = [[0, 0], secndCfg, thirdCCfg];
            return cfgArr[idx] || [0, 0];
        }

        //特殊角色解锁配置
        getSpHeroOpenCfg(idx){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var cfg_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            if(idx < 3) return [];
            if(idx == 3){
                var vip = 0, c_vip, role4VipLvl=0;
                while((c_vip = cfg_vip[vip]) != null){
                    var openRole4 = c_vip[gc.c_vip_openRole4];
                    if(role4VipLvl == 0 && openRole4 > 0){role4VipLvl = vip}
                    if(role4VipLvl > 0) break;
                    vip++;
                }
                var needLvl4 = c_open[gc.id_c_open.openRole4][gc.c_open_lvlRequired];
                return [
                    //[等级, 拥有英雄数量, vip等级, 转生等级要求]
                    [145, 3, vip, c_game[gc.id_c_game.fourRole][11]],
                    [needLvl4, 3, 0, c_game[gc.id_c_game.fourRole][1]]
                ];
            }
        }

        isOpenCfgOk(idx){
            var self = this;
            var openCfg:any;
            if(idx < 3){
                openCfg = self.getHeroOpenCfg(idx);
                return gd.userCtrl.getLvl() >= openCfg[0] //玩家等级满足
                || gd.userCtrl.getVip() >= openCfg[1]; //vip等级满足
            }
            if(idx == 3){
                openCfg = self.getSpHeroOpenCfg(idx);
                for(var i =0, li = openCfg.length; i < li; i++){
                    var cfg = openCfg[i];
                    if(gd.userCtrl.getLvl() >= cfg[0]
                    && self.getList().length >= cfg[1]
                    && gd.userCtrl.getVip() >= cfg[2]
                    && gd.userCtrl.getRebirthLvl() >= cfg[3]){
                        return true;
                    }
                }
                return false;
            }
            return false;
        }

        _sortHeroFuc(aHec, bHec){
            return parseInt(aHec.id) > parseInt(bHec.id)? 1 : -1
        }

        //刷新英雄属性
        calPropAndCombat(){
            var self = this;
            var args = {};
            mo.request4Server(gc.iface.a_hero_calPropAndCombat, args, function (dataList) {
                for(var i = 0;i<dataList.length;i++){
                    var heroData = dataList[i];
                    self.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                }
            });
        }

        //开启自动注入        isOpenIn:true/false
        autoInfuseSwitch(isOpenIn,cb,target){
            var self = this;
            var argKeys = gc.iface.a_hero_autoInfuseSwitch_args;
            var args = {};
            args[argKeys.isOpenIn] = isOpenIn;
            mo.request4Server(gc.iface.a_hero_autoInfuseSwitch, args, function (data) {
                if(data) gd.userCtrl.updateEntity(data);
                cb.call(target,data);
            });
        }


        ybInjectTipsed = false; //元宝提示过没
        getInjectCost(type){
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.fourRole);
            return type == gc.c_prop.extraInfuseTypeKey.diamond ? c_game[7] : c_game[3];
        }

        //额外注入
        extraInfuse(type,cb,target){
            var self = this;
            var argKeys = gc.iface.a_hero_extraInfuse_args;
            var args = {};
            args[argKeys.type] = type;
            mo.request4Server(gc.iface.a_hero_extraInfuse, args, function (data) {
                var isSucceed = data[gc.dsConsts.ExDemonLotusData.isSucceed];
                var userData = data[gc.dsConsts.ExDemonLotusData.userData];
                var expSum = data[gc.dsConsts.ExDemonLotusData.expSum];
                var genuineQiArr = data[gc.dsConsts.ExDemonLotusData.genuineQiArr];
                if(genuineQiArr.length > 0) {
                    gd.demonLotusCtrl._genuineQi = parseInt(genuineQiArr[0]);
                    gd.demonLotusCtrl._lastUpTime = Date.newDate().toString();
                }
                gd.userCtrl.updateEntity(userData);
                cb.call(target,[isSucceed,expSum]);
            });
        }

        /**
         * 获取主英雄外观
         * @param userId
         * @param cb
         * @param target
         * @returns [装备显示id,武器显示id,翅膀id,性别,是否霸主]
         */
        getMainHeroDisplay(userId,cb,target){
            var self = this;
            var argKeys = gc.iface.a_hero_getMainHeroDisplay_args;
            var args = {};
            args[argKeys.userId] = userId;
            mo.request4Server(gc.iface.a_hero_getMainHeroDisplay, args, function (data) {
                cb.call(target,data);
            });
        }

        /**
         * 获取某职业英雄外观
         * @param userId
         * @param tempId 0:主角，1：战士，2：法师，3：道士
         * @param cb
         * @param target
         * @returns [装备显示id,武器显示id,翅膀id,性别,是否霸主]
         */
        getHeroDisplayByTempId(userId,tempId,cb,target){
            var self = this;
            var argKeys = gc.iface.a_hero_getHeroDisplayByTempId_args;
            var args = {};
            args[argKeys.userId] = userId;
            args[argKeys.tempId] = tempId;
            mo.request4Server(gc.iface.a_hero_getHeroDisplayByTempId, args, function (data) {
                cb.call(target,data);
            });
        }

        //获取总战斗力
        getTotalCombat(){
            var self = this;
            var heroList =  self.getList();
            var combat = 0;
            for(var i = 0;i<heroList.length;i++){
                var locHeroCtrl = heroList[i];
                combat += locHeroCtrl.combat;
            }
            return combat;
        }

        //计算技能
        calSkill(){
            var self = this;
            var heroList =  self.getList();
            for(var i = 0;i<heroList.length;i++){
                var locHeroCtrl = heroList[i];
                locHeroCtrl.initSkill();
            }
        }

        //获取主英雄数据
        getMainHeroCtrl(){
            var self = this;
            var list = self.getList();
            return list[0];
        }

        getHeroByIndex(index){
            var self = this;
            var list = self.getList();
            return list[index];
        }

        getHeroIndex(hec){
            var self = this;
            var list = self.getList();
            for(var i=0;i<list.length; ++i){
                if(hec==list[i]){
                    return i;
                }
            }
            return -1;
        }

        /**
         * 获取英雄map
         * @returns
         */
        getHeroMap(){
            return this._heroMap;
        }

        //获取英雄ctrl
        getHeroEntityCtrl(id){
            var self = this;
            return self._heroMap[id];
        }
        
        //更新数据
        updateHeroEntityCtrl(id,data){
            var self = this;
            var heroEntityCtrl = self.getHeroEntityCtrl(id);
            if(!heroEntityCtrl){
                heroEntityCtrl =  new HeroEntityCtrl();
                heroEntityCtrl.init(data);
                self._heroMap[id] = heroEntityCtrl;
            }else{
                heroEntityCtrl.updateEntity(data);
            }
        }

        //获取用户最高元神等级
        getMaxStateLvl(){
            var self = this;
            var heroArr = self.getList();
            var returnLvl = 0;
            for(var i = 0; i < heroArr.length; i++){
                var heroData = heroArr[i];
                var realmLvl = heroData.get(gc.dsConsts.HeroEntity.realmLvl)||0;
                if(realmLvl > returnLvl) returnLvl = realmLvl;
            }
            return returnLvl;
        }

        //获取装备数据
        getEquipData(id){
            var self = this;
            var heroEntityCtrl = self.getHeroEntityCtrl(id);
            return heroEntityCtrl.get(gc.dsConsts.HeroEntity.equipData)||{};
        }

        /**
         * 召唤英雄
         * @param tempId
         * @param {gc.c_prop.sexKey} sex  性别
         * @param cb
         * @param target
         */
        callHero(tempId,sex,cb,target){
            var self = this;
            var argKeys = gc.iface.a_hero_callHero_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.sex] = sex;
            mo.requestWaiting4Server(gc.iface.a_hero_callHero, args, function (data) {
                var heroData = data;
                //var userData = data[gc.dsConsts.ExUserData.userData];
                self.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                //userCtrl.updateEntity(userData);
                self.calPropAndCombat();
                cb.call(target);
                self.pushNotify(self.__class.ON_CALL_HERO);
            });
        }

        //获取技能列表  [等级,等级,...]
        getHeroSkillArr(id){
            var self = this;
            var heroEntityCtrl = self.getHeroEntityCtrl(id);
            var lvl = gd.userCtrl.get(gc.dsConsts.UserEntity.lvl);
            var skillCd = gd.userCtrl.get(gc.dsConsts.UserEntity.skillCd)||0;
            var skillArr = heroEntityCtrl.get(gc.dsConsts.HeroEntity.skillLvlArr)||[];
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var needLvlArr = c_game[gc.id_c_game.skillRate][4].split(",");
            for(var i = 0; i < needLvlArr.length;i++){
                if(skillArr[i] == null || !skillArr[i]){
                    if(lvl > needLvlArr[i]) skillArr[i] = 1;
                }
            }
            self._skillCd = skillCd;
            return skillArr;
        }

        //获取技能cd时间  0:白色1：红色
        getSkillCd(){
            var self = this;
            var skillCd =  gd.userCtrl.get(gc.dsConsts.UserEntity.skillCd);
            var nowTime = Date.newDate();
            var newSkillCd = 0;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cdLimit = c_game[gc.id_c_game.skillRate][5];      //CD上限
            var lastSkillTime = gd.userCtrl.get(gc.dsConsts.UserEntity.lastSkillTime);     //最后点技能时间
            var skillTime = Date.newDate(lastSkillTime).addSeconds(skillCd);      //当前技能时间
            newSkillCd = (skillTime.getTime() - nowTime.getTime())/1000;
            newSkillCd = parseInt(newSkillCd.toString());
            if(newSkillCd <= 0)  return [0,0];
            if(skillCd > cdLimit) return [1,newSkillCd];
            return [0,newSkillCd];
        }

        /**
         * 技能升级
         * @param tempId 英雄模板id
         * @param index 英雄技能下标
         * @param cb
         * @param target
         */
        upSkill(id,index,cb,target){
            var self = this;
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var argKeys = gc.iface.a_hero_upSkill_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = index;
            var newSkillCd = 0;
            var nowTime = Date.newDate();
            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            //var cdLimit = c_game[gc.id_c_game.skillRate][5];      //CD上限
            var lvl = gd.userCtrl.get(gc.dsConsts.UserEntity.lvl);
            //var skillCd = gd.userCtrl.get(gc.dsConsts.UserEntity.skillCd);     //技能CD
            var skillLvl = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.skillLvlArr)[index]||1;        //当前技能等级
            if(skillLvl >= lvl) return mo.showMsg("技能等级不能超过角色等级");      //todo  临时
            //if(skillCd > cdLimit){
            //    var lastSkillTime = gd.userCtrl.get(gc.dsConsts.UserEntity.lastSkillTime);     //最后点技能时间
            //    var skillTime = Date.newDate(lastSkillTime).addSeconds(skillCd);      //当前技能时间
            //    newSkillCd = (skillTime.getTime() - nowTime.getTime())/1000;
            //    newSkillCd = parseInt(newSkillCd.toString());
            //    if(newSkillCd > 0)  return mo.showMsg("技能还在CD中");
            //    if(newSkillCd < 0) newSkillCd = newSkillCd*-1;
            //}
            var cLvlId = 1;
            if(skillLvl != 0) cLvlId = skillLvl;
            var needGold = c_lvl[cLvlId][gc.c_lvl_skillNeedGold];
            var gold = gd.userCtrl.get(gc.dsConsts.UserEntity.gold);
            if(gold < needGold) {
                userCtrl.noGolds(function(){},this);
                return;
            }

            mo.requestWaiting4Server(gc.iface.a_hero_upSkill, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData] || {};
                var heroData = data[gc.dsConsts.ExUserData.heroData] || {};
                gd.userCtrl.updateEntity(userData);
                self.updateHeroEntityCtrl(id, heroData);
                pointCtrl.cal(gc.c_prop.pointRedKey.role1_skill);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_skill);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_skill);
                self._skillCd = gd.userCtrl.get(gc.dsConsts.UserEntity.skillCd);
                cb.call(target, data);
            });
        }

        /**
         * 清除技能CD
         * @param cb
         * @param target
         */
        clearSkillCd(cb,target){
            var self = this;
            var newSkillCd = 0;     //当前cd时间
            var nowTime = Date.newDate();
            var skillCd = gd.userCtrl.get(gc.dsConsts.UserEntity.skillCd);
            var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
            var lastSkillTime = gd.userCtrl.get(gc.dsConsts.UserEntity.lastSkillTime);     //最后点技能时间
            var skillTime = Date.newDate(lastSkillTime).addSeconds(skillCd);      //当前技能时间
            newSkillCd = (skillTime.getTime() - nowTime.getTime())/1000;
            newSkillCd = parseInt(newSkillCd.toString());
            if(newSkillCd < 0) newSkillCd = 0;
            if(newSkillCd <= 0) return mo.showMsg("当前无CD");
            var needDiamond = gc.calSkillDiamond(newSkillCd);      //所需钻石
            mo.showMsg(gc.id_c_msgCode.cleanArenaTime, needDiamond,  function() {
                if(diamond < needDiamond) return  mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                mo.requestWaiting4Server(gc.iface.a_hero_clearSkillCd, {}, function (data) {
                    gd.userCtrl.updateEntity(data);
                    self._skillCd = 0;
                    cb.call(target, data);
                });
            });
        }

        //获取符文块数量
        getRealmCount(realmId){
            var self = this;
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            if(!bag[realmId] || bag[realmId] == 0) return 0;
            return bag[realmId];
        }

        //判断是否需要合成
        isRuneCom(runeId){
            var c_compound = mo.getJSONWithFileName(gc.cfg_c_compound);
            if (!c_compound[runeId]){       //不需要合成
                return false;
            }else{      //需要合成
                return true;
            }
        }

        //判断是否可合成       0：不可合成  1;可合成
        canRuneCom(runeId){
            var isRune = 1;
            var compoundNeedObj = {};
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var c_compound = mo.getJSONWithFileName(gc.cfg_c_compound);
            var reqItems1 = c_compound[runeId][gc.c_compound_reqItems1];
            if(reqItems1 != 0) compoundNeedObj[reqItems1] = c_compound[runeId][gc.c_compound_reqCount1];
            var reqItems2 = c_compound[runeId][gc.c_compound_reqItems2];
            if(reqItems2 != 0) compoundNeedObj[reqItems2] = c_compound[runeId][gc.c_compound_reqCount2];
            var reqItems3 = c_compound[runeId][gc.c_compound_reqItems3];
            if(reqItems3 != 0) compoundNeedObj[reqItems3] = c_compound[runeId][gc.c_compound_reqCount3];
            var reqItems4 = c_compound[runeId][gc.c_compound_reqItems4];
            if(reqItems4 != 0) compoundNeedObj[reqItems4] = c_compound[runeId][gc.c_compound_reqCount4];
            for(var key in compoundNeedObj){
                if(!bag[key] || bag[key] < compoundNeedObj[key]) isRune = 0;
            }
            if(isRune == 1) return 1;
            return 0;
        }

        /**
         * 装备符文块
         * @param id
         * @param index 英雄技能下标
         * @param cb
         * @param target
         */
        wearRune(id,index,cb,target){
            var self = this;
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var c_realm = mo.getJSONWithFileName(gc.cfg_c_realm);
            var lvl = gd.userCtrl.get(gc.dsConsts.UserEntity.lvl);
            var getRealmLvl = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.realmLvl);
            var realmLvl = getRealmLvl==0?0:getRealmLvl;
            var runeId = c_realm[realmLvl][gc.c_realm_reqItems][index];     //符文块id
            var needLvl = t_item[runeId][gc.t_item_level];     //装备需要等级
            if(lvl < needLvl) return mo.showMsg("等级不足");
            var argKeys = gc.iface.a_hero_wearRune_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = index;
            mo.requestWaiting4Server(gc.iface.a_hero_wearRune, args, function (data) {
                var userData = {};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateHeroEntityCtrl(id,heroData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_WEAR_RUNE);
            });
        }

        /**
         * 装备符文块
         * @param id
         * @param
         * @param cb
         * @param target
         */
        wearAllRune(id,cb,target){
            var self = this;
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var isReturn = self.getHeroEntityCtrl(id).getHeroRealmList()[2]||[];
            if(isReturn.length<1) return mo.showMsg("无可装备元神");
            var argKeys = gc.iface.a_hero_wearAllRune_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            mo.requestWaiting4Server(gc.iface.a_hero_wearAllRune, args, function (data) {
                var userData = {};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateHeroEntityCtrl(id,heroData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_WEAR_RUNE);
            });
        }

        //29,1;30,1000;45,100
        getPropsStr(propInfos):string{
            var str = "";
            for(var i=0; i<propInfos.length; ++i){
                if(propInfos[i].length==2){
                    var propIdx = propInfos[i][0];
                    var valueStr = propInfos[i][1];
                    if(g_base.PropBase.isPercentProp(propIdx)){
                        valueStr = Math.round(propInfos[i][1]/g_base.PropBase.Scale_Num*100)+"%";
                    }
                    if(propIdx == gc.c_prop.heroPropKey.reviveCount
                    ||propIdx == gc.c_prop.heroPropKey.reviveHPScale
                    ||propIdx == gc.c_prop.heroPropKey.disMaxHp2){
                        valueStr += "(只在PK中有效)";
                    }else if(propIdx == gc.c_prop.heroPropKey.maxHp2){
                        valueStr += "(只在PK中生效，可免疫麻痹)";
                    }
                    var s = mo.STR.format("%s %s\n",gc.c_prop.heroProp[propIdx],valueStr);
                    str += s;
                }
            }
            return str;
        }

        /**
         * 升级境界
         * @param id
         * @param cb
         * @param target
         */
        upRealm(id,cb,target){
            var self = this;
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            if(!self.canUpRealm(id)) return mo.showMsg(gc.id_c_msgCode.cantRebirth);
            var argKeys = gc.iface.a_hero_upRealm_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            mo.requestWaiting4Server(gc.iface.a_hero_upRealm, args, function (data) {
                self.updateHeroEntityCtrl(id,data);
                pointCtrl.cal(gc.c_prop.pointGreenKey.copy_realm);
                cb.call(target,data);
            });
        }

        canUpRealm(id){
            var self = this;
            var realmArr = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.realmArr)||[];       //符文块数组
            if(realmArr.length < 6) return mo.showMsg(gc.id_c_msgCode.cantRebirth);
            for(var i = 0; i < realmArr.length; i++){
                if(realmArr[i] ==null) return false;
            }
            return true;
        }

        //获取强化等级列表    [等级,等级,...] 下标对应装备位置
        getStrengthLvlList(id){
            var self = this;
            var intensifyArr = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.intensifyArr);
            return intensifyArr;
        }

        //获取某个装备强化数据        [属性id，当前加属性值，下级加属性值，当前拥有强化石，消耗强化石，消耗金币]
        getIndexStrengthArr(id,index){
            var self = this;
            var returnArr = [];
            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var strengthLvl = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.intensifyArr)[index]||0;      //当前强化等级
            var equipId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.equipData)[index]||0;      //当前位置装备id
            returnArr[0] = t_itemEquip[equipId][gc.t_itemEquip_slotStrengthProperty];
            returnArr[1] = t_itemEquip[equipId][gc.t_itemEquip_propValue]*strengthLvl;
            returnArr[2] = t_itemEquip[equipId][gc.t_itemEquip_propValue]*(strengthLvl+1);
            returnArr[3] = bag[gc.c_prop.spItemIdKey.intensify]||0;     //拥有强化石数量
            returnArr[4] = c_lvl[strengthLvl+1][gc.c_lvl_equipStrengthNum];      //消耗强化石数量
            returnArr[5] = c_lvl[strengthLvl+1][gc.c_lvl_equipStrengthGold];
            return returnArr;
        }

        //获取升星星级列表      [星级,星级,...] 下标对应装备位置
        getStarLvlList(id){
            var self = this;
            var starArr = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.starArr);
            return starArr;
        }

        //获取某个装备升星数据        [当前基础属性加成(万分率)，下级提升(万分率)，拥有升星石，消耗升星石，消耗金币]
        getIndexStarArr(id,index){
            var self = this;
            var returnArr = [];
            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var starLvl = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.starArr)[index]||0;      //当前升星等级
            returnArr[0] = c_lvl[starLvl][gc.c_lvl_upStarPropAdd];
            returnArr[1] = c_lvl[starLvl+1][gc.c_lvl_upStarPropAdd];
            returnArr[2] = bag[gc.c_prop.spItemIdKey.starStone]||0;
            returnArr[3] = c_lvl[starLvl+1][gc.c_lvl_upStarNum];
            returnArr[4] = c_lvl[starLvl+1][gc.c_lvl_upStarGold];
            return returnArr;
        }

        //获取宝石id列表      宝石[id,id,id,...]下标对应装备位置
        getGemIdList(id){
            var self = this;
            var gemArr = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.gemArr);
            return gemArr;
        }

        /**
         * 强化
         * @param id
         * @param index 英雄对应位置下标
         * @param cb
         * @param target
         */
        strength(id,index,cb,target){
            var self = this;
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var gold = gd.userCtrl.get(gc.dsConsts.UserEntity.gold);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var strengthLvl = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.intensifyArr)[index]||0;      //当前强化等级
            var strengthLimit = c_game[gc.id_c_game.initCfg][2];      //强化上限
            var costGold = c_lvl[strengthLvl+1][gc.c_lvl_equipStrengthGold];
            var strengthNum = bag[gc.c_prop.spItemIdKey.intensify]||0;     //拥有强化石数量
            var costStrengthNum = c_lvl[strengthLvl+1][gc.c_lvl_equipStrengthNum];
            if(strengthLvl >= strengthLimit) return mo.showMsg("已达到强化上限");
            if(gold<costGold){
                userCtrl.noGolds(function(){},this);
                return;
            }
            if(strengthNum < costStrengthNum) return mo.showMsg("强化石不足");
            var argKeys = gc.iface.a_hero_strength_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = index;
            mo.requestWaiting4Server(gc.iface.a_hero_strength, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                gd.userCtrl.updateEntity(userData);
                self.updateHeroEntityCtrl(id,heroData);
                cb.call(target,data);
            });
        }

        /**
         * 升星
         * @param id
         * @param index 英雄对应位置下标
         * @param cb
         * @param target
         */
        upStar(id,index,cb,target){
            var self = this;
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var gold = gd.userCtrl.get(gc.dsConsts.UserEntity.gold);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var starLvl = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.starArr)[index]||0;      //当前升星等级
            var starLimit = c_game[gc.id_c_game.initCfg][3];      //升星上限
            var costGold = c_lvl[starLvl+1][gc.c_lvl_upStarGold];
            var starNum = bag[gc.c_prop.spItemIdKey.starStone]||0;     //拥有升星石数量
            var costStarNum = c_lvl[starLvl+1][gc.c_lvl_upStarNum];
            if(starLvl >= starLimit) return mo.showMsg("已达到升星上限");
            if(gold<costGold){
                userCtrl.noGolds(function(){},this);
                return;
            }
            if(starNum < costStarNum) return mo.showMsg("升星石不足");
            var argKeys = gc.iface.a_hero_upStar_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = index;
            mo.requestWaiting4Server(gc.iface.a_hero_upStar, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                gd.userCtrl.updateEntity(userData);
                self.updateHeroEntityCtrl(id,heroData);
                cb.call(target,data);
            });
        }

        /**
         * 宝石升级
         * @param id
         * @param index 英雄对应位置下标
         * @param cb
         * @param target
         */
        upGem(id,index,cb,target){
            var self = this;
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var gemInitialIndex = index;
            if(index > 7) gemInitialIndex = index -4;
            var c_gem = mo.getJSONWithFileName(gc.cfg_c_gem);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var gemId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.gemArr)[index]||c_game[gc.id_c_game.gemInitial][gemInitialIndex];
            var gemIdLimit = c_game[gc.id_c_game.gemLimit][gemInitialIndex];      //宝石id上限
            var itemID = c_gem[gemId][gc.c_gem_itemID];       //需要宝石碎片id
            var count = c_gem[gemId][gc.c_gem_count];       //需要宝石碎片数量
            var gemCount = bag[itemID]||0;      //拥有宝石碎片数量
            if(gemId >= gemIdLimit) return mo.showMsg("已升到最高等级");
            if(gemCount<count) return mo.showMsg("宝石碎片数量不足");
            var argKeys = gc.iface.a_hero_upGem_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = index;
            mo.requestWaiting4Server(gc.iface.a_hero_upGem, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                gd.userCtrl.updateEntity(userData);
                self.updateHeroEntityCtrl(id,heroData);
                cb.call(target,data);
            });
        }

        /*获取翅膀数据
           [id，名称，等级，当前属性{}，下一星级属性{}，当前星数，当前经验，普通培养所需，高级培养所需，拥有羽毛数量]
                  翅膀[id,等级,星级,当前星经验]*/
        getWingArr(id){
            var self = this;
            var returnArr = [];
            var nowObj = {};
            var nextObj = {};
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var t_wing = mo.getJSONWithFileName(gc.cfg_t_wing);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            //var wingArr = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.wingArr);
            var wingArr = self.getMainHeroCtrl().wingData;
            var wingId = wingArr[0]||1;
            var wingLvl = wingArr[1]||1;
            nowObj[gc.c_prop.heroPropKey.attackTemp] = t_wing[wingId][gc.t_wing_attack];
            nowObj[gc.c_prop.heroPropKey.maxHpTemp] = t_wing[wingId][gc.t_wing_maxHp];
            nowObj[gc.c_prop.heroPropKey.defenceTemp] = t_wing[wingId][gc.t_wing_defence];
            nowObj[gc.c_prop.heroPropKey.magicDefenceTemp] = t_wing[wingId][gc.t_wing_magicDefence];
            if(t_wing[wingId+1]){
                nextObj[gc.c_prop.heroPropKey.attackTemp] = t_wing[wingId+1][gc.t_wing_attack];
                nextObj[gc.c_prop.heroPropKey.maxHpTemp] = t_wing[wingId+1][gc.t_wing_maxHp];
                nextObj[gc.c_prop.heroPropKey.defenceTemp] = t_wing[wingId+1][gc.t_wing_defence];
                nextObj[gc.c_prop.heroPropKey.magicDefenceTemp] = t_wing[wingId+1][gc.t_wing_magicDefence];
            }
            returnArr[0] = wingId;
            returnArr[1] = t_wing[wingId][gc.t_wing_name];
            returnArr[2] = wingLvl;
            returnArr[3] = nowObj;
            returnArr[4] = nextObj;
            returnArr[5] = wingArr[2]||0;
            returnArr[6] = wingArr[3]||0;
            returnArr[7] = c_game[gc.id_c_game.wingCrit][4];
            returnArr[8] = c_game[gc.id_c_game.wingCrit][3];
            returnArr[9] = bag[gc.c_prop.spItemIdKey.plumage]||0;
            return returnArr;
        }

        //翅膀普通培养
        wingComFos(id,cb,target){
            var self = this;
            self.wingFos(id,gc.c_prop.wingFosTypeKey.comFoster,cb,target);
        }

        //翅膀高级培养
        wingAdvFos(id,cb,target){
            var self = this;
            self.wingFos(id,gc.c_prop.wingFosTypeKey.advFoster,cb,target);
        }

        /**
         * 翅膀培养
         * @param id
         * @param fosType 培养类型
         * @param cb
         * @param target
         */
        wingFos(id,fosType,cb,target){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var idLimit = c_game[gc.id_c_game.initCfg][4];
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var wingId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.wingArr)[0]||1;
            if(wingId >= idLimit) return mo.showMsg("翅膀等级已到上限");
            switch (fosType){
                case gc.c_prop.wingFosTypeKey.comFoster:       //普通培养
                    var gold = gd.userCtrl.get(gc.dsConsts.UserEntity.gold);
                    if(gold < c_game[gc.id_c_game.wingCrit][4]){
                        userCtrl.noGolds(function(){},this);
                        return;
                    }
                    break;
                case gc.c_prop.wingFosTypeKey.advFoster:       //高级培养
                    var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
                    if(!bag[gc.c_prop.spItemIdKey.plumage] || bag[gc.c_prop.spItemIdKey.plumage] <= 0){
                        if(diamond < c_game[gc.id_c_game.wingCrit][3]) mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                    }
                    break;
            }
            var argKeys = gc.iface.a_hero_wingFos_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.fosType] = fosType;
            mo.requestWaiting4Server(gc.iface.a_hero_wingFos, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                gd.userCtrl.updateEntity(userData);
                self.updateHeroEntityCtrl(id,heroData);
                cb.call(target,data);
            });
        }

        /**
         * 翅膀一键培养
         * @param id
         * @param fosType 培养类型
         * @param cb
         * @param target
         */
        wingFos2Top(id,fosType,isUseDiamond,cb,target){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var idLimit = c_game[gc.id_c_game.initCfg][4];
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var wingId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.wingArr)[0]||1;
            if(wingId >= idLimit) return mo.showMsg("翅膀等级已到上限");
            switch (fosType){
                case gc.c_prop.wingFosTypeKey.comFoster:       //普通培养
                    var gold = gd.userCtrl.get(gc.dsConsts.UserEntity.gold);
                    if(gold < c_game[gc.id_c_game.wingCrit][4]){
                        userCtrl.noGolds(function(){},this);
                        return;
                    }
                    break;
                case gc.c_prop.wingFosTypeKey.advFoster:       //高级培养
                    var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
                    if(!bag[gc.c_prop.spItemIdKey.plumage] || bag[gc.c_prop.spItemIdKey.plumage] <= 0){
                        if( isUseDiamond == false){
                            mo.showMsg(gc.id_c_msgCode.notEnoughFeather);//羽毛不足
                            return;
                        }
                        else  if(diamond < c_game[gc.id_c_game.wingCrit][3]){
                            mo.showMsg(gc.id_c_msgCode.noDiamond);
                            return;
                        }//钻石不足
                    }
                    break;
            }
            var argKeys = gc.iface.a_hero_wingFos2Top_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.fosType] = fosType;
            args[argKeys.isUseDiamond] = isUseDiamond;
            mo.requestWaiting4Server(gc.iface.a_hero_wingFos2Top, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var wingExp = data[gc.dsConsts.ExUserData.wingExp];
                var isWingCrit = data[gc.dsConsts.ExUserData.isWingCrit];
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                //self.updateEntity(heroData);
                self.updateHeroEntityCtrl(id,heroData);
                if(wingExp) g_msg.UIMsgTextCtrl.push("+"+wingExp);
                cb.call(target,data);
            });
        }



        /**
         * 翅膀升级
         * @param id
         * @param cb
         * @param target
         */
        upWing(id,cb,target){
            var self = this;
            var tempId = self.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var argKeys = gc.iface.a_hero_upWing_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            mo.requestWaiting4Server(gc.iface.a_hero_upWing, args, function (data) {
                self.updateHeroEntityCtrl(id,data);
                cb.call(target,data);
            });
        }

        //获得所有英雄的战力和
        getAllHeroAttack(){
            var self = this
            var list = self.getList();
            var attk = 0;
            for(var  i = 0, li = list.length; i < li; i++){
                var hdc:gd.HeroEntityCtrl = list[i];
                attk += hdc.attackFight;
            }
            return attk;
        }

        getHeroSoulList(){

        }

        isMy4thRole(index){
            return index == 3;
        }
        
        isMy4thRoleByHec(hec){
            return this.getHeroIndex(hec) == 3;
        }

        setIsUseStoneOpt(isUse:boolean){
            var self = this;
            self.isUseStoneOpt = isUse;
        }

        getIsUseStoneOpt():boolean{
            var self = this;
            return self.isUseStoneOpt;
        }

        setWingUpgradeTypeStr (typeStr:string){
            var self = this;
            self.wingUpgradeTypeStr = typeStr;
        }

        getWingUpgradeTypeStr (){
            var self = this;
            return self.wingUpgradeTypeStr;
        }

        //获取出战列表
        getFightList(){
            var self = this;
            var reList = [];
            for(var key in self._heroMap){
                var locHeroCtrl = self._heroMap[key];
                reList.push(locHeroCtrl);
            }
            reList.sort(self._sortHeroList);
            return reList;
        }

        //保存出战列表
        saveFightList(heroEntityCtrList,cb,target){
            var self = this;
            var fightArr = [];
            var arr = heroEntityCtrList;//.sort(self._sortHeroList);
            for(var i = 0;i<arr.length;i++){
                fightArr[i] = arr[i].get(gc.dsConsts.HeroEntity.id)
            }
            var argKeys = gc.iface.a_hero_saveFightList_args;
            var args = {};
            args[argKeys.fightArr] = fightArr;
            mo.requestWaiting4Server(gc.iface.a_hero_saveFightList, args, function (heroList) {
                for(var i = 0;i<heroList.length;i++){
                    var heroData = heroList[i];
                    if(heroData) self.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                }
                cb.call(target,heroList);
                mo.emitter.emit(self.__class.ON_FIGHT_HERO_CHANGE);
            });
        }

        _sortHeroList(aHec, bHec){
            if(aHec[gc.dsConsts.HeroEntity.fightSort]){
                return parseInt(aHec[gc.dsConsts.HeroEntity.fightSort]) > parseInt(bHec[gc.dsConsts.HeroEntity.fightSort])? 1 : -1;
            }else{
                return parseInt(aHec.get(gc.dsConsts.HeroEntity.fightSort)) > parseInt(bHec.get(gc.dsConsts.HeroEntity.fightSort))? 1 : -1;
            }
        }
    }
    export var heroCtrl:HeroCtrl;
}