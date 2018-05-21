/**
 * Created by admin on 16/5/30.
 */
/**
 * Created by Administrator on 2016/1/5.
 */
module g_red {
    export class RedPacketDetail extends mo.gui.Dlg {

        list_totalRec;
        _Item_list_totalRec;

        dataArr;

        _initProp() {
            var self = this;
            super._initProp();
            self._Item_list_totalRec = RedPacketDetailCell;
        }


        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.dataArr = null;
            self.refreshList("list_totalRec");
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            if(!self.data) return;

            var data = self.data.data;//RedEnvelopePersonalEntity
            var addUpGet = data[gc.dsConsts.RedEnvelopePersonalEntity.addUpGet];
            var itemData= data[gc.dsConsts.RedEnvelopePersonalEntity.exAddUpGet];

            if(!itemData) return;
            self.dataArr = utils.itemObj2ObjArr(itemData);
            var num:number = addUpGet ? addUpGet : 0;
            var id =  gc.c_prop.spItemIdKey.diamond;
            if( num > 0){
                var object = {
                    itemId: id,
                    count:num
                }
                self.dataArr.unshift( object);
            }
        }

        _data_list_totalRec():any[]{
            var self = this;
            return self.dataArr;
        }

    }
}
