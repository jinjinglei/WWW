/**
 * Created by Zhuang on 2016/7/4.
 */
module g_villian{
    export class VillianSoulLayer extends mo.gui.Dlg{

        list_items:egret.gui.List;
        _Item_list_items;
        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = VillianSoulCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
        }
        _data_list_items():any[]{
            var self = this, filter, sorter;
            return  gd.heroCtrl.getList();
        }
        _click_list_items(event:egret.gui.ListEvent) {
            var self = this;
            var bdc:gd.HeroEntityCtrl = event.item;
            //VillianSoulLayer.create().setData({curHero:bdc}).show();


        }
    }
}