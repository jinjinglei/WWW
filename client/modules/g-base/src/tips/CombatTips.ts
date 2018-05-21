/**
 * Created by SmallAiTT on 2015/7/22.
 */
module g_msg{

    export interface ICombatChange{
        oldCombat:number;
        newCombat:number;
    }

    export class CombatTips extends mo.gui.Dlg {
        _trayName = 'top';

        label_combat:mo.gui.Label;
        label_diff:mo.gui.Label;
        grp_container:egret.gui.Group;

        data:ICombatChange;
        _intervalId:number;

        //@override
        _initProp() {
            super._initProp();
            var self = this;
            self._penetrable = true;
            self._layerOpt.shownWithAction = false;
        }


        setMsgInfo(msgData:any, msgArgs:any[]){

        }

        _childrenCreated(){
            super._childrenCreated();
        }

        _counter:number = 0;
        _tickNum:number = 0;
        _diff:number = 0;
        _updateNumber(dt){
            var self = this, grp_container = self.grp_container;
            self._counter += self._tickNum;
            var flag = self._tickNum > 0? (self._counter >= self.data.newCombat) : (self._counter <= self.data.newCombat)
            if(flag){
                self._counter = self.data.newCombat;
                tm.clearInterval(self._intervalId);
                var delay = mo.delayTime(1.0),
                    act = mo.sequence(
                        delay,
                        mo.callFunc(function (sender) {
                            self.close();
                        }, self)
                    );
                mo.ACT.run(grp_container, act);
            }
            self.label_combat.text = self._counter;
        }

        dataChanged(){
            super.dataChanged();
            var self = this, grp_container = self.grp_container;
            // 播放动画
            self._counter = self.data.oldCombat;
            self._diff = self.data.newCombat - self.data.oldCombat;
            self._tickNum = Math.max(1, Math.abs(Math.floor(self._diff/20))) * (self._diff > 0? 1 : -1);
            self.label_combat.text = self.data.oldCombat;
            self.label_diff.text = [self._diff > 0? "+" : "", self._diff];
            var color = self._diff > 0? 0x00FF00 : 0xFF0000;
            if(self.label_diff.textColor != color){
                self.label_diff.textColor = color;
            }
            var delay = mo.delayTime(1),
                act = mo.sequence(
                    delay,
                    mo.callFunc(function (sender) {
                        self.label_diff.visible = false;
                        self._intervalId = tm.setInterval4Tick(self._updateNumber, self, 20);
                    }, self)
                );
            mo.ACT.run(grp_container, act);
        }
    }
}