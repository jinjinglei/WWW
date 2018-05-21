/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{
    export class NoticeContentDlg extends mo.gui.Dlg{
        label_title;
        label_text;
        ico_head;
        noticeData;

        _initProp(){
            var self = this;
            super._initProp();
            self.outsideClosable = true;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var notices = self.data.notices;

            if(notices.length==0){
                self.label_title.text = "暂无";
                self.label_text.text = "";
                return;
            }

            var sysNotice = notices[0];
            var type = sysNotice[gc.dsConsts.NoticeEntity.iconType];

            if(type != 4){
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
            }else{
                self.label_title.text = "跨服战况";

                var str = "";
                for(var i=0; i<notices.length; ++i){
                    var notice = notices[i];
                    str += notice[gc.dsConsts.NoticeEntity.content]+"\n\n";
                }
                self.label_text.text = str;
            }
        }
    }
}