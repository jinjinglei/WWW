module g_base {
	/**
	 *
	 * @author 
	 *
	 */
    export class ActionPlayer extends egret.MovieClip {
        private jsonData: egret.MovieClipData;
        private texture:egret.Texture;
        avatarSet: string;
        loop:boolean = false;
        
        initMc(){
            var self = this;
            if(self.jsonData && self.texture){
                var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(self.jsonData, self.texture);
                self.movieClipData = mcDataFactory.generateMovieClipData();
                self.frameRate = 10;
                self.playAction();
            }
        }

        playAction(){
            if(this.loop){
                this.play(-1);
            }else{
                this.gotoAndPlay(1, 1);
            }
        }
        
        //avatarSet: 形如r101_0a 的路径字符串
        loadRes(avatarSet, loop, cb=null, ctx=null){
            if(this.avatarSet == avatarSet){
                return;
            }
            this.avatarSet = avatarSet;
            var self=this;
            var jsonUrl = avatarSet;
            var imgUrl= "resource/dynamic2/"+avatarSet+".png";
            
            self.jsonData = mo.getData('mc', jsonUrl);
            self.texture = null;
            RES.getResByUrl(imgUrl, function(texture){
                if(self.avatarSet != avatarSet)
                    return;
                self.texture = texture;
                self.loop = loop;
                self.initMc();
                if(self.jsonData && self.texture){
                    if(cb)
                        cb.call(ctx);
                    }
                },self);
        }
    }
}
