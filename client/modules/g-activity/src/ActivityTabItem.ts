/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class ActivityTabItem extends mo.gui.ItemRenderer{

        ico_titile;
        ico_red;

        _initProp(){
            super._initProp();
            var self = this;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.ico_red.visible = false;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;

            var activity = data[gc.dsConsts.ExActivity.activity];

            self.ico_titile.source = resHelper.getEventIconPath(activity[gc.dsConsts.ActivityEntity.type]);
            self.checkRedPoint();
        }

        checkRedPoint(){
            var self = this;
            var activity = self.data[gc.dsConsts.ExActivity.activity];
            self.ico_red.visible = gd.activityCtrl.isPoint(activity[gc.dsConsts.ActivityEntity.id]);
        }
    }
}