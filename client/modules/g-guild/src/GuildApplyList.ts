/**
 * Created by john on 15/12/4.
 */

module g_guild {

    export  class GuildApplyList  extends mo.gui.Dlg{

        label_member;
        list_items:egret.gui.List;
        _Item_list_items;
        _initProp() {
            var self = this;
            super._initProp();
            self._Item_list_items = GuildApplyListItem;
        }
        _childrenCreated() {
            super._childrenCreated();

            var self = this;
            self.reloadData();
        }
        dataChanged() {
            super.dataChanged();
            var self = this;

            var guildData = gd.guildCtrl.getData();
            var level = guildData[gc.dsConsts.GuildEntity.lvl];
            var maxMember =  gd.guildCtrl.getMaxMember(level);
            var membercount = guildData[gc.dsConsts.GuildEntity.guildPopulation];
            self.label_member.text = "成员人数 " + membercount + "/" + maxMember;
        }
        reloadData()
        {
            var self = this;
            gd.guildCtrl.getAppliedMembers(function(data:any){
                self.setData({memberData:data});
                self.dataChanged();
                self.refreshList("list_items");
            },self);

        }

        _data_list_items():any[]{
            var self = this;
            return self.data.memberData;
        }
    }
}