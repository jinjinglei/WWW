/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_heart {
    class HeartLayer extends mo.gui.Layer {
        list_heart: egret.gui.List;
        _Item_list_heart: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        reset(): void;
        _data_list_heart(): any[];
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_heart {
    class HeartDetail extends mo.gui.Layer {
        ico_title: any;
        ico_heart_bg: any;
        ico_ceng0: any;
        ico_ceng1: any;
        ico_ceng2: any;
        grp_ceng: any;
        grp_add: any;
        grp_prop: any;
        tab_btn: any;
        label_addProp: any;
        label_addValue: any;
        label_rate: any;
        ico_itemCost0: any;
        ico_item0: any;
        label_itemNumCost0: any;
        label_itemNum0: any;
        label_itemNumCost1: any;
        label_itemNum1: any;
        btn_add: any;
        btn_autoAdd: any;
        btn_stopAuto: any;
        label_auto: any;
        label_maxLevel: any;
        grp_canAdd: any;
        label_skillName: any;
        label_propL: any;
        label_propR: any;
        label_skillDesc: any;
        ico_skill: any;
        oldCeng: any;
        effect_point: any;
        effect_win: any;
        effect_fail: any;
        _winEfxPlayer: uiHelper.EfxPlayer;
        _failEfxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        onExit(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        onHeartLvChanged(): void;
        getIndexAry(num: number, isRight: boolean): number[];
        getPropStr(id: any, lv: any, isLeft: any): string;
        showPoint(id: any, checkAll: any): void;
        _tap_btn_add(): void;
        _autoTimeId: any;
        _tap_btn_autoAdd(): void;
        _tap_btn_stopAuto(): void;
        _tap_tab_btn(): void;
        _tap_btn_close(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_heart {
    class HeartCell extends mo.gui.ItemRenderer {
        grp_heart: any;
        grp_can: any;
        grp_cannot: any;
        ico_heart: any;
        ico_title: any;
        label_ceng: any;
        label_desc: any;
        label_title_can: any;
        label_cannot: any;
        label_title_cannot: any;
        btn_change: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_rect_touch(): void;
        _tap_btn_change(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_heart {
    class HeartSelect extends mo.gui.Layer {
        list_select: any;
        _Item_list_select: any;
        index: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_select(): any[];
        _tap_btn_close(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_heart {
    class HeartSelectCell extends mo.gui.ItemRenderer {
        ico_heart: any;
        label_skillDesc: any;
        label_desc: any;
        ico_name: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_learn(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_heart {
    class HeartChangeSelect extends mo.gui.Layer {
        list_select: any;
        _Item_list_select: any;
        index: any;
        label_point: any;
        label_cost: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_select(): any[];
        _tap_btn_close(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_heart {
    class HeartChangeSelectCell extends mo.gui.ItemRenderer {
        ico_heart: any;
        label_skillDesc: any;
        label_desc: any;
        ico_name: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_select(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_heart {
    class HeartScene extends mo.gui.UIScene {
        show(): void;
    }
}
