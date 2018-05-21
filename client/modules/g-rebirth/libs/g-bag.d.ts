/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_bag {
    class BagCell extends mo.gui.ItemRenderer {
        ico_item: g_comp.Ico_Item;
        rect_touch: egret.gui.Rect;
        data: gd.BagDataCtrl;
        ico_lock: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_bag {
    /**
     *
     * @author
     *
     */
    class BagLayer extends mo.gui.Layer {
        list_items: egret.gui.List;
        _Item_list_items: any;
        btn_forge: egret.gui.Button;
        tab_bag: egret.gui.TabBar;
        label_grid: mo.gui.Label;
        grp_equip: egret.gui.Group;
        showType: number;
        _scollerHelper: uiHelper.ScrollerHelper;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
        _tap_btn_forge(): void;
        _tap_btn_sale(): void;
        _tap_tab_bag(event: any): void;
        _tap_btn_plus(): void;
        _refresh(): void;
        _click_list_items(event: egret.gui.ListEvent): void;
        _tap_btn_back(): void;
        dtor(): void;
    }
}
/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_bag {
    class BagOpenBox extends mo.gui.Dlg {
        label_name: any;
        ico_item: any;
        label_canBuyNum: any;
        label_desc: any;
        label_num: any;
        buyNum: any;
        grp_res: any;
        container: any;
        btn_ok: any;
        grp_cost: any;
        ico_itemCost: any;
        label_itemCostName: any;
        label_itemCostNum: any;
        _initProp(): void;
        dataChanged(): void;
        _childrenCreated(): void;
        _tap_btn_sub(): void;
        _tap_btn_add(): void;
        _tap_btn_min(): void;
        _tap_btn_max(): void;
        showNum(): void;
        _tap_btn_ok(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module g_bag {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    class BagScene extends mo.gui.UIScene {
        show(): void;
    }
}
/**
 * Created by admin on 16/4/12.
 */
declare module g_bag {
    /**
     *
     * @author
     *
     */
    class BagSale extends mo.gui.Layer {
        ckb_orange: any;
        ckb_purple: any;
        ckb_blue: any;
        ckb_green: any;
        ckb_white: any;
        ckb_below: any;
        label_orange: any;
        label_purple: any;
        label_blue: any;
        label_green: any;
        label_white: any;
        label_below: any;
        label_get: any;
        btn_sale: any;
        grp_gold_container: any;
        grp_gold: any;
        grp_yuanbao: any;
        grp_items: any;
        label_gold: any;
        label_yuanbao: any;
        label_items: any;
        _selectArray: Array<boolean>;
        items: any;
        sendAry: Array<number>;
        _initProp(): void;
        _childrenCreated(): void;
        _changeReward(): void;
        _changeRewardView(rewards: any): void;
        _tap_btn_sale(): boolean;
        _tap_btn_info(): void;
        _chg_ckb_orange(): void;
        _chg_ckb_purple(): void;
        _chg_ckb_blue(): void;
        _chg_ckb_green(): void;
        _chg_ckb_white(): void;
        _chg_ckb_below(): void;
    }
}
