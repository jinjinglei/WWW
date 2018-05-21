/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{
    export class CloseInfoDlg extends mo.gui.Dlg{

        btn_info:egret.gui.Button;
        _helpDataId;

        //@override
        partAdded(name, instance){
            super.partAdded(name, instance);
            var self = this;
            // 设置默认的关闭按键
            var TAP = egret.TouchEvent.TOUCH_TAP;
            if(name == 'container') {
                var btn_info = instance.btn_info;
                if(btn_info) btn_info.addEventListener(TAP, self._tap_btn_info, self);
            }
        }

        _tap_btn_info(){
            var self = this;
            if(self._helpDataId != null){
                BaseShowTip.create().setData({id:self._helpDataId}).show();
            }
        }

    }
}