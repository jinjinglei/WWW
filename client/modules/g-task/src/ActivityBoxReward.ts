/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_task{
    export class ActivityBoxReward extends mo.gui.Dlg{

        btn_do:egret.gui.Button;

        list_items:egret.gui.List;
        _Item_list_items;

        index;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_base.BaseItemCell;
        }

        _data_list_items():any[]{
            var self = this, filter, sorter;
            return gd.userUtils.getLoots(utils.itemObj2ObjArr(gd.taskCtrl.queryVitalityBoxReward(self.index)[1]));
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            self.index = self.data.index;
            var spItems = utils.itemObj2ObjArr(gd.taskCtrl.queryVitalityBoxReward(self.index)[0]);
            for(var i = 0, li = 2; i < li; i++){
                var grp = self['grp_res' + i];
                var spItem = spItems[i];
                grp.visible = spItem != null;
                if(spItem){
                    uiHelper.setResGrp(grp, spItem.itemId, spItem.count);
                }
            }

            var opt = gd.taskCtrl.getVitalityBoxState(self.index);
            var canGet = opt[0];
            var isRecived = opt[1];
            self.btn_do.icon = (canGet && !isRecived) ? "btn_txt_g_get" : "btn_txt_g_back";
        }

        _tap_btn_do(){
            var self = this;
            var opt = gd.taskCtrl.getVitalityBoxState(self.index);
            var canGet = opt[0];
            var isRecived = opt[1];
            if(canGet && !isRecived){
                gd.taskCtrl.getVitalityChest(self.index, self.close, self);
            }else{
                self.close();
            }
        }
    }
}