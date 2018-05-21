/**
 * Created by lihex on 3/7/16.
 */
module g_guildwar {

    export class GuildWarGuildCell extends mo.gui.ItemRenderer {
        label_name;
        label_server;
        label_live;
        label_score;
        barScore;
        btn_rob;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.barScore.maximum = 100;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//[gc.dsConst.GuildServer]

            self.label_name.text = [data[gc.dsConsts.GuildServer.guildName], data[gc.dsConsts.GuildServer.guildLvl]];
            self.label_live.text = [data[gc.dsConsts.GuildServer.doorLives], 4];
            self.label_score.text = data[gc.dsConsts.GuildServer.points];
            self.barScore.value = data[gc.dsConsts.GuildServer.progress];
            self.btn_rob.visible = data[gc.dsConsts.GuildServer.doorLives]!=0;
            self.label_server.text = data[gc.dsConsts.GuildServer.serverName];
        }

        _tap_btn_rob(){
            var self = this;
            var data = self.data;//[gc.dsConst.GuildServer]
            gd.guildWarCtrl.getWarAttackData(data[gc.dsConsts.GuildServer.serverId], data[gc.dsConsts.GuildServer.guildId],function(data){
                self.delegate.guildWarDef.data.atkData = data;
                gd.guildWarCtrl.curGuildServer = self.data;
                gd.guildWarCtrl.curDoor = 0;
                self.delegate.guildWarDef.goto(1);
                self.delegate.close();
            },self);
        }
    }
}