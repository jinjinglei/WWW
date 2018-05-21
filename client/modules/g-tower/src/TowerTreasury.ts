/**
 * Created by Administrator on 2016/1/9.
 */

module g_tower{
    export class TowerTreasury extends mo.gui.Dlg{
        list_items:egret.gui.List;
        btn_once:egret.gui.Button;
        _scollerHelper:uiHelper.ScrollerHelper;
        _Item_list_items;
        treasury_num;
        buyMoney:number;
        consumption;
        label_date;
        label_yb;
        label_Ybtxt;
        num;
        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
            self.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_TOWER_TANBAO, self._setdData);

        }
        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self._setdData()
        }
        _setdData(){
            var self  = this;
            self._setPromptType();
            self._scollerHelper = new uiHelper.ScrollerHelper(self.list_items);
        }
        _setPromptType() {
            var self = this;
            self.num.visible = false;
            self.consumption.visible = false;
            self.label_date.text =  "妖塔已通关"+gd.copyCtrl.getTowerIndex(gd.copyCtrl.getTowerBaokuNum())+"层";
            if(gd.copyCtrl.getPaTaTreasuryCount()<=0){
                self.consumption.visible = true;
                var buyMoney =   gd.copyCtrl.getPaTaTreasuryNeedDia();
                self.buyMoney = buyMoney;
                self.label_yb.text =  buyMoney;
                var freeTimesMax = gd.copyCtrl.getMaxFreeTowerTimes();
                var buyCount = gd.copyCtrl.getPaTaTreasuryBuyCount();
                self.label_Ybtxt.text = freeTimesMax + buyCount + 1;
            }
            else{
                self.num.visible = true;
                self.treasury_num.text =  gd.copyCtrl.getPaTaTreasuryCount() +"/"+gd.copyCtrl.getMaxFreeTowerTimes();
            }

        }
        _data_list_items():any[]{
            var self = this, filter, sorter;
            self._scollerHelper.resumeScroll();
            var treasuryData  =  mo.getJSONWithFileNameAndID(gc.cfg_t_paTaTreasury,gd.copyCtrl.getTowerBaokuNum());
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
                return mo.getJSONWithFileNameAndID(gc.cfg_t_item ,b.itemId)[gc.t_item_color] - mo.getJSONWithFileNameAndID(gc.cfg_t_item ,a.itemId)[gc.t_item_color];
            });
            return ret ;
        }
        _tap_btn_once(){
            var self = this;
            gd.copyCtrl.paTaTreasury(function (data) {
                self._setdData();
                TowerGain.create().setData({items:data}).show();
            }, self)
        }
        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id: 105, param1:gd.copyCtrl.getMaxFreeTowerTimes()}).show();
        }
        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.home);
        }
        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            var ico_item:g_comp.Ico_Item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
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
