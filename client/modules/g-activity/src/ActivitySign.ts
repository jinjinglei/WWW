/**
 * Created by Administrator on 2015/11/6.
 */
module g_activity {
    export class ActivitySign extends mo.gui.Layer {
        list_items:egret.gui.List;
        _Item_list_items;

        label_month:egret.gui.Label;
        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = SignItem;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.label_month.text = "" + (Date.newDate().getMonth() + 1);
        }

        _data_list_items():any[]{
            var self = this;
            return  gd.signCtrl.getSignItems();
        }

        _click_list_items(event:egret.gui.ListEvent) {
            var self = this;
            var signItemData = event.item;
            //0不可签，1已签，2可签，3可补签
            var state = (<SignItem>event.itemRenderer).state;
            if(state == 2){
                gd.signCtrl.sign(self._refresh, self);
            }else if(state == 3){
                gd.signCtrl.patchSign(self._refresh, self);
            }
        }

        _refresh(){
            var self = this;
            self.refreshList('list_items');
        }
    }
}