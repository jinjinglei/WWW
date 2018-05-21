/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{

    export class FightMidBar extends mo.gui.MenuLayer{
        moduleParam:IModuleParam.IModuleParam;

        rank_red:mo.gui.UIAsset;

        btn_activity:g_comp.EfxAsset;
        btn_recharge:g_comp.EfxAsset;
        btn_five:g_comp.EfxAsset;
        grp_fiveDay:egret.gui.Group;
        grp_treasure:egret.gui.Group;
        grp_activity:egret.gui.Group;
        btn_first:g_comp.EfxAsset;
        btn_treasure:g_comp.EfxAsset; //vip3屠龙活动
        btn_rank:g_comp.EfxAsset; //琅琊榜

        _initProp(){
            super._initProp();
            var self = this;

            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ON_FIRST_REWARD_RECEIVED, self._upFirstBtn);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            var subModuleId = self.moduleParam.subModuleId;
            var param = self.moduleParam.param;
            switch (subModuleId){
                case g_consts.FS_SUBMID_ACTIVITY:
                    self._tap_btn_activity();
                    break;
                case g_consts.FS_SUBMID_RECHARGE:
                    self._tap_btn_recharge();
                    break;
                case g_consts.FS_SUBMID_VIP:
                    mo.moduleMgr.pushModule(g_consts.moduleId.vip, {showVipLv:param});
                    break;
            }

            self._checkRed();
            self._upFirstBtn();
            self._upTreasureBtn();
            self._upFiveDayBtn();
            self._upActivityEntry();
        }

        onEnter(){
            super.onEnter();
            var self = this;

        }

        _upTreasureBtn(){
            var self = this;
            var isOpen = gd.activityCtrl.getLotteryActivity() != null;
            if(!isOpen && self.btn_treasure){
                self.btn_treasure.playEffect(false);
                mo.gui.helper.rm(self.grp_treasure);
                self.btn_treasure = null;
            }
        }

        _upFirstBtn(){
            var self = this;
            var recived = gd.activityCtrl.hasReceiveFirstRecharge();
            self.btn_recharge.visible = false;
            if(recived){
                self.btn_first.playEffect(false);
                self.btn_first.visible = false;
                self.btn_recharge.visible = true;
            }
        }

        _upFiveDayBtn(){
            var self = this;
            var isOpenNew = gd.activityCtrl.getNewFourActivity() != null;
            if(isOpenNew){
                if(!self.btn_five.visible){
                    self.btn_five.playEffect(true);
                    self.grp_fiveDay.width = 74;
                    self.grp_fiveDay.visible = true;
                }
                //第5天活动还没做,所以到第5天时关闭特效
                if(gd.newFourDaysCtrl.getCurActDay() == 4){
                    self.btn_five.playEffect(false);
                }
            }else{
                var isOpen = gd.activityCtrl.getFiveTargetActivity() != null;
                if(!isOpen){
                    self.btn_five.playEffect(false);
                    self.grp_fiveDay.width = 13;
                    self.grp_fiveDay.visible = false;
                }
                if(isOpen && !self.btn_five.visible){
                    self.btn_five.playEffect(true);
                    self.grp_fiveDay.width = 74;
                    self.grp_fiveDay.visible = true;
                }
                //第5天活动还没做,所以到第5天时关闭特效
                if(isOpen && gd.fiveDaysTargetCtrl.getCurActDay() == 4){
                    self.btn_five.playEffect(false);
                }
            }
        }

        _upActivityEntry(){
            var self = this;
            var isOpen = true;
            var ch = mo_channel.getCurChannel();
            ch.getGameSetting(function (data) {
                if(data && data['activity'] == -1){
                    isOpen = false;
                }
                self.grp_activity.visible = isOpen;
                self.grp_activity.includeInLayout = isOpen;
            });
        }


        _checkRed(){
            var self = this;
            self.btn_activity.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.activity)
                ||gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.sign));

            self.rank_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.rankPk);
        }

        _tap_btn_activity(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.activityDlg);
        }
        _tap_btn_recharge(){
            //ws.recordEvent("点击主城【充值按钮】", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.recharge);
        }
        _tap_btn_first(){
            //ws.recordEvent("点击主城【首充按钮】", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.firstRecharge);
        }

        _tap_btn_treasure(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.treasure);
        }

        _tap_ico_chat(){
            var self = this;
            //ws.recordEvent("进入【聊天】模块", 1);
            Chat.create().show();
        }

        _tap_btn_rank(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.rank);
        }

        _tap_btn_redPacket(){
            mo.moduleMgr.runModule(g_consts.moduleId.redPacket);
        }

        _tap_btn_five(){
            if(gd.activityCtrl.getNewFourActivity() != null){
                mo.moduleMgr.runModule(g_consts.moduleId.newFourDay);
            }else if(gd.activityCtrl.getFiveTargetActivity() != null){
                mo.moduleMgr.runModule(g_consts.moduleId.fiveDay);
            }
        }
    }
}
