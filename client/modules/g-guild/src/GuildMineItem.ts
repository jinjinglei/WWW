module g_guild{

    export class GuildMineItem extends mo.gui.Layer {

        _initProp() {
            var self = this;
            super._initProp();
        }
        _tap_btn_enter()
        {
            GuildContributeLayer.create().show();
        }
    }
}