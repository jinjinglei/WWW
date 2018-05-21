/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_custom {
    class CustomItem extends mo.gui.ItemRenderer {
        label_part: egret.gui.Label;
        grp_item: any;
        label_name: any;
        ico_border: any;
        ico: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _getPartTempResId(color: any, part: any): any;
        _tap_btn_goto(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_custom {
    /**
     *
     * @author
     *
     */
    class CustomList extends mo.gui.Dlg {
        moduleParam: IModuleParam.Custom;
        list_items: egret.gui.List;
        _Item_list_items: any;
        tab_bag: egret.gui.TabBar;
        colorType: number;
        label_tickets: mo.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_tab_bag(): void;
        _refresh(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_custom {
    class CustomPropItem extends mo.gui.ItemRenderer {
        label_prop: mo.gui.Label;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_custom {
    /**
     *
     * @author
     *
     */
    class Custom extends mo.gui.Dlg {
        moduleParam: IModuleParam.Custom;
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_range: any;
        label_lvl: any;
        label_count: any;
        custom_lvl: any;
        label_needLvl: any;
        job: any;
        choosedPropNum: number;
        inputName: any;
        img_frame: any;
        efx: g_comp.UIEffect;
        _efxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_btn_sub(): void;
        _tap_btn_add(): void;
        showNum(): void;
        _moveLightBorder(item: any): void;
        _onJobClick(item: any, target: any, job: any): void;
        _updateWearLvl(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _click_list_items(event: egret.gui.ListEvent): boolean;
        _tap_btn_custom(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_custom {
    class CustomCCEquip extends mo.gui.Dlg {
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
        img_title: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _setAfterEquipInfo(grp: egret.gui.Group): void;
        _setBeforeEquipInfo(grp: egret.gui.Group, bdc: gd.BagDataCtrl): void;
        _tap_btn_help(): void;
        _tap_btn_chuanchen(): void;
    }
}
