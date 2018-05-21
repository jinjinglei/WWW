/**
 * Created by SmallAiTT on 2015/8/31.
 */
module g_guide{

    export class Guide2 extends mo.GUIDE.GuideLayer{

        actionData;
        grp_circle;
        grp_arrow;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.actionData = {
                action : function(name,evtFun?){
                    if(name == "arrowleft" || name == 0){return mo.sequence(mo.moveBy(0.8333333333333334,mo.p(13,0)),mo.moveBy(0.4166666666666667,mo.p(4,0)),mo.moveBy(0.4166666666666667,mo.p(-4,0)),mo.moveBy(0.8333333333333334,mo.p(-13,0)))}
                    if(name == "circle" || name == 1){return mo.sequence(mo.scaleTo(0.8333333333333334,0.95,0.95),mo.scaleTo(0.2916666666666667,0.9,0.9),mo.scaleTo(0.3333333333333333,0.95,0.95),mo.scaleTo(0.8333333333333334,1,1))}
                    if(name == "arrowdown" || name == 2){return mo.sequence(mo.moveBy(0.8333333333333334,mo.p(0,-8)),mo.moveBy(0.4166666666666667,mo.p(0,-3)),mo.moveBy(0.4166666666666667,mo.p(0,3)),mo.moveBy(0.8333333333333334,mo.p(0,8)))}
                    if(name == "arrowup" || name == 3){return mo.sequence(mo.moveBy(0.8333333333333334,mo.p(0,-8)),mo.moveBy(0.4166666666666667,mo.p(0,-3)),mo.moveBy(0.4166666666666667,mo.p(0,3)),mo.moveBy(0.8333333333333334,mo.p(0,8)))}
                    if(name == "arrowright" || name == 4){return mo.sequence(mo.moveBy(0.25,mo.p(5,0)),mo.moveBy(1,mo.p(12,0)),mo.moveBy(0.9583333333333334,mo.p(-12,0)),mo.moveBy(0.2916666666666667,mo.p(-5,0)))}
                },
                initNode : function(name,node){
                    if(name == "arrowleft" || name == 0){
                        if(node.width > 0 && node.height > 0){
                            node.anchorOffsetX = node.width/2;node.anchorOffsetY = node.height/2;
                        }else{
                            if(node instanceof egret.gui.UIAsset){
                                var texture = RES.getRes(node.source);
                                if(texture){
                                    node.anchorOffsetX = texture.textureWidth/2;
                                    node.anchorOffsetY = texture.textureHeight/2;
                                }
                            }
                        }
                    }
                    if(name == "circle" || name == 1){ if(node.width > 0 && node.height > 0){node.anchorOffsetX = node.width/2;node.anchorOffsetY = node.height/2;}else{if(node instanceof egret.gui.UIAsset){var texture = RES.getRes(node.source);if(texture){node.anchorOffsetX = texture.textureWidth/2;node.anchorOffsetY = texture.textureHeight/2;}}}}
                    if(name == "arrowdown" || name == 2){ if(node.width > 0 && node.height > 0){node.anchorOffsetX = node.width/2;node.anchorOffsetY = node.height/2;}else{if(node instanceof egret.gui.UIAsset){var texture = RES.getRes(node.source);if(texture){node.anchorOffsetX = texture.textureWidth/2;node.anchorOffsetY = texture.textureHeight/2;}}}node.rotation = 90.0456517834395;}
                    if(name == "arrowup" || name == 3){ if(node.width > 0 && node.height > 0){node.anchorOffsetX = node.width/2;node.anchorOffsetY = node.height/2;}else{if(node instanceof egret.gui.UIAsset){var texture = RES.getRes(node.source);if(texture){node.anchorOffsetX = texture.textureWidth/2;node.anchorOffsetY = texture.textureHeight/2;}}}node.rotation = -90.0456517834395;}
                    if(name == "arrowright" || name == 4){ if(node.width > 0 && node.height > 0){node.anchorOffsetX = node.width/2;node.anchorOffsetY = node.height/2;}else{if(node instanceof egret.gui.UIAsset){var texture = RES.getRes(node.source);if(texture){node.anchorOffsetX = texture.textureWidth/2;node.anchorOffsetY = texture.textureHeight/2;}}}node.rotation = -180.091303566879;}
                },
                loop : function(name){
                    if(name == "arrowleft" || name == 0){return true}
                    if(name == "circle" || name == 1){return true}
                    if(name == "arrowdown" || name == 2){return true}
                    if(name == "arrowup" || name == 3){return true}
                    if(name == "arrowright" || name == 4){return true}
                }
            }
        }

        onEnter(){
            var self = this;
            super.onEnter();
            var actionData = self.actionData;
            actionData.initNode("arrowdown", self.grp_arrow);
            var actRotate1 = mo.repeatForever(actionData.action("arrowdown"));
            mo.ACT.run(self.grp_arrow, actRotate1);

            actionData.initNode("circle", self.grp_circle);
            var actRotate1 = mo.repeatForever(actionData.action("circle"));
            mo.ACT.run(self.grp_circle, actRotate1);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }
    }
    mo.GUIDE.mgr.registerUI(3, Guide2);
}