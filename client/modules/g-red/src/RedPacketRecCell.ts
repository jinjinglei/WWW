/**
 * Created by Administrator on 2016/1/5.
 */
module g_red{
    export class RedPacketRecCell extends mo.gui.ItemRenderer{

        label_red
        label_rmb;
        label_date;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            if(!data[0]) return;
            var type = data[0];
            var rmb = data[1];
            var date = Date.newDate(data[2]);

            self.label_red.text = mo.STR.format("[%s]",gc.c_prop.redEnvelopeType[type]);
            self.label_rmb.text = rmb.toString();
            self.label_date.text = date.toFormat("YYYY-MM-DD");
        }

        //_tap_btn_get(){
        //    var self = this;
        //    var data = self.data;
        //    var getData = data[gc.dsConsts.RedEnvelopeEntity.getData];//[[元宝数量，用户Id,用户名称]]
        //    gd.redEnvelopeCtrl.receiveBonus(data[gc.dsConsts.RedEnvelopeEntity.id],function(){
        //        RedPacketGet.create().setData(data).show();
        //    },self);
        //}
    }
}