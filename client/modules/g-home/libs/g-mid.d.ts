/**
 * Created by Administrator on 2015/11/2.
 */
declare module g_mid {
    class BindPhoneSucc extends mo.gui.Dlg {
        _tap_btn_ok(): void;
    }
}
/**
 * Created by Administrator on 2015/11/2.
 */
declare module g_mid {
    class BindPhone extends mo.gui.Dlg {
        grp_items: any;
        _initProp(): void;
        _tap_btn_goBind(): void;
        _childrenCreated(): void;
    }
}
/**
 * Created by Administrator on 2015/11/3.
 */
declare module g_mid {
    class SaveGame extends mo.gui.Dlg {
        btn_save: any;
        btn_get: any;
        list_items: any;
        _Item_list_items: any;
        img_bg: egret.gui.UIAsset;
        showType: number;
        position: number;
        _initProp(): void;
        showAndType(type: number, position: number): mo.gui.Dlg;
        _childrenCreated(): void;
        onEnter(): void;
        _tap_btn_save(): void;
        _tap_btn_get(): void;
        _data_list_items(): any[];
        _initItem_list_items(cell: g_base.BaseItemCell): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    var showChatTime: number;
    var lastChatStr: string;
    var lastChatId: number;
    var showLabaTime: number;
    var lastLabaId: number;
    var lastLabaStr: string;
    class BaseMidBar extends mo.gui.MenuLayer {
        moduleParam: IModuleParam.IModuleParam;
        chatDelayId: number;
        labaDelayId: number;
        grp_all: any;
        grp_chat: any;
        grp_laba: any;
        label_chatContent: any;
        label_chatContent_laba: any;
        canShowChat: any;
        normalChatShowTime: number;
        _initProp(): void;
        _hide(index: any): void;
        _show(index: any): void;
        _childrenCreated(): void;
        _tap_ico_chat(): void;
        _tap_ico_laba(): void;
        onChatUpdate(data: any): void;
        _showNormalMsg(data: any): void;
        _showLabaMsg(data: any): void;
        _showMsgAndDismiss(type: any, msg: any, time: any): void;
        onAnnounceUpdate(data: any): void;
        setChatVisible(value: any): void;
        onSysNoticeUpdate(data: any): void;
    }
}
/**
 * Created by Administrator on 2015/10/6.
 */
declare module g_mid {
    class RechargeItem extends mo.gui.ItemRenderer {
        label_yb: any;
        label_cost: any;
        label_yb2: any;
        btn_rmb: any;
        imgEventIcon: any;
        ico_recharge: any;
        rechargeId: any;
        payId: any;
        goodsId: any;
        cost: any;
        ico_remai: any;
        ico_tuijian: any;
        ico_3bei: any;
        root: any;
        qq: any;
        normal: any;
        labQQStar: any;
        getPrice(): string;
        dataChanged(): void;
    }
}
/** hd 匹配玩吧skin的修改
 */
declare module g_mid {
    class RechargeItemWanba extends RechargeItem {
        _initProp(): void;
        getPrice(): string;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    class Recharge extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_vip: any;
        label_nextRecharge: any;
        label_nextVip: any;
        bar_recharge: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _click_list_items(e: egret.gui.ListEvent): void;
        _data_list_items(): any[];
        _tap_btn_lookVip(): void;
    }
}
/**
 * Created by Administrator on 2015/10/7.
 */
declare module g_mid {
    class Vip extends mo.gui.Dlg {
        moduleParam: IModuleParam.Vip;
        label_vipInfo: any;
        label_showVip: any;
        label_showVip_liBao: any;
        label_vipCost: any;
        curVip: any;
        list_items: any;
        _Item_list_items: any;
        vipItems: any[];
        label_vip: any;
        label_nextRecharge: any;
        label_nextVip: any;
        bar_recharge: any;
        grp_next: any;
        _initProp(): void;
        onEnter(): void;
        reset(): void;
        showVipInfo(): void;
        _data_list_items(): any[];
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _tap_btn_lookRecharge(): void;
        _tap_btn_next(): void;
        _tap_btn_prev(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    class FirstRecharge extends mo.gui.Dlg {
        btn_get: egret.gui.Button;
        grp_btns: egret.gui.Group;
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        _data_list_items(): any[];
        _childrenCreated(): void;
        _setItemInfo(group: egret.gui.Group, info: any): void;
        _tap_btn_get(): void;
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _tap_btn_item0(): void;
        _tap_btn_item1(): void;
        _tap_btn_item2(): void;
        _tap_btn_item3(): void;
        _doRecharge(item: any): void;
    }
}
declare module g_mid {
    class FirstRechargeWanba extends mo.gui.Dlg {
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_mid {
    class ChatItem extends mo.gui.ItemRenderer {
        label_content: any;
        grp_user: any;
        label_user_name: any;
        label_user_msg: any;
        img_user_title: any;
        grp_user_title: any;
        ico_laba: any;
        _initProp(): void;
        _childrenCreated(): void;
        _switchChatItemStyle(type: any): void;
        _setMedalTitle(medalId: any): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    class Chat extends mo.gui.Dlg {
        label_input: any;
        label_contentSys: any;
        scrollerSys: egret.gui.Scroller;
        tab_channel: egret.gui.TabBar;
        tabLastSelectIndex: any;
        chatType: any;
        label_laba_left: any;
        btn_setting: any;
        btn_laba: any;
        grp_chat: any;
        list_chat: egret.gui.List;
        _Item_list_chat: any;
        isFollowNormal: boolean;
        isUseLaba: boolean;
        isBottom: boolean;
        isScrollChanged: any;
        _initProp(): void;
        _data_list_chat(): any[];
        _childrenCreated(): void;
        _tap_tab_channel(): boolean;
        _switchChannel(type: any): void;
        guildChanged(): void;
        modeChanged(): void;
        onEnter(): void;
        onExit(): void;
        onChatImpUpdate(data: any): void;
        onChatUpdate(type: any, data: any): void;
        onScrollChanged(): void;
        clearChatImp(): void;
        _tap_btn_send(): void;
        _tap_btn_laba(): boolean;
        _sendLabaMsg(txt: any): void;
        _refreshLabaCount(): void;
        _tap_btn_setting(): void;
    }
}
/**
 * Created by admin on 16/4/10.
 */
declare module g_mid {
    class ChatSetting extends mo.gui.Dlg {
        ckb_vip: any;
        ckb_laba: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        onExit(): void;
        _chg_ckb_vip(): void;
        _chg_ckb_laba(): boolean;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    class BugFeedBack extends mo.gui.Dlg {
        label_qq: any;
        _childrenCreated(): void;
        onEnter(): void;
        _tap_btn_add(): void;
    }
}
declare module g_mid {
    class BugChat extends mo.gui.Dlg {
        label_input: any;
        label_content: any;
        label_openid: any;
        label_weburl: any;
        img_pctips: any;
        btn_bbs: any;
        scroller: egret.gui.Scroller;
        _initProp(): void;
        onEnter(): void;
        onExit(): void;
        onChatUpdate(data: any[]): void;
        clearChat(): void;
        _tap_btn_send(): void;
        _tap_btn_bbs(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    class HomeBottomBar extends mo.gui.MenuLayer {
        moduleParam: IModuleParam.IModuleParam;
        grp_bottom: egret.gui.Group;
        btn_desktop: g_comp.EfxAsset;
        btn_desktop_showType: any;
        btn_bug: egret.gui.Button;
        btn_mail: g_comp.EfxAsset;
        btn_chat: egret.gui.Button;
        btn_notice: egret.gui.Button;
        btn_chuanchen: any;
        btn_bindPhone: any;
        redpoint_bugchat: any;
        _initProp(): void;
        _childrenCreated(): void;
        _checkRed(): void;
        _bugChatRed(): void;
        bugChat: any;
        _tap_btn_bug(): void;
        _tap_btn_mail(): void;
        _tap_btn_chuanchen(): void;
        _tap_btn_notice(): void;
        _tap_btn_bindPhone(): void;
        _tap_btn_desktop(): void;
        _update_bindPhone(): void;
        _update_desktop(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    class FightBottomBar extends mo.gui.MenuLayer {
        moduleParam: IModuleParam.IModuleParam;
        grp_bottom: egret.gui.Group;
        btn_desktop: g_comp.EfxAsset;
        btn_desktop_showType: any;
        btn_resolve: g_comp.EfxAsset;
        btn_chat: egret.gui.Button;
        btn_unlockRole: g_comp.EfxAsset;
        btn_wing: g_comp.EfxAsset;
        btn_practice: g_comp.EfxAsset;
        efx_tulong: g_comp.UIEffect;
        btn_tulong: egret.gui.Group;
        btn_rebirth: egret.gui.Group;
        _initProp(): void;
        _childrenCreated(): void;
        onCallHero(): void;
        _checkRed(): void;
        _tap_btn_unlockRole(): void;
        _tap_btn_wing(): void;
        _tap_btn_resolve(): void;
        _tap_btn_practice(): void;
        _tap_btn_chat(): void;
        _tap_btn_tulong(): void;
        _upTuLongBtn(): void;
        _tap_btn_rebirth(): void;
        _upRebirthBtn(): void;
        _tap_btn_desktop(): void;
        _update_desktop(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    class HomeMidBar extends mo.gui.MenuLayer {
        moduleParam: IModuleParam.IModuleParam;
        btn_task: mo.gui.UIAsset;
        task_red: mo.gui.UIAsset;
        btn_print: g_comp.EfxAsset;
        btn_recharge: g_comp.EfxAsset;
        btn_fuli: egret.gui.UIAsset;
        fuli_red: egret.gui.UIAsset;
        btn_rank: g_comp.EfxAsset;
        btn_custom: g_comp.EfxAsset;
        btn_heart: g_comp.EfxAsset;
        btn_kings_fight: g_comp.EfxAsset;
        exp_red: egret.gui.UIAsset;
        _initProp(): void;
        _childrenCreated(): void;
        _checkRed(): void;
        _updateKingsFight(): void;
        _tap_btn_kings_fight(): void;
        _tap_btn_task(): void;
        _tap_btn_print(): void;
        _tap_btn_heart(): void;
        _tap_btn_recharge(): void;
        _tap_btn_fuli(): void;
        _tap_btn_expBox(): void;
        _tap_btn_custom(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    class FightMidBar extends mo.gui.MenuLayer {
        moduleParam: IModuleParam.IModuleParam;
        rank_red: mo.gui.UIAsset;
        btn_activity: g_comp.EfxAsset;
        btn_recharge: g_comp.EfxAsset;
        btn_five: g_comp.EfxAsset;
        grp_fiveDay: egret.gui.Group;
        grp_treasure: egret.gui.Group;
        grp_activity: egret.gui.Group;
        btn_first: g_comp.EfxAsset;
        btn_treasure: g_comp.EfxAsset;
        btn_rank: g_comp.EfxAsset;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _upTreasureBtn(): void;
        _upFirstBtn(): void;
        _upFiveDayBtn(): void;
        _upActivityEntry(): void;
        _checkRed(): void;
        _tap_btn_activity(): void;
        _tap_btn_recharge(): void;
        _tap_btn_first(): void;
        _tap_btn_treasure(): void;
        _tap_ico_chat(): void;
        _tap_btn_rank(): void;
        _tap_btn_redPacket(): void;
        _tap_btn_five(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    class TuLong extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_month: egret.gui.Label;
        grp_equip0: egret.gui.Group;
        grp_equip1: egret.gui.Group;
        grp_equip2: egret.gui.Group;
        grp_recharge: egret.gui.Group;
        label_vip: any;
        bar_recharge: any;
        _rechargeId: any;
        _initProp(): void;
        _childrenCreated(): void;
        _setItemInfo(group: egret.gui.Group, info: any): void;
        _data_list_items(): any[];
        _initItem_list_items(cell: g_base.BaseItemCell): void;
        _setEquipInfo(idx: any): void;
        /**
         * 获取升到curVip的下一级vip所需经验
         * @param curVip
         * @returns {any}
         */
        getNextVipScore(curVip: any): any;
        _tap_grp_recharge(): void;
        _doRecharge(item: any): void;
    }
}
declare module g_mid {
    class TuLongWanba extends mo.gui.Dlg {
    }
}
declare module g_mid {
    class FriendBreakDialog extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        sk_null: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        reloadData(): boolean;
        _data_list_items(): any[];
        private _loadingNextPage;
        private _cbScrolled(e);
        _click_list_items(e: egret.gui.ListEvent): void;
    }
}
declare module g_mid {
    class FriendDialog extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_stat: any;
        label_value: any;
        sk_null: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        reloadData(): boolean;
        _data_list_items(): any[];
        private _loadingNextPage;
        private _cbScrolled(e);
        _tap_btn_reinvite(): void;
        _tap_btn_get(): void;
        _tap_btn_help(): void;
        _tap_btn_break(): void;
        static getLastId(items: any): number;
        static Open(): void;
        static Invite(): void;
    }
}
declare module g_mid {
    class FriendFirstInvite extends mo.gui.Dlg {
        label_content: any;
        btn_invite: any;
        _childrenCreated(): void;
        _tap_btn_invite(): void;
    }
}
declare module g_mid {
    class FriendListItem extends mo.gui.ItemRenderer {
        label_vip: any;
        label_who: any;
        label_value: any;
        _initProp(): void;
        dataChanged(): void;
    }
}
declare module g_mid {
    class FriendMsgAlert extends mo.gui.Dlg {
        label_message: any;
        container: any;
        _tap_btn_cancel(): void;
        dataChanged(): void;
        _tap_btn_confirm(): void;
    }
}
