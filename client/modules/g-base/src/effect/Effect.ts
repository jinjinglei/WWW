/**
 * Created by Administrator on 2015/9/9.
 */
module g_base{
    export class Effect extends mo.gui.UIAsset{
        mc:egret.MovieClip;
        mcName;
        jsonData;
        texture:egret.Texture;
        frame;
        playTimes;

        initMc(){
            var self = this;
            if(!self.mc){
                self.mc = new egret.MovieClip();
                self.mc.addEventListener(egret.Event.LOOP_COMPLETE, self.onMcEvent, self);
                self.mc.addEventListener(egret.Event.COMPLETE, self.onMcEvent, self);
                //self.mc.addEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                self.source = self.mc;
            }
            if(self.jsonData && self.texture){
                var mcDataFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(self.jsonData, self.texture);
                self.mc.movieClipData = mcDataFactory.generateMovieClipData(self.mcName);
                //if(self.mc._getFrameLabelByName(self.frame)){
                if(!isNaN(self.playTimes))
                    self.gotoAndPlay(self.frame, self.playTimes);
                //}else{
                //    self.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
                //}
            }
        }

        //setMcData(mcData:egret.MovieClipData){
        //    var self = this;
        //    self.jsonData = mcData.spriteSheet;
        //    self.texture = mcData.textureData;
        //    self.initMc();
        //}

        loadRes(jsonUrl, imgUrl, cb=null, ctx=null){
            var self=this;

            self.jsonData = null;
            self.texture = null;
            RES.getResByUrl(jsonUrl, function(jsonData){
                self.jsonData = jsonData;
                self.initMc();
                if(self.jsonData && self.texture){
                    if(cb)
                        cb.call(ctx);
                }
            },self);
            RES.getResByUrl(imgUrl, function(texture){
                self.texture = texture;
                self.initMc();
                if(self.jsonData && self.texture){
                    if(cb)
                        cb.call(ctx);
                }
            },self);
        }
        gotoAndPlay( frame:any, playTimes:number):void{
            this.frame = frame;
            this.playTimes = playTimes;
            if(this.mc && this.mc.movieClipData){
                this.mc.gotoAndPlay(frame, playTimes);
            }
        }
        gotoAndStop(frame:any):void{
            if(this.mc) this.mc.gotoAndStop(frame);
        }
        nextFrame( ):void{
            if(this.mc) this.mc.nextFrame();
        }
        play(playTimes:number):void{
            if(!this.mc || !this.mc.movieClipData){
                this.frame = 1;
                this.playTimes = playTimes;
            }
            if(this.mc && this.mc.movieClipData){
                this.mc.play(playTimes);
            }
        }
        prevFrame():void{
            if(this.mc) this.mc.prevFrame();
        }
        stop():void{
            if(this.mc) this.mc.stop();
        }

        onMcEvent(e:egret.Event):void{
            this.dispatchEvent(new egret.Event(e.type));
        }
        //onEnterFrame(e:egret.Event):void{
        //    if(this.mc.currentLabel!=this.frame){
        //        //if(this.playTimes==-1){
        //        //    this.gotoAndPlay(this.frame, this.playTimes);
        //        //}
        //        if(this.mc.currentFrame>1){
        //            this.prevFrame();
        //        }
        //        this.stop();
        //        this.dispatchEvent(new egret.Event(egret.Event.COMPLETE));
        //    }
        //}
    }
}