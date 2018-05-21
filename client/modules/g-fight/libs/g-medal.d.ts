/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_medal {
    class MedalCell extends mo.gui.ItemRenderer {
        ico_item: g_comp.Ico_Item;
        rect_touch: egret.gui.Rect;
        data: gd.BagDataCtrl;
        label_name: mo.gui.Label;
        _initProp(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_medal {
    class MedalAchiItem extends mo.gui.ItemRenderer {
        ico_item: g_comp.Ico_Item;
        label_name: mo.gui.Label;
        label_loot: mo.gui.Label;
        label_lootArg: mo.gui.Label;
        _initProp(): void;
        dataChanged(): void;
        _tap_btn_detail(): void;
    }
}
/**
 * Created by Administrator on 2016/1/9.
 */
declare module g_medal {
    class Medal extends mo.gui.Dlg {
        moduleParam: IModuleParam.Medal;
        tab_medal: egret.gui.TabBar;
        label_open: mo.gui.Label;
        grp_combat: egret.gui.Group;
        grp_print: egret.gui.Group;
        grp_medal: egret.gui.Group;
        grp_achivement: egret.gui.Group;
        ico_medalItem: g_comp.Ico_Medal;
        img_onNoPrint: egret.gui.UIAsset;
        img_printBg: egret.gui.UIAsset;
        label_noMedal: egret.gui.UIAsset;
        label_noPrints: egret.gui.UIAsset;
        img_printRed: egret.gui.UIAsset;
        tabCompArr: any;
        tabIndex: number;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_btn_help(): void;
        _tap_img_printBg(): boolean;
        _tap_tab_medal(): void;
        _refreshUI(): void;
        _refreshTabComp(): void;
        /****************************************************************
        //战力
         ****************************************************************/
        grp_props: egret.gui.Group;
        _refreshCombatGrp(): void;
        /****************************************************************
         //战印
         ****************************************************************/
        list_print: egret.gui.List;
        _Item_list_print: any;
        warPrints: Array<any>;
        _refreshPrintGrp(): void;
        _data_list_print(): any[];
        /****************************************************************
         //勋章
         ****************************************************************/
        list_medal: egret.gui.List;
        _Item_list_medal: any;
        _refreshMedalGrp(): void;
        _data_list_medal(): any[];
        _click_list_medal(event: egret.gui.ListEvent): void;
        /****************************************************************
         //成就勋章
         ****************************************************************/
        list_achivement: egret.gui.List;
        _Item_list_achivement: any;
        _refreshAchivementGrp(): void;
        _data_list_achivement(): any[];
    }
    /**
     * 设置属性
     * |属性1         |属性 splitNum+1
     * |属性2         |属性 splitNum+2
     * |属性splitNum  |属性 splitNum+3
     * @param grp
     * @param props 属性数组:[[属性类型,属性值],[属性类型,属性值],...]
     * @param splitNum 一列最多显示几个属性
     */
    function setProps(grp: egret.gui.Group, props: Array<any>, splitNum: number): void;
}
/**
 * Created by lihex on 2/27/16.
 */
declare module g_medal {
    class MedalChooseItem extends mo.gui.ItemRenderer {
        ico_medalItem: g_comp.Ico_Medal;
        _initProp(): void;
        dataChanged(): void;
        _tap_btn_equip(): void;
    }
}
/**
 * Created by lihex on 2/27/16.
 */
declare module g_medal {
    class MedalChange extends mo.gui.Dlg {
        ico_medalItem: g_comp.Ico_Medal;
        list_print: egret.gui.List;
        _Item_list_print: any;
        warPrints: Array<any>;
        _initProp(): void;
        _childrenCreated(): void;
        getCurrentSkinState(): string;
        dataChanged(): void;
        _data_list_print(): any[];
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_medal {
    class PrintItem extends mo.gui.ItemRenderer {
        static ON_BTN_EQUIP: string;
        ico_item: g_comp.Ico_Item;
        ico_medalItem: g_comp.Ico_Medal;
        label_grade: mo.gui.Label;
        label_strLvl: mo.gui.Label;
        img_print: egret.gui.UIAsset;
        img_red: egret.gui.UIAsset;
        btn_str: any;
        btn_active: any;
        label_cannotStr: any;
        label_cannotActive: any;
        label_medal: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_str(): void;
        _tap_btn_active(): void;
    }
}
/**
 * Created by lihex on 2/25/16.
 */
declare module g_medal {
    class PrintDetail extends mo.gui.Dlg {
        grp_props: egret.gui.Group;
        label_strLvl: mo.gui.Label;
        label_loot: mo.gui.Label;
        ico_medalItem: g_comp.Ico_Medal;
        _initProp(): void;
        dataChanged(): void;
        _tap_btn_str(): void;
    }
}
/**
 * Created by lihex on 2/25/16.
 */
declare module g_medal {
    class PrintStr extends mo.gui.Dlg {
        ico_item: g_comp.Ico_Item;
        ico_item0: g_comp.Ico_Item;
        ico_item1: g_comp.Ico_Item;
        label_reqItem0: mo.gui.Label;
        label_reqItem1: mo.gui.Label;
        ico_medalItem: g_comp.Ico_Medal;
        btn_str: egret.gui.Button;
        grp_before: egret.gui.Group;
        grp_after: egret.gui.Group;
        grp_item0: egret.gui.Group;
        grp_item1: egret.gui.Group;
        grp_max: egret.gui.Group;
        grp_strReq: egret.gui.Group;
        label_cannotStr: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_help(): void;
        _tap_btn_str(): boolean;
        _tap_ico_item0(): void;
        _tap_ico_item1(): void;
        on_ico_item(idx: any): void;
        _setRequireItems(): void;
        _setAfterEquipInfo(grp: egret.gui.Group): void;
        _setBeforeEquipInfo(grp: egret.gui.Group): void;
    }
}
