/**
 * Created by Zhuang on 2016/4/25.
 */
declare module g_smelting {
    class SmeltingBatch extends g_base.CloseInfoDlg {
        white_txt: any;
        green_txt: any;
        blue_txt: any;
        purple_txt: any;
        orange_txt: any;
        ckb_keep: egret.gui.CheckBox;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_btn_info(): void;
        _setData(): void;
        _tap_btn_whiteResolve(): void;
        _tap_btn_greenResolve(): void;
        _tap_btn_blueResolve(): void;
        _tap_btn_purpleResolve(): void;
        _tap_btn_orangeResolve(): void;
        _chg_ckb_keep(): void;
        _ResolveEquip(indx: number): boolean;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_smelting {
    class SmeltingItem extends mo.gui.ItemRenderer {
        ico_item: g_comp.Ico_Item;
        efx: g_comp.UIEffect;
        img_add: egret.gui.UIAsset;
        grp_add: egret.gui.Group;
        emitter: egret.Emitter;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_img_add(): void;
        _dropMe(): void;
        playEffect(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_smelting {
    class Smelting extends g_base.CloseInfoDlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        equipIds: Array<any>;
        ckb_keep: egret.gui.CheckBox;
        _playingEffect: boolean;
        _fromChoose: boolean;
        emitter: egret.Emitter;
        _initProp(): void;
        _initItem_list_items(cell: SmeltingItem): void;
        _counter: number;
        _data_list_items(): any[];
        _childrenCreated(): void;
        _tap_btn_batchResolve(): void;
        _tap_btn_resolve(): void;
        _doSmelting(): void;
        _chg_ckb_keep(): void;
        _hasSpecailEquip: any;
        _hasCustomEquip: any;
        chooseEquipForIdx(idx: any): void;
        dropEquipByIdx(idx: any): void;
        /**
         * 按指定长度末尾填充数组
         * @param arr
         * @param maxLen 指定长度
         * @param fillV 填充值
         * @returns {Array<any>}
         * @private
         */
        _fillArr(arr: Array<any>, maxLen: number, fillV: any): any[];
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_smelting {
    class SmeltChooseItem extends mo.gui.ItemRenderer {
        ico_item: g_comp.Ico_Item;
        label_desc: mo.gui.Label;
        ckb_selected: egret.gui.CheckBox;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_smelting {
    /**
     *
     * @author
     *
     */
    class SmeltEquipChoose extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        _scollerHelper: uiHelper.ScrollerHelper;
        showType: number;
        specialEquipNum: number;
        customEquipNum: number;
        doWhat: number;
        maxNum: number;
        label_num: mo.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        updateNum(): void;
        isSelected(equipId: any): boolean;
        pickEquip(equipId: any): void;
        dropEquip(equipId: any): void;
        _data_list_items(): any[];
        _refresh(): void;
        _click_list_items(event: egret.gui.ListEvent): void;
        _tap_btn_ok(): void;
    }
}
