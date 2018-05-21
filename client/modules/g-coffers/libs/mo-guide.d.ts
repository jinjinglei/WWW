/**
 * Created by SmallAiTT on 2015/8/31.
 */
declare module mo.GUIDE {
    class CmdCfg extends egret.Emitter {
        id: string;
        revert: string;
        next: string;
        condition: string;
        judge: string;
        type: number;
        talk: string;
        npcIndex: number;
        penetrable: boolean;
        /**
         * 1:退出引导界面结束
         * 2:退出引导界面自动到下一步
         * 3:对应layer隐藏时自动移除
         */
        endType: number;
        /** 是否需要保持 */
        toSave: boolean;
        layer: string;
        node: string;
        rectNode: string;
        beforeShow: string;
        afterShow: string;
        beforeNext: string;
        afterNext: string;
        actions: string;
        /** 刷新事件 */
        refreshEvent: string;
        isHook: boolean;
        route: string;
        option: any;
        _initProp(): void;
        set(key: string, value: any, isBoolean?: boolean): void;
    }
    class Cmd extends egret.Emitter {
        _UIClass: any;
        ui: mo.gui.Layer;
        cfg: CmdCfg;
        /**
         * id
         */
        id: string;
        /** 组id */
        grpId: number;
        /** 命令下标 */
        cmdIndex: number;
        mgr: Mgr;
        layer: mo.gui.Layer;
        node: egret.DisplayObject;
        _doBaseCondition(): boolean;
        canExec(layer: mo.gui.Layer): boolean;
        actionState: number;
        _actionListened: string;
        _onAction(): void;
        _handleActions(): boolean;
        _execing: boolean;
        _doingStopTouch: boolean;
        _show(): void;
        _handlePause(): boolean;
        exec(layer: mo.gui.Layer): void;
        doNext(): void;
        close(): void;
        _onActivated(layer: mo.gui.Layer): void;
        _onInactivated(layer: mo.gui.Layer): void;
        _refreshEventListened: boolean;
        _onRefreshEvent(): void;
        initEvents(): void;
        rmEvents(): void;
        _onBeforeLayerVisible(): void;
        _onAfterLayerVisible(event: mo.Event): void;
        dtor(): void;
        getNode(): any;
        getRectNode(): any;
    }
}
/**
 * Created by SmallAiTT on 2015/8/31.
 */
declare module mo.GUIDE {
    class HandlerMgr extends egret.Emitter {
        _handlers: any;
        _initProp(): void;
        _getInfo(value: string, key: string): any;
        handle(cfg: CmdCfg, key: string, cmd: Cmd, isBoolean?: boolean): any;
        handleAsync(cfg: CmdCfg, key: string, cmd: Cmd, cb: Function): any;
        set(name: string, handler: any): void;
    }
    var handlerMgr: HandlerMgr;
    class CfgHandler extends egret.Emitter {
        _map: any;
        _initProp(): void;
        set(name: any, func: any, ctx?: any): void;
        get(name: any): any;
        handle(name: any, params: any): any;
    }
}
/**
 * Created by SmallAiTT on 2015/7/23.
 */
declare module mo.GUIDE {
    interface GuideLayer_Data {
        cmd: Cmd;
    }
    class GuideLayer extends mo.gui.Layer {
        data: GuideLayer_Data;
        grp_btn: egret.gui.Group;
        _touchNames: string[];
        _hookIntervalId: number;
        _initProp(): void;
        _childrenCreated(): void;
        _setBtnPos(): void;
        _getRect(): gui.Rect;
        dataChanged(): void;
        _initEvents_btn(): void;
        _target: any;
        _onTargetTap(): void;
        _isTargetBegin: boolean;
        _onTargetBegin(): void;
        _onTargetEnd(): void;
        _onTouch(touchOpt: mo.GUIDE.TouchOpt): void;
        dtor(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/31.
 */
declare module egret.project {
    /** 是否开启引导 */
    var guideEnabled: boolean;
}
declare module mo.GUIDE {
    interface TouchOpt {
        name: string;
        ui: GuideLayer;
        types?: string[];
        targetGetter: Function;
        targetGetterCtx: any;
        listeners: any;
        isMask: boolean;
        movable?: boolean;
    }
    var _touchMap: any;
    var _touchOpts: TouchOpt[];
    function onTouch(touchOpt: TouchOpt): void;
    function unTouch(touchOpt: TouchOpt): void;
    interface CmdCfgParser {
        parse(cmdId: string): CmdCfg;
    }
    class Mgr extends egret.Emitter {
        _uiClassMap: any;
        cmdMap: any;
        /** 引导是否暂停了 */
        paused: boolean;
        /** 引导是否已经结束了 */
        finished: boolean;
        /** 网络接口 */
        net: mo.Net;
        /** 需要通过游戏代码层注入 */
        parser: CmdCfgParser;
        route: string;
        route_arg_key: string;
        _recovers: string[];
        _initProp(): void;
        registerUI(type: number, CmdClass: any): void;
        getUIClass(type: number): any;
        initCmd(cmdId: string, revertRequired?: boolean): void;
        setCmd(cfg: CmdCfg): void;
        gotoNext(cmd: Cmd): void;
        _getLayer(layerName: string, parent: any): mo.gui.Layer;
        getLayer(layerName: string): mo.gui.Layer;
        _onBaseCondition: Function;
        onBaseCondition(func: any): void;
        doBaseCondition(cmd: Cmd): any;
        _onPause(): void;
        _onResume(): void;
        dtor(): void;
    }
    var mgr: Mgr;
}
