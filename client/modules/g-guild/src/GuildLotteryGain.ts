/**
 * Created by Administrator on 2015/10/5.
 */
module g_guild {
    export class GuildLotteryGain extends mo.gui.Dlg {
        list_items:egret.gui.List;
        _Item_list_items;
        label_cost;
        label_cost10;

        _initProp() {
            super._initProp();
            var self = this;
            self.outsideClosable = true;
            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildAct);
            self.label_cost.text = gameInfo[2];
            self.label_cost10.text = gameInfo[11];
        }

        _data_list_items():any[] {
            var self = this;

            return self.data.items;
        }

        _tap_btn_again1() {
            var self = this;
            gd.guildCtrl.lottery(1, function(items){
                items = utils.itemObj2ObjArr(items);
                GuildLotteryGain.create().setData({items:items, delegate:self.data.delegate}).show();
                self.data.delegate.reset();
                self.close();
            },self);
        }
        _tap_btn_again2() {
            var self = this;
            gd.guildCtrl.lottery(10, function(items){
                items = utils.itemObj2ObjArr(items);
                GuildLotteryGain.create().setData({items:items, delegate:self.data.delegate}).show();
                self.data.delegate.reset();
                self.close();
            },self);
        }
    }
}