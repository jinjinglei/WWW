/**
   hd 实现系统通知的跑马灯
   大部分代码都是copy自BaseNotice
*/

module g_base {
    
    export class BaseSysNotice
    extends mo.gui.Dlg
    {
        static instance:BaseSysNotice = null;
        
        _trayName = 'top';
        label_noticeContent;
        ico_noticeBg;
        grp_notice;
        ico_laba;

        _initProp() {
            var self = this;
            super._initProp();
            mo.gui.helper.setSkinName(this, BaseNotice.__className);
            self._penetrable = true;
            self._layerOpt.shownWithAction = false;
            
            self.touchChildren = self.touchEnabled = false;
            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_SYSNOTICE_UPDATE, self.onNoticeUpdate);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.grp_notice.visible = false;
            //self.grp_notice.y += 40;
            self.onNoticeUpdate(gd.hoodinnCtlr.getAllNotices());
        }
        
        setMsgInfo(msgData:any, msgArgs:any[]) {

        }
        
        dataChanged(){
            super.dataChanged();
        }

        curNotice;
        onNoticeUpdate(data){
            var self = this;
            if (data.length==0) {
                self.grp_notice.visible = false;
                return;
            }
            
            if (self.grp_notice.visible)
                return;
            
            self.curNotice = data[0];

            // 获取间隔、次数等信息
            var sysArgs = self.curNotice[gc.dsConsts.ChatData.sysArgs];
            var cfgid = sysArgs[0];
            var interval = 0;
            var times = 1;
            if (cfgid == 9999) {
                interval = sysArgs[sysArgs.length - 1];
                times = sysArgs[sysArgs.length - 2];
            }

            // 查表得出消息的具体格式
            var firstNoticeStr:string;
            if (cfgid == 9999) {
                firstNoticeStr = sysArgs[1];
            } else {               
                firstNoticeStr = gd.hoodinnCtlr.getSysNoticeStr(self.curNotice);
            }

            // 设置，因为有可能是ubb，所以需要等下调整高度
            self.label_noticeContent.text = firstNoticeStr;
            
            process.nextTick(function(){
                process.nextTick(function() {
                    if (!self.grp_notice)
                        return;
                    self.grp_notice.visible = true;
                    
                    self.label_noticeContent.x = 480;
                    self.grp_notice.getChildAt(0).height = self.label_noticeContent.height + 10;
                    
                    var toX = -self.label_noticeContent.width;
                    var duration = Math.abs(toX)/480 * 12000;
                    if (duration < 12000)
                        duration = 12000;
                    
                    egret.Tween.get(self.label_noticeContent)
                        .to({x: toX}, duration)
                        .call(function () {
                            gd.hoodinnCtlr.delNotice(self.curNotice[gc.dsConsts.ChatData.uniqueId]);
                            var notices = gd.hoodinnCtlr.getAllNotices();
                            self.grp_notice.visible = false;
                            if (notices.length) {
                                self.onNoticeUpdate(notices);
                            }
                        }, self);
                });
            });
        }
        
    }    
}
