/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_chuanchen {
    class CCEquipChooseItem extends mo.gui.ItemRenderer {
        static ON_BTN_EQUIP: string;
        ico_item: g_comp.Ico_Item;
        label_desc: mo.gui.Label;
        label_needLvl: mo.gui.Label;
        btn_choose: egret.gui.Button;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_choose(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_chuanchen {
    class Chuanchen extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        tab_bag: egret.gui.TabBar;
        label_empty: any;
        _equips: Array<any>;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_tab_bag(event: any): void;
        _reset(): void;
        _getSelectedType(): number;
        _data_list_items(): any[];
        _initItem_list_items(cell: CCEquipChooseItem): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_chuanchen {
    class CCEquip extends mo.gui.Dlg {
        ico_item: g_comp.Ico_Item;
        grp_before: egret.gui.Group;
        grp_after: egret.gui.Group;
        grp_lvlNotEnough: egret.gui.Group;
        grp_lvlEnough: egret.gui.Group;
        label_cost: any;
        res_bar: any;
        label_needLvl: any;
        btn_chuanchen: any;
        grp_res: any;
        grp_resMy: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _setAfterEquipInfo(grp: egret.gui.Group): void;
        _setBeforeEquipInfo(grp: egret.gui.Group, bdc: gd.BagDataCtrl): void;
        _tap_btn_help(): void;
        _tap_btn_chuanchen(): boolean;
    }
}
