/**
 * Created by Administrator on 2016/1/21.
 */
declare module g_rebirth {
    class Rebirth extends mo.gui.Dlg {
        img_noReTitle: egret.gui.UIAsset;
        grp_reTitle: egret.gui.UIAsset;
        label_curLvl: egret.gui.BitmapLabel;
        label_maxLvl: mo.gui.Label;
        label_curPropDes: mo.gui.Label;
        label_nextPropDes: mo.gui.Label;
        label_0_propDes: mo.gui.Label;
        label_no_PropDes: mo.gui.Label;
        label_curProp: mo.gui.Label;
        label_nextProp: mo.gui.Label;
        label_costExp: mo.gui.Label;
        label_curExp: mo.gui.Label;
        label_openNextLvl: mo.gui.Label;
        label_curExp2: mo.gui.Label;
        grp_1: egret.gui.Group;
        grp_2: egret.gui.Group;
        _initProp(): void;
        _tap_btn_help(): void;
        _childrenCreated(): void;
        _refreshUi(): void;
        _checkVisible(curRebirthData: any, nextRebirthData: any): void;
        _tap_btn_rebirth(): void;
        _tap_btn_getExp(): void;
    }
}
/**
 * Created by Administrator on 2016/1/21.
 */
declare module g_rebirth {
    class RebirthExp extends mo.gui.Dlg {
        grp_expBar: egret.gui.Group;
        _initProp(): void;
        _childrenCreated(): void;
        _refreshUi(): void;
        img_exp: egret.gui.UIAsset;
        label_exp: mo.gui.Label;
        _refreshExp(): void;
        _refreshItems(): void;
        _updateItem(index: any, itemId: any): void;
        _showDetai(comp: any, ico: any, itemId: any): void;
        calUseBtn(index: any): void;
        calBuyBtn(index: any): void;
        _tap_btn_use0(): void;
        _tap_btn_use1(): void;
        _tap_btn_use2(): void;
        _tap_btn_buy0(): void;
        _tap_btn_buy1(): void;
        _tap_btn_buy2(): void;
    }
}
