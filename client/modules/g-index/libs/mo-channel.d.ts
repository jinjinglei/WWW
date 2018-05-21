/**
 * Created by SmallAiTT on 2015/5/8.
 */
declare module egret.project {
    /** 渠道id，默认99999为开发模式 */
    var channelId: number;
}
declare module mo_channel {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    var channelMap: {};
    var channelKeyMap: {};
    var curChannelInstance: any;
    function getCurChannel(): any;
    function registerChannel(ChannelClass: any): void;
    class BaseChannel extends mo.Class {
        static CHANNEL_ID: number;
        defaultUI: boolean;
        isValidIAP: boolean;
        isSNOpen: boolean;
        name: string;
        loginOpt: any;
        cb: any;
        cbTarget: any;
        enterGame(cb: Function, cbTarget?: any): void;
        checkLogin(cb: any, target: any): void;
        login(cb: Function, cbTarget?: any): void;
        logout(cb: Function, cbTarget?: any): void;
        pay(rechargeId: any, channelPayId: any, cb: any, target: any): void;
        share(option: any, cb: any, target: any): void;
        social(option: any, cb: any, target: any): void;
        sendToDesktop(option: any, cb: any, target: any): void;
        attention(option: any, cb: any, target: any): void;
        getLoginOpt(): any;
    }
}
/**
 * Created by SmallAiTT on 2015/5/8.
 */
declare module mo_channel {
    class BaseSDKChannel extends BaseChannel {
        static REQ_KEY_CHANNEL_ID: string;
        static REQ_KEY_SDK_DATA: string;
        static REQ_KEY_DEVICE_ID: string;
        static REQ_ENTER_BY_SDK: string;
        _sdkData: any;
        enterGame(cb: Function, cbTarget?: any): void;
    }
}
