/**
 * Created by SmallAiTT on 2015/7/31.
 */
module g_base{
    export class BaseJuHua extends mo.gui.TopLayer{

        grp_juHua:egret.gui.Group;
        _initProp(){
            super._initProp();
            // 转菊花不影响下面的layer的激活状态
            this._layerOpt.activateUnderDisabled = true;
        }

        onEnter(){
            super.onEnter();
            var grp_juHua = this.grp_juHua;
            mo.ACT.stop(grp_juHua);
            mo.ACT.run(grp_juHua, mo.repeatForever(
                mo.rotateBy(2, 360)
            ));
        }
        onExit(){
            super.onExit();
            var grp_juHua = this.grp_juHua;
            mo.ACT.stop(grp_juHua);
        }
    }
}