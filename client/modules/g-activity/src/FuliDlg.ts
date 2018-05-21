/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_activity{
    export class FuliDlg extends mo.gui.Dlg{

        list_activitys;
        _Item_list_activitys;
        label_empty;
        container;
        _comps:Array<any> = [];
        _allExActivitys;
        _curExActivity;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_activitys = ActivityTabItem;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self._allExActivitys = gd.activityCtrl.getFuliList();
            self.list_activitys.selectedIndex = 0;
            self.label_empty.visible = false;
            for(var i=0; i<self._allExActivitys.length; ++i){
                var exActivity = self._allExActivitys[i];
                var type = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.type);
                if(type == gc.c_prop.activityTypeKey.sevenLogin){
                    self._comps.push(Activity7Days.create().setData({tray: self.container}).show());
                }else if(type == gc.c_prop.activityTypeKey.allChargeCount){
                    self._comps.push(ActivityRecharge.create().setData({tray: self.container}).show());
                }else if(type == gc.c_prop.activityTypeKey.redeemCode){
                    self._comps.push(ActivityRedeemCode.create().setData({tray: self.container}).show());
                }else if(type==gc.c_prop.activityTypeKey.sign){
                    self._comps.push(ActivitySign.create().setData({tray: self.container}).show());
                }
            }
            process.nextTick(function(){
                if(self._allExActivitys.length>0){
                    self.goTab(self._allExActivitys[0]);
                }
            });
        }

        onEnter(){
            super.onEnter();
            var self = this;


        }
        _hideAllComp(){
            var self = this;
            for(var i = 0, li = self._comps.length; i < li; i++){
                self._comps[i].visible = false;
            }
        }

        reset(){
            var self = this;
            self.goTab(self._curExActivity);
        }

        goTab(exActivity){
            var self = this;
            var index = self._allExActivitys.indexOf(exActivity);
            self._curExActivity = exActivity;
            self._hideAllComp();

            var comp = self._comps[index];
            comp.visible = true;
            comp.setData({tray: self.container, exActivity:exActivity});
        }

        _data_list_activitys():any[]{
            var self = this;

           return self._allExActivitys;
        }

        _click_list_activitys(event:egret.gui.ListEvent) {
            var self = this;
            var item = event.item;

            self.goTab(item);
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = FuliDlg;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.activityCtrl.getInfo(function(){
                cb();
            },this);
        });
    });
}