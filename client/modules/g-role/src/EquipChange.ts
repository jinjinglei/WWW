/**
 * Created by lihex on 9/19/15.
 */
module g_role {

    /**
     *
     * @author
     *
     */
    export class EquipChange extends mo.gui.Dlg{

        list_items:egret.gui.List;
        _Item_list_items;

        ico_curEquip:g_comp.Ico_Item;
        label_curDesc:mo.gui.Label;

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
            })
            return gd.BagDataCtrl.getEquipList(hec.getStanbyEquip(part));
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var part = self.data.part;
            var hec = self.data.hec;

            var equipId = hec.getEquipIdByPart(part);
            var trans = gd.equipCtrl.equipTrans(equipId);
            var tempId = hec.getEquipTempIdByPart(part);
            self.ico_curEquip.setData({itemId:tempId});

            var bdc = gd.BagDataCtrl.create(tempId, equipId);
            var str = mo.STR.format("[ubb color=%s]%s[/ubb] [ubb]评分:%s[/ubb][/br]", uiHelper.getColorByQuality(bdc.quality), bdc.name, bdc.score);
            var basePropArr = bdc.proptys;
            var addPropObj = utils.kvArr2KvObj(trans.extraPropArr);
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var propData;
            for(var i = 0, li = basePropArr.length; i < li; i++){
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            self.label_curDesc.text = str;
        }

        _initItem_list_items(cell:EquipChooseItem){
            var self = this;
            var hec = self.get('hec');
            cell.emitter.on(EquipChooseItem.ON_BTN_EQUIP, function(equipId){
                hec.changeEquip(self.get('part'), equipId, self.close, self);

            }, self);

        }
    }
}