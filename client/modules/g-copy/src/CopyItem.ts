/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_copy{
    export class CopyItem extends mo.gui.ItemRenderer{

        static ON_ITEM_CLICK:string = "oick";

        label_name:egret.gui.Label;
        label_rest:mo.gui.Label;
        label_note:mo.gui.Label;
        btn_plus:egret.gui.Button;
        img_new:egret.gui.UIAsset;
        touch_rect:egret.gui.Rect;
        grp_star:egret.gui.Group;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.img_new.visible = false;
            self.btn_plus.visible = false;
            self.label_note.visible = false;
            self.registerClassByKey(gd.CopyCtrl,gd.CopyCtrl.ON_CHALLENGE_NUM, self._updateRestStatus);
        }
        dataChanged(){
            super.dataChanged();
            var self = this;
            var copyId = self.data;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            self.label_name.text = copyData[gc.t_copy_name];
            self.enabled = !gd.copyCtrl.isCopyLocked(copyId);

            self._updateRestStatus();
            var starNum = gd.copyCtrl.getCopyStar(copyId);
            uiHelper.setStarGrp(self.grp_star, starNum);

            var conNotPass = gd.copyCtrl.checkPassCon(copyId);
            if(conNotPass){
                var par1, par2;
                if(conNotPass[0] == 1){
                    par1 = "等级";
                    par2 = conNotPass[1];
                }else if(conNotPass[0] == 2){
                    par1 = "通关";
                    var needPassCopyId = conNotPass[1];
                    par2 = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, needPassCopyId)[gc.t_copy_name];
                }else if(conNotPass[0] == 3 && conNotPass[1] > 0){
                    par1 = "元神";
                    par2 = conNotPass[1] + "级";
                }
                self.label_note.visible = !self.enabled;
                self.label_note.text = mo.STR.format("%s%s开启", par1, par2);
            }
        }

        _updateRestStatus(){
            var self = this;
            var copyId = self.data;
            var copyCount = gd.copyCtrl.getCopyCount(copyId);
            self.label_rest.text = copyCount;
            self.btn_plus.visible = copyCount <= 0;
        }

        _tap_btn_plus(){
            var self = this;
            var copyId = self.data;
            gd.copyCtrl.buyCopyCount1(copyId, function(){
                self._updateRestStatus();
            }, self);
        }

        _tap_touch_rect(){
            var self = this;
            self.emitter.emit(self.__class.ON_ITEM_CLICK, self.data, self);
        }
    }
}