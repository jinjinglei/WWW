/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_chuanchen{
    export class Chuanchen extends mo.gui.Dlg{

        list_items:egret.gui.List;
        _Item_list_items;

        tab_bag:egret.gui.TabBar;

        label_empty;
        _equips:Array<any>;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = CCEquipChooseItem;
            self._equips = [];

            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_INHERITED, self._reset);
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            var tabStr=[], tabSource={1:"tab_txt_zansesz", 2:"tab_txt_fsisenz", 3:"tab_txt_daosisz"};
            var heroJob = gc.c_prop.heroJob;
            for(var k in heroJob) {
                var job = parseInt(k);
                if(job == gc.c_prop.heroJobKey.ys) continue; //幻术师目前没有传承功能
                if(gd.heroCtrl.hasHeroByJob(job)) tabStr.push(tabSource[job]);
            }
            tabStr.push("tab_txt_beibao");
            self.tab_bag.dataProvider=new egret.gui.ArrayCollection(tabStr);
            process.nextTick(function(){
                self.tab_bag.selectedIndex = 0;
                self._tap_tab_bag(null);
            });

            for(var i = 0, li = 4; i < li; i++){
                self['img_red'+i].visible = false;
            }
        }

        _tap_tab_bag(event){
            var self = this;
            self._reset();
            var dataGroup:egret.gui.DataGroup = <egret.gui.DataGroup>self.tab_bag.getChildAt(0);
            for(var i=0; i<dataGroup.numChildren; ++i){
                (<egret.gui.TabBarButton>dataGroup.getChildAt(i)).selected = i==self.tab_bag.selectedIndex;
            }
        }

        _reset(){
            var self = this;
            var type = self._getSelectedType();
            if(type < 99){
                var hec:gd.HeroEntityCtrl = gd.heroCtrl.getHeroByJob(type);
                if(hec){
                    self._equips = hec.getAllSpecialEquip();
                }
            }else{
                self._equips = gd.equipCtrl.getBagSpecialEquipList();
            }
            self.label_empty.visible = self._equips.length <= 0;
            self.refreshList('list_items');

            //设置红点
            var dotArr = gd.equipCtrl.getSpecialEquipDot();
            for(var i = 0, li = 4; i < li; i++){
                self['img_red'+i].visible = dotArr[i] >0;
            }
        }

        _getSelectedType(){
            var self = this;
            var selectedItem = self.tab_bag.selectedItem;
            switch (selectedItem){
                case "tab_txt_zansesz":
                    return 1;
                    break;
                case "tab_txt_fsisenz":
                    return 2;
                    break;
                case "tab_txt_daosisz":
                    return 3;
                    break;
                case "tab_txt_beibao":
                    return 99;
                    break;
            }
            return -1;
        }

        _data_list_items():any[]{
            var self = this, filter, sorter;
            return gd.BagDataCtrl.getEquipList(self._equips);
        }

        _initItem_list_items(cell:CCEquipChooseItem){
            var self = this;

        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Chuanchen;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}