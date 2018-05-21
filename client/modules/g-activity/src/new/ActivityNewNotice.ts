/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewNotice extends mo.gui.Dlg{
        btn_help:egret.gui.Button;
        group_content;
        head;
        subType;
        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.subType = 0;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;

            if(!exActivity)
                return;

            var activity = exActivity[gc.dsConsts.ExActivity.activity];

            self.head.setActivity(activity);
            var exData = activity[gc.dsConsts.ActivityEntity.exData];
            var subType = exData[gc.c_prop.activityExDataTypeKey.subType];
            self.subType = subType;

            var layer = null;
            if(subType == 1 ){
                layer = ActivityNewNoticeSimple.create().setData({activity:activity})
            }
            else{
                layer = ActivityNewNoticeReward.create().setData({activity:activity})
            }
            self.group_content.addElement(layer);
        }
        _tap_btn_help(){
            var self = this;
            var helpId :number = self.subType == 1 ? 230 :231;
            g_base.BaseShowTip.create().setData({id:helpId}).show();
        }
    }
}