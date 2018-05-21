/**
 * Created by Administrator on 2015/10/5.
 */
declare module g_treasure {
    class MoJinGain extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_once: mo.gui.Label;
        label_ten: mo.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
        _tap_btn_again1(): void;
        _tap_btn_again2(): void;
        lotteryResult(items: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_treasure {
    class Treasure extends mo.gui.Dlg {
        item_sp: g_comp.EfxAsset;
        border_sp: g_comp.EfxAsset;
        label_once: mo.gui.Label;
        label_ten: mo.gui.Label;
        label_date: mo.gui.Label;
        resBar: g_comp.ResBar;
        label_content: mo.gui.Label;
        scroller: egret.gui.Scroller;
        efx_sp: g_comp.UIEffect;
        grp_discountTen: any;
        grp_discountOnce: any;
        label_discountOnce: any;
        label_discountTen: any;
        _initProp(): void;
        _childrenCreated(): void;
        _showDetai(comp: any, ico: any, itemId: any): void;
        _tap_btn_once(): void;
        _tap_btn_ten(): void;
        _tap_btn_recharge(): void;
        lotteryResult(items: any): void;
        clearChat(): void;
        onChatUpdate(data: any): void;
    }
}
