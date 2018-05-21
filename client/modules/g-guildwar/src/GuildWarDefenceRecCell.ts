/**
 * Created by Administrator on 2016/1/25.
 */
module g_guildwar{
    export class GuildWarDefenceRecCell extends mo.gui.ItemRenderer{
        ico_def;
        label_desc;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//gc.dsConsts.GuildWarDefenceRecord
            //{isWin:1,time:2,door:3,attackServerId:4,attackServerName:5,attackUserName:6,attackGuildName:7,defenceUserName:8,hp:9},
            if(!data[gc.dsConsts.GuildWarDefenceRecord.time]) return;
            var isWin = data[gc.dsConsts.GuildWarDefenceRecord.isWin];
            var time = Date.newDate(data[gc.dsConsts.GuildWarDefenceRecord.time]);
            var serverName = data[gc.dsConsts.GuildWarDefenceRecord.attackServerName];
            var attackGuildName = data[gc.dsConsts.GuildWarDefenceRecord.attackGuildName];
            var attackName = data[gc.dsConsts.GuildWarDefenceRecord.attackUserName];
            var door = data[gc.dsConsts.GuildWarDefenceRecord.door];
            var defeseName = data[gc.dsConsts.GuildWarDefenceRecord.defenceUserName];
            var hp = data[gc.dsConsts.GuildWarDefenceRecord.hp];
            var isDirect = data[gc.dsConsts.GuildWarDefenceRecord.isDirect];
            var str;
            if(!isWin){//反一下
                self.ico_def.source = "ico_pvp_win";
                str = "[%s]来自[ubb color=#fd68ff]%s[/ubb]的%s[ubb color=red]%s[/ubb]攻击了%s门，被守卫[ubb color=#00cdff]%s[/ubb]击败，但%s门还是损失了%s生命。";
                str = mo.STR.format(str,
                    time.toFormat("HH24:MI"),
                    serverName,
                    attackGuildName,
                    attackName,
                    gc.c_prop.guildWarDoor[door],
                    defeseName,
                    gc.c_prop.guildWarDoor[door],
                    hp);
            }else{
                self.ico_def.source = "ico_pvp_fail";
                if(!isDirect){
                    str = "[%s]来自[ubb color=#fd68ff]%s[/ubb]的%s[ubb color=red]%s[/ubb]击败了%s门守卫[ubb color=#00cdff]%s[/ubb]，%s门损失%s生命！"
                    str = mo.STR.format(str,
                        time.toFormat("HH24:MI"),
                        serverName,
                        attackGuildName,
                        attackName,
                        gc.c_prop.guildWarDoor[door],
                        defeseName,
                        gc.c_prop.guildWarDoor[door],
                        hp);
                }else{
                    str = "[%s]因无人守卫，%s门被[ubb color=#fd68ff]%s[/ubb]的%s[ubb color=red]%s[/ubb]攻打，损失了%s生命。"
                    str = mo.STR.format(str,
                        time.toFormat("HH24:MI"),
                        gc.c_prop.guildWarDoor[door],
                        serverName,
                        attackGuildName,
                        attackName,
                        hp);
                }

            }
            self.label_desc.text = str;
        }
    }
}