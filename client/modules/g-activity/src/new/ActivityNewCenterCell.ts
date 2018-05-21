/**
 * Created by admin on 16/2/23.
 */
module g_activity {
    export class ActivityNewCenterCell extends mo.gui.ItemRenderer {

        img_bg:egret.gui.UIAsset;
        img_title:egret.gui.UIAsset;
        img_desc:egret.gui.UIAsset;
        lbl_time:egret.gui.Label;
        img_state:egret.gui.UIAsset;


        _initProp() {
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();

        }

        dataChanged() {
            var self = this;
            var data = self.data;
            var activity = self.data[gc.dsConsts.ExActivity.activity];
            var icon_map = activity[gc.dsConsts.ActivityEntity.exData];
            if(icon_map){
                var iconStr = icon_map[gc.c_prop.activityExDataTypeKey.titleIcon];
                var desIconStr = icon_map[gc.c_prop.activityExDataTypeKey.desIcon];


                self.setIcon(iconStr,desIconStr);
            }else{
                self.setIcon("","");
            }
            uiHelper.setEventTime(self.lbl_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
        }

        setIcon(iconStr,desIconStr){
            var self = this;
            if(iconStr && iconStr!=""){
                var url = "resource/ui2/ui_activity/"+iconStr;
                RES.getResByUrl(url+"_3.jpg", function (texture:egret.Texture) {
                    self.img_bg.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
                //RES.getResByUrl(url+"_2.png", function (texture:egret.Texture) {
                //    self.img_desc.source = texture;
                //}, self, RES.ResourceItem.TYPE_IMAGE);
                //RES.getResByUrl(url+"_1.png", function (texture:egret.Texture) {
                //    self.img_title.source = texture;
                //}, self, RES.ResourceItem.TYPE_IMAGE);
            }else{
                var activity = self.data[gc.dsConsts.ExActivity.activity];
                var _iconStr = "dbcz";
                var type = activity[gc.dsConsts.ActivityEntity.type];
                if(type == gc.c_prop.activityTypeKey.allChargeCount){
                    _iconStr = "lcfl";
                }else if(type == gc.c_prop.activityTypeKey.singleCharge){
                    _iconStr = "dbcz";
                }else if(type == gc.c_prop.activityTypeKey.mysterShop){
                    _iconStr = "smsd";
                }else if(type == gc.c_prop.activityTypeKey.luckyTalos){
                    _iconStr = "smtlp";
                }else if(type == gc.c_prop.activityTypeKey.everydayCharge){
                    _iconStr = "ttcz";
                }else if(type == gc.c_prop.activityTypeKey.limitPanicBuying){
                    _iconStr = "xsqg";
                }else if(type == gc.c_prop.activityTypeKey.appMysterShop){
                    _iconStr = "smsd";
                }
                self.setIcon(_iconStr,"");
            }

            if(desIconStr&&desIconStr.length >0){
                var stateUrl = "resource/ui2/ui_activity/state_"+desIconStr+".png";
                RES.getResByUrl(stateUrl, function (texture:egret.Texture) {
                    self.img_state.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);

            }
        }
    }
}