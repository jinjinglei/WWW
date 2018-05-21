/**
 * Created by Administrator on 2015/12/17.
 */

module gd {
    export class BossCtrl extends mo.DataController {

        public static ON_BOSS_CALL_UPDATE:String = "ON_BOSS_CALL_UPDATE";
        public static ON_WORLD_BOSS_OPEN_CHANGE:String = "ON_WORLD_BOSS_OPEN_CHANGE";
        _bossListData:any = null;
        _isOpen:number;

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.BossData;
            this._isOpen = 0;
        }

        isGuildBoss(bossId){
            var self = this;
            var cfg_c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            return cfg_c_bossParameter[bossId] != null;
        }

        /**
         * 找回boss资源opt
         * @param bossId
         * @param combat 战力
         * @param type 找回类型 0:胜利 1:失败
         */
        getBackResOpt(bossId, combat, type = 0){
            var cfg_c_bossRes = mo.getJSONWithFileName(gc.cfg_c_bossRes);
            var c_bossRes = cfg_c_bossRes[bossId];
            var res = [], costDimond = 0, combatNeed = 0;
            var winCondtionKeys = [
                gc.c_bossRes_winCond1,gc.c_bossRes_winCond2,gc.c_bossRes_winCond3,gc.c_bossRes_winCond4,gc.c_bossRes_winCond5,
                gc.c_bossRes_winCond6,gc.c_bossRes_winCond7,gc.c_bossRes_winCond8,gc.c_bossRes_winCond9,gc.c_bossRes_winCond10
            ];
            var winResKeys = [
                gc.c_bossRes_winRes1, gc.c_bossRes_winRes2, gc.c_bossRes_winRes3, gc.c_bossRes_winRes4, gc.c_bossRes_winRes5,
                gc.c_bossRes_winRes6, gc.c_bossRes_winRes7, gc.c_bossRes_winRes8, gc.c_bossRes_winRes9, gc.c_bossRes_winRes10
            ];

            var failCondtionKeys = [
                gc.c_bossRes_failCond1,gc.c_bossRes_failCond2,gc.c_bossRes_failCond3,gc.c_bossRes_failCond4,gc.c_bossRes_failCond5,
                gc.c_bossRes_failCond6,gc.c_bossRes_failCond7,gc.c_bossRes_failCond8,gc.c_bossRes_failCond9,gc.c_bossRes_failCond10
            ];
            var failResKeys = [
                gc.c_bossRes_failRes1, gc.c_bossRes_failRes2, gc.c_bossRes_failRes3, gc.c_bossRes_failRes4, gc.c_bossRes_failRes5,
                gc.c_bossRes_failRes6, gc.c_bossRes_failRes7, gc.c_bossRes_failRes8, gc.c_bossRes_failRes9, gc.c_bossRes_failRes10
            ];
            var condtionKeys = (type == 0)? winCondtionKeys : failCondtionKeys;
            var resKeys = (type == 0)? winResKeys : failResKeys;
            //通过战力计算单位和找回花费
            for(var i = 0, li = condtionKeys.length; i < li; i++){
                var WCKey = condtionKeys[i];
                var g = c_bossRes[WCKey];
                if(!g) break;
                combatNeed = g[0];
                costDimond = g[1];
                if(combat >= combatNeed){
                    res = c_bossRes[resKeys[i]];
                    break;
                }
            }
            var opt = {
                items:res,
                combatNeed:combatNeed,
                costDimond:costDimond
            };
            return opt;
        }

        //获取剩余战斗次数
        getReFightNum(){
            var todayCount = userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.enterBoss);
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var maxCount = c_game[gc.id_c_game.worldBossCfg][9];;//获取最大次数
            var reNum = maxCount-todayCount;
            if(reNum<=0) reNum = 0;
            return reNum;
        }

        //获取剩余复活次数
        getReRepeatNum(){
            var todayCount = userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.repeatBoss);
            var c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var maxCount = c_vip[userCtrl.getVip()][gc.c_vip_guildBoss];//获取最大次数
            var reNum = maxCount-todayCount;
            if(reNum<=0) reNum = 0;
            return reNum;
        }
    }
    export var bossCtrl:BossCtrl = BossCtrl.getInstance();
}
