/**
 * Created by Administrator on 2015/12/28.
 */
module g_worldboss{
    export class GuildBossFightingCell extends mo.gui.ItemRenderer{

        label_left_time:egret.gui.Label;
        label_killed:egret.gui.Label;
        label_call:egret.gui.Label;
        label_guild:egret.gui.Label;
        label_name:egret.gui.Label;
        img_boss:egret.gui.UIAsset;
        img_selected:egret.gui.UIAsset;
        img_highlight:egret.gui.UIAsset;
        img_limit:egret.gui.UIAsset;
        img_money:egret.gui.UIAsset;
        img_bg:egret.gui.UIAsset;

        grp_lock:egret.gui.Group;
        label_guildName:mo.gui.Label;
        label_fightLeftTime:mo.gui.Label;
        label_cantJoin:mo.gui.Label;
        label_fighting:mo.gui.Label;
        img_lock:egret.gui.UIAsset;
        btn_join:egret.gui.Button;

        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            //self.img_limit.visible = false;
            //self.img_money.visible = false;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;

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
            var bossId = data[gc.c_bossParameter_id];
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text =  "("+monsterInfo[gc.t_monster_level]+"级) "+monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath( data[gc.c_bossParameter_displayId]);

            //状态切换
            var status = data.status, KEY_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            var otherData = gd.bossGuildCtrl.getOtherData(bossId);
            var isLocked = otherData[2];
            self.grp_lock.visible = isLocked;
            self.btn_join.visible = true;
            self.label_cantJoin.visible = isLocked;
            self.label_fighting.visible = false;
            if(isLocked){
                var guildId = gd.guildPersonalCtrl.getGuildId() || 0;
                var isSelf = guildId == otherData[0];
                self.img_lock.source = isSelf? "ico_huitubiao" : "ico_xiaoshuo";
                var guildName = otherData[1];
                self.label_guildName.text = isSelf? "本行会已上锁" : guildName;
                self.btn_join.visible = isSelf; //非本行会不能打
                self.label_cantJoin.visible = !isSelf; //非本行会不能打
            }

            //剩余挑战时间
            var leftTime = gd.bossGuildCtrl.getReDisappearSeconds(bossId);
            self.label_fightLeftTime.text = mo.getTimeStr(leftTime*1000);
            self.setCDTime(leftTime);

            //正在挑战
            var isFightingIt = gd.bossFightCtrl.getCurFightBossId() == bossId;
            self.label_fighting.visible = isFightingIt;
        }

        _tap_btn_join(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossCall, {bossId: self.data[gc.c_bossParameter_id]});
        }

        onExit(){
            super.onExit();
            var self = this;
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }

        //剩余挑战时间
        timeTrigger;
        resetCdTimeView(leftMillisecond){
            var self = this;
            if(leftMillisecond>0){
                self.label_fightLeftTime.text = mo.getTimeStr(leftMillisecond);
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
    }
}
