/**
 * Created by lihex on 2/27/16.
 */
module g_medal {
    export class MedalChooseItem extends mo.gui.ItemRenderer {
        ico_medalItem:g_comp.Ico_Medal;

        _initProp(){
            super._initProp();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//[勋章id,强化等级,评分]
            self.ico_medalItem.setData({itemId:data[0]});
        }

        _tap_btn_equip(){
            var self = this;
            gd.medalCtrl.setMedalTitle(self.data[0], function(){
                self.delegate.close();
            }, self);
        }
    }
}