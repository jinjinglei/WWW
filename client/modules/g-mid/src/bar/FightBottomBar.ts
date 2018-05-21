/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_mid, "g-mid");
    logger.setLvl("g-mid", 4);

    export class FightBottomBar extends mo.gui.MenuLayer{

        moduleParam:IModuleParam.IModuleParam;
        grp_bottom:egret.gui.Group;

        btn_desktop:g_comp.EfxAsset;//desk
        btn_desktop_showType;

        btn_resolve:g_comp.EfxAsset;//熔炼
        btn_chat:egret.gui.Button;
        btn_unlockRole:g_comp.EfxAsset;//角色解锁
        btn_wing:g_comp.EfxAsset;//翅膀
        btn_practice:g_comp.EfxAsset;//修炼
        efx_tulong:g_comp.UIEffect;
        btn_tulong:egret.gui.Group;//VIP3屠龙活动
        btn_rebirth:egret.gui.Group;//转生

        _initProp(){
            super._initProp();
            var self = this;

            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.HeroCtrl, gd.HeroCtrl.ON_CALL_HERO, self.onCallHero);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.vip.toString(), self._upTuLongBtn);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.lvl.toString(), self._upRebirthBtn);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            var subModuleId = self.moduleParam.subModuleId;
            switch (subModuleId){
                case g_consts.FS_SUBMID_SMELT:
                    self._tap_btn_resolve();
                    break;
                case g_consts.FS_SUBMID_PVP_OUT:
                    //none
                    break;
                case g_consts.FS_SUBMID_CHAT:
                    self._tap_btn_chat();
                    break;
            }

            var ch = mo_channel.getCurChannel();            

            self._checkRed();

            self.onCallHero();

            self._upTuLongBtn();

            self._upRebirthBtn();

            // 刷新一下desktop
            self._update_desktop();

        }

        onCallHero(){
            var self = this;
            //英雄解锁按钮是否保留
            var idx = gd.heroCtrl.getNextIdxToBeOpen();
            var isShow = idx > 0 && (idx<3 || idx==3 && gd.userCtrl.get(gc.dsConsts.UserEntity.lvl)>=145);
            if(isShow){
                self.grp_bottom.addElementAt(self.btn_unlockRole, self.grp_bottom.numElements-2);
            }else{
                if(self.btn_unlockRole.owner)
                    self.btn_unlockRole.owner.removeElement(self.btn_unlockRole);
            }
        }

        _checkRed(){
            var self = this;
            self.btn_resolve.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.bag));
            var idx = gd.heroCtrl.getNextIdxToBeOpen();
            var isShow = idx > 0 && gd.heroCtrl.isOpenCfgOk(idx);
            self.btn_unlockRole.playEffect(isShow);
            self.btn_wing.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role1_wing)
            ||gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role2_wing)
            ||gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role3_wing));
            self.btn_practice.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.medal));

        }

        _tap_btn_unlockRole(){
            var self = this;
            var idx = gd.heroCtrl.getNextIdxToBeOpen();
            if(idx < 3){
                g_base.CreateRole.create().setData({action:1}).show().onClose(self._checkRed, self);
            }else{
                g_base.Create4thRole.create().show().onClose(self._checkRed, self);
            }
        }

        _tap_btn_wing(){
            var self = this;
            var moduleParam:any;
            //跳转参数参考TaskItem.ts
            moduleParam = {subModuleId : 3};
            mo.moduleMgr.runModule(g_consts.moduleId.role, moduleParam);
        }

        _tap_btn_resolve(){
            //ws.recordEvent("进入【熔炼】模块", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.smelting);
        }
        _tap_btn_practice(){
            mo.moduleMgr.runModule(g_consts.moduleId.practice);
        }
        _tap_btn_chat() {
            //ws.recordEvent("进入【聊天】模块", 1);
            Chat.create().show();
        }

        _tap_btn_tulong(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.tuLong);
        }

        _upTuLongBtn(){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var lvl = c_game[gc.id_c_game.tuLong][4];

            var lessVip3 = gd.userCtrl.getVip() < 3;
            var lessLvl66 = gd.userCtrl.getLvl() < lvl;
            var showTuLong = lessVip3 && lessLvl66;            
            self.btn_tulong.visible = showTuLong;
            uiHelper.playUIEffect(self.efx_tulong,showTuLong);
        }

        _tap_btn_rebirth(){
            mo.moduleMgr.runModule(g_consts.moduleId.rebirth);
        }

        _upRebirthBtn(){
            var self = this;
            var fristRebirthData = gd.reBirthCtrl.getRebirthCfg(1);
            self.btn_rebirth.visible = gd.userCtrl.getLvl() >= fristRebirthData.lvl- 5;
            self.onCallHero();
        }


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
                sg.showAndType(type, g_channel.WooolSdkDesktopPosition.Fight).onClose(function() {
                    self._update_desktop();
                });
            }
        }

        // 刷desktop的样式
        _update_desktop() {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.getDesktopInfo(g_channel.WooolSdkDesktopPosition.Fight, (suc:boolean, data:g_channel.WooolSdkDesktopResult)=>{
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
