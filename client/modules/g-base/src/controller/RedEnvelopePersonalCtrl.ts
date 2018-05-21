/**
 * Created by Sara on 2016/1/5.
 */
module gd {
    export class RedEnvelopePersonalCtrl extends mo.DataController {

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.RedEnvelopePersonalEntity;
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

        getGetData(){

        }

        //获取今日次数数据      【vip等级,剩余次数,次数上限】       VIP%s今日发送次数剩余%s/%s（当前剩余次数/次数上限）
        getDayCount(type){
            var self = this;
            var returnArr = [];
            var vip = gd.userCtrl.getVip();
            returnArr[0] = vip;
            var cfg_c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var exData = {};
            var lastSendTime = self.get(gc.dsConsts.RedEnvelopePersonalEntity.lastSendTime);
            if (lastSendTime && Date.newDate(lastSendTime).equalsDay(Date.newDate())) exData = self.get(gc.dsConsts.RedEnvelopePersonalEntity.exData);
            if(type == gc.c_prop.redEnvelopeTypeKey.comRed){
                var count = cfg_c_vip[vip][gc.c_vip_worldCount];
                returnArr[2] = count;
                var comRedArr = exData[gc.c_prop.redEnvelopeTypeKey.comRed]||[0];
                returnArr[1] = count-comRedArr[0];
            }else if(type == gc.c_prop.redEnvelopeTypeKey.guildRed){
                var count = cfg_c_vip[vip][gc.c_vip_guildCount];
                returnArr[2] = count;
                var guildArr = exData[gc.c_prop.redEnvelopeTypeKey.guildRed]||[0];
                returnArr[1] = count-guildArr[0];
            }else{
                returnArr[2] = 0;
                returnArr[1] = 0;
            }
            return returnArr;
        }

        //获取今日剩余额度      -1:无限制
        getDayShare(){
            var self = this;
            var vip = gd.userCtrl.getVip();
            var cfg_c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var dayShare = cfg_c_vip[vip][gc.c_vip_redEnvelopeCount];
            if(!self.getData()) return dayShare;
            if(dayShare == -1) return dayShare;
            var refreshTime = self.get(gc.dsConsts.RedEnvelopePersonalEntity.lastSendTime);
            if(!refreshTime) return dayShare;
            if(refreshTime){
                if(Date.newDate(refreshTime).equalsDay(Date.newDate())){
                    var count = self.get(gc.dsConsts.RedEnvelopePersonalEntity.sendCount)||0;
                    dayShare -= count;
                }
            }
            return dayShare;
        }

        //          getData:发送记录[红包id,红包id........]
        getInfo(cb, target) {
            var self = this;
            if(gd.guildPersonalCtrl.getData() && self.getData()) return cb.call(target,self.getData());
            mo.requestWaiting4Server(gc.iface.a_redEnvelopePersonal_getInfo, {}, function (data) {
                var guildPersonalData = data[gc.dsConsts.ExRedEnvelopeData.guildPersonalData]||{};
                var redEnvelopePersonalData = data[gc.dsConsts.ExRedEnvelopeData.redEnvelopePersonalData]||{};
                if(self.getData()){self.updateEntity(redEnvelopePersonalData);}else{self.init(redEnvelopePersonalData);}
                if(gd.guildPersonalCtrl.getData()){gd.guildPersonalCtrl.updateEntity(guildPersonalData);}else{gd.guildPersonalCtrl.init(guildPersonalData);}
                cb.call(target,redEnvelopePersonalData);
            });
        }

    }
    export var redEnvelopePersonalCtrl:RedEnvelopePersonalCtrl;
    export var redEnvelopePersonalCtrl:RedEnvelopePersonalCtrl = RedEnvelopePersonalCtrl.getInstance() ;
}
