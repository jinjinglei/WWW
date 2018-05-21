/**
 * Created by Administrator on 2016/1/21.
 */

module g_rebirth{
    export class RebirthExp extends mo.gui.Dlg {

        grp_expBar:egret.gui.Group;

        _initProp(){
            super._initProp();
            var self = this;
            self.registerClassByKey(gd.userCtrl, gc.dsConsts.UserEntity.rebirthExp.toString(), self._refreshUi);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self._refreshUi();
        }

        _refreshUi(){
            var self = this;
            self._refreshExp();
            self._refreshItems();
        }

        img_exp: egret.gui.UIAsset;
        label_exp:mo.gui.Label;
        _refreshExp(){
            var self = this;
            var curRebirthLvl = gd.reBirthCtrl.getRebirthLvl();
            var nextRebirthLvl = curRebirthLvl + 1;
            var nextRebirthData = gd.reBirthCtrl.getRebirthCfg(nextRebirthLvl);
            if(!nextRebirthData)return;
            var all = nextRebirthData.exp;
            var now = gd.reBirthCtrl.getRebirthExp();
            var per = now/all;
            per = per >= 1 ? 1 : per;
            var precent = self.img_exp.height - Math.floor((1 - per)*self.img_exp.height);
            self.img_exp.mask = new egret.Rectangle(0,self.img_exp.height-precent,self.img_exp.width,precent);
            self.label_exp.text = [(now/10000).toFixed(1),(all/10000).toFixed(1)];
        }

        _refreshItems(){
            var self = this;
            var items = gd.reBirthCtrl.getItems();
            for(var i = 0;i < 3;i++){
                var itemId = items[i];
                var grp:egret.gui.Group = self["grp_" + i];
                if(!itemId){
                    grp.visible = false;
                    continue;
                }
                grp.visible = true;
                self._updateItem(i,itemId);
            }
        }

        _updateItem(index,itemId){
            var self = this;
            var ico_item:g_comp.Ico_Item = self["ico_item" + index];
            ico_item.setData({itemId:itemId,count:1});
            ico_item.label_text.visible = false
            ico_item.onClick(self._showDetai, self, itemId);

            var t_item = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var name = t_item[gc.t_item_name];
            var quality = t_item[gc.t_item_color];
            var str = mo.STR.format("[ubb color=%s]%s[/ubb]", uiHelper.getColorByQuality(quality), name);
            var label_name:mo.gui.Label = self["label_name" + index]
            label_name.text = str;

            var label_num:mo.gui.Label = self["label_num" + index];
            var btn_buy:egret.gui.Button = self["btn_buy" + index];
            var btn_use:egret.gui.Button = self["btn_use" + index];


            var data  = gd.reBirthCtrl.getItemBagDataCtrl(itemId);
            if(!data){
                //背包里没有这个东西
                label_num.text = 0;
                btn_buy.visible = true;
                btn_use.visible = false;
                //btn_buy.enabled = gd.reBirthCtrl.getItemShopLeftNum(index) > 0;
            }else{
                label_num.text = data.count;
                btn_buy.visible = false;
                btn_use.visible = true;
            }
        }

        _showDetai(comp, ico, itemId){
            var self = this;
            var bdc = gd.BagDataCtrl.create(itemId, null);
            g_base.BaseItemDetail.create().setData({bdc: bdc}).show();
        }

        calUseBtn(index){
            var self = this;
            var items = gd.reBirthCtrl.getItems();
            var data  = gd.reBirthCtrl.getItemBagDataCtrl(items[index]);
            if(!data) return;

            g_bag.BagOpenBox.create().setData({bdc: data}).show().onClose(self._refreshUi, self);;
        }

        calBuyBtn(index){
            var self = this;
            var data = gd.reBirthCtrl.getItemShopData(index);
            //购买次数不足
            if(data[4] <= 0){
                mo.showMsg(gc.id_c_msgCode.buyLimitNow);
                return;
            }

            g_shop.ShopBuy.create().setData({type:gc.c_prop.shopTypeKey.rebirth, shopItem:data, index:index}).show().onClose(self._refreshUi, self);
        }

        _tap_btn_use0(){
            this.calUseBtn(0);
        }

        _tap_btn_use1(){
            this.calUseBtn(1);
        }

        _tap_btn_use2(){
            this.calUseBtn(2);
        }

        _tap_btn_buy0(){
            this.calBuyBtn(0);
        }

        _tap_btn_buy1(){
            this.calBuyBtn(1);
        }

        _tap_btn_buy2(){
            this.calBuyBtn(2);
        }
    }
}