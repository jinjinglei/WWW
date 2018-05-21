/**
 * 渠道列表
 */
module g_channel {
    export var key = {
        /*==============runtime===============*/
        local:99999 //本地测试的
        ,egretCommon:10001 //Egret 联运
        ,qqBrowser:10002 //Egret QQ浏览器
        ,liebao:10003 //Egret 猎豹
        ,qqWan8Aos:10004 //qq玩吧android
        ,xiaohuoban:10005 //小伙伴
    };
    //
    /*==============注册支付配置===============*/
    registerPayInfo(key.local, gc.c_payInfo_99999);
    registerPayInfo(key.egretCommon, gc.c_payInfo_10001);
    registerPayInfo(key.qqBrowser, gc.c_payInfo_10001);
    registerPayInfo(key.liebao, gc.c_payInfo_10001);
    registerPayInfo(key.qqWan8Aos, gc.c_payInfo_10004);
    registerPayInfo(key.xiaohuoban, gc.c_payInfo_10001);
}

