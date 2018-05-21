/**
 * Created by Administrator on 2015/11/19.
 */
module g_base{
    export class FirstEnterGame extends mo.gui.MsgDlg{

        ico_sanpin_txt;

        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var channel = mo_channel.getCurChannel();
            if(channel == 'weibo' || channel == '100191'){
                self.ico_sanpin_txt.visible = false;
            }
        }
    }
}