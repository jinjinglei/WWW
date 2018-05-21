/**
 * Created by lihex on 4/8/16.
 */
module g_fight {
    export class GuildCopyBossWinOrFail extends FightDlg {
        grp_win;
        grp_rankReward;
        label_damage;
        label_contribute;
        label_fail;
        btn_back;

        _initProp() {
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
        }

        dataChanged(){
            var self = this;
            var begTime = self.data.begTime;
            super.dataChanged();
            //[isWin,progress,items]
            var result = self.data.result;
            uiHelper.setItemsGrp(self.grp_rankReward, utils.itemObj2ObjArr(result[2]));
            self.invalidateSkinState();

            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        }

        getCurrentSkinState():string{
            var self = this;
            var isWin = true;
            if(self.data){
                isWin = self.data.result[0];
            }
            return isWin? "win" : "fail";
        }

        onExit(){
            super.onExit();
            var self = this;
            if(self.data.callback!=null){
                self.data.callback.call(self.data.target);
            }
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }
        timeTrigger;
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
                self.btn_back.label = mo.STR.format("确定(%s)", second.toString());
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_back.label = mo.STR.format("确定(%s)", Math.floor(leftMillisecond/1000).toString());
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self._tap_btn_back();
        }

        _tap_btn_back(){
            var self = this;
            self.close();
            var bossId = gd.guildCopyCtrl.curFightGuildBossId;
            var sectionId = gd.guildCopyCtrl.getSectionIdByBossId(bossId);
            mo.moduleMgr.runModule(g_consts.moduleId.home, {
                subModuleId: g_consts.HS_SUBMID_GUILD_COPY_BOSS,
                section: mo.getJSONWithFileNameAndID(gc.cfg_t_guildCopy, sectionId)});
        }

        _tap_btn_forge(){
            mo.moduleMgr.runModule(g_consts.moduleId.forge);
        }

        _tap_btn_shop(){
            mo.moduleMgr.runModule(g_consts.moduleId.shop);
        }

    }
}
