/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_guildCopy{
    export class GuildCopyItem extends mo.gui.ItemRenderer{

        label_progress;
        img_title;
        img_bg;
        img_pass;
        label_openLvl;


        _initProp(){
            super._initProp();
            var self = this;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            var sectionId = data[gc.t_guildCopy_id];
            self.img_title.source = data[gc.t_guildCopy_title_icon];
            self.img_bg.source = data[gc.t_guildCopy_bg];

            var isPassed = false, openLvl = data[gc.t_guildCopy_openLvl], isOpen = gd.guildCtrl.getLvl() >= openLvl;
            self.label_progress.visible = isOpen;
            self.img_pass.visible = isOpen;
            self.label_openLvl.visible = !isOpen;
            self.label_openLvl.text = openLvl;
            if(isOpen){
                var completeNum = gd.guildCopyCtrl.getCompletedNum(sectionId);
                var copyLen = gd.guildCopyCtrl.getGuildBossListLength(sectionId);
                isPassed = completeNum == copyLen;
                self.img_pass.visible = isPassed;
                self.label_progress.text = mo.STR.format("%s/%s",completeNum,copyLen);
            }
        }
    }
}