/**
 * Created by admin on 16/4/12.
 */
module g_bag {

    /**
     *
     * @author
     *
     */
    export class BagSale extends mo.gui.Layer {

        ckb_orange;
        ckb_purple;
        ckb_blue;
        ckb_green;
        ckb_white;
        ckb_below;

        label_orange;
        label_purple;
        label_blue;
        label_green;
        label_white;
        label_below;

        label_get;
        btn_sale;

        grp_gold_container;
        grp_gold;
        grp_yuanbao;
        grp_items;

        label_gold;
        label_yuanbao;
        label_items;

        _selectArray:Array<boolean>;
        items:any;
        sendAry:Array<number>;

        _initProp() {
            var self = this;
            super._initProp();
            self._selectArray = [false,false,false,false,false,false];
            self.sendAry = [];
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.items = gd.BagDataCtrl.getEquipSalesInfo();
            self.label_white.text = "装备(剩余"+ self.items[1].length+")";
            self.label_green.text = "装备(剩余"+ self.items[2].length+")";
            self.label_blue.text = "装备(剩余"+ self.items[3].length+")";
            self.label_purple.text = "装备(剩余"+ self.items[4].length+")";
            self.label_orange.text = "装备(剩余"+ self.items[5].length+")";
            self.label_below.text = "装备(剩余"+ self.items['below'].length+")";
            self._changeReward();
        }

        _changeReward(){
            var self = this;
            var equips = {};
            var rewards = {};
            for(var i=0;i<6;i++){
                if(self._selectArray[i]){
                    var index = i==0?'below':i;
                    var items = self.items[index];
                    for(var j=0;j<items.length;j++){
                        var bdc = items[j];
                        equips[bdc.equipId] = bdc;
                    }
                }
            }
            self.sendAry  = [];
            for(var eId in equips){
                self.sendAry.push(eId);
                var bdc = equips[eId];
                for(var x=0;x<bdc.rewards.length;x++){
                    var rId = bdc.rewards[x][0];
                    var rCount = bdc.rewards[x][1];
                    var now = rewards[rId];
                    if(!now ){
                        var item = mo.getJSONWithFileNameAndID(gc.cfg_t_item,rId);
                        rewards[rId] = {'c':rCount,'n':item[gc.t_item_name]};
                    }else{
                        rewards[rId]['c'] =  now['c'] + rCount;
                    }
                }
            }

            self._changeRewardView(rewards);
        }


        _changeRewardView(rewards){
            var self = this;
            self.label_items.text  = "";
            if(self.grp_gold.parent)self.grp_gold_container.removeElement(self.grp_gold);
            if(self.grp_yuanbao.parent)self.grp_gold_container.removeElement(self.grp_yuanbao);
            for(var rId in rewards){
                var rObj = rewards[rId];
                if(rId == 99){
                    if(!self.grp_gold.parent)self.grp_gold_container.addElement(self.grp_gold);
                    self.label_gold.text = "获得: "+ rObj['c'];
                }else if(rId == 200){
                    if(!self.grp_yuanbao.parent)self.grp_gold_container.addElement(self.grp_yuanbao);
                    self.label_yuanbao.text = + rObj['c'];
                }else{
                    self.label_items.text = self.label_items.text +" "+rObj['n']+"x"+rObj['c'];
                }
            }
        }

        _tap_btn_sale(){
            var self = this;
            if(self.sendAry.length == 0)return mo.showMsg("未选择或者没有可出售装备");
            mo.showMsg(gc.id_c_msgCode.ifSellItem2,function() {
                gd.equipCtrl.sellEquipItem(self.sendAry,function(){
                    self.close();
                },self);
            });
        }

        _tap_btn_info(){
            var self = this;
            g_base.BaseShowTip.create().setData({id:207}).show();
        }

        _chg_ckb_orange(){
            var self = this;
            self._selectArray[5] = !self._selectArray[5];
            self._changeReward();
        }

        _chg_ckb_purple(){
            var self = this;
            self._selectArray[4] = !self._selectArray[4];
            self._changeReward();
        }

        _chg_ckb_blue(){
            var self = this;
            self._selectArray[3] = !self._selectArray[3];
            self._changeReward();
        }

        _chg_ckb_green(){
            var self = this;
            self._selectArray[2] = !self._selectArray[2];
            self._changeReward();
        }

        _chg_ckb_white(){
            var self = this;
            self._selectArray[1] = !self._selectArray[1];
            self._changeReward();
        }

        _chg_ckb_below(){
            var self = this;
            self._selectArray[0] = !self._selectArray[0];
            self._changeReward();
        }
    }

}