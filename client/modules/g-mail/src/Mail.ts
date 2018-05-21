/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{

    export interface IMailSysData {
        mails:Array<any>;
    }


    export class Mail extends mo.gui.Dlg{
        moduleParam:IModuleParam.Mail;

        list_mails:egret.gui.List;
        _Item_list_mails;

        data:IMailSysData;
        label_list_empty:egret.gui.Label;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_mails = MailItem;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.label_list_empty.visible = false;
            if(self.moduleParam && self.moduleParam.mails){
                self.setData({mails: self.moduleParam.mails});
            }
        }

        _data_list_mails():any[]{
            var self = this;
            return self.data.mails;
        }

        _click_list_mails(event:egret.gui.ListEvent) {
            var self = this;
            var mailInfo = event.item;
            gd.mailCtrl.setRead(mailInfo[gc.dsConsts.MailEntity.id], function(){
                MailInfo.create().setData({
                    mailInfo: mailInfo
                }).show().onClose(function(){
                    self.refreshList('list_mails');
                });
            }, self);
        }

        dataChanged(){
            var self = this;
            super.dataChanged();
            self.label_list_empty.visible = self.data.mails.length <= 0;
        }

        _tap_btn_onekey(){
            var self = this;
            gd.mailCtrl.pickAllItems(function(){
                self.refreshList('list_mails');
            }, self);
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Mail;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Mail, cb){
            gd.mailCtrl.getList(function(data){
                moduleParam.mails = data;
                cb();
            }, this);
        });
    });
}