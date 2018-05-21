/**
 * Created by admin on 16/2/24.
 */
module g_comp {
    /**
     *
     * @author
     *
     */
    export class ActivityItem extends mo.gui.Comp {
        img_bg: egret.gui.UIAsset;
        img_title: egret.gui.UIAsset;
        img_desc: egret.gui.UIAsset;
        lbl_time: egret.gui.Label;

        setActivity(activity:any){
            if(!activity)return;
            var self = this;
            var icon_map = activity[gc.dsConsts.ActivityEntity.exData];
            if(icon_map){
                var iconStr = icon_map[gc.c_prop.activityExDataTypeKey.titleIcon];
                if(iconStr){
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
                }
            }
            uiHelper.setEventTime(self.lbl_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
        }

    }
}