/**
 * Created by lihex on 9/17/15.
 */
module g_comp {
    /**
     *
     * @author
     *
     */
    export class IcoLabel extends egret.gui.UIAsset{
        _textSource:string;
        icoText:egret.gui.UIAsset;

        public set text(txt){
            var self = this;
            self._textSource = txt;
            self.source = self._textSource;
        }

        public get text(){
            return this._textSource;
        }
    }
}
