/**
 * Created by Administrator on 2015/11/14.
 */
module g_rank{
    export class Rank extends mo.gui.Dlg {
        moduleParam:IModuleParam.Rank;

        ico_rankNameFirst;
        label_rankByFirst;
        ico_avatarFirst;
        label_nameFirst;
        label_levelFirst;
        ico_bgRed;
        firstRank;

        ico_head;
        ico_rank;
        label_rank;
        label_rankByDesc;
        label_rankBy;
        ranks = [];
        tab_rank;
        grp_vipFirst;
        label_vipLvFirst;

        list_ranks;
        _Item_list_ranks;

        rankTypeList:Array<number>;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_ranks = RankItem;
            self.rankTypeList = [2,1,4,5,6,7,8,9,13];
        }

        onEnter() {
            super.onEnter();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            if(self.moduleParam && self.moduleParam.rankData){
                self.setData({rankData: self.moduleParam.rankData});
                if(self.moduleParam.rankType){
                    self.tab_rank.selectedIndex = self.rankTypeList.indexOf(self.moduleParam.rankType);
                }
            }
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            //[我的排名,我的数据(UserRankEntity),排行榜数据[UserRankEntity],[装备显示id,武器显示id,翅膀id,性别]]
            var rankData = self.data.rankData;
            var myRank = rankData[0]?rankData[0]:0;
            var myData = rankData[1];
            var list = rankData[2];
            var avatarDatas = rankData[3];
            var firstRank = self.firstRank = list[0];
            var guildNames = rankData[4];
            self.ranks.length = 0;
            for(var i=0; i<list.length; ++i){
                self.ranks[i] = {rank:i+1,userData:list[i], guildNames:guildNames};
            }
            self.ranks.shift();
            self.refreshList("list_ranks");

            //rankType	lvlRank	1	等级榜
            //rankType	combatRank	2	总战榜
            //rankType	goldRank	3	财富榜
            //rankType	wingRank	4	神翼榜
            //rankType	killRank	5	杀戮榜
            //rankType	arenaRank	6	竞技榜
            //rankType	zsRank	7	战神榜
            //rankType	fsRank	8	法神榜
            //rankType	dsRank	9	道尊榜

            var rankStrs = ["1st", "2nd", "3rd"];
            var desc;
            var rankType = myData[gc.dsConsts.UserRankEntity.rankType];
            if(myRank==0){
                self.label_rank.text = "未上榜";
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
                self.label_rankByDesc.text = "";
                self.label_rankBy.text = "";
            }else{
                if(myRank<=3){
                    self.ico_rank.source = "ico_arena_"+rankStrs[myRank-1];
                    self.ico_rank.visible = true;
                    self.label_rank.visible = false;
                }else{
                    self.label_rank.text = myRank;
                    self.ico_rank.visible = false;
                    self.label_rank.visible = true;
                }
                desc = self.getDescByType(rankType);
                self.label_rankByDesc.text = desc;
                if(desc!=""){
                    self.label_rankBy.text = mo.STR.format("%s",utils.formatByWan(myData[gc.dsConsts.UserRankEntity.rankValue]));
                }else{
                    self.label_rankBy.text = "";
                }
            }
            self.ico_head.setData({icoId:myData[gc.dsConsts.UserRankEntity.iconId], vip:gd.userCtrl.getVip()});

            self.ico_rankNameFirst.source = "ico_rank_name_"+rankType;
            desc = self.getDescByType(rankType);
            if(desc!=""){
                self.label_rankByFirst.text = mo.STR.format("%s: %s",desc,utils.formatByWan(firstRank[gc.dsConsts.UserRankEntity.rankValue]));
                self.ico_bgRed.visible = true;
                if(rankType==gc.c_prop.rankTypeKey.guildRank){
                    self.label_rankByFirst.text = mo.STR.format("%s: %s","会长",utils.formatByWan(firstRank[gc.dsConsts.UserRankEntity.userName]));
                }else if(rankType==gc.c_prop.rankTypeKey.paTaRank){
                    self.label_rankByFirst.text = mo.STR.format("%s: %s层",desc, firstRank[gc.dsConsts.UserRankEntity.rankValue]);
                }
            }else{
                self.label_rankByFirst.text = "";
                self.ico_bgRed.visible = false;
            }

            var lvl;
            if(rankType == gc.c_prop.rankTypeKey.guildRank){
                var guildName = guildNames[firstRank[gc.dsConsts.UserRankEntity.userId]];
                lvl = firstRank[gc.dsConsts.UserRankEntity.rankValue];
                self.label_nameFirst.text = mo.STR.format("[ubb color=#9900cd]%s[/ubb]",guildName);
                self.label_levelFirst.text = mo.STR.format("[ubb color=#fff000]Lv.%s[/ubb]", lvl);
            }else{
                lvl = firstRank[gc.dsConsts.UserRankEntity.userLvl];
                self.label_nameFirst.text = firstRank[gc.dsConsts.UserRankEntity.userName];
                self.label_levelFirst.text = mo.STR.format("Lv.%s", lvl);
            }

            var vip = firstRank[gc.dsConsts.UserRankEntity.pkWinCount];
            if(rankType==gc.c_prop.rankTypeKey.guildRank) vip = 0;
            self.label_vipLvFirst.text = vip.toString();
            if(vip>0){
                self.label_nameFirst.parent.addElementAt(self.grp_vipFirst, 0);
            }else{
                if(self.grp_vipFirst.parent)
                    self.grp_vipFirst.parent.removeElement(self.grp_vipFirst);
            }
            self.ico_avatarFirst.setData({clothesID:avatarDatas[0],weaponID:avatarDatas[1],wingID:avatarDatas[2],sex:avatarDatas[3],isKing:avatarDatas[4]});
        }

        getRankList(type) {
            var self = this;
            var obj = {list:[], myRankData:0};
            gd.rankCtrl.getAllRankArr(type, function(data){
                if(data) self.setData({rankData: data});
            },self);
        }

        _data_list_ranks():any[]{
            var self = this;
            return self.ranks;
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

        _tap_tab_rank(){
            var self = this;
            var selectedIndex = self.tab_rank.selectedIndex;
            self.getRankList(self.rankTypeList[selectedIndex]);
        }

        _click_list_ranks(event:egret.gui.ListEvent) {
            var self = this;
            var item = event.item;
            var userId = item.userData[gc.dsConsts.UserRankEntity.userId];
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, {userId:userId})
        }

        _tap_ico_avatarFirst(){
            var self = this;
            var rankData = self.data.rankData;
            var list = rankData[2];
            var userData = list[0];
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, {userId:userData[gc.dsConsts.UserRankEntity.userId]})
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Rank;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Rank, cb){
            var type = moduleParam.rankType? moduleParam.rankType : gc.c_prop.rankTypeKey.combatRank;
            gd.rankCtrl.getAllRankArr(type, function(data){
                if(!data) return cb("error");
                moduleParam.rankData = data;
                cb();
            }, this);
        });
    });
}