/**
 * Created by Administrator on 2015/9/24.
 */
module g_fight {
    export class PVPLog extends mo.gui.Dlg {
        list_log;
        _Item_list_log;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_log = PVPLogItem;
        }

        _childrenCreated() {
            super._childrenCreated();
            this.outsideClosable = true;
        }

        onEnter() {
            var self = this;
            super.onEnter();
        }

        _data_list_log():any[]{
            var self = this;
            return self.data.logData;
        }
    }
}