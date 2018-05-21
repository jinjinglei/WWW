/**
 * Created by Sara on 2016/1/13.
 */
module gd {
    export class DemonLotusCtrl extends mo.DataController {
        _genuineQi:number = 0;
        _lastUpTime:string = "";
        _dlLastUpTime:string = "";

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.DemonLotusEntity;
        }

        initData(data?){
            var cfg_c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var lvl = gd.userCtrl.getLvl();
            var openLvl = cfg_c_open[gc.id_c_open.expBox][gc.c_open_lvlRequired];
            if(lvl >= openLvl) this.getInfo(function(){},this);
        }

        //更新数据
        updateData(data){
            var self = this;
            if(!self._data) return;
            self.updateEntity(data);
        }

        calGenuineQi(){
            var self = this;
            var userData = gd.userCtrl.getData();
            var exData = userData[gc.dsConsts.UserEntity.exData]||{};
            var demonLotusData = gd.demonLotusCtrl.getData();
            var cfg_c_genuineQi = mo.getJSONWithFileName(gc.cfg_c_genuineQi);
            var cfg_c_demonLotus = mo.getJSONWithFileName(gc.cfg_c_demonLotus);
            var cfg_t_talismanSkill = mo.getJSONWithFileName(gc.cfg_t_talismanSkill);
            var lvl = userData[gc.dsConsts.UserEntity.lvl];
            var offAddGenuineQi = 0;
            var genuLimit = 0;
            var nowTime = Date.newDate();
            var genuineQi = self._genuineQi;
            var lastTime =Date.newDate(self._lastUpTime);      //最后结算时间
            if(!cfg_c_genuineQi[lvl] || self._lastUpTime.length<=0) return [offAddGenuineQi,genuLimit];
            var produceFix = cfg_c_genuineQi[userData[gc.dsConsts.UserEntity.lvl]][gc.c_genuineQi_recovery] || 0;//基础速度
            if(exData[gc.c_prop.userExDataKey.talismanSkill] && exData[gc.c_prop.userExDataKey.talismanSkill][gc.c_prop.talismanSkillTypeKey.genuineQi]){
                var skillArr = exData[gc.c_prop.userExDataKey.talismanSkill][gc.c_prop.talismanSkillTypeKey.genuineQi];
                for(var i = 0 ;i<skillArr.length;i++){
                    var skillId = skillArr[i];
                    if(cfg_t_talismanSkill[skillId]){
                        produceFix += cfg_t_talismanSkill[skillId][gc.t_talismanSkill_effect][0][0];
                    }
                }
            }
            if(!userData[gc.dsConsts.UserEntity.exData][gc.c_prop.userExDataKey.genuineQi]) userData[gc.dsConsts.UserEntity.exData][gc.c_prop.userExDataKey.genuineQi] = [];
            var exData1 = userData[gc.dsConsts.UserEntity.exData][gc.c_prop.userExDataKey.genuineQi];
            if(!exData1[0]) userData[gc.dsConsts.UserEntity.exData][gc.c_prop.userExDataKey.genuineQi][0] = Date.newDate();

            //距离上次结算的秒差
            var second = (nowTime.getTime()-lastTime.getTime())/1000;
            if(second < 0) second = 0;
            offAddGenuineQi = Math.ceil(second*produceFix) + genuineQi;
            var advanceLvl = 0;
            if(demonLotusData) advanceLvl = demonLotusData[gc.dsConsts.DemonLotusEntity.advanceLvl];
            var genqiAccLimit = cfg_c_demonLotus[advanceLvl][gc.c_demonLotus_genqiAccLimit];
            genuLimit = parseInt(cfg_c_genuineQi[lvl][gc.c_genuineQi_genuLimit]) + genqiAccLimit;    //真气上限
            if(offAddGenuineQi > genuLimit){
                if(genuineQi < genuLimit){
                    offAddGenuineQi = genuLimit;
                }else{
                    offAddGenuineQi = genuineQi;
                }
            }

            if(second>=1){
                //userData[gc.dsConsts.UserEntity.genuineQi] =offAddGenuineQi;
                //userData[gc.dsConsts.UserEntity.genuineQi] = Math.ceil(userData[gc.dsConsts.UserEntity.genuineQi]);
                //userData[gc.dsConsts.UserEntity.exData][gc.c_prop.userExDataKey.genuineQi][0] = Date.newDate();
            }

            return [offAddGenuineQi,genuLimit,produceFix];
    }
        //是否最大经验
        isMaxExpc(){
            var self = this;
            var nowExpc = self.calNowGet();
            var limitExpc = self.getExpcLimit();
            return nowExpc>=limitExpc;
        }

        //获取经验上限
        getExpcLimit(){
            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var c_demonLotus = mo.getJSONWithFileName(gc.cfg_c_demonLotus);
            var demonLotusData = gd.demonLotusCtrl.getData();
            var lvl = demonLotusData[gc.dsConsts.DemonLotusEntity.lvl];
            var advanceLvl = demonLotusData[gc.dsConsts.DemonLotusEntity.advanceLvl]||0;
            var storeLimit = parseInt(c_lvl[lvl][gc.c_lvl_storeLimit]);       //经验贮存上限
            storeLimit += parseInt(c_demonLotus[advanceLvl][gc.c_demonLotus_expcAccLimit]);
            return storeLimit;
        }

        //计算妖莲经验
        calNowGet(){
            var self = this;
            var returnAddUpExpc = 0;
            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var c_demonLotus = mo.getJSONWithFileName(gc.cfg_c_demonLotus);
            var demonLotusData = gd.demonLotusCtrl.getData();
            var nowTime = Date.newDate();
            var lvl = demonLotusData[gc.dsConsts.DemonLotusEntity.lvl];
            var advanceLvl = demonLotusData[gc.dsConsts.DemonLotusEntity.advanceLvl]||0;
            var addUpExpc = parseInt(demonLotusData[gc.dsConsts.DemonLotusEntity.addUpExpc]);
            var lastOpeTime = self._dlLastUpTime;//demonLotusData[gc.dsConsts.DemonLotusEntity.lastOpeTime];
            var expOutput = parseInt(c_lvl[lvl][gc.c_lvl_expOutput]);       //经验产量（每秒）
            expOutput += parseInt(c_demonLotus[advanceLvl][gc.c_demonLotus_expOutput]);
            var storeLimit = parseInt(c_lvl[lvl][gc.c_lvl_storeLimit]);       //经验贮存上限
            storeLimit += parseInt(c_demonLotus[advanceLvl][gc.c_demonLotus_expcAccLimit]);
            var expc = 0;
            if(addUpExpc < storeLimit && lastOpeTime && nowTime > Date.newDate(lastOpeTime)){
                var second = (nowTime.getTime()-Date.newDate(lastOpeTime).getTime())/1000;
                if(second > 1) expc = Math.round(expOutput*second);
            }
            var expcSum = addUpExpc + expc;
            returnAddUpExpc = expcSum;
            if(expcSum > storeLimit) returnAddUpExpc = storeLimit;
            pointCtrl.cal(gc.c_prop.pointRedKey.demonLotus_main);
            return returnAddUpExpc;
        }

        //获取聚灵妖莲数据          return [是否周卡,是否月卡,gc.dsConsts.DemonLotusEntity]
        getInfo(cb, target) {
            var self = this;
            if(self.getData()) return cb.call(target,[false,false,self.getData()]);
            var cfg_c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var lvl = gd.userCtrl.getLvl();
            var openLvl = cfg_c_open[gc.id_c_open.expBox][gc.c_open_lvlRequired];
            if(lvl < openLvl) return mo.showMsg(gc.id_c_msgCode.noRoleLvl,openLvl);
            mo.request4Server(gc.iface.a_demonLotus_getInfo, {}, function (data) {
                var isWeek = data[gc.dsConsts.ExDemonLotusData.isWeek];
                var isMonth = data[gc.dsConsts.ExDemonLotusData.isMonth];
                var demonLotusData = data[gc.dsConsts.ExDemonLotusData.demonLotusData];
                var genuineQiArr = data[gc.dsConsts.ExDemonLotusData.genuineQiArr];
                self._dlLastUpTime = Date.newDate().toString();
                if(genuineQiArr.length > 0) {
                    self._genuineQi = parseInt(genuineQiArr[0]);
                    self._lastUpTime = Date.newDate().toString();
                }
                if(self.getData()){self.updateEntity(demonLotusData);}else{self.init(demonLotusData);}
                cb.call(target,[isWeek,isMonth,demonLotusData]);
            });
        }

        //升级聚灵妖莲
        upLotus(cb, target){
            var self = this;
            var cfg_c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var lvl = self.get(gc.dsConsts.DemonLotusEntity.lvl);
            var upLotusId = cfg_c_game[gc.id_c_game.demonLotusCfg][0];
            var lvlLimit = cfg_c_game[gc.id_c_game.demonLotusCfg][1];
            if(lvl>=lvlLimit) return mo.showMsg("等级已达上限");
            var upLotusNum = cfg_c_lvl[lvl+1][gc.c_lvl_upLotusNum];     //升级需要的道具数量
            var count = gd.userCtrl.getItemNum(upLotusId);
            if(count < upLotusNum){
                g_base.GainWay.create().setData({itemId:upLotusId}).show();
                return;
            }
            mo.requestWaiting4Server(gc.iface.a_demonLotus_upLotus, {}, function (data) {
                var demonLotusData = data[gc.dsConsts.ExDemonLotusData.demonLotusData];
                var delBagItems = data[gc.dsConsts.ExDemonLotusData.delBagItems];
                var userData = gd.userCtrl.getData();
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(demonLotusData);
                self._dlLastUpTime = Date.newDate().toString();
                cb.call(target,demonLotusData);
            });
        }

        //领取收益
        getRevenue(cb, target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_demonLotus_getRevenue, {}, function (data) {
                var expSum = data[gc.dsConsts.ExDemonLotusData.expSum];
                if(expSum > 0) g_msg.UIMsgTextCtrl.push("获得经验："+ expSum);
                var demonLotusData = data[gc.dsConsts.ExDemonLotusData.demonLotusData];
                var userData = data[gc.dsConsts.ExDemonLotusData.userData];
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(demonLotusData);
                self._dlLastUpTime = Date.newDate().toString();
                pointCtrl.cal(gc.c_prop.pointRedKey.demonLotus_main);
                cb.call(target,demonLotusData);
            });
        }

        //获得开光次数
        getOpeningCount() {
            return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.opening) || 0;
        }

        //开光
        opening(cb, target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_demonLotus_opening, {}, function (data) {
                var diffExp = data[gc.dsConsts.Opening.diffExp] || 0;
                if(diffExp > 0) g_msg.UIMsgTextCtrl.push("获得经验："+ Math.floor(diffExp));
                var userData = data[gc.dsConsts.Opening.userData]||{};
                gd.userCtrl.updateEntity(userData);
                cb.call(target,data);
            });
        }

        //妖莲进阶
        lotusAdvance(cb, target){
            var self = this;
            var cfg_c_demonLotus = mo.getJSONWithFileName(gc.cfg_c_demonLotus);
            var lvl = self.get(gc.dsConsts.DemonLotusEntity.lvl);
            var upLotusId = gc.c_prop.spItemIdKey.lotus;
            var advanceLvl = parseInt(self.get(gc.dsConsts.DemonLotusEntity.advanceLvl))||0;      //妖莲进阶等级
            if(!cfg_c_demonLotus[advanceLvl+1]) return mo.showMsg("进阶等级已达上限");
            var advNeedLvl = cfg_c_demonLotus[advanceLvl][gc.c_demonLotus_advNeedLvl];   //进阶需要妖莲等级
            if(lvl < advNeedLvl) return mo.showMsg(advNeedLvl+"级可进阶");
            var upLotusNum = cfg_c_demonLotus[advanceLvl][gc.c_demonLotus_advCosLotus];     //妖莲进阶消耗妖莲之心
            var count = gd.userCtrl.getItemNum(upLotusId);
            if(count < upLotusNum){
                g_base.GainWay.create().setData({itemId:upLotusId}).show();
                return;
            }
            mo.requestWaiting4Server(gc.iface.a_demonLotus_lotusAdvance, {}, function (data) {
                var isSucceed = data[gc.dsConsts.ExDemonLotusData.isSucceed];
                var demonLotusData = data[gc.dsConsts.ExDemonLotusData.demonLotusData];
                var delBagItems = data[gc.dsConsts.ExDemonLotusData.delBagItems];
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                gd.userCtrl.set(gc.dsConsts.UserEntity.bag, bag);
                self.updateEntity(demonLotusData);
                cb.call(target,[isSucceed,demonLotusData]);
            });
        }

        //是否最大经验
        isCanTrain(){
            var self = this;
            var lvl = gd.userCtrl.getLvl();
            var cfg_c_demonLotus = mo.getJSONWithFileName(gc.cfg_c_demonLotus);
            var upLotusId = gc.c_prop.spItemIdKey.lotus;
            var treasureLvl = parseInt(self.get(gc.dsConsts.DemonLotusEntity.treasureLvl))||0;      //妖莲宝物等级
            if(!cfg_c_demonLotus[treasureLvl][gc.c_demonLotus_treaCosGenqi]) return false;
            var treaNeedUserLvl = cfg_c_demonLotus[treasureLvl][gc.c_demonLotus_treaNeedUserLvl];
            if(lvl < treaNeedUserLvl) return false;
            var treaCosLotus = cfg_c_demonLotus[treasureLvl][gc.c_demonLotus_treaCosLotus];     //宝物升级消耗妖莲
            var treaCosGenqi = cfg_c_demonLotus[treasureLvl][gc.c_demonLotus_treaCosGenqi];     //宝物升级消耗真气
            var count = gd.userCtrl.getItemNum(upLotusId);
            if(count < treaCosLotus){
                return false;
            }
            var genqiData = self.calGenuineQi();
            if(genqiData[0] < treaCosGenqi){
                return false;
            }
            return true;
        }

        //妖莲宝物培养
        treasureTrain(cb, target){
            var self = this;
            var cfg_c_demonLotus = mo.getJSONWithFileName(gc.cfg_c_demonLotus);
            var upLotusId = gc.c_prop.spItemIdKey.lotus;
            var lvl = gd.userCtrl.getLvl();
            var advanceLvl = parseInt(self.get(gc.dsConsts.DemonLotusEntity.advanceLvl))||0;      //妖莲进阶等级
            var treasureLvl = parseInt(self.get(gc.dsConsts.DemonLotusEntity.treasureLvl))||0;      //妖莲宝物等级
            if(!cfg_c_demonLotus[treasureLvl][gc.c_demonLotus_treaCosGenqi]) return mo.showMsg("妖莲宝物等级已达上限");
            var treaNeedUserLvl = cfg_c_demonLotus[treasureLvl][gc.c_demonLotus_treaNeedUserLvl];
            if(lvl < treaNeedUserLvl) return mo.showMsg("人物升至"+treaNeedUserLvl+"级后可培养莲宝");
            var treaCosLotus = cfg_c_demonLotus[treasureLvl][gc.c_demonLotus_treaCosLotus];     //宝物升级消耗妖莲
            var count = gd.userCtrl.getItemNum(upLotusId);
            if(count < treaCosLotus){
                g_base.GainWay.create().setData({itemId:upLotusId}).show();
                return;
            }
            mo.requestWaiting4Server(gc.iface.a_demonLotus_treasureTrain, {}, function (data) {
                var isSucceed = data[gc.dsConsts.ExDemonLotusData.isSucceed];
                var userData = data[gc.dsConsts.ExDemonLotusData.userData];
                var demonLotusData = data[gc.dsConsts.ExDemonLotusData.demonLotusData];
                var delBagItems = data[gc.dsConsts.ExDemonLotusData.delBagItems];
                var genuineQiArr = data[gc.dsConsts.ExDemonLotusData.genuineQiArr];
                if(genuineQiArr.length > 0) {
                    self._genuineQi = parseInt(genuineQiArr[0]);
                    self._lastUpTime = Date.newDate().toString();
                }
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.updateEntity(demonLotusData);
                heroCtrl.calPropAndCombat();
                pointCtrl.cal(gc.c_prop.pointRedKey.demonLotus_main);
                cb.call(target,[isSucceed,demonLotusData]);
            });
        }

        _getOpenConNum(){
            var record = userCtrl.get(gc.dsConsts.UserEntity.record);
            var conNum = record[gc.c_prop.userRecordTypeKey.demonLotusOpenNum]||0;
            var conDate = record[gc.c_prop.userRecordTypeKey.demonLotusOpenDate]||Date.newDate();
            conDate =  Date.newDate(conDate);
            if(conDate.getDaysBetween(Date.newDate())>1){
                conNum = 0;
            }
            return conNum;
        }

        _getOpenExpc(){
            var self = this;
            var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, self.get(gc.dsConsts.DemonLotusEntity.lvl));
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            //计算经验
            var expc = lvInfo[gc.c_lvl_openingExp] || 0;
            var curMult = self._getAddMult();
            expc += Math.floor(expc*curMult/10000) ;
            return expc;
        }

        _getAddMult(){
            var self = this;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var expcMult = cfg[4];
            var expcMultMax = cfg[5];
            var conNum = self._getOpenConNum();
            var curMult = expcMult*conNum;
            if(curMult>=expcMultMax) curMult = expcMultMax;
            return curMult;
        }

        _getOpenCost(){
            var self = this;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var costData =  cfg[3];
            costData = costData.split(",");

            var costDiamond = parseInt(costData[self.getOpeningCount()]||0) ;
            if(costDiamond<=0) costDiamond = costData[costData.length-1];
            return costDiamond;
        }

        getOpeningData(){
            var self = this;
            var data = {};

            var vip = gd.userCtrl.getVip();
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, vip);
            var openingCount = vipInfo[gc.c_vip_openingCount] || 0;
            var leftNum = openingCount - self.getOpeningCount();
            leftNum = leftNum >= 0 ? leftNum : 0;

            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, self.get(gc.dsConsts.DemonLotusEntity.lvl));
            var cost = self._getOpenCost();
            data  = {
                lotusLvl: self.get(gc.dsConsts.DemonLotusEntity.lvl) || 0,
                vip:gd.userCtrl.getVip(),
                openingCount:openingCount,
                cost:cost || 0,
                exp:self._getOpenExpc(),
                leftNum:leftNum,
                conDays:self._getOpenConNum(),//连续开光天数
                addMult:self._getAddMult(),//经验加成
                maxMult:cfg[5]  //最大经验加成
            }

            return data;
        }
    }
    export var demonLotusCtrl:DemonLotusCtrl;
    export var demonLotusCtrl:DemonLotusCtrl = DemonLotusCtrl.getInstance() ;
}
