/**
 * Created by Administrator on 2015/9/8.
 */

module gd {

    export interface IHeroPart {
        hec:gd.HeroEntityCtrl;
        isMatrix:boolean;
        part:number;
        delegate:any;
    }

    export class HeroEntityCtrl extends mo.DataController {

        static ON_EQUIP_CHANGED:string = "onEquipChanged";
        static ON_EQUIP_STR:string = "onEquipStr";
        static ON_EQUIP_UPSTAR:string = "onEquipStar";
        static ON_WING_CHANGED:string = "ON_WING_CHANGED";
        static ON_EQUIP_UPGEM:string = "onEquipUpGem";
        static ON_SKILL_CHANGED:string = "ON_SKILL_CHANGED";
        static ON_GIFT_SKILL_CHANGED:string = "ON_GIFT_SKILL_CHANGED";

        public static Scale_Num:number = 10000;
        props:Array<number>;
        skillIds;
        skillLevels;
        isSelf:boolean;
        otherData:Array<any>;
        fightData:Array<any>;//[lvl,equipBag,nickName,isKing, bluediamond, rebirthLvl,medalTitle,propertyData]
        _initProp() {
            var self = this;
            super._initProp();
            this.DATA_KEY = gc.dsConsts.HeroEntity;
            self.props = [];
            self.skillIds = [];
            self.skillLevels = [];
            self.isSelf = true;
            self.otherData = [];
            self.fightData = [];
        }

        init(data){
            var self = this;
            super.init(data);
            self.props = self.get(gc.dsConsts.HeroEntity.propArr);
            self.initSkill();
        }

        updateEntity(data){
            var self = this;
            var oldProp = self._getCurProp();
            super.updateEntity(data);
            self.props = self.get(gc.dsConsts.HeroEntity.propArr);
            self.initSkill();


            var newProp = self._getCurProp();
            self._calProChanged(oldProp,newProp);
            if(data[gc.dsConsts.HeroEntity.combat]){
                //战斗力变化
                userCtrl.updateCombat();
            }


        }

        private  _getCurProp(){
            var self = this;

            var curProp = {
                maxHpFight:self.maxHpFight,
                attackFight:self.attackFight,
                defenceFight:self.defenceFight,
                magicDefenceFight:self.magicDefenceFight,
                hitFight:self.hitFight,
                dodgeFight:self.dodgeFight,
                criticalFight:self.criticalFight,
                disCriticalFight:self.disCriticalFight
            };

            return curProp;
        }

        private _calProChanged(oldProp, newData){
            var self = this;
            var changeProp = {
                maxHpFight:newData.maxHpFight-oldProp.maxHpFight,
                attackFight:newData.attackFight-oldProp.attackFight,
                defenceFight:newData.defenceFight-oldProp.defenceFight,
                magicDefenceFight:newData.magicDefenceFight-oldProp.magicDefenceFight,
                hitFight:newData.hitFight-oldProp.hitFight,
                dodgeFight:newData.dodgeFight-oldProp.dodgeFight,
                criticalFight:newData.criticalFight-oldProp.criticalFight,
                disCriticalFight:newData.disCriticalFight-oldProp.disCriticalFight
            };
            //todo 属性变化，需要UI表现 ,只有大于0时才显示
            //console.log("属性变化：",changeProp);
            var needShowProp = {};
            for(var key in changeProp){
                if(changeProp[key] > 0){
                    needShowProp[key] = changeProp[key];
                }
            }
            if(Object.keys(needShowProp).length > 0){
                // g_msg.GetItemTips.create().setData({changeProp:needShowProp}).show();
                g_msg.UIMsgHeroPropCtrl.push({hec: self, changeProp:needShowProp});
                
            }
        }

        //获取法宝技能        [技能id,技能id,...]
        getTalismanSkill(){
            var self = this;
            var returnArr = [];
            var talismanData = self.get(gc.dsConsts.HeroEntity.talismanData)||{};       //法宝数据{法宝id:[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质],法宝id:[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质],....}
            for(var key in talismanData){
                var skillObj = talismanData[key][4]||{};
                for(var key1 in skillObj){
                    returnArr.push(skillObj[key1]);
                }
            }
            return returnArr;
        }

        //获取元婴列表
        getSoulArr(){
            var self = this;
            var soulArr = self.get(gc.dsConsts.HeroEntity.soulArr);
            return soulArr;
        }

        getCurWearSoul(){
            var self = this;
            var wearSoulId = self.get(gc.dsConsts.HeroEntity.wearSoulId);
            return wearSoulId;
        }
        //获取佩戴法宝id
        getTalismanAdorn(){
            var self = this;
            var talismanAdorn = self.get(gc.dsConsts.HeroEntity.talismanAdorn)||0;
            return talismanAdorn;
        }

        //初始化技能
        initSkill(){
            var self = this;

            var t_hero = mo.getJSONWithFileName(gc.cfg_t_hero);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var skillOpenNeedArr = c_game[gc.id_c_game.skillRate][4];
            skillOpenNeedArr = skillOpenNeedArr.split(",");
            var skillLvlArr = self.get(gc.dsConsts.HeroEntity.skillLvlArr);
            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);
            var t_heroData = t_hero[tempId];
            self.skillIds.length = 0;
            self.skillLevels.length = 0;
            var tempSkillIds = t_heroData[gc.t_hero_skillIds];
            for(var i = 0;i<tempSkillIds.length;i++){
                var locSkillId = tempSkillIds[i];
                var locTalentSkillId = self._getReplaceTalentSkillId(i);
                if(locTalentSkillId) locSkillId = locTalentSkillId;

                self.skillIds.push(locSkillId);

                var locNeedLvl = parseInt(skillOpenNeedArr[i]) ;
                if(self.lvl>=locNeedLvl){
                    self.skillLevels.push(skillLvlArr[i]||1);
                }else{
                    self.skillLevels.push(0);
                }

            }

            self._initHearSkill();
            self.pushNotify(self.__class.ON_SKILL_CHANGED);
        }

        _getReplaceTalentSkillId(index){
            var self = this;
            var skillArr = self.getTalismanSkill();
            var reSkillId = 0;//
            var t_talismanSkill = mo.getJSONWithFileName(gc.cfg_t_talismanSkill);

            for(var i = 0;i<skillArr.length;i++){
                var locSkillId = skillArr[i];
                if(!locSkillId) continue;
                var locSkillData = t_talismanSkill[locSkillId];
                var locType = locSkillData[gc.t_talismanSkill_type];
                if(locType!=gc.c_prop.talismanSkillTypeKey.replaceSkill) continue;
                var locTeffect = locSkillData[gc.t_talismanSkill_effect]||[];
                locTeffect = locTeffect[0];
                if(!locTeffect) continue;
                var locIndex = locTeffect[0];
                var locTalentSkillId = locTeffect[1];
                if(index!=locIndex) continue;

                if(locTalentSkillId>reSkillId){
                    reSkillId = locTalentSkillId;
                }
            }
            return reSkillId;
        }

        _initHearSkill(){
            var self = this;
            var c_heartStunt = mo.getJSONWithFileName(gc.cfg_c_heartStunt);
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var skill2Layer = cfg_c_game[gc.id_c_game.heartStuntCfg][1];

            //心法每10级等于1级技能
            var heartData = self.heartData;

            for(var key in heartData){
                var heartStuntData = c_heartStunt[key];
                var layer = parseInt(heartStuntData[gc.c_heartStunt_layer]);
                var series = parseInt(heartStuntData[gc.c_heartStunt_series]);
                if(!heartStuntData) continue;
                var locValue =  heartData[key]||0;
                var locSkillId = heartStuntData[gc.c_heartStunt_skillId];
                var locSkillId2 = heartStuntData[gc.c_heartStunt_skillId2];
                if(layer>skill2Layer) locSkillId = locSkillId2;
                self.skillIds.push(locSkillId);
                var locSkillLvl = Math.floor(locValue/series)+1;
                if(locSkillLvl>layer) locSkillLvl = layer;
                self.skillLevels.push(locSkillLvl);
            }
        }

        /**
         * 获取等级
         * @returns {number}
         */
        public get heartData(){
            var self = this;
            //var propertyData

            var propertyData = {};
            if(self.isSelf){
                propertyData = userCtrl.get(gc.dsConsts.UserEntity.propertyData)||{};
            }else{
                propertyData = self.fightData[7]||{};
            }
            var heartData = propertyData[gc.c_prop.propertyDataKey.heartStunt]||{};
            return heartData;
        }

        /**
         * 获取等级
         * @returns {number}
         */
        public get lvl(){
            var self = this;
            var userLvl = 0;
            if(self.isSelf){
                userLvl = userCtrl.getLvl();
            }else{
                userLvl = self.fightData[0]||0;
            }
            return userLvl;
        }

        /**
         * 获取职业类型
         * @returns {gc.c_prop.heroJobKey}
         */
        public get job(){
            var tempId = this.get(gc.dsConsts.HeroEntity.tempId);
            var t_hero = mo.getJSONWithFileName(gc.cfg_t_hero);
            return t_hero[tempId][gc.t_hero_job];
        }

        public setPropByIndex(index:number, value:number):void{
            this.props[index] = value;
        }
        public getPropByIndex(index:number):number{
            return this.props[index];
        }

        private getFightPropByIndex(baseIndex:number, scaleIndex:number, tempScale:number):number{
            return Math.floor(this.getPropByIndex(baseIndex)*(1+this.getPropByIndex(scaleIndex)/HeroEntityCtrl.Scale_Num)+this.getPropByIndex(tempScale));
        }

        //生命
        public get maxHpFight() :number
        {
            return this.getFightPropByIndex(1,2,33);
        }
        //物攻
        public get attackFight():number{
            return this.getFightPropByIndex(3,4,34);
        }
        //物防
        public get defenceFight():number{
            return this.getFightPropByIndex(5,6,35);
        }
        //魔防
        public get magicDefenceFight() :number{
            return this.getFightPropByIndex(7,8,36);
        }
        //命中
        public get hitFight():number{
            return this.getFightPropByIndex(9,10,37);
        }
        //闪避
        public get dodgeFight():number{
            return this.getFightPropByIndex(11,12,38);
        }
        //暴击
        public get criticalFight():number{
            return this.getFightPropByIndex(13,14,39);
        }
        //抗暴
        public get disCriticalFight():number{
            return this.getFightPropByIndex(15,16,40);
        }
        //幸运
        public get luckyValueFight():number{
            return this.getFightPropByIndex(17,18,41);
        }
        //移动速度
        public get moveSpeedFight():number{
            return this.getFightPropByIndex(19,20,42);
        }
        //攻击速度
        public get attackIntervalFight():number{
            return this.getFightPropByIndex(21,22,43);
        }
        //伤害加成
        public get damageIncreaseFight():number{
            var b = this.getPropByIndex(23) + this.getPropByIndex(44);
            b = b / HeroEntityCtrl.Scale_Num;
            return b = Math.floor(100 * b) / 100;
        }
        //伤害减免
        public get damageDecreaseFight():number{
            var b = this.getPropByIndex(24) + this.getPropByIndex(45);
            b = b / HeroEntityCtrl.Scale_Num;
            return b = Math.floor(100 * b) / 100;
        }
        //麻痹
        public get benumbProFight() :number //[25]麻痹
        {
            return this.getPropByIndex(25) / HeroEntityCtrl.Scale_Num;
        }
        //抗麻痹
        public get disBenumbProFight() :number //[26]抗麻痹
        {
            return this.getPropByIndex(26) / HeroEntityCtrl.Scale_Num;
        }
        //poisoningRecoveryProb :number = 0;//[27]
        //麻痹时长
        public get benumbProSpanFight() :number //[28]麻痹时长
        {
            return this.getPropByIndex(28);
        }
        //复活
        public get reviveCountFight() :number //[29]复活次数
        {
            return this.getPropByIndex(29);
        }
        //复活HP%
        public get reviveHPScaleFight() :number //[30]复活HP%
        {
            return this.getPropByIndex(30);
        }
        //护身
        public get maxHp2Fight() :number //[31]抗护身
        {
            var b = this.maxHpFight;
            return b = b * this.getPropByIndex(31) / HeroEntityCtrl.Scale_Num;
        }
        //抗护身
        public get disMaxHp2Fight() :number //[32]抗护身概率
        {
            return this.getPropByIndex(32) / HeroEntityCtrl.Scale_Num;
        }

        _getHitRate(dodgeFightTarget) {//是否命中成功，b对方的闪避
            return this.hitFight / (this.hitFight + dodgeFightTarget);
        }

        _getCriticalRate = function (disCriticalFightTarget) {//是否暴击，b对方的抗暴
            return this.criticalFight / (this.criticalFight + disCriticalFightTarget);
        }
        _getCritDamage = function(disCriticalFightTarget) {//获取暴击伤害，b对方的抗爆
            return this.criticalFight / (this.criticalFight + disCriticalFightTarget) * 3;
        }

        _getDefence = function(defenceFight, magicDefenceFight) {//获取防御，b攻击者的攻击行为， a攻击者等级
            var level = 1;//临时
            var attackType = this.job;
            var roleLevel = gd.userCtrl.getLvl();
            var attack = this.attackFight;
            var def = attackType == g_base.PropBase.BehaviorPhysics ? defenceFight : attackType == g_base.PropBase.BehaviorMagic ? magicDefenceFight : (magicDefenceFight + defenceFight) / 2;
            var curDef;
            if(def<=10000){
                curDef = 0.002*def/(1+0.015*roleLevel+0.002*def);
                curDef = Math.min(curDef, 0.6);
            }else if(def<60000){
                curDef = 100/(1+0.8*roleLevel+100)+0.001*(def-10000)/(1+1.25*roleLevel+0.001*(def-10000));
                curDef = Math.min(curDef, 0.9);
            }else{
                if(attack<120000){
                    curDef = 0.8+def/(def+4000000);
                }else{
                    curDef = def/(def+attack*0.125);
                }
                curDef = Math.min(curDef, 0.9);
            }
            return curDef;
        }

        _getHpCoefficient=function(skillInfo, skillLevel){
            return (skillInfo[gc.t_skill_damage] + skillInfo[gc.t_skill_damageScaleA] * (skillLevel - 1)) / 10000;
        }

        public getDamagePerSec(target){
            var skill;
            var hitRate, critRate, critDamage, defence, damage;
            //var skillDamagePerSecs = [];

            hitRate = this._getHitRate(target[gc.t_monster_dodge]);
            critRate = this._getCriticalRate(target[gc.t_monster_disCritical]);
            critDamage = this._getCritDamage(target[gc.t_monster_disCritical]);
            defence = this._getDefence(target[gc.t_monster_defense], target[gc.t_monster_magicDefence]);

            var damagePerSec = 0;
            for(var i=0; i<this.skillIds.length; ++i){
                var skillId = this.skillIds[i];
                skill = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, skillId);        // 获取技能表数据
                var skillLevel = this.skillLevels[i];  // 技能等级
                var hpCoefficient = this._getHpCoefficient(skill, skillLevel);
                if(hpCoefficient<0){
                    damage = this.attackFight;
                    damage *= (1-defence);
                    damage = (damage + damage*critRate*critDamage)/(1+critRate);
                    damage *= 1+this.damageIncreaseFight-target[gc.t_monster_damageDecrease];
                    damage *= hpCoefficient;
                    damage *= hitRate;

                    damagePerSec += (-damage*1000/(skill[gc.t_skill_cd]*10));
                }else{
                    damage = 0;
                }
            }

            return damagePerSec;
        }

        public get equipData(){
            return this.get(gc.dsConsts.HeroEntity.equipData) || {};        //{index:id,}
        }

        public get tempId(){
            return this.get(gc.dsConsts.HeroEntity.tempId);
        }

        public get combat(){
            return this.get(gc.dsConsts.HeroEntity.combat);
        }

        //获取性别
        public get sex():number{
            return this.get(gc.dsConsts.HeroEntity.sex);
        }

        public get id(){
            return this.get(gc.dsConsts.HeroEntity.id);
        }

        public get wingData(){
            //id 等级 星级 当前星经验
            var wingArr = this.get(gc.dsConsts.HeroEntity.wingArr);
            return wingArr[0] != null ? wingArr : [0, 0, 0, 0];
        }

        public get gemData(){
            //[id, id, id, id] 宝石
            var gemArr = this.get(gc.dsConsts.HeroEntity.gemArr);
            return gemArr;
        }

        //翅膀是否激活
        isWingActived(){
            var self = this;
            return !!self.wingData[1];
        }

        //翅膀是否满级
        isWingLimit(){
            var self = this;
            var ret = false;
            var wingId = parseInt(self.wingData[0]) + 1;
            var cfg_t_wing = mo.getJSONWithFileName(gc.cfg_t_wing);
            if(!cfg_t_wing[wingId]) ret = true;
            return ret;
        }

        //翅膀是否达到开启等级
        isWingOpen(){
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var needLvl = cfg_c_game[gc.id_c_game.wingCrit][6];
            return userCtrl.getLvl()>=needLvl;
        }

        //过的宝石信息
        getGemInfoByPart(part){
            var self = this;
            var cfg_c_gem = mo.getJSONWithFileName(gc.cfg_c_gem);
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var gemData = self.gemData;

            var gemId = gemData[part];
            if(!gemId){
                if(part > 7) part = part -4;
                gemId = cfg_c_game[gc.id_c_game.gemInitial][part];
            }else{
                gemId = gemData[part];
            }
            return cfg_c_gem[gemId];
        }

        //根据部位获取装备栏强化等级
        getStrLvlByEquipPart(part){
            var self = this;
            var strArr = self.get(gc.dsConsts.HeroEntity.intensifyArr)||[];
            return strArr[part] || 0;
        }
        //根据部位获取装备栏强化精炼等级
        getRefLvlByEquipPart(part){
            var self = this;
            var refineArr = self.get(gc.dsConsts.HeroEntity.refineArr)||[];
            return refineArr[part] || 0;
        }
        //根据部位获取装备栏强化等级信息
        getStrLvlInfoByEquipPart(part){
            var self = this;
            var opt = self.getStrOpt(part);

            return opt.curStrInfo;//强化等级，属性类型，属性值
        }

        //根据部位获取装备栏升星等级
        getStarLvlByEquipPart(part){
            var self = this;
            var strArr = self.get(gc.dsConsts.HeroEntity.starArr)||[];
            return strArr[part] || 0;
        }
        //升星属性加成
        getStarLvlInfoByEquipPart(part){
            var self = this;
            var starLvl = self.getStarLvlByEquipPart(part);
            var c_lvl = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, starLvl);
            return [starLvl, c_lvl[gc.c_lvl_upStarPropAdd]/100];//升星等级，属性值
        }
        //获取衣服显示id
        getClothDisplayID(){
            var self = this;
            if(self.isSelf){
                //判断衣服
                var tempID = self.getEquipTempIdByPart(gc.c_prop.heroEquipIndexKey.clothes);
                var displayIDArr = [];

                if(tempID){
                    var t_itemEquipData = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip,tempID);
                    displayIDArr = t_itemEquipData[gc.t_itemEquip_displayID].split(",");
                }else{
                    //如果没有则返回角色默认
                    //self.tempId
                    var t_heroData = mo.getJSONWithFileNameAndID(gc.cfg_t_hero,self.tempId);
                    displayIDArr = t_heroData[gc.t_hero_displayID].split(",");
                }
                if(self.sex==gc.c_prop.sexKey.male){
                    return displayIDArr[0];
                }else{
                    return displayIDArr[1];
                }
            }else{
                return self.otherData[0];
                //return "zhanshen";
            }
        }

        //获取武器显示id
        getWeaponDisplayID(){
            var self = this;
            if(self.isSelf){
                //判断衣服
                var tempID = self.getEquipTempIdByPart(gc.c_prop.heroEquipIndexKey.weapon);
                var displayID = null;

                if(tempID){
                    var t_itemEquipData = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip,tempID);
                    displayID = t_itemEquipData[gc.t_itemEquip_displayID];
                }
                return displayID;
            }else{
                return self.otherData[1];
                return "luochabang.18";
            }
        }

        //获取翅膀显示id
        getWingDisplayID(){
            var self = this;
            var wingOpt = this.getWingOpt();
            if(self.isSelf){
                var displayID = null;
                var wingId = wingOpt.wingId;
                var t_wingData = mo.getJSONWithFileNameAndID(gc.cfg_t_wing,wingId);
                if(t_wingData&&wingOpt.wingLvl>0){
                    displayID = t_wingData[gc.t_wing_displayID];
                }
                return displayID;
            }else{
                return self.otherData[2];
                return "00001";
            }
        }

        getIsKing(){
            var self = this;
            if(self.isSelf){
                return gd.userCtrl.getIsKing();
            }else{
                return self.fightData[3];
            }
        }

        getMedalTitle(){
            var self = this;
            if(self.isSelf){
                return gd.userCtrl.get(gc.dsConsts.UserEntity.medalTitle);
            }else{
                return self.fightData[6];
            }
        }

        getRebirthLvl(){
            var self = this;
            if(self.isSelf){
                return userCtrl.get(gc.dsConsts.UserEntity.rebirthLvl) || 0;
            }else{
                return self.fightData[5] || 0;
            }
        }

        //获取装备的详细信息
        getEquipInfoByPart(part){
            var self = this;
            var equipId = self.equipData[part];
            var equipBag = self.isSelf? gd.userCtrl.getEquipBag() : self.fightData[1];
            return equipBag[equipId];
        }

        //根据部位获得装备tempId，如果该部位没有装备则返回null
        getEquipTempIdByPart(part){
            var self = this;
            var equipData = self.getEquipInfoByPart(part);
            if(!equipData) return null;
            return equipData[0];
        }

        //根据equipId获取部位
        getPartByEquipId(equipId){
            var self = this;
            var equipData = self.equipData;
            var partKey = gc.c_prop.heroEquipIndex;
            var heroEquipIndexKey = gc.c_prop.heroEquipIndexKey;
            for(var part in partKey){
                if(!gd.equipCtrl.isBreakRing(part) && equipData[part] == equipId) return parseInt(part);
            }
            return null;
        }

        //根据部位获得装备Id
        getEquipIdByPart(part){
            var self = this;
            var equipId = self.equipData[part];
            return equipId;
        }

        //检查某个部位是否已装备
        isPartEquiped(part){
            return this.getEquipIdByPart(part) != null;
        }

        //身上是否有装备
        isEquiped(){
            return Object.keys(this.equipData).length > 0;
        }

        //是否装备有普通(非特戒)装备
        isNormalEquiped(){
            return this.getFirstEquipedPart() != null;
        }

        //获取非特戒可穿戴的装备
        getStanbyEquip(part){
            var self = this;
            if(!self.isSelf) return [];
            var t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            return gd.equipCtrl.getEquipList(this.job, gd.equipCtrl.getEquipTypeByPart(part)).filter(function(equipId){
                return gd.userCtrl.getLvl() >= gd.equipCtrl.getEquipWearLvl(gd.userCtrl.getEquipBag()[equipId][0]);
            });
        }

        //获取可穿戴特戒
        getStanbyBreakId(part){
            var self = this;
            if(!self.isSelf) return null;
            var ringEquiped = self.getEquipIdByPart(part) != null; //是否已经穿戴好特戒
            var breakId = gd.equipCtrl.getInitBreakRing(part); //背包里是否存在特戒
            if (!ringEquiped && gd.userCtrl.getItemNum(breakId) > 0) return breakId;
            return null;
        }

        //逆时针依次检查，直到发现已装备的部位
        getFirstEquipedPart(){
            var self = this;
            var equipData = self.equipData;
            var partKey = gc.c_prop.heroEquipIndex;
            var heroEquipIndexKey = gc.c_prop.heroEquipIndexKey;
            for(var part in partKey){
                if(!gd.equipCtrl.isBreakRing(part) && equipData[part]) return parseInt(part);
            }
            return null;
        }

        //获取身上所有传承装备
        getAllSpecialEquip(){
            var self = this;
            var equipData = self.equipData;
            var partKey = gc.c_prop.heroEquipIndex;
            var heroEquipIndexKey = gc.c_prop.heroEquipIndexKey;
            var equips = [];
            for(var part in partKey){
                if(!gd.equipCtrl.isBreakRing(part)
                    && equipData[part]
                    && gd.equipCtrl.isSpecialEquip(gd.equipCtrl.getTempIdByEquipId(equipData[part]))){
                    equips.push(equipData[part]);
                }
            }
            return equips;
        }

        //获取身上所有可传承装备
        getAllCanInherEquip(){
            var self = this;
            var equips = self.getAllSpecialEquip();
            return equips.filter(function(equipId){
                return gd.equipCtrl.getInheritedEquipOpt(equipId).nextEquipNeedLvlEnough;
            })
        }

        getStrOpt(part){
            var self = this;
            var tempId = self.getEquipTempIdByPart(part);
            if(!tempId) return null;
            var opt = {
                part: part,
                strMax: false,
                curStrInfo:[],
                nextStrInfo:[],
                stone: 0,
                gold: 0,
                costStone: 0,
                costGold: 0,
                strengthLimit: 0,
                strengthLvl: 0,
                stoneEnough:false,
                goldEnough:false
            };
            var curLvl = self.getStrLvlByEquipPart(part);
            var nextLvl = curLvl + 1;
            var cLvlId = 1;
            if(curLvl != 0) cLvlId = curLvl;

            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var gold = gd.userCtrl.getGold();
            var strengthLimit = c_game[gc.id_c_game.initCfg][2];     //强化上限
            var costGold = c_lvl[cLvlId][gc.c_lvl_equipStrengthGold];
            var strengthNum = gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.intensify);     //拥有强化石数量
            var costStrengthNum = c_lvl[cLvlId][gc.c_lvl_equipStrengthNum];

            opt.strengthLvl=curLvl;
            opt.strMax = curLvl >= strengthLimit;
            opt.stone = strengthNum;
            opt.gold = gold;
            var refineLvl = parseInt(self.getRefLvlByEquipPart(opt.part));
            var curRefineInfo = gd.equipCtrl.queryRefineLvlInfo(tempId, refineLvl);
            if(opt.strMax){
                opt.curStrInfo = gd.equipCtrl.queryStrLvlInfo(tempId, curLvl);
                opt.curStrInfo[2] = opt.curStrInfo[2] * (1 + curRefineInfo[2]) >> 0;
            }else{
                opt.curStrInfo = gd.equipCtrl.queryStrLvlInfo(tempId, curLvl);
                opt.curStrInfo[2] = opt.curStrInfo[2] * (1 + curRefineInfo[2]) >> 0;
                opt.nextStrInfo = gd.equipCtrl.queryStrLvlInfo(tempId, nextLvl);
                opt.nextStrInfo[2] = opt.nextStrInfo[2] * (1 + curRefineInfo[2]) >> 0;
                opt.costStone = costStrengthNum;
                opt.costGold = costGold;
                opt.strengthLimit = strengthLimit;
                opt.stoneEnough = strengthNum>=costStrengthNum;
                opt.goldEnough = gold>=costGold;
            }

            return opt;
        }

        getRefineOpt(part) {
            var self = this;
            var tempId = self.getEquipTempIdByPart(part);
            if (!tempId) return null;
            var opt = {
                part: part,
                isMax: false,
                curRefineInfo: [],
                nextRefineInfo: [],
                stone: 0,
                gold: 0,
                costStone: 0,
                costGold: 0,
                strengthLvl: 0,
                needStrLv: 0,
                refineLv: 0,
                stoneEnough: false,
                goldEnough: false
            };


            var curLvl = self.getStrLvlByEquipPart(part);
            var refineLvl = parseInt(self.getRefLvlByEquipPart(opt.part));      //当前精炼等级
            var cfg_t_strengthRefine = mo.getJSONWithFileName(gc.cfg_t_strengthRefine);
            var needStrLvl = cfg_t_strengthRefine[refineLvl][gc.t_strengthRefine_needStrLvl];
            var costGold = cfg_t_strengthRefine[refineLvl][gc.t_strengthRefine_consumeGold];
            var costStrengthNum = cfg_t_strengthRefine[refineLvl][gc.t_strengthRefine_consumeStr];
            var gold = gd.userCtrl.getGold();
            var strengthNum = gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.intensify);     //拥有强化石数量

            opt.isMax = !cfg_t_strengthRefine[refineLvl + 1];
            opt.strengthLvl = curLvl;
            opt.refineLv = refineLvl;
            opt.needStrLv = needStrLvl;
            opt.stone = strengthNum;
            opt.gold = gold;
            if (opt.isMax) {
                opt.curRefineInfo = gd.equipCtrl.queryRefineLvlInfo(tempId, refineLvl);
            } else {
                opt.curRefineInfo = gd.equipCtrl.queryRefineLvlInfo(tempId, refineLvl);
                opt.nextRefineInfo = gd.equipCtrl.queryRefineLvlInfo(tempId, refineLvl + 1);
                opt.costStone = costStrengthNum;
                opt.costGold = costGold;
                opt.stoneEnough = strengthNum >= costStrengthNum;
                opt.goldEnough = gold >= costGold;
            }

            return opt;
        }

        strength(opt,cb,target){
            var self = this;
            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);

            if(opt.strMax) return mo.showMsg("已达到强化上限");
            if(!opt.stoneEnough) return mo.showMsg("强化石不足");
            if(!opt.goldEnough) {
                userCtrl.noGolds(function(){},this);
                return;
            }
            var argKeys = gc.iface.a_hero_strength_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = opt.part;
            mo.requestWaiting4Server(gc.iface.a_hero_strength, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heroData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_EQUIP_STR);
            });
        }

        /**
         * 装备强化精炼
         * @param cb
         * @param target  [是否成功,强化后等级,是否暴击,是否降级]
         */
        equipRefine(opt,cb,target){
            var self = this;

            var refineLvl = parseInt(self.getRefLvlByEquipPart(opt.part));      //当前精炼等级
            var cfg_t_strengthRefine = mo.getJSONWithFileName(gc.cfg_t_strengthRefine);
            if(!cfg_t_strengthRefine[refineLvl+1]) return mo.showMsg("精炼等级已达最高");
            var needStrLvl = cfg_t_strengthRefine[refineLvl][gc.t_strengthRefine_needStrLvl];
            if(needStrLvl > opt.strengthLvl) return mo.showMsg("本装备栏强化至"+needStrLvl+"时可继续精炼");
            var costGold = cfg_t_strengthRefine[refineLvl][gc.t_strengthRefine_consumeGold];
            var costStrengthNum = cfg_t_strengthRefine[refineLvl][gc.t_strengthRefine_consumeStr];
            if(opt.gold<costGold) {
                userCtrl.noGolds(function(){},this);
                return;
            }
            if(opt.stone < costStrengthNum) return mo.showMsg("强化石不足");

            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);
            var argKeys = gc.iface.a_hero_equipRefine_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = opt.part;
            mo.requestWaiting4Server(gc.iface.a_hero_equipRefine, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var equipRefineArr = data[gc.dsConsts.ExUserData.strengthArr];
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heroData);
                cb.call(target,equipRefineArr);
            });
        }

        getUpStarOpt(part){
            var self = this;
            var tempId = self.getEquipTempIdByPart(part);
            if(!tempId) return null;
            var opt = {
                part: part,
                curProp: [],
                nextProp: [],
                starLvl:0,
                stone: 0,
                gold: 0,
                costStone: 0,
                costGold: 0,
                strengthLimit: 0,
                strMax: false,
                stoneEnough:false,
                goldEnough: false,

                topLv: 0,
                topCostStone: 0,
                topCostGold: 0,
                topStoneEnough: false,
                topGoldEnough: false,
                topNeed: false,
                topMax: false,
                topCurProp: []
            };

            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var gold = gd.userCtrl.get(gc.dsConsts.UserEntity.gold);
            var starLvl = self.getStarLvlByEquipPart(part);      //当前升星等级
            //var starLimit = c_game[gc.id_c_game.initCfg][3];      //升星上限
            var cLvlId = 0;
            if(starLvl != 0) cLvlId = starLvl;
            var costGold = c_lvl[cLvlId][gc.c_lvl_upStarGold];
            var starNum = gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.starStone);     //拥有升星石数量
            var costStarNum = c_lvl[cLvlId][gc.c_lvl_upStarNum];

            var starTopArr = self.get(gc.dsConsts.HeroEntity.starTopArr) || [];
            var starTop = starTopArr[opt.part] || 0;
            var maxUpStarLvl = parseInt(c_lvl[starTop][gc.c_lvl_maxUpStarLvl]);     //最大升星数级数

            opt.strMax = starLvl >= maxUpStarLvl;
            if(!opt.strMax){
                opt.costStone = costStarNum;
                opt.costGold = costGold;

                opt.curProp = gd.equipCtrl.queryStarInfo(starLvl);
                opt.nextProp = gd.equipCtrl.queryStarInfo(starLvl+1);
            }else{
                opt.curProp = gd.equipCtrl.queryStarInfo(starLvl);
                opt.nextProp = [starLvl, 0];
            }
            opt.stone = starNum;
            opt.gold = gold;

            opt.strengthLimit = maxUpStarLvl;
            opt.stoneEnough = starNum>=costStarNum;
            opt.goldEnough = gold>=costGold;
            opt.starLvl = starLvl;

            opt.topLv = starTop;
            opt.topMax = !c_lvl[starTop + 1][gc.c_lvl_upStarTop];
            opt.topNeed = maxUpStarLvl <= opt.starLvl && !opt.topMax;
            opt.topCostStone = c_lvl[starTop][gc.c_lvl_topCosNum];     //突破消耗升星石数
            opt.topCostGold = c_lvl[starTop][gc.c_lvl_topCosGold];     //突破消耗金币
            opt.topStoneEnough = (opt.stone >= opt.topCostStone);
            opt.topGoldEnough = (opt.gold >= opt.topCostGold);
            opt.topCurProp = c_lvl[starTop][gc.c_lvl_propertys][part >= 8 ? part - 4 : part];//[属性类型ID, 加值]

            return opt;
        }

        upStar(opt, cb, target){
            var self = this;
            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);
            if(opt.strMax) return mo.showMsg("已达到升星上限");
            if(!opt.stoneEnough) return mo.showMsg("升星石不足");
            if(!opt.goldEnough) {
                userCtrl.noGolds(function(){},this);
                return;
            }
            var argKeys = gc.iface.a_hero_upStar_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = opt.part;
            mo.requestWaiting4Server(gc.iface.a_hero_upStar, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heroData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_EQUIP_UPSTAR);
            });
        }

        /**
         * 升星突破
         * @param cb
         * @param target  [是否成功]
         */
        starTop(opt,cb,target){
            var self = this;

            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var starTopArr = self.get(gc.dsConsts.HeroEntity.starTopArr)||[];
            var starTop = starTopArr[opt.part] || 0;
            if(!c_lvl[starTop+1][gc.c_lvl_upStarTop]) return mo.showMsg("当前升星突破重数已打上限");
            var maxUpStarLvl = c_lvl[starTop][gc.c_lvl_maxUpStarLvl];     //最大升星数级数
            if(maxUpStarLvl > opt.starLvl) return mo.showMsg("当前还可以继续升星");
            var topCosNum = c_lvl[starTop][gc.c_lvl_topCosNum];     //突破消耗升星石数
            var topCosGold = c_lvl[starTop][gc.c_lvl_topCosGold];     //突破消耗金币
            var gold = gd.userCtrl.get(gc.dsConsts.UserEntity.gold);
            var starNum = gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.starStone);     //拥有升星石数量
            if(starNum < topCosNum) return mo.showMsg("升星石不足");
            if(gold<topCosGold) {
                userCtrl.noGolds(function(){},this);
                return;
            }

            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);
            var argKeys = gc.iface.a_hero_starTop_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = opt.part;
            mo.requestWaiting4Server(gc.iface.a_hero_starTop, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var wingStrengthArr = data[gc.dsConsts.ExUserData.strengthArr];
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heroData);
                cb.call(target,wingStrengthArr);
            });
        }

        getUpGemOpt(part){
            var self = this;
            var tempId = self.getEquipTempIdByPart(part);
            if(!tempId) return null;
            var opt = {
                part: part,
                gemLvl:0,
                gemId: 0,     //当前位置宝石id
                gemDebrisId: 0,     //需要宝石碎片id
                gemDebris: 0,       //拥有宝石碎片数量
                costGemDebris: 0,     //需要宝石碎片数量
                strMax:false,       //强化到最高
                stoneEnough:false,
                nextNeedLvl: 0,      //下一级宝石需要等级
                roleLvlEnough: false
            };
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cfg_c_gem = mo.getJSONWithFileName(gc.cfg_c_gem);
            var c_gem = self.getGemInfoByPart(part);
            var gemId = c_gem[gc.c_gem_id];
            var lvl = c_gem[gc.c_gem_gemLvl];
            var itemID = 0;       //需要宝石碎片id
            var count = 0;       //需要宝石碎片数量
            var nextGemId = parseInt(gemId) + 1;
            var gemLvlLimitStart = parseInt(c_game[gc.id_c_game.gemLvlLimit][0].split(",")[0]);       //宝石等级限制开始等级
            var limit = c_game[gc.id_c_game.gemLvlLimit];
            var lastgemLvlLimit = limit[limit.length -1].split(",");

            if(cfg_c_gem[nextGemId]){
                itemID = cfg_c_gem[gemId][gc.c_gem_itemID];       //需要宝石碎片id
                count = cfg_c_gem[gemId][gc.c_gem_count];       //需要宝石碎片数量
                var gemLvl = cfg_c_gem[nextGemId][gc.c_gem_gemLvl];       //宝石等级
                if(gemLvl >= gemLvlLimitStart){
                    if(gemLvl >= lastgemLvlLimit[0]){
                        opt.nextNeedLvl = lastgemLvlLimit[1];
                    }

                    for(var i = 0; i < c_game[gc.id_c_game.gemLvlLimit].length;i++){
                        if(parseInt(c_game[gc.id_c_game.gemLvlLimit][i].split(",")[0]) > gemLvl){
                            opt.nextNeedLvl = parseInt(c_game[gc.id_c_game.gemLvlLimit][i-1].split(",")[1]);
                            break;
                        }
                    }
                }else{
                    var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
                    opt.nextNeedLvl = c_open[gc.id_c_open.stone][gc.c_open_lvlRequired];
                }
            }else{
                opt.strMax = true; //已经升到最高级
                opt.nextNeedLvl = -1;
            }
            var gemCount = gd.userCtrl.getItemNum(itemID);      //拥有宝石碎片数量

            opt.gemLvl = lvl;
            opt.gemId = gemId;
            opt.gemDebrisId = itemID;
            opt.gemDebris = gemCount;
            if(!opt.strMax){
                opt.costGemDebris = count;
            }
            opt.stoneEnough = opt.gemDebris>=opt.costGemDebris;
            opt.roleLvlEnough = (gd.userCtrl.getLvl() >= opt.nextNeedLvl);
            return opt;
        }

        upGem(opt,cb,target){
            var self = this;
            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);
            var lvl = gd.userCtrl.getLvl();

            if(opt.strMax) return mo.showMsg("已升到最高等级");
            if(lvl < opt.nextNeedLvl) return mo.showMsg("等级不足");
            if(opt.gemDebris < opt.costGemDebris) return mo.showMsg("宝石碎片数量不足");
            var argKeys = gc.iface.a_hero_upGem_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = opt.part;
            mo.requestWaiting4Server(gc.iface.a_hero_upGem, args, function (data) {
                var userData = {};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heroData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_EQUIP_UPGEM);
            });
        }

        //获取翅膀数据           翅膀[id,等级,星级,当前星经验]
        getWingOpt(){
            var self = this;
            var opt = {
                wingId: 0,
                wingIdLimit: 0,
                wingName:"",
                wingLvl: 0,     //等级
                gold: 0,
                diamond: 0,
                plumageCount: 0,        //用户羽毛数量
                nowPro: {},    //当前属性{}
                nextPro: {},     //下一星级属性{}
                nowStarCount: 0,       //当前星数
                nowExp: 0,     //当前经验
                needExp: 0,     //需要经验
                nowExpPer: 0,     //当前经验百分比
                comTrain: 0,     //普通培养所需
                advTrain: 0,     //高级培养所需
                featherCount: 0,     //拥有羽毛数量
                strengthOpenLvl: 0,     //强化开启等级
                leftLvl:0,      //左边翅膀等级
                rightLvl:0      //右边翅膀等级
            };

            var nowObj = {};
            var nextObj = {};
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var t_wing = mo.getJSONWithFileName(gc.cfg_t_wing);
            var t_wingStr = mo.getJSONWithFileName(gc.cfg_t_wingStrength);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var gold = gd.userCtrl.get(gc.dsConsts.UserEntity.gold);
            var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
            var plumage = bag[gc.c_prop.spItemIdKey.plumage]||0;
            var idLimit = c_game[gc.id_c_game.initCfg][4];
            var wingData = self.wingData;
            var wingId = wingData[0];
            var wingLvl = wingData[1] || 0;
            var nowExp = parseInt(wingData[3] || 0);
            var needExp = parseInt(t_wing[wingId][gc.t_wing_needExp]);
            var nowExpPer = 0;
            var leftLv = parseInt(wingData[4]||0);
            var rightLv = parseInt(wingData[5]||0);
            if(needExp != 0){
                nowExpPer = nowExp/needExp*100;
            }
            nowExpPer = parseInt(nowExpPer.toString());
            nowObj[gc.c_prop.heroPropKey.attackTemp] = t_wing[wingId][gc.t_wing_attack]*(1+t_wingStr[leftLv][gc.t_wingStrength_attack]/10000)>>0;
            nowObj[gc.c_prop.heroPropKey.maxHpTemp] = t_wing[wingId][gc.t_wing_maxHp]*(1+t_wingStr[rightLv][gc.t_wingStrength_maxHp]/10000)>>0;
            nowObj[gc.c_prop.heroPropKey.defenceTemp] = t_wing[wingId][gc.t_wing_defence]*(1+t_wingStr[leftLv][gc.t_wingStrength_defence]/10000)>>0;
            nowObj[gc.c_prop.heroPropKey.magicDefenceTemp] = t_wing[wingId][gc.t_wing_magicDefence]*(1+t_wingStr[rightLv][gc.t_wingStrength_magicDefence]/10000)>>0;
            if(t_wing[wingId+1]){
                nextObj[gc.c_prop.heroPropKey.attackTemp] = t_wing[wingId+1][gc.t_wing_attack]*(1+t_wingStr[leftLv][gc.t_wingStrength_attack]/10000)>>0;
                nextObj[gc.c_prop.heroPropKey.maxHpTemp] = t_wing[wingId+1][gc.t_wing_maxHp]*(1+t_wingStr[rightLv][gc.t_wingStrength_maxHp]/10000)>>0;
                nextObj[gc.c_prop.heroPropKey.defenceTemp] = t_wing[wingId+1][gc.t_wing_defence]*(1+t_wingStr[leftLv][gc.t_wingStrength_defence]/10000)>>0;
                nextObj[gc.c_prop.heroPropKey.magicDefenceTemp] = t_wing[wingId+1][gc.t_wing_magicDefence]*(1+t_wingStr[rightLv][gc.t_wingStrength_magicDefence]/10000)>>0;
            }
            opt.wingId = wingId;
            opt.wingIdLimit = idLimit;
            opt.wingName = t_wing[wingId][gc.t_wing_name];
            opt.wingLvl = wingLvl;
            opt.gold = gold;
            opt.diamond = diamond;
            opt.plumageCount = plumage;
            opt.nowPro = nowObj;
            opt.nextPro = nextObj;
            opt.nowStarCount = wingData[2] || 0;
            opt.nowExp = nowExp;
            opt.needExp = needExp;
            opt.nowExpPer = nowExpPer;
            opt.comTrain = c_game[gc.id_c_game.wingCrit][4];
            opt.advTrain = c_game[gc.id_c_game.wingCrit][3];
            opt.featherCount = bag[gc.c_prop.spItemIdKey.plumage]||0;
            opt.strengthOpenLvl = parseInt(c_game[gc.id_c_game.wingCrit][7]);   //翅膀强化开启等级
            opt.leftLvl = leftLv;      //左翅强化等级
            opt.rightLvl = rightLv;     //右翅强化等级

            return opt;
        }

        //翅膀激活
        wingActivate(cb,target){
            var self = this;
            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);

            var argKeys = gc.iface.a_hero_wingActivate_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            mo.requestWaiting4Server(gc.iface.a_hero_wingActivate, args, function (data) {
                self.updateEntity(data);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_WING_CHANGED);
            });
        }

        //翅膀普通培养
        wingComFos(opt,cb,target){
            var self = this;
            self.wingFos(opt,gc.c_prop.wingFosTypeKey.comFoster,cb,target);
        }

        //翅膀高级培养
        wingAdvFos(opt,cb,target){
            var self = this;
            self.wingFos(opt,gc.c_prop.wingFosTypeKey.advFoster,cb,target);
        }

        /**
         * 翅膀培养
         * @param fosType 培养类型
         * @param cb
         * @param target
         */
        wingFos(opt,fosType,cb,target){
            var self = this;
            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);

            if(opt.wingId >= opt.wingIdLimit) return mo.showMsg("翅膀等级已到上限");
            switch (fosType){
                case gc.c_prop.wingFosTypeKey.comFoster:       //普通培养
                    if(opt.gold < opt.comTrain) {
                        userCtrl.noGolds(function(){},this);
                        return;
                    }
                    break;
                case gc.c_prop.wingFosTypeKey.advFoster:       //高级培养
                    if(opt.plumageCount <= 0){
                        if(opt.diamond < opt.advTrain) return mo.showMsg(gc.id_c_msgCode.noDiamond);
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
                var wingExp = data[gc.dsConsts.ExUserData.wingExp];
                var isWingCrit = data[gc.dsConsts.ExUserData.isWingCrit];
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heroData);
                if(wingExp) g_msg.UIMsgTextCtrl.push("+"+wingExp);
                cb.call(target,[wingExp,isWingCrit]);
            });
        }

        /**
         * 翅膀强化
         * @param part 部位
         * @param isReplace 是否元宝替代
         * @param cb
         * @param target  [是否成功,强化后等级,是否暴击,是否降级]
         */
        wingStrength(opt,part,isReplace,cb,target){
            var self = this;
            var cfg_t_wingStrength = mo.getJSONWithFileName(gc.cfg_t_wingStrength);
            var wingLvl = opt.wingLvl;
            var openLvl = opt.strengthOpenLvl;   //翅膀强化开启等级
            if(wingLvl < openLvl) return mo.showMsg(gc.id_c_msgCode.wingLevelRequire,openLvl);
            var lvl = 0;
            if(part == gc.c_prop.wingStrengthKey.left){
                lvl = opt.leftLvl;      //左翅强化等级
            }else if(part == gc.c_prop.wingStrengthKey.right){
                lvl = opt.rightLvl;     //右翅强化等级
            }else{
                return mo.showMsg("翅膀强化位置错误");
            }
            //var id = parseInt(part.toString() + (lvl).toString);
            if(!cfg_t_wingStrength[lvl]) return mo.showMsg("翅膀强化等级已到上限");
            if(parseInt(cfg_t_wingStrength[lvl][gc.t_wingStrength_needWingLvl]) > wingLvl) return mo.showMsg("翅膀到达"+cfg_t_wingStrength[lvl][gc.t_wingStrength_needWingLvl]+"阶后可继续强化");

            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);
            var argKeys = gc.iface.a_hero_wingStrength_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.part] = part;
            args[argKeys.isReplace] = isReplace;
            mo.requestWaiting4Server(gc.iface.a_hero_wingStrength, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var wingStrengthArr = data[gc.dsConsts.ExUserData.strengthArr];
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heroData);
                cb.call(target,wingStrengthArr);
            });
        }

        /**
         * 翅膀升级
         * @param cb
         * @param target
         */
        upWing(cb,target){
            var self = this;
            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);
            var argKeys = gc.iface.a_hero_upWing_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            mo.requestWaiting4Server(gc.iface.a_hero_upWing, args, function (data) {
                self.updateEntity(data);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_WING_CHANGED);
            });
        }

        static createNewEnemy(heroData,fightData,otherData):HeroEntityCtrl{
            var ctrl = new HeroEntityCtrl();
            ctrl.fightData = fightData;
            ctrl.otherData = otherData;
            ctrl.isSelf = false;
            ctrl.init(heroData);
            return ctrl;
        }

        //装备装备
        changeEquip(index,equipId,cb,target){
            var self = this;
            var tempId = self.tempId;
            var lvl = gd.userCtrl.getLvl();
            var equipBag = gd.userCtrl.getEquipBag();
            var t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var job = t_itemEquip[equipBag[equipId][0]][gc.t_itemEquip_job];     //职业
            var type = t_itemEquip[equipBag[equipId][0]][gc.t_itemEquip_type];       //装备类型
            var equipLvl = t_item[equipBag[equipId][0]][gc.t_item_level];      //等级需求
            var equipType = 0;
            switch (parseInt(index)){
                case gc.c_prop.heroEquipIndexKey.weapon:
                    equipType = gc.c_prop.equipTypeKey.weapon;
                    break;
                case gc.c_prop.heroEquipIndexKey.clothes:
                    equipType = gc.c_prop.equipTypeKey.clothes;
                    break;
                case gc.c_prop.heroEquipIndexKey.bracelet1:
                    equipType = gc.c_prop.equipTypeKey.bracelet;
                    break;
                case gc.c_prop.heroEquipIndexKey.ring1:
                    equipType = gc.c_prop.equipTypeKey.ring;
                    break;
                case gc.c_prop.heroEquipIndexKey.ring2:
                    equipType = gc.c_prop.equipTypeKey.ring;
                    break;
                case gc.c_prop.heroEquipIndexKey.bracelet2:
                    equipType = gc.c_prop.equipTypeKey.bracelet;
                    break;
                case gc.c_prop.heroEquipIndexKey.helmet:
                    equipType = gc.c_prop.equipTypeKey.helmet;
                    break;
                case gc.c_prop.heroEquipIndexKey.necklace:
                    equipType = gc.c_prop.equipTypeKey.necklace;
                    break;
            }
            if(!equipBag[equipId]) return mo.showMsg("背包没有该装备");
            if(equipBag[equipId][3] == 1) return mo.showMsg("该装备已装备");
            if(type != equipType) return mo.showMsg("该装备不属于该部位");
            if(job != tempId) return mo.showMsg("不属于该职业装备");
            if(lvl < equipLvl) return mo.showMsg("等级不够");

            var isChg = self.isPartEquiped(index);
            var argKeys = gc.iface.a_equip_changeEquip_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.index] = index;
            args[argKeys.equipId] = equipId;
            mo.requestWaiting4Server(gc.iface.a_equip_changeEquip, args, function (data) {
                var userData = {};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heroData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_EQUIP_CHANGED, tempId, index, equipId);

                if(isChg){
                    g_cache.recordGuideDone(g_consts.GUIDE_LCK.eqpChged);
                }else{
                    g_cache.recordGuideDone(g_consts.GUIDE_LCK.everEquiped);
                }
            });
        }

        //判断装备是否需要更换        [part,part,...]
        isEquipReddot() {
            var self = this;
            var returnArr = [];
            if(!self.isSelf) return returnArr;
            var tempId = self.get(gc.dsConsts.HeroEntity.tempId);
            var cfg_t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var cfg_t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            var equipData = self.get(gc.dsConsts.HeroEntity.equipData);     //{"部位":物品id,....}
            var equipBag = gd.userCtrl.getEquipBag()||{};       //装备背包 {"1":[物品id,[随到的属性值],评价,是否穿戴],...}  "1":指定id,累加上去的
            var lvl = gd.userCtrl.getLvl();
            for(var key in equipBag){
                var itemId = equipBag[key][0];
                var isWear = equipBag[key][3];        //是否装备
                var needLvl = cfg_t_item[itemId][gc.t_item_level];       //需求等级
                var job = cfg_t_itemEquip[itemId][gc.t_itemEquip_job];      //装备职业
                //剔除等级不足的装备
                if(lvl < needLvl) continue;
                //剔除已装备的物品
                if(isWear == 1) continue;
                //剔除不同职业的装备
                if(job != tempId) continue;
                var itemId = equipBag[key][0];
                var evaluate = equipBag[key][2];        //评价
                var type = cfg_t_itemEquip[itemId][gc.t_itemEquip_type];        //装备类型
                var index = [];
                switch (type){
                    case gc.c_prop.equipTypeKey.weapon:     //武器
                        index = [gc.c_prop.heroEquipIndexKey.weapon];
                        break;
                    case gc.c_prop.equipTypeKey.clothes:        //衣服
                        index = [gc.c_prop.heroEquipIndexKey.clothes];
                        break;
                    case gc.c_prop.equipTypeKey.helmet:     //头盔
                        index = [gc.c_prop.heroEquipIndexKey.helmet];
                        break;
                    case gc.c_prop.equipTypeKey.necklace:      //项链
                        index = [gc.c_prop.heroEquipIndexKey.necklace];
                        break;
                    case gc.c_prop.equipTypeKey.ring:       //戒指
                        index = [gc.c_prop.heroEquipIndexKey.ring1,gc.c_prop.heroEquipIndexKey.ring2];
                        break;
                    case gc.c_prop.equipTypeKey.bracelet:       //手镯
                        index = [gc.c_prop.heroEquipIndexKey.bracelet1,gc.c_prop.heroEquipIndexKey.bracelet2]
                        break;
                }
                for(var i = 0; i < index.length;i++){
                    var partEquipEvaluate = 0;      //穿戴装备评价值
                    if(equipData[index[i]]) partEquipEvaluate = equipBag[equipData[index[i]]][2];
                    if(evaluate > partEquipEvaluate){
                        if(returnArr.indexOf(index[i]) == -1) returnArr.push(index[i]);
                    }
                }
            }
            return returnArr;
        }

        //判断特戒可以突破或者合成     [part,part,...]
        isTringReddot() {
            var self = this;
            var returnArr = [];
            if(!self.isSelf) return returnArr;
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cfg_c_compound = mo.getJSONWithFileName(gc.cfg_c_compound);
            var bag = gd.userCtrl.getBag();
            var equipData = self.get(gc.dsConsts.HeroEntity.equipData);

            for(var i = gc.c_prop.heroEquipIndexKey.paralysisRing;i <= gc.c_prop.heroEquipIndexKey.harmRing;i++){
                var value = 0;
                var need = 0;
                if(equipData[i]){       //如果身上存在装备
                    if(cfg_c_compound[parseInt(equipData[i]) + 1]){
                        value = bag[cfg_c_compound[parseInt(equipData[i]) + 1][gc.c_compound_reqItems1]]||0;
                        need = cfg_c_compound[parseInt(equipData[i]) + 1][gc.c_compound_reqCount1];
                        var needLvl = cfg_c_compound[parseInt(equipData[i]) + 1][gc.c_compound_needLvl];
                        var lvl = gd.userCtrl.getLvl();
                        if(value >= need && lvl >= needLvl) returnArr.push(i);
                    }
                }else{      //未装备
                    value = bag[cfg_c_compound[cfg_c_game[gc.id_c_game.parRingCfg][i-4]][gc.c_compound_reqItems1]]||0;
                    need = cfg_c_compound[cfg_c_game[gc.id_c_game.parRingCfg][i-4]][gc.c_compound_reqCount1];
                    if(value >= need || bag[cfg_c_game[gc.id_c_game.parRingCfg][i-4]]) returnArr.push(i);
                }
            }
            return returnArr;
        }

        //判断技能是否可以升级的接口，金币达到，cd没有的时候   [index,index,...]
        isSkillReddot() {
            var self = this;
            var returnArr = [];
            var lvl = gd.userCtrl.getLvl();
            var gold = gd.userCtrl.getGold();
            var skillCd = gd.userCtrl.get(gc.dsConsts.UserEntity.skillCd);     //技能CD
            var lastSkillTime = gd.userCtrl.get(gc.dsConsts.UserEntity.lastSkillTime);     //最后点技能时间
            var cfg_c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var skillLvlArr = self.get(gc.dsConsts.HeroEntity.skillLvlArr);
            var cdLimit = cfg_c_game[gc.id_c_game.skillRate][5];      //CD上限
            var needLvlArr = cfg_c_game[gc.id_c_game.skillRate][4].split(",");      //开启技能需要等级
            var skillTime = Date.newDate(lastSkillTime).addSeconds(skillCd);      //当前技能时间
            var newSkillCd = skillCd;
            var skillCount = needLvlArr.length;
            for(var i = 0;i < skillCount;i++){
                var skillNeedLvl = needLvlArr[i];
                var skillLvl = skillLvlArr[i]||1;      //当前技能等级
                var needGold = cfg_c_lvl[parseInt(skillLvl) + 1][gc.c_lvl_skillNeedGold];
                if(lvl < skillNeedLvl) continue;
                if(skillLvl >= lvl) continue;
                newSkillCd = (skillTime.getTime() - Date.newDate().getTime())/1000;
                if(skillCd > cdLimit){
                    if(newSkillCd > 0)  continue;
                }else{
                    if(newSkillCd > cdLimit)  continue;
                }
                if(gold < needGold) continue;
                returnArr.push(i);
            }
            return returnArr;
        }

        //判断境界是否可以穿戴或者升级    [是否可升级(false,true),[穿戴下标index,index,...]]
        isStateReddot() {
            var self = this;
            var returnArr = [true,[]];

            var lvl = gd.userCtrl.getLvl();
            var bag = gd.userCtrl.getBag()||{};
            var cfg_t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var cfg_c_realm = mo.getJSONWithFileName(gc.cfg_c_realm);
            var realmLvl = self.get(gc.dsConsts.HeroEntity.realmLvl);       //境界等级
            var realmArr = self.get(gc.dsConsts.HeroEntity.realmArr)||[];       //符文块数组
            if(realmArr.length < 6) returnArr[0] = false;
            for(var i = 0; i < realmArr.length; i++){
                if(realmArr[i] ==null) returnArr[0] = false;
            }
            var reqItems = cfg_c_realm[realmLvl][gc.c_realm_reqItems];     //所需符文块
            for(var i = 0; i < reqItems.length; i++){
                if(reqItems[i] != realmArr[i]) returnArr[0] = false;
            }

            var arr = [];
            for(var i = 0; i <= 5; i++){
                var runeId = reqItems[i];     //符文块id
                if(realmArr[i] == runeId) continue;
                if(!bag[runeId] || bag[runeId] == 0) continue;
                var needLvl = cfg_t_item[runeId][gc.t_item_level];     //装备需要等级
                if(lvl < needLvl) continue;
                arr.push(i);
            }
            returnArr[1] = arr;

            return returnArr;
        }

        //是否可强化  [index,index,....]
        isStrengthReddot() {
            var self = this;
            var returnArr = [];

            var gold = gd.userCtrl.getGold();
            var bag = gd.userCtrl.getBag()||{};
            var cfg_c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var strengthLimit = cfg_c_game[gc.id_c_game.initCfg][2];      //强化上限
            var strengthNum = bag[gc.c_prop.spItemIdKey.intensify]||0;     //拥有强化石数量
            var intensifyArr = self.get(gc.dsConsts.HeroEntity.intensifyArr)||[];
            var equipData = self.get(gc.dsConsts.HeroEntity.equipData)||{};
            for(var i = gc.c_prop.heroEquipIndexKey.weapon;i <= gc.c_prop.heroEquipIndexKey.necklace;i++){
                //筛去特戒
                if(i == gc.c_prop.heroEquipIndexKey.paralysisRing || i == gc.c_prop.heroEquipIndexKey.reviveRing || i == gc.c_prop.heroEquipIndexKey.protectRing || i == gc.c_prop.heroEquipIndexKey.harmRing) continue;
                if(!equipData[i]) continue;
                var strengthLvl = intensifyArr[i]||1;      //当前强化等级
                var costGold = cfg_c_lvl[strengthLvl][gc.c_lvl_equipStrengthGold];
                var costStrengthNum = cfg_c_lvl[strengthLvl][gc.c_lvl_equipStrengthNum];
                if(strengthLvl >= strengthLimit) continue;
                if(gold<costGold) continue;
                if(strengthNum < costStrengthNum) continue;
                returnArr.push(i);
            }

            return returnArr;
        }

        //是否可升星  [index,index,....]
        isUpStarReddot() {
            var self = this;
            var returnArr = [];

            var gold = gd.userCtrl.getGold();
            var bag = gd.userCtrl.getBag()||{};
            var cfg_c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var starTopArr = self.get(gc.dsConsts.HeroEntity.starTopArr) || [];
            var starNum = bag[gc.c_prop.spItemIdKey.starStone]||0;     //拥有升星石数量
            var starArr = self.get(gc.dsConsts.HeroEntity.starArr)||[];
            var equipData = self.get(gc.dsConsts.HeroEntity.equipData)||{};
            for(var i = gc.c_prop.heroEquipIndexKey.weapon;i <= gc.c_prop.heroEquipIndexKey.necklace;i++){
                var starTop = starTopArr[i] || 0;
                var starLimit = parseInt(cfg_c_lvl[starTop][gc.c_lvl_maxUpStarLvl]);     //最大升星数级数
                //筛去特戒
                if(i == gc.c_prop.heroEquipIndexKey.paralysisRing || i == gc.c_prop.heroEquipIndexKey.reviveRing || i == gc.c_prop.heroEquipIndexKey.protectRing || i == gc.c_prop.heroEquipIndexKey.harmRing) continue;
                if(!equipData[i]) continue;
                var starLvl = starArr[i]||1;      //当前升星等级
                var costGold = cfg_c_lvl[starLvl][gc.c_lvl_upStarGold];
                var costStarNum = cfg_c_lvl[starLvl][gc.c_lvl_upStarNum];
                if(starLvl >= starLimit) continue;
                if(gold<costGold) continue;
                if(starNum < costStarNum) continue;
                returnArr.push(i);
            }

            return returnArr;
        }

        //是否可升宝石等级  [index,index,....]
        isUpGemReddot() {
            var self = this;
            var returnArr = [];

            var bag = gd.userCtrl.getBag()||{};
            var cfg_c_gem = mo.getJSONWithFileName(gc.cfg_c_gem);
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var gemArr = self.get(gc.dsConsts.HeroEntity.gemArr)||[];
            var equipData = self.get(gc.dsConsts.HeroEntity.equipData)||{};
            for(var i = gc.c_prop.heroEquipIndexKey.weapon;i <= gc.c_prop.heroEquipIndexKey.necklace;i++){
                //筛去特戒
                if(i == gc.c_prop.heroEquipIndexKey.paralysisRing || i == gc.c_prop.heroEquipIndexKey.reviveRing || i == gc.c_prop.heroEquipIndexKey.protectRing || i == gc.c_prop.heroEquipIndexKey.harmRing) continue;
                if(!equipData[i]) continue;
                var gemInitialIndex = i;
                if(i > 7) gemInitialIndex = i -4;
                var gemId = gemArr[i]||cfg_c_game[gc.id_c_game.gemInitial][gemInitialIndex];
                var gemIdLimit = cfg_c_game[gc.id_c_game.gemLimit][gemInitialIndex];      //宝石id上限
                var itemID = cfg_c_gem[gemId][gc.c_gem_itemID];       //需要宝石碎片id
                var count = cfg_c_gem[gemId][gc.c_gem_count];       //需要宝石碎片数量
                var gemCount = bag[itemID]||0;      //拥有宝石碎片数量
                if(gemId >= gemIdLimit) continue;
                var gemLvl = parseInt(cfg_c_gem[gemId][gc.c_gem_gemLvl]) + 1;       //宝石等级
                var lvl = gd.userCtrl.getLvl();
                var gemLvlLimitStart = parseInt(cfg_c_game[gc.id_c_game.gemLvlLimit][0].split(",")[0]);       //宝石等级限制开始等级
                var isLvl = false;
                if(gemLvl >= gemLvlLimitStart){
                    for(var j = 0; j < cfg_c_game[gc.id_c_game.gemLvlLimit].length;j++){
                        if(parseInt(cfg_c_game[gc.id_c_game.gemLvlLimit][j].split(",")[0]) > gemLvl){
                            if(lvl < parseInt(cfg_c_game[gc.id_c_game.gemLvlLimit][j-1].split(",")[1])) isLvl = true;
                            break;
                        }
                    }
                }
                if(isLvl) continue;
                if(gemCount<count) continue;
                returnArr.push(i);
            }

            return returnArr;
        }

        //获取英雄境界列表 【境界id，  [0,1,2,3,4,5,6]，  可穿戴下标【0,5】，  是否可以升级境界】
        getHeroRealmList(){
            var self = this;
            var listObj = [];
            var num = 0;
            var isUp = 0;
            var indexArr = [];
            var c_realm = mo.getJSONWithFileName(gc.cfg_c_realm);
            var c_compound = mo.getJSONWithFileName(gc.cfg_c_compound);
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var lvl = gd.userCtrl.getLvl();
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var realmLvl = self.get(gc.dsConsts.HeroEntity.realmLvl);
            var realmArr = self.get(gc.dsConsts.HeroEntity.realmArr);
            var reqItems = c_realm[realmLvl][gc.c_realm_reqItems];     //所需符文块
            for(var i = 0; i < reqItems.length; i++){
                if(reqItems[i] == realmArr[i]) num += 1;
                if(realmArr[i] == null || !realmArr[i]){        //判断无装备处背包是否有物品
                    if(bag[reqItems[i]] && bag[reqItems[i]] >= 1){//背包已有
                        if(lvl >= t_item[reqItems[i]][gc.t_item_level]) indexArr.push(i);
                    }else if(gd.heroCtrl.isRuneCom(reqItems[i]) && gd.heroCtrl.canRuneCom(reqItems[i])==1){//需要融合的符文并且能合成
                        if(lvl >= t_item[reqItems[i]][gc.t_item_level]) indexArr.push(i);
                    }
                }
            }
            if(realmArr.length == 6 && num == 6) isUp = 1;
            listObj[0] = realmLvl;
            listObj[1] = realmArr;
            listObj[2] = indexArr;
            listObj[3] = isUp;
            return listObj;
        }

        //获取英雄境界对应位置符文块id
        getHeroRealmRune(index){
            var self = this;
            var c_realm = mo.getJSONWithFileName(gc.cfg_c_realm);
            var getRealmLvl = self.get(gc.dsConsts.HeroEntity.realmLvl);
            var realmLvl = getRealmLvl==0?0:getRealmLvl;
            var runeId = c_realm[realmLvl][gc.c_realm_reqItems][index];     //符文块id
            return runeId;
        }



    }
}