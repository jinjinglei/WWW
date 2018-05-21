/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_medal{
    export class MedalCell extends mo.gui.ItemRenderer{
        ico_item:g_comp.Ico_Item;
        rect_touch:egret.gui.Rect;
        data:gd.BagDataCtrl;
        label_name:mo.gui.Label;

        _initProp(){
            super._initProp();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var dataCtrl:gd.BagDataCtrl = self.data;
            var ico_item = self.ico_item;
            self.name = "cell_" + dataCtrl.tempId;
            ico_item.set('itemId', dataCtrl.tempId);
            self.ico_item.set('count', dataCtrl.count);
            self.ico_item.label_text.visible = false;
            self.label_name.text = dataCtrl.name;
        }
    }
}