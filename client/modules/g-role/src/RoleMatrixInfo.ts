/**
 * Created by Administrator on 2015/9/28.
 */
module g_role{
    export class RoleMatrixInfo extends mo.gui.Dlg{
        ico_item;
        label_name;
        label_has;
        label_prop;
        label_needLv;
        ico_red;
        btn_merge;
        btn_equip;
        btn_ok;
        btn_gainWay;

        data:gd.IHeroPart;
        itemId;

        _childrenCreated(){
            super._childrenCreated();
            this.outsideClosable = true;
            this.ico_item.label_text.visible = false;
        }

        _initProp(){
            super._initProp();
            var self = this;

        }

        dataChanged(){
            super.dataChanged();
            var self = this;

            if(!this.data.hec) return;
            self.reset();
        }

        reset(){
            var self = this;
            var hero = self.data.hec;
            var isMatrix = self.data.isMatrix;
            var part = self.data.part;
            var itemId = self.itemId = hero.getHeroRealmRune(part) || gd.equipCtrl.getInitBreakRing(part);
            var hasEquip = true;
            var canEquip;
            var itemInfo;

            if(isMatrix){
                itemId = self.itemId = hero.getHeroRealmRune(part);
            }else{
                itemId = self.itemId = gd.equipCtrl.getInitBreakRing(part);
            }
            itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);

            self.ico_item.setData({itemId:itemId, count:0})
            self.btn_equip.visible = false;
            self.btn_gainWay.visible = false;
            self.btn_merge.visible = false;
            self.btn_ok.visible = false;
            if(itemInfo[gc.t_item_type]==gc.c_prop.itemTypeKey.rebirth){
                canEquip = gd.heroCtrl.getRealmCount(itemId)>0||gd.heroCtrl.isRuneCom(itemId)&&gd.heroCtrl.canRuneCom(itemId);
                var reamList = hero.getHeroRealmList();
                var reamEquipIds = reamList[1];
                hasEquip = reamEquipIds[part]&&reamEquipIds[part]!=0;
                var realmInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemRealm, itemId);
                self.label_prop.text = gd.heroCtrl.getPropsStr(realmInfo[gc.t_itemRealm_propertys]);
                var hasCount = gd.heroCtrl.getRealmCount(itemId);
                self.label_has.text = mo.STR.format("拥有 %s 件",hasCount);
                self.ico_red.visible = !hasEquip&&canEquip;
                if(hasEquip){
                    self.btn_ok.visible = true;
                }else{
                    if(hasCount>=1){
                        self.btn_equip.visible = true;
                    }else{
                        var canMerge = gd.heroCtrl.isRuneCom(itemId)&&gd.heroCtrl.canRuneCom(itemId);
                        if(canMerge){
                            self.btn_merge.visible = true;
                        }else{
                            self.btn_gainWay.visible = true;
                        }
                    }
                }
                self.label_name.text = itemInfo[gc.t_item_name];
                self.label_needLv.text = mo.STR.format("需求等级 lv%s",itemInfo[gc.t_item_level]);
            }else{
                //特殊戒指
                canEquip = hero.isTringReddot().indexOf(part)!=-1;
                hasEquip = hero.getEquipIdByPart(self.data.part);
                var hasCount = gd.heroCtrl.getRealmCount(itemId);
                self.ico_red.visible = !hasEquip&&canEquip;
                if(hasEquip){
                    self.btn_ok.visible = true;
                }else{
                    if(hasCount>=1){
                        self.btn_equip.visible = true;
                    }else{
                        self.btn_gainWay.visible = true;
                    }
                }
                self.label_has.text = mo.STR.format("拥有 %s 件",hasCount);
                self.label_name.text = itemInfo[gc.t_item_name];
                self.label_needLv.text = mo.STR.format("需求等级 lv%s",itemInfo[gc.t_item_level]);
                var breakInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemBreak,itemId);
                //self.label_prop.text = gd.heroCtrl.getPropsStr(breakInfo[gc.t_itemBreak_props]);
                self.label_prop.text = breakInfo[gc.t_itemBreak_desc];
            }
            self.label_has.visible = hero.isSelf;
        }

        _tap_btn_merge(){
            var self = this;
            g_base.ItemMerge.create().setData({itemId:self.itemId, delegate:self}).show();
        }
        _tap_btn_ok(){
            this.close();
        }
        _tap_btn_gainWay(){
            var self = this;
            var itemId = self.itemId;
            g_base.ItemMerge.create().setData({itemId:itemId, delegate:self}).show();
        }
        _tap_btn_equip(){
            var self = this;
            var id = self.data.hec.get(gc.dsConsts.HeroEntity.id);
            var index = self.data.part;
            var itemId = self.itemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            if(itemInfo[gc.t_item_type]==gc.c_prop.itemTypeKey.rebirth){
                gd.heroCtrl.wearRune(id, index, function(){
                    self.data.delegate.reset();
                    self.close();
                },self);
            }else{
                gd.equipCtrl.wearParRing(id, self.itemId, function(){
                    self.close();
                },self);
            }
        }
    }
}