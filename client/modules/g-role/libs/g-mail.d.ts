/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    interface IMailSysData {
        mails: Array<any>;
    }
    class Mail extends mo.gui.Dlg {
        moduleParam: IModuleParam.Mail;
        list_mails: egret.gui.List;
        _Item_list_mails: any;
        data: IMailSysData;
        label_list_empty: egret.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_mails(): any[];
        _click_list_mails(event: egret.gui.ListEvent): void;
        dataChanged(): void;
        _tap_btn_onekey(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_mid {
    class MailItem extends mo.gui.ItemRenderer {
        ico_attach: egret.gui.UIAsset;
        label_title: egret.gui.Label;
        label_date: egret.gui.Label;
        label_got: egret.gui.Label;
        img_new: egret.gui.UIAsset;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_mid {
    interface IMailInfoData {
        mailInfo: any;
    }
    class MailInfo extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_got: any;
        label_text: egret.gui.Label;
        data: IMailInfoData;
        btn_get: egret.gui.Button;
        _initProp(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
        dataChanged(): void;
        _tap_btn_get(): void;
    }
}
