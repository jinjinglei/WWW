/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_base {
    export class BaseItemCell extends mo.gui.ItemRenderer {
        ico_item:g_comp.Ico_Item;
        rect_touch:egret.gui.Rect;
        tapShowDetail = false;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
            var ico_item = self.ico_item;
            if(typeof data == 'object'){
                ico_item.setData({itemId: data.itemId, count: data.count});
            }else{
                ico_item.setData({itemId: data});
            }
        }
        _tap_rect_touch(event:egret.TouchEvent){
            var self = this;
            if(self.tapShowDetail){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(self.ico_item.get('itemId'), null)}).show();
            }
        }
    }
}