var skins;
(function (skins) {
    var base;
    (function (base) {
        var HScrollBarThumbSkin = (function (_super) {
            __extends(HScrollBarThumbSkin, _super);
            function HScrollBarThumbSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HScrollBarThumbSkin,p=c.prototype;
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["fillMode", "height", "scale9Grid", "source", "verticalCenter", "percentWidth"], ["scale", 10, egret.gui.getScale9Grid("4,4,2,2"), "scroll_bar_h_1", 0, 100]);
                return t;
            };
            return HScrollBarThumbSkin;
        })(egret.gui.Skin);
        base.HScrollBarThumbSkin = HScrollBarThumbSkin;
        egret.registerClass(HScrollBarThumbSkin,"skins.base.HScrollBarThumbSkin");
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
