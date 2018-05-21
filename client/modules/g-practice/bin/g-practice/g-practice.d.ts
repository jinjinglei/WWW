/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_practice {
    class PracticeItem extends mo.gui.ItemRenderer {
        label_openLvl: egret.gui.Label;
        img_icon: egret.gui.UIAsset;
        img_title: egret.gui.UIAsset;
        img_shadow: egret.gui.UIAsset;
        rect_mask: egret.gui.Rect;
        dataChanged(): void;
    }
}
/**
 * Created by Zhuang on 2016/4/29.
 */
declare module g_practice {
    /**
     *
     * @author
     *
     */
    class Practice extends mo.gui.Dlg {
        list_copys: egret.gui.List;
        _Item_list_copys: any;
        _copys: Array<any>;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_copys(): any[];
        dataChanged(): void;
        _click_list_copys(event: egret.gui.ListEvent): void;
    }
}
