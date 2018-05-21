/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_activity{
    export class SignItem extends mo.gui.ItemRenderer{

        ico_item:g_comp.Ico_Item;
        grp_center:egret.gui.Group;

        state:number; //0不可签，1已签，2可签，3可补签
        efx:g_comp.UIEffect;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.state = 0;
        }


        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            var kv = utils.obj2KVArr(data[1]);
            self.ico_item.setData({itemId: kv[0], count: kv[1]});
            self.state = gd.signCtrl.getState(data[0]);
            self.invalidateSkinState();
            if(self.state == 2){
                if(!self.efx){
                    var efx:g_comp.UIEffect = self.efx = g_comp.UIEffect.create();
                    efx.performanceControl = false;
                    efx.y = -5;
                    efx.effectId = 18;
                    efx.autoPlay = true;
                    self.grp_center.addElement(efx);
                }
            }else{
                if(self.efx){
                    self.efx.stop();
                    self.grp_center.removeElement(self.efx);
                }
                self.efx = null;
            }
        }

        getCurrentSkinState():string{
            var self = this;
            if(self.state == 1) return "disabled";
            if(self.state == 3) return "canpatch";
            return "up";
        }
    }
}