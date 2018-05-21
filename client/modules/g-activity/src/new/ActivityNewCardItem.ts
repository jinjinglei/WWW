/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewCardItem extends mo.gui.Layer {
        label_text:egret.gui.Label;
        index:number;
        ico_head;
        root;
        group_free;
        group_money;
        label_freenum;
        ico_item;
        rect_textBg;
        btn_flipped;
        group_card;

        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.index = -1;
            self.root = null;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(!self.data) return;

            self.index = self.data.index;
            self.root  = self.data.root;

            self.btn_flipped.visible = true;
            self.group_card.visible = true;
            self.ico_item.setLineWidth(80);
            self.ico_item.onClick(function(data){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data.data["itemId"], null)}).show();
            });

        }

        setIndex(index){
            var self = this;
            self.index = index;

        }

        _tap_group_card(){
            var self = this;
            self.root.clickCard( self.index);
        }

        _tap_btn_flipped(){
            var self = this;
            self.root.clickFlip(self.index);
        }
        
        setMoneyInfo(data){
            var self = this;
            var freeNum = data.freeNum;
            var neeMoney = data.neeMoney;
            var costItemId = data.costItemId;
            var totalFreeCount = data.totalFreeCount;

            self.group_free.visible = freeNum > 0;
            self.group_money.visible = freeNum == 0;

            if(freeNum > 0 ){
                self.label_freenum.text = freeNum.toString() + "/"+ totalFreeCount.toString();
            }
            else{
                var label_cost = self["label_cost_have"];
                label_cost.text = ""+utils.formatByWan(neeMoney,0);
                var ico = self["ico_cost_icon"];
                if( costItemId == gc.c_prop.spItemIdKey.gold){
                    self.setItemIcon(ico, costItemId)
                }
                else if( costItemId == gc.c_prop.spItemIdKey.diamond) {
                    ico.source = "ico_yuanbao";
                }
                else{
                    ico.source = resHelper.getItemIconPath(costItemId);
                    ico.scaleX = 0.5;
                    ico.scaleY = 0.5;
                    ico.anchorOffsetY = ico.height*0.5;
                }
            }
        }

        setItemIcon( iconItem,spItemId){
            var self = this;
            var imgPath = resHelper.getSmallItemPath(spItemId);
            RES.getResByUrl(imgPath, function (texture:egret.Texture) {
                iconItem.source = texture;
            }, self, RES.ResourceItem.TYPE_IMAGE);

        }


        showItem(item){
            var self = this;

            if(!self.ico_item)return;
            var effect = self["card_effect"];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function(){
                effect.visible = false;
            });
            _hitEfxPlayer.play();


            var itemId = item[gc.c_luckyMajong_itemID];
            self.ico_item.setData({itemId:itemId , count: item[gc.c_luckyMajong_amount]});

            var textHeight = self.ico_item.getTextHeight();
            self.rect_textBg.height = textHeight +7;

            //var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            //label_item.text = itemInfo[gc.t_item_name];

            self.group_card.visible = false;
            var grp_item = self["grp_item"];
            grp_item.visible = true;
        }

        hideItem(){
            var self = this;
            var effect = self["card_effect"];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function(){
                effect.visible = false;
            });
            _hitEfxPlayer.play();
            self.group_card.visible = true;
            var grp_item = self["grp_item"];
            grp_item.visible = false;
        }
    }
}