/**
 * Created by Administrator on 2015/9/9.
 */
module g_comp{

    export class UIEffect extends g_base.Effect{
        _effectId:number;
        _playTimes:number;
        autoPlay:boolean;
        needPlay:boolean;
        performanceControl:boolean;

        getQueryString(name){
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);

            if(egret.Capabilities.os == "Android" ||egret.Capabilities.os == "Unknown" ){
                return "false";
            }else{
                return "true";
            }
        }

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.touchEnabled = self.touchChildren = false;
            self._playTimes = -1;
            self.autoPlay = false;
            self.needPlay = true;
            self.performanceControl = true;
        }

        public set effectId(id){
            var self = this;
            self._effectId = id;
        }

        public get effectId(){
            return this._effectId;
        }

        public getEffect(id, extname?:string): string{
            var resName = id;
            if(extname){
                resName = mo.STR.format("resource/dynamic2/%s.%s", id, extname) ;
            }
            return resName;
        }

        startLoadByKey(id, cb?, cbtx?){
            var self = this;
            self.loadRes(self.getEffect(id), self.getEffect(id,"png"), cb, cbtx);
            if(self.autoPlay){
                self.play(self._playTimes);
            }
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            if(self.performanceControl){
                var hp = self.getQueryString("high");
                if(hp && hp=="true"){
                    self.needPlay = true;
                }else if(hp && hp=="false"){
                    self.needPlay = false;
                }
            }
            if(self._effectId && self.needPlay){
                self.startLoadByKey(self._effectId);
            }
        }

        loadRes(jsonUrl, imgUrl, cb=null, ctx=null){
            var self=this;
            self.jsonData = mo.getData("mc", jsonUrl);
            self.texture = null;
            RES.getResByUrl(imgUrl, function(texture){
                self.texture = texture;
                self.initMc();
                if(self.jsonData && self.texture){
                    if(cb)
                        cb.call(ctx);
                }
            },self);
        }
    }
}