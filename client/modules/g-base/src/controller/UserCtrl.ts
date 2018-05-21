/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class UserCtrl extends mo.DataController {
        static ON_TEN_LVL:string = "on_ten_lvl";
        static ON_GET_BINDPHONE_REWARD:string = "on_getBindPhone";
        static ON_ITEM_CHANGE:string = "on_itemChange";
        strengthReplayInterval:number;
        offLineData:any;
        _equipBk;any;
        _lootTypeArr:any;
        _initProp() {
            super._initProp();
            this._equipBk = {};
            this.DATA_KEY = gc.dsConsts.UserEntity;
        }

        //使用兑换码
        initData(loginData) {
            var self = this;
            gd.signCtrl = SignCtrl.getInstance()
            gd.heroCtrl =  gd.HeroCtrl.getInstance();
            gd.heroCtrl.initData(loginData[gc.dsConsts.LoginData.heroList]);
            gd.arenaCtrl.initData(loginData[gc.dsConsts.LoginData.arenaData]);
            gd.copyCtrl =  gd.CopyCtrl.getInstance();
            gd.copyCtrl.initData(loginData[gc.dsConsts.LoginData.copyProgressList]);
            gd.pkOutCtrl =  gd.PkOutCtrl.getInstance();
            gd.pkOutCtrl.initData(loginData[gc.dsConsts.LoginData.pkOut]);
            gd.lotteryCtrl =  gd.LotteryCtrl.getInstance();
            gd.lotteryCtrl.initData(loginData[gc.dsConsts.LoginData.lottery]);
            gd.taskCtrl =  gd.TaskCtrl.getInstance();
            gd.taskCtrl.initData(loginData[gc.dsConsts.LoginData.task]);
            gd.shopCtrl =  gd.ShopCtrl.getInstance();
            gd.equipCtrl =  gd.EquipCtrl.getInstance();
            gd.rankCtrl = gd.RankCtrl.getInstance();
            gd.kingCtrl = gd.KingCtrl.getInstance();

            gd.rechargeCtrl.initData(loginData[gc.dsConsts.LoginData.rechargeData]);
            gd.mailCtrl.initData();
            gd.signCtrl.initData();
            gd.timeCtrl.initData();
            gd.msgReceiverCtrl.initData();
            gd.demonLotusCtrl.initData();
            self.offLineData = loginData[gc.dsConsts.LoginData.offLineData];
            self._lootTypeArr = loginData[gc.dsConsts.LoginData.lootTypeArr];

            //体力相关配置
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            self.strengthReplayInterval = c_game[gc.id_c_game.strengthCfg][2] * 60 * 1000;

            //计算一遍红点
            mo.setTimeout(pointCtrl.calAll,pointCtrl,4000);
            mo.setTimeout(function(){
                if(!guildCtrl.getData()) guildCtrl.getInfo(function(){
                    gd.chatCtrl.initData();
                },self);
            },self,1000);
            //延迟5秒获取商店信息
            mo.setTimeout(function(){
                shopCtrl.requestShopData(gc.c_prop.shopTypeKey.equip,function(){},self);
                redEnvelopeCtrl.syncRedEnvelope(function(){},self);
                //检查绑定是否领奖
                self.checkBindPhoneReward();
            },self,5000);
        }

        getLootTypeArr(){
            return this._lootTypeArr;
        }

        /**
         * 同步数据
         * @param sendData [聊天id]
         * @param cb
         * @param target
         */
        syncData(sendData,cb?,target?){
            var self = this;
            var args = {};
            var argsObj = gc.iface.a_user_syncData_args, args = {};
            args[argsObj.sendData] = sendData;
            mo.request4Server(gc.iface.a_user_syncData, args, function (data) {
                //同步一些数据
                if (cb) cb.call(target,data);
            });
        }

        syncData2(cb?,target?){
            var self = this;
            mo.request4Server(gc.iface.a_user_syncData2, {}, function (data) {
                var lastUpdateTime = data[gc.dsConsts.AsyncData2.lastUpdateTime];
                var lootTypeArr = data[gc.dsConsts.AsyncData2.lootTypeArr];

                lastUpdateTime =Date.newDate(lastUpdateTime);
                self.set(gc.dsConsts.UserEntity.lastUpdateTime , lastUpdateTime);
                Date.setStandard(lastUpdateTime.getTime());

                self._lootTypeArr = lootTypeArr;
                if (cb) cb.call(target,lastUpdateTime);
            });
        }

        /**
         * 更新引导
         * @param guideId
         * @param cb
         * @param target
         */
        updateGuide(guideId,cb, target) {
            var self = this;
            var argsObj = gc.iface.a_user_updateGuide_args, args = {};
            args[argsObj.guideId] = guideId;
            mo.request4Server(gc.iface.a_user_updateGuide, args, function (data) {
                if(data) self.updateEntity(data);
                if (cb) cb.call(target);
            });
        }

        //获取当前引导
        getGuide(){
            var self = this;
            var exData = self.get(gc.dsConsts.UserEntity.exData);
            return exData[gc.c_prop.userExDataKey.guide]||0;
        }

        /**
         * 设置自动战斗
         * @param isAuto
         */
        setAutoFight(isAuto) {
            var self = this;
            var exData = self.get(gc.dsConsts.UserEntity.exData);
            exData[gc.c_prop.userExDataKey.autoFight] = isAuto;
            self.set(gc.dsConsts.UserEntity.exData,exData);

            var argsObj = gc.iface.a_user_setAutoFight_args, args = {};
            args[argsObj.isAuto] = isAuto;
            mo.request4Server(gc.iface.a_user_setAutoFight, args, function (data) {});
            if(isAuto){
                mo.showMsg(gc.id_c_msgCode.autoOpen);
            }else{
                mo.showMsg(gc.id_c_msgCode.autoClose);
            }
        }

        /**
         * 更新Setting数据
         * @param catNoVipChat,autoBuyLittleHorn
         */
        updateSetting(catNoVipChat,autoBuyLittleHorn,cb,target){
            var self = this;
            var exData = self.get(gc.dsConsts.UserEntity.exData);
            exData[gc.c_prop.userExDataKey.catNoVipChat] = catNoVipChat;
            exData[gc.c_prop.userExDataKey.autoBuyLittleHorn] = autoBuyLittleHorn;
            self.set(gc.dsConsts.UserEntity.exData,exData);

            var argsObj = gc.iface.a_user_updateSetting_args, args = {};
            args[argsObj.catNoVipChat] = catNoVipChat;
            args[argsObj.autoBuyLittleHorn] = autoBuyLittleHorn;
            mo.request4Server(gc.iface.a_user_updateSetting, args, function (data) {
                if(cb)cb.call(target);
            });
        }

        //获取当前引导
        isAutoFight(){
            var self = this;
            var exData = self.get(gc.dsConsts.UserEntity.exData);
            return exData[gc.c_prop.userExDataKey.autoFight]||0;
        }

        /**
         * 设置自动战斗
         */
        setTimeError() {
            var self = this;
            var num = self.getTimeError();
            num++;
            var exData = self.get(gc.dsConsts.UserEntity.exData);
            exData[gc.c_prop.userExDataKey.timeError] = num;
            var argsObj = gc.iface.a_user_setTimeError_args, args = {};
            args[argsObj.errorNum] = num;
            mo.request4Server(gc.iface.a_user_setTimeError, args, function (data) {});

        }

        //获取当前次数
        getTimeError(){
            var self = this;
            var exData = self.get(gc.dsConsts.UserEntity.exData);
            return exData[gc.c_prop.userExDataKey.timeError]||0;
        }

        /**
         * 改名
         * @param name
         * @param heroTempId  1|2|3
         * @param cb
         * @param target
         */
        changeName(name,heroTempId,cb, target) {
            var sensitiveArr = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.fuckWord)[0].split(",");
            if (name == null || name == "") {
                return mo.showMsg(gc.id_c_msgCode.inputRoleName);
            }
            else if (mo.STR.getStringLength(name) > 14) {
                return mo.showMsg(gc.id_c_msgCode.roleNameOutLenght);
            }
            else if (mo.STR.checkSensitiveWord(name, sensitiveArr)) {
                return mo.showMsg(gc.id_c_msgCode.sensitiveInRoleName);
            }
            var self = this;
            var argsObj = gc.iface.a_user_changeName_args, args = {};
            args[argsObj.name] = name;
            args[argsObj.heroTempId] = heroTempId;
            mo.requestWaiting4Server(gc.iface.a_user_changeName, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData];
                self.updateEntity(userData);
                var heroData = data[gc.dsConsts.ExUserData.heroData];
                gd.heroCtrl.updateHeroEntityCtrl(heroData[gc.dsConsts.HeroEntity.id],heroData);
                if (cb) cb.call(target);
            });
        }

        /**
         * 添加背包
         * @param itemId
         * @param num
         */
        addBag(itemId, num?) {
            var self = this;
            var bag = self.get(gc.dsConsts.UserEntity.bag) || {};
            if (typeof itemId == "object") {
                for (var key in itemId) {
                    self._addBag(bag, key, itemId[key]);
                }
            } else {
                self._addBag(bag, itemId, num);
            }
            self.set(gc.dsConsts.UserEntity.bag, bag);
        }

        private _addBag(bag, itemId, num) {
            var ownItemCount = bag[itemId] || 0;
            ownItemCount += num;
            bag[itemId] = ownItemCount;
            return bag;
        }

        /**
         * 扣除背包
         * @param itemId
         * @param num
         * @returns {*}
         */
        delBag(itemId, num) {
            var self = this;
            var bag = self.get(gc.dsConsts.UserEntity.bag) || {};

            if (typeof itemId == "object") {
                for (var key in itemId) {
                    self._delBag(bag, key, itemId[key]);
                }
            } else {
                self._delBag(bag, itemId, num);
            }

            self.set(gc.dsConsts.UserEntity.bag, bag);
        }

        //获取物品数量
        getItemNum(itemId){
            var self = this;
            var cfg_t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var locItemData = cfg_t_item[itemId];
            if(!locItemData) return 0;
            var num = 0;
            switch (itemId){
                case gc.c_prop.spItemIdKey.diamond://钻石
                    num = self.getDiamond();
                    break;
                case gc.c_prop.spItemIdKey.gold://金币
                    num = self.getGold();
                    break;
                default :
                    var bag = self.get(gc.dsConsts.UserEntity.bag)||{};
                    num = bag[itemId]||0;
                    break;
            }
            return num;
        }

        //根据物品类型获取物品 {itemId:num}
        getItemByType(itemType){
            var self = this;
            var retObj = {};
            var bag = self.get(gc.dsConsts.UserEntity.bag);
            var cfg_t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            for(var itemId in bag){
                var item = cfg_t_item[itemId];
                if(item[gc.t_item_type] == itemType){
                    retObj[itemId] = bag[itemId];
                }
            }
            return retObj;
        }

        private _delBag(bag, itemId, num) {
            var ownItemCount = bag[itemId] || 0;
            var reItemCount = ownItemCount - num;
            bag[itemId] = reItemCount;
            if (reItemCount <= 0) delete bag[itemId];
            return bag;
        }

        //获取体力
        getStrength() {
            var self = this;
            var maxStrength = self.getMaxStrength();
            var interval = self.strengthReplayInterval;
            var strength = self._data[gc.dsConsts.UserEntity.strength];
            if (strength >= maxStrength) return strength;
            var strengthReTime = self._data[gc.dsConsts.UserEntity.strengthReTime];
            if (!strengthReTime) return strength;//不存在则直接返回当前的体力值
            var now = Date.newDate().getTime();
            var time = strengthReTime.getTime();
            if (now >= time) return maxStrength;//已经超过了满体力的时间
            var s = maxStrength - Math.ceil((time - now) / interval);
            if (s < 0) return strength;
            return Math.min(maxStrength, s);
        }

        /**
         * 获取最大体力上限，跟领主等级相关
         */
        getMaxStrength() {
            var self = this, entityKey = gc.dsConsts.UserEntity;
            var userLvl = self.get(entityKey.lvl);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            //体力相关配置
            var baseMaxStrength = c_game[gc.id_c_game.strengthCfg][0];
            var addPerStrength = c_game[gc.id_c_game.strengthCfg][1];
            return baseMaxStrength + (userLvl - 1) * addPerStrength;
        }

        //更新数据，不显示变化
        updateEntityNotShow(data){
            var self = this;
            var oldData = JSON.parse(JSON.stringify(self.getData()));
            self.__adjust_equpBag_final(data);
            super.updateEntity(data);
            self._calPoint(oldData,data);
        }

        __adjust_equpBag_final(data){
            //--->data
            var equipBk = this._equipBk;
            var equipBag = data[gc.dsConsts.UserEntity.equipBag];
            if(equipBag){
                //计算装备评分
                var props;
                for(var key in equipBag){       //装备背包 {"1":[物品id,[随到的属性值],评价,是否穿戴],...}  "1":指定id,累加上去的
                    var tempId = equipBag[key][0];
                    if(equipBk[key] && equipBk[key][0] == tempId){
                        equipBag[key][2] = equipBk[key][1];
                    }else{
                        props = equipBag[key][1];
                        if(gd.equipCtrl.isSpecialEquip(tempId) || gd.equipCtrl.isRareEquip(tempId)){
                            props = gd.equipCtrl.getSpecialEquipExtra(tempId);
                        }
                        if(equipBag[key][5]){
                            equipBag[key][2] =  gd.userUtils.getEquipGrade(tempId, props,equipBag[key][5]);
                        }else{
                            equipBag[key][2] =  gd.userUtils.getEquipGrade(tempId, props);
                        }
                        equipBk[key] = [tempId, equipBag[key][2]];
                    }
                }
            }
        }

        //更新数据，返回变化的数据
        updateEntity(data){
            var self = this;
            var oldData = JSON.parse(JSON.stringify(self.getData()));
            self.calProChanged(data, oldData);
            self.__adjust_equpBag_final(data);
            super.updateEntity(data);

            self._calPoint(oldData,data);
        }

        private _calPoint(oldData,data){
            var self =this;
            if(data[gc.dsConsts.UserEntity.lvl]){
                var oldLvl = oldData[gc.dsConsts.UserEntity.lvl];
                var newLvl = data[gc.dsConsts.UserEntity.lvl];
                if(oldLvl!=newLvl)
                {
                    var cfg_c_genuineQi = mo.getJSONWithFileName(gc.cfg_c_genuineQi);
                    var exData = self.get(gc.dsConsts.UserEntity.exData);
                    if((!exData || !exData[gc.c_prop.userExDataKey.genuineQi]) && cfg_c_genuineQi[newLvl]){
                        gd.demonLotusCtrl.initData();
                        self.getGenuineQi(function(){},this);
                    }
                    //升级需要判断的红点
                    pointCtrl.cal(gc.c_prop.pointGreenKey.copy_boss);
                    heroCtrl.calPropAndCombat();
                    if(newLvl >= 10){
                        var newLvlArr = newLvl.toString().split("");
                        if(newLvlArr[newLvlArr.length-1] == 0){
                            gd.shopCtrl.refresh(gc.c_prop.shopTypeKey.equip,true,function(itemList){
                                self.pushNotify(self.__class.ON_TEN_LVL, gc.c_prop.shopTypeKey.equip);
                            },this);
                        }
                    }

                    // 升级需要汇报一下
                    mo_channel.getCurChannel().footmark('levelUpgrade', {level:newLvl});
                }
            }

            if(data[gc.dsConsts.UserEntity.bag]){
                pointCtrl.cal(gc.c_prop.pointRedKey.role1_wing);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_wing);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_wing);

                pointCtrl.cal(gc.c_prop.pointRedKey.role1_realm);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_realm);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_realm);


                pointCtrl.cal(gc.c_prop.pointRedKey.role1_intensify);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_intensify);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_intensify);

                pointCtrl.cal(gc.c_prop.pointRedKey.role1_star);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_star);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_star);

                pointCtrl.cal(gc.c_prop.pointRedKey.role1_gem);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_gem);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_gem);

                pointCtrl.cal(gc.c_prop.pointEffectKey.medal);

                pointCtrl.cal(gc.c_prop.pointRedKey.role1_tring);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_tring);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_tring);

                pointCtrl.cal(gc.c_prop.pointRedKey.demonLotus_1);
                pointCtrl.cal(gc.c_prop.pointRedKey.demonLotus_2);
                pointCtrl.cal(gc.c_prop.pointRedKey.demonLotus_main);
            }

            if(data[gc.dsConsts.UserEntity.equipBag]){
                pointCtrl.cal(gc.c_prop.pointRedKey.role1_equip);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_equip);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_equip);
                pointCtrl.cal(gc.c_prop.pointRedKey.role4_equip);

                pointCtrl.cal(gc.c_prop.pointEffectKey.bag);
                pointCtrl.cal(gc.c_prop.pointEffectKey.chuanChen);
                pointCtrl.cal(gc.c_prop.pointEffectKey.custom);
            }

            if(data[gc.dsConsts.UserEntity.gold]){
               /*
               pointCtrl.cal(gc.c_prop.pointRedKey.role1_skill);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_skill);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_skill);
                */

                pointCtrl.cal(gc.c_prop.pointRedKey.role1_wing);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_wing);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_wing);

                pointCtrl.cal(gc.c_prop.pointRedKey.role1_realm);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_realm);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_realm);


                pointCtrl.cal(gc.c_prop.pointRedKey.role1_intensify);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_intensify);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_intensify);

                pointCtrl.cal(gc.c_prop.pointRedKey.role1_star);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_star);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_star);

                pointCtrl.cal(gc.c_prop.pointRedKey.role1_gem);
                pointCtrl.cal(gc.c_prop.pointRedKey.role2_gem);
                pointCtrl.cal(gc.c_prop.pointRedKey.role3_gem);
            }
        }

        calProChanged(data, oldData) {
            var self = this;
            var UserEntity = gc.dsConsts.UserEntity;
            var changeItems = {}; //{1:999, 2:999}
            var addEquips = []; //[tempId, tempId]
            for (var key in UserEntity) {
                var obj = UserEntity[key];
                if(data[obj] && oldData[obj] && data[obj] != oldData[obj]){
                    if(UserEntity.bag == obj) {
                        var oldBagData = oldData[obj];
                        var newBagData = data[obj];
                        for (var key in newBagData) {
                            var newCount = newBagData[key]||0;
                            var oldCount = oldBagData[key]||0;
                            if (newCount != oldCount ) {
                                var locChange = newCount - oldCount;
                                if (locChange > 0) {
                                    changeItems[key] = locChange;
                                }
                            }
                        }
                    }else if(UserEntity.equipBag == obj){
                        var oldBagData = oldData[obj];
                        var newBagData = data[obj];
                        for (var equipId in newBagData) {
                            /*
                            判断装备是否有增加的条件
                            1.旧背包里没有 或者
                            2.旧背包里有同样的equipId的装备但是tempId不同
                            */
                            if ((oldBagData[equipId] == null
                                    || (oldBagData[equipId] !=null && newBagData[equipId][0] != oldBagData[equipId][0])
                                )) {
                                addEquips.push(newBagData[equipId][0]);
                            }
                        }
                    }else if(UserEntity.combat == obj){
                        var oldCombat = oldData[obj];
                        var newCombat = data[obj];
                        if(oldCombat>0){
                            g_msg.UIMsgCombatCtrl.push({oldCombat:oldCombat,newCombat:newCombat});
                        }
                    }else if(UserEntity.gold == obj){
                        var oldCount = oldData[obj];
                        var newCount = data[obj];
                        var locChange = newCount - oldCount;
                        if (locChange > 0) {
                            changeItems[gc.c_prop.spItemIdKey.gold] = locChange;
                        }
                    }else if(UserEntity.diamond == obj){
                        var oldCount = oldData[obj];
                        var newCount = data[obj];
                        var locChange = newCount - oldCount;
                        if (locChange > 0) {
                            changeItems[gc.c_prop.spItemIdKey.diamond] = locChange;
                        }
                    } else if (UserEntity.medalData == obj) {
                        var oldMedalData = oldData[obj];
                        var newMedalData = data[obj];
                        if (JSON.stringify(oldMedalData) != JSON.stringify(newMedalData)) {
                            heroCtrl.calPropAndCombat();
                        }
                    }

                }
            }

            if(Object.keys(changeItems).length > 0 || addEquips.length > 0){
                g_msg.GetItemTips.create().setData({items: changeItems, equips:addEquips}).show()
            }
        }

        _appendValue(key, value){
            var oldValue = this._data[key] || 0;
            this.set(key, oldValue + value);
        }

        getName(){
            return this.get(gc.dsConsts.UserEntity.nickName);
        }

        getId(){
            return this.get(gc.dsConsts.UserEntity.id);
        }

        //获取金币
        getGold() {
            return this.get(gc.dsConsts.UserEntity.gold);
        }

        //获取竞技场声望
        getPrestige() {
            return this.get(gc.dsConsts.UserEntity.prestige);
        }

        //获取购买金币次数
        getBuyGoldCount ():number{
            return this.getTodayCount(gc.c_prop.userRefreshCountKey.buyGold);
        }

        //获取购买凌云石次数
        getBuyLingyunCount ():number{
            return this.getTodayCount(gc.c_prop.userRefreshCountKey.buyLingyun);
        }

        //获取钻石
        getDiamond() {
            return this.get(gc.dsConsts.UserEntity.diamond);
        }

        //战力
        getCombat() {
            return this.get(gc.dsConsts.UserEntity.combat);
        }

        //活动
        getActivity() {
            return this.get(gc.dsConsts.UserEntity.activity);
        }

        //获取而外数据
        getExData() {
            return this.get(gc.dsConsts.UserEntity.exData);
        }

        //获取是否霸主
        getIsKing() {
            return this.get(gc.dsConsts.UserEntity.isKing);
        }

        //设置是否霸主
        setIsKing(isKing) {
            return this.set(gc.dsConsts.UserEntity.isKing,isKing);
        }

        //更新战力
        updateCombat() {
            var self = this;
            var totalCombat = heroCtrl.getTotalCombat();
            var updateData = {};
            updateData[gc.dsConsts.UserEntity.combat] = totalCombat;
            self.updateEntity(updateData);
            mo.request4Server(gc.iface.a_user_updateCombat,{},function(){},self);
        }

        //VIP
        getVip() {
            return this.get(gc.dsConsts.UserEntity.vip);
        }

        //VIP当前积分
        getVipScore() {
            return this.get(gc.dsConsts.UserEntity.vipScore);
        }

        //获取下一级所需积分
        getNextVipScore(){
            var curVip = this.getVip();
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, curVip);
            return info[gc.c_vip_score];
        }

        //vip加成   [vip等级,金币加成，经验加成]
        //getVipExtra(){
        //    var cfg_c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
        //    var vip = this.get(gc.dsConsts.UserEntity.vip);
        //    var offlineGoldAdd = cfg_c_vip[vip][gc.c_vip_offlineGoldAdd];
        //    var c_vip_offlineExpAdd = cfg_c_vip[vip][gc.c_vip_offlineExpAdd];
        //    return [vip,offlineGoldAdd,c_vip_offlineExpAdd];
        //}

        //等级
        getLvl() {
            return this.get(gc.dsConsts.UserEntity.lvl);
        }

        //转生等级
        getRebirthLvl() {
            return this.get(gc.dsConsts.UserEntity.rebirthLvl);
        }

        //获取注入经验
        getInfuseExpc(){
            return this.get(gc.dsConsts.UserEntity.infuseExpc);
        }

        getExp(){
            return this.get(gc.dsConsts.UserEntity.expc);
        }

        //头像
        getIconId() {
            return this.get(gc.dsConsts.UserEntity.iconId);
        }

        //装备背包  {"1":[模板id,[随到的属性值],评价,是否穿戴],...}  "1":指定id,累加上去的
        getEquipBag() {
            return this.get(gc.dsConsts.UserEntity.equipBag);
        }

        //是否开启自动注入     return true/false
        isOpenInfuseExpc(){
            var isOpenIn = this.get(gc.dsConsts.UserEntity.isOpenIn);
            if(isOpenIn && isOpenIn == 1) return true;
            return false;
        }

        //获得未穿戴的装备数量
        getEquipBagNum(){
            var equipBag = this.getEquipBag();
            var count = 0;
            for(var key in equipBag){
                var equip = equipBag[key];
                if(equip[3] == 0) count++;
            }
            return count;
        }

        //背包
        getBag() {
            return this.get(gc.dsConsts.UserEntity.bag);
        }

        //装备背包格数
        getEquipBagGrid() {
            var self = this;
            var cfg_c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var count = this.get(gc.dsConsts.UserEntity.equipBagBuyCount);
            var starCount = parseInt(cfg_c_game[gc.id_c_game.equipBagCfg][0]);
            var addCount = parseInt(cfg_c_game[gc.id_c_game.equipBagCfg][1]);
            var vipCount = parseInt(cfg_c_vip[self.getVip()][gc.c_vip_addEquipBag]);
            var equipBagGrid = starCount + count*addCount + vipCount;
            return equipBagGrid;
        }

        increaseGold (gold){
            this._appendValue(gc.dsConsts.UserEntity.gold, gold);
        }

        reduceDiamond (diamond){
            this._appendValue(gc.dsConsts.UserEntity.diamond, -diamond);
        }

        /**
         * 获取用户中的今日次数
         * @param type
         */
        getTodayCount (type):number{
            var self = this;

            var counts = self.get(gc.dsConsts.UserEntity.counts);
            var countsRefreshTime = self.get(gc.dsConsts.UserEntity.countsRefreshTime);
            var count = counts[type]||0;
            var refreshTime = Date.newDate(countsRefreshTime[type]);

            if(refreshTime){
                refreshTime = Date.newDate(refreshTime);
                if(!refreshTime.equalsDay(Date.newDate())){
                    refreshTime = Date.newDate();
                    count = 0;
                }
            }

            counts[type] = count;
            countsRefreshTime[type] = refreshTime;

            self.set(gc.dsConsts.UserEntity.counts,counts);
            self.set(gc.dsConsts.UserEntity.countsRefreshTime,countsRefreshTime);
            return count;
        }

        getLastTime(type):number{
            var self = this;
            var countsRefreshTime = self.get(gc.dsConsts.UserEntity.countsRefreshTime);
            return countsRefreshTime[type];
        }


        /**
         * 获取购买金币获得数量和所需钻石
         * @returns [得到金币，消耗元宝，已经购买次数，最大购买次数]
         */
        getBuyGoldData(){
            var self = this;
            var lvl = self.get(gc.dsConsts.UserEntity.lvl);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var buyCount = self.getBuyGoldCount();
            var zengLiang = c_game[gc.id_c_game.goldBuySet][0];
            var jiShu = c_lvl[lvl][gc.c_lvl_buyGoldMult];
            var getGold = gc.calBuyGold(buyCount+1,zengLiang,jiShu);
            var costDiamond = gc.calBuyGoldDiamond(buyCount+1);
            //var maxCount = self._getBuyGoldMaxCount();
            return [getGold,costDiamond];     //[getGold,costDiamond,buyCount,maxCount];
        }

        //购买金币
        buyGold (cb, target) {
            var self = this;
            var buyData = self.getBuyGoldData();
            var getGold = buyData[0],costDiamond = buyData[1];      //,buyCount = buyData[2],maxCount = buyData[3];

            //是否花费[ubb color=red]%s元宝[/ubb]购买[ubb color=yellow]%s金币[/ubb]?
            mo.showMsg(gc.id_c_msgCode.buyGolds, costDiamond, getGold, function(){
                //今日已达使用上限[/br][/br][ubb size=60]（今日已使用%s次）[/ubb]
                //if(buyCount>=maxCount)  return  mo.showMsg(gc.id_c_msgCode.cantUseMax,buyCount);

                //计算消耗的钻石
                if (self.getDiamond() < costDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                var args = {};
                mo.requestWaiting4Server(gc.iface.a_user_buyGold, args, function (data) {
                    var userData =data[gc.dsConsts.ExUserData.userData];
                    self.updateEntity(userData);
                    if (cb) cb.call(target, data);
                });
            });
        }

        //购买金币
        noGolds (cb, target) {
            var self = this;
            var buyData = self.getBuyGoldData();
            var getGold = buyData[0],costDiamond = buyData[1];      //,buyCount = buyData[2],maxCount = buyData[3];

            //是否花费[ubb color=red]%s元宝[/ubb]购买[ubb color=yellow]%s金币[/ubb]?
            mo.showMsg(gc.id_c_msgCode.noGolds, costDiamond, getGold, function(){
                //今日已达使用上限[/br][/br][ubb size=60]（今日已使用%s次）[/ubb]
                //if(buyCount>=maxCount)  return  mo.showMsg(gc.id_c_msgCode.cantUseMax,buyCount);

                //计算消耗的钻石
                if (self.getDiamond() < costDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                var args = {};
                mo.requestWaiting4Server(gc.iface.a_user_buyGold, args, function (data) {
                    var userData =data[gc.dsConsts.ExUserData.userData];
                    self.updateEntity(userData);
                    if (cb) cb.call(target, data);
                });
            });
        }

        //购买凌云石价格
        getBuyLingyunCos(){
            var self = this;
            var costDiamond = 999999;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var buyCount = self.getBuyLingyunCount();
            var getLingyun = c_game[gc.id_c_game.buyLingyunCfg][0]|| 0;
            var cosArr = c_game[gc.id_c_game.buyLingyunCfg][1].split(";")||[];
            var lastArr = cosArr[cosArr.length - 1].split(",")||[];
            if((buyCount + 1)>=lastArr[0]){
                costDiamond = parseInt(lastArr[1])/10*getLingyun;
            }else{
                for(var i = 0;i<cosArr.length;i++){
                    var costDiaArr = cosArr[i].split(",")||[];
                    if(costDiaArr[0] && costDiaArr[1]){
                        if((buyCount + 1)<=costDiaArr[0]){
                            costDiamond = parseInt(costDiaArr[1])/10*getLingyun;
                            break;
                        }
                    }
                }
            }
            return costDiamond;
        }

        //购买凌云石
        buyLingyun (cb, target) {
            var self = this;

            var vip = self.getVip();
            var c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var buyCount = self.getBuyLingyunCount();
            var costDiamond = self.getBuyLingyunCos();
            var maxCount = c_vip[vip][gc.c_vip_buyLingyunCount];
            if (buyCount >= maxCount) return mo.showMsg(gc.id_c_msgCode.cantBusMax);//购买次数不能超过限制

            //计算消耗的钻石
            if (self.getDiamond() < costDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
            var args = {};
            mo.requestWaiting4Server(gc.iface.a_user_buyLingyun, args, function (data) {
                var userData =data[gc.dsConsts.ExUserData.userData];
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                self.updateEntity(userData);
                if (cb) cb.call(target, data);
            });
        }

        //获取每天可以购买的次数
        //private _getBuyGoldMaxCount(){
        //    var self = this;
        //    var c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
        //    var vip = self.getVip();
        //    var maxCount = c_vip[vip][gc.c_vip_goldCount];//获取该玩家的最大购买次数
        //    return maxCount;
        //}


        //获取当前装备属性
        getEquipAttribute (id) {
            var equipBag = gd.userCtrl.get(gc.dsConsts.UserEntity.equipBag);
            var equipId = equipBag[id][0];      //模板id
            var addition = equipBag[id][1];     //附加属性{}

        }

        static enterGame = function (cb, target) {
            var self = this;
            var serverIndexId = serverInfoCtrl.getSelectIndex();
            if(!serverIndexId) return mo.showMsg("请先选择服务器！");
            var selectServer = serverInfoCtrl.getSelectServer();
            var isClose = selectServer[gc.dsConsts.ServerInfoEntity.isClose];
            if(isClose) return mo.showMsg("服务器维护中！");

            var argsObj = gc.iface.c_account_enterGame_args, args = {};
            args[argsObj.accountId] = gd.accountCtrl.getId();
            args[argsObj.loginKey] = gd.accountCtrl.getLoginKey();
            args[argsObj.serverIndexId] = serverIndexId;

            mo.requestWaiting4Server(gc.iface.c_account_enterGame, args, function (loginData) {
                gc.net.httpRetryMaxTimes = 5; //尝试5次才弹出断线提示
                if(!loginData){
                    if (cb)
                        cb.call(target, loginData);
                }else{

                    var userData = loginData[gc.dsConsts.LoginData.user];
                    gd.userCtrl = gd.UserCtrl.getInstance(userData);
                    gd.userCtrl.initData(loginData);
                    if (cb) cb.call(target, loginData);

                    mo_channel.getCurChannel().footmark('enterGame', {
                        'level': self.getInstance().getLvl(),
                        'vipLevel': self.getInstance().getVip(),
                        'score': self.getInstance().getCombat(),
                        'isNew': self.CREATEDUSER
                    });
                    self.CREATEDUSER = false;
                    /*
                    if (self.CREATEDUSER) {
                        mo_channel.getCurChannel().footmark('createRole');
                        self.CREATEDUSER = false;
                    }
                    */
                }
            });
        };

        /**
         * 创建角色
         * @param name
         * @param heroTempId  1|2|3
         * @param sex
         * @param cb
         * @param target
         */
        static createUser(name,heroTempId,sex,cb, target) {
            var sensitiveArr = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.fuckWord)[0].split(",");
            if (name == null || name == "") {
                return mo.showMsg(gc.id_c_msgCode.inputRoleName);
            }
            else if (mo.STR.getStringLength(name) > 12) {
                return mo.showMsg(gc.id_c_msgCode.roleNameOutLenght);
            }
            else if (mo.STR.checkSensitiveWord(name, sensitiveArr)) {
                return mo.showMsg(gc.id_c_msgCode.sensitiveInRoleName);
            }else if(name.indexOf("'")>-1){
                return mo.showMsg("不能包含单引号");
            }else if(name.indexOf('"')>-1){
                return mo.showMsg("不能包含双引号");
            }else if(name.indexOf('\\')>-1){
                return mo.showMsg("不能包含斜杠");
            }
            var serverIndexId = serverInfoCtrl.getSelectIndex();
            if(!serverIndexId) return mo.showMsg("请先选择服务器！");

            var self = this;
            //ws.recordEvent("创建角色的人数", 1);
            var argsObj = gc.iface.c_account_createUser_args, args = {};
            args[argsObj.name] = name;
            args[argsObj.heroTempId] = heroTempId;
            args[argsObj.sex] = sex;
            args[argsObj.serverIndexId] = serverIndexId;

            //hd { 增加通过分享进来的用户
            var suk = gd.HoodinnCtlr.SharedUserKey();
            if (suk)
                args[argsObj.shareKey] = suk;
            //hd }

            mo.requestWaiting4Server(gc.iface.c_account_createUser, args, function (data) {
                if (cb)
                    cb.call(target);
                self.CREATEDUSER = true;
            });
        }

        /** 是否创建了新角色 */
        static CREATEDUSER:boolean;

        //获取真气数据
        getGenuineQi(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_user_getGenuineQi, {}, function (data) {
                var genuineQi = data[gc.dsConsts.UserEntity.genuineQi]||0;
                if (parseInt(genuineQi) > 0) {
                    gd.demonLotusCtrl._genuineQi = parseInt(genuineQi);
                    gd.demonLotusCtrl._lastUpTime = Date.newDate().toString();
                }
                self.updateEntity(data);
                if (cb) cb.call(target);
            });
        }

        /**
         * 购买背包格子
         * @param cb
         * @param target
         */
        buyBagGrid(cb,target) {
            var self = this;
            var diamond = self.getDiamond();
            var equipBagBuyCount = this.get(gc.dsConsts.UserEntity.equipBagBuyCount);        //购买次数
            var cosDiamond = gc.callBuyEquipBag(equipBagBuyCount);     //消耗钻石
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.equipBagCfg);

            mo.showMsg(gc.id_c_msgCode.ifBuyBag, cosDiamond, gameCfg[1],function(){
                if(diamond < cosDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);
                mo.requestWaiting4Server(gc.iface.a_user_buyBagGrid, {}, function (data) {
                    self.updateEntity(data);
                    cb.call(target,data);
                });
            });
        }

        //获取宝箱开启所需道具     【数量，id】
        getNeedItems(chestId){
            var self = this;
            var returnArr = [0];
            var cfg_t_itemLogic = mo.getJSONWithFileName(gc.cfg_t_itemLogic);
            if(cfg_t_itemLogic[chestId][gc.t_itemLogic_needItems]){
                var needItems = cfg_t_itemLogic[chestId][gc.t_itemLogic_needItems];
                returnArr[1] = needItems[0];
                returnArr[0] = needItems[1];
            }
            return returnArr;
        }

        /**
         * 打开背包宝箱
         * @param chestId
         * @param count
         * @param cb
         * @param target
         */
        getBagChest (chestId,count, cb, target) {
            var self = this;
            if(self.getItemNum(chestId) <= 0) return mo.showMsg("不存在该宝箱");

            //是否需要钥匙
            var getBag = self.getBag();
            var needItemsArr = self.getNeedItems(chestId);
            if(needItemsArr[0] != 0){
                var needItemsId = needItemsArr[1];
                var needItemsNum = needItemsArr[0];
                if(!getBag[needItemsId] || getBag[needItemsId] < needItemsNum){
                    //todo 弹出钥匙的【t_item(物品表)】【dropId】。
                }
            }

            var argsObj = gc.iface.a_user_getBagChest_args, args = {};
            args[argsObj.chestId] = chestId;
            args[argsObj.count] = count;
            mo.requestWaiting4Server(gc.iface.a_user_getBagChest, args, function (data) {
                var wingExp = data[gc.dsConsts.ExUserData.wingExp];
                gd.demonLotusCtrl._genuineQi = parseInt(wingExp);
                gd.demonLotusCtrl._lastUpTime = Date.newDate().toString();
                var expc = data[gc.dsConsts.ExUserData.expc];   //经验丹获得经验
                if(expc > 0) g_msg.UIMsgTextCtrl.push("获得经验："+ expc);
                var rebirthExp = data[gc.dsConsts.ExUserData.rebirthExp];   //飞升丹获得经验
                if(rebirthExp > 0) g_msg.UIMsgTextCtrl.push("获得飞升经验："+ rebirthExp);
                var genuineQi = data[gc.dsConsts.ExUserData.genuineQi];   //真气
                if(genuineQi > 0){
                    g_msg.UIMsgTextCtrl.push("获得真气："+ genuineQi);
                }
                var userData =data[gc.dsConsts.ExUserData.userData]||{};
                var isMail =data[gc.dsConsts.ExUserData.isMail];        //true 需要提示发送邮箱  false  不需要
                if(isMail) mo.showMsg(gc.id_c_msgCode.bagMaxMail);
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                self.updateEntity(userData);
                if (cb) cb.call(target,isMail);
            });
        }

        //判断装备背包是否满    //true  满
        isEquipBagReddot(){
            var self = this;
            var equipBagGrid = self.getEquipBagGrid();
            var equipBag = this.getEquipBag()||{};
            var sum = 0;
            for(var key in equipBag){       //装备背包 {"1":[物品id,[随到的属性值],评价,是否穿戴],...}  "1":指定id,累加上去的
                if(equipBag[key][3] == 1) sum += 1;
            }
            var equipSum = Object.keys(equipBag).length;
            var residualSpace = equipBagGrid - equipSum + sum;        //剩余空间
            if(residualSpace <= 0) return true;
            return false;
        }

        //判断熔炼是否提示
        isSmeltReddot() {
            var self = this;
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var limit = cfg_c_game[gc.id_c_game.equipBagCfg][2];
            var equipBagGrid = self.getEquipBagGrid();
            var equipBag = this.getEquipBag()||{};
            var sum = 0;
            for(var key in equipBag){       //装备背包 {"1":[物品id,[随到的属性值],评价,是否穿戴],...}  "1":指定id,累加上去的
                if(equipBag[key][3] == 1) sum += 1;
            }
            var equipSum = Object.keys(equipBag).length;
            var pro = parseInt(((equipSum - sum)/equipBagGrid*100).toString());
            var smeltArr = gd.equipCtrl.getSmeltArr(1);
            if(pro >= limit && smeltArr.length > 0) return true;
            return false;
        }

        //是否领取奖励
        isGetDeskReward(){
            var self = this;
            var record = self.get(gc.dsConsts.UserEntity.record);
            var isGet = record[gc.c_prop.userRecordTypeKey.saveDesk]||0;
            return isGet;
        }

        //保存桌面
        getAddDeskReward (cb, target) {
            var self = this;
            var argsObj = gc.iface.a_user_saveDeskSuccess_args, args = {};
            args[argsObj.type] = gc.c_prop.userRecordTypeKey.saveDesk;
            mo.requestWaiting4Server(gc.iface.a_user_saveDeskSuccess, args, function (data) {
                if(data) self.updateEntity(data);
                mo.showMsg(gc.id_c_msgCode.rewardMail);
                if (cb) cb.call(target, data);
            });
        }


        //绑定手机
        getBindPhoneReward (cb, target) {
            var self = this;
            var argsObj = gc.iface.a_user_saveDeskSuccess_args, args = {};
            args[argsObj.type] = gc.c_prop.userRecordTypeKey.bindPhone;
            mo.requestWaiting4Server(gc.iface.a_user_saveDeskSuccess, args, function (data) {
                if(data) self.updateEntity(data);
                if (cb) cb.call(target, data);
                self.pushNotify(self.__class.ON_GET_BINDPHONE_REWARD);
            });
        }

        //是否领取绑定手机奖励
        isGetBindPhoneReward(){
            var self = this;
            var record = self.get(gc.dsConsts.UserEntity.record);
            var isGet = record[gc.c_prop.userRecordTypeKey.bindPhone]||0;
            return isGet > 0;
        }

        //大于30级要检查是否有未领过绑定奖
        checkBindPhoneReward(){
            var self = this;
            if(self.getLvl() < 30) return;
            var ch = mo_channel.getCurChannel();
            ch.isBindMobile(function(isOpen, isBind){
                if(isOpen && isBind && !self.isGetBindPhoneReward()){
                    self.getBindPhoneReward(function(){
                        console.log("-->自动领奖");
                    }, self);
                }
            },self);
        }

        //得到绑定手机的url
        getBindPhoneUrl(cb, target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_user_getBindPhoneUrl, {}, function (url) {
               if(cb) cb.call(target, url);
            });
        }

        //hd { 提供SDK调用发奖
        addDesktopReward(type:number, cb, target) {
            var self = this;
            var argsObj = gc.iface.a_user_saveDeskSuccess_args, args = {};
            args[argsObj.type] = type;
            mo.requestWaiting4Server(gc.iface.a_user_saveDeskSuccess, args, function (data) {
                if(data) self.updateEntity(data);
                mo.showMsg(gc.id_c_msgCode.rewardMail);
                if (cb) cb.call(target, data);
            });
        }
        //hd }

        getWanbaGift(os:string, gitfId:number, cb, target){
            var self = this;
            var argsObj = gc.iface.a_user_getWanbagift_args, args = {};
            args[argsObj.os] = os;
            args[argsObj.giftId] = gitfId;
            mo.requestWaiting4Server(gc.iface.a_user_getWanbagift, args, function (data) {
                var code = data[gc.dsConsts.WanbaGift.code];
                if (code == 0) {
                    var userData = data[gc.dsConsts.WanbaGift.userData];
                    var bagItems = data[gc.dsConsts.WanbaGift.bagItems] || {};
                    var equipBagItems = data[gc.dsConsts.WanbaGift.equipBagItems] || {};
                    var bag = gd.userUtils.getNewBag({}, bagItems);
                    userData[gc.dsConsts.UserEntity.bag] = bag;
                    var equipBag = gd.userUtils.getNewEquipBag({}, equipBagItems);
                    userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                    self.updateEntity(userData);
                }
                if (cb) cb.call(target, data);
            })
        }

        sellItems(itemId, itemNum, cb, target){
            var self = this;
            var argsObj = gc.iface.a_item_sellItems_args, args = {};
            args[argsObj.itemId] = itemId;
            args[argsObj.itemNum] = itemNum;
            mo.requestWaiting4Server(gc.iface.a_item_sellItems, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems] || {};
                var bag = gd.userUtils.getNewBag(delBagItems,bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                self.pushNotify(self.__class.ON_ITEM_CHANGE);
                if (cb) cb.call(target, data);
            })
        }

        deleteItem(itemId,count){
            var self = this;
            if(!itemId)return;
            var delBagItems = {};
            delBagItems[itemId] = count;
            var bag = gd.userUtils.getNewBag(delBagItems,{});
            var userData = {};
            userData[gc.dsConsts.UserEntity.bag] = bag;
            gd.userCtrl.updateEntity(userData);
            self.pushNotify(self.__class.ON_ITEM_CHANGE);
        }

        updateBagItems(itemId, cb, target){
            var self = this;
            var argsObj = gc.iface.a_user_updateItems4Bag_args, args = {};
            args[argsObj.itemId] = itemId;
            mo.requestWaiting4Server(gc.iface.a_user_updateItems4Bag, args, function (updatebagItems) {
                var bag = gd.userUtils.getNewBag4update(updatebagItems);
                var userData = {};
                userData[gc.dsConsts.UserEntity.bag] = bag;
                gd.userCtrl.updateEntity(userData);
                if (cb) cb.call(target, updatebagItems);
            })
        }

        //是否达最大等级
        isMaxLvl(){
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.initCfg);
            return self.getLvl()>=gameInfo[0];
        }

        //获取勋章数量
        getMedalDataNum(medalId){
            var self = this;
            var medalData = self.get(gc.dsConsts.UserEntity.medalData);
            var num = medalData[medalId] ? 1:0;
            num += self.getItemNum(medalId);
            return num;
        }
    }

    export var userCtrl:UserCtrl;
}
