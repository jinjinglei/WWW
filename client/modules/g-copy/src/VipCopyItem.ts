/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_copy{
    export class VipCopyItem extends mo.gui.ItemRenderer{

        label_name:egret.gui.Label;
        img_icon:egret.gui.UIAsset;
        label_unlockLvl:mo.gui.Label;
        grp_star:egret.gui.Group;
        img_txt_bg:egret.gui.UIAsset;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            self.img_txt_bg.visible = false;
            var copyId = self.data;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            self.label_name.text = copyData[gc.t_copy_name];
            self.img_icon.source = g_copy.vipBg[gd.copyCtrl.getCopyVip(copyId)][0];

            var starNum = gd.copyCtrl.getCopyStar(copyId);
            uiHelper.setStarGrp(self.grp_star, starNum);
            self.grp_star.visible = starNum > 0;
            self.img_txt_bg.visible = starNum > 0;

            var conNotPass = gd.copyCtrl.checkPassCon(copyId);
            if(conNotPass){
                self.label_unlockLvl.text = conNotPass[1]; //只可能是玩家等级不足
                self.img_txt_bg.visible = true;
            }
            self.enabled = conNotPass == null;
            self.invalidateSkinState();
        }

        _tap_touch_rect(){
            var self = this;
            self.delegate.onCopyItemClick(self.data);
        }
    }
}