/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_arena;
(function (g_arena) {
    /**
     *
     * @author
     *
     */
    var Arena = (function (_super) {
        __extends(Arena, _super);
        function Arena() {
            _super.apply(this, arguments);
            this.pkUserDatas = [];
        }
        var d = __define,c=Arena,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_arena.ArenaItem;
            self.registerClassByKey(gd.ArenaCtrl, gc.dsConsts.ArenaEntity.reNumData.toString(), self._updatePkNum);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.prestige.toString(), self.updataJf);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.label_myRank.text = gd.arenaCtrl.getRank();
            self._updatePkNum();
            self.label_jf.text = gd.userCtrl.getPrestige();
            self.setCDTime(gd.arenaCtrl.getCDSeconds());
            gd.arenaCtrl.getRefreshRemainTime(function (data) {
                //self.setCDTime2(data);
            });
            gd.arenaCtrl.getFightUserList(function (data) {
                self.pkUserDatas = data;
                self.refreshList("list_items");
            }, self);
            self._secondTimerId = egret.setInterval(self.onSecond, this, 1000);
            self.onSecond();
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
            if (self.timeTrigger2) {
                tm.timer.remove(self.timeTrigger2);
                self.timeTrigger2 = null;
            }
            egret.clearInterval(self._secondTimerId);
        };
        p.onSecond = function () {
            var self = this;
            var leftTime = self.getLeftTime();
            self.label_timeChange.visible = leftTime > 0;
            self.label_timeChange.text = mo.getTimeStr(leftTime * 1000);
        };
        p.getLeftTime = function () {
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.arenaCfg);
            var reNumData = gd.arenaCtrl.get(gc.dsConsts.ArenaEntity.reNumData);
            var lastResetTime = reNumData[gc.c_prop.arenaDataKey.lastResetTime];
            var leftTime = 0;
            if (lastResetTime) {
                var gameCds = c_game[6] || 999999;
                var nowTime = Date.newDate();
                var cds = (nowTime.getTime() - Date.newDate(lastResetTime).getTime()) / 1000 >> 0;
                leftTime = gameCds - cds;
            }
            return leftTime;
        };
        p.updataJf = function () {
            var self = this;
            self.label_jf.text = gd.userCtrl.getPrestige();
        };
        p._updatePkNum = function () {
            var self = this;
            self.label_count.text = mo.STR.format("%s/%s", gd.arenaCtrl.getRePKNum(), 10);
        };
        p._data_list_items = function () {
            var self = this;
            return self.pkUserDatas;
        };
        p._tap_btn_rank = function () {
            var self = this;
            gd.arenaCtrl.getRankList(function (data) {
                g_arena.ArenaRank.create().setData({ rankData: data }).show();
            }, self);
        };
        p._tap_btn_change = function () {
            var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.arenaCfg);
            var leftTime = self.getLeftTime();
            if (leftTime > 0) {
                mo.showMsg(gc.id_c_msgCode.reGetMatch, c_game[7], function () {
                    gd.arenaCtrl.resetArenaFightRanks(function () {
                        gd.arenaCtrl.getFightUserList(function (data) {
                            self.pkUserDatas = data;
                            self.refreshList("list_items");
                        }, self);
                    }, self);
                });
            }
            else {
                gd.arenaCtrl.resetArenaFightRanks(function () {
                    gd.arenaCtrl.getFightUserList(function (data) {
                        self.pkUserDatas = data;
                        self.refreshList("list_items");
                    }, self);
                }, self);
            }
        };
        p._tap_btn_refresh = function () {
            var self = this;
            gd.arenaCtrl.refreshCD(function () {
                if (self.timeTrigger) {
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                self.resetCdTimeView(0);
            }, self);
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
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.btn_refresh.visible = true;
                self.label_time.text = mo.STR.format("下次挑战 %s", mo.getTimeStr(leftMillisecond));
            }
            else {
                self.btn_refresh.visible = false;
                //if(gd.arenaCtrl.getRePKNum()>0)
                self.label_time.text = "可挑战";
            }
        };
        p.setCDTime2 = function (second) {
            var self = this;
            if (second > 0) {
                if (self.timeTrigger) {
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger2 = null;
                }
                var nextCdTime = Date.newDate(Date.now() + second * 1000);
                var timeTrigger2 = self.timeTrigger2 = new tm.Trigger(nextCdTime);
                timeTrigger2.on(tm.Trigger.ON_SECOND, self.timeSec2, self);
                timeTrigger2.on(tm.Trigger.ON_END, self.timeOut2, self);
                tm.timer.add(timeTrigger2);
            }
            else {
                self.nexttime(0);
            }
        };
        p.timeSec2 = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.now();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.nexttime(leftMillisecond);
        };
        p.timeOut2 = function (type, beginTime, endTime) {
            var self = this;
            self.nexttime(0);
        };
        p.nexttime = function (second) {
            var self = this;
            if (second > 0) {
                self.label_next_time.text = "竞技场下次重置时间：" + mo.getTimeStr(second, true);
            }
            else {
                self.label_next_time.text = "正在重置！";
            }
        };
        p._tap_btn_log = function () {
            var self = this;
            gd.arenaCtrl.getRecordList(function (data) {
                g_arena.ArenaLog.create().setData({ logs: data }).show();
            }, self);
        };
        p._tap_btn_buy = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.arenaShop);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 5 }).show();
        };
        return Arena;
    })(mo.gui.Dlg);
    g_arena.Arena = Arena;
    egret.registerClass(Arena,"g_arena.Arena");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Arena;
        moduleCfgItem.sysId = gc.id_c_open.arena; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.arenaCtrl.getInfo(function (data) {
                cb();
            }, this);
        });
    });
})(g_arena || (g_arena = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_arena;
(function (g_arena) {
    var ArenaItem = (function (_super) {
        __extends(ArenaItem, _super);
        function ArenaItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var rank;
            var rankStrs = ["1st", "2nd", "3rd"];
            self.label_name.text = data[gc.dsConsts.PKUserData.name];
            self.label_lv.text = mo.STR.format("Lv.%s", data[gc.dsConsts.PKUserData.lvl]);
            rank = data[gc.dsConsts.PKUserData.rank];
            if (rank <= 3) {
                self.ico_rank.source = "ico_arena_" + rankStrs[rank - 1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }
            else {
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }
            if (rank > gd.arenaCtrl.getRank()) {
                self.label_name.textColor = 0x6EC361;
            }
            else {
                self.label_name.textColor = 0xCCCDB1;
            }
            self.label_combat.text = mo.STR.format("战斗力：%s", data[gc.dsConsts.PKUserData.combat]);
            self.ico_head.setData({ icoId: data[gc.dsConsts.PKUserData.iconId], vip: data[gc.dsConsts.PKUserData.vip] });
            var guildName = data[gc.dsConsts.PKUserData.guildName] ? data[gc.dsConsts.PKUserData.guildName] : "";
            self.label_guild.text = guildName == "" ? "" : mo.STR.format("[%s]", guildName);
        };
        p._tap_btn_fight = function () {
            var self = this;
            gd.arenaCtrl.fightStart(self.data[gc.dsConsts.PKUserData.rank], function (pkTargets) {
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, pkTargets, gc.c_prop.fightTypeKey.arena);
            }, self);
        };
        p._tap_ico_head = function () {
            var self = this;
            var data = self.data;
            var userId = data[gc.dsConsts.PKUserData.userId];
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, { userId: userId });
        };
        return ArenaItem;
    })(mo.gui.ItemRenderer);
    g_arena.ArenaItem = ArenaItem;
    egret.registerClass(ArenaItem,"g_arena.ArenaItem");
})(g_arena || (g_arena = {}));

/**
 * Created by Administrator on 2015/10/6.
 */
var g_arena;
(function (g_arena) {
    var ArenaLog = (function (_super) {
        __extends(ArenaLog, _super);
        function ArenaLog() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaLog,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
        };
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_arena.ArenaLogItem;
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.logs;
        };
        return ArenaLog;
    })(mo.gui.Dlg);
    g_arena.ArenaLog = ArenaLog;
    egret.registerClass(ArenaLog,"g_arena.ArenaLog");
})(g_arena || (g_arena = {}));

/**
 * Created by Administrator on 2015/10/6.
 */
var g_arena;
(function (g_arena) {
    var ArenaLogItem = (function (_super) {
        __extends(ArenaLogItem, _super);
        function ArenaLogItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaLogItem,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var isDefence = data[gc.dsConsts.ArenaRecordEntity.userId] == data[gc.dsConsts.ArenaRecordEntity.enemyId]; //被攻击
            var isWin = data[gc.dsConsts.ArenaRecordEntity.isWin];
            var str;
            var timeStr = mo.timeFormat(data[gc.dsConsts.ArenaRecordEntity.fightTime]);
            var enemyName = data[gc.dsConsts.ArenaRecordEntity.enemyName];
            var rank = data[gc.dsConsts.ArenaRecordEntity.fightData].curRank;
            var changeRank = data[gc.dsConsts.ArenaRecordEntity.fightData].changeRank;
            if (isDefence) {
                if (isWin) {
                    str = "[ubb color=0xffaa28]%s[/ubb] [ubb color=0xff1a00]%s[/ubb]向你发起挑战，你胜利了，你的排名不变";
                    self.label_log.text = mo.STR.format(str, timeStr, enemyName);
                }
                else {
                    if (changeRank != 0) {
                        str = "[ubb color=0xffaa28]%s[/ubb] [ubb color=0xff1a00]%s[/ubb]向你发起挑战，你失败了，你的排名下降至第%s名";
                        self.label_log.text = mo.STR.format(str, timeStr, enemyName, rank);
                    }
                    else {
                        str = "[ubb color=0xffaa28]%s[/ubb] [ubb color=0xff1a00]%s[/ubb]向你发起挑战，你失败了，你的排名不变";
                        self.label_log.text = mo.STR.format(str, timeStr, enemyName);
                    }
                }
            }
            else {
                if (isWin) {
                    if (changeRank != 0) {
                        str = "[ubb color=0xffaa28]%s[/ubb] 你向[ubb color=0xff1a00]%s[/ubb]发起挑战，你胜利了，你的排名上升至第%s名";
                        self.label_log.text = mo.STR.format(str, timeStr, enemyName, rank);
                    }
                    else {
                        str = "[ubb color=0xffaa28]%s[/ubb] 你向[ubb color=0xff1a00]%s[/ubb]发起挑战，你胜利了，你的排名不变";
                        self.label_log.text = mo.STR.format(str, timeStr, enemyName);
                    }
                }
                else {
                    str = "[ubb color=0xffaa28]%s[/ubb] 你向[ubb color=0xff1a00]%s[/ubb]发起挑战，你失败了，你的排名不变";
                    self.label_log.text = mo.STR.format(str, timeStr, enemyName);
                }
            }
            ;
        };
        return ArenaLogItem;
    })(mo.gui.ItemRenderer);
    g_arena.ArenaLogItem = ArenaLogItem;
    egret.registerClass(ArenaLogItem,"g_arena.ArenaLogItem");
})(g_arena || (g_arena = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_arena;
(function (g_arena) {
    var ArenaRank = (function (_super) {
        __extends(ArenaRank, _super);
        function ArenaRank() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaRank,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
        };
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_rank = g_arena.ArenaRankItem;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var myRank = gd.arenaCtrl.getRank();
            var awards = gd.arenaCtrl.getRankReward(myRank);
            self.label_myRank.text = myRank.toString();
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, awards[0]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.honor, awards[2]);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p._data_list_rank = function () {
            var self = this;
            return self.data.rankData;
        };
        p._tap_btn_info = function () {
            var self = this;
            g_arena.ArenaRankReward.create().show();
        };
        return ArenaRank;
    })(g_base.CloseInfoDlg);
    g_arena.ArenaRank = ArenaRank;
    egret.registerClass(ArenaRank,"g_arena.ArenaRank");
})(g_arena || (g_arena = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_arena;
(function (g_arena) {
    var ArenaRankItem = (function (_super) {
        __extends(ArenaRankItem, _super);
        function ArenaRankItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaRankItem,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.DS_DATA_KEY = gc.dsConsts.Rank;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var KEY = self.DS_DATA_KEY;
            var rank = data[KEY.rank];
            var rankStrs = ["1st", "2nd", "3rd"];
            self.label_name.text = data[KEY.name];
            self.label_lvl.text = data[KEY.lvl];
            //设置对比项目
            self.setRankDesc();
            if (rank <= 3) {
                self.ico_rank.source = "ico_arena_" + rankStrs[rank - 1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }
            else {
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }
            self.ico_head.setData({ icoId: data[KEY.iconId], vip: data[KEY.vip] });
            //设置奖励
            self.seteRankReward(rank);
        };
        p.seteRankReward = function (rank) {
            var self = this;
            var awards = gd.arenaCtrl.getRankReward(rank);
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, awards[0]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.honor, awards[2]);
        };
        p.setRankDesc = function () {
            var self = this;
            var data = self.data;
            self.label_combat.text = data[self.DS_DATA_KEY.combat];
        };
        return ArenaRankItem;
    })(mo.gui.ItemRenderer);
    g_arena.ArenaRankItem = ArenaRankItem;
    egret.registerClass(ArenaRankItem,"g_arena.ArenaRankItem");
})(g_arena || (g_arena = {}));

/**
 * Created by Administrator on 2015/10/23.
 */
var g_arena;
(function (g_arena) {
    var ArenaRankReward = (function (_super) {
        __extends(ArenaRankReward, _super);
        function ArenaRankReward() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaRankReward,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_desc.text = "排名奖励每日0点结算，结算后1小时内通过邮件发放。 ";
        };
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_arena.ArenaRankRewardCell;
        };
        p._data_list_items = function () {
            var self = this;
            var arenaInfos = mo.getJSONWithFileName(gc.cfg_c_arenaRankReward);
            var arenaInfoAry = [];
            for (var key in arenaInfos) {
                arenaInfoAry.push(arenaInfos[key]);
            }
            return arenaInfoAry;
        };
        return ArenaRankReward;
    })(mo.gui.Dlg);
    g_arena.ArenaRankReward = ArenaRankReward;
    egret.registerClass(ArenaRankReward,"g_arena.ArenaRankReward");
})(g_arena || (g_arena = {}));

/**
 * Created by Administrator on 2015/10/23.
 */
var g_arena;
(function (g_arena) {
    var ArenaRankRewardCell = (function (_super) {
        __extends(ArenaRankRewardCell, _super);
        function ArenaRankRewardCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ArenaRankRewardCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (self.data[gc.c_arenaRankReward_id] == null) {
                return;
            }
            if (self.data[gc.c_arenaRankReward_id] > 8) {
                self.label_rank.size = 16;
            }
            self.label_rank.text = self.data[gc.c_arenaRankReward_name];
            var rewardInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_reward, self.data[gc.c_arenaRankReward_rewardId]);
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, rewardInfo[gc.c_reward_gold]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.honor, rewardInfo[gc.c_reward_prestige]);
        };
        return ArenaRankRewardCell;
    })(mo.gui.ItemRenderer);
    g_arena.ArenaRankRewardCell = ArenaRankRewardCell;
    egret.registerClass(ArenaRankRewardCell,"g_arena.ArenaRankRewardCell");
})(g_arena || (g_arena = {}));

