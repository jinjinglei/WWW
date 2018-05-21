/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_shop {
    class ShopItem extends mo.gui.ItemRenderer {
        static ON_BTN_BUY: string;
        ico_item: any;
        label_yb0: any;
        label_yb: any;
        ico_new: any;
        label_vipCanBuy: any;
        grp_discount: any;
        btn_buy: any;
        ico_sellout: any;
        label_part: any;
        img_currency: any;
        img_red: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_buy(): void;
    }
}
/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_shop {
    class Shop extends mo.gui.Layer {
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        reset(type: any): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _initItem_list_items(cell: ShopItem): void;
    }
}
/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_shop {
    class ShopBuy extends mo.gui.Dlg {
        label_name: any;
        ico_item: any;
        label_canBuyNum: any;
        label_desc: any;
        label_num: any;
        buyNum: any;
        grp_res: any;
        onEnter(): void;
        _getMaxBuyNum(): any;
        _tap_btn_sub(): void;
        _tap_btn_add(): void;
        _tap_btn_min(): void;
        _tap_btn_max(): void;
        showNum(): void;
        _tap_btn_ok(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_shop {
    var SUBMID_ITEM: number;
    var SUBMID_MOJIN: number;
    /**
     *
     * @author
     *
     */
    class ShopLayer2 extends mo.gui.Layer {
        moduleParam: IModuleParam.Shop;
        _comps: Array<any>;
        container: any;
        tab_str: egret.gui.TabBar;
        resBar: any;
        tabLastSelectIndex: any;
        viewStack: egret.gui.ViewStack;
        _childrenCreated(): void;
        _hideAllComp(): void;
        dtor(): void;
        _tap_tab_str(): boolean;
        _tap_btn_recharge(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module g_shop {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    class ShopScene extends mo.gui.UIScene {
        moduleParam: IModuleParam.Shop;
        show(): void;
    }
}
/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_shop {
    class ShopBuyEquip extends mo.gui.Layer {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_nextRefreshTime: mo.gui.Label;
        grp_refresh_cost: egret.gui.Group;
        _initProp(): void;
        _childrenCreated(): void;
        _setRefreshCost(): void;
        dataChanged(): void;
        reset(type: any): void;
        _data_list_items(): any[];
        _tap_btn_refresh(): void;
        _tap_btn_buyAll(): void;
        _initItem_list_items(cell: ShopItem): void;
    }
}
/**
 * Created by Administrator on 2015/10/6.
 */
declare module g_shop {
    class ArenaShop extends mo.gui.Dlg {
        moduleParam: IModuleParam.Shop;
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_sw: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        updataJf(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_shop {
    class ArenaShopItem extends mo.gui.ItemRenderer {
        ico_item: any;
        label_sw: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_buy(): void;
    }
}
