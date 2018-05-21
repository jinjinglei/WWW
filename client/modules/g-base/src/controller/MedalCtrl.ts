/**
 * Created by Sara on 2016/2/26.
 */
module gd {
    export class MedalCtrl extends mo.DataController {
        static ON_STR_SUCC:string = "ON_STR_SUCC";
        static ON_ACTVATE_SUCC:string = "ON_ACTIVATE_SUCC";

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.UserEntity;
            this.isNewPrintActived = false;
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

        //判断勋章是否已激活     true 已激活，false未激活
        isActiveMedal(warPrintedId){
            var self = this;
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData)||{};
            if(!medalData[warPrintedId]) return false;
            return true;
        }

        //判断勋章是否可升级  【勋章id，勋章id，。。。】
        isMedalUp(){
            var self = this;
            var returnArr = [];
            var lvl = gd.userCtrl.getLvl();
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag)||{};
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData)||{};
            var t_medalLvl = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
            for(var key in medalData){
                var strengthLvl = medalData[key][0];
                var nextMedalLvlId = strengthLvl + 1;
                if(!t_medalLvl[nextMedalLvlId]) continue;
                if(lvl < t_medalLvl[nextMedalLvlId][gc.t_medalLvl_needLvl]) continue;
                var reqItems = t_medalLvl[nextMedalLvlId][gc.t_medalLvl_reqItems] || []; //所需物品

                //判断合成材料
                var  isUP = true;
                for(var i = 0, li = reqItems.length; i < li; i++){
                    var reqCfg = reqItems[i];
                    var tempId = reqCfg[0];
                    var num = reqCfg[1];
                    var ownCount = bag[tempId]||0;        //拥有所需合成材料的数量
                    if(!ownCount || ownCount < num){
                        isUP = false;
                        break;
                    }
                }
                if(isUP) returnArr.push(parseInt(key));
            }
            return returnArr;
        }

        isMedalItemEnough(itemId){
            var self = this;
            var returnArr = [];
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag)||{};
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData)||{};
            var t_medalLvl = mo.getJSONWithFileName(gc.cfg_t_medalLvl);

            if(!medalData[itemId]) return false;//未激活，不考虑材料问题

            var strengthLvl = medalData[itemId][0];
            var nextMedalLvlId = strengthLvl + 1;
            if(!t_medalLvl[nextMedalLvlId]) return false;//已经最高级 ，不考虑材料问题
            var reqItems = t_medalLvl[nextMedalLvlId][gc.t_medalLvl_reqItems] || []; //所需物品

            //判断合成材料
            var  isUP = true;
            for(var i = 0, li = reqItems.length; i < li; i++){
                var reqCfg = reqItems[i];
                var tempId = reqCfg[0];
                var num = reqCfg[1];
                var ownCount = bag[tempId]||0;        //拥有所需合成材料的数量
                if(!ownCount || ownCount < num){
                    isUP = false;
                    break;
                }
            }
            return isUP;
        }

        /**
         * 修改战印头衔
         * @param warPrintedId   战印id
         * @param cb
         * @param target
         */
        setMedalTitle(warPrintedId, cb, target){
            var self = this;
            var argsObj = gc.iface.a_user_setMedalTitle_args, args = {};
            args[argsObj.warPrintedId] = warPrintedId;
            mo.requestWaiting4Server(gc.iface.a_user_setMedalTitle, args, function (data) {
                var medalTitle = data[gc.dsConsts.ExWarPrintedData.medalTitle];
                gd.userCtrl.set(gc.dsConsts.UserEntity.medalTitle,medalTitle);
                if (cb) cb.call(target,medalTitle);
            });
        }

        /**
         * 激活战印
         * @param warPrintedId   战印id
         * @param cb
         * @param target
         */
        activeMedal(warPrintedId, cb, target){
            var self = this;
            var argsObj = gc.iface.a_user_activeMedal_args, args = {};
            args[argsObj.warPrintedId] = warPrintedId;
            mo.requestWaiting4Server(gc.iface.a_user_activeMedal, args, function (data) {
                var medalData = data[gc.dsConsts.ExWarPrintedData.medalData];
                var delBagItems = data[gc.dsConsts.ExWarPrintedData.delBagItems];
                if(Object.keys(delBagItems).length>0){
                    var bag = gd.userUtils.getNewBag(delBagItems,{});
                    gd.userCtrl.set(gc.dsConsts.UserEntity.bag,bag);
                }
                gd.userCtrl.set(gc.dsConsts.UserEntity.medalData,medalData);
                heroCtrl.calPropAndCombat();
                self.pushNotify(self.__class.ON_ACTVATE_SUCC);
                if (cb) cb.call(target,medalData);
            });
        }

        /**
         * 获得当前佩戴战印
         * @returns {*}
         */
        getMedalTitle(){
            var self = this;
            return gd.userCtrl.get(gc.dsConsts.UserEntity.medalTitle);
        }

        /**
         * 获取已激活战印
         * @param cb
         * @param target
         * @param type 0所有,1未穿戴的
         * @return [[勋章id,强化等级,评分,品质],[勋章id,强化等级,评分,品质],[勋章id,强化等级,评分,品质],...] 按评分排序
         */
        getWarPrintedList(type = 0){
            var self = this;
            self.isNewPrintActived = false; //重置
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData) || {};
            var t_medal = mo.getJSONWithFileName(gc.cfg_t_medal);
            var bag = gd.userCtrl.getBag();
            for(var key in t_medal){
                var medalId = t_medal[key][gc.t_medal_id];
                if(!medalData[medalId] && bag[medalId] && bag[medalId] > 0 ){
                    self.isNewPrintActived = true;
                    break;
                }
            }
            var returnArr = [];
            if(Object.keys(medalData).length>0){
                for(var key in medalData){
                    if(key == self.getMedalTitle() && type) continue;
                    returnArr.push(self.transWarPrintData(key));
                }
                returnArr = self.sortList(returnArr);
            }
            return returnArr;
        }

        //获得待激活的战列表
        getToBeActivatedList(){
            var self = this;
            var toBeActivated = [];
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData) || {};
            var t_medal = mo.getJSONWithFileName(gc.cfg_t_medal);
            var bag = gd.userCtrl.getBag();
            for(var key in t_medal){
                var medalId = t_medal[key][gc.t_medal_id];
                if(!medalData[medalId] && bag[medalId] && bag[medalId] > 0 ){
                    toBeActivated.push(self.transWarPrintData(medalId));
                }
            }
            toBeActivated = self.sortList(toBeActivated);
            return toBeActivated;
        }

        //获得所有战印（已激活+未激活）
        getAllWarPrintList(){
            var self = this;
            var returnArr = self.getWarPrintedList();
            var toBeActivated = self.getToBeActivatedList();
            returnArr = toBeActivated.concat(returnArr);
            return returnArr;
        }

        /**
         * 战印强化
         * @param warPrintedId   战印id
         * @param cb
         * @param target
         */
        warPrintedStrength(opt, cb, target){
            var self = this;
            if(opt.isStrMax) return mo.showMsg("已强化到最高等级");
            if(!opt.isItemEnough) return mo.showMsg("材料不足");
            var argsObj = gc.iface.a_user_warPrintedStrength_args, args = {};
            args[argsObj.warPrintedId] = opt.medalId;
            mo.requestWaiting4Server(gc.iface.a_user_warPrintedStrength, args, function (data) {
                var medalData = data[gc.dsConsts.ExWarPrintedData.medalData];
                var delBagItems = data[gc.dsConsts.ExWarPrintedData.delBagItems];
                if(Object.keys(delBagItems).length>0){
                    var bag = gd.userUtils.getNewBag(delBagItems,{});
                    gd.userCtrl.set(gc.dsConsts.UserEntity.bag,bag);
                }
                gd.userCtrl.set(gc.dsConsts.UserEntity.medalData,medalData);
                heroCtrl.calPropAndCombat();
                self.pushNotify(self.__class.ON_STR_SUCC);
                if (cb) cb.call(target,medalData);
            });
        }

        /**
         * 获得战印强化数据
         * @param medalId 勋章id
         * @returns {*}
         */
        getWarPrintData(medalId){
            var self = this;
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData);
            return medalData[medalId]; //返回一个数组或null
        }

        //返回[勋章id,强化等级,评分,品质]
        transWarPrintData(medalId){
            var self = this;
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var t_medalLvl = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData);
            var strId = medalData[medalId]?medalData[medalId][0]:medalId*100;
            return [
                parseInt(medalId),
                t_medalLvl[strId][gc.t_medalLvl_lvl],
                t_medalLvl[strId][gc.t_medalLvl_grade],
                t_item[medalId][gc.t_item_color]
            ];
        }

        getWarPrintStrOpt(medalId){
            var self = this;
            var strInfo = self.getWarPrintData(medalId);
            if(!strInfo) return null;
            var opt = {
                medalId: medalId,
                curStrId: strInfo[0],
                nextStrId: null,
                isStrMax:false,
                reqItems:[],
                isItemEnough:false,
                medalEnough:false
            };

            var nextStrId = parseInt(opt.curStrId) + 1;
            var t_medalLvl = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
            var nextTemp = t_medalLvl[nextStrId];
            opt.isStrMax = nextTemp == null;
            if(!opt.isStrMax){
                opt.nextStrId = nextStrId;
                opt.reqItems = nextTemp[gc.t_medalLvl_reqItems];
                opt.isItemEnough = true;
                opt.medalEnough = true;
                for(var i = 0 , li = opt.reqItems.length; i < li; i++){
                    var reqCfg = opt.reqItems[i];
                    if(reqCfg[1] > gd.userCtrl.getItemNum(reqCfg[0])){
                        opt.isItemEnough = false;
                        var itemType = mo.getJSONWithFileNameAndID(gc.cfg_t_item, reqCfg[0])[gc.t_item_type];
                        if(itemType == gc.c_prop.itemTypeKey.medal){
                            opt.medalEnough = false;
                        }
                    }
                }
            }
            return opt;
        }

        /**
         * 根据强化等级获得强化配置ID
         * @param itemId 勋章物品ID
         * @param strLvl 强化等级
         */
        getStrId(itemId, strLvl){
            return parseInt(itemId)*100+parseInt(strLvl);
        }

        /**
         * 获得单个战印的属性加成
         * @param itemId
         * @param strId
         * @param withAll
         * @returns {Array}
         */
        getStrProperty(itemId, strId, withAll:boolean = true){
            var self = this;
            var propKeyArr = Object.keys(gc.c_prop.equipProp);
            var hasValuePropKeyArr = [];
            var propertys:Array<any> = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, itemId)[gc.t_medal_propertys];
            var baseProps = [];
            var strPro = mo.getJSONWithFileNameAndID(gc.cfg_t_medalLvl, strId)[gc.t_medalLvl_strengthPro];
            for(var i = 0, li = propertys.length; i < li; i++){
                var p = propertys[i];
                baseProps.push([p[0], Math.floor(p[1] * (1 + strPro / 10000))]);
                if(withAll) hasValuePropKeyArr.push(p[0]);
            }
            if(withAll){
                for(var i = 0, li = propKeyArr.length; i < li; i++){
                    var pKey = parseInt(propKeyArr[i]);
                    if(hasValuePropKeyArr.indexOf(pKey) >=0) continue;
                    baseProps.push([pKey, 0]); //补值为0的属性
                }
            }
            baseProps.sort(function(a, b){
                return parseInt(a[0]) < parseInt(b[0]) ? -1 : 1;
            });
            return baseProps;
        }

        //获得所有战印属性加成
        getTotalPrintProperty(){
            var self = this;
            var propKeyArr = Object.keys(gc.c_prop.equipProp);
            propKeyArr.sort(function(a, b){
                return parseInt(a) < parseInt(b) ? -1 : 1;
            });
            var totalProps = [];
            for(var  j = 0, lj = propKeyArr.length; j < lj; j++){
                totalProps.push([propKeyArr[j], 0]);
            }
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData) || {};
            var strId = 0, props;
            for(var medalId in medalData){
                strId = medalData[medalId][0];
                props = self.getStrProperty(medalId, strId);
                for(var i = 0, li = props.length; i < li; i++){
                    var prop = props[i];
                    var cfg = totalProps[i] || [prop[0], 0];
                    cfg[1] += prop[1];
                    totalProps[i] = cfg;
                }
            }
            return totalProps;
        }

        isNewPrintActived:boolean;//是否有新的战可以印激活
        isMedalRed(){
            var self = this;
            if(self.isNewPrintActived) return true;
            var medalData = gd.userCtrl.get(gc.dsConsts.UserEntity.medalData) || {};
            var opt;
            for(var medalId in medalData){
                opt = self.getWarPrintStrOpt(medalId);
                if(!opt.isStrMax && opt.isItemEnough) return true;
            }
            return false;
        }


        sortList(list) {
            //数据结构：[勋章id,强化等级,评分,品质]
            var sortIdx = [2,3,0]; //排序规则：评分＞品质＞id
            var sortType = [-1,-1,1];
            list.sort(function (a, b) {
                for (var i = 0; i < 3; i++) {
                    var type = sortType[i];
                    if (a[sortIdx[i]] > b[sortIdx[i]]) {
                        return type <= 0 ? -1 : 1;
                    }
                    else if (a[sortIdx[i]] < b[sortIdx[i]]) {
                        return type <= 0 ? 1 : -1;
                    }
                }
                return 0;
            });
            return list;
        }

        getAchievmentMedal(){
            var self = this;
            var cfg_t_medal = mo.getJSONWithFileName(gc.cfg_t_medal);
            var keys = Object.keys(cfg_t_medal);
            keys.sort();
            var ret = [];
            for(var i = 0, li = keys.length; i < li; i++){
                var medal = cfg_t_medal[keys[i]];
                if(medal[gc.t_medal_isAchivement]){
                    ret.push(medal);
                }
            }
            return ret;
        }
    }
    export var medalCtrl:MedalCtrl;
    export var medalCtrl:MedalCtrl = MedalCtrl.getInstance() ;
}
