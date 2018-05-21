/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class CouponCtrl extends mo.DataController {
        _initProp() {
            super._initProp();
        }

        //使用兑换码
        use(code, cb, target) {
            if(code == "") return mo.showMsg(gc.id_c_msgCode.cdKeyNull);
            var argKeys = gc.iface.a_coupon_use_args;
            var args = {};
            args[argKeys.code] = code;
            mo.requestWaiting4Server(gc.iface.a_coupon_use, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData];
                userCtrl.updateEntity(userData);
                mo.showMsg(gc.id_c_msgCode.redeemRewardMail);
                pointCtrl.cal(gc.c_prop.pointEffectKey.mail);
                if (cb) cb.call(target,data);
            });
        }
    }
    export var couponCtrl:CouponCtrl = CouponCtrl.getInstance() ;
}