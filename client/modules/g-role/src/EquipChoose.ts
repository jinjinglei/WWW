/**
 * Created by lihex on 9/19/15.
 */
module g_role {

    /**
     *
     * @author
     *
     */
    export class EquipChoose extends mo.gui.Dlg{

        list_items:egret.gui.List;
        _Item_list_items;

        data:gd.IHeroPart;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = EquipChooseItem;
        }

        _data_list_items():any[]{
            var self = this, filter, sorter;
            var part = self.data.part;
            var hec = self.data.hec;
            process.nextTick(function(){
                mo.emitter.emit("equipList");
            });
            return gd.BagDataCtrl.getEquipList(hec.getStanbyEquip(part));
        }

        _initItem_list_items(cell:EquipChooseItem){
            var self = this;
            var hec = self.data.hec;
            cell.emitter.on(EquipChooseItem.ON_BTN_EQUIP, function(equipId){
                hec.changeEquip(self.data.part, equipId, self.close, self);

            }, self);

        }
    }
}