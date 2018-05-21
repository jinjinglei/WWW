/**
 * Created by Administrator on 2016/5/17.
 */
module g_gift {
    export class GiftMergeCell extends mo.gui.ItemRenderer {
        ico_gift;
        label_name;
        label_desc;

        _initProp() {
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            self.ico_gift.setData({itemId:giftInfo[gc.t_talisman_id]});
            self.label_name.text = giftInfo[gc.t_talisman_name];
            self.label_desc.text = giftInfo[gc.t_talisman_desc];
        }

        _tap_btn_merge(){
            var self = this;
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            GiftMerge.create().setData({hec:hec, giftInfo:giftInfo}).show();
        }
    }
}