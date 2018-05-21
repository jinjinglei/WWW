/**
 * Created by Administrator on 2015/11/14.
 */
module g_rank{
    export class RankItem extends mo.gui.ItemRenderer{
        ico_head;
        label_name;
        label_level;
        ico_rank;
        label_rank;
        label_rankBy;

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(!self.data.userData)return;
            var userData = self.data.userData;
            var guildNames = self.data.guildNames;
            var rank = self.data.rank;
            var rankStrs = ["1st", "2nd", "3rd"];
            var rankType = userData[gc.dsConsts.UserRankEntity.rankType];
            var desc = self.getDescByType(rankType);
            if(desc!=""){
                self.label_rankBy.text = mo.STR.format("%s: %s",desc,utils.formatByWan(userData[gc.dsConsts.UserRankEntity.rankValue]));
                if(rankType==gc.c_prop.rankTypeKey.guildRank){
                    self.label_rankBy.text = mo.STR.format("%s: %s","会长",utils.formatByWan(userData[gc.dsConsts.UserRankEntity.userName]));
                }else if(rankType==gc.c_prop.rankTypeKey.paTaRank){
                    self.label_rankBy.text = mo.STR.format("%s: %s层",desc,userData[gc.dsConsts.UserRankEntity.rankValue]);
                }
            }else{
                self.label_rankBy.text = "";
            }
            if(rank<=3){
                self.ico_rank.source = "ico_arena_"+rankStrs[rank-1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }else{
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }
            self.ico_head.setData({icoId:userData[gc.dsConsts.UserRankEntity.iconId], vip:userData[gc.dsConsts.UserRankEntity.pkWinCount]});
            var lvl;
            if(rankType == gc.c_prop.rankTypeKey.guildRank){
                var guildName = guildNames[userData[gc.dsConsts.UserRankEntity.userId]];
                lvl = userData[gc.dsConsts.UserRankEntity.rankValue];
                self.label_name.text = mo.STR.format("[ubb color=#9900cd]%s[/ubb]",mo.trans4UBB(guildName));
                self.label_level.text = mo.STR.format("[ubb color=#fff000]Lv.%s[/ubb]", lvl);
            }else{
                lvl  = userData[gc.dsConsts.UserRankEntity.userLvl];
                self.label_name.text = userData[gc.dsConsts.UserRankEntity.userName];
                self.label_level.text = mo.STR.format("Lv.%s", lvl);
            }

        }

        getDescByType(type){
            //等级榜	无
            //总战榜	战力：XXXX万
            //财富榜	累充元宝：XXXX万
            //神翼榜	总阶数：XXXX
            //杀戮榜	无
            //竞技榜	无
            //战神榜	战士战力：XXXXX
            //法神榜	法师战力：XXXXX
            //道尊榜	道士战力：XXXXX
            var str = "";
            if(type==1){
                str = "";
            }else if(type==2){
                str = "战力";
            }else if(type==3){
                str = "累充元宝";
            }else if(type==4){
                str = "总阶数";
            }else if(type==5){
                str = "PK积分";
            }else if(type==6){
                str = "";
            }else if(type==7){
                str = "战士战力";
            }else if(type==8){
                str = "法师战力";
            }else if(type==9){
                str = "道士战力";
            }else if(type==10){
                str = "行会等级";
            }else if(type==13){
                str = "镇妖塔战绩";
            }
            return str;
        }
    }
}