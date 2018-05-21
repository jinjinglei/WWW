/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_gift {
    /**
     *
     * @author
     *
     */
    class GiftEquip extends mo.gui.Dlg {
        hec: gd.HeroEntityCtrl;
        list_gift: any;
        _Item_list_gift: any;
        _initProp(): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_gift(): any[];
        _tap_btn_help(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2016/5/17.
 */
declare module g_gift {
    class GiftEquipCell extends mo.gui.ItemRenderer {
        label_name: any;
        label_ziZhi: any;
        label_star: any;
        ico_gift: any;
        hec: any;
        btn_equip: any;
        ico_equiped: any;
        gift: any;
        giftInfo: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_equip(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_gift {
    /**
     *
     * @author
     *
     */
    class GiftForge extends mo.gui.Dlg {
        grp_star: any;
        label_propL: any;
        label_propR: any;
        list_skill: any;
        label_level: any;
        label_ziZhi: any;
        _Item_list_skill: any;
        effect_gift: any;
        ico_gift: any;
        ico_giftWord: any;
        hec: gd.HeroEntityCtrl;
        gift: any;
        giftInfo: any;
        _initProp(): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        onGiftChanged(giftId: any, gift: any): void;
        showStar(star: number): void;
        getPropStr(propObj: any, isLeft: any): string;
        _data_list_skill(): any[];
        _tap_btn_lvUp(): void;
        _tap_btn_xiLian(): void;
        _tap_btn_upStar(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2016/5/17.
 */
declare module g_gift {
    class GiftGongMingCell extends mo.gui.ItemRenderer {
        label_name: any;
        label_effect: any;
        label_desc: any;
        ico_gift0: any;
        ico_gift1: any;
        ico_gift2: any;
        label_noAct0: any;
        label_noAct1: any;
        label_noAct2: any;
        ico_gongMingBg2: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/5/17.
 */
declare module g_gift {
    class GiftInfoCell extends mo.gui.ItemRenderer {
        ico_gift: any;
        grp_has: any;
        label_combat: any;
        label_lv: any;
        label_ziZhi: any;
        label_star: any;
        grp_no: any;
        label_desc: any;
        btn_act: any;
        btn_gain: any;
        grp_star: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        onGiftChanged(giftId: any, gift: any): void;
        _tap_btn_detail(): void;
        _tap_btn_act(): void;
        _tap_btn_gain(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_gift {
    /**
     *
     * @author
     *
     */
    class GiftLayer extends mo.gui.Layer {
        tab_str: any;
        grp_detail: any;
        label_propL: any;
        label_propR: any;
        label_fabaoProp: any;
        label_addCombat: any;
        label_numGift: any;
        label_numGongMing: any;
        label_numSkill: any;
        ico_gift: any;
        grp_list: any;
        list_giftInfo: any;
        _Item_list_giftInfo: any;
        grp_merge: any;
        list_merge: any;
        _Item_list_merge: any;
        grp_gongMing: any;
        list_gongMing: any;
        _Item_list_gongMing: any;
        hec: gd.HeroEntityCtrl;
        _initProp(): void;
        _heroChanged(hec: any): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_tab_str(): void;
        getPropStr(propObj: any, isLeft: any): string;
        _data_list_giftInfo(): any[];
        _data_list_merge(): any[];
        _data_list_gongMing(): any[];
        _tap_btn_change(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_gift {
    /**
     *
     * @author
     *
     */
    class GiftLvUp extends mo.gui.Dlg {
        label_canLvUp: any;
        label_canLvUpNext: any;
        label_cannotLvUp: any;
        label_ziZhi: any;
        label_curLv: any;
        grp_lvUp: any;
        ico_item: any;
        label_itemName: any;
        label_itemNum: any;
        ico_item1: any;
        label_itemName1: any;
        label_itemNum1: any;
        grp_item1: any;
        label_curProp: any;
        grp_next: any;
        label_nextLv: any;
        label_nextProp: any;
        effect_gift: any;
        ico_gift: any;
        ico_giftWord: any;
        label_lvUpNoLv: any;
        hec: gd.HeroEntityCtrl;
        gift: any;
        giftInfo: any;
        _initProp(): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        getPropStr(propObj: any): string;
        _tap_btn_lvUp(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _tap_btn_buyLingYun(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_gift {
    /**
     *
     * @author
     *
     */
    class GiftMerge extends mo.gui.Dlg {
        list_skill: any;
        ico_gift0: any;
        ico_gift1: any;
        label_name0: any;
        label_name1: any;
        label_lv0: any;
        label_lv1: any;
        label_no0: any;
        label_no1: any;
        _Item_list_skill: any;
        effect_gift: any;
        ico_gift: any;
        ico_giftWord: any;
        hec: gd.HeroEntityCtrl;
        giftInfo: any;
        _initProp(): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_skill(): any[];
        _tap_btn_merge(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2016/5/17.
 */
declare module g_gift {
    class GiftMergeCell extends mo.gui.ItemRenderer {
        ico_gift: any;
        label_name: any;
        label_desc: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_merge(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module g_gift {
    var roleChgEmitter: egret.Emitter;
    class GiftScene extends mo.gui.UIScene {
        show(): void;
        dtor(): void;
    }
}
/**
 * Created by Administrator on 2016/5/17.
 */
declare module g_gift {
    class GiftSkillCell extends mo.gui.ItemRenderer {
        ico_skill: any;
        label_name: any;
        label_jiHuo: any;
        label_desc: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_gift {
    /**
     *
     * @author
     *
     */
    class GiftUpStar extends mo.gui.Dlg {
        ico_item: any;
        label_itemName: any;
        label_itemNum: any;
        grp_star: any;
        list_skill: any;
        label_ziZhi: any;
        label_cannotLvUp: any;
        label_max: any;
        grp_upStar: any;
        _Item_list_skill: any;
        effect_gift: any;
        ico_gift: any;
        ico_giftWord: any;
        hec: gd.HeroEntityCtrl;
        gift: any;
        giftInfo: any;
        _initProp(): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        showStar(star: number): void;
        _data_list_skill(): any[];
        _tap_btn_upStar(): void;
        _tap_btn_reset(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _tap_btn_buyLingYun(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_gift {
    /**
     *
     * @author
     *
     */
    class GiftUpStarResult extends mo.gui.Dlg {
        label_noSkill: any;
        label_noAct: any;
        label_star: any;
        label_ziZhi: any;
        grp_skill: any;
        ico_skill: any;
        label_name: any;
        label_desc: any;
        effect_skill: any;
        _skillEfxPlayer: uiHelper.EfxPlayer;
        _initProp(): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/6/24.
 */
declare module g_gift {
    class GiftBuyLingYun extends mo.gui.Dlg {
        label_cost: any;
        label_num: any;
        img_item: any;
        label_vip: any;
        label_yuanbao: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_buy(): void;
    }
}
declare module g_gift {
    class GiftXiLian extends mo.gui.Dlg {
        label_ziZhi: any;
        grp_star: any;
        bar_process: egret.gui.ProgressBar;
        label_max: any;
        grp_xiLian: any;
        ico_item: any;
        label_itemName: any;
        label_itemNum: any;
        label_result: any;
        effect_gift: any;
        ico_gift: any;
        ico_giftWord: any;
        effect_success: any;
        _successEfxPlayer: uiHelper.EfxPlayer;
        label_cost: any;
        label_resultSafe: any;
        btn_safe: any;
        hec: gd.HeroEntityCtrl;
        gift: any;
        giftInfo: any;
        _initProp(): void;
        dtor(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        showStar(star: number): void;
        _hideTimerId: any;
        _tap_btn_xiLian(): void;
        _tab_btn_safe(): void;
        diamondChange(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _tap_btn_buyLingYun(): void;
    }
}
