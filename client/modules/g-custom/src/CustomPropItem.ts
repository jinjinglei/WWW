/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_custom{
    export class CustomPropItem extends mo.gui.ItemRenderer{

        label_prop:mo.gui.Label;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            self.label_prop.text = [gc.c_prop.equipProp[data[0]], data[1], Math.round(data[1]*gd.customCtrl.getExtrPropAddRatio()/10000)];
            if(self.itemIndex == 0){
                self.selected = true;
            }
        }

    }
}