/**
 * Created by john on 15/12/4.
 */
module g_guild{
    export class GuildSearchResult extends mo.gui.Dlg{
        list_items:egret.gui.List;
        _Item_list_items;

        _initProp() {
            var self = this;
            super._initProp();
            self._Item_list_items = GuildListItem;
        }

        _data_list_items():any[]{
            var self = this;
            return [{guildData:self.data}];
        }
    }
}