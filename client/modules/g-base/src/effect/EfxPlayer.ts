/**
 * Created by lihex on 10/22/15.
 */
module uiHelper {
    export class EfxPlayer extends mo.Class {

        efx:g_comp.UIEffect;
        _endCb;
        _endCtx;
        //@override
        init(parent, efxId?, pos?){
            var self = this, clazz = self.__class;
            super.init();
            var efx;
            if(parent instanceof g_comp.UIEffect){
                efx = self.efx = parent;
                efx.visible = false;
                efx.addEventListener(egret.Event.COMPLETE, self._onPlayEnd, self);
            }else{
                efx = self.efx = g_comp.UIEffect.create();
                efx.effectId = efxId;
                efx.x = pos.x;
                efx.y = pos.y;
                parent.addElement(efx);
                efx.addEventListener(egret.Event.COMPLETE, self._onPlayEnd2, self);
                efx.play(1);
            }
        }

        _efxs:Array<any>;
        initByGroup(efxs:Array<any>){
            super.init();
            var self = this;
            self._efxs = efxs || [];
            for(var i = 0, li = self._efxs.length; i < li; i++){
                var efx = self._efxs[i];
                efx.visible = false;
                efx.addEventListener(egret.Event.COMPLETE, self._onPlayEnd, self);
            }
        }

        setEndCallback(endCb?, endCtx?){
            var self = this;
            self._endCb = endCb;
            self._endCtx = endCtx;
        }

        _onPlayEnd(event:egret.Event) {
            var self = this;
            var efx = event.target;
            efx.gotoAndStop(1);
            efx.visible = false;
            if(self._endCb) self._endCb.call(self._endCtx);
        }

        _onPlayEnd2(){
            var self = this;
            (<any>self.efx.parent).removeElement(self.efx);
            if(self._endCb) self._endCb.call(self._endCtx);
        }

        play(){
            var self = this;
            if(self._efxs){
                for(var i = 0, li = self._efxs.length; i < li; i++){
                    var efx = self._efxs[i];
                    efx.visible = true;
                    efx.gotoAndPlay(1, 1);
                }
            }else{
                self.efx.visible = true;
                self.efx.gotoAndPlay(1, 1);
            }
        }

        static play(container:any, efxId:number, pos, endCb?, endCtx?){
            var player:EfxPlayer = new this();
            player.init(container, efxId, pos);
            player.setEndCallback(endCb, endCtx);
            return player;
        }

        static createPlayer(efxNode:g_comp.UIEffect, endCb?, endCtx?){
            var armCtrl:EfxPlayer = new this();
            armCtrl.init(efxNode, null, null);
            armCtrl.setEndCallback(endCb, endCtx);
            return armCtrl;
        }

        static createPlayGroup(efxs:Array<g_comp.UIEffect>){
            var player:EfxPlayer = new this();
            player.initByGroup(efxs);
            return player;
        }
    }
}