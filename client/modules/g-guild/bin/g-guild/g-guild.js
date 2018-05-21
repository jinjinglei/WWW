/**
 * Created by john on 15/12/4.
 */
var g_guild;
(function (g_guild) {
    var GuildListItem = (function (_super) {
        __extends(GuildListItem, _super);
        function GuildListItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildListItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (self.data.label) {
                return;
            }
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var guildData = self.data.guildData;
            var lvl = guildData[gc.dsConsts.GuildEntity.lvl];
            var lvlInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lvl);
            self.label_lv.text = mo.STR.format("Lv.%s", lvl);
            self.label_name.text = guildData[gc.dsConsts.GuildEntity.name];
            self.label_count.text = mo.STR.format("%s/%s", guildData[gc.dsConsts.GuildEntity.guildPopulation], lvlInfo[gc.c_lvl_guildMan]);
            self.checkBtn(guildData, guildPersonalData);
        };
        p.checkBtn = function (curGuildItem, guildPersonalData) {
            var self = this;
            var id = curGuildItem[gc.dsConsts.GuildEntity.id];
            var applieds = guildPersonalData[gc.dsConsts.GuildPersonalEntity.appliedMsg];
            if (applieds && applieds.indexOf(id) != -1) {
                self.btn_join.enabled = false;
                self.btn_join.icon = "btn_txt_yishengqing";
            }
            else {
                self.btn_join.enabled = true;
                self.btn_join.icon = "btn_txt_jiaru";
            }
        };
        p._tap_btn_join = function () {
            var self = this;
            var guildData = self.data.guildData;
            gd.guildCtrl.joinGuild(guildData[gc.dsConsts.GuildEntity.id], function (data) {
                var isJoin = data;
                if (isJoin) {
                    self.delegate.close();
                    process.nextTick(function () {
                        mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer);
                    });
                }
                else {
                    var guildPersonalData = gd.guildPersonalCtrl.getData();
                    self.checkBtn(guildData, guildPersonalData);
                }
            }, self);
        };
        return GuildListItem;
    })(mo.gui.ItemRenderer);
    g_guild.GuildListItem = GuildListItem;
    egret.registerClass(GuildListItem,"g_guild.GuildListItem");
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/2.
 */
var g_guild;
(function (g_guild) {
    var GuildListLayer = (function (_super) {
        __extends(GuildListLayer, _super);
        function GuildListLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildListLayer,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_guild.GuildListItem;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p._tap_btn_search = function () {
            g_guild.GuildSearch.create().setData({ listLayer: this }).show();
        };
        p._tap_btn_create = function () {
            g_guild.CreateGuild.create().show();
        };
        p.reset = function () {
            var self = this;
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            var obj;
            var objs = [];
            for (var i = 0; i < self.data.guildData.length; ++i) {
                obj = { guildData: self.data.guildData[i], guildPersonalData: self.data.guildPersonalData };
                objs.push(obj);
            }
            return objs;
        };
        return GuildListLayer;
    })(mo.gui.Dlg);
    g_guild.GuildListLayer = GuildListLayer;
    egret.registerClass(GuildListLayer,"g_guild.GuildListLayer");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = GuildListLayer;
        moduleCfgItem.fullScr = true;
        moduleCfgItem.sysId = gc.id_c_open.guild; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            var self = this;
            gd.guildCtrl.getInfo(function (data) {
                var isGuild = data[0];
                var guildPersonalData = data[1];
                var guildData = data[2];
                var guildManagerName = data[3];
                var guildRank = data[4];
                if (!isGuild) {
                    moduleParam.guildPersonalData = guildPersonalData;
                    moduleParam.guildData = guildData;
                    cb();
                }
            }, self);
        });
    });
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/2.
 */
var g_guild;
(function (g_guild) {
    var GuildMineLayer = (function (_super) {
        __extends(GuildMineLayer, _super);
        function GuildMineLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildMineLayer,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.tabIndex = 0;
            self.tabCompArr = null;
            self.tabCompArr = [];
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            // 注册事件监听
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_GUILD_INFO_CHANGED, self.reloadData);
            self.registerClassByKey(gd.GuildCtrl, gc.dsConsts.GuildEntity.addUpAct.toString(), self.dataChanged);
            self.registerClassByKey(gd.GuildPersonalCtrl, gc.dsConsts.GuildPersonalEntity.addUpAct.toString(), self.dataChanged);
            self.registerClassByKey(gd.GuildPersonalCtrl, gc.dsConsts.GuildPersonalEntity.ennoble.toString(), self.dataChanged);
            self.grp_guildDaily.visible = false;
            self.grp_guildFuli.visible = false;
            self.tabCompArr = [self.grp_guildDaily, self.grp_guildFuli, self.grp_guildWar];
            self.tab_str.selectedIndex = 0;
            process.nextTick(function () {
                self._tap_tab_str();
            });
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
            if (self.moduleParam["bossId"]) {
                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { subModuleId: 1, bossId: self.moduleParam["bossId"] });
            }
            if (self.moduleParam["subModuleId"] == 1) {
                var self = this;
                var guildData = self.data.guildData;
                var lv = guildData[gc.dsConsts.GuildEntity.lvl];
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
                if (lv < gameInfo[8]) {
                    return mo.showMsg(gc.id_c_msgCode.noGuildLevel, gameInfo[8]);
                }
                g_guild.GuildTreasure.create().show();
            }
            self.reloadData();
        };
        p._tap_tab_str = function () {
            var self = this;
            var selectedIndex = self.tabIndex = self.tab_str.selectedIndex;
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
                self._refreshGuildDailyGrp();
            }
            else if (selectedIndex == 1) {
                self._refreshGuildFuliGrp();
            }
            else if (selectedIndex == 2) {
                self._refreshGuildWarGrp();
            }
        };
        p._refreshGuildDailyGrp = function () {
        };
        p._refreshGuildFuliGrp = function () {
        };
        p._refreshGuildWarGrp = function () {
        };
        p.reloadData = function () {
            var self = this;
            gd.guildCtrl.getInfo(function (data) {
                var isGuild = data[0];
                var guildPersonalData = data[1];
                var guildData = data[2];
                var guildManagerName = data[3];
                var guildRank = data[4];
                if (isGuild) {
                    self.setData({ guildPersonalData: guildPersonalData, guildData: guildData, guildManagerName: guildManagerName, guildRank: guildRank });
                }
                self.dataChanged();
            }, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var guildData = self.data.guildData;
            var lv = guildData[gc.dsConsts.GuildEntity.lvl];
            var id = guildData[gc.dsConsts.GuildEntity.id];
            var name = self.data.guildManagerName; //guildData[gc.dsConsts.GuildEntity.name];
            var count = guildData[gc.dsConsts.GuildEntity.guildPopulation];
            var lvlInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
            var maxMemberCount = lvlInfo[gc.c_lvl_guildMan];
            var notice = guildData[gc.dsConsts.GuildEntity.notice];
            var exp = guildData[gc.dsConsts.GuildEntity.addUpAct];
            var guildname = guildData[gc.dsConsts.GuildEntity.name];
            var attack = gd.guildCtrl.getAddCombat();
            var guildAct = gd.guildPersonalCtrl.getContributeValue();
            var myLv = gd.guildCtrl.getRankFileLvl(guildAct);
            var levelInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, myLv < 30 ? myLv + 1 : 30);
            self.label_myExp.text = mo.STR.format("%s/%s", guildAct, levelInfo[gc.c_lvl_rankFileNeedAct]);
            self.label_myGuildLv.text = mo.STR.format("%s级会员: ", myLv);
            self.label_attack.text = attack + "";
            self.ico_level.visible = false;
            var numLevel = gd.guildCtrl.getLevel();
            if (numLevel > 0) {
                self.ico_level.visible = true;
                if (numLevel == 1)
                    self.ico_level.source = "ico_chujubaoku";
                else if (numLevel == 2)
                    self.ico_level.source = "ico_zongjibaoku";
                else
                    self.ico_level.source = "ico_gaojibaoku";
            }
            else {
            }
            var ennoble = gd.guildPersonalCtrl.getEnnoble();
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
            self.label_guildname.text = guildname;
            self.label_id.text = id + "";
            self.label_name.text = name;
            self.label_lv.text = mo.STR.format("Lv.%s", lv);
            self.label_count.text = mo.STR.format("%s/%s", count, maxMemberCount);
            self.label_notice.text = notice;
            self.bar_exp.maximum = gd.guildCtrl.getNeedExp(lv);
            self.bar_exp.setValue(exp);
            self.label_rank.text = self.data.guildRank + "";
            self.label_myPosition.text = gc.c_prop.guildPost[gd.guildPersonalCtrl.getPosition()];
            self.label_leftExp.text = gd.guildPersonalCtrl.getSumContribute().toString();
        };
        p._tap_btn_help = function () {
            var self = this;
            var guildSet = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
            g_base.BaseShowTip.create().setData({ id: 16, param1: gd.guildCtrl.getExitGuildCD(), param2: guildSet[13], param3: guildSet[13] }).show();
        };
        //成员
        p._tap_btn_member = function () {
            g_guild.GuildMemberListLayer.create().show();
        };
        p._tap_btn_manager = function () {
            var self = this;
            g_guild.GuildManager.create().setData(self.data.guildData).show();
        };
        p._tap_btn_rank = function () {
            var self = this;
            gd.rankCtrl.getAllRankArr(gc.c_prop.rankTypeKey.guildRank, function (data) {
                if (data)
                    g_guild.GuildRank.create().setData({ rankData: data }).show();
            }, self);
        };
        //宝库
        p._tap_grp_treasure = function () {
            var self = this;
            var guildData = self.data.guildData;
            var lv = guildData[gc.dsConsts.GuildEntity.lvl];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
            if (lv < gameInfo[8]) {
                return mo.showMsg(gc.id_c_msgCode.noGuildLevel, gameInfo[8]);
            }
            g_guild.GuildTreasure.create().show();
        };
        p._tap_grp_benefits = function () {
            var self = this;
            g_guild.GuildBenefitsLayer.create().setData(self.data.guildData).show();
        };
        p._tap_grp_daily = function () {
            var self = this;
            g_guild.GuildContributeLayer.create().setData(self.data.guildData).show();
        };
        p._tap_grp_bossWar = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossLevelList);
        };
        p._tap_grp_rob = function () {
            var self = this;
            if (!gd.guildWarCtrl.isOpening()) {
                mo.moduleMgr.runModule(g_consts.moduleId.guildwar);
            }
            else {
                gd.guildWarCtrl.enter(function () {
                    mo.moduleMgr.runModule(g_consts.moduleId.guildwar);
                }, self);
            }
        };
        p._tap_grp_copy = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildCopy);
        };
        return GuildMineLayer;
    })(mo.gui.Dlg);
    g_guild.GuildMineLayer = GuildMineLayer;
    egret.registerClass(GuildMineLayer,"g_guild.GuildMineLayer");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = GuildMineLayer;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            var self = this;
            gd.guildCtrl.getInfo(function (data) {
                var isGuild = data[0];
                var guildPersonalData = data[1];
                var guildData = data[2];
                var guildManagerName = data[3];
                var guildRank = data[4];
                if (isGuild) {
                    moduleParam.guildPersonalData = guildPersonalData;
                    moduleParam.guildData = guildData;
                    moduleParam.guildManagerName = guildManagerName;
                    moduleParam.guildRank = guildRank;
                    cb();
                }
            }, self);
        });
    });
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/2.
 */
var g_guild;
(function (g_guild) {
    var CreateGuild = (function (_super) {
        __extends(CreateGuild, _super);
        function CreateGuild() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CreateGuild,p=c.prototype;
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
            self.label_yuanbao.text = "" + gameInfo[1];
        };
        p._tap_btn_create = function () {
            var self = this;
            gd.guildCtrl.establishGuild(self.inputName.text, function (data) {
                self.close();
                mo.moduleMgr.curModule.subModules[0].target.close();
                process.nextTick(function () {
                    mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer);
                });
            }, self);
        };
        return CreateGuild;
    })(mo.gui.Dlg);
    g_guild.CreateGuild = CreateGuild;
    egret.registerClass(CreateGuild,"g_guild.CreateGuild");
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/8.
 */
var g_guild;
(function (g_guild) {
    var GuildTreasure = (function (_super) {
        __extends(GuildTreasure, _super);
        function GuildTreasure() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildTreasure,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_GUILD_LOTTERY_UPDATE, self.onLotteryUpdate);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildAct);
            var guildData = gd.guildCtrl.getData();
            var lvl = guildData[gc.dsConsts.GuildEntity.lvl];
            var items;
            if (lvl >= 30) {
                items = gameInfo[8];
            }
            else if (lvl >= 15) {
                items = gameInfo[7];
            }
            else if (lvl >= 5) {
                items = gameInfo[6];
            }
            items = items.split(",");
            if (items.length > 9)
                items.length = 9;
            for (var i = 0; i < items.length; ++i) {
                var ico_item = self["ico_item" + i];
                var eff = self["eff_" + i];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, items[i]);
                ico_item.setData({ itemId: items[i], count: 1 });
                ico_item.label_text.visible = false;
                ico_item.onClick(function () {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
                }, ico_item);
                if (itemInfo[gc.t_item_color] >= 5)
                    eff.effectId = 33;
                else
                    eff.effectId = 34;
                eff.startLoadByKey(eff.effectId);
            }
            self.label_cost.text = gameInfo[2];
            self.label_costTen.text = gameInfo[11];
            self.reset();
            self.onLotteryUpdate();
        };
        p.onLotteryUpdate = function () {
            var self = this;
            var list = gd.chatCtrl.getGuildLotteryList();
            var allStr = "";
            for (var i = 0; i < list.length; ++i) {
                var chatStr = gd.chatCtrl.getChatDataStr(list[i]);
                allStr += chatStr + "\n";
            }
            self.label_content.text = allStr;
            process.nextTick(function () {
                if (!self.scroller)
                    return;
                self.scroller.throwVertically(self.scroller.getMaxScrollTop(), 1);
            });
        };
        p.reset = function () {
            var self = this;
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, gd.userCtrl.getVip());
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            self.label_exp.text = guildPersonalData[gc.dsConsts.GuildPersonalEntity.addUpAct].toString();
            var numLevel = gd.guildCtrl.getLevel();
            if (numLevel > 0) {
                if (numLevel == 1) {
                    self.ico_level.source = "tit_txt_g_chujibaoku";
                    self.label_guildLv.text = mo.STR.format("行会%s级提升为中级宝库", 15);
                }
                else if (numLevel == 2) {
                    self.ico_level.source = "tit_txt_g_zongjibaoku";
                    self.label_guildLv.text = mo.STR.format("行会%s级提升为高级宝库", 30);
                }
                else {
                    self.ico_level.source = "tit_txt_g_gaojibaoku";
                    self.label_guildLv.text = mo.STR.format("宝库已达最高级");
                }
            }
        };
        p._tap_btn_treasure = function () {
            var self = this;
            gd.guildCtrl.lottery(1, function (items) {
                items = utils.itemObj2ObjArr(items);
                g_guild.GuildLotteryGain.create().setData({ items: items, delegate: self }).show();
                self.reset();
            }, self);
        };
        p._tap_btn_ten = function () {
            var self = this;
            gd.guildCtrl.lottery(10, function (items) {
                items = utils.itemObj2ObjArr(items);
                g_guild.GuildLotteryGain.create().setData({ items: items, delegate: self }).show();
                self.reset();
            }, self);
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 17 }).show();
        };
        return GuildTreasure;
    })(mo.gui.Dlg);
    g_guild.GuildTreasure = GuildTreasure;
    egret.registerClass(GuildTreasure,"g_guild.GuildTreasure");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/3.
 */
var g_guild;
(function (g_guild) {
    var GuildContributeLayer = (function (_super) {
        __extends(GuildContributeLayer, _super);
        function GuildContributeLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildContributeLayer,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_guild.GuildContributeItem;
            self.registerClassByKey(gd.GuildCtrl, gc.dsConsts.GuildEntity.addUpAct.toString(), self.dataChanged);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var guildData = gd.guildCtrl.getData();
            var lv = guildData[gc.dsConsts.GuildEntity.lvl];
            var exp = guildData[gc.dsConsts.GuildEntity.addUpAct];
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var guildAct = guildPersonalData[gc.dsConsts.GuildPersonalEntity.guildAct];
            var myLv = gd.guildCtrl.getRankFileLvl(guildAct);
            var levelInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, myLv < 30 ? myLv + 1 : 30);
            self.label_myGuildLv.text = "Lv." + myLv.toString();
            self.label_myExp2.text = guildAct.toString();
            self.label_level.text = mo.STR.format("行会等级:Lv.%s", lv);
            self.bar_exp.maximum = gd.guildCtrl.getNeedExp(lv);
            self.bar_exp.setValue(exp);
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            self.label_exp.text = guildPersonalData[gc.dsConsts.GuildPersonalEntity.addUpAct].toString();
            self.label_myExp.text = mo.STR.format("%s/%s", guildAct, levelInfo[gc.c_lvl_rankFileNeedAct]);
            self.label_myGuildLv.text = mo.STR.format("%s级会员: ", myLv);
        };
        p._data_list_items = function () {
            var infoAll = mo.getJSONWithFileName(gc.cfg_c_guildAct);
            var infos = [];
            for (var key in infoAll) {
                infos.push(infoAll[key]);
            }
            infos.sort(function (info1, info2) {
                return info1[gc.c_guildAct_seniority] - info2[gc.c_guildAct_seniority];
            });
            return infos;
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return GuildContributeLayer;
    })(mo.gui.Dlg);
    g_guild.GuildContributeLayer = GuildContributeLayer;
    egret.registerClass(GuildContributeLayer,"g_guild.GuildContributeLayer");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/3.
 */
var g_guild;
(function (g_guild) {
    var GuildBenefitsLayer = (function (_super) {
        __extends(GuildBenefitsLayer, _super);
        function GuildBenefitsLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBenefitsLayer,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var guildData = self.data;
            var level = guildData[gc.dsConsts.GuildEntity.lvl];
            var levelInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_guildLvl, level);
            var guildLvls = mo.getJSONWithFileName(gc.cfg_c_guildLvl);
            var nextLevelInfo = guildLvls[level + 1];
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var addScale = 0;
            var ennoble = guildPersonalData[gc.dsConsts.GuildPersonalEntity.ennoble];
            self.label_ennoble.text = gc.c_prop.ennobleType[guildPersonalData[gc.dsConsts.GuildPersonalEntity.ennoble]];
            var ennobleInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_guildEnnoble, ennoble);
            self.label_ennobleRate.text = Math.round(ennobleInfo[gc.c_guildEnnoble_props] / 100) + "%";
            self.label_lv.text = "Lv." + level;
            var propInfos = levelInfo[gc.c_guildLvl_props];
            var str = "";
            for (var i = 0; i < propInfos.length; ++i) {
                if (propInfos[i].length == 2) {
                    var propIdx = propInfos[i][0];
                    var value = Math.round(propInfos[i][1] * (1 + addScale));
                    var valueStr = value.toString();
                    var s = mo.STR.format("%s +%s\n", gc.c_prop.heroProp[propIdx], valueStr);
                    str += s;
                }
            }
            self.label_nextLv.text = mo.STR.format("(下级旗帜将在行会达到%s级后自动激活)", level + 1);
            self.label_value.text = str;
            if (nextLevelInfo) {
                var nextPropValue = [];
                var nextProps = nextLevelInfo[gc.c_guildLvl_props];
                for (var i = 0; i < nextProps.length; ++i) {
                    nextPropValue.push(Math.round(nextProps[i][1] * (1 + addScale)));
                }
                self.label_next.text = nextPropValue.join("\n");
                self.grp_nextLv.visible = true;
                self.label_maxLv.visible = false;
            }
            else {
                self.grp_nextLv.visible = false;
                self.label_maxLv.visible = true;
            }
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 19 }).show();
        };
        p._tap_label_ennobleDesc = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 23 }).show();
        };
        return GuildBenefitsLayer;
    })(mo.gui.Dlg);
    g_guild.GuildBenefitsLayer = GuildBenefitsLayer;
    egret.registerClass(GuildBenefitsLayer,"g_guild.GuildBenefitsLayer");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/3.
 */
var g_guild;
(function (g_guild) {
    (function (GuildManagerType) {
        GuildManagerType[GuildManagerType["Apply"] = 0] = "Apply";
        GuildManagerType[GuildManagerType["Notice"] = 1] = "Notice";
        GuildManagerType[GuildManagerType["Setting"] = 2] = "Setting";
        GuildManagerType[GuildManagerType["Exit"] = 3] = "Exit";
    })(g_guild.GuildManagerType || (g_guild.GuildManagerType = {}));
    var GuildManagerType = g_guild.GuildManagerType;
    var GuildManager = (function (_super) {
        __extends(GuildManager, _super);
        function GuildManager() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildManager,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_guild.GuildManagerCell;
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_GUILD_INFO_CHANGED, self.reloadData);
        };
        p.reloadData = function () {
            var self = this;
            gd.guildCtrl.getInfo(function (data) {
                var isGuild = data[0];
                var guildPersonalData = data[1];
                var guildData = data[2];
                var guildManagerName = data[3];
                var guildRank = data[4];
                if (isGuild) {
                    self.setData(guildData);
                    self.refreshList("list_items");
                }
                self.dataChanged();
            }, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p.getListTypes = function () {
            var self = this;
            var obj;
            var objs = [];
            var position = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.position);
            //会长
            if (position == gc.c_prop.guildPostKey.chairman) {
                for (var i = 0; i < 4; ++i) {
                    obj = { guildData: self.data, type: i };
                    objs.push(obj);
                }
            }
            else if (position == gc.c_prop.guildPostKey.viceChairman) {
                //副会长点击显示入会申请、会员列表与退出公会选项
                obj = { guildData: self.data, type: GuildManagerType.Apply };
                objs.push(obj);
                obj = { guildData: self.data, type: GuildManagerType.Exit };
                objs.push(obj);
            }
            else {
                //普通会员点击只有会员列表与退出公会选项
                obj = { guildData: self.data, type: GuildManagerType.Exit };
                objs.push(obj);
            }
            return objs;
        };
        p._data_list_items = function () {
            var self = this;
            return self.getListTypes();
        };
        p._tap_btn_close = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return GuildManager;
    })(mo.gui.Dlg);
    g_guild.GuildManager = GuildManager;
    egret.registerClass(GuildManager,"g_guild.GuildManager");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/3.
 */
var g_guild;
(function (g_guild) {
    var GuildManagerCell = (function (_super) {
        __extends(GuildManagerCell, _super);
        function GuildManagerCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildManagerCell,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p._tap_btn_action = function () {
            var self = this;
            var guildData = self.data.guildData;
            var type = self.data.type;
            if (type == g_guild.GuildManagerType.Apply) {
                g_guild.GuildApplyList.create().setData(self.data).show();
            }
            else if (type == g_guild.GuildManagerType.Exit) {
                var position = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.position);
                if (position == gc.c_prop.guildPostKey.chairman) {
                    if (gd.guildWarCtrl.isOpening()) {
                        return mo.showMsg(gc.id_c_msgCode.noGuildDisband);
                    }
                    var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
                    mo.showMsg(gc.id_c_msgCode.ifGdisband, gameInfo[5], function () {
                        gd.guildCtrl.exitGuild(gc.c_prop.guildMemberOpKey.dissolveGuild, function (data) {
                            //返回主城
                            self.delegate.close();
                            mo.moduleMgr.curModule.subModules[0].target.close();
                        }, self);
                    }, self);
                }
                else {
                    if (gd.guildWarCtrl.isOpening()) {
                        return mo.showMsg(gc.id_c_msgCode.noGuildOut);
                    }
                    var da = gd.guildCtrl.getExitGuildCD();
                    mo.showMsg(gc.id_c_msgCode.ifQuitGuild, da, function () {
                        gd.guildCtrl.exitGuild(gc.c_prop.guildMemberOpKey.quitGuild, function (data) {
                            //返回主城
                            self.delegate.close();
                            mo.moduleMgr.curModule.subModules[0].target.close();
                        }, self);
                    }, self);
                }
            }
            else if (type == g_guild.GuildManagerType.Notice) {
                g_guild.GuildUpdateNotice.create().setData(guildData).show();
            }
            else if (type == g_guild.GuildManagerType.Setting) {
                g_guild.GuildSetting.create().setData(self.data).show();
            }
            else if (type == 999) {
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var type = self.data.type;
            if (type == g_guild.GuildManagerType.Apply) {
                self.ico_title.source = "ico_ruhuishenqing";
                self.btn_action.icon = "btn_txt_look";
            }
            else if (type == g_guild.GuildManagerType.Exit) {
                var position = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.position);
                if (position == gc.c_prop.guildPostKey.chairman) {
                    self.ico_title.source = "ico_jiesangonghui";
                    self.btn_action.icon = "btn_txt_shenzhong";
                }
                else {
                    self.ico_title.source = "ico_tuicuhanghui";
                    self.btn_action.icon = "btn_txt_shenzhong";
                }
            }
            else if (type == g_guild.GuildManagerType.Notice) {
                self.ico_title.source = "ico_xiugaigonggao";
                self.btn_action.icon = "btn_txt_xiugai";
            }
            else if (type == g_guild.GuildManagerType.Setting) {
                self.ico_title.source = "ico_gonghuishezhi";
                self.btn_action.icon = "btn_txt_setting";
            }
            else if (type == 999) {
                self.ico_title.source = "ico_gonghuipaihang";
                self.btn_action.icon = "btn_txt_look";
            }
        };
        return GuildManagerCell;
    })(mo.gui.ItemRenderer);
    g_guild.GuildManagerCell = GuildManagerCell;
    egret.registerClass(GuildManagerCell,"g_guild.GuildManagerCell");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/4.
 */
var g_guild;
(function (g_guild) {
    var GuildMemberListLayer = (function (_super) {
        __extends(GuildMemberListLayer, _super);
        function GuildMemberListLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildMemberListLayer,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_guild.GuildMemberItem;
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_MANAGER_POSITION_CHANGED, self.reloadData);
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_MEMBER_JOB_CHANGE, self.reset);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            gd.guildCtrl.getMembers(function (data) {
                self.reset();
            }, self);
        };
        p.reloadData = function () {
            var self = this;
            gd.guildCtrl.getMembers(function (data) {
                self.reset();
            }, self);
        };
        p.reset = function () {
            var self = this;
            var guildData = gd.guildCtrl.getData();
            self.setData({ memberData: gd.guildCtrl.getMemberList(), guildData: guildData });
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var guildData = gd.guildCtrl.getData();
            var level = guildData[gc.dsConsts.GuildEntity.lvl];
            var maxMember = gd.guildCtrl.getMaxMember(level);
            var membercount = guildData[gc.dsConsts.GuildEntity.guildPopulation];
            self.label_membercount.text = "行会人数 " + membercount + "/" + maxMember;
            self.label_level.text = "Lv." + level + "   " + guildData[gc.dsConsts.GuildEntity.name];
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.memberData;
        };
        return GuildMemberListLayer;
    })(mo.gui.Dlg);
    g_guild.GuildMemberListLayer = GuildMemberListLayer;
    egret.registerClass(GuildMemberListLayer,"g_guild.GuildMemberListLayer");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/4.
 */
var g_guild;
(function (g_guild) {
    var GuildMemberItem = (function (_super) {
        __extends(GuildMemberItem, _super);
        function GuildMemberItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildMemberItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (self.data.label)
                return;
            var memberData = self.data;
            var level = memberData[gc.dsConsts.GuildMember.lvl];
            var name = memberData[gc.dsConsts.GuildMember.nickName];
            var combat = memberData[gc.dsConsts.GuildMember.combat];
            var upact = memberData[gc.dsConsts.GuildMember.guildAct];
            var position = memberData[gc.dsConsts.GuildMember.position];
            self.label_level.text = "Lv." + level;
            self.label_name.text = name;
            self.label_role.text = gc.c_prop.guildPost[position];
            self.label_attack.text = combat;
            self.label_gongx.text = upact + "";
            var ennoble = memberData[gc.dsConsts.GuildMember.ennoble];
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
            var mLv = gd.guildCtrl.getRankFileLvl(memberData[gc.dsConsts.GuildMember.guildAct]);
            self.label_mLv.text = mLv + "级会员";
            self.ico_head.setData({ icoId: memberData[gc.dsConsts.GuildMember.iconId], vip: memberData[gc.dsConsts.GuildMember.vip] });
            var offlineHour = memberData[gc.dsConsts.GuildMember.offlineHour];
            if (offlineHour <= 0) {
                self.label_loginDate.text = "在线";
            }
            else if (offlineHour <= 24) {
                self.label_loginDate.text = mo.STR.format("%s小时前离开", offlineHour);
            }
            else {
                self.label_loginDate.text = mo.STR.format("%s日未登录", offlineHour / 24 >> 0);
            }
        };
        p._tap_ico_head = function () {
            var self = this;
            var memberData = self.data;
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, { userId: memberData[gc.dsConsts.GuildMember.userId] });
        };
        p._tap_right_rect = function () {
            var self = this;
            var memberData = self.data;
            g_guild.GuildMemberManager.create().setData({ userId: memberData[gc.dsConsts.GuildMember.userId] }).show().onClose(function () {
                self.delegate.reset();
            });
        };
        return GuildMemberItem;
    })(mo.gui.ItemRenderer);
    g_guild.GuildMemberItem = GuildMemberItem;
    egret.registerClass(GuildMemberItem,"g_guild.GuildMemberItem");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/4.
 */
var g_guild;
(function (g_guild) {
    var GuildSearch = (function (_super) {
        __extends(GuildSearch, _super);
        function GuildSearch() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildSearch,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.listLayer = self.data.listLayer;
        };
        p._tap_btn_search = function () {
            var self = this;
            gd.guildCtrl.seekGuild(self.inputName.text, function (data) {
                if (data) {
                    g_guild.GuildSearchResult.create().setData(data).show().onClose(function () {
                        if (self.listLayer && self.listLayer.reset) {
                            self.listLayer.reset();
                        }
                    });
                    self.close();
                }
                else {
                    mo.showMsg(gc.id_c_msgCode.guildIdIsExist);
                }
            }, self);
        };
        return GuildSearch;
    })(mo.gui.Dlg);
    g_guild.GuildSearch = GuildSearch;
    egret.registerClass(GuildSearch,"g_guild.GuildSearch");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/4.
 */
var g_guild;
(function (g_guild) {
    var GuildSearchResult = (function (_super) {
        __extends(GuildSearchResult, _super);
        function GuildSearchResult() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildSearchResult,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_guild.GuildListItem;
        };
        p._data_list_items = function () {
            var self = this;
            return [{ guildData: self.data }];
        };
        return GuildSearchResult;
    })(mo.gui.Dlg);
    g_guild.GuildSearchResult = GuildSearchResult;
    egret.registerClass(GuildSearchResult,"g_guild.GuildSearchResult");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/4.
 */
var g_guild;
(function (g_guild) {
    var GuildSetting = (function (_super) {
        __extends(GuildSetting, _super);
        function GuildSetting() {
            _super.apply(this, arguments);
            this.joinCon = 0;
            this.joinLvlIndex = 0;
            this.conditions = [];
            this.conditionsLevel = [];
        }
        var d = __define,c=GuildSetting,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var guildData = self.data.guildData;
            self.joinCon = guildData[gc.dsConsts.GuildEntity.joinCon];
            self.joinLvl = guildData[gc.dsConsts.GuildEntity.joinLvl];
            self.label_condition.text = gc.c_prop.guildJoinCon[self.joinCon];
            self.label_level.text = self.joinLvl + "";
            self.conditions = [];
            for (var i in gc.c_prop.guildJoinCon) {
                self.conditions.push(i);
            }
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
            self.conditionsLevel = gameCfg[4].split(",");
        };
        p._tap_btn_conditionPre = function () {
            var self = this;
            self.joinCon--;
            var exsits = false;
            for (var i in self.conditions) {
                if (self.conditions[i] == self.joinCon) {
                    exsits = true;
                    break;
                }
            }
            if (!exsits) {
                self.joinCon = self.conditions[self.conditions.length - 1];
            }
            self.label_condition.text = gc.c_prop.guildJoinCon[self.joinCon];
        };
        p._tap_btn_conditionNext = function () {
            var self = this;
            self.joinCon++;
            var exsits = false;
            for (var i in self.conditions) {
                if (self.conditions[i] == self.joinCon) {
                    exsits = true;
                    break;
                }
            }
            if (!exsits) {
                self.joinCon = self.conditions[0];
            }
            self.label_condition.text = gc.c_prop.guildJoinCon[self.joinCon];
        };
        p._tap_btn_LevelNext = function () {
            var self = this;
            var idx = self.conditionsLevel.indexOf(self.joinLvl);
            idx++;
            if (idx > self.conditionsLevel.length - 1) {
                idx = 0;
            }
            self.joinLvl = self.conditionsLevel[idx];
            self.label_level.text = self.joinLvl + "";
        };
        p._tap_btn_LevelPre = function () {
            var self = this;
            var idx = self.conditionsLevel.indexOf(self.joinLvl);
            idx--;
            if (idx < 0) {
                idx = self.conditionsLevel.length - 1;
            }
            self.joinLvl = self.conditionsLevel[idx];
            self.label_level.text = self.joinLvl + "";
        };
        p._tap_btn_Update = function () {
            var self = this;
            var guildData = self.data.guildData;
            gd.guildCtrl.guildSetting(self.joinCon, self.joinLvl, function (data) {
                self.close();
            }, self);
        };
        return GuildSetting;
    })(mo.gui.Dlg);
    g_guild.GuildSetting = GuildSetting;
    egret.registerClass(GuildSetting,"g_guild.GuildSetting");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/4.
 */
var g_guild;
(function (g_guild) {
    var GuildApplyList = (function (_super) {
        __extends(GuildApplyList, _super);
        function GuildApplyList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildApplyList,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_guild.GuildApplyListItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.reloadData();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var guildData = gd.guildCtrl.getData();
            var level = guildData[gc.dsConsts.GuildEntity.lvl];
            var maxMember = gd.guildCtrl.getMaxMember(level);
            var membercount = guildData[gc.dsConsts.GuildEntity.guildPopulation];
            self.label_member.text = "成员人数 " + membercount + "/" + maxMember;
        };
        p.reloadData = function () {
            var self = this;
            gd.guildCtrl.getAppliedMembers(function (data) {
                self.setData({ memberData: data });
                self.dataChanged();
                self.refreshList("list_items");
            }, self);
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.memberData;
        };
        return GuildApplyList;
    })(mo.gui.Dlg);
    g_guild.GuildApplyList = GuildApplyList;
    egret.registerClass(GuildApplyList,"g_guild.GuildApplyList");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/9.
 */
var g_guild;
(function (g_guild) {
    var GuildApplyListItem = (function (_super) {
        __extends(GuildApplyListItem, _super);
        function GuildApplyListItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildApplyListItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (self.data.label) {
                return;
            }
            self.label_lvl.text = "" + self.data[gc.dsConsts.UserEntity.lvl];
            self.label_name.text = self.data[gc.dsConsts.UserEntity.nickName];
            self.label_combat.text = utils.formatByWan(self.data[gc.dsConsts.UserEntity.combat]);
            self.btn_reject.resouce = "btn_gonghui_1";
        };
        p._tap_btn_agree = function () {
            var self = this;
            self.doAction(true);
        };
        p.doAction = function (agree) {
            var self = this;
            var personData = self.data;
            gd.guildCtrl.appliedMembersSet(personData[gc.dsConsts.UserEntity.id], agree, function () {
                self.delegate.reloadData();
            }, self);
        };
        p._tap_btn_reject = function () {
            var self = this;
            self.doAction(false);
        };
        return GuildApplyListItem;
    })(mo.gui.ItemRenderer);
    g_guild.GuildApplyListItem = GuildApplyListItem;
    egret.registerClass(GuildApplyListItem,"g_guild.GuildApplyListItem");
})(g_guild || (g_guild = {}));

var g_guild;
(function (g_guild) {
    var GuildMessageAlert = (function (_super) {
        __extends(GuildMessageAlert, _super);
        function GuildMessageAlert() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildMessageAlert,p=c.prototype;
        p._tap_btn_cancel = function () {
            var self = this;
            self.close();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var msg = self.data.msg;
            var icon = self.data.icon;
            self.label_message.text = msg;
            self.container.title = icon;
        };
        p._tap_btn_confirm = function () {
            var self = this;
            self.close();
            var callback = self.data.callback;
            if (callback)
                callback();
        };
        return GuildMessageAlert;
    })(mo.gui.Dlg);
    g_guild.GuildMessageAlert = GuildMessageAlert;
    egret.registerClass(GuildMessageAlert,"g_guild.GuildMessageAlert");
})(g_guild || (g_guild = {}));

var g_guild;
(function (g_guild) {
    var GuildContributeItem = (function (_super) {
        __extends(GuildContributeItem, _super);
        function GuildContributeItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildContributeItem,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (self.data.hasOwnProperty("label"))
                return;
            self.reset();
        };
        p.reset = function () {
            var self = this;
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var actInfo = self.data;
            var actData = guildPersonalData[gc.dsConsts.GuildPersonalEntity.actData];
            var actId = actInfo[gc.c_guildAct_id];
            var name = actInfo[gc.c_guildAct_name];
            var act = actInfo[gc.c_guildAct_act];
            //var actcount = actInfo[gc.c_guildAct_actCount];
            var num = actInfo[gc.c_guildAct_num];
            var gold = actInfo[gc.c_guildAct_gold];
            var icon = actInfo[gc.c_guildAct_icon];
            var currentAct = gd.guildPersonalCtrl.getActNum(actId);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildAct);
            self.label_desc.text = name;
            self.label_act.text = "贡献 +" + act;
            self.label_limit.text = currentAct + "/" + num;
            self.label_limit.visible = num > 0;
            self.img_done.visible = num > 0 && currentAct >= num;
            self.ico_item.source = resHelper.getTaskIconPath(icon);
            if (gold > 0) {
                self.label_gold.text = "金币 +" + gold;
            }
            self.label_gold.visible = gold > 0;
            self.label_vip.visible = false;
            if (actId == 6 || actId == 7 || actId == 8) {
                self.btn_act.icon = "btn_txt_shangxiang";
                //self.btn_act.visible = true;
                self.btn_act.visible = !self.img_done.visible;
                if (actId == 7 || actId == 8) {
                    self.label_vip.visible = true;
                }
            }
            else {
                self.btn_act.icon = "btn_txt_qianwang";
                var linkArg = actInfo[gc.c_guildAct_uiLink];
                self.btn_act.visible = (linkArg.length >= 2);
                if (self.btn_act.visible)
                    self.btn_act.visible = !self.img_done.visible;
            }
        };
        p._tap_btn_act = function () {
            var self = this;
            var actInfo = self.data;
            var actId = actInfo[gc.c_guildAct_id];
            if (actId == 6 || actId == 7 || actId == 8) {
                gd.guildPersonalCtrl.pickAct(actId, function () {
                    self.reset();
                }, self);
            }
            else {
                var linkArg = actInfo[gc.c_guildAct_uiLink];
                var moduleId = linkArg[0];
                var subModuleId = linkArg[1];
                var moduleParam;
                var moduleId;
                switch (moduleId) {
                    case 6:
                        moduleParam = { subModuleId: subModuleId };
                        moduleId = g_consts.moduleId.shop;
                        break;
                    case 4:
                        moduleParam = { subModuleId: subModuleId };
                        moduleId = g_consts.moduleId.forge;
                        break;
                    case 3:
                        moduleParam = { subModuleId: subModuleId };
                        moduleId = g_consts.moduleId.role;
                        break;
                    case 2:
                        moduleParam = { subModuleId: subModuleId };
                        moduleId = g_consts.moduleId.home;
                        break;
                    case 1:
                        moduleParam = { subModuleId: subModuleId };
                        moduleId = g_consts.moduleId.fight;
                        break;
                }
                if (moduleId && moduleParam) {
                    mo.moduleMgr.runModule(moduleId, moduleParam);
                    self.delegate.close();
                }
            }
        };
        return GuildContributeItem;
    })(mo.gui.ItemRenderer);
    g_guild.GuildContributeItem = GuildContributeItem;
    egret.registerClass(GuildContributeItem,"g_guild.GuildContributeItem");
})(g_guild || (g_guild = {}));

var g_guild;
(function (g_guild) {
    var GuildMineItem = (function (_super) {
        __extends(GuildMineItem, _super);
        function GuildMineItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildMineItem,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._tap_btn_enter = function () {
            g_guild.GuildContributeLayer.create().show();
        };
        return GuildMineItem;
    })(mo.gui.Layer);
    g_guild.GuildMineItem = GuildMineItem;
    egret.registerClass(GuildMineItem,"g_guild.GuildMineItem");
})(g_guild || (g_guild = {}));

/**
 * Created by john on 15/12/10.
 */
var g_guild;
(function (g_guild) {
    var GuildUpdateNotice = (function (_super) {
        __extends(GuildUpdateNotice, _super);
        function GuildUpdateNotice() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildUpdateNotice,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.inputNotice.text = self.data[gc.dsConsts.GuildEntity.notice];
        };
        p._tap_btn_confirm = function () {
            var self = this;
            gd.guildCtrl.setNotice(self.inputNotice.text, function (data) {
                self;
                self.close();
            }, self);
        };
        return GuildUpdateNotice;
    })(mo.gui.Dlg);
    g_guild.GuildUpdateNotice = GuildUpdateNotice;
    egret.registerClass(GuildUpdateNotice,"g_guild.GuildUpdateNotice");
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/10/5.
 */
var g_guild;
(function (g_guild) {
    var GuildLotteryGain = (function (_super) {
        __extends(GuildLotteryGain, _super);
        function GuildLotteryGain() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildLotteryGain,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.outsideClosable = true;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildAct);
            self.label_cost.text = gameInfo[2];
            self.label_cost10.text = gameInfo[11];
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.items;
        };
        p._tap_btn_again1 = function () {
            var self = this;
            gd.guildCtrl.lottery(1, function (items) {
                items = utils.itemObj2ObjArr(items);
                GuildLotteryGain.create().setData({ items: items, delegate: self.data.delegate }).show();
                self.data.delegate.reset();
                self.close();
            }, self);
        };
        p._tap_btn_again2 = function () {
            var self = this;
            gd.guildCtrl.lottery(10, function (items) {
                items = utils.itemObj2ObjArr(items);
                GuildLotteryGain.create().setData({ items: items, delegate: self.data.delegate }).show();
                self.data.delegate.reset();
                self.close();
            }, self);
        };
        return GuildLotteryGain;
    })(mo.gui.Dlg);
    g_guild.GuildLotteryGain = GuildLotteryGain;
    egret.registerClass(GuildLotteryGain,"g_guild.GuildLotteryGain");
})(g_guild || (g_guild = {}));

var g_guild;
(function (g_guild) {
    var GuildMemberManager = (function (_super) {
        __extends(GuildMemberManager, _super);
        function GuildMemberManager() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildMemberManager,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            // 注册事件监听
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_MANAGER_POSITION_CHANGED, self.dataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.btn_get.visible = false;
            self.btn_out.visible = false;
            self.btn_change.visible = false;
            self.btn_release.visible = false;
            self.btn_setE.visible = false;
            self.btn_detail.visible = true;
            var memberData = gd.guildCtrl.getMemberByUserId(self.data.userId);
            var personPosition = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.position);
            var userPostion = memberData[gc.dsConsts.GuildMember.position];
            if (personPosition == gc.c_prop.guildPostKey.chairman) {
                if (userPostion != gc.c_prop.guildPostKey.chairman) {
                    if (userPostion == gc.c_prop.guildPostKey.viceChairman) {
                        self.btn_release.visible = true;
                    }
                    else if (userPostion == gc.c_prop.guildPostKey.rankFile) {
                        self.btn_get.visible = true;
                    }
                    self.btn_out.visible = true;
                    self.btn_change.visible = true;
                }
                self.btn_setE.visible = true;
                self.btn_detail.visible = false;
            }
            else if (personPosition == gc.c_prop.guildPostKey.viceChairman) {
                if (userPostion == gc.c_prop.guildPostKey.rankFile) {
                    self.btn_out.visible = true;
                    self.btn_setE.visible = true;
                    self.btn_detail.visible = false;
                }
                else if (userPostion == gc.c_prop.guildPostKey.viceChairman) {
                    self.btn_setE.visible = true;
                    self.btn_detail.visible = false;
                }
                else {
                    self.btn_detail.visible = true;
                }
            }
            if (!self.btn_change.visible && !self.btn_out.visible && !self.btn_get.visible && !self.btn_release.visible) {
                self.btn_setE.x = 157;
                self.btn_setE.y = 277;
            }
            var level = memberData[gc.dsConsts.GuildMember.lvl];
            var name = memberData[gc.dsConsts.GuildMember.nickName];
            var combat = memberData[gc.dsConsts.GuildMember.combat];
            var upact = memberData[gc.dsConsts.GuildMember.guildAct];
            var position = memberData[gc.dsConsts.GuildMember.position];
            var mLv = gd.guildCtrl.getRankFileLvl(upact);
            self.ico_head.setData({ icoId: memberData[gc.dsConsts.GuildMember.iconId], vip: memberData[gc.dsConsts.GuildMember.vip] });
            self.label_level.text = "Lv." + level;
            self.label_name.text = name;
            self.label_position.text = gc.c_prop.guildPost[position];
            self.label_attack.text = combat + "";
            self.label_upact.text = upact + "";
            self.label_memberLvl.text = mLv + "级会员";
            var ennoble = memberData[gc.dsConsts.GuildMember.ennoble];
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
        };
        p.doMember = function (type) {
            var self = this;
            var memberData = gd.guildCtrl.getMemberByUserId(self.data.userId);
            var userid = memberData[gc.dsConsts.GuildMember.userId];
            var userName = memberData[gc.dsConsts.GuildMember.nickName];
            gd.guildCtrl.opMember(type, userid, userName, function (data) {
                self.close();
            }, self);
        };
        //提升职务
        p._tap_btn_get = function () {
            var self = this;
            self.doMember(gc.c_prop.guildMemberOpKey.increase);
        };
        //踢出公会
        p._tap_btn_out = function () {
            var self = this;
            self.doMember(gc.c_prop.guildMemberOpKey.kick);
        };
        //解除职务
        p._tap_btn_release = function () {
            var self = this;
            self.doMember(gc.c_prop.guildMemberOpKey.release);
        };
        //转让会长
        p._tap_btn_change = function () {
            var self = this;
            self.doMember(gc.c_prop.guildMemberOpKey.trans);
        };
        p._tap_btn_setE = function () {
            var self = this;
            g_guild.GuildSetEnnoble.create().setData(self.data).show().onClose(function () {
                self.dataChanged();
            });
        };
        p._tap_btn_detail = function () {
            var self = this;
            g_guild.GuildEnnobleDetail.create().setData(self.data).show();
        };
        return GuildMemberManager;
    })(mo.gui.Dlg);
    g_guild.GuildMemberManager = GuildMemberManager;
    egret.registerClass(GuildMemberManager,"g_guild.GuildMemberManager");
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/16.
 */
var g_guild;
(function (g_guild) {
    var GuildRank = (function (_super) {
        __extends(GuildRank, _super);
        function GuildRank() {
            _super.apply(this, arguments);
            this.ranks = [];
        }
        var d = __define,c=GuildRank,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_ranks = g_guild.GuildRankItem;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var rankData = self.data.rankData;
            var myRank = rankData[0] ? rankData[0] : 0;
            var myData = rankData[1];
            var list = rankData[2];
            var guildNames = rankData[4];
            var rankType = myData[gc.dsConsts.UserRankEntity.rankType];
            self.ranks.length = 0;
            for (var i = 0; i < list.length; ++i) {
                self.ranks[i] = { rank: i + 1, userData: list[i], guildNames: guildNames };
            }
            self.label_myRankBy.text = self.getRankDesc(rankType) + ": ";
            self.label_myRankDesc.text = rankType == gc.c_prop.rankTypeKey.chairmanCombatRank ? "行会会长排行: " : "我的行会排行: ";
            self.label_myRank.text = myRank.toString();
            self.label_myRankValue.text = utils.formatByWan(myData[gc.dsConsts.UserRankEntity.rankValue]);
            self.refreshList("list_ranks");
        };
        p.getRankDesc = function (type) {
            if (type == gc.c_prop.rankTypeKey.guildRank) {
                return "行会等级";
            }
            else if (type == gc.c_prop.rankTypeKey.guildCombatRank) {
                return "行会战力";
            }
            else if (type == gc.c_prop.rankTypeKey.chairmanCombatRank) {
                return "会长战力";
            }
            return "";
        };
        p._data_list_ranks = function () {
            var self = this;
            return self.ranks;
        };
        p.getRankList = function (type) {
            var self = this;
            gd.rankCtrl.getAllRankArr(type, function (data) {
                if (data)
                    self.setData({ rankData: data });
            }, self);
        };
        p._tap_tab_rank = function () {
            var self = this;
            var selectedIndex = self.tab_rank.selectedIndex;
            var types = [gc.c_prop.rankTypeKey.guildRank, gc.c_prop.rankTypeKey.guildCombatRank, gc.c_prop.rankTypeKey.chairmanCombatRank];
            this.getRankList(types[selectedIndex]);
        };
        return GuildRank;
    })(mo.gui.Dlg);
    g_guild.GuildRank = GuildRank;
    egret.registerClass(GuildRank,"g_guild.GuildRank");
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/16.
 */
var g_guild;
(function (g_guild) {
    var GuildRankItem = (function (_super) {
        __extends(GuildRankItem, _super);
        function GuildRankItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildRankItem,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data.userData)
                return;
            var userData = self.data.userData;
            var guildNames = self.data.guildNames;
            var rank = self.data.rank;
            var rankStrs = ["1st", "2nd", "3rd"];
            var rankType = userData[gc.dsConsts.UserRankEntity.rankType];
            //if(rank<=3){
            //    self.ico_rank.source = "ico_arena_"+rankStrs[rank-1];
            //    self.ico_rank.visible = true;
            //    self.label_rank.visible = false;
            //}else{
            self.label_rank.text = rank;
            //self.ico_rank.visible = false;
            //self.label_rank.visible = true;
            //}
            //self.ico_head.setData({icoId:userData[gc.dsConsts.UserRankEntity.iconId], vip:userData[gc.dsConsts.UserRankEntity.pkWinCount]});
            var guildName = guildNames[userData[gc.dsConsts.UserRankEntity.userId]];
            self.label_userName.text = userData[gc.dsConsts.UserRankEntity.userName];
            self.label_guildName.text = guildName; //mo.STR.format("[ubb color=#9900cd]%s[/ubb]",mo.trans4UBB(guildName));
            if (rankType == gc.c_prop.rankTypeKey.guildRank) {
                self.label_level.text = mo.STR.format("Lv.%s", userData[gc.dsConsts.UserRankEntity.rankValue]);
            }
            else {
                self.label_level.text = utils.formatByWan(userData[gc.dsConsts.UserRankEntity.rankValue]);
            }
            self.label_id.text = userData[gc.dsConsts.UserRankEntity.userId];
            self.label_rankType.text = self.getRankDesc(rankType);
        };
        p.getRankDesc = function (type) {
            if (type == gc.c_prop.rankTypeKey.guildRank) {
                return "";
            }
            else if (type == gc.c_prop.rankTypeKey.guildCombatRank) {
                return "战力:";
            }
            else if (type == gc.c_prop.rankTypeKey.chairmanCombatRank) {
                return "战力:";
            }
            return "";
        };
        return GuildRankItem;
    })(mo.gui.ItemRenderer);
    g_guild.GuildRankItem = GuildRankItem;
    egret.registerClass(GuildRankItem,"g_guild.GuildRankItem");
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/17.
 */
var g_guild;
(function (g_guild) {
    var GuildSetEnnoble = (function (_super) {
        __extends(GuildSetEnnoble, _super);
        function GuildSetEnnoble() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildSetEnnoble,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_guild.GuildEnnobleItem;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var memberData = gd.guildCtrl.getMemberByUserId(self.data.userId);
            var level = memberData[gc.dsConsts.GuildMember.lvl];
            var name = memberData[gc.dsConsts.GuildMember.nickName];
            var combat = memberData[gc.dsConsts.GuildMember.combat];
            var upact = memberData[gc.dsConsts.GuildMember.guildAct];
            var position = memberData[gc.dsConsts.GuildMember.position];
            var mLv = gd.guildCtrl.getRankFileLvl(memberData[gc.dsConsts.GuildMember.guildAct]);
            self.label_myGuildLv.text = mLv + "级会员";
            self.ico_head.setData({ icoId: memberData[gc.dsConsts.GuildMember.iconId], vip: memberData[gc.dsConsts.GuildMember.vip] });
            self.label_lv.text = "Lv." + level;
            self.label_name.text = name;
            self.label_position.text = gc.c_prop.guildPost[position];
            self.label_combat.text = combat + "";
            self.label_myExp.text = upact + "";
            var ennoble = memberData[gc.dsConsts.GuildMember.ennoble];
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
            process.nextTick(function () {
                process.nextTick(function () {
                    for (var i = 0; i < self.list_items.dataProvider.length; ++i) {
                        if (self.list_items.dataProvider.getItemAt(i).ennobleData[0] == ennoble) {
                            self.list_items.selectedIndex = i;
                            return;
                        }
                    }
                });
            });
        };
        p._data_list_items = function () {
            var self = this;
            var awardUI = gd.guildCtrl.getAwardUi();
            var datas = [];
            for (var i = 0; i < awardUI.length; ++i) {
                datas.push({ memberData: gd.guildCtrl.getMemberByUserId(self.data.userId), ennobleData: awardUI[i] });
            }
            return datas;
        };
        p._tap_btn_cancel = function () {
            this.close();
        };
        p._tap_btn_confirm = function () {
            var self = this;
            if (!self.list_items.selectedItem) {
                return mo.showMsg(gc.id_c_msgCode.notChooseLv);
            }
            var ennobleId = self.list_items.selectedItem.ennobleData[0];
            self.setEnnoble(ennobleId);
        };
        p.setEnnoble = function (type) {
            var self = this;
            var memberData = gd.guildCtrl.getMemberByUserId(self.data.userId);
            var userId = memberData[gc.dsConsts.GuildMember.userId];
            gd.guildCtrl.setEnnoble(userId, type, function () {
                memberData[gc.dsConsts.GuildMember.ennoble] = type;
                var ennoble = memberData[gc.dsConsts.GuildMember.ennoble];
                self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
                self.close();
            }, self);
        };
        return GuildSetEnnoble;
    })(mo.gui.Dlg);
    g_guild.GuildSetEnnoble = GuildSetEnnoble;
    egret.registerClass(GuildSetEnnoble,"g_guild.GuildSetEnnoble");
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/17.
 */
var g_guild;
(function (g_guild) {
    var GuildEnnobleItem = (function (_super) {
        __extends(GuildEnnobleItem, _super);
        function GuildEnnobleItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildEnnobleItem,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            //【爵位id,已有数量，总数，要求会员等级,加成,开启公会等级】
            var memberData = self.data.memberData;
            var data = self.data.ennobleData;
            if (!data)
                return;
            var ennoble = data[0];
            var numC = data[1];
            var numT = data[2];
            var needLv1 = data[3];
            var addScale = data[4];
            var needLv2 = data[5];
            var mLv = gd.guildCtrl.getRankFileLvl(memberData[gc.dsConsts.GuildMember.guildAct]);
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
            if (numT == 999) {
                self.label_num.text = "无限";
            }
            else {
                self.label_num.text = mo.STR.format("%s/%s", numC, numT);
            }
            if (mLv >= needLv1) {
                self.label_need1.textColor = 0xffffff;
            }
            else {
                self.label_need1.textColor = 0xff0000;
            }
            self.label_need1.text = needLv1 + "级会员";
            if (needLv2) {
                self.label_addScale.text = mo.STR.format("%s%", Math.round(addScale / 100));
                self.label_need2.text = mo.STR.format("行会%s级开启", needLv2);
            }
            self.enabled = !needLv2;
            self.grp_addScale.visible = needLv2;
            self.grp_num.visible = !self.grp_addScale.visible;
            self.label_need2.visible = needLv2;
        };
        return GuildEnnobleItem;
    })(mo.gui.ItemRenderer);
    g_guild.GuildEnnobleItem = GuildEnnobleItem;
    egret.registerClass(GuildEnnobleItem,"g_guild.GuildEnnobleItem");
})(g_guild || (g_guild = {}));

/**
 * Created by Administrator on 2015/12/17.
 */
var g_guild;
(function (g_guild) {
    var GuildEnnobleDetail = (function (_super) {
        __extends(GuildEnnobleDetail, _super);
        function GuildEnnobleDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildEnnobleDetail,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_guild.GuildEnnobleItem;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var guildData = gd.guildCtrl.getData();
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var lv = guildData[gc.dsConsts.GuildEntity.lvl];
            var guildAct = guildPersonalData[gc.dsConsts.GuildPersonalEntity.guildAct];
            var myLv = gd.guildCtrl.getRankFileLvl(guildAct);
            var ennoble = guildPersonalData[gc.dsConsts.GuildPersonalEntity.ennoble];
            self.label_guildLv.text = "Lv." + lv;
            self.label_myLv.text = myLv + "级会员";
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
        };
        p._data_list_items = function () {
            var self = this;
            var awardUI = gd.guildCtrl.getAwardUi();
            var datas = [];
            for (var i = 0; i < awardUI.length; ++i) {
                datas.push({ memberData: self.data, ennobleData: awardUI[i] });
            }
            return datas;
        };
        return GuildEnnobleDetail;
    })(mo.gui.Dlg);
    g_guild.GuildEnnobleDetail = GuildEnnobleDetail;
    egret.registerClass(GuildEnnobleDetail,"g_guild.GuildEnnobleDetail");
})(g_guild || (g_guild = {}));

