/**
 * Created by Administrator on 2016/1/9.
 */

module g_worldboss{

    export class GuildBossLevelList extends mo.gui.Dlg{

        tab_medal:egret.gui.TabBar;
        grp_fight;
        grp_call;
        img_empty;
        img_title;

        tabCompArr:any;
        tabIndex:number;

        label_call_time:mo.gui.Label;
        label_extra_cost:mo.gui.Label;
        label_extra_costLmt;
        label_canFight;
        label_cannotFight;

        list_call;
        list_callLmt;

        _Item_list_call;
        _Item_list_callLmt;

        moduleParam;
        isLmt;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;

            self.tabIndex = 0;
            self.tabCompArr = null;
            self.tabCompArr = [];

            self._Item_list_fight = GuildBossFightingCell;
            self._Item_list_call = GuildBossLevelCallCell;
            self._Item_list_callLmt = GuildBossCallCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.isLmt = self.moduleParam.isLmt;
            self.registerClassByKey(gd.BossGuildCtrl, gd.BossGuildCtrl.ON_BOSS_CALL_UPDATE, self._refreshTabComp);
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, function(){
                gd.bossGuildCtrl.getInfo(function(){
                    self._refreshTabComp();
                }, self);
            });

            self.grp_fight.visible = false;
            self.grp_call.visible = false;

            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg);
            var curLeftNum = gd.bossCtrl.getReFightNum()
            var maxNum = gameInfo[9];
            self.label_canFight.text = [curLeftNum, maxNum];
            self.label_canFight.visible = curLeftNum>0;
            self.label_cannotFight.visible = curLeftNum<=0;

            self.list_call.visible = !self.isLmt;
            self.list_callLmt.visible = self.isLmt;
            self.label_extra_cost.visible = !self.isLmt;
            self.label_extra_costLmt.visible = self.isLmt;

            self.tabCompArr = [self.grp_fight, self.grp_call];
            self.tab_medal.selectedIndex = 0;
            process.nextTick(function(){
                self._tap_tab_medal();
            });

            self.label_call_time.text =  mo.STR.format("每天可召唤时段：%s-%s",gd.bossGuildCtrl.getOpenStartTime().toFormat("HH24:MI")
                ,gd.bossGuildCtrl.getOpenEndTime().toFormat("HH24:MI"));
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

            if(!self.isLmt){
                self.img_title.source = "tit_txt_g_hanghuiboss";
            }else{
                self.img_title.source = "tit_txt_g_xianshibossf";
            }
        }

        _tap_btn_help(){
            var self = this;
            if(self.tabIndex == 0){
                g_base.BaseShowTip.create().setData({id:27, param1:mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[7]}).show();
            }else{
                g_base.BaseShowTip.create().setData({id:28}).show();
            }
        }

        _tap_tab_medal(){
            var self = this;
            var selectedIndex = self.tabIndex = self.tab_medal.selectedIndex;
            var tabCompArr = self.tabCompArr;
            var curComp = tabCompArr[selectedIndex];
            if(!curComp) return;

            for(var i = 0,l_i = tabCompArr.length;i < l_i;i++){
                var locComp = tabCompArr[i];
                locComp.visible = false;
            }

            self._refreshTabComp();
            curComp.visible = true;
        }

        _refreshTabComp(){
            var self = this,selectedIndex = self.tabIndex;
            if(selectedIndex == 0){
                self._refreshFightGrp();
            }else if(selectedIndex == 1){
                self._refreshCallGrp();
            }
        }

        /****************************************************************
        //激战中
         ****************************************************************/
        list_fight:egret.gui.List;
        _Item_list_fight;

        _refreshFightGrp(){
            var self = this;
            self.refreshList("list_fight");
        }

        _data_list_fight():any[] {
            var self = this, filter, sorter;
            var list;
            if(!self.isLmt){
                list = gd.bossGuildCtrl.getBossList(true, 0);
            }else{
                list = gd.bossGuildCtrl.getLimitBossList(true);
            }

            self.img_empty.visible = list.length == 0;
            return list;
        }

        /****************************************************************
         //召唤
         ****************************************************************/

        _refreshCallGrp(){
            var self = this;
            self.refreshList("list_call");
        }

        _data_list_call():any[] {
            var self = this, filter, sorter;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.newBossCfg);
            var levelStr:string = gameInfo[4];
            var levels = levelStr.split(",");
            var bossLvs = [];

            var bossInfos = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var levelBoss = {};
            for(var key in bossInfos){
                var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, key);
                var level:number = monsterInfo[gc.t_monster_level];
                if(!levelBoss[level]) levelBoss[level] = [];
                levelBoss[level].push(parseInt(key));
            }

            for(var i=0; i<levels.length; ++i){
                level = parseInt(levels[i]);
                var obj = {bossId:levelBoss[level][0], level:level};
                bossLvs.push(obj);
            }

            return bossLvs;
        }
        _data_list_callLmt():any[] {
            var self = this, filter, sorter;

            return gd.bossGuildCtrl.getLimitBossList(false);
        }
        _click_list_call(event:egret.gui.ListEvent) {
            var self = this;
            var data = event.item;

           GuildBossList.create().setData({isLmt:self.isLmt, level:data.level}).show();
        }

        _click_list_callLmt(event:egret.gui.ListEvent) {
            var self = this;
            var boss = event.item;
            var bossid = boss[gc.c_bossParameter_id];
            if((gd.bossGuildCtrl.getBossStatus(bossid)== gd.BossFightCtrl.BOSS_STATUS.prize)){ //结算中
                return;
            }
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossCall, {bossId: bossid, isLmt:true});
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildBossLevelList;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.bossGuildCtrl.getInfo(function(){
                cb();
            }, this);
        });
    });
}
