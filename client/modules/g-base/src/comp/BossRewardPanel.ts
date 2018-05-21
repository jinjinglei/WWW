module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
    export class BossRewardPanel extends mo.gui.Comp{
        label_index: egret.gui.Label;

        item0: g_comp.Ico_Item;
        item1: g_comp.Ico_Item;
        item2: g_comp.Ico_Item;
        item3: g_comp.Ico_Item;

        _initProp(){
            var self = this;
            super._initProp();
        }

        onEnter(){
            super.onEnter();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.item0.label_text.visible = false;
            self.item1.label_text.visible = false;
            self.item2.label_text.visible = false;
            self.item3.label_text.visible = false;

            self.item0.onClick(function(data){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data.get('itemId'), null)}).show();
            });

            self.item1.onClick(function(data){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data.get('itemId'), null)}).show();
            });

            self.item2.onClick(function(data){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data.get('itemId'), null)}).show();
            });

            self.item3.onClick(function(data){
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data.get('itemId'), null)}).show();
            });
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            var item0 = self.data["0"];
            self.item0.visible = item0?true:false;
            if(self.item0.visible)self.item0.setData({itemId:item0[0], count:item0[1]});

            var item1 = self.data["1"];
            self.item1.visible = item1?true:false;
            if(self.item1.visible)self.item1.setData({itemId:item1[0], count:item1[1]});

            var item2 = self.data["2"];
            self.item2.visible = item2?true:false;
            if(self.item2.visible)self.item2.setData({itemId:item2[0], count:item2[1]});

            var item3 = self.data["3"];
            self.item3.visible = item3?true:false;
            if(self.item3.visible)self.item3.setData({itemId:item3[0], count:item3[1]});
        }
	}
}
