/**
 * Created by Sara on 2015/10/4.
 */
module gd {
    export class LotteryCtrl extends mo.DataController {

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.LotteryEntity;
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
        }

        //获取探宝值
        getTreasureValue() {
            return this.get(gc.dsConsts.LotteryEntity.treasureValue);
        }

        //获取探宝宝箱领取次数
        getTreasureChestCount() {
            return this.get(gc.dsConsts.LotteryEntity.treasureChestCount);
        }

        //初始化抽奖数据
        getInfo(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_lottery_getInfo, {}, function (data) {
                self.init(data);
                cb.call(target,data);
            });
        }

        /**
         * 抽奖
         * @param type 抽奖类型
         * @param count 抽奖次数
         * @param cb
         * @param target
         */
        lottery(type,count,cb,target) {
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var bag =  gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var diamond =  gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
            var cosDiamond = 0;
            var goldenCount = 0;
            for(var i = 0; i < count; i++) {
                switch (type) {
                    case gc.c_prop.lotteryTypeKey.common:      //普通
                        //ws.recordEvent("普通探宝次数", 1);
                        var goldenKey = bag[gc.c_prop.spItemIdKey.goldenKey] || 0;
                        if (goldenKey <= goldenCount) {      //优先扣除摸金符
                            cosDiamond += c_game[gc.id_c_game.lotteryCostCfg][0];
                        }else{
                            goldenCount +=1;
                        }
                        break;
                    case gc.c_prop.lotteryTypeKey.advanced:        //高级
                        //ws.recordEvent("高级探宝次数", 1);
                        cosDiamond += c_game[gc.id_c_game.lotteryCostCfg][1];
                        break;
                    case gc.c_prop.lotteryTypeKey.supremacy:       //至尊
                        //ws.recordEvent("至尊探宝次数", 1);
                        cosDiamond += c_game[gc.id_c_game.lotteryCostCfg][2];
                        break;
                }
            }
            if (diamond < cosDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);
            var argKeys = gc.iface.a_lottery_lottery_args;
            var args = {};
            args[argKeys.type] = type;
            args[argKeys.count] = count;
            mo.requestWaiting4Server(gc.iface.a_lottery_lottery, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var lotteryData = data[gc.dsConsts.ExUserData.lotteryData]||{};
                var items = data[gc.dsConsts.ExUserData.items]||{};       //抽奖所得OBJ {itemId:数量，itemId:数量，。。。}
                var treasureValue = data[gc.dsConsts.ExUserData.treasureValue]||0;      //获得探宝值
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                self.updateEntity(lotteryData);
                gd.userCtrl.updateEntity(userData);
                cb.call(target,[items,treasureValue]);
            });
        }

        /**
         * 领取探宝值宝箱
         * @param cb
         * @param target
         */
        getTreasureChest(cb,target) {
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var treasureValue = self.get(gc.dsConsts.LotteryEntity.treasureValue);     //探宝值
            var needTreValue = c_game[gc.id_c_game.lotteryCostCfg][6];        //单条经验需要的探宝值
            if(treasureValue < needTreValue) return mo.showMsg("探宝值不足");
            mo.requestWaiting4Server(gc.iface.a_lottery_getTreasureChest, {}, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var lotteryData = data[gc.dsConsts.ExUserData.lotteryData]||{};
                var items = data[gc.dsConsts.ExUserData.items]||{};     //探宝值宝箱所得OBJ  {itemId:数量，itemId:数量，。。。}
                var cosTreValue = data[gc.dsConsts.ExUserData.cosTreValue]||0;      //扣除探宝值
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                self.updateEntity(lotteryData);
                gd.userCtrl.updateEntity(userData);
                cb.call(target,[items,cosTreValue]);
            });
        }

    }
    export var lotteryCtrl:LotteryCtrl;
}