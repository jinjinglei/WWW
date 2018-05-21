/**
 * Created by lihex on 3/28/16.
 */
declare module g_copy {
    var vipBg: {
        7: string[];
        10: string[];
        14: string[];
        17: string[];
        19: string[];
        20: string[];
    };
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_copy {
    var curBossCopyId: number;
    /**
     *
     * @author
     *
     */
    class BossCopy extends mo.gui.Dlg {
        moduleParam: IModuleParam.Copy;
        list_items: egret.gui.List;
        _Item_list_items: any;
        list_copys: any;
        _Item_list_copys: any;
        titleDisplay: mo.gui.Label;
        label_rest: mo.gui.Label;
        label_combat: mo.gui.Label;
        label_bossHp: mo.gui.Label;
        grp_res: egret.gui.Group;
        copyId: any;
        ico_monster: any;
        bossAP: g_base.ActionPlayer;
        grp_boss_token: egret.gui.Group;
        grp_boss_token2: egret.gui.Group;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_enter(): void;
        _data_list_items(): any[];
        _data_list_copys(): any[];
        _click_list_copys(event: egret.gui.ListEvent): void;
        setCopyInfo(copyId: any): void;
        _tap_btn_left(): void;
        _tap_btn_right(): void;
        click_btn_close(): void;
        _tap_btn_buy_bossTicket(): void;
        _tap_btn_info(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_copy {
    class BossCopyItem extends mo.gui.ItemRenderer {
        label_name: egret.gui.Label;
        img_boss: egret.gui.UIAsset;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_copy {
    class CopyItem extends mo.gui.ItemRenderer {
        static ON_ITEM_CLICK: string;
        label_name: egret.gui.Label;
        label_rest: mo.gui.Label;
        label_note: mo.gui.Label;
        btn_plus: egret.gui.Button;
        img_new: egret.gui.UIAsset;
        touch_rect: egret.gui.Rect;
        grp_star: egret.gui.Group;
        _childrenCreated(): void;
        dataChanged(): void;
        _updateRestStatus(): void;
        _tap_btn_plus(): void;
        _tap_touch_rect(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_copy {
    /**
     *
     * @author
     *
     */
    class Copy extends mo.gui.Dlg {
        moduleParam: IModuleParam.Copy;
        list_copys: egret.gui.List;
        _Item_list_copys: any;
        img_title: egret.gui.UIAsset;
        label_ticket: mo.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_copys(): any[];
        dataChanged(): void;
        _initItem_list_copys(cell: CopyItem): void;
        _tap_btn_buy_ticket(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_copy {
    /**
     *
     * @author
     *
     */
    class StateCopy extends Copy {
        _initProp(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_copy {
    class CopyEntryItem extends mo.gui.ItemRenderer {
        label_openLvl: egret.gui.Label;
        label_rest: egret.gui.Label;
        label_loot: egret.gui.Label;
        img_icon: egret.gui.UIAsset;
        img_title: egret.gui.UIAsset;
        img_shadow: egret.gui.UIAsset;
        rect_mask: egret.gui.Rect;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_copy {
    /**
     *
     * @author
     *
     */
    class CopyEntry extends mo.gui.Dlg {
        list_copys: egret.gui.List;
        _Item_list_copys: any;
        _copys: Array<any>;
        _initProp(): void;
        _childrenCreated(): void;
        checkVipCopy(): void;
        _data_list_copys(): any[];
        dataChanged(): void;
        _click_list_copys(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_copy {
    class VipCopyItem extends mo.gui.ItemRenderer {
        label_name: egret.gui.Label;
        img_icon: egret.gui.UIAsset;
        label_unlockLvl: mo.gui.Label;
        grp_star: egret.gui.Group;
        img_txt_bg: egret.gui.UIAsset;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_touch_rect(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_copy {
    /**
     *
     * @author
     *
     */
    class VipCopy extends mo.gui.Dlg {
        moduleParam: IModuleParam.VipCopy;
        list_copys: egret.gui.List;
        _Item_list_copys: any;
        img_title: egret.gui.UIAsset;
        label_left_times: any;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_copys(): any[];
        dataChanged(): void;
        onCopyItemClick(copyId: any): void;
        _tap_btn_help(): void;
    }
}
