/**
 * Created by lihex on 11/4/15.
 */
module g_fight {

    /**
     *
     * @author
     *
     */
    export class FightProfit extends mo.gui.Layer {
        img_detail:egret.gui.UIAsset;
        //label_profit_gold:mo.gui.Label;
        //label_profit_exp:mo.gui.Label;

        _initProp() {
            super._initProp();
            var self = this;
            //this.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_COPY_CHANGE, self._updateProfit);
        }
        /*
        _updateProfit(){
            var self = this;
            var profit = gd.copyCtrl.getNormalCopyProfit();
            self.label_profit_gold.text = utils.formatByWan(profit[0]);
            self.label_profit_exp.text = utils.formatByWan(profit[7]);
        }*/
        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            //self._updateProfit();
        }

        setVisible(value:boolean):void{
            var self = this;
            self.img_detail.visible = value;
        }

        _tap_img_detail(){
            var self = this;
            var cfg_c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var lvl = gd.userCtrl.getLvl();
            var openLvl = cfg_c_open[gc.id_c_open.expBox][gc.c_open_lvlRequired];
            if(lvl < openLvl) {
                FightProfitDlg.create().show();
            }else{
                gd.demonLotusCtrl.getInfo(function(data) {
                    FightProfitDlg.create().show();
                }, self);
            }
        }
    }
}