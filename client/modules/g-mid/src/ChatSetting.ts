/**
 * Created by admin on 16/4/10.
 */
module g_mid {
    export class ChatSetting extends mo.gui.Dlg {

        ckb_vip;
        ckb_laba;

        _initProp() {
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.ckb_vip.selected = gd.chatCtrl.isFollowNormalUser;
            self.ckb_laba.selected = gd.chatCtrl.isAutoBuyLaba;
        }

        onEnter(){
            super.onEnter();
        }

        onExit(){
            super.onExit();
            var self = this;
            gd.userCtrl.updateSetting(gd.chatCtrl.isFollowNormalUser,gd.chatCtrl.isAutoBuyLaba,function(){},self);
        }

        _chg_ckb_vip(){
            gd.chatCtrl.isFollowNormalUser = (gd.chatCtrl.isFollowNormalUser==0?1:0);
            gd.chatCtrl.followModeChange();
        }

        _chg_ckb_laba(){
            var self = this;
            if(gd.userCtrl.getVip() < 2){
                self.ckb_laba.selected = false;
                return mo.showMsg("VIP2及以上才可开启此功能");
            }
            gd.chatCtrl.isAutoBuyLaba = (gd.chatCtrl.isAutoBuyLaba==0?1:0);
        }
    }
}