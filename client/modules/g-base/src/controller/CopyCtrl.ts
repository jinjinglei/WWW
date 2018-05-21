/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class CopyCtrl extends mo.DataController {
        public static ON_COPY_CHANGE = "ON_COPY_CHANGE";
        public static ON_TOWER_TANBAO = "ON_TOWER_TANBAO";
        public static ON_CHALLENGE_NUM = "ON_CHALLENGE_NUM";

        _copyEquipArr:any;
        _copyBossArr:any;
        _copyStateArr:any;
        _copyProgressMap:any;
        _curCopyId:number = -1;
        _tempLootArr:any;
        _biCost:number = 0;
        _initProp() {
            super._initProp();
            this._copyProgressMap = {};
            this._copyEquipArr = [];
            this._copyBossArr = [];
            this._copyStateArr = [];
            this._tempLootArr = [];
        }

        initData(copyProgressList){
            var self = this;
            for (var i = 0; i < copyProgressList.length; i++) {
                var locCopyProgress = copyProgressList[i];
                var copyProgressCtrl = new CopyProgressEntityCtrl();
                copyProgressCtrl.init(locCopyProgress);
                self._copyProgressMap[locCopyProgress[gc.dsConsts.CopyProgressEntity.copyType]] = copyProgressCtrl;
            }
        }

        getInfo(cb,target){
            var self = this;
            //_initCtrlByType
            async.parallel([
                function(cb1){
                    self._initCtrlByType(gc.c_prop.copyTypeKey.vip,cb1,self);
                },
                function(cb1){
                    self._initCtrlByType(gc.c_prop.copyTypeKey.guild,cb1,self);
                }
            ],function(){
                cb.call(target)
            });
        }

        //获取普通副本当前副本id
        getNormalCurCopyId():number{
            var self = this;
            var progressCtrl = self.getCopyProgressCtrl(gc.c_prop.copyTypeKey.normal);
            if(!progressCtrl) return 1;
            var copyObj = progressCtrl.get(gc.dsConsts.CopyProgressEntity.copyObj)||{};
            var keys = Object.keys(copyObj);
            var curCopyId = keys[keys.length-1]||1;
            var id = parseInt(curCopyId.toString());
            return id;
        }

        /**
         * 获取连胜数据
         * @returns [当前连胜，最高连胜]
         */
        getWinningStreak(){
            var self = this;
            var copyId = self.getNormalCurCopyId();
            var t_copy = mo.getJSONWithFileName(gc.cfg_t_copy);
            var maxWin = t_copy[copyId][gc.t_copy_monsterCount];

            var progressCtrl = self.getCopyProgressCtrl(gc.c_prop.copyTypeKey.normal);
            var curWin = progressCtrl.get(gc.dsConsts.CopyProgressEntity.winningStreak);
            return [curWin,maxWin];
        }

        //更新连胜
        updateWinningStreak(cb?,target?){
            var self = this;
            var copyId = self.getNormalCurCopyId();
            var winData = self.getWinningStreak();
            var curWin = winData[0];
            if(winData[0]>=winData[1]) return;
            curWin++;
            var progressCtrl = self.getCopyProgressCtrl(gc.c_prop.copyTypeKey.normal);
            progressCtrl.set(gc.dsConsts.CopyProgressEntity.winningStreak,curWin);

            var argKeys = gc.iface.a_copy_updateWinningStreak_args;
            var args = {};
            args[argKeys.copyId] = copyId;
            mo.request4Server(gc.iface.a_copy_updateWinningStreak, args, function (data) {
                if(cb) cb.call(target);
            });
        }

        //获取副本进度
        getCopyProgressCtrl(copyType){
            var self = this;
            //判断时间
            return self._copyProgressMap[copyType];
        }

        //更新数据
        updateCopyProgressCtrl(copyType,data){
            var self = this;
            var copyProgressCtrl = this.getCopyProgressCtrl(copyType);
            if(!copyProgressCtrl){
                copyProgressCtrl =  new CopyProgressEntityCtrl();
                copyProgressCtrl.init(data);
                self._copyProgressMap[copyType] = copyProgressCtrl;
            }else{
                copyProgressCtrl.updateEntity(data);
            }
        }

        //扫荡
        copyWipe(copyId,cb,target){
            var self = this;

            var t_copy = mo.getJSONWithFileName(gc.cfg_t_copy);
            var type = t_copy[copyId][gc.t_copy_type];
            if(type == gc.c_prop.copyTypeKey.equip){
                //背包满并且包含装备
                if(gd.userCtrl.isEquipBagReddot()&&gd.copyCtrl._checkHasEquip()){
                    mo.showMsg(gc.id_c_msgCode.bagMaxCantGet);
                }
            }

            var argKeys = gc.iface.a_copy_copyWipe_args;
            var args = {};
            args[argKeys.copyId] = copyId;
            mo.requestWaiting4Server(gc.iface.a_copy_copyWipe, args, function (data) {
                var userData = data[gc.dsConsts.ExCopyProgress.userData]||{};
                var copyProgressData = data[gc.dsConsts.ExCopyProgress.copyProgress]||{};
                var bagItems = data[gc.dsConsts.ExCopyProgress.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExCopyProgress.equipBagItems]||{};
                var delBagItems = data[gc.dsConsts.ExCopyProgress.delBagItems]||{};
                var wipeCount = data[gc.dsConsts.ExCopyProgress.wipeCount]||0;
                var items = data[gc.dsConsts.ExCopyProgress.items]||{};

                var bag = gd.userUtils.getNewBag(delBagItems,bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                if(userData) gd.userCtrl.updateEntity(userData);
                if(copyProgressData) self.updateCopyProgressCtrl(self.getCopyType(copyId),copyProgressData);
                self.pushNotify(self.__class.ON_CHALLENGE_NUM);
                cb.call(target,[items,wipeCount]);
            });
        }


        /**
         * 副本开始
         * @param copyId
         * @param cb
         * @param target
         * @returns [[uid,[[物品id,物品数量],[物品id,物品数量]]]]
         */
        start(copyId,cb,target){
            var self = this;
            var copyType = self.getCopyType(copyId);
            if(self.isCopyLocked(copyId)) return mo.showMsg("副本未开启");
            var con = self.checkPassCon(copyId);
            if(con){
                var type = con[0], arg = con[1];
                if(type == 999) return mo.showMsg("副本暂未开启");
                if(type == 1){
                    return mo.showMsg(gc.id_c_msgCode.noRoleLvl, arg);
                }
                if(type == 2) {     //普通副本光卡限制
                    return mo.showMsg("副本未开启");
                }
                if(type == 3) {     //境界要求限制
                    return mo.showMsg("副本未开启");
                }
            }

            if(fightCtrl.isSpFighting) return mo.showMsg("还在挑战中，请稍后");
            if(fightCtrl.isDie) return mo.showMsg("复活中，请稍后");
            this._curCopyId = copyId;

            var argKeys = gc.iface.a_copy_start_args;
            var args = {};
            args[argKeys.copyId] = copyId;
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var copyCount = self.getCopyCount(copyId);

            var needItemId = 0;
            if(copyType == gc.c_prop.copyTypeKey.equip){
                //装备副本,装备入场券
                needItemId = gc.c_prop.spItemIdKey.equipTessera;
                if(copyCount < 1) {
                    self.noCopyTimes1(copyId,function(){
                        self.start(copyId,cb,target);
                    },this);
                    return;
                }
            }else if(copyType == gc.c_prop.copyTypeKey.hell){
                //boss试炼副本,boss令牌
                needItemId = self.getBoosCopyEnterCost()[0];
                if(copyCount < 1) {
                    self.noCopyTimes(copyId,function(data){
                        self._biCost = data;
                        self.start(copyId,cb,target);
                    },this);
                    return;
                }
            }else if(copyType == gc.c_prop.copyTypeKey.state){
                //境界副本，入场券
                //潘福安入场券
                needItemId = gc.c_prop.spItemIdKey.realmTessera;
                if(copyCount < 1) {
                    self.noCopyTimes1(copyId,function(){
                        self.start(copyId,cb,target);
                    },this);
                    return;
                }
            }else if(copyType == gc.c_prop.copyTypeKey.vip){
                if(copyCount < 1) return mo.showMsg(gc.id_c_msgCode.vipNotimes);
            }

            if(needItemId){
                var ownNum = userCtrl.getItemNum(needItemId)||0;
                if(ownNum<1){
                    var needDiamond = t_item[needItemId][gc.t_item_price]||0;
                    var diamond = gd.userCtrl.getDiamond();
                    //判断元宝
                    if(diamond<needDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);
                }
            }
            fightCtrl.isSpFighting = true;
            args[argKeys.biCost] = this._biCost;
            mo.requestWaiting4Server(gc.iface.a_copy_start, args, function (data) {
                var userData = data[gc.dsConsts.ExCopyProgress.userData]||{};
                var delBagItems = data[gc.dsConsts.ExCopyProgress.delBagItems]||{};
                var bag = gd.userUtils.getNewBag(delBagItems,{});
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var copyProgressData = data[gc.dsConsts.ExCopyProgress.copyProgress]||{};
                if(userData) gd.userCtrl.updateEntity(userData);
                if(copyProgressData) self.updateCopyProgressCtrl(self.getCopyType(copyId),copyProgressData);
                var copyLoot = data[gc.dsConsts.ExCopyProgress.copyLoot]||[];
                var keys = Object.keys(copyLoot);
                var lastKey = keys[keys.length-1];
                var lootArr = [[lastKey,copyLoot[lastKey]]];
                self._tempLootArr = lootArr;
                self._biCost = 0;
                cb.call(target, lootArr);
            });
        }

        isCanStartHell(cb,target){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl = c_open[gc.id_c_open.bossCopy][gc.c_open_lvlRequired];
            if(userCtrl.getLvl()<needLvl) cb.call(target,false);

            self.getCopyBossList(function(copyIds){
                var ownNum = userCtrl.getItemNum(gc.c_prop.spItemIdKey.bossTessera)||0;
                var hasCount = false;
                for(var i = 0;i<copyIds.length;i++){
                    var locCopyId = copyIds[i];
                    var locCount = self.getCopyCount(locCopyId);
                    if(locCount>0){
                        hasCount = true;
                        break;
                    }
                }
                var isCan = ownNum>0&&hasCount;
                cb.call(target,isCan);
            },self);
        }

        _checkHasEquip() {
            var self = this;
            var hasEquip = false;
            var t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            for (var i = 0; i < self._tempLootArr.length; i++) {
                var locLoot = self._tempLootArr[i];
                if(!locLoot) continue;
                var locItemArr = locLoot[1]||[];
                for (var j = 0; j < locItemArr.length; j++) {
                    var locItemData = locItemArr[j]||[];
                    var locItemId = locItemData[0];
                    var locItemNum = locItemData[1];
                    if(t_itemEquip[locItemId]){
                        hasEquip = true;
                        break;
                    }
                }
            }
            return hasEquip;
        }

        //副本结束
        end(isWin, fightData, cb, target){
            if(this._curCopyId==-1)
                return;
            var self = this;

            //背包满并且包含装备
            if(userCtrl.isEquipBagReddot()&&self._checkHasEquip()){
                mo.showMsg(gc.id_c_msgCode.bagMaxCantGet);
            }

            var argKeys = gc.iface.a_copy_end_args;
            var args = {};
            var copyID = this._curCopyId;
            self._curCopyId = -1;
            args[argKeys.copyId] = copyID;
            args[argKeys.fightData] = fightData;
            args[argKeys.isWin] = isWin;
            mo.requestWaiting4Server(gc.iface.a_copy_end, args, function (data) {
                var userData = data[gc.dsConsts.ExCopyProgress.userData]||{};
                var copyProgressData = data[gc.dsConsts.ExCopyProgress.copyProgress]||{};
                var bagItems = data[gc.dsConsts.ExCopyProgress.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExCopyProgress.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                if(userData) gd.userCtrl.updateEntity(userData);
                if(copyProgressData) self.updateCopyProgressCtrl(self.getCopyType(copyID),copyProgressData);
                self.pushNotify(self.__class.ON_COPY_CHANGE);

                pointCtrl.cal(gc.c_prop.pointGreenKey.copy_equip);
                //公会贡献
                var guildData = data[gc.dsConsts.ExCopyProgress.guildData];
                if(guildData) guildCtrl.updateData(guildData);
                var guildPersonalData = data[gc.dsConsts.ExCopyProgress.guildPersonalData];
                if(guildPersonalData) guildPersonalCtrl.updateData(guildPersonalData);

                cb.call(target,data);
            });
        }

        /**
         * 获取副本掉落列表
         * @param copyId
         * @returns {any|Array}
         */
        getCopyLootList(copyId){
            var self = this;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            if(!copyData[gc.t_copy_lootDisplay]) return [];
            var copyLoot = mo.getJSONWithFileNameAndID(gc.cfg_t_copyLoot, copyData[gc.t_copy_lootDisplay]);
            return copyLoot[gc.t_copyLoot_showItems] || [];
        }

        /**
         * 返回普通副本战斗收益：
         * [每小时获得金币，每小时获得经验, 每小时获得刷怪数量, 每小时获得装备掉落, 下级, 升级需要经验，升级需要小时]
         */
        getNormalCopyProfit(){
            var self = this;
            var copyId = gd.copyCtrl.getNormalCurCopyId();
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            var attk = gd.heroCtrl.getAllHeroAttack();
            var allMonHp = 0;
            var randMonsters = copyData[gc.t_copy_randMonsters];
            var monsterId = randMonsters[0];
            var t_monster = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, monsterId);
            for(var i = 0, li = randMonsters.length; i < li; i++){
                t_monster = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, monsterId);
                allMonHp += t_monster[gc.t_monster_maxHp]
            }
            //单位时间
            var tUnit = attk/allMonHp;
            //金币收益
            var t_copyLoot = mo.getJSONWithFileNameAndID(gc.cfg_t_copyLoot, copyData[gc.t_copy_loot]);
            var moneyMax = t_copyLoot[gc.t_copyLoot_moneyMax];
            var goldProfit = Math.floor(moneyMax * t_copyLoot[gc.t_copyLoot_moneyProbability]/10000 * 3600);
            //装备掉落
            var equipDrop =Math.floor((0.06 + gd.userCtrl.getLvl() * 0.001) * tUnit * 3600);
            var heroDps = 0;
            var monsterTotal = copyData[gc.t_copy_monsterTotal];     //一波怪的数量
            var heroList = gd.heroCtrl.getList();
            for(var i = 0; i < heroList.length; i++){
                var locHero = heroList[i];
                heroDps += locHero.getDamagePerSec(t_monster);
            }
            var findMonsterSec = 5.3;//每波怪寻怪时间
            var sumHp = monsterTotal*t_monster[gc.t_monster_maxHp];     //一波怪总血量
            var aMonsterTime = sumHp/heroDps+findMonsterSec;  //击杀一波怪所需秒数
            if(aMonsterTime<5) aMonsterTime = 5;
            var wavePerHour = Math.round(3600/aMonsterTime);//一个小时杀怪波数

            var exp = t_monster[gc.t_monster_userExp];//一只怪多少经验

            //技能影响
            var skillPro = 0;
            var t_talismanSkill = mo.getJSONWithFileName(gc.cfg_t_talismanSkill);
            var userData = gd.userCtrl.getData();
            var exData = userData[gc.dsConsts.UserEntity.exData]||{};
            if(exData[gc.c_prop.userExDataKey.talismanSkill] && exData[gc.c_prop.userExDataKey.talismanSkill][gc.c_prop.talismanSkillTypeKey.exp]){
                var skillArr =exData[gc.c_prop.userExDataKey.talismanSkill][gc.c_prop.talismanSkillTypeKey.exp];
                for(var i = 0 ;i<skillArr.length;i++){
                    var skillId = skillArr[i];
                    if(t_talismanSkill[skillId]){
                        skillPro += parseInt(t_talismanSkill[skillId][gc.t_talismanSkill_effect][0][0]);
                    }
                }
            }
            exp = exp * (skillPro/10000+1);

            var expProfit = wavePerHour*monsterTotal*exp;//每小时多少经验
            var goldProfit = t_copyLoot[gc.t_copyLoot_moneyMax]*wavePerHour;//每小时多少金币

            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var lootLimitLvl = c_game[gc.id_c_game.lootLimit][0];      //副本字段区间
            var monsterLvl = t_monster[gc.t_monster_level];
            if(gd.userCtrl.getLvl()-monsterLvl>lootLimitLvl){
                exp = 0;
                equipDrop = 0;
            }

            //获取升级信息
            var nextLvl = 0;
            var upLvlReqExp = 0;
            var upLvllReqHour = 0;
            if(!gd.userCtrl.isMaxLvl()){
                var curLvl = gd.userCtrl.getLvl();
                nextLvl = curLvl + 1;
                var c_lvl = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, curLvl);
                upLvlReqExp = c_lvl[gc.c_lvl_reqExp] - gd.userCtrl.getExp();
                upLvllReqHour = upLvlReqExp / expProfit;
            }

            //宝箱掉落
            var exItems = t_copyLoot[gc.t_copyLoot_exItems];
            var boxItems = [];
            var keyItems = [];
            if (exItems) {
                for (var i = 0; i < exItems.length; i++) {
                    var chestsNum = exItems[i][2] * 1800 / 10000 * exItems[i][1];
                    var exItemsId = exItems[i][0];
                    chestsNum = parseFloat(chestsNum.toFixed(1));
                    if ((exItemsId / 100 >> 0) == 53) {
                        boxItems.push([exItemsId, chestsNum]);
                    }
                    if ((exItemsId / 100 >> 0) == 52) {
                        boxItems.push([exItemsId, chestsNum]);
                    }
                    if ((exItemsId / 100 >> 0) == 51) {
                        boxItems.push([exItemsId, chestsNum]);
                    }
                    if(exItemsId==1545 || exItemsId==1550 || exItemsId==1551){
                        keyItems.push([exItemsId, chestsNum]);
                    }
                }
            }

            return [goldProfit, expProfit, wavePerHour, equipDrop, nextLvl, upLvlReqExp, upLvllReqHour, Math.round(exp), boxItems, keyItems];
        }

        //检查副本是否锁定
        isCopyLocked(copyId){
            var self = this;
            //装备副本
            var index = self._copyEquipArr.indexOf(copyId);
            if(index != -1){
                return ((self._copyEquipArr.length -1) == index) && (self.checkPassCon(copyId) != null);
            }
            //Boss副本
            if(self.getCopyType(copyId) == gc.c_prop.copyTypeKey.hell){
                index = self._copyBossArr.indexOf(copyId);
                return index < 0;
            }
            //境界副本
            index = self._copyStateArr.indexOf(copyId);
            if(index != -1){
                return ((self._copyStateArr.length -1) == index) && (self.checkPassCon(copyId) != null);
            }
            return false;
        }

        getPassCon(copyId){
            var self = this;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            return copyData[gc.t_copy_cond];
        }

        //获取VIP副本剩余的次数
        getVipCopyReTimes(copyVip){
            var self = this;
            var copyCfgArr = self.getVipCopyCfg(copyVip);
            var startCopyId = copyCfgArr[0];
            if(!startCopyId) return 0;
            return self.getCopyCount(copyCfgArr[0]);
        }

        /***
         * 获取某级VIP副本区间
         * @param copyVip vip等级
         * @returns {number[]}
         */
        getVipCopyCfg(copyVip){
            var self = this;
            var c_vipCopy = mo.getJSONWithFileNameAndID(gc.cfg_c_vipCopy, copyVip);
            var copyCfgArr = c_vipCopy[gc.c_vipCopy_copyIds]; //副本字段区间
            return copyCfgArr;
        }

        getVipLootDesc(copyVip){
            var self = this;
            var desc = "";
            var cfg_c_vipCopy = mo.getJSONWithFileName(gc.cfg_c_vipCopy);
            var cfg = cfg_c_vipCopy[copyVip];
            if(cfg) desc = cfg[gc.c_vipCopy_lootDesc];
            return desc;
        }

        checkPassCon(copyId){
            var self = this;
            var passCons = self.getPassCon(copyId);
            for(var i = 0, li = passCons.length; i < li; i++){
                var locCond = passCons[i]||[];
                var locType = locCond[0];
                var locValue = locCond[1];
                var passed = self._checkPassCon(locType, locValue);
                if(!passed) return [locType, locValue];
            }
            return null;
        }
        /**
         * 检查开启条件
         * @param 条件类型，参数
         * ret : true 开启 false 不开启
         */
        _checkPassCon(type, arg){
            /*
             0,或者空值:无条件
             1等级
             2普通副本通关
             3境界要求
             999不开启
             */
            var self = this;
            var ret = true;
            switch (type){
                case 1:
                    ret = gd.userCtrl.getLvl() >= arg;
                    break;
                case 2:
                    var copyProgressCtrl = self.getCopyProgressCtrl(gc.c_prop.copyTypeKey.normal);
                    var copyObj = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.copyObj);
                    ret = !!copyObj[arg] || (arg == 0 || arg==1);
                    break;
                case 3: //境界要求限制
                    var realmLvl = gd.heroCtrl.getMaxStateLvl();
                    ret = realmLvl >= arg;
                    break;
                case 4: //VIP等级限制
                    ret = gd.userCtrl.getVip() >= arg;
                    break;
                case 999:
                    ret = false;
            }
            return ret;
        }

        //获取副本波数
        getCurMaxWaveCount(){
            var self = this;
            var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.getNormalCurCopyId());
            return copyData[gc.t_copy_monsterCount];
        }

        /*********************************************************************************/

        //获取装备副本列表  [id,id,id,...]  最后一个为未开启
        getCopyEquipList(cb,target) {
            var self = this;
            var returnArr = [];
            var t_copy = mo.getJSONWithFileName(gc.cfg_t_copy);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var copyIdSectionArr = c_game[gc.id_c_game.copyIdSection][gc.c_prop.copyTypeKey.equip].split(",");      //副本字段区间
            var normalCopyProgressCtrl = self.getCopyProgressCtrl(gc.c_prop.copyTypeKey.normal);

            self._initCtrlByType(gc.c_prop.copyTypeKey.equip,function(equipCopyProgressCtrl){
                var copyObj = normalCopyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.copyObj);     //普通副本数据
                for(var i = copyIdSectionArr[0];i <= copyIdSectionArr[1];i++){      //1001~1100   1~500
                    if(self.checkPassCon(i) == null){
                        returnArr.push(parseInt(i));
                    }else{
                        returnArr.push(parseInt(i));
                        break;
                    }
                }
                self._copyEquipArr=returnArr;
                cb.call(target,returnArr);
            },self);
        }

        //获取vip副本列表
        getVipCopyList(vip){
            var self = this;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_vipCopy, vip)[gc.c_vipCopy_copyIds];
            var ret = [];
            for(var copyId = parseInt(cfg[0]), li = parseInt(cfg[1]); copyId <= li; copyId++){
                ret.push(copyId);
                var conNotPass = gd.copyCtrl.checkPassCon(copyId);
                if(conNotPass) break; //玩家等级不足
            }
            return ret.reverse();
        }

        _initCtrlByType(type,cb,target){
            var self = this;
            var copyProgressCtrl = self.getCopyProgressCtrl(type);
            if(copyProgressCtrl) return cb(null,copyProgressCtrl);
            var args = {};
            var argKeys = gc.iface.a_copy_getInfo_args;
            args[argKeys.type] = type;
            mo.request4Server(gc.iface.a_copy_getInfo, args, function (data) {
                self.updateCopyProgressCtrl(type,data);
                var copyProgressCtrl = self.getCopyProgressCtrl(gc.c_prop.copyTypeKey.equip);
                cb(null,copyProgressCtrl);
            });
        }

        //获取Boss副本列表  [id,id,id,...]    最后一个为未开启
        getCopyBossList(cb,target) {
            var self = this;
            var returnArr = [];
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var t_copy = mo.getJSONWithFileName(gc.cfg_t_copy);
            var copyIdSectionArr = c_game[gc.id_c_game.copyIdSection][gc.c_prop.copyTypeKey.hell].split(",");      //副本字段区间

            self._initCtrlByType(gc.c_prop.copyTypeKey.hell,function(ctrl){
                for(var i = parseInt(copyIdSectionArr[0]), li = parseInt(copyIdSectionArr[1]); i <= li; i++){
                    if(self.checkPassCon(i) == null){
                        returnArr.push(i);
                    }
                }
                self._copyBossArr=returnArr;
                cb.call(target,returnArr);
            },self);
        }

        //获取境界副本列表  [id,id,id,...]  最后一个为未开启
        getCopyStateList(cb,target) {
            var self = this;
            var returnArr = [];
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var t_copy = mo.getJSONWithFileName(gc.cfg_t_copy);
            var copyIdSectionArr = c_game[gc.id_c_game.copyIdSection][gc.c_prop.copyTypeKey.state].split(",");      //副本字段区间
            self._initCtrlByType(gc.c_prop.copyTypeKey.state,function(ctrl){
                var heroCtrlList = gd.heroCtrl.getList();
                var stateLvl = 0;
                for (var key in heroCtrlList) {
                    var realmLvl = heroCtrlList[key].get(gc.dsConsts.HeroEntity.realmLvl);
                    if (realmLvl > stateLvl) stateLvl = realmLvl;
                }
                for (var i = copyIdSectionArr[0]; i <= copyIdSectionArr[1]; i++) {
                    if (self.checkPassCon(i) == null) {
                        returnArr.push(parseInt(i));
                    } else {
                        returnArr.push(parseInt(i));
                        break;
                    }
                }
                self._copyStateArr = returnArr;
                cb.call(target, returnArr);
            },self);

        }

        //是否有未阅读的副本
        hasNotReadEquip(type,cb,target){
            var self = this;
            self._getListByType(type,function(list){
                var hasNotRead = false;
                for(var i = 0;i<list.length-1;i++){
                    var locId = list[0];
                    var locIsRead = self.isRead(locId);
                    if(!locIsRead) {
                        hasNotRead = true;
                        break;
                    }
                }
                cb.call(target,hasNotRead);
            },self);
        }

        private _getListByType(type,cb,target){
            var self = this;
            switch (type){
                case gc.c_prop.copyTypeKey.equip:
                    self.getCopyEquipList(cb,target);
                    break;
                case gc.c_prop.copyTypeKey.hell:
                    self.getCopyBossList(cb,target);
                    break;
                case gc.c_prop.copyTypeKey.state:
                    self.getCopyStateList(cb,target);
                    break;
                default :
                    cb.call(target,[]);
                    break;
            }
        }

        setRead(copyId){
            var self = this;
            if(self.isRead(copyId)) return;

            var argKeys = gc.iface.a_copy_setRead_args;
            var args = {};
            args[argKeys.copyId] = copyId;
            mo.request4Server(gc.iface.a_copy_setRead, args, function (data) {
                if(data) self.updateCopyProgressCtrl(self.getCopyType(copyId),data);
            });
        }

        //判断是否阅读
        isRead(copyId){
            var self = this;
            var type = self.getCopyType(copyId);
            var copyProgressCtrl = self.getCopyProgressCtrl(type);
            var readObj = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.readObj);
            if(readObj[copyId]) return true;
            return false;
        }

        //通过副本id获取对应副本类型
        getCopyType(copyId){
            var t_copy = mo.getJSONWithFileName(gc.cfg_t_copy);
            var copyType = t_copy[copyId][gc.t_copy_type];
            return copyType;
        }

        /**
         * 查询进入副本所需的道具：[道具id，数量]
         * @param type 副本类型 gc.c_prop.copyTypeKey
         * @returns {any}
         */
        queryCopyNeedItem(type){
            var self = this;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.copyNeedItem);
            var data;
            switch (type){
                case gc.c_prop.copyTypeKey.equip:
                    data = cfg[0];
                    break;
                case gc.c_prop.copyTypeKey.state:
                    data = cfg[1];
                    break;
                case gc.c_prop.copyTypeKey.hell:
                    data = cfg[2];
                    break;
            }
            if(data){
                return data.split(",");
            }
            mo.error("未找到副本类型为%s对应所需配置", type);
            return null;
        }

        //炼狱副本需要消耗的道具：[道具id，数量]
        getBoosCopyEnterCost(){
            /*
            1.优先消耗BOSS令牌，当BOSS令牌没有的时候，显示BOSS替代令
             2.当所有进入道具数量均为0时，弹出BOSS令牌的获得途径
             3.炼狱BOSS副本，1个BOSS令牌=N个BOSS替代令，读取配置【c_game(游戏配置)】【67】参数1
             4.每日可使用BOSS替代令挑战副本的次数有限制，读取配置【c_game(游戏配置)】【67】参数2，次数每日0点重置
             */
            var self = this;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.bossTesseraReplace);
            var exchangNum = cfg[0];
            var maxUseTimes = cfg[1];
            var nowUseTimes = gd.userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.bossTesseraReplace);


            var spItemKey = gc.c_prop.spItemIdKey;
            var data = self.queryCopyNeedItem(gc.c_prop.copyTypeKey.hell);
            var bossTesseraReplaceId = spItemKey.bossTesseraReplace;//令牌替换令
            var tesseraId = data[0];
            var tesseraNum = data[1];

            var costItemId = gd.userCtrl.getItemNum(tesseraId) > 0? tesseraId : bossTesseraReplaceId;
            if(costItemId == bossTesseraReplaceId){
                var num = gd.userCtrl.getItemNum(bossTesseraReplaceId);
                costItemId = (num >= exchangNum)? bossTesseraReplaceId: tesseraId;
                //判断使用次数
                costItemId = (nowUseTimes >= maxUseTimes) ? tesseraId : costItemId;
            }
            var costNum = (costItemId == tesseraId)? tesseraNum : exchangNum;
            return [costItemId, costNum];
        }

        //获取副本今日剩余次数
        getCopyCount(copyId){
            var self = this;
            var c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var copyProgressCtrl = self.getCopyProgressCtrl(self.getCopyType(copyId));      //todo
            var copyType = self.getCopyType(copyId);        //副本类型
            var vip = gd.userCtrl.getVip() || 0;        //vip等级
            var maxTimes = 0;
            var vipExt = 0;
            var perKey = copyId;
            switch (copyType){
                case gc.c_prop.copyTypeKey.equip:      //装备副本
                    maxTimes = c_vip[vip][gc.c_vip_equipCount];
                    vipExt = maxTimes - c_vip[0][gc.c_vip_equipCount];
                    break;
                case gc.c_prop.copyTypeKey.hell:      //Boss副本
                    maxTimes = c_vip[vip][gc.c_vip_bossCount];
                    vipExt = maxTimes - c_vip[0][gc.c_vip_bossCount];
                    break;
                case gc.c_prop.copyTypeKey.state:      //境界副本
                    maxTimes = c_vip[vip][gc.c_vip_realmCount];
                    vipExt = maxTimes - c_vip[0][gc.c_vip_realmCount];
                    break;
                case gc.c_prop.copyTypeKey.vip:      //vip副本
                    var copyVip = self.getCopyVip(copyId);
                    perKey = copyVip;
                    maxTimes = self.getMaxVipCopyTimes(copyVip);
                    vipExt = maxTimes;
                    break;
            }

            if(!copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.refreshTime)) return maxTimes;
            var refreshTime = Date.newDate(copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.refreshTime));     //最后一次通关子副本时间
            var timesPerDay = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.timesPerDay);     //子副本剩余挑战次数
            if(!refreshTime || !refreshTime.equalsDay(Date.newDate()) || !timesPerDay.hasOwnProperty(perKey)) return maxTimes;
            return parseInt(timesPerDay[perKey]) + vipExt;
        }

        /**
         * 查询玩家当前vip等级下,可以打相应VIP副本的次数
         * @param copyVip 副本VIP等级
         * @returns {number}
         */
        getMaxVipCopyTimes(copyVip){
            var self = this;
            var vip = gd.userCtrl.getVip() || 0; //vip等级
            var c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var maxTimes = 0;
            if(copyVip==7 ) maxTimes = c_vip[vip][gc.c_vip_copyCountV7];
            if(copyVip==10 ) maxTimes = c_vip[vip][gc.c_vip_copyCountV10];
            if(copyVip==14 ) maxTimes = c_vip[vip][gc.c_vip_copyCountV14];
            if(copyVip==17 ) maxTimes = c_vip[vip][gc.c_vip_copyCountV17];
            if(copyVip==19 ) maxTimes = c_vip[vip][gc.c_vip_copyCountV19];
            return maxTimes;
        }

        //查找copyId对应vip等级
        getCopyVip(copyId){
            var c_vipCopy = mo.getJSONWithFileName(gc.cfg_c_vipCopy);
            for(var key in c_vipCopy){
                var vipCopyData = c_vipCopy[key];
                var copyIds = vipCopyData[gc.c_vipCopy_copyIds]; //副本字段区间
                if(copyId>= parseInt(copyIds[0])&&copyId<= parseInt(copyIds[1])){
                    return vipCopyData[gc.c_vipCopy_vipLvl];
                }
            }
            return 0;
        }

        //获取副本购买次数
        getBuyCopyCount(copyId){
            var self = this;
            var copyProgressCtrl = self.getCopyProgressCtrl(self.getCopyType(copyId));
            var buyCopyCount = 0;
            var resetTime = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetTime);     //购买时间
            var resetCounts = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetCounts);     //子副本今日购买次数
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate())) copyProgressCtrl.set(gc.dsConsts.CopyProgressEntity.resetCounts,{});
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate()) || !resetCounts.hasOwnProperty(copyId)) return buyCopyCount;
            return resetCounts[copyId];
    }

        //获取副本星级
        getCopyStar(copyId){
            var self = this;
            var copyProgressCtrl = self.getCopyProgressCtrl(self.getCopyType(copyId));
            var copyStar = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.copyStar);     //子副本星级
            var starCount = copyStar[copyId]||0;
            return starCount;
        }

        //获取入场劵数量
        getTesseraCount(itemId){
            var tesseraCount = gd.userCtrl.getItemNum(itemId);
            return tesseraCount;
        }

        getTesseraPrice(itemId){
            var self = this;
            var t_item = mo.getJSONWithFileNameAndID(gc.cfg_t_item,itemId);
            return t_item[gc.t_item_price]||0;
        }

        //获取当前装备副本挑战次数价格
        getEquipCopyPrice(copyId){
            var self = this;
            var buyCopyCount = 1;
            var copyProgressCtrl = self.getCopyProgressCtrl(self.getCopyType(copyId));
            var resetTime = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetTime);     //购买时间
            var resetCounts = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetCounts);     //购买次数
            //如果时间在昨天或者不存在  更新购买次数数据
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate())){
                copyProgressCtrl.set(gc.dsConsts.CopyProgressEntity.resetCounts,{});
            }
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate()) || !resetCounts.hasOwnProperty(copyId)) return gc.calBuyEquip(buyCopyCount);
            buyCopyCount = parseInt(resetCounts[copyId]) + 1;
            return gc.calBuyEquip(buyCopyCount);
        }

        //获取当前Boss副本挑战次数价格
        getBossCopyPrice(copyId){
            var self = this;
            var buyCopyCount = 1;
            var copyProgressCtrl = self.getCopyProgressCtrl(self.getCopyType(copyId));
            var resetTime = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetTime);     //购买时间
            var resetCounts = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetCounts);     //购买次数
            //如果时间在昨天或者不存在  更新购买次数数据
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate())){
                copyProgressCtrl.set(gc.dsConsts.CopyProgressEntity.resetCounts,{});
            }
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate()) || !resetCounts.hasOwnProperty(copyId)) return gc.calBuyBoss(buyCopyCount);
            buyCopyCount = parseInt(resetCounts[copyId]) + 1;
            return gc.calBuyBoss(buyCopyCount);
        }

        //获取当前境界副本挑战次数价格
        getRealmCopyPrice(copyId){
            var self = this;
            var buyCopyCount = 1;
            var copyProgressCtrl = self.getCopyProgressCtrl(self.getCopyType(copyId));
            var resetTime = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetTime);     //购买时间
            var resetCounts = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetCounts);     //购买次数
            //如果时间在昨天或者不存在  更新购买次数数据
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate())){
                copyProgressCtrl.set(gc.dsConsts.CopyProgressEntity.resetCounts,{});
            }
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate()) || !resetCounts.hasOwnProperty(copyId)) return gc.calBuyRealm(buyCopyCount);
            buyCopyCount = parseInt(resetCounts[copyId]) + 1;
            return gc.calBuyRealm(buyCopyCount);
        }

        //购买境界副本、装备副本挑战次数
        buyCopyCount1(copyId,cb,target){
            var self = this;
            var copyType = self.getCopyType(copyId);        //副本类型
            var argKeys = gc.iface.a_copy_buyCopyCount_args;
            var args = {};
            args[argKeys.copyId] = copyId;
            args[argKeys.type] = copyType;
            var price = 0;      //价格
            switch (copyType){
                case gc.c_prop.copyTypeKey.equip:      //装备副本
                    price = self.getEquipCopyPrice(copyId);
                    break;
                case gc.c_prop.copyTypeKey.state:      //境界副本
                    price = self.getRealmCopyPrice(copyId);
                    break;
            }

            mo.showMsg(gc.id_c_msgCode.buyCopyTimes1, price, function(){
                var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
                if(diamond < price) return  mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                mo.requestWaiting4Server(gc.iface.a_copy_buyCopyCount, args, function (data) {
                    var userData = data[gc.dsConsts.ExUserData.userData]||{};
                    var copyProgressData = data[gc.dsConsts.ExUserData.copyProgressData]||{};
                    gd.userCtrl.updateEntity(userData);
                    self.updateCopyProgressCtrl(self.getCopyType(copyId),copyProgressData);
                    cb.call(target,data);
                });
            });
        }

        //购买BOSS副本挑战次数
        buyCopyCount(copyId,cb,target){
            var self = this;
            var copyType = self.getCopyType(copyId);        //副本类型
            var argKeys = gc.iface.a_copy_buyCopyCount_args;
            var args = {};
            args[argKeys.copyId] = copyId;
            args[argKeys.type] = copyType;
            var cfg_c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var resetCounts = self.getBuyCopyCount(copyId);
            var buyBossCount = cfg_c_vip[gd.userCtrl.getVip()||0][gc.c_vip_buyBossCount];
            if(resetCounts >= buyBossCount) return mo.showMsg(gc.id_c_msgCode.cantUseMax,resetCounts);

            var price = self.getBossCopyPrice(copyId),buyCount = self.getBuyCopyCount(copyId),maxCount = cfg_c_vip[gd.userCtrl.getVip()||0][gc.c_vip_buyBossCount];
            mo.showMsg(gc.id_c_msgCode.buyCopyTimes, price, buyCount, maxCount, function(){
                var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
                if(diamond < price) return  mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                mo.requestWaiting4Server(gc.iface.a_copy_buyCopyCount, args, function (data) {
                    var userData = data[gc.dsConsts.ExUserData.userData]||{};
                    var copyProgressData = data[gc.dsConsts.ExUserData.copyProgressData]||{};
                    gd.userCtrl.updateEntity(userData);
                    self.updateCopyProgressCtrl(self.getCopyType(copyId),copyProgressData);
                    cb.call(target,data);
                });
            });
        }

        /**
         * 购买入场卷
         * @param itemId 入场券id
         * @param cb
         * @param target
         */
        buyTessera(itemId,cb,target){
            var self = this;
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var price = t_item[itemId][gc.t_item_price]||0;
            mo.showMsg(gc.id_c_msgCode.buyCopyItem, price, gc.c_prop.spItemId[itemId], function(){
                switch (itemId){
                    case gc.c_prop.spItemIdKey.equipTessera:
                        self.buyEquipTessera(cb,target);
                        break;
                    case gc.c_prop.spItemIdKey.realmTessera:
                        self.buyRealmTessera(cb,target);
                        break;
                    default:
                        mo.error("未知入场券id");
                        break;
                }
            });
        }

        //购买装备入场卷
        buyEquipTessera(cb,target){
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var price = t_item[gc.c_prop.spItemIdKey.equipTessera][gc.t_item_price]||0;      //价格
            var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
            if(diamond < price) return  mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
            mo.requestWaiting4Server(gc.iface.a_copy_buyEquipTessera, {}, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData)
                cb.call(target,data);
            });
        }

        //购买境界入场卷
        buyRealmTessera(cb,target){
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            var price = t_item[gc.c_prop.spItemIdKey.realmTessera][gc.t_item_price]||0;      //价格
            var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
            if(diamond < price) return  mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
            mo.requestWaiting4Server(gc.iface.a_copy_buyRealmTessera, {}, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData)
                cb.call(target,data);
            });
        }

        //获取所有boss副本id
        getBossCopyTempList(){
            var self = this;
            var copyIds = [];
            var copyIdSection = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.copyIdSection)[1].split(',');
            var starId = parseInt(copyIdSection[0]);
            var endId = parseInt(copyIdSection[1]);
            for(var i = starId, li = endId; i <= li; i++){
                copyIds.push(i);
            }
            return copyIds;
        }

        //获取boss副本长度
        getBossCopyLength(){
            var copyIdSection = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.copyIdSection)[1].split(',');
            var starId = parseInt(copyIdSection[0]);
            var endId = parseInt(copyIdSection[1]);
            return endId - starId + 1;
        }

        //获取最近解锁的BOSS副本ID
        getCurBossCopyId(){
            var self = this;
            if(self._copyBossArr.length == self.getBossCopyLength()){
                return self._copyBossArr[self._copyBossArr.length-1];
            }
            return self._copyBossArr[self._copyBossArr.length -1] || self.getBossCopyTempList()[0];
        }

        //购买装备副本、境界副本次数（直接进入）
        noCopyTimes1 (copyId, cb, target) {
            var self = this;
            var cfg_t_copy = mo.getJSONWithFileName(gc.cfg_t_copy);
            var type = cfg_t_copy[copyId][gc.t_copy_type];
            var costDiamond = 0;
            switch (type){
                case gc.c_prop.copyTypeKey.equip:       //装备副本
                    costDiamond = self.getEquipCopyPrice(copyId);
                    break;
                case gc.c_prop.copyTypeKey.state:       //境界副本
                    costDiamond = self.getRealmCopyPrice(copyId);
                    break;
            }
            //挑战次数不足，是否花费[ubb color=#6dd1ff]%s元宝[/ubb][/br]购买1次并进入？
            mo.showMsg(gc.id_c_msgCode.noCopyTimes1, costDiamond, function(){
                //计算消耗的钻石
                if (gd.userCtrl.getDiamond() < costDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                var copyType = self.getCopyType(copyId);        //副本类型
                var argKeys = gc.iface.a_copy_buyCopyCount_args;
                var args = {};
                args[argKeys.copyId] = copyId;
                args[argKeys.type] = copyType;
                mo.requestWaiting4Server(gc.iface.a_copy_buyCopyCount, args, function (data) {
                    var userData = data[gc.dsConsts.ExUserData.userData]||{};
                    var copyProgressData = data[gc.dsConsts.ExUserData.copyProgressData]||{};
                    gd.userCtrl.updateEntity(userData);
                    self.updateCopyProgressCtrl(self.getCopyType(copyId),copyProgressData);
                    cb.call(target,data);
                });
            });
        }

        //购买BOSS副本次数（直接进入）
        noCopyTimes (copyId, cb, target) {
            var self = this;
            var cfg_c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var costDiamond = self.getBossCopyPrice(copyId);

            var buyCount = self.getBuyCopyCount(copyId),maxCount = cfg_c_vip[gd.userCtrl.getVip()||0][gc.c_vip_buyBossCount];
            //挑战次数不足，是否花费[ubb color=#6dd1ff]%s元宝[/ubb][/br]购买1次并进入？[/br]（今日剩余购买%s/%s次）
            mo.showMsg(gc.id_c_msgCode.noCopyTimes, costDiamond, buyCount, maxCount, function(){
                //今日已达使用上限[/br][/br][ubb size=60]（今日已使用%s次）[/ubb]
                if(buyCount>=maxCount)  return  mo.showMsg(gc.id_c_msgCode.cantUseMax,buyCount);

                //计算消耗的钻石
                if (gd.userCtrl.getDiamond() < costDiamond) return mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
                var copyType = self.getCopyType(copyId);        //副本类型
                var argKeys = gc.iface.a_copy_buyCopyCount_args;
                var args = {};
                args[argKeys.copyId] = copyId;
                args[argKeys.type] = copyType;
                mo.requestWaiting4Server(gc.iface.a_copy_buyCopyCount, args, function (data) {
                    var userData = data[gc.dsConsts.ExUserData.userData]||{};
                    var copyProgressData = data[gc.dsConsts.ExUserData.copyProgressData]||{};
                    gd.userCtrl.updateEntity(userData);
                    self.updateCopyProgressCtrl(self.getCopyType(copyId),copyProgressData);
                    cb.call(target,costDiamond);
                });
            });
        }

        /**
         * 返回开启等级
         * @param copyType gc.c_prop.copyTypeKey
         * @returns {number}
         */
        getOpenLvl(copyType){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl = 0;
            switch (copyType){
                case gc.c_prop.copyTypeKey.equip:
                    needLvl = c_open[gc.id_c_open.equipCopy][gc.c_open_lvlRequired];
                    break;
                case gc.c_prop.copyTypeKey.state:
                    needLvl = c_open[gc.id_c_open.reamCopy][gc.c_open_lvlRequired];
                    break;
                case gc.c_prop.copyTypeKey.hell:
                    needLvl = c_open[gc.id_c_open.bossCopy][gc.c_open_lvlRequired];
                    break;
            }
            return needLvl;
        }
        getPracticeOpenLvl(copyType){
            var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl = 0;
            switch (copyType){
                case gc.c_prop.practiceTypeKey.heart:
                    needLvl = c_open[gc.id_c_open.heartStunt1][gc.c_open_lvlRequired];
                    break;
                case gc.c_prop.practiceTypeKey.medal:
                    needLvl = 0;
                    break;
                case gc.c_prop.practiceTypeKey.gift:
                    needLvl = c_open[gc.id_c_open.openTrump][gc.c_open_lvlRequired];;
                    break;
            }
            return needLvl;
        }
        //-------------------- 爬塔 开始 --------------------

        //奖励数组      [是否可领，是否已领]   true：可领/已领取   false：不可领/未领取
        getIsAwardArr(copyId){
            var self = this;

            var copyProgressCtrl = self.getCopyProgressCtrl(gc.c_prop.copyTypeKey.paTa);
            var copyObj = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.copyObj);          //{copyId:[最低血量,是否领取],copyId:[最低血量,是否领取],.....}
            if(!copyObj[copyId] || !copyObj[copyId][0] || copyObj[copyId][0] != -1) return [false,false];
            if(!copyObj[copyId][1]) return [true,false];
            return [false,true];
        }

        //获取当前层数copyId
        getHighPata(){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var section = c_game[gc.id_c_game.towerCopy][0].split(",");      //爬塔副本id区间
            var highCopyId = parseInt(section[0]);
            var highPaTa = gd.userCtrl.get(gc.dsConsts.UserEntity.highPaTa)||0;       //爬塔最高层数
            highCopyId = highPaTa + highCopyId;
            return highCopyId;
        }

        isFirstTowerCopyId(){
            var self = this;
            return self.getHighPata() == self.getTowerCopyIdRange()[0];
        }

        getTowerCopyIdRange(){
            var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.towerCopy);
            var copyIdRange = c_game[0].split(',');
            var starCopyId = parseInt(copyIdRange[0]), endCopyId = parseInt(copyIdRange[1]);
            return [starCopyId, endCopyId];
        }

        //当前聚焦的副本id
        getFocusTowerCopyId(){
            var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.towerCopy);
            var copyIdRange = c_game[0].split(',');
            var starCopyId = parseInt(copyIdRange[0]), endCopyId = parseInt(copyIdRange[1]);
            var curCopyId = self.getHighPata();
            var preCopyId = curCopyId - 1;
            if(preCopyId >= starCopyId){
                //检查有未领的没
                var awardInfoArr = self.getIsAwardArr(preCopyId);
                if(!awardInfoArr[1]) curCopyId = preCopyId;
            }
            if(curCopyId > endCopyId) curCopyId = endCopyId;
            return curCopyId;
        }

        //获取今日剩余免费寻宝次数
        getPaTaTreasuryCount(){
            var self = this;

            var type = gc.c_prop.copyTypeKey.paTa;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var maxTimes = c_game[gc.id_c_game.towerCopy][1];
            var copyProgressCtrl = self.getCopyProgressCtrl(type);
            if(!copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.refreshTime)) return maxTimes;
            var refreshTime = Date.newDate(copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.refreshTime));     //最后一次通关子副本时间
            var timesPerDay = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.timesPerDay);     //子副本剩余挑战次数
            if(!refreshTime || !refreshTime.equalsDay(Date.newDate()) || !timesPerDay.hasOwnProperty(type)) return maxTimes;
            maxTimes = timesPerDay[type];
            if(maxTimes<0) maxTimes = 0;
            return maxTimes;
        }

        //获取每日最大免费探宝次数
        getMaxFreeTowerTimes(){
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var maxTimes = c_game[gc.id_c_game.towerCopy][1];
            return maxTimes;
        }

        //获取今日购买寻宝次数
        getPaTaTreasuryBuyCount(){
            var self = this;

            var type = gc.c_prop.copyTypeKey.paTa;
            var copyProgressCtrl = self.getCopyProgressCtrl(type);
            var buyCopyCount = 0;
            var resetTime = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetTime);     //购买时间
            var resetCounts = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.resetCounts);     //子副本今日购买次数
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate())) copyProgressCtrl.set(gc.dsConsts.CopyProgressEntity.resetCounts,{});
            if(!resetTime || !Date.newDate(resetTime).equalsDay(Date.newDate()) || !resetCounts.hasOwnProperty(type)) return buyCopyCount;
            return resetCounts[type];
        }

        //获取当前需要花费元宝
        getPaTaTreasuryNeedDia(){
            var self = this;

            var returnDia = 0;
            var count = self.getPaTaTreasuryCount();
            if(count > 0) return returnDia;
            var paTaTreasuryBuyCount = self.getPaTaTreasuryBuyCount()+1;
            var highPaTa = gd.userCtrl.get(gc.dsConsts.UserEntity.highPaTa)||0;       //爬塔最高层数
            returnDia = gc.calPaTaAward(paTaTreasuryBuyCount,highPaTa);
            return returnDia;
        }

        //爬塔初始化
        getPaTaInfo(cb, target) {
            var self = this;

            var type = gc.c_prop.copyTypeKey.paTa;
            var copyProgressCtrl = self.getCopyProgressCtrl(type);
            if(copyProgressCtrl) return cb.call(target,copyProgressCtrl);
            self._initCtrlByType(type,function(data){
                cb.call(target,data);
            },self);
        }

        //爬塔领取奖励
        paTaAward(copyId, cb, target){
            var self = this;

            var type = gc.c_prop.copyTypeKey.paTa;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var section = c_game[gc.id_c_game.towerCopy][0].split(",");      //爬塔副本id区间
            if(copyId<section[0] || copyId>section[1]) return mo.showMsg("数据异常");
            var copyProgressCtrl = self.getCopyProgressCtrl(type);
            var awardArr = copyProgressCtrl.get(gc.dsConsts.CopyProgressEntity.copyObj)[copyId]||[];    //{copyId:[最低血量,是否领取],copyId:[最低血量,是否领取],.....}
            if(!awardArr[0] || awardArr[0] != -1) return mo.showMsg("还未通关该boss");
            if(awardArr[1] && awardArr[1] == 1) return mo.showMsg("已领取过该奖励！");

            var argKeys = gc.iface.a_copy_paTaAward_args;
            var args = {};
            args[argKeys.copyId] = copyId;
            mo.requestWaiting4Server(gc.iface.a_copy_paTaAward, args, function (data) {
                var userData = data[gc.dsConsts.ExCopyProgress.userData]||{};
                var copyProgressData = data[gc.dsConsts.ExCopyProgress.copyProgress]||{};
                var bagItems = data[gc.dsConsts.ExCopyProgress.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExCopyProgress.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                if(userData) gd.userCtrl.updateEntity(userData);
                if(copyProgressData) gd.copyCtrl.updateCopyProgressCtrl(type,copyProgressData);

                cb.call(target,bagItems);
            });
        }

        //爬塔宝库抽奖
        paTaTreasury(cb, target){
            var self = this;

            var lvl = gd.userCtrl.getLvl();
            var type = gc.c_prop.copyTypeKey.paTa;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var paTaOpen = c_open[gc.id_c_open.paTa][gc.c_open_lvlRequired];
            if(lvl < paTaOpen) return mo.showMsg(gc.id_c_msgCode.towerNotOpen,paTaOpen);
            var highPaTa = gd.userCtrl.get(gc.dsConsts.UserEntity.highPaTa)||0;       //爬塔最高层数
            if(highPaTa<1) return mo.showMsg(gc.id_c_msgCode.noLevelDown);
            //元宝判断
            if(self.getPaTaTreasuryNeedDia() > gd.userCtrl.getDiamond()) {
                return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }
            mo.requestWaiting4Server(gc.iface.a_copy_paTaTreasury, {}, function (data) {
                var userData = data[gc.dsConsts.ExCopyProgress.userData]||{};
                var copyProgressData = data[gc.dsConsts.ExCopyProgress.copyProgress]||{};
                var bagItems = data[gc.dsConsts.ExCopyProgress.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExCopyProgress.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                if(userData) gd.userCtrl.updateEntity(userData);
                if(copyProgressData) gd.copyCtrl.updateCopyProgressCtrl(type,copyProgressData);
                self.pushNotify(self.__class.ON_TOWER_TANBAO);
                cb.call(target,bagItems);
            });
        }

        //获取3个爬塔怪副本
        getTowerMonList(){
            var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.towerCopy);
            var copyIdRange = c_game[0].split(',');
            var starCopyId = parseInt(copyIdRange[0]), endCopyId = parseInt(copyIdRange[1]);
            var curCopyId = self.getHighPata();
            var preCopyId = curCopyId - 1;
            if(preCopyId >= starCopyId){
                //检查有未领的没
                var awardInfoArr = self.getIsAwardArr(preCopyId);
                if(!awardInfoArr[1]) curCopyId = preCopyId;
            }
            if(curCopyId > endCopyId) curCopyId = endCopyId;
            var curPassCount = curCopyId - starCopyId;
            var group = Math.floor(curPassCount/3);
            var ret = [];
            for(var i = 0, li = 3; i < li; i++){
                var copyId = starCopyId + group * 3 + i;
                ret.push(copyId);
            }
            return ret;
        }
        //获取层数
        getTowerIndex(copyId){
            var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.towerCopy);
            var copyIdRange = c_game[0].split(',');
            var starCopyId = parseInt(copyIdRange[0]);
            return parseInt(copyId) - starCopyId + 1;
        }

        //该塔是否已经通过
        isTwerPassed(copyId){
            var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.towerCopy);
            var copyIdRange = c_game[0].split(',');
            var starCopyId = parseInt(copyIdRange[0]);
            return parseInt(copyId) < self.getHighPata();
        }

        //以copyId开始,往后查找有特殊奖励的copyId
        findSpAward(copyId){
            var self = this;
            var c_paTa = mo.getJSONWithFileName(gc.cfg_t_paTaTreasury);
            for(var i = parseInt(copyId);;++i){
                var cfg = c_paTa[i];
                if(!cfg) break;
                if(cfg[gc.t_paTaTreasury_preview]){
                    return i;
                }
            }
            return null;
        }

        //获取可抽奖层数
        getTowerBaokuNum(){
            var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.towerCopy);
            var copyIdRange = c_game[0].split(',');
            var starCopyId = parseInt(copyIdRange[0]), endCopyId = parseInt(copyIdRange[1]);
            var curCopyId = self.getHighPata();
            if(curCopyId-1 < starCopyId) return starCopyId;
            if(curCopyId-1 >= endCopyId) return endCopyId;
            return curCopyId - 1;
        }

        //-------------------- 爬塔 结束 --------------------

    }
    export var copyCtrl:CopyCtrl;
}