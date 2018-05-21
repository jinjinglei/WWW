/**
 * Created by Administrator on 2015/10/6.
 */
module g_shop{
    export class ArenaShop extends mo.gui.Dlg{
        moduleParam:IModuleParam.Shop;

        list_items:egret.gui.List;
        _Item_list_items;
        label_sw;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ArenaShopItem;

            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.prestige.toString(), self.updataJf);
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            if(self.moduleParam){
                self.setData(self.moduleParam);
            }
        }

        onEnter(){
            super.onEnter();
            var self = this;

            self.label_sw.text = gd.userCtrl.getPrestige().toString();
        }

        updataJf(){
            var self = this;
            self.label_sw.text = gd.userCtrl.getPrestige().toString();
        }

        _data_list_items():any[]{
            var self = this;
            return self.data.itemList;
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = ArenaShop;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Shop, cb){
            gd.shopCtrl.getList(gc.c_prop.shopTypeKey.arena,function(itemList){
                moduleParam.itemList = itemList;
                cb();
            }, this);
        });
    });
}