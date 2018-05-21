/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewNoticeSimple extends mo.gui.Layer {

        label_text:egret.gui.Label;
        ico_head;
        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }


        dataChanged(){
            super.dataChanged();
            var self = this;
            if(!self.data) return;
            var activity = self.data.activity;
            if(!activity)
                return;

            var txt = activity[gc.dsConsts.ActivityEntity.content];
            self.label_text.text = txt;

            var exData = activity[gc.dsConsts.ActivityEntity.exData];
            var noticIcon:string = exData[gc.c_prop.activityExDataTypeKey.bgIcon]||"";
            if( noticIcon.length > 0){
                var stateUrl = "resource/ui2/ui_activity/"+noticIcon+".png";
                RES.getResByUrl(stateUrl, function (texture:egret.Texture) {
                    self.ico_head.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }

        }
    }
}