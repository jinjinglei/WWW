/**
 * Created by Administrator on 2016/1/5.
 */
module g_red{
    export class RedPacketRecord extends mo.gui.Layer{
        tab_type;
        list_rec;
        list_sysRec;
        _Item_list_rec;
        _Item_list_sysRec;

        _initProp() {
            var self = this;
            super._initProp();
            self._Item_list_rec = RedPacketRecCell;
            self._Item_list_sysRec = RedPacketSysRecCell;
        }

        onExit() {
            super.onExit();

        }

        _childrenCreated() {

        }

        updateData(){
            var self = this;
            self.refreshList("list_rec");
            self.refreshList("list_sysRec");

        }

        dataChanged(){
            super.dataChanged();

        }

        _data_list_rec():any[]{
            var self = this;
            var data = self.data;//RedEnvelopePersonalEntity
            var getData = data[gc.dsConsts.RedEnvelopePersonalEntity.getData];
            return getData;
        }

        _data_list_sysRec():any[]{
            var self = this;
            var data = self.data;//RedEnvelopePersonalEntity
            var getData = data[gc.dsConsts.RedEnvelopePersonalEntity.getData];
            return getData;
        }


        _tap_tab_type(){
            var self = this;
            var selectedIndex = self.tab_type.selectedIndex;
            //if(selectedIndex==0){
            //
            //}else if(selectedIndex==1){
            //
            //}

            self.list_rec.visible = selectedIndex==0;
            self.list_sysRec.visible = selectedIndex==1;
        }

    }


}