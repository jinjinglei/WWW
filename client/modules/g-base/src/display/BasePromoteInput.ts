module g_base {

    /**
     * 通用弹出输入框。
     * 监听close方法回调获取输入的内容
     * 使用举例:
     * g_base.BasePromoteInput.create()
     * .setData({title:"输入姓名", text:"张德帅"})
     * .show()
     * .onClose(function(i){console.log(i.inputBox.text, i.doWhat)})
     */
    export class BasePromoteInput extends mo.gui.Dlg {
        inputBox:egret.gui.TextInput;
        doWhat:number = 0; //0 取消 1确定
        container;
        title;
        titleDisplay:egret.gui.Label;

        _initProp() {
            var self = this;
            super._initProp();
            this.outsideClosable = false;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            self.inputBox.text = self.data.text || "";
            self.titleDisplay.text = self.data.title || "";
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.container.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
        }

        click_btn_close(){
            var self = this;
            self.doWhat = 0;
            self.container.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
        }
        _tap_btn_confirm(){
            var self = this;
            self.doWhat = 1;
            self.close();
        }
        _tap_btn_cancel(){
            var self = this;
            self.doWhat = 0;
            self.close();
        }
    }
}
