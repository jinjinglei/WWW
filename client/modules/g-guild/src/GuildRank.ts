/**
 * Created by Administrator on 2015/12/16.
 */
module g_guild{
    export class GuildRank extends mo.gui.Dlg{
        list_ranks;
        _Item_list_ranks;
        tab_rank;
        ranks = [];
        label_rankType;
        label_myRankDesc;
        label_myRank;
        label_myRankBy;
        label_myRankValue;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_ranks = GuildRankItem;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var rankData = self.data.rankData;
            var myRank = rankData[0]?rankData[0]:0;
            var myData = rankData[1];
            var list = rankData[2];
            var guildNames = rankData[4];
            var rankType = myData[gc.dsConsts.UserRankEntity.rankType];
            self.ranks.length = 0;
            for(var i=0; i<list.length; ++i){
                self.ranks[i] = {rank:i+1,userData:list[i], guildNames:guildNames};
            }

            self.label_myRankBy.text = self.getRankDesc(rankType)+": ";
            self.label_myRankDesc.text = rankType==gc.c_prop.rankTypeKey.chairmanCombatRank?"行会会长排行: ":"我的行会排行: ";
            self.label_myRank.text = myRank.toString();
            self.label_myRankValue.text = utils.formatByWan(myData[gc.dsConsts.UserRankEntity.rankValue]);

            self.refreshList("list_ranks");
        }

        getRankDesc(type){
            if(type == gc.c_prop.rankTypeKey.guildRank){
                return "行会等级";
            }else if(type == gc.c_prop.rankTypeKey.guildCombatRank){
                return "行会战力";
            }else if(type == gc.c_prop.rankTypeKey.chairmanCombatRank){
                return "会长战力";
            }
            return "";
        }

        _data_list_ranks():any[]{
            var self = this;
            return self.ranks;
        }

        getRankList(type) {
            var self = this;
            gd.rankCtrl.getAllRankArr(type, function(data){
                if(data) self.setData({rankData: data});
            },self);
        }

        _tap_tab_rank(){
            var self = this;
            var selectedIndex = self.tab_rank.selectedIndex;
            var types = [gc.c_prop.rankTypeKey.guildRank,gc.c_prop.rankTypeKey.guildCombatRank,gc.c_prop.rankTypeKey.chairmanCombatRank];
            this.getRankList(types[selectedIndex]);
        }
    }
}