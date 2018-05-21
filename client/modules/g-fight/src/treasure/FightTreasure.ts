/**
 * Created by admin on 16/4/14.
 */
module g_fight {
    export class FightTreasure extends mo.gui.Dlg {

        tab_btn;
        _comps:Array<any>;
        container:egret.gui.Group;

        _initProp() {
            var self = this;
            super._initProp();
            //self._layerOpt.shownWithAction = false;
            self._comps = [];
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var index = self.data['index'];
            self.tab_btn.selectedIndex = index<0?0:index;
            self._comps.push(PVPSelfInfo.create().setData({tray: self.container,extra:self.data}).show());
            self._comps.push(FightTreasureOutside.create().setData({tray: self.container,extra:self.data}).show());
            self._comps.push(FightTreasureList.create().setData({tray: self.container,extra:self.data}).show());
            self._comps.push(FightTreasureChat.create().setData({tray: self.container,extra:self.data}).show());

            process.nextTick(function () {
                self._tap_tab_btn();
            });
        }

        onExit(){
            super.onExit();
            var self = this;
        }

        _tap_tab_btn() {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            var curComp = self._comps[selectedIndex];
            for (var i = 0, li = self._comps.length; i < li; i++) {
                self._comps[i].visible = selectedIndex == i;
            }
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }

        _tap_btn_help(){
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            //
            //var lotusInfo = mo.getJSONWithFileName(gc.cfg_c_demonLotus)[0];
            if (selectedIndex == 0) {
                g_base.BaseShowTip.create().setData({id:208}).show();
            } else if (selectedIndex == 1) {
                g_base.BaseShowTip.create().setData({id:209}).show();
            } else if (selectedIndex == 2) {
                g_base.BaseShowTip.create().setData({id:210}).show();
            } else if (selectedIndex == 3) {
                g_base.BaseShowTip.create().setData({id:211}).show();
            }
        }
    }
}