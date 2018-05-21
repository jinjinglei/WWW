/**
 * Created by Sara on 2016/1/13.
 */
module gd {
    export class HeartStuntCtrl extends mo.DataController {

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.HeartStuntEntity;
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

        //获取开启条件  【开启等级，vip提前开启等级】
        getOpenCon(index){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var vip = gd.userCtrl.getVip();
            var returnArr = [];
            var openStr = "heartStunt" + (parseInt(index) + 1).toString();
            var vipopenStr = "vip" + openStr;
            if(index == 0) return [c_open[gc.id_c_open.heartStunt1][gc.c_open_lvlRequired],0];
            if(!c_open[gc.id_c_open[openStr]] || !c_open[gc.id_c_open[vipopenStr]]) return returnArr;
            var openLvl = c_open[gc.id_c_open[openStr]][gc.c_open_lvlRequired];
            var openVip = c_open[gc.id_c_open[vipopenStr]][gc.c_open_lvlRequired];
            returnArr[0] = openLvl;
            returnArr[1] = openVip;
            return returnArr;
        }

        //获取心法等级      【等级，层数，当前点数】
        getHeartStuntArr(heartStuntId){
            var self = this;
            var c_heartStunt = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt,heartStuntId);
            var layer = parseInt(c_heartStunt[gc.c_heartStunt_layer]);
            var series = parseInt(c_heartStunt[gc.c_heartStunt_series]);
            var returnArr = [-1];
            if(!self.getData()) return returnArr;
            var lvl = -1;
            var stateArr = self.get(gc.dsConsts.HeartStuntEntity.stateArr)||[];
            var heartLvlArr = self.get(gc.dsConsts.HeartStuntEntity.heartLvlArr)||[];
            for(var i = 0;i<stateArr.length;i++){
                if(stateArr[i] == heartStuntId) {
                    lvl = heartLvlArr[i];
                }
            }
            returnArr[0] = lvl;
            if(lvl==0) return [0,1,0];
            if(lvl>0){
                var rem = lvl%series;
                returnArr[1] = (lvl - rem)/series+1;
                returnArr[2] = rem;
                if(returnArr[1]>layer){
                    returnArr[1] = layer;
                    returnArr[2] = series;
                }
            }
            return returnArr;
        }

        //获取心法神功数据
        getInfo(cb, target) {
            var self = this;
            if(self.getData()) return cb.call(target,self.getData());
            var cfg_c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var lvl = gd.userCtrl.getLvl();
            var openLvl = cfg_c_open[gc.id_c_open.heartStunt1][gc.c_open_lvlRequired];
            if(lvl < openLvl) return mo.showMsg(gc.id_c_msgCode.noRoleLvl,openLvl);
            mo.request4Server(gc.iface.a_heartStunt_getInfo, {}, function (data) {
                if(self.getData()){self.updateEntity(data);}else{self.init(data);}
                cb.call(target,data);
            });
        }

        //选择心法
        choMenCulMethods(index,heartStuntId,cb, target){
            var self = this;
            var argKeys = gc.iface.a_heartStunt_choMenCulMethods_args;
            var args = {};
            args[argKeys.index] = index;
            args[argKeys.heartStuntId] = heartStuntId;
            mo.requestWaiting4Server(gc.iface.a_heartStunt_choMenCulMethods,args, function (data) {
                var heartStuntData = data[gc.dsConsts.ExHeartStuntData.heartStuntData];
                var userData = data[gc.dsConsts.ExHeartStuntData.userData];
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heartStuntData);
                heroCtrl.calPropAndCombat();
                heroCtrl.calSkill();
                cb.call(target,heartStuntData);
            });
        }

        //心法加点
        stuMenCulMethods(index,cb, target){
            var self = this;
            var argKeys = gc.iface.a_heartStunt_stuMenCulMethods_args;
            var args = {};
            args[argKeys.index] = index;
            mo.requestWaiting4Server(gc.iface.a_heartStunt_stuMenCulMethods,args, function (data) {
                var heartStuntData = data[gc.dsConsts.ExHeartStuntData.heartStuntData];
                var userData = data[gc.dsConsts.ExHeartStuntData.userData];
                var isSucceed = data[gc.dsConsts.ExHeartStuntData.isSucceed];
                var genuineQiArr = data[gc.dsConsts.ExHeartStuntData.genuineQiArr];
                if(genuineQiArr.length > 0) {
                    gd.demonLotusCtrl._genuineQi = parseInt(genuineQiArr[0]);
                    gd.demonLotusCtrl._lastUpTime = Date.newDate().toString();
                }
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(heartStuntData);
                heroCtrl.calPropAndCombat();
                heroCtrl.calSkill();
                cb.call(target,[isSucceed,heartStuntData]);
            });
        }

        //更换心法
        chaMenCulMethods(index,heartStuntId,cb, target){
            var self = this;
            var argKeys = gc.iface.a_heartStunt_chaMenCulMethods_args;
            var args = {};
            args[argKeys.index] = index;
            args[argKeys.heartStuntId] = heartStuntId;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.heartStuntCfg);
            mo.showMsg(gc.id_c_msgCode.changeheartStunt, c_game[2], function(){
                mo.requestWaiting4Server(gc.iface.a_heartStunt_chaMenCulMethods,args, function (data) {
                    var heartStuntData = data[gc.dsConsts.ExHeartStuntData.heartStuntData];
                    var userData = data[gc.dsConsts.ExHeartStuntData.userData];
                    gd.userCtrl.updateEntity(userData);
                    self.updateEntity(heartStuntData);
                    heroCtrl.calPropAndCombat();
                    heroCtrl.calSkill();
                    cb.call(target,heartStuntData);
                });
            });
        }

    }
    export var heartStuntCtrl:HeartStuntCtrl;
    export var heartStuntCtrl:HeartStuntCtrl = HeartStuntCtrl.getInstance() ;
}
