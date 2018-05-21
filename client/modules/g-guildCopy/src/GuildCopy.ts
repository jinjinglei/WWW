/**
 * Created by lihex on 4/5/16.
 */
module g_guildCopy{

    export class GuildCopy extends mo.gui.Dlg{
        moduleParam:IModuleParam.GuildCopySection;

        list_copys:egret.gui.List;
        _Item_list_copys;

        grp_items;
        btn_enter;
        btn_reset;
        label_passed;
        label_openLvl;
        img_name;
        label_resetTime;
        label_resetTips;//会长和副会长可重置副本\n每次重置7天后可再次检查
        grp_reset;
        label_progress;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_copys = GuildCopyItem;

        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var section = mo.getJSONWithFileNameAndID(gc.cfg_t_guildCopy, 1);
            var seleIdx = 0;
            if(self.moduleParam && self.moduleParam.section){
                section = self.moduleParam.section;
                seleIdx = gd.guildCopyCtrl.getGuildSection().indexOf(section);
            }
            (<any>self.list_copys).scroller.verticalScrollPolicy = 'off';
            process.nextTick(function () {
                self.list_copys.selectedIndex = seleIdx;
                self.setCurSection(section);
            });
            self.setCDTime(gd.guildCopyCtrl.getResetCd());
        }

        _refreshUI(){
            var self = this;
            self.setCDTime(gd.guildCopyCtrl.getResetCd());
            var section = self.list_copys.selectedItem;
            self.setCurSection(section);
            self.refreshList("list_copys");
        }

        _data_list_copys():any[] {
            var self = this, filter, sorter;
            return gd.guildCopyCtrl.getGuildSection();
        }

        _tap_btn_next(){
            var self = this;
        }

        _tap_btn_pre(){
            var self = this;
        }

        _tap_btn_help(){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cdTime = c_game[gc.id_c_game.guildCopyCfg][0]/60;
            var resetDay = c_game[gc.id_c_game.guildCopyCfg][1];
            g_base.BaseShowTip.create().setData({id: 61, param1:cdTime, param2:resetDay}).show();
        }

        _tap_btn_enter(){
            var self = this;
            var section = self.list_copys.selectedItem;
            mo.moduleMgr.runModule(g_consts.moduleId.guildCopyBoss, {section: section, fromMain: true});
        }

        _tap_btn_reset(){
            var self = this;
            gd.guildCopyCtrl.guildCopyReset(self._refreshUI, self);
        }

        _click_list_copys(event:egret.gui.ListEvent) {
            var self = this;
            var section = event.item;
            self.setCurSection(section);
        }

        setCurSection(section){
            var self = this;
            var sectionId = section[gc.t_guildCopy_id];
            self.img_name.source = section[gc.t_guildCopy_sub_title_icon];
            uiHelper.setItemsGrp(self.grp_items, utils.kvArrItems2ObjArr(section[gc.t_guildCopy_award]));
            var isPassed = false, openLvl = section[gc.t_guildCopy_openLvl], isOpen = gd.guildCtrl.getLvl() >= openLvl;
            self.btn_enter.visible = isOpen && !isPassed;
            self.label_passed.visible = isOpen && isPassed;
            self.label_openLvl.visible =  !isOpen;
            self.label_openLvl.text = openLvl;

            //会长和副会长可以重置副本
            var title = gd.guildPersonalCtrl.getPosition();
            var hasCDTime = gd.guildCopyCtrl.getResetCd() > 0;
            var canReset = (title == gc.c_prop.guildPostKey.chairman || title == gc.c_prop.guildPostKey.viceChairman);
            self.label_resetTips.visible = isOpen && !hasCDTime && !canReset;
            self.grp_reset.visible = isOpen && !hasCDTime && canReset;

            self.label_progress.visible = isOpen;
            if(isOpen){
                var completeNum = gd.guildCopyCtrl.getCompletedNum(sectionId);
                var copyLen = gd.guildCopyCtrl.getGuildBossListLength(sectionId);
                self.label_progress.text = mo.STR.format("%s/%s",completeNum,copyLen);
            }
        }

        //Time
        timeTrigger;
        resetCdTimeView(leftMillisecond){
            var self = this;
            if(leftMillisecond>0){
                self.label_resetTime.text = mo.getTimeStr(leftMillisecond, true);
            }else{
                self.label_resetTime.visible = false;
                self.grp_reset.visible = true;
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
                self.grp_reset.visible = false;
                self.label_resetTime.visible = true;
                self.label_resetTime.text = mo.getTimeStr(second*1000, true);
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

        onExit(){
            super.onExit();
            var self = this;
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }
    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildCopy;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.GuildCopySection, cb){
            gd.copyCtrl.getInfo(function () {
                cb();
            }, this);
        });

    });
}