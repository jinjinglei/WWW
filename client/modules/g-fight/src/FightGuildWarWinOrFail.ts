/**
 * Created by Administrator on 2015/10/13.
 */
module g_fight{
    export class FightGuildWarWinOrFail extends FightDlg{
        btn_back;
        ico_fail;
        ico_win;
        ico_timeout;
        label_myName;
        label_myCombat;
        label_enemyName;
        label_enemyCombat;
        upWarn;
        ico_myRole;
        ico_enemyRole;
        label_myServer;
        label_enemyServer;
        label_myGuild;
        label_enemyGuild;
        label_noRob;
        grp_enemyFace;
        grp_myFace;
        label_score;
        label_damage;
        label_end;

        _initProp(){
            super._initProp();
        }

        _childrenCreated(){
            super._childrenCreated();
            //this.outsideClosable = true;
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var isWin = self.data.isWin;
            var isTimeout = self.data.isTimeout;
            var fightResult = self.data.fightResult;
            var begTime = self.data.begTime;
            var fightType = self.data.fightType;

            //FightResult:{winStatus:1,gold:2,items:3,honor:4,expc:5,killValue:6,pkValue:7,prestige:8,curRank:9,changeRank:10,hasChangeRank:11,attackMember:12,beAttackMember:13,mPkColor:14,ePkColor:15,isRevenge:16,coffersPerson:17,coffersCommon:18,coffersStatus:19,coffersPoints:20,coffersHurt:21,guildWarPoints:22,updateUser:23,updatePkOut:24,updateArena:25,bagItems:26,equipBagItems:27,guildData:28,guildPersonalData:29,updateCoffers:30},
            self.ico_win.visible = isWin;
            self.ico_fail.visible = !isWin && !isTimeout;
            self.ico_timeout.visible = isTimeout;
            self.upWarn.visible = !isWin;
            self.label_myName.text = fightResult[gc.dsConsts.FightResult.attackMember][0];
            self.label_enemyName.text = fightResult[gc.dsConsts.FightResult.beAttackMember][0];
            self.label_myServer.text = fightResult[gc.dsConsts.FightResult.attackMember][3];
            self.label_enemyServer.text = fightResult[gc.dsConsts.FightResult.beAttackMember][3];
            self.label_myGuild.text = fightResult[gc.dsConsts.FightResult.attackMember][4];
            self.label_enemyGuild.text = fightResult[gc.dsConsts.FightResult.beAttackMember][4];
            self.ico_myRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.attackMember][2]);
            self.ico_enemyRole.source = uiHelper.getHeroIcon(fightResult[gc.dsConsts.FightResult.beAttackMember][2]);
            var guildWarStatus = fightResult[gc.dsConsts.FightResult.guildWarStatus];
            var score = fightResult[gc.dsConsts.FightResult.guildWarPoints] || 0;
            self.label_score.text = self.label_damage.text = score;
            if(guildWarStatus==2){
                self.label_end.visible = true;
                self.label_noRob.visible = false;
            }else{
                self.label_end.visible = false;
                if(score!=0){
                    self.label_noRob.visible = false;
                }else{
                    self.label_noRob.visible = true;
                }
            }
            //if(isWin){

            //}else{
            //    var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            //    self.label_noRob.visible = false;
            //    var tmpY = self.grp_enemyFace.y;
            //    self.grp_enemyFace.y = self.grp_myFace.y;
            //    self.grp_myFace.y = tmpY;
            //    tmpY = self.label_enemyName.y;
            //    self.label_enemyName.y = self.label_myName.y;
            //    self.label_myName.y = tmpY;
            //}

            var leftTime = Math.ceil((begTime - Date.newDate().getTime()) / 1000);
            self.setCDTime(leftTime);
        }

        onExit(){
            super.onExit();
            var self = this;
            if(self.data.callback!=null){
                self.data.callback.call(self.data.target);
            }
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }
        timeTrigger;
        setCDTime(second){
            var self = this;
            if(second>0){
                if(self.timeTrigger){
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
                self.btn_back.label = mo.STR.format("返回(%s)", second.toString());
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.btn_back.label = mo.STR.format("返回(%s)", Math.floor(leftMillisecond/1000).toString());
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self._tap_btn_back();
        }

        _tap_btn_back(){
            var self = this;
            self.close();
            var serverData = gd.guildWarCtrl.curGuildServer;
            gd.guildWarCtrl.getWarAttackData(serverData[gc.dsConsts.GuildServer.serverId], serverData[gc.dsConsts.GuildServer.guildId],function(data){
                mo.moduleMgr.runModule(g_consts.moduleId.guildwar, {atkData:data});
            },self);
        }
    }
}