/**
 * Created by Administrator on 2015/9/30.
 */
module g_shop{
    export class Shop extends mo.gui.Layer{
        list_items:egret.gui.List;
        _Item_list_items;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ShopItem;
            self.registerClassByKey(gd.ShopCtrl, gd.ShopCtrl.ON_BUY_SUCC, self.reset);
        }

        reset(type){
            var self = this;
            if(self.data.shopItemType != type) return;
            gd.shopCtrl.getList(type,function(itemList){
                self.setData({itemList:itemList});
                self.refreshList("list_items");
            }, self);
        }

        dataChanged(){
            var self = this;
            super.dataChanged();
            self.refreshList("list_items");
        }

        _data_list_items():any[]{
            var self = this;
            return self.data.itemList;
        }

        _initItem_list_items(cell:ShopItem){
            var self = this;
            var ico_item:g_comp.Ico_Item = cell.ico_item;
            ico_item.onClick(function(){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(cell.data[0], 1)}).show();
            }, self);
        }
    }
}