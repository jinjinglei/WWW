/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_bag{
    export class BagCell extends mo.gui.ItemRenderer{
        ico_item:g_comp.Ico_Item;
        rect_touch:egret.gui.Rect;
        data:gd.BagDataCtrl;
        ico_lock;

        _initProp(){
            super._initProp();
            var self = this;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var dataCtrl:gd.BagDataCtrl = self.data;
            var ico_item = self.ico_item;
            mo.R.loadTo('BagScene', resHelper.getItemIconPath(dataCtrl.tempId), function(){});
            self.name = "cell_" + dataCtrl.tempId;
            ico_item.set('itemId', dataCtrl.tempId);
            self.ico_item.set('count', dataCtrl.count);
            self.ico_lock.visible = dataCtrl.islock;
        }
    }
}