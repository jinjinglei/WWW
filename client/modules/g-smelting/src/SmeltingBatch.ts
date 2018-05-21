/**
 * Created by Zhuang on 2016/4/25.
 */
module g_smelting{
    export class SmeltingBatch extends g_base.CloseInfoDlg{

        white_txt;
        green_txt;
        blue_txt;
        purple_txt;
        orange_txt;
        ckb_keep:egret.gui.CheckBox;
        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.ckb_keep.selected = true
            self._setData()
        }
        _tap_btn_info(){
            g_base.BaseShowTip.create().setData({id: 4}).show();
        }
        _setData(){
            var self = this;
            var isRetain =  self.ckb_keep.selected;
            self.white_txt.text = "白色装备×"+ gd.equipCtrl.getSmeltArr((isRetain? 1 : 0),1).length;
            self.green_txt.text = "绿色装备×"+gd.equipCtrl.getSmeltArr((isRetain? 1 : 0),2).length;
            self.blue_txt.text = "蓝色装备×"+gd.equipCtrl.getSmeltArr((isRetain? 1 : 0),3).length;
            self.purple_txt.text ="紫色装备×"+gd.equipCtrl.getSmeltArr((isRetain? 1 : 0),4).length;
            self.orange_txt.text = "橙色装备×"+gd.equipCtrl.getSmeltArr((isRetain? 1 : 0),5).length
        }
        _tap_btn_whiteResolve(){
            var self = this;
            self._ResolveEquip(1)
        }
        _tap_btn_greenResolve(){
            var self = this;
            self._ResolveEquip(2)
        }
        _tap_btn_blueResolve(){
            var self = this;
            self._ResolveEquip(3)
        }
        _tap_btn_purpleResolve(){
            var self = this;
            self._ResolveEquip(4)
        }

        _tap_btn_orangeResolve(){
           var self = this;
            self._ResolveEquip(5)
        }
        _chg_ckb_keep(){
            var self  = this;
            self._setData()
        }
        _ResolveEquip(indx:number){
            var self = this;
            var colorType = indx;
            var isRetain =  self.ckb_keep.selected;
            var equipIds = gd.equipCtrl.getSmeltArr((isRetain? 1 : 0),indx);
            if(gd.equipCtrl.getSmeltArr((isRetain? 1 : 0),indx).length == 0){
                return mo.showMsg("没有该类装备需要熔炼！");
            }
            gd.equipCtrl.smelt(equipIds,colorType,function(){
                self._setData();
            },self);
        }

    }

}