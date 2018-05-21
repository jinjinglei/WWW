/**
 * Created by SmallAiTT on 2015/7/22.
 */
module g_msg{

    export class MsgTip extends MsgTips {
        //@override
        _initProp(){
            super._initProp();
            mo.gui.helper.setSkinName(this, MsgTips.__className);
            this._penetrable = true;
        }
        _setTips(msgData:any, msgArgs:any[]){
            this._tipsArr = [mo.STR.format.apply(mo.STR, [msgData.text].concat(msgArgs))];
        }
    }
}