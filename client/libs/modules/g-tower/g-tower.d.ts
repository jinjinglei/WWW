/**
 * Created by Administrator on 2016/1/9.
 */
declare module g_tower {
    class TowerGain extends mo.gui.Dlg {
        grp_passAward: any;
        btn_again1: any;
        label_desc: any;
        grp_cost: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_again1(): void;
    }
}
/**
 * Created by Administrator on 2016/1/9.
 */
declare module g_tower {
    class TowerTreasury extends mo.gui.Dlg {
        list_items: egret.gui.List;
        btn_once: egret.gui.Button;
        _scollerHelper: uiHelper.ScrollerHelper;
        _Item_list_items: any;
        treasury_num: any;
        buyMoney: number;
        consumption: any;
        label_date: any;
        label_yb: any;
        label_Ybtxt: any;
        num: any;
        _initProp(): void;
        _childrenCreated(): void;
        _setdData(): void;
        _setPromptType(): void;
        _data_list_items(): any[];
        _tap_btn_once(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
    }
}
/**
 * Created by lihex on 4/19/16.
 */
declare module g_tower {
    class TowerPreview extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_Preview: any;
        label_date: any;
        _initProp(): void;
        _childrenCreated(): void;
        _setdData(): void;
        _setPromptType(): void;
        _data_list_items(): any[];
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        getCurrentSkinState(): string;
        _tap_btn_help(): void;
        _tap_btn_close(): void;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class TowerMonster extends mo.gui.Comp {
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
 * Created by Administrator on 2016/1/9.
 */
declare module g_tower {
    class Tower extends mo.gui.Dlg {
        tm0: g_comp.TowerMonster;
        tm1: g_comp.TowerMonster;
        tm2: g_comp.TowerMonster;
        grp_passAward: egret.gui.Group;
        grp_preview: egret.gui.Group;
        btn_enter: egret.gui.Button;
        btn_getAward: egret.gui.Button;
        label_num: any;
        label_treasureNum: any;
        label_spAwardLayerNum: any;
        img_preview: any;
        curTowerCopyId: any;
        btn_treasure: egret.gui.UIAsset;
        _initProp(): void;
        _childrenCreated(): void;
        refreshUI(): void;
        _refreshMonster(): void;
        _tap_btn_help(): void;
        _tap_btn_rank(): void;
        _tap_btn_enter(): void;
        _tap_btn_getAward(): void;
        _tap_btn_treasure(): boolean;
        _tap_img_preview(): void;
    }
}
