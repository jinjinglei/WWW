/**
 * Created by Administrator on 2015/9/24.
 */
module g_fight{
    export class PVPSelfInfo extends mo.gui.Layer{
        bar_pk:egret.gui.ProgressBar;
        label_myKillValue;
        label_pkYellow;
        label_pkRed;
        grp_pk;
        label_pk;
        ico_light;
        label_pkAddDesc;
        label_name;
        label_noExpTip;
        ico_role;
        ico_red;

        _initProp(){
            super._initProp();
            var self = this;
            self.registerClassByKey(gd.PkOutCtrl, gc.dsConsts.PkOutEntity.pkValue.toString(), self.reset);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self.checkRedPoint);
        }
        checkRedPoint(){
            this.ico_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.pkout1);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.ico_role.source = uiHelper.getHeroIcon(gd.userCtrl.getIconId(), 0);
            self.checkRedPoint();

            this.bar_pk.labelFunction = function(a,b){
                return "";
            }
            this.bar_pk.value = 0;
            var dur = this.bar_pk.slideDuration;
            this.bar_pk.slideDuration=0;
            this.bar_pk.validateDisplayList();
            this.bar_pk.slideDuration = dur;

            self.reset();
        }

        _tap_btn_rank(){
            gd.pkOutCtrl.getRankList(function(data){
                g_fight.PVPRank.create().setData({rankData:data}).show();
            }, this);
        }
        _tap_btn_log(){
            gd.pkOutCtrl.getPkRecordList(function(data){
                g_fight.PVPLog.create().setData({logData:data}).show();
            }, this);
            gd.pkOutCtrl.setNewDeal(false);
        }

        onEnter(){
            var self = this;
            super.onEnter();
            self.reset();
        }

        reset(){
            var self = this;
            var pkValue = gd.pkOutCtrl.getPkValue();
            var myKillValue = gd.pkOutCtrl.getKillValue();
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueYellow = gameCfg[5];
            var valueRed = gameCfg[6];

            if(pkValue>=valueRed){
                self.ico_light.x = 306;
                self.label_name.textColor = self.label_pkAddDesc.textColor = 0xff0000;
                self.label_pkAddDesc.text = "红名会被掠夺金币和背包物品";
            }else if(pkValue>=valueYellow){
                self.ico_light.x = 203;
                self.label_name.textColor = self.label_pkAddDesc.textColor = 0xfff000;
                self.label_pkAddDesc.text = "黄名保护：被击杀不受损失。";
            }else{
                self.ico_light.x = 54;
                self.label_name.textColor = self.label_pkAddDesc.textColor = 0xffffff;
                self.label_pkAddDesc.text = "白名保护：被击杀不受损失。";
            }
            self.label_name.text = gd.userCtrl.getName();
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkCfg1);
            self.label_noExpTip.text = mo.STR.format("每天主动寻找对手%s次后将不再获得经验奖励", gameCfg[0]);
            self.label_myKillValue.text = myKillValue.toString();
            self.label_pk.text = pkValue.toString();
            self.label_pkYellow.text = valueYellow.toString();
            self.label_pkRed.text = valueRed.toString();
            self.bar_pk.maximum = 100;
            self.bar_pk.value = pkValue;
            if(self.grp_pk){
                if(pkValue<=self.bar_pk.maximum){
                    self.grp_pk.x = 65+(self.bar_pk.width)*(self.bar_pk.value/self.bar_pk.maximum);
                }else{
                    self.grp_pk.x = 365+40;
                }
            }
        }

        _tap_btn_help(){
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkCfg1);
            var gameCfg2 = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var param1 = gameCfg[0];
            var param2 = gameCfg2[0];
            var param3 = gameCfg2[11];
            g_base.BaseShowTip.create().setData({id:2, param1:param1, param2:param2, param3:param3}).show();
        }

        _tap_btn_clearRedPoint(){
            var self = this;
            gd.pkOutCtrl.clearPkValue(function(){
                self.reset();
            }, self);
        }
    }
}