/**
 * Created by SmallAiTT on 2015/5/4.
 */
module g_msg{

    export class UIMsgCtrl extends mo.DataController {
        _tipsArr:Array<string>;
        _tipsRunning:boolean;
        _interval:number;

        //@override
        _initProp() {
            super._initProp();
            var self = this;
            self._tipsArr = [];
            self._tipsRunning = false;
            self._interval = 600;
        }

        setTips(arg) {
            var self = this;
            if (arg instanceof Array) {
                self._tipsArr = self._tipsArr.concat(arg);
            }
            else {
                self._tipsArr.push(arg);
            }
            self.begin();
        }

        _invId;
        begin() {
            var self = this;

            if (!self._tipsRunning) {
                self._tipsRunning = true;
                self._runActionQueue();
                self._invId = tm.setInterval4Tick(self._runActionQueue, self, self._interval);
            }
        }

        end(){
            var self = this;
            self._tipsArr = [];

            if (self._tipsRunning) {
                self._tipsRunning = false;
                tm.clearInterval(self._invId);
                self._invId = null;
            }
        }

        checkEnd(){
            var self = this;
            if (self._tipsArr.length == 0) {
                self.end();
            }
        }

        _runActionQueue() {
            var self = this, tip;
            if (self._tipsArr.length > 0) {
                tip = self._tipsArr.shift();
                self.createNode(tip);
            }
        }

        createNode(text?) {
            var self = this;
            self.checkEnd();
        }

        static show(...args:any[]) {
            var _instance = this.getInstance();
            _instance.setTips.apply(_instance, args);
        }

        static showAtOnce = true;
        static _msgQueue = [];
        static push(arg){
            var self = this;
            if(self.showAtOnce){
                self.show(arg);
            }else{
                if (arg instanceof Array) {
                    self._msgQueue = self._msgQueue.concat(arg);
                }
                else {
                    self._msgQueue.push(arg);
                }
            }
        }

        static pop(){
            var self = this;
            self.show(self._msgQueue);
            self._msgQueue = [];
        }
    }
}