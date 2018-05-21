/**
 * Created by Administrator on 2015/9/22.
 */

module gd {
    export class HeroUtils {
        //添加属性
        addPropValue(prop:HeroProp,key,value){
            switch (key){
                case gc.c_prop.heroPropKey.maxHp:
                    prop.maxHp+=value;
                    break;
                case gc.c_prop.heroPropKey.maxHpScale:
                    prop.maxHpScale+=value;
                    break;
                case gc.c_prop.heroPropKey.attack:
                    prop.attack+=value;
                    break;
                case gc.c_prop.heroPropKey.attackScale:
                    prop.attackScale+=value;
                    break;
                case gc.c_prop.heroPropKey.defence:
                    prop.defence+=value;
                    break;
                case gc.c_prop.heroPropKey.defenceScale:
                    prop.defenceScale+=value;
                    break;
                case gc.c_prop.heroPropKey.magicDefence:
                    prop.magicDefence+=value;
                    break;
                case gc.c_prop.heroPropKey.magicDefenceScale:
                    prop.magicDefenceScale+=value;
                    break;
                case gc.c_prop.heroPropKey.hit:
                    prop.hit+=value;
                    break;
                case gc.c_prop.heroPropKey.hitScale:
                    prop.hitScale+=value;
                    break;
                case gc.c_prop.heroPropKey.dodge:
                    prop.dodge+=value;
                    break;
                case gc.c_prop.heroPropKey.dodgeScale:
                    prop.dodgeScale+=value;
                    break;
                case gc.c_prop.heroPropKey.critical:
                    prop.critical+=value;
                    break;
                case gc.c_prop.heroPropKey.criticalScale:
                    prop.criticalScale+=value;
                    break;
                case gc.c_prop.heroPropKey.disCritical:
                    prop.disCritical+=value;
                    break;
                case gc.c_prop.heroPropKey.disCriticalScale:
                    prop.disCriticalScale+=value;
                    break;
                case gc.c_prop.heroPropKey.luckyValue:
                    prop.luckyValue+=value;
                    break;
                case gc.c_prop.heroPropKey.luckyValueScale:
                    prop.luckyValueScale+=value;
                    break;
                case gc.c_prop.heroPropKey.moveSpeed:
                    prop.moveSpeed+=value;
                    break;
                case gc.c_prop.heroPropKey.moveSpeedScale:
                    prop.moveSpeedScale+=value;
                    break;
                case gc.c_prop.heroPropKey.attackInterval:
                    prop.attackInterval+=value;
                    break;
                case gc.c_prop.heroPropKey.attackIntervalScale:
                    prop.attackIntervalScale+=value;
                    break;
                case gc.c_prop.heroPropKey.damageIncrease:
                    prop.damageIncrease+=value;
                    break;
                case gc.c_prop.heroPropKey.damageDecrease:
                    prop.damageDecrease+=value;
                    break;
                case gc.c_prop.heroPropKey.benumbPro:
                    prop.benumbPro+=value;
                    break;
                case gc.c_prop.heroPropKey.disBenumbPro:
                    prop.disBenumbPro+=value;
                    break;
                case gc.c_prop.heroPropKey.poisoningRecoveryProb:
                    prop.poisoningRecoveryProb+=value;
                    break;
                case gc.c_prop.heroPropKey.benumbProSpan:
                    prop.benumbProSpan+=value;
                    break;
                case gc.c_prop.heroPropKey.reviveCount:
                    prop.reviveCount+=value;
                    break;
                case gc.c_prop.heroPropKey.reviveHPScale:
                    prop.reviveHPScale+=value;
                    break;
                case gc.c_prop.heroPropKey.maxHp2:
                    prop.maxHp2+=value;
                    break;
                case gc.c_prop.heroPropKey.disMaxHp2:
                    prop.disMaxHp2+=value;
                    break;
                case gc.c_prop.heroPropKey.maxHpTemp:
                    prop.maxHpTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.attackTemp:
                    prop.attackTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.defenceTemp:
                    prop.defenceTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.magicDefenceTemp:
                    prop.magicDefenceTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.hitTemp:
                    prop.hitTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.dodgeTemp:
                    prop.dodgeTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.criticalTemp:
                    prop.criticalTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.disCriticalTemp:
                    prop.disCriticalTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.luckyValueTemp:
                    prop.luckyValueTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.moveSpeedTemp:
                    prop.moveSpeedTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.attackIntervalTemp:
                    prop.attackIntervalTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.damageIncreaseTemp:
                    prop.damageIncreaseTemp+=value;
                    break;
                case gc.c_prop.heroPropKey.damageDecreaseTemp:
                    prop.damageDecreaseTemp+=value;
                    break;
            }
        }
        getPropValue(prop:HeroProp,key,value){

        }
    }
    export var heroUtils:HeroUtils = new HeroUtils();
}