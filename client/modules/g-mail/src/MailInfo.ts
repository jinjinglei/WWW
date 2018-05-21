/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{

    export interface IMailInfoData{
        mailInfo:any;
    }

    export class MailInfo extends mo.gui.Dlg{
        list_items:egret.gui.List;
        _Item_list_items;
        label_got;

        label_text:egret.gui.Label;
        data:IMailInfoData;
        btn_get:egret.gui.Button;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

        }

        _data_list_items():any[]{
            var self = this, filter, sorter;
            return utils.itemObj2ObjArr(self.data.mailInfo[gc.dsConsts.MailEntity.items]);
        }

        dataChanged(){
            var self = this;
            super.dataChanged();
            var info = self.data.mailInfo, KEY = gc.dsConsts.MailEntity;
            var type = info[KEY.type], args = info[KEY.replaceArgs];
            if(args && args.length > 0){
                var strArgs = [info[KEY.content]].concat(args);
                self.label_text.text = mo.STR.format.apply(mo.STR, strArgs);
            }else{
                self.label_text.text = info[KEY.content];
            }
            var hasAttachment = Object.keys((info[KEY.items] ||{})).length > 0;
            self.btn_get.icon = hasAttachment? "btn_txt_g_getattachment" : "btn_txt_g_ok";
            self.label_got.visible = info[KEY.isPicked] && hasAttachment;
            self.btn_get.visible = !self.label_got.visible;
        }

        _tap_btn_get(){
            var self = this;
            var info = self.data.mailInfo, KEY = gc.dsConsts.MailEntity;
            var hasAttachment = Object.keys((info[KEY.items] ||{})).length > 0;
            if(hasAttachment){
                gd.mailCtrl.pickItems(info[KEY.id], function(){
                    self.close();
                }, self);
            }else{
                self.close();
            }
        }

    }
}