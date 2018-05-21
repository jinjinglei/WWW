/**
 * Created by john on 15/12/4.
 */
declare module g_guild {
    class GuildListItem extends mo.gui.ItemRenderer {
        label_lv: any;
        label_name: any;
        label_count: any;
        btn_join: any;
        ico_background: any;
        _childrenCreated(): void;
        dataChanged(): void;
        checkBtn(curGuildItem: any, guildPersonalData: any): void;
        _tap_btn_join(): void;
    }
}
/**
 * Created by Administrator on 2015/12/2.
 */
declare module g_guild {
    class GuildListLayer extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        moduleParam: IModuleParam.GuildList;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_btn_search(): void;
        _tap_btn_create(): void;
        reset(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2015/12/2.
 */
declare module g_guild {
    class GuildMineLayer extends mo.gui.Dlg {
        label_id: any;
        label_name: any;
        label_lv: any;
        label_count: any;
        label_rank: any;
        label_notice: any;
        label_guildname: any;
        bar_exp: egret.gui.ProgressBar;
        label_attack: any;
        itemContribute: any;
        ico_level: any;
        label_myPosition: any;
        label_leftExp: any;
        label_myGuildLv: any;
        label_myExp: any;
        label_ennoble: any;
        moduleParam: IModuleParam.GuildMine;
        tab_str: egret.gui.TabBar;
        tabCompArr: any;
        tabIndex: number;
        grp_guildDaily: any;
        grp_guildFuli: any;
        grp_guildWar: any;
        _initProp(): void;
        _childrenCreated(): boolean;
        _tap_tab_str(): void;
        _refreshTabComp(): void;
        _refreshGuildDailyGrp(): void;
        _refreshGuildFuliGrp(): void;
        _refreshGuildWarGrp(): void;
        reloadData(): void;
        dataChanged(): void;
        _tap_btn_help(): void;
        _tap_btn_member(): void;
        _tap_btn_manager(): void;
        _tap_btn_rank(): void;
        _tap_grp_treasure(): boolean;
        _tap_grp_benefits(): void;
        _tap_grp_daily(): void;
        _tap_grp_bossWar(): void;
        _tap_grp_rob(): void;
        _tap_grp_copy(): void;
    }
}
/**
 * Created by Administrator on 2015/12/2.
 */
declare module g_guild {
    class CreateGuild extends mo.gui.Dlg {
        label_yuanbao: any;
        inputName: egret.gui.TextInput;
        onEnter(): void;
        _tap_btn_create(): void;
    }
}
/**
 * Created by Administrator on 2015/12/8.
 */
declare module g_guild {
    class GuildTreasure extends mo.gui.Dlg {
        ico_item0: any;
        ico_item1: any;
        ico_item2: any;
        ico_item3: any;
        ico_item4: any;
        ico_item5: any;
        ico_item6: any;
        ico_item7: any;
        ico_item8: any;
        eff_0: any;
        eff_1: any;
        eff_2: any;
        eff_3: any;
        eff_4: any;
        eff_5: any;
        eff_6: any;
        eff_7: any;
        eff_8: any;
        label_guildLv: any;
        label_exp: any;
        label_cost: any;
        label_costTen: any;
        label_content: any;
        scroller: any;
        ico_level: any;
        _initProp(): void;
        dataChanged(): void;
        onEnter(): void;
        onLotteryUpdate(): void;
        reset(): void;
        _tap_btn_treasure(): void;
        _tap_btn_ten(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by john on 15/12/3.
 */
declare module g_guild {
    class GuildContributeLayer extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_level: any;
        bar_exp: any;
        label_exp: any;
        label_myGuildLv: any;
        label_myExp: any;
        label_myExp2: any;
        _initProp(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_back(): void;
    }
}
/**
 * Created by john on 15/12/3.
 */
declare module g_guild {
    class GuildBenefitsLayer extends mo.gui.Dlg {
        label_value: any;
        label_next: any;
        label_lv: any;
        grp_nextLv: any;
        label_maxLv: any;
        label_ennoble: any;
        label_ennobleRate: any;
        label_nextLv: any;
        _initProp(): void;
        _tap_btn_back(): void;
        dataChanged(): void;
        _tap_btn_help(): void;
        _tap_label_ennobleDesc(): void;
    }
}
/**
 * Created by john on 15/12/3.
 */
declare module g_guild {
    enum GuildManagerType {
        Apply = 0,
        Notice = 1,
        Setting = 2,
        Exit = 3,
    }
    class GuildManager extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        reloadData(): void;
        dataChanged(): void;
        getListTypes(): any[];
        _data_list_items(): any[];
        _tap_btn_close(): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by john on 15/12/3.
 */
declare module g_guild {
    class GuildManagerCell extends mo.gui.ItemRenderer {
        ico_title: any;
        btn_action: any;
        _childrenCreated(): void;
        _tap_btn_action(): boolean;
        dataChanged(): void;
    }
}
/**
 * Created by john on 15/12/4.
 */
declare module g_guild {
    class GuildMemberListLayer extends mo.gui.Dlg {
        label_membercount: any;
        label_level: any;
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        _childrenCreated(): void;
        reloadData(): void;
        reset(): void;
        dataChanged(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by john on 15/12/4.
 */
declare module g_guild {
    class GuildMemberItem extends mo.gui.ItemRenderer {
        label_level: any;
        label_name: any;
        label_attack: any;
        label_gongx: any;
        label_role: any;
        ico_head: any;
        label_mLv: any;
        label_ennoble: any;
        label_loginDate: any;
        right_rect: any;
        _initProp(): void;
        dataChanged(): void;
        _tap_ico_head(): void;
        _tap_right_rect(): void;
    }
}
/**
 * Created by john on 15/12/4.
 */
declare module g_guild {
    class GuildSearch extends mo.gui.Dlg {
        inputName: any;
        listLayer: any;
        dataChanged(): void;
        _tap_btn_search(): void;
    }
}
/**
 * Created by john on 15/12/4.
 */
declare module g_guild {
    class GuildSearchResult extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by john on 15/12/4.
 */
declare module g_guild {
    class GuildSetting extends mo.gui.Dlg {
        label_condition: any;
        label_level: any;
        joinCon: number;
        joinLvl: any;
        joinLvlIndex: number;
        conditions: Array<number>;
        conditionsLevel: Array<string>;
        _initProp(): void;
        dataChanged(): void;
        _tap_btn_conditionPre(): void;
        _tap_btn_conditionNext(): void;
        _tap_btn_LevelNext(): void;
        _tap_btn_LevelPre(): void;
        _tap_btn_Update(): void;
    }
}
/**
 * Created by john on 15/12/4.
 */
declare module g_guild {
    class GuildApplyList extends mo.gui.Dlg {
        label_member: any;
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        reloadData(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by john on 15/12/9.
 */
declare module g_guild {
    class GuildApplyListItem extends mo.gui.ItemRenderer {
        label_lvl: any;
        label_name: any;
        label_combat: any;
        btn_agree: any;
        btn_reject: any;
        btn_release: any;
        btn_get: any;
        ico_background: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_agree(): void;
        doAction(agree: boolean): void;
        _tap_btn_reject(): void;
    }
}
declare module g_guild {
    class GuildMessageAlert extends mo.gui.Dlg {
        label_message: any;
        container: any;
        _tap_btn_cancel(): void;
        dataChanged(): void;
        _tap_btn_confirm(): void;
    }
}
declare module g_guild {
    class GuildContributeItem extends mo.gui.ItemRenderer {
        label_limit: any;
        label_desc: any;
        label_act: any;
        label_gold: any;
        btn_act: any;
        ico_item: any;
        img_done: any;
        label_vip: any;
        dataChanged(): void;
        reset(): void;
        _tap_btn_act(): void;
    }
}
declare module g_guild {
    class GuildMineItem extends mo.gui.Layer {
        _initProp(): void;
        _tap_btn_enter(): void;
    }
}
/**
 * Created by john on 15/12/10.
 */
declare module g_guild {
    class GuildUpdateNotice extends mo.gui.Dlg {
        inputNotice: any;
        dataChanged(): void;
        _tap_btn_confirm(): void;
    }
}
/**
 * Created by Administrator on 2015/10/5.
 */
declare module g_guild {
    class GuildLotteryGain extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_cost: any;
        label_cost10: any;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
        _tap_btn_again1(): void;
        _tap_btn_again2(): void;
    }
}
declare module g_guild {
    class GuildMemberManager extends mo.gui.Dlg {
        label_name: any;
        label_level: any;
        label_attack: any;
        ico_head: any;
        label_position: any;
        label_upact: any;
        label_memberLvl: any;
        btn_get: any;
        btn_out: any;
        btn_change: any;
        btn_release: any;
        label_ennoble: any;
        btn_setE: any;
        btn_detail: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        doMember(type: number): void;
        _tap_btn_get(): void;
        _tap_btn_out(): void;
        _tap_btn_release(): void;
        _tap_btn_change(): void;
        _tap_btn_setE(): void;
        _tap_btn_detail(): void;
    }
}
/**
 * Created by Administrator on 2015/12/16.
 */
declare module g_guild {
    class GuildRank extends mo.gui.Dlg {
        list_ranks: any;
        _Item_list_ranks: any;
        tab_rank: any;
        ranks: any[];
        label_rankType: any;
        label_myRankDesc: any;
        label_myRank: any;
        label_myRankBy: any;
        label_myRankValue: any;
        _initProp(): void;
        dataChanged(): void;
        getRankDesc(type: any): string;
        _data_list_ranks(): any[];
        getRankList(type: any): void;
        _tap_tab_rank(): void;
    }
}
/**
 * Created by Administrator on 2015/12/16.
 */
declare module g_guild {
    class GuildRankItem extends mo.gui.ItemRenderer {
        label_rank: any;
        label_guildName: any;
        label_userName: any;
        label_level: any;
        label_rankType: any;
        label_id: any;
        dataChanged(): void;
        getRankDesc(type: any): string;
    }
}
/**
 * Created by Administrator on 2015/12/17.
 */
declare module g_guild {
    class GuildSetEnnoble extends mo.gui.Dlg {
        label_name: any;
        ico_head: any;
        label_lv: any;
        label_position: any;
        label_myExp: any;
        label_myGuildLv: any;
        label_combat: any;
        label_ennoble: any;
        btn_cancel: any;
        btn_confirm: any;
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        dataChanged(): void;
        _data_list_items(): any[];
        _tap_btn_cancel(): void;
        _tap_btn_confirm(): boolean;
        setEnnoble(type: any): void;
    }
}
/**
 * Created by Administrator on 2015/12/17.
 */
declare module g_guild {
    class GuildEnnobleItem extends mo.gui.ItemRenderer {
        label_ennoble: any;
        label_addScale: any;
        label_num: any;
        label_need1: any;
        label_need2: any;
        grp_num: any;
        grp_addScale: any;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/12/17.
 */
declare module g_guild {
    class GuildEnnobleDetail extends mo.gui.Dlg {
        label_guildLv: any;
        label_myLv: any;
        label_ennoble: any;
        list_items: any;
        _Item_list_items: any;
        _initProp(): void;
        dataChanged(): void;
        _data_list_items(): any[];
    }
}
