/**
 * Created by Administrator on 2016/1/5.
 */
module g_lotus {
    export class LotusTrea extends mo.gui.Layer {
        label_curLv;
        label_nextLv;
        ico_item0;
        label_itemName0;
        label_itemNum0;
        ico_item1;
        label_itemName1;
        label_itemNum1;
        label_curProp;
        label_nextProp;
        label_cannotLvUp;
        grp_next;
        grp_lvUp;
        effect_win;
        effect_fail;

        _winEfxPlayer:uiHelper.EfxPlayer;
        _failEfxPlayer:uiHelper.EfxPlayer;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.advanceLvl.toString(), self.dataChanged);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var entity = gd.demonLotusCtrl.getData();//gc.dsConsts.DemonLotusEntity

            var curAvdLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
            var curTreaLv = entity[gc.dsConsts.DemonLotusEntity.treasureLvl] || 0;
            var nextTreaLv = curTreaLv + 1;
            var curLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, curTreaLv);
            var nextLvInfo = mo.getJSONWithFileName(gc.cfg_c_demonLotus)[nextTreaLv];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0]);
            var isMax = nextLvInfo == null;

            self.label_curLv.text = "Lv." + curTreaLv.toString();
            self.label_curProp.text = self.getPropStr(curLvInfo[gc.c_demonLotus_treaPropertys]);
            if (isMax) {
                //满级
                self.label_cannotLvUp.visible = true;
                self.label_cannotLvUp.text = mo.STR.format("已升至最高阶");
                self.grp_next.visible = false;
                self.grp_lvUp.visible = false;
                self.label_cannotLvUp.visible = true;
            } else {
                self.grp_next.visible = true;
                var zhenQiId = gc.c_prop.spItemIdKey.genuineQi;
                self.ico_item0.source = resHelper.getItemIconPath(gameInfo[0]);
                self.ico_item1.source = resHelper.getItemIconPath(zhenQiId);
                self.label_nextLv.text = "Lv." + nextTreaLv.toString();
                self.label_nextProp.text = self.getPropStr(nextLvInfo[gc.c_demonLotus_treaPropertys]);
                if (gd.userCtrl.getLvl() < curLvInfo[gc.c_demonLotus_treaNeedUserLvl]) {
                    self.label_cannotLvUp.visible = true;
                    self.grp_lvUp.visible = false;
                    self.label_cannotLvUp.text = mo.STR.format("人物升至%s级可培养莲宝", curLvInfo[gc.c_demonLotus_treaNeedUserLvl]);
                } else {
                    self.label_cannotLvUp.visible = false;
                    self.grp_lvUp.visible = true;
                    self.label_itemName0.text = itemInfo[gc.t_item_name];
                    self.label_itemNum0.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + curLvInfo[gc.c_demonLotus_treaCosLotus];
                    self.label_itemName1.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, zhenQiId)[gc.t_item_name];
                    var data = gd.demonLotusCtrl.calGenuineQi();
                    self.label_itemNum1.text = +data[0] + "/" + curLvInfo[gc.c_demonLotus_treaCosGenqi];
                }
            }
        }

        getPropStr(props) {
            var str = "";
            for (var i = 0; i < props.length; ++i) {
                var s = mo.STR.format("%s %s", gc.c_prop.heroProp[props[i][0]], props[i][1]);
                s += "[/br]";
                str += s;
            }
            return str;
        }

        _tap_btn_trea() {
            var self = this;
            gd.demonLotusCtrl.treasureTrain(function (data) {
                if (data[0]) {
                    self._winEfxPlayer.play();
                } else {
                    self._failEfxPlayer.play();
                }
                self.dataChanged();
            }, self);
        }
    }
}