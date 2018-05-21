/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_guildwar {
    class GuildWarRankGuildCell extends mo.gui.ItemRenderer {
        label_killValue: any;
        label_rank: any;
        ico_rank: any;
        label_guild: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_guildwar {
    class GuildWarRankGuildManagerCell extends mo.gui.ItemRenderer {
        label_killValue: any;
        label_rank: any;
        ico_rank: any;
        label_guild: any;
        ico_head: any;
        label_name: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_guildwar {
    class GuildWarRankPersonCell extends mo.gui.ItemRenderer {
        label_killValue: any;
        label_rank: any;
        ico_rank: any;
        label_guild: any;
        ico_head: any;
        label_name: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_guildwar {
    class GuildWarAttackRecDlg extends mo.gui.Dlg {
        label_rec: any;
        scroller: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_guildwar {
    class GuildWarDefenceRecCell extends mo.gui.ItemRenderer {
        ico_def: any;
        label_desc: any;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_guildwar {
    class GuildWarDefenceRecDlg extends mo.gui.Dlg {
        list_rec: any;
        _Item_list_rec: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_rec(): any[];
    }
}
/**
 * Created by lihex on 3/7/16.
 */
declare module g_guildwar {
    class GuildWarGuildCell extends mo.gui.ItemRenderer {
        label_name: any;
        label_server: any;
        label_live: any;
        label_score: any;
        barScore: any;
        btn_rob: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_rob(): void;
    }
}
/**
 * Created by Administrator on 2016/4/8.
 */
declare module g_guildwar {
    class GuildWarDef extends mo.gui.Layer {
        grp_rob: any;
        label_guild: any;
        bar_curHp: any;
        ico_noDefCur: any;
        ico_hasBreakCur: any;
        label_robDoor: any;
        btn_attackRec: any;
        btn_score: any;
        grp_def: any;
        grp_myGuildWarData: any;
        label_leftNum: any;
        label_myState: any;
        btn_clearCd: any;
        label_rank: any;
        label_live: any;
        label_point: any;
        label_leftTime: any;
        btn_guwu: any;
        grp_guwuLeftTime: any;
        label_guwuLeftTime: any;
        label_addProp: any;
        btn_help: any;
        btn_back: any;
        isRobTab: boolean;
        _initProp(): void;
        timerId: any;
        onEnter(): void;
        onExit(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        goto(index: any): void;
        updateMyGuildWarData(): void;
        updateCd(): void;
        _tap_btn_guwu(): void;
        _tap_btn_clearCd(): void;
        selectDoor(index: any): void;
        updateAtkDoors(doors: any): void;
        updateDefDoors(doors: any): void;
        _data_list_guild(): any[];
        onDoorSel(e: any): void;
        _tap_btn_chat(): void;
        _tap_btn_defSetting(): void;
        _tap_btn_attackRec(): void;
        _tap_btn_score(): void;
        _tap_btn_defRec(): void;
        _tap_btn_back(): void;
        _tap_btn_rob(e: any): void;
        _tap_btn_robList(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/4/8.
 */
declare module g_guildwar {
    class GuildWarGuildList extends mo.gui.Dlg {
        list_guild: egret.gui.List;
        _Item_list_guild: any;
        label_guild: any;
        guildWarDef: any;
        _initProp(): void;
        onExit(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_guild(): any[];
    }
}
/**
 * Created by Administrator on 2016/4/8.
 */
declare module g_guildwar {
    class GuildWarChat extends mo.gui.Dlg {
        list_chat: any;
        label_input: any;
        btn_send: any;
        _Item_list_chat: any;
        _initProp(): void;
        onChatUpdate(type: any, data: any): void;
        _tap_btn_send(): void;
        _data_list_chat(): any[];
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/4/8.
 */
declare module g_guildwar {
    class GuildWarDefSetting extends mo.gui.Dlg {
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        updateDefDoors(doors: any): void;
        onUpClick(e: any): void;
        onDownClick(e: any): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_guildwar {
    class GuildWarRank extends g_base.CloseInfoDlg {
        list_rankGuild: any;
        _Item_list_rankGuild: any;
        list_rankGuildManager: any;
        _Item_list_rankGuildManager: any;
        list_rankPerson: any;
        _Item_list_rankPerson: any;
        label_myRank: any;
        label_myKillValue: any;
        tab_btn: any;
        label_desc: any;
        ico_myRank: any;
        ico_myGuildRank: any;
        grp_Rank: any;
        ico_guild: any;
        ico_person: any;
        _childrenCreated(): void;
        _initProp(): void;
        onEnter(): void;
        dataChanged(): void;
        _tap_tab_btn(): void;
        _data_list_rankGuild(): any[];
        _data_list_rankGuildManager(): any[];
        _data_list_rankPerson(): any[];
        _tap_btn_help(): void;
    }
}
/**
 * Created by lihex on 3/7/16.
 */
declare module g_guildwar {
    class GuildWarRewardCell extends mo.gui.ItemRenderer {
        grp_items: egret.gui.Group;
        label_index: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/12/22.
 */
declare module g_guildwar {
    class GuildWarRewardLook extends mo.gui.Dlg {
        moduleParam: IModuleParam.WorldBoss;
        ico_title: any;
        list_items: egret.gui.List;
        _Item_list_items: any;
        tab_btn: egret.gui.TabBar;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        getPropStr(props: any, isLeft: any): string;
        _tap_btn_help(): void;
        _tap_tab_btn(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_guildwar {
    class GuildWarScene extends mo.gui.UIScene {
        moduleParam: any;
        show(): void;
    }
}
/**
 * Created by Administrator on 2016/4/8.
 */
declare module g_guildwar {
    class GuildWarSign extends mo.gui.Layer {
        list_sign: any;
        _Item_list_sign: any;
        label_timeSign: any;
        label_timeActive: any;
        label_combat: any;
        label_myGuildRank: any;
        label_myRank: any;
        label_myGuildNo: any;
        label_myNo: any;
        _initProp(): void;
        dataChanged(): void;
        getHourStr(hour: any): string;
        _data_list_sign(): any[];
        _tap_btn_back(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/4/8.
 */
declare module g_guildwar {
    class GuildWarSignCell extends mo.gui.ItemRenderer {
        label_condition: any;
        ico_title: any;
        ico_sign: any;
        ico_lastWeak: any;
        btn_sign: any;
        dataChanged(): void;
        _tap_btn_sign(): void;
        _tap_btn_look(): void;
        _tap_ico_lastWeak(): void;
    }
}
