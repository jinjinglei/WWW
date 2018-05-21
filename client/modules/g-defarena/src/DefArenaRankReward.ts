/**
 * Created by Administrator on 2015/10/23.
 */
module g_defarena{
    export class DefArenaRankReward extends mo.gui.Dlg{
        list_items;
        _Item_list_items;
        label_desc;
        container;
        item_reward;

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = DefArenaRankRewardCell;
            mo.closeEmitter.on("DefarenaWinner", self.close, self);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            var reward = gd.challengeCupCtrl.getRward();
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, reward[0]);
            self.item_reward.setData({itemId: reward[0], count: reward[1]});
            self.label_desc.text = itemInfo[gc.t_item_note];
        }

        _data_list_items():any[]{
            var self = this;
            var arenaInfos = mo.getJSONWithFileName(gc.cfg_c_challengeCupRankReward);
            var arenaInfoAry = [];

            for(var key in arenaInfos){
                arenaInfoAry.push(arenaInfos[key]);
            }

            return arenaInfoAry;
        }
    }
}