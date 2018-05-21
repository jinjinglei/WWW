/**
 * Created by Administrator on 2015/9/17.
 */
var g_fight;
(function (g_fight) {
    g_fight.isShowOffline = false;
    var FightLayer = (function (_super) {
        __extends(FightLayer, _super);
        function FightLayer() {
            _super.apply(this, arguments);
            this.isTreasureViewsShowing = false;
            this.isTreasureViewsNeedRebuild = -1;
            this.getEnemyListLeftMillisecond = -1;
            this.sendTime = 0;
        }
        var d = __define,c=FightLayer,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.FightCtrl, gd.FightCtrl.ON_START_PVP_FIGHT, self.onStartPvpFight);
            //self.registerClassByKey(gd.FightCtrl, gd.FightCtrl.ON_NEXT_LOOT, self.onNextLoot);
            self.registerClassByKey(gd.FightCtrl, gd.FightCtrl.ON_ENTER_COPY, self.onEnterCopy);
            //self.registerClassByKey(gd.BossFightCtrl, gd.BossFightCtrl.ON_ENTER_WORLD_BOSS, self.onEnterWorldBoss);
            self.registerClassByKey(gd.HeroCtrl, gd.HeroCtrl.ON_CALL_HERO, self.onCallHero);
            //self.registerClassByKey(gd.HeroCtrl, gd.HeroCtrl.ON_FIGHT_HERO_CHANGE, self.onFightHeroChange);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self.checkRedPoint);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.lvl.toString(), self.lvlChange);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.exData.toString(), self.autoFightChange);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.medalTitle.toString(), self.onMedalChange);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.curHp.toString(), self.worldBossCurHpChange);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.myHurt.toString(), self.worldBossMyHurtChange);
            self.registerClassByKey(gd.BossFightEntityCtrl, gc.dsConsts.BossData.inspireEndTime.toString(), self.worldBossGWTimeChange);
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self.onWorldBossOpenChanged);
            self.registerClassByKey(gd.RedEnvelopeCtrl, gd.RedEnvelopeCtrl.ON_REDENVELOPE_UPDATE, self.onRedEnvelopeChanged);
            self.registerClassByKey(gd.KingCtrl, gd.KingCtrl.ON_KING_BUFF_CHANGE, self.onKingBuffChanged);
            //self.registerClassByKey(gd.PkOutCtrl, gc.dsConsts.PkOutEntity.pkValue.toString(), self.resetPvpEnemyView);
            mo.emitter.on(gd.HeroCtrl.ON_FIGHT_HERO_CHANGE, self.onFightHeroChange, self);
            mo.emitter.on(gd.FightCtrl.ON_NEXT_LOOT, self.onNextLoot, self);
        };
        p.checkRedPoint = function () {
            var self = this;
            self.ico_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.pkout1);
            self.ico_bePkRed.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.bePkKill);
        };
        p.lvlChange = function () {
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.autoFight][gc.c_open_lvlRequired];
            if (gd.userCtrl.getLvl() >= needLvl) {
                if (gd.userCtrl.isAutoFight()) {
                    mo.setLocalStorageItem("hasTapAuto", 1);
                }
                if (mo.getLocalStorageItem("hasTapAuto")) {
                    self.ico_autoLight.visible = false;
                }
                else {
                    self.ico_autoLight.visible = true;
                    egret.Tween.get(self.ico_autoLight, { loop: true }).to({ alpha: 0 }, 800).to({ alpha: 1 }, 800);
                }
            }
            else {
                self.ico_autoLight.visible = false;
            }
            self.label_noActive.visible = !gd.userCtrl.isAutoFight();
            //var lotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, 0);
            //self.btn_zhenQi.visible = gd.userCtrl.getLvl() >= lotusInfo[gc.c_demonLotus_treaNeedUserLvl];
        };
        p.autoFightChange = function () {
            var self = this;
            self.ico_auto.source = gd.userCtrl.isAutoFight() ? "ico_autofight_enable" : "ico_autofight_disable";
            self.label_noActive.visible = !gd.userCtrl.isAutoFight();
        };
        p.onMedalChange = function () {
            g_fight.mapView.onMedalChange();
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            //收益层
            gd.fightLayer = self;
            self.fightProfit = g_fight.FightProfit.create().show();
            //中间聊天层
            self.baseMidBar = g_mid.BaseMidBar.create().show();
            if (g_fight.mapView == null) {
                g_fight.mapView = new g_fight.MapView();
                g_fight.mapView.y = 42;
                var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
                var mapID = copyInfo[gc.t_copy_displayID];
                g_fight.mapView.enterMap(mapID, true);
                g_fight.mapView.checkNextWave();
                var uiCom = new egret.gui.UIComponent();
                //self.addElement(uiCom);
                uiCom.addChild(g_fight.mapView);
            }
            self.resetPvpEnemyView();
            self.onNextLoot();
            self.checkRedPoint();
            self.lvlChange();
            self.autoFightChange();
            self.onRedEnvelopeChanged();
            self.onMedalChange();
            if (self.grp_findPk) {
                self.grp_findPk.visible = false;
            }
            self.ico_autoLight.touchEnabled = false;
            self.eff_findingMonster.visible = g_fight.mapView.isFindingMonster;
            g_fight.mapView.addEventListener(g_fight.MAP_EVENT_HPMP_CHANGE, self.updateHP, self);
            g_fight.mapView.addEventListener(g_fight.MAP_EVENT_IS_FINDING_MONSTER_CHANGE, self.isFindingMonsterChange, self);
            g_fight.mapView.addEventListener(g_fight.MAP_EVENT_WINCOUNT_CHANGE, self.onWinCountChange, self);
            g_fight.mapView.addEventListener(g_fight.MAP_EVENT_TOTAL_HURT_CHANGE, self.onTotalHurtChange, self);
            self.isFindingMonsterChange();
            self.onWorldBossOpenChanged();
            self.onKingBuffChanged();
            self.onTotalHurtChange();
            self.px_hp.labelFunction = self.barLabelFunction;
            self.ico_expBuff.source = resHelper.getBuffIconPath(1);
        };
        p.barLabelFunction = function (value, maximum) {
            return mo.STR.format("%s/%s", utils.formatByWan(value), utils.formatByWan(maximum));
        };
        p._tap_icon_pkInfo = function () {
            var self = this;
            self.showOrHideTreasureView(true);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.addElement(g_fight.mapView.parent);
            self.ico_auto.source = gd.userCtrl.isAutoFight() ? "ico_autofight_enable" : "ico_autofight_disable";
            if (g_fight.mapView.pveType == gc.c_prop.fightTypeKey.worldBoss && g_fight.bossData) {
                self.checkBossView();
            }
            clearInterval(self.mpUpdateTimer);
            self.mpUpdateTimer = setInterval(function () {
                var infos = gd.demonLotusCtrl.calGenuineQi();
                g_fight.baseBottomBar.updateMP(infos);
            }, 100);
            self.secondTimer = setInterval(function () {
                self.checkUIVisible();
            }, 1000);
            self.checkUIVisible();
        };
        p.onExit = function () {
            var self = this;
            clearInterval(self.mpUpdateTimer);
            var owner = g_fight.mapView.parent.owner;
            if (owner && owner == self) {
                owner.removeElement(g_fight.mapView.parent);
            }
            _super.prototype.onExit.call(this);
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
            if (self.gwTimeTrigger) {
                tm.timer.remove(self.gwTimeTrigger);
                self.gwTimeTrigger = null;
            }
            if (self.blTimeTrigger) {
                tm.timer.remove(self.blTimeTrigger);
                self.blTimeTrigger = null;
            }
            clearInterval(self.secondTimer);
            g_fight.mapView.removeEventListener(g_fight.MAP_EVENT_HPMP_CHANGE, self.updateHP, self);
            g_fight.mapView.removeEventListener(g_fight.MAP_EVENT_IS_FINDING_MONSTER_CHANGE, self.isFindingMonsterChange, self);
            //self.mapView.destroy();
        };
        p.resetPvpEnemyView = function () {
            var self = this;
            gd.pkOutCtrl.checkOpen(function (data) {
                if (data) {
                    gd.pkOutCtrl.getEnemyList(function (data) {
                        if (self.grp_pkEnemy) {
                            while (self.grp_pkEnemy.numElements) {
                                self.grp_pkEnemy.removeElementAt(0);
                            }
                            self.setCDTime(gd.pkOutCtrl.getReRefreshSeconds());
                            if (data.length == 0) {
                                self.grp_pkEnemy.visible = false;
                                self.grp_leftTime.visible = true;
                            }
                            else {
                                self.resetPvpEnemyViewOnlyDraw(data);
                            }
                        }
                    }, self);
                }
                else {
                    if (self.grp_pkEnemy) {
                        self.icon_pkInfo.visible = false;
                        self.ico_enemy.visible = false;
                        self.grp_pkEnemy.visible = false;
                        self.grp_leftTime.visible = false;
                    }
                }
            }, self);
        };
        //checkAotoPkOut(pkUser){
        //    var self = this;
        //    if(pkUser && gd.pkOutCtrl.autoPkOut){
        //        if(!gd.fightCtrl.isSpFighting && !gd.fightCtrl.isDie) {
        //            gd.pkOutCtrl.start(pkUser[gc.dsConsts.PkOutUserData.userId],gc.c_prop.fightTypeKey.pk,0,function(pkTargets:Array<gd.HeroEntityCtrl>){
        //                var myList = gd.heroCtrl.getList();
        //                gd.fightCtrl.startPvpFight(myList, pkTargets,gc.c_prop.fightTypeKey.pk, pkUser[gc.dsConsts.PkOutUserData.name]);
        //            },self);
        //        }
        //    }
        //}
        p.resetPvpEnemyViewOnlyDraw = function (data) {
            var self = this;
            self.grp_pkEnemy.visible = true;
            self.grp_leftTime.visible = false;
            //self.grp_findPk.visible = false;
            while (self.grp_pkEnemy.numElements) {
                self.grp_pkEnemy.removeElementAt(0);
            }
            for (var i = 0; i < data.length; ++i) {
                data[i][gc.dsConsts.PkOutUserData.iconId];
                var cell = new g_fight.FightEnemyCell();
                cell.setData(data[i]);
                self.grp_pkEnemy.addElement(cell);
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
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.getEnemyListLeftMillisecond = endTime1 - now;
            if (self.getEnemyListLeftMillisecond < 0)
                self.getEnemyListLeftMillisecond = 0;
            self.label_leftTime.text = mo.getTimeStr(self.getEnemyListLeftMillisecond);
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self.getEnemyListLeftMillisecond = -1;
            self.resetPvpEnemyView();
        };
        p.onStartPvpFight = function (data) {
            var self = this;
            g_fight.mapView.startPvpFight(data.my, data.enemy, data.isPkOut, data.name);
            self.resetPvpEnemyView();
            self.quitOrRebuildTreasureView(false);
            self.checkUIVisible();
        };
        p.onNextLoot = function () {
            var self = this;
            self.quitOrRebuildTreasureView(true);
            self.checkUIVisible();
            if (g_fight.baseTopBar) {
                g_fight.baseTopBar.showCopyName(g_fight.mapView.copyId, g_fight.mapView.monsterId);
            }
            if (gd.fightCtrl.isSpFighting) {
                self.grp_winCount.visible = false;
                self.grp_boss.visible = false;
                return;
            }
            self.onWinCountChange();
        };
        p.onWinCountChange = function () {
            var self = this;
            var wins = gd.copyCtrl.getWinningStreak();
            var curWin = wins[0];
            var maxWin = wins[1];
            self.label_winCount.text = curWin + "/" + maxWin;
            if (curWin >= maxWin) {
                self.grp_winCount.visible = false;
                //for引导，防止手快
                process.nextTick(function () {
                    process.nextTick(function () {
                        process.nextTick(function () {
                            self.grp_boss.visible = true;
                        });
                    });
                });
                mo.emitter.emit('onBoss');
                if (gd.userCtrl.isAutoFight() && !gd.bossFightCtrl.isAutoFight()) {
                    self._tap_btn_boss();
                }
            }
            else {
                self.grp_winCount.visible = true;
                self.grp_boss.visible = false;
                var precent = self.ico_win_process.width - Math.floor((1 - curWin / maxWin) * self.ico_win_process.width);
                self.ico_win_process.mask = new egret.Rectangle(0, 0, precent, self.grp_winCount.height);
            }
        };
        p.onTotalHurtChange = function () {
            var self = this;
            self.label_myDamage.text = utils.formatByWan(g_fight.mapView.totalHurt) || "0";
        };
        p.onCheckSkipBtn = function () {
            var self = this;
            self.checkUIVisible();
        };
        p._tap_btn_boss = function (e) {
            if (e === void 0) { e = null; }
            var self = this;
            //if(Date.newDate().getTime()-self.sendTime>500 && !gd.fightCtrl.isSpFighting && this.stage!=null){
            if (Date.newDate().getTime() - self.sendTime > 500 && !gd.fightCtrl.isSpFighting) {
                self.sendTime = Date.newDate().getTime();
                gd.fightCtrl.enterCopy(gd.copyCtrl.getNormalCurCopyId());
            }
        };
        p.onEnterCopy = function (data) {
            var self = this;
            g_fight.mapView.enterCopy(data.pveType, data.copyID, data.loots, data.bossId);
            if (self.grp_winCount) {
                self.grp_winCount.visible = false;
                self.onNextLoot();
            }
        };
        p.forceNormalCopy = function () {
            g_fight.mapView.forceNormalCopy();
        };
        p.onEnterWorldBoss = function (data) {
            var self = this;
            g_fight.bossData = data;
            if (g_fight.mapView.pveType != gc.c_prop.fightTypeKey.worldBoss) {
                g_fight.mapView.enterCopy(gc.c_prop.fightTypeKey.worldBoss, null, null, data.bossId);
                if (self.stage) {
                    self.checkBossView();
                }
            }
        };
        p.checkBossView = function () {
            var self = this;
            if (g_fight.mapView.pveType == gc.c_prop.fightTypeKey.worldBoss) {
                var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, gd.curBFECtrl.getBossId());
                self.label_bossName.text = monsterInfo[gc.t_monster_name] + " Lv." + monsterInfo[gc.t_monster_level];
                self.worldBossCurHpChange();
                self.worldBossMyHurtChange();
                var leftTime = gd.curBFECtrl.getReOverSeconds();
                if (leftTime) {
                    self.label_worldBossLeftTime.text = mo.getTimeStr(leftTime * 1000);
                    self.setBLCDTime(leftTime);
                }
                var isGuildBoss = (gd.curBFECtrl.getType() == gc.c_prop.worldBossTypeKey.guild);
                self.grp_guwu.visible = isGuildBoss;
                if (isGuildBoss) {
                    self.worldBossGWTimeChange(gd.curBFECtrl.getInspireReSeconds(), gd.curBFECtrl);
                }
                self.onNextLoot();
            }
        };
        p.worldBossCurHpChange = function () {
            var self = this;
            g_fight.mapView.worldBossHpChange();
            self.px_hp.maximum = gd.curBFECtrl.getTotalHp();
            self.px_hp.setValue(gd.curBFECtrl.getCurHp());
            if (gd.curBFECtrl.isLimitHp()) {
                var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, gd.curBFECtrl.getBossId());
                self.label_bossName.text = monsterInfo[gc.t_monster_name] + " Lv." + monsterInfo[gc.t_monster_level] + "(护盾已激活)";
            }
        };
        p.worldBossMyHurtChange = function () {
            var self = this;
            self.label_myDamage.text = utils.formatByWan(gd.curBFECtrl.getMyHurt()) || "0";
        };
        p.onWorldBossOpenChanged = function () {
            var self = this;
            self.label_bossPking.visible = gd.bossFightCtrl.getOpenIds().length > 0;
        };
        p.worldBossGWTimeChange = function (time, fec) {
            var self = this;
            var leftTime = fec.getInspireReSeconds();
            if (leftTime > 0) {
                self.grp_guwuLeftTime.visible = true;
                self.label_guwuLeftTime.text = mo.getTimeStr(leftTime * 1000);
                self.setGWCDTime(leftTime);
            }
            else {
                self.grp_guwuLeftTime.visible = false;
            }
        };
        p.onWorldBossOver = function (fec) {
            var self = this;
            fec.getBossResult(function (result) {
                var isWin = result[gc.dsConsts.BossResult.isWin];
                var bossType = fec.getType();
                var data = { result: result, fec: fec };
                if (isWin) {
                    if (bossType == gc.c_prop.worldBossTypeKey.guild) {
                        g_fight.GuildBossWin.showCallback(data);
                    }
                    else {
                        g_fight.WBossWin.showCallback(data);
                    }
                }
                else {
                    if (bossType == gc.c_prop.worldBossTypeKey.guild) {
                        g_fight.GuildBossFail.showCallback(data);
                    }
                    else {
                        g_fight.WBossFail.showCallback(data);
                    }
                }
                if (g_fight.mapView.pveType == gc.c_prop.fightTypeKey.worldBoss) {
                    if (g_fight.mapView.getEnemyRoleAt(0).roleInfo.monsterInfo[gc.t_monster_id] == fec.getBossId()) {
                        self.forceNormalCopy();
                    }
                }
            }, self);
        };
        p.onCallHero = function () {
            var heros = gd.heroCtrl.getFightList();
            var hero = heros[heros.length - 1];
            g_fight.mapView.createRole(hero, true, heros.length - 1);
        };
        p.onFightHeroChange = function () {
            g_fight.mapView.roleListChange();
        };
        p._tap_grp_leftTime = function () {
            var self = this;
            gd.pkOutCtrl.refreshEnemy(true, function () {
                self.resetPvpEnemyView();
            }, self);
        };
        p._tap_grp_findPk = function () {
            var self = this;
            gd.pkOutCtrl.refreshEnemy(false, function () {
                self.resetPvpEnemyView();
            }, self);
        };
        p.checkUIVisible = function () {
            var self = this;
            if (self.grp_ui) {
                self.grp_ui.visible = g_fight.mapView.isNormalCopy;
            }
            if (self.btn_skip) {
                self.btn_skip.visible = false;
                self.label_skipFight.visible = false;
            }
            if (self.grp_worldBoss) {
                self.grp_worldBoss.visible = g_fight.mapView.pveType == gc.c_prop.fightTypeKey.worldBoss;
            }
            if (self.grp_myHurt) {
                self.grp_myHurt.visible = g_fight.mapView.pveType == gc.c_prop.fightTypeKey.worldBoss
                    || g_fight.mapView.pveType == gc.c_prop.fightTypeKey.coffersBoss;
            }
            if (self.fightProfit) {
                self.fightProfit.setVisible(g_fight.mapView.isNormalCopy);
            }
            if (self.baseMidBar) {
                self.baseMidBar.setChatVisible(g_fight.mapView.isNormalCopy);
            }
            //if(self.img_info_detail){
            //    self.img_info_detail.visible = mapView.isNormalCopy;
            //}
        };
        p._tap_ico_enemy = function () {
            gd.pkOutCtrl.resetBePkKill();
            gd.pkOutCtrl.getRevengeEnemyList(function (data) {
                g_fight.EnemyList.create().setData({ list: data }).show();
            }, this);
        };
        p.updateHP = function (e) {
            var self = this;
            var infos = g_fight.mapView.getHpInfos();
            g_fight.baseBottomBar.updateHP(infos);
        };
        p.isFindingMonsterChange = function () {
            this.eff_findingMonster.visible = g_fight.mapView.isFindingMonster;
        };
        p._tap_ico_auto = function () {
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            var vip = gd.userCtrl.getVip();
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, vip);
            needLvl = c_open[gc.id_c_open.autoFight][gc.c_open_lvlRequired];
            if (!vipInfo[gc.c_vip_copyBossAutoFight] && gd.userCtrl.getLvl() < needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noLvlAuto, 1, needLvl);
            }
            mo.setLocalStorageItem("hasTapAuto", 1);
            egret.Tween.removeTweens(self.ico_autoLight);
            self.ico_autoLight.visible = false;
            gd.userCtrl.setAutoFight(!gd.userCtrl.isAutoFight());
            self.ico_auto.source = gd.userCtrl.isAutoFight() ? "ico_zidongtiaozhan1" : "ico_zidongtiaozhan";
            self.label_noActive.visible = !gd.userCtrl.isAutoFight();
        };
        p.setBLCDTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.blTimeTrigger) {
                    tm.timer.remove(self.blTimeTrigger);
                    self.blTimeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.blTimeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.blTimeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.blTimeOut, self);
                tm.timer.add(timeTrigger);
            }
        };
        p.blTimeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.label_worldBossLeftTime.text = mo.getTimeStr(leftMillisecond);
        };
        p.blTimeOut = function (type, beginTime, endTime) {
            var self = this;
        };
        p.setGWCDTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.gwTimeTrigger) {
                    tm.timer.remove(self.gwTimeTrigger);
                    self.gwTimeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.gwTimeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.gwTimeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.gwTimeOut, self);
                tm.timer.add(timeTrigger);
            }
        };
        p.gwTimeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.label_guwuLeftTime.text = mo.getTimeStr(leftMillisecond);
        };
        p.gwTimeOut = function (type, beginTime, endTime) {
            var self = this;
            self.grp_guwuLeftTime.visible = false;
        };
        p._tap_btn_guwu = function () {
            var self = this;
            gd.curBFECtrl.inspire(function (data) { }, self);
        };
        p._tap_btn_damageRank = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.worldBossHurtList, { bossId: gd.curBFECtrl.getBossId() });
        };
        p._tap_ico_worldBoss = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.bossWar);
        };
        p.onRedEnvelopeChanged = function () {
            this.btn_red.visible = (gd.redEnvelopeCtrl.getCanGetList().length > 0);
        };
        p._tap_btn_red = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.redPacketList);
        };
        p.onKingBuffChanged = function () {
            this.ico_expBuff.visible = gd.kingCtrl.isOpenBuff();
        };
        p._tap_btn_zhenQi = function () {
            var lotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, 0);
            if (gd.userCtrl.getLvl() >= lotusInfo[gc.c_demonLotus_treaNeedUserLvl]) {
                g_base.ZhenQiDetail.create().show();
            }
            else {
                mo.showMsg(gc.id_c_msgCode.gasNoOpen, lotusInfo[gc.c_demonLotus_treaNeedUserLvl]);
            }
        };
        p._tap_btn_skip = function () {
            var vips = mo.getJSONWithFileName(gc.cfg_c_vip);
            var vipInfo = vips[gd.userCtrl.getVip()];
            if (vipInfo[gc.c_vip_skipFight]) {
                g_fight.mapView.skipFight();
            }
            else {
                for (var key in vips) {
                    if (vips[key][gc.c_vip_skipFight])
                        break;
                }
                mo.showMsg(gc.id_c_msgCode.vipLess, key);
            }
        };
        p.showProfileInfo = function () {
            var self = this;
            var cfg_c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var lvl = gd.userCtrl.getLvl();
            var openLvl = cfg_c_open[gc.id_c_open.expBox][gc.c_open_lvlRequired];
            if (lvl < openLvl) {
                g_fight.FightProfitDlg.create().show();
            }
            else {
                gd.demonLotusCtrl.getInfo(function (data) {
                    g_fight.FightProfitDlg.create().show();
                }, self);
            }
        };
        /*
         退出秘宝界面, 并检查是否需要记录秘宝界面显示状态,以便下次恢复
         isQuit = false ,. 退出秘宝界面
         isQuit = ture , 重新自动进入秘宝界面
         */
        p.quitOrRebuildTreasureView = function (isQuit) {
            var self = this;
            if (self.isTreasureViewsShowing && !isQuit) {
                self.isTreasureViewsNeedRebuild = self.treasureView.tab_btn.selectedIndex;
                self.showOrHideTreasureView(false);
            }
            else if (!self.isTreasureViewsShowing && isQuit) {
                if (self.isTreasureViewsNeedRebuild >= 0) {
                    self.showOrHideTreasureView(true);
                    self.isTreasureViewsNeedRebuild = -1;
                }
            }
        };
        /*
            展示或者隐藏秘宝界面
         */
        p.showOrHideTreasureView = function (yesIsShow) {
            var self = this;
            if (self.isTreasureViewsShowing == yesIsShow)
                return;
            self.isTreasureViewsShowing = yesIsShow;
            if (yesIsShow) {
                self.treasureView = g_fight.FightTreasure.create().setData({ lm: self.getEnemyListLeftMillisecond, fl: self, index: self.isTreasureViewsNeedRebuild }).show().onClose(function () {
                    self.isTreasureViewsShowing = false;
                }, self);
            }
            else {
                if (self.treasureView) {
                    self.treasureView.close();
                }
            }
        };
        return FightLayer;
    })(mo.gui.Layer);
    g_fight.FightLayer = FightLayer;
    egret.registerClass(FightLayer,"g_fight.FightLayer");
})(g_fight || (g_fight = {}));

/**
 * Created by SmallAiTT on 2015/7/15.
 */
var g_fight;
(function (g_fight) {
    logger.initLogger(g_fight, "g-fight");
    logger.setLvl("g-fight", 4);
    g_fight.stack = [];
    var FightDlg = (function (_super) {
        __extends(FightDlg, _super);
        function FightDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightDlg,p=c.prototype;
        FightDlg.show = function (data) {
            var self = this;
            if (mo.moduleMgr.curModule.name == g_consts.moduleId.fight) {
                mo.gui.Dlg.show.apply(self, arguments);
                FightDlg.clearCbData();
            }
            else {
                g_fight.stack.push([self, data]);
            }
        };
        FightDlg.showCallback = function (data) {
            var self = this;
            FightDlg.cbData = data;
            var leftTime = FightDlg.cbData.begTime - Date.newDate().getTime();
            FightDlg.cbTimeoutKey = egret.setTimeout(function () {
                if (FightDlg.cbData.callback != null) {
                    FightDlg.cbData.callback.call(FightDlg.cbData.target);
                }
                FightDlg.clearCbData();
            }, null, leftTime);
            self.show(data);
        };
        FightDlg.clearCbData = function () {
            egret.clearTimeout(FightDlg.cbTimeoutKey);
            for (var i = 0; i < g_fight.stack.length; ++i) {
                if (g_fight.stack[i][1] == FightDlg.cbData) {
                    g_fight.stack.splice(i, 1);
                    break;
                }
            }
            FightDlg.cbData = null;
        };
        return FightDlg;
    })(mo.gui.Dlg);
    g_fight.FightDlg = FightDlg;
    egret.registerClass(FightDlg,"g_fight.FightDlg");
    var FightScene = (function (_super) {
        __extends(FightScene, _super);
        function FightScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            g_base.modIdx = 0;
            self.layer = g_fight.FightLayer.create().show();
            //中间入口按钮
            var layer = g_mid.FightMidBar.create();
            layer.moduleParam = self.moduleParam;
            layer.show();
            //下排按钮
            g_mid.FightBottomBar.create().show();
            while (g_fight.stack.length) {
                var arr = g_fight.stack.pop();
                if (FightDlg.cbData && arr[1] == FightDlg.cbData) {
                    var leftTime = FightDlg.cbData.begTime - Date.newDate().getTime();
                    if (leftTime > 0) {
                        arr[0].show(arr[1]);
                        FightDlg.clearCbData();
                    }
                }
                else {
                    arr[0].show(arr[1]);
                }
            }
            g_fight.baseBottomBar = g_base.BaseBottomBar.create().show();
            g_fight.baseTopBar = g_base.BaseTopBar.create('FightScene').show();
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            g_fight.baseTopBar = null;
        };
        p.openSubModule = function (subModuleId) {
            switch (subModuleId) {
                case g_consts.FS_SUBMID_SMELT:
                    mo.moduleMgr.runModule(g_consts.moduleId.smelting);
                    break;
                case g_consts.FS_SUBMID_PVP_OUT:
                    //none
                    break;
                case g_consts.FS_SUBMID_CHAT:
                    g_mid.Chat.create().show();
                    break;
            }
        };
        return FightScene;
    })(mo.gui.UIScene);
    g_fight.FightScene = FightScene;
    egret.registerClass(FightScene,"g_fight.FightScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = FightScene;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //uw.ServerDataCtrl.initByServer(cb);
            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
            var mapID = copyInfo[gc.t_copy_displayID];
            mo.R.loadTo("mapview", "dynamic2/map_" + mapID + "_small.jpg", function () {
                cb();
            });
        });
    });
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var CusEvent = (function (_super) {
        __extends(CusEvent, _super);
        function CusEvent(type, data) {
            if (data === void 0) { data = null; }
            _super.call(this, type);
            this.data = data;
        }
        var d = __define,c=CusEvent,p=c.prototype;
        return CusEvent;
    })(egret.Event);
    g_fight.CusEvent = CusEvent;
    egret.registerClass(CusEvent,"g_fight.CusEvent");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/18.
 */
var g_fight;
(function (g_fight) {
    var SkillInfo = (function () {
        function SkillInfo() {
        }
        var d = __define,c=SkillInfo,p=c.prototype;
        d(p, "cd"
            ,function () {
                if (this._cd == null) {
                    return this.tabInfo[gc.t_skill_cd] || 0;
                }
                return this._cd;
            }
            ,function (value) {
                this._cd = value;
            }
        );
        d(p, "id"
            ,function () {
                return this.tabInfo[gc.t_skill_id] || 0;
            }
        );
        d(p, "name"
            ,function () {
                return this.tabInfo[gc.t_skill_name];
            }
        );
        d(p, "desc"
            ,function () {
                return this.tabInfo[gc.t_skill_desc];
            }
        );
        d(p, "effect"
            ,function () {
                return this.tabInfo[gc.t_skill_effect] || 0;
            }
        );
        d(p, "attackDistance"
            ,function () {
                return this.tabInfo[gc.t_skill_attackDistance] || 0;
            }
        );
        d(p, "priority"
            ,function () {
                return this.tabInfo[gc.t_skill_priority] || 0;
            }
        );
        d(p, "targetType"
            ,function () {
                return this.tabInfo[gc.t_skill_targetType] || 0;
            }
        );
        d(p, "effectRadius"
            ,function () {
                return this.tabInfo[gc.t_skill_effectRadius] || 0;
            }
        );
        d(p, "damage"
            ,function () {
                return this.tabInfo[gc.t_skill_damage] || 0;
            }
        );
        d(p, "pushType"
            ,function () {
                return this.tabInfo[gc.t_skill_pushType] || 0;
            }
        );
        d(p, "pushDistance"
            ,function () {
                return this.tabInfo[gc.t_skill_pushDistance] || 0;
            }
        );
        d(p, "casterPositionType"
            ,function () {
                return this.tabInfo[gc.t_skill_casterPositionType] || 0;
            }
        );
        d(p, "buffID"
            ,function () {
                return this.tabInfo[gc.t_skill_buffID] || 0;
            }
        );
        d(p, "callMonsterID"
            ,function () {
                return this.tabInfo[gc.t_skill_callMonsterID] || 0;
            }
        );
        d(p, "callMonsterNum"
            ,function () {
                return this.tabInfo[gc.t_skill_callMonsterNum] || 0;
            }
        );
        d(p, "damageScale"
            ,function () {
                return this.tabInfo[gc.t_skill_damageScaleA] || 0;
            }
        );
        d(p, "castAction"
            ,function () {
                return this.tabInfo[gc.t_skill_castAction] || 0;
            }
        );
        d(p, "actionTime"
            ,function () {
                return this.tabInfo[gc.t_skill_actionTime] || 0;
            }
        );
        d(p, "casterEffect"
            ,function () {
                return this.tabInfo[gc.t_skill_casterEffect] || 0;
            }
        );
        d(p, "targetEffect"
            ,function () {
                return this.tabInfo[gc.t_skill_targetEffect] || 0;
            }
        );
        d(p, "flyEffect"
            ,function () {
                return this.tabInfo[gc.t_skill_flyEffect] || 0;
            }
        );
        d(p, "beHittedEffect"
            ,function () {
                return this.tabInfo[gc.t_skill_beHittedEffect] || 0;
            }
        );
        d(p, "firstCD"
            ,function () {
                return this.tabInfo[gc.t_skill_firstCD] || 0;
            }
        );
        d(p, "special"
            ,function () {
                return this.tabInfo[gc.t_skill_special] || 0;
            }
        );
        d(p, "canExtends"
            ,function () {
                return this.tabInfo[gc.t_skill_canExtends] || 0;
            }
        );
        return SkillInfo;
    })();
    g_fight.SkillInfo = SkillInfo;
    egret.registerClass(SkillInfo,"g_fight.SkillInfo");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/18.
 */
var g_fight;
(function (g_fight) {
    var Skill = (function () {
        function Skill() {
            this.attackTime = 0;
        }
        var d = __define,c=Skill,p=c.prototype;
        d(p, "skillInfo"
            ,function () {
                return this._skillInfo;
            }
            ,function (value) {
                this._skillInfo = value;
                //this.attackTime = this._skillInfo.cd*10;
            }
        );
        p.reduceTime = function (time) {
            if (this.attackTime > 0) {
                this.attackTime -= time;
            }
        };
        p.resetCD = function () {
            this.attackTime += this.skillInfo.cd * 10;
        };
        p.canExe = function () {
            return this.attackTime <= 0;
        };
        d(p, "hpCoefficient"
            ,function () {
                return (this._skillInfo.damage + this._skillInfo.damageScale * (this.level - 1)) / g_base.PropBase.Scale_Num;
            }
        );
        return Skill;
    })();
    g_fight.Skill = Skill;
    egret.registerClass(Skill,"g_fight.Skill");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var RoleInfo = (function (_super) {
        __extends(RoleInfo, _super);
        function RoleInfo() {
            _super.call(this);
            this.isPvPFight = false;
            this.isWorldBossFight = false;
        }
        var d = __define,c=RoleInfo,p=c.prototype;
        p.setMonsterInfo = function (monsterInfo) {
            this.monsterInfo = monsterInfo;
            _super.prototype.setMonsterInfo.call(this, monsterInfo);
            this.name = monsterInfo[gc.t_monster_name];
            this.displayID = monsterInfo[gc.t_monster_displayID];
        };
        d(p, "seeDistance"
            ,function () {
                return this.monsterInfo != null ? (this.monsterInfo[gc.t_monster_seeDistance] || 0) : 0;
            }
        );
        return RoleInfo;
    })(g_base.PropBase);
    g_fight.RoleInfo = RoleInfo;
    egret.registerClass(RoleInfo,"g_fight.RoleInfo");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    g_fight.ROLE_EVENT_POS_CHANGE = "ROLE_EVENT_POS_CHANGE";
    g_fight.ROLE_EVENT_HP_CHANGE = "ROLE_EVENT_HP_CHANGE";
    g_fight.ROLE_EVENT_AVATAR_CHANGE = "ROLE_EVENT_AVATAR_CHANGE";
    g_fight.ROLE_EVENT_MEDAL_CHANGE = "ROLE_EVENT_MEDAL_CHANGE";
    g_fight.ROLE_EVENT_ATTACK = "ROLE_EVENT_ATTACK";
    g_fight.ROLE_EVENT_HURT = "ROLE_EVENT_HURT";
    g_fight.ROLE_EVENT_DIE = "ROLE_EVENT_DIE";
    g_fight.ROLE_EVENT_REVIVE = "ROLE_EVENT_REVIVE";
    g_fight.ROLE_EVENT_ADD_BUFF = "ROLE_EVENT_ADD_BUFF";
    g_fight.ROLE_EVENT_REMOVE_BUFF = "ROLE_EVENT_REMOVE_BUFF";
    g_fight.ROLE_EVENT_BENUMB_CHANGED = "ROLE_EVENT_BENUMB_CHANGED";
    g_fight.ROLE_EVENT_CALL_PET = "ROLE_EVENT_CALL_PET";
    g_fight.ROLE_EVENT_GIFT_EQUIP_CHANGE = "ROLE_EVENT_GIFT_EQUIP_CHANGE";
    g_fight.ROLE_ACTION_STAND = 1;
    g_fight.ROLE_ACTION_MOVE = 2;
    g_fight.ROLE_ACTION_ATTACK = 3;
    g_fight.ROLE_ASPECT_UP = 1;
    g_fight.ROLE_ASPECT_UP_RIGHT = 2;
    g_fight.ROLE_ASPECT_RIGHT = 3;
    g_fight.ROLE_ASPECT_DOWN_RIGHT = 4;
    g_fight.ROLE_ASPECT_DOWN = 5;
    g_fight.ROLE_ASPECT_UP_LEFT = 6;
    g_fight.ROLE_ASPECT_LEFT = 7;
    g_fight.ROLE_ASPECT_DOWN_LEFT = 8;
    var Role = (function (_super) {
        __extends(Role, _super);
        function Role() {
            _super.call(this);
            this._weaponID = -1;
            this._wingID = -1;
            this._hp = 100;
            this.hp2 = 0;
            this.curState = Role.STATE_NONE;
            this.lastExeAITime = 0;
            this.skillActionTime = 0;
            this.isPushing = false;
            this.curPetNum = 0;
            this.giftSkills = [];
            this.skills = [];
            this.buffs = [];
            this.benumbTime = 0;
            this.curReviveCount = 0;
            this.invincibleTime = 0;
            this.isCheckTime = true;
            this.isMain = false;
            this._medalId = 0;
        }
        var d = __define,c=Role,p=c.prototype;
        d(p, "isBenumb"
            ,function () {
                var self = this;
                for (var i = 0; i < self.buffs.length; ++i) {
                    var buff = self.buffs[i];
                    if (buff.specialEffect == 1) {
                        return true;
                    }
                }
                return self.benumbTime > 0;
            }
        );
        p.getAvatar = function (id, prev) {
            if (prev === void 0) { prev = ""; }
            var self = this;
            var aspectStrs = [null, "0", "1", "2", "3", "4"];
            var actionStrs = [null, "s", "r", "a"]; //[null,"stand","run","attack"];
            return prev + id + "_" + aspectStrs[self.aspect < 6 ? self.aspect : self.aspect - 4] + actionStrs[self.action];
        };
        d(p, "hp"
            ,function () {
                return this._hp;
            }
            ,function (value) {
                var self = this;
                self._hp = value;
                self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_HP_CHANGE));
            }
        );
        d(p, "mp"
            ,function () {
                return this.hp2;
            }
        );
        d(p, "name"
            ,function () {
                var self = this;
                if (self._name == null) {
                    return self.roleInfo.name;
                }
                return self._name;
            }
            ,function (value) {
                this._name = value;
            }
        );
        d(p, "clothesID"
            ,function () {
                return this._clothesID;
            }
            ,function (value) {
                var self = this;
                if (self._clothesID != value) {
                    self._clothesID = value;
                    self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_AVATAR_CHANGE));
                }
            }
        );
        d(p, "weaponID"
            ,function () {
                return this._weaponID;
            }
            ,function (value) {
                var self = this;
                if (self._weaponID != value) {
                    self._weaponID = value;
                    self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_AVATAR_CHANGE));
                }
            }
        );
        d(p, "wingID"
            ,function () {
                return this._wingID;
            }
            ,function (value) {
                var self = this;
                if (self._wingID != value) {
                    self._wingID = value;
                    self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_AVATAR_CHANGE));
                }
            }
        );
        d(p, "action"
            ,function () {
                return this._action;
            }
            ,function (value) {
                var self = this;
                if (self._action != value) {
                    self._action = value;
                    self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_AVATAR_CHANGE));
                }
            }
        );
        d(p, "aspect"
            ,function () {
                return this._aspect;
            }
            ,function (value) {
                var self = this;
                if (self._aspect != value) {
                    self._aspect = value;
                    self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_AVATAR_CHANGE));
                }
            }
        );
        d(p, "row"
            ,function () {
                return Math.floor(this.y / Role.cellH);
            }
        );
        d(p, "col"
            ,function () {
                return Math.floor(this.x / Role.cellW);
            }
        );
        p.isOnNodeCenter = function () {
            var self = this;
            return Math.abs(self.x - (self.col + 0.5) * Role.cellW) < 2 && Math.abs(self.y - (self.row + 0.5) * Role.cellH) < 2;
        };
        d(p, "mtRow"
            ,function () {
                var self = this;
                if (isNaN(self._mtRow)) {
                    return self.row;
                }
                return self._mtRow;
            }
        );
        d(p, "mtCol"
            ,function () {
                var self = this;
                if (isNaN(self._mtCol)) {
                    return self.col;
                }
                return self._mtCol;
            }
        );
        d(p, "isBoss"
            ,function () {
                var self = this;
                if (self.roleInfo.monsterInfo && self.roleInfo.monsterInfo[gc.t_monster_bossLevel] != 0) {
                    return true;
                }
                return false;
            }
        );
        d(p, "medalId"
            ,function () {
                return this._medalId;
            }
            ,function (value) {
                var self = this;
                if (self._medalId != value) {
                    self._medalId = value;
                    self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_MEDAL_CHANGE));
                }
            }
        );
        d(p, "isKing"
            ,function () {
                return this._isKing;
            }
            ,function (value) {
                var self = this;
                if (self._isKing != value) {
                    self._isKing = value;
                    self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_AVATAR_CHANGE));
                }
            }
        );
        p.revive = function () {
            var self = this;
            self.hp = self.roleInfo.maxHpFight;
            self.hp2 = self.roleInfo.maxHp2Fight;
            self.curReviveCount = 0;
            self.invincibleTime = 0;
            self.lastExeAITime = 0;
        };
        p.isDie = function () {
            return this.hp <= 0;
        };
        p.die = function () {
            var self = this;
            if (!self.roleInfo)
                return;
            if (!self.roleInfo.isPvPFight || self.curReviveCount >= self.roleInfo.reviveCountFight) {
                self.hp = 0;
                while (self.buffs.length) {
                    var buff = self.buffs.pop();
                    self.removeBuff(buff);
                }
                self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_DIE));
            }
            else {
                self.curReviveCount++;
                self.hp = Math.round(self.roleInfo.maxHpFight * self.roleInfo.reviveHPScaleFight);
                self.invincibleTime = self.roleInfo.invincibleTimeFight * 10;
                self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_REVIVE)); //通过复活戒指复活
            }
        };
        p.aspectTo = function (row, col) {
            var self = this;
            var toPoint = new egret.Point((col + 0.5) * Role.cellW, (row + 0.5) * Role.cellH);
            var dx = toPoint.x - self.x;
            var dy = toPoint.y - self.y;
            if (dx == 0 && dy == 0)
                return;
            var cos = dx / Math.sqrt(dx * dx + dy * dy);
            var ang = Math.acos(cos);
            if (ang >= 0 && ang < Math.PI / 6) {
                self.aspect = g_fight.ROLE_ASPECT_RIGHT;
            }
            else if (ang >= Math.PI / 6 && ang < Math.PI / 3) {
                if (dy > 0) {
                    self.aspect = g_fight.ROLE_ASPECT_DOWN_RIGHT;
                }
                else {
                    self.aspect = g_fight.ROLE_ASPECT_UP_RIGHT;
                }
            }
            else if (ang >= Math.PI / 3 && ang < Math.PI * 2 / 3) {
                if (dy > 0) {
                    self.aspect = g_fight.ROLE_ASPECT_DOWN;
                }
                else {
                    self.aspect = g_fight.ROLE_ASPECT_UP;
                }
            }
            else if (ang >= Math.PI * 2 / 3 && ang < Math.PI * 5 / 6) {
                if (dy > 0) {
                    self.aspect = g_fight.ROLE_ASPECT_DOWN_LEFT;
                }
                else {
                    self.aspect = g_fight.ROLE_ASPECT_UP_LEFT;
                }
            }
            else {
                self.aspect = g_fight.ROLE_ASPECT_LEFT;
            }
        };
        p.moveTo = function (row, col) {
            var self = this;
            if (row < 0) {
                row = 0;
            }
            else if (row > Role.maxRow - 1) {
                row = Role.maxRow - 1;
            }
            if (col < 0) {
                col = 0;
            }
            else if (col > Role.maxCol - 1) {
                col = Role.maxCol - 1;
            }
            var self = self;
            self.action = g_fight.ROLE_ACTION_MOVE;
            var speed = (self["owner"] ? self["owner"].roleInfo.moveSpeedFight : self.roleInfo.moveSpeedFight) / 1000;
            var toPoint = new egret.Point((col + 0.5) * Role.cellW, (row + 0.5) * Role.cellH);
            var dx = toPoint.x - self.x;
            var dy = toPoint.y - self.y;
            var time = Math.sqrt(dx * dx + dy * dy) / speed;
            self.aspectTo(row, col);
            self._mtRow = row;
            self._mtCol = col;
            var endFun = function () {
                self._mtRow = NaN;
                self._mtCol = NaN;
                self._action = g_fight.ROLE_ACTION_STAND;
                if (!self.isDie())
                    self.exeAI(self.isCheckTime);
                if (self.curState == Role.STATE_NONE) {
                    self.stand();
                }
                if (self.isFindingMonster) {
                    if (self.row == 0 || self.col == 0 || self.row == Role.maxRow - 1 || self.col == Role.maxCol - 1) {
                        if (self.aspect == g_fight.ROLE_ASPECT_UP) {
                            self.aspect = g_fight.ROLE_ASPECT_DOWN;
                        }
                        else if (self.aspect == g_fight.ROLE_ASPECT_DOWN) {
                            self.aspect = g_fight.ROLE_ASPECT_UP;
                        }
                        else if (self.aspect == g_fight.ROLE_ASPECT_LEFT) {
                            self.aspect = g_fight.ROLE_ASPECT_RIGHT;
                        }
                        else if (self.aspect == g_fight.ROLE_ASPECT_RIGHT) {
                            self.aspect = g_fight.ROLE_ASPECT_LEFT;
                        }
                        else if (self.aspect == g_fight.ROLE_ASPECT_UP_LEFT) {
                            self.aspect = self.col == 0 ? g_fight.ROLE_ASPECT_UP_RIGHT : g_fight.ROLE_ASPECT_DOWN_LEFT;
                        }
                        else if (self.aspect == g_fight.ROLE_ASPECT_DOWN_RIGHT) {
                            self.aspect = self.col == Role.maxCol - 1 ? g_fight.ROLE_ASPECT_DOWN_LEFT : g_fight.ROLE_ASPECT_UP_RIGHT;
                        }
                        else if (self.aspect == g_fight.ROLE_ASPECT_UP_RIGHT) {
                            self.aspect = self.col == Role.maxCol - 1 ? g_fight.ROLE_ASPECT_UP_LEFT : g_fight.ROLE_ASPECT_DOWN_RIGHT;
                        }
                        else if (self.aspect == g_fight.ROLE_ASPECT_DOWN_LEFT) {
                            self.aspect = self.col == 0 ? g_fight.ROLE_ASPECT_DOWN_RIGHT : g_fight.ROLE_ASPECT_UP_LEFT;
                        }
                    }
                }
            };
            egret.Tween.removeTweens(self);
            if (self.isCheckTime) {
                egret.Tween.get(self, { onChange: self.onChange, onChangeObj: self }).to({ x: toPoint.x, y: toPoint.y }, time).call(endFun);
            }
            else {
                self.x = toPoint.x;
                self.y = toPoint.y;
                endFun();
                self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_POS_CHANGE));
            }
        };
        //被推开到某个位置
        p.pushTo = function (row, col) {
            var self = this;
            self.isPushing = true;
            var self = self;
            var speed = 0.15;
            var toPoint = new egret.Point((col + 0.5) * Role.cellW, (row + 0.5) * Role.cellH);
            var dx = toPoint.x - self.x;
            var dy = toPoint.y - self.y;
            var time = Math.sqrt(dx * dx + dy * dy) / speed;
            self._mtRow = row;
            self._mtCol = col;
            var endFun = function () {
                self._mtRow = NaN;
                self._mtCol = NaN;
                self.isPushing = false;
                self._action = g_fight.ROLE_ACTION_STAND;
                if (!self.isDie())
                    self.exeAI(self.isCheckTime);
                if (self.curState == Role.STATE_NONE) {
                    self.stand();
                }
            };
            egret.Tween.removeTweens(self);
            if (self.isCheckTime) {
                egret.Tween.get(self, { onChange: self.onChange, onChangeObj: self }).to({ x: toPoint.x, y: toPoint.y }, time).call(endFun);
            }
            else {
                self.x = toPoint.x;
                self.y = toPoint.y;
                endFun();
                self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_POS_CHANGE));
            }
        };
        p.stand = function () {
            var self = this;
            if (self.curEnemy) {
                self.aspectTo(self.curEnemy.row, self.curEnemy.col);
            }
            if (self.moveToAimEnemy) {
                self.aspectTo(self.moveToAimEnemy.row, self.moveToAimEnemy.col);
            }
            egret.Tween.removeTweens(self);
            self.action = g_fight.ROLE_ACTION_STAND;
        };
        //[col, row]
        p.getPointByAspect = function (isFront, distance) {
            var self = this;
            var point = [self.col, self.row];
            switch (self.aspect) {
                case g_fight.ROLE_ASPECT_DOWN:
                case g_fight.ROLE_ASPECT_DOWN_LEFT:
                case g_fight.ROLE_ASPECT_DOWN_RIGHT:
                    point[1] += isFront ? distance : -distance;
                    break;
                case g_fight.ROLE_ASPECT_UP:
                case g_fight.ROLE_ASPECT_UP_LEFT:
                case g_fight.ROLE_ASPECT_UP_RIGHT:
                    point[1] -= isFront ? distance : -distance;
                    break;
                default:
                    break;
            }
            switch (self.aspect) {
                case g_fight.ROLE_ASPECT_RIGHT:
                case g_fight.ROLE_ASPECT_UP_RIGHT:
                case g_fight.ROLE_ASPECT_DOWN_RIGHT:
                    point[0] += isFront ? distance : -distance;
                    break;
                case g_fight.ROLE_ASPECT_LEFT:
                case g_fight.ROLE_ASPECT_UP_LEFT:
                case g_fight.ROLE_ASPECT_DOWN_LEFT:
                    point[0] -= isFront ? distance : -distance;
                    break;
                default:
                    break;
            }
            return point;
        };
        p.spellSkill = function (skill) {
            var self = this;
            //console.log(skill.skillInfo.name);
            self.action = g_fight.ROLE_ACTION_ATTACK;
            if (self.curEnemy)
                self.aspectTo(self.curEnemy.row, self.curEnemy.col);
            skill.resetCD();
            self.skillActionTime = skill.skillInfo.actionTime * 10;
            var hurtData = new g_fight.HurtData();
            hurtData.attackRole = self;
            hurtData.hurtRole = self.curEnemy;
            hurtData.skill = skill;
            self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_ATTACK, hurtData));
            var targets = self.getSkillTargets(skill);
            for (var i = 0; i < targets.length; ++i) {
                self.useSkillOn(skill, targets[i], i == 0);
            }
            if (skill.skillInfo.casterPositionType > 0 && self.curEnemy != null && !self.curEnemy.isDie()) {
                var point = self.getPointByAspect(true, skill.skillInfo.pushDistance);
                var col = point[0];
                var row = point[1];
                if (row < 1) {
                    row = 1;
                }
                else if (row > Role.maxRow - 2) {
                    row = Role.maxRow - 2;
                }
                if (col < 1) {
                    col = 1;
                }
                else if (col > Role.maxCol - 2) {
                    col = Role.maxCol - 2;
                }
                self.moveTo(row, col);
            }
            if (skill.skillInfo.callMonsterID != 0) {
                self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_CALL_PET, { petID: self.curPetId, owner: self, num: skill.skillInfo.callMonsterNum }));
            }
        };
        p.checkPetId = function () {
            var self = this;
            for (var i = 0; i < self.skills.length; ++i) {
                var skill = self.skills[i];
                if (skill.skillInfo.callMonsterID != 0) {
                    var petId = skill.skillInfo.callMonsterID + skill.level + self.getGiftEffectValue(5);
                    if (self.curPetId != petId) {
                        self.curPetId = petId;
                        self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_CALL_PET, { petID: self.curPetId, owner: self, num: skill.skillInfo.callMonsterNum, isKillAll: true }));
                    }
                }
            }
        };
        p.useSkillOn = function (skill, target, isFirstAim) {
            var self = this;
            //var damage:number = skill.skillInfo.damage*skill.level;
            //if(damage<0){
            target.hurt(self, skill, isFirstAim);
            //}else if(damage>0){
            //    target.hp += 10*(1+damage/10000);
            //}
            if (!target.isDie()) {
                if (skill.skillInfo.casterPositionType > 0) {
                    target.aspectTo(self.row, self.col);
                }
                if (skill.skillInfo.pushType == 1 && skill.skillInfo.pushDistance > 0) {
                    if (target.roleInfo.monsterInfo && target.roleInfo.monsterInfo[gc.t_monster_immunity] && target.roleInfo.monsterInfo[gc.t_monster_immunity].indexOf(1) != -1)
                        return;
                    var point = target.getPointByAspect(false, skill.skillInfo.pushDistance);
                    var col = point[0];
                    var row = point[1];
                    if (row < 0) {
                        row = 0;
                    }
                    else if (row > Role.maxRow - 1) {
                        row = Role.maxRow - 1;
                    }
                    if (col < 0) {
                        col = 0;
                    }
                    else if (col > Role.maxCol - 1) {
                        col = Role.maxCol - 1;
                    }
                    target.pushTo(row, col);
                }
                if (skill.skillInfo.buffID != 0) {
                    if (skill.skillInfo.buffID == 3 && target.roleInfo.monsterInfo && target.roleInfo.monsterInfo[gc.t_monster_immunity] && target.roleInfo.monsterInfo[gc.t_monster_immunity].indexOf(2) != -1)
                        return;
                    target.addBuff(skill.skillInfo.buffID, skill.level);
                }
            }
        };
        p.hasBuff = function (id) {
            var self = this;
            for (var i = 0; i < self.buffs.length; ++i) {
                if (self.buffs[i].id == id) {
                    return true;
                }
            }
            return false;
        };
        p.addBuff = function (id, level) {
            var self = this;
            var value;
            for (var i = 0; i < self.buffs.length; ++i) {
                if (self.buffs[i].id == id) {
                    var reBuff = self.buffs.splice(i, 1)[0];
                    if (reBuff.propertyID != 0) {
                        value = self.roleInfo.getBuffPropByIndex(reBuff.propertyID) - reBuff.getAddPropValue();
                        self.roleInfo.setBuffPropByIndex(reBuff.propertyID, value);
                    }
                    break;
                }
            }
            var buff = g_fight.Buff.create(id, level);
            self.buffs.push(buff);
            if (buff.propertyID != 0) {
                value = self.roleInfo.getBuffPropByIndex(buff.propertyID) + buff.getAddPropValue();
                self.roleInfo.setBuffPropByIndex(buff.propertyID, value);
            }
            self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_ADD_BUFF, buff));
        };
        p.checkRemoveBuff = function (time) {
            var self = this;
            var buff;
            for (var i = 0; i < self.buffs.length; ++i) {
                buff = self.buffs[i];
                var exTime1 = buff.totalTime - buff.leftTime;
                buff.reduceTime(time);
                var exTime2 = buff.totalTime - buff.leftTime;
                if ((buff.exeCount + 1) * 1000 > exTime1 && (buff.exeCount + 1) * 1000 <= exTime2) {
                    buff.exe();
                    var hpValue = buff.getHpValue();
                    if (hpValue != 0) {
                        if (!self.roleInfo.isWorldBossFight) {
                            self.hp += hpValue;
                            if (self.hp <= 0) {
                                self.die();
                            }
                        }
                    }
                }
                if (buff.leftTime <= 0) {
                    self.buffs.splice(i--, 1)[0];
                    self.removeBuff(buff);
                }
            }
        };
        p.removeBuff = function (buff) {
            var self = this;
            if (buff.propertyID != 0) {
                var value = self.roleInfo.getBuffPropByIndex(buff.propertyID) - buff.getAddPropValue();
                self.roleInfo.setBuffPropByIndex(buff.propertyID, value);
            }
            self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_REMOVE_BUFF, buff));
        };
        p.onChange = function () {
            this.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_POS_CHANGE));
        };
        p.hurt = function (enemy, skill, isFirstAim) {
            var self = this;
            if (!self.roleInfo || !enemy.roleInfo)
                return;
            var hurtData = new g_fight.HurtData();
            hurtData.attackRole = enemy;
            hurtData.hurtRole = self;
            hurtData.skill = skill;
            hurtData.isFirstAim = isFirstAim;
            hurtData.isHp2 = false;
            hurtData.miss = false;
            hurtData.mb = false;
            hurtData.disMb = false;
            hurtData.invincible = false;
            hurtData.hp = 0;
            if (skill.skillInfo.special == 1) {
                //special为1必死
                self.hp = 0;
                hurtData.hp = -9999999999;
                self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_HURT, hurtData));
                if (self.hp <= 0) {
                    self.die();
                }
                else if (self.hp > self.roleInfo.maxHpFight) {
                    self.hp = self.roleInfo.maxHpFight;
                }
            }
            else if (skill.hpCoefficient != 0) {
                var damage = enemy.roleInfo.attackFight;
                //var isPvP:boolean = self.roleInfo.monsterInfo==null&&enemy.roleInfo.monsterInfo==null;
                var isDisHp2 = true;
                if (skill.hpCoefficient < 0) {
                    if (self.invincibleTime > 0) {
                        hurtData.invincible = true;
                        self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_HURT, hurtData));
                        return;
                    }
                    var isHit = enemy.roleInfo.isHitSucc(self.roleInfo.dodgeFight);
                    hurtData.miss = !isHit;
                    if (isHit || skill.skillInfo.pushDistance > 0) {
                        var attackType, level = 1, attack = 0;
                        attack = enemy.roleInfo.attackFight;
                        if (enemy.entity) {
                            attackType = enemy.entity.job;
                            level = enemy.entity.lvl;
                        }
                        else {
                            attackType = enemy.roleInfo.monsterInfo[gc.t_monster_attackType];
                            level = enemy.roleInfo.monsterInfo[gc.t_monster_level];
                        }
                        var def = self.roleInfo.getDefence(attackType, level, attack);
                        damage *= 1 - def;
                        if (damage <= 0)
                            damage = 1;
                        var isCrit = enemy.roleInfo.isCritical(self.roleInfo.disCriticalFight);
                        if (isCrit) {
                            hurtData.crit = true;
                            var critDamage = enemy.roleInfo.getCritDamage(self.roleInfo.disCriticalFight);
                            damage *= 1 + critDamage;
                        }
                        damage *= 1 + enemy.roleInfo.damageIncreaseFight - self.roleInfo.damageDecreaseFight;
                        if (enemy.roleInfo.isBenumbProSucc(self.roleInfo.disBenumbProFight)) {
                            self.benumbTime = enemy.roleInfo.benumbProSpanFight * 10;
                            hurtData.mb = true;
                            self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_BENUMB_CHANGED));
                        }
                        else {
                            if (enemy.roleInfo.benumbProFight > 0 && self.roleInfo.disBenumbProFight > 0) {
                            }
                        }
                    }
                }
                else {
                    damage = enemy.roleInfo.attackFight; //此处enemy是有益魔法的施法者
                    damage *= (1 + enemy.getGiftEffectValue(2) / 10000);
                }
                if (!hurtData.miss) {
                    if (self.roleInfo.isPvPFight && skill.hpCoefficient < 0)
                        damage /= 8;
                    damage *= skill.hpCoefficient;
                    damage = Math.floor(damage);
                    if (!self.roleInfo.isPvPFight || self.hp2 <= 0 || skill.hpCoefficient > 0) {
                        if (!self.roleInfo.isWorldBossFight) {
                            self.hp += damage;
                        }
                        hurtData.hp = damage;
                    }
                    else {
                        var hpRate = self.roleInfo.penetrateFight || 0;
                        var hpDamage = damage * hpRate;
                        var hp2Damage = damage * (1 - hpRate);
                        hpDamage = Math.floor(hpDamage);
                        hp2Damage = Math.floor(hp2Damage);
                        if (!self.roleInfo.isWorldBossFight) {
                            self.hp += hpDamage;
                        }
                        self.hp2 += hp2Damage;
                        hurtData.isHp2 = true;
                        if (self.hp2 < 0) {
                            self.hp2 = 0;
                        }
                        hurtData.hp = hpDamage;
                    }
                }
                self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_HURT, hurtData));
                if (self.hp <= 0) {
                    self.die();
                }
                else if (self.hp > self.roleInfo.maxHpFight) {
                    self.hp = self.roleInfo.maxHpFight;
                }
            }
            else {
                self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_HURT, hurtData));
            }
        };
        p.distanceTo = function (aimRole) {
            var self = this;
            var dr = aimRole.row - self.row;
            var dc = aimRole.col - self.col;
            return Math.sqrt(dr * dr + dc * dc);
        };
        p.getSkillTargets = function (skill) {
            var self = this;
            var targets = [];
            var targetType = skill.skillInfo.targetType;
            var effect = skill.skillInfo.effect;
            var radius = skill.skillInfo.effectRadius;
            if (skill.skillInfo.attackDistance == 0) {
                return [];
            }
            if (targetType == 0) {
                targets.push(self.curEnemy);
            }
            else if (targetType == 1) {
                targets.push(self);
            }
            else if (targetType == 2) {
                var minHp = 0;
                var minRole;
                for (var i = 0; i < self.selfs.length; ++i) {
                    if (self.selfs[i].isDie())
                        continue;
                    if (self.selfs[i].roleInfo.maxHpFight - self.selfs[i].hp > minHp) {
                        minHp = self.selfs[i].roleInfo.maxHpFight - self.selfs[i].hp;
                        minRole = self.selfs[i];
                    }
                }
                if (minRole != null)
                    targets.push(minRole);
            }
            else if (targetType == 3) {
                for (var i = 0; i < self.enemys.length; ++i) {
                    if (self.enemys[i].row >= self.curEnemy.row - radius && self.enemys[i].row <= self.curEnemy.row + radius
                        && self.enemys[i].col >= self.curEnemy.col - radius && self.enemys[i].col <= self.curEnemy.col + radius) {
                        targets.push(self.enemys[i]);
                    }
                }
            }
            else if (targetType == 4) {
                for (var i = 0; i < self.enemys.length; ++i) {
                    if (self.enemys[i].row >= self.row - radius && self.enemys[i].row <= self.row + radius
                        && self.enemys[i].col >= self.col - radius && self.enemys[i].col <= self.col + radius) {
                        targets.push(self.enemys[i]);
                    }
                }
            }
            else if (targetType == 5) {
                for (var i = 0; i < self.selfs.length; ++i) {
                    if (self.selfs[i].row >= self.row - radius && self.selfs[i].row <= self.row + radius
                        && self.selfs[i].col >= self.col - radius && self.selfs[i].col <= self.col + radius) {
                        targets.push(self.selfs[i]);
                    }
                }
            }
            return targets;
        };
        p.exeAI = function (checkTime) {
            if (checkTime === void 0) { checkTime = true; }
            var self = this;
            var date = new Date();
            self.isCheckTime = checkTime;
            if (checkTime) {
                if (self.lastExeAITime == 0) {
                    self.lastExeAITime = date.getTime();
                }
                else {
                    if (date.getTime() - self.lastExeAITime < g_fight.MINI_SPACE_TIME) {
                        return;
                    }
                    else {
                        //self.lastExeAITime = date.getTime();
                        self.lastExeAITime = self.lastExeAITime + g_fight.MINI_SPACE_TIME;
                    }
                }
            }
            for (var i = 0; i < self.skills.length; ++i) {
                self.skills[i].reduceTime(g_fight.MINI_SPACE_TIME);
            }
            self.checkRemoveBuff(g_fight.MINI_SPACE_TIME);
            if (self.benumbTime > 0) {
                self.benumbTime -= g_fight.MINI_SPACE_TIME;
                if (self.benumbTime <= 0) {
                    self.dispatchEvent(new g_fight.CusEvent(g_fight.ROLE_EVENT_BENUMB_CHANGED));
                }
            }
            if (self.invincibleTime > 0) {
                self.invincibleTime -= g_fight.MINI_SPACE_TIME;
            }
            if (self.skillActionTime > 0)
                self.skillActionTime -= g_fight.MINI_SPACE_TIME;
            if (self.isBenumb) {
                return;
            }
            var canExeSkill = self.getCurCanExeSkill();
            //给己方施法
            if (canExeSkill != null && canExeSkill.skillInfo.effect == 1) {
                if (self.skillActionTime <= 0)
                    self.spellSkill(canExeSkill);
                return;
            }
            if (self.action == g_fight.ROLE_ACTION_MOVE) {
                if (self.curState == Role.STATE_FOLLOW_MAIN && self.mainRole && self.mainRole != self && self.mainRole.curState != Role.STATE_ATTAK_AIM && !self.mainRole.isBenumb) {
                    if (Math.abs(self.row - self.mainRole.row) <= 1 && Math.abs(self.col - self.mainRole.col) <= 1) {
                        self.curState = Role.STATE_NONE;
                        self.stand();
                    }
                }
                return;
            }
            if (self.isFindingMonster) {
                var nextSPos = self.getPointByAspect(true, 1);
                self.moveTo(nextSPos[1], nextSPos[0]);
                return;
            }
            if (self.mainRole && self.mainRole != self && self.mainRole.curState != Role.STATE_ATTAK_AIM && !self.mainRole.isBenumb) {
                self.curState = Role.STATE_FOLLOW_MAIN;
                if (Math.abs(self.row - self.mainRole.row) <= 1 && Math.abs(self.col - self.mainRole.col) <= 1) {
                    self.curState = Role.STATE_NONE;
                    self.stand();
                }
                else {
                    var nextPos;
                    nextPos = self.getNextNodeTo(self.mainRole.mtRow, self.mainRole.mtCol);
                    var nextPosRole = self.getRoleByRC(nextPos[0], nextPos[1]);
                    if (nextPosRole == null || nextPosRole == self || nextPosRole.curState != Role.STATE_FOLLOW_MAIN) {
                        self.moveTo(nextPos[0], nextPos[1]);
                    }
                    else {
                        var emptyPos = self.getEmptyPosRound(self.mainRole.mtRow, self.mainRole.mtCol, 1);
                        self.moveTo(emptyPos[0], emptyPos[1]);
                    }
                }
                return;
            }
            if (self.enemys == null || self.enemys.length == 0) {
                self.curState = Role.STATE_NONE;
                self.stand();
                return;
            }
            var disEnemy;
            var enemy;
            var minDis = 999999999;
            var dis = 0;
            for (var i = 0; i < self.enemys.length; ++i) {
                enemy = self.enemys[i];
                dis = self.distanceTo(enemy);
                if (dis < minDis) {
                    minDis = dis;
                    disEnemy = enemy;
                }
            }
            if (self.curState == Role.STATE_NONE || self.curState == Role.STATE_FOLLOW_MAIN) {
                if (self.mainRole == null && self.roleInfo.seeDistance != 0 && minDis > self.roleInfo.seeDistance) {
                    return;
                }
                //if(self.curEnemy){
                //    self.curEnemy.removeEventListener(ROLE_EVENT_DIE,self.onCurEnemyDie,self);
                //}
                //self.curEnemy = disEnemy;
                //self.curEnemy.addEventListener(ROLE_EVENT_DIE,self.onCurEnemyDie,self);
                var canExeSkill = self.getCurCanExeSkill();
                if (canExeSkill != null && canExeSkill.skillInfo.effect == 0) {
                    if (canExeSkill.skillInfo.attackDistance > minDis - 1) {
                        self.curState = Role.STATE_ATTAK_AIM;
                        self.moveToAimEnemy = disEnemy;
                        self.exeAttak(); //这里有可能没有移动直接进入战斗，预设moveToAimEnemy
                    }
                    else {
                        self.curState = Role.STATE_MOVE_TO_AIM;
                        self.moveToAimEnemy = disEnemy;
                        self.moveToAim();
                    }
                }
            }
            else if (self.curState == Role.STATE_MOVE_TO_AIM) {
                self.moveToAimEnemy = disEnemy;
                self.moveToAim();
            }
            else if (self.curState == Role.STATE_ATTAK_AIM) {
                self.exeAttak();
            }
        };
        p.getCurCanExeSkill = function () {
            var self = this;
            var skill;
            for (var i = 0; i < self.skills.length; ++i) {
                skill = self.skills[i];
                if (skill.skillInfo.canExtends && !self.isMain)
                    continue;
                if (skill.canExe()) {
                    return self.skills[i];
                }
            }
            return null;
        };
        p.exeAttak = function () {
            var self = this;
            var rcRole = self.getRoleByRC(self.row, self.col);
            if (!self.curEnemy && rcRole != null && rcRole != self || self.curEnemy && self.curEnemy.row == self.row && self.curEnemy.col == self.col) {
                if (self.curEnemy) {
                    self.moveToAimEnemy = self.curEnemy;
                }
                self.curState = Role.STATE_MOVE_TO_AIM;
                var canExeSkill = self.getCurCanExeSkill();
                if (canExeSkill) {
                    var emptyPos = self.getEmptyPosRound(self.moveToAimEnemy.mtRow, self.moveToAimEnemy.mtCol, canExeSkill.skillInfo.attackDistance);
                    self.moveTo(emptyPos[0], emptyPos[1]);
                }
                return;
            }
            if (self.moveToAimEnemy) {
                if (self.curEnemy) {
                    self.curEnemy.removeEventListener(g_fight.ROLE_EVENT_DIE, self.onCurEnemyDie, self);
                }
                self.curEnemy = self.moveToAimEnemy;
                self.curEnemy.addEventListener(g_fight.ROLE_EVENT_DIE, self.onCurEnemyDie, self);
                self.moveToAimEnemy = null;
            }
            var dis = self.distanceTo(self.curEnemy);
            var canExeSkill = self.getCurCanExeSkill();
            if (canExeSkill != null) {
                if (dis != 0 && canExeSkill.skillInfo.attackDistance > dis - 1) {
                    if (self.skillActionTime <= 0)
                        self.spellSkill(canExeSkill);
                }
                else {
                    self.curState = Role.STATE_MOVE_TO_AIM;
                    self.moveToAim();
                }
            }
            //if(self.roleInfo.attackRange>dis){
            //    if(self.attackTime<=0){
            //        self.attack();
            //    }else{
            //        self.attackTime -= MINI_SPACE_TIME;
            //        if(self.roleInfo.attackTime-self.attackTime>400){
            //            self.stand();
            //        }
            //    }
            //}else{
            //    self.curState = Role.STATE_MOVE_TO_AIM;
            //    self.moveToAim();
            //}
        };
        p.moveToAim = function () {
            var self = this;
            if (self.moveToAimEnemy == null) {
                self.curState = Role.STATE_NONE;
                self.stand();
                return;
            }
            var dis = self.distanceTo(self.moveToAimEnemy);
            var canExeSkill = self.getCurCanExeSkill();
            if (canExeSkill != null) {
                if (dis != 0 && canExeSkill.skillInfo.attackDistance > dis - 1) {
                    self.curState = Role.STATE_ATTAK_AIM;
                    self.exeAttak();
                }
                else {
                    var nextPos;
                    nextPos = self.getNextNodeTo(self.moveToAimEnemy.mtRow, self.moveToAimEnemy.mtCol);
                    var nextPosRole = self.getRoleByRC(nextPos[0], nextPos[1]);
                    if ((nextPosRole == null || nextPosRole == self || nextPosRole.curState != Role.STATE_ATTAK_AIM) && (self.row != nextPos[0] || self.col != nextPos[1])) {
                        self.moveTo(nextPos[0], nextPos[1]);
                    }
                    else {
                        var emptyPos = self.getEmptyPosRound(self.moveToAimEnemy.mtRow, self.moveToAimEnemy.mtCol, canExeSkill.skillInfo.attackDistance);
                        self.moveTo(emptyPos[0], emptyPos[1]);
                    }
                }
            }
        };
        p.getNextNodeTo = function (row, col) {
            var self = this;
            if (Math.abs(self.row - row) <= 1 && Math.abs(self.col - col) <= 1) {
                return [self.row, self.col];
            }
            if (self.row == row && self.col == col) {
                return [self.row, self.col];
            }
            else if (self.row == row) {
                return [row, self.col + (self.col > col ? -1 : 1)];
            }
            else if (self.col == col) {
                return [self.row + (self.row > row ? -1 : 1), col];
            }
            else {
                return [self.row + (self.row > row ? -1 : 1), self.col + (self.col > col ? -1 : 1)];
            }
        };
        p.onCurEnemyDie = function (e) {
            var self = this;
            self.curEnemy.removeEventListener(g_fight.ROLE_EVENT_DIE, self.onCurEnemyDie, self);
            self.curState = Role.STATE_NONE;
            self.curEnemy = null;
        };
        p.getRoleByRC = function (row, col) {
            var self = this;
            for (var i = 0; i < self.allRoles.length; ++i) {
                if (self.allRoles[i].mtRow == row && self.allRoles[i].mtCol == col) {
                    return self.allRoles[i];
                }
            }
            return null;
        };
        p.getEmptyPosRound = function (row, col, distance) {
            var self = this;
            var role;
            var minDis = 9999999;
            var pos = [row, col];
            for (var i = row - distance; i <= row + distance; ++i) {
                for (var k = col - distance; k <= col + distance; ++k) {
                    //if(Math.abs(i - row)!=distance &&Math.abs( k - col)!=distance)
                    //    continue;
                    if (i == row && k == col)
                        continue;
                    role = self.getRoleByRC(i, k);
                    if (role == null) {
                        var dr = i - self.row;
                        var dc = k - self.col;
                        var dis = Math.sqrt(dr * dr + dc * dc);
                        if (dis < minDis) {
                            minDis = dis;
                            pos = [i, k];
                        }
                        else if (dis == minDis && Math.random() < 0.5) {
                            minDis = dis;
                            pos = [i, k];
                        }
                    }
                }
            }
            return pos;
        };
        p.setEntity = function (hero) {
            var self = this;
            self.entity = hero;
            self.entity.registerByKey(gd.HeroEntityCtrl.ON_EQUIP_CHANGED, self.onEquipOrWingChange, self);
            self.entity.registerByKey(gd.HeroEntityCtrl.ON_WING_CHANGED, self.onEquipOrWingChange, self);
            self.entity.registerByKey(gd.HeroEntityCtrl.ON_SKILL_CHANGED, self.onSkillChanged, self);
            self.entity.registerByKey(gd.HeroEntityCtrl.ON_GIFT_SKILL_CHANGED, self.onGiftSkillChanged, self);
            self.entity.registerByKey(gd.HeroTalismanCtrl.ON_GIFT_EQUIP_CHANGED, self.onGiftEquipChanged, self);
            self.uid = hero.get(gc.dsConsts.HeroEntity.id);
            var roleInfo = new g_fight.RoleInfo();
            roleInfo.setHeroProp(hero.props);
            self.roleInfo = roleInfo;
            self.job = hero.job;
            self.onSkillChanged();
            self.onGiftSkillChanged();
            self.onGiftEquipChanged();
        };
        p.getGiftEffectValue = function (type) {
            var self = this;
            var value = 0;
            for (var i = 0; i < self.giftSkills.length; ++i) {
                var skillInfo = self.giftSkills[i];
                if (skillInfo[gc.t_talismanSkill_type] == type) {
                    if (type == 2) {
                        value += parseInt(skillInfo[gc.t_talismanSkill_effect]);
                    }
                    else if (type == 5) {
                        if (skillInfo[gc.t_talismanSkill_effect] > value) {
                            value = parseInt(skillInfo[gc.t_talismanSkill_effect]);
                        }
                    }
                }
            }
            return value;
        };
        p.onEquipOrWingChange = function () {
            var self = this;
            self.clothesID = self.entity.getClothDisplayID();
            self.weaponID = self.entity.getWeaponDisplayID();
            self.wingID = self.entity.getWingDisplayID();
        };
        p.onSkillChanged = function () {
            var self = this;
            var hero = self.entity;
            self.skills.length = 0;
            for (var i = 0; i < hero.skillLevels.length; ++i) {
                if (hero.skillLevels[i] == 0)
                    continue;
                var skill = new g_fight.Skill();
                var skillInfo = new g_fight.SkillInfo();
                skillInfo.tabInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, hero.skillIds[i]);
                skill.level = hero.skillLevels[i];
                skill.skillInfo = skillInfo;
                if (skill.skillInfo.firstCD) {
                    skill.resetCD();
                }
                self.skills.push(skill);
            }
            self.skills.sort(function (s1, s2) {
                return s2.skillInfo.priority - s1.skillInfo.priority;
            });
            self.checkPetId();
        };
        p.onGiftSkillChanged = function () {
            var self = this;
            var hero = self.entity;
            self.giftSkills.length = 0;
            var skillIds = hero.getTalismanSkill();
            for (var i = 0; i < skillIds.length; ++i) {
                var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, skillIds[i]);
                if (!skillInfo)
                    continue;
                var type = skillInfo[gc.t_talismanSkill_type];
                if (type == 2 || type == 5) {
                    self.giftSkills.push(skillInfo);
                }
            }
            self.checkPetId();
        };
        p.onGiftEquipChanged = function () {
            var self = this;
            var giftId = self.entity.getTalismanAdorn();
            if (giftId != 0) {
                self.gift = new g_fight.Gift();
                self.gift.x = self.x;
                self.gift.y = self.y - 30;
                self.gift.giftId = giftId;
                self.gift.role = self;
                self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_GIFT_EQUIP_CHANGE));
            }
            else {
                self.gift = null;
                self.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_GIFT_EQUIP_CHANGE));
            }
        };
        p.setMoster = function (id) {
            var self = this;
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, id);
            var roleInfo = new g_fight.RoleInfo();
            roleInfo.setMonsterInfo(monsterInfo);
            self.roleInfo = roleInfo;
            self.clothesID = monsterInfo[gc.t_monster_displayID];
            var skillIds = monsterInfo[gc.t_monster_skillIds];
            self.skills.length = 0;
            for (var i = 0; i < skillIds.length; ++i) {
                var skill = new g_fight.Skill();
                var skillInfo = new g_fight.SkillInfo();
                skillInfo.tabInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, skillIds[i]);
                skill.level = 1;
                skill.skillInfo = skillInfo;
                if (skill.skillInfo.firstCD) {
                    skill.resetCD();
                }
                else {
                    skillInfo.cd = monsterInfo[gc.t_monster_attackTime];
                }
                self.skills.push(skill);
            }
        };
        p.dtor = function () {
            var self = this;
            if (self.entity) {
                self.entity.unregisterByKey(gd.HeroEntityCtrl.ON_EQUIP_CHANGED, self.onEquipOrWingChange, self);
                self.entity.unregisterByKey(gd.HeroEntityCtrl.ON_WING_CHANGED, self.onEquipOrWingChange, self);
                self.entity.unregisterByKey(gd.HeroEntityCtrl.ON_SKILL_CHANGED, self.onSkillChanged, self);
                self.entity.unregisterByKey(gd.HeroEntityCtrl.ON_GIFT_SKILL_CHANGED, self.onGiftSkillChanged, self);
                self.entity.unregisterByKey(gd.HeroTalismanCtrl.ON_GIFT_EQUIP_CHANGED, self.onGiftEquipChanged, self);
            }
            if (self.curEnemy) {
                self.curEnemy.removeEventListener(g_fight.ROLE_EVENT_DIE, self.onCurEnemyDie, self);
            }
            self.selfs = null;
            self.enemys = null;
            self.allRoles = null;
            self.mainRole = null;
            self.moveToAimEnemy = null;
            self.roleInfo = null;
            self.skills.length = 0;
            self.buffs.length = 0;
        };
        Role.STATE_NONE = 1;
        Role.STATE_MOVE_TO_AIM = 2;
        Role.STATE_ATTAK_AIM = 3;
        Role.STATE_FOLLOW_MAIN = 4;
        Role.cellW = 80; //逻辑格像素
        Role.cellH = 80; //逻辑格像素
        Role.maxRow = 0;
        Role.maxCol = 0;
        return Role;
    })(egret.EventDispatcher);
    g_fight.Role = Role;
    egret.registerClass(Role,"g_fight.Role");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    g_fight.GIFT_EVENT_POS_CHANGE = "GIFT_EVENT_POS_CHANGE";
    var Gift = (function (_super) {
        __extends(Gift, _super);
        function Gift() {
            _super.call(this);
            this.aimDis = 30; //走到角色附近就不动
            this.awayDis = 60; //离开远了就开始走向角色
            this.action = Gift.ACTION_STAND;
        }
        var d = __define,c=Gift,p=c.prototype;
        p.exeAI = function () {
            var self = this;
            var dx = self.role.x - self.x;
            var dy = self.role.y - self.y;
            var dis = Math.sqrt(dx * dx + dy * dy);
            if (this.action == Gift.ACTION_STAND) {
                if (dis >= self.awayDis) {
                    self.action = Gift.ACTION_MOVE;
                }
            }
            else if (this.action == Gift.ACTION_MOVE) {
                if (dis <= self.aimDis) {
                    self.action = Gift.ACTION_STAND;
                }
                else {
                    var cos = dx / dis;
                    var sin = dy / dis;
                    var speed = dis / 10;
                    this.x += speed * cos;
                    this.y += speed * sin;
                    this.dispatchEvent(new egret.Event(g_fight.GIFT_EVENT_POS_CHANGE));
                }
            }
        };
        p.dtor = function () {
        };
        Gift.ACTION_STAND = 0;
        Gift.ACTION_MOVE = 1;
        return Gift;
    })(egret.EventDispatcher);
    g_fight.Gift = Gift;
    egret.registerClass(Gift,"g_fight.Gift");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/22.
 */
var g_fight;
(function (g_fight) {
    var Pet = (function (_super) {
        __extends(Pet, _super);
        function Pet() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Pet,p=c.prototype;
        d(p, "owner"
            ,function () {
                return this._owner;
            }
            ,function (value) {
                this._owner = value;
                this._owner.addEventListener(g_fight.ROLE_EVENT_DIE, this.onOwnerDie, this);
            }
        );
        d(p, "hp"
            ,function () {
                return this._hp;
            }
            ,function (value) {
                this._hp = value;
                if (this.isDie()) {
                    if (this._owner.curPetNum > 0)
                        this._owner.curPetNum--;
                }
                this.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_HP_CHANGE));
                if (this.isDie()) {
                    this.dispatchEvent(new egret.Event(g_fight.ROLE_EVENT_DIE));
                }
            }
        );
        p.onOwnerDie = function (e) {
            this.hp = 0;
        };
        return Pet;
    })(g_fight.Role);
    g_fight.Pet = Pet;
    egret.registerClass(Pet,"g_fight.Pet");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/21.
 */
var g_fight;
(function (g_fight) {
    var Buff = (function () {
        function Buff() {
        }
        var d = __define,c=Buff,p=c.prototype;
        Buff.create = function (id, skillLv) {
            var buff = new Buff();
            var info = mo.getJSONWithFileNameAndID(gc.cfg_t_buff, id);
            buff.buffInfo = info;
            buff.level = skillLv;
            buff.leftTime = buff.totalTime;
            buff.exeCount = 0;
            return buff;
        };
        p.reduceTime = function (time) {
            if (this.leftTime > 0) {
                this.leftTime -= time;
            }
        };
        p.getAddPropValue = function () {
            var value = this.baseValue1 + this.linerScale * this.level;
            return value;
        };
        p.getHpValue = function () {
            var value = this.effectValue + this.effectValeAdd * this.level;
            return value;
        };
        p.exe = function () {
            this.exeCount++;
        };
        d(p, "totalTime"
            ,function () {
                return this.liftTime * 10 + this.level * this.lifeTimeAdd * 10;
            }
        );
        d(p, "id"
            ,function () {
                return this.buffInfo[gc.t_buff_id] || 0;
            }
        );
        d(p, "name"
            ,function () {
                return this.buffInfo[gc.t_buff_name];
            }
        );
        d(p, "liftTime"
            ,function () {
                return this.buffInfo[gc.t_buff_liftTime] || 0;
            }
        );
        d(p, "lifeTimeAdd"
            ,function () {
                return this.buffInfo[gc.t_buff_lifeTimeAdd] || 0;
            }
        );
        d(p, "effectValue"
            ,function () {
                return this.buffInfo[gc.t_buff_effectValue] || 0;
            }
        );
        d(p, "effectValeAdd"
            ,function () {
                return this.buffInfo[gc.t_buff_effectValeAdd] || 0;
            }
        );
        d(p, "propertyID"
            ,function () {
                return this.buffInfo[gc.t_buff_propertyID] || 0;
            }
        );
        d(p, "baseValue1"
            ,function () {
                return this.buffInfo[gc.t_buff_baseValue1] || 0;
            }
        );
        d(p, "linerScale"
            ,function () {
                return this.buffInfo[gc.t_buff_linerScale] || 0;
            }
        );
        d(p, "effectRes"
            ,function () {
                return this.buffInfo[gc.t_buff_effectRes] || 0;
            }
        );
        d(p, "specialEffect"
            ,function () {
                return this.buffInfo[gc.t_buff_specialEffect] || 0;
            }
        );
        return Buff;
    })();
    g_fight.Buff = Buff;
    egret.registerClass(Buff,"g_fight.Buff");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var HurtData = (function () {
        function HurtData() {
        }
        var d = __define,c=HurtData,p=c.prototype;
        return HurtData;
    })();
    g_fight.HurtData = HurtData;
    egret.registerClass(HurtData,"g_fight.HurtData");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/14.
 */
var g_fight;
(function (g_fight) {
    var FightTreasure = (function (_super) {
        __extends(FightTreasure, _super);
        function FightTreasure() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightTreasure,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            //self._layerOpt.shownWithAction = false;
            self._comps = [];
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var index = self.data['index'];
            self.tab_btn.selectedIndex = index < 0 ? 0 : index;
            self._comps.push(g_fight.PVPSelfInfo.create().setData({ tray: self.container, extra: self.data }).show());
            self._comps.push(g_fight.FightTreasureOutside.create().setData({ tray: self.container, extra: self.data }).show());
            self._comps.push(g_fight.FightTreasureList.create().setData({ tray: self.container, extra: self.data }).show());
            self._comps.push(g_fight.FightTreasureChat.create().setData({ tray: self.container, extra: self.data }).show());
            process.nextTick(function () {
                self._tap_tab_btn();
            });
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
        };
        p._tap_tab_btn = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            var curComp = self._comps[selectedIndex];
            for (var i = 0, li = self._comps.length; i < li; i++) {
                self._comps[i].visible = selectedIndex == i;
            }
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        p._tap_btn_help = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            //
            //var lotusInfo = mo.getJSONWithFileName(gc.cfg_c_demonLotus)[0];
            if (selectedIndex == 0) {
                g_base.BaseShowTip.create().setData({ id: 208 }).show();
            }
            else if (selectedIndex == 1) {
                g_base.BaseShowTip.create().setData({ id: 209 }).show();
            }
            else if (selectedIndex == 2) {
                g_base.BaseShowTip.create().setData({ id: 210 }).show();
            }
            else if (selectedIndex == 3) {
                g_base.BaseShowTip.create().setData({ id: 211 }).show();
            }
        };
        return FightTreasure;
    })(mo.gui.Dlg);
    g_fight.FightTreasure = FightTreasure;
    egret.registerClass(FightTreasure,"g_fight.FightTreasure");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/14.
 */
var g_fight;
(function (g_fight) {
    var FightTreasureChat = (function (_super) {
        __extends(FightTreasureChat, _super);
        function FightTreasureChat() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightTreasureChat,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_fight.FightTreasureChatItem;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var item = mo.getJSONWithFileName(gc.cfg_t_treasure);
            var all = mo.getJSONWithFileName(gc.cfg_t_item);
            gd.pkOutCtrl.getTreasurePkRecordList(function (data) {
                if (data && data.length > 0) {
                    self.actItems = [];
                    self.ico_nothing.visible = false;
                    for (var i = 0; i < data.length; i++) {
                        var obj = data[i];
                        var treasureId = obj[gc.dsConsts.TreasureRecordEntity.treasureId];
                        var g_objs = [];
                        var got = obj[gc.dsConsts.TreasureRecordEntity.items];
                        for (var id in got) {
                            var count = got[id];
                            var _item = all[id];
                            g_objs.push({ id: id, count: count, item: _item });
                        }
                        self.actItems.push({ o: obj, name: all[treasureId][gc.t_item_name], color: all[treasureId][gc.t_item_color], got: g_objs });
                    }
                    self._reset();
                }
                else {
                    self.ico_nothing.visible = true;
                }
            }, self);
        };
        p._reset = function () {
            var self = this;
            self.refreshList("list_items");
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        return FightTreasureChat;
    })(mo.gui.Layer);
    g_fight.FightTreasureChat = FightTreasureChat;
    egret.registerClass(FightTreasureChat,"g_fight.FightTreasureChat");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/14.
 */
var g_fight;
(function (g_fight) {
    var FightTreasureInfo = (function (_super) {
        __extends(FightTreasureInfo, _super);
        function FightTreasureInfo() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightTreasureInfo,p=c.prototype;
        return FightTreasureInfo;
    })(mo.gui.Layer);
    g_fight.FightTreasureInfo = FightTreasureInfo;
    egret.registerClass(FightTreasureInfo,"g_fight.FightTreasureInfo");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/14.
 */
var g_fight;
(function (g_fight) {
    var FightTreasureList = (function (_super) {
        __extends(FightTreasureList, _super);
        function FightTreasureList() {
            _super.apply(this, arguments);
            this.hideLeftMillisecond = -1;
        }
        var d = __define,c=FightTreasureList,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_fight.FightTreasureItem;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._resetInfo();
            self._reset();
        };
        p._reset = function () {
            var self = this;
            gd.pkOutCtrl.getExPkOutInfo(function (data) {
                var left_time = data[gc.dsConsts.ExPkOutInfo.openTime];
                var list = data[gc.dsConsts.ExPkOutInfo.treasureInfo];
                if (left_time && left_time != "") {
                    self._resetTime(left_time);
                }
                if (list && list.length > 0) {
                    self.ico_no_item.visible = false;
                    self.ico_item_hint.visible = true;
                }
                else {
                    self.ico_no_item.visible = true;
                    self.ico_item_hint.visible = false;
                }
                self._resetList(list);
            }, self);
        };
        p._resetList = function (listArray) {
            var self = this;
            self.actItems = [];
            var item = mo.getJSONWithFileName(gc.cfg_t_treasure);
            var all = mo.getJSONWithFileName(gc.cfg_t_item);
            for (var i = 0; i < listArray.length; i++) {
                var obj = listArray[i];
                var _id = obj[gc.dsConsts.TreasureInfo.itemId];
                var g_objs = [];
                var got = obj[gc.dsConsts.TreasureInfo.items];
                for (var id in got) {
                    var count = got[id];
                    var _item = all[id];
                    g_objs.push({ id: id, count: count, item: _item });
                }
                self.actItems.push({ o: obj, t: item[_id], got: g_objs });
            }
            self.refreshList("list_items");
        };
        p._resetInfo = function () {
            var self = this;
            var count = gd.userCtrl.get(gc.dsConsts.UserEntity.counts)[gc.c_prop.userRefreshCountKey.incognito];
            count = count == undefined ? 0 : count;
            self.label_hidden_count.text = "今日隐姓埋名次数:" + count;
            self.label_cost.text = gc.calIncognito(count);
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._click_list_items = function (event) {
            var self = this;
            var data = event.item;
            var allCount = 0;
            var unlockedCount = 0;
            for (var i = 0; i < self.actItems.length; i++) {
                var obj = self.actItems[i];
                if (obj['t'][gc.t_treasure_id] == data['t'][gc.t_treasure_id]) {
                    allCount++;
                    if (obj['o'][gc.dsConsts.TreasureInfo.status] == 2) {
                        unlockedCount++;
                    }
                }
            }
            g_fight.FightTreasureCompose.create().setData({ obj: data, lock: allCount - unlockedCount, unlock: unlockedCount, isfinished: data['o'][gc.dsConsts.TreasureInfo.status] == 2 ? 1 : 0, parent: self }).show();
        };
        p._tap_btn_hidden = function () {
            var self = this;
            gd.pkOutCtrl.incognito(function (data) {
                self._resetTime(data[2]);
                self._resetInfo();
            }, self);
        };
        p._resetTime = function (lastStartTime) {
            var self = this;
            var ls = new Date(lastStartTime);
            var lt = ls.getSecondsBetween(Date.newDate());
            var cfg = mo.getJSONWithFileName(gc.cfg_c_game)[gc.id_c_game.treasure];
            if (lt >= 0 && lt < cfg[1]) {
                self.setCDTime(cfg[1] - lt);
            }
        };
        p._timeInterval = function () {
            var self = this;
            self.label_time.text = mo.getTimeStr(self.hideLeftMillisecond);
        };
        p._timeFinish = function () {
            var self = this;
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
        };
        p.cleanCDTime = function () {
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.hideLeftMillisecond = endTime1 - now;
            if (self.hideLeftMillisecond < 0)
                self.hideLeftMillisecond = 0;
            self._timeInterval();
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self.hideLeftMillisecond = -1;
            self._timeFinish();
        };
        return FightTreasureList;
    })(mo.gui.Layer);
    g_fight.FightTreasureList = FightTreasureList;
    egret.registerClass(FightTreasureList,"g_fight.FightTreasureList");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/14.
 */
var g_fight;
(function (g_fight) {
    var FightTreasureOutside = (function (_super) {
        __extends(FightTreasureOutside, _super);
        function FightTreasureOutside() {
            _super.apply(this, arguments);
            this.getEnemyListLeftMillisecond = -1;
            this.refreshLeftMillisecond = -1;
        }
        var d = __define,c=FightTreasureOutside,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            this.cleanCDTime();
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            gd.pkOutCtrl.getEnemyList(function (data) {
                self.data['list'] = data;
                self._reset();
                self._resetSearchBtn();
            }, self);
        };
        p._setItem = function (index, item) {
            var self = this;
            var head = self["ico_role" + index];
            var resName = uiHelper.getHeroIcon(item[gc.dsConsts.PkOutUserData.iconId], 0);
            mo.R.loadTo('FightScene', resName, function () {
            });
            head.source = resName;
            //var vipLvl = item[gc.dsConsts.PkOutUserData.vip];
            //var vipGrp = self["grp_vip" + index];
            //if (vipLvl > 0) {
            //    vipGrp.visible = true;
            //    var vipLbl = self["label_vipLv" + index];
            //    vipLbl.text = vipLvl + "";
            //} else {
            //    vipGrp.visible = false;
            //}
            //
            //var nameLbl = self["label_name" + index];
            //nameLbl.text = item[gc.dsConsts.PkOutUserData.name];
            //var lvlLbl = self["label_lv" + index];
            //lvlLbl.text = " Lv." + item[gc.dsConsts.PkOutUserData.lvl];
            var icoCarry = self["img_carry_treasure" + index];
            var grp_name_container = self["grp_name_container" + index];
            if (icoCarry.parent)
                grp_name_container.removeElement(icoCarry);
            if (item[gc.dsConsts.PkOutUserData.isTreasure]) {
                if (!icoCarry.parent)
                    grp_name_container.addElement(icoCarry);
            }
        };
        p._setSearchCoolDown = function (index) {
            var self = this;
            var lm = self.data['extra']['lm'];
            self.coolDownLabel = self["label_searching" + index];
            self.setCDTime(lm / 1000);
        };
        p._reset = function () {
            var self = this;
            var data = self.data;
            var list = data['list'];
            for (var i = 0; i < 3; ++i) {
                var grp_enemy = self["grp_enemy" + i];
                var grp_searching = self["grp_searching" + i];
                var grp_no = self["grp_no_enemy" + i];
                if (i < list.length) {
                    grp_enemy.visible = true;
                    grp_searching.visible = false;
                    grp_no.visible = false;
                    self._setItem(i, list[i]);
                }
                else if (i == list.length) {
                    grp_enemy.visible = false;
                    grp_searching.visible = true;
                    grp_no.visible = false;
                    self._setSearchCoolDown(i);
                }
                else {
                    grp_enemy.visible = false;
                    grp_searching.visible = false;
                    grp_no.visible = true;
                }
            }
        };
        p._resetSearchBtn = function () {
            var self = this;
            var count = gd.userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.spies);
            count = count == undefined ? 0 : count;
            self.label_cost.text = gc.calSpies(count + 1);
            self.label_search_count.text = "高级探秘次数:" + count;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.treasure);
            var count_all = gameCfg[4];
            var cd = gameCfg[5];
            if (count != 0 && (count % count_all) == 0) {
                var lastTime = gd.userCtrl.getLastTime(gc.c_prop.userRefreshCountKey.spies);
                var ls = new Date(lastTime);
                var lt = ls.getSecondsBetween(Date.newDate());
                if (lt < cd) {
                    self.grp_cost.visible = false;
                    self.setCDTime2(cd - lt);
                    return;
                }
            }
            self.grp_cost.visible = true;
            self.label_search_refresh.text = "";
        };
        p._timeInterval = function () {
            var self = this;
            if (self.coolDownLabel)
                self.coolDownLabel.text = "寻找对手中   " + mo.getTimeStr(self.getEnemyListLeftMillisecond);
        };
        p._timeFinish = function () {
            var self = this;
            self.coolDownLabel = undefined;
        };
        p._timeInterval2 = function () {
            var self = this;
            if (self.label_search_refresh)
                self.label_search_refresh.text = "CD中 " + mo.getTimeStr(self.refreshLeftMillisecond) + "      ";
        };
        p._timeFinish2 = function () {
            var self = this;
            self.grp_cost.visible = true;
            self.label_search_refresh.text = "";
        };
        p._challenge = function (index) {
            var self = this;
            g_fight.PVPBattle.create().setData({ pkTarget: self.data['list'][index] }).show();
        };
        p._search = function (index) {
            var self = this;
            gd.pkOutCtrl.refreshEnemy(true, function (data) {
                self.data['list'] = data;
                self._reset();
                self._callFightLayer();
            }, self);
        };
        p._callFightLayer = function () {
            var self = this;
            var fl = self.data['extra']['fl'];
            fl.resetPvpEnemyViewOnlyDraw(self.data['list']);
        };
        p._tap_btn_p_search = function () {
            var self = this;
            if (self.refreshLeftMillisecond > 0) {
                return mo.showMsg("此功能正在CD中");
            }
            if (gd.userCtrl.getDiamond() < parseInt(self.label_cost.text)) {
                return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }
            self.grp_searching.visible = true;
            gd.pkOutCtrl.treasureBiz(function (data) {
                self.grp_searching.visible = false;
                self.data['list'] = data;
                self._reset();
                self._resetSearchBtn();
                self._callFightLayer();
            }, self);
        };
        p._tap_ico_challenge0 = function () {
            var self = this;
            self._challenge(0);
        };
        p._tap_ico_challenge1 = function () {
            var self = this;
            self._challenge(1);
        };
        p._tap_ico_challenge2 = function () {
            var self = this;
            self._challenge(2);
        };
        p._tap_btn_search0 = function () {
            var self = this;
            self._search(0);
        };
        p._tap_btn_search1 = function () {
            var self = this;
            self._search(1);
        };
        p._tap_btn_search2 = function () {
            var self = this;
            self._search(2);
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
        };
        p.cleanCDTime = function () {
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.getEnemyListLeftMillisecond = endTime1 - now;
            if (self.getEnemyListLeftMillisecond < 0)
                self.getEnemyListLeftMillisecond = 0;
            self._timeInterval();
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self.getEnemyListLeftMillisecond = -1;
            self._timeFinish();
        };
        p.setCDTime2 = function (second) {
            var self = this;
            if (second > 0) {
                if (self.timeTrigger2) {
                    tm.timer.remove(self.timeTrigger2);
                    self.timeTrigger2 = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.timeTrigger2 = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec2, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut2, self);
                tm.timer.add(timeTrigger);
            }
        };
        p.cleanCDTime2 = function () {
            var self = this;
            if (self.timeTrigger2) {
                tm.timer.remove(self.timeTrigger2);
                self.timeTrigger2 = null;
            }
        };
        p.timeSec2 = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.refreshLeftMillisecond = endTime1 - now;
            if (self.refreshLeftMillisecond < 0)
                self.refreshLeftMillisecond = 0;
            self._timeInterval2();
        };
        p.timeOut2 = function (type, beginTime, endTime) {
            var self = this;
            self.refreshLeftMillisecond = -1;
            self._timeFinish2();
        };
        return FightTreasureOutside;
    })(mo.gui.Layer);
    g_fight.FightTreasureOutside = FightTreasureOutside;
    egret.registerClass(FightTreasureOutside,"g_fight.FightTreasureOutside");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/14.
 */
var g_fight;
(function (g_fight) {
    var FightTreasureItem = (function (_super) {
        __extends(FightTreasureItem, _super);
        function FightTreasureItem() {
            _super.apply(this, arguments);
            this.hideLeftMillisecond = -1;
        }
        var d = __define,c=FightTreasureItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ico_item.onClick(function (data) {
            });
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self._reset();
        };
        p._reset = function () {
            var self = this;
            var data = self.data;
            var treasure = data['t'];
            var obj = data['o'];
            self.ico_item.setData({ itemId: treasure[gc.t_treasure_id], count: 1 });
            self.cleanCDTime();
            if (obj[gc.dsConsts.TreasureInfo.status] == 0) {
                self.label_time.visible = false;
            }
            else if (obj[gc.dsConsts.TreasureInfo.status] == 1) {
                self.label_time.visible = true;
                self._resetTime(obj[gc.dsConsts.TreasureInfo.openTime]);
            }
            else if (obj[gc.dsConsts.TreasureInfo.status] == 2) {
                //已经解锁
                self.label_time.visible = true;
                self.label_time.text = mo.STR.format("[ubb color=#3AF5AA]%s[/ubb]", "已解锁");
            }
        };
        p._resetTime = function (lastStartTime) {
            var self = this;
            var ls = new Date(lastStartTime);
            var lt = ls.getSecondsBetween(Date.newDate());
            self.setCDTime(self.data['t'][gc.t_treasure_guardTime] - lt);
        };
        p._timeInterval = function () {
            var self = this;
            self.label_time.text = mo.getTimeStr(self.hideLeftMillisecond);
        };
        p._timeFinish = function () {
            var self = this;
            self.label_time.text = "已解锁";
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
        };
        p.cleanCDTime = function () {
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.hideLeftMillisecond = endTime1 - now;
            if (self.hideLeftMillisecond < 0)
                self.hideLeftMillisecond = 0;
            self._timeInterval();
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self.hideLeftMillisecond = -1;
            self._timeFinish();
        };
        return FightTreasureItem;
    })(mo.gui.ItemRenderer);
    g_fight.FightTreasureItem = FightTreasureItem;
    egret.registerClass(FightTreasureItem,"g_fight.FightTreasureItem");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/14.
 */
var g_fight;
(function (g_fight) {
    var FightTreasureChatItem = (function (_super) {
        __extends(FightTreasureChatItem, _super);
        function FightTreasureChatItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightTreasureChatItem,p=c.prototype;
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
            var data = self.data['o'];
            var type = data[gc.dsConsts.TreasureRecordEntity.recordType];
            var userName = "";
            if (data[gc.dsConsts.TreasureRecordEntity.userVip] > 0) {
                userName = mo.STR.format("[ubb color=#ffad00]VIP%s [/ubb][ubb color=#00cdff]%s[/ubb]", data[gc.dsConsts.TreasureRecordEntity.userVip], data[gc.dsConsts.TreasureRecordEntity.userName]);
            }
            else {
                userName = mo.STR.format("[ubb color=#00cdff]%s[/ubb]", data[gc.dsConsts.TreasureRecordEntity.userName]);
            }
            if (data[gc.dsConsts.TreasureRecordEntity.guildName]) {
                userName = mo.STR.format("[ubb color=#e76df5][%s][/ubb]", data[gc.dsConsts.TreasureRecordEntity.guildName]) + userName;
            }
            var content = "";
            var itemColor = uiHelper.getColorByQuality(self.data['color']);
            if (type == gc.c_prop.treasureRecordTypeKey.getTreasure) {
                content = mo.STR.format("秘宝 [ubb color=%s]%s[/ubb] 刚刚被 %s 拾取,有实力的大侠赶紧去劫镖!", itemColor, self.data['name'], userName);
            }
            else if (type == gc.c_prop.treasureRecordTypeKey.pkTreasure) {
                content = mo.STR.format("秘宝 [ubb color=%s]%s[/ubb] 刚刚被一名凶残的玩家 %s 夺取,有实力的大侠赶紧去劫镖!", itemColor, self.data['name'], userName);
            }
            else if (type == gc.c_prop.treasureRecordTypeKey.openTreasure) {
                var itemstr = "";
                var items = self.data['got'];
                for (var i = 0; i < items.length; i++) {
                    var obj = items[i];
                    var color = uiHelper.getColorByQuality(obj['item'][gc.t_item_color]);
                    itemstr = mo.STR.format("%s [ubb color=%s]%s[/ubb] x%s", itemstr, color, obj['item'][gc.t_item_name], obj['count']);
                }
                content = mo.STR.format("秘宝 [ubb color=%s]%s[/ubb] 刚刚被 %s 成功打开!获得了%s", itemColor, self.data['name'], userName, itemstr);
            }
            else if (type == gc.c_prop.treasureRecordTypeKey.compose) {
                content = mo.STR.format("玩家 %s 刚刚合成了 [ubb color=%s]%s[/ubb]", userName, uiHelper.getColorByQuality(self.data['color']), self.data['name']);
            }
            self.label_content.text = content;
            self.label_time.text = Date.newDate(data[gc.dsConsts.TreasureRecordEntity.recordDate]).toFormat("YYYY-MM-DD HH24:MI:SS");
        };
        return FightTreasureChatItem;
    })(mo.gui.ItemRenderer);
    g_fight.FightTreasureChatItem = FightTreasureChatItem;
    egret.registerClass(FightTreasureChatItem,"g_fight.FightTreasureChatItem");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/23.
 */
var g_fight;
(function (g_fight) {
    var FightTreasureCompose = (function (_super) {
        __extends(FightTreasureCompose, _super);
        function FightTreasureCompose() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightTreasureCompose,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_fight.FightTreasureComposeItem;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._reset();
            self._resetDesc();
        };
        p._reset = function () {
            var self = this;
            var item = mo.getJSONWithFileNameAndID(gc.cfg_t_treasure, self.data['obj']['t'][gc.t_treasure_id]);
            var all = mo.getJSONWithFileName(gc.cfg_t_item);
            var rewards = item[gc.t_treasure_items];
            self.actItems = [];
            self.curIndex = 0;
            var lastCount = 0;
            for (var i = 0; i < rewards.length; i++) {
                var obj = rewards[i];
                var needCount = obj[0];
                if (self.data['unlock'] >= needCount) {
                    if (lastCount < needCount) {
                        self.curIndex = i;
                        lastCount = needCount;
                    }
                }
                self.actItems.push({ o: obj, isNow: 0, item: all[obj[1]], current: self.data['unlock'] });
            }
            self.actItems[self.curIndex]['isNow'] = 1;
            self.refreshList("list_items");
        };
        p._resetDesc = function () {
            var self = this;
            var all = mo.getJSONWithFileName(gc.cfg_t_item);
            var t = self.data['obj']['t'];
            var obj = all[t[gc.t_treasure_id]];
            var itemColor = uiHelper.getColorByQuality(obj[gc.t_item_color]);
            var _item = mo.getJSONWithFileNameAndID(gc.cfg_t_treasure, t[gc.t_treasure_id]);
            var cur = self.actItems[self.curIndex]['o'];
            var itemGot = all[cur[1]];
            var content = mo.STR.format("您当前选择[ubb color=%s] %s [/ubb]进行合成[/br]同类碎片已解锁 %s 个[/br]还有 %s 个正在解锁中[/br]当前合成后可获得 [ubb color=%s]%s[/ubb](消耗%s碎片)[/br]", itemColor, obj[gc.t_item_name], self.data['unlock'], self.data['lock'], uiHelper.getColorByQuality(itemGot[gc.t_item_color]), itemGot[gc.t_item_name], cur[0]);
            self.label_desc.text = content;
            self.label_compose_hint.visible = self.data['isfinished'] == 1 ? false : true;
            self.btn_compose.visible = self.data['isfinished'] == 1 ? true : false;
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._tap_btn_info = function () {
            g_base.BaseShowTip.create().setData({ id: 213 }).show();
        };
        p._tap_btn_compose = function () {
            var self = this;
            if (self.data['isfinished']) {
                gd.pkOutCtrl.compose(self.data['obj']['t'][gc.t_treasure_id], function (data) {
                    mo.showMsg("合成成功,请至邮箱查收物品!");
                    var par = self.data['parent'];
                    par._reset();
                    self.close();
                }, self);
            }
        };
        return FightTreasureCompose;
    })(mo.gui.Dlg);
    g_fight.FightTreasureCompose = FightTreasureCompose;
    egret.registerClass(FightTreasureCompose,"g_fight.FightTreasureCompose");
})(g_fight || (g_fight = {}));

/**
 * Created by admin on 16/4/23.
 */
var g_fight;
(function (g_fight) {
    var FightTreasureComposeItem = (function (_super) {
        __extends(FightTreasureComposeItem, _super);
        function FightTreasureComposeItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightTreasureComposeItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ico_item.onClick(function () {
                g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
            }, self.ico_item);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self._reset();
        };
        //{precent:obj[2],isNow:0,item:all[obj[1]],current:self.data['unlock']}
        p._reset = function () {
            var self = this;
            self.ico_item.setData({ itemId: self.data['item'][gc.t_item_id], count: 1 });
            self.ico_item.label_text.visible = false;
            var color = self.data['current'] < self.data['o'][0] ? "0xff0000" : "0xffffff";
            self.label_name.text = mo.STR.format("[ubb color=%s]%s[/ubb]", uiHelper.getColorByQuality(self.data['item'][gc.t_item_color]), self.data['item'][gc.t_item_name]);
            self.label_count.text = mo.STR.format("([ubb color=%s]%s[/ubb]/%s)", color, self.data['current'], self.data['o'][0]);
            if (self.data['isNow'] == 1) {
                self.ico_bg.source = "ico_treasure_bg_s";
            }
            else {
                self.ico_bg.source = "ico_treasure_bg";
            }
            self.label_open_hint.text = "开出红色秘宝概率 " + self.data['o'][2] + "%";
        };
        return FightTreasureComposeItem;
    })(mo.gui.ItemRenderer);
    g_fight.FightTreasureComposeItem = FightTreasureComposeItem;
    egret.registerClass(FightTreasureComposeItem,"g_fight.FightTreasureComposeItem");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/9.
 */
var g_fight;
(function (g_fight) {
    var FightEffect = (function (_super) {
        __extends(FightEffect, _super);
        function FightEffect() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightEffect,p=c.prototype;
        FightEffect.getFightEffect = function (key, aspect) {
            var index = key * 100 + aspect;
            var effect = FightEffect._effects[index] || new FightEffect();
            FightEffect._effects[index] = null;
            return effect;
        };
        FightEffect.removeFightEffect = function (effect) {
            var index = effect.key * 100 + effect.aspect;
            FightEffect._effects[index] = effect;
        };
        p.getEffectUrl = function (id, aspect, extname) {
            var aspectStrs = [null, "A", "B", "C", "D", "E"];
            var resName = 'e' + id + aspectStrs[aspect < 6 ? aspect : aspect - 4];
            if (extname) {
                resName = mo.STR.format("resource/dynamic2/%s.%s", resName, extname);
            }
            return resName;
        };
        p.startLoadByKey = function (key, aspect) {
            if (this.key == key && this.aspect == aspect)
                return;
            this.key = key;
            this.aspect = aspect;
            var self = this;
            var aspectStrs = [null, "A", "B", "C", "D", "E"];
            self.loadRes(self.getEffectUrl(key, aspect), self.getEffectUrl(key, aspect, "png"));
        };
        p.loadRes = function (jsonUrl, imgUrl, cb, ctx) {
            if (cb === void 0) { cb = null; }
            if (ctx === void 0) { ctx = null; }
            var self = this;
            self.jsonData = mo.getData('mc', jsonUrl);
            self.texture = null;
            RES.getResByUrl(imgUrl, function (texture) {
                self.texture = texture;
                self.initMc();
                if (self.jsonData && self.texture) {
                    if (cb)
                        cb.call(ctx);
                }
            }, self);
        };
        FightEffect._effects = {};
        return FightEffect;
    })(g_base.Effect);
    g_fight.FightEffect = FightEffect;
    egret.registerClass(FightEffect,"g_fight.FightEffect");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/19.
 */
var g_fight;
(function (g_fight) {
    var EnterCopyEffect = (function (_super) {
        __extends(EnterCopyEffect, _super);
        function EnterCopyEffect() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EnterCopyEffect,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._penetrable = true;
            self._layerOpt.shownWithAction = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var copyId = self.data.copyId;
            var monsterId = self.data.monsterId;
            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            var monsterInfos = mo.getJSONWithFileName(gc.cfg_t_monster);
            var monsterInfo = monsterInfos[monsterId];
            var oY = self.grp_copy.y;
            if (monsterInfo != null && monsterInfo[gc.t_monster_bossLevel] != 0) {
                self.label_copy.text = monsterInfo[gc.t_monster_name];
            }
            else {
                self.label_copy.text = copyInfo[gc.t_copy_name];
            }
            self.grp_copy.scaleX = self.grp_copy.scaleY = 1.2;
            self.grp_copy.alpha = 0;
            self.grp_copy.x = -480 * 0.2 / 2;
            self.grp_copy.y = oY - 139 * 0.2 / 2;
            egret.Tween.get(self.grp_copy)
                .to({ scaleX: 1, scaleY: 1, alpha: 1, x: 0, y: oY }, 500)
                .wait(900)
                .to({ scaleX: 1.2, scaleY: 1.2, alpha: 0, x: -480 * 0.2 / 2, y: oY - 139 * 0.2 / 2 }, 500).call(function () {
                self.close();
            });
        };
        return EnterCopyEffect;
    })(g_base.BaseFightDlg);
    g_fight.EnterCopyEffect = EnterCopyEffect;
    egret.registerClass(EnterCopyEffect,"g_fight.EnterCopyEffect");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/22.
 */
var g_fight;
(function (g_fight) {
    var BuffEffect = (function (_super) {
        __extends(BuffEffect, _super);
        function BuffEffect() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BuffEffect,p=c.prototype;
        d(p, "buff"
            ,function () {
                return this._buff;
            }
            ,function (value) {
                this._buff = value;
                this.startLoadByKey(this.buff.effectRes, g_fight.ROLE_ASPECT_UP);
            }
        );
        return BuffEffect;
    })(g_fight.FightEffect);
    g_fight.BuffEffect = BuffEffect;
    egret.registerClass(BuffEffect,"g_fight.BuffEffect");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/13.
 */
var g_fight;
(function (g_fight) {
    var FightArenaWinOrFail = (function (_super) {
        __extends(FightArenaWinOrFail, _super);
        function FightArenaWinOrFail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightArenaWinOrFail,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            //this.outsideClosable = true;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var isWin = self.data.isWin;
            var isTimeout = self.data.isTimeout;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;
            var fightType = self.data.fightType;
            //{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,prestige:7,curRank:8,changeRank:9,updateUser:10,updatePkOut:11,updateArena:12}
            self.ico_win.visible = isWin;
            self.grp_winRank.visible = isWin;
            self.ico_fail.visible = !isWin && !isTimeout;
            self.ico_timeout.visible = isTimeout;
            self.grp_failRank.visible = !isWin;
            self.upWarn.visible = !isWin;
            self.label_myName.text = fightResult[gc.dsConsts.FightResult.attackMember][0];
            self.label_myCombat.text = fightResult[gc.dsConsts.FightResult.attackMember][1].toString();
            self.label_enemyName.text = fightResult[gc.dsConsts.FightResult.beAttackMember][0];
            self.label_enemyCombat.text = fightResult[gc.dsConsts.FightResult.beAttackMember][1].toString();
            self.ico_myRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.attackMember][2]);
            self.ico_enemyRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.beAttackMember][2]);
            if (fightType == gc.c_prop.fightTypeKey.challengeCupPk) {
                self.grp_winRank.visible = false;
                self.grp_failRank.visible = false;
                self.grp_res.visible = false;
            }
            else {
                self.label_gold.text = fightResult[gc.dsConsts.FightResult.gold].toString();
                self.label_sw.text = fightResult[gc.dsConsts.FightResult.prestige].toString();
                if (isWin) {
                    self.label_winRank.text = fightResult[gc.dsConsts.FightResult.curRank].toString();
                }
                else {
                    self.label_failRank.text = "竞技场排名" + fightResult[gc.dsConsts.FightResult.curRank];
                }
            }
            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
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
                self.btn_back.label = mo.STR.format("返回(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_back.label = mo.STR.format("返回(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self._tap_btn_back();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return FightArenaWinOrFail;
    })(g_fight.FightDlg);
    g_fight.FightArenaWinOrFail = FightArenaWinOrFail;
    egret.registerClass(FightArenaWinOrFail,"g_fight.FightArenaWinOrFail");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/13.
 */
var g_fight;
(function (g_fight) {
    var FightCoffersWinOrFail = (function (_super) {
        __extends(FightCoffersWinOrFail, _super);
        function FightCoffersWinOrFail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightCoffersWinOrFail,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            //this.outsideClosable = true;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var isWin = self.data.isWin;
            var isTimeout = self.data.isTimeout;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;
            var fightType = self.data.fightType;
            //{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,prestige:7,curRank:8,changeRank:9,updateUser:10,updatePkOut:11,updateArena:12}
            self.ico_win.visible = isWin;
            self.ico_fail.visible = !isWin && !isTimeout;
            self.ico_timeout.visible = isTimeout;
            self.upWarn.visible = !isWin;
            self.label_myName.text = fightResult[gc.dsConsts.FightResult.attackMember][0];
            //self.label_myCombat.text = fightResult[gc.dsConsts.FightResult.attackMember][1].toString();
            self.label_enemyName.text = fightResult[gc.dsConsts.FightResult.beAttackMember][0];
            //self.label_enemyCombat.text = fightResult[gc.dsConsts.FightResult.beAttackMember][1].toString();
            self.ico_myRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.attackMember][2]);
            self.ico_enemyRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.beAttackMember][2]);
            self.grp_res.visible = isWin;
            var score = fightResult[gc.dsConsts.FightResult.coffersPoints] || 0;
            self.label_score.text = score;
            if (isWin) {
                if (fightResult[gc.dsConsts.FightResult.coffersStatus] == 0) {
                    var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
                    self.label_ap.text = "-" + gameInfo[8];
                    self.label_noRob.visible = false;
                    var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
                    var itemSet = gameInfo[4].split(",");
                    self.ico_item.source = resHelper.getItemIconPath(itemSet[0]);
                    self.label_item.text = (itemSet[1]);
                }
                else {
                    self.label_ap.text = "-0";
                    self.label_noRob.visible = true;
                    self.grp_res.visible = false;
                }
            }
            else {
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
                self.label_ap.text = "-" + gameInfo[8];
                self.label_noRob.visible = false;
                var tmpY = self.grp_enemyFace.y;
                self.grp_enemyFace.y = self.grp_myFace.y;
                self.grp_myFace.y = tmpY;
                tmpY = self.label_enemyName.y;
                self.label_enemyName.y = self.label_myName.y;
                self.label_myName.y = tmpY;
            }
            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
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
                self.btn_back.label = mo.STR.format("返回(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_back.label = mo.STR.format("返回(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self._tap_btn_back();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
            gd.coffersCtrl.getLastEnemyDefeseData(function (defData) {
                mo.moduleMgr.runModule(g_consts.moduleId.home, { subModuleId: g_consts.HS_SUBMID_COFFERS_SERVER, defData: defData, page: 1 });
            }, self);
        };
        return FightCoffersWinOrFail;
    })(g_fight.FightDlg);
    g_fight.FightCoffersWinOrFail = FightCoffersWinOrFail;
    egret.registerClass(FightCoffersWinOrFail,"g_fight.FightCoffersWinOrFail");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/13.
 */
var g_fight;
(function (g_fight) {
    var FightCoffersBoss = (function (_super) {
        __extends(FightCoffersBoss, _super);
        function FightCoffersBoss() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightCoffersBoss,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            //this.outsideClosable = true;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var isWin = self.data.isWin;
            var isTimeout = self.data.isTimeout;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;
            var fightType = self.data.fightType;
            //{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,prestige:7,curRank:8,changeRank:9,updateUser:10,updatePkOut:11,updateArena:12}
            self.ico_win.visible = isWin;
            self.ico_timeout.visible = isTimeout;
            self.grp_res.visible = isWin;
            if (fightResult[gc.dsConsts.FightResult.coffersStatus] == 0) {
                self.label_gold.text = "+" + fightResult[gc.dsConsts.FightResult.coffersPerson].toString();
                self.label_gold2.text = "+" + fightResult[gc.dsConsts.FightResult.coffersCommon].toString();
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
                self.label_ap.text = "-" + gameInfo[6];
                self.label_noRob.visible = false;
                self.label_hurt.text = "" + fightResult[gc.dsConsts.FightResult.coffersHurt];
            }
            else {
                self.label_noRob.visible = true;
                self.grp_res.visible = false;
                self.label_ap.text = "-0";
            }
            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
            gd.coffersCtrl.getLastEnemyDefeseData(function (defData) {
                mo.moduleMgr.runModule(g_consts.moduleId.home, { subModuleId: g_consts.HS_SUBMID_COFFERS_SERVER, defData: defData, page: 2 });
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
                self.btn_back.label = mo.STR.format("返回(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_back.label = mo.STR.format("返回(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self._tap_btn_back();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
        };
        return FightCoffersBoss;
    })(g_fight.FightDlg);
    g_fight.FightCoffersBoss = FightCoffersBoss;
    egret.registerClass(FightCoffersBoss,"g_fight.FightCoffersBoss");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/13.
 */
var g_fight;
(function (g_fight) {
    var FightGuildWarWinOrFail = (function (_super) {
        __extends(FightGuildWarWinOrFail, _super);
        function FightGuildWarWinOrFail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightGuildWarWinOrFail,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            //this.outsideClosable = true;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var isWin = self.data.isWin;
            var isTimeout = self.data.isTimeout;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;
            var fightType = self.data.fightType;
            //FightResult:{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,pkValue:7,prestige:8,curRank:9,changeRank:10,hasChangeRank:11,attackMember:12,beAttackMember:13,mPkColor:14,ePkColor:15,isRevenge:16,coffersPerson:17,coffersCommon:18,coffersStatus:19,coffersPoints:20,coffersHurt:21,guildWarPoints:22,updateUser:23,updatePkOut:24,updateArena:25,bagItems:26,equipBagItems:27,guildData:28,guildPersonalData:29,updateCoffers:30},
            self.ico_win.visible = isWin;
            self.ico_fail.visible = !isWin && !isTimeout;
            self.ico_timeout.visible = isTimeout;
            self.upWarn.visible = !isWin;
            self.label_myName.text = fightResult[gc.dsConsts.FightResult.attackMember][0];
            self.label_enemyName.text = fightResult[gc.dsConsts.FightResult.beAttackMember][0];
            self.label_myServer.text = fightResult[gc.dsConsts.FightResult.attackMember][3];
            self.label_enemyServer.text = fightResult[gc.dsConsts.FightResult.beAttackMember][3];
            self.label_myGuild.text = fightResult[gc.dsConsts.FightResult.attackMember][4];
            self.label_enemyGuild.text = fightResult[gc.dsConsts.FightResult.beAttackMember][4];
            self.ico_myRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.attackMember][2]);
            self.ico_enemyRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.beAttackMember][2]);
            var guildWarStatus = fightResult[gc.dsConsts.FightResult.guildWarStatus];
            var score = fightResult[gc.dsConsts.FightResult.guildWarPoints] || 0;
            self.label_score.text = self.label_damage.text = score;
            if (guildWarStatus == 2) {
                self.label_end.visible = true;
                self.label_noRob.visible = false;
            }
            else {
                self.label_end.visible = false;
                if (score != 0) {
                    self.label_noRob.visible = false;
                }
                else {
                    self.label_noRob.visible = true;
                }
            }
            //if(isWin){
            //}else{
            //    var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            //    self.label_noRob.visible = false;
            //    var tmpY = self.grp_enemyFace.y;
            //    self.grp_enemyFace.y = self.grp_myFace.y;
            //    self.grp_myFace.y = tmpY;
            //    tmpY = self.label_enemyName.y;
            //    self.label_enemyName.y = self.label_myName.y;
            //    self.label_myName.y = tmpY;
            //}
            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
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
                self.btn_back.label = mo.STR.format("返回(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_back.label = mo.STR.format("返回(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self._tap_btn_back();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
            var serverData = gd.guildWarCtrl.curGuildServer;
            gd.guildWarCtrl.getWarAttackData(serverData[gc.dsConsts.GuildServer.serverId], serverData[gc.dsConsts.GuildServer.guildId], function (data) {
                mo.moduleMgr.runModule(g_consts.moduleId.guildwar, { atkData: data });
            }, self);
        };
        return FightGuildWarWinOrFail;
    })(g_fight.FightDlg);
    g_fight.FightGuildWarWinOrFail = FightGuildWarWinOrFail;
    egret.registerClass(FightGuildWarWinOrFail,"g_fight.FightGuildWarWinOrFail");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/13.
 */
var g_fight;
(function (g_fight) {
    var FightCopyWinOrFail = (function (_super) {
        __extends(FightCopyWinOrFail, _super);
        function FightCopyWinOrFail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightCopyWinOrFail,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            //this.outsideClosable = true;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var isWin = self.data.isWin;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;
            //{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,prestige:7,curRank:8,changeRank:9,updateUser:10,updatePkOut:11,updateArena:12}
            self.ico_win.visible = isWin;
            self.ico_fail.visible = !isWin;
            self.upWarn.visible = !isWin;
            self.ico_winStar.visible = self.data.isWin;
            self.ico_noDieStar.visible = self.data.noDie;
            self.ico_timeLmtStar.visible = self.data.timeLmt;
            self.list_items.visible = isWin;
            if (isWin) {
            }
            else {
            }
            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.items;
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
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
                self.btn_ok.label = mo.STR.format("确定(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_ok.label = mo.STR.format("确定(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self._tap_btn_ok();
        };
        p._tap_btn_ok = function () {
            var self = this;
            self.close();
        };
        return FightCopyWinOrFail;
    })(g_fight.FightDlg);
    g_fight.FightCopyWinOrFail = FightCopyWinOrFail;
    egret.registerClass(FightCopyWinOrFail,"g_fight.FightCopyWinOrFail");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/13.
 */
var g_fight;
(function (g_fight) {
    var FightRevive = (function (_super) {
        __extends(FightRevive, _super);
        function FightRevive() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightRevive,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            //this.outsideClosable = true;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var begTime = self.data.begTime;
            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
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
                self.btn_ok.label = mo.STR.format("确定(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_ok.label = mo.STR.format("确定(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self._tap_btn_ok();
        };
        p._tap_btn_ok = function () {
            var self = this;
            self.close();
        };
        return FightRevive;
    })(g_fight.FightDlg);
    g_fight.FightRevive = FightRevive;
    egret.registerClass(FightRevive,"g_fight.FightRevive");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/13.
 */
var g_fight;
(function (g_fight) {
    var FightUpWarn = (function (_super) {
        __extends(FightUpWarn, _super);
        function FightUpWarn() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightUpWarn,p=c.prototype;
        p._tap_btn_star = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.forge, { subModuleId: 1 });
        };
        p._tap_btn_stone = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.forge, { subModuleId: 2 });
        };
        p._tap_btn_wing = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.role, { subModuleId: 3 });
        };
        p._tap_btn_equip = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.home, { subModuleId: 0 });
        };
        return FightUpWarn;
    })(mo.gui.Comp);
    g_fight.FightUpWarn = FightUpWarn;
    egret.registerClass(FightUpWarn,"g_fight.FightUpWarn");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/13.
 */
var g_fight;
(function (g_fight) {
    var FightPKWinOrFail = (function (_super) {
        __extends(FightPKWinOrFail, _super);
        function FightPKWinOrFail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightPKWinOrFail,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var isWin = self.data.isWin;
            var isTimeout = self.data.isTimeout;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;
            //{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,prestige:7,curRank:8,changeRank:9,updateUser:10,updatePkOut:11,updateArena:12}
            self.ico_win.visible = isWin;
            self.label_winPkValue.visible = isWin;
            self.ico_fail.visible = !isWin && !isTimeout;
            self.ico_timeout.visible = isTimeout;
            self.label_failPkValue.visible = !isWin;
            self.label_myRank.text = fightResult[gc.dsConsts.FightResult.curRank];
            self.label_gold.text = fightResult[gc.dsConsts.FightResult.gold];
            self.label_exp.text = fightResult[gc.dsConsts.FightResult.expc];
            if (isWin) {
                self.label_winPkValue.text = fightResult[gc.dsConsts.FightResult.killValue];
            }
            else {
                self.label_failPkValue.text = fightResult[gc.dsConsts.FightResult.killValue];
            }
            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
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
                self.btn_ok.label = mo.STR.format("确定(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_ok.label = mo.STR.format("确定(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self._tap_btn_ok();
        };
        p._tap_btn_ok = function () {
            var self = this;
            self.close();
        };
        p._data_list_items = function () {
            var self = this;
            return utils.itemObj2ObjArr(self.data.fightResult[gc.dsConsts.FightResult.items]);
        };
        return FightPKWinOrFail;
    })(g_fight.FightDlg);
    g_fight.FightPKWinOrFail = FightPKWinOrFail;
    egret.registerClass(FightPKWinOrFail,"g_fight.FightPKWinOrFail");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var MapEleView = (function (_super) {
        __extends(MapEleView, _super);
        function MapEleView() {
            _super.call(this);
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddedToStage, this);
            //this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemovedFromStage,this);
        }
        var d = __define,c=MapEleView,p=c.prototype;
        p.onAddedToStage = function (event) {
        };
        return MapEleView;
    })(egret.Sprite);
    g_fight.MapEleView = MapEleView;
    egret.registerClass(MapEleView,"g_fight.MapEleView");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/20.
 */
var g_fight;
(function (g_fight) {
    var LootView = (function (_super) {
        __extends(LootView, _super);
        function LootView() {
            _super.apply(this, arguments);
            this.begTime = 0;
            this.itemIcon = new egret.Bitmap();
            this.textField = new egret.TextField();
        }
        var d = __define,c=LootView,p=c.prototype;
        p.updateView = function () {
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, this.itemID);
            var type = itemInfo[gc.t_item_type];
            var color = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
            this.textField.strokeColor = 0;
            this.textField.stroke = 0.5;
            this.textField.textColor = color;
            this.textField.size = 14;
            var url = "";
            if (type == gc.c_prop.itemTypeKey.gold) {
                this.textField.text = this.itemNum.toString();
                url = "resource/dynamic2/icon_100.png";
            }
            else {
                var name = itemInfo[gc.t_item_name];
                url = "resource/" + resHelper.getItemIconPath(this.itemID);
                if (this.itemID == gc.c_prop.spItemIdKey.diamond) {
                    this.textField.text = this.itemNum.toString();
                }
                else {
                    this.textField.text = name;
                }
            }
            process.nextTick(function () {
                if (!this.textField)
                    return;
                this.textField.x = this.x - this.textField.width / 2;
            }, this);
            RES.getResByUrl(url, function (texture) {
                this.itemIcon.texture = texture;
                this.itemIcon.scaleX = this.itemIcon.scaleY = 0.5;
                this.itemIcon.x = -this.itemIcon.width * this.itemIcon.scaleX / 2;
                this.addChild(this.itemIcon);
            }, this, RES.ResourceItem.TYPE_IMAGE);
            this.cacheAsBitmap = true;
        };
        p.pickUp = function () {
            if (this.parent)
                this.parent.removeChild(this);
            if (this.textField.parent)
                this.textField.parent.removeChild(this.textField);
        };
        p.canAutoPickUp = function () {
            if (this.begTime != 0 && Date.newDate().getTime() - this.begTime >= 3 * 1000) {
                return true;
            }
            return false;
        };
        return LootView;
    })(g_fight.MapEleView);
    g_fight.LootView = LootView;
    egret.registerClass(LootView,"g_fight.LootView");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var RoleNameView = (function (_super) {
        __extends(RoleNameView, _super);
        function RoleNameView() {
            _super.call(this);
            this.hideHp = 9000000000000000;
            this.hpBarBg = new egret.Bitmap();
            this.hpBar = new egret.Bitmap();
            this.addChild(this.hpBarBg);
            this.addChild(this.hpBar);
            this.hpTxt = new egret.TextField();
            this.hpTxt.width = 100;
            this.hpTxt.size = 12;
            this.hpTxt.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.hpTxt);
            this.hpTxt.x = -this.hpTxt.width / 2;
            this.hpTxt.y = -12;
            this.nameTxt = new egret.TextField();
            this.nameTxt.width = 100;
            this.nameTxt.size = 12;
            this.nameTxt.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.nameTxt);
            this.nameTxt.x = -this.nameTxt.width / 2;
            this.nameTxt.y = -24;
        }
        var d = __define,c=RoleNameView,p=c.prototype;
        //protected onRemovedFromStage(event:egret.Event):void{
        //    super.onRemovedFromStage(event);
        //
        //    this.role.removeEventListener(ROLE_EVENT_HP_CHANGE,this.onRoleHpChange,this);
        //    this.role.removeEventListener(ROLE_EVENT_POS_CHANGE,this.onRolePosChange,this);
        //}
        p.dtor = function () {
            this.role.removeEventListener(g_fight.ROLE_EVENT_HP_CHANGE, this.onRoleHpChange, this);
            this.role.removeEventListener(g_fight.ROLE_EVENT_POS_CHANGE, this.onRolePosChange, this);
            this.role = null;
        };
        p.setRole = function (value) {
            var self = this;
            this.role = value;
            this.role.addEventListener(g_fight.ROLE_EVENT_HP_CHANGE, this.onRoleHpChange, this);
            this.role.addEventListener(g_fight.ROLE_EVENT_POS_CHANGE, this.onRolePosChange, this);
            var lv = 0;
            if (this.role.roleInfo.monsterInfo) {
                lv = this.role.roleInfo.monsterInfo[gc.t_monster_level];
            }
            else {
                lv = this.role.entity.lvl;
            }
            if (this.role.name && this.role.name != "") {
                this.nameTxt.text = mo.STR.format("Lv.%s %s", lv, this.role.name);
            }
            else {
                this.nameTxt.text = "";
            }
            self.hpTxt.visible = self.role.roleInfo.maxHpFight != self.hideHp;
            this.updateHp();
            this.onRolePosChange();
            if (this.role.roleInfo.monsterInfo && !(this.role instanceof g_fight.Pet)) {
                if (this.role.isBoss) {
                    this.hpSrc = "hp_red";
                    this.hpBgSrc = "hp_red_bg";
                }
                else {
                    this.hpSrc = "hp_red2";
                    this.hpBgSrc = "hp_red2_bg";
                }
            }
            else {
                if (this.role.isSelf) {
                    this.hpSrc = "hp_green";
                    this.hpBgSrc = "hp_green_bg";
                }
                else {
                    this.hpSrc = "hp_red";
                    this.hpBgSrc = "hp_red_bg";
                }
            }
            this.checkHPBitmapData();
            this.checkHPBgBitmapData();
        };
        p.checkHPBitmapData = function () {
            var bitmapData = RoleNameView.bitmapDataObj[this.hpSrc];
            if (bitmapData) {
                this.hpBar.bitmapData = bitmapData;
                this.hpBar.x = -this.hpBar.width / 2;
            }
            else {
                RES.getResAsync(this.hpSrc, function () {
                    RoleNameView.bitmapDataObj[this.hpSrc] = RES.getRes(this.hpSrc).bitmapData;
                    this.checkHPBitmapData();
                }, this);
            }
        };
        p.checkHPBgBitmapData = function () {
            var bitmapData = RoleNameView.bitmapDataObj[this.hpBgSrc];
            if (bitmapData) {
                this.hpBarBg.bitmapData = bitmapData;
                this.hpBarBg.x = -this.hpBarBg.width / 2;
            }
            else {
                RES.getResAsync(this.hpBgSrc, function () {
                    RoleNameView.bitmapDataObj[this.hpBgSrc] = RES.getRes(this.hpBgSrc).bitmapData;
                    this.checkHPBgBitmapData();
                }, this);
            }
        };
        p.updateHp = function () {
            var self = this;
            this.hpBar.scaleX = this.role.hp / this.role.roleInfo.maxHpFight;
            if (self.role.roleInfo.maxHpFight != self.hideHp && this.role.hp < this.role.roleInfo.maxHpFight) {
                this.hpTxt.visible = true;
                this.hpTxt.text = this.role.hp.toString();
            }
            else {
                this.hpTxt.visible = false;
            }
        };
        p.onRoleHpChange = function (e) {
            this.updateHp();
        };
        p.onRolePosChange = function (e) {
            if (e === void 0) { e = null; }
            this.x = this.role.x;
            if (!this.role.isBoss) {
                this.y = this.role.y - 85;
            }
            else {
                this.y = this.role.y - 100;
            }
        };
        RoleNameView.bitmapDataObj = {
            "hp_red": null,
            "hp_red_bg": null,
            "hp_green": null,
            "hp_green_bg": null,
            "hp_red2": null,
            "hp_red2_bg": null
        };
        return RoleNameView;
    })(g_fight.MapEleView);
    g_fight.RoleNameView = RoleNameView;
    egret.registerClass(RoleNameView,"g_fight.RoleNameView");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var RoleShadowView = (function (_super) {
        __extends(RoleShadowView, _super);
        function RoleShadowView() {
            _super.call(this);
            this.shadow = new egret.Bitmap();
            this.addChild(this.shadow);
            this.cacheAsBitmap = true;
        }
        var d = __define,c=RoleShadowView,p=c.prototype;
        p.dtor = function () {
            this.role.removeEventListener(g_fight.ROLE_EVENT_POS_CHANGE, this.onRolePosChange, this);
            this.role = null;
        };
        p.setRole = function (value) {
            var self = this;
            this.role = value;
            this.role.addEventListener(g_fight.ROLE_EVENT_POS_CHANGE, this.onRolePosChange, this);
            this.onRolePosChange();
            RES.getResAsync("fight_shadow", function () {
                this.shadow.texture = RES.getRes("fight_shadow");
                this.shadow.x = -this.shadow.width / 2;
                this.shadow.y = -this.shadow.height / 2;
            }, this);
        };
        p.onRolePosChange = function (e) {
            if (e === void 0) { e = null; }
            this.x = this.role.x;
            this.y = this.role.y;
        };
        return RoleShadowView;
    })(g_fight.MapEleView);
    g_fight.RoleShadowView = RoleShadowView;
    egret.registerClass(RoleShadowView,"g_fight.RoleShadowView");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var RoleView = (function (_super) {
        __extends(RoleView, _super);
        function RoleView() {
            _super.call(this);
            this.scale = 1;
            var self = this;
            self.apCon = new egret.Sprite();
            self.addChild(self.apCon);
            self.roleAP = new g_base.ActionPlayer();
            self.apCon.addChild(self.roleAP);
            self.medalCon = new egret.gui.UIAsset();
            self.medalCon.scaleX = self.medalCon.scaleY = 0.8;
            self.roleAP.addEventListener(egret.Event.COMPLETE, self.onRoleComplete, self);
        }
        var d = __define,c=RoleView,p=c.prototype;
        p.setRole = function (value) {
            var self = this;
            self.role = value;
            self.role.addEventListener(g_fight.ROLE_EVENT_AVATAR_CHANGE, self.onRoleAvatarChange, self);
            self.role.addEventListener(g_fight.ROLE_EVENT_MEDAL_CHANGE, self.onRoleMedalChange, self);
            self.role.addEventListener(g_fight.ROLE_EVENT_POS_CHANGE, self.onRolePosChange, self);
            self.role.addEventListener(g_fight.ROLE_EVENT_ATTACK, self.onRoleAttack, self);
            self.role.addEventListener(g_fight.ROLE_EVENT_ADD_BUFF, self.onRoleAddBuff, self);
            self.role.addEventListener(g_fight.ROLE_EVENT_REMOVE_BUFF, self.onRoleRemoveBuff, self);
            self.role.addEventListener(g_fight.ROLE_EVENT_BENUMB_CHANGED, self.onRoleBenumb, self);
            if (self.role.weaponID != null && self.role.weaponID != -1) {
                if (self.weaponAP == null) {
                    self.weaponAP = new g_base.ActionPlayer();
                    self.apCon.addChild(self.weaponAP);
                }
            }
            if (self.role.wingID != null && self.role.wingID != -1) {
                if (self.wingAP == null) {
                    self.wingAP = new g_base.ActionPlayer();
                    //self.wingAP.scaleX = self.wingAP.scaleY = 1.5;
                    self.apCon.addChild(self.wingAP);
                }
            }
            self.onRoleAvatarChange();
            self.onRolePosChange();
            if (self.role.roleInfo.monsterInfo != null) {
                var scale = self.role.roleInfo.monsterInfo[gc.t_monster_scale] / 10000;
                if (scale != 0) {
                    self.scale = scale;
                    self.scaleX = self.scaleY = scale;
                    if (self.medalEffect) {
                        self.medalEffect.scaleX = self.scaleX < 0 ? -1 : 1;
                    }
                }
                if (self.role.isBoss) {
                    if (!self.bossBgEffect) {
                        self.bossBgEffect = new g_fight.FightEffect();
                        self.addChildAt(self.bossBgEffect, 0);
                        self.bossBgEffect.play(-1);
                        self.bossBgEffect.scaleX = self.bossBgEffect.scaleY = 1 / self.scaleX;
                    }
                    self.bossBgEffect.startLoadByKey(27, g_fight.ROLE_ASPECT_UP);
                }
            }
            else {
                self.onRoleMedalChange();
            }
        };
        p.stop = function () {
            var self = this;
            self.roleAP.stop();
            if (self.weaponAP != null)
                self.weaponAP.stop();
            if (self.wingAP != null)
                self.wingAP.stop();
        };
        p.playAction = function () {
            var self = this;
            self.roleAP.playAction();
            if (self.weaponAP != null)
                self.weaponAP.playAction();
            if (self.wingAP != null)
                self.wingAP.playAction();
            //RES.destroyRes()
        };
        //protected onRemovedFromStage(event:egret.Event):void{
        //    super.onRemovedFromStage(event);
        //    var self = this;
        //    self.role.removeEventListener(ROLE_EVENT_AVATAR_CHANGE,self.onRoleAvatarChange,self);
        //    self.role.removeEventListener(ROLE_EVENT_POS_CHANGE,self.onRolePosChange,self);
        //    self.role.removeEventListener(ROLE_EVENT_ATTACK,self.onRoleAttack,self);
        //    self.role.removeEventListener(ROLE_EVENT_ADD_BUFF,self.onRoleAddBuff,self);
        //    self.role.removeEventListener(ROLE_EVENT_REMOVE_BUFF,self.onRoleRemoveBuff,self);
        //}
        p.dtor = function () {
            var self = this;
            self.roleAP.removeEventListener(egret.Event.COMPLETE, self.onRoleComplete, self);
            if (self.role) {
                self.role.removeEventListener(g_fight.ROLE_EVENT_AVATAR_CHANGE, self.onRoleAvatarChange, self);
                self.role.removeEventListener(g_fight.ROLE_EVENT_MEDAL_CHANGE, self.onRoleMedalChange, self);
                self.role.removeEventListener(g_fight.ROLE_EVENT_POS_CHANGE, self.onRolePosChange, self);
                self.role.removeEventListener(g_fight.ROLE_EVENT_ATTACK, self.onRoleAttack, self);
                self.role.removeEventListener(g_fight.ROLE_EVENT_ADD_BUFF, self.onRoleAddBuff, self);
                self.role.removeEventListener(g_fight.ROLE_EVENT_REMOVE_BUFF, self.onRoleRemoveBuff, self);
                self.role.removeEventListener(g_fight.ROLE_EVENT_BENUMB_CHANGED, self.onRoleBenumb, self);
                self.role = null;
            }
        };
        p.onRoleComplete = function (event) {
            var self = this;
            if (self.role.action == g_fight.ROLE_ACTION_ATTACK) {
                self.role.stand();
            }
        };
        p.onRoleAvatarChange = function (event) {
            if (event === void 0) { event = null; }
            var self = this;
            var loop = self.role.action != g_fight.ROLE_ACTION_ATTACK;
            if (self.role.roleInfo.monsterInfo) {
                self.roleAP.loadRes(self.role.getAvatar(self.role.clothesID, 'm'), loop);
            }
            else {
                self.roleAP.loadRes(self.role.getAvatar(self.role.clothesID, 'r'), loop);
            }
            if (self.role.weaponID != null && self.role.weaponID != -1) {
                if (self.weaponAP == null) {
                    self.weaponAP = new g_base.ActionPlayer();
                    self.apCon.addChild(self.weaponAP);
                }
            }
            if (self.weaponAP != null) {
                self.weaponAP.loadRes(self.role.getAvatar(self.role.weaponID, 'i'), loop);
            }
            if (self.role.wingID != null && self.role.wingID != -1) {
                if (self.wingAP == null) {
                    self.wingAP = new g_base.ActionPlayer();
                    //self.wingAP.scaleX = self.wingAP.scaleY = 1.5;
                    self.apCon.addChild(self.wingAP);
                }
            }
            if (self.wingAP != null) {
                self.wingAP.loadRes(self.role.getAvatar(self.role.wingID, 'w'), loop);
                if (self.role.aspect == g_fight.ROLE_ASPECT_UP || self.role.aspect == g_fight.ROLE_ASPECT_UP_LEFT || self.role.aspect == g_fight.ROLE_ASPECT_UP_RIGHT) {
                    self.apCon.setChildIndex(self.wingAP, self.apCon.numChildren - 1);
                }
                else if (self.role.aspect == g_fight.ROLE_ASPECT_LEFT || self.role.aspect == g_fight.ROLE_ASPECT_RIGHT) {
                    self.apCon.setChildIndex(self.wingAP, self.apCon.numChildren - 1);
                }
                else {
                    self.apCon.setChildIndex(self.wingAP, 0);
                }
            }
            self.scaleX = (self.role.aspect < 6 ? 1 : -1) * self.scale;
            if (self.medalEffect) {
                self.medalEffect.scaleX = self.scaleX < 0 ? -1 : 1;
            }
        };
        p.onRoleMedalChange = function (event) {
            if (event === void 0) { event = null; }
            var self = this;
            if (self.role.medalId) {
                if (!self.medalEffect) {
                    self.medalEffect = g_comp.Ico_Medal.create();
                    self.medalCon.y = -116;
                    self.addChild(self.medalCon);
                    self.medalCon.source = self.medalEffect;
                    self.medalEffect.scaleX = self.scaleX < 0 ? -1 : 1;
                    self.medalEffect.x = -151 / 2;
                    self.medalEffect.y = -60;
                }
                mo.R.loadTo('FightScene', resHelper.getWarPrintIconPath(self.role.medalId), function () { });
                self.medalEffect.setData({ itemId: self.role.medalId });
            }
            else {
                if (self.medalEffect) {
                    self.medalCon.source = null;
                    self.medalEffect = null;
                }
            }
        };
        p.onRolePosChange = function (event) {
            if (event === void 0) { event = null; }
            var self = this;
            self.x = self.role.x;
            self.y = self.role.y;
        };
        p.onRoleAttack = function (event) {
            if (event === void 0) { event = null; }
            var self = this;
            self.roleAP.playAction();
            if (self.weaponAP != null) {
                self.weaponAP.playAction();
            }
            if (self.wingAP != null) {
                self.wingAP.playAction();
            }
        };
        p.onRoleAddBuff = function (event) {
            var self = this;
            var buff = event.data;
            if (buff.effectRes != 0) {
                var hasBuff = false;
                for (var i = 0; i < self.numChildren; ++i) {
                    var buffEffect = self.getChildAt(i);
                    if (buffEffect instanceof g_fight.BuffEffect) {
                        if (buffEffect.buff.id == buff.id) {
                            hasBuff = true;
                            break;
                        }
                    }
                }
                if (!hasBuff) {
                    var buffEffect = new g_fight.BuffEffect();
                    buffEffect.scaleX = buffEffect.scaleY = 1.1;
                    buffEffect.y = -10;
                    buffEffect.buff = buff;
                    self.addChild(buffEffect);
                    buffEffect.play(-1);
                }
            }
            self.onRoleBenumb();
        };
        p.onRoleRemoveBuff = function (event) {
            var self = this;
            var buff = event.data;
            for (var i = 0; i < self.numChildren; ++i) {
                var buffEffect = self.getChildAt(i);
                if (buffEffect instanceof g_fight.BuffEffect) {
                    if (buffEffect.buff == buff) {
                        if (self.parent)
                            self.removeChildAt(i);
                        break;
                    }
                }
            }
            self.onRoleBenumb();
        };
        p.onRoleBenumb = function (event) {
            if (event === void 0) { event = null; }
            var self = this;
            if (self.role.isBenumb) {
                if (self.roleAP.isPlaying)
                    self.stop();
            }
            else {
                if (!self.roleAP.isPlaying)
                    self.playAction();
            }
        };
        return RoleView;
    })(g_fight.MapEleView);
    g_fight.RoleView = RoleView;
    egret.registerClass(RoleView,"g_fight.RoleView");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var GiftView = (function (_super) {
        __extends(GiftView, _super);
        function GiftView() {
            _super.call(this);
            var self = this;
            this.uiEffect = new g_comp.UIEffect();
            this.uiEffect.autoPlay = true;
            var uiAsset = new egret.gui.UIAsset();
            uiAsset.source = this.uiEffect;
            uiAsset.y = -80;
            this.addChild(uiAsset);
        }
        var d = __define,c=GiftView,p=c.prototype;
        p.setGift = function (gift) {
            var self = this;
            self.gift = gift;
            self.gift.addEventListener(g_fight.GIFT_EVENT_POS_CHANGE, self.onGiftPosChange, self);
            self.onGiftPosChange();
            this.uiEffect.effectId = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, self.gift.giftId)[gc.t_talisman_sEffect];
        };
        p.stop = function () {
            var self = this;
        };
        p.playAction = function () {
            var self = this;
        };
        p.onGiftPosChange = function () {
            this.x = this.gift.x;
            this.y = this.gift.y;
        };
        p.dtor = function () {
            var self = this;
            if (self.gift) {
                self.gift.removeEventListener(g_fight.GIFT_EVENT_POS_CHANGE, self.onGiftPosChange, self);
            }
        };
        return GiftView;
    })(g_fight.MapEleView);
    g_fight.GiftView = GiftView;
    egret.registerClass(GiftView,"g_fight.GiftView");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var MapTileView = (function (_super) {
        __extends(MapTileView, _super);
        function MapTileView() {
            _super.apply(this, arguments);
        }
        var d = __define,c=MapTileView,p=c.prototype;
        MapTileView.createTileView = function (mapID, row, col) {
            var tileView = MapTileView.getTileView(row, col);
            if (!tileView) {
                tileView = new MapTileView();
                tileView.setTile(mapID, row, col);
            }
            if (mapID != tileView.mapID) {
                tileView.texture = null;
                tileView.bitmapData = null;
                tileView.dtor();
                tileView.setTile(mapID, row, col);
            }
            return tileView;
        };
        MapTileView.removeTileView = function (tileView) {
            if (MapTileView._tiles.indexOf(tileView) == -1) {
                //tileView.mapID = -1;
                MapTileView._tiles.push(tileView);
            }
        };
        MapTileView.getTileView = function (row, col) {
            for (var i = 0; i < MapTileView._tiles.length; ++i) {
                var tileView = MapTileView._tiles[i];
                if (tileView.row == row && tileView.col == col) {
                    return tileView;
                }
            }
            return null;
        };
        MapTileView.getPath = function (mapID, row, col) {
            return "resource/dynamic2/map_" + mapID + "_" + col + "_" + row + ".jpg";
        };
        p.setTile = function (mapID, row, col) {
            this.mapID = mapID;
            this.row = row;
            this.col = col;
            RES.getResByUrl(MapTileView.getPath(this.mapID, this.row, this.col), function (texture) {
                if (mapID != this.mapID || row != this.row || col != this.col || !texture)
                    return;
                this.bitmapData = texture.bitmapData;
                //this.texture = texture;
            }, this, RES.ResourceItem.TYPE_IMAGE);
        };
        p.dtor = function () {
            RES.destroyRes(MapTileView.getPath(this.mapID, this.row, this.col));
        };
        MapTileView.TILE_W = 240;
        MapTileView.TILE_H = 256;
        MapTileView._tiles = [];
        return MapTileView;
    })(egret.Bitmap);
    g_fight.MapTileView = MapTileView;
    egret.registerClass(MapTileView,"g_fight.MapTileView");
})(g_fight || (g_fight = {}));

var g_fight;
(function (g_fight) {
    g_fight.MAP_EVENT_HPMP_CHANGE = "MAP_EVENT_HP_CHANGE";
    g_fight.MAP_EVENT_WINCOUNT_CHANGE = "MAP_EVENT_WINCOUNT_CHANGE";
    g_fight.MAP_EVENT_IS_FINDING_MONSTER_CHANGE = "MAP_EVENT_IS_FINDING_MONSTER_CHANGE";
    g_fight.MAP_EVENT_TOTAL_HURT_CHANGE = "MAP_EVENT_TOTAL_HURT_CHANGE";
    g_fight.MINI_SPACE_TIME = 100;
    /**
     *
     * @author
     *
     */
    var MapView = (function (_super) {
        __extends(MapView, _super);
        function MapView() {
            _super.call(this);
            this.mapW = 480;
            this.mapH = 680;
            this.mapTW = 960;
            this.mapTH = 1280;
            //private _mainRole: Role;
            this._allRoles = [];
            this._selfRoles = [];
            this._enemyRoles = [];
            this._isPicking = false;
            this._pvpType = -1;
            this._pveType = -1;
            this.loots = [];
            this._isEnterMap = true;
            this._totalHurt = 0;
            this.needEnterEffect = true;
            this.fightStartTime = 0;
            this._labelCaches = [];
            this.lastExeAITime = 0;
            var self = this;
            self.touchChildren = self.touchEnabled = false;
            g_fight.Role.maxCol = Math.floor(this.mapTW / g_fight.Role.cellW);
            g_fight.Role.maxRow = Math.floor(this.mapTH / g_fight.Role.cellH);
            self._pvpTimeout = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.battleSet)[0];
            self._thumbCon = new egret.Sprite();
            self._bgCon = new egret.Sprite();
            self._shadowCon = new egret.Sprite();
            self._itemCon = new egret.Sprite();
            self._roleCon = new egret.Sprite();
            self._effectCon = new egret.Sprite();
            //self._bgCon.cacheAsBitmap = true;
            self.addChild(self._thumbCon);
            self.addChild(self._bgCon);
            self.addChild(self._shadowCon);
            self.addChild(self._itemCon);
            self.addChild(self._roleCon);
            self.addChild(self._effectCon);
            //self.touchChildren = true;
            //self.touchEnabled = true;
            //self.addEventListener(egret.TouchEvent.TOUCH_TAP,self.onTouchTap,self);
            self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddedToStage, self);
            self.addEventListener(egret.Event.REMOVED_FROM_STAGE, self.onRemovedFromStage, self);
        }
        var d = __define,c=MapView,p=c.prototype;
        d(p, "isNormalCopy"
            ,function () {
                //return this._pvpType==-1&&!this._isBossCopy&&!this.isWorldBoss&&!this.isBossCoffers;
                return this._pvpType == -1 && this._pveType == -1;
            }
        );
        p.getEnemyRoleAt = function (index) {
            return this._enemyRoles[index];
        };
        d(p, "pveType"
            ,function () {
                return this._pveType;
            }
        );
        d(p, "pvpType"
            ,function () {
                return this._pvpType;
            }
        );
        d(p, "isFindingMonster"
            ,function () {
                return this._isFindingMonster;
            }
            ,function (value) {
                this._isFindingMonster = value;
                this.dispatchEvent(new egret.Event(g_fight.MAP_EVENT_IS_FINDING_MONSTER_CHANGE));
            }
        );
        d(p, "totalHurt"
            ,function () {
                return this._totalHurt;
            }
            ,function (value) {
                this._totalHurt = value;
                this.dispatchEvent(new egret.Event(g_fight.MAP_EVENT_TOTAL_HURT_CHANGE));
            }
        );
        d(p, "isEnterMap"
            ,function () {
                return this._isEnterMap;
            }
        );
        p.onAddedToStage = function (event) {
            var self = this;
            for (var i = 0; i < self._allRoles.length; ++i) {
                var role = self._allRoles[i];
                var roleView = new g_fight.RoleView();
                roleView.setRole(role);
                self._roleCon.addChild(roleView);
                if (role.gift) {
                    var giftView = new g_fight.GiftView();
                    giftView.setGift(role.gift);
                    self._roleCon.addChild(giftView);
                }
                var roleNameView = new g_fight.RoleNameView();
                roleNameView.setRole(role);
                self._effectCon.addChild(roleNameView);
                var roleShadowView = new g_fight.RoleShadowView();
                roleShadowView.setRole(role);
                self._shadowCon.addChild(roleShadowView);
            }
        };
        p.onRemovedFromStage = function (event) {
            var self = this;
            while (self._roleCon.numChildren) {
                var child = self._roleCon.removeChildAt(0);
                if (child.dtor != null) {
                    child.dtor();
                }
            }
            while (self._effectCon.numChildren) {
                var child = self._effectCon.removeChildAt(0);
                if (child.dtor != null) {
                    child.dtor();
                }
            }
            while (self._shadowCon.numChildren) {
                var child = self._shadowCon.removeChildAt(0);
                if (child.dtor != null) {
                    child.dtor();
                }
            }
        };
        d(p, "mainRole"
            ,function () {
                return this._selfRoles[0];
            }
        );
        d(p, "copyId"
            ,function () {
                return this._copyId;
            }
            ,function (value) {
                var self = this;
                if (self._copyId != value) {
                    self.needEnterCopyEffect = true;
                }
                self._copyId = value;
            }
        );
        //fightDateLastTime;
        p.enterMap = function (mapID, needEnterEffect) {
            var self = this;
            self.fightStartTime = Date.newDate().getTime(); //检测UI时有用到
            self._isEnterMap = true;
            self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
            if (self.mapID != mapID) {
                while (self._thumbCon.numChildren) {
                    self._thumbCon.removeChildAt(0);
                }
                mo.R.unload("mapview", "dynamic2/map_" + self.mapID + "_small.jpg");
                mo.R.loadTo("mapview", "dynamic2/map_" + mapID + "_small.jpg", function () {
                    var bitmap = new egret.Bitmap();
                    var texture = RES.getRes("dynamic2/map_" + mapID + "_small.jpg");
                    if (texture) {
                        bitmap.bitmapData = texture.bitmapData;
                        //bitmap.texture = texture;
                        bitmap.width = self.mapTW;
                        bitmap.height = self.mapTH;
                        while (self._thumbCon.numChildren) {
                            self._thumbCon.removeChildAt(0);
                        }
                        self._thumbCon.addChild(bitmap);
                    }
                }, self);
            }
            self.mapID = mapID;
            self.needEnterEffect = needEnterEffect;
            self.clearFight();
            clearInterval(self.enterTimerOut);
            clearInterval(self.exitTimerOut);
            self.enterTimerOut = setInterval(function () {
                self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                //if(self.stage){
                self.addEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                self.lastExeAITime = 0;
                //}
                self.fightStartTime = Date.newDate().getTime();
                //self.fightDateLastTime = 0;
                clearInterval(self.enterTimerOut);
            }, 1000);
        };
        p.exitMap = function (enterMapId, cb) {
            var self = this;
            self._isEnterMap = false;
            self.removeAllRoleEvent();
            self.clearFinding();
            self.fightStartTime -= 150000;
            self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
            var hasExitEffect = false;
            for (var i = 0; i < self._roleCon.numChildren; ++i) {
                var roleView = self._roleCon.getChildAt(i);
                roleView.stop();
                if (roleView.role)
                    egret.Tween.removeTweens(roleView.role);
                if (self._selfRoles.indexOf(roleView.role) != -1) {
                    self.createFightEffect(26, roleView.x, roleView.y - 10, g_fight.ROLE_ASPECT_UP);
                    hasExitEffect = true;
                }
            }
            var oldMapID, oldRow, oldCol;
            for (var i = 0; i < self._bgCon.numChildren; ++i) {
                var mapTileView = self._bgCon.getChildAt(i);
                oldMapID = mapTileView.mapID;
                if (oldMapID != enterMapId) {
                    oldRow = mapTileView.row;
                    oldCol = mapTileView.col;
                    mapTileView.mapID = -1;
                    mapTileView.row = -99999;
                    mapTileView.col = -99999;
                    RES.destroyRes(g_fight.MapTileView.getPath(oldMapID, oldRow, oldCol));
                }
            }
            clearInterval(self.enterTimerOut);
            clearInterval(self.exitTimerOut);
            var delayTime = 0;
            if (hasExitEffect) {
                delayTime = 1000;
            }
            else {
                delayTime = 200;
            }
            self.exitTimerOut = setInterval(function () {
                cb.call(self);
                clearInterval(self.exitTimerOut);
            }, delayTime);
        };
        p.playEnterEffect = function () {
            var self = this;
            if (self.needEnterEffect) {
                for (var i = 0; i < self._roleCon.numChildren; ++i) {
                    var roleView = self._roleCon.getChildAt(i);
                    roleView.stop();
                    if (self._selfRoles.indexOf(roleView.role) != -1) {
                        self.createFightEffect(26, roleView.x, roleView.y - 10, g_fight.ROLE_ASPECT_UP);
                    }
                }
            }
        };
        p.removeAllRoleEvent = function () {
            var self = this;
            for (var i = 0; i < self._allRoles.length; ++i) {
                var role = self._allRoles[i];
                role.removeEventListener(g_fight.ROLE_EVENT_ATTACK, self.onRoleAttack, self);
                role.removeEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurt, self);
                role.removeEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
                role.removeEventListener(g_fight.ROLE_EVENT_REVIVE, self.onRoleRevive, self);
                role.removeEventListener(g_fight.ROLE_EVENT_DIE, self.onRoleDie, self);
                role.removeEventListener(g_fight.ROLE_EVENT_CALL_PET, self.onRoleCallPet, self);
                role.removeEventListener(g_fight.ROLE_EVENT_GIFT_EQUIP_CHANGE, self.onRoleGiftEquipChange, self);
            }
        };
        p.clearFight = function () {
            var self = this;
            if (self.mainRole != null) {
                self.mainRole.removeEventListener(g_fight.ROLE_EVENT_POS_CHANGE, self.onMainRolePosChange, self);
            }
            self.removeAllRoleEvent();
            while (self._allRoles.length) {
                var role = self._allRoles.pop();
                role.dtor();
            }
            self._selfRoles.length = 0;
            self._enemyRoles.length = 0;
            self._isPicking = false;
            while (self._bgCon.numChildren) {
                self._bgCon.removeChildAt(0);
            }
            while (self._itemCon.numChildren) {
                self._itemCon.removeChildAt(0);
            }
            while (self._roleCon.numChildren) {
                var child = self._roleCon.removeChildAt(0);
                if (child.dtor != null) {
                    child.dtor();
                }
            }
            while (self._effectCon.numChildren) {
                var child = self._effectCon.removeChildAt(0);
                if (child.dtor != null) {
                    child.dtor();
                }
            }
            while (self._shadowCon.numChildren) {
                var child = self._shadowCon.removeChildAt(0);
                if (child.dtor != null) {
                    child.dtor();
                }
            }
        };
        p.changeMainRole = function () {
            var self = this;
            if (self.mainRole == null)
                return;
            self.mainRole.addEventListener(g_fight.ROLE_EVENT_POS_CHANGE, self.onMainRolePosChange, self);
            for (var i = 0; i < self._selfRoles.length; ++i) {
                self._selfRoles[i].mainRole = self.mainRole;
            }
        };
        p.forceNormalCopy = function () {
            var self = this;
            gd.fightCtrl.isSpFighting = false;
            self.clearFight();
            self._pvpType = -1;
            self._pveType = -1;
            self.loots = [];
            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
            var mapID = copyInfo[gc.t_copy_displayID];
            self.exitMap(mapID, function () {
                self.enterMap(mapID, true);
                self.checkNextWave();
            });
        };
        p.startPvpFight = function (myHeros, enemys, type, name) {
            if (name === void 0) { name = null; }
            var self = this;
            self.needEnterCopyEffect = true;
            self._pveType = -1;
            self._pvpType = type;
            self._goingNext = false;
            self._roleAllDie = false;
            var copyInfo;
            if (self._pvpType == gc.c_prop.fightTypeKey.pk) {
                //self.copyId = 37;//野外不变
                copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self._copyId);
            }
            else if (self._pvpType == gc.c_prop.fightTypeKey.guildWar) {
                self.copyId = 4003;
                copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
            }
            else {
                self.copyId = 4002;
                copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
            }
            var mapID = copyInfo[gc.t_copy_displayID];
            self.exitMap(mapID, function () {
                self.enterMap(mapID, true);
                var role;
                for (var i = 0; i < myHeros.length; ++i) {
                    role = self.createRole(myHeros[i], true, i);
                    role.roleInfo.isPvPFight = true;
                }
                for (var i = 0; i < enemys.length; ++i) {
                    role = self.createRole(enemys[i], false, i, name);
                    role.roleInfo.isPvPFight = true;
                }
                for (var i = 0; i < self._allRoles.length; ++i) {
                    self._allRoles[i].revive();
                }
                gd.fightCtrl.isDie = false;
                if (self.needEnterCopyEffect) {
                    self.needEnterCopyEffect = false;
                    g_fight.EnterCopyEffect.create().setData({ copyId: self.copyId, monsterId: -1 }).show();
                }
                if (g_fight.baseTopBar) {
                    g_fight.baseTopBar.showCopyName(self.copyId, -1);
                }
                self.playEnterEffect();
                self.changeMainRole();
                self.onMainRolePosChange();
            });
        };
        //都是Boss,普通副本不进入这里
        p.enterCopy = function (copyType, copyID, loots, bossId) {
            if (bossId === void 0) { bossId = 0; }
            var self = this;
            self._pvpType = -1;
            self._pveType = copyType;
            self.loots = loots || [null];
            self._goingNext = false;
            self.needEnterCopyEffect = true;
            self._roleAllDie = false;
            self.totalHurt = 0;
            if (self._pveType == gc.c_prop.fightTypeKey.worldBoss) {
                var bossInfo;
                if (gd.bossCtrl.isGuildBoss(bossId)) {
                    bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
                    copyID = bossInfo[gc.c_bossParameter_copyId];
                }
                else {
                    bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
                    copyID = bossInfo[gc.c_bossWorld_copyId];
                }
            }
            self.copyId = copyID;
            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyID);
            var mapId = copyInfo[gc.t_copy_bossSpace];
            self.exitMap(mapId, function () {
                var isWorldBoss = self._pveType == gc.c_prop.fightTypeKey.worldBoss;
                self.enterMap(mapId, true);
                var list = gd.heroCtrl.getFightList();
                for (var i = 0; i < list.length; ++i) {
                    var role = self.createRole(list[i], true, i, null);
                }
                gd.fightCtrl.isDie = false;
                self.playEnterEffect();
                self.createMonsterByLoots(bossId || copyInfo[gc.t_copy_bossID], self.loots, isWorldBoss);
                self.changeMainRole();
                self.onMainRolePosChange();
                if (self._pveType == gc.c_prop.fightTypeKey.worldBoss) {
                    self.worldBossHpChange();
                }
            });
        };
        //public enterWorldBoss(bossId){
        //    var self = this;
        //    var loots = [null];
        //    self._pvpType = -1;
        //    self._isBossCopy = false;
        //    self.isBossCoffers = false;
        //    self.isWorldBoss = true;
        //    self.loots = loots;
        //    self._goingNext = false;
        //    self.needEnterCopyEffect = true;
        //    self.worldBossId = bossId;
        //
        //    self.exitMap(function(){
        //        var bossInfo;
        //        var mapId;
        //        if (gd.bossCtrl.isGuildBoss(bossId)) {
        //            bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
        //            mapId = bossInfo[gc.c_bossParameter_mapId];
        //        } else {
        //            bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
        //            mapId = bossInfo[gc.c_bossWorld_mapId];
        //        }
        //        self.enterMap(mapId, true);
        //        var list:Array<gd.HeroEntityCtrl> = gd.heroCtrl.getList();
        //        for(var i=0;i<list.length; ++i){
        //            var role:Role = self.createRole(list[i], true, i, null);
        //            role.roleInfo.isWorldBossFight = false;
        //        }
        //        gd.fightCtrl.isDie = false;
        //        self.playEnterEffect();
        //        self.createMonsterByLoots(self.worldBossId, loots, true);
        //        self.changeMainRole();
        //        self.onMainRolePosChange();
        //        self.worldBossHpChange();
        //    });
        //}
        p.worldBossHpChange = function () {
            var self = this;
            if (self._pveType != gc.c_prop.fightTypeKey.worldBoss)
                return;
            var role = self._enemyRoles[0];
            if (!role)
                return;
            role.hp = gd.curBFECtrl.getCurHp();
            if (role.hp <= 0) {
                role.die();
            }
        };
        p.roleListChange = function () {
            var self = this;
            var heroList = gd.heroCtrl.getFightList();
            var newRoles = [];
            var notHeroRoles = [];
            for (var i = 0; i < self._selfRoles.length; ++i) {
                var role = self._selfRoles[i];
                role.medalId = 0;
                role.removeEventListener(g_fight.ROLE_EVENT_POS_CHANGE, self.onMainRolePosChange, self);
                for (var n = 0; n < heroList.length; ++n) {
                    var hero = heroList[n];
                    if (role.entity && role.entity.job == hero.job) {
                        newRoles[n] = role;
                        break;
                    }
                }
                if (n == heroList.length) {
                    notHeroRoles.push(role);
                }
            }
            self._selfRoles = newRoles.concat(notHeroRoles);
            self.changeMainRole();
        };
        p.createRole = function (entity, isSelf, index, name) {
            if (name === void 0) { name = null; }
            var self = this;
            var petNum = 0;
            for (var i = 0; i < self._selfRoles.length; ++i) {
                if (self._selfRoles[i] instanceof g_fight.Pet) {
                    petNum++;
                    break;
                }
            }
            if (isSelf && self._selfRoles.length - petNum == gd.heroCtrl.getList().length) {
                return;
            }
            var role = new g_fight.Role();
            role.name = name;
            role.isSelf = isSelf;
            role.isMain = index == 0;
            if (isSelf) {
                role.x = self.mapTW / 2;
                role.y = self.mapTH / 2;
                if (self.mainRole != null) {
                    role.x = self.mainRole.x - 120 + Math.random() * 120;
                    role.y = self.mainRole.y - 120 + Math.random() * 120;
                }
                if (index == 0) {
                    role.isKing = gd.userCtrl.getIsKing();
                    role.medalId = gd.medalCtrl.getMedalTitle();
                }
            }
            else {
                role.x = self.mapTW / 2 - 250 + Math.random() * 100;
                role.y = self.mapTH / 2 - 250 + Math.random() * 100;
                if (index == 0) {
                    role.isKing = entity.fightData[3];
                    role.medalId = entity.fightData[6];
                }
            }
            role.setEntity(entity);
            var clothesId = entity.getClothDisplayID();
            var weaponID = entity.getWeaponDisplayID();
            var wingID = entity.getWingDisplayID();
            //if(role.job == gc.c_prop.heroJobKey.fs){
            //    role.clothesID = 222002;
            //}else if(role.job == gc.c_prop.heroJobKey.ds){
            //    role.clothesID = 322002;
            //}else if(role.job == gc.c_prop.heroJobKey.zs){
            //    role.clothesID = 100012;
            //}else{
            //    //role.clothesID = 6064;
            //}
            role.clothesID = clothesId;
            role.weaponID = weaponID;
            role.wingID = wingID;
            role.action = g_fight.ROLE_ACTION_STAND;
            role.aspect = g_fight.ROLE_ASPECT_DOWN;
            role.allRoles = self._allRoles;
            role.revive();
            if (isSelf) {
                role.selfs = self._selfRoles;
                role.enemys = self._enemyRoles;
                self._selfRoles.push(role);
            }
            else {
                role.selfs = self._enemyRoles;
                role.enemys = self._selfRoles;
                self._enemyRoles.push(role);
            }
            role.addEventListener(g_fight.ROLE_EVENT_ATTACK, self.onRoleAttack, self);
            role.addEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurt, self);
            role.addEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
            role.addEventListener(g_fight.ROLE_EVENT_REVIVE, self.onRoleRevive, self);
            role.addEventListener(g_fight.ROLE_EVENT_DIE, self.onRoleDie, self);
            role.addEventListener(g_fight.ROLE_EVENT_CALL_PET, self.onRoleCallPet, self);
            role.addEventListener(g_fight.ROLE_EVENT_GIFT_EQUIP_CHANGE, self.onRoleGiftEquipChange, self);
            if (isSelf) {
                role.addEventListener(g_fight.ROLE_EVENT_HP_CHANGE, self.onMyRoleHpChange, self);
            }
            self.addRoleToMap(role);
            return role;
        };
        p.createMonster = function (monsterId, loot, baseX, baseY, isBoss) {
            var self = this;
            var role = new g_fight.Role();
            role.setMoster(monsterId);
            role.action = g_fight.ROLE_ACTION_STAND;
            role.aspect = g_fight.ROLE_ASPECT_DOWN;
            role.allRoles = self._allRoles;
            role.loot = loot;
            if (!isBoss) {
                role.x = baseX - 175 + Math.random() * 350;
                role.y = baseY - 175 + Math.random() * 350;
            }
            else {
                if (Math.random() < 0.5) {
                    role.x = Math.random() < 0.5 ? baseX - 200 + Math.random() * 75 : baseX + 200 - Math.random() * 75;
                    role.y = baseY - 175 + Math.random() * 350;
                }
                else {
                    role.x = baseX - 175 + Math.random() * 350;
                    role.y = Math.random() < 0.5 ? baseY - 200 + Math.random() * 75 : baseY + 200 - Math.random() * 75;
                }
            }
            role.selfs = self._enemyRoles;
            role.enemys = self._selfRoles;
            self._enemyRoles.push(role);
            role.revive();
            role.addEventListener(g_fight.ROLE_EVENT_ATTACK, self.onRoleAttack, self);
            role.addEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurt, self);
            role.addEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
            role.addEventListener(g_fight.ROLE_EVENT_DIE, self.onRoleDie, self);
            self.addRoleToMap(role);
            return role;
        };
        p.callPet = function (mosterID, owner) {
            var self = this;
            owner.curPetNum++;
            var role = new g_fight.Pet();
            role.setMoster(mosterID);
            role.owner = owner;
            role.isSelf = owner.isSelf;
            role.action = g_fight.ROLE_ACTION_STAND;
            role.aspect = g_fight.ROLE_ASPECT_DOWN;
            role.allRoles = self._allRoles;
            role.x = owner.x + Math.random() * 90;
            role.y = owner.y + Math.random() * 50;
            if (role.isSelf) {
                role.selfs = self._selfRoles;
                role.enemys = self._enemyRoles;
                role.mainRole = self.mainRole;
                self._selfRoles.push(role);
            }
            else {
                role.selfs = self._enemyRoles;
                role.enemys = self._selfRoles;
                self._enemyRoles.push(role);
            }
            role.revive();
            role.addEventListener(g_fight.ROLE_EVENT_ATTACK, self.onRoleAttack, self);
            role.addEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurt, self);
            role.addEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
            role.addEventListener(g_fight.ROLE_EVENT_DIE, self.onRoleDie, self);
            self.addRoleToMap(role);
        };
        p.onRoleDie = function (e) {
            var self = this;
            var role = e.currentTarget;
            var index = self._allRoles.indexOf(role);
            var roleView = self.getRoleView(role);
            var giftView = self.getGiftView(role);
            var roleNameView = self.getRoleNameView(role);
            var roleShadowView = self.getRoleShadowView(role);
            var loot = role.loot;
            if (roleView && roleView.parent) {
                roleView.parent.removeChild(roleView);
                roleView.dtor();
            }
            if (roleNameView && roleNameView.parent) {
                roleNameView.parent.removeChild(roleNameView);
                roleNameView.dtor();
            }
            if (roleShadowView && roleShadowView.parent) {
                roleShadowView.parent.removeChild(roleShadowView);
                roleShadowView.dtor();
            }
            if (giftView && giftView.parent) {
                giftView.parent.removeChild(giftView);
                giftView.dtor();
            }
            role.removeEventListener(g_fight.ROLE_EVENT_ATTACK, self.onRoleAttack, self);
            role.removeEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurt, self);
            role.removeEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
            role.removeEventListener(g_fight.ROLE_EVENT_REVIVE, self.onRoleRevive, self);
            role.removeEventListener(g_fight.ROLE_EVENT_DIE, self.onRoleDie, self);
            role.removeEventListener(g_fight.ROLE_EVENT_CALL_PET, self.onRoleCallPet, self);
            role.removeEventListener(g_fight.ROLE_EVENT_GIFT_EQUIP_CHANGE, self.onRoleGiftEquipChange, self);
            role.dtor();
            var oldMainRole = self.mainRole;
            self._allRoles.splice(index, 1);
            index = self._enemyRoles.indexOf(role);
            if (index != -1)
                self._enemyRoles.splice(index, 1);
            index = self._selfRoles.indexOf(role);
            if (index != -1)
                self._selfRoles.splice(index, 1);
            if (role == oldMainRole) {
                role.removeEventListener(g_fight.ROLE_EVENT_POS_CHANGE, self.onMainRolePosChange, self);
                self.changeMainRole();
            }
            if (loot != null) {
                //if (!self._isBossCopy){
                //    gd.fightCtrl.pickLoot(loot[0],{},function(){},self);
                //}
                var numLoot = loot[1].length;
                if (numLoot > 0) {
                    var numR = Math.ceil(numLoot / 4);
                    var numC = numLoot >= 4 ? 4 : numLoot;
                    for (var i = 0; i < numLoot; ++i) {
                        var item = loot[1][i];
                        var lootView = new g_fight.LootView();
                        lootView.itemID = item[0];
                        lootView.itemNum = item[1];
                        lootView.row = role.row + Math.floor(i / numC) - Math.floor(numR / 2);
                        lootView.col = role.col + Math.floor(i % numC) - Math.floor(numC / 2);
                        if (lootView.row < 0) {
                            lootView.row = 0;
                        }
                        else if (lootView.row > g_fight.Role.maxRow - 1) {
                            lootView.row = g_fight.Role.maxRow - 1;
                        }
                        if (lootView.col < 0) {
                            lootView.col = 0;
                        }
                        else if (lootView.col > g_fight.Role.maxCol - 1) {
                            lootView.col = g_fight.Role.maxCol - 1;
                        }
                        lootView.x = (lootView.col + 0.5) * g_fight.Role.cellW;
                        lootView.y = (lootView.row + 0.5) * g_fight.Role.cellH;
                        lootView.updateView();
                        self._itemCon.addChild(lootView);
                        //lootView.textField.x = lootView.x-lootView.textField.width/2;
                        lootView.textField.y = lootView.y - 25;
                        self._effectCon.addChild(lootView.textField);
                    }
                }
            }
            if (gd.fightCtrl.isSpFighting) {
                //self._roleAllDie的判断只在特殊战斗中生效
                self._roleAllDie = self.isFightOver(); //赋值为true仅在有死亡时
            }
            self.checkNextWave(true);
        };
        p.onRoleCallPet = function (e) {
            var self = this;
            var petID = e.data.petID;
            var num = e.data.num;
            var owner = e.data.owner;
            var isKillAll = e.data.isKillAll;
            if (isKillAll) {
                for (var i = 0; i < self._allRoles.length; ++i) {
                    var pet = self._allRoles[i];
                    if (pet instanceof g_fight.Pet) {
                        if (pet.owner == owner) {
                            pet.hp = 0;
                        }
                    }
                }
            }
            for (var i = 0; i < num - owner.curPetNum; ++i) {
                self.callPet(petID, owner);
            }
        };
        p.onRoleGiftEquipChange = function (e) {
            this.checkRoleGift(e.currentTarget);
        };
        p.checkRoleGift = function (role) {
            var self = this;
            var giftView = self.getGiftView(role);
            if (role.gift) {
                if (!giftView) {
                    giftView = new g_fight.GiftView();
                    self._roleCon.addChild(giftView);
                }
                giftView.setGift(role.gift);
            }
            else {
                var giftView = self.getGiftView(role);
                if (giftView && giftView.parent) {
                    giftView.parent.removeChild(giftView);
                    giftView.dtor();
                }
            }
        };
        p.clearFinding = function () {
            var self = this;
            self.isFindingMonster = false;
            if (self.mainRole) {
                self.mainRole.isFindingMonster = false;
            }
            clearInterval(self._findTimeId);
        };
        p.checkNextWave = function (sameMap) {
            if (sameMap === void 0) { sameMap = false; }
            var self = this;
            if (!self._isEnterMap)
                return;
            var isWin = false;
            if (!gd.fightCtrl.isSpFighting) {
                if (self._goingNext)
                    return;
                if (self.isFightOver()) {
                    isWin = self._enemyRoles.length == 0;
                    gd.fightCtrl.isDie = !isWin;
                    //var dTimer = Date.newDate().getTime()-self.fightStartTime;
                    //var ddTime = Math.abs(self.fightDateLastTime-dTimer)
                    //if(ddTime>500){
                    //    //console.log("使用外挂"+ddTime+" "+dTimer+" "+self.fightDateLastTime);
                    //    //mo.showMsg(gc.id_c_msgCode.noRoleLvl,ddTime);
                    //}
                    self.copyId = gd.copyCtrl.getNormalCurCopyId();
                    var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
                    var mapID = copyInfo[gc.t_copy_displayID];
                    if (!isWin) {
                        g_fight.FightRevive.showCallback({ callback: function () {
                                self.enterMap(mapID, true);
                                self.checkNextWave();
                            }, target: self, begTime: Date.newDate().getTime() + 5 * 1000
                        });
                        return;
                    }
                    if (self.isNormalCopy && self._itemCon.numChildren > 0) {
                        self._isPicking = true;
                        var lootView = self._itemCon.getChildAt(self._itemCon.numChildren - 1);
                        self.mainRole.moveTo(lootView.row, lootView.col);
                    }
                    else {
                        self._isPicking = false;
                        var list = gd.heroCtrl.getFightList();
                        for (var i = 0; i < list.length; ++i) {
                            var isExist = false;
                            for (var k = 0; k < self._selfRoles.length; ++k) {
                                if (self._selfRoles[k].uid == list[i].get(gc.dsConsts.HeroEntity.id)) {
                                    isExist = true;
                                    self._selfRoles[k].roleInfo.setHeroProp(list[i].props);
                                    break;
                                }
                            }
                            if (isExist)
                                continue;
                            self.createRole(list[i], true, i);
                        }
                        gd.fightCtrl.isDie = false;
                        self.playEnterEffect();
                        self.changeMainRole();
                        self.onMainRolePosChange();
                        for (var i = 0; i < self._selfRoles.length; ++i) {
                            self._selfRoles[i].revive();
                        }
                        //相同地图下才记连胜
                        if (isWin && sameMap) {
                            gd.copyCtrl.updateWinningStreak(function () { }, self);
                        }
                        if (self.loots.length > 0) {
                            var uidArys = [];
                            for (var i = 0; i < self.loots.length; ++i) {
                                uidArys.push(self.loots[i][0]);
                            }
                            gd.fightCtrl.pickLoot(uidArys, {}, function () { }, self);
                            self.loots = [];
                        }
                        var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.battleSet);
                        var leftTime = gameInfo[1] * 1000 - (Date.newDate().getTime() - self.fightStartTime);
                        if (leftTime > 0 && !self._isFindingMonster) {
                            self.clearFinding();
                            self.isFindingMonster = true;
                            if (self.mainRole) {
                                self.mainRole.isFindingMonster = true;
                            }
                            self._findTimeId = setInterval(function () {
                                self.checkNextWave();
                                self.clearFinding();
                            }, leftTime);
                        }
                        else {
                            self.getNextLoot();
                        }
                    }
                }
            }
            else {
                if (self._roleAllDie) {
                    isWin = self._enemyRoles.length == 0;
                    gd.fightCtrl.isDie = !isWin;
                    var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
                    var mapID = copyInfo[gc.t_copy_displayID];
                    //if (self.isNormalCopy && self._itemCon.numChildren > 0) {
                    if (self._itemCon.numChildren > 0) {
                        self._isPicking = true;
                        var lootView = self._itemCon.getChildAt(self._itemCon.numChildren - 1);
                        self.mainRole.moveTo(lootView.row, lootView.col);
                    }
                    else {
                        self._roleAllDie = false;
                        self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                        var list = gd.heroCtrl.getFightList();
                        if (self._pvpType == gc.c_prop.fightTypeKey.pk || self._pvpType == gc.c_prop.fightTypeKey.rankPk) {
                            gd.pkOutCtrl.end(isWin, {}, function (fightResult) {
                                g_fight.FightPKWinOrFail.showCallback({ isWin: isWin, fightResult: fightResult, callback: function () {
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function () {
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                            if (self._pvpType == gc.c_prop.fightTypeKey.rankPk) {
                                                gd.pkOutCtrl.getRankList(function (data) {
                                                    g_fight.PVPRank.create().setData({ rankData: data }).show();
                                                }, self);
                                            }
                                            self._pvpType = -1;
                                        });
                                    }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            }, self);
                        }
                        else if (self._pvpType == gc.c_prop.fightTypeKey.challengeCupPk) {
                            gd.challengeCupCtrl.endFight(isWin, function (fightResult) {
                                g_fight.FightArenaWinOrFail.showCallback({ isWin: isWin, fightResult: fightResult, fightType: self._pvpType, callback: function () {
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function () {
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                            if (self._pvpType == gc.c_prop.fightTypeKey.rankPk) {
                                                gd.pkOutCtrl.getRankList(function (data) {
                                                    g_fight.PVPRank.create().setData({ rankData: data }).show();
                                                }, self);
                                            }
                                            self._pvpType = -1;
                                        });
                                    },
                                    target: self,
                                    begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            }, self);
                        }
                        else if (self._pvpType == gc.c_prop.fightTypeKey.coffers) {
                            gd.coffersCtrl.fightEnd(isWin, function (fightResult) {
                                g_fight.FightCoffersWinOrFail.showCallback({ isWin: isWin, fightResult: fightResult, callback: function () {
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function () {
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                            self._pvpType = -1;
                                        });
                                    }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            }, self);
                        }
                        else if (self._pvpType == gc.c_prop.fightTypeKey.guildWar) {
                            gd.guildWarCtrl.fightEndDoor(isWin, function (fightResult) {
                                g_fight.FightGuildWarWinOrFail.showCallback({ isWin: isWin, fightResult: fightResult, callback: function () {
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function () {
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                            self._pvpType = -1;
                                        });
                                    }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            }, self);
                        }
                        else if (self._pveType == gc.c_prop.fightTypeKey.coffersBoss) {
                            gd.coffersCtrl.fightCoffersEnd(self.totalHurt, function (fightResult) {
                                g_fight.FightCoffersBoss.showCallback({ isWin: true, fightResult: fightResult, callback: function () {
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function () {
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                            self._pveType = -1;
                                        });
                                    }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            }, self);
                        }
                        else if (self._pveType == gc.c_prop.fightTypeKey.guildCopy) {
                            gd.guildCtrl.getInfo(function () {
                                gd.guildCopyCtrl.guildEnd(isWin, function (data) {
                                    g_fight.GuildCopyBossWinOrFail.showCallback({ result: data, callback: function () {
                                            gd.fightCtrl.isSpFighting = false;
                                            self.loots = [];
                                            self.exitMap(mapID, function () {
                                                self.enterMap(mapID, true);
                                                self.checkNextWave();
                                                self._pveType = -1;
                                            });
                                        }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                    });
                                }, self);
                            }, self);
                        }
                        else if (self._pveType == gc.c_prop.fightTypeKey.copy) {
                            var fightData = {};
                            var oldStar = gd.copyCtrl.getCopyStar(self.copyId);
                            var newStar = 0;
                            var noDie = false;
                            var timeLmt = false;
                            if (isWin) {
                                newStar++;
                                if (self._selfRoles.length >= gd.heroCtrl.getFightList().length) {
                                    noDie = true;
                                    newStar++;
                                }
                                if (Date.newDate().getTime() - self.fightStartTime < 32 * 1000) {
                                    timeLmt = true;
                                    newStar++;
                                }
                            }
                            fightData[gc.dsConsts.FightData.isWin] = isWin;
                            fightData[gc.dsConsts.FightData.star] = newStar;
                            fightData[gc.dsConsts.FightData.vData] = {};
                            gd.copyCtrl.end(isWin, fightData, function (fightResult) {
                                self._pveType = -1;
                                var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
                                var copyType = copyInfo[gc.t_copy_type];
                                var subModuleId = -1, copyVip;
                                if (copyType == gc.c_prop.copyTypeKey.equip) {
                                    subModuleId = g_consts.HS_SUBMID_EQUIP_COPY;
                                }
                                else if (copyType == gc.c_prop.copyTypeKey.hell) {
                                    subModuleId = g_consts.HS_SUBMID_BOSS_COPY;
                                }
                                else if (copyType == gc.c_prop.copyTypeKey.state) {
                                    subModuleId = g_consts.HS_SUBMID_STATE_COPY;
                                }
                                else if (copyType == gc.c_prop.copyTypeKey.vip) {
                                    subModuleId = g_consts.HS_SUBMID_VIP_COPY;
                                    copyVip = gd.copyCtrl.getCopyVip(self.copyId);
                                }
                                else if (copyType == gc.c_prop.copyTypeKey.normal) {
                                    if (!isWin) {
                                        gd.userCtrl.setAutoFight(0);
                                    }
                                }
                                else if (copyType == gc.c_prop.copyTypeKey.paTa) {
                                    subModuleId = g_consts.HS_SUBMID_TOWER;
                                }
                                if (subModuleId != -1) {
                                    var items = [];
                                    for (var i = 0; i < self.loots.length; ++i) {
                                        for (var k = 0; k < self.loots[i][1].length; ++k) {
                                            items.push({ itemId: self.loots[i][1][k][0], count: self.loots[i][1][k][1] });
                                        }
                                    }
                                    g_fight.FightCopyWinOrFail.showCallback({ isWin: isWin, noDie: noDie, timeLmt: timeLmt, fightResult: fightResult, items: items, callback: function () {
                                            gd.fightCtrl.isSpFighting = false;
                                            self.loots = [];
                                            self.exitMap(mapID, function () {
                                                if (mo.moduleMgr.curModule.name == g_consts.moduleId.fight) {
                                                    var moduleParam = { subModuleId: subModuleId };
                                                    if (copyVip)
                                                        moduleParam["vip"] = copyVip;
                                                    mo.moduleMgr.runModule(g_consts.moduleId.home, moduleParam);
                                                }
                                                self.enterMap(mapID, true);
                                                self.checkNextWave();
                                            });
                                        },
                                        target: self,
                                        begTime: Date.newDate().getTime() + 10 * 1000
                                    });
                                }
                                else {
                                    if (!isWin) {
                                        g_fight.FightRevive.showCallback({ callback: function () {
                                                gd.fightCtrl.isSpFighting = false;
                                                self.loots = [];
                                                self.exitMap(mapID, function () {
                                                    self.needEnterEffect = true;
                                                    self.enterMap(mapID, true);
                                                    self.checkNextWave();
                                                });
                                            }, target: self, begTime: Date.newDate().getTime() + 5 * 1000
                                        });
                                    }
                                    else {
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function () {
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                        });
                                    }
                                }
                            }, self);
                        }
                        else if (self._pvpType == gc.c_prop.fightTypeKey.arena) {
                            var fightData = {};
                            fightData[gc.dsConsts.FightData.isWin] = isWin;
                            fightData[gc.dsConsts.FightData.star] = 0;
                            fightData[gc.dsConsts.FightData.vData] = {};
                            gd.arenaCtrl.fightEnd(isWin, fightData, function (fightResult) {
                                g_fight.FightArenaWinOrFail.showCallback({ isWin: isWin, fightResult: fightResult, fightType: self._pvpType, callback: function () {
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(self.mapID, function () {
                                            self.enterMap(self.mapID, false);
                                            self.checkNextWave();
                                            if (mo.moduleMgr.curModule.name == g_consts.moduleId.fight) {
                                                mo.moduleMgr.runModule(g_consts.moduleId.home, { subModuleId: g_consts.HS_SUBMID_ARENA });
                                            }
                                            self._pvpType = -1;
                                        });
                                    },
                                    target: self,
                                    begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            }, self);
                        }
                        else if (self._pveType == gc.c_prop.fightTypeKey.worldBoss) {
                            if (!isWin) {
                                gd.curBFECtrl.exitFight(function () {
                                    g_fight.FightRevive.showCallback({ callback: function () {
                                            self._pveType = -1;
                                            gd.fightCtrl.isSpFighting = false;
                                            self.loots = [];
                                            self.exitMap(mapID, function () {
                                                self.needEnterEffect = true;
                                                self.enterMap(mapID, true);
                                                self.checkNextWave();
                                            });
                                            //在战斗场景且不开启自动打boss才显示世界boss界面
                                            if (mo.moduleMgr.curModule.name == g_consts.moduleId.fight
                                                && !gd.bossFightCtrl.isAutoFight()) {
                                                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss, { bossId: self.monsterId });
                                            }
                                        }, target: self, begTime: Date.newDate().getTime() + 5 * 1000
                                    });
                                }, self);
                            }
                            else {
                                gd.fightCtrl.isSpFighting = false;
                                self._pveType = -1;
                                self.loots = [];
                                self.exitMap(mapID, function () {
                                    self.needEnterEffect = true;
                                    self.enterMap(mapID, true);
                                    self.checkNextWave();
                                });
                            }
                        }
                    }
                }
            }
        };
        p.isFightOver = function () {
            var self = this;
            if (self._enemyRoles.length == 0 || self._selfRoles.length == 0) {
                return true;
            }
            return false;
        };
        p.skipFight = function () {
            var self = this;
            var role;
            if (self.isFightOver())
                return;
            self.removeAllRoleEvent();
            for (var i = 0; i < self._allRoles.length; ++i) {
                var role = self._allRoles[i];
                role.addEventListener(g_fight.ROLE_EVENT_DIE, self.onRoleDie, self);
                role.addEventListener(g_fight.ROLE_EVENT_CALL_PET, self.onRoleCallPet, self);
                role.addEventListener(g_fight.ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
                role.stand();
                egret.Tween.removeTweens(role);
            }
            while (!self.isFightOver()) {
                for (var i = 0; i < self._allRoles.length; ++i) {
                    role = self._allRoles[i];
                    role.exeAI(false);
                }
            }
            for (var i = 0; i < self._itemCon.numChildren; ++i) {
                var lootView = self._itemCon.getChildAt(i);
                lootView.pickUp();
                i--;
            }
            self.checkNextWave(self.isNormalCopy ? true : false);
        };
        p.getNextLoot = function () {
            var self = this;
            self._goingNext = true;
            clearInterval(self.delayRequestId);
            self.delayRequestId = setInterval(function () {
                self.getNextLoot();
            }, 5000);
            gd.fightCtrl.getNextLoot(gd.copyCtrl.getNormalCurCopyId(), false, function (data) {
                clearInterval(self.delayRequestId);
                if (gd.fightCtrl.isSpFighting)
                    return;
                if (self._enemyRoles.length != 0)
                    return;
                self.needEnterEffect = false;
                self.copyId = gd.copyCtrl.getNormalCurCopyId();
                var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
                self.createMonsterByLoots(copyInfo[gc.t_copy_randMonsters][0], data);
                self._goingNext = false;
                self.fightStartTime = Date.newDate().getTime();
                //self.fightDateLastTime = 0;
            }, self);
        };
        p.createMonsterByLoots = function (monsterId, loots, isWorldBoss) {
            if (isWorldBoss === void 0) { isWorldBoss = false; }
            var self = this;
            self.monsterId = monsterId;
            self.loots = loots;
            if (self.needEnterCopyEffect) {
                self.needEnterCopyEffect = false;
                g_fight.EnterCopyEffect.create().setData({ copyId: self.copyId, monsterId: monsterId }).show();
            }
            if (g_fight.baseTopBar && self.copyId) {
                g_fight.baseTopBar.showCopyName(self.copyId, self.monsterId);
            }
            var baseX = 0;
            var baseY = 0;
            if (self.mainRole) {
                baseX = self.mainRole.x > self.mapTW / 2 ? (self.mainRole.x - 400 + Math.random() * 50) : (self.mainRole.x + 300 + Math.random() * 50);
                baseY = self.mainRole.y > self.mapTH / 2 ? self.mainRole.y - 300 + Math.random() * 50 : self.mainRole.y + 200 + Math.random() * 50;
            }
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, monsterId);
            var isBoss = monsterInfo[gc.t_monster_bossLevel] != 0;
            if (isBoss) {
                baseX = self.mapTW / 2;
                baseY = self.mapTH / 2;
            }
            for (var i = 0; i < loots.length; ++i) {
                var role = self.createMonster(monsterId, loots[i], baseX, baseY, isBoss);
                role.roleInfo.isWorldBossFight = isWorldBoss;
            }
        };
        p.onRoleAttack = function (event) {
            var self = this;
            if (!self.stage)
                return;
            var hurtData = event.data;
            var attackRole = hurtData.attackRole;
            var hurtRole = hurtData.hurtRole;
            var skill = hurtData.skill;
            var attackRoleView = self.getRoleView(attackRole);
            var hurtRoleView = self.getRoleView(hurtRole);
            if (skill.skillInfo.casterEffect != 0) {
                var aspect = g_fight.ROLE_ASPECT_UP;
                if (skill.skillInfo.attackDistance == 1) {
                    aspect = attackRole.aspect;
                }
                if (attackRole.roleInfo.monsterInfo == null) {
                    self.createFightEffect(skill.skillInfo.casterEffect, attackRoleView.x, attackRoleView.y - 10, aspect);
                }
            }
            if (skill.skillInfo.flyEffect != 0 && self.stage != null) {
                var fightEffect = g_fight.FightEffect.getFightEffect(skill.skillInfo.flyEffect, g_fight.ROLE_ASPECT_UP);
                fightEffect.startLoadByKey(skill.skillInfo.flyEffect, g_fight.ROLE_ASPECT_UP);
                var fx = attackRoleView.x;
                var fy = attackRoleView.y - 30;
                var tx = hurtRoleView.x;
                var ty = hurtRoleView.y - 30;
                fightEffect.x = fx;
                fightEffect.y = fy;
                var dx = tx - fx;
                var dy = ty - fy;
                var cos = dx / Math.sqrt(dx * dx + dy * dy);
                var ang = Math.acos(cos);
                if (dy > 0)
                    fightEffect.rotation = ang / Math.PI * 180;
                else
                    fightEffect.rotation = -ang / Math.PI * 180;
                self._effectCon.addChild(fightEffect);
                fightEffect.play(-1);
                egret.Tween.get(fightEffect).to({ x: tx, y: ty }, Math.sqrt(dx * dx + dy * dy) * 3).call(function () {
                    if (this.parent)
                        this.parent.removeChild(this);
                }, fightEffect);
            }
            //if(self._pvpType==gc.c_prop.fightTypeKey.pk){
            //    if(attackRole.isSelf){
            //        var goldId = gc.c_prop.spItemIdKey.gold;
            //        var goldLoot = [];
            //        for(var i=0; i<14; ++i){
            //            if(Math.random()<0.7){
            //                goldLoot.push([goldId, Math.round(1+Math.random()*10)]);
            //            }
            //        }
            //
            //        var numLoot = goldLoot.length;
            //        if(numLoot>0){
            //            var numR = Math.ceil(numLoot/4);
            //            var numC = numLoot>=4?4:numLoot;
            //            for(var i=0; i<numLoot; ++i){
            //                var item = goldLoot[i];
            //                var lootView = new LootView();
            //                lootView.begTime = Date.newDate().getTime();
            //                lootView.itemID = item[0];
            //                lootView.itemNum = item[1];
            //                lootView.row = attackRole.row+Math.floor(i/numC)-Math.floor(numR/2);
            //                lootView.col = attackRole.col+Math.floor(i%numC)-Math.floor(numC/2);
            //
            //                if(lootView.row<0){
            //                    lootView.row = 0;
            //                }else if(lootView.row>Role.maxRow-1){
            //                    lootView.row = Role.maxRow-1;
            //                }
            //                if(lootView.col<0){
            //                    lootView.col = 0;
            //                }else if(lootView.col>Role.maxCol-1){
            //                    lootView.col = Role.maxCol-1;
            //                }
            //
            //                lootView.x = (lootView.col+0.5)*Role.cellW;
            //                lootView.y = (lootView.row+0.5)*Role.cellH;
            //                lootView.updateView();
            //                self._itemCon.addChild(lootView);
            //                lootView.textField.y = lootView.y-25;
            //                self._effectCon.addChild(lootView.textField);
            //            }
            //        }
            //    }
            //}
        };
        p.createFightEffect = function (key, x, y, aspect) {
            var self = this;
            if (!self.stage)
                return;
            var fightEffect = g_fight.FightEffect.getFightEffect(key, aspect);
            fightEffect.startLoadByKey(key, aspect);
            fightEffect.scaleX = fightEffect.scaleY = 1.1;
            fightEffect.x = x;
            fightEffect.y = y;
            self._effectCon.addChild(fightEffect);
            fightEffect.addEventListener(egret.Event.COMPLETE, function () {
                if (this.parent)
                    this.parent.removeChild(this);
            }, fightEffect);
            fightEffect.play(1);
            fightEffect.scaleX = (aspect < 6 ? 1 : -1);
        };
        p.getLabel = function () {
            var self = this;
            if (self._labelCaches.length > 0) {
                return self._labelCaches.pop();
            }
            var tf = new egret.TextField();
            tf.stroke = 1;
            tf.strokeColor = 0x000000;
            return tf;
        };
        p.removeLabel = function (label) {
            this._labelCaches.push(label);
        };
        p.onRoleRevive = function (event) {
            var self = this;
            if (!self.stage)
                return;
            //通过复活戒指复活
            var hurtRole = event.currentTarget;
            var label = self.getLabel();
            var hurtRoleView = self.getRoleView(hurtRole);
            label.size = 27;
            label.textColor = 0xfff000;
            self._effectCon.addChild(label);
            label.text = "复活";
            label.textColor = 0xffc100;
            label.x = hurtRoleView.x - label.width / 2;
            label.y = hurtRoleView.y - 60;
            egret.Tween.get(label).to({ y: label.y - 60 }, 500).call(function () {
                if (label.parent)
                    label.parent.removeChild(label);
            });
        };
        p.onRoleHurtNoView = function (event) {
            var self = this;
            var hurtData = event.data;
            var hurtRole = hurtData.hurtRole;
            var attackRole = hurtData.attackRole;
            if ((self._pveType == gc.c_prop.fightTypeKey.coffersBoss)
                && !hurtRole.isSelf) {
                self.totalHurt += -hurtData.hp;
            }
            if (hurtData.hp != 0) {
                if (hurtData.hp < 0) {
                    if (self._pveType == gc.c_prop.fightTypeKey.worldBoss && !hurtRole.isSelf) {
                        if (gd.curBFECtrl.isLimitHp() && !hurtRole.hasBuff(12)) {
                            hurtRole.addBuff(12, 1);
                        }
                        var bossHurt = hurtData.hp * (1 + gd.curBFECtrl.getInspireHurt() / 10000);
                        bossHurt = Math.ceil(bossHurt);
                        var heroId = -1;
                        if (attackRole.entity) {
                            heroId = attackRole.entity.get(gc.dsConsts.HeroEntity.id);
                        }
                        gd.curBFECtrl.hurt(-bossHurt, heroId);
                    }
                }
            }
        };
        p.onRoleHurt = function (event) {
            var self = this;
            var hurtData = event.data;
            var hurtRole = hurtData.hurtRole;
            if (!self.stage)
                return;
            var attackRole = hurtData.attackRole;
            var skill = hurtData.skill;
            var hurtRoleView = self.getRoleView(hurtRole);
            if (hurtData.hp != 0) {
                var label = self.getLabel();
                label.size = 18;
                label.textColor = 0xfff000;
                self._effectCon.addChild(label);
                label.text = hurtData.hp.toString();
                label.x = hurtRoleView.x - label.width / 2;
                label.y = hurtRoleView.y - 50;
                var toX, toY;
                var toX2, toY2;
                var toScaleX = 1, toScaleY = 1;
                if (hurtData.hp < 0) {
                    if (attackRole.col == hurtRole.col) {
                        toX = toX2 = label.x;
                    }
                    else if (attackRole.col > hurtRole.col) {
                        toX = label.x - 80;
                        toX2 = toX - 70;
                    }
                    else if (attackRole.col < hurtRole.col) {
                        toX = label.x + 80;
                        toX2 = toX + 70;
                    }
                    if (attackRole.row == hurtRole.row) {
                        toY = toY2 = label.y;
                    }
                    else if (attackRole.row > hurtRole.row) {
                        toY = label.y - 80;
                        toY2 = toY - 70;
                    }
                    else if (attackRole.row < hurtRole.row) {
                        toY = label.y + 80;
                        toY2 = toY + 70;
                    }
                    if (self._pveType == gc.c_prop.fightTypeKey.worldBoss && !hurtRole.isSelf) {
                        var bossHurt = hurtData.hp * (1 + gd.curBFECtrl.getInspireHurt() / 10000);
                        bossHurt = Math.ceil(bossHurt);
                        label.text = bossHurt.toString();
                    }
                }
                else {
                    label.textColor = 0x00ff00;
                    label.text = "+" + label.text;
                    toX = label.x;
                    toY = label.y - 100;
                }
                if (hurtData.crit) {
                    toScaleX = 1.2;
                    toScaleY = 1.2;
                    label.textColor = 0xff0000;
                    label.text = "暴 " + label.text;
                }
                else {
                    toScaleX = 1;
                    toScaleY = 1;
                }
                var tw = egret.Tween.get(label).to({ x: toX, y: toY, scaleX: toScaleX, scaleY: toScaleY }, 600);
                if (toX != toX2 || toY != toY2) {
                    tw = tw.to({ x: toX2, y: toY2 }, 200);
                }
                tw.call(function () {
                    if (label.parent) {
                        label.parent.removeChild(label);
                        self.removeLabel(label);
                    }
                }, self);
            }
            if (hurtData.invincible) {
                var labelInv = self.getLabel();
                self._effectCon.addChild(labelInv);
                labelInv.size = 27;
                labelInv.text = "无敌";
                labelInv.textColor = 0xc10000;
                labelInv.x = hurtRoleView.x - labelInv.width / 2;
                labelInv.y = hurtRoleView.y - 60;
                egret.Tween.get(labelInv).to({ y: labelInv.y - 60 }, 500).call(function () {
                    if (labelInv.parent)
                        labelInv.parent.removeChild(labelInv);
                });
            }
            else if (!hurtData.miss) {
                if (!hurtData.isHp2) {
                    if (skill.skillInfo.targetEffect != 0 && hurtData.isFirstAim) {
                        self.createFightEffect(skill.skillInfo.targetEffect, hurtRoleView.x, hurtRoleView.y - 10, g_fight.ROLE_ASPECT_UP);
                    }
                    if (hurtData.mb) {
                        var labelMb = self.getLabel();
                        labelMb.text = "麻痹";
                        labelMb.textColor = 0xe46c07;
                        labelMb.x = hurtRoleView.x - labelMb.width / 2;
                        labelMb.y = hurtRoleView.y - 60;
                        labelMb.size = 27;
                        self._effectCon.addChild(labelMb);
                        egret.Tween.get(labelMb).to({ y: labelMb.y - 60 }, 500).call(function () {
                            if (labelMb.parent)
                                labelMb.parent.removeChild(labelMb);
                        });
                    }
                    else if (hurtData.disMb) {
                        var labelDisMb = self.getLabel();
                        labelDisMb.text = "抗麻痹";
                        labelDisMb.textColor = 0x7030a1;
                        labelDisMb.x = hurtRoleView.x - labelDisMb.width / 2;
                        labelDisMb.y = hurtRoleView.y - 60;
                        labelDisMb.size = 27;
                        self._effectCon.addChild(labelDisMb);
                        egret.Tween.get(labelDisMb).to({ y: labelDisMb.y - 60 }, 500).call(function () {
                            if (labelDisMb.parent)
                                labelDisMb.parent.removeChild(labelDisMb);
                        });
                    }
                }
                else {
                    var labelHs = self.getLabel();
                    self._effectCon.addChild(labelHs);
                    labelHs.text = "护身";
                    labelHs.size = 27;
                    labelHs.textColor = 0x0070c1;
                    labelHs.x = hurtRoleView.x - labelHs.width / 2;
                    labelHs.y = hurtRoleView.y - 60;
                    egret.Tween.get(labelHs).to({ y: labelHs.y - 60 }, 500).call(function () {
                        if (labelHs.parent)
                            labelHs.parent.removeChild(labelHs);
                    });
                    if (hurtData.hp != 0) {
                    }
                }
            }
            else {
                var labelSb = self.getLabel();
                self._effectCon.addChild(labelSb);
                labelSb.size = 18;
                labelSb.text = "闪避";
                labelSb.textColor = 0x00ff00;
                labelSb.x = hurtRoleView.x - labelSb.width / 2;
                labelSb.y = hurtRoleView.y - 60;
                egret.Tween.get(labelSb).to({ y: labelSb.y - 60 }, 500).call(function () {
                    if (labelSb.parent)
                        labelSb.parent.removeChild(labelSb);
                });
            }
        };
        p.moveToLT = function (x, y) {
            var self = this;
            if (x < 0) {
                x = 0;
            }
            else if (x > self.mapTW - self.mapW) {
                x = self.mapTW - self.mapW;
            }
            if (y < 0) {
                y = 0;
            }
            else if (y > self.mapTH - self.mapH) {
                y = self.mapTH - self.mapH;
            }
            self._thumbCon.x = self._bgCon.x = self._shadowCon.x = self._itemCon.x = self._roleCon.x = self._effectCon.x = -x;
            self._thumbCon.y = self._bgCon.y = self._shadowCon.y = self._itemCon.y = self._roleCon.y = self._effectCon.y = -y;
            self.checkRemoveTileView();
            var begCol = Math.floor(x / g_fight.MapTileView.TILE_W);
            var endCol = Math.floor((x + self.mapW) / g_fight.MapTileView.TILE_W);
            var begRow = Math.floor(y / g_fight.MapTileView.TILE_H);
            var endRow = Math.floor((y + self.mapH) / g_fight.MapTileView.TILE_H);
            for (var i = begCol; i <= endCol; ++i) {
                for (var k = begRow; k <= endRow; ++k) {
                    self.addTileView(k, i);
                }
            }
        };
        p.moveToCenter = function (x, y) {
            var self = this;
            self.moveToLT(x - self.mapW / 2, y - self.mapH / 2 - 80);
        };
        p.addTileView = function (row, col, index) {
            if (index === void 0) { index = -1; }
            var self = this;
            if (row < 0 || row > Math.ceil(self.mapTH / g_fight.MapTileView.TILE_H) - 1
                || col < 0 || col > Math.ceil(self.mapTW / g_fight.MapTileView.TILE_W) - 1) {
                return;
            }
            var tileView = self.getTileView(row, col);
            if (tileView && tileView.mapID == self.mapID)
                return;
            tileView = g_fight.MapTileView.createTileView(self.mapID, row, col);
            tileView.x = g_fight.MapTileView.TILE_W * col;
            tileView.y = g_fight.MapTileView.TILE_H * row;
            self._bgCon.addChild(tileView);
        };
        p.getTileView = function (row, col) {
            var self = this;
            var tileView;
            for (var i = 0; i < self._bgCon.numChildren; ++i) {
                tileView = self._bgCon.getChildAt(i);
                if (tileView.row == row && tileView.col == col) {
                    return tileView;
                }
            }
            return null;
        };
        p.checkRemoveTileView = function () {
            var self = this;
            var tileView;
            for (var i = 0; i < self._bgCon.numChildren; ++i) {
                tileView = self._bgCon.getChildAt(i);
                if (tileView.x + tileView.width < -self._bgCon.x
                    || tileView.x > -self._bgCon.x + self.mapW
                    || tileView.y + tileView.height < -self._bgCon.y
                    || tileView.y > -self._bgCon.y + self.mapH) {
                    if (tileView.parent) {
                        tileView.parent.removeChild(tileView);
                        g_fight.MapTileView.removeTileView(tileView);
                    }
                }
            }
        };
        p.addRoleToMap = function (role) {
            var self = this;
            if (self.stage) {
                var roleView = new g_fight.RoleView();
                roleView.setRole(role);
                self._roleCon.addChild(roleView);
                self.checkRoleGift(role);
                var roleNameView = new g_fight.RoleNameView();
                roleNameView.setRole(role);
                self._effectCon.addChild(roleNameView);
                var roleShadowView = new g_fight.RoleShadowView();
                roleShadowView.setRole(role);
                self._shadowCon.addChild(roleShadowView);
            }
            self._allRoles.push(role);
        };
        p.getRoleView = function (role) {
            var self = this;
            for (var i = 0; i < self._roleCon.numChildren; ++i) {
                var roleView = self._roleCon.getChildAt(i);
                if (roleView instanceof g_fight.RoleView && roleView.role == role) {
                    return roleView;
                }
            }
            return null;
        };
        p.getGiftView = function (role) {
            var self = this;
            for (var i = 0; i < self._roleCon.numChildren; ++i) {
                var giftView = self._roleCon.getChildAt(i);
                if (giftView instanceof g_fight.GiftView && giftView.gift.role == role) {
                    return giftView;
                }
            }
            return null;
        };
        p.getRoleNameView = function (role) {
            var self = this;
            for (var i = 0; i < self._effectCon.numChildren; ++i) {
                var roleNameView = self._effectCon.getChildAt(i);
                if (roleNameView instanceof g_fight.RoleNameView && roleNameView.role == role) {
                    return roleNameView;
                }
            }
            return null;
        };
        p.getRoleShadowView = function (role) {
            var self = this;
            for (var i = 0; i < self._shadowCon.numChildren; ++i) {
                var roleShadowView = self._shadowCon.getChildAt(i);
                if (roleShadowView instanceof g_fight.RoleShadowView && roleShadowView.role == role) {
                    return roleShadowView;
                }
            }
            return null;
        };
        p.onMainRolePosChange = function (e) {
            if (e === void 0) { e = null; }
            var self = this;
            self.moveToCenter(self.mainRole.x, self.mainRole.y);
            if (self.mainRole.isOnNodeCenter()) {
                for (var i = 0; i < self._itemCon.numChildren; ++i) {
                    var lootView = self._itemCon.getChildAt(i);
                    if (lootView.x == self.mainRole.x && lootView.y == self.mainRole.y) {
                        lootView.pickUp();
                        self.checkNextWave(true);
                    }
                }
            }
        };
        p.onMedalChange = function () {
            var self = this;
            if (self.mainRole)
                self.mainRole.medalId = gd.medalCtrl.getMedalTitle();
        };
        p.onEnterFrame = function (e) {
            var self = this;
            for (var i = 0; i < self._allRoles.length; ++i) {
                role = self._allRoles[i];
                if (role.gift) {
                    role.gift.exeAI();
                }
            }
            var date = new Date();
            if (self.lastExeAITime == 0) {
                self.lastExeAITime = date.getTime();
            }
            else {
                //mo.showMsg("--------------- "+(self.lastExeAITime - date.getTime()));
                if (date.getTime() - self.lastExeAITime < g_fight.MINI_SPACE_TIME) {
                    return;
                }
                else {
                    //self.fightDateLastTime += MINI_SPACE_TIME*Math.round((date.getTime()-self.lastExeAITime)/MINI_SPACE_TIME);
                    //self.lastExeAITime = date.getTime();
                    self.lastExeAITime = self.lastExeAITime + g_fight.MINI_SPACE_TIME;
                }
            }
            if (Date.newDate().getTime() - self.fightStartTime >= self._pvpTimeout * 1000) {
                if (self._pvpType == gc.c_prop.fightTypeKey.arena) {
                    self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                    var fightData = {};
                    fightData[gc.dsConsts.FightData.isWin] = false;
                    fightData[gc.dsConsts.FightData.star] = 0;
                    fightData[gc.dsConsts.FightData.vData] = {};
                    gd.arenaCtrl.fightEnd(false, fightData, function (fightResult) {
                        g_fight.FightArenaWinOrFail.showCallback({ isWin: false, isTimeout: true, fightResult: fightResult, callback: function () {
                                gd.fightCtrl.isSpFighting = false;
                                self.exitMap(self.mapID, function () {
                                    self.enterMap(self.mapID, false);
                                    self.checkNextWave();
                                    if (mo.moduleMgr.curModule.name == g_consts.moduleId.fight) {
                                        mo.moduleMgr.runModule(g_consts.moduleId.home, { subModuleId: g_consts.HS_SUBMID_ARENA });
                                    }
                                    self._pvpType = -1;
                                });
                            }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                        });
                    }, self);
                    return;
                }
                else if (self._pvpType == gc.c_prop.fightTypeKey.pk || self._pvpType == gc.c_prop.fightTypeKey.rankPk) {
                    self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                    var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
                    var mapID = copyInfo[gc.t_copy_displayID];
                    gd.pkOutCtrl.end(false, {}, function (fightResult) {
                        g_fight.FightPKWinOrFail.showCallback({ isWin: false, isTimeout: true, fightResult: fightResult, callback: function () {
                                gd.fightCtrl.isSpFighting = false;
                                self.exitMap(mapID, function () {
                                    self.enterMap(mapID, true);
                                    self.checkNextWave();
                                    if (self._pvpType == gc.c_prop.fightTypeKey.rankPk) {
                                        gd.pkOutCtrl.getRankList(function (data) {
                                            g_fight.PVPRank.create().setData({ rankData: data }).show();
                                        }, self);
                                    }
                                    self._pvpType = -1;
                                });
                            }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                        });
                    }, self);
                    return;
                }
                else if (self._pvpType == gc.c_prop.fightTypeKey.coffers) {
                    gd.coffersCtrl.fightEnd(false, function (fightResult) {
                        g_fight.FightCoffersWinOrFail.showCallback({ isWin: false, isTimeout: true, fightResult: fightResult, callback: function () {
                                gd.fightCtrl.isSpFighting = false;
                                self.loots = [];
                                self.exitMap(mapID, function () {
                                    self.enterMap(mapID, true);
                                    self.checkNextWave();
                                    self._pvpType = -1;
                                });
                            },
                            target: self,
                            begTime: Date.newDate().getTime() + 10 * 1000
                        });
                    }, self);
                }
            }
            var role;
            for (var i = 0; i < self._allRoles.length; ++i) {
                role = self._allRoles[i];
                if (role == self.mainRole) {
                    if (!self._isPicking) {
                        role.exeAI();
                    }
                    else {
                        role.curState = g_fight.Role.STATE_MOVE_TO_AIM;
                        if (role.action == g_fight.ROLE_ACTION_STAND && self._itemCon.numChildren > 0) {
                            self._isPicking = true;
                            var lootView = self._itemCon.getChildAt(self._itemCon.numChildren - 1);
                            self.mainRole.moveTo(lootView.row, lootView.col);
                        }
                    }
                }
                else {
                    role.exeAI();
                }
            }
            for (var i = 0; i < self._itemCon.numChildren; ++i) {
                var lootView = self._itemCon.getChildAt(i);
                if (lootView.canAutoPickUp()) {
                    lootView.pickUp();
                    i--;
                }
            }
            var childs = [];
            for (var i = 0; i < self._roleCon.numChildren; ++i) {
                childs.push(self._roleCon.getChildAt(i));
            }
            childs.sort(function (child1, child2) {
                return child1.y - child2.y;
            });
            for (var i = 0; i < childs.length; ++i) {
                self._roleCon.setChildIndex(childs[i], i);
            }
        };
        p.myRoles = function () {
            return this._selfRoles;
        };
        p.getHpInfos = function () {
            var self = this;
            var hpNow = 0;
            var hpAll = 0;
            var mpNow = 0;
            var mpAll = 0;
            for (var i = 0; i < self._selfRoles.length; i++) {
                var role = self._selfRoles[i];
                hpNow += role.hp;
                hpAll += role.roleInfo.maxHpFight;
                mpNow += role.mp;
                mpAll += role.roleInfo.maxHp2Fight;
            }
            return [hpNow, hpAll, mpNow, mpAll];
        };
        p.onMyRoleHpChange = function (e) {
            this.dispatchEvent(new egret.Event(g_fight.MAP_EVENT_HPMP_CHANGE));
        };
        return MapView;
    })(egret.Sprite);
    g_fight.MapView = MapView;
    egret.registerClass(MapView,"g_fight.MapView");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_fight;
(function (g_fight) {
    var PVPBattle = (function (_super) {
        __extends(PVPBattle, _super);
        function PVPBattle() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PVPBattle,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
            var self = this;
            self.ico_avatar.setData({ clothesID: null, weaponID: null, wingID: null, sex: 0, isKing: false });
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.pkUser = self.data.pkTarget || self.data.enemy;
            self.ico_title.source = self.data.pkTarget ? "tit_txt_g_funjin" : "tit_txt_g_wdcr";
        };
        p.onEnter = function () {
            var self = this;
            _super.prototype.onEnter.call(this);
            self.invalidateSkinState();
            var name, jb, exp, level, pkValue, vip, userId;
            var pkUser = self.pkUser;
            name = pkUser[gc.dsConsts.PkOutUserData.name];
            jb = pkUser[gc.dsConsts.PkOutUserData.gold];
            exp = pkUser[gc.dsConsts.PkOutUserData.expc];
            level = pkUser[gc.dsConsts.PkOutUserData.lvl];
            pkValue = pkUser[gc.dsConsts.PkOutUserData.pkValue];
            vip = pkUser[gc.dsConsts.PkOutUserData.vip];
            userId = pkUser[gc.dsConsts.PkOutUserData.userId];
            var nameTxt = self.getNameTxt(name);
            self.label_name.text = nameTxt;
            self.label_jb.text = jb;
            self.label_exp.text = exp;
            self.label_level.text = mo.STR.format("lv.%s", level);
            var pkValue = pkValue;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueYellow = gameCfg[5];
            var valueRed = gameCfg[6];
            if (pkValue >= valueRed) {
                self.label_name.textColor = 0xff0000;
                self.label_name.text = self.label_name.text;
            }
            else if (pkValue >= valueYellow) {
                self.label_name.textColor = 0xfff000;
                self.label_name.text = self.label_name.text;
            }
            else {
                self.label_name.textColor = 0xffffff;
                self.label_name.text = self.label_name.text;
            }
            var guildName = pkUser[gc.dsConsts.PkOutUserData.guildName] ? pkUser[gc.dsConsts.PkOutUserData.guildName] : "";
            self.label_guild.text = guildName == "" ? "" : mo.STR.format("[%s]", guildName);
            var itemId = 78;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            self.ico_item.source = resHelper.getItemIconPath(itemId);
            self.label_item.text = itemInfo[gc.t_item_name];
            //self.label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
            if (vip > 0) {
                self.label_vipLv.text = vip.toString();
                self.label_name.parent.addElementAt(self.grp_vip, 0);
            }
            else {
                if (self.grp_vip.parent)
                    self.grp_vip.parent.removeElement(self.grp_vip);
            }
            gd.heroCtrl.getHeroDisplayByTempId(userId, 0, function (data) {
                self.ico_avatar.setData({ clothesID: data[0], weaponID: data[1], wingID: data[2], sex: data[3], isKing: data[4] });
            }, this);
        };
        p.getCurrentSkinState = function () {
            var self = this;
            self.pkUser = self.data.pkTarget || self.data.enemy;
            var pkValue = self.pkUser[gc.dsConsts.PkOutUserData.pkValue];
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueYellow = gameCfg[5];
            var valueRed = gameCfg[6];
            if (pkValue >= valueRed) {
                return "red";
            }
            else if (pkValue >= valueYellow) {
                return "white";
            }
            else {
                return "white";
            }
        };
        p._tap_btn_attack = function () {
            var self = this;
            var name = self.pkUser[gc.dsConsts.PkOutUserData.name];
            var pkValue = gd.pkOutCtrl.getPkValue();
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueRed = gameCfg[6];
            if (pkValue < valueRed && pkValue + gameCfg[1] >= valueRed) {
                mo.showMsg(gc.id_c_msgCode.nameToRedIfGo, function () {
                    self.startPvp(name);
                });
            }
            else {
                self.startPvp(name);
            }
        };
        p.startPvp = function (name) {
            var self = this;
            gd.pkOutCtrl.start(this.pkUser[gc.dsConsts.PkOutUserData.userId], gc.c_prop.fightTypeKey.pk, self.data.pkTarget ? 0 : 1, function (pkTargets) {
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, pkTargets, gc.c_prop.fightTypeKey.pk, name);
            }, this);
            self.close();
        };
        p.getNameTxt = function (name) {
            var addStr = "";
            var nameArr = name.split('.');
            if (nameArr && nameArr.length > 0) {
                addStr = nameArr[0];
            }
            return addStr + ".神秘玩家";
        };
        return PVPBattle;
    })(mo.gui.Dlg);
    g_fight.PVPBattle = PVPBattle;
    egret.registerClass(PVPBattle,"g_fight.PVPBattle");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_fight;
(function (g_fight) {
    var PVPLogItem = (function (_super) {
        __extends(PVPLogItem, _super);
        function PVPLogItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PVPLogItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ico_chou.visible = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var name = self.data[gc.dsConsts.ArenaRecordEntity.enemyName];
            var time = self.data[gc.dsConsts.ArenaRecordEntity.fightTime];
            var fightData = self.data[gc.dsConsts.ArenaRecordEntity.fightData];
            var isWin = self.data[gc.dsConsts.ArenaRecordEntity.isWin];
            var isAttack = self.data[gc.dsConsts.ArenaRecordEntity.enemyId] != self.data[gc.dsConsts.ArenaRecordEntity.userId];
            self.ico_chou.visible = self.data[gc.dsConsts.ArenaRecordEntity.isRevenge];
            if (!isAttack) {
                self.ico_pkState.source = isWin ? "ico_pvp_win" : "ico_pvp_fail";
            }
            else {
                self.ico_pkState.source = isWin ? "ico_pvp_atk_win" : "ico_pvp_atk_fail";
            }
            self.label_time.text = mo.getBetweenTimeString(Date.newDate(), Date.newDate(time));
            self.label_name.text = name;
            self.label_killValue.text = fightData.killValue > 0 ? "+" + fightData.killValue : fightData.killValue;
            self.label_exp.text = fightData.expc;
            self.label_jb.text = fightData.gold;
            self.label_gain.visible = self.label_lose.visible = false;
            var items = utils.itemObj2ObjArr(fightData.items);
            if (isWin && items.length > 0) {
                self.label_gain.visible = true;
            }
            if (!isWin && items.length > 0) {
                self.label_lose.visible = true;
            }
            self.list_items.dataProvider = new egret.gui.ArrayCollection(items);
        };
        return PVPLogItem;
    })(mo.gui.ItemRenderer);
    g_fight.PVPLogItem = PVPLogItem;
    egret.registerClass(PVPLogItem,"g_fight.PVPLogItem");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_fight;
(function (g_fight) {
    var PVPLog = (function (_super) {
        __extends(PVPLog, _super);
        function PVPLog() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PVPLog,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_log = g_fight.PVPLogItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
        };
        p.onEnter = function () {
            var self = this;
            _super.prototype.onEnter.call(this);
        };
        p._data_list_log = function () {
            var self = this;
            return self.data.logData;
        };
        return PVPLog;
    })(mo.gui.Dlg);
    g_fight.PVPLog = PVPLog;
    egret.registerClass(PVPLog,"g_fight.PVPLog");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/23.
 */
var g_fight;
(function (g_fight) {
    var FightEnemyCell = (function (_super) {
        __extends(FightEnemyCell, _super);
        function FightEnemyCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightEnemyCell,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var resName = uiHelper.getHeroIcon(self.data[gc.dsConsts.PkOutUserData.iconId], 0);
            mo.R.loadTo('FightScene', resName, function () { });
            self.ico_role.source = resName;
        };
        p.onTap = function (e) {
            var self = this;
            g_fight.PVPBattle.create().setData({ pkTarget: self.data }).show();
        };
        return FightEnemyCell;
    })(mo.gui.Comp);
    g_fight.FightEnemyCell = FightEnemyCell;
    egret.registerClass(FightEnemyCell,"g_fight.FightEnemyCell");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_fight;
(function (g_fight) {
    var PVPRankItem = (function (_super) {
        __extends(PVPRankItem, _super);
        function PVPRankItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PVPRankItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var rank = data[gc.dsConsts.Rank.rank];
            var awards = gd.pkOutCtrl.getRankAward(rank);
            var rankStrs = ["1st", "2nd", "3rd"];
            self.label_name.text = data[gc.dsConsts.Rank.name];
            self.label_name.textColor = uiHelper.getUserNameColor(data[gc.dsConsts.Rank.pkValue]);
            self.label_lvl.text = data[gc.dsConsts.Rank.lvl].toString();
            self.label_combat.text = data[gc.dsConsts.Rank.combat].toString();
            self.label_killValue.text = data[gc.dsConsts.Rank.killValue].toString();
            var guildName = data[gc.dsConsts.Rank.guildName] ? data[gc.dsConsts.Rank.guildName] : "";
            self.label_guild.text = guildName == "" ? "" : mo.STR.format("[%s]", guildName);
            if (rank <= 3) {
                self.ico_rank.source = "ico_arena_" + rankStrs[rank - 1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
                if (gd.userCtrl.getId() == data[gc.dsConsts.Rank.userId] || gd.pkOutCtrl.isTodayRankWin(data[gc.dsConsts.Rank.userId])) {
                    self.btn_challenge.visible = false;
                }
                else {
                    self.btn_challenge.visible = true;
                }
            }
            else {
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
                self.btn_challenge.visible = false;
            }
            self.ico_head.setData({ icoId: data[gc.dsConsts.Rank.iconId], vip: data[gc.dsConsts.Rank.vip] });
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, awards[1]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.starStone, awards[0]);
        };
        p._tap_btn_challenge = function () {
            var self = this;
            var data = self.data;
            gd.pkOutCtrl.start(data[gc.dsConsts.Rank.userId], gc.c_prop.fightTypeKey.rankPk, 0, function (pkTargets) {
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, pkTargets, gc.c_prop.fightTypeKey.rankPk, data[gc.dsConsts.Rank.name]);
                self.delegate.close();
            }, self);
        };
        return PVPRankItem;
    })(mo.gui.ItemRenderer);
    g_fight.PVPRankItem = PVPRankItem;
    egret.registerClass(PVPRankItem,"g_fight.PVPRankItem");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_fight;
(function (g_fight) {
    var PVPSelfInfo = (function (_super) {
        __extends(PVPSelfInfo, _super);
        function PVPSelfInfo() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PVPSelfInfo,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.PkOutCtrl, gc.dsConsts.PkOutEntity.pkValue.toString(), self.reset);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self.checkRedPoint);
        };
        p.checkRedPoint = function () {
            this.ico_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.pkout1);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ico_role.source = uiHelper.getHeroIcon(gd.userCtrl.getIconId(), 0);
            self.checkRedPoint();
            this.bar_pk.labelFunction = function (a, b) {
                return "";
            };
            this.bar_pk.value = 0;
            var dur = this.bar_pk.slideDuration;
            this.bar_pk.slideDuration = 0;
            this.bar_pk.validateDisplayList();
            this.bar_pk.slideDuration = dur;
            self.reset();
        };
        p._tap_btn_rank = function () {
            gd.pkOutCtrl.getRankList(function (data) {
                g_fight.PVPRank.create().setData({ rankData: data }).show();
            }, this);
        };
        p._tap_btn_log = function () {
            gd.pkOutCtrl.getPkRecordList(function (data) {
                g_fight.PVPLog.create().setData({ logData: data }).show();
            }, this);
            gd.pkOutCtrl.setNewDeal(false);
        };
        p.onEnter = function () {
            var self = this;
            _super.prototype.onEnter.call(this);
            self.reset();
        };
        p.reset = function () {
            var self = this;
            var pkValue = gd.pkOutCtrl.getPkValue();
            var myKillValue = gd.pkOutCtrl.getKillValue();
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueYellow = gameCfg[5];
            var valueRed = gameCfg[6];
            if (pkValue >= valueRed) {
                self.ico_light.x = 306;
                self.label_name.textColor = self.label_pkAddDesc.textColor = 0xff0000;
                self.label_pkAddDesc.text = "红名会被掠夺金币和背包物品";
            }
            else if (pkValue >= valueYellow) {
                self.ico_light.x = 203;
                self.label_name.textColor = self.label_pkAddDesc.textColor = 0xfff000;
                self.label_pkAddDesc.text = "黄名保护：被击杀不受损失。";
            }
            else {
                self.ico_light.x = 54;
                self.label_name.textColor = self.label_pkAddDesc.textColor = 0xffffff;
                self.label_pkAddDesc.text = "白名保护：被击杀不受损失。";
            }
            self.label_name.text = gd.userCtrl.getName();
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkCfg1);
            self.label_noExpTip.text = mo.STR.format("每天主动寻找对手%s次后将不再获得经验奖励", gameCfg[0]);
            self.label_myKillValue.text = myKillValue.toString();
            self.label_pk.text = pkValue.toString();
            self.label_pkYellow.text = valueYellow.toString();
            self.label_pkRed.text = valueRed.toString();
            self.bar_pk.maximum = 100;
            self.bar_pk.value = pkValue;
            if (self.grp_pk) {
                if (pkValue <= self.bar_pk.maximum) {
                    self.grp_pk.x = 65 + (self.bar_pk.width) * (self.bar_pk.value / self.bar_pk.maximum);
                }
                else {
                    self.grp_pk.x = 365 + 40;
                }
            }
        };
        p._tap_btn_help = function () {
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkCfg1);
            var gameCfg2 = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var param1 = gameCfg[0];
            var param2 = gameCfg2[0];
            var param3 = gameCfg2[11];
            g_base.BaseShowTip.create().setData({ id: 2, param1: param1, param2: param2, param3: param3 }).show();
        };
        p._tap_btn_clearRedPoint = function () {
            var self = this;
            gd.pkOutCtrl.clearPkValue(function () {
                self.reset();
            }, self);
        };
        return PVPSelfInfo;
    })(mo.gui.Layer);
    g_fight.PVPSelfInfo = PVPSelfInfo;
    egret.registerClass(PVPSelfInfo,"g_fight.PVPSelfInfo");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/23.
 */
var g_fight;
(function (g_fight) {
    var PvpRankRewardCell = (function (_super) {
        __extends(PvpRankRewardCell, _super);
        function PvpRankRewardCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PvpRankRewardCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (self.data[gc.c_pvpRankReward_id] == null) {
                return;
            }
            if (self.data[gc.c_pvpRankReward_id] > 20) {
                self.label_rank.size = 18;
            }
            self.label_rank.text = self.data[gc.c_pvpRankReward_name];
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, self.data[gc.c_pvpRankReward_gold]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.starStone, self.data[gc.c_pvpRankReward_starStone]);
        };
        return PvpRankRewardCell;
    })(mo.gui.ItemRenderer);
    g_fight.PvpRankRewardCell = PvpRankRewardCell;
    egret.registerClass(PvpRankRewardCell,"g_fight.PvpRankRewardCell");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/10/23.
 */
var g_fight;
(function (g_fight) {
    var PvpRankReward = (function (_super) {
        __extends(PvpRankReward, _super);
        function PvpRankReward() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PvpRankReward,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
        };
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_fight.PvpRankRewardCell;
        };
        p._data_list_items = function () {
            var self = this;
            var pvpInfos = mo.getJSONWithFileName(gc.cfg_c_pvpRankReward);
            var pvpAry = [];
            for (var key in pvpInfos) {
                pvpAry.push(pvpInfos[key]);
            }
            return pvpAry;
        };
        return PvpRankReward;
    })(mo.gui.Dlg);
    g_fight.PvpRankReward = PvpRankReward;
    egret.registerClass(PvpRankReward,"g_fight.PvpRankReward");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/9/24.
 */
var g_fight;
(function (g_fight) {
    var PVPRank = (function (_super) {
        __extends(PVPRank, _super);
        function PVPRank() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PVPRank,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            this.outsideClosable = true;
            self.checkRedPoint();
        };
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_rank = g_fight.PVPRankItem;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), this.checkRedPoint);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var myKillValue = gd.pkOutCtrl.getKillValue();
            self.label_myKillValue.text = myKillValue.toString();
            gd.pkOutCtrl.getMyRank(function (myRank) {
                self.label_myRank.text = myRank.toString();
                var awards = gd.pkOutCtrl.getRankAward(myRank);
                uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, awards[1]);
                uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.starStone, awards[0]);
            }, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p.checkRedPoint = function () {
            this.ico_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.rankPk);
        };
        p._data_list_rank = function () {
            var self = this;
            return self.data.rankData;
        };
        p._tap_btn_info = function () {
            var self = this;
            g_fight.PvpRankReward.create().show();
        };
        p._tap_btn_challengeLog = function () {
            gd.pkOutCtrl.getRankPkRecordList(function (data) {
                g_fight.ChallengeLog.create().setData({ logData: data }).show();
            }, this);
            gd.pkOutCtrl.setRankPkNewDeal(false);
        };
        return PVPRank;
    })(g_base.CloseInfoDlg);
    g_fight.PVPRank = PVPRank;
    egret.registerClass(PVPRank,"g_fight.PVPRank");
})(g_fight || (g_fight = {}));

/**
 * Created by lihex on 11/4/15.
 */
var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var FightProfitDlg = (function (_super) {
        __extends(FightProfitDlg, _super);
        function FightProfitDlg() {
            _super.apply(this, arguments);
            this.outsideClosable = true;
        }
        var d = __define,c=FightProfitDlg,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.expc.toString(), self._updateExp);
            self.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_COPY_CHANGE, self._updateProfit);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            this._updateExp();
            this._updateProfit();
            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.expBox);
            var openLv = openInfo[gc.c_open_lvlRequired];
            if (gd.userCtrl.getLvl() >= openLv) {
                var entity = gd.demonLotusCtrl.getData();
                var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
                var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
                var advLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
                var demonLotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, advLv);
                self.label_curExpLv.text = lv.toString();
                self.label_expTotal.text = utils.formatByWan(gd.demonLotusCtrl.calNowGet() >> 0, 1) + "/" + utils.formatByWan(lvInfo[gc.c_lvl_storeLimit] + demonLotusInfo[gc.c_demonLotus_expcAccLimit], 1);
                self.label_expPer.text = utils.formatByWan(lvInfo[gc.c_lvl_expOutput] * 60, 0) + "/分钟";
                self.grp_expOpen.visible = true;
                self.grp_expNoOpen.visible = false;
            }
            else {
                self.label_expOpenLv.text = openLv;
                self.grp_expOpen.visible = false;
                self.grp_expNoOpen.visible = true;
            }
        };
        p._updateProfit = function () {
            var self = this;
            var profit = gd.copyCtrl.getNormalCopyProfit();
            var expRate = gd.fightCtrl.getExpcRate();
            var expRateStr = "";
            if (expRate > 1) {
                expRateStr = "[ubb color=green](×" + expRate + ")[/ubb]";
            }
            self.label_profit_gold.text = utils.formatByWan(profit[0]);
            self.label_profit_exp.text = utils.formatByWan(profit[7] + expRateStr);
        };
        p._updateExp = function () {
            var self = this;
            var expRate = gd.fightCtrl.getExpcRate();
            var profit = gd.copyCtrl.getNormalCopyProfit();
            var maxLvlStr = "人物已达最高等级";
            var upStr = "人物升级至[ubb color=yellow]Lv.%s[/ubb]还需经验[ubb color=yellow]%s[/ubb]，约需要[ubb color=yellow]%s[/ubb]";
            var str = "杀怪统计：%s波怪/小时 \n每小时掉落统计：\n    装备：%s件[/br]";
            var boxStr = "";
            var boxItems = profit[8];
            var keyItems = profit[9];
            var needHour = profit[6];
            if (needHour != "--") {
                needHour = utils.formatHour(needHour / expRate);
            }
            else {
                needHour += "小时";
            }
            if (boxItems.length > 0) {
                for (var i = 0; i < boxItems.length; ++i) {
                    var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, boxItems[i][0]);
                    boxStr += "    " + itemInfo[gc.t_item_name] + ": 约" + boxItems[i][1] + "个";
                    if (keyItems[i]) {
                        var itemKeyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, keyItems[i][0]);
                        boxStr += "\t\t" + itemKeyInfo[gc.t_item_name] + ": 约" + keyItems[i][1] + "个";
                    }
                    boxStr += "\n";
                }
                str += boxStr;
            }
            if (gd.userCtrl.isMaxLvl()) {
                self.label_tips.text = mo.STR.format(str, profit[2], profit[3]) + maxLvlStr;
            }
            else {
                str += upStr;
                self.label_tips.text = mo.STR.format(str, profit[2], profit[3], profit[4], utils.formatByWan(profit[5]), needHour);
            }
            self.label_noExp.text = mo.STR.format("若人物等级高于小怪等级%s级，则打小怪不获得任何收益", mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.lootLimit));
        };
        p._tap_btn_get = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.lotus);
        };
        return FightProfitDlg;
    })(mo.gui.Dlg);
    g_fight.FightProfitDlg = FightProfitDlg;
    egret.registerClass(FightProfitDlg,"g_fight.FightProfitDlg");
})(g_fight || (g_fight = {}));

/**
 * Created by lihex on 11/4/15.
 */
var g_fight;
(function (g_fight) {
    /**
     *
     * @author
     *
     */
    var FightProfit = (function (_super) {
        __extends(FightProfit, _super);
        function FightProfit() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightProfit,p=c.prototype;
        //label_profit_gold:mo.gui.Label;
        //label_profit_exp:mo.gui.Label;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            //this.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_COPY_CHANGE, self._updateProfit);
        };
        /*
        _updateProfit(){
            var self = this;
            var profit = gd.copyCtrl.getNormalCopyProfit();
            self.label_profit_gold.text = utils.formatByWan(profit[0]);
            self.label_profit_exp.text = utils.formatByWan(profit[7]);
        }*/
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            //self._updateProfit();
        };
        p.setVisible = function (value) {
            var self = this;
            self.img_detail.visible = value;
        };
        p._tap_img_detail = function () {
            var self = this;
            var cfg_c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var lvl = gd.userCtrl.getLvl();
            var openLvl = cfg_c_open[gc.id_c_open.expBox][gc.c_open_lvlRequired];
            if (lvl < openLvl) {
                g_fight.FightProfitDlg.create().show();
            }
            else {
                gd.demonLotusCtrl.getInfo(function (data) {
                    g_fight.FightProfitDlg.create().show();
                }, self);
            }
        };
        return FightProfit;
    })(mo.gui.Layer);
    g_fight.FightProfit = FightProfit;
    egret.registerClass(FightProfit,"g_fight.FightProfit");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/11/26.
 */
var g_fight;
(function (g_fight) {
    var EnemyList = (function (_super) {
        __extends(EnemyList, _super);
        function EnemyList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EnemyList,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
        };
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._helpDataId = 15;
            self._Item_list_enemies = g_fight.EnemyItem;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.ico_none.visible = !self.data.list || self.data.list.length == 0;
        };
        p._data_list_enemies = function () {
            var self = this;
            return self.data.list;
        };
        return EnemyList;
    })(g_base.CloseInfoDlg);
    g_fight.EnemyList = EnemyList;
    egret.registerClass(EnemyList,"g_fight.EnemyList");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/11/26.
 */
var g_fight;
(function (g_fight) {
    var EnemyItem = (function (_super) {
        __extends(EnemyItem, _super);
        function EnemyItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=EnemyItem,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            if (data.hasOwnProperty("label"))
                return;
            self.label_name.text = data[gc.dsConsts.PkOutUserData.name];
            self.label_name.textColor = uiHelper.getUserNameColor(data[gc.dsConsts.PkOutUserData.pkValue]);
            self.label_lv.text = mo.STR.format("Lv.%s", data[gc.dsConsts.PkOutUserData.lvl]);
            self.label_combat.text = mo.STR.format("战斗力：%s", data[gc.dsConsts.PkOutUserData.combat]);
            self.ico_head.setData({ icoId: data[gc.dsConsts.PkOutUserData.iconId], vip: data[gc.dsConsts.PkOutUserData.vip] });
            var guildName = data[gc.dsConsts.PkOutUserData.guildName] ? data[gc.dsConsts.PkOutUserData.guildName] : "";
            self.label_guild.text = guildName == "" ? "" : mo.STR.format("[%s]", guildName);
        };
        p._tap_btn_fight = function () {
            var self = this;
            //gd.arenaCtrl.fightStart(self.data[gc.dsConsts.PkOutUserData.rank], function(pkTargets:Array<gd.HeroEntityCtrl>){
            //    var myList = gd.heroCtrl.getList();
            //    gd.fightCtrl.startPvpFight(myList, pkTargets, gc.c_prop.fightTypeKey.arena);
            //},self);
            g_fight.PVPBattle.create().setData({ enemy: self.data }).show();
            self.delegate.close();
        };
        return EnemyItem;
    })(mo.gui.ItemRenderer);
    g_fight.EnemyItem = EnemyItem;
    egret.registerClass(EnemyItem,"g_fight.EnemyItem");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/11/20.
 */
/**
 * Created by Administrator on 2015/9/24.
 */
var g_fight;
(function (g_fight) {
    var ChallengeLogItem = (function (_super) {
        __extends(ChallengeLogItem, _super);
        function ChallengeLogItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ChallengeLogItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var name = self.data[gc.dsConsts.ArenaRecordEntity.enemyName];
            var time = self.data[gc.dsConsts.ArenaRecordEntity.fightTime];
            var fightData = self.data[gc.dsConsts.ArenaRecordEntity.fightData];
            var isWin = self.data[gc.dsConsts.ArenaRecordEntity.isWin];
            var isAttack = self.data[gc.dsConsts.ArenaRecordEntity.enemyId] != self.data[gc.dsConsts.ArenaRecordEntity.userId];
            if (!isAttack) {
                self.ico_pkState.source = isWin ? "ico_pvp_win" : "ico_pvp_fail";
            }
            else {
                self.ico_pkState.source = isWin ? "ico_pvp_atk_win" : "ico_pvp_atk_fail";
            }
            self.label_time.text = mo.getBetweenTimeString(Date.newDate(), Date.newDate(time));
            self.label_name.text = name;
            self.label_killValue.text = fightData.killValue > 0 ? "+" + fightData.killValue : fightData.killValue;
            self.label_exp.text = fightData.expc;
            self.label_jb.text = fightData.gold;
            self.label_gain.visible = self.label_lose.visible = false;
            var items = utils.itemObj2ObjArr(fightData.items);
            if (isWin && items.length > 0) {
                self.label_gain.visible = true;
            }
            if (!isWin && items.length > 0) {
                self.label_lose.visible = true;
            }
            self.list_items.dataProvider = new egret.gui.ArrayCollection(items);
        };
        return ChallengeLogItem;
    })(mo.gui.ItemRenderer);
    g_fight.ChallengeLogItem = ChallengeLogItem;
    egret.registerClass(ChallengeLogItem,"g_fight.ChallengeLogItem");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/11/20.
 */
/**
 * Created by Administrator on 2015/9/24.
 */
var g_fight;
(function (g_fight) {
    var ChallengeLog = (function (_super) {
        __extends(ChallengeLog, _super);
        function ChallengeLog() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ChallengeLog,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_log = g_fight.ChallengeLogItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            this.outsideClosable = true;
        };
        p.onEnter = function () {
            var self = this;
            _super.prototype.onEnter.call(this);
        };
        p._data_list_log = function () {
            var self = this;
            return self.data.logData;
        };
        return ChallengeLog;
    })(mo.gui.Dlg);
    g_fight.ChallengeLog = ChallengeLog;
    egret.registerClass(ChallengeLog,"g_fight.ChallengeLog");
})(g_fight || (g_fight = {}));

/**
 * Created by lihex on 3/9/16.
 */
var g_fight;
(function (g_fight) {
    var WBossWin = (function (_super) {
        __extends(WBossWin, _super);
        function WBossWin() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WBossWin,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var result = self.data.result;
            var fec = self.data.fec;
            var bossId = result[gc.dsConsts.BossResult.bossId];
            var ranRewardItems = result[gc.dsConsts.BossResult.items];
            //排名
            var rank = result[gc.dsConsts.BossResult.myHurtRank];
            if (rank <= 3) {
                var rankStrs = ["1st", "2nd", "3rd"];
                self.ico_rank.source = "ico_arena_" + rankStrs[rank - 1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }
            else {
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }
            //排行奖励
            uiHelper.setItemsGrp(self.grp_rankReward, utils.itemObj2ObjArr(ranRewardItems));
            //击杀奖励
            var killUserName = result[gc.dsConsts.BossResult.killUserName];
            var lastKillerIsMe = killUserName == gd.userCtrl.getName();
            self.grp_killReward.visible = lastKillerIsMe;
            self.img_killReward.visible = lastKillerIsMe;
            if (lastKillerIsMe) {
                var boss_data = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
                var c_last = boss_data[gc.c_bossWorld_lastShotAward];
                c_last.push(boss_data[gc.c_bossWorld_treasureAward]);
                uiHelper.setItemsGrp(self.grp_killReward, utils.kvArrItems2ObjArr(c_last));
            }
            //累计伤害
            self.label_damage.text = result[gc.dsConsts.BossResult.totalHurt];
            self.label_first.text = result[gc.dsConsts.BossResult.firstHurtName];
            self.label_last.text = result[gc.dsConsts.BossResult.killUserName];
            self.label_time.text = mo.getTimeStr(result[gc.dsConsts.BossResult.killTotalTime] * 1000);
        };
        return WBossWin;
    })(g_fight.FightDlg);
    g_fight.WBossWin = WBossWin;
    egret.registerClass(WBossWin,"g_fight.WBossWin");
})(g_fight || (g_fight = {}));

/**
 * Created by lihex on 3/9/16.
 */
var g_fight;
(function (g_fight) {
    var WBossFail = (function (_super) {
        __extends(WBossFail, _super);
        function WBossFail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=WBossFail,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var result = self.data.result;
            var fec = self.data.fec;
            var rank = result[gc.dsConsts.BossResult.myHurtRank];
            self.label_rank.text = rank;
            //失败奖励
            var rewardItems = result[gc.dsConsts.BossResult.items];
            uiHelper.setItemsGrp(self.grp_reward, utils.itemObj2ObjArr(rewardItems));
            self.label_damage.text = result[gc.dsConsts.BossResult.totalHurt];
            self.label_first.text = result[gc.dsConsts.BossResult.firstHurtName];
            self.label_leftHp.text = utils.formatByWan(fec.getCurHp());
        };
        return WBossFail;
    })(g_fight.FightDlg);
    g_fight.WBossFail = WBossFail;
    egret.registerClass(WBossFail,"g_fight.WBossFail");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/12/29.
 */
var g_fight;
(function (g_fight) {
    var GuildBossWin = (function (_super) {
        __extends(GuildBossWin, _super);
        function GuildBossWin() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossWin,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ico_item.label_text.visible = false;
            self.ico_item.onClick(function () {
                g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
            }, self.ico_item);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var result = self.data.result;
            var fec = self.data.fec;
            var bossId = result[gc.dsConsts.BossResult.bossId];
            var rank = result[gc.dsConsts.BossResult.myHurtRank];
            if (rank <= 3) {
                var rankStrs = ["1st", "2nd", "3rd"];
                self.ico_rank.source = "ico_arena_" + rankStrs[rank - 1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }
            else {
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }
            var bossParamInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
            var itemAry;
            if (rank == 1) {
                itemAry = bossParamInfo[gc.c_bossParameter_rankAward1][0];
            }
            else if (rank >= 2 && rank <= 5) {
                itemAry = bossParamInfo[gc.c_bossParameter_rankAward2][0];
            }
            else if (rank >= 6 && rank <= 10) {
                itemAry = bossParamInfo[gc.c_bossParameter_rankAward3][0];
            }
            if (itemAry) {
                self.ico_item.visible = true;
                self.ico_item.setData({ itemId: itemAry[0], count: itemAry[1] });
            }
            else {
                self.ico_item.visible = false;
            }
            self.label_damage.text = result[gc.dsConsts.BossResult.totalHurt];
            self.label_reward.text = result[gc.dsConsts.BossResult.hurtGold];
            self.label_time.text = mo.getTimeStr(result[gc.dsConsts.BossResult.killTotalTime] * 1000);
            self.label_first.text = result[gc.dsConsts.BossResult.firstHurtName];
            self.label_last.text = result[gc.dsConsts.BossResult.killUserName];
            //var leftTime = Math.ceil((begTime-egret.getTimer())/1000);
            //self.setCDTime(leftTime);
        };
        p._tap_btn_close = function () {
            //gd.guildCtrl.getInfo(function(){},this);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
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
                self.btn_close.label = mo.STR.format("返回(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_close.label = mo.STR.format("返回(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self.close();
        };
        return GuildBossWin;
    })(g_fight.FightDlg);
    g_fight.GuildBossWin = GuildBossWin;
    egret.registerClass(GuildBossWin,"g_fight.GuildBossWin");
})(g_fight || (g_fight = {}));

/**
 * Created by Administrator on 2015/12/29.
 */
var g_fight;
(function (g_fight) {
    var GuildBossFail = (function (_super) {
        __extends(GuildBossFail, _super);
        function GuildBossFail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildBossFail,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var result = self.data.result;
            var fec = self.data.fec;
            self.label_damage.text = result[gc.dsConsts.BossResult.totalHurt];
            self.label_leftHp.text = fec.getCurHp();
        };
        p._tap_btn_forge = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.forge);
        };
        p._tap_btn_shop = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.shop);
        };
        p._tap_btn_close = function () {
            //gd.guildCtrl.getInfo(function(){},this);
        };
        return GuildBossFail;
    })(g_fight.FightDlg);
    g_fight.GuildBossFail = GuildBossFail;
    egret.registerClass(GuildBossFail,"g_fight.GuildBossFail");
})(g_fight || (g_fight = {}));

/**
 * Created by lihex on 4/8/16.
 */
var g_fight;
(function (g_fight) {
    var GuildCopyBossWinOrFail = (function (_super) {
        __extends(GuildCopyBossWinOrFail, _super);
        function GuildCopyBossWinOrFail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuildCopyBossWinOrFail,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
        };
        p.dataChanged = function () {
            var self = this;
            var begTime = self.data.begTime;
            _super.prototype.dataChanged.call(this);
            //[isWin,progress,items]
            var result = self.data.result;
            uiHelper.setItemsGrp(self.grp_rankReward, utils.itemObj2ObjArr(result[2]));
            self.invalidateSkinState();
            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        };
        p.getCurrentSkinState = function () {
            var self = this;
            var isWin = true;
            if (self.data) {
                isWin = self.data.result[0];
            }
            return isWin ? "win" : "fail";
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            if (self.data.callback != null) {
                self.data.callback.call(self.data.target);
            }
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
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
                self.btn_back.label = mo.STR.format("确定(%s)", second.toString());
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_back.label = mo.STR.format("确定(%s)", Math.floor(leftMillisecond / 1000).toString());
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self._tap_btn_back();
        };
        p._tap_btn_back = function () {
            var self = this;
            self.close();
            var bossId = gd.guildCopyCtrl.curFightGuildBossId;
            var sectionId = gd.guildCopyCtrl.getSectionIdByBossId(bossId);
            mo.moduleMgr.runModule(g_consts.moduleId.home, {
                subModuleId: g_consts.HS_SUBMID_GUILD_COPY_BOSS,
                section: mo.getJSONWithFileNameAndID(gc.cfg_t_guildCopy, sectionId) });
        };
        p._tap_btn_forge = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.forge);
        };
        p._tap_btn_shop = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.shop);
        };
        return GuildCopyBossWinOrFail;
    })(g_fight.FightDlg);
    g_fight.GuildCopyBossWinOrFail = GuildCopyBossWinOrFail;
    egret.registerClass(GuildCopyBossWinOrFail,"g_fight.GuildCopyBossWinOrFail");
})(g_fight || (g_fight = {}));

