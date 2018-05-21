/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{
    export class NoticeDlg extends mo.gui.Dlg{

        _initProp(){
            var self = this;
            super._initProp();
            self.outsideClosable = true;
        }

        _tap_ico_title_1(){
            NoticeContentDlg.create().setData({notices:gd.NoticeCtrl.getTpyeNotice(3)}).show();
        }
        _tap_ico_title_4(){
            NoticeContentDlg.create().setData({notices:gd.NoticeCtrl.getTpyeNotice(4)}).show();
        }
        _tap_ico_title_2(){
            NoticeContentDlg.create().setData({notices:gd.NoticeCtrl.getTpyeNotice(2)}).show();
        }
    }
}