/**
 * Created by Administrator on 2015/10/5.
 */
module g_index{
    export class IndexServerRangeItem extends mo.gui.ItemRenderer{

        static ON_BTN_RANGE:string = "ON_BTN_RANGE";
        label_name;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.label_name.touchEnabled = false;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;

            self.label_name.text = self.data;
        }

        _tap_btn_range(){
            var self = this;
            var bdc = self.data;
            self.emitter.emit(self.__class.ON_BTN_RANGE, self.itemIndex, self);
        }
    }
}