/**
 * Created by Administrator on 2015/10/5.
 */
module g_treasure {
    export class MoJinGain extends mo.gui.Dlg {
        list_items:egret.gui.List;
        _Item_list_items;
        label_once:mo.gui.Label;
        label_ten:mo.gui.Label;

        _initProp() {
            super._initProp();
            var self = this;
            self.outsideClosable = true;
            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            self.label_once.text = gd.activityCtrl.getLotteryCost(1);
            self.label_ten.text = gd.activityCtrl.getLotteryCost(10);
        }

        _data_list_items():any[] {
            var self = this;

            return self.data.items;
        }

        _tap_btn_again1() {
            var self = this;
            var self = this;
            gd.activityCtrl.lottery(1, self.lotteryResult, self);
        }

        _tap_btn_again2() {
            var self = this;
            gd.activityCtrl.lottery(10, self.lotteryResult, self);
        }

        lotteryResult(items){
            var self = this;
            self.close();
            MoJinGain.create().setData({items:utils.itemObjArr2ObjArr(items)}).show();
        }
    }
}