/**
 * Created by lihex on 3/7/16.
 */
module g_worldboss {

    export class WBossRewardItem extends mo.gui.ItemRenderer {
        grp_items:egret.gui.Group;
        label_index;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            self.label_index.text = data[0];
            uiHelper.setItemsGrp(self.grp_items, utils.kvArrItems2ObjArr(data[1]));
        }
    }
}