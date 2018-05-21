/**
 * Created by Administrator on 2015/9/30.
 */
module g_shop{
    export class ArenaShopItem extends mo.gui.ItemRenderer{
        ico_item;
        label_sw;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            //[物品id，数量，货币类型，货币价格,剩余购买次数]
            var self = this;
            var data = self.data;
            var itemNum = data[1];
            var itemId = data[0];
            var moneyType = data[2];
            var moneyNum = data[3];
            var leftNum = data[4];

            self.ico_item.setData({itemId:itemId, count:0});
            self.label_sw.text = moneyNum;
        }

        _tap_btn_buy(){
            var self = this;
            ShopBuy.create().setData({type:gc.c_prop.shopTypeKey.arena, shopItem:self.data, index:self.itemIndex}).show();
        }
    }
}