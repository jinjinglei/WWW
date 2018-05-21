/**
 * Created by Administrator on 2015/11/14.
 */
declare module g_rank {
    class RankItem extends mo.gui.ItemRenderer {
        ico_head: any;
        label_name: any;
        label_level: any;
        ico_rank: any;
        label_rank: any;
        label_rankBy: any;
        dataChanged(): void;
        getDescByType(type: any): string;
    }
}
/**
 * Created by Administrator on 2015/11/14.
 */
declare module g_rank {
    class Rank extends mo.gui.Dlg {
        moduleParam: IModuleParam.Rank;
        ico_rankNameFirst: any;
        label_rankByFirst: any;
        ico_avatarFirst: any;
        label_nameFirst: any;
        label_levelFirst: any;
        ico_bgRed: any;
        firstRank: any;
        ico_head: any;
        ico_rank: any;
        label_rank: any;
        label_rankByDesc: any;
        label_rankBy: any;
        ranks: any[];
        tab_rank: any;
        grp_vipFirst: any;
        label_vipLvFirst: any;
        list_ranks: any;
        _Item_list_ranks: any;
        rankTypeList: Array<number>;
        _initProp(): void;
        onEnter(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        getRankList(type: any): void;
        _data_list_ranks(): any[];
        getDescByType(type: any): string;
        _tap_tab_rank(): void;
        _click_list_ranks(event: egret.gui.ListEvent): void;
        _tap_ico_avatarFirst(): void;
    }
}
