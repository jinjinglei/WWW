/**
 * Created by lihex on 1/5/16.
 */
module gd {
    export class EnemyHeroCtrl extends mo.DataController {

        heroCtrlList:Array<any>;
        isSelf:boolean;

        _initProp() {
            super._initProp();
            var self = this;
            self.isSelf = false;
        }

        getLvl(){
            return this.heroCtrlList[0].fightData[0];
        }

        getUserName(){
            return this.heroCtrlList[0].fightData[2];
        }

        //获取主英雄数据
        getMainHeroCtrl(){
            return this.heroCtrlList[0];
        }
        getHeroByIndex(index){
            return this.heroCtrlList[index];
        }

        hasHeroByIndex(index){
            return this.heroCtrlList[index] != null;
        }
        isToBeOpen(index){
            return false;
        }

        isMy4thRole(index){
            return false;
        }

        //获取出战列表
        getFightList(){
            var self = this;
            var reList = self.heroCtrlList;
            reList.sort(gd.heroCtrl._sortHeroList);
            return reList;
        }

        /**
         * 获取显示英雄数据
         * @param userId
         * @param cb
         * @param target
         */
        getShowHeroData(userId, cb,target){
            var self = this;
            var argKeys = gc.iface.a_hero_getShowHeroData_args;
            var args = {};
            args[argKeys.userId] = userId;
            mo.requestWaiting4Server(gc.iface.a_hero_getShowHeroData, args, function (data) {
                var heroList = data[gc.dsConsts.ShowHeroData.heroList];
                var otherDataList = data[gc.dsConsts.ShowHeroData.otherDataList];
                var fightData = data[gc.dsConsts.ShowHeroData.fightData];
                var heroCtrlList = [];
                for(var i = 0;i<heroList.length;i++){
                    var locHero = heroList[i];
                    var locHeroEntityCtrl = HeroEntityCtrl.createNewEnemy(locHero,fightData,otherDataList[i]);
                    heroCtrlList.push(locHeroEntityCtrl);
                }
                self.heroCtrlList = heroCtrlList;
                cb.call(target,heroCtrlList);
            });
        }
    }
    export var enemyHeroCtrl:EnemyHeroCtrl = EnemyHeroCtrl.getInstance();
}