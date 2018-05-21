/**
 * Created by Zhuang on 2016/7/4.
 */
declare module g_villian {
    /**
     *
     * @author
     *
     */
    class VillianLayer extends mo.gui.Dlg {
        moduleParam: IModuleParam.Villian;
        _targets: Array<any>;
        villianEnemy_1: g_comp.VillianEnemy;
        villianEnemy_2: g_comp.VillianEnemy;
        villianEnemy_3: g_comp.VillianEnemy;
        ui_Villianbg: mo.gui.UIAsset;
        btn_villian_shop: mo.gui.UIAsset;
        curStage: any;
        _initProp(): void;
        onEnter(): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _setVillianEnemyPos(): void;
        _tap_villianEnemy_1(): void;
        _tap_villianEnemy_2(): void;
        _tap_villianEnemy_3(): void;
        _tap_btn_villian_shop(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
    }
}
declare module g_comp {
    /**
     *
     * Created by Zhuang on 2016/7/4.
     *
     */
    class VillianEnemy extends mo.gui.Comp {
        label_num: any;
        img_boss: any;
        img_fighting: any;
        img_canGet: any;
        img_pass: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Zhuang on 2016/7/4.
 */
declare module g_villian {
    class VillianBattle extends mo.gui.Dlg {
        label_name: any;
        label_level: any;
        ico_avatar: any;
        label_vipLv: any;
        grp_vip: any;
        ico_title: any;
        pkUser: any;
        label_guild: any;
        list_items: egret.gui.List;
        _Item_list_items: any;
        curSoul: g_comp.Ico_Soul;
        curShowSoul: g_comp.Ico_Soul;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
        onEnter(): void;
        _tap_btn_attack(): void;
        startPvp(name: any): void;
        getNameTxt(name: any): string;
    }
}
/**
 * Created by Zhuang on 2016/7/4.
 */
declare module g_villian {
    class VillianHeroCell extends mo.gui.ItemRenderer {
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Zhuang on 2016/7/4.
 */
declare module g_villian {
    class VillianSoulLayer extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Zhuang on 2016/7/4.
 */
declare module g_villian {
    class VillianSoulCell extends mo.gui.ItemRenderer {
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_villian {
    /**
     *
     * @author
     *
     */
    class VillianShopLayer extends mo.gui.Dlg {
        moduleParam: IModuleParam.Shop;
        list_items: egret.gui.List;
        _Item_list_items: any;
        _comps: Array<any>;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_villian {
    class VillianShopItem extends mo.gui.ItemRenderer {
        ico_item: any;
        label_sw: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_buy(): void;
    }
}
