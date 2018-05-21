/**
 * Created by Sara on 2015/9/18.
 */

module gd {
    export class EquipCtrl extends mo.DataController {

        public static ON_WEAR_PAR_RING:string = "ON_WEAR_PAR_RING"; //装备特戒
        public static ON_BREAK_PAR_RING:string = "ON_BREAK_PAR_RING"; //特戒突破
        public static ON_BREAK_MERGED:string = "ON_BREAK_MERGED"; //特戒合成
        public static ON_SMELT:string = "ON_SMELT"; //熔炼完成
        public static ON_BATCH_SMELT:string = "ON_BATCH_SMELT"; //批量熔炼完成
        public static ON_INHERITED:string = "ON_INHERITED"; //传承完成

        _partTypeMap;

        _initProp() {
            super._initProp();
            var self = this;
            var equipTypeKey = gc.c_prop.equipTypeKey;
            var partIndexKey = gc.c_prop.heroEquipIndexKey;
            self._partTypeMap = {};
            self._partTypeMap[partIndexKey.weapon]=equipTypeKey.weapon;
            self._partTypeMap[partIndexKey.clothes]= equipTypeKey.clothes;
            self._partTypeMap[partIndexKey.bracelet1]= equipTypeKey.bracelet;
            self._partTypeMap[partIndexKey.ring1]= equipTypeKey.ring;
            self._partTypeMap[partIndexKey.paralysisRing]= equipTypeKey.ring;
            self._partTypeMap[partIndexKey.reviveRing]= equipTypeKey.ring;
            self._partTypeMap[partIndexKey.protectRing]= equipTypeKey.ring;
            self._partTypeMap[partIndexKey.harmRing]=equipTypeKey.ring;
            self._partTypeMap[partIndexKey.ring2]= equipTypeKey.ring;
            self._partTypeMap[partIndexKey.bracelet2]= equipTypeKey.bracelet;
            self._partTypeMap[partIndexKey.helmet]=equipTypeKey.helmet;
            self._partTypeMap[partIndexKey.necklace]=equipTypeKey.necklace;
        }

        //获取熔炉装备id  [id,id,id...]  isRetain:是否保留未开启职业最高评分  0：不开启 1：开启
        getSmeltArr(isRetain,choColor?){
            var self = this;
            var returnArr = [];
            var smeltArr = [];
            var equipBag = {};
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            var lvl = gd.userCtrl.getLvl();
            var getEquipBag = gd.userCtrl.getEquipBag();       //装备背包 {"1":[物品id,[随到的属性值],评价,是否穿戴],...}  "1":指定id,累加上去的
            for(key in getEquipBag){
                equipBag[key] = getEquipBag[key];
            }
            var heroMap = gd.heroCtrl.getHeroMap();     //{"id":heroEntityCtrl,"id":heroEntityCtrl,..}      {"部位":物品id,....}
            var tempIdArr = [];
            for(var key in heroMap){
                tempIdArr.push(heroMap[key].get(gc.dsConsts.HeroEntity.tempId))
            }
            //去除每个部位评价最高装备
            var maxArr = [[],[],[],[],[],[]];     //【【评分，装备id】,【评分，装备id】,【评分，装备id】】 下标 0：战士 1：法师 2：道士
            for(var key in equipBag){
                //if(t_itemEquip[equipBag[key][0]][gc.t_itemEquip_isUp] == 1){
                //    delete equipBag[key];
                //    continue;
                //}
                var part = t_itemEquip[equipBag[key][0]][gc.t_itemEquip_type];        //部位
                var profession = t_itemEquip[equipBag[key][0]][gc.t_itemEquip_job];        //职业
                switch (part){
                    case gc.c_prop.equipTypeKey.weapon:        //武器
                        this._equipProfession(profession,maxArr[0],key,isRetain,tempIdArr,equipBag,t_item,lvl,part);
                        break;
                    case gc.c_prop.equipTypeKey.clothes:        //衣服
                        this._equipProfession(profession,maxArr[1],key,isRetain,tempIdArr,equipBag,t_item,lvl,part);
                        break;
                    case gc.c_prop.equipTypeKey.bracelet:        //手镯
                        this._equipProfession(profession,maxArr[2],key,isRetain,tempIdArr,equipBag,t_item,lvl,part);
                        break;
                    case gc.c_prop.equipTypeKey.ring:        //戒指
                        this._equipProfession(profession,maxArr[3],key,isRetain,tempIdArr,equipBag,t_item,lvl,part);
                        break;
                    case gc.c_prop.equipTypeKey.helmet:        //头盔
                        this._equipProfession(profession,maxArr[4],key,isRetain,tempIdArr,equipBag,t_item,lvl,part);
                        break;
                    case gc.c_prop.equipTypeKey.necklace:        //项链
                        this._equipProfession(profession,maxArr[5],key,isRetain,tempIdArr,equipBag,t_item,lvl,part);
                        break;
                }
            }
            for(var i = 0;i<maxArr.length;i++){     //部位
                for(var i1 = 0;i1<maxArr[i].length;i1++){       //职业
                    if(maxArr[i][i1] != null){
                        if(maxArr[i][i1][0][1]) delete equipBag[maxArr[i][i1][0][1]];
                        if(maxArr[i][i1][0][3]) delete equipBag[maxArr[i][i1][0][3][1]];
                        for(var i2 = 0;i2<maxArr[i][i1][1].length;i2++){
                            //delete equipBag[maxArr[i][i1][1][i2][1]];
                            if(maxArr[i][i1][1][i2] && maxArr[i][i1][1][i2][1]) delete equipBag[maxArr[i][i1][1][i2][1]];
                            if(maxArr[i][i1][1][i2] && maxArr[i][i1][1][i2][3]) delete equipBag[maxArr[i][i1][1][i2][3][1]];
                        }
                    }
                }
            }
            //去除已装备的装备
            for(var key in heroMap){
                var equipData = heroMap[key].get(gc.dsConsts.HeroEntity.equipData);     //{"部位":物品id,....}
                for(var key1 in equipData){
                    delete equipBag[equipData[key1]];
                }
            }
            //[id,品质,等级]
            for(var key in equipBag){
                if(!equipBag[key][3] && t_itemEquip[equipBag[key][0]][gc.t_itemEquip_isUp] != 1 && equipBag[key][0]<900001) {
                    var s_lock = equipBag[key][6];
                    var item_id = equipBag[key][0];
                    if(!self._isLocked(s_lock,t_itemEquip[item_id])) {
                        //未锁定的装备
                        smeltArr.push([key, t_item[item_id][gc.t_item_color], t_item[item_id][gc.t_item_level], 0]);
                    }
                }
            }

            if(choColor){
                for(var i = 0;i<smeltArr.length;i++){
                    if(smeltArr[i][1] == choColor) returnArr.push(smeltArr[i][0]);
                }
                return returnArr;
            }else{
                smeltArr = sortEquipList(smeltArr);
                var length = smeltArr.length<9?smeltArr.length:9;
                for(var i = 0;i<length;i++){
                    returnArr.push(smeltArr[i][0]);
                }
                return returnArr;
            }
        }

        _isLocked(s_lock,itemInfo){
            var islock = 0;
            if(s_lock == undefined){
                //server端未记录到是否已锁定.根据配表决定
                if(itemInfo && itemInfo[gc.t_itemEquip_isLocked]){
                    islock = itemInfo[gc.t_itemEquip_isLocked];
                }
            }else{
                islock = s_lock;
            }
            return islock;
        }

        //筛选职业
        _equipProfession(profession,weaponMax,key,isRetain,tempIdArr,equipBag,t_item,lvl,part){      //weaponMax     []
            key = parseInt(key);
            var quality = parseInt(equipBag[key][2]);
            var isEquip = parseInt(equipBag[key][3]);
            var needLvl = parseInt(t_item[equipBag[key][0]][gc.t_item_level]);
            var index = needLvl==1?0:(parseInt(needLvl.toString().substring(0,needLvl.toString().length-1)));
            if(isRetain == 1) {
                if (profession == gc.c_prop.heroJobKey.zs) {       //战士
                    this._equipScreen(0,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag)
                }
                if (profession == gc.c_prop.heroJobKey.fs) {       //法师
                    this._equipScreen(1,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag)
                }
                if (profession == gc.c_prop.heroJobKey.ds) {       //道士
                    this._equipScreen(2,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag)
                }
                if (profession == gc.c_prop.heroJobKey.ys) {       //妖士
                    this._equipScreen(3,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag)
                }
            }else{
                if (profession == gc.c_prop.heroJobKey.zs && tempIdArr.indexOf(profession) != -1) {       //战士
                    this._equipScreen(0,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag)
                }
                if (profession == gc.c_prop.heroJobKey.fs && tempIdArr.indexOf(profession) != -1) {       //法师
                    this._equipScreen(1,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag)
                }
                if (profession == gc.c_prop.heroJobKey.ds && tempIdArr.indexOf(profession) != -1) {       //道士
                    this._equipScreen(2,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag)
                }
                if (profession == gc.c_prop.heroJobKey.ys && tempIdArr.indexOf(profession) != -1) {       //妖士
                    this._equipScreen(3,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag)
                }
            }
        }

        //筛选最高评分
        _equipScreen(i,weaponMax,needLvl,lvl,part,quality,key,isEquip,index,equipBag){
            if (!weaponMax[i]) weaponMax[i] = [[],[]];
            if (needLvl <= lvl) {     //可穿戴
                if(part == gc.c_prop.equipTypeKey.bracelet || part == gc.c_prop.equipTypeKey.ring){
                    if (!weaponMax[i][0][1]){weaponMax[i][0] = [quality, key, isEquip];}else{
                    //if(part == gc.c_prop.equipTypeKey.bracelet || part == gc.c_prop.equipTypeKey.ring){
                        if (weaponMax[i][0][1] && !weaponMax[i][0][3]){
                            weaponMax[i][0][3] = [quality, key, isEquip];
                        }else{
                            if (weaponMax[i][0][0] <= quality){
                                if(weaponMax[i][0][3][0] <= quality){
                                    if(weaponMax[i][0][3][0] > weaponMax[i][0][0]){
                                        if (weaponMax[i][0][0] == quality){
                                            if (weaponMax[i][0][2] != 1) weaponMax[i][0] = [quality, key, isEquip, weaponMax[i][0][3]];
                                        }else{weaponMax[i][0] = [quality, key, isEquip, weaponMax[i][0][3]];}
                                    }else{
                                        if(weaponMax[i][0][3][0] == quality) {
                                            if (weaponMax[i][0][3][2] != 1) weaponMax[i][0][3] = [quality, key, isEquip];
                                        }else{weaponMax[i][0][3] = [quality, key, isEquip];}
                                    }
                                }else{
                                    if (weaponMax[i][0][0] == quality){
                                        if (weaponMax[i][0][2] != 1) weaponMax[i][0] = [quality, key, isEquip, weaponMax[i][0][3]];
                                    }else{weaponMax[i][0] = [quality, key, isEquip, weaponMax[i][0][3]];}
                                }
                            }else if (weaponMax[i][0][3][0] <= quality){
                                if(weaponMax[i][0][3][0] == quality) {
                                    if (weaponMax[i][0][3][2] != 1) weaponMax[i][0][3] = [quality, key, isEquip];
                                }else{weaponMax[i][0][3] = [quality, key, isEquip];}
                            }

                            //if (weaponMax[i][0][0] < quality){
                            //    weaponMax[i][0] = [quality, key, isEquip];
                            //}else if (weaponMax[i][0][0] == quality){
                            //    if (weaponMax[i][0][2] != 1) weaponMax[i][0] = [quality, key, isEquip];
                            //}else if(weaponMax[i][0][3] && weaponMax[i][0][3][0] < quality){
                            //    weaponMax[i][0][3] = [quality, key, isEquip];
                            //}else if(weaponMax[i][0][3] && weaponMax[i][0][3][0] == quality) if (weaponMax[i][0][3][2] != 1) weaponMax[i][0][3] = [quality, key, isEquip];
                        }
                    }
                    //}else {
                    //if (weaponMax[i][0][0] < quality) if(isEquip != 1) weaponMax[i][0] = [quality, key, isEquip];
                    //if (weaponMax[i][0][0] == quality) if (weaponMax[i][0][2] != 1) weaponMax[i][0] = [quality, key, isEquip];
                    //}
                }else{
                    if (!weaponMax[i][0][1]) weaponMax[i][0] = [quality, key, isEquip];
                    if (weaponMax[i][0][0] < quality) weaponMax[i][0] = [quality, key, isEquip];
                    if (weaponMax[i][0][0] == quality) if (weaponMax[i][0][2] != 1) weaponMax[i][0] = [quality, key, isEquip];
                }
            }else{      //不可穿戴
                //weaponMax[i][1].push([quality, key]);
                if (!weaponMax[i][1][index] || !weaponMax[i][1][index][1]){weaponMax[i][1][index] = [equipBag[key][2], key,isEquip];}else{
                    if(part == gc.c_prop.equipTypeKey.bracelet || part == gc.c_prop.equipTypeKey.ring){
                            if (weaponMax[i][1][index] && !weaponMax[i][1][index][3]){weaponMax[i][1][index][3] = [equipBag[key][2], key,isEquip];}else{
                            if (weaponMax[i][1][index][0] <= equipBag[key][2]){
                                if(weaponMax[i][1][index][3][0] <= equipBag[key][2]){
                                    if(weaponMax[i][1][index][0] <= weaponMax[i][1][index][3][0]){
                                        weaponMax[i][1][index] = [equipBag[key][2], key,isEquip, weaponMax[i][1][index][3]];
                                    }else{
                                        weaponMax[i][1][index][3] = [equipBag[key][2], key,isEquip];
                                    }
                                }else{weaponMax[i][1][index] = [equipBag[key][2], key,isEquip, weaponMax[i][1][index][3]];}
                            }else if(weaponMax[i][1][index][3] && weaponMax[i][1][index][3][0] <= equipBag[key][2]) weaponMax[i][1][index][3] = [equipBag[key][2], key,isEquip];
                        }
                    }else {
                        if (weaponMax[i][1][index][0] <= equipBag[key][2]) weaponMax[i][1][index] = [equipBag[key][2], key,isEquip, weaponMax[i][1][index][3]];
                    }
                }
            }
        }

        //获得装备件数
        getColorCount(choColor){
            var self = this;
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            var count = 0;
            var getEquipBag = gd.userCtrl.getEquipBag();       //装备背包 {"1":[物品id,[随到的属性值],评价,是否穿戴,name,[基础属性],是否锁定],...}  "1":指定id,累加上去的
            for(var key in getEquipBag){
                if(getEquipBag[key][3]) continue;
                var item_id = getEquipBag[key][0];
                var color = t_item[item_id][gc.t_item_color];
                if(choColor != color) continue;
                var s_lock = getEquipBag[key][6];
                if(self._isLocked(s_lock,t_itemEquip[item_id])) continue;
                count++;
            }
            return count;
        }

        //装备熔炼 return [["强化石",num,颜色]，["装备",1,颜色]...]
        smelt(equipArr,choColor,cb,target){
            var self = this;
            if(equipArr.length <= 0) return cb.call(target,[]);
            var argKeys = gc.iface.a_smelt_smelt_args;
            var args = {};
            args[argKeys.equipArr] = equipArr;
            args[argKeys.choColor] = choColor;
            mo.requestWaiting4Server(gc.iface.a_smelt_smelt, args, function (data){
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var gainArr = data[gc.dsConsts.ExUserData.gainArr]||[];
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var delEquipBagArr = data[gc.dsConsts.ExUserData.delEquipBagArr]||[];
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag(delEquipBagArr,equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                if(choColor){
                    self.pushNotify(self.__class.ON_BATCH_SMELT);
                }else{
                    self.pushNotify(self.__class.ON_SMELT);
                }
                gd.pointCtrl.cal(gc.c_prop.pointEffectKey.bag);
                cb.call(target, gainArr);

                g_cache.recordGuideDone(g_consts.GUIDE_LCK.hasSmelting);

            });
        }

        //装备合成
        compound(compoundId,cb,target){
            var self = this;
            var argKeys = gc.iface.a_smelt_compound_args;
            var args = {};
            args[argKeys.compoundId] = compoundId;
            mo.requestWaiting4Server(gc.iface.a_smelt_compound, args, function (data){
                var userData = {};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_BREAK_MERGED, compoundId);
            });
        }

        //装备特戒
        wearParRing(id,breakId,cb,target){     //{id:"英雄数据id",breakId:"所要装备特戒的Id"}
            var self = this;
            var breId = parseInt(breakId);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            if(!bag[breId] || bag[breId]==0) return mo.showMsg("还未拥有该特戒");

            var tempId = gd.heroCtrl.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var argKeys = gc.iface.a_smelt_wearParRing_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.breakId] = breId;
            mo.requestWaiting4Server(gc.iface.a_smelt_wearParRing, args, function (data){
                var userData = {};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                gd.heroCtrl.updateHeroEntityCtrl(id,heroData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_WEAR_PAR_RING);
            });
        }

        //特戒突破
        ringBreak(id,breakId,cb,target){     //{id:"英雄数据id",breakId:"所要装备特戒的Id"}
            var self = this;
            var breId = parseInt(breakId);
            var c_compound = mo.getJSONWithFileName(gc.cfg_c_compound);
            var t_itemBreak = mo.getJSONWithFileName(gc.cfg_t_itemBreak);
            var equipData = gd.heroCtrl.getEquipData(id);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var lvl = gd.userCtrl.getLvl();
            var index = t_itemBreak[breId][gc.t_itemBreak_position];
            if(!equipData[index] || equipData[index] != breId)  return mo.showMsg("还未拥有用于突破的特戒");
            if(!c_compound[breId+1]) return mo.showMsg("特戒已经突破到最高");
            var needLvl = c_compound[breId+1][gc.c_compound_needLvl];
            if(lvl < needLvl) return mo.showMsg("等级不足");
            var reqItems1 = c_compound[breId+1][gc.c_compound_reqItems1];
            var reqCount1 = c_compound[breId+1][gc.c_compound_reqCount1];
            var count = bag[reqItems1]||0;
            if(count < reqCount1) return mo.showMsg("碎片不足");

            var tempId = gd.heroCtrl.getHeroEntityCtrl(id).get(gc.dsConsts.HeroEntity.tempId);
            var argKeys = gc.iface.a_smelt_ringBreak_args;
            var args = {};
            args[argKeys.tempId] = tempId;
            args[argKeys.breakId] = breId;
            mo.requestWaiting4Server(gc.iface.a_smelt_ringBreak, args, function (data){
                var userData = {};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                gd.heroCtrl.updateHeroEntityCtrl(id,heroData);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_BREAK_PAR_RING);
            });
        }

        //根据equipId获得tempId
        getTempIdByEquipId(equipId, eqpBag?){
            var self = this;
            var equipBag = eqpBag == null? gd.userCtrl.getEquipBag() : eqpBag;
            return equipBag[equipId][0];
        }

        //装备评分
        getEquipEvaluate(equipId) {
            var equipBag = gd.userCtrl.getEquipBag();
            return equipBag[equipId][2];
        }

        getEquipItemLvl(equipId){
            var self = this;
            var tmpId = self.getTempIdByEquipId(equipId);
            var t_item = mo.getJSONWithFileNameAndID(gc.cfg_t_item, tmpId);
            return t_item[gc.t_item_itemLvl];
        }

        //传承或极品装备评分
        getSpecialEquipEvaluate(tempId) {
            var self = this;
            var equipTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return gd.userUtils.getEquipGrade(tempId, equipTemp[gc.t_itemEquip_fixProp]);
        }

        //装备评分基数
        getBaseEvaluate(tempId){
            var equipTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return equipTemp[gc.t_itemEquip_gradeBase];
        }

        //传承或极品装备属性加成
        getSpecialEquipExtra(tempId){
            var equipTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return equipTemp[gc.t_itemEquip_fixProp];
        }

        //装备额外属性
        getEquipExtra(equipId, eqpBag?) {
            var self = this;
            var equipBag = eqpBag == null? gd.userCtrl.getEquipBag() : eqpBag;
            var tempId = self.getTempIdByEquipId(equipId, eqpBag);
            return (self.isSpecialEquip(tempId) || self.isRareEquip(tempId))
                ? self.getSpecialEquipExtra(tempId)
                : equipBag[equipId][1];
        }

        //获得基础属性
        getBasePropArr(tempId){
            var equipTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return equipTemp[gc.t_itemEquip_propertys];
        }

        //获得装备名
        getEquipName(tempId){
            var equipTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, tempId);
            return equipTemp[gc.t_item_name];
        }

        //装备额外属性对象{属性key: 加成值}
        getEquipExtraObj(equipId, eqpBag?) {
            var self = this;
            var propArr = self.getEquipExtra(equipId, eqpBag);
            return utils.kvArr2KvObj(propArr);
        }

        //根据部位获取装备栏强化等级信息
        getStrLvlInfo(tempId, strLvl){
            var self = this;
            var equip = mo.getJSONWithFileName(gc.cfg_t_itemEquip)[tempId];
            var propAddKey = equip[gc.t_itemEquip_slotStrengthProperty];
            var propValue = equip[gc.t_itemEquip_propValue] * strLvl;
            return [strLvl, propAddKey, propValue];//强化等级，属性类型，属性值
        }

        //获取英雄强化数据
        getIntensifyArr(heroId) {
            var getHeroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(heroId);
            return getHeroEntityCtrl.get(gc.dsConsts.HeroEntity.intensifyArr);
        }

        //获取英雄星级数据
        getStarArr(heroId) {
            var getHeroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(heroId);
            return getHeroEntityCtrl.get(gc.dsConsts.HeroEntity.starArr);
        }

        //获取英雄宝石数据  [[0级攻击宝石,0],[1级攻击宝石,250],[1级攻击宝石,250],[1级攻击宝石,250]]  万分率
        getGemArr(heroId,index) {
            var self = this;
            var heroIdGemArr = [];
            var gemInitial = 0;
            var c_gem = mo.getJSONWithFileName(gc.cfg_c_gem);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            if(index < 4) gemInitial = c_game[gc.id_c_game.gemInitial][index];
            if(index > 7) gemInitial = c_game[gc.id_c_game.gemInitial][index - 4];
            var getHeroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(heroId);
            var gemArr = getHeroEntityCtrl.get(gc.dsConsts.HeroEntity.gemArr)||[];
            var id = gemArr[index]||gemInitial;     //宝石id
            heroIdGemArr[0] = [c_gem[id][gc.c_gem_items1],c_gem[id][gc.c_gem_effectPro1]];
            heroIdGemArr[1] = [c_gem[id][gc.c_gem_items2],c_gem[id][gc.c_gem_effectPro2]];
            heroIdGemArr[2] = [c_gem[id][gc.c_gem_items3],c_gem[id][gc.c_gem_effectPro3]];
            heroIdGemArr[3] = [c_gem[id][gc.c_gem_items4],c_gem[id][gc.c_gem_effectPro4]];
            return heroIdGemArr;
        }

        //获取英雄翅膀数据  [等级,星级,当前星经验]
        getWingArr(heroId) {
            var self = this;
            var getHeroEntityCtrl = gd.heroCtrl.getHeroEntityCtrl(heroId);
            return getHeroEntityCtrl.get(gc.dsConsts.HeroEntity.wingArr);
        }

        //按类型获得装备列表
        getEquipListByType(type){
            var list = [];
            var equipBag = gd.userCtrl.getEquipBag();
            for(var equipId in equipBag){
                var eq = equipBag[equipId];
                var tempId = eq[0];
                if(this.getEquipType(tempId) == type && !this.isEquiped(equipId)){
                    list.push(eq);
                }
            }
            return list;
        }

        //根据职业/类型获得装备列表
        //按评分排序
        getEquipList(job?, type?){
            var equips = gd.userCtrl.getEquipBag();
            var results = [];
            var equipData, tempId;
            var cfg_t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            for(var equipId in equips){
                equipData = equips[equipId];
                var isEquiped = equipData[3] > 0;
                if(isEquiped) continue;
                tempId = equipData[0];
                var t_itemEquip = cfg_t_itemEquip[tempId];
                if(job == null && type == null){
                    results.push(equipId);
                }else{
                    if(job != null && type != null){
                        if(job == t_itemEquip[gc.t_itemEquip_job] && type == t_itemEquip[gc.t_itemEquip_type]){
                            results.push(equipId);
                        }
                    }else{
                        if(job == t_itemEquip[gc.t_itemEquip_job] || type == t_itemEquip[gc.t_itemEquip_type]){
                            results.push(equipId);
                        }
                    }
                }
            }
            results = results.sort(function(a, b){
                return equips[a][2] > equips[b][2] ? -1 : 1;
            });//排序
            return results;
        }

        //获得所有背包中传承装备
        getBagSpecialEquipList(){
            var self = this;
            var equipList = self.getEquipList();
            return equipList.filter(function(equipId){
                return self.isSpecialEquip(self.getTempIdByEquipId(equipId)) && !self.isEquiped(equipId);
            });
        }

        //获得所有背包中可传承装备
        getBagAllCanInherEquip(){
            var self = this;
            var equips = self.getBagSpecialEquipList();
            return equips.filter(function(equipId){
                return gd.equipCtrl.getInheritedEquipOpt(equipId).nextEquipNeedLvlEnough;
            });
        }

        //获得装备类型
        getEquipType(tempId){
            var equipData = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return equipData[gc.t_itemEquip_type];
        }
        //获得装备类型名
        getEquipTypeName(tempId){
            return gc.c_prop.equipType[this.getEquipType(tempId)];
        }

        //获得装备所属职业
        getEquipJob(tempId){
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, tempId);
            if(itemInfo[gc.t_item_type] == gc.c_prop.itemTypeKey.equip){
                var equipData = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
                return equipData[gc.t_itemEquip_job];
            }else if(itemInfo[gc.t_item_type] == gc.c_prop.itemTypeKey.gift){
                var giftInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, tempId);
                return giftInfo[gc.t_talisman_job];
            }

        }
        //是否是可传承的装备
        isSpecialEquip(tempId){
            var equipData = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return (equipData[gc.t_itemEquip_isUp] || 0) > 0;
        }
        //是否是极品装备
        isRareEquip(tempId){
            var equipData = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return (equipData[gc.t_itemEquip_isRare] || 0) > 0;
        }
        //是否超品装备
        isSuperEquip(tempId){
            var equipData = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return (equipData[gc.t_itemEquip_isSuper] || 0) == 1;
        }
        //是否精品装备
        isJingEquip(tempId){
            var equipData = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
            return (equipData[gc.t_itemEquip_isSuper] || 0) == 2;
        }

        //获得装备穿戴等级
        getEquipWearLvl(tempId){
            var equipData = mo.getJSONWithFileNameAndID(gc.cfg_t_item, tempId);
            return equipData[gc.t_item_level];
        }

        //根据位置获得装备类型
        getEquipTypeByPart(part){
            return this._partTypeMap[part];
        }

        //检查装备是否已穿戴
        isEquiped(equipId){
            var equipBag = gd.userCtrl.getEquipBag();
            var equipData = equipBag[equipId];
            return equipData[3] > 0;
        }

        queryStrLvlInfo(tempId, strLvl){
            var self = this;
            var equip = mo.getJSONWithFileName(gc.cfg_t_itemEquip)[tempId];
            var propAddKey = equip[gc.t_itemEquip_slotStrengthProperty];
            var propValue = equip[gc.t_itemEquip_propValue] * strLvl;
            return [strLvl, propAddKey, propValue];//强化等级，属性类型，属性值
        }

        queryRefineLvlInfo(tempId, refindLv) {
            var equip = mo.getJSONWithFileName(gc.cfg_t_itemEquip)[tempId];
            var propAddKey = equip[gc.t_itemEquip_slotStrengthProperty];
            var cfg_t_strengthRefine = mo.getJSONWithFileName(gc.cfg_t_strengthRefine);
            var propValue = cfg_t_strengthRefine[refindLv][gc.t_strengthRefine_strAddition] / 10000;
            return [refindLv, propAddKey, propValue];//精炼等级，属性类型，属性值
        }

        queryStarInfo(starLvl){
            var c_lvl = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, starLvl);
            return [starLvl, c_lvl[gc.c_lvl_upStarPropAdd]/100];//升星等级，属性值
        }

        //是否是特戒
        isBreakRing(part){
            var tempPart = parseInt(part);
            return (tempPart>=gc.c_prop.heroEquipIndexKey.paralysisRing && tempPart<=gc.c_prop.heroEquipIndexKey.harmRing);
        }

        //获取指定部位的特戒
        getBreakRingBy(part){
            var self = this;
            var breakRings = gd.userCtrl.getItemByType(gc.c_prop.itemTypeKey.break);
            var cfg_t_break = mo.getJSONWithFileName(gc.cfg_t_itemBreak);
            for(var itemId in breakRings){
                var t_break = cfg_t_break[itemId];
                if(part == t_break[gc.t_itemBreak_position]) return itemId;
            }
            return null;
        }

        //获取特戒初始配置
        getInitBreakRing(part){
            var self = this;
            var tempPart = parseInt(part);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var ringCfg = c_game[gc.id_c_game.parRingCfg];
            return ringCfg[tempPart - gc.c_prop.heroEquipIndexKey.paralysisRing];
        }

        //传承装备 equipId 装备id, tempId 英雄id, 背包中的填0
        inheritedEquip(opt,cb,target){
            var self = this;
            if(opt.isMaxLvl) return mo.showMsg("满级了,不能再传承");
            if(!opt.nextEquipNeedLvlEnough) return mo.showMsg("角色等级不足");
            if(!opt.isItemEnough){
                return mo.showMsg("物品不够");
            }

            var equipId = opt.equipId;
            var jobId = opt.heroJobId;
            var argKeys = gc.iface.a_equip_inheritedEquip_args;
            var args = {};
            args[argKeys.equipId] = equipId;
            args[argKeys.tempId] = jobId;
            mo.requestWaiting4Server(gc.iface.a_equip_inheritedEquip, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var heroData = data[gc.dsConsts.ExUserData.heroData]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems];
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                var bag = gd.userUtils.getNewBag(bagItems, {});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntityNotShow(userData);
                if(jobId){
                    var hec = gd.heroCtrl.getHeroByJob(jobId);
                    var partIndex = hec.getPartByEquipId(equipId);
                    gd.heroCtrl.getHeroByJob(jobId).updateEntity(heroData);
                    hec.pushNotify(hec.__class.ON_EQUIP_CHANGED, opt.inheritedInfo[gc.t_inheritedEquip_nextId], partIndex, equipId);
                }
                pointCtrl.cal(gc.c_prop.pointEffectKey.chuanChen);
                cb.call(target,data);
                self.pushNotify(self.__class.ON_INHERITED);
            });
        }

        getInheritedEquipOpt(equipId){
            var self = this;
            var opt = {
                equipId : equipId,
                heroJobId : 0, //英雄职业id, 如果在背包中则为0
                inheritedInfo : null,
                nextEquipNeedLvl: 0,
                nextEquipNeedLvlEnough:false,
                isMaxLvl: false,
                itemId:null, //消耗道具
                isItemEnough: false
            };
            var tempId = self.getTempIdByEquipId(equipId);
            var t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip)[tempId];
            var isEquiped = self.isEquiped(equipId);
            if(isEquiped){
                opt.heroJobId = t_itemEquip[gc.t_itemEquip_job];
            }
            opt.itemId = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.inheritedEquip)[0];
            opt.inheritedInfo = self.getInheritedInfo(tempId);
            var nextId = opt.inheritedInfo[gc.t_inheritedEquip_nextId];
            if(nextId){
                opt.nextEquipNeedLvl = mo.getJSONWithFileName(gc.cfg_t_item)[nextId][gc.t_item_level];
                opt.nextEquipNeedLvlEnough = gd.userCtrl.getLvl() >= opt.nextEquipNeedLvl;
                opt.isItemEnough = gd.userCtrl.getItemNum(opt.itemId) >= opt.inheritedInfo[gc.t_inheritedEquip_num];
            }else{
                opt.isMaxLvl = true;
            }
            return opt;
        }

        //获取传承的信息
        getInheritedInfo(tempId){
            var self = this;
            if(!self.isSpecialEquip(tempId)) return null;
            return  mo.getJSONWithFileName(gc.cfg_t_inheritedEquip)[tempId];
        }

        //获取传承红点
        getSpecialEquipDot(){
            var self = this;
            var dotArr = [];
            var heroJob = gc.c_prop.heroJob;
            for(var k in heroJob){
                var job = parseInt(k);
                var hec:gd.HeroEntityCtrl = gd.heroCtrl.getHeroByJob(job);
                if(hec){
                    (hec.getAllCanInherEquip().length > 0)? dotArr.push(1) : dotArr.push(0);
                }
            }
            (self.getBagAllCanInherEquip().length>0)? dotArr.push(1): dotArr.push(0);
            return dotArr;
        }

        //-------订制武器相关开始---------------

        isCustomEquipByTempId(tempId){
            var self = this;
            //订制武器的模板id范围
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.customizationCfg);
            var intId = parseInt(tempId);
            var range = c_game[14].split(",");
            return intId >= parseInt(range[0]) && intId <= parseInt(range[1]);
        }

        //是否是订制武器
        isCustomEquip(equipId){
            var self = this;
            var equipInst = equipId;
            if (!(equipId instanceof Array)){
                equipInst = gd.userCtrl.getEquipBag()[equipId];
            }
            //[910120, Array[4], 44666, 0, "和宣VIP", Array[4]]
            if(equipInst && equipInst[4] && equipInst[4] != ""){
                return true;
            }
            return false;
        }

        //获取订制信息,返回[名字,基础属性]
        getCustomInfo(equipId){
            var self = this;
            var equipInst = equipId;
            //[910120, Array[4], 44666, 0, "和宣VIP", Array[4]]
            if (!(equipId instanceof Array)){
                equipInst = gd.userCtrl.getEquipBag()[equipId];
            }
            if(equipInst && self.isCustomEquip(equipId)){
                /*var copy = [].concat(equipInst);
                copy.splice(0, 4);//删除原有属性*/
                var copy = [];
                copy.push(equipInst[4],equipInst[5]);
                var idxs = copy.pop(); //弹出索引
                idxs.sort();
                var t_itemEqup = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, equipInst[0]);
                var t_props = t_itemEqup[gc.t_itemEquip_propertys];
                var finalProps = [];
                for(var i = 0, li = idxs.length; i < li; i++){
                    finalProps.push(t_props[idxs[i]]);
                }
                copy.push(finalProps);
                return copy;
            }
            return null;
        }

        equipTrans(equipId){
            var self = this;
            var equipInst = equipId;
            if (!(equipId instanceof Array)){
                equipInst = gd.userCtrl.getEquipBag()[equipId];
            }
            //equipInst = [910120, Array[4], 44666, 0, "和宣VIP", Array[4]]
            var isCustomEquip = self.isCustomEquip(equipInst);
            var customInfo = self.getCustomInfo(equipInst);
            var tempId = equipInst[0];
            var props = equipInst[1];
            if(gd.equipCtrl.isSpecialEquip(tempId) || gd.equipCtrl.isRareEquip(tempId)){
                props = gd.equipCtrl.getSpecialEquipExtra(tempId);
            }
            var ret = {
                isCustomEquip: isCustomEquip,
                tempId:tempId,
                extraPropArr:props,
                isEquiped:equipInst[3],
                name: (isCustomEquip? customInfo[0] : self.getEquipName(equipInst[0])),
                basePropArr: isCustomEquip? customInfo[1] : self.getBasePropArr(equipInst[0]),
                score:isCustomEquip?gd.userUtils.getEquipGrade(tempId, props, equipInst[5]) : gd.userUtils.getEquipGrade(tempId, props)
            }
            return ret;
        }

        updateEquipItemLockStatus(equipId, isLocked,cb,target){
            var self = this;
            var argKeys = gc.iface.a_equip_updateEquipItemLockStatus_args;
            var args = {};
            args[argKeys.equipId] = equipId;
            args[argKeys.isLocked] = isLocked;
            mo.requestWaiting4Server(gc.iface.a_equip_updateEquipItemLockStatus, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                if(cb) cb.call(target,data);
            });
        }

        sellEquipItem(equipIdArr, cb, target){
            var self = this;
            var argKeys = gc.iface.a_equip_sellEquipItems_args;
            var args = {};
            args[argKeys.equipIdArr] = equipIdArr;
            mo.requestWaiting4Server(gc.iface.a_equip_sellEquipItems, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};;
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var delEquipBagArr = data[gc.dsConsts.ExUserData.delEquipBagArr]||[];
                var equipBag = gd.userUtils.getNewEquipBag(delEquipBagArr,{});
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                self.pushNotify(self.__class.ON_SMELT);
                if(cb) cb.call(target,data);
            });
        }


        //-------订制武器相关结束---------------

    }

    export function sortEquipList(list) {
        //数据结构：[id,品质,等级]       装备背包 {"1":[物品id,[随到的属性值],评价,是否穿戴],..
        var sortIdx = [1,2,0]; //排序规则：品质＞等级＞id
        var sortType = [1,-1,1]; //id,品质升序，其他降序
        list.sort(function (a, b) {
            for (var i = 0; i < 3; i++) {
                var type = sortType[i];
                if (a[sortIdx[i]] > b[sortIdx[i]]) {
                    return type <= 0 ? -1 : 1;
                }
                else if (a[sortIdx[i]] < b[sortIdx[i]]) {
                    return type <= 0 ? 1 : -1;
                }
            }
            return 0;
        });
        return list;
    }

    export var equipCtrl:EquipCtrl;
}