/**
 * Created by SmallAiTT on 2015/7/22.
 */
module g_msg{

    export class MsgTips extends mo.gui.MsgDlg {
        _tipsArr:Array<string>;
        _tipsRunning:boolean;
        _interval:number;
        _intervalId:number;

        grp_container:egret.gui.Group;

        //@override
        _initProp() {
            super._initProp();
            var self = this;
            self._tipsArr = [];
            self._tipsRunning = false;
            self._interval = 600;
            self._penetrable = true;
            self.toPauseGuide = false;//不需要暂停引导
        }

        isNeedToClose (){
            var self = this;
            if(self.grp_container.numElements == 0 && self._tipsArr.length == 0 && self._tipsRunning){
                self._tipsRunning = false;
                tm.clearInterval(self._intervalId);
                self.close();
            }
        }

        _setTips(msgData:any, msgArgs:any[]){
            this._tipsArr = msgArgs;
        }
        setMsgInfo(msgData:any, msgArgs:any[]){
            super.setMsgInfo(msgData, msgArgs);
            var self = this;
            self._setTips(msgData, msgArgs);
            if (!self._tipsRunning) {
                self._tipsRunning = true;
                self._runActionQueue();
                tm.setInterval4Tick(self._runActionQueue, self, self._interval);
            }
        }

        onExit(){
            super.onExit();
            var self = this;
            self._tipsArr = [];
            self.removeChildren();

            if (self._tipsRunning) {
                self._tipsRunning = false;
                tm.clearInterval(self._intervalId);
                self.close();
            }
        }

        _runActionQueue() {
            var self = this, group_container = self.grp_container;
            if (self._tipsArr.length > 0) {
                var tipNode = self.createTip(self._tipsArr.shift());
                var stage = mo.getStage();
                var w = stage.stageWidth, h = stage.stageHeight;
                group_container.addElement(tipNode);
                tipNode.horizontalCenter = 0;
                tipNode.y = h/2;

                // 播放动画

                var duration = 2.0,
                    fadeIn = mo.fadeIn(duration * 0.2),
                    fade = mo.fadeOut(duration * 0.2),
                    delay = mo.delayTime(duration * 0.8),
                    act = mo.sequence(
                        mo.moveBy(duration, mo.p(0, -360)),
                        mo.callFunc(function (sender) {
                            mo.gui.helper.rm(sender);
                            self.isNeedToClose()
                        }, self)
                    );

                var actMgr = egret.action.Manager.getInstance();
                actMgr.addAction(tipNode, fadeIn);
                actMgr.addAction(tipNode, act);
                actMgr.addAction(tipNode, mo.sequence(delay, fade));
            }
        }

        createTip(text):egret.gui.UIComponent {
            var self = this;
            var item = new MsgTipItem();
            //item.label_msg.text = text;
            item.msg = text;
            return item;
        }

    }
}