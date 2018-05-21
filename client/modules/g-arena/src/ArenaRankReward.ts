/**
 * Created by Administrator on 2015/10/23.
 */
module g_arena{
    export class ArenaRankReward extends mo.gui.Dlg{
        list_items;
        _Item_list_items;
        label_desc;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.label_desc.text = "排名奖励每日0点结算，结算后1小时内通过邮件发放。 ";
        }

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = ArenaRankRewardCell;
        }

        _data_list_items():any[]{
            var self = this;
            var arenaInfos = mo.getJSONWithFileName(gc.cfg_c_arenaRankReward);
            var arenaInfoAry = [];

            for(var key in arenaInfos){
                arenaInfoAry.push(arenaInfos[key]);
            }

            return arenaInfoAry;
        }
    }
}