/**
 * Created by wander on 14-12-22.
 */
declare module egret.action {
    class Manager {
        private _hashTargets;
        private _arrayTargets;
        private _currentTarget;
        private _currentTargetSalvaged;
        private static _manager;
        static getInstance(): Manager;
        constructor();
        /** Adds an action with a target.
         * If the target is already present, then the action will be added to the existing target.
         * If the target is not present, a new instance of this target will be created either paused or not, and the action will be added to the newly created target.
         * When the target is paused, the queued actions won't be 'ticked'.
         * @param {cc.Action} action
         * @param {cc.Node} target
         * @param {Boolean} paused
         */
        addAction(target: any, action: any, paused?: boolean): void;
        private _actionAllocWithHashElement(element);
        /**
         * @param {Number} dt delta time in seconds
         */
        update(dt: any): void;
        /** Removes an action given an action reference.
         * @param {cc.Action} action
         */
        removeAction(action: Action): void;
        private _deleteHashElement(element);
        /** Pauses the target: all running actions and newly added actions will be paused.
         * @param {object} target
         */
        pauseTarget(target: any): void;
        /** Resumes the target. All queued actions will be resumed.
         * @param {object} target
         */
        resumeTarget(target: any): void;
        /** Removes all actions from a certain target. <br/>
         * All the actions that belongs to the target will be removed.
         * @param {object} target
         * @param {boolean} forceDelete
         */
        removeAllActionsFromTarget(target: any, forceDelete?: any): void;
        /**
         * Removes all actions from all the targets.
         */
        removeAllActions(): void;
        /** Gets an action given its tag an a target
         * @param {Number} tag
         * @param {object} target
         * @return {egret.action.Action|Null}  return the Action with the given tag on success
         */
        getActionByTag(tag: any, target: any): egret.action.Action;
        /** Removes an action given its tag and the target
         * @param {Number} tag
         * @param {object} target
         */
        removeActionByTag(tag: any, target: any): void;
        /** Returns the numbers of actions that are running in a certain target. <br/>
         * Composable actions are counted as 1 action. <br/>
         * Example: <br/>
         * - If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         * - If you are running 7 Sequences of 2 actions, it will return 7.
         * @param {object} target
         * @return {Number}
         */
        numberOfRunningActionsInTarget(target: any): any;
    }
}
declare module egret.action {
    class HashElement {
        actions: Array<any>;
        target: any;
        actionIndex: number;
        currentAction: any;
        currentActionSalvaged: boolean;
        paused: boolean;
        hh: any;
        /**
         * Constructor
         */
        constractor(): void;
    }
}
/**
 * Created by wander on 14-12-22.
 */
declare module egret.action {
    class Action {
        private originalTarget;
        target: any;
        private tag;
        constructor();
        /**
         *
         * @return {cc.Node}
         */
        getOriginalTarget(): any;
        /**
         * to copy object with deep copy.
         * returns a clone of action.
         *
         * @return {cc.Action}
         */
        clone(): Action;
        /**
         * return true if the action has finished.
         *
         * @return {Boolean}
         */
        isDone(): boolean;
        /**
         * called before the action start. It will also set the target.
         *
         * @param {cc.Node} target
         */
        startWithTarget(target: any): void;
        /**
         * called after the action has finished. It will set the 'target' to nil. <br />
         * IMPORTANT: You should never call "action stop" manually. Instead, use: "target.stopAction(action);"
         */
        stop(): void;
        /**
         * called every frame with it's delta time. <br />
         * DON'T override unless you know what you are doing.
         *
         * @param {Number} dt
         */
        step(dt: any): void;
        /**
         * Called once per frame. Time is the number of seconds of a frame interval.
         *
         * @param {Number}  dt
         */
        update(dt: any): void;
        _easeFunction: Function;
        setEase(easeFunction: Function): Action;
    }
    class FiniteTimeAction extends Action {
        _duration: number;
        /** get duration in seconds of the action
         *
         * @return {Number}
         */
        getDuration(): number;
        /** returns a reversed action
         *
         * @return {Null}
         */
        reverse(): any;
        performEase(time: any): number;
    }
}
/**
 * Created by wander on 14-12-23.
 */
declare module egret.action {
    class ActionInstant extends FiniteTimeAction {
        isDown(): boolean;
        step(dt: any): void;
        update(dt: any): void;
        reverse(): ActionInstant;
        clone(): ActionInstant;
    }
    class CallFunc extends ActionInstant {
        private _selectorTarget;
        private _callFunc;
        private _function;
        private _data;
        constructor(selector?: any, selectorTarget?: any, data?: any);
        /**
         * @param {function|Null} selector
         * @param {object} selectorTarget
         * @param {*|Null} data data for function, it accepts all data types.
         * @return {Boolean}
         */
        initWithTarget(selector: any, selectorTarget: any, data: any): boolean;
        /**
         * initializes the action with the std::function<void()>
         * @param {function} func
         * @returns {boolean}
         */
        initWithFunction(selector: any, selectorTarget?: any, data?: any): boolean;
        /**
         * execute the function.
         */
        execute(): void;
        update(time: any): void;
        getTargetCallback(): any;
        setTargetCallback(sel: any): void;
        clone(): CallFunc;
        static create(selector: any, selectorTarget: any, data?: any): CallFunc;
    }
}
/**
 * Created by wander on 14-12-22.
 */
declare module egret.action {
    class ActionInterval extends FiniteTimeAction {
        private _speed;
        private _times;
        private _repeatForever;
        private MAX_VALUE;
        private _repeatMethod;
        private _speedMethod;
        private _elapsed;
        private _firstTick;
        private _easeList;
        constructor();
        /**
         * Initializes the action.
         * @param {Number} d duration in seconds
         * @return {Boolean}
         */
        initWithDuration(d: any, ...args: any[]): boolean;
        /**
         * Returns true if the action has finished.
         * @return {Boolean}
         */
        isDone(): boolean;
        /**
         * called every frame with it's delta time. <br />
         * DON'T override unless you know what you are doing.
         *
         * @param {Number} dt
         */
        step(dt: any): void;
        performEase(time: any): number;
        /**
         * @return {Null}
         */
        reverse(): any;
    }
    class DelayTime extends ActionInterval {
        update(dt: any): void;
        clone(): DelayTime;
        static create(d: any): DelayTime;
    }
    class Sequence extends ActionInterval {
        private _actions;
        private _split;
        private _last;
        private _one;
        private _two;
        constructor(tempArray?: any);
        update(dt: any): void;
        /** initializes the Spawn action with the 2 actions to spawn
         * @param {cc.FiniteTimeAction} action1
         * @param {cc.FiniteTimeAction} action2
         * @return {Boolean}
         */
        initWithTwoActions(actionOne: any, actionTwo: any): boolean;
        /**
         * @param {cc.Node} target
         */
        startWithTarget(target: any): void;
        /**
         * stop the action.
         */
        stop(): void;
        clone(): Sequence;
        /**
         * @return {cc.ActionInterval}
         */
        reverse(): Sequence;
        static _actionOneTwo(actionOne: any, actionTwo: any): Sequence;
        static create(...actions: any[]): any;
    }
    class Spawn extends ActionInterval {
        _one: Action;
        _two: Action;
        constructor();
        /** initializes the Spawn action with the 2 actions to spawn
         * @param {cc.FiniteTimeAction} action1
         * @param {cc.FiniteTimeAction} action2
         * @return {Boolean}
         */
        initWithTwoActions(action1: any, action2: any): boolean;
        /**
         * @param {cc.Node} target
         */
        startWithTarget(target: any): void;
        /**
         * Stop the action
         */
        stop(): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        clone(): Spawn;
        static create(...actions: any[]): any;
    }
    class Repeat extends ActionInterval {
        _repeatTimes: number;
        _total: number;
        _nextDt: number;
        _actionInstant: boolean;
        _innerAction: any;
        constructor();
        /**
         * @param {cc.FiniteTimeAction} action
         * @param {Number} times
         * @return {Boolean}
         */
        initWithAction(action: any, times: any): boolean;
        /**
         * @param {cc.Node} target
         */
        startWithTarget(target: any): void;
        /**
         * stop the action
         */
        stop(): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        /**
         * @return {Boolean}
         */
        isDone(): boolean;
        /**
         * @param {cc.FiniteTimeAction} action
         */
        setInnerAction(action: any): void;
        /**
         * @return {cc.FiniteTimeAction}
         */
        getInnerAction(): any;
        static create(action: any, times: any): Repeat;
    }
    class RepeatForever extends Repeat {
        static create(action: any): RepeatForever;
    }
}
/**
 * Created by wander on 14-12-22.
 */
declare module egret.action {
    class MoveBy extends ActionInterval {
        _deltaX: number;
        _startX: number;
        private _previousX;
        _deltaY: number;
        _startY: number;
        private _previousY;
        constructor();
        initWithDuration(duration: number, x: any, y: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        clone(): MoveBy;
        /**
         * MoveTo reverse is not implemented
         */
        reverse(): MoveBy;
        static create(duration: any, x: any, y: any): MoveBy;
    }
    class MoveTo extends MoveBy {
        _endX: number;
        _endY: number;
        constructor();
        initWithDuration(duration: number, x: any, y: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        clone(): MoveTo;
        static create(duration: any, x: any, y: any): MoveTo;
    }
}
/**
 * Created by huanghaiying on 14/12/24.
 */
declare module egret.action {
    class ScaleTo extends ActionInterval {
        _startScaleX: number;
        _endScaleX: number;
        _deltaScaleX: number;
        _startScaleY: number;
        _endScaleY: number;
        _deltaScaleY: number;
        constructor();
        initWithDuration(duration: number, sx: any, sy: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        clone(): ScaleTo;
        static create(duration: any, sx: any, sy?: any): ScaleTo;
    }
    class ScaleBy extends ScaleTo {
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        clone(): ScaleBy;
        reverse(): ScaleBy;
        static create(duration: any, sx: any, sy?: any): ScaleBy;
    }
}
/**
 * Created by huanghaiying on 14/12/24.
 */
declare module egret.action {
    class SkewBy extends ActionInterval {
        _startSkewX: number;
        _deltaSkewX: number;
        _startSkewY: number;
        _deltaSkewY: number;
        constructor();
        initWithDuration(duration: number, skx: any, sky: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        static create(duration: any, skx: any, sky: any): SkewBy;
    }
    class SkewTo extends ActionInterval {
        _startSkewX: number;
        _endSkewX: number;
        _startSkewY: number;
        _endSkewY: number;
        constructor();
        initWithDuration(duration: number, skx: any, sky: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        static create(duration: any, skx: any, sky: any): SkewTo;
    }
}
/**
 * Created by huanghaiying on 14/12/24.
 */
declare module egret.action {
    class JumpBy extends ActionInterval {
        _deltaX: number;
        _deltaY: number;
        _startX: number;
        _startY: number;
        _previousX: number;
        _previousY: any;
        number: any;
        _height: number;
        _jumps: number;
        constructor();
        initWithDuration(duration: any, x: any, y: any, height: any, jumps: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        static create(duration: any, x: any, y: any, height: any, jumps: any): JumpBy;
    }
    class JumpTo extends JumpBy {
        _endX: number;
        _endY: number;
        constructor();
        initWithDuration(duration: any, x: any, y: any, height: any, jumps: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        static create(duration: any, x: any, y: any, height: any, jumps: any): JumpTo;
    }
}
/**
 * Created by huanghaiying on 14/12/24.
 */
declare module egret.action {
    class FadeTo extends ActionInterval {
        _startFade: number;
        _endFade: number;
        constructor();
        initWithDuration(duration: number, alpha: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        clone(): FadeTo;
        static create(duration: any, opacity: any): FadeTo;
    }
    class FadeIn extends FadeTo {
        _reverseAction: any;
        constructor();
        static create(duration: any): FadeIn;
        /**
         * @return {cc.ActionInterval}
         */
        reverse(): FadeOut;
        clone(): FadeIn;
        startWithTarget(target: any): void;
    }
    class FadeOut extends FadeTo {
        static create(duration: any): FadeOut;
        clone(): FadeOut;
        reverse(): FadeIn;
    }
}
/**
 * Created by huanghaiying on 14/12/24.
 */
declare module egret.action {
    class RotateBy extends ActionInterval {
        _startAngle: number;
        _diffAngle: number;
        constructor();
        initWithDuration(duration: number, rotate?: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        /**
         * returns a new clone of the action
         * @returns {cc.RotateBy}
         */
        clone(): Action;
        reverse(): RotateBy;
        static create(duration: any, rotate: any): RotateBy;
    }
    class RotateTo extends ActionInterval {
        _startAngle: number;
        _desAngle: number;
        constructor();
        initWithDuration(duration: number, rotate?: any): boolean;
        /**
         * @param {Number} target
         */
        startWithTarget(target: DisplayObject): void;
        /**
         * @param {Number} time time in seconds
         */
        update(time: any): void;
        /**
         * returns a new clone of the action
         * @returns {cc.RotateTo}
         */
        clone(): Action;
        /**
         * RotateTo reverse not implemented
         */
        reverse(): void;
        static create(duration: any, deltaRotation: any): RotateTo;
    }
}
