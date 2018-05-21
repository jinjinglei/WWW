/**
 * Created by admin on 16/4/5.
 */
module g_base {

    /**
     *
     * @author
     *
     */
    export class WanbaGift extends mo.gui.Dlg{

        label_hint;
        ico_hint;

        list_items:egret.gui.List;
        _Item_list_items;
        actItems;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = g_base.BaseItemCell;
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var type = self.data.type;
            if(type == 0){
                self.label_hint.text = "恭喜你获得:";
                self.ico_hint.source = "ico_wgift_get";
            }else if(type == 1){
                self.label_hint.text = "今天已领取过:";
                self.ico_hint.source = "ico_wgift_hint";
            }

            self.actItems = [];
            var key = self.data["giftId"];

            var items = mo.getJSONWithFileName(gc.cfg_c_giftPack);
            var item = items[key];
            if(item){
                var objs = item[gc.c_giftPack_content];
                for(var i=0;i<objs.length;i++){
                    var obj_ary = objs[i];
                    self.actItems.push({"itemId":obj_ary[0],"count":obj_ary[1]});
                }
            }
            self.refreshList("list_items");
        }

        onExit(){
            var self = this;
            g_base.loginCtrl.showNoticeOrFirstEnterGame(self.data.exData);
        }
    }
}