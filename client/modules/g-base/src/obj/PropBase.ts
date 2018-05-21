/**
 * Created by Administrator on 2015/9/18.
 */
module g_base{
    export class PropBase extends  egret.EventDispatcher{
        public static MAX_PROP:number = 47;
        public static Scale_Num:number = 10000;
        public static BehaviorPhysics:number = 1;
        public static BehaviorMagic:number = 2;
        public static BehaviorTaoism:number = 3;
        private static percentProps:Array<number> = [2,4,6,8,10,12,14,16,20,22,23,24,25,26,30,31,42,43,44,45,46];
        public static isPercentProp(prop:number):boolean{
            return PropBase.percentProps.indexOf(prop)!=-1;
        }

        protected curProps:Array<number>=[];
        protected buffProps:Array<number>=[];

        constructor(){
            super();
            for(var i=1; i<PropBase.MAX_PROP;++i){
                this.curProps[i] = 0;
                this.buffProps[i] = 0;
            }
        }

        public setHeroProp(props:Array<number>):void{
            this.curProps = props.concat();
        }
        public setMonsterInfo(monsterInfo):void{
            this.curProps[1] = monsterInfo[gc.t_monster_maxHp];
            this.curProps[3] = monsterInfo[gc.t_monster_attack];
            this.curProps[5] = monsterInfo[gc.t_monster_defense];
            this.curProps[7] = monsterInfo[gc.t_monster_magicDefence];
            this.curProps[9] = monsterInfo[gc.t_monster_hit];
            this.curProps[11] = monsterInfo[gc.t_monster_dodge];
            this.curProps[13] = monsterInfo[gc.t_monster_critical];
            this.curProps[15] = monsterInfo[gc.t_monster_disCritical];
            this.curProps[19] = monsterInfo[gc.t_monster_moveSpeed];
            this.curProps[21] = monsterInfo[gc.t_monster_attackTime];
            this.curProps[23] = monsterInfo[gc.t_monster_damageIncrease];
            this.curProps[24] = monsterInfo[gc.t_monster_damageDecrease];
            this.curProps[25] = monsterInfo[gc.t_monster_benumbPro];
            this.curProps[26] = monsterInfo[gc.t_monster_disBenyumbPro];
            this.curProps[28] = monsterInfo[gc.t_monster_benumbPro];
        }

        public setPropByIndex(index:number, value:number):void{
            this.curProps[index] = value;
        }
        public getPropByIndex(index:number):number{
            return this.curProps[index];
        }
        public setBuffPropByIndex(index:number, value:number):void{
            this.buffProps[index] = value;
        }
        public getBuffPropByIndex(index:number):number{
            return this.buffProps[index];
        }
        public getCurAndBuffPropByIndex(index:number):number{
            return this.getPropByIndex(index)+this.getBuffPropByIndex(index);
        }

        private getFightPropByIndex(baseIndex:number, scaleIndex:number, tempScale:number):number{
            return Math.floor(this.getCurAndBuffPropByIndex(baseIndex)*(1+this.getCurAndBuffPropByIndex(scaleIndex)/PropBase.Scale_Num)+this.getCurAndBuffPropByIndex(tempScale));
        }

        public get maxHpFight() :number
        {
            return this.getFightPropByIndex(1,2,33);
        }
        public get attackFight():number{
            return this.getFightPropByIndex(3,4,34);
        }
        public get defenceFight():number{
            return this.getFightPropByIndex(5,6,35);
        }
        public get magicDefenceFight() :number{
            return this.getFightPropByIndex(7,8,36);
        }
        public get hitFight():number{
            return this.getFightPropByIndex(9,10,37);
        }
        public get dodgeFight():number{
            return this.getFightPropByIndex(11,12,38);
        }
        public get criticalFight():number{
            return this.getFightPropByIndex(13,14,39);
        }
        public get disCriticalFight():number{
            return this.getFightPropByIndex(15,16,40);
        }
        public get luckyValueFight():number{
            return this.getFightPropByIndex(17,18,41);
        }
        public get moveSpeedFight():number{
            return this.getFightPropByIndex(19,20,42);
        }
        public get attackIntervalFight():number{
            return this.getFightPropByIndex(21,22,43);
        }
        public get damageIncreaseFight():number{
            var b = this.getCurAndBuffPropByIndex(23) + this.getCurAndBuffPropByIndex(44);
            b = b / PropBase.Scale_Num;
            return b = Math.floor(100 * b) / 100;
        }
        public get damageDecreaseFight():number{
            var b = this.getCurAndBuffPropByIndex(24) + this.getCurAndBuffPropByIndex(45);
            b = b / PropBase.Scale_Num;
            return b = Math.floor(100 * b) / 100;
        }
        public get benumbProFight() :number //[25]麻痹
        {
            return this.getPropByIndex(25) / PropBase.Scale_Num;
        }
        public get disBenumbProFight() :number //[26]抗麻痹
        {
            return this.getPropByIndex(26) / PropBase.Scale_Num;
        }
        //poisoningRecoveryProb :number = 0;//[27]
        public get benumbProSpanFight() :number //[28]麻痹时长
        {
            return this.getPropByIndex(28);
        }
        public get reviveCountFight() :number //[29]复活次数
        {
            return this.getPropByIndex(29);
        }
        public get reviveHPScaleFight() :number //[30]复活HP%
        {
            return this.getPropByIndex(30) / PropBase.Scale_Num;
        }
        public get maxHp2Fight() :number //[31]抗护身
        {
            var b = this.maxHpFight;
            return b = b * this.getPropByIndex(31) / PropBase.Scale_Num;
        }
        //public get disMaxHp2Fight() :number //[32]抗护身概率
        //{
        //    return this.getPropByIndex(32) / PropBase.Scale_Num;
        //}
        public get invincibleTimeFight() :number //[32]复活之后无敌时间
        {
            return this.getPropByIndex(32);
        }
        public get penetrateFight():number //[46]破盾比例
        {
            return this.getPropByIndex(46) / PropBase.Scale_Num;
        }

        public isHitSucc(dodgeFightTarget:number) {//是否命中成功，b对方的闪避
            var rate = this.hitFight / (this.hitFight + dodgeFightTarget);
            return Math.random()<=rate;
        }

        public isCritical = function (disCriticalFightTarget:number) {//是否暴击，b对方的抗暴
            var rate = this.criticalFight / (this.criticalFight + disCriticalFightTarget);
            return Math.random()<=rate;
        }
        public getCritDamage(disCriticalFightTarget:number) {//获取暴击伤害，b对方的抗爆
            return this.criticalFight / (this.criticalFight + disCriticalFightTarget) * 3;
        }

        public isBenumbProSucc(disBenumbProFightTarget:number) {//是否麻痹成功，b对方抗麻痹
            if(Math.random()<=disBenumbProFightTarget)//先判断是否被对方抵抗掉
                return false;
            return Math.random()<=this.benumbProFight;
        }

        //public isDisHp2Succ(maxHp2FightTarget:number) {//是否抗护身成功，b对方maxHp2Fight
        //    if (0 == maxHp2FightTarget)
        //        return true;
        //    return Math.random()<=this.disMaxHp2Fight;
        //}

        public getDefence(attackType:number, roleLevel:number, attack:number) {//获取防御，attackType攻击者的攻击行为， roleLevel攻击者等级
            //var def = 0;
            //roleLevel = 1;
            //def = attackType == PropBase.BehaviorPhysics ? this.defenceFight : attackType == PropBase.BehaviorMagic ? this.magicDefenceFight : (this.magicDefenceFight + this.defenceFight) / 2;
            //var curDef = 20000 >= def ? 0.002 * def / (1 + 0.8 * roleLevel + 0.002 * def) : 40 / (0.8 * roleLevel + 41) + 0.001 * (def - 20000) / (1 + 0.8 * roleLevel + 0.001 * (def - 20000));
            //
            //curDef = curDef > 0.9 ? 0.9 : curDef;
            //return curDef;

            var def = attackType == PropBase.BehaviorPhysics ? this.defenceFight : attackType == PropBase.BehaviorMagic ? this.magicDefenceFight : (this.magicDefenceFight + this.defenceFight) / 2;
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

        //public getPVPDefine(attackType:number, roleLevel:number) {//获取防御，b攻击者的攻击行为， a攻击者等级
        //    var e = 0;
        //    return e = attackType == PropBase.BehaviorPhysics ? 0.004 * this.defenceFight / (1 + 10 * roleLevel + 0.004 * this.defenceFight) : attackType == PropBase.BehaviorMagic ? 0.004 * this.magicDefenceFight / (1 + 10 * roleLevel + 0.004 *
        //    this.magicDefenceFight) : 0.002 * (this.defenceFight + this.magicDefenceFight) / (1 + 10 * roleLevel + 0.002 * (this.defenceFight + this.magicDefenceFight));
        //}
    }
}