/**
 * Created by Administrator on 2015/12/28.
 */
module g_worldboss{
    export class WBossCell extends mo.gui.ItemRenderer{

        label_fightLeftTime:mo.gui.Label;
        label_challenge_time:egret.gui.Label;
        img_killed:egret.gui.UIAsset;
        label_settlement:egret.gui.Label;
        label_left_time:egret.gui.Label;

        label_name:egret.gui.Label;
        img_boss:egret.gui.UIAsset;
        img_selected:egret.gui.UIAsset;
        img_highlight:egret.gui.UIAsset;
        img_limit:egret.gui.UIAsset;
        img_money:egret.gui.UIAsset;
        img_bg:egret.gui.UIAsset;
        img_dark_bg:egret.gui.UIAsset;

        _curCountdownLabel;

        btn_go:egret.gui.Button;


        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
            var bossId = data[gc.c_bossWorld_id];

            self.label_fightLeftTime.visible = false;
            self.label_challenge_time.visible = false;
            self.img_killed.visible = false;
            self.btn_go.visible = false;
            self.label_settlement.visible = false;
            self.label_left_time.visible = false;
            self.img_dark_bg.visible = false;

            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;

            //是否正在挑战
            var challenging = stats == BOSS_STATUS.fighting;
            self.label_fightLeftTime.visible = challenging;
            self.img_dark_bg.visible = challenging;
            self.btn_go.visible = challenging;
            if(challenging){
                self._setMonsterInfo(bossId);
                var leftTime = gd.bossWorldCtrl.getReDisappearSeconds(bossId);
                self.label_fightLeftTime.text = "剩余时间: " + mo.getTimeStr(leftTime*1000);
                self._curCountdownLabel = self.label_fightLeftTime;
                if(leftTime) self.setCDTime(leftTime);
                return;
            }
            var inTheSettlement = stats == BOSS_STATUS.prize; //结算中
            if(inTheSettlement){
                self.label_settlement.visible = true;
                self.label_left_time.visible = true;
                var cdTime = gd.bossWorldCtrl.getRePrizeSeconds(bossId);
                self.label_left_time.text = "剩余时间: " + mo.getTimeStr(cdTime*1000);
                self._curCountdownLabel = self.label_left_time;
                if(cdTime) self.setCDTime(cdTime);
                self._setMonsterInfo(gd.bossWorldCtrl.getDeathBossId(bossId));
                return;
            }
            //设置挑战时间
            var starTime = gd.bossWorldCtrl.getOpenStartTime(bossId);
            var endTime = gd.bossWorldCtrl.getOpenEndTime(bossId);
            self.label_challenge_time.visible = true;
            self.label_challenge_time.text = mo.STR.format("挑战时间: %s-%s",starTime.toFormat("HH24:MI"), endTime.toFormat("HH24:MI"));
            //是否已击杀
            var killed = stats == BOSS_STATUS.cd;
            self.img_killed.visible = killed;
            if(killed){
                self._setMonsterInfo(gd.bossWorldCtrl.getDeathBossId(bossId));
                return;
            }
            //可以召唤
            self._setMonsterInfo(bossId);
        }

        _setMonsterInfo(bossId){
            var self = this;
            var data = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
            //名字和图像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text =  "("+monsterInfo[gc.t_monster_level]+"级) " + monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath(data[gc.c_bossWorld_displayId]);
        }

        onExit(){
            super.onExit();
            var self = this;
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }

        _tap_btn_go(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, {bossId: self.data[gc.c_bossWorld_id]});
        }

        //剩余挑战时间
        timeTrigger;
        resetCdTimeView(leftMillisecond){
            var self = this;
            if(leftMillisecond>0){
                self._curCountdownLabel.text = "剩余时间: " + mo.getTimeStr(leftMillisecond);
            }else{
                //刷新列表
                gd.bossWorldCtrl.getInfo(function(){
                    (<any>self).delegate.refreshList("list_call");
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
