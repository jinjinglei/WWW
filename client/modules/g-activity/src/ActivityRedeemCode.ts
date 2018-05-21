/**
 * Created by Administrator on 2015/10/30.
 */
module g_activity{
    export class ActivityRedeemCode extends mo.gui.Layer{
        static DEFAULT = "请输入兑换码";
        label_code;

        _initProp(){
            super._initProp();
            var self = this;

            self.touchEnabled = false;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.label_code.text = ActivityRedeemCode.DEFAULT;
            self.label_code.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLabelTap, this);
        }

        onLabelTap(e){
            var self = this;

            if(self.label_code.text == ActivityRedeemCode.DEFAULT)
                self.label_code.text = "";
        }

        _tap_btn_code(){
            var self = this;
            if(self.label_code.text == ActivityRedeemCode.DEFAULT){
                return mo.showMsg(gc.id_c_msgCode.cdKeyNull);
            }
            gd.couponCtrl.use(self.label_code.text, function(){

            },self);
        }
    }
}