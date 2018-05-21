/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewNoticeReward extends mo.gui.Layer{
    btn_help:egret.gui.Button;
        list_rewards;
        _Item_list_rewards;
        label_activity_time;
        label_text;
        ico_head;
        actItems;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_rewards = ActivityNewCollectCharacterBaseItem;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.actItems = null;

        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(!self.data) return;

            var activity = self.data.activity;
            if(!activity)
                return;

            //活动时间
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));

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

            self.actItems = [];

            var actItems = activity[gc.dsConsts.ActivityEntity.items];
            for( var i = 0;i < actItems.length;i++){
                var obj = actItems[i];
                for(var key in obj){
                    self.actItems.push({
                        itemId: key,
                        count: obj[key]
                    });
                }
            }

            self.refreshList("list_rewards");
        }

        _data_list_rewards():any[]{
            var self = this;
            return self.actItems;
        }

        _click_list_rewards(event:egret.gui.ListEvent){
            var data = event.item;
            g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data["itemId"], null)}).show();
        }

    }
}