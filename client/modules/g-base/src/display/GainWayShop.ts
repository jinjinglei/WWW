/**
 * Created by Administrator on 2015/11/5.
 */
/**
 * Created by Administrator on 2015/11/5.
 */
module g_base {
    export class GainWayShop extends GainWay {
        label_canBuyNum;
        label_desc;
        label_num;
        buyNum;
        shopItem;
        index;
        label_costOne;
        label_costAll;

        _initProp(){
            super._initProp();
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var count = self.data.count||0;
            if(count<1) count = 1;
            self.buyNum = count;
            var shopType = self.getShopType();
            gd.shopCtrl.getList(shopType,function(itemList){
                for(var i=0; i<itemList.length; ++i){
                    var shopItem = itemList[i];
                    //[物品id，数量，货币类型，货币价格,剩余购买次数]
                    var itemId = shopItem[0];
                    if(itemId == self.data.itemId){
                        self.shopItem = shopItem;
                        self.index = i;
                        self.label_costOne.text = shopItem[3];
                        self.showNum();
                        break;
                    }
                }
            },self);
        }
        protected showGainWayList(){
            var self = this;
            var itemId = self.data.itemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var dropIdDatas = [].concat(itemInfo[gc.t_item_dropId]||[]);
            if(dropIdDatas.length){
                for(var i=0; i<dropIdDatas.length; ++i){
                    var ary = dropIdDatas[i];
                    if(ary[0] == 6 && ary[1]==2){
                        dropIdDatas.splice(i--,1);
                        break;
                    }
                }
                self.list_gainWay.dataProvider = new egret.gui.ArrayCollection(dropIdDatas);
            }
            self.label_noOut.visible = dropIdDatas.length==0;
            self.list_gainWay.visible = dropIdDatas.length!=0;
        }
        getShopType(){
            var self = this;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item,self.data.itemId);
            var shopType = 0;
            if(itemInfo[gc.t_item_type]==gc.c_prop.itemTypeKey.gem){
                shopType = gc.c_prop.shopTypeKey.gem;
            }else{
                shopType = gc.c_prop.shopTypeKey.normal;
            }
            return shopType;
        }
        setCurShopItem(){
            var self = this;
            var shopItem = self.shopItem;
            var itemId = shopItem[0];
            var itemNum = shopItem[1];
            var moneyType = shopItem[2];
            var moneyNum = shopItem[3];
            var leftNum = shopItem[4];


        }

        _tap_btn_sub(){
            var self = this;
            if(self.buyNum>1){
                self.buyNum--;
                self.showNum();
            }
        }
        _tap_btn_add(){
            var self = this;
            if(self.buyNum<self._getMaxBuyNum()){
                self.buyNum++;
                self.showNum();
            }
        }
        _tap_btn_min(){
            var self = this;
            self.buyNum -= 10;
            if(self.buyNum<1)
                self.buyNum = 1;
            self.showNum();
        }
        _tap_btn_max(){
            var self = this;
            self.buyNum += 10;
            if(self.buyNum>self._getMaxBuyNum())
                self.buyNum = self._getMaxBuyNum();
            self.showNum();
        }
        showNum(){
            var self = this;
            self.label_num.text = self.buyNum;
            self.label_costAll.text = self.buyNum*self.shopItem[3];
        }
        _getMaxBuyNum(){
            var self = this;
            var shopItem = self.shopItem;
            var moneyType = shopItem[2];
            var itemId = utils.getCurrencyTypeItemId(moneyType);
            var leftNum = shopItem[4];
            var price = shopItem[3];
            if(leftNum < 0){ //可以无限购买
                return Math.max(1, Math.floor(gd.userCtrl.getItemNum(itemId) / price));
            }
            return leftNum;
        }

        _tap_btn_ok(){
            var self = this;
            var shopType = self.getShopType();
            gd.shopCtrl.buy(shopType, self.index, self.buyNum, function(){
                self.close();
            },self);
        }
        _tap_btn_recharge(){
            mo.moduleMgr.pushModule(g_consts.moduleId.recharge);
        }
    }
}