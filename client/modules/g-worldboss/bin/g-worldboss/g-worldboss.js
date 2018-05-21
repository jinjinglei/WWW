/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_worldboss;
(function (g_worldboss) {
    /**
     *
     * @author
     *
     */
    var BossWar = (function (_super) {
        __extends(BossWar, _super);
        function BossWar() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BossWar,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self.onWorldBossOpenChanged);
            self.onWorldBossOpenChanged();
        };
        p.onWorldBossOpenChanged = function () {
            var self = this;
            self.label_wboss_fighting.visible = gd.bossFightCtrl.getOpenIdsByType(gc.c_prop.worldBossTypeKey.world).length > 0;
            self.label_gboss_fighting.visible = gd.bossFightCtrl.getOpenIdsByType(gc.c_prop.worldBossTypeKey.guild).length > 0;
            self.label_lmtboss_fighting.visible = gd.bossFightCtrl.getOpenIdsByType(gc.c_prop.worldBossTypeKey.guild, 1).length > 0;
        };
        p._tap_img_lmtBoss = function () {
            //进入公会boss列表
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossLevelList, { isLmt: 1 });
        };
        p._tap_img_guildBoss = function () {
            //进入公会boss列表
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossLevelList);
        };
        p._tap_img_worldBoss = function () {
            //进入boss列表
            mo.moduleMgr.runModule(g_consts.moduleId.wBossList);
        };
        p._tap_btn_resBack = function () {
            g_worldboss.BossResBack.create().show();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 53 }).show();
        };
        return BossWar;
    })(mo.gui.Dlg);
    g_worldboss.BossWar = BossWar;
    egret.registerClass(BossWar,"g_worldboss.BossWar");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = BossWar;
        moduleCfgItem.sysId = gc.id_c_open.worldboss;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            var self = this;
            async.map([gd.bossGuildCtrl, gd.bossWorldCtrl], function (ctrl, index, callback) {
                ctrl.getInfo(callback, self);
            }, function () {
                cb();
            }, self);
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_worldboss;
(function (g_worldboss) {
    /**
     *
     * @author
     *
     */
    var BossExtraCost = (function (_super) {
        __extends(BossExtraCost, _super);
        function BossExtraCost() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BossExtraCost,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.outsideClosable = true;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var locked = self.data.locked;
            var bossId = self.data.bossId;
            self.label_call_type.text = locked ? "锁定召唤" : "召唤";
            self.btn_lock_call.visible = locked;
            self.btn_call.visible = !locked;
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_boss = c_bossParameter[bossId];
            //设置话费描述,非元宝的要显示名字
            var itemId = c_boss[gc.c_bossParameter_summonCost][0];
            var itemNum = c_boss[gc.c_bossParameter_summonCost][1];
            var isDiamond = (itemId == gc.c_prop.spItemIdKey.diamond);
            //self.grp_res1.includeInLayout = !isDiamond;
            self.grp_res1.visible = !isDiamond;
            var extraCost = locked ? gd.bossGuildCtrl.getLockCost() : 0;
            if (isDiamond) {
                itemNum += extraCost;
            }
            else {
                self.grp_res1.visible = extraCost != 0;
                uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.diamond, extraCost);
            }
            uiHelper.setResGrp(self.grp_res0, itemId, itemNum);
            uiHelper.setResGrp(self.grp_extra_res, gc.c_prop.spItemIdKey.diamond, gd.bossGuildCtrl.getOpenChannelCost());
        };
        p._tap_btn_call = function () {
            var self = this;
            gd.bossGuildCtrl.openBoss(self.data.bossId, false, function () {
                self.close();
                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: self.data.bossId });
            }, self);
        };
        p._tap_btn_lock_call = function () {
            var self = this;
            gd.bossGuildCtrl.openBoss(self.data.bossId, true, function () {
                self.close();
                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: self.data.bossId });
            }, self);
        };
        return BossExtraCost;
    })(mo.gui.Dlg);
    g_worldboss.BossExtraCost = BossExtraCost;
    egret.registerClass(BossExtraCost,"g_worldboss.BossExtraCost");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by lihex on 3/7/16.
 */
var g_worldboss;
(function (g_worldboss) {
    var WBossRewardItem = (function (_super) {
        __extends(WBossRewardItem, _super);
        function WBossRewardItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WBossRewardItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            self.label_index.text = data[0];
            uiHelper.setItemsGrp(self.grp_items, utils.kvArrItems2ObjArr(data[1]));
        };
        return WBossRewardItem;
    })(mo.gui.ItemRenderer);
    g_worldboss.WBossRewardItem = WBossRewardItem;
    egret.registerClass(WBossRewardItem,"g_worldboss.WBossRewardItem");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/22.
 */
var g_worldboss;
(function (g_worldboss) {
    var WBossReward = (function (_super) {
        __extends(WBossReward, _super);
        function WBossReward() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WBossReward,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_worldboss.WBossRewardItem;
            self._Item_list_failItems = g_worldboss.WBossRewardItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var bossId = self.moduleParam.bossId;
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);
            var c_data = c_bossWorld[bossId];
            var c_last = c_data[gc.c_bossWorld_lastShotAward];
            c_last.push(c_data[gc.c_bossWorld_treasureAward]);
            uiHelper.setItemsGrp(self.grp_lastAttkItems, utils.kvArrItems2ObjArr(c_last));
            self.grp_win.visible = true;
            self.grp_fail.visible = false;
        };
        p._tap_tab_btn = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            self.grp_win.visible = selectedIndex == 0;
            self.grp_fail.visible = selectedIndex != 0;
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 55 }).show();
        };
        p._data_list_items = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            //是否已击杀
            var killed = stats == gd.BossFightCtrl.BOSS_STATUS.cd;
            if (killed) {
                bossId = gd.bossWorldCtrl.getDeathBossId(bossId);
            }
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);
            var c_data = c_bossWorld[bossId];
            return [
                ["1", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward1])],
                ["2", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward2])],
                ["3", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward3])],
                ["4-10", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward4])],
                ["11-50", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward5])],
                ["51-200", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward6])],
                ["201-1000", gd.userUtils.getLoots(c_data[gc.c_bossWorld_rankAward7])]
            ];
        };
        p._data_list_failItems = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            //是否已击杀
            var killed = stats == gd.BossFightCtrl.BOSS_STATUS.cd;
            if (killed) {
                bossId = gd.bossWorldCtrl.getDeathBossId(bossId);
            }
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);
            var c_data = c_bossWorld[bossId];
            return [
                ["1", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward1])],
                ["2", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward2])],
                ["3", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward3])],
                ["4-10", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward4])],
                ["11-50", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward5])],
                ["51-200", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward6])],
                ["201-1000", gd.userUtils.getLoots(c_data[gc.c_bossWorld_failAward7])]
            ];
        };
        return WBossReward;
    })(mo.gui.Dlg);
    g_worldboss.WBossReward = WBossReward;
    egret.registerClass(WBossReward,"g_worldboss.WBossReward");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = WBossReward;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/28.
 */
var g_worldboss;
(function (g_worldboss) {
    var WBossCell = (function (_super) {
        __extends(WBossCell, _super);
        function WBossCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WBossCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
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
            if (challenging) {
                self._setMonsterInfo(bossId);
                var leftTime = gd.bossWorldCtrl.getReDisappearSeconds(bossId);
                self.label_fightLeftTime.text = "剩余时间: " + mo.getTimeStr(leftTime * 1000);
                self._curCountdownLabel = self.label_fightLeftTime;
                if (leftTime)
                    self.setCDTime(leftTime);
                return;
            }
            var inTheSettlement = stats == BOSS_STATUS.prize; //结算中
            if (inTheSettlement) {
                self.label_settlement.visible = true;
                self.label_left_time.visible = true;
                var cdTime = gd.bossWorldCtrl.getRePrizeSeconds(bossId);
                self.label_left_time.text = "剩余时间: " + mo.getTimeStr(cdTime * 1000);
                self._curCountdownLabel = self.label_left_time;
                if (cdTime)
                    self.setCDTime(cdTime);
                self._setMonsterInfo(gd.bossWorldCtrl.getDeathBossId(bossId));
                return;
            }
            //设置挑战时间
            var starTime = gd.bossWorldCtrl.getOpenStartTime(bossId);
            var endTime = gd.bossWorldCtrl.getOpenEndTime(bossId);
            self.label_challenge_time.visible = true;
            self.label_challenge_time.text = mo.STR.format("挑战时间: %s-%s", starTime.toFormat("HH24:MI"), endTime.toFormat("HH24:MI"));
            //是否已击杀
            var killed = stats == BOSS_STATUS.cd;
            self.img_killed.visible = killed;
            if (killed) {
                self._setMonsterInfo(gd.bossWorldCtrl.getDeathBossId(bossId));
                return;
            }
            //可以召唤
            self._setMonsterInfo(bossId);
        };
        p._setMonsterInfo = function (bossId) {
            var self = this;
            var data = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
            //名字和图像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text = "(" + monsterInfo[gc.t_monster_level] + "级) " + monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath(data[gc.c_bossWorld_displayId]);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p._tap_btn_go = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: self.data[gc.c_bossWorld_id] });
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self._curCountdownLabel.text = "剩余时间: " + mo.getTimeStr(leftMillisecond);
            }
            else {
                //刷新列表
                gd.bossWorldCtrl.getInfo(function () {
                    self.delegate.refreshList("list_call");
                }, self);
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
        return WBossCell;
    })(mo.gui.ItemRenderer);
    g_worldboss.WBossCell = WBossCell;
    egret.registerClass(WBossCell,"g_worldboss.WBossCell");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2016/1/9.
 */
var g_worldboss;
(function (g_worldboss) {
    var WBossList = (function (_super) {
        __extends(WBossList, _super);
        function WBossList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WBossList,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_call = g_worldboss.WBossCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self._refreshBossState);
        };
        p._refreshBossState = function () {
            var self = this;
            gd.bossWorldCtrl.getInfo(function () {
                self.refreshList("list_call");
            }, self);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 54 }).show();
        };
        p._data_list_call = function () {
            var self = this, filter, sorter;
            return gd.bossWorldCtrl.getBossList();
        };
        p._click_list_call = function (event) {
            var self = this;
            var boss = event.item;
            var bossid = boss[gc.c_bossWorld_id];
            if ((gd.bossWorldCtrl.getBossStatus(bossid) == gd.BossFightCtrl.BOSS_STATUS.prize)) {
                return;
            }
            if ((gd.bossWorldCtrl.getBossStatus(bossid) == gd.BossFightCtrl.BOSS_STATUS.fighting)) {
                return;
            }
            mo.moduleMgr.runModule(g_consts.moduleId.wBossCall, { bossId: bossid });
        };
        return WBossList;
    })(mo.gui.Dlg);
    g_worldboss.WBossList = WBossList;
    egret.registerClass(WBossList,"g_worldboss.WBossList");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = WBossList;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.bossWorldCtrl.getInfo(function () {
                cb();
            }, this);
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by lihex on 3/7/16.
 */
var g_worldboss;
(function (g_worldboss) {
    var BossResBackItem = (function (_super) {
        __extends(BossResBackItem, _super);
        function BossResBackItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BossResBackItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var bossId = self.data;
            //名字和图像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text = "(" + monsterInfo[gc.t_monster_level] + "级) " + monsterInfo[gc.t_monster_name];
            var opt = gd.bossCtrl.getBackResOpt(bossId, 500);
            uiHelper.setItemsGrp(self.grp_items, utils.kvArrItems2ObjArr(opt.items));
            self.ico_hasGet.visible = false;
            self.btn_get.visible = false;
            var hasGet = false; //已领取
            self.ico_hasGet.visible = hasGet;
            self.btn_get.visible = !hasGet;
            self.grp_res.visible = !hasGet;
            //花费元宝
            uiHelper.setResGrp(self.grp_res, gc.c_prop.spItemIdKey.diamond, opt.costDimond);
        };
        return BossResBackItem;
    })(mo.gui.ItemRenderer);
    g_worldboss.BossResBackItem = BossResBackItem;
    egret.registerClass(BossResBackItem,"g_worldboss.BossResBackItem");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_worldboss;
(function (g_worldboss) {
    /**
     *
     * @author
     *
     */
    var BossResBack = (function (_super) {
        __extends(BossResBack, _super);
        function BossResBack() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BossResBack,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_itmes = g_worldboss.BossResBackItem;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
        };
        p._data_list_itmes = function () {
            var self = this, filter, sorter;
            var list = [140001,
                140002,
                140003,
                140004,
                140005,
                140006,
                140007,
                140008,
                140009,
                140010
            ];
            if (self.img_empty)
                self.img_empty.visible = list.length == 0;
            return list;
        };
        return BossResBack;
    })(mo.gui.Dlg);
    g_worldboss.BossResBack = BossResBack;
    egret.registerClass(BossResBack,"g_worldboss.BossResBack");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/28.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossFightingCell = (function (_super) {
        __extends(GuildBossFightingCell, _super);
        function GuildBossFightingCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossFightingCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            //self.img_limit.visible = false;
            //self.img_money.visible = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            //限时
            var isLimit = data[gc.c_bossParameter_isLimit] == 1; //isLimitTime
            self.img_limit.visible = isLimit;
            //金钱怪
            var descId = data[gc.c_bossParameter_awardDesc];
            var desc = gc.c_prop.wbossRewardDes[descId];
            self.img_money.visible = (descId == gc.c_prop.wbossRewardDesKey.diamond);
            //节日显示
            var holidayImgSrc = {
                0: ["panel_ditus"],
                1: ["panel_gboss_huodong_1"]
            };
            var showOnHoliday = data[gc.c_bossParameter_showOnHoliday] || 0;
            var srcCfg = holidayImgSrc[showOnHoliday];
            self.img_bg.source = srcCfg[0];
            //名字和图像
            var bossId = data[gc.c_bossParameter_id];
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text = "(" + monsterInfo[gc.t_monster_level] + "级) " + monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath(data[gc.c_bossParameter_displayId]);
            //状态切换
            var status = data.status, KEY_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            var otherData = gd.bossGuildCtrl.getOtherData(bossId);
            var isLocked = otherData[2];
            self.grp_lock.visible = isLocked;
            self.btn_join.visible = true;
            self.label_cantJoin.visible = isLocked;
            self.label_fighting.visible = false;
            if (isLocked) {
                var guildId = gd.guildPersonalCtrl.getGuildId() || 0;
                var isSelf = guildId == otherData[0];
                self.img_lock.source = isSelf ? "ico_huitubiao" : "ico_xiaoshuo";
                var guildName = otherData[1];
                self.label_guildName.text = isSelf ? "本行会已上锁" : guildName;
                self.btn_join.visible = isSelf; //非本行会不能打
                self.label_cantJoin.visible = !isSelf; //非本行会不能打
            }
            //剩余挑战时间
            var leftTime = gd.bossGuildCtrl.getReDisappearSeconds(bossId);
            self.label_fightLeftTime.text = mo.getTimeStr(leftTime * 1000);
            self.setCDTime(leftTime);
            //正在挑战
            var isFightingIt = gd.bossFightCtrl.getCurFightBossId() == bossId;
            self.label_fighting.visible = isFightingIt;
        };
        p._tap_btn_join = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossCall, { bossId: self.data[gc.c_bossParameter_id] });
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.label_fightLeftTime.text = mo.getTimeStr(leftMillisecond);
            }
            else {
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
        return GuildBossFightingCell;
    })(mo.gui.ItemRenderer);
    g_worldboss.GuildBossFightingCell = GuildBossFightingCell;
    egret.registerClass(GuildBossFightingCell,"g_worldboss.GuildBossFightingCell");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/28.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossCallCell = (function (_super) {
        __extends(GuildBossCallCell, _super);
        function GuildBossCallCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossCallCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.countdwonTitle = "";
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
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
            var isLimit = data[gc.c_bossParameter_isLimit] == 1; //isLimitTime
            self.img_limit.visible = isLimit;
            //金钱怪
            var descId = data[gc.c_bossParameter_awardDesc];
            var desc = gc.c_prop.wbossRewardDes[descId];
            self.img_money.visible = (descId == gc.c_prop.wbossRewardDesKey.diamond);
            //节日显示
            var holidayImgSrc = {
                0: ["panel_ditus"],
                1: ["panel_gboss_huodong_1"]
            };
            var showOnHoliday = data[gc.c_bossParameter_showOnHoliday] || 0;
            var srcCfg = holidayImgSrc[showOnHoliday];
            self.img_bg.source = srcCfg[0];
            //名字和图像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text = "(" + monsterInfo[gc.t_monster_level] + "级) " + monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath(data[gc.c_bossParameter_displayId]);
            desc = descId == gc.c_prop.wbossRewardDesKey.equip ?
                mo.STR.format(desc, monsterInfo[gc.t_monster_level])
                : desc;
            self.label_reward_hint.text = mo.STR.format("抢夺：%s", desc);
            //行会等级判断
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var openGuildLvl = data[gc.c_bossParameter_openLvl];
            var isGuildLvlEnough = (gd.guildCtrl.getData() && gd.guildCtrl.getLvl() >= openGuildLvl);
            if (!isGuildLvlEnough) {
                self.label_guild.visible = true;
                self.label_guild.text = openGuildLvl;
                return;
            }
            var status = gd.bossGuildCtrl.getBossStatus(bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            var onCountdown = status == BOSS_STATUS.cd; //已被击杀,冷却中
            if (onCountdown) {
                self.label_killed.visible = true;
                self.label_left_time.visible = true;
                var cdTime = gd.bossGuildCtrl.getOpenCd(bossId);
                self.countdwonTitle = "召唤冷却: ";
                self.label_left_time.text = self.countdwonTitle + mo.getTimeStr(cdTime * 1000, true);
                if (cdTime)
                    self.setCDTime(cdTime);
                return;
            }
            var inTheSettlement = status == BOSS_STATUS.prize; //结算中
            if (inTheSettlement) {
                self.countdwonTitle = "剩余时间: ";
                self.label_settlement.visible = true;
                self.label_left_time.visible = true;
                var cdTime = gd.bossGuildCtrl.getRePrizeSeconds(bossId);
                self.label_left_time.text = self.countdwonTitle + mo.getTimeStr(cdTime * 1000, true);
                if (cdTime)
                    self.setCDTime(cdTime);
                return;
            }
            var inSleep = status == BOSS_STATUS.sleep; //休息中
            if (inSleep) {
                self.label_sleep.visible = true;
                return;
            }
            self.label_call.visible = true; //可召唤
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.label_left_time.text = self.countdwonTitle + mo.getTimeStr(leftMillisecond, true);
            }
            else {
                //刷新列表
                gd.bossGuildCtrl.getInfo(function () {
                    if (self.delegate._refreshTabComp) {
                        self.delegate._refreshTabComp();
                    }
                    else if (self.delegate._refreshCallGrp) {
                        self.delegate._refreshCallGrp();
                    }
                }, self);
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
        return GuildBossCallCell;
    })(mo.gui.ItemRenderer);
    g_worldboss.GuildBossCallCell = GuildBossCallCell;
    egret.registerClass(GuildBossCallCell,"g_worldboss.GuildBossCallCell");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2016/1/9.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossList = (function (_super) {
        __extends(GuildBossList, _super);
        function GuildBossList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossList,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_call = g_worldboss.GuildBossCallCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.BossGuildCtrl, gd.BossGuildCtrl.ON_BOSS_CALL_UPDATE, self._refreshCallGrp);
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, function () {
                gd.bossGuildCtrl.getInfo(function () {
                    self._refreshCallGrp();
                }, self);
            });
            self.label_call_time.text = mo.STR.format("每天可召唤时段：%s-%s", gd.bossGuildCtrl.getOpenStartTime().toFormat("HH24:MI"), gd.bossGuildCtrl.getOpenEndTime().toFormat("HH24:MI"));
            self.label_extra_cost.text = gd.bossGuildCtrl.getLockCost();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data.isLmt) {
                self.img_title.source = "tit_txt_g_hanghuiboss";
            }
            else {
                self.img_title.source = "tit_txt_g_xianshibossf";
            }
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 28 }).show();
        };
        p._refreshCallGrp = function () {
            var self = this;
            self.refreshList("list_call");
        };
        p._data_list_call = function () {
            var self = this, filter, sorter;
            var data = self.data;
            if (!data.isLmt) {
                var level = data.level;
                return gd.bossGuildCtrl.getBossList(false, level);
            }
            else {
                return gd.bossGuildCtrl.getLimitBossList(false);
            }
        };
        p._click_list_call = function (event) {
            var self = this;
            var boss = event.item;
            var bossid = boss[gc.c_bossParameter_id];
            if ((gd.bossGuildCtrl.getBossStatus(bossid) == gd.BossFightCtrl.BOSS_STATUS.prize)) {
                return;
            }
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossCall, { bossId: bossid });
        };
        return GuildBossList;
    })(mo.gui.Dlg);
    g_worldboss.GuildBossList = GuildBossList;
    egret.registerClass(GuildBossList,"g_worldboss.GuildBossList");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2016/1/9.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossLevelList = (function (_super) {
        __extends(GuildBossLevelList, _super);
        function GuildBossLevelList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossLevelList,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self.tabIndex = 0;
            self.tabCompArr = null;
            self.tabCompArr = [];
            self._Item_list_fight = g_worldboss.GuildBossFightingCell;
            self._Item_list_call = g_worldboss.GuildBossLevelCallCell;
            self._Item_list_callLmt = g_worldboss.GuildBossCallCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.isLmt = self.moduleParam.isLmt;
            self.registerClassByKey(gd.BossGuildCtrl, gd.BossGuildCtrl.ON_BOSS_CALL_UPDATE, self._refreshTabComp);
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, function () {
                gd.bossGuildCtrl.getInfo(function () {
                    self._refreshTabComp();
                }, self);
            });
            self.grp_fight.visible = false;
            self.grp_call.visible = false;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg);
            var curLeftNum = gd.bossCtrl.getReFightNum();
            var maxNum = gameInfo[9];
            self.label_canFight.text = [curLeftNum, maxNum];
            self.label_canFight.visible = curLeftNum > 0;
            self.label_cannotFight.visible = curLeftNum <= 0;
            self.list_call.visible = !self.isLmt;
            self.list_callLmt.visible = self.isLmt;
            self.label_extra_cost.visible = !self.isLmt;
            self.label_extra_costLmt.visible = self.isLmt;
            self.tabCompArr = [self.grp_fight, self.grp_call];
            self.tab_medal.selectedIndex = 0;
            process.nextTick(function () {
                self._tap_tab_medal();
            });
            self.label_call_time.text = mo.STR.format("每天可召唤时段：%s-%s", gd.bossGuildCtrl.getOpenStartTime().toFormat("HH24:MI"), gd.bossGuildCtrl.getOpenEndTime().toFormat("HH24:MI"));
            self.label_extra_cost.text = gd.bossGuildCtrl.getLockCost();
            self.label_extra_costLmt.text = gd.bossGuildCtrl.getLockCost();
            //var weekBossData = gd.bossGuildCtrl.getWeekBossData();
            //var curDay = Date.newDate().getDay();//周几
            //var nextDay = (curDay+1)%7;//明天周几
            //var nextBossId = weekBossData[nextDay]?weekBossData[nextDay][0]:0;
            //if(nextBossId){
            //    var data = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, nextBossId);
            //    var descId = data[gc.c_bossParameter_awardDesc];
            //    var desc = gc.c_prop.wbossRewardDes[descId];
            //    self.label_extra_costLmt.text = desc;
            //}
            if (!self.isLmt) {
                self.img_title.source = "tit_txt_g_hanghuiboss";
            }
            else {
                self.img_title.source = "tit_txt_g_xianshibossf";
            }
        };
        p._tap_btn_help = function () {
            var self = this;
            if (self.tabIndex == 0) {
                g_base.BaseShowTip.create().setData({ id: 27, param1: mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[7] }).show();
            }
            else {
                g_base.BaseShowTip.create().setData({ id: 28 }).show();
            }
        };
        p._tap_tab_medal = function () {
            var self = this;
            var selectedIndex = self.tabIndex = self.tab_medal.selectedIndex;
            var tabCompArr = self.tabCompArr;
            var curComp = tabCompArr[selectedIndex];
            if (!curComp)
                return;
            for (var i = 0, l_i = tabCompArr.length; i < l_i; i++) {
                var locComp = tabCompArr[i];
                locComp.visible = false;
            }
            self._refreshTabComp();
            curComp.visible = true;
        };
        p._refreshTabComp = function () {
            var self = this, selectedIndex = self.tabIndex;
            if (selectedIndex == 0) {
                self._refreshFightGrp();
            }
            else if (selectedIndex == 1) {
                self._refreshCallGrp();
            }
        };
        p._refreshFightGrp = function () {
            var self = this;
            self.refreshList("list_fight");
        };
        p._data_list_fight = function () {
            var self = this, filter, sorter;
            var list;
            if (!self.isLmt) {
                list = gd.bossGuildCtrl.getBossList(true, 0);
            }
            else {
                list = gd.bossGuildCtrl.getLimitBossList(true);
            }
            self.img_empty.visible = list.length == 0;
            return list;
        };
        /****************************************************************
         //召唤
         ****************************************************************/
        p._refreshCallGrp = function () {
            var self = this;
            self.refreshList("list_call");
        };
        p._data_list_call = function () {
            var self = this, filter, sorter;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.newBossCfg);
            var levelStr = gameInfo[4];
            var levels = levelStr.split(",");
            var bossLvs = [];
            var bossInfos = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var levelBoss = {};
            for (var key in bossInfos) {
                var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, key);
                var level = monsterInfo[gc.t_monster_level];
                if (!levelBoss[level])
                    levelBoss[level] = [];
                levelBoss[level].push(parseInt(key));
            }
            for (var i = 0; i < levels.length; ++i) {
                level = parseInt(levels[i]);
                var obj = { bossId: levelBoss[level][0], level: level };
                bossLvs.push(obj);
            }
            return bossLvs;
        };
        p._data_list_callLmt = function () {
            var self = this, filter, sorter;
            return gd.bossGuildCtrl.getLimitBossList(false);
        };
        p._click_list_call = function (event) {
            var self = this;
            var data = event.item;
            g_worldboss.GuildBossList.create().setData({ isLmt: self.isLmt, level: data.level }).show();
        };
        p._click_list_callLmt = function (event) {
            var self = this;
            var boss = event.item;
            var bossid = boss[gc.c_bossParameter_id];
            if ((gd.bossGuildCtrl.getBossStatus(bossid) == gd.BossFightCtrl.BOSS_STATUS.prize)) {
                return;
            }
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossCall, { bossId: bossid, isLmt: true });
        };
        return GuildBossLevelList;
    })(mo.gui.Dlg);
    g_worldboss.GuildBossLevelList = GuildBossLevelList;
    egret.registerClass(GuildBossLevelList,"g_worldboss.GuildBossLevelList");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildBossLevelList;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.bossGuildCtrl.getInfo(function () {
                cb();
            }, this);
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/28.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossCall = (function (_super) {
        __extends(GuildBossCall, _super);
        function GuildBossCall() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossCall,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
            self.registerClassByKey(gd.BossGuildCtrl, gd.BossGuildCtrl.ON_BOSS_CALL_UPDATE, self.close);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self._bossStateChange);
            self.px_hp.labelFunction = self.barLabelFunction;
            self.setData(self.moduleParam);
            self.label_numFuHuo.visible = false;
            if (self.moduleParam.isLmt) {
                self.img_title.source = "tit_txt_g_xianshibossf";
            }
            else {
                self.img_title.source = "tit_txt_g_hanghuiboss";
            }
        };
        p.barLabelFunction = function (value, maximum) {
            return mo.STR.format("%s/%s", utils.formatByWan(value), utils.formatByWan(maximum));
        };
        p._bossStateChange = function () {
            var self = this;
            var bossId = self.data.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            if (!fec.isOpen()) {
                var self = this;
                if (self.grp_fight.visible) {
                    self.label_fighting.visible = false;
                    self.btn_status.visible = true;
                    self.label_left_time.visible = false;
                    self.btn_fight.visible = false;
                    self.label_level_need.text = "挑战已结束";
                }
            }
            else {
                self._updateData(true);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            //节日显示
            var holidayImgSrc = {
                0: ["panel_ditus"],
                1: ["panel_gboss_huodong_1"]
            };
            var c_boss = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, self.data.bossId);
            var showOnHoliday = c_boss[gc.c_bossParameter_showOnHoliday] || 0;
            var srcCfg = holidayImgSrc[showOnHoliday];
            self.img_boss_bg.source = srcCfg[0];
            self.label_numFuHuo.text = gd.bossGuildCtrl.getRepeatCount(self.data.bossId);
            self._updateData(true);
        };
        p._updateData = function (checkCD) {
            var self = this;
            var bossId = self.data.bossId;
            var isLimit = gd.bossGuildCtrl.isLimitTime(bossId);
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_boss = c_bossParameter[bossId];
            self.label_limit_time.visible = false;
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text = "(" + monsterInfo[gc.t_monster_level] + "级) " + monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath(c_boss[gc.c_bossParameter_displayId]);
            var descId = c_boss[gc.c_bossParameter_awardDesc];
            var desc = gc.c_prop.wbossRewardDes[descId];
            desc = descId == gc.c_prop.wbossRewardDesKey.equip ?
                mo.STR.format(desc, monsterInfo[gc.t_monster_level])
                : desc;
            self.label_reward_hint.text = mo.STR.format("抢夺：%s", desc);
            self.label_call_time.text = [isLimit ? "今日" : "每天", gd.bossGuildCtrl.getOpenStartTime().toFormat("HH24:MI"),
                gd.bossGuildCtrl.getOpenEndTime().toFormat("HH24:MI")];
            var needLvl = c_boss[gc.c_bossParameter_fightLvl];
            self.label_boss_lvLmt_call.text = [needLvl, c_boss[gc.c_bossParameter_maxLvl]];
            self.label_boss_lvLmt_fight.text = [needLvl, c_boss[gc.c_bossParameter_maxLvl]];
            self.label_boss_lvLmt_call.visible = false;
            var stats = gd.bossGuildCtrl.getBossStatus(bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            if (stats == BOSS_STATUS.fighting) {
                var fctrl = gd.bossFightCtrl.getEntity(bossId);
                //设置血量
                if (!fctrl.getData()) {
                    fctrl.enter(function () {
                        self.px_hp.maximum = fctrl.getTotalHp();
                        self.px_hp.setValue(fctrl.getCurHp());
                    }, self);
                }
                else {
                    self.px_hp.maximum = fctrl.getTotalHp();
                    self.px_hp.setValue(fctrl.getCurHp());
                }
                //设置战斗时UI状态
                self.label_fighting.visible = true;
                self.btn_status.visible = false;
                self.grp_fight.visible = true;
                self.grp_call.visible = false;
                if (checkCD) {
                    self.setCDTime(gd.bossGuildCtrl.getReDisappearSeconds(bossId));
                }
                var leftTime = gd.bossGuildCtrl.getReDisappearSeconds(bossId);
                if (leftTime) {
                    self.label_left_time.visible = true;
                    self.label_left_time.text = mo.getTimeStr(leftTime * 1000, true); //剩余时间
                    if (checkCD) {
                        self.setCDTime(leftTime);
                    }
                }
                else {
                    self.label_left_time.visible = false;
                }
                self.label_level_need.text = "";
                if (gd.userCtrl.getLvl() < needLvl || gd.userCtrl.getLvl() > c_boss[gc.c_bossParameter_maxLvl]) {
                    self.label_boss_lvLmt_fight.visible = true;
                    self.btn_fight.visible = false;
                }
                else {
                    self.label_boss_lvLmt_fight.visible = false;
                    self.btn_fight.visible = true;
                }
            }
            else {
                //结算中战斗按钮不能点
                self.btn_fight.enabled = stats != BOSS_STATUS.prize;
                //Call
                self.label_limit_time.visible = isLimit == 1;
                if (isLimit) {
                    var startTime = Date.newDate(gd.bossGuildCtrl.getLimitStartTime(bossId));
                    var endTime = Date.newDate(gd.bossGuildCtrl.getLimitEndTime(bossId));
                    var weekStrs = ["每天", "每周一", "每周二", "每周三", "每周四", "每周五", "每周六", "每周日"];
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
                if (status == 1) {
                    //未开启
                    self.label_boss_sleep.text = mo.STR.format("行会等级达到%s开启", c_boss[gc.c_bossParameter_openLvl]);
                }
                else if (status == 2) {
                    //正在挑战中
                    self.label_boss_sleep.text = "";
                }
                else if (status == BOSS_STATUS.sleep) {
                    //Boss正在休息
                    self.label_boss_sleep.text = "BOSS休息中";
                }
                else if (status == BOSS_STATUS.cd) {
                    //已被击杀,cd中
                    //self.btn_call.visible = false;
                    self.label_limit_time.visible = false;
                    self.label_boss_sleep.text = "召唤冷却中";
                    var leftTime = gd.bossGuildCtrl.getOpenCd(bossId);
                    if (leftTime) {
                        self.label_left_time.visible = true;
                        self.label_left_time.text = mo.getTimeStr(leftTime * 1000, true);
                        if (checkCD) {
                            self.setCDTime(leftTime);
                        }
                    }
                    if (c_boss[gc.c_bossParameter_repeat]) {
                        self.setCanCallStatus();
                    }
                }
                else if (status == 5) {
                    //可召唤
                    self.setCanCallStatus();
                }
            }
        };
        p.setCanCallStatus = function () {
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
            if (!self.moduleParam.isLmt) {
                self.grp_lock.visible = true;
            }
            //锁定状态时还会有额外的元宝花费
            self.btn_lock_call.visible = self.ckb_lock.selected;
            self.btn_call.visible = !self.ckb_lock.selected;
            self.label_duration.text = mo.STR.format("召唤后需在%s分钟内击杀BOSS", c_boss[gc.c_bossParameter_timeLimit] / 60);
            if (status == BOSS_STATUS.cd) {
                self.label_boss_sleep.text = "召唤冷却中";
                self.btn_lock_call.icon = "btn_txt_suodinfuhuo";
                self.btn_call.icon = "btn_txt_lijizaohuan";
                var coseYB = gd.bossGuildCtrl.getRepeatCost(bossId, false);
                self.grp_res_extra.visible = false;
                self.grp_res_extra.includeInLayout = false;
                if (self.ckb_lock.selected) {
                    coseYB = gd.bossGuildCtrl.getRepeatCost(bossId, true);
                }
                uiHelper.setResGrp(self.grp_res, gc.c_prop.spItemIdKey.diamond, coseYB);
            }
            else {
                //设置话费描述,非元宝的要显示名字
                var itemId = c_boss[gc.c_bossParameter_summonCost][0];
                var itemNum = c_boss[gc.c_bossParameter_summonCost][1];
                var isDiamond = (itemId == gc.c_prop.spItemIdKey.diamond);
                self.label_boss_lvLmt_call.visible = true;
                self.label_boss_sleep.text = "";
                self.btn_lock_call.icon = "btn_txt_shuodingzaohuan";
                self.btn_call.icon = "btn_txt_zaohuan";
                if (self.ckb_lock.selected) {
                    var extraDiamod = gd.bossGuildCtrl.getLockCost();
                    itemNum += isDiamond ? extraDiamod : 0; //累加
                    self.grp_res_extra.visible = !isDiamond;
                    self.grp_res_extra.includeInLayout = !isDiamond;
                    if (!isDiamond) {
                        uiHelper.setResGrp(self.grp_res_extra, gc.c_prop.spItemIdKey.diamond, extraDiamod);
                    }
                }
                uiHelper.setResGrp(self.grp_res, itemId, isDiamond ? itemNum : mo.STR.format("%s: %s", mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId)[gc.t_item_name], itemNum));
            }
        };
        p._chg_ckb_lock = function () {
            var self = this;
            var vipInfos = mo.getJSONWithFileName(gc.cfg_c_vip);
            var vipInfo = vipInfos[gd.userCtrl.getVip()];
            for (var key in vipInfos) {
                if (vipInfos[key][gc.c_vip_isLock]) {
                    break;
                }
            }
            if (!vipInfo[gc.c_vip_isLock]) {
                self.ckb_lock.selected = false;
                return mo.showMsg(gc.id_c_msgCode.vipLock, key);
            }
            self.setCanCallStatus();
        };
        p._tap_btn_help = function () {
            var stats = gd.bossGuildCtrl.getBossStatus(this.moduleParam.bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            var helpId = 28;
            if (stats == BOSS_STATUS.fighting) {
                helpId = 27;
            }
            g_base.BaseShowTip.create().setData({ id: helpId }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_fight = function () {
            var self = this;
            var bossId = self.data.bossId;
            if (gd.bossGuildCtrl.checkAndShowLvlEnough(bossId)) {
                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: bossId });
            }
        };
        p._tap_btn_call = function () {
            var self = this;
            //同一个公会只能召唤一个boss
            if (gd.bossGuildCtrl.hasGuildFightingBoss()) {
                return mo.showMsg(gc.id_c_msgCode.noMoreBoss);
            }
            var bossId = self.data.bossId;
            var status = gd.bossGuildCtrl.getBossStatus(bossId);
            if (status != gd.BossFightCtrl.BOSS_STATUS.cd) {
                if (gd.bossGuildCtrl.hasFightingBoss()) {
                    g_worldboss.BossExtraCost.create().setData({ bossId: self.data.bossId, locked: self.ckb_lock.selected }).show();
                }
                else {
                    gd.bossGuildCtrl.openBoss(self.data.bossId, self.ckb_lock.selected, function () {
                        self.close();
                        mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: self.data.bossId });
                    }, self);
                }
            }
            else {
                mo.showMsg(gc.id_c_msgCode.reSummonBoss, gd.bossGuildCtrl.getRepeatCost(bossId, false), function () {
                    gd.bossGuildCtrl.openBoss(self.data.bossId, self.ckb_lock.selected, function () {
                        self.close();
                        mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: self.data.bossId });
                    }, self);
                });
            }
        };
        p._tap_btn_lock_call = function () {
            var self = this;
            //同一个公会只能召唤一个boss
            if (gd.bossGuildCtrl.hasGuildFightingBoss()) {
                return mo.showMsg(gc.id_c_msgCode.noMoreBoss);
            }
            var bossId = self.data.bossId;
            var status = gd.bossGuildCtrl.getBossStatus(bossId);
            if (status != gd.BossFightCtrl.BOSS_STATUS.cd) {
                if (gd.bossGuildCtrl.hasFightingBoss()) {
                    g_worldboss.BossExtraCost.create().setData({ bossId: self.data.bossId, locked: self.ckb_lock.selected }).show();
                }
                else {
                    gd.bossGuildCtrl.openBoss(self.data.bossId, self.ckb_lock.selected, function () {
                        self.close();
                        mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: self.data.bossId });
                    }, self);
                }
            }
            else {
                mo.showMsg(gc.id_c_msgCode.reSummonLock, gd.bossGuildCtrl.getRepeatCost(bossId, true), function () {
                    gd.bossGuildCtrl.openBoss(self.data.bossId, self.ckb_lock.selected, function () {
                        self.close();
                        mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: self.data.bossId });
                    }, self);
                });
            }
        };
        p._tap_btn_show_rewards = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossReward, self.moduleParam);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.label_left_time.text = mo.getTimeStr(leftMillisecond, true);
            }
            else {
                self._updateData(false);
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
        p._tap_btn_status = function () {
            var self = this;
            var bossId = self.data.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            fec.getResultData(function (data) {
                g_worldboss.GuildBossGrand.create().setData({ result: data, isGuild: true }).show();
            }, self);
        };
        return GuildBossCall;
    })(mo.gui.Dlg);
    g_worldboss.GuildBossCall = GuildBossCall;
    egret.registerClass(GuildBossCall,"g_worldboss.GuildBossCall");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildBossCall;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            var self = this;
            var bossId = moduleParam.bossId;
            var stats = gd.bossGuildCtrl.getBossStatus(bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            if (stats == BOSS_STATUS.fighting) {
                var fec = gd.bossFightCtrl.getEntity(bossId);
                if (!fec.getData()) {
                    fec.enter(function () {
                        cb();
                    }, self);
                }
                else {
                    cb();
                }
            }
            else {
                cb();
            }
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/28.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossLevelCallCell = (function (_super) {
        __extends(GuildBossLevelCallCell, _super);
        function GuildBossLevelCallCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossLevelCallCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var bossId = data.bossId;
            self.label_level.text = self.data.level;
            self.label_leftNum.text = gd.bossGuildCtrl.getNotKillNumByLvl(self.data.level);
            //名字和图像
            var bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
            self.img_boss.source = resHelper.getWorldBossIconPath(bossInfo[gc.c_bossParameter_displayId]);
        };
        return GuildBossLevelCallCell;
    })(mo.gui.ItemRenderer);
    g_worldboss.GuildBossLevelCallCell = GuildBossLevelCallCell;
    egret.registerClass(GuildBossLevelCallCell,"g_worldboss.GuildBossLevelCallCell");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/22.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossInspire = (function (_super) {
        __extends(GuildBossInspire, _super);
        function GuildBossInspire() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossInspire,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_content.lineSpacing = 5;
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var inspireId = self.data.inspireId;
            if (!inspireId)
                inspireId = 1;
            var c_inspire = mo.getJSONWithFileName(gc.cfg_t_otherBuff);
            var c_data = c_inspire[inspireId];
            var bossId = self.data.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            var inspireTime = fec.getInspireReSeconds();
            self.label_remaind.text = mo.STR.format("当前行会鼓舞剩余时间 %s", mo.getTimeStr(inspireTime * 1000));
            self.setCDTime(inspireTime);
            self.label_title.text = c_data[gc.t_otherBuff_name];
            self.label_inspire_title.text = mo.STR.format("效果:增加%s%伤害,持续%s秒", (c_data[gc.t_otherBuff_addHurt] / 10000) * 100, c_data[gc.t_otherBuff_conTime]);
            self.label_cost.text = mo.STR.format("花费:%s元宝", mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[3]);
            fec.getInspireRecordArr(function (data) {
                self.onChatUpdate(data);
            }, self);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 26 }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_cancel = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_inspire = function () {
            var self = this;
            self._inspire();
        };
        p._inspire = function () {
            var self = this;
            gd.bossFightCtrl.getEntity(self.moduleParam.bossId).inspire(function (data) {
                self.dataChanged();
            }, self);
        };
        p.clearChat = function () {
            var self = this;
            self.label_content.text = "";
        };
        p.onChatUpdate = function (data) {
            var self = this;
            self.clearChat();
            var allStr = "";
            for (var i = 0; i < data.length; ++i) {
                var chatStr = mo.STR.format("[ubb color=#F2C876]%s: [/ubb][ubb color=#ffffff]%s[/ubb]", data[i], "为行会全员增加了鼓舞Buff!");
                allStr += chatStr + "\n";
            }
            self.label_content.text = allStr;
            process.nextTick(function () {
                if (!self.scroller)
                    return;
                self.scroller.throwVertically(self.scroller.getMaxScrollTop(), 1);
            });
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.label_remaind.text = mo.STR.format("当前行会鼓舞剩余时间:%s", mo.getTimeStr(leftMillisecond));
            }
            else {
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
        return GuildBossInspire;
    })(mo.gui.Dlg);
    g_worldboss.GuildBossInspire = GuildBossInspire;
    egret.registerClass(GuildBossInspire,"g_worldboss.GuildBossInspire");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = GuildBossInspire;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by lihex on 16/1/6.
 */
/**
 * Created by Administrator on 2015/12/22.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossGrand = (function (_super) {
        __extends(GuildBossGrand, _super);
        function GuildBossGrand() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossGrand,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.img_bg.visible = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var info = self.data.result;
            var KEY = gc.dsConsts.BossResultData;
            var isWin = info[KEY.isWin];
            self.img_bg.visible = true;
            self.img_bg.source = isWin ? "panel_bossshenli" : "panel_bossshibai";
            self.grp_guild.visible = self.data.isGuild;
            //排名
            var label_no;
            var rank = info[KEY.rank5];
            for (var i = 0, li = 5; i < li; i++) {
                label_no = self['label_no' + i];
                label_no.text = rank[i] || "无";
            }
            self.label_maxDamage.text = info[KEY.firstHurtName] || "无";
            self.label_lastHit.text = info[KEY.killUserName] || "无";
            self.label_caller.text = info[KEY.callUserName] || "无";
            self.label_guild.text = info[KEY.callGuildName] || "无";
            self.label_myDamage.text = info[KEY.myHurt] + "";
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return GuildBossGrand;
    })(mo.gui.Dlg);
    g_worldboss.GuildBossGrand = GuildBossGrand;
    egret.registerClass(GuildBossGrand,"g_worldboss.GuildBossGrand");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/22.
 */
var g_worldboss;
(function (g_worldboss) {
    var GuildBossReward = (function (_super) {
        __extends(GuildBossReward, _super);
        function GuildBossReward() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossReward,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.item0.label_index.text = "第1名:";
            self.item1.label_index.text = "第2-5名:";
            self.item2.label_index.text = "第6-10名:";
            self.item3.label_index.text = "第11-20名:";
            self.item4.label_index.text = "召唤奖:";
            self.item5.label_index.text = "行会奖:";
            self.item6.label_index.text = "最后一击:";
            self.item4.label_index.textColor = 0xEFB037;
            self.item5.label_index.textColor = 0xEFB037;
            self.item6.label_index.textColor = 0xEFB037;
            self.label_hurt.text = mo.STR.format("%s伤害/金币", 10000 / mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[4]);
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 26 }).show();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var bossId = self.moduleParam.bossId;
            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_data = c_bossParameter[bossId];
            self.item0.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_rankAward1]));
            self.item1.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_rankAward2]));
            self.item2.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_rankAward3]));
            self.item3.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_rankAward4]));
            self.item4.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_summonAward]));
            self.item5.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_guildAward]));
            self.item6.setData(gd.userUtils.getLoots(c_data[gc.c_bossParameter_lastShotAward]));
        };
        return GuildBossReward;
    })(mo.gui.Dlg);
    g_worldboss.GuildBossReward = GuildBossReward;
    egret.registerClass(GuildBossReward,"g_worldboss.GuildBossReward");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = GuildBossReward;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/19.
 */
var g_worldboss;
(function (g_worldboss) {
    var WorldBoss = (function (_super) {
        __extends(WorldBoss, _super);
        function WorldBoss() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WorldBoss,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.curHp.toString(), self._updateUI);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.myHurt.toString(), self._updateUI);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.myRank.toString(), self._updateUI);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.inspireEndTime.toString(), self._updateUI);
            self.registerClassByKey(gd.BossFightCtrl, gd.BossFightCtrl.ON_BOSS_AUTO_FIGHT.toString(), function () {
                self.close();
            });
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
        };
        p._bossStateChange = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            if (!fec.isOpen()) {
                var self = this;
                self.ckb_auto.enabled = false;
                self.btn_clear_cd.enabled = false;
                self.btn_fight.enabled = false;
                self.btn_guwu.enabled = false;
                self.label_coolDown.text = "战斗已结束";
                self.px_hp.setValue(0);
            }
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self._bossStateChange);
            self.bossAP = new g_base.ActionPlayer();
            self.bossAP.scaleX = self.bossAP.scaleY = 2.0;
            self.ico_monster.source = self.bossAP;
            var bossId = self.moduleParam.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            self.img_title.source = gd.bossCtrl.isGuildBoss(bossId) ? "tit_txt_g_hanghuiboss" : "tit_txt_g_shijieboss";
            var leftTime = fec.getReOverSeconds();
            self.label_lefttime.text = "活动剩余时间 " + mo.getTimeStr(leftTime * 1000);
            self.setCDTime(leftTime);
            self.px_hp.labelFunction = self.barLabelFunction;
            self.px_hp.maximum = fec.getTotalHp();
            self.px_hp.setValue(fec.getCurHp());
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            var idStr = monsterInfo[gc.t_monster_displayID];
            self.bossAP.loadRes("m" + idStr + "_4s", true);
            self.bossAP.playAction();
            self.label_monster.text = monsterInfo[gc.t_monster_name] + "  Lv." + monsterInfo[gc.t_monster_level];
            self.ckb_auto.selected = gd.bossFightCtrl.isAutoFight() && self._isCurAutoFightBoss();
            self._updateCD();
            self._updateUI();
            if (gd.bossCtrl.isGuildBoss(bossId)) {
                if (fec.isSelfCall()) {
                    self.label_yourFuHuo.visible = true;
                    self.label_canFight.visible = false;
                    self.label_cannotFight.visible = false;
                }
                else {
                    var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg);
                    var curLeftNum = gd.bossCtrl.getReFightNum();
                    var maxNum = gameInfo[9];
                    self.label_canFight.text = [curLeftNum, maxNum];
                    self.label_canFight.visible = curLeftNum > 0;
                    self.label_cannotFight.visible = curLeftNum <= 0;
                    self.label_yourFuHuo.visible = false;
                }
            }
            else {
                self.label_yourFuHuo.visible = false;
                self.label_canFight.visible = false;
                self.label_cannotFight.visible = false;
            }
        };
        p.barLabelFunction = function (value, maximum) {
            return mo.STR.format("%s/%s", utils.formatByWan(value), utils.formatByWan(maximum));
        };
        p._updateUI = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            if (self.px_hp && mo.utils.getExtData(self.px_hp, 'progressOpt') != null) {
                mo.gui.helper.progress(self.px_hp, fec.getCurHp());
            }
            fec.getFirstHurtRank(function (data) {
                if (!data) {
                    self.label_first.text = "尚未开始";
                    self.label_first_hh.text = "";
                    self.label_first_hurt.text = "";
                }
                else {
                    self.ico_head.setData({ icoId: data[gc.dsConsts.BossHurtRank.icon] });
                    self.label_first.text = data[gc.dsConsts.BossHurtRank.userName];
                    self.label_first_hh.text = "[" + data[gc.dsConsts.BossHurtRank.guildName] + "]";
                    self.label_first_hurt.text = mo.STR.format("%s", utils.formatByWan(data[gc.dsConsts.BossHurtRank.hurt]));
                }
            }, self);
            self.label_my_hurt.text = mo.STR.format("输出伤害:%s", utils.formatByWan(fec.getMyHurt()));
            self.label_my_index.text = "我的排名:" + fec.getMyRank();
            //行会鼓舞界面
            var isGuildBoss = gd.bossCtrl.isGuildBoss(bossId);
            self.grp_inspire.visible = isGuildBoss;
            self.grp_call.visible = isGuildBoss;
            if (isGuildBoss) {
                //行会鼓舞设置
                var data = mo.STR.format("增加%s%伤害", (fec.getInspireHurt() / 10000) * 100);
                self.label_hanghuigw.text = mo.STR.format("行会鼓舞: %s", data);
                var inspireTime = fec.getInspireReSeconds();
                self.label_hanghuilt.text = "加成剩余时间 " + mo.getTimeStr(inspireTime * 1000);
                self.setGWTime(inspireTime);
                //召唤者
                self.label_caller.text = fec.getCallUserName();
                self.label_callerhh.text = mo.STR.format("[%s]", fec.getCallUserGuildName());
            }
        };
        p._updateCD = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            self.label_coolDown.text = mo.STR.format("冷却时间：%s", mo.getTimeStr(fec.getFightCd() * 1000));
            self.setCoolDownTime(fec.getFightCd());
        };
        p._tap_btn_help = function () {
            var self = this;
            var isGuildBoss = gd.bossCtrl.isGuildBoss(self.moduleParam.bossId);
            if (isGuildBoss) {
                g_base.BaseShowTip.create().setData({ id: 27, param1: mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[7] }).show();
            }
            else {
                g_base.BaseShowTip.create().setData({ id: 54 }).show();
            }
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_more_index = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.worldBossHurtList, { "bossId": self.moduleParam.bossId });
        };
        p._tap_btn_guwu = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossInspire, { inspireId: 1, bossId: self.moduleParam.bossId });
        };
        p._isCurAutoFightBoss = function () {
            var self = this;
            var curAutoFightBossId = gd.bossFightCtrl.getAutoBossId();
            return curAutoFightBossId && curAutoFightBossId == self.moduleParam.bossId;
        };
        p._chg_ckb_auto = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            //判断参与等级
            var fightLvl = fec.getFightableLvl();
            if (gd.userCtrl.getLvl() < fightLvl) {
                mo.showMsg(gc.id_c_msgCode.noLvlchallengeBoss, fightLvl);
                self.ckb_auto.selected = false;
                return;
            }
            //自动挑战功能有VIP等级限制
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, gd.userCtrl.getVip());
            var canGW = vipInfo[gc.c_vip_bossAutoFight];
            if (!canGW) {
                self.ckb_auto.selected = false;
                mo.showMsg(gc.id_c_msgCode.novLvAutoFight, mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[7]);
                return;
            }
            var bossFightCtrl = gd.bossFightCtrl;
            if (self.ckb_auto.selected) {
                if (bossFightCtrl.hasAutoFightBoss() && !self._isCurAutoFightBoss()) {
                    mo.msgMgr.once_type("cancel", g_msg.msgType.confirm, function () {
                        self.ckb_auto.selected = false;
                    });
                    mo.showMsg(gc.id_c_msgCode.onlyoneAutoFight, function () {
                        bossFightCtrl.endAutoFight();
                        bossFightCtrl.setAutoBossId(bossId);
                        bossFightCtrl.startAutoFight();
                    }, self);
                }
                else {
                    bossFightCtrl.setAutoBossId(bossId);
                    bossFightCtrl.startAutoFight();
                }
            }
            else {
                bossFightCtrl.endAutoFight();
            }
        };
        p._tap_btn_reward = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var isGuildBoss = gd.bossCtrl.isGuildBoss(bossId);
            if (isGuildBoss) {
                mo.moduleMgr.runModule(g_consts.moduleId.guildBossReward, self.moduleParam);
            }
            else {
                mo.moduleMgr.runModule(g_consts.moduleId.wBossReward, self.moduleParam);
            }
        };
        p._tap_btn_fight = function () {
            var self = this;
            self.go_fight();
        };
        p._tap_btn_clear_cd = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            mo.showMsg(gc.id_c_msgCode.ifResetTime, mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[2], "", function () {
                fec.clearFightCd(function (data) {
                    self._updateCD();
                }, self);
            }, self);
        };
        p.go_fight = function () {
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            fec.startFight(function () { }, self);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.label_lefttime.text = "活动剩余时间 " + mo.getTimeStr(leftMillisecond);
            }
            else {
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
        p.resetCoolDownTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.btn_clear_cd.visible = true;
                self.label_coolDown.text = "冷却时间 " + mo.getTimeStr(leftMillisecond);
            }
            else {
                self.label_coolDown.text = "点击进入战斗立即参与";
                self.btn_clear_cd.visible = false;
            }
        };
        p.setCoolDownTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.cool_timeTrigger) {
                    tm.timer.remove(self.cool_timeTrigger);
                    self.cool_timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.cool_timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.coolDownTimeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.coolDownTimeOut, self);
                tm.timer.add(timeTrigger);
            }
            else {
                if (self.cool_timeTrigger) {
                    tm.timer.remove(self.cool_timeTrigger);
                    self.cool_timeTrigger = null;
                }
                self.resetCoolDownTimeView(0);
            }
        };
        p.coolDownTimeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCoolDownTimeView(leftMillisecond);
        };
        p.coolDownTimeOut = function (type, beginTime, endTime) {
            var self = this;
            self.resetCoolDownTimeView(0);
        };
        p.resetGWTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.label_hanghuilt.text = "行会鼓舞剩余时间 " + mo.getTimeStr(leftMillisecond);
            }
            else {
                self.label_hanghuilt.text = "行会鼓舞剩余时间";
                self.label_hanghuigw.text = "行会鼓舞:无";
            }
        };
        p.setGWTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.gw_timeTrigger) {
                    tm.timer.remove(self.gw_timeTrigger);
                    self.gw_timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.gw_timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.gwTimeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.gwTimeOut, self);
                tm.timer.add(timeTrigger);
            }
            else {
                self.resetGWTimeView(0);
            }
        };
        p.gwTimeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetGWTimeView(leftMillisecond);
        };
        p.gwTimeOut = function (type, beginTime, endTime) {
            var self = this;
            self.resetGWTimeView(0);
        };
        return WorldBoss;
    })(mo.gui.Dlg);
    g_worldboss.WorldBoss = WorldBoss;
    egret.registerClass(WorldBoss,"g_worldboss.WorldBoss");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = WorldBoss;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            var self = this;
            var bossId = moduleParam.bossId;
            var isGuildBoss = gd.bossCtrl.isGuildBoss(bossId);
            var realBossCtrl = isGuildBoss ? gd.bossGuildCtrl : gd.bossWorldCtrl;
            realBossCtrl.getInfo(function () {
                var bossId = moduleParam.bossId;
                var stats = realBossCtrl.getBossStatus(bossId);
                var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
                if (stats == BOSS_STATUS.fighting) {
                    var fec = gd.bossFightCtrl.getEntity(bossId);
                    if (!fec.getData()) {
                        fec.enter(function () {
                            cb();
                        }, self);
                    }
                    else {
                        cb();
                    }
                }
                else {
                    cb();
                }
            }, self);
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/29.
 */
var g_worldboss;
(function (g_worldboss) {
    var WorldBossHurtCell = (function (_super) {
        __extends(WorldBossHurtCell, _super);
        function WorldBossHurtCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WorldBossHurtCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            self.label_index.text = mo.STR.format("%s", data[gc.dsConsts.BossHurtRank.rank]);
            self.label_name.text = mo.STR.format("%s", data[gc.dsConsts.BossHurtRank.userName]);
            self.label_hanghui.text = mo.STR.format("[%s]", data[gc.dsConsts.BossHurtRank.guildName]);
            self.label_hurt.text = mo.STR.format("%s", utils.formatByWan(data[gc.dsConsts.BossHurtRank.hurt]));
        };
        return WorldBossHurtCell;
    })(mo.gui.ItemRenderer);
    g_worldboss.WorldBossHurtCell = WorldBossHurtCell;
    egret.registerClass(WorldBossHurtCell,"g_worldboss.WorldBossHurtCell");
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/22.
 */
var g_worldboss;
(function (g_worldboss) {
    var WorldBossHurtList = (function (_super) {
        __extends(WorldBossHurtList, _super);
        function WorldBossHurtList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WorldBossHurtList,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_worldboss.WorldBossHurtCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var bossId = self.moduleParam.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            fec.getHurtRankList(function (data) {
                self.hurt_data = data;
                self.refreshList("list_items");
            }, self);
            self.label_my_hurt.text = mo.STR.format("输出伤害:%s", utils.formatByWan(fec.getMyHurt()));
            self.label_my_index.text = "我的排名:" + fec.getMyRank();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p._data_list_items = function () {
            var self = this;
            return self.hurt_data;
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return WorldBossHurtList;
    })(mo.gui.Dlg);
    g_worldboss.WorldBossHurtList = WorldBossHurtList;
    egret.registerClass(WorldBossHurtList,"g_worldboss.WorldBossHurtList");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = WorldBossHurtList;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_worldboss || (g_worldboss = {}));

/**
 * Created by Administrator on 2015/12/28.
 */
var g_worldboss;
(function (g_worldboss) {
    var WBossCall = (function (_super) {
        __extends(WBossCall, _super);
        function WBossCall() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WBossCall,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            //进入战斗后要及时关闭自己
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.px_hp.labelFunction = self.barLabelFunction;
            self.setData(self.moduleParam);
        };
        p.barLabelFunction = function (value, maximum) {
            return mo.STR.format("%s/%s", utils.formatByWan(value), utils.formatByWan(maximum));
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var bossId = self.data.bossId;
            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            //是否已击杀
            var killed = stats == gd.BossFightCtrl.BOSS_STATUS.cd;
            if (killed) {
                bossId = gd.bossWorldCtrl.getDeathBossId(bossId);
            }
            //节日显示
            var holidayImgSrc = {
                0: ["panel_ditus"],
                1: ["panel_gboss_huodong_1"]
            };
            var c_boss = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
            //名字和图像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.img_boss_bg.source = "panel_ditus";
            self.label_name.text = "(" + monsterInfo[gc.t_monster_level] + "级) " + monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath(c_boss[gc.c_bossWorld_displayId]);
            self.px_hp.maximum = monsterInfo[gc.t_monster_maxHp];
            self.px_hp.setValue(monsterInfo[gc.t_monster_maxHp]);
            //设置挑战时间
            var starTime = gd.bossWorldCtrl.getOpenStartTime(bossId);
            var endTime = gd.bossWorldCtrl.getOpenEndTime(bossId);
            self.label_challenge_time.visible = true;
            self.label_challenge_time.text = mo.STR.format("挑战时间: %s-%s", starTime.toFormat("HH24:MI"), endTime.toFormat("HH24:MI"));
            var helpInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 58);
            self.label_desc.text = helpInfo[gc.c_help_helpText];
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 54 }).show();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_show_rewards = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.wBossReward, self.moduleParam);
        };
        p._tap_btn_status = function () {
            var self = this;
            var bossId = self.data.bossId;
            var fec = gd.bossFightCtrl.getEntity(bossId);
            fec.getResultData(function (data) {
                g_worldboss.GuildBossGrand.create().setData({ result: data, isGuild: false }).show();
            }, self);
        };
        return WBossCall;
    })(mo.gui.Dlg);
    g_worldboss.WBossCall = WBossCall;
    egret.registerClass(WBossCall,"g_worldboss.WBossCall");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = WBossCall;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            var self = this;
            var bossId = moduleParam.bossId;
            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            if (stats == BOSS_STATUS.fighting) {
                var fec = gd.bossFightCtrl.getEntity(bossId);
                if (!fec.getData()) {
                    fec.enter(function () {
                        cb();
                    }, self);
                }
                else {
                    cb();
                }
            }
            else {
                cb();
            }
        });
    });
})(g_worldboss || (g_worldboss = {}));

