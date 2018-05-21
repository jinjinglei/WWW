/**
 * Created by Administrator on 2016/2/17.
 */
module g_base {
    export class NoticeTitleItem extends mo.gui.ItemRenderer {
        //label_title;
        ico_title;
        //label_date;

        dataChanged(){
            super.dataChanged();

            var self = this;
            var data = self.data;
            //self.label_title.text = data[gc.dsConsts.NoticeEntity.title];
            self.ico_title.source = "ico_notice_t_"+data[gc.dsConsts.NoticeEntity.iconType];
            //self.label_date.text = mo.STR.format("活动时间：%s--%s",
            //    Date.newDate(data[gc.dsConsts.NoticeEntity.startTime]).toFormat("MM月DD日HH24:MI"),
            //    Date.newDate(data[gc.dsConsts.NoticeEntity.endTime]).toFormat("MM月DD日HH24:MI"));
        }

        _tap_ico_title(){
            var self = this;
            NoticeContentDlg.create().setData(self.data).show();
        }
    }
}