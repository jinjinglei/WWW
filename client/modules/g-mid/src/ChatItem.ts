/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_mid{
    export class ChatItem extends mo.gui.ItemRenderer{

        label_content;
        grp_user;
        label_user_name;
        label_user_msg;
        img_user_title;
        grp_user_title;
        ico_laba;

        _initProp(){
            super._initProp();
            var self = this;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        _switchChatItemStyle(type){
            var self = this;
            if(type == gc.c_prop.chatTypeKey.user || type == gc.c_prop.chatTypeKey.guild){
                self.label_content.visible = false;
                self.label_content.includeInLayout = false;
                self.grp_user.visible = true;
                self.grp_user.includeInLayout = true;
            }else{
                self.label_content.visible = true;
                self.label_content.includeInLayout = true;
                self.grp_user.visible = false;
                self.grp_user.includeInLayout = false;
            }
        }

        _setMedalTitle(medalId){
            var self = this;
            var hasTitle = medalId != 0;
            self.grp_user_title.visible = hasTitle;
            self.grp_user_title.includeInLayout = hasTitle;
            if(hasTitle){
                self.img_user_title.source = resHelper.getChatTitle(medalId);
            }
        }


        dataChanged(){
            super.dataChanged();
            var self = this;
            var chatData = self.data;
            var type = chatData[gc.dsConsts.ChatData.type];
            var str = "";
            var userName = "", msg = "";
            //切换显示样式
            self._switchChatItemStyle(type);
            self.ico_laba.source = "ico_blank_point";
            if(type == gc.c_prop.chatTypeKey.user){
                var userArgs = chatData[gc.dsConsts.ChatData.userArgs];
                var isGM = userArgs[3];
                var guildName:string = userArgs[4];
                var medalId = userArgs[5] || 0;
                var chatContent:string = userArgs[2];
                var islaba =  userArgs[6] || 0;
                if(islaba == 1){
                    self.ico_laba.source = "ico_chat_laba";
                }
                if(isGM){
                    userName = mo.STR.format("[ubb color=#ff0000]【GM %s】[/ubb]", userArgs[0]);
                    msg =  mo.STR.format("[ubb color=#ff0000]%s[/ubb]", chatContent);
                }else{
                    if(userArgs[1]>0){
                        userName = mo.STR.format("[ubb color=#ffad00]VIP%s [/ubb][ubb color=#00cdff]%s[/ubb]",userArgs[1], userArgs[0]);
                    }else{
                        userName = mo.STR.format("[ubb color=#00cdff]%s[/ubb]",userArgs[0]);
                    }
                    if(guildName!=""){
                        userName = mo.STR.format("[ubb color=#e76df5]%s[/ubb]", mo.trans4UBB(mo.STR.format("[%s]", guildName))) + userName;
                    }
                    msg =  mo.STR.format("[ubb color=#ffffff]%s[/ubb]", chatContent);
                }
                self.label_user_name.text = userName;
                self.label_user_msg.text = msg;
                self._setMedalTitle(medalId);
            }else if(type == gc.c_prop.chatTypeKey.guild){
                var guildArgs = chatData[gc.dsConsts.ChatData.guildArgs];//玩家公会聊天参数 [用户名,vip,头衔,聊天内容, 称号]
                //[公会头衔][vip4 名字]: 内容 普通成员不显示头衔
                userName = mo.STR.format("%s%s[ubb color=#00cdff]%s[/ubb]"
                    ,guildArgs[2] == gc.c_prop.guildPostKey.rankFile? "" : mo.STR.format("[ubb color=#F6EC6B][%s][/ubb]",gc.c_prop.guildPost[guildArgs[2]])
                    ,guildArgs[1] > 0? mo.STR.format("[ubb color=#ffad00]VIP%s [/ubb]", guildArgs[1]) : ""
                    ,guildArgs[0]);
                msg =  mo.STR.format("[ubb color=#ffffff]%s[/ubb]", guildArgs[3]);
                medalId = guildArgs[4] || 0;
                self.label_user_name.text = userName;
                self.label_user_msg.text = msg;
                self._setMedalTitle(medalId);
            }else {
                var sysArgs = chatData[gc.dsConsts.ChatData.sysArgs];
                var sysInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_chatSys, sysArgs[0]);
                str = "【系统】";
                if(sysArgs.length==2){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1]);
                }else if(sysArgs.length==3){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2]);
                }else if(sysArgs.length==4){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3]);
                }else if(sysArgs.length==5){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4]);
                }else if(sysArgs.length==6){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5]);
                }else if(sysArgs.length==7){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5],sysArgs[6]);
                }else if(sysArgs.length==8){
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text],sysArgs[1],sysArgs[2],sysArgs[3],sysArgs[4],sysArgs[5],sysArgs[6],sysArgs[7]);
                }
                self.label_content.text = str;
            }
        }
    }
}