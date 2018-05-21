/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class NewFiveDay extends mo.gui.Dlg{
        label_date;
        list_items;
        _Item_list_items;

        _targets:Array<any>;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;
            mo.gui.helper.setSkinName(this, FiveDay.__className);
            self._Item_list_items = NewFiveItem;


            self.registerClassByKey(gd.NewFourDaysCtrl, gd.NewFourDaysCtrl.ON_RECEIVED, self.reset);
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();

            self._targets = [
                ["ico_diyitiancibang", "ico_senliu"]
                ,["ico_diertianbaoshi", "ico_xuanguangs"]
                ,["ico_diyitianyuangsengs", "ico_ningshengs"]
                ,["ico_disitianzanli", "ico_wentian"]
            ];
            uiHelper.setEventTime(self.label_date, Date.newDate(gd.newFourDaysCtrl.getActivityStartTime()), gd.newFourDaysCtrl.getActivityEndTime());
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
            NewFiveDetail.create().setData({idx: idx}).show();
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = NewFiveDay;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.newFourDaysCtrl.getInfo(function(data){
                cb();
            }, this);
        });
    });
}