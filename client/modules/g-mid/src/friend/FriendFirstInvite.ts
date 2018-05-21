/*
  hd 第一次打开兄弟
*/

module g_mid {

    export class FriendFirstInvite
    extends mo.gui.Dlg
    {        
        label_content;
        btn_invite;

        _childrenCreated() {
            super._childrenCreated();

            // 读取配置文件
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 100);
            this.label_content.text = info[gc.c_help_helpText];
        }

        _tap_btn_invite() {
            FriendDialog.Invite();
        }
    }
    
}