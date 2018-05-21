/**
 * Created by SmallAiTT on 2015/4/27.
 */
declare var _thisGlobal: any;
declare module egret {
    var isNative: boolean;
}
declare module egret.project {
    /**
     * 注册project值处理函数。
     * @param handler
     */
    function registerValueHandler(handler: any): void;
    /**
     * 设置project值。
     * @param data
     * @param key
     * @param isBool
     */
    function setValue(data: any, key: any, isBool?: any): void;
    /**
     * 解析project内容
     * @param data
     */
    function _parse(data: any): void;
    /**
     * 加载project配置文件。
     * @param url
     * @param cb
     */
    function load(url: any, cb: any): void;
    /** 版本号 */
    var version: string;
    /** 程序包名，实际上会再加上projName作为真正的包名 */
    var package: string;
    /** 项目名称 */
    var projName: string;
    /** app名称 */
    var appName: string;
    /** 日志等级 */
    var logLvl: any;
    /** 渲染模式，1为webgl，否则为canvas */
    var renderMode: number;
    /** 是否显示FPS */
    var showFPS: boolean;
    /** 帧率 */
    var frameRate: number;
    /** 设计分辨率 */
    var design: any;
    /** 适配，目前没用 */
    var resolution: any;
    /** 自由选项 */
    var option: any;
    var scaleMode: string;
}
declare module logger {
    /**
     * 格式化参数成String。
     * 参数和h5的console.log保持一致。
     * @returns {*}
     */
    function formatStr(...args: any[]): string;
    /**
     * 初始化模块日志
     * @param m
     * @param mName
     */
    function initLogger(m: any, mName: any): void;
    /**
     * 设置日志等级
     * @param mName
     * @param lvl
     */
    function setLvl(mName: any, lvl: any): void;
    var log: Function;
    var debug: Function;
    var info: Function;
    var warn: Function;
    var error: Function;
}
declare module logger.evt {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
}
declare module egret {
    /**
     * 异步池
     */
    class AsyncPool {
        private _srcObj;
        private _limit;
        private _pool;
        private _iterator;
        private _iteratorCtx;
        private _onEnd;
        private _onEndCtx;
        private _results;
        private _isErr;
        /** 总大小 */
        size: number;
        /** 已完成的大小 */
        finishedSize: number;
        /** 正在工作的大小 **/
        _workingSize: number;
        constructor(srcObj: any, limit: number, iterator: Function, onEnd: Function, ctx?: any);
        _each(obj: any, iterator: (value: any, index?: any) => any, context?: any): void;
        onIterator(iterator: Function, target: any): void;
        onEnd(endCb: Function, endCbTarget: any): void;
        private _handleItem();
        flow(): void;
    }
    /**
     * 储藏室
     */
    class Store {
        pool: any;
        tempPool: any;
        pool4Single: any;
        tempArgsMap: any;
        valuePool: any;
        register(owner: string, type: string, listener: Function, ctx: any, priority: number): void;
        unRegister(owner: string, type: string, listener: Function, ctx: any): void;
        clear(owner: string, type: string): void;
        registerSingle(owner: string, type: string, listener: Function, ctx: any): void;
        unRegisterSingle(owner: string, type: string): void;
        unRegisterAll(owner: string, type?: string): void;
        getTempArr(owner: string, type: string): any;
        getSingle(owner: string, type: string): any;
        getTempArgs(owner: string, type: string, args: any): any[];
        setValue(owner: string, type: string, args: any): void;
        removeValue(owner: string, type: string): any;
        _hasDtored: boolean;
        doDtor(): void;
        dtor(): void;
    }
    class Emitter {
        static __className: string;
        __className: string;
        __class: any;
        _isInstance: boolean;
        _store: Store;
        _initProp(): void;
        constructor();
        _init(...args: any[]): void;
        init(...args: any[]): void;
        _hasDtored: boolean;
        doDtor(): void;
        dtor(): void;
        /**
         * 监听某个事件。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        on(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        onPriority(event: string, priority: number, listener: Function, ctx?: any): Emitter;
        /**
         * 监听某个事件。可以注册多个。通过emit触发。（异步模式，listener的第一个传参为异步需要执行的cb）
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        onAsync(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 通过优先级进行事件监听注册。通过emit触发。（异步模式，listener的第一个传参为异步需要执行的cb）
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        onAsyncPriority(event: string, priority: number, listener: Function, ctx?: any): Emitter;
        /**
         * 监听某个事件，在下一帧执行。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        onNextTick(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 通过优先级进行事件监听注册。通过emitNextTick触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        onPriorityNextTick(event: string, priority: number, listener: Function, ctx?: any): Emitter;
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        once(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        oncePriority(event: string, priority: number, listener: Function, ctx?: any): Emitter;
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        onceAsync(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        onceAsyncPriority(event: string, priority: number, listener: Function, ctx?: any): Emitter;
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        onceNextTick(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        oncePriorityNextTick(event: string, priority: number, listener: Function, ctx?: any): Emitter;
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        single(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        singleAsync(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        singleNextTick(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 移除事件监听。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        un(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 移除下一帧类型的事件监听。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        unNextTick(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 移除一次性的事件监听。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        unOnce(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 移除下一帧执行的一次性的监听。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        unOnceNextTick(event: string, listener: Function, ctx?: any): Emitter;
        /**
         * 移除单个类型的事件监听。
         * @param event
         * @returns {mo_evt.Emitter}
         */
        unSingle(event: string): Emitter;
        /**
         * 移除单个类型的并且是下一帧执行类型的事件监听。
         * @param event
         * @returns {mo_evt.Emitter}
         */
        unSingleNextTick(event: string): Emitter;
        /**
         * 移除所有立即执行类型的事件监听。
         * 如果arguments.length == 0 那么就表示移除所有监听。
         * 如果arguments.length == 1 那么就表示移除指定类型的所有监听。
         * @param event
         * @returns {mo_evt.Emitter}
         */
        unAll(event?: string): Emitter;
        /**
         * 移除所有下一帧执行类型的事件监听。
         * 如果arguments.length == 0 那么就表示移除所有监听。
         * 如果arguments.length == 1 那么就表示移除指定类型的所有监听。
         * @param event
         * @returns {mo_evt.Emitter}
         */
        unAllNextTick(event?: string): Emitter;
        _emitByListenerInfoArr(owner: string, event: string, arr: any, args: any[]): void;
        /**
         * 立即发射事件。
         * @param event
         * @param args
         * @returns {mo_evt.Emitter}
         */
        emit(event: string, ...args: any[]): Emitter;
        /**
         * 异步发射事件。
         * @param event
         * @param args
         * @returns {mo_evt.Emitter}
         */
        emitAsync(event: string, onEnd: Function, ctx: any, ...args: any[]): Emitter;
        /**
         * 在下一帧才发射事件。而且，发射的事件只会发射最后调用emitNextTick的那次。
         * @param event
         * @param args
         * @returns {mo_evt.Emitter}
         */
        emitNextTick(event: string, ...args: any[]): Emitter;
        /**
         * 这个分发比较特殊，会同时进行emit 和 emitNextTick。主要是为了方便同时都需要进行两个同时要同时分发的情况
         * @param event
         * @param args
         * @returns {egret.Emitter}
         */
        emitBoth(event: string, ...args: any[]): Emitter;
        /**
         * 发射阶段性事件。before and after。
         * @param event
         * @param func
         * @param ctx
         * @param args
         * @returns {mo_evt.Emitter}
         */
        emitPhase(event: string, func: Function, ctx: any, ...args: any[]): Emitter;
        /**
         * 在下一帧才发射阶段性事件。before and after。
         * 而且，发射的事件只会发射最后调用emitPhaseNextTick的那次。
         * @param event
         * @param func
         * @param ctx
         * @param args
         * @returns {mo_evt.Emitter}
         */
        emitPhaseNextTick(event: string, func: Function, ctx: any, ...args: any[]): Emitter;
        static _store: Store;
        /**
         * 监听某个事件。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static on(event: string, listener: Function, ctx?: any): any;
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         */
        static onPriority(event: string, priority: number, listener: Function, ctx?: any): any;
        /**
         * 监听某个事件。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static onAsync(event: string, listener: Function, ctx?: any): any;
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         */
        static onAsyncPriority(event: string, priority: number, listener: Function, ctx?: any): any;
        /**
         * 监听某个事件，在下一帧执行。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static onNextTick(event: string, listener: Function, ctx?: any): any;
        /**
         * 通过优先级进行事件监听注册。通过emitNextTick触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         */
        static onPriorityNextTick(event: string, priority: number, listener: Function, ctx?: any): any;
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static once(event: string, listener: Function, ctx?: any): any;
        /**
         * 通过优先级进行一次性事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         */
        static oncePriority(event: string, priority: number, listener: Function, ctx?: any): any;
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static onceAsync(event: string, listener: Function, ctx?: any): any;
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static onceAsyncPriority(event: string, priority: number, listener: Function, ctx?: any): any;
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static onceNextTick(event: string, listener: Function, ctx?: any): any;
        /**
         * 通过优先级注册一次性监听，触发了就移除。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static oncePriorityNextTick(event: string, priority: number, listener: Function, ctx?: any): any;
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static single(event: string, listener: Function, ctx?: any): any;
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static singleAsync(event: string, listener: Function, ctx?: any): any;
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         */
        static singleNextTick(event: string, listener: Function, ctx?: any): any;
        /**
         * 移除事件监听。
         * @param event
         * @param listener
         * @param ctx
         */
        static un(event: string, listener: Function, ctx?: any): any;
        /**
         * 移除下一帧类型的事件监听。
         * @param event
         * @param listener
         * @param ctx
         */
        static unNextTick(event: string, listener: Function, ctx?: any): any;
        /**
         * 移除一次性的事件监听。
         * @param event
         * @param listener
         * @param ctx
         */
        static unOnce(event: string, listener: Function, ctx?: any): any;
        /**
         * 移除下一帧执行的一次性的监听。
         * @param event
         * @param listener
         * @param ctx
         */
        static unOnceNextTick(event: string, listener: Function, ctx?: any): any;
        /**
         * 移除单个类型的事件监听。
         * @param event
         */
        static unSingle(event: string): any;
        /**
         * 移除单个类型的并且是下一帧执行类型的事件监听。
         * @param event
         */
        static unSingleNextTick(event: string): any;
        /**
         * 移除所有立即执行类型的事件监听。
         * 如果arguments.length == 0 那么就表示移除所有监听。
         * 如果arguments.length == 1 那么就表示移除指定类型的所有监听。
         * @param event
         */
        static unAll(event?: string): any;
        /**
         * 移除所有下一帧执行类型的事件监听。
         * 如果arguments.length == 0 那么就表示移除所有监听。
         * 如果arguments.length == 1 那么就表示移除指定类型的所有监听。
         * @param event
         */
        static unAllNextTick(event?: string): any;
        /**
         * 格式化出before类型的event值。
         * @param event
         * @returns {string}
         */
        static formatBeforeEvent(event: string): string;
        /**
         * 格式化出after类型的event值。
         * @param event
         * @returns {string}
         */
        static formatAfterEvent(event: string): string;
        static create(...args: any[]): any;
        static getInstance(...args: any[]): any;
        static purgeInstance(): void;
    }
    function _loop4Emitter(): void;
}
declare module egret {
    class Boot extends Emitter {
        static AFTER_EGRET: string;
        static AFTER_CONFIG: string;
        static AFTER_MAIN: string;
    }
    function boot(cb?: Function): void;
}
