/**
 * Created by john on 15/12/3.
 */

module g_guild{

    export  enum GuildManagerType {
        Apply,
        Notice,
        Setting,
        Exit,
    }
    export class GuildManager extends mo.gui.Dlg{

        list_items:egret.gui.List;
        _Item_list_items;
        _initProp() {
            var self = this;
            super._initProp();
            self._Item_list_items = GuildManagerCell;
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_GUILD_INFO_CHANGED, self.reloadData);
        }

        reloadData()
        {
            var self = this;
            gd.guildCtrl.getInfo(function(data) {
                var isGuild = data[0];
                var guildPersonalData = data[1];
                var guildData = data[2];
                var guildManagerName = data[3];
                var guildRank = data[4];
                if (isGuild)
                {
                    self.setData(guildData);
                    self.refreshList("list_items");
                }
                self.dataChanged();
            },self);
        }

        dataChanged() {
            super.dataChanged();

        }
        getListTypes()
        {
            var self = this;
            var obj;
            var objs = [];
            var position =  gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.position);
            //会长
            if(position ==  gc.c_prop.guildPostKey.chairman)
            {
                for(var i=0; i<4; ++i){
                    obj = {guildData:self.data,type:i};
                    objs.push(obj);
                }
            } else if(position == gc.c_prop.guildPostKey.viceChairman) { //副会长
                //副会长点击显示入会申请、会员列表与退出公会选项
                obj = {guildData:self.data,type:GuildManagerType.Apply};
                objs.push(obj);
                obj = {guildData:self.data,type:GuildManagerType.Exit};
                objs.push(obj);
            }
            else{
              //普通会员点击只有会员列表与退出公会选项
                obj = {guildData:self.data,type:GuildManagerType.Exit};
                objs.push(obj);
            }

            return objs;
        }
        _data_list_items():any[]{
            var self = this;
            return self.getListTypes();

        }
        _tap_btn_close() {
            var self = this;
            self.close();
        }
        _tap_btn_back(){
            var self = this;
            self.close();
        }
    }
}