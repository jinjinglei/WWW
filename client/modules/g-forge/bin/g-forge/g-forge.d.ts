/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_forge {
    var SUBMID_STR: number;
    var SUBMID_STAR: number;
    var SUBMID_GEM: number;
    /**
     *
     * @author
     *
     */
    class ForgeLayer extends mo.gui.Layer {
        moduleParam: IModuleParam.Forge;
        container: egret.gui.Group;
        tab_str: egret.gui.TabBar;
        tabLastSelectIndex: number;
        btn_do: egret.gui.Button;
        label_open: mo.gui.Label;
        img_border_light: egret.gui.UIAsset;
        img_red0: egret.gui.UIAsset;
        img_red1: egret.gui.UIAsset;
        img_red2: egret.gui.UIAsset;
        _comps: Array<any>;
        _btnStr: string[];
        hec: gd.HeroEntityCtrl;
        part: any;
        redKeyArr: Array<any>;
        _initProp(): void;
        _heroChanged(hec: any): void;
        dtor(): void;
        _childrenCreated(): void;
        _getRealPart(): any;
        dataChanged(): void;
        updateEquipItems(): void;
        _onEquipItemClick(item: g_comp.Equip_Item): boolean;
        _moveLightBorder(item: g_comp.Equip_Item): void;
        _hideAllComp(): void;
        _tap_tab_str(): boolean;
        _updateBtnVisible(): void;
        _tap_btn_do(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _updateRed(): void;
    }
}
declare module g_forge {
    /**
     *
     * @author
     *
     */
    class EquipStrBase extends mo.gui.Layer {
        label_curProp: mo.gui.Label;
        label_nextProp: mo.gui.Label;
        label_cost_stone: mo.gui.Label;
        label_cost_gold: mo.gui.Label;
        img_cost: egret.gui.UIAsset;
        data: gd.IHeroPart;
        part_item: g_comp.Part_Item;
        efx: g_comp.UIEffect;
        _efxPlayer: uiHelper.EfxPlayer;
        grp_noMax: egret.gui.Group;
        grp_max: egret.gui.Group;
        label_noRefineLv: any;
        ico_refine: any;
        _initProp(): void;
        _childrenCreated(): void;
        _getRealPart(): number;
        _showEmpty(): void;
        dataChanged(): void;
        _tap_ico_refine(): void;
    }
}
declare module g_forge {
    /**
     *
     * @author
     *
     */
    class EquipStrStar extends mo.gui.Layer {
        label_cost_stone: mo.gui.Label;
        label_cost_gold: mo.gui.Label;
        label_prop_base: mo.gui.Label;
        label_prop_next: mo.gui.Label;
        img_cost: egret.gui.UIAsset;
        data: gd.IHeroPart;
        part_item: g_comp.Part_Item;
        efx: g_comp.UIEffect;
        _efxPlayer: uiHelper.EfxPlayer;
        grp_noMax: egret.gui.Group;
        grp_max: egret.gui.Group;
        grp_tupo: any;
        label_costDesc: any;
        label_tupo: any;
        label_star: any;
        label_tupoProp: any;
        effect_win: any;
        effect_fail: any;
        _winEfxPlayer: uiHelper.EfxPlayer;
        _failEfxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        _childrenCreated(): void;
        _getRealPart(): number;
        _showEmpty(): void;
        dataChanged(): void;
        _tap_btn_tupo(): void;
    }
}
declare module g_forge {
    /**
     *
     * @author
     *
     */
    class EquipStrGem extends mo.gui.Layer {
        label_cost_stone: mo.gui.Label;
        gem_stone: g_comp.Gem_Stone;
        img_cost: egret.gui.UIAsset;
        data: gd.IHeroPart;
        part_item: g_comp.Part_Item;
        efx: g_comp.UIEffect;
        _efxPlayer: uiHelper.EfxPlayer;
        grp_noMax: egret.gui.Group;
        grp_max: egret.gui.Group;
        _initProp(): void;
        _childrenCreated(): void;
        _getRealPart(): number;
        _showEmpty(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_forge {
    class RefineLayer extends mo.gui.Layer {
        container: egret.gui.Group;
        btn_do: egret.gui.Button;
        img_border_light: egret.gui.UIAsset;
        hec: gd.HeroEntityCtrl;
        part: any;
        lable_curLv: any;
        label_curProp: mo.gui.Label;
        label_nextProp: mo.gui.Label;
        label_cost_stone: mo.gui.Label;
        label_cost_gold: mo.gui.Label;
        img_cost: egret.gui.UIAsset;
        ico_stone: any;
        data: gd.IHeroPart;
        part_item: g_comp.Part_Item;
        efx: g_comp.UIEffect;
        _efxPlayer: uiHelper.EfxPlayer;
        grp_jinglian: egret.gui.Group;
        label_max: any;
        label_cannot: any;
        label_gold: any;
        label_yuanbao: any;
        label_stone: any;
        effect_win: any;
        effect_fail: any;
        effect_crit: any;
        effect_downLv: any;
        _winEfxPlayer: uiHelper.EfxPlayer;
        _failEfxPlayer: uiHelper.EfxPlayer;
        _critEfxPlayer: uiHelper.EfxPlayer;
        _downEfxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        _heroChanged(hec: any): void;
        onEnter(): void;
        onExit(): void;
        dtor(): void;
        _childrenCreated(): void;
        _getRealPart(): number;
        dataChanged(): void;
        updateEquipItems(): void;
        _onEquipItemClick(item: g_comp.Equip_Item): boolean;
        _showEmpty(): void;
        updateItem(): boolean;
        _moveLightBorder(item: g_comp.Equip_Item): void;
        _tap_btn_do(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module g_forge {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    var roleChgEmitter: egret.Emitter;
    var baseBottomBar: g_base.BaseBottomBar;
    class ForgeScene extends mo.gui.UIScene {
        moduleParam: IModuleParam.Forge;
        show(): void;
        dtor(): void;
    }
}
