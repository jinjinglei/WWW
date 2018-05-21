/**
 * Created by admin on 16/2/26.
 */
module g_activity{
    export class ActivityNewEverydayRchgItem extends mo.gui.ItemRenderer{
        label_desc;
        list_items;
        _Item_list_items;
        ico_bg_can;
        ico_bg_got;
        btn_get;
        ico_got;
        ico_unreach;
        act_items:any[];

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        }


        dataChanged(){
            super.dataChanged();
            var self = this;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.c_everydayCharge_id]);

            var status = this.data["status"];
            if(status == 1){
                // 已经领取
                //self.ico_bg_can.visible = false;
                //self.ico_bg_got.visible = true;
                self.btn_get.visible = false;
                self.ico_got.visible = true;
                self.ico_unreach.visible = false;

            }else if(status == 2){
                //未达到
                //self.ico_bg_can.visible = false;
                //self.ico_bg_got.visible = false;
                self.btn_get.visible = false;
                self.ico_got.visible = false;
                self.ico_unreach.visible = true;
            }else{
                //未领取
                //self.ico_bg_can.visible = true;
                //self.ico_bg_got.visible = false;
                self.btn_get.visible = true;
                self.ico_got.visible = false;
                self.ico_unreach.visible = false;
            }
            self.act_items = [];
            var objs = self.data[gc.c_everydayCharge_awardId];
            for(var i in objs){
                var obj = {};
                var value = objs[i];
                obj["itemId"] = value[0];
                obj["count"] = value[1];
                self.act_items.push(obj);
            }
            self.refreshList("list_items");
        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }

        _data_list_items():any[]{
            var self = this;
            return self.act_items;
        }

        _tap_btn_get(){
            var self = this;
            gd.activityCtrl.everydayCharge(self.data["activityId"],self.data["index"],function(data){

            },self);
        }
    }
}