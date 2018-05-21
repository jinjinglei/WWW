/**
 * Created by Administrator on 2015/9/24.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarRankGuildCell = (function (_super) {
        __extends(GuildWarRankGuildCell, _super);
        function GuildWarRankGuildCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarRankGuildCell,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //[gc.dsConst.GuildWarRank]
            var rank = data[gc.dsConsts.GuildWarRank.rank];
            var rankStrs = ["1st", "2nd", "3rd"];
            self.label_killValue.text = data[gc.dsConsts.GuildWarRank.points].toString();
            var guildName = data[gc.dsConsts.GuildWarRank.guildName] ? data[gc.dsConsts.GuildWarRank.guildName] : "";
            self.label_guild.text = guildName == "" ? "" : mo.STR.format("[%s]", guildName);
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
            var groupId = self.delegate.data.groupId;
            var rewardInfos = mo.getJSONWithFileName(gc.cfg_c_guildWarReward);
            var rewardInfo = rewardInfos[rank];
            var rewards;
            if (!rewardInfo) {
                var keys = Object.keys(rewardInfos);
                rewardInfo = rewardInfos[keys[keys.length - 1]];
            }
            if (groupId == gc.c_prop.guildGroupKey.diamond) {
                rewards = rewardInfo[gc.c_guildWarReward_diamond];
            }
            else if (groupId == gc.c_prop.guildGroupKey.wGold) {
                rewards = rewardInfo[gc.c_guildWarReward_wgold];
            }
            else if (groupId == gc.c_prop.guildGroupKey.hGold) {
                rewards = rewardInfo[gc.c_guildWarReward_hgold];
            }
            else if (groupId == gc.c_prop.guildGroupKey.silver) {
                rewards = rewardInfo[gc.c_guildWarReward_silver];
            }
            else if (groupId == gc.c_prop.guildGroupKey.copper) {
                rewards = rewardInfo[gc.c_guildWarReward_copper];
            }
            for (var i = 0; i < 4; ++i) {
                var grpRes = self["grp_res" + i];
                var item = rewards[i];
                if (item) {
                    var uiAsset = grpRes.getElementAt(0);
                    var label = grpRes.getElementAt(1);
                    grpRes.visible = true;
                    uiAsset.source = resHelper.getItemIconPath(item[0]);
                    label.text = item[1];
                }
                else {
                    grpRes.visible = false;
                }
            }
        };
        return GuildWarRankGuildCell;
    })(mo.gui.ItemRenderer);
    g_guildwar.GuildWarRankGuildCell = GuildWarRankGuildCell;
    egret.registerClass(GuildWarRankGuildCell,"g_guildwar.GuildWarRankGuildCell");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarRankGuildManagerCell = (function (_super) {
        __extends(GuildWarRankGuildManagerCell, _super);
        function GuildWarRankGuildManagerCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarRankGuildManagerCell,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //[gc.dsConst.GuildWarRank]
            var rank = data[gc.dsConsts.GuildWarUserRank.rank];
            var rankStrs = ["1st", "2nd", "3rd"];
            self.label_killValue.text = data[gc.dsConsts.GuildWarUserRank.points].toString();
            var guildName = data[gc.dsConsts.GuildWarUserRank.guildName] ? data[gc.dsConsts.GuildWarUserRank.guildName] : "";
            self.label_guild.text = guildName == "" ? "" : mo.STR.format("[%s]", guildName);
            self.ico_head.setData({ icoId: data[gc.dsConsts.GuildWarUserRank.iconId], vip: data[gc.dsConsts.GuildWarUserRank.vip] });
            self.label_name.text = data[gc.dsConsts.GuildWarUserRank.userName];
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
            var groupId = self.delegate.data.groupId;
            var rewardInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_guildWarReward, rank);
            var rewards;
            if (groupId == gc.c_prop.guildGroupKey.diamond) {
                rewards = rewardInfo[gc.c_guildWarReward_diamondSp];
            }
            else if (groupId == gc.c_prop.guildGroupKey.wGold) {
                rewards = rewardInfo[gc.c_guildWarReward_wgoldSp];
            }
            else if (groupId == gc.c_prop.guildGroupKey.hGold) {
                rewards = rewardInfo[gc.c_guildWarReward_hgoldSp];
            }
            else if (groupId == gc.c_prop.guildGroupKey.silver) {
                rewards = rewardInfo[gc.c_guildWarReward_silverSp];
            }
            else if (groupId == gc.c_prop.guildGroupKey.copper) {
                rewards = rewardInfo[gc.c_guildWarReward_copperSp];
            }
            for (var i = 0; i < 4; ++i) {
                var grpRes = self["grp_res" + i];
                var item = rewards[i];
                if (item) {
                    var uiAsset = grpRes.getElementAt(0);
                    var label = grpRes.getElementAt(1);
                    grpRes.visible = true;
                    uiAsset.source = resHelper.getItemIconPath(item[0]);
                    label.text = item[1];
                }
                else {
                    grpRes.visible = false;
                }
            }
        };
        return GuildWarRankGuildManagerCell;
    })(mo.gui.ItemRenderer);
    g_guildwar.GuildWarRankGuildManagerCell = GuildWarRankGuildManagerCell;
    egret.registerClass(GuildWarRankGuildManagerCell,"g_guildwar.GuildWarRankGuildManagerCell");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarRankPersonCell = (function (_super) {
        __extends(GuildWarRankPersonCell, _super);
        function GuildWarRankPersonCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarRankPersonCell,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //[gc.dsConst.GuildWarRank]
            var rank = data[gc.dsConsts.GuildWarUserRank.rank];
            var rankStrs = ["1st", "2nd", "3rd"];
            self.label_killValue.text = data[gc.dsConsts.GuildWarUserRank.points].toString();
            var guildName = data[gc.dsConsts.GuildWarUserRank.guildName] ? data[gc.dsConsts.GuildWarUserRank.guildName] : "";
            self.label_guild.text = guildName == "" ? "" : mo.STR.format("[%s]", guildName);
            self.ico_head.setData({ icoId: data[gc.dsConsts.GuildWarUserRank.iconId], vip: data[gc.dsConsts.GuildWarUserRank.vip] });
            self.label_name.text = data[gc.dsConsts.GuildWarUserRank.userName];
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
            var groupId = self.delegate.data.groupId;
            var rewardInfos = mo.getJSONWithFileName(gc.cfg_c_guildWarReward);
            var rewardInfo = rewardInfos[rank];
            var rewards;
            if (!rewardInfo) {
                var keys = Object.keys(rewardInfos);
                rewardInfo = rewardInfos[keys[keys.length - 1]];
            }
            if (groupId == gc.c_prop.guildGroupKey.diamond) {
                rewards = rewardInfo[gc.c_guildWarReward_diamondUser];
            }
            else if (groupId == gc.c_prop.guildGroupKey.wGold) {
                rewards = rewardInfo[gc.c_guildWarReward_wgoldUser];
            }
            else if (groupId == gc.c_prop.guildGroupKey.hGold) {
                rewards = rewardInfo[gc.c_guildWarReward_hgoldUser];
            }
            else if (groupId == gc.c_prop.guildGroupKey.silver) {
                rewards = rewardInfo[gc.c_guildWarReward_silverUser];
            }
            else if (groupId == gc.c_prop.guildGroupKey.copper) {
                rewards = rewardInfo[gc.c_guildWarReward_copperUser];
            }
            for (var i = 0; i < 4; ++i) {
                var grpRes = self["grp_res" + i];
                var item = rewards[i];
                if (item) {
                    var uiAsset = grpRes.getElementAt(0);
                    var label = grpRes.getElementAt(1);
                    grpRes.visible = true;
                    uiAsset.source = resHelper.getItemIconPath(item[0]);
                    label.text = item[1];
                }
                else {
                    grpRes.visible = false;
                }
            }
        };
        return GuildWarRankPersonCell;
    })(mo.gui.ItemRenderer);
    g_guildwar.GuildWarRankPersonCell = GuildWarRankPersonCell;
    egret.registerClass(GuildWarRankPersonCell,"g_guildwar.GuildWarRankPersonCell");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarAttackRecDlg = (function (_super) {
        __extends(GuildWarAttackRecDlg, _super);
        function GuildWarAttackRecDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarAttackRecDlg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data.recData; //[gc.dsConst.GuildWarAttackRecord]
            var str = "";
            var tempStr = "%s[ubb color=#00b150]%s[/ubb][ubb color=#7030a1][%s][/ubb][ubb color=#00b1f1]%s[/ubb]击杀了[ubb color=#00b150]%s[/ubb][ubb color=#7030a1][%s][/ubb][ubb color=#00b1f1]%s[/ubb]\n\n";
            var breakStr = "%s[ubb color=#00b150]%s[/ubb][ubb color=#7030a1][%s][/ubb][ubb color=#00b1f1]%s[/ubb] 击破了 [ubb color=#00b150]%s[/ubb][ubb color=#7030a1][%s][/ubb][ubb color=#00b1f1]%s[/ubb] 守卫的%s门\n\n";
            for (var i = data.length - 1; i >= 0; --i) {
                var rec = data[i];
                var isBreak = rec[gc.dsConsts.GuildWarAttackRecord.isBreak];
                var time = Date.newDate(rec[gc.dsConsts.GuildWarAttackRecord.time]);
                if (!isBreak) {
                    str += mo.STR.format(tempStr, time.toFormat("HH24:MI"), rec[gc.dsConsts.GuildWarAttackRecord.aServerName], rec[gc.dsConsts.GuildWarAttackRecord.aGuildName], rec[gc.dsConsts.GuildWarAttackRecord.aUserName], rec[gc.dsConsts.GuildWarAttackRecord.dServerName], rec[gc.dsConsts.GuildWarAttackRecord.dGuildName], rec[gc.dsConsts.GuildWarAttackRecord.dUserName]);
                }
                else {
                    str += mo.STR.format(breakStr, time.toFormat("HH24:MI"), rec[gc.dsConsts.GuildWarAttackRecord.aServerName], rec[gc.dsConsts.GuildWarAttackRecord.aGuildName], rec[gc.dsConsts.GuildWarAttackRecord.aUserName], rec[gc.dsConsts.GuildWarAttackRecord.dServerName], rec[gc.dsConsts.GuildWarAttackRecord.dGuildName], rec[gc.dsConsts.GuildWarAttackRecord.dUserName], gc.c_prop.guildWarDoor[rec[gc.dsConsts.GuildWarAttackRecord.door]]);
                }
            }
            str = str.substr(0, str.length - 2);
            self.label_rec.text = str;
            //process.nextTick(function(){
            //    process.nextTick(function(){
            //        process.nextTick(function(){
            //            self.scroller.throwVertically(self.label_rec.height,0);
            //        });
            //    });
            //});
        };
        return GuildWarAttackRecDlg;
    })(mo.gui.Dlg);
    g_guildwar.GuildWarAttackRecDlg = GuildWarAttackRecDlg;
    egret.registerClass(GuildWarAttackRecDlg,"g_guildwar.GuildWarAttackRecDlg");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarDefenceRecCell = (function (_super) {
        __extends(GuildWarDefenceRecCell, _super);
        function GuildWarDefenceRecCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarDefenceRecCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //gc.dsConsts.GuildWarDefenceRecord
            //{isWin:1,time:2,door:3,attackServerId:4,attackServerName:5,attackUserName:6,attackGuildName:7,defenceUserName:8,hp:9},
            if (!data[gc.dsConsts.GuildWarDefenceRecord.time])
                return;
            var isWin = data[gc.dsConsts.GuildWarDefenceRecord.isWin];
            var time = Date.newDate(data[gc.dsConsts.GuildWarDefenceRecord.time]);
            var serverName = data[gc.dsConsts.GuildWarDefenceRecord.attackServerName];
            var attackGuildName = data[gc.dsConsts.GuildWarDefenceRecord.attackGuildName];
            var attackName = data[gc.dsConsts.GuildWarDefenceRecord.attackUserName];
            var door = data[gc.dsConsts.GuildWarDefenceRecord.door];
            var defeseName = data[gc.dsConsts.GuildWarDefenceRecord.defenceUserName];
            var hp = data[gc.dsConsts.GuildWarDefenceRecord.hp];
            var isDirect = data[gc.dsConsts.GuildWarDefenceRecord.isDirect];
            var str;
            if (!isWin) {
                self.ico_def.source = "ico_pvp_win";
                str = "[%s]来自[ubb color=#fd68ff]%s[/ubb]的%s[ubb color=red]%s[/ubb]攻击了%s门，被守卫[ubb color=#00cdff]%s[/ubb]击败，但%s门还是损失了%s生命。";
                str = mo.STR.format(str, time.toFormat("HH24:MI"), serverName, attackGuildName, attackName, gc.c_prop.guildWarDoor[door], defeseName, gc.c_prop.guildWarDoor[door], hp);
            }
            else {
                self.ico_def.source = "ico_pvp_fail";
                if (!isDirect) {
                    str = "[%s]来自[ubb color=#fd68ff]%s[/ubb]的%s[ubb color=red]%s[/ubb]击败了%s门守卫[ubb color=#00cdff]%s[/ubb]，%s门损失%s生命！";
                    str = mo.STR.format(str, time.toFormat("HH24:MI"), serverName, attackGuildName, attackName, gc.c_prop.guildWarDoor[door], defeseName, gc.c_prop.guildWarDoor[door], hp);
                }
                else {
                    str = "[%s]因无人守卫，%s门被[ubb color=#fd68ff]%s[/ubb]的%s[ubb color=red]%s[/ubb]攻打，损失了%s生命。";
                    str = mo.STR.format(str, time.toFormat("HH24:MI"), gc.c_prop.guildWarDoor[door], serverName, attackGuildName, attackName, hp);
                }
            }
            self.label_desc.text = str;
        };
        return GuildWarDefenceRecCell;
    })(mo.gui.ItemRenderer);
    g_guildwar.GuildWarDefenceRecCell = GuildWarDefenceRecCell;
    egret.registerClass(GuildWarDefenceRecCell,"g_guildwar.GuildWarDefenceRecCell");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarDefenceRecDlg = (function (_super) {
        __extends(GuildWarDefenceRecDlg, _super);
        function GuildWarDefenceRecDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarDefenceRecDlg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_rec = g_guildwar.GuildWarDefenceRecCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data.defData;
            //process.nextTick(function(){
            //    process.nextTick(function(){
            //        process.nextTick(function(){
            //            self.list_rec.scroller.throwVertically(self.list_rec.dataGroup.contentHeight,0);
            //        });
            //    });
            //});
        };
        p._data_list_rec = function () {
            var self = this;
            return self.data.defData.concat().reverse();
        };
        return GuildWarDefenceRecDlg;
    })(mo.gui.Dlg);
    g_guildwar.GuildWarDefenceRecDlg = GuildWarDefenceRecDlg;
    egret.registerClass(GuildWarDefenceRecDlg,"g_guildwar.GuildWarDefenceRecDlg");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by lihex on 3/7/16.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarGuildCell = (function (_super) {
        __extends(GuildWarGuildCell, _super);
        function GuildWarGuildCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarGuildCell,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.barScore.maximum = 100;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //[gc.dsConst.GuildServer]
            self.label_name.text = [data[gc.dsConsts.GuildServer.guildName], data[gc.dsConsts.GuildServer.guildLvl]];
            self.label_live.text = [data[gc.dsConsts.GuildServer.doorLives], 4];
            self.label_score.text = data[gc.dsConsts.GuildServer.points];
            self.barScore.value = data[gc.dsConsts.GuildServer.progress];
            self.btn_rob.visible = data[gc.dsConsts.GuildServer.doorLives] != 0;
            self.label_server.text = data[gc.dsConsts.GuildServer.serverName];
        };
        p._tap_btn_rob = function () {
            var self = this;
            var data = self.data; //[gc.dsConst.GuildServer]
            gd.guildWarCtrl.getWarAttackData(data[gc.dsConsts.GuildServer.serverId], data[gc.dsConsts.GuildServer.guildId], function (data) {
                self.delegate.guildWarDef.data.atkData = data;
                gd.guildWarCtrl.curGuildServer = self.data;
                gd.guildWarCtrl.curDoor = 0;
                self.delegate.guildWarDef.goto(1);
                self.delegate.close();
            }, self);
        };
        return GuildWarGuildCell;
    })(mo.gui.ItemRenderer);
    g_guildwar.GuildWarGuildCell = GuildWarGuildCell;
    egret.registerClass(GuildWarGuildCell,"g_guildwar.GuildWarGuildCell");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/4/8.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarDef = (function (_super) {
        __extends(GuildWarDef, _super);
        function GuildWarDef() {
            _super.apply(this, arguments);
            this.isRobTab = false; //抢夺页和防守页
        }
        var d = __define,c=GuildWarDef,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            //MyGuildWarData:{groupId:1,guildReNum:2,cd:3,guildRank:4,doorLives:5,points:6,inspireSeconds:7,overReSeconds:8},
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.guildReNum.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.guildRank.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.doorLives.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.points.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.nextFightTime.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.inspireEndTime.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.warEndTime.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.isDefence.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_ATK_UPDATE, function (serverId, guildId) {
                gd.guildWarCtrl.getWarAttackData(serverId, guildId, function (data) {
                    self.data.atkData = data;
                    self.dataChanged();
                }, self);
            });
            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_DEF_UPDATE, function () {
                gd.guildWarCtrl.getWarDefenceData(function (data) {
                    self.data.defData = data;
                    self.dataChanged();
                }, self);
            });
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.timerId = setInterval(function () {
                self.updateCd();
            }, 1000);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            clearInterval(self.timerId);
            gd.guildWarCtrl.exitSyncScenne();
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            if (self.data.atkData) {
                self.goto(1);
            }
            else if (self.data.defData) {
                self.goto(0);
            }
            for (var i = 0; i < 4; ++i) {
                //var grp_rob = self["grp_rob"+i];
                var bar_hpDef = self["bar_defHp" + i];
                var bar_hpRob = self["bar_robHp" + i];
                var ico_robSel = self["ico_robSel" + i];
                bar_hpDef.labelFunction = function (a, b) {
                    return "城门生命：" + (a + "/" + b);
                };
                bar_hpRob.labelFunction = function (a, b) {
                    return "";
                };
                ico_robSel.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onDoorSel, self);
            }
            self.bar_curHp.labelFunction = function (a, b) {
                return "城门生命：" + (a + "/" + b);
            };
            self.bar_curHp.slideDuration = 100;
            //
            //if(self.data && self.data.curGuildServer){
            //    gd.guildWarCtrl.getWarAttackData(self.data.curGuildServer[gc.dsConsts.GuildServer.serverId], self.data.curGuildServer[gc.dsConsts.GuildServer.guildId],function(data){
            //        self.data.atkData = data;
            //        self.goto(1);
            //        gd.guildWarCtrl.setSyncSceneType(2);
            //    },self);
            //}
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            if (self.isRobTab) {
                var atkData = self.data.atkData; //gc.dsConsts.GuildWarData
                self.label_guild.text = atkData[gc.dsConsts.GuildWarData.guildName];
                self.updateAtkDoors(atkData[gc.dsConsts.GuildWarData.doorList]);
            }
            else {
                var defData = self.data.defData; //gc.dsConsts.GuildWarData
                self.updateDefDoors(defData[gc.dsConsts.GuildWarData.doorList]);
            }
            self.updateMyGuildWarData();
        };
        p.goto = function (index) {
            var self = this;
            self.isRobTab = !!index;
            if (self.isRobTab) {
                self.grp_rob.visible = true;
                self.grp_def.visible = false;
                self.btn_attackRec.y = self.btn_score.y = 208;
                gd.guildWarCtrl.setSyncSceneType(2);
                self.selectDoor(gd.guildWarCtrl.curDoor || 0);
            }
            else {
                self.grp_rob.visible = false;
                self.grp_def.visible = true;
                self.btn_attackRec.y = self.btn_score.y = 80;
                gd.guildWarCtrl.setSyncSceneType(3);
            }
            self.dataChanged();
        };
        p.updateMyGuildWarData = function () {
            var self = this;
            //MyGuildWarData:{groupId:1,guildReNum:2,cd:3,guildRank:4,doorLives:5,points:6,inspireSeconds:7,overReSeconds:8},
            var groupId = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.groupId);
            var num = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.guildReNum);
            var total = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.guildTotal);
            self.label_leftNum.text = [gc.c_prop.guildGroup[groupId], num, total];
            self.label_rank.text = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.guildRank);
            self.label_live.text = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.doorLives);
            self.label_point.text = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.points);
            self.updateCd();
        };
        p.updateCd = function () {
            var self = this;
            var inspireTime = gd.guildWarCtrl.getInspireReSeconds();
            var cd = gd.guildWarCtrl.getFightCd();
            var overTime = gd.guildWarCtrl.getOverReSeconds();
            self.btn_clearCd.visible = false;
            if (inspireTime > 0) {
                self.grp_guwuLeftTime.visible = true;
                self.label_guwuLeftTime.text = mo.getTimeStr(inspireTime * 1000);
                var buffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 5);
                self.label_addProp.text = buffInfo[gc.t_otherBuff_addHurt] / 100;
            }
            else {
                self.grp_guwuLeftTime.visible = false;
                self.label_addProp.text = 0;
            }
            if (gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.doorLives) > 0) {
                if (!gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.isDefence)) {
                    if (cd > 0) {
                        self.btn_clearCd.visible = true;
                        self.label_myState.text = mo.getTimeStr(cd * 1000) + "后可进攻";
                    }
                    else {
                        self.label_myState.text = "可进攻";
                    }
                }
                else {
                    self.label_myState.text = "防守中";
                }
            }
            else {
                self.label_myState.text = "行会已被攻破";
            }
            self.label_leftTime.text = mo.getTimeStr(overTime * 1000, true);
        };
        p._tap_btn_guwu = function () {
            var self = this;
            mo.showMsg(gc.id_c_msgCode.buyInspire, gd.guildWarCtrl.getInspireCount(), gd.guildWarCtrl.getInspireCost(), function () {
                gd.guildWarCtrl.inspire(function (data) {
                    self.updateCd();
                }, self);
            });
        };
        p._tap_btn_clearCd = function () {
            var self = this;
            mo.showMsg(gc.id_c_msgCode.buyManyCD, gd.guildWarCtrl.getClearCdCount(), gd.guildWarCtrl.getClearCdCost(), function () {
                gd.guildWarCtrl.clearCd(function () {
                    self.updateCd();
                }, self);
            });
        };
        p.selectDoor = function (index) {
            var self = this;
            if (!self.isRobTab)
                return;
            var strs = ["东", "南", "西", "北"];
            gd.guildWarCtrl.curDoor = index;
            for (var i = 0; i < 4; ++i) {
                var ico_robSel = self["ico_robSel" + i];
                ico_robSel.alpha = 0;
            }
            ico_robSel = self["ico_robSel" + gd.guildWarCtrl.curDoor];
            ico_robSel.alpha = 1;
            self.label_robDoor.text = strs[gd.guildWarCtrl.curDoor];
            var doors = self.data.atkData[gc.dsConsts.GuildWarData.doorList];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var totalHp = gameInfo[1];
            for (var i = 0; i < 4; ++i) {
                var data = doors[i]; //gc.dsConsts.GuildWarDoor
                //{door:1,hp:2,userId:3,userName:4,userIcon:5,isBreak:6}
                var door = data[gc.dsConsts.GuildWarDoor.door];
                var isBreak = data[gc.dsConsts.GuildWarDoor.isBreak];
                if (door == gd.guildWarCtrl.curDoor) {
                    self.ico_hasBreakCur.visible = isBreak;
                    self.ico_noDefCur.visible = false;
                    if (!isBreak) {
                        self.ico_noDefCur.visible = true;
                    }
                    self.bar_curHp.maximum = totalHp;
                    self.bar_curHp.value = data[gc.dsConsts.GuildWarDoor.hp];
                }
            }
        };
        p.updateAtkDoors = function (doors) {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var totalHp = gameInfo[1];
            for (var i = 0; i < 4; ++i) {
                var data = doors[i]; //gc.dsConsts.GuildWarDoor
                //{door:1,hp:2,userId:3,userName:4,userIcon:5,isBreak:6}
                var door = data[gc.dsConsts.GuildWarDoor.door];
                var isBreak = data[gc.dsConsts.GuildWarDoor.isBreak];
                var hp = data[gc.dsConsts.GuildWarDoor.hp];
                var ico_robSel = self["ico_robSel" + door];
                var bar_hp = self["bar_robHp" + door];
                ico_robSel.alpha = 0;
                bar_hp.maximum = totalHp;
                bar_hp.value = hp;
                bar_hp.validateNow();
            }
            ico_robSel = self["ico_robSel" + gd.guildWarCtrl.curDoor];
            ico_robSel.alpha = 1;
        };
        p.updateDefDoors = function (doors) {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var totalHp = gameInfo[1];
            for (var i = 0; i < 4; ++i) {
                var data = doors[i]; //gc.dsConsts.GuildWarDoor
                //{door:1,hp:2,userId:3,userName:4,userIcon:5,isBreak:6}
                var door = data[gc.dsConsts.GuildWarDoor.door];
                var name = data[gc.dsConsts.GuildWarDoor.userName];
                var icon = data[gc.dsConsts.GuildWarDoor.userIcon];
                var isBreak = data[gc.dsConsts.GuildWarDoor.isBreak];
                var hp = data[gc.dsConsts.GuildWarDoor.hp];
                var userId = data[gc.dsConsts.GuildWarDoor.userId];
                var bar_hp = self["bar_defHp" + door];
                var ico_break = self["ico_hasBreak" + door];
                var icoNoRole = self["ico_noDef" + i];
                var icoHasRole = self["ico_hasDef" + i];
                ico_break.visible = isBreak;
                bar_hp.maximum = totalHp;
                bar_hp.value = hp;
                icoNoRole.visible = icoHasRole.visible = false;
                if (!isBreak && userId) {
                    icoHasRole.visible = true;
                }
                else {
                    if (!isBreak) {
                        icoNoRole.visible = true;
                    }
                }
            }
        };
        p._data_list_guild = function () {
            var self = this;
            return self.data.list;
        };
        p.onDoorSel = function (e) {
            var self = this;
            for (var i = 0; i < 4; ++i) {
                var ico_robSel = self["ico_robSel" + i];
                if (ico_robSel == e.currentTarget)
                    break;
            }
            self.selectDoor(i);
        };
        p._tap_btn_chat = function () {
            g_guildwar.GuildWarChat.create().show();
        };
        p._tap_btn_defSetting = function () {
            var self = this;
            g_guildwar.GuildWarDefSetting.create().setData({ defData: self.data.defData, guildWarDef: self }).show();
        };
        p._tap_btn_attackRec = function () {
            var self = this;
            gd.guildWarCtrl.getAttackRecordList(function (data) {
                g_guildwar.GuildWarAttackRecDlg.create().setData({ recData: data }).show();
            }, self);
        };
        p._tap_btn_score = function () {
            var self = this;
            gd.guildWarCtrl.getGuildWarAllRank(function (data) {
                g_guildwar.GuildWarRank.create().setData({ rankData: data, groupId: gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.groupId) }).show();
            }, self);
        };
        p._tap_btn_defRec = function () {
            var self = this;
            gd.guildWarCtrl.getDefenceRecordList(function (data) {
                g_guildwar.GuildWarDefenceRecDlg.create().setData({ defData: data }).show();
            }, self);
        };
        p._tap_btn_back = function () {
            var self = this;
            if (self.isRobTab) {
                self.goto(0);
            }
            else {
                mo.moduleMgr.runModule(g_consts.moduleId.fight);
            }
        };
        //_tap_btn_backList(){
        //    var self = this;
        //    gd.guildWarCtrl.setSyncSceneType(1);
        //}
        p._tap_btn_rob = function (e) {
            var self = this;
            var atkData = self.data.atkData;
            gd.guildWarCtrl.fightStartDoor(atkData[gc.dsConsts.GuildWarData.serverId], atkData[gc.dsConsts.GuildWarData.guildId], gd.guildWarCtrl.curDoor, function (data) {
            }, self);
        };
        p._tap_btn_robList = function () {
            var self = this;
            gd.guildWarCtrl.getGuildList(function (data) {
                g_guildwar.GuildWarGuildList.create().setData({ list: data, guildWarDef: self }).show();
            }, self);
        };
        p._tap_btn_help = function () {
            var self = this;
            if (self.isRobTab) {
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
                g_base.BaseShowTip.create().setData({ id: 64, param1: gameInfo[2], param2: gameInfo[3] }).show();
            }
            else {
                g_base.BaseShowTip.create().setData({ id: 65 }).show();
            }
        };
        return GuildWarDef;
    })(mo.gui.Layer);
    g_guildwar.GuildWarDef = GuildWarDef;
    egret.registerClass(GuildWarDef,"g_guildwar.GuildWarDef");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/4/8.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarGuildList = (function (_super) {
        __extends(GuildWarGuildList, _super);
        function GuildWarGuildList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarGuildList,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_guild = g_guildwar.GuildWarGuildCell;
            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_LIST_UPDATE, function () {
                gd.guildWarCtrl.getGuildList(function (data) {
                    self.data.list = data;
                    var ac = self.list_guild.dataProvider;
                    ac.replaceAll(data);
                    //self.refreshList("list_guild");
                    //self.list_guild.scroller.throwVertically(self.list_guild.scroller.verticalScrollBar.getPosition());
                }, self);
            });
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            self.guildWarDef.goto(self.guildWarDef.isRobTab ? 1 : 0);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            gd.guildWarCtrl.setSyncSceneType(1);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            self.guildWarDef = self.data.guildWarDef;
        };
        p._data_list_guild = function () {
            var self = this;
            return self.data.list;
        };
        return GuildWarGuildList;
    })(mo.gui.Dlg);
    g_guildwar.GuildWarGuildList = GuildWarGuildList;
    egret.registerClass(GuildWarGuildList,"g_guildwar.GuildWarGuildList");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/4/8.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarChat = (function (_super) {
        __extends(GuildWarChat, _super);
        function GuildWarChat() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarChat,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_chat = g_mid.ChatItem;
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_GUILD_CHAT_UPDATE, function (dataList) {
                self.onChatUpdate(gc.c_prop.chatTypeKey.guild, dataList);
            });
        };
        p.onChatUpdate = function (type, data) {
            var self = this;
            self.refreshList("list_chat");
            var scroller = (self.list_chat).scroller;
            process.nextTick(function () {
                if (!self.list_chat)
                    return;
                scroller.throwVertically(scroller.getMaxScrollTop(), 1);
            });
        };
        p._tap_btn_send = function () {
            var self = this;
            gd.chatCtrl.sendData(mo.trans4UBB(self.label_input.text), gc.c_prop.chatTypeKey.guild, false, function () {
                self.label_input.text = "";
            }, self);
        };
        p._data_list_chat = function () {
            var self = this, filter, sorter;
            return gd.chatCtrl.getGuildAllList();
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
        };
        return GuildWarChat;
    })(mo.gui.Dlg);
    g_guildwar.GuildWarChat = GuildWarChat;
    egret.registerClass(GuildWarChat,"g_guildwar.GuildWarChat");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/4/8.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarDefSetting = (function (_super) {
        __extends(GuildWarDefSetting, _super);
        function GuildWarDefSetting() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarDefSetting,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_DEF_UPDATE, function () {
                gd.guildWarCtrl.getWarDefenceData(function (data) {
                    self.data.defData = data;
                    self.dataChanged();
                }, self);
            });
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            for (var i = 0; i < 4; ++i) {
                var btnUp = self["btn_defUp" + i];
                var btnDown = self["btn_defDown" + i];
                var bar_hpDef = self["bar_defHp" + i];
                bar_hpDef.labelFunction = function (a, b) {
                    return "城门生命：" + (a + "/" + b);
                };
                btnUp.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onUpClick, self);
                btnDown.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onDownClick, self);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var defData = self.data.defData;
            self.updateDefDoors(defData[gc.dsConsts.GuildWarData.doorList]);
        };
        p.updateDefDoors = function (doors) {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var totalHp = gameInfo[1];
            for (var i = 0; i < 4; ++i) {
                var data = doors[i]; //gc.dsConsts.GuildWarDoor
                //{door:1,hp:2,userId:3,userName:4,userIcon:5,isBreak:6}
                var door = data[gc.dsConsts.GuildWarDoor.door];
                var name = data[gc.dsConsts.GuildWarDoor.userName];
                var icon = data[gc.dsConsts.GuildWarDoor.userIcon];
                var isBreak = data[gc.dsConsts.GuildWarDoor.isBreak];
                var hp = data[gc.dsConsts.GuildWarDoor.hp];
                var userId = data[gc.dsConsts.GuildWarDoor.userId];
                var isChair = gd.guildPersonalCtrl.getPosition() == gc.c_prop.guildPostKey.chairman;
                var btnUp = self["btn_defUp" + door];
                var btnDown = self["btn_defDown" + door];
                var lable_name = self["label_defName" + door];
                var ico_face = self["ico_defFace" + door];
                var ico_break = self["ico_defBreak" + door];
                var bar_hp = self["bar_defHp" + door];
                var icoNoRole = self["ico_noRole" + i];
                ico_break.visible = isBreak;
                bar_hp.maximum = totalHp;
                bar_hp.value = hp;
                icoNoRole.visible = btnUp.visible = btnDown.visible = false;
                if (!isBreak && userId) {
                    btnDown.visible = isChair || userId == gd.userCtrl.getId();
                    lable_name.text = name || "";
                    ico_face.source = uiHelper.getHeroIcon(icon, 0);
                }
                else {
                    if (!isBreak) {
                        icoNoRole.visible = true;
                        btnUp.visible = !gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.isDefence);
                    }
                    lable_name.text = "";
                    ico_face.source = null;
                }
            }
        };
        p.onUpClick = function (e) {
            var self = this;
            for (var i = 0; i < 4; ++i) {
                var grp_rob = self["btn_defUp" + i];
                if (grp_rob == e.currentTarget)
                    break;
            }
            gd.guildWarCtrl.upDoor(i, function () {
                gd.guildWarCtrl.getWarDefenceData(function (data) {
                    self.data.guildWarDef.data.defData = self.data.defData = data;
                    self.dataChanged();
                    self.data.guildWarDef.dataChanged();
                }, self);
            }, self);
        };
        p.onDownClick = function (e) {
            var self = this;
            for (var i = 0; i < 4; ++i) {
                var grp_rob = self["btn_defDown" + i];
                if (grp_rob == e.currentTarget)
                    break;
            }
            gd.guildWarCtrl.downDoor(i, function () {
                gd.guildWarCtrl.getWarDefenceData(function (data) {
                    self.data.guildWarDef.data.defData = self.data.defData = data;
                    self.dataChanged();
                    self.data.guildWarDef.dataChanged();
                }, self);
            }, self);
        };
        return GuildWarDefSetting;
    })(mo.gui.Dlg);
    g_guildwar.GuildWarDefSetting = GuildWarDefSetting;
    egret.registerClass(GuildWarDefSetting,"g_guildwar.GuildWarDefSetting");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarRank = (function (_super) {
        __extends(GuildWarRank, _super);
        function GuildWarRank() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarRank,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            this.outsideClosable = true;
            self._tap_tab_btn();
        };
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_rankGuild = g_guildwar.GuildWarRankGuildCell;
            self._Item_list_rankGuildManager = g_guildwar.GuildWarRankGuildManagerCell;
            self._Item_list_rankPerson = g_guildwar.GuildWarRankPersonCell;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p._tap_tab_btn = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            self.list_rankGuild.visible = false;
            self.list_rankGuildManager.visible = false;
            self.list_rankPerson.visible = false;
            var groupId = self.data.groupId;
            var myRankData;
            var rank = 0;
            var score = 0;
            var rewardInfo;
            var rewards;
            var rewardInfos = mo.getJSONWithFileName(gc.cfg_c_guildWarReward);
            if (selectedIndex == 0 || selectedIndex == -1) {
                self.list_rankGuild.visible = true;
                self.ico_myGuildRank.visible = true;
                self.ico_myRank.visible = false;
                self.label_myRank.x = self.ico_myGuildRank.x + self.ico_myGuildRank.width + 10;
                self.ico_guild.visible = true;
                self.ico_person.visible = false;
                self.label_desc.text = "点数相同根据优先到达者计算";
                myRankData = gd.guildWarCtrl.getMyPointRank(); //gc.dsConsts.GuildWarRank
                rank = myRankData ? myRankData[gc.dsConsts.GuildWarRank.rank] : 0;
                if (rank > 0) {
                    rewardInfo = rewardInfos[rank];
                    if (!rewardInfo) {
                        var keys = Object.keys(rewardInfos);
                        rewardInfo = rewardInfos[keys[keys.length - 1]];
                    }
                    score = myRankData[gc.dsConsts.GuildWarRank.points];
                    if (groupId == gc.c_prop.guildGroupKey.diamond) {
                        rewards = rewardInfo[gc.c_guildWarReward_diamond];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.wGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_wgold];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.hGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_hgold];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.silver) {
                        rewards = rewardInfo[gc.c_guildWarReward_silver];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.copper) {
                        rewards = rewardInfo[gc.c_guildWarReward_copper];
                    }
                }
            }
            else if (selectedIndex == 1) {
                self.list_rankGuildManager.visible = true;
                self.label_desc.text = "会长排名根据行会排名计算";
                self.ico_myGuildRank.visible = true;
                self.ico_myRank.visible = false;
                self.label_myRank.x = self.ico_myGuildRank.x + self.ico_myGuildRank.width + 10;
                self.ico_guild.visible = true;
                self.ico_person.visible = false;
                myRankData = gd.guildWarCtrl.getMyChairRank(); //gc.dsConsts.GuildWarUserRank
                rank = myRankData ? myRankData[gc.dsConsts.GuildWarUserRank.rank] : 0;
                if (rank > 0) {
                    rewardInfo = rewardInfos[rank];
                    if (!rewardInfo) {
                        var keys = Object.keys(rewardInfos);
                        rewardInfo = rewardInfos[keys[keys.length - 1]];
                    }
                    score = myRankData[gc.dsConsts.GuildWarUserRank.points];
                    if (groupId == gc.c_prop.guildGroupKey.diamond) {
                        rewards = rewardInfo[gc.c_guildWarReward_diamondSp];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.wGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_wgoldSp];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.hGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_hgoldSp];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.silver) {
                        rewards = rewardInfo[gc.c_guildWarReward_silverSp];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.copper) {
                        rewards = rewardInfo[gc.c_guildWarReward_copperSp];
                    }
                }
            }
            else if (selectedIndex == 2) {
                self.list_rankPerson.visible = true;
                self.label_desc.text = "点数相同根据优先到达者计算";
                self.ico_myGuildRank.visible = false;
                self.ico_myRank.visible = true;
                self.label_myRank.x = self.ico_myRank.x + self.ico_myRank.width + 10;
                self.ico_guild.visible = false;
                self.ico_person.visible = true;
                myRankData = gd.guildWarCtrl.getMyUserRank(); //gc.dsConsts.GuildWarUserRank
                rank = myRankData ? myRankData[gc.dsConsts.GuildWarUserRank.rank] : 0;
                if (rank > 0) {
                    rewardInfo = rewardInfos[rank];
                    if (!rewardInfo) {
                        var keys = Object.keys(rewardInfos);
                        rewardInfo = rewardInfos[keys[keys.length - 1]];
                    }
                    score = myRankData[gc.dsConsts.GuildWarUserRank.points];
                    if (groupId == gc.c_prop.guildGroupKey.diamond) {
                        rewards = rewardInfo[gc.c_guildWarReward_diamondUser];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.wGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_wgoldUser];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.hGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_hgoldUser];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.silver) {
                        rewards = rewardInfo[gc.c_guildWarReward_silverUser];
                    }
                    else if (groupId == gc.c_prop.guildGroupKey.copper) {
                        rewards = rewardInfo[gc.c_guildWarReward_copperUser];
                    }
                }
            }
            if (rank > 0) {
                self.grp_Rank.visible = true;
                for (var i = 0; i < 4; ++i) {
                    var grpRes = self["grp_res" + i];
                    var item = rewards[i];
                    if (item) {
                        var uiAsset = grpRes.getElementAt(0);
                        var label = grpRes.getElementAt(1);
                        grpRes.visible = true;
                        uiAsset.source = resHelper.getItemIconPath(item[0]);
                        label.text = item[1];
                    }
                    else {
                        grpRes.visible = false;
                    }
                }
                self.label_myRank.text = "" + rank;
                self.label_myKillValue.text = "" + score;
            }
            else {
                self.grp_Rank.visible = false;
            }
        };
        p._data_list_rankGuild = function () {
            var self = this;
            return self.data.rankData[gc.dsConsts.GuildWarAllRank.guildArr];
        };
        p._data_list_rankGuildManager = function () {
            var self = this;
            var list = self.data.rankData[gc.dsConsts.GuildWarAllRank.chairArr];
            if (list.length > 10)
                list.length = 10;
            return list;
        };
        p._data_list_rankPerson = function () {
            var self = this;
            var list = self.data.rankData[gc.dsConsts.GuildWarAllRank.userArr];
            if (list.length > 10)
                list.length = 10;
            return list;
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 49 }).show();
        };
        return GuildWarRank;
    })(g_base.CloseInfoDlg);
    g_guildwar.GuildWarRank = GuildWarRank;
    egret.registerClass(GuildWarRank,"g_guildwar.GuildWarRank");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by lihex on 3/7/16.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarRewardCell = (function (_super) {
        __extends(GuildWarRewardCell, _super);
        function GuildWarRewardCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarRewardCell,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //
            var group = data[0];
            var index = data[1];
            var info = data[2];
            var items;
            if (index == 0) {
                switch (group) {
                    case gc.c_prop.guildGroupKey.diamond:
                        items = info[gc.c_guildWarReward_diamond];
                        break;
                    case gc.c_prop.guildGroupKey.wGold:
                        items = info[gc.c_guildWarReward_wgold];
                        break;
                    case gc.c_prop.guildGroupKey.hGold:
                        items = info[gc.c_guildWarReward_hgold];
                        break;
                    case gc.c_prop.guildGroupKey.silver:
                        items = info[gc.c_guildWarReward_silver];
                        break;
                    case gc.c_prop.guildGroupKey.copper:
                        items = info[gc.c_guildWarReward_copper];
                        break;
                    default:
                        break;
                }
            }
            else if (index == 1) {
                switch (group) {
                    case gc.c_prop.guildGroupKey.diamond:
                        items = info[gc.c_guildWarReward_diamondSp];
                        break;
                    case gc.c_prop.guildGroupKey.wGold:
                        items = info[gc.c_guildWarReward_wgoldSp];
                        break;
                    case gc.c_prop.guildGroupKey.hGold:
                        items = info[gc.c_guildWarReward_hgoldSp];
                        break;
                    case gc.c_prop.guildGroupKey.silver:
                        items = info[gc.c_guildWarReward_silverSp];
                        break;
                    case gc.c_prop.guildGroupKey.copper:
                        items = info[gc.c_guildWarReward_copperSp];
                        break;
                    default:
                        break;
                }
            }
            else if (index == 2) {
                switch (group) {
                    case gc.c_prop.guildGroupKey.diamond:
                        items = info[gc.c_guildWarReward_diamondUser];
                        break;
                    case gc.c_prop.guildGroupKey.wGold:
                        items = info[gc.c_guildWarReward_wgoldUser];
                        break;
                    case gc.c_prop.guildGroupKey.hGold:
                        items = info[gc.c_guildWarReward_hgoldUser];
                        break;
                    case gc.c_prop.guildGroupKey.silver:
                        items = info[gc.c_guildWarReward_silverUser];
                        break;
                    case gc.c_prop.guildGroupKey.copper:
                        items = info[gc.c_guildWarReward_copperUser];
                        break;
                    default:
                        break;
                }
            }
            self.label_index.text = info[gc.c_guildWarReward_name];
            uiHelper.setItemsGrp(self.grp_items, utils.kvArrItems2ObjArr(items));
        };
        return GuildWarRewardCell;
    })(mo.gui.ItemRenderer);
    g_guildwar.GuildWarRewardCell = GuildWarRewardCell;
    egret.registerClass(GuildWarRewardCell,"g_guildwar.GuildWarRewardCell");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2015/12/22.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarRewardLook = (function (_super) {
        __extends(GuildWarRewardLook, _super);
        function GuildWarRewardLook() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarRewardLook,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_guildwar.GuildWarRewardCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var bossId = self.moduleParam.bossId;
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);
            var c_data = c_bossWorld[bossId];
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var group = self.data.group;
            var gScrs = ["tit_txt_g_zhuangsijl", "tit_txt_g_baijingjl", "tit_txt_g_huangingjl", "tit_txt_g_baiyingjl", "tit_txt_g_qingtongjl"];
            self.ico_title.source = gScrs[group - 1];
        };
        p.getPropStr = function (props, isLeft) {
            var str = "";
            for (var i = 0; i < props.length; ++i) {
                if (isLeft && i % 2 == 1)
                    continue;
                if (!isLeft && i % 2 == 0)
                    continue;
                str += "[ubb color=#fff000]" + gc.c_prop.heroProp[props[i][0]] + ": " + "[/ubb]";
                str += "[ubb color=#00ff00]+" + (props[i][1]) + "[/ubb]";
                str += "\n";
            }
            return str;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 55 }).show();
        };
        p._tap_tab_btn = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            if (selectedIndex == 0) {
            }
            else if (selectedIndex == 1) {
            }
            else if (selectedIndex == 2) {
            }
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            var group = self.data.group;
            var rewardObj = mo.getJSONWithFileName(gc.cfg_c_guildWarReward);
            var rewards = [];
            var index = self.tab_btn.selectedIndex;
            if (index == -1)
                index = 0;
            for (var key in rewardObj) {
                var info = rewardObj[key];
                if (index == 0) {
                    switch (group) {
                        case gc.c_prop.guildGroupKey.diamond:
                            if (!info[gc.c_guildWarReward_diamond])
                                continue;
                        case gc.c_prop.guildGroupKey.wGold:
                            if (!info[gc.c_guildWarReward_wgold])
                                continue;
                        case gc.c_prop.guildGroupKey.hGold:
                            if (!info[gc.c_guildWarReward_hgold])
                                continue;
                        case gc.c_prop.guildGroupKey.silver:
                            if (!info[gc.c_guildWarReward_silver])
                                continue;
                        case gc.c_prop.guildGroupKey.copper:
                            if (!info[gc.c_guildWarReward_copper])
                                continue;
                        default:
                            break;
                    }
                }
                else if (index == 1) {
                    switch (group) {
                        case gc.c_prop.guildGroupKey.diamond:
                            if (!info[gc.c_guildWarReward_diamondSp])
                                continue;
                        case gc.c_prop.guildGroupKey.wGold:
                            if (!info[gc.c_guildWarReward_wgoldSp])
                                continue;
                        case gc.c_prop.guildGroupKey.hGold:
                            if (!info[gc.c_guildWarReward_hgoldSp])
                                continue;
                        case gc.c_prop.guildGroupKey.silver:
                            if (!info[gc.c_guildWarReward_silverSp])
                                continue;
                        case gc.c_prop.guildGroupKey.copper:
                            if (!info[gc.c_guildWarReward_copperSp])
                                continue;
                        default:
                            break;
                    }
                }
                else if (index == 2) {
                    switch (group) {
                        case gc.c_prop.guildGroupKey.diamond:
                            if (!info[gc.c_guildWarReward_diamondUser])
                                continue;
                        case gc.c_prop.guildGroupKey.wGold:
                            if (!info[gc.c_guildWarReward_wgoldUser])
                                continue;
                        case gc.c_prop.guildGroupKey.hGold:
                            if (!info[gc.c_guildWarReward_hgoldUser])
                                continue;
                        case gc.c_prop.guildGroupKey.silver:
                            if (!info[gc.c_guildWarReward_silverUser])
                                continue;
                        case gc.c_prop.guildGroupKey.copper:
                            if (!info[gc.c_guildWarReward_copperUser])
                                continue;
                        default:
                            break;
                    }
                }
                rewards.push([group, index, rewardObj[key]]);
            }
            return rewards;
        };
        return GuildWarRewardLook;
    })(mo.gui.Dlg);
    g_guildwar.GuildWarRewardLook = GuildWarRewardLook;
    egret.registerClass(GuildWarRewardLook,"g_guildwar.GuildWarRewardLook");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarScene = (function (_super) {
        __extends(GuildWarScene, _super);
        function GuildWarScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            //LotusLayer.create().setData(self.moduleParam.data).show();
            if (gd.guildWarCtrl.isOpening()) {
                async.parallel([
                    function (cb1) {
                        gd.guildWarCtrl.getInfo(function (data) {
                            cb1(null, data);
                        }, self);
                    },
                    function (cb1) {
                        gd.guildWarCtrl.getGuildList(function (data) {
                            cb1(null, data);
                        }, self);
                    }
                ], function (err, data) {
                    gd.guildWarCtrl.getWarDefenceData(function (data) {
                        g_guildwar.GuildWarDef.create().setData({ defData: data, atkData: self.moduleParam.atkData }).show();
                    }, self);
                });
            }
            else {
                gd.guildWarCtrl.getSignUpData(function (data) {
                    g_guildwar.GuildWarSign.create().setData({ sign: data[0], lv: gd.guildCtrl.getLvl() }).show();
                }, self);
            }
        };
        return GuildWarScene;
    })(mo.gui.UIScene);
    g_guildwar.GuildWarScene = GuildWarScene;
    egret.registerClass(GuildWarScene,"g_guildwar.GuildWarScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildWarScene;
        //moduleCfgItem.sysId = gc.id_c_open.guildWar;// 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //    gd.demonLotusCtrl.getInfo(function(data){
            //        moduleParam.data = data;
            //        cb();
            //    }, this);
            cb();
        });
    });
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/4/8.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarSign = (function (_super) {
        __extends(GuildWarSign, _super);
        function GuildWarSign() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarSign,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_sign = g_guildwar.GuildWarSignCell;
            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_OPEN_CHANGE, function () {
                if (gd.guildWarCtrl.isOpening()) {
                    gd.guildWarCtrl.enter(function () {
                        async.parallel([
                            function (cb1) {
                                gd.guildWarCtrl.getInfo(function (data) {
                                    cb1(null, data);
                                }, self);
                            },
                            function (cb1) {
                                gd.guildWarCtrl.getGuildList(function (data) {
                                    cb1(null, data);
                                }, self);
                            }
                        ], function (err, data) {
                            gd.guildWarCtrl.getWarDefenceData(function (data) {
                                g_guildwar.GuildWarDef.create().setData({ defData: data }).show();
                            }, self);
                        });
                    }, self);
                }
            });
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var cfgData = gd.guildWarCtrl.getCfgData();
            var signData = cfgData[0];
            var activeData = cfgData[1];
            self.label_timeSign.text = [signData[0], signData[1], signData[2] > 9 ? signData[2] : "0" + signData[2], signData[3], signData[4], signData[5] > 9 ? signData[5] : "0" + signData[5]];
            self.label_timeActive.text = [activeData[0], activeData[1], activeData[2] > 9 ? activeData[2] : "0" + activeData[2], activeData[3] > 9 ? activeData[3] : "0" + activeData[3]];
            self.label_combat.text = self.data.lv;
            var lastMyData = gd.guildWarCtrl.getLastMyData();
            if (lastMyData[3]) {
                self.label_myGuildNo.visible = true;
                self.label_myGuildNo.text = "结算中";
                self.label_myGuildRank.text = "";
            }
            else if (lastMyData[1] == null) {
                self.label_myGuildRank.text = "";
                self.label_myGuildNo.visible = true;
                self.label_myGuildNo.text = "未参与";
            }
            else {
                self.label_myGuildRank.text = gc.c_prop.guildGroup[lastMyData[0]] + "组 第" + lastMyData[1] + "名";
                self.label_myGuildNo.visible = false;
            }
            if (lastMyData[3]) {
                self.label_myNo.visible = true;
                self.label_myNo.text = "结算中";
                self.label_myRank.text = "";
            }
            else if (lastMyData[2] == null) {
                self.label_myRank.text = "";
                self.label_myNo.visible = true;
                self.label_myNo.text = "未参与";
            }
            else {
                self.label_myRank.text = gc.c_prop.guildGroup[lastMyData[0]] + "组 第" + lastMyData[2] + "名";
                self.label_myNo.visible = false;
            }
            self.refreshList("list_sign");
        };
        p.getHourStr = function (hour) {
            return (hour > 9 ? hour : "0" + hour) + ":00";
        };
        p._data_list_sign = function () {
            var self = this;
            var ary = [];
            for (var i = gc.c_prop.guildGroupKey.diamond; i <= gc.c_prop.guildGroupKey.hGold; ++i) {
                ary.push([i, self.data.sign]);
            }
            return ary;
        };
        p._tap_btn_back = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 63 }).show();
        };
        return GuildWarSign;
    })(mo.gui.Layer);
    g_guildwar.GuildWarSign = GuildWarSign;
    egret.registerClass(GuildWarSign,"g_guildwar.GuildWarSign");
})(g_guildwar || (g_guildwar = {}));

/**
 * Created by Administrator on 2016/4/8.
 */
var g_guildwar;
(function (g_guildwar) {
    var GuildWarSignCell = (function (_super) {
        __extends(GuildWarSignCell, _super);
        function GuildWarSignCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildWarSignCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //[groupId,isSign]
            var combat;
            var ico = 0;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var icos = ["ico_zsyt", "ico_bjf", "ico_hjj", "ico_byt", "ico_qt"];
            switch (data[0]) {
                case gc.c_prop.guildGroupKey.diamond:
                    combat = gameInfo[11];
                    ico = 0;
                    break;
                case gc.c_prop.guildGroupKey.wGold:
                    combat = gameInfo[10];
                    ico = 1;
                    break;
                case gc.c_prop.guildGroupKey.hGold:
                    combat = gameInfo[9];
                    ico = 2;
                    break;
                case gc.c_prop.guildGroupKey.silver:
                    combat = gameInfo[8];
                    ico = 3;
                    break;
                case gc.c_prop.guildGroupKey.copper:
                    combat = gameInfo[7];
                    ico = 4;
                    break;
                default:
                    break;
            }
            self.label_condition.text = [combat.split(",")[0], combat.split(",")[1]];
            self.ico_title.source = icos[ico];
            self.ico_sign.visible = self.data[1] == self.data[0];
            self.btn_sign.visible = !self.data[1];
        };
        p._tap_btn_sign = function () {
            var self = this;
            var data = self.data;
            gd.guildWarCtrl.signUp(data[0], function (groupId) {
                self.delegate.data.sign = groupId;
                self.delegate.dataChanged();
            }, self);
        };
        p._tap_btn_look = function () {
            var self = this;
            g_guildwar.GuildWarRewardLook.create().setData({ group: self.data[0] }).show();
        };
        p._tap_ico_lastWeak = function () {
            var self = this;
            gd.guildWarCtrl.getLastRankList(self.data[0], function (data) {
                g_guildwar.GuildWarRank.create().setData({ rankData: data, groupId: self.data[0] }).show();
            }, self);
        };
        return GuildWarSignCell;
    })(mo.gui.ItemRenderer);
    g_guildwar.GuildWarSignCell = GuildWarSignCell;
    egret.registerClass(GuildWarSignCell,"g_guildwar.GuildWarSignCell");
})(g_guildwar || (g_guildwar = {}));

