declare module mo._baseConstFuncPrototype {
    /**
     * 创建
     * @param args
     * @returns {any}
     */
    function create(...args: any[]): any;
    function createDynamic(...args: any[]): any;
    function getInstance(...args: any[]): any;
    function purgeInstance(): void;
}
declare module egret.project {
    /** 是否开启音效 */
    var audioEnabled: boolean;
    /** gui是否使用散图模式 */
    var isScatterMode: boolean;
    /** 是否自动加载ui中的textures，默认为false，而且，这个只有在json模式下才有用 */
    var isAutoTextures: boolean;
    /** 是否开启测试例 */
    var unitModule: any;
    /** 测试模块参数 */
    var unitArgs: any;
    /** 服务器地址 */
    var httpHost: string;
    /** 服务器端口 */
    var httpPort: string;
}
declare module res {
    var _jsData: any;
}
declare module mo {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    var emitter: egret.Emitter;
    var _dc: any;
    function addDc(dcModule: string, dataCfg: any): void;
    function getData(dcModule: string, key: string): any;
    function registerDcParser(type: string, parser: Function, ctx?: any): void;
    /**
     * 获取一个json文件的内容
     * @param fileName
     * @returns {Object}
     */
    function getJSONWithFileName(fileName: any): any;
    /**
     * 获取一个json文件中某个id的单条信息
     * @param fileName
     * @param id
     * @returns {Object}
     */
    function getJSONWithFileNameAndID(fileName: any, id: any): any;
    /**
     * 读取策划配置表里有分号的信息，如：1,2,3,4
     * @param str
     * @param num
     * @returns {*}
     */
    function getStrByOrder(str: any, num: any): any;
    /**
     * 获取机器码
     */
    function getDeviceId(): any;
    var __areaId: string;
    function _getLocalStorageKeyPre(key: any, withoutAreaPrefix: any): string;
    /**
     * localStorage api的进一步封装。
     * @param key
     * @param value
     */
    function setLocalStorageItem(key: any, value: any, withoutAreaPrefix?: boolean): void;
    /**
     * localStorage api的进一步封装。
     * @param key
     * @returns {*}
     */
    function getLocalStorageItem(key: any, withoutAreaPrefix?: boolean): any;
    /**
     * localStorage api的进一步封装。
     * @param key
     * @returns {*}
     */
    function removeLocalStorageItem(key: any, withoutAreaPrefix: any): void;
    /**
     * 判断是否需要刷新
     * @param refreshHours
     * @param lastTime {Date}
     * @param now {Date}
     * @returns {boolean}
     */
    function needToRefresh(refreshHours: any, lastTime: any, now?: Date): boolean;
    /**
     * 判断一个节点是否真的可见
     * @param displayObject
     * @returns {boolean}
     */
    function isNodeVisible(displayObject: egret.DisplayObject): boolean;
    function setWaitingView(waitingView: any): void;
    var _waitingPlayCount: number;
    /**
     * 播放等待画面
     */
    function playWaiting(): void;
    /**
     * 停止等待画面
     */
    function stopWaiting(): void;
    /**
     * 强制停止等待画面
     */
    function stopWaitingForce(): void;
    function registerFontStyle(opt: any): void;
    function getFontStyleOpt(style: any): egret.ITextStyle;
}
declare module mo.STR {
    var NUM_EXP: RegExp;
    /**
    * 格式化参数成String。
    * 参数和h5的console.log保持一致。
    * @returns {*}
    */
    function format(...args: any[]): string;
    /**
    * 占位符模式替换。
    * @param tempStr
    * @param map
    * @returns {string}
    */
    function placeholder(tempStr: string, map: any): string;
    /**
    * 字符串补全。
    * @param src
    * @param fillStr
    * @param isPre
    * @returns {*}
    */
    function fill(src: any, fillStr: string, isPre?: boolean): any;
    /**
     * 获取字符串长度，中文为2
     * @param str
     */
    function getStringLength(str: string): number;
    /**
     * 判断一个字符串是否包含中文
     * @param str
     * @returns {boolean}
     */
    function isChinese(str: string): boolean;
    /**
     * 根据字节长度获取文字
     * @param str
     * @param startNum 字数序号
     * @param subLength
     */
    function sub(str: string, startNum: number, subLength: number): string;
    /**
     * 字符串转为对象，注意，对象只能是最低级嵌套，也就是说只有一层   "1:2,2:3" => {"1":2,"2":3}
     * @param str
     * @return {Object}
     */
    function toObj(str: any): any;
    /**
     * 将字符串转换为number数组。
     * @param str
     * @param splitStr
     * @returns {Array}
     */
    function toNums(str: string, splitStr?: string): number[];
    /**
     * 敏感词检测
     * @param word
     * @param sensitiveArr
     * @returns {boolean}
     */
    function checkSensitiveWord(word: any, sensitiveArr: any): boolean;
    /**
     * 替换敏感词
     * @param word
     * @param sensitiveArr
     * @returns {*}
     */
    function replaceSensitiveWord(word: any, sensitiveArr: any): any;
    function parseNumOrStr(value: string, floatNum?: number): any;
}
/**
 * Created by SmallAiTT on 2015/7/13.
 */
declare module mo.ARR {
    /**
     * 验证数组类型
     * @param {Array} arr
     * @param {function} type
     * @return {Boolean}
     * @function
     */
    function verifyType(arr: Array<any>, type: Function): boolean;
    /**
     * 删除某个对象
     * @function
     * @param {Array} arr Source Array
     * @param {*} delObj  remove object
     */
    function rm(arr: Array<any>, delObj: any): void;
    /**
     * @function
     * @param {Array} srcSrr Source Array
     * @param {Array} minusArr minus Array
     */
    function rmInArr(srcSrr: Array<any>, minusArr: Array<any>): void;
    /**
     * 过滤重复的对象
     * @function
     * @param {Array} arr
     * @return {Array}
     */
    function filter(arr: Array<any>): any[];
    /**
     * 数组操作：移动一个元素到新的位置
     * @param arr
     * @param oldIndex
     * @param newIndex
     * @returns {Array}
     */
    function mvTo(arr: any[], oldIndex: number, newIndex: number): any[];
    /**
     * 数组操作：交换两个元素的位置
     * @param arr
     * @param oldIndex
     * @param newIndex
     * @returns {Array}
     */
    function swap(arr: any[], oldIndex: number, newIndex: number): any[];
    /**
     * 排序功能的option函数模板。
     *      例子：
     *      var arr = [
     *          {"key1":"a", "key2":"b", "key3":"c", "key4":"d"},
     *          ...
     *      ]
     *      arr.sort(export function sortOption.bind({list : ["key1", "key2", {name:"key3", type:1}, "key4"]}));
     *      意思是一次按照数组的顺序为优先级进行排序，默认为为降序。当定义type为1的时候，为升序。
     * @param a
     * @param b
     * @returns {number}
     */
    function sortOption(a: any, b: any): number;
    /**
     *
     * @param value
     * @param index
     * @param ar
     * @returns {boolean}
     */
    function filterOption(value: any, index: number, ar?: any): boolean;
    /**
     * 重置数组，清除掉null的项。
     * @param arr
     */
    function reset(arr: any): void;
}
/**
 * Created by SmallAiTT on 2015/7/31.
 */
declare module mo.ACT {
    interface ACT {
        getMgr(): egret.action.Manager;
        run(node: egret.DisplayObject, action: egret.action.Action): ACT;
        pause(node: egret.DisplayObject): ACT;
        resume(node: egret.DisplayObject): ACT;
        stop(node: egret.DisplayObject, action?: egret.action.Action): ACT;
    }
    /**
     * 获取的action管理器。
     * @returns {egret.action.Manager}
     */
    function getMgr(): egret.action.Manager;
    /**
     * 运行节点的某个action。
     * @param node
     * @param action
     */
    function run(node: egret.DisplayObject, action: egret.action.Action): ACT;
    /**
     * 暂停节点的action。
     * @param node
     */
    function pause(node: egret.DisplayObject): ACT;
    /**
     * 重启节点的action。
     * @param node
     */
    function resume(node: egret.DisplayObject): ACT;
    /**
     * 停止节点的action。
     * 如果有传递action则停止指定的action，否则则停止该节点所有action。
     * @param node
     * @param action
     */
    function stop(node: egret.DisplayObject, action?: egret.action.Action): ACT;
}
declare module mo {
    class Class extends egret.EventDispatcher {
        static __className: string;
        __className: string;
        __class: any;
        _isInstance: boolean;
        _initProp(): void;
        constructor();
        init(...args: any[]): void;
        _init(...args: any[]): void;
        _hasDtored: boolean;
        doDtor(): void;
        dtor(): void;
        static create(...args: any[]): any;
        static getInstance(...args: any[]): any;
        static purgeInstance(...args: any[]): any;
    }
}
declare module gEventType {
    var visible: string;
    var invisible: string;
    var slidePanel: string;
    var newSceneVisible: string;
}
declare module mo {
    class Event extends egret.Event {
        static __className: string;
        __className: string;
        __class: any;
        static getBeforeEventType(eventType: any): string;
        static getAfterEventType(eventType: any): string;
        sender: any;
    }
}
declare module mo {
    function removeEventListeners(dispatcher: egret.EventDispatcher, eventType?: string, useCapture?: boolean): void;
    function addEventListenerOnce(dispatcher: egret.EventDispatcher, eventType: string, listener: Function, ctx?: any): void;
    function removeEventListenerOnce(dispatcher: egret.EventDispatcher, eventType: string, listener: Function, ctx?: any): void;
    function addBeforeEventListener(dispatcher: egret.EventDispatcher, eventType: string, listener: Function, ctx: any, useCapture?: boolean, priority?: number): void;
    function addAfterEventListener(dispatcher: egret.EventDispatcher, eventType: string, listener: Function, ctx: any, useCapture?: boolean, priority?: number): void;
    function removeBeforeEventListener(dispatcher: egret.EventDispatcher, eventType: string, listener: Function, ctx: any, useCapture?: boolean): void;
    function removeAfterEventListener(dispatcher: egret.EventDispatcher, eventType: string, listener: Function, ctx: any, useCapture?: boolean): void;
    function dispatchEvent(dispatcherInfoArr: any[][], dstFunc: any, sender: any, ...args: any[]): void;
    function dispatchEventWidthCallback(dispatcherInfoArr: any[][], dstFunc: any, sender: any, ...args: any[]): void;
}
declare module mo {
    var actionDispatcher: egret.EventDispatcher;
    var visibleDispatcher: egret.EventDispatcher;
    var invisibleDispatcher: egret.EventDispatcher;
    var exitDispatcher: egret.EventDispatcher;
    var enterDispatcher: egret.EventDispatcher;
    var clickDispatcher: egret.EventDispatcher;
    var cellClickDispatcher: egret.EventDispatcher;
    var widgetCtrlClickDispatcher: egret.EventDispatcher;
    var actionEmitter: egret.Emitter;
    var activatedEmitter: egret.Emitter;
    var inactivatedEmitter: egret.Emitter;
    var showEmitter: egret.Emitter;
    var closeEmitter: egret.Emitter;
}
/**
 * Created by SmallAiTT on 2015/8/28.
 */
declare module mo {
    class ColorMatrix extends Class {
        static DELTA_INDEX: number[];
        static IDENTITY_MATRIX: number[];
        static LENGTH: number;
        length: number;
        constructor(p_matrix?: any);
        reset(): ColorMatrix;
        adjustColor(p_brightness: number, p_contrast: number, p_saturation: number, p_hue: number): ColorMatrix;
        adjustBrightness(p_val: number): ColorMatrix;
        adjustContrast(p_val: number): ColorMatrix;
        adjustSaturation(p_val: number): ColorMatrix;
        adjustHue(p_val: number): ColorMatrix;
        concat(p_matrix: number[]): ColorMatrix;
        clone(): ColorMatrix;
        toString(): string;
        toArray(): number[];
        copyMatrix(p_matrix: number[]): ColorMatrix;
        multiplyMatrix(p_matrix: number[]): ColorMatrix;
        cleanValue(p_val: number, p_limit: number): number;
        fixMatrix(p_matrix?: number[]): number[];
    }
}
declare module mo {
    /**
     * 获取今天的时间。
     * @param {String} time 例如：11:00
     * @returns {Date}
     */
    function getTimeOfToday(time: any): Date;
    function getDateTime(time: any, d: any, nextDays: any): Date;
    /**
     * 格式化时间
     *  1、< 60s, 显示为“刚刚”
     *  2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
     *  3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
     *  4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
     *  5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
     * @param {String} time 如：Sun May 25 2014 12:36:12 GMT+0800 (CST)
     * @returns String
     */
    function timeFormat(time: any): string;
    /**
     * 毫秒转成 x时x分x秒格式
     * @param msd
     * @returns {number}
     */
    function millisecondToDate(msd: any): string;
    function formatWeekdayHour(date: any, isEveryDay: any): string;
    /**
     * 获取“周一、周二”这种字符串
     * @param weekday
     */
    function getWeekdayDesc(weekday: any): string;
    /**
     * 根据时间得到时间的字符串，时间单位为毫秒，得到的为 HH:MM:SS或者MM:SS 这种。
     * @param milliseconds
     * @param locale true 中文模式(最大显示到天,大于1天只显示天:时,比如:xx天:xx时) false (最大显示到小时,比如 xx:xx:xx)
     * @returns {string}
     */
    function getTimeStr(milliseconds: number, locale?: boolean): string;
    /**
     * 获得时间字符串
     * @param timeA
     * @param timeB
     * @returns {*}
     */
    function getBetweenTimeString(timeA: any, timeB: any): string;
    function getNextTime(refreshTimeArr: any, time?: any): any;
}
declare module mo {
    /**
     * 每帧都执行。
     * @param cb
     * @param ctx
     */
    function tick(cb: (frameTime: number) => void, ctx?: any): void;
    /**
     * 移除每帧的执行函数。
     * @param cb
     * @param ctx
     */
    function clearTick(cb: (frameTime: number) => void, ctx?: any): void;
    /**
     * 下一个主循环执行一次。
     * @deprecated
     * @param cb
     * @param ctx
     */
    function nextTick(cb: (...args) => void, ctx?: any, ...args: any[]): void;
    /**
     * 在指定的延迟（以毫秒为单位）后运行指定的函数。
     * @method mo.setTimeout
     * @param cb {Function} 侦听函数
     * @param ctx {any} this对象
     * @param delay {number} 延迟时间，以毫秒为单位
     * @param ...args {any} 参数列表
     * @returns {number} 返回索引，可以用于 clearTimeout
     */
    function setTimeout(cb: (...args) => void, ctx: any, delay: number, ...args: any[]): number;
    /**
     * 清除指定延迟后运行的函数。
     * @method mo.clearTimeout
     * @param key {number}
     */
    function clearTimeout(key: number): void;
    function clearAllTimeout(): void;
    function setInterval(cb: Function, ctx: any, interval: number): number;
    function clearInterval(key: number): void;
    function clearAllInterval(): void;
    var _customStageGetter: any;
    function getStage(): egret.Stage;
    function clearStage(): egret.Stage;
    function runAction(target: any, action: egret.action.Action, paused?: boolean): void;
    function stopAction(action: egret.action.Action): void;
    function stopAllActions(target: any): void;
}
/**
 * Created by SmallAiTT on 2015/7/30.
 */
declare module mo_res {
    var typeMap: {
        '.json': string;
        '.png': string;
        '.jpg': string;
        '.mp3': string;
    };
    function setIgnores(...ignores: any[]): void;
    function rmIgnores(...ignores: any[]): void;
    function addToCfg(url: string, extname?: string): void;
    function registerHandler(extname: string, handler: Function): void;
    function load(resources: any, cb: Function, ctx?: any): void;
    function getRes(resKey: any): any;
}
declare module logger.RES {
    var log: Function;
    var debug: Function;
    var info: Function;
    var warn: Function;
    var error: Function;
}
declare module mo {
    class Res_New extends egret.Emitter {
        map: any;
        _handlerMap: any;
        _unloadHandlerMap: any;
        _cfgHandlerMap: any;
        _globalMap: any;
        _grpCbMap: any;
        _grpMap: any;
        typeMap: any;
        _keyMap: any;
        scatteredList: string[];
        _ignores: string[];
        moduleName: string;
        moduleInfoMap: any;
        _resCounter: any;
        _waitingMap: any;
        _loadedMap: any;
        _initProp(): void;
        registerHandler(extname: string, handler: Function, unloadHandler: Function): void;
        registerCfgHandler(resType: string, handler: Function): void;
        setIgnores(...ignores: string[]): void;
        rmIgnores(...ignores: string[]): void;
        /**
         * 添加到res.json配置中
         * @param url
         * @param extname
         */
        addToCfg(url: string, extname?: string): void;
        setGlobal(...args: string[]): void;
        getStatusRes(res: any, cb: Function, ctx?: any): any;
        washResources(resOrList: any): any[];
        load(resOrList: any, cb: Function, ctx?: any): void;
        loadTo(moduleName: string, resOrList: any, cb: Function, ctx?: any): void;
        _onResLoaded(err: any, res: any): void;
        countRes(res: string, moduleName: string, num?: number): void;
        unload(moduleName: string, ...resArr: any[]): void;
        unloadModule(moduleName?: string): void;
    }
    var R: Res_New;
}
declare module mo {
    /**
     * 是否开启音效
     */
    var audioEnabled: any;
    var _audioEnabled: any;
    var _playingMusic: any;
    function registerAudioPathHandler(handler: any): void;
    function getAudioPath(audioKey?: string): any;
    /**
     * 播放一个音效
     * @param audioPath
     * @param isBgMusic
     * @param cb
     * @param {Boolean|null} loop
     */
    function playAudio(audioPath: any, loop?: any, cb?: any): void;
    /**
     * 停止一个音效
     * @param audioPath
     */
    function pauseAudio(audioPath: any): void;
    /**
     * 播放一个背景音乐
     * @param audioPath
     * @param loop
     */
    function playMusic(audioPath: any, loop: any): void;
    /**
     * 暂停背景音乐
     */
    function pauseMusic(): void;
    function pushMusic(audioPath: string, loop?: boolean): void;
    function popMusic(): void;
    function replaceMusic(audioPath: any, loop?: boolean): void;
    /**
     * 恢复背景音乐
     */
    function resumeMusic(): void;
    /**
     * 设置背景音乐音量
     * @param volume
     */
    function setMusicVolume(volume: any): void;
}
declare module mo {
    class Option {
        static __className: string;
        __className: string;
        __class: any;
        _initProp(): void;
        constructor();
        _init(...args: any[]): void;
        _hasDtored: boolean;
        doDtor(): void;
        dtor(): void;
        reset(): void;
        clone(temp: Option): Option;
    }
}
declare module mo {
    class Point extends egret.Point {
        /**
         * xDirty
         */
        _xDirty: boolean;
        _setXDirty(xDirty: boolean): void;
        xDirty: boolean;
        /**
         * yDirty
         */
        _yDirty: boolean;
        _setYDirty(yDirty: boolean): void;
        yDirty: boolean;
        /**
         * dirty
         */
        _dirty: boolean;
        _setDirty(dirty: boolean): void;
        dirty: boolean;
        /**
         * x
         */
        _x: number;
        _setX(x: number): void;
        x: number;
        /**
         * y
         */
        _y: number;
        _setY(y: number): void;
        y: number;
        clone(point?: Point): Point;
        /**
         * 返回该点的相反点
         * @returns {Point}
         */
        neg(): Point;
        /**
         * 加上某个点所得到的点
         * @param point
         * @returns {Point}
         */
        add(point: Point): Point;
        /**
         * 检出某个点所得到的点
         * @param point
         * @returns {Point}
         */
        sub(point: Point): Point;
        /**
         * 乘以一个系数所得到的点
         * @param floatVar
         * @returns {Point}
         */
        mult(floatVar: number): Point;
        /**
         * 和某个点的中心点
         * @param point
         * @returns {Point}
         */
        midPoint(point: Point): Point;
        /**
         * 和某个点的点乘积
         * @param point
         * @returns {number}
         */
        dot(point: Point): number;
        /**
         * 和某个点的差乘积
         * @param point
         */
        cross(point: Point): number;
        /**
         * 绕着原点顺时针旋转90°后得到的点。
         * @returns {Point}
         */
        perp(): Point;
        /**
         * 绕着原点逆时针时针旋转90°后得到的点。
         * @returns {Point}
         */
        rPerp(): Point;
        /**
         * 获取该点在point点上的投影。
         * @param point
         * @returns {Point}
         */
        project(point: Point): Point;
        /**
         * 绕着某个点旋转的到的新点？ TODO
         * @param point
         * @returns {Point}
         */
        rotate(point: Point): Point;
        /**
         * 绕着某个点旋转的到的新点？ TODO
         * @param point
         * @returns {Point}
         */
        unrotate(point: Point): Point;
        /**
         * 计算点到原点的距离平方？
         * @returns {number}
         */
        lengthSQ: number;
        /**
         * 到某个点的距离平方。
         * @param point
         * @returns {number}
         */
        distanceSQTo(point: Point): number;
        /**
         * @deprecated
         * @param point
         * @returns {number}
         */
        distanceSQ(point: Point): number;
        /**
         * 获取点到原点的距离。
         * @returns {number}
         */
        length: number;
        /**
         * 获取该点到某点的距离。
         * @param point
         * @returns {number}
         */
        distanceTo(point: Point): number;
        /**
         * @deprecated
         * @param point
         * @returns {number}
         */
        distance(point: Point): number;
        /**
         * 获取单位向量。
         * @returns {Point}
         */
        normalize(): Point;
        toAngle(): number;
    }
    function p(x: any, y?: any, resultPoint?: Point): Point;
}
declare module mo {
    class Rect extends egret.Rectangle {
        /**
         * 判断是否包含一个矩形区域
         * @param rect
         * @returns {boolean}
         */
        containsRect(rect: Rect): boolean;
        /**
         * 获取最大的x值
         * @returns {number}
         */
        maxX: number;
        /**
         * 获取中间的x值
         * @returns {number}
         */
        midX: number;
        /**
         * 获取最大的y值
         * @returns {number}
         */
        maxY: number;
        /**
         * 获取中间的y值
         * @returns {number}
         */
        midY: number;
        /**
         * 判断两个矩形框是否有交集
         * @param rect
         * @returns {boolean}
         */
        overlaps(rect: Rect): boolean;
        /**
         * 和矩形框求并集。
         * @param rect
         * @returns {mo.Rect}
         */
        union(rect: Rect): Rect;
        getIntersection(rect: Rect): Rect;
        clone(temp?: Rect): Rect;
    }
    function rect(x: any, y: any, width: any, height: any, resultRect?: Rect): Rect;
}
declare module mo {
    class Size extends egret.HashObject {
        /**
         * Size的宽度
         * @constant {number} mo.Size#width
         */
        width: number;
        /**
         * Size的高度
         * @constant {number} mo.Size#height
         */
        height: number;
        constructor(width?: number, height?: number);
        /**
         * 克隆点对象
         * @method mo.Size#clone
         * @returns {mo.Size}
         */
        clone(): Size;
        /**
         * 确定两个Size是否相同。如果两个Size具有相同的 width 和 height 值，则它们相同。
         * @method mo.Size#equals
         * @param {mo.Size} toCompare 要比较的Size。
         * @returns {boolean} 如果该对象与此 Point 对象相同，则为 true 值，如果不相同，则为 false。
         */
        equals(toCompare: Size): boolean;
    }
    function size(width: any, height?: any, resultSize?: Size): Size;
}
declare module mo {
    /**
     * 角度转弧度
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    function degreesToRadians(angle: number): number;
    /**
     * 弧度转角度
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    function radiansToDegrees(angle: number): number;
    /**
     * 返回相反的点坐标
     * @param point
     * @returns {Point}
     */
    function pNeg(point: Point): Point;
    /**
     * 两点相加
     * @param v1
     * @param v2
     * @returns {Point}
     */
    function pAdd(v1: Point, v2: Point): Point;
    /**
     * 两点相减
     * @param v1
     * @param v2
     * @returns {Point}
     */
    function pSub(v1: Point, v2: Point): Point;
    /**
     * 点乘以某个系数得到新的点
     * @param point
     * @param floatVar
     * @returns {Point}
     */
    function pMult(point: Point, floatVar: number): Point;
    /**
     * 两点的中心点
     * @param v1
     * @param v2
     * @returns {Point}
     */
    function pMidpoint(v1: Point, v2: Point): Point;
    /**
     * Calculates dot product of two points.
     * @param {mo.Point} v1
     * @param {mo.Point} v2
     * @return {Number}
     */
    function pDot(v1: Point, v2: Point): number;
    /**
     * Returns point multiplied to a length of 1.
     * @param {cc.Point} v
     * @return {cc.Point}
     */
    function pNormalize(v: Point): Point;
    /**
     * Calculates distance between point an origin
     * @param  {cc.Point} v
     * @return {Number}
     */
    function pLength(v: Point): number;
    /**
     * Calculates the square length of a cc.Point (not calling sqrt() )
     * @param  {cc.Point} v
     *@return {Number}
     */
    function pLengthSQ(v: Point): number;
}
/**
 * Created by SmallAiTT on 2015/8/19.
 */
declare module mo {
    class Utils extends egret.Emitter {
        colorMatrix: ColorMatrix;
        _initProp(): void;
        /**
         * 合并多个对象
         * @param objs
         * @returns {{}}
         */
        mergeObjs(...objs: any[]): any;
        /**
         * 获取2个数之间的随机数
         * @param startNum
         * @param endNum
         * @returns {number}
         */
        random(startNum: number, endNum?: number): number;
        randomFromArr(arr: any[]): any;
        isEmptyObj(obj: any): boolean;
        /**
         * rbg值转成数字。
         * @param r
         * @param g
         * @param b
         * @returns {number}
         */
        c3b(r: number, g: number, b: number): number;
        /**
         * rbg值转成string格式（#ff0000）
         * @param r
         * @param g
         * @param b
         * @returns {string}
         */
        c3bStr(r: number, g: number, b: number): string;
        /**
         * 十六进制转成十进制。
         * @param hex
         * @returns {number}
         */
        hexToInt(hex: any): number;
        /**
         * 设置对象额外数据，请尽量避免使用中括号赋值的方式，因为这样可能会对原有
         * @param target
         * @param keyOrData
         * @param data
         */
        setExtData(target: any, keyOrData: any, data?: any): Utils;
        /**
         * 获取对象额外数据
         * @param target
         * @param key
         * @returns {any}
         */
        getExtData(target: any, key: string): any;
        /**
         * 清除对象额外数据。
         * @param target
         */
        clearExtData(target: any): void;
        /**
         * 设置显示对象的BCSH值（brightness：亮度，contrast：对比度，saturation：饱和度，hue：色调）。
         * 如果是bcsh不传，或者为空，则认为清空设置。
         * @param target
         * @param bcsh
         */
        bcsh(target: egret.DisplayObject, bcsh?: string): void;
        /**
         * 作换坐标系的点
         * @param targetNode 要转换到的节点
         * @param originNode 原来的节点
         * @param pos
         */
        convertNodeToNodeSpace(targetNode: any, originNode: any, pos: any): any;
        registerClassByKey(target: any, dataCtrlOrClass: any, event: string, listener: Function): void;
        unregisterClass(target: any): void;
        /**
         * 为target对emitter进行统一管理。
         * @param target
         * @param emitterOrClass
         * @param event
         * @param listener
         */
        onEmitter(target: any, emitterOrClass: any, event: any, listener: Function): void;
        /**
         * 为emitter进行统一的资源释放管理。
         * @param target
         */
        unEmitter(target: any): void;
        /**
         * 获取自节点。
         * @param target
         * @returns {egret.gui.CompositeEffect._children|DisplayObject[]|Array}
         */
        getChildren(target: any): any[];
        _stopTouchFunc(event: egret.TouchEvent): void;
        _stopCount: number;
        _stopListened: boolean;
        stopTouch(): void;
        resumeTouch(): void;
    }
    var utils: Utils;
}
/**
 * Created by smallaitt on 3/11/15.
 */
declare module mo {
    class Pool extends egret.Emitter {
        _map: any;
        _limitInfoArr: any;
        defaultLimit: number;
        _createFunc: Function;
        _resetFunc: Function;
        _saveFunc: Function;
        closed: boolean;
        _initProp(): void;
        register(createFunc: Function, resetFunc: Function, saveFunc: Function): void;
        produce(key: string, ...args: any[]): void;
        get(key: string, ...args: any[]): any;
        rm(target: any): void;
        setLimit(exp: any, count: number): void;
        getLimit(key: string): any;
        dtor(): void;
        clear(): void;
    }
}
/**
 * Created by lihex on 12/24/14.
 */
declare module mo {
    class UbbTextElement implements egret.ITextElement {
        text: string;
        style: egret.ITextStyle;
        constructor(text: string, font: string, fontSize: number, color: number);
    }
    class UBBParser {
        __class: any;
        static LINE_BREAK_TAG: string;
        static UBB_TAG: string;
        static colorMap: any;
        _attrNames: string[];
        _convertMap: any;
        _keyMap: any;
        _attrSetterMap: any;
        constructor();
        /**
         * 设置属性
         * @param attrs
         */
        setAttrs(ele: UbbTextElement, attrs: any[]): void;
        /**
         * 转换颜色
         * @param color
         * @returns {*}
         * @private
         */
        _convertColorFromStr(ele: UbbTextElement, color: string): number;
        _converNumberFromStr(ele: UbbTextElement, size: string): number;
        _converBoolFromStr(ele: UbbTextElement, bool: string): boolean;
        _setStyle(ele: UbbTextElement, style: any): void;
        /**
         * 获得文本内容
         * @param ubbStr
         * @returns {any}
         * @private
         */
        _parseTextFromStr(ubbStr: any): any;
        /**
         * 判断是否是ubb格式。
         * @param str
         * @returns {string|boolean}
         */
        isUBB(str: string): boolean;
        /**
         * 开始进行ubb解析。
         * @param ubb
         * @param font
         * @param fontSize
         * @param color
         * @returns {*}
         */
        parse(ubb: string, font: string, fontSize: number, color: number): any;
        private trans2Normal(str);
    }
    function trans4UBB(str: any): string;
    var ubbParser: UBBParser;
}
declare module mo {
    class DataController extends egret.Emitter {
        static ON_RESET: string;
        resModuleName: string;
        _data: any;
        DATA_KEY: any;
        _keyChangedMap: any;
        _customArgMap: any;
        _autoNotify: boolean;
        _initProp(): void;
        constructor();
        reset(...args: any[]): void;
        dtor(): void;
        init(...args: any[]): void;
        setAutoNotify(isAuto: boolean): void;
        isAutoNotify(): boolean;
        _notifyArr(selectors: Function[], targets: any[], args: any[]): void;
        _setChanged(key: any): void;
        get(key: any): any;
        set(key: any, value: any): boolean;
        add(key: any, value: any): void;
        getData(): any;
        updateEntity(data: any): void;
        _cloneObj(obj: any): any;
        pushNotify(key: any, value?: any, ...args: any[]): void;
        pushNotifyAtOnce(eventName: any, value: any, ...args: any[]): void;
        _notifyEvent(eventName: any, registersForKey: any, customArgMap: any): void;
        notifyEvent(eventName: any): void;
        notifyAll(): void;
        _changed: boolean;
        __baseInited: boolean;
        __registers: Function[];
        __registerTargets: any[];
        __registersForKey: any;
        _initBase(): void;
        register(selector: Function, target?: any): any;
        registerByKey(key: any, selector: Function, target?: any): void;
        unregister(selector: Function, target?: any): void;
        unregisterByKey(key: any, selector: Function, target?: any): void;
        unregisterAll(): void;
        static _changed: boolean;
        static __baseInited: boolean;
        static __registers: Function[];
        static __registerTargets: any[];
        static __registersForKey: any;
        static _initBase(): void;
        static register(selector: Function, target?: any): any;
        static registerByKey(key: any, selector: Function, target?: any): void;
        static unregister(selector: Function, target?: any): void;
        static unregisterByKey(key: any, selector: Function, target?: any): void;
        static unregisterAll(): void;
        static _registerQueue: any[];
        static _pushInv(target: any, eventName: any): void;
        static _resetList: any[];
        static _pushResetTarget(target: any): void;
    }
    var _isScheduler4DataControllerStarted: boolean;
    function _startScheduler4DataController(): void;
}
declare module mo {
    var _MsgDlgClassMap: any;
    var _msgDlgParamMap: any;
    var _msgData: any;
    var _msgDlgWaitingMap: {};
    var defaultMsgType: any;
    /**
     * 显示提示信息
     * @param msgCode 消息的ID
     * @param args 最后4个分别是确定和取消的回调参数，之前的是要替换的字符串
     */
    function showMsg(msgCode: any, ...args: any[]): boolean;
    function showErrMsg(text: any, msgType?: any): void;
    /**
     * 按照类型注册弹出框类
     * @param type
     * @param MsgDlgClass
     * @param dlgParam
     */
    function registerMsgDlg(type: any, MsgDlgClass: any, dlgParam?: any): void;
    /**
     * 注册单例模式对话框（不可反复弹出)
     * @param type
     */
    function registerMsgWaitingDlg(type: any): void;
    /**
     * 设置提示消息数据
     * @param data
     */
    function setMsgData(data: any): void;
    /**
     * 消息管理类
     */
    class MsgMgr extends egret.Emitter {
        static ON_CANCEL: string;
        static ON_OK: string;
        translate: Function;
        _initProp(): void;
        /**
         * 获取真实的event名字。
         * @param event
         * @param msgType
         * @returns {string}
         */
        getRealEvent(event: string, msgType: number): string;
        on_type(event: string, msgType: number, listener: Function, ctx?: any): void;
        un_type(event: string, msgType: number, listener: Function, ctx?: any): void;
        once_type(event: string, msgType: number, listener: Function, ctx?: any): void;
        unOnce_type(event: string, msgType: number, listener: Function, ctx?: any): void;
        emit_type(event: string, msgType: any): void;
    }
    var msgMgr: MsgMgr;
}
declare module mo {
    class BaseFactory extends Class {
        _queue: any;
        _createCount: number;
        _productClass: any;
        _initProp(): void;
        produce(...args: any[]): any;
        produce4Recycle(...args: any[]): any;
        produceDynamic(...args: any[]): any;
        produceDynamic4Recycle(...args: any[]): any;
        _produce(...args: any[]): any;
        _produceDynamic(...args: any[]): any;
        reclaim(node: any): void;
        releaseAllProducts(): void;
        releaseProduct(product: any): void;
        dtor(): void;
    }
}
declare module mo {
    class MultiIdBaseFactory extends BaseFactory {
        _initProp(): void;
        _init(): void;
        _produce(keyName: any, ...args: any[]): any;
        _produceDynamic(keyName: any, ...args: any[]): any;
        reclaim(node: any): void;
        releaseAllProducts(): void;
        releaseProduct(product: any): void;
    }
}
