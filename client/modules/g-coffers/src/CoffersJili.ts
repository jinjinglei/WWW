/**
 * Created by Administrator on 2016/2/25.
 */
module g_coffers {
    export class CoffersJili extends mo.gui.Dlg {
        label_addProp;
        bar_value;
        label_value;
        label_curLv;
        label_nextLv;
        label_curAdd;
        label_nextAdd;
        grp_nextLv;
        label_maxLv;
        label_noCount;
        grp_jili;
        label_leftCount;
        label_costName;
        label_cost;
        ico_item;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.dataChanged();

            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.bag.toString(), self.dataChanged);
        }
        dataChanged() {
            super.dataChanged();

            var self = this;
            var baseValue = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.buffBase) / 100;
            var curLv = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.buffLvl);
            var value = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.buffExpc);
            var nextLv = curLv + 1;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers2);
            var exps = gameInfo[3].split(",");
            var adds = gameInfo[4].split(",");
            var isMax = curLv >= exps.length - 1;

            self.label_addProp.text = baseValue + "%";
            self.label_curLv.text = curLv + "";
            self.label_curAdd.text = adds[curLv] / 100 + "%";
            self.label_value.text = mo.STR.format("本次激励增加：+%s激励值", gameInfo[2]);
            if (!isMax) {
                self.grp_nextLv.visible = true;
                self.label_maxLv.visible = false;
                self.label_value.visible = true;
                self.label_nextLv.text = nextLv;
                self.label_nextAdd.text = adds[nextLv] / 100 + "%";
                var count = gd.coffersCtrl.getAddBuffNum();
                var vip = gd.userCtrl.getVip();
                var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, vip);
                var totalCount = vipInfo[gc.c_vip_coffersBuff];
                if (totalCount != -1 && count >= totalCount) {
                    self.grp_jili.visible = false;
                    self.label_noCount.visible = true;
                } else {
                    self.grp_jili.visible = true;
                    self.label_noCount.visible = false;
                    var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0]);
                    self.label_costName.text = itemInfo[gc.t_item_name];
                    self.label_cost.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + gameInfo[1];
                    self.ico_item.source = resHelper.getItemIconPath(gameInfo[0]);
                    if (totalCount != -1) {
                        self.label_leftCount.text = mo.STR.format("Vip%s今日剩余次数：%s/%s", vip, totalCount - count, totalCount);
                    } else {
                        self.label_leftCount.text = mo.STR.format("Vip%s每日激励不限次数", vip);
                    }
                }
                self.bar_value.maximum = exps[nextLv];
            } else {
                self.grp_nextLv.visible = false;
                self.label_maxLv.visible = true;
                self.label_noCount.visible = false;
                self.grp_jili.visible = false;
                self.label_value.visible = false;
                self.bar_value.maximum = exps[curLv];
            }
            self.bar_value.value = value;
        }

        _tap_btn_jili() {
            var self = this;

            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers2);
            var itemId = gameInfo[0];
            var curCount = gd.userCtrl.getItemNum(itemId);
            var needCount = gameInfo[1];
            if (curCount >= needCount) {
                gd.coffersCtrl.addBuff(function () {
                    self.dataChanged();
                }, self);
            } else {
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({
                        itemId: itemId,
                        count: needCount - curCount
                    }).show().onClose(function () {
                        self.dataChanged();
                    });
                } else {
                    g_base.GainWay.create().setData({itemId: itemId}).show();
                }
            }
        }

        _tap_btn_help() {
            var self = this;
            g_base.BaseShowTip.create().setData({id: 43}).show();
        }
    }
}