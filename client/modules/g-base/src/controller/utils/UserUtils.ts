/**
 * Created by Administrator on 2015/6/1.
 */

module gd{
    export class UserUtils {
        //获取某种类型的物品数量
        getNumOfItems(items,type){
            var num = 0;
            if(!items) return num;
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item) ;
            for(var key in items){
                var locId = key;
                var locItemData = t_item[locId];
                if(!locItemData) continue;
                var locNum = parseInt(items[key]);
                if(locItemData[gc.t_item_type]==type){
                    num+=locNum;
                }
            }
            return num;
        }

        //获取新背包数据  delBagItems：所要删除的items{}   bagItems：所要添加的items{}
        getNewBag(delBagItems,bagItems){
            var bag = gd.userCtrl.getBag();
            var bag1 = JSON.parse(JSON.stringify(bag));
            for(var key in delBagItems){
                var value = parseInt(bag1[key])||0;
                bag1[key] = value - parseInt(delBagItems[key]);
                if(bag1[key] <= 0) delete bag1[key];
            }
            for(var key in bagItems){
                var value = parseInt(bag1[key])||0;
                bag1[key] = value + parseInt(bagItems[key]);
            }
            return bag1;
        }

        getNewBag4update(updatebagItems){
            var bag = gd.userCtrl.getBag();
            var bag1 = JSON.parse(JSON.stringify(bag));
            for(var key in updatebagItems){
                bag1[key] = parseInt(updatebagItems[key]);
                if(bag1[key] <= 0) delete bag1[key];
            }
            return bag1;
        }

        //获取新装备背包数据  delEquipBagArr：所要删除的装备id数组【】   equipBagItems：所要添加的装备items{}
        getNewEquipBag(delEquipBagArr,equipBagItems){
            var equipBag = gd.userCtrl.getEquipBag();
            var equipBag1 = JSON.parse(JSON.stringify(equipBag));
            for(var i = 0; i < delEquipBagArr.length; i++){
                delete equipBag1[delEquipBagArr[i]];
                delete gd.userCtrl._equipBk[delEquipBagArr[i]];
            }
            for(var key in equipBagItems){
                equipBag1[key] = equipBagItems[key];
            }
            return equipBag1;
        }

        //装备评分计算        templateId:装备模板id  randomArr:额外属性数组
        getEquipGrade(templateId,randomArr,arr?){
            var self = this;
            var t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            var gradeBase = 0;
            if(arr){
                var propertysArr = [];
                var propertys = t_itemEquip[templateId][gc.t_itemEquip_propertys];
                for(var i=0;i<arr.length;i++){
                    propertysArr.push(propertys[arr[i]]);
                }
                gradeBase = self._calEquipGrade(propertysArr);
            }else{
                gradeBase = t_itemEquip[templateId][gc.t_itemEquip_gradeBase];       //模板装备基础评分z
            }
            gradeBase += self._calEquipGrade(randomArr);
            return gradeBase;
        }

        _calEquipGrade(randomArr){
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var extraGrade = 0;     //额外评分
            var equipGrade = 0;     //装备附加参数
            for(var i = 0;i < randomArr.length;i++){
                var abilityId = randomArr[i][0];        //属性id
                var abilityValue = randomArr[i][1];        //属性值
                switch (abilityId){
                    case gc.c_prop.equipPropKey.maxHpTemp:        //生命
                        equipGrade = c_game[gc.id_c_game.equipGrade][0];
                        break;
                    case gc.c_prop.equipPropKey.attackTemp:       //攻击
                        equipGrade = c_game[gc.id_c_game.equipGrade][1];
                        break;
                    case gc.c_prop.equipPropKey.defenceTemp:      //物防
                        equipGrade = c_game[gc.id_c_game.equipGrade][2];
                        break;
                    case gc.c_prop.equipPropKey.magicDefenceTemp:     //法防
                        equipGrade = c_game[gc.id_c_game.equipGrade][3];
                        break;
                    case gc.c_prop.equipPropKey.hitTemp:      //命中
                        equipGrade = c_game[gc.id_c_game.equipGrade][4];
                        break;
                    case gc.c_prop.equipPropKey.dodgeTemp:        //闪避
                        equipGrade = c_game[gc.id_c_game.equipGrade][5];
                        break;
                    case gc.c_prop.equipPropKey.criticalTemp:     //暴击
                        equipGrade = c_game[gc.id_c_game.equipGrade][6];
                        break;
                    case gc.c_prop.equipPropKey.disCriticalTemp:      //抗暴
                        equipGrade = c_game[gc.id_c_game.equipGrade][7];
                        break;
                }
                extraGrade += equipGrade*abilityValue;
            }
            return extraGrade;
        }

        isLoot(itemId){
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var itemData = t_item[itemId];
            if(!itemData) return false;
            var lootType = itemData[gc.t_item_lootType]||0;
            if(lootType==0) return true;
            var lootTypeArr = userCtrl.getLootTypeArr();
            if(!lootTypeArr) return false;
            if(lootTypeArr.indexOf(lootType)>-1){
                return true;
            }else{
                return false;
            }
        }

        getLoots(sheetLoots:any):any{
            if(sheetLoots instanceof Array){
                var loots = [];
                for(var i=0; i<sheetLoots.length; ++i){
                    if(sheetLoots[i] instanceof Array){
                        if(this.isLoot(sheetLoots[i][0])){
                            loots.push([sheetLoots[i][0], sheetLoots[i][1]]);
                        }
                    }else if(sheetLoots[i] instanceof Object){
                        if(this.isLoot(sheetLoots[i].itemId)){
                            loots.push({itemId:sheetLoots[i].itemId, count:sheetLoots[i].count});
                        }
                    }else{
                        if(this.isLoot(sheetLoots[i])){
                            loots.push(sheetLoots[i]);
                        }
                    }
                }
                return loots;
            }else if(sheetLoots instanceof Object){
                var lootObj = {};
                for(var key in sheetLoots){
                    if(this.isLoot(key)){
                        lootObj[key] = sheetLoots[key];
                    }
                }
                return lootObj;
            }else{

            }
        }
    }
    export var userUtils:UserUtils = new UserUtils();
}