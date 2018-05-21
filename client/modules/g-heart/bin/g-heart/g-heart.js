/**
 * Created by Administrator on 2016/1/5.
 */
var g_heart;
(function (g_heart) {
    var HeartLayer = (function (_super) {
        __extends(HeartLayer, _super);
        function HeartLayer() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HeartLayer,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_heart = g_heart.HeartCell;
            self._layerOpt.shownWithAction = false;
            //self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
        };
        p.reset = function () {
            var self = this;
            self.refreshList("list_heart");
        };
        p._data_list_heart = function () {
            var self = this;
            var entity = gd.heartStuntCtrl.getData();
            var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
            var hearts = [];
            for (var i = 0; i < 3; ++i) {
                hearts[i] = { id: stateArr[i] || 0 };
            }
            return hearts;
        };
        //_click_list_heart(){
        //
        //}
        //_tap_btn_close() {
        //    mo.moduleMgr.runModule(g_consts.moduleId.fight);
        //}
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 50 }).show();
        };
        return HeartLayer;
    })(mo.gui.Layer);
    g_heart.HeartLayer = HeartLayer;
    egret.registerClass(HeartLayer,"g_heart.HeartLayer");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = HeartLayer;
        moduleCfgItem.sysId = gc.id_c_open.heartStunt1; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.heartStuntCtrl.getInfo(function (data) {
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
})(g_heart || (g_heart = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_heart;
(function (g_heart) {
    var HeartDetail = (function (_super) {
        __extends(HeartDetail, _super);
        function HeartDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HeartDetail,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.gold.toString(), self.dataChanged);
        };
        p.onExit = function () {
            var self = this;
            self._tap_btn_stopAuto();
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.tab_btn.selectedIndex = 0;
            process.nextTick(function () {
                self._tap_tab_btn();
            });
            self.btn_stopAuto.visible = false;
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id); //【等级，层数，当前点数】
            var lv = datas[0];
            var ceng = datas[1];
            var curPoint = datas[2];
            var grp = self["grp_" + id];
            var infos = mo.getJSONWithFileName(gc.cfg_c_heartStunt);
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
            var cengChange = self.oldCeng > 0 && self.oldCeng != ceng;
            for (var key in infos) {
                self["grp_" + infos[key][gc.c_heartStunt_id]].visible = false;
            }
            self.oldCeng = ceng;
            grp.visible = true;
            var indexAry = self.getIndexAry(ceng, false);
            var maxShowNum = 0;
            var begY = 0;
            for (var i = 2; i >= 0; --i) {
                var c = indexAry[i];
                if (c) {
                    self["ico_ceng" + i].source = "txt_hz_" + c;
                    self["ico_ceng" + i].visible = true;
                    self["ico_ceng" + i].y = begY;
                    begY += 23;
                    maxShowNum = i;
                }
                else {
                    self["ico_ceng" + i].visible = false;
                }
            }
            self["ico_ceng" + 3].y = begY;
            begY += 23;
            self.grp_ceng.y = 200 - begY / 2;
            self.ico_title.source = resHelper.getHeartTitlePath(id);
            self.ico_heart_bg.source = "heart_bg_" + id;
            self.showPoint(id, true);
            self.onHeartLvChanged();
            if (cengChange) {
                self._tap_btn_stopAuto();
            }
        };
        p.onHeartLvChanged = function () {
            var self = this;
            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id); //【等级，层数，当前点数】
            var lv = datas[0];
            var ceng = datas[1];
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
            var heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id + lv);
            var nextHeartLvInfo = mo.getJSONWithFileName(gc.cfg_c_heartStuntLvl)[id + lv + 1];
            if (nextHeartLvInfo) {
                var addProps = nextHeartLvInfo[gc.c_heartStuntLvl_addProperty];
                self.grp_canAdd.visible = true;
                self.label_maxLevel.visible = false;
                self.label_addProp.text = gc.c_prop.heroProp[addProps[0]];
                self.label_addValue.text = "+" + addProps[1];
                self.ico_itemCost0.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.genuineQi);
                self.label_itemNumCost0.text = heartLvInfo[gc.c_heartStuntLvl_cosGenqi];
                self.label_itemNumCost1.text = heartLvInfo[gc.c_heartStuntLvl_cosGold];
            }
            else {
                self.grp_canAdd.visible = false;
                self.label_maxLevel.visible = true;
                self._tap_btn_stopAuto();
            }
            self.ico_item0.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.genuineQi);
            self.label_itemNum0.text = gd.demonLotusCtrl.calGenuineQi()[0];
            self.label_itemNum1.text = gd.userCtrl.getGold();
            var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, info[gc.c_heartStunt_skillId]);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.heartStuntCfg);
            if (ceng > gameInfo[1]) {
                skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, info[gc.c_heartStunt_skillId2]);
            }
            var indexStrs = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
            var indexAry = self.getIndexAry(ceng, true);
            var indexStr = "";
            for (var i = 0; i < indexAry.length; ++i) {
                if (i == 1) {
                    indexStr += indexStrs[9];
                }
                if (i == indexAry.length - 1 && indexAry[i] == 0)
                    continue;
                if (indexAry[i] == 1 && i == 0 && indexAry.length == 2)
                    continue;
                indexStr += indexStrs[indexAry[i] - 1];
            }
            var damageScale = skillInfo[gc.t_skill_damage] / 10000;
            var buffID = skillInfo[gc.t_skill_buffID];
            if (ceng <= 0) {
                ceng = 1;
            }
            var cd = skillInfo[gc.t_skill_cd] * 10 / 1000;
            if (damageScale != 0) {
                var perLvScale = skillInfo[gc.t_skill_damageScaleA] / 10000;
                damageScale += (ceng - 1) * perLvScale;
                self.label_skillDesc.text = mo.STR.format(skillInfo[gc.t_skill_desc], Math.abs(Math.round(-damageScale * 100)), cd);
            }
            else if (buffID != 0) {
                var buffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_buff, buffID);
                var perLvValue = buffInfo[gc.t_buff_linerScale];
                var value = (buffInfo[gc.t_buff_baseValue1] + perLvValue * (ceng - 1)) / 10000;
                value = Math.abs(value);
                self.label_skillDesc.text = mo.STR.format(skillInfo[gc.t_skill_desc], Math.round(value * 100), cd);
            }
            else {
                self.label_skillDesc.text = mo.STR.format(skillInfo[gc.t_skill_desc]);
            }
            self.ico_skill.source = resHelper.getSkillIconPath(skillInfo[gc.t_skill_id]);
            self.label_skillName.text = ["附加技能", indexStr];
            self.label_propL.text = self.getPropStr(id, lv, true);
            self.label_propR.text = self.getPropStr(id, lv, false);
        };
        p.getIndexAry = function (num, isRight) {
            var idx = [];
            while (num) {
                var c = num % 10;
                if (isRight) {
                    idx.unshift(c);
                }
                else {
                    if (idx.length == 0) {
                        idx.push(c);
                    }
                    else {
                        idx.push(10);
                        if (c > 1) {
                            idx.push(c);
                        }
                    }
                }
                num = num / 10 >> 0;
            }
            return idx;
        };
        p.getPropStr = function (id, lv, isLeft) {
            var heartLvInfo;
            var propObj = {};
            for (var i = 1; i <= lv; ++i) {
                heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id + i);
                var addProps = heartLvInfo[gc.c_heartStuntLvl_addProperty];
                var propKey = addProps[0];
                propObj[propKey] = (propObj[propKey] || 0) + addProps[1];
            }
            var str = "";
            for (var i = 33; i <= 40; ++i) {
                if (isLeft && i % 2 == 0)
                    continue;
                if (!isLeft && i % 2 == 1)
                    continue;
                str += "[ubb color=#fff000]" + gc.c_prop.heroProp[i] + ": " + "[/ubb]";
                str += "[ubb color=#00ff00]+" + (propObj[i] || 0) + "[/ubb]";
                str += "\n";
            }
            return str;
        };
        p.showPoint = function (id, checkAll) {
            var self = this;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id); //【等级，层数，当前点数】
            //var lv = datas[0];
            //var ceng = datas[1];
            var curPoint = datas[2];
            var grp = self["grp_" + id];
            if (!checkAll) {
                if (curPoint > 0)
                    grp.getElementAt(curPoint - 1).visible = true;
            }
            else {
                for (var i = 0; i < curPoint; ++i) {
                    grp.getElementAt(i).visible = true;
                }
                for (var i = curPoint; i < grp.numElements; ++i) {
                    grp.getElementAt(i).visible = false;
                }
            }
            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id); //【等级，层数，当前点数】
            var lv = datas[0];
            var heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id + lv);
            if (curPoint >= 10) {
                self.effect_point.visible = false;
            }
            else {
                self.effect_point.x = grp.x + grp.getElementAt(curPoint).x + 11;
                self.effect_point.y = grp.y + grp.getElementAt(curPoint).y + 11;
            }
        };
        p._tap_btn_add = function () {
            var self = this;
            var index = self.data.index;
            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id); //【等级，层数，当前点数】
            var lv = datas[0];
            var ceng = datas[1];
            var curPoint = datas[2];
            var heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id + lv);
            var isGoldEn = gd.userCtrl.getGold() >= heartLvInfo[gc.c_heartStuntLvl_cosGold];
            var isGenEn = gd.demonLotusCtrl.calGenuineQi()[0] >= heartLvInfo[gc.c_heartStuntLvl_cosGenqi];
            if (isGoldEn && isGenEn) {
                gd.heartStuntCtrl.stuMenCulMethods(index, function (data) {
                    var isSuccess = data[0];
                    if (isSuccess) {
                        self._winEfxPlayer.play();
                    }
                    else {
                        self._failEfxPlayer.play();
                    }
                    self.dataChanged();
                }, self);
            }
            else {
                if (!isGoldEn) {
                    gd.userCtrl.noGolds(function () { }, this);
                }
                else if (!isGenEn) {
                    mo.showMsg(gc.id_c_msgCode.noGas);
                }
                self._tap_btn_stopAuto();
            }
        };
        p._tap_btn_autoAdd = function () {
            var self = this;
            self._autoTimeId = setInterval(function () {
                self._tap_btn_add();
            }, 1000);
            self.btn_stopAuto.visible = true;
            self.btn_add.visible = false;
            self.btn_autoAdd.visible = false;
            self.label_auto.visible = false;
        };
        p._tap_btn_stopAuto = function () {
            var self = this;
            clearInterval(self._autoTimeId);
            self.btn_stopAuto.visible = false;
            self.btn_add.visible = true;
            self.btn_autoAdd.visible = true;
            self.label_auto.visible = true;
        };
        p._tap_tab_btn = function () {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            self.grp_prop.visible = selectedIndex == 0;
            self.grp_add.visible = self.effect_point.visible = selectedIndex == 1;
            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id); //【等级，层数，当前点数】
            var lv = datas[0];
            var heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id + lv);
            if (datas[2] >= 10) {
                self.effect_point.visible = false;
            }
        };
        p._tap_btn_close = function () {
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 52 }).show();
            self._tap_btn_stopAuto();
        };
        return HeartDetail;
    })(mo.gui.Layer);
    g_heart.HeartDetail = HeartDetail;
    egret.registerClass(HeartDetail,"g_heart.HeartDetail");
})(g_heart || (g_heart = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_heart;
(function (g_heart) {
    var HeartCell = (function (_super) {
        __extends(HeartCell, _super);
        function HeartCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HeartCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var index = self.itemIndex;
            var id = self.data.id;
            if (id) {
                self.grp_can.visible = false;
                self.grp_cannot.visible = false;
                self.grp_heart.visible = true;
                var datas = gd.heartStuntCtrl.getHeartStuntArr(id); //【等级，层数，当前点数】
                var ceng = datas[1];
                var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
                self.ico_heart.source = resHelper.getHeartIconPath(id);
                self.ico_title.source = resHelper.getHeartNamePath(id);
                self.label_ceng.text = ceng + "";
                self.label_desc.text = info[gc.c_heartStunt_desc];
                var entity = gd.heartStuntCtrl.getData();
                var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
                var infos = mo.getJSONWithFileName(gc.cfg_c_heartStunt);
                //self.btn_change.visible = stateArr.length<Object.keys(infos).length;
                self.btn_change.visible = true;
            }
            else {
                self.ico_heart.source = "ico_xinfahuitai";
                self.grp_heart.visible = false;
                var indexStrs = ["一", "二", "三", "四", "五", "六", "七", "八", "九"];
                var con = gd.heartStuntCtrl.getOpenCon(index); //【开启等级，vip提前开启等级】
                if (gd.userCtrl.getLvl() >= con[0] || gd.userCtrl.getVip() >= con[1]) {
                    self.grp_can.visible = true;
                    self.grp_cannot.visible = false;
                    self.label_title_can.text = indexStrs[index];
                }
                else {
                    self.grp_can.visible = false;
                    self.grp_cannot.visible = true;
                    self.label_title_cannot.text = indexStrs[index];
                    self.label_cannot.text = con;
                }
                self.btn_change.visible = false;
            }
        };
        p._tap_rect_touch = function () {
            var self = this;
            var index = self.itemIndex;
            var id = self.data.id;
            if (id) {
                g_heart.HeartDetail.create().setData({ id: id, index: index }).show().onClose(function () {
                    self.delegate.reset();
                });
            }
            else {
                var con = gd.heartStuntCtrl.getOpenCon(index); //【开启等级，vip提前开启等级】
                if (gd.userCtrl.getLvl() >= con[0] || gd.userCtrl.getVip() >= con[1]) {
                    g_heart.HeartSelect.create().setData({ index: index }).show().onClose(function () {
                        self.delegate.reset();
                    });
                }
                else {
                    mo.showMsg(gc.id_c_msgCode.formulaNoOpen, con[0], con[1]);
                }
            }
        };
        p._tap_btn_change = function () {
            var self = this;
            g_heart.HeartChangeSelect.create().setData({ index: self.itemIndex }).show().onClose(function () {
                self.delegate.reset();
            });
            ;
        };
        return HeartCell;
    })(mo.gui.ItemRenderer);
    g_heart.HeartCell = HeartCell;
    egret.registerClass(HeartCell,"g_heart.HeartCell");
})(g_heart || (g_heart = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_heart;
(function (g_heart) {
    var HeartSelect = (function (_super) {
        __extends(HeartSelect, _super);
        function HeartSelect() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HeartSelect,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_select = g_heart.HeartSelectCell;
            self._layerOpt.shownWithAction = false;
            //self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.index = self.data.index;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.refreshList("list_select");
        };
        p._data_list_select = function () {
            var entity = gd.heartStuntCtrl.getData();
            var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
            var infos = mo.getJSONWithFileName(gc.cfg_c_heartStunt);
            var hearts = [];
            for (var key in infos) {
                var id = infos[key][gc.c_heartStunt_id];
                if (stateArr.indexOf(id) == -1)
                    hearts.push({ id: id });
            }
            return hearts;
        };
        p._tap_btn_close = function () {
        };
        p._tap_btn_help = function () {
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.heartStuntCfg);
            g_base.BaseShowTip.create().setData({ id: 51, param1: gameInfo[2] }).show();
        };
        return HeartSelect;
    })(mo.gui.Layer);
    g_heart.HeartSelect = HeartSelect;
    egret.registerClass(HeartSelect,"g_heart.HeartSelect");
})(g_heart || (g_heart = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_heart;
(function (g_heart) {
    var HeartSelectCell = (function (_super) {
        __extends(HeartSelectCell, _super);
        function HeartSelectCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HeartSelectCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var id = self.data.id;
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
            self.ico_heart.source = resHelper.getHeartIconPath(id);
            self.ico_name.source = resHelper.getHeartNamePath(id);
            self.label_desc.text = info[gc.c_heartStunt_desc];
            self.label_skillDesc.text = info[gc.c_heartStunt_skillDesc];
        };
        p._tap_btn_learn = function () {
            var self = this;
            var id = self.data.id;
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
            mo.showMsg(gc.id_c_msgCode.ifLearnFormula, info[gc.c_heartStunt_name], function () {
                gd.heartStuntCtrl.choMenCulMethods(self.delegate.index, id, function () {
                    self.delegate.close();
                }, self);
            });
        };
        return HeartSelectCell;
    })(mo.gui.ItemRenderer);
    g_heart.HeartSelectCell = HeartSelectCell;
    egret.registerClass(HeartSelectCell,"g_heart.HeartSelectCell");
})(g_heart || (g_heart = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_heart;
(function (g_heart) {
    var HeartChangeSelect = (function (_super) {
        __extends(HeartChangeSelect, _super);
        function HeartChangeSelect() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HeartChangeSelect,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_select = g_heart.HeartChangeSelectCell;
            self._layerOpt.shownWithAction = false;
            //self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.index = self.data.index;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.refreshList("list_select");
            var entity = gd.heartStuntCtrl.getData();
            var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
            var id = stateArr[self.index];
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id); //【等级，层数，当前点数】
            self.label_point.text = [datas[1], datas[2], 10];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.heartStuntCfg);
            self.label_cost.text = gameInfo[2];
        };
        p._data_list_select = function () {
            var self = this;
            var entity = gd.heartStuntCtrl.getData();
            var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
            var infos = mo.getJSONWithFileName(gc.cfg_c_heartStunt);
            var hearts = [];
            for (var key in infos) {
                var id = infos[key][gc.c_heartStunt_id];
                if (stateArr[self.index] != id)
                    hearts.push({ id: id });
            }
            return hearts;
        };
        p._tap_btn_close = function () {
        };
        p._tap_btn_help = function () {
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.heartStuntCfg);
            g_base.BaseShowTip.create().setData({ id: 51, param1: gameInfo[2] }).show();
        };
        return HeartChangeSelect;
    })(mo.gui.Layer);
    g_heart.HeartChangeSelect = HeartChangeSelect;
    egret.registerClass(HeartChangeSelect,"g_heart.HeartChangeSelect");
})(g_heart || (g_heart = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_heart;
(function (g_heart) {
    var HeartChangeSelectCell = (function (_super) {
        __extends(HeartChangeSelectCell, _super);
        function HeartChangeSelectCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HeartChangeSelectCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var id = self.data.id;
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
            self.ico_heart.source = resHelper.getHeartIconPath(id);
            self.ico_name.source = resHelper.getHeartNamePath(id);
            self.label_desc.text = info[gc.c_heartStunt_desc];
            self.label_skillDesc.text = info[gc.c_heartStunt_skillDesc];
        };
        p._tap_btn_select = function () {
            var self = this;
            var id = self.data.id;
            gd.heartStuntCtrl.chaMenCulMethods(self.delegate.index, id, function () {
                self.delegate.close();
            }, self);
        };
        return HeartChangeSelectCell;
    })(mo.gui.ItemRenderer);
    g_heart.HeartChangeSelectCell = HeartChangeSelectCell;
    egret.registerClass(HeartChangeSelectCell,"g_heart.HeartChangeSelectCell");
})(g_heart || (g_heart = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_heart;
(function (g_heart) {
    var HeartScene = (function (_super) {
        __extends(HeartScene, _super);
        function HeartScene() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HeartScene,p=c.prototype;
        p.show = function () {
            var self = this;
            _super.prototype.show.call(this);
            g_heart.HeartLayer.create().setData(self.moduleParam.data).show();
        };
        return HeartScene;
    })(mo.gui.UIScene);
    g_heart.HeartScene = HeartScene;
    egret.registerClass(HeartScene,"g_heart.HeartScene");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = HeartScene;
        moduleCfgItem.sysId = gc.id_c_open.heartStunt1; // 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.heartStuntCtrl.getInfo(function (data) {
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
})(g_heart || (g_heart = {}));

