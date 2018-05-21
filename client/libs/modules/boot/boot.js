/**
 * Created by SmallAiTT on 2015/4/27.
 */
var _thisGlobal = this;
var egret;
(function (egret) {
    // 创建一个方便可用的api
    egret.isNative = egret.MainContext.runtimeType == egret.MainContext.RUNTIME_NATIVE;
})(egret || (egret = {}));
var egret;
(function (egret) {
    var project;
    (function (project) {
        var oldRegisterClass = egret.registerClass;
        egret.registerClass = function (clazz, clazzPath) {
            var p = clazz.prototype;
            var arr = clazzPath.split('.');
            clazz.__className = p.__className = arr[arr.length - 1];
            p.__class = clazz;
            if (oldRegisterClass)
                oldRegisterClass.apply(egret, arguments);
        };
        var _handlerArr = [];
        /**
         * 注册project值处理函数。
         * @param handler
         */
        function registerValueHandler(handler) {
            _handlerArr.push(handler);
        }
        project.registerValueHandler = registerValueHandler;
        /**
         * 设置project值。
         * @param data
         * @param key
         * @param isBool
         */
        function setValue(data, key, isBool) {
            var defaultValue = project[key];
            var dv = data[key];
            if (dv == null)
                project[key] = defaultValue;
            else {
                dv = isBool ? !!dv : dv;
                project[key] = dv;
            }
        }
        project.setValue = setValue;
        /**
         * 解析project内容
         * @param data
         */
        function _parse(data) {
            for (var i = 0, l_i = _handlerArr.length; i < l_i; i++) {
                var handler = _handlerArr[i];
                handler(data);
            }
        }
        project._parse = _parse;
        var _cbMap = {};
        var _onLoadFinish = function (event) {
            var loader = this;
            var target = event.target;
            var url = target._request.url;
            loader.removeEventListener(egret.Event.COMPLETE, _onLoadFinish, egret);
            loader.removeEventListener(egret.IOErrorEvent.IO_ERROR, _onLoadFinish, egret);
            var cb = _cbMap[url];
            delete _cbMap[url];
            if (event._type == egret.IOErrorEvent.IO_ERROR) {
                if (cb)
                    cb("配置文件读取失败");
            }
            else {
                var data = JSON.parse(loader.data);
                if (cb)
                    cb(null, data);
            }
        };
        /**
         * 加载project配置文件。
         * @param url
         * @param cb
         */
        function load(url, cb) {
            _cbMap[url] = cb;
            var loader = new egret.URLLoader();
            loader.addEventListener(egret.Event.COMPLETE, _onLoadFinish, loader);
            loader.addEventListener(egret.IOErrorEvent.IO_ERROR, _onLoadFinish, loader);
            loader.dataFormat = egret.URLLoaderDataFormat.TEXT;
            loader.load(new egret.URLRequest(url));
        }
        project.load = load;
        /** 版本号 */
        project.version = "0.0.1";
        /** 程序包名，实际上会再加上projName作为真正的包名 */
        project.package = "com.modo7game";
        /** 项目名称 */
        project.projName = "mo";
        /** app名称 */
        project.appName = "摩多游戏";
        /** 日志等级 */
        project.logLvl = {};
        /** 渲染模式，1为webgl，否则为canvas */
        project.renderMode = 1;
        /** 是否显示FPS */
        project.showFPS = false;
        /** 帧率 */
        project.frameRate = 60;
        /** 设计分辨率 */
        project.design = { width: 960, height: 640 }; //size
        /** 适配，目前没用 */
        project.resolution = { width: 0, height: 0 }; //size
        /** 自由选项 */
        project.option = {};
        registerValueHandler(function (data) {
            setValue(data, "version");
            setValue(data, "package");
            setValue(data, "projName");
            setValue(data, "appName");
            setValue(data, "logLvl");
            setValue(data, "renderMode");
            setValue(data, "showFPS", true);
            setValue(data, "frameRate");
            setValue(data, "design");
            setValue(data, "resolution");
            setValue(data, "option");
            setValue(data, "scaleMode");
        });
    })(project = egret.project || (egret.project = {}));
})(egret || (egret = {}));
var logger;
(function (logger) {
    /**
     * 格式化参数成String。
     * 参数和h5的console.log保持一致。
     * @returns {*}
     */
    function formatStr() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var l = args.length;
        if (l < 1) {
            return '';
        }
        var str = args[0];
        var needToFormat = true;
        if (typeof str == 'object') {
            str = JSON.stringify(str);
            needToFormat = false;
        }
        if (str == null)
            str = 'null';
        str += '';
        var count = 1;
        if (needToFormat) {
            var content = str.replace(/(%d)|(%i)|(%s)|(%f)|(%o)/g, function (world) {
                if (args.length <= count)
                    return world;
                var value = args[count++];
                if (world == '%d' || world == '%i') {
                    return parseInt(value);
                }
                else {
                    return value;
                }
            });
            for (var l_i = args.length; count < l_i; count++) {
                content += '    ' + args[count];
            }
            return content;
        }
        else {
            for (var i = 1; i < l; ++i) {
                var arg = args[i];
                arg = typeof arg == 'object' ? JSON.stringify(arg) : arg;
                str += '    ' + arg;
            }
            return str;
        }
    }
    logger.formatStr = formatStr;
    var _map = {};
    /**
     * 初始化模块日志
     * @param m
     * @param mName
     */
    function initLogger(m, mName) {
        _map[mName] = m;
        if (!egret.isNative) {
            m.log = console.log.bind(console);
            m.debug = console.debug.bind(console);
            m.info = console.info.bind(console);
            m.warn = console.warn.bind(console);
            m.error = console.error.bind(console);
        }
        else {
            m.log = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.log(mName + ".log: " + formatStr.apply(logger, args));
            };
            m.debug = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.debug(mName + ".debug: " + formatStr.apply(logger, args));
            };
            m.info = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                //TODO 骗纸啊，runtime居然没有console.info！！！
                console.debug(mName + ".info: " + formatStr.apply(logger, args));
            };
            m.warn = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.warn(mName + ".warn: " + formatStr.apply(logger, args));
            };
            m.error = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                console.error(mName + ".error: " + formatStr.apply(logger, args));
            };
        }
    }
    logger.initLogger = initLogger;
    /**
     * 设置日志等级
     * @param mName
     * @param lvl
     */
    function setLvl(mName, lvl) {
        if (mName == "default") {
            for (var key in _map) {
                if (key == "default")
                    continue;
                var m = _map[key];
                if (!m)
                    continue;
                initLogger(m, key);
                if (lvl > 1) {
                    m.log = function () { };
                    m.debug = function () { };
                }
                if (lvl > 2)
                    m.info = function () { };
                if (lvl > 3)
                    m.warn = function () { };
                if (lvl > 4)
                    m.error = function () { };
            }
        }
        else {
            var m = _map[mName];
            if (!m)
                return; //该日志还没初始化过，没法设置等级
            initLogger(m, mName);
            if (lvl > 1) {
                m.log = function () { };
                m.debug = function () { };
            }
            if (lvl > 2)
                m.info = function () { };
            if (lvl > 3)
                m.warn = function () { };
            if (lvl > 4)
                m.error = function () { };
        }
    }
    logger.setLvl = setLvl;
    initLogger(logger, "logger");
})(logger || (logger = {}));
var logger;
(function (logger) {
    var evt;
    (function (evt) {
        logger.initLogger(evt, "evt");
        logger.setLvl("evt", 4);
    })(evt = logger.evt || (logger.evt = {}));
})(logger || (logger = {}));
var egret;
(function (egret) {
    /**
     * 异步池
     */
    var AsyncPool = (function () {
        function AsyncPool(srcObj, limit, iterator, onEnd, ctx) {
            this._srcObj = null;
            this._limit = 0;
            this._pool = [];
            this._iterator = null;
            this._iteratorCtx = null;
            this._onEnd = null;
            this._onEndCtx = null;
            this._results = null;
            this._isErr = false;
            /** 总大小 */
            this.size = 0;
            /** 已完成的大小 */
            this.finishedSize = 0;
            /** 正在工作的大小 **/
            this._workingSize = 0;
            var self = this;
            self._srcObj = srcObj;
            self._iterator = iterator;
            self._iteratorCtx = ctx;
            self._onEnd = onEnd;
            self._onEndCtx = ctx;
            self._results = srcObj instanceof Array ? [] : {};
            self._each(srcObj, function (value, index) {
                self._pool.push({ index: index, value: value });
            });
            self.size = self._pool.length; //总大小
            self._limit = limit || self.size;
        }
        var d = __define,c=AsyncPool,p=c.prototype;
        p._each = function (obj, iterator, context) {
            if (!obj)
                return;
            if (obj instanceof Array) {
                for (var i = 0, li = obj.length; i < li; i++) {
                    if (iterator.call(context, obj[i], i) === false)
                        return;
                }
            }
            else {
                for (var key in obj) {
                    if (iterator.call(context, obj[key], key) === false)
                        return;
                }
            }
        };
        p.onIterator = function (iterator, target) {
            this._iterator = iterator;
            this._iteratorCtx = target;
        };
        p.onEnd = function (endCb, endCbTarget) {
            this._onEnd = endCb;
            this._onEndCtx = endCbTarget;
        };
        p._handleItem = function () {
            var self = this;
            if (self._pool.length == 0)
                return; //数组长度为0直接返回不操作了
            if (self._workingSize >= self._limit)
                return; //正在工作的数量应达到限制上限则直接返回
            var item = self._pool.shift();
            var value = item.value;
            var index = item.index;
            self._workingSize++; //正在工作的大小+1
            self._iterator.call(self._iteratorCtx, value, index, function (err) {
                if (self._isErr)
                    return; //已经出错了，就直接返回了
                self.finishedSize++; //完成数量+1
                self._workingSize--; //正在工作的大小-1
                if (err) {
                    self._isErr = true; //设置成已经出错了
                    if (self._onEnd)
                        self._onEnd.call(self._onEndCtx, err); //如果出错了
                    return;
                }
                var arr = Array.prototype.slice.call(arguments);
                arr.splice(0, 1); //去除第一个参数
                self._results[this.index] = arr[0]; //保存迭代器返回结果
                if (self.finishedSize == self.size) {
                    if (self._onEnd)
                        self._onEnd.call(self._onEndCtx, null, self._results);
                    return;
                }
                if (typeof egret != "undefined" && egret.setTimeout != null) {
                    egret.setTimeout(function () {
                        self._handleItem();
                    }, this, 1);
                }
                else {
                    //实在没有就用自带的（浏览器环境下才会进）
                    _thisGlobal.setTimeout(function () {
                        self._handleItem();
                    }, 1);
                }
                //self._handleItem();//继续执行下一个
            }.bind(item), self);
        };
        p.flow = function () {
            var self = this;
            var onFlow = function () {
                if (self._pool.length == 0) {
                    if (self._onEnd)
                        self._onEnd.call(self._onEndCtx, null, []); //数组长度为0，直接结束
                }
                else {
                    for (var i = 0; i < self._limit; i++) {
                        self._handleItem();
                    }
                }
            };
            if (typeof egret != "undefined" && egret.setTimeout != null) {
                egret.setTimeout(function () {
                    onFlow();
                }, this, 1);
            }
            else {
                //实在没有就用自带的（浏览器环境下才会进）
                _thisGlobal.setTimeout(function () {
                    onFlow();
                }, 1);
            }
        };
        return AsyncPool;
    })();
    egret.AsyncPool = AsyncPool;
    egret.registerClass(AsyncPool,"egret.AsyncPool");
    /**
     * 储藏室
     */
    var Store = (function () {
        function Store() {
            this.pool = {};
            this.tempPool = {};
            this.pool4Single = {};
            this.tempArgsMap = {};
            this.valuePool = {};
        }
        var d = __define,c=Store,p=c.prototype;
        p.register = function (owner, type, listener, ctx, priority) {
            var pool = this.pool;
            var map = pool[owner];
            if (!map) {
                pool[owner] = map = {};
            }
            var arr = map[type];
            if (!arr) {
                arr = map[type] = [];
            }
            for (var i = 0, l_i = arr.length; i < l_i; i++) {
                var obj = arr[i];
                if (!obj)
                    continue;
                if (obj.listener == listener && obj.ctx == ctx)
                    return; //避免重复注册
            }
            var info = { listener: listener, ctx: ctx, priority: priority };
            if (priority == null) {
                arr.push(info);
            }
            else {
                var index = 0;
                for (var i = 0, l_i = arr.length; i < l_i; i++) {
                    var obj = arr[i];
                    if (obj.priority == null || obj.priority <= priority) {
                        index = i + 1;
                    }
                    else if (obj.priority > priority) {
                        index = i;
                        break;
                    }
                }
                arr.splice(index, 0, info);
            }
        };
        p.unRegister = function (owner, type, listener, ctx) {
            var pool = this.pool;
            var map = pool[owner];
            if (!map)
                return;
            var arr = map[type];
            if (!arr)
                return;
            for (var i = 0, l_i = arr.length; i < l_i; i++) {
                var obj = arr[i];
                if (obj.listener == listener && obj.ctx == ctx) {
                    arr.splice(i, 1);
                    return;
                }
            }
        };
        p.clear = function (owner, type) {
            var pool = this.pool;
            var map = pool[owner];
            if (!map)
                return;
            var arr = map[type];
            if (!arr)
                return;
            arr.length = 0;
        };
        p.registerSingle = function (owner, type, listener, ctx) {
            var self = this, pool4Single = self.pool4Single, map = pool4Single[owner];
            if (!map) {
                map = pool4Single[owner] = {};
            }
            map[type] = { listener: listener, ctx: ctx };
        };
        p.unRegisterSingle = function (owner, type) {
            var self = this, pool4Single = self.pool4Single, map = pool4Single[owner];
            if (!map)
                return;
            delete map[type];
        };
        p.unRegisterAll = function (owner, type) {
            var pool = this.pool, pool4Single = this.pool4Single;
            var map = pool[owner], map4Single = pool4Single[owner];
            if (arguments.length == 1) {
                if (map) {
                    for (var key in map) {
                        delete map[key];
                    }
                }
                if (map4Single) {
                    for (var key in map4Single) {
                        delete map4Single[key];
                    }
                }
            }
            else {
                if (map) {
                    var arr = map[type];
                    if (arr)
                        arr.length = 0;
                }
                if (map4Single) {
                    delete map4Single[type];
                }
            }
        };
        p.getTempArr = function (owner, type) {
            var pool = this.pool, tempPool = this.tempPool;
            var map = pool[owner];
            if (!map)
                return null;
            var arr = map[type];
            if (!arr)
                return null;
            var tempMap = tempPool[owner];
            if (!tempMap) {
                tempMap = tempPool[owner] = {};
            }
            var tempArr = tempMap[type];
            if (!tempArr) {
                tempArr = tempMap[type] = [];
            }
            tempArr.length = 0;
            for (var i = 0, l_i = arr.length; i < l_i; i++) {
                tempArr.push(arr[i]);
            }
            return tempArr;
        };
        p.getSingle = function (owner, type) {
            var self = this, pool4Single = self.pool4Single, map = pool4Single[owner];
            if (!map)
                return null;
            return map[type];
        };
        p.getTempArgs = function (owner, type, args) {
            var tempArgsMap = this.tempArgsMap;
            var map = tempArgsMap[owner];
            if (!map) {
                map = tempArgsMap[owner] = {};
            }
            var arr = map[type];
            if (!arr) {
                arr = map[type] = [];
            }
            if (arr.length > 0) {
                arr = [];
            }
            for (var i = 0, l_i = args.length; i < l_i; i++) {
                arr.push(args[i]);
            }
            return arr;
        };
        p.setValue = function (owner, type, args) {
            var valuePool = this.valuePool;
            var map = valuePool[owner];
            if (!map) {
                map = valuePool[owner] = {};
            }
            map[type] = args;
        };
        p.removeValue = function (owner, type) {
            var valuePool = this.valuePool;
            var map = valuePool[owner];
            if (!map)
                return null;
            return map[type];
        };
        p.doDtor = function () {
            var self = this;
            if (self._hasDtored)
                return;
            self._hasDtored = true;
            self.dtor();
        };
        p.dtor = function () {
            var self = this;
            delete self.pool;
            delete self.tempPool;
            delete self.pool4Single;
            delete self.tempArgsMap;
            delete self.valuePool;
        };
        return Store;
    })();
    egret.Store = Store;
    egret.registerClass(Store,"egret.Store");
    var _OWNER_ON = "on";
    var _OWNER_ON_NT = "onNextTick";
    var _OWNER_ONCE = "once";
    var _OWNER_ONCE_NT = "onceNextTick";
    var _OWNER_ON_ASYNC = "onAsync";
    var _OWNER_ONCE_ASYNC = "onceAsync";
    var Emitter = (function () {
        function Emitter() {
            var self = this;
            self._initProp();
            self._init();
        }
        var d = __define,c=Emitter,p=c.prototype;
        p._initProp = function () {
            var self = this;
            self._store = new Store();
        };
        p._init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
        };
        p.init = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
        };
        p.doDtor = function () {
            var self = this;
            if (self._hasDtored)
                return;
            self._hasDtored = true;
            self.dtor();
        };
        p.dtor = function () {
            this._store.doDtor();
        };
        /**
         * 监听某个事件。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.on = function (event, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ON, event, listener, ctx, null);
            return self;
        };
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.onPriority = function (event, priority, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ON, event, listener, ctx, priority);
            return self;
        };
        /**
         * 监听某个事件。可以注册多个。通过emit触发。（异步模式，listener的第一个传参为异步需要执行的cb）
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.onAsync = function (event, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ON_ASYNC, event, listener, ctx, null);
            return self;
        };
        /**
         * 通过优先级进行事件监听注册。通过emit触发。（异步模式，listener的第一个传参为异步需要执行的cb）
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.onAsyncPriority = function (event, priority, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ON_ASYNC, event, listener, ctx, priority);
            return self;
        };
        /**
         * 监听某个事件，在下一帧执行。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.onNextTick = function (event, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ON_NT, event, listener, ctx, null);
            return self;
        };
        /**
         * 通过优先级进行事件监听注册。通过emitNextTick触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.onPriorityNextTick = function (event, priority, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ON_NT, event, listener, ctx, priority);
            return self;
        };
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.once = function (event, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ONCE, event, listener, ctx, null);
            return self;
        };
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.oncePriority = function (event, priority, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ONCE, event, listener, ctx, priority);
            return self;
        };
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.onceAsync = function (event, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ONCE_ASYNC, event, listener, ctx, null);
            return self;
        };
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.onceAsyncPriority = function (event, priority, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ONCE_ASYNC, event, listener, ctx, priority);
            return self;
        };
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.onceNextTick = function (event, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ONCE_NT, event, listener, ctx, null);
            return self;
        };
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.oncePriorityNextTick = function (event, priority, listener, ctx) {
            var self = this;
            self._store.register(_OWNER_ONCE, event, listener, ctx, priority);
            return self;
        };
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.single = function (event, listener, ctx) {
            var self = this;
            self._store.registerSingle(_OWNER_ON, event, listener, ctx);
            return self;
        };
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.singleAsync = function (event, listener, ctx) {
            var self = this;
            self._store.registerSingle(_OWNER_ON_ASYNC, event, listener, ctx);
            return self;
        };
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.singleNextTick = function (event, listener, ctx) {
            var self = this;
            self._store.registerSingle(_OWNER_ON_NT, event, listener, ctx);
            return self;
        };
        /**
         * 移除事件监听。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.un = function (event, listener, ctx) {
            var self = this;
            self._store.unRegister(_OWNER_ON, event, listener, ctx);
            return self;
        };
        /**
         * 移除下一帧类型的事件监听。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.unNextTick = function (event, listener, ctx) {
            var self = this;
            self._store.unRegister(_OWNER_ON_NT, event, listener, ctx);
            return self;
        };
        /**
         * 移除一次性的事件监听。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.unOnce = function (event, listener, ctx) {
            var self = this;
            self._store.unRegister(_OWNER_ONCE, event, listener, ctx);
            return self;
        };
        /**
         * 移除下一帧执行的一次性的监听。
         * @param event
         * @param listener
         * @param ctx
         * @returns {mo_evt.Emitter}
         */
        p.unOnceNextTick = function (event, listener, ctx) {
            var self = this;
            self._store.unRegister(_OWNER_ONCE_NT, event, listener, ctx);
            return self;
        };
        /**
         * 移除单个类型的事件监听。
         * @param event
         * @returns {mo_evt.Emitter}
         */
        p.unSingle = function (event) {
            var self = this;
            self._store.unRegisterSingle(_OWNER_ON, event);
            return self;
        };
        /**
         * 移除单个类型的并且是下一帧执行类型的事件监听。
         * @param event
         * @returns {mo_evt.Emitter}
         */
        p.unSingleNextTick = function (event) {
            var self = this;
            self._store.unRegisterSingle(_OWNER_ON_NT, event);
            return self;
        };
        /**
         * 移除所有立即执行类型的事件监听。
         * 如果arguments.length == 0 那么就表示移除所有监听。
         * 如果arguments.length == 1 那么就表示移除指定类型的所有监听。
         * @param event
         * @returns {mo_evt.Emitter}
         */
        p.unAll = function (event) {
            var self = this;
            var l = arguments.length;
            var arr = [
                _OWNER_ON,
                _OWNER_ONCE
            ];
            for (var i = 0, l_i = arr.length; i < l_i; i++) {
                var owner = arr[i];
                if (l == 0) {
                    self._store.unRegisterAll(owner);
                }
                else {
                    self._store.unRegisterAll(owner, event);
                }
            }
            return self;
        };
        /**
         * 移除所有下一帧执行类型的事件监听。
         * 如果arguments.length == 0 那么就表示移除所有监听。
         * 如果arguments.length == 1 那么就表示移除指定类型的所有监听。
         * @param event
         * @returns {mo_evt.Emitter}
         */
        p.unAllNextTick = function (event) {
            var self = this;
            var arr = [
                _OWNER_ON_NT,
                _OWNER_ONCE_NT
            ];
            var l = arguments.length;
            for (var i = 0, l_i = arr.length; i < l_i; i++) {
                var owner = arr[i];
                if (l == 0) {
                    self._store.unRegisterAll(owner);
                }
                else {
                    self._store.unRegisterAll(owner, event);
                }
            }
            return self;
        };
        p._emitByListenerInfoArr = function (owner, event, arr, args) {
            if (arr) {
                var self = this;
                arr = arr instanceof Array ? arr : [arr];
                if (arr.length == 0)
                    return;
                var args = self._store.getTempArgs(owner, event, args);
                args.push(event); //事件类型放在倒数第二位置
                args.push(self); //发送者放在最后一个位置
                for (var i = 0, l_i = arr.length; i < l_i; i++) {
                    var info = arr[i];
                    if (!info)
                        continue; // 如果已经不存在了
                    var listener = info.listener;
                    if (listener) {
                        listener.apply(info.ctx, args);
                    }
                }
                arr.length = 0; //清空引用
                args.length = 0; //清空参数
            }
        };
        /**
         * 立即发射事件。
         * @param event
         * @param args
         * @returns {mo_evt.Emitter}
         */
        p.emit = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var self = this, store = self._store, single, tempArr;
            //实例级别的注册
            //先执行单个的
            single = store.getSingle(_OWNER_ON, event);
            self._emitByListenerInfoArr(_OWNER_ON, event, single, args);
            //再执行一次性的
            tempArr = store.getTempArr(_OWNER_ONCE, event);
            store.clear(_OWNER_ONCE, event); //进行清除
            self._emitByListenerInfoArr(_OWNER_ONCE, event, tempArr, args);
            //最后执行多次的
            tempArr = store.getTempArr(_OWNER_ON, event);
            self._emitByListenerInfoArr(_OWNER_ON, event, tempArr, args);
            //类级别的注册
            store = self.__class._store;
            //先执行单个的
            single = store.getSingle(_OWNER_ON, event);
            self._emitByListenerInfoArr(_OWNER_ON, event, single, args);
            //再执行一次性的
            tempArr = store.getTempArr(_OWNER_ONCE, event);
            store.clear(_OWNER_ONCE, event); //进行清除
            self._emitByListenerInfoArr(_OWNER_ONCE, event, tempArr, args);
            //最后执行多次的
            tempArr = store.getTempArr(_OWNER_ON, event);
            self._emitByListenerInfoArr(_OWNER_ON, event, tempArr, args);
            return self;
        };
        /**
         * 异步发射事件。
         * @param event
         * @param args
         * @returns {mo_evt.Emitter}
         */
        p.emitAsync = function (event, onEnd, ctx) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var self = this, store = self._store, single, tempArr;
            var arr = [];
            //实例级别的注册
            //先执行单个的
            single = store.getSingle(_OWNER_ON_ASYNC, event);
            if (single)
                arr.push(arr);
            //再执行一次性的
            tempArr = store.getTempArr(_OWNER_ONCE_ASYNC, event);
            if (tempArr) {
                for (var i = 0, l_i = tempArr.length; i < l_i; i++) {
                    arr.push(tempArr[i]);
                }
            }
            store.clear(_OWNER_ONCE_ASYNC, event); //进行清除
            //最后执行多次的
            tempArr = store.getTempArr(_OWNER_ON_ASYNC, event);
            if (tempArr) {
                for (var i = 0, l_i = tempArr.length; i < l_i; i++) {
                    arr.push(tempArr[i]);
                }
            }
            //类级别的注册
            store = self.__class._store;
            //先执行单个的
            single = store.getSingle(_OWNER_ON_ASYNC, event);
            if (single)
                arr.push(arr);
            //再执行一次性的
            tempArr = store.getTempArr(_OWNER_ONCE_ASYNC, event);
            if (tempArr) {
                for (var i = 0, l_i = tempArr.length; i < l_i; i++) {
                    arr.push(tempArr[i]);
                }
            }
            store.clear(_OWNER_ONCE_ASYNC, event); //进行清除
            //最后执行多次的
            tempArr = store.getTempArr(_OWNER_ON_ASYNC, event);
            if (tempArr) {
                for (var i = 0, l_i = tempArr.length; i < l_i; i++) {
                    arr.push(tempArr[i]);
                }
            }
            var tempArgs = [null].concat(args);
            tempArgs.push(event);
            tempArgs.push(self);
            var asyncPool = new egret.AsyncPool(arr, 0, function (info, index, cb1) {
                tempArgs[0] = cb1;
                info.listener.apply(info.ctx, tempArgs);
            }, onEnd, ctx);
            asyncPool.flow();
            return self;
        };
        /**
         * 在下一帧才发射事件。而且，发射的事件只会发射最后调用emitNextTick的那次。
         * @param event
         * @param args
         * @returns {mo_evt.Emitter}
         */
        p.emitNextTick = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var self = this;
            self._store.setValue(_OWNER_ON_NT, event, args);
            if (_emittersNextTick.indexOf(self) < 0)
                _emittersNextTick.push(self);
            return self;
        };
        /**
         * 这个分发比较特殊，会同时进行emit 和 emitNextTick。主要是为了方便同时都需要进行两个同时要同时分发的情况
         * @param event
         * @param args
         * @returns {egret.Emitter}
         */
        p.emitBoth = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var self = this;
            self.emit.apply(self, arguments);
            self.emitNextTick.apply(self, arguments);
            return self;
        };
        /**
         * 发射阶段性事件。before and after。
         * @param event
         * @param func
         * @param ctx
         * @param args
         * @returns {mo_evt.Emitter}
         */
        p.emitPhase = function (event, func, ctx) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var self = this;
            return self;
        };
        /**
         * 在下一帧才发射阶段性事件。before and after。
         * 而且，发射的事件只会发射最后调用emitPhaseNextTick的那次。
         * @param event
         * @param func
         * @param ctx
         * @param args
         * @returns {mo_evt.Emitter}
         */
        p.emitPhaseNextTick = function (event, func, ctx) {
            var args = [];
            for (var _i = 3; _i < arguments.length; _i++) {
                args[_i - 3] = arguments[_i];
            }
            var self = this;
            return self;
        };
        /**
         * 监听某个事件。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.on = function (event, listener, ctx) {
            return this.prototype.on.apply(this, arguments);
        };
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         */
        Emitter.onPriority = function (event, priority, listener, ctx) {
            return this.prototype.onPriority.apply(this, arguments);
        };
        /**
         * 监听某个事件。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.onAsync = function (event, listener, ctx) {
            return this.prototype.onAsync.apply(this, arguments);
        };
        /**
         * 通过优先级进行事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         */
        Emitter.onAsyncPriority = function (event, priority, listener, ctx) {
            return this.prototype.onAsyncPriority.apply(this, arguments);
        };
        /**
         * 监听某个事件，在下一帧执行。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.onNextTick = function (event, listener, ctx) {
            return this.prototype.onNextTick.apply(this, arguments);
        };
        /**
         * 通过优先级进行事件监听注册。通过emitNextTick触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         */
        Emitter.onPriorityNextTick = function (event, priority, listener, ctx) {
            return this.prototype.onPriorityNextTick.apply(this, arguments);
        };
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.once = function (event, listener, ctx) {
            return this.prototype.once.apply(this, arguments);
        };
        /**
         * 通过优先级进行一次性事件监听注册。通过emit触发。
         * @param event
         * @param priority
         * @param listener
         * @param ctx
         */
        Emitter.oncePriority = function (event, priority, listener, ctx) {
            return this.prototype.oncePriority.apply(this, arguments);
        };
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.onceAsync = function (event, listener, ctx) {
            return this.prototype.onceAsync.apply(this, arguments);
        };
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.onceAsyncPriority = function (event, priority, listener, ctx) {
            return this.prototype.onceAsyncPriority.apply(this, arguments);
        };
        /**
         * 注册一次性监听，触发了就移除。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.onceNextTick = function (event, listener, ctx) {
            return this.prototype.onceNextTick.apply(this, arguments);
        };
        /**
         * 通过优先级注册一次性监听，触发了就移除。可以注册多个。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.oncePriorityNextTick = function (event, priority, listener, ctx) {
            return this.prototype.oncePriorityNextTick.apply(this, arguments);
        };
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.single = function (event, listener, ctx) {
            return this.prototype.single.apply(this, arguments);
        };
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emit触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.singleAsync = function (event, listener, ctx) {
            return this.prototype.singleAsync.apply(this, arguments);
        };
        /**
         * 注册单个监听，每次都被最新注册的替换。通过emitNextTick触发。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.singleNextTick = function (event, listener, ctx) {
            return this.prototype.singleNextTick.apply(this, arguments);
        };
        /**
         * 移除事件监听。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.un = function (event, listener, ctx) {
            return this.prototype.un.apply(this, arguments);
        };
        /**
         * 移除下一帧类型的事件监听。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.unNextTick = function (event, listener, ctx) {
            return this.prototype.unNextTick.apply(this, arguments);
        };
        /**
         * 移除一次性的事件监听。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.unOnce = function (event, listener, ctx) {
            return this.prototype.unOnce.apply(this, arguments);
        };
        /**
         * 移除下一帧执行的一次性的监听。
         * @param event
         * @param listener
         * @param ctx
         */
        Emitter.unOnceNextTick = function (event, listener, ctx) {
            return this.prototype.unOnceNextTick.apply(this, arguments);
        };
        /**
         * 移除单个类型的事件监听。
         * @param event
         */
        Emitter.unSingle = function (event) {
            return this.prototype.unSingle.apply(this, arguments);
        };
        /**
         * 移除单个类型的并且是下一帧执行类型的事件监听。
         * @param event
         */
        Emitter.unSingleNextTick = function (event) {
            return this.prototype.unSingleNextTick.apply(this, arguments);
        };
        /**
         * 移除所有立即执行类型的事件监听。
         * 如果arguments.length == 0 那么就表示移除所有监听。
         * 如果arguments.length == 1 那么就表示移除指定类型的所有监听。
         * @param event
         */
        Emitter.unAll = function (event) {
            return this.prototype.unAll.apply(this, arguments);
        };
        /**
         * 移除所有下一帧执行类型的事件监听。
         * 如果arguments.length == 0 那么就表示移除所有监听。
         * 如果arguments.length == 1 那么就表示移除指定类型的所有监听。
         * @param event
         */
        Emitter.unAllNextTick = function (event) {
            return this.prototype.unAllNextTick.apply(this, arguments);
        };
        /**
         * 格式化出before类型的event值。
         * @param event
         * @returns {string}
         */
        Emitter.formatBeforeEvent = function (event) {
            return event + ".before";
        };
        /**
         * 格式化出after类型的event值。
         * @param event
         * @returns {string}
         */
        Emitter.formatAfterEvent = function (event) {
            return event + ".after";
        };
        Emitter.create = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var Class = this;
            var obj = new Class();
            if (obj.init)
                obj.init.apply(obj, arguments);
            return obj;
        };
        Emitter.getInstance = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var Class = this;
            if (!Class._instance) {
                var instance = Class._instance = Class.create.apply(Class, arguments);
                instance._isInstance = true;
            }
            return Class._instance;
        };
        Emitter.purgeInstance = function () {
            var Class = this;
            var instance = Class._instance;
            if (instance) {
                if (instance.doDtor)
                    instance.doDtor();
                Class._instance = null;
            }
        };
        //++++++++++++++++++++++++++++++静态方法 开始+++++++++++++++++++++++++++++++++
        Emitter._store = new Store();
        return Emitter;
    })();
    egret.Emitter = Emitter;
    egret.registerClass(Emitter,"egret.Emitter");
    var _emittersNextTick = [];
    var _tempEmittersNextTick = [];
    var _tempEmitters = [];
    var _tempEventArr = [];
    var _tempArgsArr = [];
    function _loop4Emitter() {
        egret.Ticker.getInstance().register(function () {
            _tempEmittersNextTick.length = 0;
            if (_emittersNextTick.length > 0) {
                //进行模板获取
                for (var i = 0, l_i = _emittersNextTick.length; i < l_i; i++) {
                    var emitter = _emittersNextTick[i];
                    var store = emitter._store;
                    var valuePool = store.valuePool;
                    var map = valuePool[_OWNER_ON_NT];
                    for (var event in map) {
                        _tempEmitters.push(emitter);
                        _tempEventArr.push(event);
                        _tempArgsArr.push(map[event]);
                        delete map[event]; //当前帧已经可以清除了
                    }
                }
                _emittersNextTick.length = 0;
                for (var i = 0, l_i = _tempEmitters.length; i < l_i; i++) {
                    var emitter = _tempEmitters[i];
                    var event = _tempEventArr[i];
                    var args = _tempArgsArr[i];
                    var single, tempArr;
                    //先执行单个的
                    single = store.getSingle(_OWNER_ON_NT, event);
                    emitter._emitByListenerInfoArr(_OWNER_ON_NT, event, single, args);
                    //再执行一次性的
                    tempArr = store.getTempArr(_OWNER_ONCE_NT, event);
                    store.clear(_OWNER_ONCE_NT, event); //进行清除
                    emitter._emitByListenerInfoArr(_OWNER_ONCE_NT, event, tempArr, args);
                    //最后执行多次的
                    tempArr = store.getTempArr(_OWNER_ON_NT, event);
                    emitter._emitByListenerInfoArr(_OWNER_ON_NT, event, tempArr, args);
                    //类级别的注册
                    store = emitter.__class._store;
                    //先执行单个的
                    single = store.getSingle(_OWNER_ON_NT, event);
                    emitter._emitByListenerInfoArr(_OWNER_ON_NT, event, single, args);
                    //再执行一次性的
                    tempArr = store.getTempArr(_OWNER_ONCE_NT, event);
                    store.clear(_OWNER_ONCE_NT, event); //进行清除
                    emitter._emitByListenerInfoArr(_OWNER_ONCE_NT, event, tempArr, args);
                    //最后执行多次的
                    tempArr = store.getTempArr(_OWNER_ON_NT, event);
                    emitter._emitByListenerInfoArr(_OWNER_ON_NT, event, tempArr, args);
                }
                _tempEmitters.length = 0;
                _tempEventArr.length = 0;
                _tempArgsArr.length = 0;
            }
        }, null);
    }
    egret._loop4Emitter = _loop4Emitter;
    ;
})(egret || (egret = {}));
var egret;
(function (egret) {
    //解析http参数
    var _parseParam = function () {
        var data = {};
        var src = window.location.href;
        var index = src.indexOf("?");
        if (index > 0) {
            var str = src.substring(index + 1);
            var arr = str.split("&");
            for (var i = 0, l_i = arr.length; i < l_i; i++) {
                var paramStr = arr[i];
                var param = paramStr.split("=");
                var pKey = param[0], pValue = param[1];
                if (pValue.match(/(^\d+$)/)) {
                    pValue = parseInt(pValue);
                }
                else if (pValue.match(/(^\d+.\d+$)/)) {
                    pValue = parseFloat(pValue);
                }
                data[pKey] = pValue;
            }
        }
        egret.project._parse(data);
    };
    //加载project配置
    var _loadConfig = function (cb) {
        //加载配置文件
        var projectUrl = 'resource/project.json';
        if (egret.isNative)
            projectUrl += '?v=' + Date.now();
        egret.project.load(projectUrl, function (err, data) {
            if (err) {
                console.error("缺失project.json文件，请检查！");
            }
            else {
                egret.project._parse(data);
            }
            if (!egret.devMode || egret.isNative) {
                return cb();
            }
            egret.project.load("resource/myProject.json", function (err, data) {
                if (err || data == null) {
                    _parseParam();
                    cb();
                }
                else {
                    egret.project._parse(data);
                    _parseParam();
                    cb();
                }
            });
        });
    };
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Boot,p=c.prototype;
        Boot.AFTER_EGRET = "afterEgret";
        Boot.AFTER_CONFIG = "afterConfig";
        Boot.AFTER_MAIN = "afterMain";
        return Boot;
    })(egret.Emitter);
    egret.Boot = Boot;
    egret.registerClass(Boot,"egret.Boot");
    var _onAfterJs = function (cb) {
        var boot = Boot.getInstance();
        egret._loop4Emitter();
        boot.emit(Boot.AFTER_EGRET);
        boot.emitAsync(Boot.AFTER_EGRET, function () {
            _loadConfig(function () {
                var logLvl = egret.project.logLvl;
                if (typeof logLvl == "number") {
                    logger.setLvl("default", logLvl);
                }
                else {
                    var logLvlDefault = logLvl["default"];
                    if (logLvlDefault != null)
                        logger.setLvl("default", logLvlDefault);
                    for (var mName in logLvl) {
                        if (mName == "all")
                            continue;
                        logger.setLvl(mName, logLvl[mName]);
                    }
                }
                if (!egret.isNative) {
                    var titleEle = document.getElementsByTagName("title")[0];
                    if (titleEle) {
                        titleEle.innerHTML = egret.project.appName;
                    }
                    else {
                        titleEle = document.createElement("title");
                        titleEle.innerHTML = egret.project.appName;
                        document.getElementsByTagName("head")[0].appendChild(titleEle);
                    }
                }
                boot.emit(Boot.AFTER_CONFIG);
                boot.emitAsync(Boot.AFTER_CONFIG, function () {
                    console.log("项目启动完毕！");
                    boot.emit(Boot.AFTER_MAIN);
                    if (cb)
                        cb();
                });
            });
        }, null);
    };
    function boot(cb) {
        _onAfterJs(cb);
    }
    egret.boot = boot;
})(egret || (egret = {}));

