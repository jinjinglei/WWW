/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_smelting{
    export class SmeltingItem extends mo.gui.ItemRenderer{
        ico_item:g_comp.Ico_Item;
        efx: g_comp.UIEffect;
        img_add: egret.gui.UIAsset;
        grp_add: egret.gui.Group;

        emitter: egret.Emitter;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_SMELT, self.playEffect);
            self.efx.autoPlay = false;
            self.efx.visible = false;

            var refreshFunc = function(){
                self.efx.gotoAndStop(1);
                self.efx.visible = false;
                self.ico_item.visible = true;
            };
            self.emitter.on('dtor', function () {
                var _efx = self.efx;
                _efx.removeEventListener(egret.Event.COMPLETE, refreshFunc, self);
            });
            self.efx.addEventListener(egret.Event.COMPLETE, refreshFunc, self);
            self.ico_item.onClick(self._dropMe, self);
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var equipId = self.data;
            self.grp_add.visible = !equipId;
            self.ico_item.visible = !!equipId;
            if(equipId){
                var ico_item = self.ico_item;
                var tempId = gd.equipCtrl.getTempIdByEquipId(equipId);
                self.name = "cell_" + tempId;
                ico_item.set('itemId', tempId);
            }
        }

        _tap_img_add(){
            var self = this;
            self.delegate.chooseEquipForIdx(self.itemIndex);
        }

        _dropMe(){
            var self = this;
            self.delegate.dropEquipByIdx(self.itemIndex);
        }

        playEffect(){
            var self = this;
            self.ico_item.visible = false;
            self.efx.visible = true;
            self.efx.play(1);
        }
    }
}