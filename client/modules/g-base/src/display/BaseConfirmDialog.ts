module g_base {
    
    export class BaseConfirmDialog
    extends mo.gui.Dlg
    {
        doWhat:number = 0;
        container;
        title;
        label_msg;
        titleDisplay:egret.gui.Label;

        _initProp() {
            var self = this;
            super._initProp();
            this.outsideClosable = false;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            self.label_msg.text = self.data.text || "";
            self.titleDisplay.text = self.data.title || "";
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            
            self.container.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
        }
        
        click_btn_close() {
            var self = this;
            self.doWhat = 0;
            self.container.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
            if (self.data.cbcancel)
                self.data.cbcancel.call(self.data.cbctx);
        }
        
        _tap_btn_confirm() {
            var self = this;
            self.doWhat = 1;
            self.close();
            if (self.data.cbok)
                self.data.cbok.call(self.data.cbctx);
        }
        
        _tap_btn_cancel() {
            var self = this;
            self.doWhat = 0;
            self.close();
            if (self.data.cbcancel)
                self.data.cbcancel.call(self.data.cbctx);
        }
    }
}
