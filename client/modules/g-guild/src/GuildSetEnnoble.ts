/**
 * Created by Administrator on 2015/12/17.
 */
module g_guild{
    export class GuildSetEnnoble extends mo.gui.Dlg{
        label_name;
        ico_head;
        label_lv;
        label_position;
        label_myExp;
        label_myGuildLv;
        label_combat;
        label_ennoble;
        btn_cancel;
        btn_confirm;
        list_items:egret.gui.List;
        _Item_list_items;

        _initProp() {
            super._initProp();
            var self = this;
            self._Item_list_items = GuildEnnobleItem;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;

            var memberData = gd.guildCtrl.getMemberByUserId(self.data.userId);
            var level = memberData[gc.dsConsts.GuildMember.lvl];
            var name = memberData[gc.dsConsts.GuildMember.nickName];
            var combat = memberData[gc.dsConsts.GuildMember.combat];
            var upact = memberData[gc.dsConsts.GuildMember.guildAct];
            var position = memberData[gc.dsConsts.GuildMember.position];
            var mLv = gd.guildCtrl.getRankFileLvl(memberData[gc.dsConsts.GuildMember.guildAct]);
            self.label_myGuildLv.text = mLv+"级会员";
            self.ico_head.setData({icoId:memberData[gc.dsConsts.GuildMember.iconId], vip:memberData[gc.dsConsts.GuildMember.vip]});

            self.label_lv.text = "Lv." + level;
            self.label_name.text = name;
            self.label_position.text = gc.c_prop.guildPost[position];
            self.label_combat.text = combat + "";
            self.label_myExp.text = upact + "";
            var ennoble = memberData[gc.dsConsts.GuildMember.ennoble];
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];

            process.nextTick(function(){
                process.nextTick(function(){
                    for(var i=0; i<self.list_items.dataProvider.length; ++i){
                        if(self.list_items.dataProvider.getItemAt(i).ennobleData[0]==ennoble){
                            self.list_items.selectedIndex = i;
                            return;
                        }
                    }
                });
            });
        }

        _data_list_items():any[] {
            var self = this;
            var awardUI = gd.guildCtrl.getAwardUi();
            var datas = [];

            for(var i=0; i<awardUI.length; ++i){
                datas.push({memberData:gd.guildCtrl.getMemberByUserId(self.data.userId), ennobleData:awardUI[i]})
            }

            return datas;
        }

        _tap_btn_cancel(){
            this.close();
        }
        _tap_btn_confirm(){
            var self = this;
            if(!self.list_items.selectedItem){
                return mo.showMsg(gc.id_c_msgCode.notChooseLv);
            }
            var ennobleId = self.list_items.selectedItem.ennobleData[0];
            self.setEnnoble(ennobleId);
        }

        setEnnoble(type){
            var self = this;
            var memberData =  gd.guildCtrl.getMemberByUserId(self.data.userId);
            var userId = memberData[gc.dsConsts.GuildMember.userId];
            gd.guildCtrl.setEnnoble(userId, type, function(){
                memberData[gc.dsConsts.GuildMember.ennoble] = type;
                var ennoble = memberData[gc.dsConsts.GuildMember.ennoble];
                self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
                self.close();
            },self);
        }
    }
}