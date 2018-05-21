/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{
    export var isShowOffline=false;
    export class Notice extends mo.gui.MsgDlg{
        label_title;
        label_text;
        ico_head;
        noticeData;

        _initProp(){
            var self = this;
            super._initProp();
            self.outsideClosable = true;
        }

        onExit(){
            super.onExit();
            var count = mo.getLocalStorageItem("noticeCloseCount");
            mo.setLocalStorageItem("noticeCloseCount", parseInt(count)+1);

            if(!isShowOffline){
                isShowOffline = true;
                var offlineData = (gd.userCtrl && gd.userCtrl.offLineData) ||[];
                if(offlineData[0]>0){
                    mo.showMsg(gc.id_c_msgCode.offlineGain, {offlineProfit: offlineData});
                }
            }
        }

        //@override
        _handleExtArg(arg) {
            var self = this;
            var sysNotice = arg.sysNotice;
            if(sysNotice){
                self.label_title.text = sysNotice[gc.dsConsts.NoticeEntity.title];
                self.label_text.text = sysNotice[gc.dsConsts.NoticeEntity.content];
                var exData = sysNotice[gc.dsConsts.NoticeEntity.exData];
                if(exData){
                    var icon = exData['1'];
                    if(icon){
                        var url = "resource/ui2/ui_notice/"+icon;
                        RES.getResByUrl(url, function (texture:egret.Texture) {
                            self.ico_head.source = texture;
                        }, self, RES.ResourceItem.TYPE_IMAGE);
                    }
                }
            }
        }
    }
}