/**
 * Created by Administrator on 2015/10/19.
 */
module g_base{
    export var baseNotice;
    export class BaseNotice  extends mo.gui.Dlg {
        _trayName = 'top';
        label_noticeContent;
        ico_noticeBg;
        grp_notice;

        _initProp() {
            super._initProp();
            var self = this;
            self._penetrable = true;
            self._layerOpt.shownWithAction = false;

            self.touchChildren = self.touchEnabled = false;
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_NOTICE_UPDATE, self.onNoticeUpdate);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.grp_notice.visible = false;
            self.onNoticeUpdate(gd.chatCtrl.getNoticeList());
        }

        setMsgInfo(msgData:any, msgArgs:any[]){

        }

        dataChanged(){
            super.dataChanged();

        }

        curNotice;
        onNoticeUpdate(data){
            var self = this;
            if(data.length==0){
                self.grp_notice.visible = false;
                return;
            }
            if(self.grp_notice.visible)
                return;

            self.curNotice = data[0];
            var firstNoticeStr = gd.chatCtrl.getChatDataStr(self.curNotice);
            self.label_noticeContent.text = firstNoticeStr;
            process.nextTick(function(){
                process.nextTick(function() {
                    if(!self.grp_notice)return;
                    self.grp_notice.visible = true;
                    
                    self.label_noticeContent.x = 480;
                    self.grp_notice.height = this.label_noticeContent.height;
                    
                    var toX = -self.label_noticeContent.width;
                    egret.Tween.get(self.label_noticeContent).to({x: toX}, Math.abs(toX) * 40).call(function () {
                        self.grp_notice.visible = false;
                        gd.chatCtrl.delNotice(self.curNotice[gc.dsConsts.ChatData.uniqueId]);
                        self.onNoticeUpdate(gd.chatCtrl.getNoticeList());
                    }, self);
                });
            });
        }
    }
}
