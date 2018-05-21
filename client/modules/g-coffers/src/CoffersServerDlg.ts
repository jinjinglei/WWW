/**
 * Created by Administrator on 2016/1/25.
 */
module g_coffers{
    export class CoffersServerDlg extends mo.gui.Dlg {
        moduleParam;
        label_ap;
        list_server;
        _Item_list_server;
        grp_ap;
        label_robTime;
        label_time;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_server = CoffersServerCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            if(self.moduleParam){
                self.setData(self.moduleParam.data);

                var defData = self.moduleParam.defData;
                if(defData){
                    if(self.moduleParam.page==1){
                        CoffersSelectDefence.create().setData(defData).show();
                    }else if(self.moduleParam.page==2){
                        var breakNum = defData[gc.dsConsts.ExDefenceData.breakNum];
                        if(breakNum>0){
                            CoffersRob.create().setData(defData).show();
                        }else{
                            CoffersSelectDefence.create().setData(defData).show();
                        }
                    }
                }
            }
            self.apChange();
        }

        onExit() {
            super.onExit();
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }

        reset(){
            var self = this;
            gd.coffersCtrl.getServerArr(function(data){
                self.setData({list:data});
            }, self);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var data = self.data;

            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.serverPk);
            if(gd.userCtrl.getLvl()<openInfo[gc.c_open_lvlRequired]){
                self.grp_ap.visible = false;
            }
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            self.label_robTime.text = (gameInfo[12]>9?gameInfo[12]:"0"+gameInfo[12])+":00--"+(gameInfo[13]>9?gameInfo[13]:"0"+gameInfo[13])+":00";

            self.setCDTime(gd.coffersCtrl.getActionReseconds());
        }

        apChange(){
            var self = this;
            self.label_ap.text = gd.coffersCtrl.getReAction().toString();
        }

        _data_list_server():any[]{
            var self = this;
            return self.data.list;
        }
        _tap_btn_help(){
            var self = this;
            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.serverPk);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            var gameInfo3 = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers3);
            g_base.BaseShowTip.create().setData({id:36,param1:openInfo[gc.c_open_lvlRequired],
            param2:gameInfo3[3]/60>>0,
            param3:gameInfo[8]}).show();

        }

        _tap_btn_score() {
            gd.coffersCtrl.getInfo(function (data) {
                CoffersScore.create().show();
            }, this);
        }

        timeTrigger;

        setCDTime(second) {
            var self = this;
            if (second > 0) {
                if (self.timeTrigger) {
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
                self.resetCdTimeView(second * 1000);
            } else {
                self.resetCdTimeView(0);
            }
        }

        timeSec(type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCdTimeView(leftMillisecond);
        }

        timeOut(type, beginTime, endTime) {
            var self = this;
            self.resetCdTimeView(0);
            self.setCDTime(gd.coffersCtrl.getActionReseconds());
        }

        resetCdTimeView(leftMillisecond) {
            var self = this;
            if (leftMillisecond > 0) {
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
                self.label_time.text = mo.STR.format("再过%s恢复%s点", mo.getTimeStr(leftMillisecond), gameInfo[22]);
            } else {
                //if(gd.arenaCtrl.getRePKNum()>0)
                //    self.label_time.text = "可挑战";
            }
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = CoffersServerDlg;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            var self =this;
            async.series([
                function(cb1) {
                    gd.kingCtrl.getInfo(function(data){
                        if(!gd.kingCtrl.getData()){
                             mo.showMsg(gc.id_c_msgCode.yourServerNoOpen);
                            cb1("errr");
                            return
                        }
                        var hasKing = gd.kingCtrl.get(gc.dsConsts.King.kingId);
                        if(!hasKing){
                            mo.showMsg(gc.id_c_msgCode.yourServerNoOpen);
                            cb1("errr");
                            return
                        }
                        cb1();
                    }, this);
                },
                function(cb1) {
                    gd.coffersCtrl.getServerArr(function (data) {
                        moduleParam.data = {list: data};
                        cb1();
                     }, this);
                }],
                function(err) {
                    return cb(err);
                }, self);
        });
    });
}