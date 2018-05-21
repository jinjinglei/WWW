/**
 * Created by Administrator on 2016/1/25.
 */
module g_coffers{
    export class CoffersHeroRecDlg extends mo.gui.Dlg {
        list_rec;
        _Item_list_rec;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_rec = CoffersHeroRecCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;
        }

        _data_list_rec():any[]{
            var self = this;
            return self.data.recs;
        }

    }
}