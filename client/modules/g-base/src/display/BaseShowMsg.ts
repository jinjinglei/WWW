module g_base {
    
    export class BaseShowMsg
    extends mo.gui.Dlg
    {
        label_tips:egret.gui.Label;
        ico_bg;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.outsideClosable = true;
            mo.gui.helper.setSkinName(this, BaseShowTip.__className);
        }

        private _timer;

        dataChanged() {
            super.dataChanged();            
            var self = this;

            self.label_tips.text = self.data.msg;

            // 是否自动关闭
            var interval = self.data.interval;
            if (interval != null) {
                self._timer = egret.setTimeout(self.close, self, interval * 1000);
            }
            
            process.nextTick(function(){
                process.nextTick(function() {
                    self.ico_bg.height = self.label_tips.y * 2 + self.label_tips.height;

                    if (self._timer) {
                        self.onClose(function() {
                            egret.clearTimeout(self._timer);
                            self._timer = null;
                        });
                    }
                });
            });
        }

    }
}
