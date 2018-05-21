declare module egret.project {
    /** 轮询间隔(秒) */
    var payCheckFrq: number[];
}
declare module g_channel {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    function registerPayInfo(key: any, payInfoKey: any): void;
    class BaseSDKChannel extends mo_channel.BaseChannel {
        _sdkData: any;
        _isAutoPopLogin: boolean;
        isAutoLogin: boolean;
        isValidShare: boolean;
        isValidAttention: boolean;
        isValidSendToDesktop: boolean;
        isLogout: boolean;
        isMultiAccount: boolean;
        enterGame(cb: any, cbTarget: any): void;
        afterLogin(option?: any): void;
        afterLogout(cb: any, cbTarget: any): void;
        checkLogin(cb: any, cbtx: any, opt?: any): void;
        login(cb: Function, cbTarget?: any, opt?: any): void;
        openBBS(): void;
        validateToken(token: any): boolean;
        restorePayment(): void;
        stopRestorePayment(): void;
        bindMobile(cb: any, target: any): void;
        isBindMobile(cb: (isOpen: boolean, isBind: boolean) => void, target: any): void;
        isShowShare(cb: any, target: any): void;
        isSendToDesktopSucc(cb: any, target: any): void;
        addLog(action: any, userId: any): void;
        getDesktopInfo(pos: WooolSdkDesktopPosition, cb: (suc: boolean, data: WooolSdkDesktopResult) => void, target: any): void;
        setDesktopInfo(pos: WooolSdkDesktopPosition, cb: (suc: boolean) => void, target: any): void;
        acquireDesktopReward(pos: WooolSdkDesktopPosition, cb: (suc: boolean) => void, target: any): void;
        desktopShare(url: string, cb: (suc: boolean) => void, target: any): void;
        footmark(action: string, data: {}): void;
        loadingProgress(val: number): void;
        channel(): string;
        homeUrl(): string;
        onChannelReay(cb: any, ctx?: any): void;
        getHdpuProperty(key: any): string;
        getGameSetting(cb: (data) => void): void;
    }
}
/**
 * 渠道列表
 */
declare module g_channel {
    var key: {
        local: number;
        egretCommon: number;
        qqBrowser: number;
        liebao: number;
        qqWan8Aos: number;
        xiaohuoban: number;
    };
}
declare module g_channel {
    /**
     * Egret联运
     */
    class Channel10001 extends BaseSDKChannel {
        static CHANNEL_ID: number;
        defaultUI: boolean;
        appId: number;
        _pollingInvId: any;
        _pollingIndex: number;
        id: any;
        isValidPay: boolean;
        _isRestoredPayment: boolean;
        supportCheck(): void;
        afterLogin(option?: any): void;
        validateToken(token: any): boolean;
        checkLogin(cb: any, cbTarget: any, option?: any): void;
        login(cb: any, cbTarget: any, option?: any): void;
        logout(cb: any, ctx: any): void;
        attention(): void;
        stopPolling(): void;
        /**
        * 开始轮询
        */
        startPolling(): void;
        /**
         * 支付
         * @param rechargeId 支付的id
         * @param goodsId 渠道物品id
         * @param cb
         * @param target*/
        pay(rechargeId: any, goodsId: any, cb: any, target: any): void;
        /**
         * 恢复支付结果，用于第一次登录到主城时检查*/
        restorePayment(): void;
        stopRestorePayment(): void;
        /**
         * 分享
         * @param option
         * @param cb
         * @param target
         * @callback-param result 0 表示分享成功，-1表示用户取消*/
        share(option: nest.share.ShareInfo, cb: any, target: any): void;
        sendToDesktop(option: any, cb: any, target: any): void;
    }
}
declare module g_channel {
    /**
     * QQ浏览器
     */
    class Channel10002 extends Channel10001 {
        isMultiAccount: boolean;
        _isAutoPopLogin: boolean;
        validateToken(token: any): boolean;
        getLoginOpt(): {
            "loginType": any;
        };
        openBBS(): void;
    }
}
declare module g_channel {
    /**
     *
     */
    class Channel10003 extends Channel10001 {
        isValidSendToDesktop: boolean;
    }
}
declare module g_channel {
    /**
     * QQwan8
     */
    class Channel10004 extends Channel10001 {
        login(cb: any, cbTarget: any, option?: any): void;
    }
}
declare module g_channel {
    enum WooolSdkDesktopShowType {
        WeiDuan = 0,
        FenXiang = 1,
        GuangZhu = 2,
        XiongDi = 3,
    }
    enum WooolSdkDesktopPosition {
        Fight = 0,
        Home = 1,
    }
    interface WooolSdkDesktopResult {
        isfav: number;
        showType: WooolSdkDesktopShowType;
        flash: boolean;
    }
    function formatUrl(url?: any): {};
    function getGameKey(url?: string): string;
    /**
     * Egret联运
     */
    class Channel10005 extends BaseSDKChannel {
        static CHANNEL_ID: number;
        isAutoLogin: boolean;
        _pollingInvId: any;
        _pollingIndex: number;
        id: any;
        _isRestoredPayment: boolean;
        hGame: any;
        urlData: any;
        _logActions: any;
        _channelReady: boolean;
        _onChannelReadyCb: any;
        _onChannelReadyCbtx: any;
        _initProp(): void;
        afterLogin(option?: any): void;
        validateToken(token: any): boolean;
        checkLogin(cb: any, cbTarget: any, option?: any): void;
        login(cb: any, cbTarget: any, option?: any): void;
        logout(cb: any, ctx: any): void;
        stopPolling(): void;
        isMultiAccount: boolean;
        /**
        * 开始轮询
        */
        startPolling(): void;
        /**
         * 支付
         * @param rechargeId 支付的id
         * @param goodsId 渠道物品id
         * @param cb
         * @param target*/
        pay(rechargeId: any, goodsId: any, cb: any, target: any): void;
        /**
         * 恢复支付结果，用于第一次登录到主城时检查*/
        restorePayment(): void;
        stopRestorePayment(): void;
        /**
         * 分享
         * @param option
         * @param cb
         * @param target
         * @callback-param result 0 表示分享成功，-1表示用户取消*/
        isBindMobile(cb: (isOpen: boolean, isBind: boolean) => void, target: any): any;
        bindMobile(cb: any, target: any): void;
        /** 获得桌面相关信息
            @pos 0战斗 1主城
         */
        getDesktopInfo(pos: WooolSdkDesktopPosition, cb: (suc: boolean, data: WooolSdkDesktopResult) => void, target: any): void;
        /** 调用桌面提供的功能 */
        setDesktopInfo(pos: WooolSdkDesktopPosition, cb: (suc: boolean) => void, target: any): void;
        /** 获取桌面的奖励 */
        acquireDesktopReward(pos: WooolSdkDesktopPosition, cb: (suc: boolean) => void, target: any): void;
        /** 通过桌面分享 */
        desktopShare(url: string, cb: (suc: boolean) => void, target: any): void;
        footmark(action: string, data: {}): void;
        channel(): string;
        homeUrl(): string;
        loadingProgress(val: number): void;
        onChannelReay(cb: any, ctx?: any): void;
        getHdpuProperty(key: any): string;
        getGameSetting(cb: (data) => void): void;
    }
}
