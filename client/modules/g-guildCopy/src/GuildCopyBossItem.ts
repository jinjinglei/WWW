/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_guildCopy{
    export class GuildCopyBossItem extends mo.gui.ItemRenderer{

        label_name:egret.gui.Label;
        img_boss:egret.gui.UIAsset;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var bossId = self.data;
            self.img_boss.source = resHelper.getMonsterHeadIconPath(bossId);
            self.label_name.text = (self.itemIndex + 1) + "." + mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId)[gc.t_monster_name];
        }
    }
}