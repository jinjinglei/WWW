/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{
    export class BaseFightDlg extends mo.gui.Dlg{

        show():BaseFightDlg {
            var self = this;
            super.show();
            self.visible = self._isFightScene();
            return self;
        }

        _onShowReady(){
            var self = this;
            super._onShowReady();
            //self.visible = self._isFightScene();
            //var scene = mo.runningScene;
            //scene.setDlgFightTrayVisible(self._isFightScene());
        }

        _isFightScene(){
            var self = this;
            var name = mo.moduleMgr.curModule.name;
            return name=="FightScene";
        }

    }
}