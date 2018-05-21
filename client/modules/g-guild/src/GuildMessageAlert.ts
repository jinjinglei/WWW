module g_guild{
    export class GuildMessageAlert extends mo.gui.Dlg {

        label_message;
        container;

        _tap_btn_cancel(){
            var self = this;
            self.close();
        }
        dataChanged() {
            super.dataChanged();
            var self = this;

            var msg = self.data.msg;
            var icon = self.data.icon;
            self.label_message.text = msg;
            self.container.title = icon;
        }

        _tap_btn_confirm(){
            var self = this;
            self.close();
            var callback = self.data.callback;
            if(callback)
                callback();
        }
    }
}