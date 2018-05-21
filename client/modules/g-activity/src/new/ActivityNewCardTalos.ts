/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    import Logger = egret.Logger;
    export class ActivityNewCardTalos extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;

        list_itemsOther:any;
        _Item_list_itemsOther;
        head:g_comp.ActivityItem;
        btn_help:egret.gui.Button;
        label_activity_desc:egret.gui.Label;
        label_jinbi:egret.gui.Label;
        label_yuanbao:egret.gui.Label;
        grp_cards:egret.gui.Group;

        actItems;
        btn_detail;

        extrItems;
        maxLuckValue;
        label_activity_desc2;
        progress_luck;
        helpId;
        detailActItems;
        detailExtrItems;
        btn_container;

        _initProp(){
            var self = this;
            super._initProp();
            //self._Item_list_items = g_base.BaseItemCell;

            self._Item_list_items = ActivityNewCollectCharacterBaseItem;
            self._Item_list_itemsOther = g_base.BaseItemCell;
            self.maxLuckValue = 0;
            self.helpId = 0;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var exActivity = self.data.exActivity;
            if(!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.maxLuckValue = activity[gc.dsConsts.ActivityEntity.exValues3][1];
            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
            var curreLuck:number = gd.activityCtrl.getNewLuckValue(id);
            self.setLuck( curreLuck);

            self.detailExtrItems = null;
            self.detailActItems = null;
        }


        reset(){
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
            self.refreshList("list_itemsOther");
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;

            if(!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            //uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            //self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self._updateGoldInfo();


            var items = mo.getJSONWithFileName(gc.cfg_c_luckyMajong);
            var color = activity[gc.dsConsts.ActivityEntity.exValues2][0];
            var costItemId = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.spItemId];
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;

            var helpIdStr = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.bgIcon] || "";
            self.helpId = helpIdStr == "" ? 0 :parseInt( helpIdStr);

            var level = gd.userCtrl.getLvl();


            self.actItems = [];
            self.extrItems = [];
            self.detailExtrItems = [];
            self.detailActItems = [];
            for(var key in items){

                var obj = items[key];
                var minLevel = obj[gc.c_luckyMajong_subTypeDivide][0];
                var maxLevel = obj[gc.c_luckyMajong_subTypeDivide][1];
                var inLevel :boolean= level>= minLevel&& level <= maxLevel;

                if(obj[gc.c_luckyMajong_spItemId]==costItemId && subType==obj[gc.c_luckyMajong_subType] && obj[gc.c_luckyMajong_color] >= color&&inLevel){
                    if( obj[gc.c_luckyMajong_ifRare] == 1){
                        self.extrItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount],"color":obj[gc.c_luckyMajong_color]});
                    }
                    else{
                        self.actItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount]});
                    }
                }

                if(obj[gc.c_luckyMajong_spItemId]==costItemId && subType==obj[gc.c_luckyMajong_subType]&&inLevel){
                    //if( obj[gc.c_luckyMajong_ifRare] == 1){
                    //    self.detailExtrItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount]});
                    //}
                    //else{
                      self.detailActItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount]});
                    //}
                }
            }

            self.extrItems.sort(function(a, b){
                return b["color"]-a["color"];
            });


            self.refreshList("list_items");

            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);

            var layer = ActivityNewCardGroup.create().setData({activityId:id,activity:activity,root:self});
            self.btn_container.addElement(layer);
        }


        updateInfo(){
            var self = this;
            self._updateGoldInfo();

            var exActivity = self.data.exActivity;
            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
            var curreLuck:number = gd.activityCtrl.getNewLuckValue(id);
            self.setLuck( curreLuck);
        }

        _updateGoldInfo(){
            var self = this;
            self.label_jinbi.text = gd.userCtrl.getGold();
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
        }

        _data_list_items():any[]{
            var self = this;

            //var subActItems = [];
            var  subActItems = self.actItems.slice(0,4);
            return subActItems;
        }

        _data_list_itemsOther():any[]{
            var self = this;
           // return self.extrItems;
            var subExtrItems = null;
            var id = self.helpId;
            if( self.extrItems.length >2&& id >0){
                subExtrItems = [];
                var item = {"itemId":id,"count":1};
                subExtrItems.push( item);
            }
            else{

                subExtrItems = self.extrItems.slice(0,2);
            }
            return subExtrItems;
        }


        _click_list_items(event:egret.gui.ListEvent){
            var data = event.item;
            g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data["itemId"], null)}).show();
        }


        _click_list_itemsOther(event:egret.gui.ListEvent){
            var data = event.item;
            g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data["itemId"], null)}).show();
        }



        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:233}).show();
        }

        _tap_btn_detail() {
            var self = this;
            //ActivityNewDetail.create().setData({actItems:self.detailActItems, extrItems:self.detailExtrItems}).show();
             ActivityNewDetail.create().setData({actItems:self.detailActItems, extrItems:null}).show();

        }

        setLuck(curreLuck){
            var self = this;
            var str = "幸运值:"+curreLuck+"/"+self.maxLuckValue;
            self.label_activity_desc2.text = str;
            var per = Math.floor( curreLuck/self.maxLuckValue*100);
            self.progress_luck.setValue(per);
        }

    }
}