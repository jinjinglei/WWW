/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class FiveDay extends mo.gui.Dlg{
        label_date;
        list_items;
        _Item_list_items;

        _targets:Array<any>;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;

            self._Item_list_items = FiveItem;
            self._targets = [
                ["ico_diyitian", "ico_wentian"]
                ,["ico_diertian", "ico_senliu"]
                ,["ico_dishantian", "ico_qiling"]
                ,["ico_dishitian", "ico_tianxia"]
            ];

            self.registerClassByKey(gd.FiveDaysTargetCtrl, gd.FiveDaysTargetCtrl.ON_RECEIVED, self.reset);
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            var fdCtrl:gd.FiveDaysTargetCtrl = gd.fiveDaysTargetCtrl;
            uiHelper.setEventTime(self.label_date, Date.newDate(fdCtrl.getActivityStartTime()), fdCtrl.getActivityEndTime());
        }

        reset(){
            var self = this;
            self.refreshList("list_items");
        }

        _data_list_items():any[]{
            var self = this;
            return self._targets;
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:24}).show();
        }

        _click_list_items(event:egret.gui.ListEvent) {
            var self = this;
            var idx = event.itemIndex;
            FiveDetail.create().setData({idx: idx}).show();
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = FiveDay;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.fiveDaysTargetCtrl.getInfo(function(data){
                cb();
            }, this);
        });
    });
}