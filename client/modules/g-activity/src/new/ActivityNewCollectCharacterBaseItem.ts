/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_activity {
    export class ActivityNewCollectCharacterBaseItem extends mo.gui.ItemRenderer {
        ico_item:g_comp.Ico_Item;
        rect_touch:egret.gui.Rect;
        tapShowDetail = false;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self.setLineWidth(80);

        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
            if(typeof data == 'object'){
                self.ico_item.setData({itemId: data.itemId, count: data.count});
            }else{
                self.ico_item.setData({itemId: data});
            }
            

            process.nextTick(function(){
                self.ico_item.label_count.visible = true;
                self.ico_item.label_count.text = ""+data.count;
            });
        }

        _tap_rect_touch(event:egret.TouchEvent){
            var self = this;
            if(self.tapShowDetail){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(self.ico_item.get('itemId'), null)}).show();
            }
        }

        setLineWidth(width){
            var self = this;
            self.ico_item.label_text.width = width;

        }

        getTextHeight(){
            var self = this;
            return self.ico_item.label_text.height;
        }
    }
}