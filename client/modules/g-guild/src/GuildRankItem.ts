/**
 * Created by Administrator on 2015/12/16.
 */
module g_guild{
    export class GuildRankItem extends mo.gui.ItemRenderer{
        label_rank;
        label_guildName;
        label_userName;
        label_level;
        label_rankType;
        label_id;

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(!self.data.userData)return;
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
            self.label_guildName.text = guildName;//mo.STR.format("[ubb color=#9900cd]%s[/ubb]",mo.trans4UBB(guildName));
            if(rankType==gc.c_prop.rankTypeKey.guildRank){
                self.label_level.text = mo.STR.format("Lv.%s", userData[gc.dsConsts.UserRankEntity.rankValue]);
            }else{
                self.label_level.text = utils.formatByWan(userData[gc.dsConsts.UserRankEntity.rankValue]);
            }
            self.label_id.text = userData[gc.dsConsts.UserRankEntity.userId];
            self.label_rankType.text = self.getRankDesc(rankType);
        }

        getRankDesc(type){
            if(type == gc.c_prop.rankTypeKey.guildRank){
                return "";
            }else if(type == gc.c_prop.rankTypeKey.guildCombatRank){
                return "战力:";
            }else if(type == gc.c_prop.rankTypeKey.chairmanCombatRank){
                return "战力:";
            }
            return "";
        }
    }
}