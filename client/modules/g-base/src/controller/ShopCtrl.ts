/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class ShopCtrl extends mo.DataController {

        static ON_BUY_SUCC:string = "on_buy_succ";

        _shopMap:any;

        canGoldBuyEquipIdx:any;
        canGoldBuyEquipGold:any;

        _initProp() {
            super._initProp();
            this._shopMap = {};
        }

        /**
         * 获取商店列表
         * @param {gc.c_prop.shopTypeKey} type 商店类型
         * @param cb
         * @param target
         * @returns [[物品id，数量，货币类型，正式价格,剩余购买次数,原价,商店类型,打折标识,额外属性数组,评分],...]
         */
        getList(type, cb, target) {
            var self = this;
            var c_shop = mo.getJSONWithFileName(gc.cfg_c_shop);
            self._getShopData(type, function (shopData) {
                var itemList = [];
                var items = shopData[gc.dsConsts.ShopEntity.items];
                for (var i = 0; i < items.length; i++) {
                    var locItemData = items[i];
                    var locShopId = locItemData[0];
                    var locLimit = locItemData[1];
                    var locC_shopData = c_shop[locShopId];
                    var locDiscount = locC_shopData[gc.c_shop_discount];
                    var locData = [];
                    locData[0] = locC_shopData[gc.c_shop_itemId];
                    locData[1] = 0;
                    locData[2] = locC_shopData[gc.c_shop_currencyType];
                    locData[3] = locC_shopData[gc.c_shop_price];
                    locData[4] = locLimit;
                    locData[5] = locData[3];
                    locData[6] = type;
                    locData[7] = locC_shopData[gc.c_shop_discount];
                    if(type == gc.c_prop.shopTypeKey.equip){
                        locData[8] = locItemData[2];
                        locData[9] = locItemData[3];
                        //记录可以花金币购买的装备
                        if(utils.getCurrencyTypeItemId(locData[2]) == gc.c_prop.spItemIdKey.gold){
                            self._recoderMinGoldCostItem(locData[3], i);
                        }
                    }
                    if(locDiscount){
                        locData[5] = Math.floor((locData[5]*10/locDiscount));
                    }
                    itemList.push(locData);
                }
                pointCtrl.cal(gc.c_prop.pointRedKey.shopMain);
                cb.call(target, itemList);
            }, self);
        }

        _recoderMinGoldCostItem(price, idx){
            var self = this;
            self.canGoldBuyEquipGold = self.canGoldBuyEquipGold == null? price : self.canGoldBuyEquipGold;
            self.canGoldBuyEquipIdx = self.canGoldBuyEquipIdx == null? idx : self.canGoldBuyEquipIdx;
            if(price <= self.canGoldBuyEquipGold){
                self.canGoldBuyEquipGold = price;
                self.canGoldBuyEquipIdx = idx;
            }
        }

        /**
         * 购买
         * @param { gc.c_prop.shopTypeKey} type 商店类型
         * @param index 下标
         * @param num 数量
         * @param cb
         * @param target
         */
        buy(type, index, num, cb, target) {
            var args = {};
            var self = this;
            var argsKeys = gc.iface.a_shop_buy_args;
            args[argsKeys.index] = index;
            args[argsKeys.type] = type;
            args[argsKeys.num] = num;

            var c_shop = mo.getJSONWithFileName(gc.cfg_c_shop);
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var shopData = self._shopMap[type];
            var items = shopData[gc.dsConsts.ShopEntity.items];
            var dia = parseInt(c_shop[items[index][0]][gc.c_shop_price]) * parseInt(num);
            var currencyType = c_shop[items[index][0]][gc.c_shop_currencyType];
            if(currencyType == gc.c_prop.currencyTypeKey.diamond){
                if(gd.userCtrl.getDiamond() < dia) return mo.showMsg(gc.id_c_msgCode.noDiamond);
                //ws.recordEvent("购买商城道具【" + t_item[c_shop[items[index][0]][gc.c_shop_itemId]][gc.t_item_name]  + "】的元宝", dia);
            }
            if(currencyType == gc.c_prop.currencyTypeKey.gold){
                if(gd.userCtrl.getGold() < dia){
                    gd.userCtrl.noGolds(function(){
                        self.buy(type, index, num, cb, target);
                        //ws.recordEvent("购买商城道具【" + t_item[c_shop[items[index][0]][gc.c_shop_itemId]][gc.t_item_name]  + "】的金币", dia);
                    }, self);
                    return
                }
            }

            mo.requestWaiting4Server(gc.iface.a_shop_buy, args, function (data) {
                var isMail =data[gc.dsConsts.ExUserData.isMail];        //true 需要提示发送邮箱  false  不需要
                if(isMail) mo.showMsg(gc.id_c_msgCode.bagMaxMail);
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems];
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems];
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                userCtrl.updateEntity(userData);
                var updateShopData = data[gc.dsConsts.ExUserData.shopData];
                shopData[gc.dsConsts.ShopEntity.items] = updateShopData[gc.dsConsts.ShopEntity.items];
                self.pushNotify(self.__class.ON_BUY_SUCC, type);
                if (cb) cb.call(target, data);
                if(type == gc.c_prop.shopTypeKey.equip) g_cache.recordGuideDone(g_consts.GUIDE_LCK.buyEquip);
                pointCtrl.cal(gc.c_prop.pointRedKey.shopMain);
            });
        }

        /**
         * 购买所有
         * @param { gc.c_prop.shopTypeKey} type 商店类型
         * @param cb
         * @param target
         */
        buyAll(type, cb, target) {
            var self = this;
            mo.showMsg(gc.id_c_msgCode.ifBuyAll, function () {
                var args = {};
                var argsKeys = gc.iface.a_shop_buyAll_args;
                args[argsKeys.type] = type;
                mo.requestWaiting4Server(gc.iface.a_shop_buyAll, args, function (data) {
                    var isMail =data[gc.dsConsts.ExUserData.isMail];        //true 需要提示发送邮箱  false  不需要
                    if(isMail) mo.showMsg(gc.id_c_msgCode.bagMaxMail);
                    var showMsgArr = data[gc.dsConsts.ExUserData.showMsgArr];

                    if(showMsgArr[1]&&showMsgArr[0]){
                        mo.showMsg(gc.id_c_msgCode.noDiamond);
                    }else if(showMsgArr[1]){
                        mo.showMsg(gc.id_c_msgCode.noDiamond);
                    }else if(showMsgArr[0]){
                        userCtrl.noGolds(function(){},self);
                    }

                    var c_shop = mo.getJSONWithFileName(gc.cfg_c_shop);
                    var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
                    var shopIdObj = data[gc.dsConsts.ExUserData.shopIdObj]; //全部购买商品数据 {id:数量,...}
                    for (var key in shopIdObj) {
                        var dia = parseInt(c_shop[key][gc.c_shop_price]) * parseInt(shopIdObj[key]);
                        //ws.recordEvent("购买商城道具【" + t_item[c_shop[key][gc.c_shop_itemId]][gc.t_item_name] + "】的元宝", dia);
                    }
                    var userData = data[gc.dsConsts.ExUserData.userData] || {};
                    var bagItems = data[gc.dsConsts.ExUserData.bagItems];
                    var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems];
                    var bag = gd.userUtils.getNewBag({}, bagItems);
                    userData[gc.dsConsts.UserEntity.bag] = bag;
                    var equipBag = gd.userUtils.getNewEquipBag({}, equipBagItems);
                    userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                    userCtrl.updateEntity(userData);
                    var updateShopData = data[gc.dsConsts.ExUserData.shopData];
                    var shopData = self._shopMap[type];
                    shopData[gc.dsConsts.ShopEntity.items] = updateShopData[gc.dsConsts.ShopEntity.items];
                    pointCtrl.cal(gc.c_prop.pointRedKey.shopMain);
                    if (cb) cb.call(target, data);
                });
            });
        }

        /**
         * 获取下一次刷新时间(小时)
         */
        getNextRefreshHour(type) {
            var reHour = 0;
            switch (type) {
                case gc.c_prop.shopTypeKey.normal:
                    var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
                    reHour = c_game[gc.id_c_game.refreshTime][0];
                    break;
                case gc.c_prop.shopTypeKey.arena:
                    var curHour = Date.newDate().getHours();
                    var hourArr:any = "";
                    hourArr = hourArr.split(",");
                    for (var i = 0; i < hourArr.length; i++) {
                        var locHour = hourArr[i];
                        locHour = parseInt(locHour);
                        if (curHour < locHour) {
                            reHour = locHour;
                            break;
                        }
                    }
                    if (reHour == 0) {
                        reHour = hourArr[0];
                    }
                    break;
                case gc.c_prop.shopTypeKey.equip:
                    var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
                    reHour = c_game[gc.id_c_game.refreshTime][0];
                    break;
                case gc.c_prop.shopTypeKey.gem:
                    var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
                    reHour = c_game[gc.id_c_game.refreshTime][0];
                    break;
            }
            return reHour;
        }


        /**
         * 刷新
         * @param type 特殊商店类型 c_prop.shopTypeKey  lvlRefresh 是否等级自动刷新
         * @param cb
         * @param target
         */
        refresh(type,lvlRefresh, cb, target) {
            if(type != gc.c_prop.shopTypeKey.equip) return;
            var self = this;
            var args = {};
            var argsKeys = gc.iface.a_shop_refreshExShop_args;
            args[argsKeys.type] = type;
            args[argsKeys.lvlRefresh] = lvlRefresh;
            //检查金币是否足够
            var costGold = gc.callRefreshShop(self.getRefreshCount(type));
            if(lvlRefresh) costGold = 0;
            if(costGold > gd.userCtrl.getGold()){
                gd.userCtrl.noGolds(function(){
                    self.refresh(type,lvlRefresh, cb, target);
                }, self);
                return
            }
            self._getShopData(type,function(){
                mo.requestWaiting4Server(gc.iface.a_shop_refreshExShop, args, function (data) {
                    var shopData = self._shopMap[type];
                    var userData = data[gc.dsConsts.ExUserData.userData]||{};
                    userCtrl.updateEntity(userData);
                    var updateShopData = data[gc.dsConsts.ExUserData.shopData];
                    shopData[gc.dsConsts.ShopEntity.items] = updateShopData[gc.dsConsts.ShopEntity.items];
                    shopData[gc.dsConsts.ShopEntity.refreshCount] = updateShopData[gc.dsConsts.ShopEntity.refreshCount];
                    shopData[gc.dsConsts.ShopEntity.refreshCountResetTime] = updateShopData[gc.dsConsts.ShopEntity.refreshCountResetTime];
                    pointCtrl.cal(gc.c_prop.pointRedKey.shopMain);
                    if (cb) cb.call(target, data);
                });
            },self);

        }

        //获取刷新消耗
        getRefreshCount(type){
            var self = this;
            var shopData = self._shopMap[type];
            //todo 临时处理
            if(!shopData) return 0;
            var refreshCount = 0;       //普通商店今日刷新次数
            var refreshCountResetTime = Date.newDate(shopData[gc.dsConsts.ShopEntity.refreshCountResetTime]);     //普通商店刷新次数重置时间
            if(refreshCountResetTime && refreshCountResetTime.equalsDay(Date.newDate())) refreshCount = shopData[gc.dsConsts.ShopEntity.refreshCount]||0;     //今天
            var costDiamond = gc.callRefreshShop(refreshCount);        //刷新消耗
            return costDiamond;
        }

        /**
         * 获取剩余刷新时间(秒)
         * @param {gc.c_prop.shopTypeKey} type 商店类型
         */
        getReRefreshSeconds(type):number {
            var self = this;
            var reSeconds:number = 100000;
            var shopData = self._shopMap[type];
            switch (type) {
                case gc.c_prop.shopTypeKey.normal:
                    //var lastTime = shopData[gc.dsConsts.ShopEntity.lastTime];
                    //lastTime = new Date(lastTime);
                    //var curLastTime = commonUtils.getCurLastRefreshTime();
                    //
                    //if (curLastTime.equals(lastTime)) {
                    //    reSeconds = Date.newDate().getSecondsBetween(curLastTime.addDays(1));
                    //} else {
                    //    reSeconds = 0;
                    //}
                    break;
                case gc.c_prop.shopTypeKey.arena:
                    var refreshCountResetTime = shopData[gc.dsConsts.ShopEntity.refreshCountResetTime];
                    refreshCountResetTime = new Date(refreshCountResetTime);
                    reSeconds = Date.newDate().getSecondsBetween(refreshCountResetTime.clone());
                    break;
                case gc.c_prop.shopTypeKey.equip:
                    var lastTime = shopData[gc.dsConsts.ShopEntity.lastTime];
                    lastTime = new Date(lastTime);
                    var curLastTime = commonUtils.getCurLastRefreshTime();

                    if (curLastTime.equals(lastTime)) {
                        reSeconds = Date.newDate().getSecondsBetween(curLastTime.addDays(1));
                    } else {
                        reSeconds = 0;
                    }
                    break;
                case gc.c_prop.shopTypeKey.gem:
                    break;
                default :

                    break;
            }
            return reSeconds;
        }

        //判断商店装备是否需要更换        [index,index,...]
        isShopEquipReddot() {
            var self = this;
            var returnArr = [];
            var tempIdArr = [];
            var heroEquipArr = [];
            var cfg_c_shop = mo.getJSONWithFileName(gc.cfg_c_shop);
            var cfg_t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var cfg_t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            var lvl = gd.userCtrl.getLvl();
            var heroMap = gd.heroCtrl.getHeroMap();     //{"id":heroEntityCtrl,"id":heroEntityCtrl,..}      {"部位":物品id,....}
            var equipBag = gd.userCtrl.getEquipBag()||{};       //装备背包 {"1":[物品id,[随到的属性值],评价,是否穿戴],...}  "1":指定id,累加上去的
            for(var key in heroMap){
                tempIdArr.push(heroMap[key].get(gc.dsConsts.HeroEntity.tempId));
                heroEquipArr[heroMap[key].get(gc.dsConsts.HeroEntity.tempId)] = heroMap[key].get(gc.dsConsts.HeroEntity.equipData);
            }
            var shopData = self._shopMap[gc.c_prop.shopTypeKey.equip];
            if(!shopData) return returnArr;//判空处理
            var items = shopData[gc.dsConsts.ShopEntity.items];
            for(var i = 0; i < items.length; i++){      //[[shipId,sum,[],评分],[]...]
                var evaluate = items[i][3];        //评价
                var itemId = cfg_c_shop[items[i][0]][gc.c_shop_itemId];
                var job = cfg_t_itemEquip[itemId][gc.t_itemEquip_job];      //装备职业
                //筛去没有该职业的装备
                if(tempIdArr.indexOf(job) < 0) continue;
                var needLvl = cfg_t_item[itemId][gc.t_item_level];       //需求等级
                //剔除等级不足的装备
                if(lvl < needLvl) continue;
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
                var equipData = heroEquipArr[job];
                for(var j = 0; j < index.length;j++){
                    var partEquipEvaluate = 0;      //穿戴装备评价值
                    if(equipData[index[j]]) partEquipEvaluate = equipBag[equipData[index[j]]][2];
                    if(evaluate > partEquipEvaluate){
                        if(returnArr.indexOf(i) == -1) returnArr.push(i);
                    }
                }
            }
            return returnArr;
        }

        private _getShopData(type, cb, target) {
            var self = this;
            var shopData = this._shopMap[type];
            if (shopData) {
                var reTime = self.getReRefreshSeconds(type);
                if (reTime > 0) {
                    return cb.call(target, shopData);
                }
            }
            var args = {};
            var self = this;
            var argsKeys = gc.iface.a_shop_getInfo_args;
            args[argsKeys.type] = type;
            mo.requestWaiting4Server(gc.iface.a_shop_getInfo, args, function (data) {
                self._shopMap[type] = data;
                if (cb) cb.call(target, data);
            });
        }

        requestShopData(type, cb, target) {
            var args = {};
            var self = this;
            var argsKeys = gc.iface.a_shop_getInfo_args;
            args[argsKeys.type] = type;
            mo.request4Server(gc.iface.a_shop_getInfo, args, function (data) {
                self._shopMap[type] = data;
                pointCtrl.cal(gc.c_prop.pointRedKey.shopMain);
                if (cb) cb.call(target, data);
            });
        }
    }
    export var shopCtrl:ShopCtrl;
}