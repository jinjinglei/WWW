module g_base {
    export var baseShowAnnounce:BaseShowAnnounce = null;

    export class BaseShowAnnounce
    extends mo.gui.MsgDlg
    {
        label_tips:egret.gui.Label;
        ico_bg;

        _initProp() {
            var self = this;
            super._initProp();
            mo.gui.helper.setSkinName(this, BaseShowTip.__className);
            this.outsideClosable = false;
            self.dlgParam = {};
            self.msgData = {};
            self.msgArgs = [];
        }
        
        curAnnounce;
        curTimer;
        dataChanged() {
            super.dataChanged();
            var self = this;

            //self.label_tips.text = self.data.data;
            
            self.curAnnounce = self.data[0];
            
            var sysArgs = self.curAnnounce[gc.dsConsts.ChatData.sysArgs];
            self.label_tips.text = sysArgs[1];
            
            // 自动关闭
            var interval = sysArgs[sysArgs.length - 1];
            //self.btn_close.visible = interval <= 0;
            
            process.nextTick(function(){
                process.nextTick(function() {
                    self.ico_bg.height = self.label_tips.y * 2 + self.label_tips.height;
                    
                    if (interval > 0) {
                        self.curTimer = egret.setTimeout(self.close, self, interval * 1000);
                    }

                    self.onClose(function() {
                        // 启动下一个
                        g_base.baseShowAnnounce = null;

                        // 关闭计时器
                        egret.clearTimeout(self.curTimer);
                        self.curTimer = null;
                        
                        // 应用规则，开始下一个
                        gd.hoodinnCtlr.delAnnounce(self.curAnnounce[gc.dsConsts.ChatData.uniqueId]);
                        var datas = gd.hoodinnCtlr.getAllAnnounces();
                        if (datas.length)
                            g_base.baseShowAnnounce = g_base.BaseShowAnnounce.create().setData(datas).show();
                    });
                });
            });
        }        
    }    
}
