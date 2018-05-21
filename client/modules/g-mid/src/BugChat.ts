module g_mid {
    
    export class BugChat
    extends mo.gui.Dlg
    {
        label_input;
        label_content;
        label_openid;
        label_weburl;
        img_pctips;
        btn_bbs;
        scroller:egret.gui.Scroller;
        
        _initProp() {
            super._initProp();
            var self = this;

            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_BUGCHAT_UPDATE, self.onChatUpdate);
        }
        
        onEnter() {
            super.onEnter();
            gd.hoodinnCtlr.openBugChatWindow();

            this.label_openid.text = '您的OPENID:' + gd.accountCtrl.get(gc.dsConsts.AccountEntity.sdkData).open_id;
            this.label_weburl.text = mo_channel.getCurChannel().homeUrl();
            this.img_pctips.visible = this.label_weburl.text != '';

            this.btn_bbs.visible = mo_channel.getCurChannel().channel() == 'qqbrowser';
        }
        
        onExit() {
            super.onExit();
            gd.hoodinnCtlr.closeBugChatWindow();
        }
        
        onChatUpdate(data:any[]) {
            var self = this;
            self.clearChat();
            var allStr = "";
            for(var i=0; i<data.length; ++i) {
                var str = gd.hoodinnCtlr.getBugChatStr(data[i]);
                allStr += str + "\n";
            }
            self.label_content.text = allStr;
            process.nextTick(function() {
                if (!self.scroller)
                    return;
                self.scroller.throwVertically(self.scroller.getMaxScrollTop(), 1);
            });
        }
        
        clearChat() {
            var self = this;
            self.label_content.text = "";
        }
        
        _tap_btn_send() {
            var self = this;
            gd.hoodinnCtlr.sendBugChat(mo.trans4UBB(self.label_input.text), function() {
                self.label_input.text = "";
            }, self);            
        }

        _tap_btn_bbs() {
            location.href = 'http://circle.html5.qq.com/?from=011&ch=20&gameId=8392920187#circle/q_11833288344_1449127137920445';
        }
    }
}
