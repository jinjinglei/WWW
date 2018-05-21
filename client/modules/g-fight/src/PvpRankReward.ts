/**
 * Created by Administrator on 2015/10/23.
 */
module g_fight{
    export class PvpRankReward extends mo.gui.Dlg{
        list_items;
        _Item_list_items;

        _childrenCreated(){
            super._childrenCreated();
            this.outsideClosable = true;
        }

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = PvpRankRewardCell;
        }

        _data_list_items():any[]{
            var self = this;
            var pvpInfos = mo.getJSONWithFileName(gc.cfg_c_pvpRankReward);
            var pvpAry = [];

            for(var key in pvpInfos){
                pvpAry.push(pvpInfos[key]);
            }

            return pvpAry;
        }
    }
}