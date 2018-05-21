/**
 * Created by admin on 16/4/23.
 */
module g_fight {
    export class FightTreasureComposeItem extends mo.gui.ItemRenderer {

        ico_bg;
        label_name;
        label_count;
        label_open_hint;
        ico_item;

        _initProp(){
            super._initProp();
            var self = this;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.ico_item.onClick(function () {
                g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(this.get('itemId'), null)}).show();
            }, self.ico_item);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            self._reset();
        }

        //{precent:obj[2],isNow:0,item:all[obj[1]],current:self.data['unlock']}
        _reset() {
            var self = this;
            self.ico_item.setData({itemId:self.data['item'][gc.t_item_id],count: 1});
            self.ico_item.label_text.visible = false;
            var color = self.data['current']<self.data['o'][0]?"0xff0000":"0xffffff";
            self.label_name.text =  mo.STR.format("[ubb color=%s]%s[/ubb]",uiHelper.getColorByQuality(self.data['item'][gc.t_item_color]),
                self.data['item'][gc.t_item_name]);
            self.label_count.text = mo.STR.format("([ubb color=%s]%s[/ubb]/%s)",color,self.data['current'],self.data['o'][0]);
            if(self.data['isNow'] == 1){
                self.ico_bg.source = "ico_treasure_bg_s";
            }else{
                self.ico_bg.source = "ico_treasure_bg";
            }
            self.label_open_hint.text = "开出红色秘宝概率 "+self.data['o'][2] + "%";
        }
    }
}