/**
 * Created by Administrator on 2016/1/5.
 */
module g_lotus{
    export class LotusLvUp extends mo.gui.Layer {
        label_curLv;
        label_curAdd;
        label_curTotal;
        label_nextLv;
        label_nextAdd;
        label_nextTotal;
        label_itemName;
        label_itemNum;
        label_cannotLvUp;
        ico_item;
        grp_next;
        grp_lvUp;
        effect_win;

        _winEfxPlayer:uiHelper.EfxPlayer;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var entity = gd.demonLotusCtrl.getData();//gc.dsConsts.DemonLotusEntity
            var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];

            var curLv = lv;
            var nextLv = curLv+1;
            var curLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, curLv);
            var nextLvInfo = mo.getJSONWithFileName(gc.cfg_c_lvl)[nextLv];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.demonLotusCfg);
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0]);
            var maxLv = gameInfo[1];

            self.label_curLv.text = curLv.toString();
            self.label_curAdd.text = utils.formatByWan(Math.floor(curLvInfo[gc.c_lvl_expOutput] * 60), 0) + "/分钟";
            self.label_curTotal.text = utils.formatByWan(curLvInfo[gc.c_lvl_storeLimit], 1);
            if(curLv>=maxLv){
                //满级
                self.label_cannotLvUp.visible = true;
                self.label_cannotLvUp.text = mo.STR.format("已升至最高级");
                self.grp_next.visible = false;
                self.grp_lvUp.visible = false;
                self.label_cannotLvUp.visible = true;
            }else{
                self.grp_next.visible = true;
                self.label_nextLv.text = nextLv.toString();
                self.label_nextAdd.text = utils.formatByWan(Math.floor(nextLvInfo[gc.c_lvl_expOutput] * 60), 0) + "/分钟";
                self.label_nextTotal.text = utils.formatByWan(nextLvInfo[gc.c_lvl_storeLimit], 1);
                self.label_itemName.text = itemInfo[gc.t_item_name];
                self.ico_item.source = resHelper.getItemIconPath(gameInfo[0]);
                if (gd.userCtrl.getLvl() < nextLvInfo[gc.c_lvl_needLvl]) {
                    self.label_cannotLvUp.visible = true;
                    self.grp_lvUp.visible = false;
                    self.label_cannotLvUp.text = mo.STR.format("%s级可继续升级", nextLvInfo[gc.c_lvl_needLvl]);
                } else {
                    self.label_cannotLvUp.visible = false;
                    self.grp_lvUp.visible = true;
                    self.label_itemNum.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + nextLvInfo[gc.c_lvl_upLotusNum];
                    self.label_cannotLvUp.visible = false;
                }
            }
        }

        _tap_btn_lvUp(){
            var self = this;
            gd.demonLotusCtrl.upLotus(function(data){
                self._winEfxPlayer.play();
                self.dataChanged();
            },self)
        }
    }
}