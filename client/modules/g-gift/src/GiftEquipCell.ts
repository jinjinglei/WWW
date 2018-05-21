/**
 * Created by Administrator on 2016/5/17.
 */
module g_gift {
    export class GiftEquipCell extends mo.gui.ItemRenderer {
        label_name;
        label_ziZhi;
        label_star;
        ico_gift;
        hec;
        btn_equip;
        ico_equiped;
        gift;
        giftInfo;

        _initProp() {
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            self.hec = self.data.hec;
            self.gift = self.data.gift;//[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.data.giftInfo;

            self.label_name.text = [self.gift[0], self.giftInfo[gc.t_talisman_name]];
            self.label_ziZhi.text = self.gift[1];
            self.label_star.text = self.gift[2];
            self.ico_gift.setData({itemId:self.giftInfo[gc.t_talisman_id]});
            var isEquip = self.giftInfo[gc.t_talisman_id] == gd.heroTalismanCtrl.getTalismanAdorn(self.hec.get(gc.dsConsts.HeroEntity.id));
            self.ico_equiped.visible = isEquip;
            self.btn_equip.visible = !isEquip;
        }

        _tap_btn_equip(){
            var self = this;
            gd.heroTalismanCtrl.wearTrump(self.hec.get(gc.dsConsts.HeroEntity.tempId),self.giftInfo[gc.t_talisman_id], function(data){
                self.dataChanged();
                self.delegate.dataChanged();
            },self);
        }
    }
}