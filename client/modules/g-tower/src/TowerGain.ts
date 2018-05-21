/**
 * Created by Administrator on 2016/1/9.
 */

module g_tower{

    export class TowerGain extends mo.gui.Dlg{

        grp_passAward;
        btn_again1;
        label_desc;
        grp_cost;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var items = self.data.items;

            var freeTimesLeft = gd.copyCtrl.getPaTaTreasuryCount();
            var freeTimesMax = gd.copyCtrl.getMaxFreeTowerTimes();
            var costDimond = gd.copyCtrl.getPaTaTreasuryNeedDia();
            var buyCount = gd.copyCtrl.getPaTaTreasuryBuyCount();
            
            self.label_desc.text = costDimond > 0?
                mo.STR.format("消耗:")
            : mo.STR.format("今日剩余免费寻宝次数:%s/%s", freeTimesLeft, freeTimesMax);
            self.grp_cost.visible = costDimond > 0;
            self.grp_cost.includeInLayout = costDimond > 0;
            if(costDimond > 0){
                uiHelper.setResGrp(self.grp_cost, gc.c_prop.spItemIdKey.diamond, costDimond);
            }
            uiHelper.setItemsGrp(self.grp_passAward, utils.itemObj2ObjArr(items));
        }

        _tap_btn_again1(){
            var self = this;
            gd.copyCtrl.paTaTreasury(function (data) {
                self.close();
                TowerGain.create().setData({items:data}).show();
            }, self)
        }

    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Tower;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.IModuleParam, cb){
            gd.copyCtrl.getPaTaInfo(function () {
                cb();
            }, this);
        });

    });
}
