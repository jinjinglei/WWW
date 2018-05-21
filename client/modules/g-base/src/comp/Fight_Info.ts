/**
 * Created by Joe on 2015/12/2.
 */
module g_comp {
    export class Fight_Info extends mo.gui.Comp {
        img_hp: egret.gui.UIAsset;
        img_mp: egret.gui.UIAsset;

        _initProp(){
            var self = this;
            super._initProp();
        }

        onEnter(){
            super.onEnter();
        }

        _childrenCreated(){
            super._childrenCreated();
        }
        
        updateHp(now:number,all:number){
            var self = this;
            if(all==0){now=all=1;}
            var precent = self.img_hp.height - Math.floor((1-now/all)*self.img_hp.height);
            self.img_hp.mask = new egret.Rectangle(0,self.img_hp.height-precent,self.img_hp.width,precent);
        }
        
        updateMp(now:number,all:number){
            var self = this;
            if(all==0){now=all=1;}
            var precent = self.img_mp.height - Math.floor((1-now/all)*self.img_mp.height);
            self.img_mp.mask = new egret.Rectangle(0,self.img_mp.height-precent,self.img_mp.width,precent);
        }

    }
}
