/**
 * Created by Administrator on 2015/9/17.
 */
module g_fight {
    export var isShowOffline=false;
    export var mapView:MapView;
    export var bossData:any;
    export class FightLayer extends mo.gui.Layer {
        btn_boss;
        grp_winCount;
        label_winCount;
        ico_win_process;
        grp_leftTime;
        grp_findPk;
        label_leftTime;
        grp_pkEnemy;
        icon_pkInfo;
        ico_enemy;
        grp_boss;
        grp_ui;
        ico_red;
        ico_bePkRed;
        ico_auto;
        ico_autoLight;
        label_noActive;
        eff_findingMonster;

        label_worldBossLeftTime;
        label_bossName;
        label_myDamage;
        px_hp;
        grp_guwu;
        label_guwuLeftTime;
        grp_guwuLeftTime;
        ico_worldBoss;
        label_bossPking;
        grp_worldBoss;

        grp_myHurt;

        fightProfit;
        baseMidBar;

        btn_red;
        ico_expBuff;
        btn_zhenQi;
        btn_skip;
        label_skipFight;

        treasureView;
        isTreasureViewsShowing:boolean = false;
        isTreasureViewsNeedRebuild:number = -1;

        _initProp(){
            super._initProp();
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
        }

        checkRedPoint(){
            var self = this;
            self.ico_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.pkout1);
            self.ico_bePkRed.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.bePkKill);
        }
        lvlChange(){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.autoFight][gc.c_open_lvlRequired];
            if(gd.userCtrl.getLvl()>=needLvl) {
                if(gd.userCtrl.isAutoFight()){
                    mo.setLocalStorageItem("hasTapAuto", 1);
                }
                if(mo.getLocalStorageItem("hasTapAuto")){
                    self.ico_autoLight.visible = false;
                }else{
                    self.ico_autoLight.visible = true;
                    egret.Tween.get(self.ico_autoLight,{loop:true}).to({alpha:0}, 800).to({alpha:1}, 800);
                }
            }else{
                self.ico_autoLight.visible = false;
            }
            self.label_noActive.visible = !gd.userCtrl.isAutoFight();
            //var lotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, 0);
            //self.btn_zhenQi.visible = gd.userCtrl.getLvl() >= lotusInfo[gc.c_demonLotus_treaNeedUserLvl];
        }
        autoFightChange(){
            var self = this;
            self.ico_auto.source = gd.userCtrl.isAutoFight()?"ico_autofight_enable":"ico_autofight_disable";
            self.label_noActive.visible = !gd.userCtrl.isAutoFight();
        }

        onMedalChange() {
            mapView.onMedalChange();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            //收益层
            gd.fightLayer = self;
            self.fightProfit = FightProfit.create().show();
            //中间聊天层
            self.baseMidBar = g_mid.BaseMidBar.create().show();
            if(mapView==null){
                mapView = new g_fight.MapView();
                mapView.y = 42;
                var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
                var mapID = copyInfo[gc.t_copy_displayID];
                mapView.enterMap(mapID, true);
                mapView.checkNextWave();
                var uiCom:egret.gui.UIComponent = new egret.gui.UIComponent();
                //self.addElement(uiCom);
                uiCom.addChild(mapView);
            }
            self.resetPvpEnemyView();
            self.onNextLoot();

            self.checkRedPoint();
            self.lvlChange();
            self.autoFightChange();
            self.onRedEnvelopeChanged();
            self.onMedalChange();
            if(self.grp_findPk){
                self.grp_findPk.visible = false;
            }
            self.ico_autoLight.touchEnabled = false;
            self.eff_findingMonster.visible = mapView.isFindingMonster;
            mapView.addEventListener(MAP_EVENT_HPMP_CHANGE, self.updateHP, self);
            mapView.addEventListener(MAP_EVENT_IS_FINDING_MONSTER_CHANGE,self.isFindingMonsterChange,self);
            mapView.addEventListener(MAP_EVENT_WINCOUNT_CHANGE,self.onWinCountChange,self);
            mapView.addEventListener(MAP_EVENT_TOTAL_HURT_CHANGE,self.onTotalHurtChange,self);
            self.isFindingMonsterChange();
            self.onWorldBossOpenChanged();
            self.onKingBuffChanged();
            self.onTotalHurtChange();
            self.px_hp.labelFunction = self.barLabelFunction;

            self.ico_expBuff.source = resHelper.getBuffIconPath(1);
        }

        private barLabelFunction(value:number,maximum:number):string {
            return mo.STR.format("%s/%s",utils.formatByWan(value),utils.formatByWan(maximum));
        }

        _tap_icon_pkInfo(){
            var self = this;
            self.showOrHideTreasureView(true);
        }

        secondTimer;
        mpUpdateTimer;
        onEnter() {
            super.onEnter();
            var self = this;
            self.addElement(<egret.gui.UIComponent>mapView.parent);
            self.ico_auto.source = gd.userCtrl.isAutoFight()?"ico_autofight_enable":"ico_autofight_disable";
            if(mapView.pveType == gc.c_prop.fightTypeKey.worldBoss && bossData){
                self.checkBossView();
            }
            clearInterval(self.mpUpdateTimer);
            self.mpUpdateTimer = setInterval(function () {
                var infos = gd.demonLotusCtrl.calGenuineQi();
                g_fight.baseBottomBar.updateMP(infos);
            }, 100);
            self.secondTimer = setInterval(function(){
                self.checkUIVisible();
            }, 1000);
            self.checkUIVisible();
        }

        onExit(){
            var self = this;
            clearInterval(self.mpUpdateTimer);
            var owner = (<egret.gui.UIComponent>mapView.parent).owner;
            if(owner && owner == self){
                owner.removeElement(<egret.gui.UIComponent>mapView.parent);
            }
            super.onExit();
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
            if(self.gwTimeTrigger){
                tm.timer.remove(self.gwTimeTrigger);
                self.gwTimeTrigger = null;
            }
            if(self.blTimeTrigger){
                tm.timer.remove(self.blTimeTrigger);
                self.blTimeTrigger = null;
            }
            clearInterval(self.secondTimer);
            mapView.removeEventListener(MAP_EVENT_HPMP_CHANGE, self.updateHP, self);
            mapView.removeEventListener(MAP_EVENT_IS_FINDING_MONSTER_CHANGE,self.isFindingMonsterChange,self);
            //self.mapView.destroy();
        }

        resetPvpEnemyView():void{
            var self = this;
            gd.pkOutCtrl.checkOpen(function(data){
                if(data){
                    gd.pkOutCtrl.getEnemyList(function(data) {
                        if(self.grp_pkEnemy){
                            while (self.grp_pkEnemy.numElements) {
                                self.grp_pkEnemy.removeElementAt(0);
                            }
                            self.setCDTime(gd.pkOutCtrl.getReRefreshSeconds());
                            if(data.length==0) {
                                self.grp_pkEnemy.visible = false;
                                self.grp_leftTime.visible = true;
                                //var pkValue = gd.pkOutCtrl.getPkValue();
                                //var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
                                //var valueYellow = gameCfg[5];
                                //self.grp_leftTime.visible = pkValue<valueYellow;
                                //self.grp_findPk.visible = pkValue>=valueYellow;
                            }else{
                                self.resetPvpEnemyViewOnlyDraw(data);
                                //self.checkAotoPkOut(data[data.length-1]);
                            }
                        }
                    },self);
                }else{
                    if(self.grp_pkEnemy) {
                        self.icon_pkInfo.visible = false;
                        self.ico_enemy.visible = false;
                        self.grp_pkEnemy.visible = false;
                        self.grp_leftTime.visible = false;
                        //self.grp_findPk.visible = false;
                    }
                }
            },self);
        }

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

        resetPvpEnemyViewOnlyDraw(data){
            var self = this;
            self.grp_pkEnemy.visible = true;
            self.grp_leftTime.visible = false;
            //self.grp_findPk.visible = false;
            while (self.grp_pkEnemy.numElements) {
                self.grp_pkEnemy.removeElementAt(0);
            }
            for (var i = 0; i < data.length; ++i) {
                data[i][gc.dsConsts.PkOutUserData.iconId];
                var cell = new FightEnemyCell();
                cell.setData(data[i]);
                self.grp_pkEnemy.addElement(cell);
            }
        }

        timeTrigger;
        getEnemyListLeftMillisecond = -1;
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
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.getEnemyListLeftMillisecond = endTime1 - now;
            if (self.getEnemyListLeftMillisecond < 0) self.getEnemyListLeftMillisecond = 0;
            self.label_leftTime.text = mo.getTimeStr(self.getEnemyListLeftMillisecond);
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self.getEnemyListLeftMillisecond = -1;
            self.resetPvpEnemyView();
        }

        onStartPvpFight(data){
            var self = this;
            mapView.startPvpFight(data.my, data.enemy, data.isPkOut, data.name);
            self.resetPvpEnemyView();
            self.quitOrRebuildTreasureView(false);
            self.checkUIVisible();
        }
        onNextLoot(){
            var self = this;
            self.quitOrRebuildTreasureView(true);
            self.checkUIVisible();
            if(baseTopBar){
                baseTopBar.showCopyName(mapView.copyId, mapView.monsterId);
            }
            if(gd.fightCtrl.isSpFighting){
                self.grp_winCount.visible = false;
                self.grp_boss.visible = false;
                return;
            }
            self.onWinCountChange();
        }

        onWinCountChange(){
            var self = this;
            var wins:Array<number> = gd.copyCtrl.getWinningStreak();
            var curWin:number = wins[0];
            var maxWin:number = wins[1];
            self.label_winCount.text = curWin+"/"+maxWin;
            if(curWin>=maxWin){
                self.grp_winCount.visible = false;
                //for引导，防止手快
                process.nextTick(function(){
                    process.nextTick(function(){
                        process.nextTick(function() {
                            self.grp_boss.visible = true;
                        })
                    })
                });
                mo.emitter.emit('onBoss');
                if(gd.userCtrl.isAutoFight() && !gd.bossFightCtrl.isAutoFight()){
                    self._tap_btn_boss();
                }
            }else{
                self.grp_winCount.visible = true;
                self.grp_boss.visible = false;
                var precent = self.ico_win_process.width - Math.floor((1-curWin/maxWin)*self.ico_win_process.width);
                self.ico_win_process.mask = new egret.Rectangle(0,0,precent,self.grp_winCount.height);
            }
        }

        onTotalHurtChange(){
            var self = this;
            self.label_myDamage.text = utils.formatByWan(mapView.totalHurt)||"0";
        }

        onCheckSkipBtn(){
            var self = this;
            self.checkUIVisible();
        }

        sendTime=0;
        _tap_btn_boss(e=null):void{
            var self = this;
            //if(Date.newDate().getTime()-self.sendTime>500 && !gd.fightCtrl.isSpFighting && this.stage!=null){
            if(Date.newDate().getTime()-self.sendTime>500 && !gd.fightCtrl.isSpFighting){
                self.sendTime = Date.newDate().getTime();
                gd.fightCtrl.enterCopy(gd.copyCtrl.getNormalCurCopyId());
            }
        }
        onEnterCopy(data):void{
            var self = this;
            mapView.enterCopy(data.pveType, data.copyID, data.loots, data.bossId);
            if(self.grp_winCount){
                self.grp_winCount.visible = false;
                self.onNextLoot();
            }
        }
        forceNormalCopy():void{
            mapView.forceNormalCopy();
        }

        onEnterWorldBoss(data):void{
            var self = this;
            bossData = data;
            if(mapView.pveType != gc.c_prop.fightTypeKey.worldBoss){
                mapView.enterCopy(gc.c_prop.fightTypeKey.worldBoss, null, null, data.bossId);
                if(self.stage){
                    self.checkBossView();
                }
            }
        }

        checkBossView(){
            var self = this;
            if(mapView.pveType == gc.c_prop.fightTypeKey.worldBoss){
                var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, gd.curBFECtrl.getBossId());
                self.label_bossName.text = monsterInfo[gc.t_monster_name]+" Lv."+monsterInfo[gc.t_monster_level];
                self.worldBossCurHpChange();
                self.worldBossMyHurtChange();

                var leftTime = gd.curBFECtrl.getReOverSeconds();
                if(leftTime){
                    self.label_worldBossLeftTime.text = mo.getTimeStr(leftTime*1000);
                    self.setBLCDTime(leftTime);
                }
                var isGuildBoss = (gd.curBFECtrl.getType() == gc.c_prop.worldBossTypeKey.guild);
                self.grp_guwu.visible = isGuildBoss;
                if(isGuildBoss){
                    self.worldBossGWTimeChange(gd.curBFECtrl.getInspireReSeconds(), gd.curBFECtrl);
                }

                self.onNextLoot();
            }
        }

        worldBossCurHpChange():void{
            var self = this;
            mapView.worldBossHpChange();
            self.px_hp.maximum = gd.curBFECtrl.getTotalHp();
            self.px_hp.setValue(gd.curBFECtrl.getCurHp());
            if(gd.curBFECtrl.isLimitHp()){
                var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, gd.curBFECtrl.getBossId());
                self.label_bossName.text = monsterInfo[gc.t_monster_name]+" Lv."+monsterInfo[gc.t_monster_level]+"(护盾已激活)";
            }
        }
        worldBossMyHurtChange():void{
            var self = this;
            self.label_myDamage.text = utils.formatByWan(gd.curBFECtrl.getMyHurt())||"0";
        }
        onWorldBossOpenChanged():void{
            var self = this;
            self.label_bossPking.visible = gd.bossFightCtrl.getOpenIds().length > 0;
        }
        worldBossGWTimeChange(time, fec:gd.BossFightEntityCtrl):void{
            var self = this;
            var leftTime = fec.getInspireReSeconds();
            if(leftTime>0){
                self.grp_guwuLeftTime.visible = true;
                self.label_guwuLeftTime.text = mo.getTimeStr(leftTime*1000);
                self.setGWCDTime(leftTime);
            }else{
                self.grp_guwuLeftTime.visible = false;
            }
        }
        onWorldBossOver(fec:gd.BossFightEntityCtrl):void{
            var self = this;
            fec.getBossResult(function(result):void{
                var isWin = result[gc.dsConsts.BossResult.isWin];
                var bossType = fec.getType();
                var data = {result:result, fec:fec};
                if(isWin){
                    if(bossType == gc.c_prop.worldBossTypeKey.guild){
                        GuildBossWin.showCallback(data);
                        //GuildBossWin.create().setData(data).show();
                    }else{
                        WBossWin.showCallback(data);
                    }
                }else {
                    if(bossType == gc.c_prop.worldBossTypeKey.guild){
                        GuildBossFail.showCallback(data);
                    }else{
                        WBossFail.showCallback(data);
                    }
                }
                if (mapView.pveType == gc.c_prop.fightTypeKey.worldBoss) {
                    if(mapView.getEnemyRoleAt(0).roleInfo.monsterInfo[gc.t_monster_id] == fec.getBossId()){
                        self.forceNormalCopy();
                    }
                }
            },self);
        }

        onCallHero():void{
            var heros = gd.heroCtrl.getFightList();
            var hero = heros[heros.length-1];

            mapView.createRole(hero, true, heros.length-1);
        }

        onFightHeroChange():void{
            mapView.roleListChange();
        }

        _tap_grp_leftTime(){
            var self = this;
            gd.pkOutCtrl.refreshEnemy(true,function(){
                self.resetPvpEnemyView();
            },self);
        }
        _tap_grp_findPk(){
            var self = this;
            gd.pkOutCtrl.refreshEnemy(false,function(){
                self.resetPvpEnemyView();
            },self);
        }

        private checkUIVisible(){
            var self = this;
            if(self.grp_ui){
                self.grp_ui.visible = mapView.isNormalCopy;
            }
            if(self.btn_skip){
                self.btn_skip.visible = false;
                self.label_skipFight.visible = false;
                //if(!mapView.isNormalCopy && mapView.pveType != gc.c_prop.fightTypeKey.worldBoss) {
                //    self.btn_skip.visible = true;
                //    self.btn_skip.enabled = false;
                //    self.label_skipFight.visible = true;
                //    if(mapView.isEnterMap && !mapView.isFightOver()){
                //        var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.skipFightCfg);
                //        if(mapView.pvpType == gc.c_prop.fightTypeKey.guildWar){
                //            self.label_skipFight.text = ((gameInfo[0]*1000-(Date.newDate().getTime()-mapView.fightStartTime))/1000>>0)+"秒";
                //            if(Date.newDate().getTime()-mapView.fightStartTime>=gameInfo[0]*1000) {
                //                self.btn_skip.enabled = true;
                //                self.label_skipFight.visible = false;
                //            }
                //        }else {
                //            self.label_skipFight.text = ((gameInfo[1]*1000-(Date.newDate().getTime()-mapView.fightStartTime))/1000>>0)+"秒";
                //            if (Date.newDate().getTime() - mapView.fightStartTime >= gameInfo[1] * 1000) {
                //                self.btn_skip.enabled = true;
                //                self.label_skipFight.visible = false;
                //            }
                //        }
                //    }else{
                //        self.btn_skip.visible = false;
                //        self.label_skipFight.visible = false;
                //    }
                //}else{
                //    self.btn_skip.visible = false;
                //    self.label_skipFight.visible = false;
                //}
            }
            if(self.grp_worldBoss){
                self.grp_worldBoss.visible = mapView.pveType == gc.c_prop.fightTypeKey.worldBoss;
            }
            if(self.grp_myHurt){
                self.grp_myHurt.visible = mapView.pveType == gc.c_prop.fightTypeKey.worldBoss
                ||mapView.pveType == gc.c_prop.fightTypeKey.coffersBoss;
            }
            if(self.fightProfit){
                self.fightProfit.setVisible(mapView.isNormalCopy);
            }
            if(self.baseMidBar){
                self.baseMidBar.setChatVisible(mapView.isNormalCopy);
            }
            //if(self.img_info_detail){
            //    self.img_info_detail.visible = mapView.isNormalCopy;
            //}
        }

        _tap_ico_enemy(){
            gd.pkOutCtrl.resetBePkKill();
            gd.pkOutCtrl.getRevengeEnemyList(function(data){
                EnemyList.create().setData({list:data}).show();
            },this);
        }

        private updateHP(e):void {
            var self = this;
            var infos = mapView.getHpInfos();
            g_fight.baseBottomBar.updateHP(infos);
        }

        private isFindingMonsterChange():void{
            this.eff_findingMonster.visible = mapView.isFindingMonster;
        }

        _tap_ico_auto(){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            var vip = gd.userCtrl.getVip();
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, vip);
            needLvl = c_open[gc.id_c_open.autoFight][gc.c_open_lvlRequired];
            if(!vipInfo[gc.c_vip_copyBossAutoFight] && gd.userCtrl.getLvl()<needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noLvlAuto,1,needLvl);
            }
            mo.setLocalStorageItem("hasTapAuto", 1);
            egret.Tween.removeTweens(self.ico_autoLight);
            self.ico_autoLight.visible = false;
            gd.userCtrl.setAutoFight(!gd.userCtrl.isAutoFight());
            self.ico_auto.source = gd.userCtrl.isAutoFight()?"ico_zidongtiaozhan1":"ico_zidongtiaozhan";
            self.label_noActive.visible = !gd.userCtrl.isAutoFight();
        }

        //dataChanged(){
        //    super.dataChanged();
        //    this.mapView.enterCopy(this.data.copyID, this.data.loots);
        //}

        blTimeTrigger;
        setBLCDTime(second){
            var self = this;
            if(second>0){
                if(self.blTimeTrigger){
                    tm.timer.remove(self.blTimeTrigger);
                    self.blTimeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.blTimeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.blTimeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.blTimeOut, self);
                tm.timer.add(timeTrigger);
            }
        }
        blTimeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.label_worldBossLeftTime.text = mo.getTimeStr(leftMillisecond);
        }
        blTimeOut(type, beginTime, endTime){
            var self = this;
        }

        gwTimeTrigger;
        setGWCDTime(second){
            var self = this;
            if(second>0){
                if(self.gwTimeTrigger){
                    tm.timer.remove(self.gwTimeTrigger);
                    self.gwTimeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.gwTimeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.gwTimeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.gwTimeOut, self);
                tm.timer.add(timeTrigger);
            }
        }
        gwTimeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.label_guwuLeftTime.text = mo.getTimeStr(leftMillisecond);
        }
        gwTimeOut(type, beginTime, endTime){
            var self = this;
            self.grp_guwuLeftTime.visible = false;
        }

        _tap_btn_guwu(){
            var self = this;
            gd.curBFECtrl.inspire(function(data){},self);
        }
        _tap_btn_damageRank(){
            mo.moduleMgr.runModule(g_consts.moduleId.worldBossHurtList, {bossId:gd.curBFECtrl.getBossId()});
        }

        _tap_ico_worldBoss(){
            mo.moduleMgr.runModule(g_consts.moduleId.bossWar);
        }

        onRedEnvelopeChanged(){
            this.btn_red.visible = (gd.redEnvelopeCtrl.getCanGetList().length>0);
        }
        _tap_btn_red(){
            mo.moduleMgr.runModule(g_consts.moduleId.redPacketList);
        }
        onKingBuffChanged(){
            this.ico_expBuff.visible = gd.kingCtrl.isOpenBuff();
        }

        _tap_btn_zhenQi() {
            var lotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, 0);
            if(gd.userCtrl.getLvl() >= lotusInfo[gc.c_demonLotus_treaNeedUserLvl]){
                g_base.ZhenQiDetail.create().show();
            }else{
                mo.showMsg(gc.id_c_msgCode.gasNoOpen,lotusInfo[gc.c_demonLotus_treaNeedUserLvl]);
            }
        }

        _tap_btn_skip(){
            var vips = mo.getJSONWithFileName(gc.cfg_c_vip);
            var vipInfo = vips[gd.userCtrl.getVip()];
            if(vipInfo[gc.c_vip_skipFight]){
                mapView.skipFight();
            }else{
                for(var key in vips){
                    if(vips[key][gc.c_vip_skipFight]) break;
                }
                mo.showMsg(gc.id_c_msgCode.vipLess, key);
            }
        }

        showProfileInfo(){
            var self = this;
            var cfg_c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var lvl = gd.userCtrl.getLvl();
            var openLvl = cfg_c_open[gc.id_c_open.expBox][gc.c_open_lvlRequired];
            if(lvl < openLvl) {
                FightProfitDlg.create().show();
            }else{
                gd.demonLotusCtrl.getInfo(function(data) {
                    FightProfitDlg.create().show();
                }, self);
            }
        }

        /*
         退出秘宝界面, 并检查是否需要记录秘宝界面显示状态,以便下次恢复
         isQuit = false ,. 退出秘宝界面
         isQuit = ture , 重新自动进入秘宝界面
         */
        quitOrRebuildTreasureView(isQuit){
            var self = this;
            if(self.isTreasureViewsShowing && !isQuit){
                self.isTreasureViewsNeedRebuild = self.treasureView.tab_btn.selectedIndex;
                self.showOrHideTreasureView(false);
            }else if(!self.isTreasureViewsShowing && isQuit){
                if(self.isTreasureViewsNeedRebuild >= 0 ){
                    self.showOrHideTreasureView(true);
                    self.isTreasureViewsNeedRebuild = -1;
                }
            }
        }

        /*
            展示或者隐藏秘宝界面
         */
        showOrHideTreasureView(yesIsShow){
            var self = this;
            if(self.isTreasureViewsShowing == yesIsShow )return;
            self.isTreasureViewsShowing = yesIsShow;
            if(yesIsShow){
                self.treasureView = g_fight.FightTreasure.create().setData({lm:self.getEnemyListLeftMillisecond,fl:self,index:self.isTreasureViewsNeedRebuild}).show().onClose(function () {
                    self.isTreasureViewsShowing = false;
                },self);
            }else{
                if(self.treasureView){
                    self.treasureView.close();
                }
            }
        }
    }
}