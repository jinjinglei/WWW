/**
 * Created by Sara on 2016/3/28.
 */
module gd {
    export class ProtocolContentCtrl extends mo.DataController {

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.ProtocolContentEntity;
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
        }

        //更新数据
        updateData(data){
            var self = this;
            if(!self._data) return;
            self.updateEntity(data);
        }

        //获取协议内容         gc.dsConsts.ProtocolContentEntity
        getInfo(cb, target) {
            var self = this;
            mo.request4Server(gc.iface.h_protocolContent_getInfo, {}, function (data) {
                cb.call(target,data);
            });
        }

    }
    export var protocolContentCtrl:ProtocolContentCtrl;
    export var protocolContentCtrl:ProtocolContentCtrl = ProtocolContentCtrl.getInstance() ;
}
