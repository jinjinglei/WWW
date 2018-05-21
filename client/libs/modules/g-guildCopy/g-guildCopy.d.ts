/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_guildCopy {
    class GuildCopyItem extends mo.gui.ItemRenderer {
        label_progress: any;
        img_title: any;
        img_bg: any;
        img_pass: any;
        label_openLvl: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by lihex on 4/5/16.
 */
declare module g_guildCopy {
    class GuildCopy extends mo.gui.Dlg {
        moduleParam: IModuleParam.GuildCopySection;
        list_copys: egret.gui.List;
        _Item_list_copys: any;
        grp_items: any;
        btn_enter: any;
        btn_reset: any;
        label_passed: any;
        label_openLvl: any;
        img_name: any;
        label_resetTime: any;
        label_resetTips: any;
        grp_reset: any;
        label_progress: any;
        _initProp(): void;
        _childrenCreated(): void;
        _refreshUI(): void;
        _data_list_copys(): any[];
        _tap_btn_next(): void;
        _tap_btn_pre(): void;
        _tap_btn_help(): void;
        _tap_btn_enter(): void;
        _tap_btn_reset(): void;
        _click_list_copys(event: egret.gui.ListEvent): void;
        setCurSection(section: any): void;
        timeTrigger: any;
        resetCdTimeView(leftMillisecond: any): void;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        onExit(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_guildCopy {
    class GuildCopyBossItem extends mo.gui.ItemRenderer {
        label_name: egret.gui.Label;
        img_boss: egret.gui.UIAsset;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_guildCopy {
    /**
     *
     * @author
     *
     */
    class GuildCopyBoss extends mo.gui.Dlg {
        moduleParam: IModuleParam.GuildCopySection;
        list_copys: any;
        _Item_list_copys: any;
        bossAP: any;
        bossId: any;
        bossList: Array<any>;
        ico_monster: any;
        img_title: any;
        grp_passAward: any;
        grp_waveAward: any;
        label_passPre: any;
        label_getTips: any;
        label_cd: any;
        grp_fightable: any;
        label_progress: any;
        label_awardTips: any;
        label_name: any;
        label_copyProgress: any;
        label_maxCD: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_enter(): void;
        _data_list_copys(): any[];
        _click_list_copys(event: egret.gui.ListEvent): void;
        setBossInfo(bossId: any): void;
        _tap_btn_left(): void;
        _tap_btn_right(): void;
        _tap_btn_help(): void;
        _getColorCDStr(millisecond: any): string;
        click_btn_close(): void;
        timeTrigger: any;
        resetCdTimeView(leftMillisecond: any): void;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        onExit(): void;
    }
}
