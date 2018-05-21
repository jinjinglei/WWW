/**
 * Created by Administrator on 2016/1/5.
 */
module g_lotus{
    export class LotusLayer extends mo.gui.Layer {
        tab_btn;
        container:egret.gui.Group;
        grp_lotus;
        _comps:Array<any>;
        red0;
        red3;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._comps = [];
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self.tab_btn.selectedIndex = 0;

            self._comps.push(LotusDetail.create().setData({tray: self.container}).show());
            self._comps.push(LotusLvUp.create().setData({tray: self.container}).show());
            self._comps.push(LotusAdvUp.create().setData({tray: self.container}).show());
            self._comps.push(LotusTrea.create().setData({tray: self.container}).show());

            process.nextTick(function () {
                self._tap_tab_btn();
            });
            self._checkRed();
        }

        _checkRed(){
            var self = this;
            self.red0.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.demonLotus_1);
            self.red3.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.demonLotus_2);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            //var data = self.data;//[是否周卡,是否月卡,gc.dsConsts.DemonLotusEntity]
            //var isZhou = data[0];
            //var isYue = data[1];
            //var entity = data[2];
            //var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
            //var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
            //var zhouBuffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 3);
            //var yueBuffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 4);

            self._tap_tab_btn();
        }

        _tap_tab_btn() {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            var curComp = self._comps[selectedIndex];
            for (var i = 0, li = self._comps.length; i < li; i++) {
                self._comps[i].visible = selectedIndex == i;
            }
            if (selectedIndex < 3) {
                self.grp_lotus.visible = true;
            } else {
                self.grp_lotus.visible = false;
            }
            if (curComp) curComp.dataChanged();
        }

        _tap_btn_back(){
            //var self = this;
            //self.close();
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }

        _tap_btn_help(){
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            var lotusInfo = mo.getJSONWithFileName(gc.cfg_c_demonLotus)[0];
            if (selectedIndex == 0) {
                var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.expBox);
                g_base.BaseShowTip.create().setData({id: 31, param1: openInfo[gc.c_open_lvlRequired]}).show();
            } else if (selectedIndex == 1) {
                g_base.BaseShowTip.create().setData({id: 47, param1: lotusInfo[gc.c_demonLotus_advNeedLvl]}).show();
            } else if (selectedIndex == 2) {
                g_base.BaseShowTip.create().setData({id: 48}).show();
            } else if (selectedIndex == 3) {
                g_base.BaseShowTip.create().setData({id: 49}).show();
            }
        }
    }
}