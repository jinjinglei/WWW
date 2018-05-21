/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_task {
    class ActivityBoxReward extends mo.gui.Dlg {
        btn_do: egret.gui.Button;
        list_items: egret.gui.List;
        _Item_list_items: any;
        index: any;
        _initProp(): void;
        _data_list_items(): any[];
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_do(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_task {
    class TaskItem extends mo.gui.ItemRenderer {
        static ON_BTN_GET: string;
        ico: egret.gui.UIAsset;
        label_title: egret.gui.Label;
        label_num: mo.gui.Label;
        label_desc: egret.gui.Label;
        btn_get: egret.gui.Button;
        btn_go: egret.gui.Button;
        grp_res0: egret.gui.Group;
        grp_res1: egret.gui.Group;
        grp_res3: egret.gui.Group;
        img_done: egret.gui.UIAsset;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_get(): void;
        _tap_btn_go(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_task {
    class TaskDlg extends mo.gui.Dlg {
        tab_task: egret.gui.TabBar;
        viewStack: egret.gui.ViewStack;
        label_act: mo.gui.Label;
        btn_bronze: egret.gui.Button;
        btn_silver: egret.gui.Button;
        btn_gold: egret.gui.Button;
        pb_active: egret.gui.ProgressBar;
        img_red0: egret.gui.UIAsset;
        img_red1: egret.gui.UIAsset;
        list_daily_tasks: egret.gui.List;
        list_achivements: egret.gui.List;
        _Item_list_daily_tasks: any;
        _Item_list_achivements: any;
        _initProp(): void;
        _initItem_list_daily_tasks(cell: TaskItem): void;
        _initItem_list_achivements(cell: TaskItem): void;
        _data_list_daily_tasks(): any[];
        _data_list_achivements(): any[];
        _childrenCreated(): void;
        dataChanged(): void;
        _showBoxEffect(): void;
        _showBox(index: any): void;
        _tap_btn_box0(): void;
        _tap_btn_box1(): void;
        _tap_btn_box2(): void;
    }
}
