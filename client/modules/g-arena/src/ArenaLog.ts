/**
 * Created by Administrator on 2015/10/6.
 */
module g_arena{
    export class ArenaLog extends mo.gui.Dlg{
        list_items;
        _Item_list_items;

        _childrenCreated(){
            super._childrenCreated();
            this.outsideClosable = true;
        }

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = ArenaLogItem;
        }

        _data_list_items():any[]{
            var self = this;
            return self.data.logs;
        }
    }
}
