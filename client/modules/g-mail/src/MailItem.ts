/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_mid{
    export class MailItem extends mo.gui.ItemRenderer{

        ico_attach:egret.gui.UIAsset;
        label_title:egret.gui.Label;
        label_date:egret.gui.Label;
        label_got:egret.gui.Label;
        img_new:egret.gui.UIAsset;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.img_new.visible = false;
        }


        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data, KEY = gc.dsConsts.MailEntity;
            self.label_title.text = data[KEY.title];
            self.label_date.text = Date.newDate(data[KEY.addTime]).toFormat("YYYY-MM-DD HH24:MI:SS");
            self.img_new.visible = !data[KEY.isRead] && !data[KEY.isPicked];
            self.label_got.visible = data[KEY.isPicked];
            self.ico_attach.visible = Object.keys(data[KEY.items] || {}).length > 0;
        }
    }
}