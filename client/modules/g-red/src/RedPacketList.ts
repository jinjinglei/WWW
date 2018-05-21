/**
 * Created by Administrator on 2016/1/5.
 */
module g_red{
    export class RedPacketList extends mo.gui.Dlg{
        list_red;
        _Item_list_red;
        reds;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_red = RedPacketListCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            gd.redEnvelopeCtrl.needToDel();
            self.reds = gd.redEnvelopeCtrl.getCanGetList().concat();
            //self.refreshList("list_red");
        }

        onReceive(){
            var self = this;
            gd.redEnvelopeCtrl.needToDel();
            self.reds = gd.redEnvelopeCtrl.getCanGetList().concat();
            if(self.reds.length>0){
                self.refreshList("list_red");
            }else{
                self.close();
            }
        }

        dataChanged(){
            super.dataChanged();
        }
        _data_list_red():any[]{
            var self = this;
            if(self.reds){
                return self.reds;
            }
            return [];
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RedPacketList;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}