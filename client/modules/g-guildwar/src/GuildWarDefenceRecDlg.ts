/**
 * Created by Administrator on 2016/1/25.
 */
module g_guildwar{
    export class GuildWarDefenceRecDlg extends mo.gui.Dlg {
        list_rec;
        _Item_list_rec;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_rec = GuildWarDefenceRecCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data.defData;

            //process.nextTick(function(){
            //    process.nextTick(function(){
            //        process.nextTick(function(){
            //            self.list_rec.scroller.throwVertically(self.list_rec.dataGroup.contentHeight,0);
            //        });
            //    });
            //});
        }

        _data_list_rec():any[]{
            var self = this;
            return self.data.defData.concat().reverse();
        }

    }
}