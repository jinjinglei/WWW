/**
 * Created by Administrator on 2015/12/2.
 */
module g_guild{
    export class GuildMineLayer extends mo.gui.Dlg {
        label_id;
        label_name;
        label_lv;
        label_count;
        label_rank;
        label_notice;
        label_guildname;
        bar_exp:egret.gui.ProgressBar;
        label_attack;
        itemContribute;
        ico_level;
        label_myPosition;
        label_leftExp;
        label_myGuildLv;
        label_myExp;
        label_ennoble;
        moduleParam:IModuleParam.GuildMine;
        tab_str:egret.gui.TabBar;
        tabCompArr:any;
        tabIndex:number;
        grp_guildDaily;
        grp_guildFuli;
        grp_guildWar;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self.tabIndex = 0;
            self.tabCompArr = null;
            self.tabCompArr = [];
        }

        _childrenCreated() {
            super._childrenCreated();
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
            process.nextTick(function(){
                self._tap_tab_str();
            });

            if(self.moduleParam){
                self.setData(self.moduleParam);
            }
            if(self.moduleParam["bossId"]){
                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{subModuleId:1,bossId:self.moduleParam["bossId"]});
            }
            if(self.moduleParam["subModuleId"]==1){
                var self = this;
                var guildData = self.data.guildData;
                var lv = guildData[gc.dsConsts.GuildEntity.lvl];
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
                if(lv<gameInfo[8]){
                    return mo.showMsg(gc.id_c_msgCode.noGuildLevel, gameInfo[8]);
                }
                GuildTreasure.create().show();
            }
            self.reloadData();
        }

        _tap_tab_str(){
            var self = this;
            var selectedIndex = self.tabIndex = self.tab_str.selectedIndex;
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
                self._refreshGuildDailyGrp();
            }else if(selectedIndex == 1){
                self._refreshGuildFuliGrp();
            }else if(selectedIndex == 2){
                self._refreshGuildWarGrp();
            }
        }

        _refreshGuildDailyGrp(){

        }

        _refreshGuildFuliGrp(){

        }

        _refreshGuildWarGrp(){

        }

        reloadData()
        {
            var self = this;
            gd.guildCtrl.getInfo(function(data) {
                var isGuild = data[0];
                var guildPersonalData = data[1];
                var guildData = data[2];
                var guildManagerName = data[3];
                var guildRank = data[4];
                if (isGuild)
                {
                    self.setData({guildPersonalData:guildPersonalData, guildData:guildData,guildManagerName:guildManagerName,guildRank:guildRank});
                }
                self.dataChanged();
            },self);
        }
        dataChanged() {
            super.dataChanged();

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
            var guildname =  guildData[gc.dsConsts.GuildEntity.name];
            var attack = gd.guildCtrl.getAddCombat();
            var guildAct = gd.guildPersonalCtrl.getContributeValue();
            var myLv = gd.guildCtrl.getRankFileLvl(guildAct);
            var levelInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, myLv<30?myLv+1:30);

            self.label_myExp.text = mo.STR.format("%s/%s", guildAct, levelInfo[gc.c_lvl_rankFileNeedAct]);
            self.label_myGuildLv.text = mo.STR.format("%s级会员: ", myLv);
            self.label_attack.text = attack +"";
            self.ico_level.visible = false;
            var numLevel =  gd.guildCtrl.getLevel();
            if(numLevel > 0){
                self.ico_level.visible = true;
                if(numLevel == 1)
                    self.ico_level.source = "ico_chujubaoku";
                else if(numLevel == 2)
                    self.ico_level.source = "ico_zongjibaoku";
                else
                    self.ico_level.source = "ico_gaojibaoku";
            }else{

            }
            var ennoble = gd.guildPersonalCtrl.getEnnoble();
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];

            self.label_guildname.text =  guildname;
            self.label_id.text = id+"";
            self.label_name.text = name;
            self.label_lv.text = mo.STR.format("Lv.%s",lv);
            self.label_count.text = mo.STR.format("%s/%s",count,maxMemberCount);
            self.label_notice.text = notice;

            self.bar_exp.maximum = gd.guildCtrl.getNeedExp(lv);
            self.bar_exp.setValue(exp);
            self.label_rank.text = self.data.guildRank + "";
            self.label_myPosition.text = gc.c_prop.guildPost[gd.guildPersonalCtrl.getPosition()];
            self.label_leftExp.text = gd.guildPersonalCtrl.getSumContribute().toString();

        }

        _tap_btn_help() {
            var self = this;
            var guildSet = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
            g_base.BaseShowTip.create().setData({id: 16, param1: gd.guildCtrl.getExitGuildCD(),param2:guildSet[13],param3:guildSet[13]}).show();
        }

        //成员
        _tap_btn_member(){
            GuildMemberListLayer.create().show();
        }
        _tap_btn_manager() {
            var self = this;
            GuildManager.create().setData(self.data.guildData).show();
        }
        _tap_btn_rank(){
            var self = this;
            gd.rankCtrl.getAllRankArr(gc.c_prop.rankTypeKey.guildRank, function(data){
                if(data) GuildRank.create().setData({rankData: data}).show();
            },self);
        }

        //宝库
        _tap_grp_treasure() {
            var self = this;
            var guildData = self.data.guildData;
            var lv = guildData[gc.dsConsts.GuildEntity.lvl];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
            if(lv<gameInfo[8]){
                return mo.showMsg(gc.id_c_msgCode.noGuildLevel, gameInfo[8]);
            }
            GuildTreasure.create().show();
        }
        _tap_grp_benefits() {
            var self = this;
            GuildBenefitsLayer.create().setData(self.data.guildData).show();
        }
        _tap_grp_daily() {
            var self = this;
            GuildContributeLayer.create().setData(self.data.guildData).show();
        }
        _tap_grp_bossWar() {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossLevelList);
        }

        _tap_grp_rob(){
            var self = this;
            if(!gd.guildWarCtrl.isOpening()){
                mo.moduleMgr.runModule(g_consts.moduleId.guildwar);
            }else{
                gd.guildWarCtrl.enter(function() {
                    mo.moduleMgr.runModule(g_consts.moduleId.guildwar);
                },self);
            }
        }
        _tap_grp_copy(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.guildCopy);
        }
    }
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function() {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = GuildMineLayer;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.GuildMine, cb) {
            var self = this;
            gd.guildCtrl.getInfo(function(data){
                var isGuild = data[0];
                var guildPersonalData = data[1];
                var guildData = data[2];
                var guildManagerName = data[3];
                var guildRank = data[4];
                if(isGuild){
                    moduleParam.guildPersonalData = guildPersonalData;
                    moduleParam.guildData = guildData;
                    moduleParam.guildManagerName = guildManagerName;
                    moduleParam.guildRank = guildRank;
                    cb();
                }
            },self);
        });
    });
}