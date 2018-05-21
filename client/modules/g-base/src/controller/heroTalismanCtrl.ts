/**
 * Created by Sara on 2016/5/13.
 */
module gd {
    export class HeroTalismanCtrl extends mo.DataController {
        static ON_GIFT_CHANGED:string = "ON_GIFT_CHANGED";
        static ON_GIFT_EQUIP_CHANGED:string = "ON_GIFT_EQUIP_CHANGED";
        _initProp() {
            super._initProp();
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

        getGiftById(giftId){
            var self = this;
            var t_talisman = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman,giftId);
            if(!t_talisman) return null;
            var job = t_talisman[gc.t_talisman_job];
            var heroEntityCtrl = gd.heroCtrl.hasHeroJobData(job);
            if(!heroEntityCtrl) return null;
            var talismanData = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanData)||{};
            if(talismanData[giftId]) return talismanData[giftId];
            return null;
        }

        //获取佩戴法宝id
        getTalismanAdorn(id){
            var self = this;
            var heroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(id);
            if(!heroEntityCtrl) return 0;
            var talismanAdorn = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanAdorn)||0;
            return talismanAdorn;
        }

        //该英雄拥有法宝  法宝数据{法宝id:[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质],法宝id:[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质],....}
        getHaveTrump(id){
            var self = this;
            var heroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(id);
            if(!heroEntityCtrl) return {};
            var talismanData = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanData)||{};
            return talismanData;
        }

        //是否拥有该法宝道具
        isHaveTrupId(trupId){
            var self = this;
            var isHavr = false;
            var bag = gd.userCtrl.getBag()||{};
            if(bag[trupId] && bag[trupId] >= 1) isHavr = true;
            return isHavr;
        }

        //获取英雄共鸣数据          法宝共鸣{共鸣id:[0,1],共鸣id:[1,0],...}
        getTalismanFg(id){
            var self = this;
            var heroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(id);
            if(!heroEntityCtrl) return {};
            var talismanFg = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanFg)||{};
            return talismanFg;
        }

        //计算该英雄所有法宝战力       [总战力，总属性，法宝数，技能数，共鸣数]
        calTaliCombat(id){
            var self = this;
            var heroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(id);
            if(!heroEntityCtrl) return [0,{},0,0,0];
            var talismanData = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanData)||{};
            var talismanFg = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanFg)||{};
            if(Object.keys(talismanData).length <= 0) return [0,{},0,0,0];
            var combatSum = 0;
            var proObj = {33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0}; //总属性
            var skillObj = {};

            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var t_talismanRes = mo.getJSONWithFileName(gc.cfg_t_talismanRes);
            var t_talismanSkill = mo.getJSONWithFileName(gc.cfg_t_talismanSkill);
            var combatMult = c_game[gc.id_c_game.combatMult];
            //参数1：血量参数
            //参数2：攻击参数
            //参数3：物防参数
            //参数4：魔防参数
            //参数5：暴击参数
            //参数6：抗暴参数
            //参数7：闪避参数
            //参数8：命中参数
            //参数9：攻击频率
            var maxHp1 = combatMult[0]/10000;
            var attack1 = combatMult[1]/10000;
            var defence1 = combatMult[2]/10000;
            var magicDefence1 = combatMult[3]/10000;
            var hit1 = combatMult[4]/10000;
            var dodge1 = combatMult[5]/10000;
            var critical1 = combatMult[6]/10000;
            var disCritical1 = combatMult[7]/10000;
            var attackInterval1 = combatMult[8];

            var talCount = 0;
            var skillCount = 0;
            for(var key in talismanData){
                talCount += 1;
                var propMult = 0;
                var talisman = talismanData[key];       //法宝id:[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                var skillData = talisman[4];       //法宝id:[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                var t_talismanLvlId = parseInt(key) + parseInt(talisman[0]);
                propMult = parseInt(talisman[1])/1000;      //资质影响

                proObj[33] += self._getPropByIndex(33,t_talismanLvlId)*(1+propMult);
                proObj[34] += self._getPropByIndex(34,t_talismanLvlId)*(1+propMult);
                proObj[35] += self._getPropByIndex(35,t_talismanLvlId)*(1+propMult);
                proObj[36] += self._getPropByIndex(36,t_talismanLvlId)*(1+propMult);
                proObj[37] += self._getPropByIndex(37,t_talismanLvlId)*(1+propMult);
                proObj[38] += self._getPropByIndex(38,t_talismanLvlId)*(1+propMult);
                proObj[39] += self._getPropByIndex(39,t_talismanLvlId)*(1+propMult);
                proObj[40] += self._getPropByIndex(40,t_talismanLvlId)*(1+propMult);

                //技能
                for(var key1 in skillData){
                    skillCount += 1;
                    var skillType = t_talismanSkill[skillData[key1]][gc.t_talismanSkill_type];
                    if(skillType != 1) continue;
                    var effect = t_talismanSkill[skillData[key1]][gc.t_talismanSkill_effect];
                    for(var i = 0; i < effect.length; i++){
                        var value = 0;
                        if(skillObj[effect[i][0]]) value = parseInt(skillObj[effect[i][0]]);
                        skillObj[effect[i][0]] = value + parseInt(effect[i][1]);
                    }
                }
            }
            //共鸣
            var resCount = 0;
            for(var key in talismanFg){
                var talismanRes = t_talismanRes[key];
                if(!talismanRes) continue;
                if(talismanRes[gc.t_talismanRes_type]==1){
                var resArr = talismanFg[key]||[];
                var resonance = talismanRes[gc.t_talismanRes_resonance];
                var isRes = true;
                var resLength = resonance.length;
                //预防
                if(resLength <= 0) continue;
                for(var i = 0; i < resLength; i++){
                    if(!resArr[i]) isRes = false;
                }
                if(isRes){
                    resCount+=1;
                    var extraPro = talismanRes[gc.t_talismanRes_extraPro];
                    for(var j = 0; j < extraPro.length; j++){
                        var value = 0;
                        if(proObj[extraPro[j][0]]) value = parseInt(proObj[extraPro[j][0]]);
                        proObj[extraPro[j][0]] = value + parseInt(extraPro[j][1]);
                    }
                }
                }
            }

            var maxHp = proObj[33] + (skillObj[33]||0);
            var attack = proObj[34] + (skillObj[34]||0);
            var defence = proObj[35] + (skillObj[35]||0);
            var magicDefence = proObj[36] + (skillObj[36]||0);
            var critical = proObj[39] + (skillObj[39]||0);
            var disCritical = proObj[40] + (skillObj[40]||0);
            var dodge = proObj[38] + (skillObj[38]||0);
            var hit = proObj[37] + (skillObj[37]||0);
            var attackInterval = 500;

            maxHp = Math.floor(maxHp);
            attack = Math.floor(attack);
            defence = Math.floor(defence);
            magicDefence = Math.floor(magicDefence);
            critical = Math.floor(critical);
            disCritical = Math.floor(disCritical);
            dodge = Math.floor(dodge);
            hit = Math.floor(hit);

            //基础属性战斗力公式
            //console.log(maxHp,maxHp1,attack,attack1,defence,defence1,magicDefence,magicDefence1,critical,critical1,disCritical,disCritical1,dodge,dodge1,hit,hit1,attackInterval,attackInterval1);
            var combat1 = gc.calBaseCombat(maxHp,maxHp1,attack,attack1,defence,defence1,magicDefence,magicDefence1,critical,critical1,disCritical,disCritical1,dodge,dodge1,hit,hit1,attackInterval,attackInterval1);
            combatSum = parseInt(combat1.toString());

            for(var key in proObj){
                proObj[key] = Math.floor(proObj[key]);
            }

            return [combatSum,proObj,talCount,skillCount,resCount];
        }

        /**
         * 计算该英雄所有法宝战力
         * @param heroId
         * @param talismanId
         * @returns {number} 总战力
         */
        calTaliCombatById(heroId,talismanId){
            var self = this;
            var heroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(heroId);
            if(!heroEntityCtrl) return 0;

            var talismanData = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanData)||{};

            var combatSum = 0;
            var proObj = {33:0,34:0,35:0,36:0,37:0,38:0,39:0,40:0}; //总属性
            var skillObj = {};

            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var t_talismanRes = mo.getJSONWithFileName(gc.cfg_t_talismanRes);
            var t_talismanSkill = mo.getJSONWithFileName(gc.cfg_t_talismanSkill);
            var combatMult = c_game[gc.id_c_game.combatMult];
            //参数1：血量参数
            //参数2：攻击参数
            //参数3：物防参数
            //参数4：魔防参数
            //参数5：暴击参数
            //参数6：抗暴参数
            //参数7：闪避参数
            //参数8：命中参数
            //参数9：攻击频率
            var maxHp1 = combatMult[0]/10000;
            var attack1 = combatMult[1]/10000;
            var defence1 = combatMult[2]/10000;
            var magicDefence1 = combatMult[3]/10000;
            var hit1 = combatMult[4]/10000;
            var dodge1 = combatMult[5]/10000;
            var critical1 = combatMult[6]/10000;
            var disCritical1 = combatMult[7]/10000;
            var attackInterval1 = combatMult[8];


            var talisman = talismanData[talismanId]||[1,0,0,0];       //法宝id:[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            var skillData = talisman[4]||{};       //法宝id:[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            var t_talismanLvlId = parseInt(talismanId) + parseInt(talisman[0]);
            var propMult = parseInt(talisman[1])/1000;      //资质影响

            proObj[33] += self._getPropByIndex(33,t_talismanLvlId)*(1+propMult);
            proObj[34] += self._getPropByIndex(34,t_talismanLvlId)*(1+propMult);
            proObj[35] += self._getPropByIndex(35,t_talismanLvlId)*(1+propMult);
            proObj[36] += self._getPropByIndex(36,t_talismanLvlId)*(1+propMult);
            proObj[37] += self._getPropByIndex(37,t_talismanLvlId)*(1+propMult);
            proObj[38] += self._getPropByIndex(38,t_talismanLvlId)*(1+propMult);
            proObj[39] += self._getPropByIndex(39,t_talismanLvlId)*(1+propMult);
            proObj[40] += self._getPropByIndex(40,t_talismanLvlId)*(1+propMult);

            //技能
            for(var key1 in skillData){
                var skillType = t_talismanSkill[skillData[key1]][gc.t_talismanSkill_type];
                if(skillType != 1) continue;
                var effect = t_talismanSkill[skillData[key1]][gc.t_talismanSkill_effect];
                for(var i = 0; i < effect.length; i++){
                    var value = 0;
                    if(skillObj[effect[i][0]]) value = parseInt(skillObj[effect[i][0]]);
                    skillObj[effect[i][0]] = value + parseInt(effect[i][1]);
                }
            }

            var maxHp = proObj[33] + (skillObj[33]||0);
            var attack = proObj[34] + (skillObj[34]||0);
            var defence = proObj[35] + (skillObj[35]||0);
            var magicDefence = proObj[36] + (skillObj[36]||0);
            var critical = proObj[39] + (skillObj[39]||0);
            var disCritical = proObj[40] + (skillObj[40]||0);
            var dodge = proObj[38] + (skillObj[38]||0);
            var hit = proObj[37] + (skillObj[37]||0);
            var attackInterval = 500;

            maxHp = Math.floor(maxHp);
            attack = Math.floor(attack);
            defence = Math.floor(defence);
            magicDefence = Math.floor(magicDefence);
            critical = Math.floor(critical);
            disCritical = Math.floor(disCritical);
            dodge = Math.floor(dodge);
            hit = Math.floor(hit);

            //基础属性战斗力公式
            //console.log(maxHp,maxHp1,attack,attack1,defence,defence1,magicDefence,magicDefence1,critical,critical1,disCritical,disCritical1,dodge,dodge1,hit,hit1,attackInterval,attackInterval1);
            var combat1 = gc.calBaseCombat(maxHp,maxHp1,attack,attack1,defence,defence1,magicDefence,magicDefence1,critical,critical1,disCritical,disCritical1,dodge,dodge1,hit,hit1,attackInterval,attackInterval1);
            combatSum = parseInt(combat1.toString());

            return combatSum;
        }

        useTrumpItem(itemId,cb,target){
            var argKeys = gc.iface.a_talisman_useTrumpItem_args;
            var args = {};
            args[argKeys.itemId] = itemId;
            mo.requestWaiting4Server(gc.iface.a_talisman_useTrumpItem,args,function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroDataList = data[gc.dsConsts.ExUserData.heroData]||[];
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);

                for(var i = 0; i<heroDataList.length;i++){
                    var heroData = heroDataList[i][1];
                    if(heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                }
                gd.equipCtrl.pushNotify(gd.equipCtrl.__class.ON_SMELT);
                cb.call(target,delBagItems);
            })
        }

        /**
         * 佩戴法宝
         * @param tempId
         * @param trumpId
         * @param cb
         * @param target
         */
        wearTrump(tempId,trumpId,cb,target){
            var self = this;
            var argKeys = gc.iface.a_talisman_wearTrump_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.trumpId] = trumpId;
            mo.requestWaiting4Server(gc.iface.a_talisman_wearTrump, args, function (data) {
                var userData = {};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var talismanData = heroData[gc.dsConsts.HeroEntity.talismanData]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                if(heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                self.pushNotify(self.__class.ON_GIFT_EQUIP_CHANGED);
                var hec = gd.heroCtrl.getHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id]);
                hec.pushNotify(self.__class.ON_GIFT_EQUIP_CHANGED);
                cb.call(target,talismanData);
            });
        }

        isCanUpLvl(index,trumpId){
            var heroEntityCtrl = heroCtrl.getHeroByIndex(index);
            if(!heroEntityCtrl) return false;
            var t_talismanLvl = mo.getJSONWithFileName(gc.cfg_t_talismanLvl);

            var talismanData = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanData) || {};
            var trumpData = talismanData[trumpId];
            if(!trumpData) return false;

            var upLvlData = t_talismanLvl[trumpId + trumpData[0]];
            var nextUpLvlData = t_talismanLvl[trumpId + trumpData[0] + 1];
            if(!nextUpLvlData) return false;
            if(nextUpLvlData[gc.t_talismanLvl_userLv] > userCtrl.getLvl())  return false;

            var bag = userCtrl.getBag();
            var delBagItems = {};
            var needItems = upLvlData[gc.t_talismanLvl_needItems];
            for(var val in upLvlData[gc.t_talismanLvl_needItems]){
                var needItemsId = needItems[val][0];
                var needItemsNum = needItems[val][1];
                var ownItemsNum = bag[needItemsId] || 0;
                if(ownItemsNum < needItemsNum) return false;
            }
            return true;
        }

        upTrumpLvl(tempId,trumpId,cb,target){
            var self = this;
            var argKeys = gc.iface.a_talisman_upTrumpLvl_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.trumpId] = trumpId;
            mo.requestWaiting4Server(gc.iface.a_talisman_upTrumpLvl, args, function (data) {
                var userData = {};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};       //userData[gc.dsConsts.UserEntity.lastUpdateTime];
                var talismanData = heroData[gc.dsConsts.HeroEntity.talismanData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                if(heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                self.pushNotify(self.__class.ON_GIFT_CHANGED, trumpId, talismanData[trumpId]);
                cb.call(target,talismanData[trumpId]);
            });
        }

        isCanUpStar(index,trumpId){
            var heroEntityCtrl = heroCtrl.getHeroEntityCtrl(index);
            if(!heroEntityCtrl) return false;
            var t_talismanStar = mo.getJSONWithFileName(gc.cfg_t_talismanStar);

            var talismanData = heroEntityCtrl.get(gc.dsConsts.HeroEntity.talismanData) || {};
            var trumpData = talismanData[trumpId];
            if(!trumpData) return false;

            var lvl = trumpData[0]||1;      //当前等级
            var starLvl = trumpData[2]||0;      //当前升星等级
            var lvlLimit = t_talismanStar[parseInt(trumpId)+parseInt(lvl)][gc.t_talismanLvl_starLimit];      //等级上限
            if(starLvl >= lvlLimit) return false;
            var trumpCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            var starLimit = trumpCfg[2];      //升星上限
            if(starLvl >= starLimit) return false;

            var bag = userCtrl.getBag();
            var t_talismanStarId = parseInt(trumpId) + parseInt(starLvl);
            var needItems = t_talismanStar[t_talismanStarId][gc.t_talismanLvl_needItems];
            for(var val in needItems){
                var needItemsId = needItems[val][0];
                var needItemsNum = needItems[val][1];
                var ownItemsNum = bag[needItemsId] || 0;
                if(ownItemsNum < needItemsNum) return false;
            }
            return true;
        }

        /**
         * 法宝升星
         * @param tempId
         * @param trumpId
         * @param cb
         * @param target
         */
        upTrumpStar(tempId,trumpId,cb,target){
            var self = this;

            var argKeys = gc.iface.a_talisman_upTrumpStar_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.trumpId] = trumpId;
            mo.requestWaiting4Server(gc.iface.a_talisman_upTrumpStar, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var talismanData = heroData[gc.dsConsts.HeroEntity.talismanData]||{};
                var isGetSkill = data[gc.dsConsts.ExUserData.isGetSkill];
                var isHighStar = data[gc.dsConsts.ExUserData.isFull];
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                if(heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                var hec = gd.heroCtrl.getHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id]);
                if(isGetSkill){
                    hec.pushNotify(gd.HeroEntityCtrl.ON_GIFT_SKILL_CHANGED);
                }
                self.pushNotify(self.__class.ON_GIFT_CHANGED, trumpId, talismanData[trumpId]);
                cb.call(target,[talismanData[trumpId],isGetSkill,isHighStar]);
            });
        }

        /**
         * 法宝重铸
         * @param tempId
         * @param trumpId
         * @param cb
         * @param target
         */
        recastTrump(tempId,trumpId,cb,target){
            var self = this;

            var argKeys = gc.iface.a_talisman_recastTrump_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.trumpId] = trumpId;
            mo.requestWaiting4Server(gc.iface.a_talisman_recastTrump, args, function (data) {
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var isGetSkill = data[gc.dsConsts.ExUserData.isGetSkill];
                var hec = gd.heroCtrl.getHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id]);
                if(isGetSkill){
                    var userData = data[gc.dsConsts.ExUserData.userData]||{};
                    gd.userCtrl.updateEntity(userData);
                    hec.pushNotify(gd.HeroEntityCtrl.ON_GIFT_SKILL_CHANGED);
                }
                if(heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);

                var talismanData = heroData[gc.dsConsts.HeroEntity.talismanData]||{};
                self.pushNotify(self.__class.ON_GIFT_CHANGED, trumpId, talismanData[trumpId]);
                cb.call(target,talismanData[trumpId]);
            });
        }

        /**
         * 法宝合成
         * @param tempId
         * @param trumpId
         * @param compoundId
         * @param cb
         * @param target
         */
        compoundTrump(tempId,trumpId,cb,target){
            var self = this;

            var argKeys = gc.iface.a_talisman_compoundTrump_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.trumpId] = trumpId;
            mo.requestWaiting4Server(gc.iface.a_talisman_compoundTrump, args, function (data) {
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                if(Object.keys(bagItems).length>0){
                    var userData = {};
                    var bag = gd.userUtils.getNewBag({},bagItems);
                    userData[gc.dsConsts.UserEntity.bag] = bag;
                    gd.userCtrl.updateEntity(userData);
                }
                if(heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                var hec = gd.heroCtrl.getHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id]);
                hec.pushNotify(self.__class.ON_GIFT_EQUIP_CHANGED);
                cb.call(target,bagItems);
            });
        }

        /**
         * 法宝洗炼
         * @param tempId
         * @param trumpId
         * @param isCheck
         * @param cb
         * @param target
         */
        baptizeTrump(tempId,trumpId,isCheck,cb,target) {
            var self = this;

            var argKeys = gc.iface.a_talisman_baptizeTrump_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.trumpId] = trumpId;
            args[argKeys.isCheck] = isCheck;
            mo.requestWaiting4Server(gc.iface.a_talisman_baptizeTrump, args, function (data) {
                var heroData = data[gc.dsConsts.ExUserData.heroData] || {};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems] || {};
                var value = data[gc.dsConsts.ExUserData.baptizeValue] || {};
                var talismanData = heroData[gc.dsConsts.HeroEntity.talismanData]||{};
                var bag = gd.userUtils.getNewBag(delBagItems, {});
                var userData = {};

                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);

                if (heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id], heroData);
                self.pushNotify(self.__class.ON_GIFT_CHANGED, trumpId, talismanData[trumpId]);
                cb.call(target, talismanData[trumpId],value);
            });
        }
        /**
         * 确认法宝洗炼
         * @param tempId
         * @param trumpId
         * @param compoundId
         * @param cb
         * @param target
         */
        confirmBaptizeTrump(tempId,trumpId,cb,target) {
            var self = this;
            var argKeys = gc.iface.a_talisman_confirmBaptizeTrump_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.trumpId] = trumpId;
            mo.requestWaiting4Server(gc.iface.a_talisman_confirmBaptizeTrump, args, function (data) {
                var heroData = data[gc.dsConsts.ExUserData.heroData] || {};
                var talismanData = heroData[gc.dsConsts.HeroEntity.talismanData]||{};
                if (heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id], heroData);
                self.pushNotify(self.__class.ON_GIFT_CHANGED, trumpId, talismanData[trumpId]);
                cb.call(target,talismanData[trumpId]);
            });
        }
        /**
         * 取消法宝洗炼
         * @param tempId
         * @param trumpId
         * @param compoundId
         * @param cb
         * @param target
         */
        cancelBaptizeTrump(tempId,trumpId,cb,target) {
            var self = this;
            var argKeys = gc.iface.a_talisman_cancelBaptizeTrump_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.trumpId] = trumpId;
            mo.requestWaiting4Server(gc.iface.a_talisman_cancelBaptizeTrump, args, function (data) {
                var heroData = data[gc.dsConsts.ExUserData.heroData] || {};
                var talismanData = heroData[gc.dsConsts.HeroEntity.talismanData]||{};
                if (heroData) gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id], heroData);
                self.pushNotify(self.__class.ON_GIFT_CHANGED, trumpId, talismanData[trumpId]);
                cb.call(target,talismanData[trumpId]);
            });
        }


        /*****************************************************************************************************/

        _getPropByIndex(index,t_talismanLvlId){
            var self = this;
            var t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl,t_talismanLvlId);
            if(!t_talismanLvl) return 0;
            var props = t_talismanLvl[gc.t_talismanLvl_propertys];
            var reValue = 0;
            for(var i = 0;i<props.length;i++){
                var locProp = props[i];
                var locIndex = locProp[0];
                var locValue = locProp[1];
                if(locIndex==index){
                    reValue = locValue;
                    break;
                }
            }
            return reValue;
        }

        getPropObjBy(tid, ziZhi, lv){
            var self = this;
            var propObj = {};
            var t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, tid+lv);
            if(!t_talismanLvl) return 0;
            var props = t_talismanLvl[gc.t_talismanLvl_propertys];
            for(var i = 0;i<props.length;i++){
                var locProp = props[i];
                var locIndex = locProp[0];
                var locValue = locProp[1];
                propObj[locIndex] = locValue*(1+ziZhi/1000)>>0;
            }
            return propObj;
        }

        getMaxZiZhi(giftId, star){
            var giftInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, giftId);
            var starInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, giftId+star);

            return giftInfo[gc.t_talisman_atEnd]+starInfo[gc.t_talismanStar_aptitude];
        }

        getSkillList(giftId, jiHuoObj?):any[]{
            var skills = [];
            var starInfos = mo.getJSONWithFileName(gc.cfg_t_talismanStar);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            for(var i=0; i<=gameInfo[2]; ++i){
                var starInfo = starInfos[giftId+i];
                if(!starInfo) break;
                var skillId = starInfo[gc.t_talismanStar_skillId];
                if(!skillId) continue;
                var skillObj = {skillId:skillId, jiHuo:false, star:i};
                if(jiHuoObj){
                    if(jiHuoObj[i+1]) skillObj.jiHuo = true;
                }
                skills.push(skillObj);
            }
            return skills;
        }
    }
    export var heroTalismanCtrl:HeroTalismanCtrl;
    export var heroTalismanCtrl:HeroTalismanCtrl = HeroTalismanCtrl.getInstance() ;
}

