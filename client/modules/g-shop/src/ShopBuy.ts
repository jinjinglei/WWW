/**
 * Created by Administrator on 2015/9/30.
 */
module g_shop{
    export class ShopBuy extends mo.gui.Dlg{
        label_name;
        ico_item;
        label_canBuyNum;
        label_desc;
        label_num;
        buyNum;
        grp_res;

        onEnter(){
            super.onEnter();

            var self = this;
            var shopItem = self.data.shopItem;
            var type = self.data.type;
            //[物品id，数量，货币类型，货币价格,剩余购买次数]
            var itemId = shopItem[0];
            var itemNum = shopItem[1];
            var moneyType = shopItem[2];
            var moneyNum = shopItem[3];
            var leftNum = shopItem[4];
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);

            self.buyNum = 1;

            self.label_name.text = itemInfo[gc.t_item_name];
            self.ico_item.setData({itemId:itemId, count:0});
            self.label_desc.text = itemInfo[gc.t_item_note];
            self.label_num.text = self.buyNum;
            self.label_canBuyNum.visible = false;

            if(leftNum > 0){
                self.label_canBuyNum.text = mo.STR.format("今日可购买%s个(每日05:00更新)", leftNum);
                self.label_canBuyNum.visible = true;
            }else{
                self.label_canBuyNum.visible = false;
            }


            var itemId = utils.getCurrencyTypeItemId(moneyType);
            uiHelper.setResGrp(self.grp_res, itemId, moneyNum);
        }

        _getMaxBuyNum(){
            var self = this;
            var shopItem = self.data.shopItem;
            var moneyType = shopItem[2];
            var itemId = utils.getCurrencyTypeItemId(moneyType);
            var leftNum = shopItem[4];
            var price = shopItem[3];
            if(leftNum < 0){ //可以无限购买
                return Math.max(1, Math.floor(gd.userCtrl.getItemNum(itemId) / price));
            }
            return leftNum;
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
            self.grp_res.getChildByName("num").text = self.buyNum*self.data.shopItem[3];
        }

        _tap_btn_ok(){
            var self = this;
            if(self.data.type == gc.c_prop.shopTypeKey.rebirth){
                //转生商店
                gd.reBirthCtrl.buyRebirth(self.data.index,self.buyNum,self.close,self);
            }else{
                gd.shopCtrl.buy(self.data.type, self.data.index, self.buyNum, function(){
                    self.close();
                },self);
            }
        }
    }
}