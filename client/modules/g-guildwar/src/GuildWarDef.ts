/**
 * Created by Administrator on 2016/4/8.
 */
module g_guildwar {
    export class GuildWarDef extends mo.gui.Layer {
        grp_rob;
        label_guild;
        bar_curHp
        ico_noDefCur;
        ico_hasBreakCur;
        label_robDoor;
        btn_attackRec;
        btn_score;

        grp_def;

        grp_myGuildWarData;
        label_leftNum;
        label_myState;
        btn_clearCd;
        label_rank;
        label_live;
        label_point;
        label_leftTime;
        btn_guwu;
        grp_guwuLeftTime;
        label_guwuLeftTime;
        label_addProp;
        btn_help;
        btn_back;

        isRobTab:boolean = false;//抢夺页和防守页

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;

            //MyGuildWarData:{groupId:1,guildReNum:2,cd:3,guildRank:4,doorLives:5,points:6,inspireSeconds:7,overReSeconds:8},
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.guildReNum.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.guildRank.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.doorLives.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.points.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.nextFightTime.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.inspireEndTime.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.warEndTime.toString(), self.updateMyGuildWarData);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.MyGuildWarData.isDefence.toString(), self.updateMyGuildWarData);

            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_ATK_UPDATE, function(serverId,guildId){
                gd.guildWarCtrl.getWarAttackData(serverId, guildId,function(data){
                    self.data.atkData = data;
                    self.dataChanged();
                },self);
            });
            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_DEF_UPDATE, function(){
                gd.guildWarCtrl.getWarDefenceData(function(data){
                    self.data.defData = data;
                    self.dataChanged();
                },self);
            });
        }

        timerId;
        onEnter(){
            super.onEnter();
            var self = this;
            self.timerId = setInterval(function(){
                self.updateCd();
            },1000)
        }
        onExit(){
            super.onExit();
            var self = this;
            clearInterval(self.timerId);
            gd.guildWarCtrl.exitSyncScenne();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            if(self.data.atkData){
                self.goto(1);
            }else if(self.data.defData){
                self.goto(0);
            }
            for(var i=0; i<4; ++i){
                //var grp_rob = self["grp_rob"+i];
                var bar_hpDef = self["bar_defHp"+i];
                var bar_hpRob = self["bar_robHp"+i];
                var ico_robSel = self["ico_robSel"+i];

                bar_hpDef.labelFunction = function(a, b){
                    return "城门生命："+(a+"/"+b);
                }
                bar_hpRob.labelFunction = function(a, b){
                    return "";
                }
                ico_robSel.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onDoorSel, self);
            }
            self.bar_curHp.labelFunction = function(a, b){
                return "城门生命："+(a+"/"+b);
            }
            self.bar_curHp.slideDuration = 100;
            //
            //if(self.data && self.data.curGuildServer){
            //    gd.guildWarCtrl.getWarAttackData(self.data.curGuildServer[gc.dsConsts.GuildServer.serverId], self.data.curGuildServer[gc.dsConsts.GuildServer.guildId],function(data){
            //        self.data.atkData = data;
            //        self.goto(1);
            //        gd.guildWarCtrl.setSyncSceneType(2);
            //    },self);
            //}
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;

            if(self.isRobTab){
                var atkData = self.data.atkData;//gc.dsConsts.GuildWarData

                self.label_guild.text = atkData[gc.dsConsts.GuildWarData.guildName];
                self.updateAtkDoors(atkData[gc.dsConsts.GuildWarData.doorList]);
            }else{
                var defData = self.data.defData;//gc.dsConsts.GuildWarData
                self.updateDefDoors(defData[gc.dsConsts.GuildWarData.doorList]);
            }
            self.updateMyGuildWarData();
        }

        goto(index){
            var self = this;
            self.isRobTab = !!index;
            if(self.isRobTab){
                self.grp_rob.visible = true;
                self.grp_def.visible = false;
                self.btn_attackRec.y = self.btn_score.y = 208;
                gd.guildWarCtrl.setSyncSceneType(2);
                self.selectDoor(gd.guildWarCtrl.curDoor||0);
            }else{
                self.grp_rob.visible = false;
                self.grp_def.visible = true;
                self.btn_attackRec.y = self.btn_score.y = 80;
                gd.guildWarCtrl.setSyncSceneType(3);
            }
            self.dataChanged();
        }

        updateMyGuildWarData(){
            var self = this;

            //MyGuildWarData:{groupId:1,guildReNum:2,cd:3,guildRank:4,doorLives:5,points:6,inspireSeconds:7,overReSeconds:8},
            var groupId = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.groupId);
            var num = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.guildReNum);
            var total = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.guildTotal);
            self.label_leftNum.text = [gc.c_prop.guildGroup[groupId],num,total];
            self.label_rank.text = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.guildRank);
            self.label_live.text = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.doorLives);
            self.label_point.text = gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.points);
            self.updateCd();
        }
        updateCd(){
            var self = this;
            var inspireTime = gd.guildWarCtrl.getInspireReSeconds();
            var cd = gd.guildWarCtrl.getFightCd();
            var overTime = gd.guildWarCtrl.getOverReSeconds();
            self.btn_clearCd.visible = false;
            if(inspireTime>0){
                self.grp_guwuLeftTime.visible = true;
                self.label_guwuLeftTime.text = mo.getTimeStr(inspireTime*1000);
                var buffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 5);
                self.label_addProp.text = buffInfo[gc.t_otherBuff_addHurt]/100;
            }else{
                self.grp_guwuLeftTime.visible = false;
                self.label_addProp.text = 0;
            }
            if(gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.doorLives)>0){
                if(!gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.isDefence)){
                    if(cd>0){
                        self.btn_clearCd.visible = true;
                        self.label_myState.text = mo.getTimeStr(cd*1000)+"后可进攻";
                    }else{
                        self.label_myState.text = "可进攻";
                    }
                }else{
                    self.label_myState.text = "防守中";
                }
            }else{
                self.label_myState.text = "行会已被攻破";
            }

            self.label_leftTime.text = mo.getTimeStr(overTime*1000, true);
        }
        _tap_btn_guwu(){
            var self = this;
            mo.showMsg(gc.id_c_msgCode.buyInspire, gd.guildWarCtrl.getInspireCount(), gd.guildWarCtrl.getInspireCost(), function(){
                gd.guildWarCtrl.inspire(function(data){
                    self.updateCd();
                }, self);
            });
        }
        _tap_btn_clearCd(){
            var self = this;
            mo.showMsg(gc.id_c_msgCode.buyManyCD, gd.guildWarCtrl.getClearCdCount(), gd.guildWarCtrl.getClearCdCost(), function() {
                gd.guildWarCtrl.clearCd(function () {
                    self.updateCd();
                }, self);
            });
        }

        selectDoor(index){
            var self = this;
            if(!self.isRobTab) return;

            var strs = ["东","南","西","北"];
            gd.guildWarCtrl.curDoor = index;

            for(var i=0; i<4; ++i){
                var ico_robSel = self["ico_robSel"+i];
                ico_robSel.alpha = 0;
            }
            ico_robSel = self["ico_robSel"+gd.guildWarCtrl.curDoor];
            ico_robSel.alpha = 1;
            self.label_robDoor.text = strs[gd.guildWarCtrl.curDoor];
            var doors = self.data.atkData[gc.dsConsts.GuildWarData.doorList];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var totalHp = gameInfo[1];
            for(var i=0; i<4; ++i) {
                var data = doors[i];//gc.dsConsts.GuildWarDoor
                //{door:1,hp:2,userId:3,userName:4,userIcon:5,isBreak:6}
                var door = data[gc.dsConsts.GuildWarDoor.door];
                var isBreak = data[gc.dsConsts.GuildWarDoor.isBreak];

                if(door==gd.guildWarCtrl.curDoor){
                    self.ico_hasBreakCur.visible = isBreak;
                    self.ico_noDefCur.visible = false;
                    if(!isBreak){
                        self.ico_noDefCur.visible = true;
                    }

                    self.bar_curHp.maximum = totalHp;
                    self.bar_curHp.value = data[gc.dsConsts.GuildWarDoor.hp];
                }
            }
        }

        updateAtkDoors(doors){
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var totalHp = gameInfo[1];
            for(var i=0; i<4; ++i){
                var data = doors[i];//gc.dsConsts.GuildWarDoor
                //{door:1,hp:2,userId:3,userName:4,userIcon:5,isBreak:6}
                var door = data[gc.dsConsts.GuildWarDoor.door];
                var isBreak = data[gc.dsConsts.GuildWarDoor.isBreak];
                var hp = data[gc.dsConsts.GuildWarDoor.hp];
                var ico_robSel = self["ico_robSel"+door];
                var bar_hp = self["bar_robHp"+door];

                ico_robSel.alpha = 0;
                bar_hp.maximum = totalHp;
                bar_hp.value = hp;
                bar_hp.validateNow();
            }
            ico_robSel = self["ico_robSel"+gd.guildWarCtrl.curDoor];
            ico_robSel.alpha = 1;
        }
        updateDefDoors(doors){
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var totalHp = gameInfo[1];
            for(var i=0; i<4; ++i){
                var data = doors[i];//gc.dsConsts.GuildWarDoor
                //{door:1,hp:2,userId:3,userName:4,userIcon:5,isBreak:6}
                var door = data[gc.dsConsts.GuildWarDoor.door];
                var name = data[gc.dsConsts.GuildWarDoor.userName];
                var icon = data[gc.dsConsts.GuildWarDoor.userIcon];
                var isBreak = data[gc.dsConsts.GuildWarDoor.isBreak];
                var hp = data[gc.dsConsts.GuildWarDoor.hp];
                var userId = data[gc.dsConsts.GuildWarDoor.userId];
                var bar_hp = self["bar_defHp"+door];
                var ico_break = self["ico_hasBreak"+door];
                var icoNoRole = self["ico_noDef"+i];
                var icoHasRole = self["ico_hasDef"+i];

                ico_break.visible = isBreak;
                bar_hp.maximum = totalHp;
                bar_hp.value = hp;
                icoNoRole.visible = icoHasRole.visible = false;
                if(!isBreak && userId){
                    icoHasRole.visible = true;
                }else{
                    if(!isBreak){
                        icoNoRole.visible = true;
                    }
                }
            }
        }

        _data_list_guild():any[]{
            var self = this;
            return self.data.list;
        }

        onDoorSel(e){
            var self = this;
            for(var i=0; i<4; ++i) {
                var ico_robSel = self["ico_robSel"+i];
                if(ico_robSel == e.currentTarget) break;
            }

            self.selectDoor(i);
        }

        _tap_btn_chat(){
            GuildWarChat.create().show();
        }

        _tap_btn_defSetting(){
            var self = this;
            GuildWarDefSetting.create().setData({defData:self.data.defData, guildWarDef:self}).show();
        }

        _tap_btn_attackRec(){
            var self = this;
            gd.guildWarCtrl.getAttackRecordList(function(data){
                GuildWarAttackRecDlg.create().setData({recData:data}).show();
            },self);
        }
        _tap_btn_score(){
            var self = this;
            gd.guildWarCtrl.getGuildWarAllRank(function(data){
                GuildWarRank.create().setData({rankData:data, groupId:gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.groupId)}).show();
            },self);
        }

        _tap_btn_defRec(){
            var self = this;
            gd.guildWarCtrl.getDefenceRecordList(function(data){
                GuildWarDefenceRecDlg.create().setData({defData:data}).show();
            },self);
        }

        _tap_btn_back(){
            var self = this;
            if(self.isRobTab){
                self.goto(0);
            }else{
                mo.moduleMgr.runModule(g_consts.moduleId.fight);
            }
        }
        //_tap_btn_backList(){
        //    var self = this;
        //    gd.guildWarCtrl.setSyncSceneType(1);
        //}

        _tap_btn_rob(e){
            var self = this;
            var atkData = self.data.atkData;

            gd.guildWarCtrl.fightStartDoor(atkData[gc.dsConsts.GuildWarData.serverId],atkData[gc.dsConsts.GuildWarData.guildId],gd.guildWarCtrl.curDoor,function(data){

            },self);
        }

        _tap_btn_robList(){
            var self = this;
            gd.guildWarCtrl.getGuildList(function(data){
                GuildWarGuildList.create().setData({list:data, guildWarDef:self}).show();
            }, self);
        }

        _tap_btn_help(){
            var self = this;
            if (self.isRobTab) {
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
                g_base.BaseShowTip.create().setData({id: 64, param1: gameInfo[2], param2: gameInfo[3]}).show();
            } else {
                g_base.BaseShowTip.create().setData({id: 65}).show();
            }
        }
    }
}