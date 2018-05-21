/**
 * Created by Administrator on 2016/1/25.
 */
module g_coffers{
    export class CoffersSelectDefence extends mo.gui.Dlg {
        label_addProp;
        label_addProp2;
        label_win;
        label_score;
        ico_item;
        label_item;
        label_rate;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;

            self.registerClassByKey(gd.CoffersCtrl, gd.CoffersCtrl.ON_COFFERS_DEF_DATA_CHANGED, self.onDefDataChanged);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        timerId;
        startTime;
        onEnter(){
            super.onEnter();
            var self = this;
            self.timerId = setInterval(self.checkLeftTime, 1000, self);
        }
        onExit(){
            super.onExit();
            var self = this;
            clearInterval(self.timerId);
        }

        onDefDataChanged(defData){
            var self = this;
            self.setData(defData);
        }

        checkLeftTime(self){
            var data = self.data;//gc.dsConsts.ExDefenceData
            if(!data) return;
            var users = data[gc.dsConsts.ExDefenceData.cofferUserArr];//[gc.dsConsts.CofferUser]
            for(var i=0; i<4; ++i){
                var user = users[i];//gc.dsConsts.CofferUser
                if(!user) continue;
                var door = user[gc.dsConsts.CofferUser.door];
                var leftTime = user[gc.dsConsts.CofferUser.breakReplaySeconds]-(Date.newDate().getTime()-self.startTime)/1000;
                var m = leftTime/60>>0;

                self["label_time"+door].text = leftTime>0?(m||1):0;
                self["label_time"+door].visible = leftTime>0;
                self["ico_state"+door].source = leftTime>0?"ico_yijipo":null;
            }
            if(self.breakNum>0){
                self.label_rate.text = "掠夺倍率：×"+data[gc.dsConsts.ExDefenceData.lootRate];
            }else{
                self.label_rate.text = "击破任一守卫即可掠夺";
            }
        }

        get breakNum(){
            var self = this;
            var data = self.data;//gc.dsConsts.ExDefenceData
            var users = data[gc.dsConsts.ExDefenceData.cofferUserArr];//[gc.dsConsts.CofferUser]
            var breakNum = 0;
            for(var i=0; i<4; ++i){
                var user = users[i];//gc.dsConsts.CofferUser
                if(!user) continue;
                var door = user[gc.dsConsts.CofferUser.door];
                var leftTime = user[gc.dsConsts.CofferUser.breakReplaySeconds]-(Date.newDate().getTime()-self.startTime)/1000;
                breakNum = breakNum + (leftTime>0?1:0);
            }
            return breakNum;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;//gc.dsConsts.ExDefenceData
            var users = data[gc.dsConsts.ExDefenceData.cofferUserArr];//[gc.dsConsts.CofferUser]

            var stateSrcs = ["ico_yijipo","ico_yilueduojipo"];
            for(var i=0; i<4; ++i){
                var user = users[i];//gc.dsConsts.CofferUser
                if(!user) continue;
                var door = user[gc.dsConsts.CofferUser.door];
                var name = user[gc.dsConsts.CofferUser.name];
                var icon = user[gc.dsConsts.CofferUser.icon];
                var level = user[gc.dsConsts.CofferUser.lvl];
                var medalId = user[gc.dsConsts.CofferUser.medalTitle] || 0;

                self["label_name"+door].text = name;
                //self["label_lv"+door].text = "Lv."+level;
                self["ico_face"+door].source = uiHelper.getHeroIcon(icon, 0);
                self["ico_state"+door].source = user[gc.dsConsts.CofferUser.isBreak]?stateSrcs[0]:null;
                if (medalId != 0) {
                    self["ico_medal" + door].setData({itemId: medalId});
                    self["ico_medal" + door].visible = true;
                } else {
                    self["ico_medal" + door].visible = false;
                }
            }

            self.startTime = Date.newDate().getTime();
            self.checkLeftTime(self);
            self.label_addProp.text = "+" + (data[gc.dsConsts.ExDefenceData.hpAdd] * 100 || 0).toFixed(1) + "%(国库加成)";
            self.label_addProp2.text = "+" + (data[gc.dsConsts.ExDefenceData.attackAdd] * 100 || 0).toFixed(1) + "%(激励加成)";
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
            var itemSet = gameInfo[4].split(",");
            self.ico_item.source = resHelper.getItemIconPath(itemSet[0]);
            self.label_item.text = (itemSet[1]);

            self.label_win.text = gd.coffersCtrl.getCoffersWin();
            self.label_score.text = gd.coffersCtrl.getNextWinPoints();
        }

        _tap_grp_def0(){
            var self = this;
            self.startFightAt(0);
        }
        _tap_grp_def1(){
            var self = this;
            self.startFightAt(1);
        }
        _tap_grp_def2(){
            var self = this;
            self.startFightAt(2);
        }
        _tap_grp_def3(){
            var self = this;
            self.startFightAt(3);
        }

        startFightAt(index){
            var self = this;
            var data = self.data;//gc.dsConsts.ExDefenceData
            var users = data[gc.dsConsts.ExDefenceData.cofferUserArr];//[gc.dsConsts.CofferUser]
            var user;//gc.dsConsts.CofferUser
            for(var i=0; i<4; ++i) {
                user = users[i];//gc.dsConsts.CofferUser
                if (!user) continue;
                var door = user[gc.dsConsts.CofferUser.door];
                if(door == index){
                    break;
                }
            }
            var serverId = user[gc.dsConsts.CofferUser.serverId];
            var door = user[gc.dsConsts.CofferUser.door];
            var isLoot = user[gc.dsConsts.CofferUser.isLoot];
            var isBreak = user[gc.dsConsts.CofferUser.isBreak];
            if(isLoot){
                return mo.showMsg(gc.id_c_msgCode.gatesRobed);
            }else if(isBreak){
                return mo.showMsg(gc.id_c_msgCode.gatesBroken);
            }
            gd.coffersCtrl.fightStart(serverId, door,function(){},this);
        }
        _tap_ico_rob(){
            var self = this;
            var data = self.data;//gc.dsConsts.ExDefenceData
            if(self.breakNum>0){
                data[gc.dsConsts.ExDefenceData.breakNum] = self.breakNum;
                CoffersRob.create().setData(self.data).show();
            }else{
                mo.showMsg(gc.id_c_msgCode.noGuardDown);
            }
        }
        _tap_btn_help(){
            var self = this;
            g_base.BaseShowTip.create().setData({id:37}).show();
        }
    }
}