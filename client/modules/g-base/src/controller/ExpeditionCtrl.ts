module gd {
    export class ExpeditionCtrl extends mo.DataController {
        _expHeroBase:any;
        _initProp() {
            super._initProp();
            this._expHeroBase = {};
            this.DATA_KEY = gc.dsConsts.ExpeditionEntity;
        }

        updateEntity(data?){
            super.updateEntity(data);
        }

        /**
         * 获取数据
         * @param cb
         * @param target
         */
        getInfo(cb, target) {
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_expedition_getInfo,{}, function (data) {
                var initData = data[gc.dsConsts.ExpeditionData.expData];
                self.init(initData);
                self._expHeroBase = data[gc.dsConsts.ExpeditionData.expHeroData];
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 装备元婴
         * @param cb
         * @param tempId:"模板id", soulId:"元婴id"
         * @param target
         */
        wearSoul(tempId, soulId, cb, target) {
            var self = this;
            var args = {};
            var argsKey = gc.iface.a_expedition_wearSoul_args;
            args[argsKey.tempId] = tempId;
            args[argsKey.soulId] = soulId;
            mo.requestWaiting4Server(gc.iface.a_expedition_wearSoul,args, function (data) {
                var expedition = data[gc.dsConsts.ExpeditionData.expData];
                self.updateEntity(expedition);
                if (cb) cb.call(target,data);
            });
        }

        /**
         * 开始战斗
         * @param cb
         * @param stageId:"关卡id"
         * @param target
         */
        startBattle(stageId, cb, target) {
            var self = this;
            var args = {};
            var argsKey = gc.iface.a_expedition_startBattle_args;
            args[argsKey.stageId] = stageId;

            var heroMap = gd.heroCtrl.getHeroMap;
            var length = 0;
            for(var key in heroMap){
                var hero = heroMap[key];
                var soulArr = hero.getSoulArr();
                if(soulArr.length > 0){
                    length++;
                }
            }
            //if(length == 0) return mo.showMsg(gc.id_c_msgCode.noSpirit);
            //if(length < Object.keys(heroMap).length) return mo.showMsg(gc.id_c_msgCode.sureSpirit);

            mo.requestWaiting4Server(gc.iface.a_expedition_startBattle,args, function (data) {
                var expedition = data[gc.dsConsts.ExpeditionData.expData];
                self.updateEntity(expedition);
                if (cb) cb.call(target,data);
            });
        }
        /**
         * 结束战斗
         * @param cb
         * @param target
         * @returns ds.ArenaEntity
         */
        endBattle(isWin,herosHp,cb, target) {
            var self = this;
            var args = {};
            var argsKey = gc.iface.a_expedition_endBattle_args;
            args[argsKey.isWin] = isWin;
            args[argsKey.herosHp] = herosHp;
            mo.requestWaiting4Server(gc.iface.a_expedition_endBattle,args, function (data) {
                var expedition = data[gc.dsConsts.ExpeditionData.expData];
                self.updateEntity(expedition);
                if (cb) cb.call(target,data);
            });
        }
        //获取英雄信息
        getEnemyHeroBase(){
            var self = this;
            return this._expHeroBase;
        }
    }
    export var expeditionCtrl:ExpeditionCtrl = ExpeditionCtrl.getInstance();
}