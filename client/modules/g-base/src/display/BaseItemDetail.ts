/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{

    export interface IItemDetailData {
        bdc:gd.BagDataCtrl;
        extra?:any;
    }

    export class BaseItemDetail extends mo.gui.Dlg{
        outsideClosable = true;

        ico_item:g_comp.Ico_Item;
        label_name:mo.gui.Label;
        label_desc1:mo.gui.Label;
        label_desc2:mo.gui.Label;
        label_desc3:mo.gui.Label;
        label_specialEquip:mo.gui.Label;

        buyNum;
        img_bg;

        data:IItemDetailData;
        grp_equip;
        grp_item_sale;
        grp_rewards;
        grp_gold;
        grp_yuanbao;
        grp_gold_container;
        label_gold;
        label_yuanbao;
        grp_items;
        label_items;
        grp_sell_btns;

        btn_ok;
        btn_sell;
        btn_sale;
        btn_lock;
        btn_unlock;

        label_locked;
        label_unlocked;
        label_num;

        rewards;

        _childrenCreated(){
            super._childrenCreated();
            this.ico_item.label_text.visible = false;
            this.label_specialEquip.visible = false;
            this.label_locked.visible = false;
            this.label_unlocked.visible = false;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var bdc = self.data.bdc;


            self.ico_item.set('itemId', bdc.tempId);
            self.label_name.text = bdc.name;

            self.grp_equip.visible = false;
            self.grp_item_sale.visible = false;
            if(bdc.isEquip()){
                self.grp_equip.visible = true;
                self._setEquipInfo();
                self.img_bg.height = 440;
            }else{
                self._setItemInfo();
            }

            var isBag = self.data['isBag'];
            if(!isBag || isBag==0){
                self.grp_equip.visible = false;
                self.grp_item_sale.visible = false;
                self.btn_ok.visible = true;
                self.img_bg.height = 400;
            }
        }

        _calculateRewards(){
            var self = this;
            self.label_items.text  = "";
            if(self.grp_gold.parent)self.grp_gold_container.removeElement(self.grp_gold);
            if(self.grp_yuanbao.parent)self.grp_gold_container.removeElement(self.grp_yuanbao);
            for(var rId in self.rewards){
                var rObj = self.rewards[rId];
                if(rId == 99){
                    if(!self.grp_gold.parent)self.grp_gold_container.addElement(self.grp_gold);
                    self.label_gold.text = "获得: "+ rObj['c']*self.buyNum;
                }else if(rId == 200){
                    if(!self.grp_yuanbao.parent)self.grp_gold_container.addElement(self.grp_yuanbao);
                    self.label_yuanbao.text = ""+ rObj['c']*self.buyNum;
                }else{
                    self.label_items.text = self.label_items.text +" "+rObj['n']+"x"+rObj['c']*self.buyNum;
                }
            }
            process.nextTick(function() {
                process.nextTick(function () {
                    self.img_bg.height = self.grp_item_sale.y - self.img_bg.y + self.grp_item_sale.height + 20;
                });
            });
        }

        _setItemInfo(){
            var self = this;
            this.ico_item.label_text.visible = false;
            var bdc = self.data.bdc;
            self.label_desc1.text = mo.STR.format("需求等级Lv%s", bdc.level);
            self.label_desc2.text = bdc.note;
            self.label_desc3.visible = false;
            var sellitem = mo.getJSONWithFileName(gc.cfg_t_sellItem);
            if(sellitem[bdc.tempId]){
                self.rewards = {};
                //可以售卖的物品
                self.buyNum = 1;
                self.grp_item_sale.visible = true;
                var reward_arr = sellitem[bdc.tempId][gc.t_sellItem_items];
                for(var x=0;x< reward_arr.length;x++){
                    var rId = reward_arr[x][0];
                    var rCount = reward_arr[x][1];
                    var now = self.rewards[rId];
                    if(!now ){
                        var item = mo.getJSONWithFileNameAndID(gc.cfg_t_item,rId);
                        self.rewards[rId] = {'c':rCount,'n':item[gc.t_item_name]};
                    }else{
                        self.rewards[rId]['c'] =  now['c'] + rCount;
                    }
                }
                self._calculateRewards();
            }else{
                //不能售卖的物品
                self.grp_item_sale.visible = false;
                self.btn_ok.visible = true;
                self.img_bg.height = 395;
                self.btn_ok.icon = "btn_txt_g_ok";
                if(bdc.type == gc.c_prop.itemTypeKey.custom){
                    self.btn_ok.icon = "btn_txt_g_dingzisfg";
                }
                //else if(bdc.type == gc.c_prop.itemTypeKey.gift){
                //    self.btn_ok.icon = "btn_txt_g_jihuos";
                //}
            }
        }

        _setEquipInfo(){
            var self = this;
            this.ico_item.label_text.visible = true;

            var bdc = self.data.bdc;
            var extra = self.data.extra;
            //如果没有实例id,既不是传承装备或极品装备也没有额外指定extra,则认为是未知装备
            var isUnknow = (bdc.equipId == null && !extra
            && !(gd.equipCtrl.isSpecialEquip(bdc.tempId) || gd.equipCtrl.isRareEquip(bdc.tempId)));

            //在没有equipId的情况下,如果有extra值,则优先使用extra的值
            var evaluate = isUnknow? 0 : (
                bdc.equipId?
                    gd.equipCtrl.getEquipEvaluate(bdc.equipId)
                    : ((extra && extra[0] != null)? extra[0] : gd.equipCtrl.getSpecialEquipEvaluate(bdc.tempId)));
            var addPropObj = isUnknow? [] : (
                bdc.equipId?
                    gd.equipCtrl.getEquipExtraObj(bdc.equipId)
                    : utils.kvArr2KvObj((extra && extra[1] != null)? extra[1] : gd.equipCtrl.getSpecialEquipExtra(bdc.tempId)));

            self.label_desc1.text = isUnknow?
                mo.STR.format("[ubb]部位: %s[/ubb]", bdc.equipTypeName)
                :
                mo.STR.format(
                "[ubb]评分: %s[/ubb][/br][ubb]部位: %s[/ubb]", evaluate, bdc.equipTypeName);

            var basePropArr = bdc.proptys;
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var str = "", propData;
            for(var i = 0, li = basePropArr.length; i < li; i++){
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, isUnknow? " ?" : (addPropObj[key] || 0));
            }
            self.label_desc2.text = str;
            self.label_desc3.text = mo.STR.format("需求等级Lv%s", bdc.level);
            uiHelper.setLabelGreenOrRed(self.label_desc3, gd.userCtrl.getLvl() >= bdc.level);
            self.label_specialEquip.visible = gd.equipCtrl.isSpecialEquip(bdc.tempId);

            self.label_locked.visible = bdc.islock?true:false;
            self.label_unlocked.visible = bdc.islock?false:true;
            if(bdc.islock == 1){
                self.grp_sell_btns.visible = false;
                self.btn_unlock.visible = true;
            }else{
                self.grp_sell_btns.visible = true;
                self.btn_unlock.visible = false;
            }
        }

        _tap_btn_lock(){
            var self = this;
            var bdc = self.data.bdc;
            var cell:any = self.data["item"];
            if(bdc.isEquip()){
                gd.equipCtrl.updateEquipItemLockStatus(bdc.equipId,true,function(){
                    bdc.islock = 1;
                    self.label_locked.visible = bdc.islock?true:false;
                    self.label_unlocked.visible = bdc.islock?false:true;
                    self.btn_lock.visible = false;
                    self.btn_unlock.visible = true;
                    cell.ico_lock.visible = true;
                    self.grp_sell_btns.visible = false;
                },self);
            }
        }

        _tap_btn_unlock(){
            var self = this;
            var bdc = self.data.bdc;
            var cell:any = self.data["item"];
            if(bdc.isEquip()){
                gd.equipCtrl.updateEquipItemLockStatus(bdc.equipId,false,function(){
                    bdc.islock = 0;
                    self.label_locked.visible = bdc.islock?true:false;
                    self.label_unlocked.visible = bdc.islock?false:true;
                    self.btn_lock.visible = true;
                    self.btn_unlock.visible = false;
                    cell.ico_lock.visible = false;
                    self.grp_sell_btns.visible = true;
                },self);
            }
        }

        _tap_btn_sell(){
            var self = this;
            var bdc = self.data.bdc;
            var gotStr = "";
            var sellitem = mo.getJSONWithFileName(gc.cfg_t_sellItem);
            if(sellitem[bdc.tempId]){

                var items = sellitem[bdc.tempId][gc.t_sellItem_items];
                for(var rId in items){
                    var rObj = items[rId];
                    var item = mo.getJSONWithFileNameAndID(gc.cfg_t_item,rObj[0]);
                    gotStr = gotStr +" "+item[gc.t_item_name]+"x"+rObj[1]*self.buyNum;
                }
            }
            mo.showMsg(gc.id_c_msgCode.ifSellItem,gotStr,function() {
                gd.userCtrl.sellItems(bdc.tempId,self.buyNum,function(){
                    self.close();
                },self);
            });
        }

        _tap_btn_sale(){
            var self = this;
            var bdc = self.data.bdc;
            var gotStr = "";
            var sellitem = mo.getJSONWithFileName(gc.cfg_t_sellItem);
            var needStr:string = "";
            var needItems= null;
            if(sellitem[bdc.tempId]){
                var items = sellitem[bdc.tempId][gc.t_sellItem_items];
                needItems = sellitem[bdc.tempId][gc.t_sellItem_sells];
                for(var rId in needItems){
                    var rObj = needItems[rId];
                    var item = mo.getJSONWithFileNameAndID(gc.cfg_t_item,rObj[0]);
                    needStr = needStr +" "+item[gc.t_item_name]+"x"+rObj[1];
                }

                for(var rId in items){
                    var rObj = items[rId];
                    var item = mo.getJSONWithFileNameAndID(gc.cfg_t_item,rObj[0]);
                    gotStr = gotStr +" "+item[gc.t_item_name]+"x"+rObj[1];
                }
            }

            if( needStr.length > 0){
                mo.showMsg(gc.id_c_msgCode.ifSellItem3,needStr,gotStr,function() {
                    //checkItemEnought
                    var enought :boolean = self.checkNeedItemEnough( needItems);
                    if( enought == false){
                        mo.showMsg("物品不足");
                        return;
                    }

                    gd.equipCtrl.sellEquipItem([bdc.equipId], function(){
                        self.close();
                    },self);
                });
            }
            else{
                mo.showMsg(gc.id_c_msgCode.ifSellItem,gotStr,function() {
                    gd.equipCtrl.sellEquipItem([bdc.equipId],function(){
                        self.close();
                    },self);
                });
            }

        }

        checkNeedItemEnough(needItems){

            //for(var rId in needItems){
            //    var rObj = needItems[rId];
            //    var item = mo.getJSONWithFileNameAndID(gc.cfg_t_item,rObj[0]);
            //    needStr = needStr +" "+item[gc.t_item_name]+"x"+rObj[1];
            //
            //    var id = rObj[0];
            //    var value = rObj[1];
            //    if(元宝)
            //
            //        rObj[0]
            //
            //    if(!bag[gc.c_prop.spItemIdKey.plumage] || bag[gc.c_prop.spItemIdKey.plumage] <= 0) {
            //        if (isUseDiamond == false) {
            //            mo.showMsg(gc.id_c_msgCode.notEnoughFeather);//羽毛不足
            //        }
            //
            //    }
            //}


            return true;
        }

        _tap_btn_ok(){
            var self = this;
            self.close();
            var bdc = self.data.bdc;
            if(bdc.type == gc.c_prop.itemTypeKey.custom){
                mo.moduleMgr.runModule(g_consts.moduleId.customList, {itemId: bdc.tempId});
            }
            //else if(bdc.type == gc.c_prop.itemTypeKey.gift){
            //    gd.heroTalismanCtrl.useTrumpItem(bdc.tempId,function(){
            //        self.close();
            //    },self);
            //}
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
            self._calculateRewards();
        }
    }
}