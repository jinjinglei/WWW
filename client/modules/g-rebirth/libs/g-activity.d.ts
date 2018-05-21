/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class Activity7DayItem extends mo.gui.ItemRenderer {
        label_desc: any;
        ico_hasGet: any;
        btn_get: any;
        list_items: any;
        _Item_list_items: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _tap_btn_get(): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class Activity7Days extends mo.gui.Layer {
        label_title: any;
        label_date: any;
        label_desc: any;
        list_items: any;
        _Item_list_items: any;
        actItems: any;
        _initProp(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class ActivityRechargeItem extends mo.gui.ItemRenderer {
        label_desc: any;
        ico_hasGet: any;
        btn_get: any;
        list_items: any;
        _Item_list_items: any;
        ico_bg: any;
        effect_get: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _tap_btn_get(): boolean;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class ActivityRecharge extends mo.gui.Layer {
        label_title: any;
        label_date: any;
        label_desc: any;
        list_items: any;
        _Item_list_items: any;
        label_money: any;
        actItems: any;
        _initProp(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2015/10/30.
 */
declare module g_activity {
    class ActivityRedeemCode extends mo.gui.Layer {
        static DEFAULT: string;
        label_code: any;
        _initProp(): void;
        _childrenCreated(): void;
        onLabelTap(e: any): void;
        _tap_btn_code(): boolean;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class ActivityTabItem extends mo.gui.ItemRenderer {
        ico_titile: any;
        ico_red: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        checkRedPoint(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_activity {
    class SignItem extends mo.gui.ItemRenderer {
        ico_item: g_comp.Ico_Item;
        grp_center: egret.gui.Group;
        state: number;
        efx: g_comp.UIEffect;
        _initProp(): void;
        dataChanged(): void;
        getCurrentSkinState(): string;
    }
}
/**
 * Created by Administrator on 2015/11/6.
 */
declare module g_activity {
    class ActivitySign extends mo.gui.Layer {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_month: egret.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
        _refresh(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_activity {
    class ActivityDlg extends mo.gui.Dlg {
        list_activitys: any;
        _Item_list_activitys: any;
        label_empty: any;
        container: any;
        _comps: Array<any>;
        _allExActivitys: any;
        _curExActivity: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _hideAllComp(): void;
        reset(): void;
        goTab(exActivity: any): void;
        _data_list_activitys(): any[];
        _click_list_activitys(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class FiveDay extends mo.gui.Dlg {
        label_date: any;
        list_items: any;
        _Item_list_items: any;
        _targets: Array<any>;
        _initProp(): void;
        _childrenCreated(): void;
        reset(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
        _click_list_items(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class FiveItem extends mo.gui.ItemRenderer {
        ico_day: egret.gui.UIAsset;
        ico_title: egret.gui.UIAsset;
        img_red: egret.gui.UIAsset;
        img_selected: egret.gui.UIAsset;
        label_date: mo.gui.Label;
        label_d: mo.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class FiveRankItem extends mo.gui.ItemRenderer {
        ico_day: egret.gui.UIAsset;
        ico_title: egret.gui.UIAsset;
        img_done: egret.gui.UIAsset;
        ico_item: g_comp.Ico_Item;
        label_lv: any;
        label_name: any;
        label_combat: any;
        label_rankType: any;
        label_empty: any;
        ico_head: any;
        ico_rank: any;
        static rankType: string[];
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class FiveDetail extends mo.gui.Dlg {
        label_title: any;
        label_date: any;
        label_desc: any;
        list_ranks: any;
        list_items: any;
        _Item_list_items: any;
        _Item_list_ranks: any;
        _targets: Array<any>;
        ico_title: any;
        title_day: any;
        img_unFinished: any;
        btn_done: any;
        btn_outdate: any;
        btn_get: any;
        img_wczb: any;
        img_rank: any;
        label_d: any;
        img_red: any;
        _initProp(): void;
        dataChanged(): void;
        _hideAll(): void;
        _data_list_items(): any[];
        _data_list_ranks(): any[];
        _tap_btn_get(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class NewFiveDay extends mo.gui.Dlg {
        label_date: any;
        list_items: any;
        _Item_list_items: any;
        _targets: Array<any>;
        _initProp(): void;
        _childrenCreated(): void;
        reset(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
        _click_list_items(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class NewFiveItem extends mo.gui.ItemRenderer {
        ico_day: egret.gui.UIAsset;
        ico_title: egret.gui.UIAsset;
        img_red: egret.gui.UIAsset;
        img_selected: egret.gui.UIAsset;
        label_date: mo.gui.Label;
        label_d: mo.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class NewFiveRankItem extends mo.gui.ItemRenderer {
        ico_day: egret.gui.UIAsset;
        ico_title: egret.gui.UIAsset;
        img_done: egret.gui.UIAsset;
        ico_item: g_comp.Ico_Item;
        label_lv: any;
        label_name: any;
        label_combat: any;
        label_rankType: any;
        label_empty: any;
        ico_head: any;
        ico_rank: any;
        static rankType: string[];
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class NewFiveDetail extends mo.gui.Dlg {
        label_title: any;
        label_date: any;
        label_desc: any;
        list_ranks: any;
        list_items: any;
        _Item_list_items: any;
        _Item_list_ranks: any;
        _targets: Array<any>;
        ico_title: any;
        title_day: any;
        img_unFinished: any;
        btn_done: any;
        btn_outdate: any;
        btn_get: any;
        img_wczb: any;
        img_rank: any;
        label_d: any;
        img_red: any;
        _initProp(): void;
        dataChanged(): void;
        _hideAll(): void;
        _data_list_items(): any[];
        _data_list_ranks(): any[];
        _tap_btn_get(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
    }
}
/**
 * Created by Administrator on 2015/12/19.
 */
declare module g_activity {
    class ActivityMysteryShop extends mo.gui.Layer {
        label_curScore: any;
        label_desc: any;
        label_title: any;
        label_date: any;
        efx_hit2: g_comp.UIEffect;
        _hitEfxPlayer: uiHelper.EfxPlayer;
        img_title_bg: any;
        _childrenCreated(): void;
        reset(): void;
        dataChanged(): void;
        _tap_btn_exchange0(): void;
        _tap_btn_exchange1(): void;
        _tap_btn_exchange2(): void;
        _tap_btn_buy0(): void;
        _tap_btn_buy1(): void;
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class ActivitySingleRchg extends mo.gui.Layer {
        label_title: any;
        label_date: any;
        label_desc: any;
        list_items: any;
        _Item_list_items: any;
        label_money: any;
        actItems: any;
        _initProp(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2015/10/8.
 */
declare module g_activity {
    class ActivitySingleRchgItem extends mo.gui.ItemRenderer {
        label_desc: any;
        ico_hasGet: any;
        btn_get: any;
        list_items: any;
        _Item_list_items: any;
        ico_bg: any;
        effect_get: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_activity {
    class FuliDlg extends mo.gui.Dlg {
        list_activitys: any;
        _Item_list_activitys: any;
        label_empty: any;
        container: any;
        _comps: Array<any>;
        _allExActivitys: any;
        _curExActivity: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _hideAllComp(): void;
        reset(): void;
        goTab(exActivity: any): void;
        _data_list_activitys(): any[];
        _click_list_activitys(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Administrator on 2016/6/4.
 */
declare module g_activity {
    class ActivityAppExchangeCell extends mo.gui.ItemRenderer {
        ico_item: any;
        label_score: any;
        dataChanged(): void;
        _tap_btn_exchange(): void;
    }
}
/**
 * Created by Administrator on 2016/6/4.
 */
declare module g_activity {
    class ActivityAppMysteryExchangeDlg extends mo.gui.Dlg {
        label_score: any;
        _Item_list_items: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityAppMysteryShop extends mo.gui.Dlg {
        label_curScore: any;
        label_yuanbao: any;
        head: g_comp.ActivityItem;
        label_activity_desc: any;
        label_activity_time: any;
        efx_hit2: g_comp.UIEffect;
        _hitEfxPlayer: uiHelper.EfxPlayer;
        _childrenCreated(): void;
        reset(): void;
        dataChanged(): void;
        _tap_btn_exchange0(): void;
        _tap_btn_exchange1(): void;
        _tap_btn_exchange2(): void;
        _tap_btn_buy0(): void;
        _tap_btn_buy1(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/2/23.
 */
declare module g_activity {
    class ActivityNewCenter extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
        reset(): void;
        _click_list_items(event: egret.gui.ListEvent): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/2/23.
 */
declare module g_activity {
    class ActivityNewCenterCell extends mo.gui.ItemRenderer {
        img_bg: egret.gui.UIAsset;
        img_title: egret.gui.UIAsset;
        img_desc: egret.gui.UIAsset;
        lbl_time: egret.gui.Label;
        img_state: egret.gui.UIAsset;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        setIcon(iconStr: any, desIconStr: any): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewSingleRchg extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_activity_desc: egret.gui.Label;
        actItems: any;
        _initProp(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewSingleRchgItem extends mo.gui.ItemRenderer {
        label_desc: any;
        list_items: any;
        _Item_list_items: any;
        ico_bg: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewEverydayRchg extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_activity_desc: egret.gui.Label;
        label_cost_have: egret.gui.Label;
        label_activity_charged: egret.gui.Label;
        actItems: any;
        _initProp(): void;
        rechargeSuccess(): void;
        checkRedPoint(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_charge(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewLimitBuy extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_activity_desc: egret.gui.Label;
        label_yuanbao_cost: egret.gui.Label;
        label_yuanbao_left: egret.gui.Label;
        label_buy_count: egret.gui.Label;
        label_vipHint: egret.gui.Label;
        ico_hasGet: egret.gui.UIAsset;
        ico_have_icon: egret.gui.UIAsset;
        ico_cost_icon: egret.gui.UIAsset;
        btn_buy: egret.gui.Button;
        actItems: any;
        _initProp(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_buy(): void;
        _click_list_items(event: egret.gui.ListEvent): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewLuckyTalos extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_desc: egret.gui.Label;
        label_jinbi: egret.gui.Label;
        label_yuanbao: egret.gui.Label;
        grp_cards: egret.gui.Group;
        idTime1: any;
        idTime2: any;
        clickTime: any;
        actItems: any;
        _aniStep: any;
        _aniIdx: any;
        _selectedIndex: any;
        _gotCards: any;
        haveClick: boolean;
        btn_detail: any;
        detailActItems: any;
        _initProp(): void;
        reset(): void;
        dataChanged(): void;
        _updateGoldInfo(): void;
        _data_list_items(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
        clickCard(index: any): void;
        dealClickTime(): void;
        clickFlip(index: any): void;
        initCardsWithIds(ids: any, idx: any): void;
        _runAnimation(): void;
        _goNext(): void;
        _showItemAtIndex(item: any, idx: any, cb?: any): void;
        _hideItemAtIndex(idx: any): void;
        _tap_btn_card0(): void;
        _tap_btn_card1(): void;
        _tap_btn_card2(): void;
        _tap_btn_card3(): void;
        _tap_btn_flipped0(): void;
        _tap_btn_flipped1(): void;
        _tap_btn_flipped2(): void;
        _tap_btn_flipped3(): void;
        _tap_btn_container(): void;
        _tap_btn_help(): void;
        _tap_btn_detail(): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewMysteryShop extends mo.gui.Dlg {
        label_curScore: any;
        label_yuanbao: any;
        head: g_comp.ActivityItem;
        label_activity_desc: any;
        label_activity_time: any;
        efx_hit2: g_comp.UIEffect;
        _hitEfxPlayer: uiHelper.EfxPlayer;
        _childrenCreated(): void;
        reset(): void;
        dataChanged(): void;
        _tap_btn_exchange0(): void;
        _tap_btn_exchange1(): void;
        _tap_btn_exchange2(): void;
        _tap_btn_buy0(): void;
        _tap_btn_buy1(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewRchg extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_activity_desc: egret.gui.Label;
        label_all_charge: egret.gui.Label;
        actItems: any;
        _initProp(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewRchgItem extends mo.gui.ItemRenderer {
        label_desc: any;
        ico_hasGet: any;
        btn_get: any;
        list_items: any;
        _Item_list_items: any;
        ico_bg: any;
        ico_sel: any;
        effect_get: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _tap_btn_get(): boolean;
    }
}
/**
 * Created by admin on 16/2/26.
 */
declare module g_activity {
    class ActivityNewEverydayRchgItem extends mo.gui.ItemRenderer {
        label_desc: any;
        list_items: any;
        _Item_list_items: any;
        ico_bg_can: any;
        ico_bg_got: any;
        btn_get: any;
        ico_got: any;
        ico_unreach: any;
        act_items: any[];
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _data_list_items(): any[];
        _tap_btn_get(): void;
    }
}
/**
 * Created by admin on 16/4/7.
 */
declare module g_activity {
    class ActivityNewRebate extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_activity_desc: egret.gui.Label;
        label_all_charge: egret.gui.Label;
        actItems: any;
        _initProp(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/4/7.
 */
declare module g_activity {
    class ActivityNewRebateItem extends mo.gui.ItemRenderer {
        label_desc: any;
        label_title: any;
        ico_hasGet: any;
        btn_get: any;
        list_items: any;
        _Item_list_items: any;
        ico_bg: any;
        ico_sel: any;
        ico_hint: any;
        effect_get: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _tap_btn_get(): boolean;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewTotalRchgOneDay extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_activity_desc: egret.gui.Label;
        label_all_charge: egret.gui.Label;
        actItems: any;
        label_left_time: any;
        _initProp(): void;
        refresh(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
        _timeInterval(): void;
        _timeFinish(): void;
        timeTrigger: any;
        hideLeftMillisecond: number;
        setCDTime(second: any): void;
        cleanCDTime(): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewTotalRchgOneDayItem extends mo.gui.ItemRenderer {
        label_desc: any;
        ico_hasGet: any;
        ico_unfinished: any;
        ico_finished: any;
        btn_get: any;
        list_items: any;
        _Item_list_items: any;
        ico_bg: any;
        ico_sel: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewCollectCharacter extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_activity_desc: egret.gui.Label;
        label_cost_have: egret.gui.Label;
        actItems: any;
        btn_source: egret.gui.Button;
        subType: any;
        _initProp(): void;
        checkRedPoint(): void;
        updateActivity(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
        _tap_btn_source(): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
declare module g_activity {
    class ActivityNewCollectCharacterItem extends mo.gui.ItemRenderer {
        label_desc: any;
        label_count: any;
        label_collected: any;
        list_items: any;
        _Item_list_items: any;
        ico_bg: any;
        btn_get: any;
        ico_got: any;
        ico_unreach: any;
        act_items: any[];
        ico_item: any;
        hasCount: any;
        group_list: any;
        group_reward: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _data_list_items(): any[];
        _tap_btn_get(): boolean;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_activity {
    class ActivityNewCollectCharacterBaseItem extends mo.gui.ItemRenderer {
        ico_item: g_comp.Ico_Item;
        rect_touch: egret.gui.Rect;
        tapShowDetail: boolean;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_rect_touch(event: egret.TouchEvent): void;
        setLineWidth(width: any): void;
        getTextHeight(): number;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewVplan extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_cost_have: egret.gui.Label;
        actItems: any;
        btn_source: egret.gui.Button;
        medalType: any;
        _initProp(): void;
        _childrenCreated(): void;
        checkRedPoint(): void;
        updateActivity(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_help(): void;
        _tap_btn_source(): void;
        getMedalValue(id: any): number;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
declare module g_activity {
    class ActivityNewVplanItem extends mo.gui.ItemRenderer {
        ico_bg: any;
        label_desc: any;
        list_items: any;
        ico_hasGet: any;
        effect_get: any;
        btn_get: any;
        act_items: any;
        _Item_list_items: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        getMedalValue(id: any): number;
        getDescTxt(data: any): string;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _data_list_items(): any[];
        _tap_btn_get(): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewDetail extends mo.gui.Dlg {
        list_rewards: any;
        _Item_list_rewards: any;
        dataArr: any;
        label_red: any;
        actItems: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_rewards(): any[];
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewMaJiangTalos extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        list_itemsOther: any;
        _Item_list_itemsOther: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_desc: egret.gui.Label;
        label_jinbi: egret.gui.Label;
        label_yuanbao: egret.gui.Label;
        grp_cards: egret.gui.Group;
        idTime1: any;
        idTime2: any;
        clickTime: any;
        actItems: any;
        _aniStep: any;
        _aniIdx: any;
        _selectedIndex: any;
        _gotCards: any;
        haveClick: boolean;
        btn_detail: any;
        maxCardNum: any;
        extrItems: any;
        maxLuckValue: any;
        label_activity_desc2: any;
        progress_luck: any;
        helpId: any;
        detailActItems: any;
        detailExtrItems: any;
        _initProp(): void;
        _childrenCreated(): void;
        reset(): void;
        dataChanged(): void;
        setItemIcon(iconItem: any, spItemId: any): void;
        _updateGoldInfo(): void;
        _data_list_items(): any[];
        _data_list_itemsOther(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
        _click_list_itemsOther(event: egret.gui.ListEvent): void;
        clickCard(index: any): void;
        dealClickTime(): void;
        clickFlip(index: any): void;
        initCardsWithIds(ids: any, idx: any): void;
        _runAnimation(): void;
        _goNext(): void;
        _showItemAtIndex(item: any, idx: any, cb?: any): void;
        _hideItemAtIndex(idx: any): void;
        _tap_btn_card0(): void;
        _tap_btn_card1(): void;
        _tap_btn_card2(): void;
        _tap_btn_card3(): void;
        _tap_btn_card4(): void;
        _tap_btn_card5(): void;
        _tap_btn_flipped0(): void;
        _tap_btn_flipped1(): void;
        _tap_btn_flipped2(): void;
        _tap_btn_flipped3(): void;
        _tap_btn_flipped4(): void;
        _tap_btn_flipped5(): void;
        _tap_btn_container(): void;
        _tap_btn_help(): void;
        _tap_btn_detail(): void;
        setLuck(curreLuck: any): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
declare module g_activity {
    class ActivityNewAskChoiceItem extends mo.gui.ItemRenderer {
        ckb_choice: any;
        label_count: any;
        survey_type: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _chg_ckb_choice(): void;
        changeSelect(isSelected: any): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
declare module g_activity {
    class ActivityNewAskItem extends mo.gui.ItemRenderer {
        list_items: any;
        _Item_list_items: any;
        label_title: any;
        survey_type: any;
        group_content: any;
        optionArr: any;
        dataArr: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        changOption(index: any, select: any): void;
        getIndexInArr(id: any): number;
        changeOtherSelect(index: any): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewAsk extends mo.gui.Dlg {
        list_items: any;
        list_questItems: any;
        _Item_list_items: any;
        _Item_list_questItems: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_time: egret.gui.Label;
        label_cost_have: egret.gui.Label;
        actItems: any;
        btn_source: egret.gui.Button;
        medalType: any;
        questionArr: any;
        btn_sure: any;
        questMap: any;
        btn_detail: any;
        img_achive: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _data_list_questItems(): any[];
        _tap_btn_detail(): void;
        _tap_btn_help(): void;
        _tap_btn_sure(): void;
        _click_list_items(event: egret.gui.ListEvent): void;
        changOption(id: any, dataArr: any): void;
        checkAskAllQuest(questIdArr: any): boolean;
        testData(): void;
        getQuestSelect(id: any, index: any): boolean;
        setAskState(haveAsk: any): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewNotice extends mo.gui.Dlg {
        btn_help: egret.gui.Button;
        group_content: any;
        head: any;
        subType: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewNoticeSimple extends mo.gui.Layer {
        label_text: egret.gui.Label;
        ico_head: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewNoticeReward extends mo.gui.Layer {
        btn_help: egret.gui.Button;
        list_rewards: any;
        _Item_list_rewards: any;
        label_activity_time: any;
        label_text: any;
        ico_head: any;
        actItems: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_rewards(): any[];
        _click_list_rewards(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewCardTalos extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        list_itemsOther: any;
        _Item_list_itemsOther: any;
        head: g_comp.ActivityItem;
        btn_help: egret.gui.Button;
        label_activity_desc: egret.gui.Label;
        label_jinbi: egret.gui.Label;
        label_yuanbao: egret.gui.Label;
        grp_cards: egret.gui.Group;
        actItems: any;
        btn_detail: any;
        extrItems: any;
        maxLuckValue: any;
        label_activity_desc2: any;
        progress_luck: any;
        helpId: any;
        detailActItems: any;
        detailExtrItems: any;
        btn_container: any;
        _initProp(): void;
        _childrenCreated(): void;
        reset(): void;
        dataChanged(): void;
        updateInfo(): void;
        _updateGoldInfo(): void;
        _data_list_items(): any[];
        _data_list_itemsOther(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
        _click_list_itemsOther(event: egret.gui.ListEvent): void;
        _tap_btn_help(): void;
        _tap_btn_detail(): void;
        setLuck(curreLuck: any): void;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewCardGroup extends mo.gui.Layer {
        label_text: egret.gui.Label;
        group_cardList: any;
        cardItemArr: any;
        idTime1: any;
        idTime2: any;
        clickTime: any;
        actItems: any;
        _aniStep: any;
        _aniIdx: any;
        _selectedIndex: any;
        _gotCards: any;
        haveClick: boolean;
        maxCardNum: any;
        maxLuckValue: any;
        activityId: any;
        root: any;
        cost: any;
        costItemId: any;
        label_count: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        updateItemInfo(): void;
        clickCard(index: any): void;
        dealClickTime(): void;
        clickFlip(index: any): void;
        initCardsWithIds(ids: any, idx: any): void;
        _runAnimation(): void;
        _goNext(): void;
        _showItemAtIndex(item: any, idx: any): void;
        _hideItemAtIndex(idx: any): void;
        getAskItemByIndex(index: any): any;
    }
}
/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewCardItem extends mo.gui.Layer {
        label_text: egret.gui.Label;
        index: number;
        ico_head: any;
        root: any;
        group_free: any;
        group_money: any;
        label_freenum: any;
        ico_item: any;
        rect_textBg: any;
        btn_flipped: any;
        group_card: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        setIndex(index: any): void;
        _tap_group_card(): void;
        _tap_btn_flipped(): void;
        setMoneyInfo(data: any): void;
        setItemIcon(iconItem: any, spItemId: any): void;
        showItem(item: any): void;
        hideItem(): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_activity {
    class ActivityNewDayLimitBuy extends ActivityNewLimitBuy {
        _initProp(): void;
        dataChanged(): void;
        _tap_btn_buy(): void;
    }
}
