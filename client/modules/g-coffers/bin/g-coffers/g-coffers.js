/**
 * Created by Administrator on 2016/1/5.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersLayer = (function (_super) {
        __extends(CoffersLayer, _super);
        function CoffersLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersLayer,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.CoffersCtrl, gc.dsConsts.CoffersEntity.buildValue.toString(), this.buildValueChanged);
            self.registerClassByKey(gd.CoffersCtrl, gc.dsConsts.CoffersEntity.resource.toString(), this.coffersChanged);
            self.registerClassByKey(gd.CoffersCtrl, gc.dsConsts.CoffersEntity.lootResource.toString(), this.coffersChanged);
            self.registerClassByKey(gd.CoffersCtrl, gc.dsConsts.CoffersEntity.beLootResource.toString(), this.coffersChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._tap_tab_btn();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.coffersChanged();
            self.buildValueChanged();
        };
        p.coffersChanged = function () {
            var self = this;
            var data = self.data; //[gc.dsConsts.CoffersEntity]
            self.label_gold.text = gd.coffersCtrl.getPersonResource().toString();
            self.label_coffer.text = utils.formatByWan2(data[gc.dsConsts.CoffersEntity.resource]);
            self.label_rob.text = utils.formatByWan2(data[gc.dsConsts.CoffersEntity.lootResource]);
            self.label_robed.text = utils.formatByWan2(data[gc.dsConsts.CoffersEntity.beLootResource]);
        };
        p.buildValueChanged = function () {
            var self = this;
            var data = gd.coffersCtrl.getData();
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            var curLv = data[gc.dsConsts.CoffersEntity.lvl];
            var iniCfgInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.initCfg);
            if (curLv >= iniCfgInfo[6]) {
                //满级
                self.label_maxLevel.visible = true;
                self.grp_next.visible = false;
            }
            else {
                self.label_maxLevel.visible = false;
                self.grp_next.visible = true;
                var nextLv = curLv + 1;
                var nextLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, nextLv);
                self.label_nextLv.text = nextLv + "级";
                self.label_nextCoffer.text = utils.formatByWan2(nextLvInfo[gc.c_lvl_coffersBase]);
                self.label_nextAddProp.text = (nextLvInfo[gc.c_lvl_cofferPower] / 100).toFixed(1) + "%";
            }
            var curBuildNum = gd.coffersCtrl.getBuildNum();
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, gd.userCtrl.getVip());
            self.label_lv.text = data[gc.dsConsts.CoffersEntity.lvl] + "级";
            var curLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, curLv);
            self.label_curLv.text = curLv + "级";
            self.label_curCoffer.text = utils.formatByWan2(curLvInfo[gc.c_lvl_coffersBase]);
            self.label_curAddProp.text = (curLvInfo[gc.c_lvl_cofferPower] / 100).toFixed(1) + "%";
            self.bar_build.maximum = curLvInfo[gc.c_lvl_cofferExpc];
            self.bar_build.value = data[gc.dsConsts.CoffersEntity.buildValue];
            self.label_vip.text = gd.userCtrl.getVip().toString();
            self.label_leftCount.text = (vipInfo[gc.c_vip_coffersBuild] - curBuildNum) + "/" + (vipInfo[gc.c_vip_coffersBuild]);
            if (curBuildNum < vipInfo[gc.c_vip_coffersBuild]) {
                //self.ico_rmb.visible = true;
                //self.label_cost.text = gameInfo[2]+"";
                self.label_add1.text = "" + gameInfo[14];
                self.label_add2.text = "建设值+" + gameInfo[4];
                self.label_cannotBuild.visible = false;
                self.grp_canBuild.visible = true;
            }
            else {
                self.label_cannotBuild.visible = true;
                self.grp_canBuild.visible = false;
            }
            self.label_addProp.text = mo.STR.format("守卫生命+%s%(国库加成)", (curLvInfo[gc.c_lvl_cofferPower] / 100).toFixed(1));
            self.label_addProp1.text = mo.STR.format("守卫攻击+%s%(激励加成)", gd.coffersCtrl.getAddPropByBuff().toFixed(1));
        };
        p.setDefeseData = function (datas) {
            var self = this;
            self.defUsers = datas;
            var rankSrcs = [0, "ico_wangcengbazu", "ico_shalukuangmo", "ico_jigjidasii", "ico_zhanglijingying"];
            for (var i = 0; i < 4; ++i) {
                var data = datas[i]; //gc.dsConsts.CofferUser
                var rankType = data[gc.dsConsts.CofferUser.rankType];
                var name = data[gc.dsConsts.CofferUser.name];
                var combat = data[gc.dsConsts.CofferUser.combat];
                var icon = data[gc.dsConsts.CofferUser.icon];
                var level = data[gc.dsConsts.CofferUser.lvl];
                var door = data[gc.dsConsts.CofferUser.door];
                var medalId = data[gc.dsConsts.CofferUser.medalTitle] || 0;
                self["label_name" + door].text = name;
                self["label_lv" + door].text = "Lv." + level;
                self["label_combat" + door].text = combat;
                self["ico_face" + door].source = uiHelper.getHeroIcon(icon, 0);
                self["ico_rank" + door].source = rankSrcs[rankType];
                if (medalId != 0) {
                    self["ico_medal" + door].setData({ itemId: medalId });
                    self["ico_medal" + door].visible = true;
                }
                else {
                    self["ico_medal" + door].visible = false;
                }
            }
        };
        p._tap_grp_def0 = function () {
            var self = this;
            self.lookUserInfo(0);
        };
        p._tap_grp_def1 = function () {
            var self = this;
            self.lookUserInfo(1);
        };
        p._tap_grp_def2 = function () {
            var self = this;
            self.lookUserInfo(2);
        };
        p._tap_grp_def3 = function () {
            var self = this;
            self.lookUserInfo(3);
        };
        p.lookUserInfo = function (doorLook) {
            var self = this;
            var user;
            for (var i = 0; i < self.defUsers.length; ++i) {
                var data = self.defUsers[i]; //gc.dsConsts.CofferUser
                var door = data[gc.dsConsts.CofferUser.door];
                if (door == doorLook) {
                    user = data;
                    break;
                }
            }
            if (!user)
                return;
            var userId = user[gc.dsConsts.CofferUser.userId];
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, { userId: userId });
        };
        p._tap_btn_heroRec = function () {
            gd.coffersCtrl.getLootRecordArr(function (recs) {
                g_coffers.CoffersHeroRecDlg.create().setData({ recs: recs }).show();
            }, this);
        };
        p._tap_btn_build = function () {
            gd.coffersCtrl.build(function () {
            }, this);
        };
        p._tap_btn_defRec = function () {
            gd.coffersCtrl.getDefeseRecord(function (recs) {
                g_coffers.CoffersDefenceRecDlg.create().setData({ recs: recs }).show();
            }, this);
        };
        p._tap_tab_btn = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            self.grp_coffers.visible = selectedIndex == 0;
            self.grp_build.visible = selectedIndex == 1;
            self.grp_defence.visible = selectedIndex == 2;
            if (selectedIndex == 2) {
                gd.coffersCtrl.getDefeseData(function (datas) {
                    if (datas.length > 0) {
                        self.setDefeseData(datas);
                    }
                    else {
                        self.tab_btn.selectedIndex = 0;
                        self._tap_tab_btn();
                        mo.showMsg(gc.id_c_msgCode.haveNoGuard);
                    }
                }, self);
            }
        };
        p._tap_btn_close = function () {
            //var self = this;
            //self.close();
            mo.moduleMgr.runModule(g_consts.moduleId.home);
        };
        p._tap_btn_help = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            if (selectedIndex == 0) {
                g_base.BaseShowTip.create().setData({ id: 33 }).show();
            }
            else if (selectedIndex == 1) {
                //var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
                g_base.BaseShowTip.create().setData({ id: 34 }).show();
            }
            else if (selectedIndex == 2) {
                g_base.BaseShowTip.create().setData({ id: 35 }).show();
            }
        };
        p._tap_btn_jili = function () {
            var self = this;
            g_coffers.CoffersJili.create().show().onClose(function () {
                self.dataChanged();
            });
        };
        return CoffersLayer;
    })(mo.gui.Layer);
    g_coffers.CoffersLayer = CoffersLayer;
    egret.registerClass(CoffersLayer,"g_coffers.CoffersLayer");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersScene = (function (_super) {
        __extends(CoffersScene, _super);
        function CoffersScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            g_coffers.CoffersLayer.create().setData(self.moduleParam.data).show();
        };
        return CoffersScene;
    })(mo.gui.UIScene);
    g_coffers.CoffersScene = CoffersScene;
    egret.registerClass(CoffersScene,"g_coffers.CoffersScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = CoffersScene;
        moduleCfgItem.sysId = gc.id_c_open.coffers; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.coffersCtrl.getInfo(function (data) {
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersDefenceRecCell = (function (_super) {
        __extends(CoffersDefenceRecCell, _super);
        function CoffersDefenceRecCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersDefenceRecCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //gc.dsConsts.CoffersRecord
            if (!data[gc.dsConsts.CoffersRecord.time])
                return;
            var isWin = data[gc.dsConsts.CoffersRecord.isWin];
            var time = Date.newDate(data[gc.dsConsts.CoffersRecord.time]);
            var serverName = data[gc.dsConsts.CoffersRecord.serverName];
            var attackName = data[gc.dsConsts.CoffersRecord.attackName];
            var door = data[gc.dsConsts.CoffersRecord.door];
            var defeseName = data[gc.dsConsts.CoffersRecord.defeseName];
            var recource = data[gc.dsConsts.CoffersRecord.recource];
            var str;
            if (!isWin) {
                self.ico_def.source = "ico_pvp_win";
                str = "[%s]来自[ubb color=#fd68ff]%s[/ubb]的[ubb color=red]%s[/ubb]攻击了我服国库%s门，被该门守卫[ubb color=#00cdff]%s[/ubb]击败，灰溜溜得逃走了。";
                str = mo.STR.format(str, time.toFormat("HH24:MI"), serverName, attackName, gc.c_prop.offersDoor[door], defeseName);
            }
            else {
                self.ico_def.source = "ico_pvp_fail";
                str = "[%s]来自[ubb color=#fd68ff]%s[/ubb]的[ubb color=red]%s[/ubb]击败了%s守卫[ubb color=#00cdff]%s[/ubb]，我服国库%s门被击破！";
                str = mo.STR.format(str, time.toFormat("HH24:MI"), serverName, attackName, gc.c_prop.offersDoor[door], defeseName, gc.c_prop.offersDoor[door]);
            }
            self.label_desc.text = str;
        };
        return CoffersDefenceRecCell;
    })(mo.gui.ItemRenderer);
    g_coffers.CoffersDefenceRecCell = CoffersDefenceRecCell;
    egret.registerClass(CoffersDefenceRecCell,"g_coffers.CoffersDefenceRecCell");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersDefenceRecDlg = (function (_super) {
        __extends(CoffersDefenceRecDlg, _super);
        function CoffersDefenceRecDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersDefenceRecDlg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_rec = g_coffers.CoffersDefenceRecCell;
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
        p._data_list_rec = function () {
            var self = this;
            return self.data.recs;
        };
        return CoffersDefenceRecDlg;
    })(mo.gui.Dlg);
    g_coffers.CoffersDefenceRecDlg = CoffersDefenceRecDlg;
    egret.registerClass(CoffersDefenceRecDlg,"g_coffers.CoffersDefenceRecDlg");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersHeroRecCell = (function (_super) {
        __extends(CoffersHeroRecCell, _super);
        function CoffersHeroRecCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersHeroRecCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //gc.dsConsts.CoffersRecord
            if (!data[gc.dsConsts.CoffersRecord.time])
                return;
            var time = Date.newDate(data[gc.dsConsts.CoffersRecord.time]);
            var serverName = data[gc.dsConsts.CoffersRecord.serverName];
            var attackName = data[gc.dsConsts.CoffersRecord.attackName];
            var door = data[gc.dsConsts.CoffersRecord.door];
            var defeseName = data[gc.dsConsts.CoffersRecord.defeseName];
            var points = data[gc.dsConsts.CoffersRecord.points];
            var str = "[%s][ubb color=#00cdff]%s[/ubb]击破了[ubb color=#fd68ff]%s[/ubb]的%s守卫[ubb color=red]%s[/ubb]，为我服贡献了[ubb color=yellow]%s[/ubb]跨服积分！";
            str = mo.STR.format(str, time.toFormat("HH24:MI"), attackName, serverName, gc.c_prop.offersDoor[door], defeseName, points);
            self.label_desc.text = str;
        };
        return CoffersHeroRecCell;
    })(mo.gui.ItemRenderer);
    g_coffers.CoffersHeroRecCell = CoffersHeroRecCell;
    egret.registerClass(CoffersHeroRecCell,"g_coffers.CoffersHeroRecCell");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersHeroRecDlg = (function (_super) {
        __extends(CoffersHeroRecDlg, _super);
        function CoffersHeroRecDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersHeroRecDlg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_rec = g_coffers.CoffersHeroRecCell;
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
        p._data_list_rec = function () {
            var self = this;
            return self.data.recs;
        };
        return CoffersHeroRecDlg;
    })(mo.gui.Dlg);
    g_coffers.CoffersHeroRecDlg = CoffersHeroRecDlg;
    egret.registerClass(CoffersHeroRecDlg,"g_coffers.CoffersHeroRecDlg");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersSelectDefence = (function (_super) {
        __extends(CoffersSelectDefence, _super);
        function CoffersSelectDefence() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersSelectDefence,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.CoffersCtrl, gd.CoffersCtrl.ON_COFFERS_DEF_DATA_CHANGED, self.onDefDataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.timerId = setInterval(self.checkLeftTime, 1000, self);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            clearInterval(self.timerId);
        };
        p.onDefDataChanged = function (defData) {
            var self = this;
            self.setData(defData);
        };
        p.checkLeftTime = function (self) {
            var data = self.data; //gc.dsConsts.ExDefenceData
            if (!data)
                return;
            var users = data[gc.dsConsts.ExDefenceData.cofferUserArr]; //[gc.dsConsts.CofferUser]
            for (var i = 0; i < 4; ++i) {
                var user = users[i]; //gc.dsConsts.CofferUser
                if (!user)
                    continue;
                var door = user[gc.dsConsts.CofferUser.door];
                var leftTime = user[gc.dsConsts.CofferUser.breakReplaySeconds] - (Date.newDate().getTime() - self.startTime) / 1000;
                var m = leftTime / 60 >> 0;
                self["label_time" + door].text = leftTime > 0 ? (m || 1) : 0;
                self["label_time" + door].visible = leftTime > 0;
                self["ico_state" + door].source = leftTime > 0 ? "ico_yijipo" : null;
            }
            if (self.breakNum > 0) {
                self.label_rate.text = "掠夺倍率：×" + data[gc.dsConsts.ExDefenceData.lootRate];
            }
            else {
                self.label_rate.text = "击破任一守卫即可掠夺";
            }
        };
        d(p, "breakNum"
            ,function () {
                var self = this;
                var data = self.data; //gc.dsConsts.ExDefenceData
                var users = data[gc.dsConsts.ExDefenceData.cofferUserArr]; //[gc.dsConsts.CofferUser]
                var breakNum = 0;
                for (var i = 0; i < 4; ++i) {
                    var user = users[i]; //gc.dsConsts.CofferUser
                    if (!user)
                        continue;
                    var door = user[gc.dsConsts.CofferUser.door];
                    var leftTime = user[gc.dsConsts.CofferUser.breakReplaySeconds] - (Date.newDate().getTime() - self.startTime) / 1000;
                    breakNum = breakNum + (leftTime > 0 ? 1 : 0);
                }
                return breakNum;
            }
        );
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //gc.dsConsts.ExDefenceData
            var users = data[gc.dsConsts.ExDefenceData.cofferUserArr]; //[gc.dsConsts.CofferUser]
            var stateSrcs = ["ico_yijipo", "ico_yilueduojipo"];
            for (var i = 0; i < 4; ++i) {
                var user = users[i]; //gc.dsConsts.CofferUser
                if (!user)
                    continue;
                var door = user[gc.dsConsts.CofferUser.door];
                var name = user[gc.dsConsts.CofferUser.name];
                var icon = user[gc.dsConsts.CofferUser.icon];
                var level = user[gc.dsConsts.CofferUser.lvl];
                var medalId = user[gc.dsConsts.CofferUser.medalTitle] || 0;
                self["label_name" + door].text = name;
                //self["label_lv"+door].text = "Lv."+level;
                self["ico_face" + door].source = uiHelper.getHeroIcon(icon, 0);
                self["ico_state" + door].source = user[gc.dsConsts.CofferUser.isBreak] ? stateSrcs[0] : null;
                if (medalId != 0) {
                    self["ico_medal" + door].setData({ itemId: medalId });
                    self["ico_medal" + door].visible = true;
                }
                else {
                    self["ico_medal" + door].visible = false;
                }
            }
            self.startTime = Date.newDate().getTime();
            self.checkLeftTime(self);
            self.label_addProp.text = "+" + (data[gc.dsConsts.ExDefenceData.hpAdd] * 100 || 0).toFixed(1) + "%(国库加成)";
            self.label_addProp2.text = "+" + (data[gc.dsConsts.ExDefenceData.attackAdd] * 100 || 0).toFixed(1) + "%(激励加成)";
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
            var itemSet = gameInfo[4].split(",");
            self.ico_item.source = resHelper.getItemIconPath(itemSet[0]);
            self.label_item.text = (itemSet[1]);
            self.label_win.text = gd.coffersCtrl.getCoffersWin();
            self.label_score.text = gd.coffersCtrl.getNextWinPoints();
        };
        p._tap_grp_def0 = function () {
            var self = this;
            self.startFightAt(0);
        };
        p._tap_grp_def1 = function () {
            var self = this;
            self.startFightAt(1);
        };
        p._tap_grp_def2 = function () {
            var self = this;
            self.startFightAt(2);
        };
        p._tap_grp_def3 = function () {
            var self = this;
            self.startFightAt(3);
        };
        p.startFightAt = function (index) {
            var self = this;
            var data = self.data; //gc.dsConsts.ExDefenceData
            var users = data[gc.dsConsts.ExDefenceData.cofferUserArr]; //[gc.dsConsts.CofferUser]
            var user; //gc.dsConsts.CofferUser
            for (var i = 0; i < 4; ++i) {
                user = users[i]; //gc.dsConsts.CofferUser
                if (!user)
                    continue;
                var door = user[gc.dsConsts.CofferUser.door];
                if (door == index) {
                    break;
                }
            }
            var serverId = user[gc.dsConsts.CofferUser.serverId];
            var door = user[gc.dsConsts.CofferUser.door];
            var isLoot = user[gc.dsConsts.CofferUser.isLoot];
            var isBreak = user[gc.dsConsts.CofferUser.isBreak];
            if (isLoot) {
                return mo.showMsg(gc.id_c_msgCode.gatesRobed);
            }
            else if (isBreak) {
                return mo.showMsg(gc.id_c_msgCode.gatesBroken);
            }
            gd.coffersCtrl.fightStart(serverId, door, function () { }, this);
        };
        p._tap_ico_rob = function () {
            var self = this;
            var data = self.data; //gc.dsConsts.ExDefenceData
            if (self.breakNum > 0) {
                data[gc.dsConsts.ExDefenceData.breakNum] = self.breakNum;
                g_coffers.CoffersRob.create().setData(self.data).show();
            }
            else {
                mo.showMsg(gc.id_c_msgCode.noGuardDown);
            }
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 37 }).show();
        };
        return CoffersSelectDefence;
    })(mo.gui.Dlg);
    g_coffers.CoffersSelectDefence = CoffersSelectDefence;
    egret.registerClass(CoffersSelectDefence,"g_coffers.CoffersSelectDefence");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersServerCell = (function (_super) {
        __extends(CoffersServerCell, _super);
        function CoffersServerCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersServerCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //gc.dsConsts.CoffersServer
            if (!data[gc.dsConsts.CoffersServer.serverName])
                return;
            self.label_name.text = data[gc.dsConsts.CoffersServer.serverName];
            var isLoots = data[gc.dsConsts.CoffersServer.isLootArr];
            var isBreaks = data[gc.dsConsts.CoffersServer.isBreakArr];
            for (var i = 0; i < 4; ++i) {
                self["label_state" + i].text = self.getStateStr(isLoots[i], isBreaks[i]);
                self["label_state" + i].textColor = self.getStateColor(isLoots[i], isBreaks[i]);
            }
            self.label_coffer.text = utils.formatByWan(data[gc.dsConsts.CoffersServer.resource], 0);
        };
        p.getStateStr = function (isLoot, isBreak) {
            //if(isLoot){
            //    return '已掠夺';
            //}
            //else
            if (isBreak) {
                return '已被击破';
            }
            return "可攻击";
        };
        p.getStateColor = function (isLoot, isBreak) {
            if (isLoot) {
                return 0xB8AFAF;
            }
            else if (isBreak) {
                return 0xB8AFAF;
            }
            return 0x00ff00;
        };
        p._tap_btn_rob = function () {
            var self = this;
            var data = self.data;
            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.serverPk);
            if (gd.userCtrl.getLvl() < openInfo[gc.c_open_lvlRequired]) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, openInfo[gc.c_open_lvlRequired]);
            }
            //掠夺时间
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            var robStart = gameInfo[12];
            var robEnd = gameInfo[13];
            var nowDate = Date.newDate();
            if (nowDate.getHours() < robStart || nowDate.getHours() > robEnd)
                return mo.showMsg(gc.id_c_msgCode.peaceTimeCantRobe, robStart, robEnd);
            gd.coffersCtrl.getEnemyDefeseData(data[gc.dsConsts.CoffersServer.serverId], data[gc.dsConsts.CoffersServer.serverName], function (defData) {
                g_coffers.CoffersSelectDefence.create().setData(defData).show().onClose(function () {
                    self.delegate.reset();
                });
            }, self);
        };
        return CoffersServerCell;
    })(mo.gui.ItemRenderer);
    g_coffers.CoffersServerCell = CoffersServerCell;
    egret.registerClass(CoffersServerCell,"g_coffers.CoffersServerCell");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/1/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersServerDlg = (function (_super) {
        __extends(CoffersServerDlg, _super);
        function CoffersServerDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersServerDlg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_server = g_coffers.CoffersServerCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            if (self.moduleParam) {
                self.setData(self.moduleParam.data);
                var defData = self.moduleParam.defData;
                if (defData) {
                    if (self.moduleParam.page == 1) {
                        g_coffers.CoffersSelectDefence.create().setData(defData).show();
                    }
                    else if (self.moduleParam.page == 2) {
                        var breakNum = defData[gc.dsConsts.ExDefenceData.breakNum];
                        if (breakNum > 0) {
                            g_coffers.CoffersRob.create().setData(defData).show();
                        }
                        else {
                            g_coffers.CoffersSelectDefence.create().setData(defData).show();
                        }
                    }
                }
            }
            self.apChange();
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.reset = function () {
            var self = this;
            gd.coffersCtrl.getServerArr(function (data) {
                self.setData({ list: data });
            }, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.serverPk);
            if (gd.userCtrl.getLvl() < openInfo[gc.c_open_lvlRequired]) {
                self.grp_ap.visible = false;
            }
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            self.label_robTime.text = (gameInfo[12] > 9 ? gameInfo[12] : "0" + gameInfo[12]) + ":00--" + (gameInfo[13] > 9 ? gameInfo[13] : "0" + gameInfo[13]) + ":00";
            self.setCDTime(gd.coffersCtrl.getActionReseconds());
        };
        p.apChange = function () {
            var self = this;
            self.label_ap.text = gd.coffersCtrl.getReAction().toString();
        };
        p._data_list_server = function () {
            var self = this;
            return self.data.list;
        };
        p._tap_btn_help = function () {
            var self = this;
            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.serverPk);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            var gameInfo3 = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
            g_base.BaseShowTip.create().setData({ id: 36, param1: openInfo[gc.c_open_lvlRequired],
                param2: gameInfo3[3] / 60 >> 0,
                param3: gameInfo[8] }).show();
        };
        p._tap_btn_score = function () {
            gd.coffersCtrl.getInfo(function (data) {
                g_coffers.CoffersScore.create().show();
            }, this);
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
                self.resetCdTimeView(second * 1000);
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
            self.setCDTime(gd.coffersCtrl.getActionReseconds());
        };
        p.resetCdTimeView = function (leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
                self.label_time.text = mo.STR.format("再过%s恢复%s点", mo.getTimeStr(leftMillisecond), gameInfo[22]);
            }
            else {
            }
        };
        return CoffersServerDlg;
    })(mo.gui.Dlg);
    g_coffers.CoffersServerDlg = CoffersServerDlg;
    egret.registerClass(CoffersServerDlg,"g_coffers.CoffersServerDlg");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = CoffersServerDlg;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            var self = this;
            async.series([
                function (cb1) {
                    gd.kingCtrl.getInfo(function (data) {
                        if (!gd.kingCtrl.getData()) {
                            mo.showMsg(gc.id_c_msgCode.yourServerNoOpen);
                            cb1("errr");
                            return;
                        }
                        var hasKing = gd.kingCtrl.get(gc.dsConsts.King.kingId);
                        if (!hasKing) {
                            mo.showMsg(gc.id_c_msgCode.yourServerNoOpen);
                            cb1("errr");
                            return;
                        }
                        cb1();
                    }, this);
                },
                function (cb1) {
                    gd.coffersCtrl.getServerArr(function (data) {
                        moduleParam.data = { list: data };
                        cb1();
                    }, this);
                }], function (err) {
                return cb(err);
            }, self);
        });
    });
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/2/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersScore = (function (_super) {
        __extends(CoffersScore, _super);
        function CoffersScore() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersScore,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.dataChanged();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.label_scorePersonToday.text = gd.userCtrl.get(gc.dsConsts.UserEntity.todayCoffersPoints) + ""; //个人今日积分
            self.label_scorePerson.text = gd.userCtrl.get(gc.dsConsts.UserEntity.coffersPoints) + ""; //个人历史积分
            self.label_scoreServerToday.text = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.todayPoints) + ""; //全服今日积分
            self.label_scoreServer.text = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.points) + ""; //全服历史积分
            self.label_win.text = gd.coffersCtrl.getCoffersWin();
            self.label_score.text = gd.coffersCtrl.getNextWinPoints();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 45 }).show();
        };
        return CoffersScore;
    })(mo.gui.Dlg);
    g_coffers.CoffersScore = CoffersScore;
    egret.registerClass(CoffersScore,"g_coffers.CoffersScore");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/2/25.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersJili = (function (_super) {
        __extends(CoffersJili, _super);
        function CoffersJili() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersJili,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.dataChanged();
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.bag.toString(), self.dataChanged);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var baseValue = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.buffBase) / 100;
            var curLv = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.buffLvl);
            var value = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.buffExpc);
            var nextLv = curLv + 1;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers2);
            var exps = gameInfo[3].split(",");
            var adds = gameInfo[4].split(",");
            var isMax = curLv >= exps.length - 1;
            self.label_addProp.text = baseValue + "%";
            self.label_curLv.text = curLv + "";
            self.label_curAdd.text = adds[curLv] / 100 + "%";
            self.label_value.text = mo.STR.format("本次激励增加：+%s激励值", gameInfo[2]);
            if (!isMax) {
                self.grp_nextLv.visible = true;
                self.label_maxLv.visible = false;
                self.label_value.visible = true;
                self.label_nextLv.text = nextLv;
                self.label_nextAdd.text = adds[nextLv] / 100 + "%";
                var count = gd.coffersCtrl.getAddBuffNum();
                var vip = gd.userCtrl.getVip();
                var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, vip);
                var totalCount = vipInfo[gc.c_vip_coffersBuff];
                if (totalCount != -1 && count >= totalCount) {
                    self.grp_jili.visible = false;
                    self.label_noCount.visible = true;
                }
                else {
                    self.grp_jili.visible = true;
                    self.label_noCount.visible = false;
                    var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0]);
                    self.label_costName.text = itemInfo[gc.t_item_name];
                    self.label_cost.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + gameInfo[1];
                    self.ico_item.source = resHelper.getItemIconPath(gameInfo[0]);
                    if (totalCount != -1) {
                        self.label_leftCount.text = mo.STR.format("Vip%s今日剩余次数：%s/%s", vip, totalCount - count, totalCount);
                    }
                    else {
                        self.label_leftCount.text = mo.STR.format("Vip%s每日激励不限次数", vip);
                    }
                }
                self.bar_value.maximum = exps[nextLv];
            }
            else {
                self.grp_nextLv.visible = false;
                self.label_maxLv.visible = true;
                self.label_noCount.visible = false;
                self.grp_jili.visible = false;
                self.label_value.visible = false;
                self.bar_value.maximum = exps[curLv];
            }
            self.bar_value.value = value;
        };
        p._tap_btn_jili = function () {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers2);
            var itemId = gameInfo[0];
            var curCount = gd.userCtrl.getItemNum(itemId);
            var needCount = gameInfo[1];
            if (curCount >= needCount) {
                gd.coffersCtrl.addBuff(function () {
                    self.dataChanged();
                }, self);
            }
            else {
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({
                        itemId: itemId,
                        count: needCount - curCount
                    }).show().onClose(function () {
                        self.dataChanged();
                    });
                }
                else {
                    g_base.GainWay.create().setData({ itemId: itemId }).show();
                }
            }
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 43 }).show();
        };
        return CoffersJili;
    })(mo.gui.Dlg);
    g_coffers.CoffersJili = CoffersJili;
    egret.registerClass(CoffersJili,"g_coffers.CoffersJili");
})(g_coffers || (g_coffers = {}));

/**
 * Created by Administrator on 2016/3/28.
 */
var g_coffers;
(function (g_coffers) {
    var CoffersRob = (function (_super) {
        __extends(CoffersRob, _super);
        function CoffersRob() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CoffersRob,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //gc.dsConsts.ExDefenceData
            var isCanRob = data[gc.dsConsts.ExDefenceData.isCanLoot];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
            var per = 100 - gameInfo[0] / 100;
            self.label_cannotRob.text = per;
            self.label_failCount.text = data[gc.dsConsts.ExDefenceData.breakNum];
            self.label_coffer.text = utils.formatByWan2(data[gc.dsConsts.ExDefenceData.curResource]);
            self.label_rate.text = data[gc.dsConsts.ExDefenceData.lootRate];
            self.label_robCount.text = [gameInfo[7] - data[gc.dsConsts.ExDefenceData.todayLootNum], gameInfo[7]];
            self.grp_canRob.visible = isCanRob;
            self.label_cannotRob.visible = !isCanRob;
            self.label_name.text = data[gc.dsConsts.ExDefenceData.serverName];
        };
        p._tap_btn_rob = function () {
            var self = this;
            var data = self.data; //gc.dsConsts.ExDefenceData
            gd.coffersCtrl.fightCoffersStart(data[gc.dsConsts.ExDefenceData.serverId], function () { }, self);
        };
        p._tap_btn_help = function () {
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
            var per = 100 - gameInfo[0] / 100;
            g_base.BaseShowTip.create().setData({ id: 60, param1: per + "%" }).show();
        };
        return CoffersRob;
    })(mo.gui.Dlg);
    g_coffers.CoffersRob = CoffersRob;
    egret.registerClass(CoffersRob,"g_coffers.CoffersRob");
})(g_coffers || (g_coffers = {}));

