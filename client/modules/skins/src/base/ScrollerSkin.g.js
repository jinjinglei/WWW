var skins;
(function (skins) {
    var base;
    (function (base) {
        var ScrollerSkin = (function (_super) {
            __extends(ScrollerSkin, _super);
            function ScrollerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 370]);
                this.elementsContent = [this.horizontalScrollBar_i(), this.verticalScrollBar_i()];
            }
            var d = __define,c=ScrollerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ScrollerSkin._skinParts;
                }
            );
            p.horizontalScrollBar_i = function () {
                var t = new egret.gui.HScrollBar();
                this.horizontalScrollBar = t;
                t.skinName = skins.base.HScrollBarSkin;
                return t;
            };
            p.verticalScrollBar_i = function () {
                var t = new egret.gui.VScrollBar();
                this.verticalScrollBar = t;
                t.skinName = skins.base.VScrollBarSkin;
                return t;
            };
            ScrollerSkin._skinParts = ["horizontalScrollBar", "verticalScrollBar"];
            return ScrollerSkin;
        })(egret.gui.Skin);
        base.ScrollerSkin = ScrollerSkin;
        egret.registerClass(ScrollerSkin,"skins.base.ScrollerSkin");
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
