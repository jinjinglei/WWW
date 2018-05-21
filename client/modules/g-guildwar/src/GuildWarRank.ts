/**
 * Created by Administrator on 2015/9/24.
 */
module g_guildwar{
    export class GuildWarRank extends g_base.CloseInfoDlg{
        list_rankGuild;
        _Item_list_rankGuild;
        list_rankGuildManager;
        _Item_list_rankGuildManager;
        list_rankPerson;
        _Item_list_rankPerson;
        label_myRank;
        label_myKillValue;
        tab_btn;
        label_desc;
        ico_myRank;
        ico_myGuildRank;
        grp_Rank;
        ico_guild;
        ico_person;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            this.outsideClosable = true;
            self._tap_tab_btn();
        }

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_rankGuild = GuildWarRankGuildCell;
            self._Item_list_rankGuildManager = GuildWarRankGuildManagerCell;
            self._Item_list_rankPerson = GuildWarRankPersonCell;
        }

        onEnter(){
            super.onEnter();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();


        }
        _tap_tab_btn() {
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
            if(selectedIndex == 0 || selectedIndex == -1){
                self.list_rankGuild.visible = true;
                self.ico_myGuildRank.visible = true;
                self.ico_myRank.visible = false;
                self.label_myRank.x = self.ico_myGuildRank.x+self.ico_myGuildRank.width+10;
                self.ico_guild.visible = true;
                self.ico_person.visible = false;
                self.label_desc.text = "点数相同根据优先到达者计算";
                myRankData = gd.guildWarCtrl.getMyPointRank();//gc.dsConsts.GuildWarRank
                rank = myRankData?myRankData[gc.dsConsts.GuildWarRank.rank]:0;
                if(rank>0) {
                    rewardInfo = rewardInfos[rank];
                    if(!rewardInfo){
                        var keys = Object.keys(rewardInfos);
                        rewardInfo = rewardInfos[keys[keys.length-1]];
                    }
                    score = myRankData[gc.dsConsts.GuildWarRank.points];
                    if (groupId == gc.c_prop.guildGroupKey.diamond) {
                        rewards = rewardInfo[gc.c_guildWarReward_diamond];
                    } else if (groupId == gc.c_prop.guildGroupKey.wGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_wgold];
                    } else if (groupId == gc.c_prop.guildGroupKey.hGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_hgold];
                    } else if (groupId == gc.c_prop.guildGroupKey.silver) {
                        rewards = rewardInfo[gc.c_guildWarReward_silver];
                    } else if (groupId == gc.c_prop.guildGroupKey.copper) {
                        rewards = rewardInfo[gc.c_guildWarReward_copper];
                    }
                }
            }else if(selectedIndex==1){
                self.list_rankGuildManager.visible = true;
                self.label_desc.text = "会长排名根据行会排名计算";
                self.ico_myGuildRank.visible = true;
                self.ico_myRank.visible = false;
                self.label_myRank.x = self.ico_myGuildRank.x+self.ico_myGuildRank.width+10;
                self.ico_guild.visible = true;
                self.ico_person.visible = false;
                myRankData = gd.guildWarCtrl.getMyChairRank();//gc.dsConsts.GuildWarUserRank
                rank = myRankData?myRankData[gc.dsConsts.GuildWarUserRank.rank]:0;
                if(rank>0) {
                    rewardInfo = rewardInfos[rank];
                    if(!rewardInfo){
                        var keys = Object.keys(rewardInfos);
                        rewardInfo = rewardInfos[keys[keys.length-1]];
                    }
                    score = myRankData[gc.dsConsts.GuildWarUserRank.points];
                    if (groupId == gc.c_prop.guildGroupKey.diamond) {
                        rewards = rewardInfo[gc.c_guildWarReward_diamondSp];
                    } else if (groupId == gc.c_prop.guildGroupKey.wGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_wgoldSp];
                    } else if (groupId == gc.c_prop.guildGroupKey.hGold) {
                        rewards = rewardInfo[gc.c_guildWarReward_hgoldSp];
                    } else if (groupId == gc.c_prop.guildGroupKey.silver) {
                        rewards = rewardInfo[gc.c_guildWarReward_silverSp];
                    } else if (groupId == gc.c_prop.guildGroupKey.copper) {
                        rewards = rewardInfo[gc.c_guildWarReward_copperSp];
                    }
                }
            }else if(selectedIndex==2){
                self.list_rankPerson.visible = true;
                self.label_desc.text = "点数相同根据优先到达者计算";
                self.ico_myGuildRank.visible = false;
                self.ico_myRank.visible = true;
                self.label_myRank.x = self.ico_myRank.x+self.ico_myRank.width+10;
                self.ico_guild.visible = false;
                self.ico_person.visible = true;
                myRankData = gd.guildWarCtrl.getMyUserRank();//gc.dsConsts.GuildWarUserRank
                rank = myRankData?myRankData[gc.dsConsts.GuildWarUserRank.rank]:0;
                if(rank>0){
                    rewardInfo = rewardInfos[rank];
                    if(!rewardInfo){
                        var keys = Object.keys(rewardInfos);
                        rewardInfo = rewardInfos[keys[keys.length-1]];
                    }
                    score = myRankData[gc.dsConsts.GuildWarUserRank.points];
                    if(groupId==gc.c_prop.guildGroupKey.diamond){
                        rewards = rewardInfo[gc.c_guildWarReward_diamondUser];
                    }else if(groupId==gc.c_prop.guildGroupKey.wGold){
                        rewards = rewardInfo[gc.c_guildWarReward_wgoldUser];
                    }else if(groupId==gc.c_prop.guildGroupKey.hGold){
                        rewards = rewardInfo[gc.c_guildWarReward_hgoldUser];
                    }else if(groupId==gc.c_prop.guildGroupKey.silver){
                        rewards = rewardInfo[gc.c_guildWarReward_silverUser];
                    }else if(groupId==gc.c_prop.guildGroupKey.copper){
                        rewards = rewardInfo[gc.c_guildWarReward_copperUser];
                    }
                }
            }

            if(rank>0){
                self.grp_Rank.visible = true;
                for(var i=0; i<4; ++i){
                    var grpRes = self["grp_res"+i];
                    var item = rewards[i];
                    if(item){
                        var uiAsset:egret.gui.UIAsset = grpRes.getElementAt(0);
                        var label:egret.gui.Label = grpRes.getElementAt(1);
                        grpRes.visible = true;
                        uiAsset.source = resHelper.getItemIconPath(item[0]);
                        label.text = item[1];
                    }else{
                        grpRes.visible = false;
                    }
                }
                self.label_myRank.text = ""+rank;
                self.label_myKillValue.text = ""+score;
            }else{
                self.grp_Rank.visible = false;
            }
        }

        _data_list_rankGuild():any[]{
            var self = this;
            return self.data.rankData[gc.dsConsts.GuildWarAllRank.guildArr];
        }
        _data_list_rankGuildManager():any[]{
            var self = this;
            var list = self.data.rankData[gc.dsConsts.GuildWarAllRank.chairArr];
            if(list.length>10) list.length = 10;
            return list;
        }
        _data_list_rankPerson():any[]{
            var self = this;
            var list = self.data.rankData[gc.dsConsts.GuildWarAllRank.userArr];
            if(list.length>10) list.length = 10;
            return list;
        }

        _tap_btn_help(){
            var self = this;
            g_base.BaseShowTip.create().setData({id: 49}).show();
        }
    }
}