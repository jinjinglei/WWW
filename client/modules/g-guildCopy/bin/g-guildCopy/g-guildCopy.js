/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_guildCopy;
(function (g_guildCopy) {
    var GuildCopyItem = (function (_super) {
        __extends(GuildCopyItem, _super);
        function GuildCopyItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildCopyItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var sectionId = data[gc.t_guildCopy_id];
            self.img_title.source = data[gc.t_guildCopy_title_icon];
            self.img_bg.source = data[gc.t_guildCopy_bg];
            var isPassed = false, openLvl = data[gc.t_guildCopy_openLvl], isOpen = gd.guildCtrl.getLvl() >= openLvl;
            self.label_progress.visible = isOpen;
            self.img_pass.visible = isOpen;
            self.label_openLvl.visible = !isOpen;
            self.label_openLvl.text = openLvl;
            if (isOpen) {
                var completeNum = gd.guildCopyCtrl.getCompletedNum(sectionId);
                var copyLen = gd.guildCopyCtrl.getGuildBossListLength(sectionId);
                isPassed = completeNum == copyLen;
                self.img_pass.visible = isPassed;
                self.label_progress.text = mo.STR.format("%s/%s", completeNum, copyLen);
            }
        };
        return GuildCopyItem;
    })(mo.gui.ItemRenderer);
    g_guildCopy.GuildCopyItem = GuildCopyItem;
    egret.registerClass(GuildCopyItem,"g_guildCopy.GuildCopyItem");
})(g_guildCopy || (g_guildCopy = {}));

/**
 * Created by lihex on 4/5/16.
 */
var g_guildCopy;
(function (g_guildCopy) {
    var GuildCopy = (function (_super) {
        __extends(GuildCopy, _super);
        function GuildCopy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildCopy,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_copys = g_guildCopy.GuildCopyItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var section = mo.getJSONWithFileNameAndID(gc.cfg_t_guildCopy, 1);
            var seleIdx = 0;
            if (self.moduleParam && self.moduleParam.section) {
                section = self.moduleParam.section;
                seleIdx = gd.guildCopyCtrl.getGuildSection().indexOf(section);
            }
            self.list_copys.scroller.verticalScrollPolicy = 'off';
            process.nextTick(function () {
                self.list_copys.selectedIndex = seleIdx;
                self.setCurSection(section);
            });
            self.setCDTime(gd.guildCopyCtrl.getResetCd());
        };
        p._refreshUI = function () {
            var self = this;
            self.setCDTime(gd.guildCopyCtrl.getResetCd());
            var section = self.list_copys.selectedItem;
            self.setCurSection(section);
            self.refreshList("list_copys");
        };
        p._data_list_copys = function () {
            var self = this, filter, sorter;
            return gd.guildCopyCtrl.getGuildSection();
        };
        p._tap_btn_next = function () {
            var self = this;
        };
        p._tap_btn_pre = function () {
            var self = this;
        };
        p._tap_btn_help = function () {
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cdTime = c_game[gc.id_c_game.guildCopyCfg][0] / 60;
            var resetDay = c_game[gc.id_c_game.guildCopyCfg][1];
            g_base.BaseShowTip.create().setData({ id: 61, param1: cdTime, param2: resetDay }).show();
        };
        p._tap_btn_enter = function () {
            var self = this;
            var section = self.list_copys.selectedItem;
            mo.moduleMgr.runModule(g_consts.moduleId.guildCopyBoss, { section: section, fromMain: true });
        };
        p._tap_btn_reset = function () {
            var self = this;
            gd.guildCopyCtrl.guildCopyReset(self._refreshUI, self);
        };
        p._click_list_copys = function (event) {
            var self = this;
            var section = event.item;
            self.setCurSection(section);
        };
        p.setCurSection = function (section) {
            var self = this;
            var sectionId = section[gc.t_guildCopy_id];
            self.img_name.source = section[gc.t_guildCopy_sub_title_icon];
            uiHelper.setItemsGrp(self.grp_items, utils.kvArrItems2ObjArr(section[gc.t_guildCopy_award]));
            var isPassed = false, openLvl = section[gc.t_guildCopy_openLvl], isOpen = gd.guildCtrl.getLvl() >= openLvl;
            self.btn_enter.visible = isOpen && !isPassed;
            self.label_passed.visible = isOpen && isPassed;
            self.label_openLvl.visible = !isOpen;
            self.label_openLvl.text = openLvl;
            //会长和副会长可以重置副本
            var title = gd.guildPersonalCtrl.getPosition();
            var hasCDTime = gd.guildCopyCtrl.getResetCd() > 0;
            var canReset = (title == gc.c_prop.guildPostKey.chairman || title == gc.c_prop.guildPostKey.viceChairman);
            self.label_resetTips.visible = isOpen && !hasCDTime && !canReset;
            self.grp_reset.visible = isOpen && !hasCDTime && canReset;
            self.label_progress.visible = isOpen;
            if (isOpen) {
                var completeNum = gd.guildCopyCtrl.getCompletedNum(sectionId);
                var copyLen = gd.guildCopyCtrl.getGuildBossListLength(sectionId);
                self.label_progress.text = mo.STR.format("%s/%s", completeNum, copyLen);
            }
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.label_resetTime.text = mo.getTimeStr(leftMillisecond, true);
            }
            else {
                self.label_resetTime.visible = false;
                self.grp_reset.visible = true;
            }
        };
        p.setCDTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.timeTrigger) {
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
                self.grp_reset.visible = false;
                self.label_resetTime.visible = true;
                self.label_resetTime.text = mo.getTimeStr(second * 1000, true);
            }
            else {
                self.resetCdTimeView(0);
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCdTimeView(leftMillisecond);
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self.resetCdTimeView(0);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        return GuildCopy;
    })(mo.gui.Dlg);
    g_guildCopy.GuildCopy = GuildCopy;
    egret.registerClass(GuildCopy,"g_guildCopy.GuildCopy");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildCopy;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.copyCtrl.getInfo(function () {
                cb();
            }, this);
        });
    });
})(g_guildCopy || (g_guildCopy = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_guildCopy;
(function (g_guildCopy) {
    var GuildCopyBossItem = (function (_super) {
        __extends(GuildCopyBossItem, _super);
        function GuildCopyBossItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildCopyBossItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var bossId = self.data;
            self.img_boss.source = resHelper.getMonsterHeadIconPath(bossId);
            self.label_name.text = (self.itemIndex + 1) + "." + mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId)[gc.t_monster_name];
        };
        return GuildCopyBossItem;
    })(mo.gui.ItemRenderer);
    g_guildCopy.GuildCopyBossItem = GuildCopyBossItem;
    egret.registerClass(GuildCopyBossItem,"g_guildCopy.GuildCopyBossItem");
})(g_guildCopy || (g_guildCopy = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_guildCopy;
(function (g_guildCopy) {
    /**
     *
     * @author
     *
     */
    var GuildCopyBoss = (function (_super) {
        __extends(GuildCopyBoss, _super);
        function GuildCopyBoss() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildCopyBoss,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_copys = g_guildCopy.GuildCopyBossItem;
            self.bossList = [];
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.GuildCopyCtrl, gd.GuildCopyCtrl.ON_GUILD_COPY_CD_CLEAR, function () {
                self.setBossInfo(self.bossId);
            });
            self.label_maxCD.text = gd.guildCopyCtrl.getGuildCopyCdState().threshold / 60;
            self.bossAP = new g_base.ActionPlayer();
            self.bossAP.scaleX = self.bossAP.scaleY = 1.6;
            self.ico_monster.source = self.bossAP;
            if (self.moduleParam) {
                self.setData(self.moduleParam);
                if (!self.moduleParam['fromMain']) {
                    self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
                }
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var section = self.moduleParam.section;
            var sectionId = section[gc.t_guildCopy_id];
            self.img_title.source = section[gc.t_guildCopy_title_icon];
            self.bossList = gd.guildCopyCtrl.getGuildBossList(sectionId);
            var curBossId = gd.guildCopyCtrl.getCurBossId(sectionId);
            self.bossId = curBossId;
            self.list_copys.selectedItem = self.bossId;
            self.setBossInfo(curBossId);
            //副本进度
            var completeNum = gd.guildCopyCtrl.getCompletedNum(sectionId);
            var copyLen = gd.guildCopyCtrl.getGuildBossListLength(sectionId);
            self.label_copyProgress.text = mo.STR.format("%s/%s", completeNum, copyLen);
        };
        p._tap_btn_enter = function () {
            var self = this;
            gd.guildCopyCtrl.guildStart(self.moduleParam.section[gc.t_guildCopy_id], self.bossId, function () {
            }, self);
        };
        p._data_list_copys = function () {
            var self = this;
            // self.bossList = gd.guildCopyCtrl.getGuildBossList(self.moduleParam.section[gc.t_guildCopy_id]);
            return self.bossList;
        };
        p._click_list_copys = function (event) {
            var self = this;
            var bossId = event.item;
            self.setBossInfo(bossId);
        };
        p.setBossInfo = function (bossId) {
            var self = this;
            self.bossId = bossId;
            var guildCopyCtrl = gd.guildCopyCtrl;
            self.label_name.text = (self.bossList.indexOf(self.bossId) + 1) + "." + mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId)[gc.t_monster_name];
            var bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_guildCopyBoss, bossId);
            var killAward = bossInfo[gc.t_guildCopyBoss_lastShotAward];
            var waveAward = bossInfo[gc.t_guildCopyBoss_award];
            uiHelper.setItemsGrp(self.grp_passAward, utils.kvArrItems2ObjArr(killAward));
            uiHelper.setItemsGrp(self.grp_waveAward, utils.kvArrItems2ObjArr(waveAward));
            var leftTimes = guildCopyCtrl.getMaxKillTimes() - guildCopyCtrl.getGuildProgress(bossId);
            self.label_progress.text = mo.STR.format("%s/%s", leftTimes, guildCopyCtrl.getMaxKillTimes());
            var sectionId = self.moduleParam.section[gc.t_guildCopy_id];
            var curBossId = guildCopyCtrl.getCurBossId(sectionId);
            var isPassed = guildCopyCtrl.isBossKilled(sectionId, bossId), isOpen = (curBossId >= bossId);
            self.label_passPre.visible = !isOpen;
            self.grp_fightable.visible = isOpen;
            if (isOpen) {
                self.grp_fightable.visible = !isPassed;
                self.label_getTips.visible = isPassed;
                self.label_cd.visible = false;
                var cdTime = guildCopyCtrl.getGuildCopyCd();
                if (cdTime) {
                    self.label_cd.visible = true;
                    self.label_cd.text = self._getColorCDStr(cdTime * 1000);
                    self.setCDTime(cdTime);
                }
            }
            else {
                var preBossId = parseInt(bossId) - 1;
                self.label_passPre.text = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, preBossId)[gc.t_monster_name];
            }
            //站立像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            var idStr = monsterInfo[gc.t_monster_displayID];
            self.bossAP.loadRes("m" + idStr + "_4s", true);
            self.bossAP.playAction();
            //设置滚动条位置
            process.nextTick(function () {
                process.nextTick(function () {
                    var idx = self.list_copys.dataProvider.getItemIndex(self.bossId);
                    var pos = ((idx > 0) ? (idx - 1) : idx) * (83 + 47);
                    self.list_copys.scroller.throwHorizontally(pos);
                });
            });
        };
        p._tap_btn_left = function () {
            var self = this;
            var pos = self.list_copys.dataGroup.horizontalScrollPosition;
            pos -= 83 + 47;
            self.list_copys.scroller.throwHorizontally(pos);
        };
        p._tap_btn_right = function () {
            var self = this;
            var pos = self.list_copys.dataGroup.horizontalScrollPosition;
            pos += 83 + 47;
            self.list_copys.scroller.throwHorizontally(pos);
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 62 }).show();
        };
        p._getColorCDStr = function (millisecond) {
            return mo.STR.format("[ubb color=%s]%s[/ubb]", gd.guildCopyCtrl.getGuildCopyCdState().needBuy ? "red" : "green", mo.getTimeStr(millisecond, true));
        };
        p.click_btn_close = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildCopy, { section: self.moduleParam.section });
            self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.label_cd.text = self._getColorCDStr(leftMillisecond);
            }
            else {
                //刷新信息
                self.setBossInfo(self.bossId);
            }
        };
        p.setCDTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.timeTrigger) {
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
                self.label_cd.visible = true;
                self.label_cd.text = self._getColorCDStr(second * 1000);
            }
            else {
                self.resetCdTimeView(0);
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCdTimeView(leftMillisecond);
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self.resetCdTimeView(0);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        return GuildCopyBoss;
    })(mo.gui.Dlg);
    g_guildCopy.GuildCopyBoss = GuildCopyBoss;
    egret.registerClass(GuildCopyBoss,"g_guildCopy.GuildCopyBoss");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildCopyBoss;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            if (moduleParam.fromWhere == "FightScene") {
                gd.copyCtrl.getInfo(function (data) {
                    cb();
                }, this);
            }
            else {
                cb();
            }
        });
    });
})(g_guildCopy || (g_guildCopy = {}));

