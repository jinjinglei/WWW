/**
 * Created by Administrator on 2015/12/19.
 */
module g_worldboss{
    export class WorldBoss extends mo.gui.Dlg {
        moduleParam:IModuleParam.WorldBoss;

        ico_reward:g_comp.Ico_Item;
        ico_head:g_comp.Ico_Head;
        px_hp;

        label_lefttime:egret.gui.Label;
        label_first:egret.gui.Label;
        label_first_hh:egret.gui.Label;
        label_first_hurt:egret.gui.Label;
        label_caller:egret.gui.Label;
        label_callerhh:egret.gui.Label;
        label_my_index:egret.gui.Label;
        label_my_hurt:egret.gui.Label;
        label_hanghuigw:egret.gui.Label;
        label_hanghuilt:egret.gui.Label;
        label_coolDown:egret.gui.Label;

        ico_monster:egret.gui.UIAsset;
        label_monster:egret.gui.Label;
        bossAP:g_base.ActionPlayer;

        ckb_auto:egret.gui.CheckBox;
        btn_clear_cd:egret.gui.Button;
        btn_fight:egret.gui.Button;
        btn_guwu:egret.gui.Button;
        img_auto:egret.gui.UIAsset;
        img_title:egret.gui.UIAsset;//标题
        grp_inspire:egret.gui.Group;//行会鼓舞
        grp_call:egret.gui.Group;//行会鼓舞
        label_canFight;
        label_cannotFight;
        label_yourFuHuo;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.curHp.toString(), self._updateUI);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.myHurt.toString(), self._updateUI);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.myRank.toString(), self._updateUI);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.inspireEndTime.toString(), self._updateUI);
            self.registerClassByKey(gd.BossFightCtrl, gd.BossFightCtrl.ON_BOSS_AUTO_FIGHT.toString(), function(){
                self.close();
            });
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
        }

        _bossStateChange(){
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);
            if(!fec.isOpen()){
                var self = this;
                self.ckb_auto.enabled = false;
                self.btn_clear_cd.enabled = false;
                self.btn_fight.enabled = false;
                self.btn_guwu.enabled = false;
                self.label_coolDown.text = "战斗已结束";
                self.px_hp.setValue(0);
            }
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self._bossStateChange);

            self.bossAP = new g_base.ActionPlayer();
            self.bossAP.scaleX = self.bossAP.scaleY = 2.0;
            self.ico_monster.source = self.bossAP;

            var bossId = self.moduleParam.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);

            self.img_title.source = gd.bossCtrl.isGuildBoss(bossId) ? "tit_txt_g_hanghuiboss" : "tit_txt_g_shijieboss";
            var leftTime = fec.getReOverSeconds();
            self.label_lefttime.text = "活动剩余时间 "+ mo.getTimeStr(leftTime*1000);
            self.setCDTime(leftTime);

            self.px_hp.labelFunction = self.barLabelFunction;

            self.px_hp.maximum = fec.getTotalHp();
            self.px_hp.setValue(fec.getCurHp());

            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            var idStr = monsterInfo[gc.t_monster_displayID];
            self.bossAP.loadRes("m"+idStr+"_4s", true);
            self.bossAP.playAction();
            self.label_monster.text = monsterInfo[gc.t_monster_name] + "  Lv."+monsterInfo[gc.t_monster_level] ;

            self.ckb_auto.selected = gd.bossFightCtrl.isAutoFight() && self._isCurAutoFightBoss();
            self._updateCD();
            self._updateUI();

            if(gd.bossCtrl.isGuildBoss(bossId)){
                if(fec.isSelfCall()){
                    self.label_yourFuHuo.visible = true;
                    self.label_canFight.visible = false;
                    self.label_cannotFight.visible = false;
                }else{
                    var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg);
                    var curLeftNum = gd.bossCtrl.getReFightNum()
                    var maxNum = gameInfo[9];
                    self.label_canFight.text = [curLeftNum, maxNum];
                    self.label_canFight.visible = curLeftNum>0;
                    self.label_cannotFight.visible = curLeftNum<=0;
                    self.label_yourFuHuo.visible = false;
                }
            }else{
                self.label_yourFuHuo.visible = false;
                self.label_canFight.visible = false;
                self.label_cannotFight.visible = false;
            }

        }

        private barLabelFunction(value:number,maximum:number):string {
            return mo.STR.format("%s/%s",utils.formatByWan(value),utils.formatByWan(maximum));
        }

        _updateUI(){
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);

            if(self.px_hp && mo.utils.getExtData(self.px_hp, 'progressOpt') != null){
                mo.gui.helper.progress(self.px_hp, fec.getCurHp());
            }

            fec.getFirstHurtRank(function(data){
                if(!data){
                    self.label_first.text = "尚未开始";
                    self.label_first_hh.text = "";
                    self.label_first_hurt.text = "";
                }else{
                    self.ico_head.setData({icoId:data[gc.dsConsts.BossHurtRank.icon]});
                    self.label_first.text = data[gc.dsConsts.BossHurtRank.userName];
                    self.label_first_hh.text = "[" +data[gc.dsConsts.BossHurtRank.guildName]+"]";
                    self.label_first_hurt.text = mo.STR.format("%s",utils.formatByWan(data[gc.dsConsts.BossHurtRank.hurt]));
                }
            },self);

            self.label_my_hurt.text = mo.STR.format("输出伤害:%s",utils.formatByWan(fec.getMyHurt()));
            self.label_my_index.text ="我的排名:"+fec.getMyRank();

            //行会鼓舞界面
            var isGuildBoss = gd.bossCtrl.isGuildBoss(bossId);
            self.grp_inspire.visible = isGuildBoss;
            self.grp_call.visible = isGuildBoss;
            if(isGuildBoss){
                //行会鼓舞设置
                var data = mo.STR.format("增加%s%伤害",(fec.getInspireHurt()/10000)*100);
                self.label_hanghuigw.text = mo.STR.format("行会鼓舞: %s",data);
                var inspireTime = fec.getInspireReSeconds();
                self.label_hanghuilt.text = "加成剩余时间 " + mo.getTimeStr(inspireTime*1000);
                self.setGWTime(inspireTime);
                //召唤者
                self.label_caller.text = fec.getCallUserName();
                self.label_callerhh.text = mo.STR.format("[%s]",fec.getCallUserGuildName()) ;
            }
        }

        _updateCD(){
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);

            self.label_coolDown.text = mo.STR.format("冷却时间：%s", mo.getTimeStr(fec.getFightCd()*1000));
            self.setCoolDownTime(fec.getFightCd());
        }

        _tap_btn_help(){
            var self = this;
            var isGuildBoss = gd.bossCtrl.isGuildBoss(self.moduleParam.bossId);
            if(isGuildBoss){
                g_base.BaseShowTip.create().setData({id:27,param1:mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[7]}).show();
            }else{
                g_base.BaseShowTip.create().setData({id:54}).show();
            }
        }
        _tap_btn_back(){
            var self = this;
            self.close();
        }

        _tap_btn_more_index(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.worldBossHurtList,{"bossId" : self.moduleParam.bossId});
        }

        _tap_btn_guwu(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossInspire, {inspireId: 1, bossId: self.moduleParam.bossId});
        }

        _isCurAutoFightBoss(){
            var self = this;
            var curAutoFightBossId = gd.bossFightCtrl.getAutoBossId();
            return curAutoFightBossId && curAutoFightBossId == self.moduleParam.bossId;
        }

        _chg_ckb_auto(){
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);
            //判断参与等级
            var fightLvl = fec.getFightableLvl();
            if(gd.userCtrl.getLvl() < fightLvl){
                mo.showMsg(gc.id_c_msgCode.noLvlchallengeBoss, fightLvl);
                self.ckb_auto.selected = false;
                return;
            }
            //自动挑战功能有VIP等级限制
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, gd.userCtrl.getVip());
            var canGW = vipInfo[gc.c_vip_bossAutoFight];
            if(!canGW){
                self.ckb_auto.selected = false;
                mo.showMsg(gc.id_c_msgCode.novLvAutoFight, mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[7]);
                return;
            }
            var bossFightCtrl = gd.bossFightCtrl;
            if(self.ckb_auto.selected){
                if(bossFightCtrl.hasAutoFightBoss() && !self._isCurAutoFightBoss()){ //是否已有自动战斗的boss
                    mo.msgMgr.once_type("cancel", g_msg.msgType.confirm, function(){
                        self.ckb_auto.selected = false;
                    });
                    mo.showMsg(gc.id_c_msgCode.onlyoneAutoFight, function(){
                        bossFightCtrl.endAutoFight();
                        bossFightCtrl.setAutoBossId(bossId);
                        bossFightCtrl.startAutoFight();
                    },self);
                }else{
                    bossFightCtrl.setAutoBossId(bossId);
                    bossFightCtrl.startAutoFight();
                }
            }else{
                bossFightCtrl.endAutoFight();
            }
        }

        _tap_btn_reward(){
            var self = this;
            var bossId = self.moduleParam.bossId;
            var isGuildBoss = gd.bossCtrl.isGuildBoss(bossId);
            if(isGuildBoss){
                mo.moduleMgr.runModule(g_consts.moduleId.guildBossReward, self.moduleParam);
            }else{
                mo.moduleMgr.runModule(g_consts.moduleId.wBossReward, self.moduleParam);
            }
        }

        _tap_btn_fight(){
            var self = this;
            self.go_fight();
        }

        _tap_btn_clear_cd(){
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);

            mo.showMsg(gc.id_c_msgCode.ifResetTime, mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[2], "", function(){
                fec.clearFightCd(function(data){
                    self._updateCD();
                },self);
            }, self);
        }

        go_fight(){
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);
            fec.startFight(function(){},self);
        }
        onExit(){
            super.onExit();
            var self = this;
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }

        //Time
        timeTrigger;
        resetCdTimeView(leftMillisecond){
            var self = this;
            if(leftMillisecond>0){
                self.label_lefttime.text = "活动剩余时间 "+ mo.getTimeStr(leftMillisecond);
            }else{

            }
        }
        setCDTime(second){
            var self = this;
            if(second>0){
                if(self.timeTrigger){
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
            }else{
                self.resetCdTimeView(0);
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCdTimeView(leftMillisecond);
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self.resetCdTimeView(0);
        }

        //CoolDown Timer
        cool_timeTrigger;
        resetCoolDownTimeView(leftMillisecond){
            var self = this;
            if(leftMillisecond>0){
                self.btn_clear_cd.visible = true;
                self.label_coolDown.text = "冷却时间 "+ mo.getTimeStr(leftMillisecond);
            }else{
                self.label_coolDown.text = "点击进入战斗立即参与" ;
                self.btn_clear_cd.visible = false;
                /*if(self.ckb_auto.selected){
                 self.go_fight();
                 }*/
            }
        }
        setCoolDownTime(second){
            var self = this;
            if(second>0){
                if(self.cool_timeTrigger){
                    tm.timer.remove(self.cool_timeTrigger);
                    self.cool_timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.cool_timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.coolDownTimeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.coolDownTimeOut, self);
                tm.timer.add(timeTrigger);
            }else{
                if(self.cool_timeTrigger){
                    tm.timer.remove(self.cool_timeTrigger);
                    self.cool_timeTrigger = null;
                }
                self.resetCoolDownTimeView(0);
            }
        }
        coolDownTimeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCoolDownTimeView(leftMillisecond);
        }
        coolDownTimeOut(type, beginTime, endTime){
            var self = this;
            self.resetCoolDownTimeView(0);
        }

        //Guwu Timer
        gw_timeTrigger;
        resetGWTimeView(leftMillisecond){
            var self = this;
            if(leftMillisecond>0){
                self.label_hanghuilt.text = "行会鼓舞剩余时间 "+ mo.getTimeStr(leftMillisecond);
            }else{
                self.label_hanghuilt.text = "行会鼓舞剩余时间";
                self.label_hanghuigw.text = "行会鼓舞:无";
            }
        }
        setGWTime(second){
            var self = this;
            if(second>0){
                if(self.gw_timeTrigger){
                    tm.timer.remove(self.gw_timeTrigger);
                    self.gw_timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.gw_timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.gwTimeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.gwTimeOut, self);
                tm.timer.add(timeTrigger);
            }else{
                self.resetGWTimeView(0);
            }
        }
        gwTimeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetGWTimeView(leftMillisecond);
        }
        gwTimeOut(type, beginTime, endTime){
            var self = this;
            self.resetGWTimeView(0);
        }
    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = WorldBoss;

        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.WorldBoss, cb){
            var self = this;
            var bossId = moduleParam.bossId;
            var isGuildBoss = gd.bossCtrl.isGuildBoss(bossId);
            var realBossCtrl = isGuildBoss? gd.bossGuildCtrl : gd.bossWorldCtrl;
            realBossCtrl.getInfo(function(){
                var bossId = moduleParam.bossId;
                var stats = realBossCtrl.getBossStatus(bossId);
                var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
                if(stats == BOSS_STATUS.fighting) {
                    var fec = gd.bossFightCtrl.getEntity(bossId);
                    if(!fec.getData()){
                        fec.enter(function () {
                            cb();
                        }, self);
                    }else{
                        cb();
                    }
                }else{
                    cb();
                }
            },self)
        });
    });
}