/**
 * Created by SmallAiTT on 2015/9/14.
 */
declare module g_guide {
}
/**
 * Created by SmallAiTT on 2015/9/14.
 */
declare module g_guide {
}
/**
 * Created by SmallAiTT on 2015/9/14.
 */
declare module g_guide {
}
/**
 * Created by SmallAiTT on 2015/9/14.
 */
declare module g_guide {
}
/**
 * Created by SmallAiTT on 2015/9/14.
 */
declare module g_guide {
}
/**
 * Created by SmallAiTT on 2015/9/14.
 */
declare module g_guide {
}
declare module g_guide {
}
/**
 * Created by SmallAiTT on 2015/9/14.
 */
declare module g_guide {
}
/**
 * Created by SmallAiTT on 2015/9/14.
 */
declare module g_guide {
}
declare module g_guide {
}
/**
 * Created by lihex on 12/29/15.
 */
declare module g_guide {
    function hasDlg(): boolean;
}
/**
 * Created by SmallAiTT on 2015/8/31.
 */
declare module g_guide {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    class CmdCfg extends mo.GUIDE.CmdCfg {
        lvl: number;
        copyId: number;
        taskId: number;
        _initProp(): void;
    }
    class GuideParser extends egret.Emitter {
        parse(cmdId: string): CmdCfg;
    }
}
/**
 * Created by SmallAiTT on 2015/8/31.
 */
declare module g_guide {
    class Guide2 extends mo.GUIDE.GuideLayer {
        actionData: any;
        grp_circle: any;
        grp_arrow: any;
        _initProp(): void;
        onEnter(): void;
        _childrenCreated(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/31.
 */
declare module egret.project {
    /** 是否开启模拟战斗 */
    var guide: string[];
}
declare module g_guide {
}
