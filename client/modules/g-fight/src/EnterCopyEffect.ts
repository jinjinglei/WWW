/**
 * Created by Administrator on 2015/10/19.
 */
module g_fight{
    export class EnterCopyEffect extends g_base.BaseFightDlg{

        label_copy:egret.gui.Label;
        grp_copy:egret.gui.Group;
        _initProp() {
            super._initProp();
            var self = this;
            self._penetrable = true;
            self._layerOpt.shownWithAction = false;
        }

        dataChanged(){
            super.dataChanged();

            var self = this;
            var copyId = self.data.copyId;
            var monsterId = self.data.monsterId;
            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            var monsterInfos = mo.getJSONWithFileName(gc.cfg_t_monster);
            var monsterInfo = monsterInfos[monsterId];
            var oY:number = self.grp_copy.y;

            if(monsterInfo!=null && monsterInfo[gc.t_monster_bossLevel]!=0){
                self.label_copy.text = monsterInfo[gc.t_monster_name];
            }else{
                self.label_copy.text = copyInfo[gc.t_copy_name];
            }

            self.grp_copy.scaleX = self.grp_copy.scaleY = 1.2;
            self.grp_copy.alpha = 0;
            self.grp_copy.x = -480*0.2/2;
            self.grp_copy.y = oY-139*0.2/2;

            egret.Tween.get(self.grp_copy)
                .to({scaleX:1, scaleY:1, alpha:1, x:0, y:oY}, 500)
                .wait(900)
                .to({scaleX:1.2, scaleY:1.2, alpha:0, x:-480*0.2/2, y:oY-139*0.2/2}, 500).call(
                function(){
                    self.close();
                });
        }
    }
}