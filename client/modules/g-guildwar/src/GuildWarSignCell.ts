/**
 * Created by Administrator on 2016/4/8.
 */
module g_guildwar {

    export class GuildWarSignCell extends mo.gui.ItemRenderer {
        label_condition;
        ico_title;
        ico_sign;
        ico_lastWeak;
        btn_sign;
        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//[groupId,isSign]
            var combat;
            var ico = 0;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var icos = ["ico_zsyt", "ico_bjf", "ico_hjj", "ico_byt", "ico_qt"];
            switch (data[0]){
                case gc.c_prop.guildGroupKey.diamond:
                    combat = gameInfo[11];
                    ico = 0;
                    break;
                case gc.c_prop.guildGroupKey.wGold:
                    combat = gameInfo[10];
                    ico = 1;
                    break;
                case gc.c_prop.guildGroupKey.hGold:
                    combat = gameInfo[9];
                    ico = 2;
                    break;
                case gc.c_prop.guildGroupKey.silver:
                    combat = gameInfo[8];
                    ico = 3;
                    break;
                case gc.c_prop.guildGroupKey.copper:
                    combat = gameInfo[7];
                    ico = 4;
                    break;
                default :
                    break;
            }
            self.label_condition.text = [combat.split(",")[0], combat.split(",")[1]];
            self.ico_title.source = icos[ico];
            self.ico_sign.visible = self.data[1]==self.data[0];
            self.btn_sign.visible = !self.data[1];
        }
        _tap_btn_sign(){
            var self = this;
            var data = self.data;
            gd.guildWarCtrl.signUp(data[0],function(groupId){
                self.delegate.data.sign = groupId;
                self.delegate.dataChanged();
            },self);
        }
        _tap_btn_look(){
            var self = this;
            GuildWarRewardLook.create().setData({group:self.data[0]}).show();
        }
        _tap_ico_lastWeak(){
            var self = this;
            gd.guildWarCtrl.getLastRankList(self.data[0], function(data){
                GuildWarRank.create().setData({rankData:data, groupId:self.data[0]}).show();
            },self);
        }
    }
}