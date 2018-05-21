/**
 * Created by lihex on 4/19/16.
 */
module g_tower{
    export class TowerPreview extends mo.gui.Dlg{
        list_items:egret.gui.List;
        _Item_list_items;
        label_Preview;
        label_date;
        
        _initProp(){
            super._initProp();
            var self = this;
            mo.gui.helper.setSkinName(this, TowerTreasury.__className);
            self._Item_list_items = g_base.BaseItemCell;

        }
        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self._setdData()
        }
         _setdData(){
             var self  = this;
             self._setPromptType();
         }
         _setPromptType()
         {
             var self  = this;
             self.label_date.text =  "妖塔已通关"+gd.copyCtrl.getTowerIndex(gd.copyCtrl.getTowerBaokuNum())+"层";
             self.label_Preview.text  = "通关"+gd.copyCtrl.getTowerIndex(self.data.previewCopyId)+"层后解锁奖励";
         }
         _data_list_items():any[]{
             var self = this, filter, sorter;
             var treasuryData  =  mo.getJSONWithFileNameAndID(gc.cfg_t_paTaTreasury,self.data.previewCopyId);
             var treasury = treasuryData[gc.t_paTaTreasury_treasury];
             var exData = treasuryData[gc.t_paTaTreasury_exData] || [];
             var ret = [];
             for(var i = 0, li = treasury.length; i <li; ++i){
                 ret.push({itemId:treasury[i][0], count:treasury[i][1]});
             }
             for(var i = 0, li = exData.length; i <li; ++i){
                 ret.push({itemId:exData[i][0], count:exData[i][1]});
             }
             ret = gd.userUtils.getLoots(ret);
             ret.sort(function(a,b){
                 return   mo.getJSONWithFileNameAndID(gc.cfg_t_item ,b.itemId)[gc.t_item_color] - mo.getJSONWithFileNameAndID(gc.cfg_t_item ,a.itemId)[gc.t_item_color];
             });
             return ret ;
         }
        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            var ico_item:g_comp.Ico_Item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
        }
        getCurrentSkinState(){
            return 'PreviewInterface';
        }
        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id: 105, param1:gd.copyCtrl.getMaxFreeTowerTimes()}).show();
        }
        _tap_btn_close(){
        }
    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = TowerTreasury;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.IModuleParam, cb){
            cb();
        });

    });
}
