/**
 * Created by SmallAiTT on 2015/7/11.
 */
var g_home;
(function (g_home) {
    /**
     *
     * @author
     *
     */
    var HomeBg = (function (_super) {
        __extends(HomeBg, _super);
        function HomeBg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HomeBg,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self.checkRedPoint);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.img_redGuild.visible = false;
            var subModuleId = self.moduleParam.subModuleId;
            switch (subModuleId) {
                case g_consts.HS_SUBMID_EQUIP_COPY:
                    self._tap_btn_equip_copy();
                    break;
                case g_consts.HS_SUBMID_BOSS_COPY:
                    self._tap_btn_pvboss();
                    break;
                case g_consts.HS_SUBMID_STATE_COPY:
                    self._tap_btn_state_copy();
                    break;
                case g_consts.HS_SUBMID_VIP_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.vipCopy, self.moduleParam);
                    break;
                case g_consts.HS_SUBMID_ARENA_SHOP:
                    mo.moduleMgr.runModule(g_consts.moduleId.arenaShop);
                    break;
                case g_consts.HS_SUBMID_ARENA:
                    self._tap_btn_arena();
                    break;
                case g_consts.HS_SUBMID_GUILD:
                    gd.guildCtrl.getInfo(function (data) {
                        var isGuild = data[0];
                        if (!isGuild) {
                            mo.moduleMgr.runModule(g_consts.moduleId.guildListLayer);
                        }
                        else {
                            mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer, { bossId: self.moduleParam["bossId"] });
                        }
                    }, self);
                    break;
                case g_consts.HS_SUBMID_KING:
                    self._tap_btn_king();
                    break;
                case g_consts.HS_SUBMID_COFFERS_SERVER:
                    mo.moduleMgr.runModule(g_consts.moduleId.coffersServer, self.moduleParam);
                    break;
                case g_consts.HS_SUBMID_GUILD_COPY_BOSS:
                    mo.moduleMgr.runModule(g_consts.moduleId.guildCopyBoss, { section: self.moduleParam["section"] });
                    break;
                case g_consts.HS_SUBMID_TOWER:
                    self._tap_btn_pagoda();
                    break;
            }
        };
        p.onTouch = function (event) {
            var self = this;
            if (event.type == "touchBegin") {
                if (event.target == self.btn_arena) {
                    self.img_arena.visible = true;
                }
                else if (event.target == self.btn_guild) {
                    self.img_guild.visible = true;
                }
                else if (event.target == self.btn_king) {
                    self.img_King.visible = true;
                }
                else if (event.target == self.btn_copy) {
                    self.img_copy.visible = true;
                }
                else if (event.target == self.btn_coffer) {
                    self.img_coffer.visible = true;
                }
                else if (event.target == self.btn_gang) {
                    self.img_gang.visible = true;
                }
                else if (event.target == self.btn_pagoda) {
                    self.img_Pagoda.visible = true;
                }
            }
            else if (event.type == "touchMove") {
                if (event.target == self.btn_arena) {
                    self.img_arena.visible = false;
                }
                else if (event.target == self.btn_guild) {
                    self.img_guild.visible = false;
                }
                else if (event.target == self.btn_king) {
                    self.img_King.visible = false;
                }
                else if (event.target == self.btn_copy) {
                    self.img_copy.visible = false;
                }
                else if (event.target == self.btn_coffer) {
                    self.img_coffer.visible = false;
                }
                else if (event.target == self.btn_gang) {
                    self.img_gang.visible = false;
                }
                else if (event.target == self.btn_pagoda) {
                    self.img_Pagoda.visible = false;
                }
            }
            else if (event.type == "touchEnd") {
                if (event.target == self.btn_arena) {
                    self.img_arena.visible = false;
                }
                else if (event.target == self.btn_guild) {
                    self.img_guild.visible = false;
                }
                else if (event.target == self.btn_king) {
                    self.img_King.visible = false;
                }
                else if (event.target == self.btn_copy) {
                    self.img_copy.visible = false;
                }
                else if (event.target == self.btn_coffer) {
                    self.img_coffer.visible = false;
                }
                else if (event.target == self.btn_gang) {
                    self.img_gang.visible = false;
                }
                else if (event.target == self.btn_pagoda) {
                    self.img_Pagoda.visible = false;
                }
            }
        };
        p.onExit = function () {
            var self = this;
            self.btn_arena.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_king.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_guild.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_coffer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_gang.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_pagoda.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_arena.removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_king.removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_guild.removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_coffer.removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_gang.removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_pagoda.removeEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_arena.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_king.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_guild.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_coffer.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_gang.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_pagoda.removeEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.checkRedPoint();
        };
        p.checkRedPoint = function () {
            var self = this;
            self.img_redArena.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.arena1);
            self.img_redCopy.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.copy_boss);
            self.img_redKing.visible = false;
            //点击监听
            self.btn_arena.addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_king.addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_guild.addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_copy.addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_coffer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_gang.addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_pagoda.addEventListener(egret.TouchEvent.TOUCH_BEGIN, self.onTouch, self);
            self.btn_arena.addEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_king.addEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_guild.addEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_copy.addEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_coffer.addEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_gang.addEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_pagoda.addEventListener(egret.TouchEvent.TOUCH_MOVE, self.onTouch, self);
            self.btn_arena.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_king.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_guild.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_copy.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_coffer.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_gang.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
            self.btn_pagoda.addEventListener(egret.TouchEvent.TOUCH_END, self.onTouch, self);
        };
        p._tap_btn_equip_copy = function () {
            var self = this;
            //ws.recordEvent("进入【装备副本】模块", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.equipCopy);
        };
        p._tap_btn_pvboss = function () {
            var self = this;
            //ws.recordEvent("进入【炼狱BOSS】模块", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.bossCopy);
        };
        p._tap_btn_state_copy = function () {
            var self = this;
            //ws.recordEvent("进入【元神副本】模块", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.stateCopy);
        };
        p._tap_btn_arena = function () {
            var self = this;
            //ws.recordEvent("进入【竞技场】模块", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.arena);
        };
        p._tap_btn_guild = function () {
            var self = this;
            gd.guildCtrl.getInfo(function (data) {
                var isGuild = data[0];
                if (!isGuild) {
                    mo.moduleMgr.runModule(g_consts.moduleId.guildListLayer);
                }
                else {
                    mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer);
                }
            }, self);
        };
        p._tap_btn_king = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.king);
        };
        p._tap_btn_copy = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.copyEntry);
        };
        p._tap_btn_gang = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.coffersServer);
        };
        p._tap_btn_coffer = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.coffers);
        };
        p._tap_btn_pagoda = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.tower);
        };
        p._tap_btn_villian = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.villian);
        };
        p._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        return HomeBg;
    })(mo.gui.Layer);
    g_home.HomeBg = HomeBg;
    egret.registerClass(HomeBg,"g_home.HomeBg");
})(g_home || (g_home = {}));

/**
 * Created by SmallAiTT on 2015/7/15.
 */
var g_home;
(function (g_home) {
    logger.initLogger(g_home, "g-home");
    logger.setLvl("g-home", 4);
    var HomeScene = (function (_super) {
        __extends(HomeScene, _super);
        function HomeScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HomeScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            g_base.modIdx = 1;
            // 显示背景
            var layer = g_home.HomeBg.create();
            layer.moduleParam = self.moduleParam;
            layer.show();
            g_mid.HomeMidBar.create().show();
            //下排按钮
            var bar = g_mid.HomeBottomBar.create();
            bar.moduleParam = self.moduleParam;
            bar.show();
            //中间聊天层
            g_mid.BaseMidBar.create().show();
            g_base.BaseBottomBar.create().show();
            g_base.BaseTopBar.create('HomeScene').show();
        };
        p.openSubModule = function (subModuleId, moduleParam) {
            var self = this;
            switch (subModuleId) {
                case g_consts.HS_SUBMID_DAILY:
                    mo.moduleMgr.runModule(g_consts.moduleId.taskDlg);
                    break;
                case g_consts.HS_SUBMID_SIGN:
                    mo.moduleMgr.runModule(g_consts.moduleId.fuliDlg);
                    break;
                case g_consts.HS_SUBMID_VIP_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.vipCopy, self.moduleParam);
                    break;
                case g_consts.HS_SUBMID_EQUIP_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.equipCopy);
                    break;
                case g_consts.HS_SUBMID_BOSS_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.bossCopy);
                    break;
                case g_consts.HS_SUBMID_STATE_COPY:
                    mo.moduleMgr.runModule(g_consts.moduleId.stateCopy);
                    break;
                case g_consts.HS_SUBMID_ARENA_SHOP:
                    mo.moduleMgr.runModule(g_consts.moduleId.arenaShop);
                    break;
                case g_consts.HS_SUBMID_ARENA:
                    mo.moduleMgr.runModule(g_consts.moduleId.arena);
                    break;
                case g_consts.HS_SUBMID_GUILD:
                    gd.guildCtrl.getInfo(function (data) {
                        var isGuild = data[0];
                        if (!isGuild) {
                            mo.moduleMgr.runModule(g_consts.moduleId.guildListLayer);
                        }
                        else {
                            mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer, moduleParam);
                        }
                    }, self);
                    break;
                case g_consts.HS_SUBMID_KING:
                    mo.moduleMgr.runModule(g_consts.moduleId.king);
                    break;
                case g_consts.HS_SUBMID_COFFERS_SERVER:
                    mo.moduleMgr.runModule(g_consts.moduleId.coffersServer, moduleParam);
                    break;
                case g_consts.HS_SUBMID_GUILD_COPY_BOSS:
                    mo.moduleMgr.runModule(g_consts.moduleId.guildCopyBoss, { section: moduleParam["section"] });
                    break;
                case g_consts.HS_SUBMID_TOWER:
                    mo.moduleMgr.runModule(g_consts.moduleId.tower);
                    break;
                case g_consts.HS_SUBMID_HEART:
                    mo.moduleMgr.runModule(g_consts.moduleId.heart);
                    break;
            }
        };
        return HomeScene;
    })(mo.gui.UIScene);
    g_home.HomeScene = HomeScene;
    egret.registerClass(HomeScene,"g_home.HomeScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = HomeScene;
        moduleCfgItem.onValid(function (moduleParam) {
            var openLvl, c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            if (moduleParam && moduleParam.subModuleId == 0) {
                openLvl = c_open[gc.id_c_open.equipCopy][gc.c_open_lvlRequired];
            }
            else if (moduleParam && moduleParam.subModuleId == 1) {
                openLvl = c_open[gc.id_c_open.bossCopy][gc.c_open_lvlRequired];
            }
            else if (moduleParam && moduleParam.subModuleId == 2) {
                openLvl = c_open[gc.id_c_open.reamCopy][gc.c_open_lvlRequired];
            }
            else if (moduleParam && moduleParam.subModuleId == 3) {
                openLvl = c_open[gc.id_c_open.stoneShop][gc.c_open_lvlRequired];
            }
            else if (moduleParam && moduleParam.subModuleId == 4) {
                openLvl = c_open[gc.id_c_open.arena][gc.c_open_lvlRequired];
            }
            if ((openLvl != null) && openLvl > gd.userCtrl.getLvl()) {
                mo.showMsg(gc.id_c_msgCode.noRoleLvl, openLvl);
                return false;
            }
            return true;
        });
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
    });
})(g_home || (g_home = {}));

