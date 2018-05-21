/**
 * Created by Administrator on 2016/1/5.
 */
module g_heart {
    export class HeartChangeSelect extends mo.gui.Layer {
        list_select;
        _Item_list_select;
        index;
        label_point;
        label_cost;

        _initProp() {
            var self = this;
            super._initProp();
            self._Item_list_select = HeartChangeSelectCell;
            self._layerOpt.shownWithAction = false;
            //self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.index = self.data.index;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            self.refreshList("list_select");


            var entity = gd.heartStuntCtrl.getData();
            var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
            var id = stateArr[self.index];
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id);//【等级，层数，当前点数】
            self.label_point.text = [datas[1], datas[2], 10];

            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.heartStuntCfg);
            self.label_cost.text = gameInfo[2];

        }
        _data_list_select():any[]{
            var self = this;
            var entity = gd.heartStuntCtrl.getData();
            var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
            var infos = mo.getJSONWithFileName(gc.cfg_c_heartStunt);
            var hearts = [];
            for(var key in infos){
                var id = infos[key][gc.c_heartStunt_id];
                if(stateArr[self.index] != id)
                    hearts.push({id:id});
            }
            return hearts;
        }

        _tap_btn_close() {

        }

        _tap_btn_help() {
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.heartStuntCfg);
            g_base.BaseShowTip.create().setData({id: 51, param1:gameInfo[2]}).show();
        }
    }
}