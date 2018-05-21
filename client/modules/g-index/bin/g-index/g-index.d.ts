/**
 * Created by SmallAiTT on 2015/7/21.
 */
declare module g_index {
    class LocalSDK extends egret.Emitter {
        /*********************** LocalChannel的相关实现 开始 ***********************/
        isRememberPwd: boolean;
        _localLoginCb: any;
        _localLoginCtx: any;
        quickLoginLocal(cb: Function, ctx?: any): void;
        saveUserAndPwd(data: any): void;
        checkLocal(cb: any, cbTarget: any, opt?: any): void;
        loginLocal(userName: string, pwd: string, cb: Function, ctx?: any): void;
        popLoginLocal(cb: any, ctx: any, opt?: any): void;
        registerLocal(userName: string, pwd1: string, pwd2: string, cb: Function, ctx?: any): void;
    }
    var localSdk: LocalSDK;
}
/**
 * Created by SmallAiTT on 2015/5/8.
 */
declare module g_index {
    class LocalChannel extends g_channel.BaseSDKChannel {
        static CHANNEL_ID: number;
        isAutoLogin: boolean;
        isRememberPwd: boolean;
        isMultiAccount: boolean;
        _initProp(): void;
        checkLogin(cb: any, ctx?: any, opt?: any): void;
        login(cb: Function, cbTarget?: any, opt?: any): void;
        logout(cb: Function, cbTarget?: any): void;
        enterGame(cb: Function, cbTarget?: any): void;
        pay(rechargeId: any, channelPayId: any, cb: any, target: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/23.
 */
declare module g_index {
    class IndexRegister extends mo.gui.Dlg {
        inputUser: egret.gui.TextInput;
        inputPwd: egret.gui.TextInput;
        inputConfirmPwd: egret.gui.TextInput;
        btnCancel: egret.gui.Button;
        btnRegister: egret.gui.Button;
        _tap_btnRegister(sender: any): void;
        _tap_btnCancel(sender: any): void;
    }
}
declare module g_index {
    /**
     *
     * @author
     *
     */
    class IndexLogin extends mo.gui.Dlg {
        label_userName: egret.gui.TextInput;
        label_pwd: egret.gui.TextInput;
        btnRegister: egret.gui.Button;
        btnRemember: egret.gui.Button;
        btnQuickLogin: egret.gui.Button;
        btnLogin: egret.gui.Button;
        btnForgetPwd: egret.gui.Button;
        markRemember: egret.gui.UIAsset;
        init(): void;
        _tap_btnRegister(): void;
        _tap_btnRemember(): void;
        _tap_btnQuickLogin(): void;
        _tap_btnLogin(): void;
        _tap_btnForgetPwd(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_index {
    /**
     *
     * @author
     *
     */
    class IndexRetry extends mo.gui.Layer {
        _tap_btn_retry(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_index {
    /**
     *
     * @author
     *
     */
    class IndexBg extends mo.gui.Layer {
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_index {
    /**
     *
     * @author
     *
     */
    class IndexLayer extends mo.gui.Layer {
        btn_login: egret.gui.Button;
        btn_change: egret.gui.Button;
        label_curServer: mo.gui.Label;
        label_account: mo.gui.Label;
        label_ver: mo.gui.Label;
        lyr_serverSelect: egret.gui.Group;
        lyr_serverNew: egret.gui.Group;
        label_lock_server: any;
        label_lock_serverDesc: any;
        ico_lock_status: any;
        ico_lock_new: any;
        grp_lock: egret.gui.Group;
        list_new_server: any;
        _Item_list_new_server: any;
        indexServer: any;
        ico_new: any;
        ico_status: any;
        label_serverDesc: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        checkServersShow(): void;
        _tap_btn_login(): void;
        _tap_btn_cur_server(): void;
        _tap_btn_new_server(): void;
        _tap_label_curServer(): void;
        _tap_btn_change(): void;
        _tap_btn_notice(): void;
        _click_list_new_server(event: egret.gui.ListEvent): void;
        _selectServer(item: any): void;
        _data_list_new_server(): any[];
        selectServer(): void;
        showCurServer(data: any, lock?: boolean): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_index {
    class IndexServerItem extends mo.gui.ItemRenderer {
        label_content: any;
        ico_new: any;
        ico_status: any;
        _childrenCreated(): void;
        _onItemCountChanged(count: any, ctrl: any): void;
        dataChanged(): void;
    }
}
/**
 * Created by admin on 16/1/8.
 */
declare module g_index {
    class IndexServerShortItem extends mo.gui.ItemRenderer {
        label_content: any;
        ico_status: any;
        _childrenCreated(): void;
        _onItemCountChanged(count: any, ctrl: any): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/10/5.
 */
declare module g_index {
    class IndexServerRangeItem extends mo.gui.ItemRenderer {
        static ON_BTN_RANGE: string;
        label_name: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_range(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_index {
    /**
     *
     * @author
     *
     */
    class IndexServer extends mo.gui.Dlg {
        list_serverRange: egret.gui.List;
        list_server: egret.gui.List;
        _Item_list_serverRange: any;
        _Item_list_server: any;
        index: number;
        selectData: any;
        lastIndex: number;
        _initProp(): void;
        _childrenCreated(): void;
        _initItem_list_serverRange(cell: IndexServerRangeItem): void;
        _data_list_serverRange(): any[];
        _data_list_server(): any[];
        _click_list_server(event: egret.gui.ListEvent): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module egret.project {
    /** 是否开启模拟战斗 */
    var fightSimulateEnabled: boolean;
}
declare module g_index {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    class IndexScene extends mo.gui.UIScene {
        show(): void;
        _afterIndexBg(): void;
        onExit(): void;
        on_login_succ(): void;
        on_login_fail(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_index {
    /**
     *
     * @author
     *
     */
    class UserAgreement extends mo.gui.Dlg {
        moduleParam: any;
        label_content: any;
        btn_ok: any;
        _initProp(): void;
        _childrenCreated(): void;
        _tap_btn_ok(): void;
    }
}
