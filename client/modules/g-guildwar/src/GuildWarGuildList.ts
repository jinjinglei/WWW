/**
 * Created by Administrator on 2016/4/8.
 */
module g_guildwar {
    export class GuildWarGuildList extends mo.gui.Dlg {
        list_guild:egret.gui.List;
        _Item_list_guild;
        label_guild;
        guildWarDef;
        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_guild = GuildWarGuildCell;

            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_LIST_UPDATE, function(){
                gd.guildWarCtrl.getGuildList(function(data){
                    self.data.list = data;
                    var ac:egret.gui.ArrayCollection = <egret.gui.ArrayCollection>self.list_guild.dataProvider;
                    ac.replaceAll(data);
                    //self.refreshList("list_guild");
                    //self.list_guild.scroller.throwVertically(self.list_guild.scroller.verticalScrollBar.getPosition());
                }, self);
            });
        }

        onExit(){
            super.onExit();

            var self = this;
            self.guildWarDef.goto(self.guildWarDef.isRobTab?1:0);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            gd.guildWarCtrl.setSyncSceneType(1);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
            self.guildWarDef = self.data.guildWarDef;
        }

        _data_list_guild():any[]{
            var self = this;
            return self.data.list;
        }

        //_tap_btn_help(){
        //    var self = this;
        //    var selectedIndex = self.tab_btn.selectedIndex;
        //    if (selectedIndex == 0) {
        //        var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
        //        g_base.BaseShowTip.create().setData({id: 64, param1: gameInfo[2], param2: gameInfo[3]}).show();
        //    } else if (selectedIndex == 1) {
        //        g_base.BaseShowTip.create().setData({id: 65}).show();
        //    }
        //}
    }
}