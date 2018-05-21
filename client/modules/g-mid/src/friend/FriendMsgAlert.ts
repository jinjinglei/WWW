module g_mid {
    
    export class FriendMsgAlert
    extends mo.gui.Dlg
    {
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
        
        _tap_btn_confirm() {
            var self = this;

            var callback = self.data.callback;
            if(callback)
                callback();

            self.close();
        }
    }
    
}