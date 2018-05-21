/**
 * Created by SmallAiTT on 2015/7/22.
 */
module g_msg{
    export class MsgAlert extends mo.gui.MsgDlg{

        btn_left:egret.gui.Button;
        btn_center:egret.gui.Button;
        btn_right:egret.gui.Button;

        //@override
        _initProp(){
            super._initProp();
            var self = this;
            self._btnNames = ['btn_left', 'btn_center', 'btn_right'];
        }
    }
}