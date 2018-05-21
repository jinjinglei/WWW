/**
 * Created by SmallAiTT on 2015/7/22.
 */
module g_msg{

    export class MsgTipItem extends mo.gui.Comp {
        label_msg:mo.gui.Label;

        msg:string;

        onEnter(){
            super.onEnter();
            this.label_msg.text = this.msg;
        }

    }
}