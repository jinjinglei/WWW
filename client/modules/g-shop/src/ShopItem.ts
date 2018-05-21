/**
 * Created by Administrator on 2015/9/30.
 */
module g_shop{
    export class ShopItem extends mo.gui.ItemRenderer{
        static ON_BTN_BUY:string = "on_btn_buy";


        ico_item;
        label_yb0;
        label_yb;
        ico_new;
        label_vipCanBuy;
        grp_discount;
        btn_buy;
        ico_sellout;
        label_part;
        img_currency;
        img_red;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            //[物品id，数量，货币类型，正式价格,剩余购买次数,原价, 商店类型, 折扣]
            var self = this;
            self.name = "shop_cell_" + self.itemIndex;

            var data = self.data;
            var itemNum = data[1];
            var itemId = data[0];
            var moneyType = data[2];
            var moneyNum = data[3];
            var leftNum = data[4];
            var moneyNum0 = data[5];
            var discount = data[7];

            self.img_currency.source = uiHelper.resIco[utils.getCurrencyTypeItemId(moneyType)];
            self.ico_item.setData({itemId:itemId, count:0});
            self.label_yb.text = moneyNum;
            self.grp_discount.visible = false;
            //if(moneyNum0==moneyNum){
            //    self.grp_discount.visible = false;
            //}else{
            //    self.grp_discount.visible = true;
            //    self.label_yb0.text = moneyNum0;
            //}

            self.ico_new.visible = discount > 0;
            if(discount > 0){
                self.ico_new.source = mo.STR.format("ui_%s_discount", discount);
            }

            self.label_vipCanBuy.visible = false;
            self.btn_buy.visible = leftNum>0 || leftNum == -1;
            self.ico_sellout.visible = !self.btn_buy.visible;

            var shopItemType = data[6];
            self.label_part.visible = false;
            if(shopItemType && shopItemType == gc.c_prop.shopTypeKey.equip){
                self.label_part.visible = true;
                self.label_part.text =  gd.equipCtrl.getEquipTypeName(itemId);
            }

            var reddot = gd.shopCtrl.isShopEquipReddot();
            self.img_red.visible = (shopItemType == gc.c_prop.shopTypeKey.equip) && reddot.indexOf(self.itemIndex)!=-1;

        }

        _tap_btn_buy(){
            var self = this;
            var data = self.data;
            var shopItemType = data[6];
            if(shopItemType && shopItemType == gc.c_prop.shopTypeKey.equip){
                gd.shopCtrl.buy(shopItemType, self.itemIndex, 1, function(){}, self);
            }else{
                ShopBuy.create().setData({type:shopItemType, shopItem:self.data, index:self.itemIndex}).show();
            }

        }
    }
}