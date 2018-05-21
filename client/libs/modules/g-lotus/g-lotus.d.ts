/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_lotus {
    class LotusLayer extends mo.gui.Layer {
        tab_btn: any;
        container: egret.gui.Group;
        grp_lotus: any;
        _comps: Array<any>;
        red0: any;
        red3: any;
        _initProp(): void;
        _childrenCreated(): void;
        _checkRed(): void;
        dataChanged(): void;
        _tap_tab_btn(): void;
        _tap_btn_back(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_lotus {
    class LotusDetail extends mo.gui.Layer {
        label_zhou: any;
        label_yue: any;
        label_expTotal: any;
        label_expPerHour: any;
        label_lv: any;
        _initProp(): void;
        _childrenCreated(): void;
        _timerId: any;
        onEnter(): void;
        onExit(): void;
        dataChanged(): void;
        _tap_btn_get(): void;
        _tap_btn_opening(): void;
        _tap_btn_back(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_lotus {
    class LotusLvUp extends mo.gui.Layer {
        label_curLv: any;
        label_curAdd: any;
        label_curTotal: any;
        label_nextLv: any;
        label_nextAdd: any;
        label_nextTotal: any;
        label_itemName: any;
        label_itemNum: any;
        label_cannotLvUp: any;
        ico_item: any;
        grp_next: any;
        grp_lvUp: any;
        effect_win: any;
        _winEfxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_lvUp(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_lotus {
    class LotusAdvUp extends mo.gui.Layer {
        label_curLv: any;
        label_curAdd: any;
        label_curTotal: any;
        label_curExpAdd: any;
        label_nextLv: any;
        label_nextAdd: any;
        label_nextTotal: any;
        label_nextExpAdd: any;
        label_itemName: any;
        label_itemNum: any;
        label_cannotLvUp: any;
        ico_item: any;
        grp_next: any;
        grp_lvUp: any;
        effect_win: any;
        effect_fail: any;
        _winEfxPlayer: uiHelper.EfxPlayer;
        _failEfxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_lvUp(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_lotus {
    class LotusTrea extends mo.gui.Layer {
        label_curLv: any;
        label_nextLv: any;
        ico_item0: any;
        label_itemName0: any;
        label_itemNum0: any;
        ico_item1: any;
        label_itemName1: any;
        label_itemNum1: any;
        label_curProp: any;
        label_nextProp: any;
        label_cannotLvUp: any;
        grp_next: any;
        grp_lvUp: any;
        effect_win: any;
        effect_fail: any;
        _winEfxPlayer: uiHelper.EfxPlayer;
        _failEfxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        getPropStr(props: any): string;
        _tap_btn_trea(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_lotus {
    class LotusOpeningDlg extends mo.gui.Dlg {
        label_lotusLvl: mo.gui.Label;
        label_vip: egret.gui.BitmapLabel;
        label_openingDay: mo.gui.Label;
        label_add: mo.gui.Label;
        label_lmt: mo.gui.Label;
        label_cost: mo.gui.Label;
        label_exp: mo.gui.Label;
        label_leftNum: mo.gui.Label;
        efx_opening: g_comp.UIEffect;
        openingEfxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        _childrenCreated(): void;
        _refreshUi(): void;
        _upOpening(): void;
        _tap_btn_opening(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_lotus {
    class LotusScene extends mo.gui.UIScene {
        show(): void;
    }
}
