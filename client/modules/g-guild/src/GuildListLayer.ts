/**
 * Created by Administrator on 2015/12/2.
 */
module g_guild{
    export class GuildListLayer extends mo.gui.Dlg{
        list_items:egret.gui.List;
        _Item_list_items;
        moduleParam:IModuleParam.GuildList;
        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = GuildListItem;
        }
        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            if(self.moduleParam){
                self.setData(self.moduleParam);
            }
        }

        _tap_btn_search(){
            GuildSearch.create().setData({listLayer:this}).show();
        }
        _tap_btn_create(){
            CreateGuild.create().show();
        }
        reset(){
            var self = this;
            self.refreshList("list_items");
        }

        _data_list_items():any[]{
            var self = this;
            var obj;
            var objs = [];
            for(var i=0; i<self.data.guildData.length; ++i){
                obj = {guildData:self.data.guildData[i],guildPersonalData:self.data.guildPersonalData};
                objs.push(obj);
            }
            return objs;
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function() {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = GuildListLayer;
        moduleCfgItem.fullScr = true;
        moduleCfgItem.sysId = gc.id_c_open.guild;// 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);

        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.GuildList, cb) {
            var self = this;
            gd.guildCtrl.getInfo(function(data){
                var isGuild = data[0];
                var guildPersonalData = data[1];
                var guildData = data[2];
                var guildManagerName = data[3];
                var guildRank = data[4];
                if(!isGuild){
                    moduleParam.guildPersonalData = guildPersonalData;
                    moduleParam.guildData = guildData;
                    cb();
                }
            },self);
        });
    });
}