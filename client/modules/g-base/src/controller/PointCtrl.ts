/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class PointCtrl extends mo.DataController {
        _initProp() {
            super._initProp();
        }

        /**
         * 是否显示红点，特效，绿点
         * @param {gc.dsConsts.pointEffectKey|gc.dsConsts.pointRedKey|gc.dsConsts.pointGreenKey} key
         * @returns {boolean}
         */
        isShow(key){
            var self = this;
            var isShow = false;
            var redKey = gc.c_prop.pointRedKey;
            //主红点特殊处理
            switch (key){
                case redKey.home_main:
                    isShow = self._isShow(redKey.arena1)||self._isShow(redKey.copy_boss)||self._isShow(gc.c_prop.pointEffectKey.mail)
                    || self._isShow(gc.c_prop.pointEffectKey.chuanChen)
                    || self._isShow(gc.c_prop.pointEffectKey.custom)
                    || self._isShow(gc.c_prop.pointEffectKey.medal);
                    break;
                case redKey.role_main:
                    isShow = self.isShow(redKey.role1_main)||self.isShow(redKey.role2_main)||self.isShow(redKey.role3_main)||self.isShow(redKey.role4_main);
                    break;
                case redKey.make_main:
                    isShow = self.isShow(redKey.role1_dazao)||self.isShow(redKey.role2_dazao)||self.isShow(redKey.role3_dazao);
                    break;
                case redKey.role1_main:
                    isShow = self._isShowByKeys([gc.c_prop.pointRedKey.role1_equip,gc.c_prop.pointRedKey.role1_tring,redKey.role1_wing,redKey.role1_skill,redKey.role1_realm]);
                    break;
                case redKey.role2_main:
                    isShow = self._isShowByKeys([gc.c_prop.pointRedKey.role2_equip,gc.c_prop.pointRedKey.role2_tring,redKey.role2_wing,redKey.role2_skill,redKey.role2_realm]);
                    break;
                case redKey.role3_main:
                    isShow = self._isShowByKeys([gc.c_prop.pointRedKey.role3_equip,gc.c_prop.pointRedKey.role3_tring,redKey.role3_wing,redKey.role3_skill,redKey.role3_realm]);
                    break;
                case redKey.role4_main:
                    isShow = self._isShowByKeys([gc.c_prop.pointRedKey.role4_equip,redKey.role4_skill]);
                    break;
                case redKey.role1_dazao:
                    isShow = self._isShowByKeys([redKey.role1_intensify,redKey.role1_star,redKey.role1_gem]);
                    break;
                case redKey.role2_dazao:
                    isShow = self._isShowByKeys([redKey.role2_intensify,redKey.role2_star,redKey.role2_gem]);
                    break;
                case redKey.role3_dazao:
                    isShow = self._isShowByKeys([redKey.role3_intensify,redKey.role3_star,redKey.role3_gem]);
                    break;
                case redKey.demonLotus_main:
                    isShow = self._isShowByKeys([redKey.demonLotus_1,redKey.demonLotus_2]);
                    break;
                default :
                    isShow = self._isShow(key);
                    break;
            }
            return isShow;
        }

        private _isShow(key){
            var pointData = userCtrl.get(gc.dsConsts.UserEntity.redPointData);
            if(pointData[key]) return true;
            return false;
        }

        private _isShowByKeys(keys){
            for(var i = 0;i<keys.length;i++){
                var locKey = keys[i];
                if(this._isShow(locKey)) return true;
            }
            return false;
        }

        /**
         * 获取数据
         * @param key
         * @returns {Array}
         */
        getShowData(key){
            return [];
        }

        /**
         * 计算红点
         * @param key
         */
        cal(key){
            var self = this;
            var setShow = function(reIsShow){
                var pointData = userCtrl.get(gc.dsConsts.UserEntity.redPointData);
                pointData[key] = reIsShow;
                userCtrl.set(gc.dsConsts.UserEntity.redPointData,pointData);
                mo.emitter.emit("onRed");
            };
            switch (key){
                case gc.c_prop.pointEffectKey.activity:
                    var isShow = activityCtrl.isPointEffect();
                    setShow(isShow);
                    break;
                case gc.c_prop.pointEffectKey.task:
                    var isShow = taskCtrl.isTaskReddot()[0]||taskCtrl.isTaskReddot()[1];
                    setShow(isShow);
                    break;
                case gc.c_prop.pointEffectKey.sign:
                    var isShow = !signCtrl.isTodaySigned();
                    setShow(isShow);
                    break;
                case gc.c_prop.pointEffectKey.bag:
                    //判断装备背包是否满（return false/ture）   UserCtrl   isEquipBagReddot()
                    var isShow = userCtrl.isSmeltReddot();
                    setShow(isShow);
                    break;
                case gc.c_prop.pointEffectKey.mail:
                    mailCtrl.isNeedOperate(setShow,self);
                    break;
                case gc.c_prop.pointEffectKey.recharge:
                    var isShow = activityCtrl.hasRecharged()&&!activityCtrl.hasReceiveFirstRecharge();
                    setShow(isShow);
                    break;
                case gc.c_prop.pointEffectKey.chuanChen:
                    var isShow = gd.equipCtrl.getSpecialEquipDot().indexOf(1) >= 0;
                    setShow(isShow);
                    break;
                case gc.c_prop.pointEffectKey.custom:
                    var isShow = gd.customCtrl.isCustomRed();
                    setShow(isShow);
                    break;
                case gc.c_prop.pointEffectKey.medal:
                    var isShow = gd.medalCtrl.isMedalRed();
                    setShow(isShow);
                    break;
                case gc.c_prop.pointRedKey.pkout1:
                    var isShow = pkOutCtrl.hasNewDeal();
                    setShow(isShow);
                    break;
                case gc.c_prop.pointRedKey.arena1:
                    var isShow = arenaCtrl.getData() &&arenaCtrl.getRePKNum()>0;
                    setShow(isShow);
                    break;
                case gc.c_prop.pointRedKey.role1_wing:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(0);
                    if(heroEntityCtrl){
                        //可以开启未激活 或者 已经开启并且有翅膀没最高级
                        var isShow = (heroEntityCtrl.isWingOpen()&&!heroEntityCtrl.isWingActived()) || (heroEntityCtrl.isWingActived()&&userCtrl.getItemNum(gc.c_prop.spItemIdKey.plumage)>0&&!heroEntityCtrl.isWingLimit());
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role1_equip:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(0);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isEquipReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role1_tring:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(0);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isTringReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role2_tring:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(1);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isTringReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role3_tring:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isTringReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role1_skill:
                    //判断技能是否可以升级的接口，金币达到，cd没有的时候（return  [index,index,...]）   HeroEntityCtrl   isSkillReddot()
                   /* var heroEntityCtrl = heroCtrl.getHeroByIndex(0);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isSkillReddot().length>0;
                        setShow(isShow);
                    }*/
                    break;
                case gc.c_prop.pointRedKey.role1_realm:
                    //判断境界是否可以穿戴或者升级（return  [是否可升级(false,true),[穿戴下标index,index,...]]）   HeroEntityCtrl   isStateReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(0);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.getHeroRealmList()[3]==true||heroEntityCtrl.getHeroRealmList()[2].length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role1_intensify:
                    //是否可强化（return  [index,index,....]）   HeroEntityCtrl   isStrengthReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(0);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isStrengthReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role1_star:
                    //是否可升星（return  [index,index,....]）   HeroEntityCtrl   isUpStarReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(0);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isUpStarReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role1_gem:
                    //是否可升宝石等级（return [index,index,....]）   HeroEntityCtrl   isUpGemReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(0);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isUpGemReddot().length>0;
                        setShow(isShow);
                    }
                    break;

                case gc.c_prop.pointRedKey.role2_wing:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(1);
                    if(heroEntityCtrl){
                        //可以开启未激活 或者 已经开启并且有翅膀没最高级
                        var isShow = (heroEntityCtrl.isWingOpen()&&!heroEntityCtrl.isWingActived()) || (heroEntityCtrl.isWingActived()&&userCtrl.getItemNum(gc.c_prop.spItemIdKey.plumage)>0&&!heroEntityCtrl.isWingLimit());
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role2_equip:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(1);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isEquipReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role2_skill:
                    //判断技能是否可以升级的接口，金币达到，cd没有的时候（return  [index,index,...]）   HeroEntityCtrl   isSkillReddot()
                   /* var heroEntityCtrl = heroCtrl.getHeroByIndex(1);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isSkillReddot().length>0;
                        setShow(isShow);
                    }*/
                    break;
                case gc.c_prop.pointRedKey.role2_realm:
                    //判断境界是否可以穿戴或者升级（return  [是否可升级(false,true),[穿戴下标index,index,...]]）   HeroEntityCtrl   isStateReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(1);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.getHeroRealmList()[3]==true||heroEntityCtrl.getHeroRealmList()[2].length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role2_intensify:
                    //是否可强化（return  [index,index,....]）   HeroEntityCtrl   isStrengthReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(1);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isStrengthReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role2_star:
                    //是否可升星（return  [index,index,....]）   HeroEntityCtrl   isUpStarReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(1);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isUpStarReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role2_gem:
                    //是否可升宝石等级（return [index,index,....]）   HeroEntityCtrl   isUpGemReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(1);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isUpGemReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role3_wing:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                    if(heroEntityCtrl){
                        //可以开启未激活 或者 已经开启并且有翅膀没最高级
                        var isShow = (heroEntityCtrl.isWingOpen()&&!heroEntityCtrl.isWingActived()) || (heroEntityCtrl.isWingActived()&&userCtrl.getItemNum(gc.c_prop.spItemIdKey.plumage)>0&&!heroEntityCtrl.isWingLimit());
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role3_equip:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isEquipReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role3_skill:
                    //判断技能是否可以升级的接口，金币达到，cd没有的时候（return  [index,index,...]）   HeroEntityCtrl   isSkillReddot()
                    /*var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isSkillReddot().length>0;
                        setShow(isShow);
                    }*/
                    break;
                case gc.c_prop.pointRedKey.role3_realm:
                    //判断境界是否可以穿戴或者升级（return  [是否可升级(false,true),[穿戴下标index,index,...]]）   HeroEntityCtrl   isStateReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.getHeroRealmList()[3]==true||heroEntityCtrl.getHeroRealmList()[2].length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role3_intensify:
                    //是否可强化（return  [index,index,....]）   HeroEntityCtrl   isStrengthReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isStrengthReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role3_star:
                    //是否可升星（return  [index,index,....]）   HeroEntityCtrl   isUpStarReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isUpStarReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role3_gem:
                    //是否可升宝石等级（return [index,index,....]）   HeroEntityCtrl   isUpGemReddot()
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isUpGemReddot().length>0;
                        setShow(isShow);
                    }
                    break;

                case gc.c_prop.pointRedKey.role4_equip:
                    var heroEntityCtrl = heroCtrl.getHeroByIndex(3);
                    if(heroEntityCtrl){
                        var isShow = heroEntityCtrl.isEquipReddot().length>0;
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.role4_skill:
                    //判断技能是否可以升级的接口，金币达到，cd没有的时候（return  [index,index,...]）   HeroEntityCtrl   isSkillReddot()
                    /*var heroEntityCtrl = heroCtrl.getHeroByIndex(2);
                     if(heroEntityCtrl){
                     var isShow = heroEntityCtrl.isSkillReddot().length>0;
                     setShow(isShow);
                     }*/
                    break;

                case gc.c_prop.pointRedKey.copy_boss:
                    copyCtrl.isCanStartHell(setShow,self);
                    break;

                case gc.c_prop.pointRedKey.rankPk:
                    var isShow = pkOutCtrl.hasRankPkNewDeal();
                    setShow(isShow);
                    break;

                case gc.c_prop.pointRedKey.bePkKill:
                    var isShow = pkOutCtrl.isBePkKill();
                    setShow(isShow);
                    break;
                case gc.c_prop.pointRedKey.shopMain:
                    //获取商店红点
                    var shopEquipReddot = shopCtrl.isShopEquipReddot();
                    var isShow = shopEquipReddot.length>0;
                    setShow(isShow);
                    break;
                case gc.c_prop.pointRedKey.fuli:
                    var isShow = activityCtrl.isFuliPointEffect();
                    setShow(isShow);
                    break;

                case gc.c_prop.pointGreenKey.copy_equip:
                    copyCtrl.hasNotReadEquip(gc.c_prop.copyTypeKey.equip,setShow,self);
                    break;
                case gc.c_prop.pointGreenKey.copy_realm:
                    copyCtrl.hasNotReadEquip(gc.c_prop.copyTypeKey.state,setShow,self);
                    break;
                case gc.c_prop.pointGreenKey.copy_boss:
                    copyCtrl.hasNotReadEquip(gc.c_prop.copyTypeKey.hell,setShow,self);
                    break;

                case gc.c_prop.pointGreenKey.role1_skill:
                    //todo
                    break;
                case gc.c_prop.pointGreenKey.role1_realm:
                    //todo
                    break;
                case gc.c_prop.pointGreenKey.role2_skill:
                    //todo
                    break;
                case gc.c_prop.pointGreenKey.role2_realm:
                    //todo
                    break;
                case gc.c_prop.pointGreenKey.role3_skill:
                    //todo
                    break;
                case gc.c_prop.pointGreenKey.role3_realm:
                    //todo
                    break;
                case gc.c_prop.pointRedKey.demonLotus_1:
                    if(demonLotusCtrl.getData()){
                        var isShow = demonLotusCtrl.isMaxExpc();
                        setShow(isShow);
                    }
                    break;
                case gc.c_prop.pointRedKey.demonLotus_2:
                    if(demonLotusCtrl.getData()){
                        var isShow = demonLotusCtrl.isCanTrain();
                        setShow(isShow);
                    }
                    break;
            }
        }

        calAll(){
            var self = this;
            for(var key in gc.c_prop.pointEffectKey){
                var locValue = gc.c_prop.pointEffectKey[key];
                self.cal(locValue);
            }
            for(var key in gc.c_prop.pointRedKey){
                var locValue = gc.c_prop.pointRedKey[key];
                self.cal(locValue);
            }
            for(var key in gc.c_prop.pointGreenKey){
                var locValue = gc.c_prop.pointGreenKey[key];
                self.cal(locValue);
            }
        }
    }
    export var pointCtrl:PointCtrl = PointCtrl.getInstance();
}