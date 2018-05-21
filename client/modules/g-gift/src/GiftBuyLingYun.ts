/**
 * Created by Administrator on 2016/6/24.
 */
module g_gift {
    export class GiftBuyLingYun extends mo.gui.Dlg {

        label_cost;
        label_num;
        img_item;
        label_vip;
        label_yuanbao;

        _initProp() {
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self.img_item.source = resHelper.getItemIconPath(56);
            self.dataChanged();
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.buyLingyunCfg);
            self.label_cost.text = gd.userCtrl.getBuyLingyunCos();
            self.label_num.text = gameInfo[0];
            var vip = gd.userCtrl.getVip();
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, vip);
            self.label_vip.text = gd.userCtrl.getBuyLingyunCount();
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
        }

        _tap_btn_buy() {
            var self = this;
            gd.userCtrl.buyLingyun(function () {
                self.dataChanged();
            }, self);
        }
    }
}