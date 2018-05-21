/**
 * Created by Administrator on 2016/1/5.
 */
module g_lotus{
    export class LotusOpeningDlg extends mo.gui.Dlg {
        label_lotusLvl:mo.gui.Label;
        label_vip:egret.gui.BitmapLabel;
        label_openingDay:mo.gui.Label;
        label_add:mo.gui.Label;
        label_lmt:mo.gui.Label;
        label_cost:mo.gui.Label;
        label_exp:mo.gui.Label;
        label_leftNum:mo.gui.Label;
        efx_opening:g_comp.UIEffect;
        openingEfxPlayer:uiHelper.EfxPlayer;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self._refreshUi();
            self.openingEfxPlayer = uiHelper.EfxPlayer.create(self.efx_opening);
        }

        _refreshUi(){
            var self = this;
            var data:any = gd.demonLotusCtrl.getOpeningData();

            self.label_lotusLvl.text = data.lotusLvl;
            self.label_openingDay.text = data.conDays;
            self.label_add.text = data.addMult/100;
            self.label_lmt.text = data.maxMult/100;
            self.label_cost.text = data.cost;
            self.label_exp.text = data.exp/10000;
            self.label_leftNum.text = [data.vip, data.leftNum, data.openingCount];
        }

        _upOpening(){
            var self = this;
            self._refreshUi();
            self.openingEfxPlayer.play();
        }

        _tap_btn_opening(){
            var self = this;
            gd.demonLotusCtrl.opening(self._upOpening,self);
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id: 38}).show();
        }

    }
}