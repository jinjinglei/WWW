/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{
    export class BugFeedBack extends mo.gui.Dlg{
        label_qq;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.label_qq.text = mo.STR.format("QQ群：%s",mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.contactUs)[0]);
        }

        onEnter(){
            super.onEnter();
        }

        _tap_btn_add(){
            window.open("http://jq.qq.com/?_wv=1027&k=Zt4mRQ");
        }
    }
}