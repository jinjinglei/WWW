/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_medal{
    import dsConsts = gc.dsConsts;
    export class MedalAchiItem extends mo.gui.ItemRenderer{

        ico_item:g_comp.Ico_Item;
        label_name:mo.gui.Label;
        label_loot:mo.gui.Label;
        label_lootArg:mo.gui.Label;

        _initProp(){
            super._initProp();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            self.ico_item.set('itemId', data[gc.t_medal_id]);
            self.label_name.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, data[gc.t_medal_id])[gc.t_item_name];
            self.label_loot.text = data[gc.t_medal_outputWay];
            //获取进度
            var lootArg = data[gc.t_medal_lootArg];
            var hasLottArg = lootArg != null;
            self.label_lootArg.visible = self.label_lootArg.includeInLayout = hasLottArg;
            if(hasLottArg){
                var strTemp = "%s/%s";
                var type = lootArg[0], curNum = 0, maxNum = lootArg[1];
                if(type == 1){
                    curNum = gd.pkOutCtrl.getAccWinCount();
                }
                if(type == 2){
                    curNum = gd.userCtrl.get(dsConsts.UserEntity.coffersKillNum);
                }
                self.label_lootArg.text = mo.STR.format(strTemp, curNum, maxNum);
            }
        }

        _tap_btn_detail(){
            var self = this;
            PrintDetail.create().setData(self.data).show();
        }
    }
}