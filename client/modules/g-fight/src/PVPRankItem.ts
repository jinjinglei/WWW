/**
 * Created by Administrator on 2015/9/24.
 */
module g_fight{
    export class PVPRankItem extends mo.gui.ItemRenderer{
        label_lvl;
        label_name;
        label_combat;
        label_killValue;
        label_rank;
        grp_res0;
        grp_res1;
        ico_head;
        ico_rank;
        btn_challenge;
        label_guild;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
            var rank = data[gc.dsConsts.Rank.rank];
            var awards = gd.pkOutCtrl.getRankAward(rank);
            var rankStrs = ["1st", "2nd", "3rd"];

            self.label_name.text = data[gc.dsConsts.Rank.name];
            self.label_name.textColor = uiHelper.getUserNameColor(data[gc.dsConsts.Rank.pkValue]);
            self.label_lvl.text = data[gc.dsConsts.Rank.lvl].toString();
            self.label_combat.text = data[gc.dsConsts.Rank.combat].toString();
            self.label_killValue.text = data[gc.dsConsts.Rank.killValue].toString();
            var guildName = data[gc.dsConsts.Rank.guildName]?data[gc.dsConsts.Rank.guildName]:"";
            self.label_guild.text = guildName==""?"":mo.STR.format("[%s]",guildName);
            if(rank<=3){
                self.ico_rank.source = "ico_arena_"+rankStrs[rank-1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
                if(gd.userCtrl.getId()==data[gc.dsConsts.Rank.userId]||gd.pkOutCtrl.isTodayRankWin(data[gc.dsConsts.Rank.userId])){
                    self.btn_challenge.visible = false;
                }else{
                    self.btn_challenge.visible = true;
                }
            }else{
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
                self.btn_challenge.visible = false;
            }
            self.ico_head.setData({icoId:data[gc.dsConsts.Rank.iconId], vip:data[gc.dsConsts.Rank.vip]});
            uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.gold, awards[1]);
            uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.starStone, awards[0]);
        }

        _tap_btn_challenge(){
            var self = this;
            var data = self.data;
            gd.pkOutCtrl.start(data[gc.dsConsts.Rank.userId],gc.c_prop.fightTypeKey.rankPk,0,function(pkTargets:Array<gd.HeroEntityCtrl>){
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, pkTargets,gc.c_prop.fightTypeKey.rankPk, data[gc.dsConsts.Rank.name]);
                self.delegate.close();
            },self);
        }
    }
}