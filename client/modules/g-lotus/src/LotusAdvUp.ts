/**
 * Created by Administrator on 2016/1/5.
 */
module g_lotus {
    export class LotusAdvUp extends mo.gui.Layer {
        label_curLv;
        label_curAdd;
        label_curTotal;
        label_curExpAdd;
        label_nextLv;
        label_nextAdd;
        label_nextTotal;
        label_nextExpAdd;
        label_itemName;
        label_itemNum;
        label_cannotLvUp;
        ico_item;
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
            self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
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

            var curLv = entity[gc.dsConsts.DemonLotusEntity.lvl] || 0;
            var curAdvLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
            var nextAdvLv = curAdvLv + 1;

            var curLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, curAdvLv);
            var nextLvInfo = mo.getJSONWithFileName(gc.cfg_c_demonLotus)[nextAdvLv];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0]);
            var isMax = nextLvInfo == null;

            self.label_curLv.text = curAdvLv.toString();
            self.label_curAdd.text = Math.floor(curLvInfo[gc.c_demonLotus_genqiAccLimit]) + "";//真气加成
            self.label_curTotal.text = curLvInfo[gc.c_demonLotus_expcAccLimit] + "";//经验上限加成
            self.label_curExpAdd.text = utils.formatByWan(Math.floor(curLvInfo[gc.c_demonLotus_expOutput] * 60), 0) + "/分钟";//经验加成
            if (isMax) {
                //满级
                self.label_cannotLvUp.visible = true;
                self.label_cannotLvUp.text = mo.STR.format("已升至最高阶");
                self.grp_next.visible = false;
                self.grp_lvUp.visible = false;
                self.label_cannotLvUp.visible = true;
            } else {
                self.grp_next.visible = true;
                self.ico_item.source = resHelper.getItemIconPath(gameInfo[0]);
                self.label_nextLv.text = nextAdvLv.toString();
                self.label_nextAdd.text = Math.floor(nextLvInfo[gc.c_demonLotus_genqiAccLimit]);
                self.label_nextTotal.text = nextLvInfo[gc.c_demonLotus_expcAccLimit];
                self.label_nextExpAdd.text = utils.formatByWan(Math.floor(nextLvInfo[gc.c_demonLotus_expOutput] * 60), 0) + "/分钟";
                if (curLv < curLvInfo[gc.c_demonLotus_advNeedLvl]) {
                    self.label_cannotLvUp.visible = true;
                    self.grp_lvUp.visible = false;
                    self.label_cannotLvUp.text = mo.STR.format("妖莲升至%s级可进阶", curLvInfo[gc.c_demonLotus_advNeedLvl]);
                } else {
                    self.label_cannotLvUp.visible = false;
                    self.grp_lvUp.visible = true;
                    self.label_itemName.text = itemInfo[gc.t_item_name];
                    self.label_itemNum.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + curLvInfo[gc.c_demonLotus_advCosLotus];
                }
            }
        }


        _tap_btn_lvUp() {
            var self = this;
            gd.demonLotusCtrl.lotusAdvance(function (data) {
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