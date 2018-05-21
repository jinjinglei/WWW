/**
 * Created by SmallAiTT on 2015/10/26.
 */
declare module mo.gui {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    class AssetAdapter implements egret.gui.IAssetAdapter {
        /**
         * 解析素材
         * @method egret.gui.DefaultAssetAdapter#getAsset
         * @param source {any} 待解析的新素材标识符
         * @param compFunc {Function} 解析完成回调函数，示例：compFunc(content:any,source:any):void;
         * 回调参数content接受两种类型：DisplayObject或Texture。
         * @param thisObject {any} compFunc的this引用
         * @param oldContent any 旧的内容对象,传入值有可能为null。
         * 对于某些类型素材，例如MovieClip，可以重用传入的显示对象,只修改其数据再返回。
         */
        getAsset(source: any, compFunc: Function, thisObject: any, oldContent: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/20.
 */
declare module mo {
    interface IModuleMgr {
        curModule: ModuleInfo;
        registerLoadingClass(type: number, LoadingLayerClass: any): any;
        isSubModule(name: any): boolean;
        runModule(name: any, moduleParam?: any, onEnd?: Function): any;
        pushModule(name: any, moduleParam?: any, onEnd?: Function): any;
        popModule(...args: any[]): any;
        getModuleCfgItem(id: string): ModuleCfgItem;
        registerModule(moduleCfgItem: ModuleCfgItem): any;
        registerValidModuleFunc(func: Function): any;
        registerModuleNotFoundFunc(func: Function): any;
    }
    interface IModuleParam {
        fromWhere?: string;
    }
    var moduleConfig: any;
    class ModuleInfo {
        name: string;
        subModules: any[];
        resMap: any;
        target: any;
        isSubModule: boolean;
        curSubModule: any;
        fullScrSBM: boolean;
        notOwnRes: boolean;
        constructor(name: any);
    }
    class ModuleMgr extends egret.Emitter implements IModuleMgr {
        /** 当前模块 */
        curModule: ModuleInfo;
        _moduleStack: any[];
        _initProp(): void;
        _LoadingClassMap: any;
        _LoadingLayerClass: any;
        registerLoadingClass(type: number, LoadingLayerClass: any): void;
        isSubModule(name: any): boolean;
        runModule(name: any, moduleParam?: any, onEnd?: Function): void;
        pushModule(name: any, moduleParam?: any, onEnd?: Function): void;
        _runModule(isRun: any, name: any, moduleParam?: any, onEnd?: Function): void;
        _recordTrayInfo(scene: mo.gui.Scene): {};
        _hideTrayChildren(scene: mo.gui.Scene, trayInfo: any): void;
        _showTrayChildren(scene: mo.gui.Scene, trayInfo: any): void;
        popModule(...args: any[]): void;
        _chgModuleResName(moduleInfo: ModuleInfo): void;
        getModuleCfgItem(id: string): ModuleCfgItem;
        registerModule(moduleCfgItem: ModuleCfgItem): void;
        registerValidModuleFunc(func: Function): void;
        registerModuleNotFoundFunc(func: Function): void;
    }
    class ModuleCfgItem {
        static LOADING_TYPE_CIRCLE: number;
        static LOADING_TYPE_ARMATURE: number;
        id: string;
        sysId: number;
        targetClass: any;
        reqTask: Function;
        onBeforeShow: Function;
        data: any;
        goto: Function;
        loadingType: number;
        fullScr: boolean;
        notOwnRes: boolean;
        _valid: Function;
        onValid(valid: Function): ModuleCfgItem;
        _preAsync: Function;
        onPreAsync(pre: Function): ModuleCfgItem;
    }
    function getModuleCfgItem(id: string): ModuleCfgItem;
    var _validModuleFunc: Function;
    function registerValidModuleFunc(func: Function): void;
    var _moduleNotFoundFunc: Function;
    function registerModuleNotFoundFunc(func: Function): void;
    var moduleMgr: IModuleMgr;
}
/**
 * Created by SmallAiTT on 2015/8/8.
 */
declare module mo.gui {
    class DelegateFactory extends egret.gui.ClassFactory {
        delegate: any;
        listName: string;
        constructor(Class: any, delegate: any, listName?: string);
        newInstance(): any;
    }
}
/**
 * Created by SmallAiTT on 2015/9/1.
 */
declare module mo.gui {
    class Rect extends egret.gui.Rect {
        hitTestPoint(x: number, y: number, shapeFlag?: boolean): boolean;
        hitTest(x: number, y: number, ignoreTouchEnabled?: boolean): egret.DisplayObject;
    }
}
declare module mo.gui {
    /**
     *
     * @author
     *
     */
    class Label extends egret.gui.Label {
        __class: any;
        __className: string;
        static default_fontFamily: string;
        /**
         * 样式
         */
        _style: any;
        _setStyle(style: any): void;
        style: any;
        /** 模板 */
        temp: string;
        constructor();
        /**
         * 获得文体内容
         * @member egret.gui.TextBase#text
         */
        text: any;
        /**
         * 保留几位小数功能
         */
        _floatNum: number;
        floatNum: number;
        _oldText: any;
        _setText(value: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module mo.gui.evt {
    var ON_SHOW: string;
    var ON_CLOSE: string;
}
declare module egret.project {
    /** 是否是合图模式，默认为true */
    var isPack: boolean;
}
declare module mo.gui {
    class CompOpt extends egret.Emitter {
        data: any;
        emitter: egret.Emitter;
        hasChildrenCreated: boolean;
        delayArr: any[];
        delayKeyMap: any;
        oldMap: any;
        chgMap: any;
        _initProp(): void;
        delay(key: string, func: Function, ctx: any, data?: any[]): void;
        doDelay(): void;
    }
    class Comp extends egret.gui.SkinnableContainer {
        /** 类名 */
        static __className: string;
        /** 类名 */
        __className: string;
        /** 实例对应的类 */
        __class: any;
        emitter: egret.Emitter;
        static create(...args: any[]): any;
        static getInstance(...args: any[]): any;
        static purgeInstance(...args: any[]): any;
        /** 是否是单例 */
        _isInstance: boolean;
        /** 是否已经释放了 */
        _hasDtored: boolean;
        /** 是否根据父节点进行释放，默认为true */
        isDtorByParent: boolean;
        /** 是否自动释放，默认为true */
        isAutoDtor: boolean;
        _compOpt: CompOpt;
        data: any;
        _isValueChanged(...keys: string[]): boolean;
        _initProp(): void;
        init(...args: any[]): void;
        constructor();
        doDtor(): void;
        dtor(): void;
        _parentChanged(parent: egret.DisplayObjectContainer): boolean;
        $setParent(parent: egret.DisplayObjectContainer): boolean;
        registerClassByKey(clazz: any, key: any, listener: Function): void;
        onEmitter(clazz: any, event: any, listener: Function): void;
        _onResume(): void;
        ready: boolean;
        resumeEnabled: boolean;
        onEnter(): void;
        onExit(): void;
        partAdded(name: any, instance: any): void;
        childrenCreated(): void;
        _childrenCreated(): void;
        /**
         * 只进行值设置，不进行值变化的通知
         * @param key
         * @param value
         * @returns {mo.gui.Comp}
         */
        setOnly(key: any, value: any): any;
        /**
         * 进行值设置，如果改变了会调用dataChanged。
         * @param key
         * @param value
         * @returns {mo.gui.Comp}
         */
        set(key: any, value: any): any;
        get(key: any): any;
        setData(data: any): any;
        setDataOnly(data: any): any;
        dataChanged(): any;
        /**
         * 刷新列表数据。
         * @param listId
         */
        refreshList(listId: string): void;
    }
}
/**
 * Created by SmallAiTT on 2015/9/19.
 */
declare module mo.gui {
    interface Ico_Data {
        tipEnabled: boolean;
        gray: boolean;
    }
    class Ico extends mo.gui.Comp {
        data: Ico_Data;
        ico: egret.gui.UIAsset;
        ico_border: egret.gui.UIAsset;
        rect_touch: any;
        tipEnabled: boolean;
        _Tip: any;
        _initProp(): void;
        _childrenCreated(): void;
        _getTipData(): any;
        _onTip(event: egret.TouchEvent): void;
        _onClick: Function;
        _onClickCtx: any;
        _onClickData: any;
        onClick(listener: Function, ctx?: any, data?: any): void;
        dataChanged(): void;
        setGray(gray: any): Ico;
    }
}
/**
 * Created by SmallAiTT on 2015/8/26.
 */
declare module mo.gui {
    class UIAsset extends egret.gui.UIAsset {
        /** 类名 */
        static __className: string;
        /** 类名 */
        __className: string;
        /** 实例对应的类 */
        __class: any;
        static create(...args: any[]): any;
        static getInstance(...args: any[]): any;
        static purgeInstance(...args: any[]): any;
        /** 是否是单例 */
        _isInstance: boolean;
        /** 是否已经释放了 */
        _hasDtored: boolean;
        /** 是否根据父节点进行释放，默认为true */
        isDtorByParent: boolean;
        /** 是否自动释放，默认为true */
        isAutoDtor: boolean;
        _compOpt: CompOpt;
        _initProp(): void;
        init(...args: any[]): void;
        constructor();
        doDtor(): void;
        dtor(): void;
        _parentChanged(parent: egret.DisplayObjectContainer): boolean;
        $setParent(parent: egret.DisplayObjectContainer): boolean;
        registerClassByKey(clazz: any, key: any, listener: Function): void;
        onEmitter(clazz: any, event: any, listener: Function): void;
        _onResume(): void;
        resumeEnabled: boolean;
        onEnter(): void;
        onExit(): void;
        childrenCreated(): void;
        _childrenCreated(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module mo.gui {
    class ItemRenderer extends egret.gui.ItemRenderer {
        /** 类名 */
        static __className: string;
        /** 类名 */
        __className: string;
        /** 实例对应的类 */
        __class: any;
        static create(...args: any[]): any;
        static getInstance(...args: any[]): any;
        static purgeInstance(...args: any[]): any;
        /** 是否是单例 */
        _isInstance: boolean;
        /** 是否已经释放了 */
        _hasDtored: boolean;
        /** 是否根据父节点进行释放，默认为true */
        isDtorByParent: boolean;
        /** 是否自动释放，默认为true */
        isAutoDtor: boolean;
        _compOpt: CompOpt;
        emitter: egret.Emitter;
        _initProp(): void;
        init(...args: any[]): void;
        constructor();
        doDtor(): void;
        dtor(): void;
        _parentChanged(parent: egret.DisplayObjectContainer): boolean;
        $setParent(parent: egret.DisplayObjectContainer): boolean;
        registerClassByKey(clazz: any, key: any, listener: Function): void;
        onEmitter(clazz: any, event: any, listener: Function): void;
        _onResume(): void;
        ready: boolean;
        resumeEnabled: boolean;
        onEnter(): void;
        onExit(): void;
        partAdded(name: any, instance: any): void;
        _childrenCreated(): void;
        _afterChildrenCreated: Function;
        _onAfterChildrenCreated(listener: Function): void;
        /**
         * 只进行值设置，不进行值变化的通知
         * @param key
         * @param value
         * @returns {mo.gui.Comp}
         */
        setOnly(key: any, value: any): any;
        set(key: any, value: any): any;
        get(key: any): any;
        setData(data: any): any;
        setDataOnly(data: any): any;
        delegate: any;
        dataChanged(): void;
        _useSetData: boolean;
        _longItor: Function;
        _longEnd: Function;
        _longCtx: any;
        onLongClick(itor: Function, end: Function, ctx?: any): void;
        /**
         * 刷新列表数据。
         * @param listId
         */
        refreshList(listId: string): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module mo.gui {
    class LayerOpt {
        rect: mo.gui.Rect;
        shownWithAction: boolean;
        showingWithAction: boolean;
        onClose: Function;
        onCloseCtx: any;
        needToRefresh: boolean;
        activated: boolean;
        activatedOld: boolean;
        activateUnderDisabled: boolean;
        scene: Scene;
        isAutoSize: boolean;
        dtor(): void;
    }
    class Layer extends Comp {
        _layerOpt: LayerOpt;
        border: egret.gui.Panel;
        btn_close: egret.gui.Button;
        _trayName: string;
        contentGroup: egret.gui.Group;
        trayName: string;
        dtor(): void;
        /**
         * 模块参数
         */
        _moduleParam: mo.IModuleParam;
        _setModuleParam(moduleParam: mo.IModuleParam): void;
        moduleParam: mo.IModuleParam;
        /**
         * 是否可穿透
         */
        _penetrable: boolean;
        _setPenetrable(penetrable: boolean): void;
        penetrable: boolean;
        /**
         * 是否处于活动状态。
         */
        _setActivated(activated: boolean): void;
        activated: boolean;
        _onActivated(): void;
        _onInactivated(): void;
        _initProp(): void;
        _childrenCreated(): void;
        init(...args: any[]): void;
        partAdded(name: any, instance: any): void;
        getTrayInfo(): any;
        _onShowReady(): void;
        _getShowAction(cb: any): egret.action.Action;
        _showing(): void;
        isInTray(): boolean;
        show(): Layer;
        onClose(listener: Function, ctx?: any): any;
        close(): Layer;
        hide(): Layer;
        onEnter(): void;
        onExit(): void;
        _onRefresh(): void;
        /**
         * 通过该接口简化show的书写
         * @param data
         * @param args
         */
        static show(data?: any, ...args: any[]): any;
    }
}
/**
 * Created by SmallAiTT on 2015/7/27.
 */
declare module mo.gui {
    class BitmapLabel extends egret.gui.BitmapLabel {
        /** 模板 */
        temp: string;
        constructor();
        /**
         * 获得文体内容
         * @member egret.gui.TextBase#text
         */
        text: any;
        _setText(value: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/23.
 */
declare module mo.gui {
    class MenuLayer extends Layer {
        _initProp(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/23.
 */
declare module mo.gui {
    class Dlg extends Layer {
        outsideClosable: boolean;
        _initProp(): void;
        _childrenCreated(): void;
    }
}
declare module mo.gui {
    class MsgDlg extends Dlg {
        label_msg: mo.gui.Label;
        type: number;
        _isOnTop: boolean;
        _time: number;
        _onEnd: Function;
        _onEndCtx: any;
        _btnNames: string[];
        msgData: any;
        msgArgs: any[];
        extArg: any;
        dlgParam: any;
        toPauseGuide: boolean;
        trayName: string;
        _initProp(): void;
        _childrenCreated(): void;
        /**
         * 设置消息。
         * @param msgData
         * @param msgArgs
         */
        setMsgInfo(msgData: any, msgArgs: any[]): void;
        _handleExtArg(extArg: any): void;
        setDlgParam(dlgParam: any): void;
        close(): Layer;
        static show(msgData: any, msgArgs: any[], dlgParam?: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/23.
 */
declare module mo.gui {
    class TopLayer extends Layer {
        _initProp(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/9/19.
 */
declare module mo.gui {
    class Tip extends mo.gui.TopLayer {
        isLong: boolean;
        dstP0: any;
        dstP1: any;
        _initProp(): void;
        _childrenCreated(): void;
        static show(data: any, srcTarget: egret.DisplayObject, ...args: any[]): void;
    }
}
declare module mo.gui {
    class CircleImg extends Comp {
        /** 注意了，皮肤当中必须有一个元素的id为grp_circle，作为旋转中心 */
        grp_circle: egret.gui.Group;
        /** 注意了，皮肤当中必须有一个元素的id为ico_circle，作为图片元素 */
        ico_circle: egret.gui.UIAsset;
        _url: string;
        _setUrl(url: string): void;
        url: string;
        /** 转一圈需要多久 */
        duration: number;
        _initProp(): void;
        _childrenCreated(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
/**
 * Created by SmallAiTT on 2015/7/13.
 */
declare module mo.gui {
    var uiStage: egret.gui.UIStage;
    class Scene extends egret.gui.Group {
        /** 类名 */
        static __className: string;
        /** 类名 */
        __className: string;
        /** 实例对应的类 */
        __class: any;
        /** 是否是单例 */
        _isInstance: boolean;
        /** 是否已经释放了 */
        _hasDtored: boolean;
        moduleParam: any;
        _trayNames: string[];
        /** 托盘列表 */
        _trays: egret.gui.Group[];
        /** Scene添加的层级 */
        _index: number;
        emitter: egret.Emitter;
        _initProp(): void;
        init(...args: any[]): void;
        _initTray(name: string, index?: number): egret.gui.Group;
        _initTrays(): void;
        getTray(trayName: string): any;
        constructor();
        doDtor(): void;
        dtor(): void;
        _show(): void;
        show(): void;
        reshow(): void;
        close(): void;
        onEnter(): void;
        onExit(): void;
        registerClassByKey(clazz: any, key: any, listener: Function): void;
        onEmitter(clazz: any, event: any, listener: Function): void;
        _parentChanged(parent: egret.DisplayObjectContainer): boolean;
        $setParent(parent: egret.DisplayObjectContainer): boolean;
        static create(...args: any[]): any;
        static getInstance(...args: any[]): any;
        static purgeInstance(...args: any[]): any;
        _recoverMap: any;
        /**
         * 将某个layer下面的layer设置成inactivated。
         * @param layer
         */
        inactivateUnder(layer: Layer): void;
        /**
         * 重新激活被该layerinactivated掉的layer。
         * @param layer
         */
        activateUnder(layer: Layer): void;
        canBeActivated(layer: any): boolean;
        _recover(): void;
    }
    class UIScene extends Scene {
        _initProp(): void;
        show(): void;
        reshow(): void;
    }
    class InfoScene extends Scene {
        _initProp(): void;
        show(): void;
        reshow(): void;
    }
    var uiScene: UIScene;
    var infoScene: InfoScene;
    function getTrayInfo(name: any): any;
}
/**
 * Created by SmallAiTT on 2015/8/3.
 */
declare module mo.gui {
    class ClipBar extends mo.gui.Comp {
        track: egret.gui.UIAsset;
        thumb: egret.gui.UIAsset;
        /**
         * value
         */
        _value: number;
        _setValue(value: number): void;
        value: number;
        /**
         * maxValue
         */
        _maxValue: number;
        _setMaxValue(maxValue: number): void;
        maxValue: number;
        /**
         * direction
         */
        _direction: string;
        _setDirection(direction: string): void;
        direction: string;
        _initProp(): void;
        onEnter(): void;
        _calMask(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/22.
 */
declare module mo.gui {
    interface LongOpt {
        timeout?: number;
        interval?: number;
        onInterval?: Function;
        onEnd?: Function;
        onClick?: Function;
        ctx?: any;
        list?: egret.gui.List;
        timeoutId?: number;
        intervalId?: number;
        onTouchBegin?: Function;
        onTouchEnd?: Function;
        onTouchMove?: Function;
        onChange?: Function;
        state?: number;
    }
    interface ProgressOpt {
        baseArr: number[];
        baseValue: number;
        baseIndex: number;
        curIndex?: number;
        curValue?: number;
        partNum?: number;
        interval?: number;
        intervalId?: number;
        totalValueToAdd?: number;
        labelFunction?: Function;
        onBaseChange?: Function;
        ctx?: any;
        float?: number;
        end?: Function;
        state?: number;
        running?: boolean;
    }
    /** gui的帮助类 */
    class Helper extends egret.Emitter {
        skinTemp: string;
        compSkinTemp: string;
        _initProp(): void;
        /**
         * 设置skinName。这是为了统一skinName路径。自动匹配【className + Skin】为名称的皮肤。
         * @param node
         * @param className
         */
        setSkinName(node: any, className?: string): void;
        setCompSkinName(node: any, className?: string): void;
        /** 移除节点 */
        rm(node: egret.DisplayObject): void;
        /**
         * 根据name获取子节点，name支持【a.b.c】模式。
         * @param parent
         * @param name
         * @returns {*}
         */
        getChild(parent: any, name: any): any;
        /**
         * 判断点是否在自定节点内部，注意这个点的坐标是全局的。
         * 其中，为了尽量可能使判断在真正区域内，都向内缩了2.
         * @param node
         * @param x
         * @param y
         * @returns {boolean}
         */
        isIn(node: egret.DisplayObject, x: number, y: number): boolean;
        /**
         * 将一个节点的坐标转换到目标节点上
         * @param srcTarget
         * @param dstTarget
         * @returns {Point}
         */
        posTo(srcTarget: egret.DisplayObject, dstTarget: egret.DisplayObject): mo.Point;
        /**
         * 设置拖拽，回调的传参为：node, event, isIn
         * @param node
         * @param begin
         * @param dragging
         * @param end
         * @param ctx
         */
        onDrag(node: egret.DisplayObject, begin: Function, dragging: Function, end: Function, ctx?: any): void;
        /**
         * 清除长按相关设置
         * @param longOpt
         * @private
         */
        _clearLong(longOpt: any): void;
        /**
         * 长按事件注册
         * @param node
         * @param opt
         */
        onLong(node: egret.DisplayObject, opt: LongOpt): void;
        /**
         * 手动结束长按事件
         * @param node
         */
        endLong(node: egret.DisplayObject): void;
        /**
         * 左右两侧展开、收缩的帮助方法。
         * opt: 第一次调用或者设置【init:true】的时候进行初始化；
         *      mainIndex用于指定重置操作，0表示左边为main，1表示右边为main；
         *      bounce用于设置回弹的距离，默认为30；
         *      end表示结束回调，ctx为上下文；
         * @param grp_left
         * @param grp_right
         * @param opt
         */
        expandLF(grp_left: egret.DisplayObject, grp_right: egret.DisplayObject, opt: any): void;
        /**
         * 初始化基数模式的进度条。
         * @param bar
         * @param opt
         */
        initProgress(bar: egret.gui.ProgressBar, opt: ProgressOpt): void;
        /**
         * 跑进度有基数模式的进度条。
         * @param bar
         * @param totalValueToAdd
         */
        progress(bar: egret.gui.ProgressBar, totalValueToAdd: number): void;
        /**
         * 获取进度条累加的极限值。
         * @param bar
         */
        getProgressLimit(bar: egret.gui.ProgressBar): number;
        /**
         * 对zOrder进行排序。
         * @param grp
         */
        sortZOrder(grp: egret.gui.Group): void;
        /**
         * 滚动到边界，如果isMax=false，则表示滚到开始位置（left or top）。
         * @param listOrScroller
         * @param isMax
         */
        scrollToBoundary(listOrScroller: any, isMax?: boolean): void;
        /**
         * 滚动到列表中的index位置，或者data所在位置，或者function计算出来的位置。
         * 目前只有function功能。
         * @param list
         * @param indexOrDataOrFunc
         */
        scrollTo(list: egret.gui.List, indexOrDataOrFunc: any): void;
        defaultAudio: any;
        registerSound(node: any, name: string, audio?: string): void;
        _handlePartAdded(node: any, name: string, instance: any): void;
        _handleSetter(node: any, key: any, value: any, notToChange?: boolean): void;
        _handleSetData(node: any, data: any): void;
        _doDataChanged(node: any, notToChange: boolean): void;
        _handleInitProp(node: any): void;
        _handleDoDtor(node: any): void;
        _handleDtor(node: any): void;
        _doDtorChildren(children: any): void;
        _handleSetParent(node: any, parentClass: any, parent: egret.DisplayObjectContainer): boolean;
        _handleOnEnter(self: any): void;
        _handleOnExit(self: any): void;
    }
    var helper: Helper;
}
