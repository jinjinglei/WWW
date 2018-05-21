/**
 * Created by admin on 16/4/14.
 */
module g_fight {
    export class FightTreasureChat extends mo.gui.Layer {

        list_items:any;
        _Item_list_items;
        actItems;
        ico_nothing;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = FightTreasureChatItem;
        }

        dataChanged() {
            super.dataChanged();
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var item = mo.getJSONWithFileName(gc.cfg_t_treasure);
            var all = mo.getJSONWithFileName(gc.cfg_t_item);
            gd.pkOutCtrl.getTreasurePkRecordList(function(data){
                if(data && data.length > 0){
                    self.actItems = [];
                    self.ico_nothing.visible = false;
                    for(var i=0;i< data.length;i++){
                        var obj = data[i];
                        var treasureId = obj[gc.dsConsts.TreasureRecordEntity.treasureId];
                        var g_objs = [];
                        var got = obj[gc.dsConsts.TreasureRecordEntity.items];
                        for(var id in got){
                            var count = got[id];
                            var _item = all[id];
                            g_objs.push({id:id,count:count,item:_item});
                        }
                        self.actItems.push({o:obj,name:all[treasureId][gc.t_item_name],color:all[treasureId][gc.t_item_color],got:g_objs});
                    }
                    self._reset();
                }else{
                    self.ico_nothing.visible = true;
                }
            },self);
        }

        _reset(){
            var self = this;
            self.refreshList("list_items");
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

    }
}