/**
 * Created by john on 15/12/3.
 */
module g_guild{

    export class GuildManagerCell extends mo.gui.ItemRenderer {
        ico_title;
        btn_action;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        _tap_btn_action() {
            var self = this;
            var guildData = self.data.guildData;
            var type = self.data.type;
            if(type == GuildManagerType.Apply)
            {
                GuildApplyList.create().setData(self.data).show();

            } else if(type == GuildManagerType.Exit) {//退出

                var position = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.position);
                if (position == gc.c_prop.guildPostKey.chairman) {//解散
                    if(gd.guildWarCtrl.isOpening()){
                        return mo.showMsg(gc.id_c_msgCode.noGuildDisband);
                    }
                    var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);
                    mo.showMsg(gc.id_c_msgCode.ifGdisband, gameInfo[5], function(){
                        gd.guildCtrl.exitGuild(gc.c_prop.guildMemberOpKey.dissolveGuild,function (data:any) {
                            //返回主城
                            self.delegate.close();
                            mo.moduleMgr.curModule.subModules[0].target.close();
                        }, self);
                    }, self);

                } else {
                    if(gd.guildWarCtrl.isOpening()){
                        return mo.showMsg(gc.id_c_msgCode.noGuildOut);
                    }
                    var da = gd.guildCtrl.getExitGuildCD();
                    mo.showMsg(gc.id_c_msgCode.ifQuitGuild, da, function(){
                        gd.guildCtrl.exitGuild(gc.c_prop.guildMemberOpKey.quitGuild, function (data:any) {
                            //返回主城
                            self.delegate.close();
                            mo.moduleMgr.curModule.subModules[0].target.close();
                        }, self);
                    }, self);
                }
            }else if(type == GuildManagerType.Notice){

                GuildUpdateNotice.create().setData(guildData).show();

            }else if(type == GuildManagerType.Setting){
                 GuildSetting.create().setData(self.data).show();
            }else if(type == 999){
            }
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var type = self.data.type;
            if(type == GuildManagerType.Apply)
            {
                self.ico_title.source = "ico_ruhuishenqing";
                self.btn_action.icon = "btn_txt_look";
            }else if(type == GuildManagerType.Exit){

                var position =  gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.position);
                if(position == gc.c_prop.guildPostKey.chairman)
                {
                    self.ico_title.source = "ico_jiesangonghui";
                    self.btn_action.icon = "btn_txt_shenzhong";
                }
                else{
                    self.ico_title.source = "ico_tuicuhanghui";
                    self.btn_action.icon = "btn_txt_shenzhong";
                }

            }else if(type == GuildManagerType.Notice){
                self.ico_title.source = "ico_xiugaigonggao"
                self.btn_action.icon = "btn_txt_xiugai";

            }else if(type == GuildManagerType.Setting){
                self.ico_title.source = "ico_gonghuishezhi";
                self.btn_action.icon = "btn_txt_setting";
            }else if(type == 999){
                self.ico_title.source = "ico_gonghuipaihang";
                self.btn_action.icon = "btn_txt_look";
            }
        }
    }
}