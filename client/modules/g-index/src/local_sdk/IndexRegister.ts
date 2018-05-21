/**
 * Created by SmallAiTT on 2015/7/23.
 */
module g_index{
    export class IndexRegister extends mo.gui.Dlg{

        inputUser:egret.gui.TextInput;
        inputPwd:egret.gui.TextInput;
        inputConfirmPwd:egret.gui.TextInput;
        btnCancel:egret.gui.Button;
        btnRegister:egret.gui.Button;

        //+++++++++++++++++++点击事件设置区域 开始++++++++++++++++++++
        _tap_btnRegister(sender) {
            var self = this;
            localSdk.registerLocal(self.inputUser.text, self.inputPwd.text, self.inputConfirmPwd.text, function(){
                self.close();
            });
        }

        _tap_btnCancel(sender) {
            var self = this;
            self.close();
            IndexLogin.create().show();
        }
        //+++++++++++++++++++点击事件设置区域 结束++++++++++++++++++++
    }
}