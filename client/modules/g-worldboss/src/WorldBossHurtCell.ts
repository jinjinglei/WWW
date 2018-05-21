/**
 * Created by Administrator on 2015/12/29.
 */
module g_worldboss {
    export class WorldBossHurtCell extends mo.gui.ItemRenderer {

        label_index:egret.gui.Label;
        label_name:egret.gui.Label;
        label_hanghui:egret.gui.Label;
        label_hurt:egret.gui.Label;

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
            self.label_index.text = mo.STR.format("%s",data[gc.dsConsts.BossHurtRank.rank]);
            self.label_name.text = mo.STR.format("%s",data[gc.dsConsts.BossHurtRank.userName]);
            self.label_hanghui.text = mo.STR.format("[%s]",data[gc.dsConsts.BossHurtRank.guildName]);
            self.label_hurt.text = mo.STR.format("%s",utils.formatByWan(data[gc.dsConsts.BossHurtRank.hurt]));
        }

    }
}