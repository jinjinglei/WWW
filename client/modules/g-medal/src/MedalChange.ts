/**
 * Created by lihex on 2/27/16.
 */

module g_medal {
    export class MedalChange extends mo.gui.Dlg{
        ico_medalItem:g_comp.Ico_Medal;
        list_print:egret.gui.List;
        _Item_list_print;
        warPrints:Array<any>;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_print = MedalChooseItem;
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            self.dataChanged();
        }

        getCurrentSkinState():string{
            var self = this;
            return gd.medalCtrl.getMedalTitle()? "change" : "choose";
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var medalCtrl = gd.medalCtrl;
            self.warPrints = [];
            var data = medalCtrl.getWarPrintedList(gd.medalCtrl.getMedalTitle()? 1: 0);
            for(var i=0; i<data.length; ++i){
                if(gd.medalCtrl.isActiveMedal(data[i][0])){
                    self.warPrints.push(data[i]);
                }
            }
            self.refreshList("list_print");
            var medalId = medalCtrl.getMedalTitle();
            if(medalId){
                var info = medalCtrl.getWarPrintData(medalId);
                self.ico_medalItem.setData({itemId:medalId});
            }
        }

        _data_list_print():any[] {
            var self = this, filter, sorter;
            return self.warPrints;
        }
    }
}