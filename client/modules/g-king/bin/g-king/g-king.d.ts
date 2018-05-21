/**
 * Created by Administrator on 2016/1/9.
 */
declare module g_king {
    class King extends mo.gui.Dlg {
        tab_king: egret.gui.TabBar;
        label_open: mo.gui.Label;
        grp_king: egret.gui.Group;
        grp_cloak: egret.gui.Group;
        grp_welfare: egret.gui.Group;
        grp_rankReward: egret.gui.Group;
        tabCompArr: any;
        tabIndex: number;
        _initProp(): void;
        _childrenCreated(): void;
        _data_tab_king(): any[];
        _tap_tab_king(): void;
        _refreshTabComp(): void;
        _tap_btn_help(): void;
        /****************************************************************
        //霸主权利 //膜拜霸主
         ****************************************************************/
        label_king_guild: egret.gui.Label;
        icon_king_guild_bg: egret.gui.UIAsset;
        label_king_vip: egret.gui.BitmapLabel;
        label_king_name: egret.gui.Label;
        label_king_lv: egret.gui.Label;
        label_king_worship_num: mo.gui.Label;
        bar_king: egret.gui.ProgressBar;
        label_king_bar_worship_num: mo.gui.Label;
        label_king_open_num: mo.gui.Label;
        label_king_my_worship_num: mo.gui.Label;
        label_king_des1: mo.gui.Label;
        label_king_des2: mo.gui.Label;
        ico_king_avatar: g_base.RoleAvatar;
        btn_king: egret.gui.Button;
        label_king_today_open_num: mo.gui.Label;
        label_king_worship_award: mo.gui.Label;
        label_king_worship_award_num: mo.gui.Label;
        icon_king_worship_award: egret.gui.UIAsset;
        label_king_worshiped: mo.gui.Label;
        label_king_time: mo.gui.Label;
        ico_king_buff: egret.gui.UIAsset;
        _refreshKingGrp(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        resetCdTimeView(leftMillisecond: any): void;
        _tap_btn_king(): void;
        _tap_ico_king_avatar(): void;
        /****************************************************************
         //王者披风
         ****************************************************************/
        label_cloak_props: egret.gui.Label;
        label_cloak_des: egret.gui.Label;
        _refreshCloakGrp(): void;
        /****************************************************************
         //兄弟福利
         ****************************************************************/
        label_welfare_guild: egret.gui.Label;
        btn_welfare_get: egret.gui.Button;
        grp_welfare_sub1: egret.gui.Group;
        grp_welfare_sub2: egret.gui.Group;
        label_welfare_no_get: egret.gui.Label;
        ico_welfare_geted: egret.gui.UIAsset;
        _refreshWelfarGrp(): void;
        _tap_btn_welfare_get(): void;
        /****************************************************************
         //擂台排行奖励
         ****************************************************************/
        _Item_list_items: any;
        item_reward: any;
        label_desc: any;
        _data_list_items(): any[];
        _refreshRankRewardGrp(): void;
    }
}
