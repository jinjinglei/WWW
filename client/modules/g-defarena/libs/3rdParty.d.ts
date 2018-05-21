declare module path {
    /**
     * 拼接字符串成路径。
     * @param args
     * @returns {string}
     */
    function join(...args: string[]): string;
    /**
     * 获取文件后缀名，主要，后缀名带"."，例如：".png"。
     * @param pathStr
     * @returns {string}
     */
    function extname(pathStr: string): string;
    /**
     * 获取文件名，如果传了extname参数，那么就将去除后缀名。
     * 注意，跟nodejs不同的是，extname参数不区分大小写
     * @param pathStr
     * @param extname
     * @returns {string}
     */
    function basename(pathStr: string, extname?: string): string;
    /**
     * 获取文件所在目录路径。
     * @param pathStr
     * @returns {string}
     */
    function dirname(pathStr: string): string;
    function relative(rootPath: string, realPath: string): string;
}
/**
 * 这是path模块的拓展
 */
declare module path2 {
    /**
     * 替换一个文件的文件后缀名。
     * @param pathStr
     * @param extname
     * @returns {string}
     */
    function changeExtname(pathStr: string, extname?: string): string;
    /**
     * 改变文件的basename。
     * @param pathStr
     * @param basename
     * @param isSameExt
     * @returns {string}
     */
    function changeBasename(pathStr: string, basename: string, isSameExt?: boolean): any;
}
/**
 * 该api值保留了在h5端需要的几个接口而已
 */
declare module process {
    /**
     * 下一个主循环执行一次。
     * 这个和nodejs不同的是，多了执行回调的上下文和传参。
     * @param cb
     * @param ctx
     */
    function nextTick(cb: (...args) => void, ctx?: any, ...args: any[]): void;
}
/**
 * asyncjs模块的api模拟。只模拟了部分觉得有用的api。
 */
declare module async {
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
     * 序列执行异步任务。
     * @param tasks
     * @param cb
     * @param ctx
     */
    function series(tasks: Function[], cb: Function, ctx?: any): void;
    /**
     * 平行执行异步任务。
     * @param tasks
     * @param cb
     * @param ctx
     */
    function parallel(tasks: Function[], cb: Function, ctx?: any): void;
    /**
     * 瀑布模式执行异步任务。
     * @param tasks
     * @param cb
     * @param ctx
     */
    function waterfall(tasks: Function[], cb: Function, ctx?: any): void;
    /**
     * 使用map方式迭代执行列表或者对象数据，进行异步操作。
     * @param tasks {Array|Object}
     * @param iterator  迭代的异步操作
     * @param cb
     * @param ctx
     */
    function map(tasks: any, iterator: (value: any, index: any, cb: Function) => void, cb: (err: any, results: any[]) => void, ctx?: any): void;
    /**
     * 使用map方式迭代执行列表或者对象数据，进行异步操作。但是可以限制每次并行的数量。
     * @param tasks {Array|Object}
     * @param limit 每次并行限制数量
     * @param iterator  迭代的异步操作
     * @param cb
     * @param ctx
     */
    function mapLimit(tasks: any, limit: number, iterator: (value: any, index: any, cb: Function) => void, cb: (err: any, results: any[]) => void, ctx?: any): void;
}

declare module mo {
    function md5(str:string, key?:string, raw?:boolean):string
}

declare module crypt {
    function enCharCode(key:string,text:string);
}