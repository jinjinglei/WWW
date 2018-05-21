/**
 * Created by Administrator on 2015/9/30.
 */
module g_bag{
    export class BagOpenBox extends mo.gui.Dlg{
        label_name;
        ico_item;
        label_canBuyNum;
        label_desc;
        label_num;
        buyNum;
        grp_res;
        container;
        btn_ok;
        grp_cost;
        ico_itemCost;
        label_itemCostName;
        label_itemCostNum;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var bdc = self.data.bdc;
            self.buyNum = bdc.count;
            self.label_name.text = bdc.name;
            self.ico_item.setData({itemId:bdc.tempId, count:0});
            self.ico_item.label_text.visible = false;
            self.label_desc.text = bdc.note;
            self.label_num.text = self.buyNum;
            self.container.title = (bdc.type == gc.c_prop.itemTypeKey.chest)? "tit_txt_g_useBox" : "tit_txt_g_useItem";
            var needItemData = gd.userCtrl.getNeedItems(bdc.tempId);
            if (needItemData[0] != 0) {
                self.buyNum = gd.userCtrl.getItemNum(needItemData[1]) / needItemData[0] >> 0;
                if (self.buyNum < 1) self.buyNum = 1;
                if (self.buyNum > bdc.count) self.buyNum = bdc.count;
                self.grp_cost.visible = true;
                self.btn_ok.icon = "btn_txt_g_kaiqig";
                self.ico_itemCost.source = resHelper.getItemIconPath(needItemData[1]);
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, needItemData[1]);
                self.label_itemCostName.text = itemInfo[gc.t_item_name];
                self.label_itemCostNum.text = gd.userCtrl.getItemNum(needItemData[1]) + "/" + needItemData[0] * self.buyNum;
                self.showNum();
            } else {
                self.grp_cost.visible = false;
                self.btn_ok.icon = "btn_txt_g_ok";
            }
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            var bdc = self.data.bdc;
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
            if(self.buyNum<self.data.bdc.count){
                self.buyNum++;
                self.showNum();
            }
        }
        _tap_btn_min(){
            var self = this;
            self.buyNum = 1;
            self.showNum();
        }
        _tap_btn_max(){
            var self = this;
            self.buyNum = self.data.bdc.count;
            self.showNum();
        }
        showNum(){
            var self = this;
            var bdc = self.data.bdc;
            self.label_num.text = self.buyNum;
            var needItemData = gd.userCtrl.getNeedItems(bdc.tempId);
            if (needItemData[0] != 0) {
                self.label_itemCostNum.text = gd.userCtrl.getItemNum(needItemData[1]) + "/" + needItemData[0] * self.buyNum;
            }
        }

        _tap_btn_ok(){
            var self = this;
            if(self.data.bdc.level > gd.userCtrl.getLvl()){
                mo.showMsg(gc.id_c_msgCode.noLvlUse,self.data.bdc.level);
                return;
            }
            if(self.data.bdc.vip && self.data.bdc.vip > gd.userCtrl.getVip()){
                mo.showMsg(gc.id_c_msgCode.vipItemRequire, self.data.bdc.vip);
                return;
            }
            var bdc = self.data.bdc;
            var needItemData = gd.userCtrl.getNeedItems(bdc.tempId);
            if (needItemData[0] != 0) {
                var itemId = needItemData[1];
                if (gd.userCtrl.getItemNum(needItemData[1]) < needItemData[0] * self.buyNum) {
                    if (g_base.GainWay.canBuyFromShop(itemId)) {
                        g_base.GainWayShop.create().setData({
                            itemId: itemId,
                            count: needItemData[0] * self.buyNum - gd.userCtrl.getItemNum(needItemData[1])
                        }).show().onClose(function () {
                            self.showNum();
                        });
                    } else {
                        g_base.GainWay.create().setData({itemId: itemId}).show();
                    }
                    return;
                }
            }
            gd.userCtrl.getBagChest(self.data.bdc.tempId, self.buyNum, function(){
                self.close();
            },self);
        }
    }
}