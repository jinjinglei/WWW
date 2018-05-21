declare module mo {
    function callFunc(selector: Function, selectorTarget?: any, data?: any): egret.action.CallFunc;
    function sequence(...actions: any[]): egret.action.Sequence;
    function spawn(...actions: any[]): egret.action.Spawn;
    function repeat(action: any, times: number): egret.action.Repeat;
    function repeatForever(action: any): egret.action.RepeatForever;
    function moveBy(duration: number, pos: Point): egret.action.MoveBy;
    function moveTo(duration: number, pos: Point): egret.action.MoveTo;
    function scaleBy(duration: number, sx: number, sy?: number): egret.action.ScaleBy;
    function scaleTo(duration: number, sx: number, sy?: number): egret.action.ScaleTo;
    function skewBy(duration: number, skx: number, sky?: number): egret.action.SkewBy;
    function skewTo(duration: number, skx: number, sky?: number): egret.action.SkewTo;
    function rotateBy(duration: number, rotate: number): egret.action.RotateBy;
    function rotateTo(duration: number, rotate: number): egret.action.RotateTo;
    function jumpBy(duration: number, pos: Point, height: any, jumps: any): egret.action.JumpBy;
    function jumpTo(duration: number, pos: Point, height: any, jumps: any): egret.action.JumpTo;
    function fadeTo(duration: number, alpha: number): egret.action.FadeTo;
    function fadeIn(duration: number): egret.action.FadeIn;
    function fadeOut(duration: number): egret.action.FadeOut;
    function delayTime(duration: number): egret.action.DelayTime;
    function ellipse(duration: number, centerPosition: Point, aLength: number, cLength: number): mo.action.Ellipse;
    function shake(duration: number, strengthX: number, strengthY: number): mo.action.Shake;
    function bezierBy(t: any, c: any): mo.action.BezierBy;
    function bezierTo(t: any, c: any): mo.action.BezierTo;
    function track(trackTarget: any, trackSpeed: number, callback: any, callTarget: any): mo.action.Track;
}
declare module mo.action {
    class ProgressTo extends egret.action.ActionInterval {
        _to: number;
        _from: number;
        _cb: any;
        _cbTarget: any;
        constructor();
        startWithTarget(target: any): void;
        initWithDuration(duration: any, percent: any, cb?: any, target?: any): boolean;
        update(dt: any): void;
        clone(): ProgressTo;
        static create: (duration: any, percent: any, cb?: any, target?: any) => ProgressTo;
    }
    class ProgressFromTo extends egret.action.ActionInterval {
        _to: number;
        _from: number;
        _cb: any;
        _cbTarget: any;
        constructor();
        initWithDuration(duration: any, fromPercentage: any, toPercentage: any, cb?: any, target?: any): boolean;
        update(dt: any): void;
        clone(): ProgressFromTo;
        reverse(): ProgressFromTo;
        static create: (duration: any, fromPercentage: any, toPercentage: any, cb?: any, target?: any) => ProgressFromTo;
    }
}
declare module mo.action {
    class Ellipse extends egret.action.ActionInterval {
        _centerPosition: Point;
        _aLength: number;
        _cLength: number;
        startWithTarget(target: any): void;
        initWithDuration(duration: any, centerPosition: any, aLength: any, cLength: any): boolean;
        update(dt: any): void;
        _ellipseX(a: any, by: any, c: any, dt: any): any;
        _ellipseY(a: any, by: any, c: any, dt: any): number;
        static create(duration: any, centerPosition: any, aLength: any, cLength: any): Ellipse;
    }
}
/**
 * Created by Administrator on 2014/12/29.
 */
declare module mo.action {
    class BezierBy extends egret.action.ActionInterval {
        _config: any;
        _startPosition: any;
        _previousPosition: any;
        /**
         * Constructor
         */
        constructor();
        /**
         * @param {Number} t time in seconds
         * @param {Array} c Array of points
         * @return {Boolean}
         */
        initWithDuration(t: any, c: any): boolean;
        /**
         * returns a new clone of the action
         * @returns {cc.BezierBy}
         */
        clone(): any;
        /**
         * @param {cc.Node} target
         */
        startWithTarget(target: any): void;
        /**
         * @param {Number} time
         */
        update(time: any): void;
        _bezierAt(a: any, b: any, c: any, d: any, t: any): number;
        /**
         * @return {cc.ActionInterval}
         */
        reverse(): BezierBy;
        static create(t: any, c: any): BezierBy;
    }
    /** An action that moves the target with a cubic Bezier curve to a destination point.
     * @class
     * @extends cc.BezierBy
     */
    class BezierTo extends BezierBy {
        _toConfig: any;
        constructor();
        /**
         * @param {Number} t time in seconds
         * @param {Array} c Array of points
         * @return {Boolean}
         */
        initWithDuration(t: any, c: any): boolean;
        /**
         * returns a new clone of the action
         * @returns {cc.BezierTo}
         */
        clone(): any;
        /**
         * @param {cc.Node} target
         */
        startWithTarget(target: any): void;
        /**
         * @param {Number} t
         * @param {Array} c array of points
         * @return {mo.BezierTo}
         * @example
         * // example
         * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
         * var bezierTo = cc.BezierTo.create(2, bezier);
         */
        static create(t: any, c: any): BezierTo;
    }
}
declare module mo {
    class Ease extends egret.Ease {
    }
}
/**
 * Created by Administrator on 2014/12/29.
 */
declare module mo.action {
    class Shake extends egret.action.ActionInterval {
        _initialX: number;
        _initialY: number;
        _strengthX: number;
        _strengthY: number;
        _isInit: boolean;
        constructor();
        startWithTarget(target: any): void;
        initWithDuration(duration: any, strengthX: any, strengthY: any): boolean;
        update(dt: any): void;
        stop(): void;
        _fgRangeRand(min: any, max: any): any;
        static create: (duration: number, strengthX: number, strengthY: number) => Shake;
    }
}
/**
 * Created by Administrator on 2015/1/28.
 */
declare module mo.action {
    class Track extends egret.action.ActionInterval {
        _omega: number;
        _trackTarget: any;
        _trackSpeed: number;
        _callback: any;
        _callTarget: any;
        initWithTarget(trackTarget: any, trackSpeed: any, callback: any, callTarget: any): void;
        step(dt: any): void;
        /**
         * @return {Boolean}
         */
        isDone(): boolean;
        stop(): void;
        static create(trackTargett: any, trackSpeed: number, callback: any, callTarget: any): Track;
    }
}
