/**
 * Created by Administrator on 2015/9/24.
 */
module g_guildwar{
    export class GuildWarRankPersonCell extends mo.gui.ItemRenderer{
        label_killValue;
        label_rank;
        ico_rank;
        label_guild;
        ico_head;
        label_name;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;//[gc.dsConst.GuildWarRank]
            var rank = data[gc.dsConsts.GuildWarUserRank.rank];
            var rankStrs = ["1st", "2nd", "3rd"];

            self.label_killValue.text = data[gc.dsConsts.GuildWarUserRank.points].toString();
            var guildName = data[gc.dsConsts.GuildWarUserRank.guildName]?data[gc.dsConsts.GuildWarUserRank.guildName]:"";
            self.label_guild.text = guildName==""?"":mo.STR.format("[%s]",guildName);
            self.ico_head.setData({icoId:data[gc.dsConsts.GuildWarUserRank.iconId], vip:data[gc.dsConsts.GuildWarUserRank.vip]});
            self.label_name.text = data[gc.dsConsts.GuildWarUserRank.userName];
            if(rank<=3){
                self.ico_rank.source = "ico_arena_"+rankStrs[rank-1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }else{
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }
            var groupId = self.delegate.data.groupId;
            var rewardInfos = mo.getJSONWithFileName(gc.cfg_c_guildWarReward);
            var rewardInfo = rewardInfos[rank];
            var rewards;
            if(!rewardInfo){
                var keys = Object.keys(rewardInfos);
                rewardInfo = rewardInfos[keys[keys.length-1]];
            }
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
        }
    }
}