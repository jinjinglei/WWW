/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_red {
    class RedPacket extends mo.gui.Dlg {
        moduleParam: IModuleParam.RedPacket;
        tab_type: any;
        grp_redPacket: any;
        grp_redRec: any;
        grp_numInput: any;
        ico_t1: any;
        ico_t2: any;
        label_desc: any;
        label_myRmb: any;
        label_sendRmb: any;
        label_sendRmbInput: any;
        label_myRmbInput: any;
        btn_people1: any;
        btn_people2: any;
        btn_people3: any;
        label_say: any;
        label_shareDesc: any;
        list_rec: any;
        _Item_list_rec: any;
        label_all: any;
        label_guild: any;
        label_get: any;
        btn_rmb3: any;
        btn_rmb4: any;
        getItemArr: any;
        btn_detail: any;
        btn_confirm: any;
        label_cannotRed: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        checkCount(): void;
        setMoney(value: any): boolean;
        _tap_btn_rmb1(): void;
        _tap_btn_rmb2(): void;
        _tap_btn_rmb3(): void;
        _tap_btn_rmb4(): void;
        _tap_btn_people1(): void;
        _tap_btn_people2(): void;
        _tap_btn_people3(): void;
        _tap_btn_dice(): void;
        _tap_btn_confirm(): void;
        _tap_label_sendRmb(): void;
        _tap_btn_ok(): void;
        _tap_btn_del(): void;
        _tap_btn_detail(): void;
        onTapNum(e: any): void;
        _data_list_rec(): any[];
        _tap_tab_type(): void;
        _tap_btn_recharge(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_red {
    class RedPacketGet extends mo.gui.Dlg {
        label_rmb: any;
        label_red: any;
        label_name: any;
        label_desc: any;
        list_get: any;
        _Item_list_get: any;
        ico_item: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_get(): any[];
        setItemIcon(iconItem: any, spItemId: any): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_red {
    class RedPacketGetCell extends mo.gui.ItemRenderer {
        label_rmb: any;
        label_name: any;
        ico_best: any;
        ico_item: any;
        dataChanged(): void;
        setItemIcon(iconItem: any, spItemId: any): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_red {
    class RedPacketList extends mo.gui.Dlg {
        list_red: any;
        _Item_list_red: any;
        reds: any;
        _initProp(): void;
        _childrenCreated(): void;
        onReceive(): void;
        dataChanged(): void;
        _data_list_red(): any[];
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_red {
    class RedPacketRecCell extends mo.gui.ItemRenderer {
        label_red: any;
        label_rmb: any;
        label_date: any;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_red {
    class RedPacketListCell extends mo.gui.ItemRenderer {
        label_red: any;
        label_name: any;
        img_icon: any;
        dataChanged(): void;
        _tap_btn_get(): void;
        setRedType(type: any): void;
        setItemIcon(iconItem: any, spItemId: any): void;
    }
}
/**
 * Created by Administrator on 2016/1/6.
 */
declare module g_red {
    class RedPacketSystem extends mo.gui.Dlg {
        dataChanged(): void;
    }
}
/**
 * Created by admin on 16/5/30.
 */
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_red {
    class RedPacketDetail extends mo.gui.Dlg {
        list_totalRec: any;
        _Item_list_totalRec: any;
        dataArr: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _data_list_totalRec(): any[];
    }
}
/**
 * Created by Administrator on 2016/1/5.
 */
declare module g_red {
    class RedPacketDetailCell extends mo.gui.ItemRenderer {
        label_name: any;
        label_get: any;
        img_icon: any;
        dataChanged(): void;
        setItemIcon(iconItem: any, spItemId: any): void;
    }
}
