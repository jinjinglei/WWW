/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_practice{
    export class PracticeItem extends mo.gui.ItemRenderer{

        label_openLvl:egret.gui.Label;
        img_icon:egret.gui.UIAsset;
        img_title:egret.gui.UIAsset;
        img_shadow:egret.gui.UIAsset;
        rect_mask:egret.gui.Rect;


        dataChanged(){
            super.dataChanged();
            var self = this;
            self.img_shadow.visible = false;
            var data = self.data;
            var copyType = data[0];
            self.img_icon.source = data[1];
            self.img_title.source = data[2];
            var desc = data[3];
            var enable = true;
            enable = gd.userCtrl.getLvl() >= gd.copyCtrl.getPracticeOpenLvl(copyType);
            if(enable){
                self.label_openLvl.text = desc;
            }else{
                self.label_openLvl.text = mo.STR.format("%s级开启", gd.copyCtrl.getPracticeOpenLvl(copyType));
            }
            self.rect_mask.visible = !enable;
        }
    }
}