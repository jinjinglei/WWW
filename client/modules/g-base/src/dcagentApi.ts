module ws{
    function getChannelId():string{
        //把域名解释为渠道
        //var parent = window.parent; //可能会套到iFrame里无法知道来自哪个域名
        //var referrer = parent ? parent.document.referrer : document.referrer;
        var referrer = document.referrer;
        if(referrer){
            var re = /http:\/\/([^\/]+)\//i;
            var tChannel = referrer.match(re)[1];
            return tChannel;
        }
        return "未知";
    }

    export function initRecharge(gameVer:string){
        if((<any>egret).isNative) return;
        var args:any = {
            appId: 'A6971D498D982AFCE9BF0CE5C453E52C',
//            accountId: accountId,
            appVer: gameVer,
            channel: getChannelId(),
            errorReport: true,
            virus: true
        };
        DCAgent.init(args);
    }

    export function recordRecharge(amount, iapId){
        if((<any>egret).isNative) return;
        var paymentConfig = {
            amount: 0,
            currencyType: "",
            payType: "",
            iapid: "",
            orderId: "",
            payTime: 0
        };
        paymentConfig.amount = amount;
        paymentConfig.currencyType = 'CNY';
//        paymentConfig.payType = '信用卡';
//        paymentConfig.orderId = '订单编号';
        paymentConfig.payTime = ~~(Date.newDate().getTime() / 1000);

        if(iapId){
            paymentConfig.iapid = iapId;
        }
        DCAgent.onPayment(paymentConfig);
    }

    export function recordEvent(eventId:string, value){
        if((<any>egret).isNative) return;

        // eventId为事件ID，类型为字符串
        var eventId = eventId;

        // duration为耗时，类型数字，单位：秒（此参数暂无实际用处）
        var duration = 1;

        // eventData为本次事件相关数据，仅支持简单类型的键值对（值为数字或字符串）
        var eventData:any = {
            value: value
        };

        DCAgent.onEvent(eventId, duration, eventData)
    }
}