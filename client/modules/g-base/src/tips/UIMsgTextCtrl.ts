/**
 * Created by SmallAiTT on 2015/5/4.
 */
module g_msg{

    export class UIMsgTextCtrl extends UIMsgCtrl {
        createNode(text?){
            var self = this;
            var node;
            if(typeof text == "string"){
                var hasUbb = text.indexOf("ubb") >= 0;
                if(hasUbb){
                    var tipNode = self.createMsgTips(text);
                    // 播放动画: 向上漂浮风格
                    var duration = 4.0,
                        fadeIn = mo.fadeIn(duration * 0.2),
                        fade = mo.fadeOut(duration * 0.2),
                        delay = mo.delayTime(duration * 0.8),
                        act = mo.sequence(
                            mo.moveBy(duration, mo.p(0, -360)),
                            mo.callFunc(function (sender) {
                                sender.parent.removeChild(sender);
                                self.checkEnd();
                            }, self)
                        );

                    var actMgr = egret.action.Manager.getInstance();
                    actMgr.addAction(tipNode, fadeIn);
                    actMgr.addAction(tipNode, act);
                    actMgr.addAction(tipNode, mo.sequence(delay, fade));
                }else{
                    node = self.createLabel(text);
                    node.scaleX = 0.5;
                    node.scaleY = 0.5;

                    // 播放动画: 向下弹出再漂浮风格
                    var spawn = mo.spawn(
                        mo.fadeOut(0.5),
                        mo.moveBy(0.5, mo.p(0, -100))
                    );
                    var seq = mo.sequence(
                        mo.scaleTo(0.2, 1).setEase(mo.Ease.backOut),
                        mo.delayTime(1),
                        spawn,
                        mo.callFunc(function (sender) {
                            sender.parent.removeChild(sender);
                            self.checkEnd();
                        }, self)
                    );
                    mo.runAction(node, seq);
                }
            }
        }

        createLabel(text) {
            var stage = mo.getStage();
            var self = this;
            var center = new egret.Point(mo.getStage().stageWidth/2, mo.getStage().stageHeight/2);
            var container = new egret.gui.Group();
            container.x = center.x;
            container.y = center.y;
            container.width = 0;
            container.height = 0;
            container.horizontalCenter = 0;
            container.verticalCenter = 0;

            stage.addChild(container);

            var tipsGroup = new egret.gui.Group();
            var layout = new egret.gui.VerticalLayout();//纵向布局
            layout.verticalAlign = egret.VerticalAlign.MIDDLE;
            layout.horizontalAlign = egret.HorizontalAlign.CENTER;
            tipsGroup.layout = layout;
            tipsGroup.horizontalCenter = 0;
            tipsGroup.verticalCenter = 100;

            var textNode = new egret.gui.Label();
            textNode.text = text;
            textNode.size = 30;
            textNode.textColor = 0x00e91b;
            textNode.stroke = 1;
            textNode.strokeColor = 0x383838;
            tipsGroup.addElement(textNode);
            container.addElement(tipsGroup);

            return container;
        }

        createMsgTips(text){
            var stage = mo.getStage();
            var self = this;
            var center = new egret.Point(mo.getStage().stageWidth/2, mo.getStage().stageHeight/2);
            var container = new egret.gui.Group();
            container.x = center.x;
            container.y = center.y;
            container.width = 0;
            container.height = 0;
            container.horizontalCenter = 0;
            container.verticalCenter = 0;

            stage.addChild(container);

            var tipsGroup = new egret.gui.Group();
            var layout = new egret.gui.VerticalLayout();//纵向布局
            layout.verticalAlign = egret.VerticalAlign.MIDDLE;
            layout.horizontalAlign = egret.HorizontalAlign.CENTER;
            tipsGroup.layout = layout;
            tipsGroup.horizontalCenter = 0;
            tipsGroup.verticalCenter = 0;

            var textNode = new mo.gui.Label();
            textNode.size = 30;
            textNode.stroke = 2;
            textNode.text = text;
            tipsGroup.addElement(textNode);
            container.addElement(tipsGroup);

            return container;
        }
    }
}