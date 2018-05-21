module g_comp {
    export class EfxAsset extends mo.gui.Comp{
        public _effectId: number;
        public autoPlay: boolean;
        public _source: string;
        public performanceControl: boolean = true;
        efx:g_comp.UIEffect;
        ico:egret.gui.UIAsset;

        needPlay:boolean = true;
        //@override
        _initProp(){
            super._initProp();
            mo.gui.helper.setCompSkinName(this);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.autoPlay = (self.autoPlay != null)? self.autoPlay : true;
            if(self.performanceControl){
                var hp = self.efx.getQueryString("high");
                if(hp && hp=="true"){
                    self.needPlay = true;
                }else if(hp && hp=="false"){
                    self.needPlay = false;
                }
            }
            self.efx.autoPlay = self.autoPlay;
            self.efx.effectId = self._effectId;
            if(self._effectId && self.needPlay){
                self.efx.startLoadByKey(self._effectId, function(){
                    if(self.efx) self.efx.width = self.efx.height = 0;
                });
            }
            if(self._source) self.ico.source = self._source;
        }

        public set source(src){
            var self = this;
            if(self._source != src) self._source = src;
            if(self.ico) self.ico.source = src;
        }

        playEffect(play:boolean){
            var self = this;
            if(self.efx  && self.needPlay){
                self.efx.autoPlay = play;
                uiHelper.playUIEffect(self.efx, play);
            }
        }

        _onEfxIdChanged(id){
            var self = this;
            if(self.efx && self.needPlay){
                self.playEffect(false);
                if(self._effectId  && self.needPlay){
                    self.efx.autoPlay = self.autoPlay;
                    self.efx.startLoadByKey(self._effectId, function(){
                        if(self.efx) self.efx.width = self.efx.height = 0;
                        self.playEffect(true);
                    });
                }
            }
        }

        public set effectId(id){
            var self = this;
            if(self._effectId != id){
                self._effectId = id;
                self._onEfxIdChanged(id);
            }
        }

        _onClick:Function;
        _onClickCtx:any;
        _onClickData:any;
        onClick(listener:Function, ctx?:any, data?:any){
            this._onClick = listener;
            this._onClickCtx = ctx;
            this._onClickData = data || {};
        }
        _tap_ico(event:egret.TouchEvent){
            var self = this;
            if(self._onClick) {
                self._onClick.call(self._onClickCtx, self, event.target, self._onClickData);
            }
        }

        static createEfxAsset(source, effectId, autoPlay){
            var efxAsset = new g_comp.EfxAsset();
            efxAsset.source = source;
            efxAsset.autoPlay = autoPlay;
            efxAsset.effectId = effectId;
            return efxAsset;
        }
	}
}
