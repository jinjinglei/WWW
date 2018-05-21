/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_defarena;
(function (g_defarena) {
    var DefArena = (function (_super) {
        __extends(DefArena, _super);
        function DefArena() {
            _super.apply(this, arguments);
        }
        var d = __define,c=DefArena,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            mo.closeEmitter.on("DefarenaWinner", function () {
                if (self._itemDetail) {
                    self._itemDetail.close();
                    self._itemDetail = null;
                }
                process.nextTick(function () {
                    self.close();
                });
            }, self);
            self.registerClassByKey(gd.ChallengeCupCtrl, gd.ChallengeCupCtrl.ON_ACT_END, function (data) {
                self.setData(data);
            });
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
            var reward = gd.challengeCupCtrl.getRward();
            self.item_reward.setData({ itemId: reward[0], count: reward[1] });
            self.item_reward.onClick(function () {
                g_defarena.DefArenaRankReward.create().show();
            });
            uiHelper.setResGrp(self.grp_res, gc.c_prop.spItemIdKey.diamond, gd.challengeCupCtrl.getChallegeCost());
            self.label_ruleTime.text = gd.challengeCupCtrl.getDefTime() / 60;
            if (self.moduleParam) {
                self.setData(self.moduleParam.info);
            }
        };
        p.dataChanged = function () {
            var self = this;
            _super.prototype.dataChanged.call(this);
            self._removeTrigger();
            var info = self.data;
            var KEY = gc.dsConsts.ChallengeCupData;
            var hasAdmin = info[KEY.userId] && info[KEY.userId] != 0;
            self.grp_hasAdmin.visible = hasAdmin;
            self.grp_noAdmin.visible = !hasAdmin;
            //活动时间倒计时
            self.setActCDTime(info[KEY.activityLeftTime]);
            if (hasAdmin) {
                uiHelper.setVipGrp(self.grp_userInfo, info[KEY.nickName], info[KEY.lvl], info[KEY.vip]);
                self.label_guild.text = info[KEY.guildName];
                var avatarDatas = info[KEY.HeroDisplay];
                self.ico_avatar.setData({ clothesID: avatarDatas[0], weaponID: avatarDatas[1], wingID: avatarDatas[2], sex: avatarDatas[3], isKing: avatarDatas[4] });
                self.ico_avatar.setData({ clothesID: avatarDatas[0], weaponID: avatarDatas[1], wingID: avatarDatas[2], sex: avatarDatas[3] });
                self.label_fighting.visible = info[KEY.challengerUserId] != null;
                self.setKingCDTime(info[KEY.leftTime]);
                if (gd.userCtrl.getId() == info[KEY.userId]) {
                    self.grp_chlg.visible = false;
                }
                else {
                    self.grp_chlg.visible = true;
                    var isSelf = gd.userCtrl.getId() == info[KEY.challengerUserId];
                    self.grp_fightCD.visible = !isSelf;
                    if (!isSelf)
                        self.setChlgCDTime(info[KEY.nextChallengeTime]);
                }
            }
        };
        p._updateKingProgress = function (seconds) {
            var self = this;
            var info = self.data;
            var KEY = gc.dsConsts.ChallengeCupData;
            self.label_leftTime.text = mo.getTimeStr(seconds * 1000, true);
            //守擂时间进度
            var timeRequired = gd.challengeCupCtrl.getDefTime();
            self.bar_totalTime.value = (timeRequired - seconds) / timeRequired * 100;
        };
        p.setActCDTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.actTrigger) {
                    tm.timer.remove(self.actTrigger);
                    self.actTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.actTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_FIRST, self.timeSec, self);
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
            self.label_actCD.text = mo.STR.format(mo.getTimeStr(leftMillisecond, true));
        };
        p.setChlgCDTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.chlgTrigger) {
                    tm.timer.remove(self.chlgTrigger);
                    self.chlgTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.chlgTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_FIRST, self.timeSec2, self);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec2, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut2, self);
                tm.timer.add(timeTrigger);
            }
            else {
                self.resetChlgCdTimeView(0);
            }
        };
        p.timeSec2 = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetChlgCdTimeView(leftMillisecond);
        };
        p.timeOut2 = function (type, beginTime, endTime) {
            var self = this;
            self.resetChlgCdTimeView(0);
        };
        p.resetChlgCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                self.btn_challenge.enable = false;
                self.grp_fightCD.visible = true;
                self.label_ftCD.text = mo.STR.format(mo.getTimeStr(leftMillisecond));
            }
            else {
                self.btn_challenge.enable = true;
                self.grp_fightCD.visible = false;
            }
        };
        p.setKingCDTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.kingTrigger) {
                    tm.timer.remove(self.kingTrigger);
                    self.kingTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.kingTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_FIRST, self.timeSec3, self);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec3, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut3, self);
                tm.timer.add(timeTrigger);
            }
            else {
                self._updateKingProgress(0);
            }
        };
        p.timeSec3 = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self._updateKingProgress(leftMillisecond / 1000);
        };
        p.timeOut3 = function (type, beginTime, endTime) {
            var self = this;
            self._updateKingProgress(0);
        };
        //---霸主CD 结束
        p._tap_btn_rank = function () {
            var self = this;
            gd.challengeCupCtrl.getRank(function (data) {
                g_defarena.DefArenaRank.create().setData({ rankData: data }).show();
            }, self);
        };
        p._tap_btn_tq = function () {
            g_defarena.DefArenaGain.create().show();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 20, param1: gd.challengeCupCtrl.getDefTime() / 60 }).show();
        };
        p._tap_btn_challenge = function () {
            //掉挑战接口
            var self = this;
            var info = self.data;
            var KEY = gc.dsConsts.ChallengeCupData;
            var isSelf = gd.userCtrl.getId() == info[KEY.challengerUserId];
            if (info[KEY.challengerUserId] && isSelf)
                return mo.showMsg("挑战中...");
            var nextChallengeTime = self.data[gc.dsConsts.ChallengeCupData.nextChallengeTime];
            if (self.chlgTrigger && (self.chlgTrigger.msPassed / 1000 + 1) < nextChallengeTime) {
                return mo.showMsg(gc.id_c_msgCode.challengeBossCd);
            }
            gd.challengeCupCtrl.startFight(function (errCode) {
                if (errCode) {
                    if (errCode == gc.id_c_msgCode.userBeInFignting
                        || errCode == gc.id_c_msgCode.userChangeIfGoOn) {
                        mo.showMsg(errCode, function () {
                            self.reset();
                        });
                    }
                    if (errCode == gc.id_c_msgCode.eventEnded) {
                        mo.showMsg(errCode, function () {
                            //显示活动结束界面
                            mo.moduleMgr.runModule(g_consts.moduleId.defarenaWinner);
                        }, self);
                    }
                    return;
                }
                self.close();
            }, self);
        };
        p._tap_btn_up = function () {
            console.log("登上擂台");
            var self = this;
            gd.challengeCupCtrl.toBeChampoin(function (data) {
                self.setData(data);
            }, self);
        };
        p.click_btn_close = function () {
            var self = this;
            //主动关闭需要移除计时器
            gd.challengeCupCtrl.removeTrigger();
            self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
        };
        p.reset = function () {
            var self = this;
            gd.challengeCupCtrl.getInfo(function (data) {
                self.setData(data);
            }, self);
        };
        p._removeTrigger = function () {
            var self = this;
            if (self.chlgTrigger) {
                tm.timer.remove(self.chlgTrigger);
                self.chlgTrigger = null;
            }
            if (self.actTrigger) {
                tm.timer.remove(self.actTrigger);
                self.actTrigger = null;
            }
            if (self.kingTrigger) {
                tm.timer.remove(self.kingTrigger);
                self.kingTrigger = null;
            }
        };
        p.dtor = function () {
            var self = this;
            _super.prototype.dtor.call(this);
            self._removeTrigger();
        };
        return DefArena;
    })(mo.gui.Dlg);
    g_defarena.DefArena = DefArena;
    egret.registerClass(DefArena,"g_defarena.DefArena");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = DefArena;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.challengeCupCtrl.getInfo(function (data) {
                moduleParam.info = data;
                cb();
            }, this);
        });
    });
})(g_defarena || (g_defarena = {}));

/**
 * Created by lihex on 1/12/16.
 */
var g_defarena;
(function (g_defarena) {
    var DefarenaWinner = (function (_super) {
        __extends(DefarenaWinner, _super);
        function DefarenaWinner() {
            _super.apply(this, arguments);
        }
        var d = __define,c=DefarenaWinner,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            if (self.moduleParam) {
                self.setData(self.moduleParam.info);
            }
            self.label_openLvl.text = gd.challengeCupCtrl.getOpenLvl();
        };
        p.dataChanged = function () {
            var self = this;
            _super.prototype.dataChanged.call(this);
            var KEY = gc.dsConsts.ChallengeCupData;
            var info = self.data;
            var hasAdmin = (info[KEY.userId] && info[KEY.userId] != 0);
            self.img_title.source = hasAdmin ? "tit_txt_benjiebazhu" : "tit_txt_wangchenbazhu";
            if (hasAdmin) {
                self.label_guild.text = info[KEY.guildName];
                var avatarDatas = info[KEY.HeroDisplay];
                self.ico_avatar.setData({ clothesID: avatarDatas[0], weaponID: avatarDatas[1], wingID: avatarDatas[2], sex: avatarDatas[3], isKing: avatarDatas[4] });
                self.label_combat.text = info[KEY.combat];
                uiHelper.setVipGrp(self.grp_userInfo, info[KEY.nickName], info[KEY.lvl], info[KEY.vip]);
            }
            var startTime = gd.challengeCupCtrl.nextOpenTime;
            self.label_nextOpenTime.text = startTime.toFormat("MM月DD日HH24:MI");
        };
        p._tap_btn_rank = function () {
            var self = this;
            gd.challengeCupCtrl.getRank(function (data) {
                g_defarena.DefArenaRank.create().setData({ rankData: data }).show();
            }, self);
        };
        p._tap_btn_ok = function () {
            var self = this;
            self.close();
            process.nextTick(function () {
                mo.moduleMgr.runModule(g_consts.moduleId.home, { subModuleId: 6 });
            });
        };
        p._tap_ico_avatar = function () {
            var self = this;
            var KEY = gc.dsConsts.ChallengeCupData;
            var info = self.data;
            var hasAdmin = (info[KEY.userId] && info[KEY.userId] != 0);
            if (hasAdmin) {
                mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, { userId: info[KEY.userId] });
            }
        };
        p.getCurrentSkinState = function () {
            var self = this;
            var info = self.moduleParam.info;
            var KEY = gc.dsConsts.ChallengeCupData;
            var hasAdmin = (info[KEY.userId] && info[KEY.userId] != 0);
            return (hasAdmin) ? "hasAdmin" : "noAdmin";
        };
        return DefarenaWinner;
    })(mo.gui.Dlg);
    g_defarena.DefarenaWinner = DefarenaWinner;
    egret.registerClass(DefarenaWinner,"g_defarena.DefarenaWinner");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = DefarenaWinner;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.challengeCupCtrl.getInfo(function (data) {
                moduleParam.info = data;
                cb();
            }, this);
        });
    });
})(g_defarena || (g_defarena = {}));

/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_defarena;
(function (g_defarena) {
    var DefArenaGain = (function (_super) {
        __extends(DefArenaGain, _super);
        function DefArenaGain() {
            _super.apply(this, arguments);
        }
        var d = __define,c=DefArenaGain,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            mo.closeEmitter.on("DefarenaWinner", self.close, self);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 21);
            self.label_desc.text = info[gc.c_help_helpText];
            var itemId = gd.challengeCupCtrl.getFirstReward();
            var bdc = gd.BagDataCtrl.create(itemId, null);
            var strTemp = "[ubb color=0xEBC661]%s:[/ubb] [ubb color=0x00DD3D]+%s%[/ubb][/br]";
            var str = "";
            for (var k in gc.c_prop.equipProp) {
                str += mo.STR.format(strTemp, gc.c_prop.equipProp[k], gd.kingCtrl.getCloakProAdd() / 100);
            }
            self.label_props.text = str;
            //名字
            self.label_name.text = bdc.name;
            self.label_name.textColor = uiHelper.getColorByQuality(bdc.quality);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 5 }).show();
        };
        return DefArenaGain;
    })(mo.gui.Dlg);
    g_defarena.DefArenaGain = DefArenaGain;
    egret.registerClass(DefArenaGain,"g_defarena.DefArenaGain");
})(g_defarena || (g_defarena = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_defarena;
(function (g_defarena) {
    var DefArenaRankItem = (function (_super) {
        __extends(DefArenaRankItem, _super);
        function DefArenaRankItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=DefArenaRankItem,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.DS_DATA_KEY = gc.dsConsts.ChampionDurationTimeRank;
        };
        //@override
        p.seteRankReward = function (rank) {
            var self = this;
            var awards = gd.challengeCupCtrl.getRankReward(rank);
            uiHelper.setResGrp(self.grp_res0, awards[0][0], awards[0][1]);
            uiHelper.setResGrp(self.grp_res1, awards[1][0], awards[1][1]);
            if (awards[2]) {
                uiHelper.setResGrp(self.grp_res2, awards[2][0], awards[2][1]);
                self.grp_res2.visible = true;
            }
            else {
                self.grp_res2.visible = false;
            }
        };
        //@override
        p.setRankDesc = function () {
            var self = this;
            var data = self.data;
            var KEY = self.DS_DATA_KEY;
            self.label_title.text = "守擂最长时间";
            self.label_combat.text = mo.getTimeStr(data[KEY.durationTime] * 1000, true);
        };
        return DefArenaRankItem;
    })(g_arena.ArenaRankItem);
    g_defarena.DefArenaRankItem = DefArenaRankItem;
    egret.registerClass(DefArenaRankItem,"g_defarena.DefArenaRankItem");
})(g_defarena || (g_defarena = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_defarena;
(function (g_defarena) {
    var DefArenaRank = (function (_super) {
        __extends(DefArenaRank, _super);
        function DefArenaRank() {
            _super.apply(this, arguments);
        }
        var d = __define,c=DefArenaRank,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_rank = g_defarena.DefArenaRankItem;
            mo.closeEmitter.on("DefarenaWinner", self.close, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var myRank = gd.challengeCupCtrl.getMyRank();
            var hasRank = myRank != null;
            self.label_noRank.visible = !hasRank;
            self.label_noFight.visible = !hasRank;
            self.label_myRank.visible = hasRank;
            self.label_myTime.visible = hasRank;
            self.grp_hasRank.visible = hasRank;
            if (hasRank) {
                self.label_myRank.text = myRank[gc.dsConsts.ChampionDurationTimeRank.rank];
                self.label_myTime.text = mo.getTimeStr(myRank[gc.dsConsts.ChampionDurationTimeRank.durationTime] * 1000, true);
                var awards = gd.challengeCupCtrl.getRankReward(myRank[gc.dsConsts.ChampionDurationTimeRank.rank]);
                uiHelper.setResGrp(self.grp_res0, awards[0][0], awards[0][1]);
                uiHelper.setResGrp(self.grp_res1, awards[1][0], awards[1][1]);
                if (awards[2]) {
                    uiHelper.setResGrp(self.grp_res2, awards[2][0], awards[2][1]);
                    self.grp_res2.visible = true;
                }
                else {
                    self.grp_res2.visible = false;
                }
            }
        };
        p._data_list_rank = function () {
            var self = this;
            return self.data.rankData;
        };
        return DefArenaRank;
    })(g_base.CloseInfoDlg);
    g_defarena.DefArenaRank = DefArenaRank;
    egret.registerClass(DefArenaRank,"g_defarena.DefArenaRank");
})(g_defarena || (g_defarena = {}));

/**
 * Created by Administrator on 2015/10/23.
 */
var g_defarena;
(function (g_defarena) {
    var DefArenaRankRewardCell = (function (_super) {
        __extends(DefArenaRankRewardCell, _super);
        function DefArenaRankRewardCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=DefArenaRankRewardCell,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (self.data[gc.c_challengeCupRankReward_id] == null) {
                return;
            }
            var rank = self.data[gc.c_challengeCupRankReward_id];
            var rankStrs = ["1st", "2nd", "3rd"];
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
            if (self.data[gc.c_challengeCupRankReward_id] > 8) {
                self.label_rank.size = 16;
            }
            else {
                self.label_rank.size = 20;
            }
            self.label_rank.text = self.data[gc.c_challengeCupRankReward_name];
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, self.data[gc.c_challengeCupRankReward_gold]);
            var itemInfo = self.data[gc.c_challengeCupRankReward_reward];
            uiHelper.setResGrp(self.grp_res1, itemInfo[0][0], itemInfo[0][1]);
            if (itemInfo[1]) {
                uiHelper.setResGrp(self.grp_res2, itemInfo[1][0], itemInfo[1][1]);
                self.grp_res2.visible = true;
            }
            else {
                self.grp_res2.visible = false;
            }
        };
        return DefArenaRankRewardCell;
    })(mo.gui.ItemRenderer);
    g_defarena.DefArenaRankRewardCell = DefArenaRankRewardCell;
    egret.registerClass(DefArenaRankRewardCell,"g_defarena.DefArenaRankRewardCell");
})(g_defarena || (g_defarena = {}));

/**
 * Created by Administrator on 2015/10/23.
 */
var g_defarena;
(function (g_defarena) {
    var DefArenaRankReward = (function (_super) {
        __extends(DefArenaRankReward, _super);
        function DefArenaRankReward() {
            _super.apply(this, arguments);
        }
        var d = __define,c=DefArenaRankReward,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_defarena.DefArenaRankRewardCell;
            mo.closeEmitter.on("DefarenaWinner", self.close, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var reward = gd.challengeCupCtrl.getRward();
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, reward[0]);
            self.item_reward.setData({ itemId: reward[0], count: reward[1] });
            self.label_desc.text = itemInfo[gc.t_item_note];
        };
        p._data_list_items = function () {
            var self = this;
            var arenaInfos = mo.getJSONWithFileName(gc.cfg_c_challengeCupRankReward);
            var arenaInfoAry = [];
            for (var key in arenaInfos) {
                arenaInfoAry.push(arenaInfos[key]);
            }
            return arenaInfoAry;
        };
        return DefArenaRankReward;
    })(mo.gui.Dlg);
    g_defarena.DefArenaRankReward = DefArenaRankReward;
    egret.registerClass(DefArenaRankReward,"g_defarena.DefArenaRankReward");
})(g_defarena || (g_defarena = {}));

