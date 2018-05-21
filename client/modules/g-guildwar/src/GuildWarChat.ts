/**
 * Created by Administrator on 2016/4/8.
 */
module g_guildwar {
    export class GuildWarChat extends mo.gui.Dlg {
        list_chat;
        label_input;
        btn_send;
        _Item_list_chat;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_chat = g_mid.ChatItem;

            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_GUILD_CHAT_UPDATE, function(dataList){
                self.onChatUpdate(gc.c_prop.chatTypeKey.guild, dataList);
            });
        }

        onChatUpdate(type, data){
            var self = this;
            self.refreshList("list_chat");
            var scroller = (<any>(self.list_chat)).scroller;
            process.nextTick(function(){
                if(!self.list_chat)return;
                scroller.throwVertically(scroller.getMaxScrollTop(),1);
            });
        }
        _tap_btn_send(){
            var self = this;
            gd.chatCtrl.sendData(mo.trans4UBB(self.label_input.text), gc.c_prop.chatTypeKey.guild, false, function(){
                self.label_input.text = "";
            },self);
        }
        _data_list_chat():any[] {
            var self = this, filter, sorter;
            return gd.chatCtrl.getGuildAllList();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
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