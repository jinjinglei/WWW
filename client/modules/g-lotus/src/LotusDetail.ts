/**
 * Created by Administrator on 2016/1/5.
 */
module g_lotus {
    export class LotusDetail extends mo.gui.Layer {
        label_zhou;
        label_yue;
        label_expTotal;
        label_expPerHour;
        label_lv;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
            self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.advanceLvl.toString(), self.dataChanged);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        _timerId;
        onEnter(){
            super.onEnter();
            var self = this;
            self._timerId = setInterval(function(){
                var entity = gd.demonLotusCtrl.getData();//gc.dsConsts.DemonLotusEntity
                var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
                var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
                var advLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
                var demonLotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, advLv);
                self.label_expTotal.text = utils.formatByWan(gd.demonLotusCtrl.calNowGet() >> 0, 1) + "/" + utils.formatByWan(lvInfo[gc.c_lvl_storeLimit] + demonLotusInfo[gc.c_demonLotus_expcAccLimit], 1);
            }, 1000);
        }
        onExit(){
            super.onExit();
            var self = this;
            clearInterval(self._timerId);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var entity = gd.demonLotusCtrl.getData();//gc.dsConsts.DemonLotusEntity
            var isZhou = false;
            var isYue = false;
            var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
            var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
            var zhouBuffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 3);
            var yueBuffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff, 4);
            var advLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
            var demonLotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, advLv);

            self.label_zhou.textColor = isZhou ? 0x26E80E : 0x949393;
            self.label_yue.textColor = isYue ? 0x26E80E : 0x949393;
            self.label_zhou.text = mo.STR.format("产量提升%s%", Math.floor(zhouBuffInfo[gc.t_otherBuff_addHurt] / 100)) + (isZhou ? "（已激活）" : "（未激活）");
            self.label_yue.text = mo.STR.format("产量提升%s%", Math.floor(yueBuffInfo[gc.t_otherBuff_addHurt] / 100)) + (isYue ? "（已激活）" : "（未激活）");
            self.label_lv.text = lv.toString();
            self.label_expTotal.text = utils.formatByWan(gd.demonLotusCtrl.calNowGet() >> 0, 1) + "/" + utils.formatByWan(lvInfo[gc.c_lvl_storeLimit] + demonLotusInfo[gc.c_demonLotus_expcAccLimit], 1);
            self.label_expPerHour.text = utils.formatByWan(Math.floor((lvInfo[gc.c_lvl_expOutput] + demonLotusInfo[gc.c_demonLotus_expOutput]) * 60), 0) + "/分钟";
        }

        _tap_btn_get() {
            var self = this;
            var entity = gd.demonLotusCtrl.getData();//gc.dsConsts.DemonLotusEntity
            var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
            var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
            gd.demonLotusCtrl.getRevenue(function () {
                var advLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
                var demonLotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, advLv);
                self.label_expTotal.text = 0 + "/" + utils.formatByWan(lvInfo[gc.c_lvl_storeLimit] + demonLotusInfo[gc.c_demonLotus_expcAccLimit], 1);
            }, self);
        }

        _tap_btn_opening() {
            LotusOpeningDlg.create().show();
        }

        _tap_btn_back() {
            //var self = this;
            //self.close();
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }

        _tap_btn_help() {
            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.expBox);
            g_base.BaseShowTip.create().setData({id: 31, param1: openInfo[gc.c_open_lvlRequired]}).show();
        }
    }
}