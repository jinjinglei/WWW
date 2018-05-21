/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_home {
    /**
     *
     * @author
     *
     */
    class HomeBg extends mo.gui.Layer {
        btn_equip_copy: egret.gui.Rect;
        btn_pvboss: egret.gui.Rect;
        btn_state_copy: egret.gui.Rect;
        btn_gh: egret.gui.Rect;
        btn_arena: egret.gui.Rect;
        btn_king: egret.gui.Rect;
        btn_guild: egret.gui.Rect;
        btn_copy: egret.gui.Rect;
        btn_coffer: egret.gui.Rect;
        btn_gang: egret.gui.Rect;
        btn_pagoda: egret.gui.Rect;
        img_redArena: any;
        img_redCopy: any;
        img_redGuild: any;
        img_redKing: any;
        img_arena: any;
        img_copy: any;
        img_guild: any;
        img_King: any;
        img_gang: any;
        img_coffer: any;
        img_Pagoda: any;
        moduleParam: IModuleParam.Home;
        _initProp(): void;
        _childrenCreated(): void;
        onTouch(event: any): void;
        onExit(): void;
        onEnter(): void;
        checkRedPoint(): void;
        _tap_btn_equip_copy(): void;
        _tap_btn_pvboss(): void;
        _tap_btn_state_copy(): void;
        _tap_btn_arena(): void;
        _tap_btn_guild(): void;
        _tap_btn_king(): void;
        _tap_btn_copy(): void;
        _tap_btn_gang(): void;
        _tap_btn_coffer(): void;
        _tap_btn_pagoda(): void;
        _tap_btn_villian(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module g_home {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    class HomeScene extends mo.gui.UIScene {
        moduleParam: IModuleParam.Home;
        show(): void;
        openSubModule(subModuleId: any, moduleParam: any): void;
    }
}
