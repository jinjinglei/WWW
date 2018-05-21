/**
 * Created by lihex on 3/7/16.
 */
module g_guildwar {

    export class GuildWarRewardCell extends mo.gui.ItemRenderer {
        grp_items:egret.gui.Group;
        label_index;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//
            var group = data[0];
            var index = data[1];
            var info = data[2];
            var items;
            if(index==0){
                switch (group){
                    case gc.c_prop.guildGroupKey.diamond:
                        items = info[gc.c_guildWarReward_diamond];
                        break;
                    case gc.c_prop.guildGroupKey.wGold:
                        items = info[gc.c_guildWarReward_wgold];
                        break;
                    case gc.c_prop.guildGroupKey.hGold:
                        items = info[gc.c_guildWarReward_hgold];
                        break;
                    case gc.c_prop.guildGroupKey.silver:
                        items = info[gc.c_guildWarReward_silver];
                        break;
                    case gc.c_prop.guildGroupKey.copper:
                        items = info[gc.c_guildWarReward_copper];
                        break;
                    default :
                        break;
                }
            }else if(index==1){
                switch (group){
                    case gc.c_prop.guildGroupKey.diamond:
                        items = info[gc.c_guildWarReward_diamondSp];
                        break;
                    case gc.c_prop.guildGroupKey.wGold:
                        items = info[gc.c_guildWarReward_wgoldSp];
                        break;
                    case gc.c_prop.guildGroupKey.hGold:
                        items = info[gc.c_guildWarReward_hgoldSp];
                        break;
                    case gc.c_prop.guildGroupKey.silver:
                        items = info[gc.c_guildWarReward_silverSp];
                        break;
                    case gc.c_prop.guildGroupKey.copper:
                        items = info[gc.c_guildWarReward_copperSp];
                        break;
                    default :
                        break;
                }
            }else if(index==2){
                switch (group){
                    case gc.c_prop.guildGroupKey.diamond:
                        items = info[gc.c_guildWarReward_diamondUser];
                        break;
                    case gc.c_prop.guildGroupKey.wGold:
                        items = info[gc.c_guildWarReward_wgoldUser];
                        break;
                    case gc.c_prop.guildGroupKey.hGold:
                        items = info[gc.c_guildWarReward_hgoldUser];
                        break;
                    case gc.c_prop.guildGroupKey.silver:
                        items = info[gc.c_guildWarReward_silverUser];
                        break;
                    case gc.c_prop.guildGroupKey.copper:
                        items = info[gc.c_guildWarReward_copperUser];
                        break;
                    default :
                        break;
                }
            }

            self.label_index.text = info[gc.c_guildWarReward_name];
            uiHelper.setItemsGrp(self.grp_items, utils.kvArrItems2ObjArr(items));
        }
    }
}