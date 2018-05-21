/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_arena {
    /**
     *
     * @author
     *
     */
    class Arena extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_jf: any;
        label_myRank: any;
        label_count: any;
        label_time: any;
        btn_refresh: any;
        label_timeChange: any;
        label_next_time: any;
        pkUserDatas: any[];
        _initProp(): void;
        _secondTimerId: any;
        onEnter(): void;
        onExit(): void;
        onSecond(): void;
        getLeftTime(): number;
        updataJf(): void;
        _updatePkNum(): void;
        _data_list_items(): any[];
        _tap_btn_rank(): void;
        _tap_btn_change(): void;
        _tap_btn_refresh(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        resetCdTimeView(leftMillisecond: any): void;
        timeTrigger2: any;
        setCDTime2(second: any): void;
        timeSec2(type: any, beginTime: any, endTime: any): void;
        timeOut2(type: any, beginTime: any, endTime: any): void;
        nexttime(second: any): void;
        _tap_btn_log(): void;
        _tap_btn_buy(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_arena {
    class ArenaItem extends mo.gui.ItemRenderer {
        label_rank: any;
        label_name: any;
        label_lv: any;
        label_combat: any;
        ico_head: any;
        ico_rank: any;
        label_guild: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_fight(): void;
        _tap_ico_head(): void;
    }
}
/**
 * Created by Administrator on 2015/10/6.
 */
declare module g_arena {
    class ArenaLog extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        _childrenCreated(): void;
        _initProp(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2015/10/6.
 */
declare module g_arena {
    class ArenaLogItem extends mo.gui.ItemRenderer {
        label_log: any;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_arena {
    class ArenaRank extends g_base.CloseInfoDlg {
        list_rank: any;
        _Item_list_rank: any;
        label_myRank: any;
        grp_res0: any;
        grp_res1: any;
        _childrenCreated(): void;
        _initProp(): void;
        onEnter(): void;
        dataChanged(): void;
        _data_list_rank(): any[];
        _tap_btn_info(): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_arena {
    class ArenaRankItem extends mo.gui.ItemRenderer {
        DS_DATA_KEY: any;
        label_lvl: any;
        label_name: any;
        label_combat: any;
        label_rank: any;
        ico_head: any;
        ico_rank: any;
        grp_res0: any;
        grp_res1: any;
        _initProp(): void;
        dataChanged(): void;
        seteRankReward(rank: any): void;
        setRankDesc(): void;
    }
}
/**
 * Created by Administrator on 2015/10/23.
 */
declare module g_arena {
    class ArenaRankReward extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        label_desc: any;
        _childrenCreated(): void;
        _initProp(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2015/10/23.
 */
declare module g_arena {
    class ArenaRankRewardCell extends mo.gui.ItemRenderer {
        label_rank: any;
        grp_res0: any;
        grp_res1: any;
        dataChanged(): void;
    }
}
