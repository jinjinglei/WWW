/**
 * Created by lihex on 9/19/15.
 */


module g_base{
    export class BaseTopMsg extends mo.gui.TopLayer{

        label_msg:egret.gui.Label;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

        }

        onEnter(){
            super.onEnter();
            var self = this;
            mo.runAction(self.label_msg, mo.moveBy(5, mo.p(-self.width, 0)));
        }
    }
}