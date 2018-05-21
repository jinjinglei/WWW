/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_copy{
    export class CopyEntryItem extends mo.gui.ItemRenderer{

        label_openLvl:egret.gui.Label;
        label_rest:egret.gui.Label;
        label_loot:egret.gui.Label;
        img_icon:egret.gui.UIAsset;
        img_title:egret.gui.UIAsset;
        img_shadow:egret.gui.UIAsset;
        rect_mask:egret.gui.Rect;


        dataChanged(){
            super.dataChanged();
            var self = this;
            self.label_rest.visible = false;
            self.label_openLvl.visible = false;
            self.label_loot.visible = false;
            self.img_shadow.visible = false;
            var data = self.data;
            var copyType = data[0];
            self.img_icon.source = data[1];
            self.img_title.source = data[2];

            var enable = true;
            if(copyType == gc.c_prop.copyTypeKey.vip){
                var needVip = data[3];
                self.img_shadow.visible = true;
                self.label_rest.visible = true;
                if(needVip < 20){
                    self.label_loot.visible = true;
                }else{
                    self.label_rest.visible = false;
                }
                self.label_loot.text = gd.copyCtrl.getVipLootDesc(needVip);
                if(gd.userCtrl.getVip() >= needVip && needVip < 20){
                    self.label_rest.text = mo.STR.format("今日剩余通关次数: %s", gd.copyCtrl.getVipCopyReTimes(needVip));
                }else{
                    self.label_rest.text = mo.STR.format("VIP%s开启", needVip);
                }
            }else{
                enable = gd.userCtrl.getLvl() >= gd.copyCtrl.getOpenLvl(copyType);
                self.label_openLvl.visible = !enable;
                self.label_openLvl.text = mo.STR.format("%s级开启", gd.copyCtrl.getOpenLvl(copyType));
            }
            self.rect_mask.visible = !enable;
        }
    }
}