/**
 * Created by Administrator on 2015/12/28.
 */
module g_worldboss{
    export class GuildBossLevelCallCell extends mo.gui.ItemRenderer{
        img_bg:egret.gui.UIAsset;
        img_boss:egret.gui.UIAsset;
        label_level:egret.gui.Label;
        label_leftNum;

        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
            var bossId = data.bossId;
            self.label_level.text = self.data.level;
            self.label_leftNum.text = gd.bossGuildCtrl.getNotKillNumByLvl(self.data.level);

            //名字和图像
            var bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
            self.img_boss.source = resHelper.getWorldBossIconPath(bossInfo[gc.c_bossParameter_displayId]);
        }
    }
}
