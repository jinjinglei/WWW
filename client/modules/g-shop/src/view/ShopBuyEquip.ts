/**
 * Created by Administrator on 2015/9/30.
 */
module g_shop{
    export class ShopBuyEquip extends mo.gui.Layer{
        list_items:egret.gui.List;
        _Item_list_items;

        label_nextRefreshTime:mo.gui.Label;
        grp_refresh_cost:egret.gui.Group;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ShopItem;
            self.registerClassByKey(gd.ShopCtrl, gd.ShopCtrl.ON_BUY_SUCC, self.reset);
            self.registerClassByKey(gd.UserCtrl, gd.UserCtrl.ON_TEN_LVL, self.reset);
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            self._setRefreshCost();
        }

        _setRefreshCost(){
            var self = this;
            var grp = self.grp_refresh_cost;
            var label:any = grp.getChildByName("num");
            var img:any = grp.getChildByName("icon");
            var costNum = gd.shopCtrl.getRefreshCount(gc.c_prop.shopTypeKey.equip);
            label.text = costNum > 0? costNum : "免费";
            img.width = img.height = costNum > 0? NaN : 0;
        }

        dataChanged(){
            var self = this;
            super.dataChanged();
            self.refreshList("list_items");
        }

        reset(type){
            var self = this;
            if(type != gc.c_prop.shopTypeKey.equip) return;
            gd.shopCtrl.getList(gc.c_prop.shopTypeKey.equip, function(itemList){
                self.setData({itemList:itemList});
                self.refreshList("list_items");
                self._setRefreshCost();
            },self);
        }

        _data_list_items():any[]{
            var self = this;
            process.nextTick(function(){
                mo.emitter.emit('shopList');
            });
            return self.data.itemList;
        }

        _tap_btn_refresh(){
            var self = this;
            gd.shopCtrl.refresh(gc.c_prop.shopTypeKey.equip,false,function(itemList){
                self.reset(gc.c_prop.shopTypeKey.equip);
            },self);
        }

        _tap_btn_buyAll(){
            var self = this;
            gd.shopCtrl.buyAll(gc.c_prop.shopTypeKey.equip, function(){
                self.reset(gc.c_prop.shopTypeKey.equip);
            }, self)
        }

        //_tap_btn_buyGold(){
        //    var self = this;
        //    gd.userCtrl.buyGold(function(){},self);
        //}

        _initItem_list_items(cell:ShopItem){
            var self = this;
            var ico_item:g_comp.Ico_Item = cell.ico_item;
            ico_item.showEquipName = true;
            ico_item.onClick(function(){
                g_base.BaseItemDetail.create().setData({
                    bdc: gd.BagDataCtrl.create(cell.data[0], null)
                    , extra:[cell.data[9], cell.data[8]]
                }).show();
            }, self);
        }
    }
}