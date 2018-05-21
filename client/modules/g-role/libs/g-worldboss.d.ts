/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_worldboss {
    /**
     *
     * @author
     *
     */
    class BossWar extends mo.gui.Dlg {
        img_worldBoss: any;
        img_guildBoss: any;
        img_lmtBoss: any;
        label_wboss_fighting: any;
        label_gboss_fighting: any;
        label_lmtboss_fighting: any;
        _initProp(): void;
        _childrenCreated(): void;
        onWorldBossOpenChanged(): void;
        _tap_img_lmtBoss(): void;
        _tap_img_guildBoss(): void;
        _tap_img_worldBoss(): void;
        _tap_btn_resBack(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_worldboss {
    /**
     *
     * @author
     *
     */
    class BossExtraCost extends mo.gui.Dlg {
        grp_res0: egret.gui.Group;
        grp_res1: egret.gui.Group;
        grp_extra_res: egret.gui.Group;
        label_call_type: egret.gui.Label;
        btn_call: egret.gui.Button;
        btn_lock_call: egret.gui.Button;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_call(): void;
        _tap_btn_lock_call(): void;
    }
}
/**
 * Created by lihex on 3/7/16.
 */
declare module g_worldboss {
    class WBossRewardItem extends mo.gui.ItemRenderer {
        grp_items: egret.gui.Group;
        label_index: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/12/22.
 */
declare module g_worldboss {
    class WBossReward extends mo.gui.Dlg {
        moduleParam: IModuleParam.WorldBoss;
        grp_lastAttkItems: egret.gui.Group;
        label_hurt: egret.gui.Label;
        list_items: egret.gui.List;
        _Item_list_items: any;
        list_failItems: egret.gui.List;
        _Item_list_failItems: any;
        tab_btn: any;
        grp_fail: any;
        grp_win: any;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_tab_btn(): void;
        _tap_btn_back(): void;
        _tap_btn_help(): void;
        _data_list_items(): any[];
        _data_list_failItems(): any[];
    }
}
/**
 * Created by Administrator on 2015/12/28.
 */
declare module g_worldboss {
    class WBossCell extends mo.gui.ItemRenderer {
        label_fightLeftTime: mo.gui.Label;
        label_challenge_time: egret.gui.Label;
        img_killed: egret.gui.UIAsset;
        label_settlement: egret.gui.Label;
        label_left_time: egret.gui.Label;
        label_name: egret.gui.Label;
        img_boss: egret.gui.UIAsset;
        img_selected: egret.gui.UIAsset;
        img_highlight: egret.gui.UIAsset;
        img_limit: egret.gui.UIAsset;
        img_money: egret.gui.UIAsset;
        img_bg: egret.gui.UIAsset;
        img_dark_bg: egret.gui.UIAsset;
        _curCountdownLabel: any;
        btn_go: egret.gui.Button;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _setMonsterInfo(bossId: any): void;
        onExit(): void;
        _tap_btn_go(): void;
        timeTrigger: any;
        resetCdTimeView(leftMillisecond: any): void;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by Administrator on 2016/1/9.
 */
declare module g_worldboss {
    class WBossList extends mo.gui.Dlg {
        label_call_time: mo.gui.Label;
        list_call: egret.gui.List;
        _Item_list_call: any;
        _initProp(): void;
        _childrenCreated(): void;
        _refreshBossState(): void;
        _tap_btn_help(): void;
        _data_list_call(): any[];
        _click_list_call(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by lihex on 3/7/16.
 */
declare module g_worldboss {
    class BossResBackItem extends mo.gui.ItemRenderer {
        grp_items: any;
        grp_res: any;
        label_name: any;
        btn_get: any;
        ico_hasGet: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_worldboss {
    /**
     *
     * @author
     *
     */
    class BossResBack extends mo.gui.Dlg {
        list_itmes: egret.gui.List;
        _Item_list_itmes: any;
        img_empty: any;
        img_getAll: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_itmes(): any[];
    }
}
/**
 * Created by Administrator on 2015/12/28.
 */
declare module g_worldboss {
    class GuildBossFightingCell extends mo.gui.ItemRenderer {
        label_left_time: egret.gui.Label;
        label_killed: egret.gui.Label;
        label_call: egret.gui.Label;
        label_guild: egret.gui.Label;
        label_name: egret.gui.Label;
        img_boss: egret.gui.UIAsset;
        img_selected: egret.gui.UIAsset;
        img_highlight: egret.gui.UIAsset;
        img_limit: egret.gui.UIAsset;
        img_money: egret.gui.UIAsset;
        img_bg: egret.gui.UIAsset;
        grp_lock: egret.gui.Group;
        label_guildName: mo.gui.Label;
        label_fightLeftTime: mo.gui.Label;
        label_cantJoin: mo.gui.Label;
        label_fighting: mo.gui.Label;
        img_lock: egret.gui.UIAsset;
        btn_join: egret.gui.Button;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_join(): void;
        onExit(): void;
        timeTrigger: any;
        resetCdTimeView(leftMillisecond: any): void;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by Administrator on 2015/12/28.
 */
declare module g_worldboss {
    class GuildBossCallCell extends mo.gui.ItemRenderer {
        label_left_time: egret.gui.Label;
        label_killed: egret.gui.Label;
        label_call: egret.gui.Label;
        label_sleep: egret.gui.Label;
        label_settlement: egret.gui.Label;
        label_guild: egret.gui.Label;
        label_name: egret.gui.Label;
        img_boss: egret.gui.UIAsset;
        img_selected: egret.gui.UIAsset;
        img_highlight: egret.gui.UIAsset;
        img_limit: egret.gui.UIAsset;
        img_money: egret.gui.UIAsset;
        img_bg: egret.gui.UIAsset;
        label_reward_hint: any;
        countdwonTitle: string;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        onExit(): void;
        timeTrigger: any;
        resetCdTimeView(leftMillisecond: any): void;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by Administrator on 2016/1/9.
 */
declare module g_worldboss {
    class GuildBossList extends mo.gui.Dlg {
        label_call_time: mo.gui.Label;
        img_title: any;
        label_extra_cost: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_help(): void;
        list_call: egret.gui.List;
        _Item_list_call: any;
        _refreshCallGrp(): void;
        _data_list_call(): any[];
        _click_list_call(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Administrator on 2016/1/9.
 */
declare module g_worldboss {
    class GuildBossLevelList extends mo.gui.Dlg {
        tab_medal: egret.gui.TabBar;
        grp_fight: any;
        grp_call: any;
        img_empty: any;
        img_title: any;
        tabCompArr: any;
        tabIndex: number;
        label_call_time: mo.gui.Label;
        label_extra_cost: mo.gui.Label;
        label_extra_costLmt: any;
        label_canFight: any;
        label_cannotFight: any;
        list_call: any;
        list_callLmt: any;
        _Item_list_call: any;
        _Item_list_callLmt: any;
        moduleParam: any;
        isLmt: any;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_btn_help(): void;
        _tap_tab_medal(): void;
        _refreshTabComp(): void;
        /****************************************************************
        //激战中
         ****************************************************************/
        list_fight: egret.gui.List;
        _Item_list_fight: any;
        _refreshFightGrp(): void;
        _data_list_fight(): any[];
        /****************************************************************
         //召唤
         ****************************************************************/
        _refreshCallGrp(): void;
        _data_list_call(): any[];
        _data_list_callLmt(): any[];
        _click_list_call(event: egret.gui.ListEvent): void;
        _click_list_callLmt(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Administrator on 2015/12/28.
 */
declare module g_worldboss {
    class GuildBossCall extends mo.gui.Dlg {
        moduleParam: any;
        px_hp: egret.gui.ProgressBar;
        label_fighting: egret.gui.Label;
        label_boss_lvLmt_fight: any;
        grp_fight: egret.gui.Group;
        grp_call: egret.gui.Group;
        grp_call_need: egret.gui.Group;
        label_name: egret.gui.Label;
        img_boss: egret.gui.UIAsset;
        img_boss_bg: egret.gui.UIAsset;
        label_reward_hint: egret.gui.Label;
        label_boss_lvLmt_call: any;
        label_level_need: egret.gui.Label;
        label_left_time: egret.gui.Label;
        grp_res: egret.gui.Group;
        grp_res_extra: egret.gui.Group;
        label_duration: egret.gui.Label;
        label_boss_sleep: egret.gui.Label;
        label_call_time: mo.gui.Label;
        label_limit_time: mo.gui.Label;
        btn_call: egret.gui.Button;
        btn_lock_call: egret.gui.Button;
        btn_fight: egret.gui.Button;
        btn_status: egret.gui.Button;
        grp_lock: egret.gui.Group;
        ckb_lock: egret.gui.CheckBox;
        label_numFuHuo: any;
        label_extra_cost: any;
        img_title: any;
        _initProp(): void;
        _childrenCreated(): void;
        private barLabelFunction(value, maximum);
        _bossStateChange(): void;
        dataChanged(): void;
        _updateData(checkCD: any): void;
        setCanCallStatus(): void;
        _chg_ckb_lock(): boolean;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _tap_btn_fight(): void;
        _tap_btn_call(): boolean;
        _tap_btn_lock_call(): boolean;
        _tap_btn_show_rewards(): void;
        onExit(): void;
        timeTrigger: any;
        resetCdTimeView(leftMillisecond: any): void;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_status(): void;
    }
}
/**
 * Created by Administrator on 2015/12/28.
 */
declare module g_worldboss {
    class GuildBossLevelCallCell extends mo.gui.ItemRenderer {
        img_bg: egret.gui.UIAsset;
        img_boss: egret.gui.UIAsset;
        label_level: egret.gui.Label;
        label_leftNum: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/12/22.
 */
declare module g_worldboss {
    class GuildBossInspire extends mo.gui.Dlg {
        moduleParam: IModuleParam.GuildBossInspire;
        label_remaind: egret.gui.Label;
        label_inspire_title: egret.gui.Label;
        label_inspire_desc: egret.gui.Label;
        label_content: egret.gui.Label;
        label_title: egret.gui.Label;
        scroller: egret.gui.Scroller;
        label_cost: egret.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _tap_btn_cancel(): void;
        _tap_btn_inspire(): void;
        private _inspire();
        clearChat(): void;
        onChatUpdate(data: any): void;
        onExit(): void;
        timeTrigger: any;
        resetCdTimeView(leftMillisecond: any): void;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by lihex on 16/1/6.
 */
/**
 * Created by Administrator on 2015/12/22.
 */
declare module g_worldboss {
    class GuildBossGrand extends mo.gui.Dlg {
        label_caller: egret.gui.Label;
        label_guild: egret.gui.Label;
        label_maxDamage: egret.gui.Label;
        label_lastHit: egret.gui.Label;
        label_myDamage: egret.gui.Label;
        grp_guild: egret.gui.Group;
        img_bg: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2015/12/22.
 */
declare module g_worldboss {
    class GuildBossReward extends mo.gui.Dlg {
        moduleParam: IModuleParam.WorldBoss;
        item0: g_comp.BossRewardPanel;
        item1: g_comp.BossRewardPanel;
        item2: g_comp.BossRewardPanel;
        item3: g_comp.BossRewardPanel;
        item4: g_comp.BossRewardPanel;
        item5: g_comp.BossRewardPanel;
        item6: g_comp.BossRewardPanel;
        label_hurt: egret.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_btn_back(): void;
        _tap_btn_help(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/12/19.
 */
declare module g_worldboss {
    class WorldBoss extends mo.gui.Dlg {
        moduleParam: IModuleParam.WorldBoss;
        ico_reward: g_comp.Ico_Item;
        ico_head: g_comp.Ico_Head;
        px_hp: any;
        label_lefttime: egret.gui.Label;
        label_first: egret.gui.Label;
        label_first_hh: egret.gui.Label;
        label_first_hurt: egret.gui.Label;
        label_caller: egret.gui.Label;
        label_callerhh: egret.gui.Label;
        label_my_index: egret.gui.Label;
        label_my_hurt: egret.gui.Label;
        label_hanghuigw: egret.gui.Label;
        label_hanghuilt: egret.gui.Label;
        label_coolDown: egret.gui.Label;
        ico_monster: egret.gui.UIAsset;
        label_monster: egret.gui.Label;
        bossAP: g_base.ActionPlayer;
        ckb_auto: egret.gui.CheckBox;
        btn_clear_cd: egret.gui.Button;
        btn_fight: egret.gui.Button;
        btn_guwu: egret.gui.Button;
        img_auto: egret.gui.UIAsset;
        img_title: egret.gui.UIAsset;
        grp_inspire: egret.gui.Group;
        grp_call: egret.gui.Group;
        label_canFight: any;
        label_cannotFight: any;
        label_yourFuHuo: any;
        _initProp(): void;
        _bossStateChange(): void;
        _childrenCreated(): void;
        private barLabelFunction(value, maximum);
        _updateUI(): void;
        _updateCD(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _tap_btn_more_index(): void;
        _tap_btn_guwu(): void;
        _isCurAutoFightBoss(): boolean;
        _chg_ckb_auto(): void;
        _tap_btn_reward(): void;
        _tap_btn_fight(): void;
        _tap_btn_clear_cd(): void;
        go_fight(): void;
        onExit(): void;
        timeTrigger: any;
        resetCdTimeView(leftMillisecond: any): void;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        cool_timeTrigger: any;
        resetCoolDownTimeView(leftMillisecond: any): void;
        setCoolDownTime(second: any): void;
        coolDownTimeSec(type: any, beginTime: any, endTime: any): void;
        coolDownTimeOut(type: any, beginTime: any, endTime: any): void;
        gw_timeTrigger: any;
        resetGWTimeView(leftMillisecond: any): void;
        setGWTime(second: any): void;
        gwTimeSec(type: any, beginTime: any, endTime: any): void;
        gwTimeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by Administrator on 2015/12/29.
 */
declare module g_worldboss {
    class WorldBossHurtCell extends mo.gui.ItemRenderer {
        label_index: egret.gui.Label;
        label_name: egret.gui.Label;
        label_hanghui: egret.gui.Label;
        label_hurt: egret.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/12/22.
 */
declare module g_worldboss {
    class WorldBossHurtList extends mo.gui.Dlg {
        moduleParam: IModuleParam.WorldBoss;
        list_items: egret.gui.List;
        _Item_list_items: any;
        hurt_data: any[];
        label_my_hurt: egret.gui.Label;
        label_my_index: egret.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2015/12/28.
 */
declare module g_worldboss {
    class WBossCall extends mo.gui.Dlg {
        moduleParam: any;
        px_hp: egret.gui.ProgressBar;
        label_name: egret.gui.Label;
        img_boss: egret.gui.UIAsset;
        img_boss_bg: egret.gui.UIAsset;
        label_challenge_time: egret.gui.Label;
        label_desc: mo.gui.Label;
        btn_status: egret.gui.Button;
        _initProp(): void;
        _childrenCreated(): void;
        private barLabelFunction(value, maximum);
        dataChanged(): void;
        _tap_btn_help(): void;
        _tap_btn_back(): void;
        _tap_btn_show_rewards(): void;
        _tap_btn_status(): void;
    }
}
