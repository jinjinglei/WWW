/**
 * Created by admin on 16/4/14.
 */
module g_fight {
    export class FightTreasureOutside extends mo.gui.Layer {


        btn_p_search;
        label_search_count;
        label_cost;
        label_search_refresh;
        grp_searching;
        grp_cost;
        coolDownLabel;

        _initProp() {
            var self = this;
            super._initProp();
        }

        dataChanged() {
            super.dataChanged();
        }

        onExit() {
            super.onExit();
            this.cleanCDTime();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            gd.pkOutCtrl.getEnemyList(function (data) {
                self.data['list'] = data;
                self._reset();
                self._resetSearchBtn();
            }, self);
        }

        _setItem(index, item) {
            var self = this;
            var head = self["ico_role" + index];
            var resName = uiHelper.getHeroIcon(item[gc.dsConsts.PkOutUserData.iconId], 0);
            mo.R.loadTo('FightScene', resName, function () {
            });
            head.source = resName;

            //var vipLvl = item[gc.dsConsts.PkOutUserData.vip];
            //var vipGrp = self["grp_vip" + index];
            //if (vipLvl > 0) {
            //    vipGrp.visible = true;
            //    var vipLbl = self["label_vipLv" + index];
            //    vipLbl.text = vipLvl + "";
            //} else {
            //    vipGrp.visible = false;
            //}
            //
            //var nameLbl = self["label_name" + index];
            //nameLbl.text = item[gc.dsConsts.PkOutUserData.name];
            //var lvlLbl = self["label_lv" + index];
            //lvlLbl.text = " Lv." + item[gc.dsConsts.PkOutUserData.lvl];

            var icoCarry = self["img_carry_treasure" + index];
            var grp_name_container = self["grp_name_container" + index];
            if (icoCarry.parent)grp_name_container.removeElement(icoCarry);
            if (item[gc.dsConsts.PkOutUserData.isTreasure]) {
                if (!icoCarry.parent)grp_name_container.addElement(icoCarry);
            }
        }

        _setSearchCoolDown(index) {
            var self = this;
            var lm = self.data['extra']['lm'];
            self.coolDownLabel = self["label_searching" + index];
            self.setCDTime(lm / 1000);
        }

        _reset() {
            var self = this;
            var data = self.data;
            var list = data['list'];
            for (var i = 0; i < 3; ++i) {
                var grp_enemy = self["grp_enemy" + i];
                var grp_searching = self["grp_searching" + i];
                var grp_no = self["grp_no_enemy" + i];

                if (i < list.length) {
                    grp_enemy.visible = true;
                    grp_searching.visible = false;
                    grp_no.visible = false;
                    self._setItem(i, list[i]);
                } else if (i == list.length) {
                    grp_enemy.visible = false;
                    grp_searching.visible = true;
                    grp_no.visible = false;
                    self._setSearchCoolDown(i);
                } else {
                    grp_enemy.visible = false;
                    grp_searching.visible = false;
                    grp_no.visible = true;
                }
            }
        }

        _resetSearchBtn() {
            var self = this;
            var count = gd.userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.spies);
            count = count == undefined ? 0 : count;
            self.label_cost.text = gc.calSpies(count+1);
            self.label_search_count.text = "高级探秘次数:" + count;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.treasure);
            var count_all = gameCfg[4];
            var cd = gameCfg[5];

            if (count != 0 && (count % count_all) == 0) {
                var lastTime = gd.userCtrl.getLastTime(gc.c_prop.userRefreshCountKey.spies);
                var ls = new Date(lastTime);
                var lt = ls.getSecondsBetween(Date.newDate());
                if (lt < cd) {
                    self.grp_cost.visible = false;
                    self.setCDTime2(cd-lt);
                    return;
                }
            }
            self.grp_cost.visible = true;
            self.label_search_refresh.text = "";
        }

        _timeInterval() {
            var self = this;
            if (self.coolDownLabel)self.coolDownLabel.text = "寻找对手中   " + mo.getTimeStr(self.getEnemyListLeftMillisecond);
        }

        _timeFinish() {
            var self = this;
            self.coolDownLabel = undefined;
        }

        _timeInterval2() {
            var self = this;
            if (self.label_search_refresh)self.label_search_refresh.text =  "CD中 "+mo.getTimeStr(self.refreshLeftMillisecond)+"      ";
        }

        _timeFinish2() {
            var self = this;
            self.grp_cost.visible = true;
            self.label_search_refresh.text = "";
        }

        _challenge(index) {
            var self = this;
            g_fight.PVPBattle.create().setData({pkTarget: self.data['list'][index]}).show();
        }

        _search(index) {
            var self = this;
            gd.pkOutCtrl.refreshEnemy(true, function (data) {
                self.data['list'] = data;
                self._reset();
                self._callFightLayer();
            }, self);
        }

        _callFightLayer() {
            var self = this;
            var fl:any = self.data['extra']['fl'];
            fl.resetPvpEnemyViewOnlyDraw(self.data['list']);
        }

        _tap_btn_p_search() {
            var self = this;
            if(self.refreshLeftMillisecond > 0){
                return mo.showMsg("此功能正在CD中");
            }
            if(gd.userCtrl.getDiamond() < parseInt(self.label_cost.text)){
                return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }

            self.grp_searching.visible = true;
            gd.pkOutCtrl.treasureBiz(function (data) {
                self.grp_searching.visible = false;
                self.data['list'] = data;
                self._reset();
                self._resetSearchBtn();
                self._callFightLayer();
            }, self);
        }

        _tap_ico_challenge0() {
            var self = this;
            self._challenge(0);
        }

        _tap_ico_challenge1() {
            var self = this;
            self._challenge(1);
        }

        _tap_ico_challenge2() {
            var self = this;
            self._challenge(2);
        }

        _tap_btn_search0() {
            var self = this;
            self._search(0);
        }

        _tap_btn_search1() {
            var self = this;
            self._search(1);
        }

        _tap_btn_search2() {
            var self = this;
            self._search(2);
        }

        timeTrigger;
        getEnemyListLeftMillisecond = -1;

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
            }
        }

        cleanCDTime() {
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }

        timeSec(type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.getEnemyListLeftMillisecond = endTime1 - now;
            if (self.getEnemyListLeftMillisecond < 0) self.getEnemyListLeftMillisecond = 0;
            self._timeInterval();
        }

        timeOut(type, beginTime, endTime) {
            var self = this;
            self.getEnemyListLeftMillisecond = -1;
            self._timeFinish();
        }

        timeTrigger2;
        refreshLeftMillisecond = -1;

        setCDTime2(second) {
            var self = this;
            if (second > 0) {
                if (self.timeTrigger2) {
                    tm.timer.remove(self.timeTrigger2);
                    self.timeTrigger2 = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.timeTrigger2 = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec2, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut2, self);
                tm.timer.add(timeTrigger);
            }
        }

        cleanCDTime2() {
            var self = this;
            if (self.timeTrigger2) {
                tm.timer.remove(self.timeTrigger2);
                self.timeTrigger2 = null;
            }
        }

        timeSec2(type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.refreshLeftMillisecond = endTime1 - now;
            if (self.refreshLeftMillisecond < 0) self.refreshLeftMillisecond = 0;
            self._timeInterval2();
        }

        timeOut2(type, beginTime, endTime) {
            var self = this;
            self.refreshLeftMillisecond = -1;
            self._timeFinish2();
        }
    }
}