/**
 * Created by john on 15/12/4.
 */
module g_guild {
    export class GuildMemberItem extends mo.gui.ItemRenderer {

        label_level;
        label_name;
        label_attack;
        label_gongx;
        label_role;
        ico_head;
        label_mLv;
        label_ennoble;
        label_loginDate;
        right_rect;

        _initProp() {
            super._initProp();


        }
        dataChanged() {
            super.dataChanged();
            var self = this;
            if(self.data.label)
                 return;

            var memberData = self.data;
            var level = memberData[gc.dsConsts.GuildMember.lvl];
            var name = memberData[gc.dsConsts.GuildMember.nickName];
            var combat = memberData[gc.dsConsts.GuildMember.combat];
            var upact = memberData[gc.dsConsts.GuildMember.guildAct];
            var position = memberData[gc.dsConsts.GuildMember.position];

            self.label_level.text = "Lv." + level;
            self.label_name.text = name;
            self.label_role.text = gc.c_prop.guildPost[position];
            self.label_attack.text =  combat;
            self.label_gongx.text = upact + "";
            var ennoble = memberData[gc.dsConsts.GuildMember.ennoble];
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
            var mLv = gd.guildCtrl.getRankFileLvl(memberData[gc.dsConsts.GuildMember.guildAct]);
            self.label_mLv.text = mLv+"级会员";
            self.ico_head.setData({icoId:memberData[gc.dsConsts.GuildMember.iconId], vip:memberData[gc.dsConsts.GuildMember.vip]});
            var offlineHour = memberData[gc.dsConsts.GuildMember.offlineHour];
            if(offlineHour<=0){
                self.label_loginDate.text = "在线";
            }else if(offlineHour<=24){
                self.label_loginDate.text = mo.STR.format("%s小时前离开", offlineHour);
            }else{
                self.label_loginDate.text = mo.STR.format("%s日未登录", offlineHour/24>>0);
            }
        }

        _tap_ico_head(){
            var self = this;
            var memberData = self.data;
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, {userId:memberData[gc.dsConsts.GuildMember.userId]});
        }

        _tap_right_rect(){
            var self = this;
            var memberData = self.data;
            GuildMemberManager.create().setData({userId:memberData[gc.dsConsts.GuildMember.userId]}).show().onClose(function(){
                self.delegate.reset();
            });
        }

    }
}