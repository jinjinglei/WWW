/**
 * Created by Administrator on 2015/12/28.
 */
module g_worldboss {
    import BossGuildCtrl = gd.BossGuildCtrl;
    export class GuildBossCall extends mo.gui.Dlg {
        moduleParam:any;

        px_hp:egret.gui.ProgressBar;
        label_fighting:egret.gui.Label;
        label_boss_lvLmt_fight;
        grp_fight:egret.gui.Group;
        grp_call:egret.gui.Group;
        grp_call_need:egret.gui.Group;
        label_name:egret.gui.Label;
        img_boss:egret.gui.UIAsset;
        img_boss_bg:egret.gui.UIAsset;
        label_reward_hint:egret.gui.Label;
        label_boss_lvLmt_call;

        label_level_need:egret.gui.Label;
        label_left_time:egret.gui.Label;

        grp_res:egret.gui.Group;
        grp_res_extra:egret.gui.Group;
        label_duration:egret.gui.Label;
        label_boss_sleep:egret.gui.Label;
        label_call_time:mo.gui.Label;
        label_limit_time:mo.gui.Label;

        btn_call:egret.gui.Button;
        btn_lock_call:egret.gui.Button;
        btn_fight:egret.gui.Button;

        btn_status:egret.gui.Button;
        grp_lock:egret.gui.Group;
        ckb_lock:egret.gui.CheckBox;
        label_numFuHuo;
        label_extra_cost;
        img_title;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
            self.registerClassByKey(gd.BossGuildCtrl, gd.BossGuildCtrl.ON_BOSS_CALL_UPDATE, self.close);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self._bossStateChange);
            self.px_hp.labelFunction = self.barLabelFunction;
            self.setData(self.moduleParam);

            self.label_numFuHuo.visible = false;
            if(self.moduleParam.isLmt){
                self.img_title.source = "tit_txt_g_xianshibossf";
            }else{
                self.img_title.source = "tit_txt_g_hanghuiboss";
            }
        }

        private barLabelFunction(value:number,maximum:number):string {
            return mo.STR.format("%s/%s",utils.formatByWan(value),utils.formatByWan(maximum));
        }

        _bossStateChange(){
            var self = this;
            var bossId = self.data.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);
            if(!fec.isOpen()) {
                var self = this;
                if(self.grp_fight.visible){
                    self.label_fighting.visible = false;
                    self.btn_status.visible = true;
                    self.label_left_time.visible = false;
                    self.btn_fight.visible = false;
                    self.label_level_need.text = "挑战已结束";
                }
            }else{
                self._updateData(true);
            }
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            //节日显示
            var holidayImgSrc = {
                0 : ["panel_ditus"],
                1 : ["panel_gboss_huodong_1"]
            };
            var c_boss = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, self.data.bossId);
            var showOnHoliday = c_boss[gc.c_bossParameter_showOnHoliday] ||0;
            var srcCfg = holidayImgSrc[showOnHoliday];
            self.img_boss_bg.source = srcCfg[0];
            self.label_numFuHuo.text = gd.bossGuildCtrl.getRepeatCount(self.data.bossId);
            self._updateData(true);
        }

        _updateData(checkCD){
            var self = this;
            var bossId = self.data.bossId;
            var isLimit = gd.bossGuildCtrl.isLimitTime(bossId);

            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_boss = c_bossParameter[bossId];
            self.label_limit_time.visible = false;

            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text = "("+monsterInfo[gc.t_monster_level]+"级) "+monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath(c_boss[gc.c_bossParameter_displayId]);
            var descId = c_boss[gc.c_bossParameter_awardDesc];
            var desc = gc.c_prop.wbossRewardDes[descId];
            desc = descId == gc.c_prop.wbossRewardDesKey.equip ?
                mo.STR.format(desc, monsterInfo[gc.t_monster_level])
                : desc;
            self.label_reward_hint.text = mo.STR.format("抢夺：%s", desc);

            self.label_call_time.text =  [isLimit?"今日":"每天", gd.bossGuildCtrl.getOpenStartTime().toFormat("HH24:MI")
                ,gd.bossGuildCtrl.getOpenEndTime().toFormat("HH24:MI")];

            var needLvl = c_boss[gc.c_bossParameter_fightLvl];
            self.label_boss_lvLmt_call.text = [needLvl, c_boss[gc.c_bossParameter_maxLvl]];
            self.label_boss_lvLmt_fight.text = [needLvl, c_boss[gc.c_bossParameter_maxLvl]];
            self.label_boss_lvLmt_call.visible = false;

            var stats = gd.bossGuildCtrl.getBossStatus(bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            if(stats == BOSS_STATUS.fighting) {
                var fctrl = gd.bossFightCtrl.getEntity(bossId);

                //设置血量
                if(!fctrl.getData()){
                    fctrl.enter(function(){
                        self.px_hp.maximum = fctrl.getTotalHp();
                        self.px_hp.setValue(fctrl.getCurHp());
                    },self);
                }else{
                    self.px_hp.maximum = fctrl.getTotalHp();
                    self.px_hp.setValue(fctrl.getCurHp());
                }

                //设置战斗时UI状态
                self.label_fighting.visible = true;
                self.btn_status.visible = false;
                self.grp_fight.visible = true;
                self.grp_call.visible = false;

                if(checkCD){
                    self.setCDTime(gd.bossGuildCtrl.getReDisappearSeconds(bossId));
                }

                var leftTime = gd.bossGuildCtrl.getReDisappearSeconds(bossId);
                if(leftTime){
                    self.label_left_time.visible = true;
                    self.label_left_time.text = mo.getTimeStr(leftTime*1000,true);//剩余时间
                    if(checkCD) {
                        self.setCDTime(leftTime);
                    }
                }else{
                    self.label_left_time.visible = false;
                }

                self.label_level_need.text = "";
                if(gd.userCtrl.getLvl() < needLvl || gd.userCtrl.getLvl()>c_boss[gc.c_bossParameter_maxLvl]){
                    self.label_boss_lvLmt_fight.visible = true;
                    self.btn_fight.visible = false;
                }else{
                    self.label_boss_lvLmt_fight.visible = false;
                    self.btn_fight.visible = true;
                }
            }else{
                //结算中战斗按钮不能点
                self.btn_fight.enabled = stats != BOSS_STATUS.prize;

                //Call
                self.label_limit_time.visible = isLimit==1;
                if(isLimit){
                    var startTime = Date.newDate(gd.bossGuildCtrl.getLimitStartTime(bossId));
                    var endTime = Date.newDate(gd.bossGuildCtrl.getLimitEndTime(bossId));
                    var weekStrs = ["每天","每周一","每周二","每周三","每周四","每周五","每周六","每周日"];
                    self.label_limit_time.text = [startTime.toFormat("MM月DD日"), endTime.toFormat("MM月DD日"), weekStrs[gd.bossGuildCtrl.getWeek(bossId)]];
                }

                self.px_hp.maximum = monsterInfo[gc.t_monster_maxHp];
                self.px_hp.setValue(monsterInfo[gc.t_monster_maxHp]);

                var status = gd.bossGuildCtrl.getBossStatus(bossId);

                self.label_fighting.visible = false;
                self.btn_status.visible = true;
                self.grp_fight.visible = false;
                self.grp_call.visible = true;
                self.label_boss_sleep.visible = true;
                self.grp_res.visible = false;
                self.grp_res_extra.visible = false;
                self.label_duration.visible = false;
                self.grp_call_need.visible = false;
                self.grp_lock.visible = false;
                self.btn_call.visible = true;
                self.btn_call.enabled = false;
                self.btn_lock_call.visible = false;
                self.label_left_time.visible = false;
                self.label_boss_sleep.textColor = 0x00ff00;
                self.btn_status.visible = true;
                if(status == 1){
                    //未开启
                    self.label_boss_sleep.text = mo.STR.format("行会等级达到%s开启",c_boss[gc.c_bossParameter_openLvl]);
                }else if(status == 2){
                    //正在挑战中
                    self.label_boss_sleep.text = "";
                }else if(status == BOSS_STATUS.sleep){
                    //Boss正在休息
                    self.label_boss_sleep.text = "BOSS休息中";
                }else if(status == BOSS_STATUS.cd){
                    //已被击杀,cd中
                    //self.btn_call.visible = false;
                    self.label_limit_time.visible = false;
                    self.label_boss_sleep.text = "召唤冷却中";
                    var leftTime = gd.bossGuildCtrl.getOpenCd(bossId);
                    if(leftTime){
                        self.label_left_time.visible = true;
                        self.label_left_time.text = mo.getTimeStr(leftTime*1000,true);
                        if(checkCD) {
                            self.setCDTime(leftTime);
                        }
                    }
                    if(c_boss[gc.c_bossParameter_repeat]){
                        self.setCanCallStatus();
                    }
                }else if(status == 5){
                    //可召唤
                    self.setCanCallStatus();
                }
            }
        }

        setCanCallStatus(){
            var self = this;
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            self.btn_call.enabled = true;
            self.grp_call_need.visible = true;
            self.grp_res.visible = true;
            self.grp_res_extra.visible = false;
            self.grp_res_extra.includeInLayout = false;
            self.label_duration.visible = true;


            var bossId = self.data.bossId;
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_boss = c_bossParameter[bossId];
            var needLvl = c_boss[gc.c_bossParameter_fightLvl];
            var status = gd.bossGuildCtrl.getBossStatus(bossId);

            if(!self.moduleParam.isLmt){
                self.grp_lock.visible = true;
            }

            //锁定状态时还会有额外的元宝花费
            self.btn_lock_call.visible = self.ckb_lock.selected;
            self.btn_call.visible = !self.ckb_lock.selected;
            self.label_duration.text = mo.STR.format("召唤后需在%s分钟内击杀BOSS", c_boss[gc.c_bossParameter_timeLimit]/60);

            if(status == BOSS_STATUS.cd){
                self.label_boss_sleep.text = "召唤冷却中";
                self.btn_lock_call.icon = "btn_txt_suodinfuhuo";
                self.btn_call.icon = "btn_txt_lijizaohuan";
                var coseYB = gd.bossGuildCtrl.getRepeatCost(bossId, false);
                self.grp_res_extra.visible = false;
                self.grp_res_extra.includeInLayout = false;
                if(self.ckb_lock.selected){
                    coseYB = gd.bossGuildCtrl.getRepeatCost(bossId, true);
                }
                uiHelper.setResGrp(self.grp_res, gc.c_prop.spItemIdKey.diamond, coseYB);
                //self.label_numFuHuo.visible = true;
            }else{
                //设置话费描述,非元宝的要显示名字
                var itemId = c_boss[gc.c_bossParameter_summonCost][0];
                var itemNum = c_boss[gc.c_bossParameter_summonCost][1];
                var isDiamond = (itemId == gc.c_prop.spItemIdKey.diamond);

                self.label_boss_lvLmt_call.visible = true;
                self.label_boss_sleep.text = "";
                self.btn_lock_call.icon = "btn_txt_shuodingzaohuan";
                self.btn_call.icon = "btn_txt_zaohuan";
                if(self.ckb_lock.selected){
                    var extraDiamod = gd.bossGuildCtrl.getLockCost();
                    itemNum += isDiamond? extraDiamod : 0; //累加
                    self.grp_res_extra.visible = !isDiamond;
                    self.grp_res_extra.includeInLayout = !isDiamond;
                    if(!isDiamond){
                        uiHelper.setResGrp(self.grp_res_extra, gc.c_prop.spItemIdKey.diamond, extraDiamod);
                    }
                }
                uiHelper.setResGrp(self.grp_res, itemId, isDiamond? itemNum : mo.STR.format("%s: %s",
                    mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId)[gc.t_item_name],itemNum));
                //if(gd.userCtrl.getLvl() < needLvl){
                //    self.label_boss_sleep.text = mo.STR.format("角色%s级才可参与击杀",needLvl);
                //    self.label_boss_sleep.textColor = 0xD61702;
                //}else{
                //    self.label_boss_sleep.text = "";
                //}
                //self.label_numFuHuo.visible = false;
            }
        }


        _chg_ckb_lock(){
            var self = this;
            var vipInfos = mo.getJSONWithFileName(gc.cfg_c_vip);
            var vipInfo = vipInfos[gd.userCtrl.getVip()];
            for(var key in vipInfos){
                if(vipInfos[key][gc.c_vip_isLock]){
                    break;
                }
            }
            if(!vipInfo[gc.c_vip_isLock]){
                self.ckb_lock.selected = false;
                return mo.showMsg(gc.id_c_msgCode.vipLock, key);
            }
            self.setCanCallStatus();
        }

        _tap_btn_help(){
            var stats = gd.bossGuildCtrl.getBossStatus(this.moduleParam.bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            var helpId = 28;
            if(stats == BOSS_STATUS.fighting) {
                helpId = 27;
            }
            g_base.BaseShowTip.create().setData({id:helpId}).show();
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }

        _tap_btn_fight(){
            var self = this;
            var bossId = self.data.bossId;
            if(gd.bossGuildCtrl.checkAndShowLvlEnough(bossId)){
                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{bossId : bossId});
            }
        }

        _tap_btn_call(){
            var self = this;
            //同一个公会只能召唤一个boss
            if(gd.bossGuildCtrl.hasGuildFightingBoss()){
                return mo.showMsg(gc.id_c_msgCode.noMoreBoss);
            }

            var bossId = self.data.bossId;
            var status = gd.bossGuildCtrl.getBossStatus(bossId);
            if(status != gd.BossFightCtrl.BOSS_STATUS.cd) {
                if (gd.bossGuildCtrl.hasFightingBoss()) {
                    BossExtraCost.create().setData({bossId: self.data.bossId, locked: self.ckb_lock.selected}).show();
                }else{
                    gd.bossGuildCtrl.openBoss(self.data.bossId, self.ckb_lock.selected, function(){
                        self.close();
                        mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{bossId : self.data.bossId});
                    },self)
                }
            }else{
                mo.showMsg(gc.id_c_msgCode.reSummonBoss, gd.bossGuildCtrl.getRepeatCost(bossId, false), function(){
                    gd.bossGuildCtrl.openBoss(self.data.bossId, self.ckb_lock.selected, function(){
                        self.close();
                        mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{bossId : self.data.bossId});
                    },self)
                });
            }
        }

        _tap_btn_lock_call(){var self = this;
            //同一个公会只能召唤一个boss
            if(gd.bossGuildCtrl.hasGuildFightingBoss()){
                return mo.showMsg(gc.id_c_msgCode.noMoreBoss);
            }

            var bossId = self.data.bossId;
            var status = gd.bossGuildCtrl.getBossStatus(bossId);
            if(status != gd.BossFightCtrl.BOSS_STATUS.cd) {
                if (gd.bossGuildCtrl.hasFightingBoss()) {
                    BossExtraCost.create().setData({bossId: self.data.bossId, locked: self.ckb_lock.selected}).show();
                }else{
                    gd.bossGuildCtrl.openBoss(self.data.bossId, self.ckb_lock.selected, function(){
                        self.close();
                        mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{bossId : self.data.bossId});
                    },self);
                }
            }else{
                mo.showMsg(gc.id_c_msgCode.reSummonLock, gd.bossGuildCtrl.getRepeatCost(bossId, true), function(){
                    gd.bossGuildCtrl.openBoss(self.data.bossId, self.ckb_lock.selected, function(){
                        self.close();
                        mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{bossId : self.data.bossId});
                    },self)
                });
            }
        }

        _tap_btn_show_rewards(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossReward, self.moduleParam);
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
                self.label_left_time.text = mo.getTimeStr(leftMillisecond,true);
            }else{
                self._updateData(false);
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

        _tap_btn_status(){
            var self = this;
            var bossId = self.data.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);
            fec.getResultData(function(data){
                g_worldboss.GuildBossGrand.create().setData({result:data, isGuild:true}).show();
            }, self);
        }

    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildBossCall;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.WorldBoss, cb){
            var self = this;
            var bossId = moduleParam.bossId;
            var stats = gd.bossGuildCtrl.getBossStatus(bossId);
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
        });
    });

}