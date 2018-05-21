/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_coffers {
    class CoffersLayer extends mo.gui.Layer {
        tab_btn: any;
        grp_coffers: any;
        grp_build: any;
        grp_defence: any;
        label_lv: any;
        label_coffer: any;
        label_gold: any;
        label_rob: any;
        label_robed: any;
        label_curLv: any;
        label_curCoffer: any;
        label_curAddProp: any;
        label_nextLv: any;
        label_nextCoffer: any;
        label_nextAddProp: any;
        bar_build: any;
        label_add1: any;
        label_add2: any;
        grp_canBuild: any;
        label_cannotBuild: any;
        label_leftCount: any;
        label_vip: any;
        label_maxLevel: any;
        grp_next: any;
        label_addProp: any;
        label_addProp1: any;
        defUsers: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        coffersChanged(): void;
        buildValueChanged(): void;
        setDefeseData(datas: any): void;
        _tap_grp_def0(): void;
        _tap_grp_def1(): void;
        _tap_grp_def2(): void;
        _tap_grp_def3(): void;
        lookUserInfo(doorLook: any): void;
        _tap_btn_heroRec(): void;
        _tap_btn_build(): void;
        _tap_btn_defRec(): void;
        _tap_tab_btn(): void;
        _tap_btn_close(): void;
        _tap_btn_help(): void;
        _tap_btn_jili(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_coffers {
    class CoffersScene extends mo.gui.UIScene {
        show(): void;
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_coffers {
    class CoffersDefenceRecCell extends mo.gui.ItemRenderer {
        ico_def: any;
        label_desc: any;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_coffers {
    class CoffersDefenceRecDlg extends mo.gui.Dlg {
        list_rec: any;
        _Item_list_rec: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_rec(): any[];
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_coffers {
    class CoffersHeroRecCell extends mo.gui.ItemRenderer {
        label_desc: any;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_coffers {
    class CoffersHeroRecDlg extends mo.gui.Dlg {
        list_rec: any;
        _Item_list_rec: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_rec(): any[];
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_coffers {
    class CoffersSelectDefence extends mo.gui.Dlg {
        label_addProp: any;
        label_addProp2: any;
        label_win: any;
        label_score: any;
        ico_item: any;
        label_item: any;
        label_rate: any;
        _initProp(): void;
        _childrenCreated(): void;
        timerId: any;
        startTime: any;
        onEnter(): void;
        onExit(): void;
        onDefDataChanged(defData: any): void;
        checkLeftTime(self: any): void;
        breakNum: number;
        dataChanged(): void;
        _tap_grp_def0(): void;
        _tap_grp_def1(): void;
        _tap_grp_def2(): void;
        _tap_grp_def3(): void;
        startFightAt(index: any): boolean;
        _tap_ico_rob(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_coffers {
    class CoffersServerCell extends mo.gui.ItemRenderer {
        label_name: any;
        label_state0: any;
        label_state1: any;
        label_state2: any;
        label_state3: any;
        label_coffer: any;
        dataChanged(): void;
        getStateStr(isLoot: any, isBreak: any): string;
        getStateColor(isLoot: any, isBreak: any): number;
        _tap_btn_rob(): boolean;
    }
}
/**
 * Created by Administrator on 2016/1/25.
 */
declare module g_coffers {
    class CoffersServerDlg extends mo.gui.Dlg {
        moduleParam: any;
        label_ap: any;
        list_server: any;
        _Item_list_server: any;
        grp_ap: any;
        label_robTime: any;
        label_time: any;
        _initProp(): void;
        _childrenCreated(): void;
        onExit(): void;
        reset(): void;
        dataChanged(): void;
        apChange(): void;
        _data_list_server(): any[];
        _tap_btn_help(): void;
        _tap_btn_score(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        resetCdTimeView(leftMillisecond: any): void;
    }
}
/**
 * Created by Administrator on 2016/2/25.
 */
declare module g_coffers {
    class CoffersScore extends mo.gui.Dlg {
        label_scoreServer: any;
        label_scorePerson: any;
        label_scoreServerToday: any;
        label_scorePersonToday: any;
        label_win: any;
        label_score: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/2/25.
 */
declare module g_coffers {
    class CoffersJili extends mo.gui.Dlg {
        label_addProp: any;
        bar_value: any;
        label_value: any;
        label_curLv: any;
        label_nextLv: any;
        label_curAdd: any;
        label_nextAdd: any;
        grp_nextLv: any;
        label_maxLv: any;
        label_noCount: any;
        grp_jili: any;
        label_leftCount: any;
        label_costName: any;
        label_cost: any;
        ico_item: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_jili(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by Administrator on 2016/3/28.
 */
declare module g_coffers {
    class CoffersRob extends mo.gui.Dlg {
        label_coffer: any;
        label_rate: any;
        label_cannotRob: any;
        label_failCount: any;
        grp_canRob: any;
        label_robCount: any;
        label_name: any;
        dataChanged(): void;
        _tap_btn_rob(): void;
        _tap_btn_help(): void;
    }
}
