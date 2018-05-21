/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_role {
    var SUBMID_SKILL: number;
    var SUBMID_WING: number;
    /**
     *
     * @author
     *
     */
    class RoleLayer extends mo.gui.Layer {
        moduleParam: IModuleParam.Role;
        img_border_light: egret.gui.UIAsset;
        btn_wing_light: egret.gui.Button;
        btn_no_wing: egret.gui.Button;
        btn_matrix: egret.gui.Button;
        img_redSkill: any;
        img_redMatrix: any;
        img_redWing: any;
        ico_avatar: any;
        ico_medalItem: g_comp.Ico_Medal;
        grp_rebirth: egret.gui.Group;
        img_rebirthNum: egret.gui.UIAsset;
        hec: gd.HeroEntityCtrl;
        _heroChanged(hec: any, index: any): void;
        dtor(): void;
        _childrenCreated(): void;
        onEnter(): void;
        checkRedPoint(): void;
        _isWingUnlocked(): boolean;
        _refreshRebirthGrp(): void;
        dataChanged(): void;
        updateEquipItems(): void;
        _tap_btn_no_wing(): boolean;
        _tap_btn_skill(): void;
        _tap_btn_detail(): void;
        _tap_btn_matrix(): boolean;
        _tap_btn_wing_light(): boolean;
        _tap_btn_equip(): void;
        _onEquipItemClick(item: g_comp.Equip_Item): void;
        _tap_btn_back(): void;
        _tap_btn_buzhen(): void;
    }
}
/**
 * Created by lihex on 9/19/15.
 */
declare module g_role {
    /**
     *
     * @author
     *
     */
    class RoleDetail extends mo.gui.Layer {
        label_prop: mo.gui.Label;
        _initProp(): void;
        _heroChanged(hec: any): void;
        dtor(): void;
        dataChanged(): void;
    }
}
/**
 * Created by lihex on 9/19/15.
 */
declare module g_role {
    /**
     *
     * @author
     *
     */
    class RoleMatrix extends mo.gui.Layer {
        label_name: any;
        label_desc: any;
        grp_item: any;
        btn_up: any;
        btn_equipAll: any;
        effect_round: g_comp.UIEffect;
        effect_word: g_comp.UIEffect;
        efx_btn: g_comp.UIEffect;
        label_max: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        reset(): void;
        _tap_btn_equipAll(): void;
        _tap_btn_up(): void;
        onIconItemTap(e: egret.TouchEvent): void;
        _tap_btn_help(): void;
        _onHeroChanged(hec: any): void;
        dtor(): void;
    }
}
/**
 * Created by lihex on 9/19/15.
 */
declare module g_role {
    /**
     *
     * @author
     *
     */
    class RoleWing extends mo.gui.Layer {
        img_wing: egret.gui.UIAsset;
        label_lvl: egret.gui.Label;
        label_name: egret.gui.Label;
        grp_star_light: egret.gui.Group;
        grp_next: egret.gui.Group;
        grp_train: egret.gui.Group;
        btn_evolution: egret.gui.Button;
        btn_active: egret.gui.Button;
        label_nAttack: egret.gui.Label;
        label_nHp: egret.gui.Label;
        label_nPDefense: egret.gui.Label;
        label_nMDefense: egret.gui.Label;
        label_cAttack: egret.gui.Label;
        label_cHp: egret.gui.Label;
        label_cPDefense: egret.gui.Label;
        label_cMDefense: egret.gui.Label;
        label_cost_gold: mo.gui.Label;
        label_cost_yuanbao: mo.gui.Label;
        label_gold: mo.gui.Label;
        label_yuanbao: mo.gui.Label;
        label_feather: mo.gui.Label;
        pb_exp: egret.gui.ProgressBar;
        grp_res: any;
        efx_btn: g_comp.UIEffect;
        efx_evo1: g_comp.UIEffect;
        efx_evo2: g_comp.UIEffect;
        efx_hit1: g_comp.UIEffect;
        efx_hit2: g_comp.UIEffect;
        _hitEfxPlayer: uiHelper.EfxPlayer;
        _upStarEfxPlayer: uiHelper.EfxPlayer;
        _evoEfxPlayer: uiHelper.EfxPlayer;
        grp_fos: any;
        btn_normal: egret.gui.Button;
        btn_high: egret.gui.Button;
        btn_normalAuto: egret.gui.Button;
        btn_highAuto: egret.gui.Button;
        btn_checkAuto: egret.gui.CheckBox;
        grp_stop: any;
        grp_costDescAuto: any;
        ico_costAuto: any;
        label_costAuto: any;
        btn_stopAuto: egret.gui.Button;
        btn_keyUpgrade: egret.gui.Button;
        ico_str: any;
        _initProp(): void;
        _heroChanged(hec: any): void;
        dtor(): void;
        _childrenCreated(): void;
        onEnter(): void;
        onExit(): void;
        dataChanged(): void;
        fosOne(isNormal: any): boolean;
        _autoTimeId: any;
        _tap_btn_normalAuto(): void;
        _tap_btn_highAuto(): void;
        _tap_btn_stopAuto(): void;
        checkGrpStop(isNormal: any): void;
        _tap_btn_normal(): void;
        _tap_btn_high(): void;
        _tap_btn_checkAuto(): void;
        checkAuto(): void;
        _tap_btn_evolution(): void;
        _tap_btn_active(): void;
        _tap_btn_help(): void;
        _tap_ico_str(): void;
        _tap_btn_keyUpgrade(): void;
    }
}
/**
 * Created by Administrator on 2016/2/22.
 */
declare module g_role {
    class RoleWingStr extends mo.gui.Layer {
        ico_selLeft: any;
        ico_selRight: any;
        label_name: any;
        label_wingName: any;
        label_lvLeft: any;
        label_lvRight: any;
        label_curProp1: any;
        label_curProp2: any;
        label_curLv: any;
        label_nextProp1: any;
        label_nextProp2: any;
        label_nextLv: any;
        grp_next: any;
        label_maxLv: any;
        label_needWingLv: any;
        grp_lvUp: any;
        btn_useYB: egret.gui.CheckBox;
        grp_res: any;
        label_feather: any;
        label_yuanbao: any;
        label_cost: any;
        grp_cost: any;
        label_costYB: any;
        grp_costYB: any;
        grp_costParent: any;
        grp_result: any;
        effect_win: any;
        effect_fail: any;
        effect_crit: any;
        effect_downLv: any;
        _winEfxPlayer: uiHelper.EfxPlayer;
        _failEfxPlayer: uiHelper.EfxPlayer;
        _critEfxPlayer: uiHelper.EfxPlayer;
        _downEfxPlayer: uiHelper.EfxPlayer;
        _isLeft: any;
        isLeft: boolean;
        _initProp(): void;
        _heroChanged(hec: any): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        checkGrpCost(): void;
        _tap_btn_useYB(): void;
        _tap_ico_selLeft(): void;
        _tap_ico_selRight(): void;
        _tap_btn_help(): void;
        _tap_btn_str(): void;
        _tap_btn_confirm(): void;
        getPropStr(strInfo: any, isLeft: any, num: any): string;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_role {
    /**
     *
     * @author
     *
     */
    class RoleSkill extends mo.gui.Layer {
        list_skills: egret.gui.List;
        _Item_list_skills: any;
        res_bar: any;
        _initProp(): void;
        _heroChanged(hec: any): void;
        dtor(): void;
        dataChanged(): void;
        _data_list_skills(): any[];
        _tap_btn_help(): void;
    }
}
/**
 * Created by lihex on 9/19/15.
 */
declare module g_role {
    /**
     *
     * @author
     *
     */
    class EquipDetail extends mo.gui.Layer {
        label_name: mo.gui.Label;
        label_desc: mo.gui.Label;
        label_str_lvl: mo.gui.Label;
        label_str_star: mo.gui.Label;
        label_str_gem: mo.gui.Label;
        ico_item: g_comp.Ico_Item;
        gem_stone: g_comp.Gem_Stone;
        label_noEquip: egret.gui.Label;
        scr_hasEquip: egret.gui.Scroller;
        btn_replace: egret.gui.Button;
        img_red: egret.gui.UIAsset;
        data: gd.IHeroPart;
        _initProp(): void;
        _heroChanged(hec: any): void;
        dtor(): void;
        _tap_btn_replace(): void;
        dataChanged(): void;
    }
}
/**
 * Created by lihex on 9/19/15.
 */
declare module g_role {
    /**
     *
     * @author
     *
     */
    class EquipChange extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        ico_curEquip: g_comp.Ico_Item;
        label_curDesc: mo.gui.Label;
        data: gd.IHeroPart;
        _initProp(): void;
        _data_list_items(): any[];
        dataChanged(): void;
        _initItem_list_items(cell: EquipChooseItem): void;
    }
}
/**
 * Created by lihex on 9/19/15.
 */
declare module g_role {
    /**
     *
     * @author
     *
     */
    class EquipChoose extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        data: gd.IHeroPart;
        _initProp(): void;
        _data_list_items(): any[];
        _initItem_list_items(cell: EquipChooseItem): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_role {
    class EquipChooseItem extends mo.gui.ItemRenderer {
        static ON_BTN_EQUIP: string;
        ico_item: g_comp.Ico_Item;
        label_desc: mo.gui.Label;
        btn_equip: egret.gui.Button;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_equip(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_role {
    class SkillItem extends mo.gui.ItemRenderer {
        ico_new: any;
        ico_skill: any;
        label_name: any;
        label_desc: any;
        label_needMoney: any;
        grp_needMoney: any;
        label_open: any;
        btn_lvUp: any;
        efx_up: g_comp.UIEffect;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_lvUp(): void;
    }
}
/**
 * Created by Administrator on 2015/9/28.
 */
declare module g_role {
    class RoleMatrixInfo extends mo.gui.Dlg {
        ico_item: any;
        label_name: any;
        label_has: any;
        label_prop: any;
        label_needLv: any;
        ico_red: any;
        btn_merge: any;
        btn_equip: any;
        btn_ok: any;
        btn_gainWay: any;
        data: gd.IHeroPart;
        itemId: any;
        _childrenCreated(): void;
        _initProp(): void;
        dataChanged(): void;
        reset(): void;
        _tap_btn_merge(): void;
        _tap_btn_ok(): void;
        _tap_btn_gainWay(): void;
        _tap_btn_equip(): void;
    }
}
/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_role {
    class BreakDetail extends mo.gui.Dlg {
        ico_item: any;
        label_name: any;
        label_props: any;
        label_needLv: any;
        grp_needLv: any;
        btn_tupo: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _tap_btn_tupo(): void;
    }
}
/**
 * Created by Administrator on 2015/9/30.
 */
declare module g_role {
    class BreakTuPo extends mo.gui.Dlg {
        ico_item: any;
        label_name: any;
        label_props: any;
        ico_item2: any;
        label_name2: any;
        label_needLv: any;
        grp_needLv: any;
        btn_tupo: any;
        onEnter(): void;
        _tap_btn_tupo(): boolean;
        _tap_ico_item2(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module g_role {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    var roleChgEmitter: egret.Emitter;
    var baseBottomBar: g_base.BaseBottomBar;
    var baseTopRole: g_base.BaseTopRole;
    class RoleScene extends mo.gui.UIScene {
        moduleParam: IModuleParam.Role;
        show(): void;
        dtor(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_role {
    class EnemyTopRole extends mo.gui.MenuLayer {
        static ON_HERO_CHANGED: string;
        ico_hero0: g_comp.Ico_Hero;
        ico_hero1: g_comp.Ico_Hero;
        ico_hero2: g_comp.Ico_Hero;
        ico_hero3: g_comp.Ico_Hero;
        label_job: egret.gui.Label;
        label_combat: mo.gui.Label;
        img_title: egret.gui.UIAsset;
        label_nickName: any;
        _curHeroIdx: number;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        setRoleSelected(item: g_comp.Ico_Hero): void;
        onIconClick(item: g_comp.Ico_Hero): void;
        hide4thRole(hide: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_role {
    class RoleEnemyInfo extends mo.gui.Layer {
        moduleParam: IModuleParam.Enemy;
        img_border_light: egret.gui.UIAsset;
        btn_wing_light: egret.gui.Button;
        btn_no_wing: egret.gui.Button;
        btn_matrix: egret.gui.Button;
        img_redSkill: any;
        img_redMatrix: any;
        img_redWing: any;
        ico_avatar: any;
        ico_medalItem: g_comp.Ico_Medal;
        hec: gd.HeroEntityCtrl;
        topRoleLayer: EnemyTopRole;
        grp_rebirth: egret.gui.Group;
        img_rebirthNum: egret.gui.UIAsset;
        _initProp(): void;
        _heroChanged(hec: any, index: any): void;
        dtor(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _refreshRebirthGrp(): void;
        checkRedPoint(): void;
        _isWingUnlocked(): boolean;
        dataChanged(): void;
        updateEquipItems(): void;
        _tap_btn_skill(): void;
        _tap_btn_detail(): void;
        _tap_btn_matrix(): boolean;
        _tap_btn_wing_light(): boolean;
        _onEquipItemClick(item: g_comp.Equip_Item): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by admin on 16/5/3.
 */
/**
 * Created by lihex on 9/19/15.
 */
declare module g_role {
    /**
     *
     * @author
     *
     */
    class RoleWingUpgrade extends mo.gui.Dlg {
        btn_keyUpgrade: egret.gui.Button;
        btn_close: egret.gui.Button;
        labelCurreLevel: egret.gui.Label;
        labelCurreStar: egret.gui.Label;
        labelNextLevel: egret.gui.Label;
        labelFeather: egret.gui.Label;
        labelMoney: egret.gui.Label;
        ckb_common: any;
        ckb_advanced: any;
        ckb_useStone: any;
        trainType: number;
        isUseDiamond: boolean;
        _initProp(): void;
        _childrenCreated(): void;
        onExit(): void;
        _tap_btn_keyUpgrade(): void;
        _chg_ckb_common(): void;
        _chg_ckb_advanced(): void;
        _chg_ckb_useStone(): void;
        setType(type: string): void;
        setTrainType(type: number): void;
        checkCanOneKeyUpgrade(): boolean;
        _tap_btn_close(): void;
        updateWing(): void;
        getWingData(): {};
        showNeedResource(): void;
        getContNum(type: number): number;
        getTotalNeedExp(id: number, starNum: number): number;
    }
}
/**
 * Created by lihex on 2016/6/20.
 */
declare module g_role {
    class RoleBuzhen extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        posArr: any;
        selectA: any;
        selectB: any;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
        _swapPos(selectA: any, selectB: any): void;
        _tap_btn_cancel(): void;
        _tap_btn_save(): void;
    }
}
/**
 * Created by lihex on 2016/6/20.
 */
declare module g_role {
    class RoleBuzhenItem extends mo.gui.ItemRenderer {
        ico: any;
        label_num: any;
        label_name: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
