/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export var fightLayer:any;
    export class FightCtrl extends mo.DataController {
        public static ON_START_PVP_FIGHT:string = "ON_START_PVP_FIGHT";
        public static ON_NEXT_LOOT:string = "ON_NEXT_LOOT";
        public static ON_ENTER_COPY:string = "ON_ENTER_COPY";

        _copyLootDic:Object;
        isSpFighting:boolean;//是否特殊战斗中，特殊战斗中不能切换
        isDie:boolean;
        _buffArr:any;
        _initProp() {
            super._initProp();
            this._copyLootDic = {};
            this.isSpFighting = false;
            this._buffArr = [];
        }

        //获取buff列表
        getBuffArr = function(){
            return this._buffArr;
        }

        //设置buff列表
        setBuffArr = function(buffArr){
            var self = this;
            self._buffArr = buffArr;
            self._checkKingBuff();
        }

        //判断霸主buff
        _checkKingBuff = function(){
            var self = this;
            var has = false;
            if(self._buffArr.indexOf(gc.c_prop.otherBuffIdKey.king)>-1){
                has = true;
            }
            return kingCtrl.setIsOpenBuff(has);
        }

        //获取经验倍率
        getExpcRate = function(){
            var self = this;
            var expcRate = 1;
            var t_otherBuff = mo.getJSONWithFileName(gc.cfg_t_otherBuff);

            for(var i = 0;i<self._buffArr.length;i++){
                var locBuffId = self._buffArr[i];
                var locRate = t_otherBuff[locBuffId][gc.t_otherBuff_addHurt]/10000;
                locRate = parseInt(locRate.toString());
                if(locBuffId==gc.c_prop.otherBuffIdKey.king){
                    expcRate+=locRate;
                }
            }
            return expcRate;
        }

        /**
         * 获取下一次掉落
         * @param copyId
         * @param isBoss
         * @param cb
         * @param target
         * @returns [[uid,[[物品id,物品数量],[物品id,物品数量]]],.........]
         */
        getNextLoot(copyId,isBoss,cb, target){
            var self = this;
            self._initNextLoot(copyId,isBoss,function(){
                /*var reLootArr = [];
                for(var i =0;i<num;i++){
                    reLootArr.push(self._getUnUseCopyLootByUid(copyId,isBoss));
                }*/
                var reLootArr = self._getAllUnUseCopyLoot(copyId,isBoss);
                cb.call(target,reLootArr);
                self.pushNotify(self.__class.ON_NEXT_LOOT, {});
                mo.emitter.emit(self.__class.ON_NEXT_LOOT)
            }, self);
        }


        /**
         * 获取怪物，得到金币，物品
         * @param uidArr
         * @param fightData [公式计算的一波怪的时间，真实的一波怪的时间，是否异常]
         * @param cb
         * @param target
         */
        pickLoot (uidArr,  fightData, cb, target) {
            var self = this;
            var copyId = copyCtrl.getNormalCurCopyId();

            var args = {};
            var argsKey = gc.iface.a_fight_pickLoot_args;
            args[argsKey.copyId] = copyId;
            args[argsKey.uidArr] = uidArr;
            args[argsKey.fightData] = fightData;
            var oldUserLvl = userCtrl.getLvl();
            mo.request4Server(gc.iface.a_fight_pickLoot, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var copyProgressData = data[gc.dsConsts.ExUserData.copyProgressData];
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntityNotShow(userData);
                if (oldUserLvl != userCtrl.getLvl()) {
                    heroCtrl.calPropAndCombat();
                }
                if(copyProgressData) copyCtrl.updateCopyProgressCtrl(copyCtrl.getCopyType(copyId),copyProgressData);
                if (cb) return cb.call(target,data);
            });
        }

        startPvpFight(myHeroEntityCtrlAry, enemyHeroEntityCtrlAry, isPkOut, name=null){
            //this.pushNotify(this.__class.ON_START_PVP_FIGHT, {my:myHeroEntityCtrlAry, enemy:enemyHeroEntityCtrlAry, isPkOut:isPkOut});
            if(mo.moduleMgr.curModule.name != g_consts.moduleId.fight)
                mo.moduleMgr.runModule(g_consts.moduleId.fight);
            //process.nextTick(function(){
            //    process.nextTick(function(){
                    gd.fightLayer.onStartPvpFight({my:myHeroEntityCtrlAry, enemy:enemyHeroEntityCtrlAry, isPkOut:isPkOut, name:name});
            //    });
            //});
        }
        enterCopy(copyID){
            gd.copyCtrl.start(copyID,function(loots){
                var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyID);
                if(copyInfo[gc.t_copy_type]!=gc.c_prop.copyTypeKey.normal&&mo.moduleMgr.curModule.name != g_consts.moduleId.fight)
                    mo.moduleMgr.runModule(g_consts.moduleId.fight);
                //process.nextTick(function(){
                //    process.nextTick(function(){
                        gd.fightLayer.onEnterCopy({pveType:gc.c_prop.fightTypeKey.copy, copyID:copyID, loots:loots.concat()});
                //    });
                //});
            },this);
        }
        forceNormalCopy(){
            gd.fightLayer.forceNormalCopy();
        }

        _getAndInitNextLoot(copyId,isBoss,cb, target){
            var self = this;
            var lvl  = userCtrl.getLvl();
            var args = {};
            var argsKey = gc.iface.a_fight_getAndInitNextLoot_args;
            args[argsKey.copyId] = copyId;
            args[argsKey.isBoss] = isBoss;
            args[argsKey.lvl] = lvl;

            mo.request4Server(gc.iface.a_fight_getAndInitNextLoot, args, function (data) {
                if(!data){
                    //mo.showMsg("检测到数据异常!\n如果用外挂，将会严惩！");
                    data = {};
                }
                for(var key in data){
                    self._setUnUseCopyLootByUid(copyId, isBoss, key, data[key]);
                }
                if (cb) return cb.call(target,data);
            });
        }

        _initNextLoot(copyId,isBoss,cb, target){
            var self = this;
            self._getAndInitNextLoot(copyId,isBoss,cb, target);
            /*var unUseLootDic = self._getUnUseLootDic(copyId,isBoss);
            if(Object.keys(unUseLootDic).length>=num){
                cb.call(target);
            }else{
                self._getAndInitNextLoot(copyId,isBoss,cb, target);
            }*/
        }

        _getUseLootDic(copyId,isBoss){
            var self = this;
            var lootObj =  self._getCopyLootDic(copyId);
            var useLootDic = isBoss?lootObj.useBossLootDic:lootObj.useLootDic;
            return useLootDic;
        }

        _getUnUseLootDic(copyId,isBoss){
            var self = this;
            var lootObj =  self._getCopyLootDic(copyId);
            var unUseLootDic = isBoss?lootObj.unUseBossLootDic:lootObj.unUseLootDic;
            return unUseLootDic;
        }

        _getCopyLootDic(copyId){
            var self = this;
            var lootObj =  self._copyLootDic[copyId];
            if(!lootObj){
                lootObj = new LootObj();
                lootObj.copyId = copyId;
                self._copyLootDic[copyId] =lootObj;
            }
            return lootObj;
        }

        _getAllUnUseCopyLoot(copyId,isBoss){
            var self = this;
            var unUseLootDic = self._getUnUseLootDic(copyId,isBoss);
            var useLootDic = self._getUseLootDic(copyId,isBoss);

            var reLootArr = [];
            for(var key in unUseLootDic){
                var items = unUseLootDic[key];
                delete unUseLootDic[key];
                useLootDic[key] = items;
                reLootArr.push([key,items]);
            }
            return reLootArr;
        }

        _getUnUseCopyLootByUid(copyId,isBoss){
            var self = this;
            var unUseLootDic = self._getUnUseLootDic(copyId,isBoss);
            var useLootDic = self._getUseLootDic(copyId,isBoss);
            var keys = Object.keys(unUseLootDic);
            var lastKey = keys[keys.length-1];
            var items = unUseLootDic[lastKey];
            if(items&&lastKey){
                delete unUseLootDic[lastKey];
                useLootDic[lastKey] = items;
                return [lastKey,items];
            }
            return null;
        }

        _setUnUseCopyLootByUid(copyId,isBoss,uid,items){
            var self = this;
            var unUseLootDic = self._getUnUseLootDic(copyId,isBoss);
            unUseLootDic[uid] = items;
        }
    }
    export var fightCtrl:FightCtrl = FightCtrl.getInstance();
}