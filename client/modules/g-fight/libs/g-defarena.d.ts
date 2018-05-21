/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_defarena {
    class DefArena extends mo.gui.Dlg {
        moduleParam: IModuleParam.DefArena;
        grp_hasAdmin: any;
        grp_res: any;
        item_reward: g_comp.Ico_Item;
        label_guild: any;
        grp_userInfo: any;
        ico_avatar: any;
        label_fighting: any;
        label_leftTime: any;
        label_ftCD: any;
        label_actCD: any;
        grp_actCD: any;
        grp_fightCD: any;
        btn_challenge: any;
        bar_totalTime: egret.gui.ProgressBar;
        grp_noAdmin: any;
        grp_chlg: any;
        btn_up: any;
        label_ruleTime: any;
        _itemDetail: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _updateKingProgress(seconds: any): void;
        actTrigger: any;
        setActCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        resetCdTimeView(leftMillisecond: any): void;
        chlgTrigger: any;
        setChlgCDTime(second: any): void;
        timeSec2(type: any, beginTime: any, endTime: any): void;
        timeOut2(type: any, beginTime: any, endTime: any): void;
        resetChlgCdTimeView(leftMillisecond: any): void;
        kingTrigger: any;
        setKingCDTime(second: any): void;
        timeSec3(type: any, beginTime: any, endTime: any): void;
        timeOut3(type: any, beginTime: any, endTime: any): void;
        _tap_btn_rank(): void;
        _tap_btn_tq(): void;
        _tap_btn_help(): void;
        _tap_btn_challenge(): boolean;
        _tap_btn_up(): void;
        click_btn_close(): void;
        reset(): void;
        _removeTrigger(): void;
        dtor(): void;
    }
}
/**
 * Created by lihex on 1/12/16.
 */
declare module g_defarena {
    class DefarenaWinner extends mo.gui.Dlg {
        moduleParam: IModuleParam.DefArena;
        ico_avatar: any;
        label_guild: any;
        grp_userInfo: any;
        label_combat: any;
        label_nextOpenTime: any;
        label_openLvl: any;
        img_title: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_rank(): void;
        _tap_btn_ok(): void;
        _tap_ico_avatar(): void;
        getCurrentSkinState(): string;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_defarena {
    class DefArenaGain extends mo.gui.Dlg {
        label_name: any;
        label_desc: any;
        label_props: any;
        _initProp(): void;
        onEnter(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_defarena {
    class DefArenaRankItem extends g_arena.ArenaRankItem {
        DS_DATA_KEY: any;
        label_combat: any;
        label_title: any;
        grp_res0: any;
        grp_res1: any;
        grp_res2: any;
        _initProp(): void;
        seteRankReward(rank: any): void;
        setRankDesc(): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_defarena {
    class DefArenaRank extends g_base.CloseInfoDlg {
        list_rank: any;
        _Item_list_rank: any;
        grp_res0: any;
        grp_res1: any;
        grp_res2: any;
        label_noRank: any;
        label_noFight: any;
        label_myTime: any;
        label_myRank: any;
        grp_hasRank: any;
        _initProp(): void;
        dataChanged(): void;
        _data_list_rank(): any[];
    }
}
/**
 * Created by Administrator on 2015/10/23.
 */
declare module g_defarena {
    class DefArenaRankRewardCell extends mo.gui.ItemRenderer {
        label_rank: any;
        ico_rank: any;
        grp_res0: any;
        grp_res1: any;
        grp_res2: any;
        _initProp(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/10/23.
 */
declare module g_defarena {
    class DefArenaRankReward extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        label_desc: any;
        container: any;
        item_reward: any;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
    }
}
