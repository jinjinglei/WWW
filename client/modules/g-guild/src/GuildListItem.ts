/**
 * Created by john on 15/12/4.
 */

module g_guild{

    export class GuildListItem extends mo.gui.ItemRenderer {
        label_lv;
        label_name;
        label_count;
        btn_join;
        ico_background;
        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(self.data.label){
                return;
            }
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var guildData = self.data.guildData;
            var lvl = guildData[gc.dsConsts.GuildEntity.lvl];
            var lvlInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lvl);

            self.label_lv.text = mo.STR.format("Lv.%s",lvl);
            self.label_name.text = guildData[gc.dsConsts.GuildEntity.name];
            self.label_count.text = mo.STR.format("%s/%s",guildData[gc.dsConsts.GuildEntity.guildPopulation],lvlInfo[gc.c_lvl_guildMan]);
            self.checkBtn(guildData, guildPersonalData);
        }

        checkBtn(curGuildItem, guildPersonalData){
            var self = this;
            var id = curGuildItem[gc.dsConsts.GuildEntity.id];
            var applieds = guildPersonalData[gc.dsConsts.GuildPersonalEntity.appliedMsg];
            if(applieds && applieds.indexOf(id)!=-1){
                self.btn_join.enabled = false;
                self.btn_join.icon = "btn_txt_yishengqing";
            }else{
                self.btn_join.enabled = true;
                self.btn_join.icon = "btn_txt_jiaru";
            }
        }

        _tap_btn_join(){
            var self = this;
            var guildData = self.data.guildData;
            gd.guildCtrl.joinGuild(guildData[gc.dsConsts.GuildEntity.id],function(data){
                var isJoin = data;
                if(isJoin){
                    self.delegate.close();
                    process.nextTick(function(){
                        mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer);
                    });
                }else{
                    var guildPersonalData = gd.guildPersonalCtrl.getData();
                    self.checkBtn(guildData, guildPersonalData);
                }
            },self);
        }
    }
}