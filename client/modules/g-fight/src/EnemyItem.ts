/**
 * Created by Administrator on 2015/11/26.
 */
module g_fight {
    export class EnemyItem extends mo.gui.ItemRenderer {
        label_rank;
        label_name;
        label_lv;
        label_combat;
        ico_head;
        label_guild;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            if(data.hasOwnProperty("label"))return;

            self.label_name.text = data[gc.dsConsts.PkOutUserData.name];
            self.label_name.textColor = uiHelper.getUserNameColor(data[gc.dsConsts.PkOutUserData.pkValue]);
            self.label_lv.text = mo.STR.format("Lv.%s",data[gc.dsConsts.PkOutUserData.lvl]);
            self.label_combat.text = mo.STR.format("战斗力：%s",data[gc.dsConsts.PkOutUserData.combat]);
            self.ico_head.setData({icoId:data[gc.dsConsts.PkOutUserData.iconId], vip:data[gc.dsConsts.PkOutUserData.vip]});
            var guildName = data[gc.dsConsts.PkOutUserData.guildName]?data[gc.dsConsts.PkOutUserData.guildName]:"";
            self.label_guild.text = guildName==""?"":mo.STR.format("[%s]",guildName);
        }

        _tap_btn_fight(){
            var self = this;
            //gd.arenaCtrl.fightStart(self.data[gc.dsConsts.PkOutUserData.rank], function(pkTargets:Array<gd.HeroEntityCtrl>){
            //    var myList = gd.heroCtrl.getList();
            //    gd.fightCtrl.startPvpFight(myList, pkTargets, gc.c_prop.fightTypeKey.arena);
            //},self);
            PVPBattle.create().setData({enemy:self.data}).show();
            self.delegate.close();
        }
    }
}