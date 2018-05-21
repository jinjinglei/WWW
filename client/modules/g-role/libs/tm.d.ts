/**
 * Created by SmallAiTT on 2015/4/24.
 */
declare module tm {
    class Trigger {
        static __className: string;
        __className: string;
        __class: any;
        /**
         * 执行首次
         * @type {string}
         */
        static ON_FIRST: string;
        /**
         * 每隔一秒执行一次
         * @type {string}
         */
        static ON_SECOND: string;
        /**
         * 触发器结束
         * @type {string}
         */
        static ON_END: string;
        _isInstance: boolean;
        _listenerMap: any;
        _ctxMap: any;
        _moreMap: any;
        _tempArrMap: any;
        _typeCounter: any;
        msPassed: number;
        beginTime: Date;
        endTime: Date;
        _initProp(): void;
        constructor(endTime: Date);
        _init(...args: any[]): void;
        _hasDtored: boolean;
        doDtor(): void;
        dtor(): void;
        /**
         * 根据类型注册监听。
         * 一种类型只能对应一个监听。
         * 移除的方式就通过 on(type, null);实现
         * @param type
         * @param listener
         * @param ctx
         */
        on(type: string, listener: Function, ctx?: any): void;
        /**
         * 根据类型移除监听。
         * @param type
         */
        un(type: string): void;
        /**
         * 根据类型注册监听，一种类型可以对应多个监听。
         * @param type
         * @param listener
         * @param ctx
         */
        onMore(type: string, listener: Function, ctx?: any): void;
        /**
         * 根据类型移除监听。
         * @param type
         * @param listener
         * @param ctx
         */
        unMore(type: string, listener?: Function, ctx?: any): void;
        _switchToTemp(type: string, arr: any[]): any[];
        /**
         * 根据类型执行触发器中注册的监听。
         * @param type
         * @param args
         */
        _invoke(type: string, ...args: any[]): void;
        _update(ms: number, now: number): boolean;
    }
}
/**
 * Created by SmallAiTT on 2015/4/24.
 */
declare module tm {
    class Timer {
        static __className: string;
        __className: string;
        __class: any;
        _isInstance: boolean;
        _triggers: Trigger[];
        _tempTriggers: Trigger[];
        deltaMs: number;
        _tickBegan: boolean;
        _initProp(): void;
        constructor();
        _init(...args: any[]): void;
        _hasDtored: boolean;
        doDtor(): void;
        dtor(): void;
        clear(): void;
        setDeltaMs(deltaMs: number): void;
        _judgeUpdate(): void;
        _update(dt: number): void;
        /**
         * 添加触发器
         * @param trigger
         */
        add(trigger: Trigger): void;
        /**
         * 移除触发器
         * @param trigger
         */
        remove(trigger: Trigger): void;
    }
    function newTimer(): Timer;
    var timer: Timer;
}
/**
 * Created by SmallAiTT on 2015/2/25.
 */
declare module tm {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    /**
     * 这个api用于代替原生的setTimeout，并且加入了context和args的支持
     * @param cb
     * @param ctxOrDelay
     * @param delayOrArg0
     * @param args
     * @returns {number}
     */
    function setTimeout(cb: Function, ctxOrDelay: any, delayOrArg0?: any, ...args: any[]): number;
    /**
     * 这个是跟着tick走的。也就是说不是跟着真实时间走的。休眠时将停止，激活时根据上次停止处继续。
     * @param cb
     * @param ctxOrDelay
     * @param delayOrArg0
     * @param args
     * @returns {number}
     */
    function setTimeout4Tick(cb: Function, ctxOrDelay: any, delayOrArg0?: any, ...args: any[]): number;
    function clearTimeout(tickOutId: number): void;
    function setInterval(cb: Function, ctxOrDelay: any, intervalOrArg0?: any, ...args: any[]): number;
    function setInterval4Tick(cb: Function, ctxOrDelay: any, intervalOrArg0?: any, ...args: any[]): number;
    function clearInterval(tickIntervalId: number): void;
}
