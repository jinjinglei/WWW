/**
 * Created by Administrator on 2015/9/24.
 */
module g_guildwar{
    export class GuildWarRankGuildCell extends mo.gui.ItemRenderer{
        label_killValue;
        label_rank;
        ico_rank;
        label_guild;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;//[gc.dsConst.GuildWarRank]
            var rank = data[gc.dsConsts.GuildWarRank.rank];
            var rankStrs = ["1st", "2nd", "3rd"];

            self.label_killValue.text = data[gc.dsConsts.GuildWarRank.points].toString();
            var guildName = data[gc.dsConsts.GuildWarRank.guildName]?data[gc.dsConsts.GuildWarRank.guildName]:"";
            self.label_guild.text = guildName==""?"":mo.STR.format("[%s]",guildName);
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
                rewards = rewardInfo[gc.c_guildWarReward_diamond];
            }else if(groupId==gc.c_prop.guildGroupKey.wGold){
                rewards = rewardInfo[gc.c_guildWarReward_wgold];
            }else if(groupId==gc.c_prop.guildGroupKey.hGold){
                rewards = rewardInfo[gc.c_guildWarReward_hgold];
            }else if(groupId==gc.c_prop.guildGroupKey.silver){
                rewards = rewardInfo[gc.c_guildWarReward_silver];
            }else if(groupId==gc.c_prop.guildGroupKey.copper){
                rewards = rewardInfo[gc.c_guildWarReward_copper];
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