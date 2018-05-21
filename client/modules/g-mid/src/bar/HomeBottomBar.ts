/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{

    export class HomeBottomBar extends mo.gui.MenuLayer{

        moduleParam:IModuleParam.IModuleParam;
        grp_bottom:egret.gui.Group;

        btn_desktop:g_comp.EfxAsset;//desk
        btn_desktop_showType;
        
        btn_bug:egret.gui.Button;
        btn_mail:g_comp.EfxAsset; //邮箱
        btn_chat:egret.gui.Button;
        btn_notice:egret.gui.Button;
        btn_chuanchen;
        btn_bindPhone;

        //hd {
        redpoint_bugchat;
        //hd }
        //showType:number;
        
        _initProp(){
            super._initProp();
            var self = this;

            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.UserCtrl, gd.UserCtrl.ON_GET_BINDPHONE_REWARD, self._update_bindPhone);

            //hd {
            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_NEWBUGCHAT_RECEIVED, self._bugChatRed);
            //hd }
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self._checkRed();

            self.btn_bindPhone.visible = false;
            self.btn_bindPhone.includeInLayout = false;
            self._update_bindPhone();


            //self.btn_saveGame.visible = false;

            // ico_desktop ico_phone ico_xiongdi

            //hd {只有platform为hgame的才显示兄弟模块
            //self.btn_xiongdi.visible = mo_channel.getCurChannel().channel() == "hgame";
            //hd }

            // 刷新desktop的显示
            self._update_desktop();

            /*
            ch.isBindMobile(function(isSucc){
                if(!isSucc){
                    self.btn_bindPhone.visible = true;
                }else{
                    self.btn_bindPhone.visible = false;
                    self.grp_bottom.removeElement(self.btn_bindPhone);
                }
            },self);

            //hd { 判断绑定微端
            ch.isSendToDesktopSucc(function(suc, fav,showType) {
                if (suc) {
                    if (gd.userCtrl.isGetDeskReward()) {
                        self.btn_saveGame.visible = false;
                        self.grp_bottom.removeElement(self.btn_saveGame);
                    } else {
                        self.btn_saveGame.visible = true;
                    }
                } else {
                    self.btn_saveGame.visible = false;
                    self.grp_bottom.removeElement(self.btn_saveGame);
                }

                self.showType = showType;
                if(self.showType == 1){
                    self.img_savegame.source = "ico_desktop_share";
                }else if(self.showType == 2){
                    self.img_savegame.source = "ico_desktop_follow";
                }else{
                    self.img_savegame.source = "ico_desktop";
                }
            }, self);
            */
        }

        _checkRed(){
            var self = this;
            self.btn_mail.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.mail));
            self.btn_chuanchen.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.chuanChen));
        }

         //hd {
        _bugChatRed() {
            var self = this;
            if (this.bugChat == null)
                self.redpoint_bugchat.visible = true;
        }
        bugChat;
        //hd }
        
        _tap_btn_bug(){
            //hd {
            //BugFeedBack.create().show();
            var self = this;
            self.bugChat = BugChat.create().show();
            self.bugChat.onClose(function() {
                self.bugChat = null;
            });
            self.redpoint_bugchat.visible = false;
            //hd }
        }
        
        _tap_btn_mail(){
            mo.moduleMgr.runModule(g_consts.moduleId.mail);
        }
        _tap_btn_chuanchen(){
            mo.moduleMgr.runModule(g_consts.moduleId.chuanchen);
        }

        _tap_btn_notice(){
            var self = this;
            //gd.NoticeCtrl.getNewOne(function(data){
            //    mo.showMsg(gc.id_c_msgCode.sysNotice, {sysNotice: data});
            //},self);
            gd.NoticeCtrl.getList(function(data){
                g_base.NoticeDlg.create().setData({notices:data}).show();
            },self);
        }

        _tap_btn_bindPhone(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.bindPhone);
        }

        /*
        _tap_btn_bindPhone(){
            var self = this;
            BindPhone.create().show().onClose(function(){
                var ch = mo_channel.getCurChannel();
                ch.isBindMobile(function(isSucc){
                    if(isSucc){
                        self.grp_bottom.removeElement(self.btn_bindPhone);
                    }
                },self);
            });
        }
        _tap_btn_saveGame(){
            var self = this;
            var sg:g_mid.SaveGame = SaveGame.create();
            sg.showAndType(self.showType).onClose(function(){
                var ch = mo_channel.getCurChannel();
                if(gd.userCtrl.isGetDeskReward()){
                    self.grp_bottom.removeElement(self.btn_saveGame);
                }
            });
        }

        //hd { 兄弟系统
        _tap_btn_xiongdi() {
            g_mid.FriendDialog.Open();
        }
        //hd }
        */

        _tap_btn_desktop() {
            var self = this;
            var ch = mo_channel.getCurChannel();
            if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.XiongDi) {
                g_mid.FriendDialog.Open();
            } else {
                var type = 0;
                if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.FenXiang) {
                    type = 1;
                } else if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.GuangZhu) {
                    type = 2;
                }
                var sg:g_mid.SaveGame = SaveGame.create();
                sg.showAndType(type, g_channel.WooolSdkDesktopPosition.Home).onClose(function() {
                    self._update_desktop();
                });
            }
        }

        _update_bindPhone(){
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.isBindMobile(function(isOpen, isBind){
                if(isOpen && !isBind){
                    self.btn_bindPhone.visible = true;
                    self.btn_bindPhone.includeInLayout = true;
                }else{
                    if(self.btn_bindPhone){ //移除入口
                        self.btn_bindPhone.visible = false;
                        self.grp_bottom.removeElement(self.btn_bindPhone);
                        self.btn_bindPhone = null;
                    }
                }
            },self);
        }

        // 刷desktop的样式
        _update_desktop() {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.getDesktopInfo(g_channel.WooolSdkDesktopPosition.Home, (suc:boolean, data:g_channel.WooolSdkDesktopResult)=>{
                if (suc) {
                    switch (data.showType) {
                    case g_channel.WooolSdkDesktopShowType.FenXiang: {
                        self.btn_desktop.source = "ico_desktop_share";
                    } break;
                    case g_channel.WooolSdkDesktopShowType.GuangZhu: {
                        self.btn_desktop.source = "ico_desktop_follow";
                    } break;
                    case g_channel.WooolSdkDesktopShowType.XiongDi: {
                        self.btn_desktop.source = "ico_xiongdi";
                    } break;
                    default: {
                        self.btn_desktop.source = "ico_desktop";
                    } break;
                    }
                    self.btn_desktop_showType = data.showType;
                    if (data.flash)
                        self.btn_desktop.playEffect(true);
                } else {
                    self.btn_desktop.visible = false;
                    self.btn_desktop.includeInLayout = false;
                }
            }, self);
        }
            
    }
}
