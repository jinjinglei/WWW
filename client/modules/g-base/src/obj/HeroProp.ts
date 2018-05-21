/**
 * Created by Administrator on 2015/9/17.
 */
module gd {
    export class HeroProp {
        maxHp :number = 1000;//[1]生命
        maxHpScale :number = 200;//[2]生命加成
        attack :number = 100;//[3]攻击
        attackScale :number = 100; //[4]攻击加成
        defence :number = 100; //[5]物防
        defenceScale :number = 100;//[6]物防加成
        magicDefence :number = 100;//[7]魔防
        magicDefenceScale :number = 100; //[8]魔防加成
        hit :number = 100; //[9]命中
        hitScale :number = 100; //[10]命中加成
        dodge :number = 100; //[11]闪避
        dodgeScale :number = 100; //[12]闪避加成
        critical :number = 100; //[13]暴击
        criticalScale :number = 100; //[14]暴击加成
        disCritical :number = 100; //[15]抗暴
        disCriticalScale :number = 100; //[16]抗暴加成
        luckyValue :number = 100;//[17]
        luckyValueScale :number = 100;//[18]
        moveSpeed :number = 150;//[19]移动速度
        moveSpeedScale :number = 0; //[20]移动速度加成
        attackInterval :number = 100;//[21]攻击频率
        attackIntervalScale :number = 100;//[22]攻击频率加成
        damageIncrease :number = 100;//[23]伤害加深
        damageDecrease :number = 100; //[24]伤害减免
        benumbPro :number = 100; //[25]麻痹
        disBenumbPro :number = 100;//[26]抗麻痹
        poisoningRecoveryProb :number = 100;//[27]
        benumbProSpan :number = 100; //[28]麻痹时长
        reviveCount :number = 100; //[29]复活次数
        reviveHPScale :number = 100;//[30]复活HP%
        maxHp2 :number = 100; //[31]抗护身
        disMaxHp2 :number = 100; //[32]抗护身概率
        maxHpTemp :number = 100; //[33]生命
        attackTemp :number = 100;//[34]攻击
        defenceTemp :number = 100;//[35]物防
        magicDefenceTemp :number = 100; //[36]法防
        hitTemp :number = 100; //[37]命中
        dodgeTemp :number = 100; //[38]闪避
        criticalTemp :number = 100;//[39]暴击
        disCriticalTemp :number = 100; //[40]抗暴
        luckyValueTemp :number = 100; //[41]
        moveSpeedTemp :number = 0;//[42]移动速度
        attackIntervalTemp :number = 100;//[43]攻击频率
        damageIncreaseTemp :number = 100;//[44]伤害加成
        damageDecreaseTemp :number = 100;//[45]伤害减免
        property_index_max :number = 46;//[46]
    }
}