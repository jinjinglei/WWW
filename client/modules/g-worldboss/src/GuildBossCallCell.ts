/**
 * Created by Administrator on 2015/12/28.
 */
module g_worldboss{
    export class GuildBossCallCell extends mo.gui.ItemRenderer{

        label_left_time:egret.gui.Label;//召唤冷却时间
        label_killed:egret.gui.Label;
        label_call:egret.gui.Label;
        label_sleep:egret.gui.Label;
        label_settlement:egret.gui.Label;
        label_guild:egret.gui.Label;
        label_name:egret.gui.Label;
        img_boss:egret.gui.UIAsset;
        img_selected:egret.gui.UIAsset;
        img_highlight:egret.gui.UIAsset;
        img_limit:egret.gui.UIAsset;
        img_money:egret.gui.UIAsset;
        img_bg:egret.gui.UIAsset;
        label_reward_hint;

        countdwonTitle:string;


        _initProp(){
            var self = this;
            super._initProp();
            self.countdwonTitle = ""
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
            var bossId = data[gc.c_bossParameter_id];
            self.label_guild.visible = false;
            self.label_call.visible = false;
            self.label_killed.visible = false;
            self.label_left_time.visible = false;
            self.label_settlement.visible = false;
            self.img_selected.visible = false;
            self.label_sleep.visible = false;

            //限时
            var isLimit = data[gc.c_bossParameter_isLimit] == 1;//isLimitTime
            self.img_limit.visible = isLimit;
            //金钱怪
            var descId = data[gc.c_bossParameter_awardDesc];
            var desc = gc.c_prop.wbossRewardDes[descId];
            self.img_money.visible = (descId == gc.c_prop.wbossRewardDesKey.diamond);
            //节日显示
            var holidayImgSrc = {
                0 : ["panel_ditus"],
                1 : ["panel_gboss_huodong_1"]
            };
            var showOnHoliday = data[gc.c_bossParameter_showOnHoliday] ||0;
            var srcCfg = holidayImgSrc[showOnHoliday];
            self.img_bg.source = srcCfg[0];

            //名字和图像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text =  "("+monsterInfo[gc.t_monster_level]+"级) "+monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath( data[gc.c_bossParameter_displayId]);
            desc = descId == gc.c_prop.wbossRewardDesKey.equip ?
                mo.STR.format(desc, monsterInfo[gc.t_monster_level])
                : desc;
            self.label_reward_hint.text = mo.STR.format("抢夺：%s", desc);

            //行会等级判断
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var openGuildLvl = data[gc.c_bossParameter_openLvl];
            var isGuildLvlEnough = (gd.guildCtrl.getData() && gd.guildCtrl.getLvl() >= openGuildLvl);
            if(!isGuildLvlEnough){ //行会等级不足
                self.label_guild.visible = true;
                self.label_guild.text = openGuildLvl;
                return;
            }
            var status = gd.bossGuildCtrl.getBossStatus(bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            var onCountdown = status == BOSS_STATUS.cd; //已被击杀,冷却中
            if(onCountdown){
                self.label_killed.visible = true;
                self.label_left_time.visible = true;
                var cdTime = gd.bossGuildCtrl.getOpenCd(bossId);
                self.countdwonTitle = "召唤冷却: ";
                self.label_left_time.text = self.countdwonTitle + mo.getTimeStr(cdTime*1000, true);
                if(cdTime) self.setCDTime(cdTime);
                return;
            }
            var inTheSettlement = status == BOSS_STATUS.prize; //结算中
            if(inTheSettlement){
                self.countdwonTitle = "剩余时间: ";
                self.label_settlement.visible = true;
                self.label_left_time.visible = true;
                var cdTime = gd.bossGuildCtrl.getRePrizeSeconds(bossId);
                self.label_left_time.text = self.countdwonTitle + mo.getTimeStr(cdTime*1000, true);
                if(cdTime) self.setCDTime(cdTime);
                return;
            }
            var inSleep = status == BOSS_STATUS.sleep; //休息中
            if(inSleep){
                self.label_sleep.visible = true;
                return;
            }
            self.label_call.visible = true;//可召唤
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
                self.label_left_time.text = self.countdwonTitle + mo.getTimeStr(leftMillisecond, true);
            }else{
                //刷新列表
                gd.bossGuildCtrl.getInfo(function(){
                    if(self.delegate._refreshTabComp){
                        self.delegate._refreshTabComp();
                    }else if(self.delegate._refreshCallGrp){
                        self.delegate._refreshCallGrp();
                    }
                }, self);
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
    }
}
