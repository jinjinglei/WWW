/**
 * Created by lihex on 12/29/15.
 */

module g_guide{
    export function hasDlg(){
        //没有dlg遮挡
        var tray:egret.gui.Group = mo.gui.uiScene.getTray('dlg');
        if(tray.numElements > 0 && (<any>(tray.getChildAt(0))).__className != "EnterCopyEffect") return true;
        return false;
    }
}