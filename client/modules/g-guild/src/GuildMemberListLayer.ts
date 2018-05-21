/**
 * Created by john on 15/12/4.
 */
module g_guild{
    export class GuildMemberListLayer extends  mo.gui.Dlg{
        label_membercount;
        label_level;
        list_items:egret.gui.List;
        _Item_list_items;
        _initProp() {
            super._initProp();

            var self = this;
            self._Item_list_items = GuildMemberItem;
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_MANAGER_POSITION_CHANGED, self.reloadData);
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_MEMBER_JOB_CHANGE, self.reset);
        }
        _childrenCreated() {
            super._childrenCreated();

            var self = this;
            gd.guildCtrl.getMembers(function(data) {
                self.reset();
            },self);
        }

        reloadData(){
            var self = this;
            gd.guildCtrl.getMembers(function(data) {
                self.reset();
            },self);
        }

        reset()
        {
            var self = this;
            var guildData = gd.guildCtrl.getData();

            self.setData({memberData:gd.guildCtrl.getMemberList(),guildData:guildData});
            self.refreshList("list_items");
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            var guildData = gd.guildCtrl.getData();
            var level = guildData[gc.dsConsts.GuildEntity.lvl];
            var maxMember =  gd.guildCtrl.getMaxMember(level);
            var membercount = guildData[gc.dsConsts.GuildEntity.guildPopulation];
            self.label_membercount.text = "行会人数 " + membercount + "/" + maxMember;
            self.label_level.text = "Lv." + level + "   " + guildData[gc.dsConsts.GuildEntity.name];

        }
        _data_list_items():any[]{
            var self = this;
            return self.data.memberData;

        }
    }
}