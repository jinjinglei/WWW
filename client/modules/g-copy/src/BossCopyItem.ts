/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_copy{
    export class BossCopyItem extends mo.gui.ItemRenderer{

        label_name:egret.gui.Label;
        img_boss:egret.gui.UIAsset;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var copyId = self.data;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            self.label_name.text = copyData[gc.t_copy_name];
            var bossId = copyData[gc.t_copy_bossID];
            self.img_boss.source = resHelper.getMonsterHeadIconPath(bossId);
            self.enabled = !gd.copyCtrl.isCopyLocked(copyId);
            var passCon = gd.copyCtrl.checkPassCon(copyId);
            if(!self.enabled){
                self.label_name.text = mo.STR.format("%s级解锁", passCon[1]);
            }
            self.invalidateSkinState();
        }
    }
}