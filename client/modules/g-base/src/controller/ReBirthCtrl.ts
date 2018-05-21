/**
 * Created by Administrator on 2016/1/20.
 */
module gd {
    export class ReBirthCtrl extends mo.DataController {
        _initProp() {
            super._initProp();
        }

        initData(data) {
            if (!data) return;
            var self = this;
            self.init(data);
        }


        //转生
        rebirth = function(cb, target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_rebirth_rebirth, {}, function (data) {
                var userData = data[gc.dsConsts.Rebirth.userData]||{};
                var heroList = data[gc.dsConsts.Rebirth.heroList]||{};
                gd.userCtrl.updateEntity(userData);
                for(var i=0; i<heroList.length; i++){
                    var heroData = heroList[i];
                    var tempId = heroData[gc.dsConsts.HeroEntity.tempId];
                    var hec = gd.heroCtrl.getHeroByJob(tempId);
                    gd.heroCtrl.getHeroByJob(tempId).updateEntity(heroData);
                }
                cb.call(target,data);
            });
        }

        //购买转生丹  哈哈哈
        buyRebirth = function(index, num,cb, target){
            var self = this;
            var argKeys = gc.iface.a_rebirth_buyRebirth_args;
            var args = {};
            args[argKeys.index] = index;
            args[argKeys.num] = num;
            mo.requestWaiting4Server(gc.iface.a_rebirth_buyRebirth, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                cb.call(target,data);
            });
        }

        //获得转生等级
        getRebirthLvl(){
            return userCtrl.get(gc.dsConsts.UserEntity.rebirthLvl) || 0;
        }

        //获得转生经验
        getRebirthExp(){
            return Math.floor(userCtrl.get(gc.dsConsts.UserEntity.rebirthExp));
        }
        //获得相应转生丹的今日购买次数 buyRebirthType 0 初级丹 1 中级丹 2 高级丹
        getBuyRebirthCount(index) {
            switch (index){
                case 0:
                    return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.buyPrimaryRebirth);
                    break;
                case 1:
                    return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.buyMidRebirth);
                    break;
                case 2:
                    return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.buyAdvancedRebirth);
                    break;
            }
            return -1;
        }

        getRebirthCfg(id){
            var t_rebirth = mo.getJSONWithFileName(gc.cfg_t_rebirth);
            var rebirthTemp = t_rebirth[id];
            if(!rebirthTemp) {
                return null;
            }
            var data = {
                rebirthLvl:rebirthTemp[gc.t_rebirth_rebirthLvl],
                lvl:rebirthTemp[gc.t_rebirth_lvl],
                limitLvl:rebirthTemp[gc.t_rebirth_limitLvl],
                exp:rebirthTemp[gc.t_rebirth_exp],
                maxHpTemp:rebirthTemp[gc.t_rebirth_maxHpTemp],
                attackTemp:rebirthTemp[gc.t_rebirth_attackTemp],
                defenceTemp:rebirthTemp[gc.t_rebirth_defenceTemp],
                magicDefenceTemp:rebirthTemp[gc.t_rebirth_magicDefenceTemp],
                hitTemp:rebirthTemp[gc.t_rebirth_hitTemp],
                dodgeTemp:rebirthTemp[gc.t_rebirth_dodgeTemp],
                criticalTemp:rebirthTemp[gc.t_rebirth_criticalTemp],
                disCriticalTemp:rebirthTemp[gc.t_rebirth_disCriticalTemp]
            }
            return data;
        }

        getItems(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.rebirth);
            var itemIds = cfg[0].split(",");
            return itemIds;
        }

        getItemBagDataCtrl(itemId){

            var items = gd.userCtrl.getBag();
            // 进行物品堆叠
            var results = gd.BagDataCtrl.pileItems(items);
            for(var key in results){
                var locItem = results[key];
                if(locItem.tempId == itemId){
                    return locItem;
                }
            }

            return null;
        }

        getItemShopLeftNum(index):number{
            var self = this;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.rebirth);
            var totalNums = cfg[2].split(",");
            var leftNum = totalNums[index] - self.getBuyRebirthCount(index)
            leftNum = leftNum >= 0 ? leftNum : 0;
            return leftNum
        }

        getItemShopData(index){
            var self = this;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.rebirth);
            var itemIds = cfg[0].split(",");
            var prices = cfg[1].split(",");

            var shopItem = [];
            shopItem[0] = itemIds[index];//itemId
            shopItem[1] = 0;//itemNum
            shopItem[2] = 2;//moneyType
            shopItem[3] = prices[index];//moneyNum
            shopItem[4] = self.getItemShopLeftNum(index);//leftNum

            return shopItem;
        }



    }

    export var reBirthCtrl:ReBirthCtrl = ReBirthCtrl.getInstance();
}