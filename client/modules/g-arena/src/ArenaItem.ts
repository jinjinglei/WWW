/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_arena{
    export class ArenaItem extends mo.gui.ItemRenderer{

        label_rank;
        label_name;
        label_lv;
        label_combat;
        ico_head;
        ico_rank;
        label_guild;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            var rank;
            var rankStrs = ["1st", "2nd", "3rd"];

            self.label_name.text = data[gc.dsConsts.PKUserData.name];
            self.label_lv.text = mo.STR.format("Lv.%s",data[gc.dsConsts.PKUserData.lvl]);
            rank = data[gc.dsConsts.PKUserData.rank];
            if(rank<=3){
                self.ico_rank.source = "ico_arena_"+rankStrs[rank-1];
                self.ico_rank.visible = true;
                self.label_rank.visible = false;
            }else{
                self.label_rank.text = rank;
                self.ico_rank.visible = false;
                self.label_rank.visible = true;
            }

            if(rank>gd.arenaCtrl.getRank()){
                self.label_name.textColor = 0x6EC361;
            }else{
                self.label_name.textColor = 0xCCCDB1;
            }
            self.label_combat.text = mo.STR.format("战斗力：%s",data[gc.dsConsts.PKUserData.combat]);
            self.ico_head.setData({icoId:data[gc.dsConsts.PKUserData.iconId], vip:data[gc.dsConsts.PKUserData.vip]});
            var guildName = data[gc.dsConsts.PKUserData.guildName]?data[gc.dsConsts.PKUserData.guildName]:"";
            self.label_guild.text = guildName==""?"":mo.STR.format("[%s]",guildName);
        }

        _tap_btn_fight(){
            var self = this;
            gd.arenaCtrl.fightStart(self.data[gc.dsConsts.PKUserData.rank], function(pkTargets:Array<gd.HeroEntityCtrl>){
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, pkTargets, gc.c_prop.fightTypeKey.arena);
            },self);
        }

        _tap_ico_head(){
            var self = this;
            var data = self.data;
            var userId = data[gc.dsConsts.PKUserData.userId];
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, {userId:userId})
        }
    }
}