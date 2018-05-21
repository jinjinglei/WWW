/**
 * Created by lihex on 2/25/16.
 */
module g_medal {
    export class PrintDetail extends mo.gui.Dlg {
        grp_props:egret.gui.Group;
        label_strLvl:mo.gui.Label;
        label_loot:mo.gui.Label;
        ico_medalItem:g_comp.Ico_Medal;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.MedalCtrl, gd.MedalCtrl.ON_STR_SUCC, function(){
                self.setData(gd.medalCtrl.transWarPrintData(self.data[0]));
            });
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;//[勋章id,强化等级,评分]
            var itemId = data[0];
            var strId = gd.medalCtrl.getStrId(itemId, data[1]);
            var props = gd.medalCtrl.getStrProperty(itemId, strId);
            setProps(self.grp_props, props, 4);

            self.label_strLvl.text = data[1];

            self.ico_medalItem.setData({itemId:itemId});
            var t_medal = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, itemId);
            self.label_loot.text = t_medal[gc.t_medal_outputWay];
        }

        _tap_btn_str() {
            var self = this;
            PrintStr.create().setData({itemId: self.data[0]}).show();
        }

    }
}