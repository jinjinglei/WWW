/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class FiveItem extends mo.gui.ItemRenderer{
        ico_day:egret.gui.UIAsset;
        ico_title:egret.gui.UIAsset;
        img_red:egret.gui.UIAsset;
        img_selected:egret.gui.UIAsset;
        label_date:mo.gui.Label;
        label_d:mo.gui.Label;

        _initProp(){
            super._initProp();
            var self = this;

        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            self.ico_day.source = self.data[0];
            self.ico_title.source = self.data[1];

            //完成状态
            var normalTargetInfo = gd.fiveDaysTargetCtrl.getNormalTargetInfo(self.itemIndex);
            var canGet = normalTargetInfo[1];
            self.img_red.visible = canGet;

            self.img_selected.visible = self.itemIndex <= gd.fiveDaysTargetCtrl.getCurActDay();

            //设置活动时间
            self.label_date.visible = self.label_d.visible = false;
            self.label_date.textColor = 0xFC0707; //红色
            self.label_d.textColor = 0xFC0707;
            if(self.itemIndex != 4) {
                self.label_date.visible = self.label_d.visible = true;
                var fdCtrl:gd.FiveDaysTargetCtrl = gd.fiveDaysTargetCtrl;
                var starTime = fdCtrl.getStarTime(self.itemIndex);
                var endTime = fdCtrl.getCalTime(self.itemIndex);
                if(gd.fiveDaysTargetCtrl.isTodayTarget(self.itemIndex)){
                    self.label_date.textColor = 0x28FC07; //绿色
                    self.label_d.textColor = 0x28FC07;
                };
                uiHelper.setEventTime(self.label_date, starTime, endTime);
            }
        }
    }
}