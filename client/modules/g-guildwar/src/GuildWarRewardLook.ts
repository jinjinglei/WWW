/**
 * Created by Administrator on 2015/12/22.
 */
module g_guildwar{
    export class GuildWarRewardLook extends mo.gui.Dlg{
        moduleParam:IModuleParam.WorldBoss;

        ico_title;
        list_items:egret.gui.List;
        _Item_list_items;
        tab_btn:egret.gui.TabBar;

        _initProp() {
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;

            self._Item_list_items = GuildWarRewardCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var bossId = self.moduleParam.bossId;
            var c_bossWorld = mo.getJSONWithFileName(gc.cfg_c_bossWorld);
            var c_data = c_bossWorld[bossId];
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var group = self.data.group;
            var gScrs = ["tit_txt_g_zhuangsijl","tit_txt_g_baijingjl","tit_txt_g_huangingjl","tit_txt_g_baiyingjl","tit_txt_g_qingtongjl"];
            self.ico_title.source = gScrs[group-1];
        }
        getPropStr(props, isLeft){
            var str = "";
            for(var i=0; i<props.length; ++i){
                if(isLeft && i%2==1) continue;
                if(!isLeft && i%2==0) continue;
                str += "[ubb color=#fff000]"+gc.c_prop.heroProp[props[i][0]]+": "+"[/ubb]";
                str += "[ubb color=#00ff00]+"+(props[i][1])+"[/ubb]";
                str += "\n";
            }
            return str;
        }


        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:55}).show();
        }

        _tap_tab_btn() {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            if(selectedIndex == 0){

            }else if(selectedIndex==1){

            }else if(selectedIndex==2){

            }
            self.refreshList("list_items");
        }

        _data_list_items():any[] {
            var self = this;
            var group = self.data.group;

            var rewardObj = mo.getJSONWithFileName(gc.cfg_c_guildWarReward);
            var rewards = [];
            var index = self.tab_btn.selectedIndex;
            if(index==-1) index = 0;
            for(var key in rewardObj){
                var info = rewardObj[key];
                if(index==0){
                    switch (group){
                        case gc.c_prop.guildGroupKey.diamond:
                            if(!info[gc.c_guildWarReward_diamond]) continue;
                        case gc.c_prop.guildGroupKey.wGold:
                            if(!info[gc.c_guildWarReward_wgold]) continue;
                        case gc.c_prop.guildGroupKey.hGold:
                            if(!info[gc.c_guildWarReward_hgold]) continue;
                        case gc.c_prop.guildGroupKey.silver:
                            if(!info[gc.c_guildWarReward_silver]) continue;
                        case gc.c_prop.guildGroupKey.copper:
                            if(!info[gc.c_guildWarReward_copper]) continue;
                        default :
                            break;
                    }
                }else if(index==1){
                    switch (group){
                        case gc.c_prop.guildGroupKey.diamond:
                            if(!info[gc.c_guildWarReward_diamondSp]) continue;
                        case gc.c_prop.guildGroupKey.wGold:
                            if(!info[gc.c_guildWarReward_wgoldSp]) continue;
                        case gc.c_prop.guildGroupKey.hGold:
                            if(!info[gc.c_guildWarReward_hgoldSp]) continue;
                        case gc.c_prop.guildGroupKey.silver:
                            if(!info[gc.c_guildWarReward_silverSp]) continue;
                        case gc.c_prop.guildGroupKey.copper:
                            if(!info[gc.c_guildWarReward_copperSp]) continue;
                        default :
                            break;
                    }
                }else if(index==2){
                    switch (group){
                        case gc.c_prop.guildGroupKey.diamond:
                            if(!info[gc.c_guildWarReward_diamondUser]) continue;
                        case gc.c_prop.guildGroupKey.wGold:
                            if(!info[gc.c_guildWarReward_wgoldUser]) continue;
                        case gc.c_prop.guildGroupKey.hGold:
                            if(!info[gc.c_guildWarReward_hgoldUser]) continue;
                        case gc.c_prop.guildGroupKey.silver:
                            if(!info[gc.c_guildWarReward_silverUser]) continue;
                        case gc.c_prop.guildGroupKey.copper:
                            if(!info[gc.c_guildWarReward_copperUser]) continue;
                        default :
                            break;
                    }
                }
                rewards.push([group, index, rewardObj[key]]);
            }

            return rewards;
        }
    }
    //egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
    //
    //    //主模块配置
    //    var moduleCfgItem = new mo.ModuleCfgItem();
    //    moduleCfgItem.targetClass = GuildWarRewardLook;
    //    moduleCfgItem.fullScr = true;
    //    mo.moduleMgr.registerModule(moduleCfgItem);
    //
    //    moduleCfgItem.onPreAsync(function(moduleParam, cb){
    //        cb();
    //    });
    //});
}