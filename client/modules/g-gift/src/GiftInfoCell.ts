/**
 * Created by Administrator on 2016/5/17.
 */
module g_gift {
    export class GiftInfoCell extends mo.gui.ItemRenderer {
        ico_gift;
        grp_has;
        label_combat;
        label_lv;
        label_ziZhi;
        label_star;
        grp_no;
        label_desc;
        btn_act;
        btn_gain;
        grp_star;

        _initProp() {
            var self = this;
            super._initProp();
            self.registerClassByKey(gd.HeroTalismanCtrl, gd.HeroTalismanCtrl.ON_GIFT_CHANGED, self.onGiftChanged);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }
        dataChanged() {
            super.dataChanged();
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            var giftId = giftInfo[gc.t_talisman_id];
            self.ico_gift.setData({itemId:giftId});
            var talismans = gd.heroTalismanCtrl.getHaveTrump(hec.get(gc.dsConsts.HeroEntity.id));
            var gift = talismans[giftId];//[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]

            //self.label_name.text = (gift?("Lv."+gift[0]):"")+giftInfo[gc.t_talisman_name];
            self.label_combat.text = gd.heroTalismanCtrl.calTaliCombatById(hec.get(gc.dsConsts.HeroEntity.id), giftId);
            if(gift){
                self.grp_has.visible = true;
                self.grp_no.visible = false;
                self.label_lv.text = gift[0];
                self.label_ziZhi.text = gift[1];
                self.label_star.text = gift[2];
                self.ico_gift.setData({itemId:giftInfo[gc.t_talisman_id]});
            }else{
                self.grp_has.visible = false;
                self.grp_no.visible = true;
                //self.label_desc.text = giftInfo[gc.t_talisman_desc];
                if(gd.heroTalismanCtrl.isHaveTrupId(giftId)){
                    self.btn_act.visible = true;
                    self.btn_gain.visible = false;
                }else{
                    self.btn_act.visible = false;
                    self.btn_gain.visible = true;
                }
                var star:number = giftInfo[gc.t_talisman_skillStar];
                for(var i=0; i<star; ++i){
                    self.grp_star.getElementAt(i).visible = true;
                }
                for(var i=star; i<self.grp_star.numElements; ++i){
                    self.grp_star.getElementAt(i).visible = false;
                }
            }
        }

        onGiftChanged(giftId, gift){
            var self = this;
            if(giftId == self.data.giftInfo[gc.t_talisman_id]){
                self.dataChanged();
            }
        }

        _tap_btn_detail(){
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            var talismans = gd.heroTalismanCtrl.getHaveTrump(hec.get(gc.dsConsts.HeroEntity.id));

            GiftForge.create().setData({hec:hec, gift:talismans[giftInfo[gc.t_talisman_id]], giftInfo:giftInfo}).show();
        }

        _tap_btn_act(){
            var self = this;
            var giftInfo = self.data.giftInfo;
            var giftId = giftInfo[gc.t_talisman_id];
            gd.heroTalismanCtrl.useTrumpItem(self.data.giftInfo[gc.t_talisman_id],function(){
                self.dataChanged();
            },self);
        }

        _tap_btn_gain(){
            var self = this;
            var giftInfo = self.data.giftInfo;
            var giftId = giftInfo[gc.t_talisman_id];
            if (g_base.GainWay.canBuyFromShop(giftId)) {
                g_base.GainWayShop.create().setData({
                    itemId: giftId,
                    count: 1
                }).show().onClose(function () {
                    self.dataChanged();
                });
            } else {
                g_base.GainWay.create().setData({itemId: giftId}).show();
            }
        }
    }
}