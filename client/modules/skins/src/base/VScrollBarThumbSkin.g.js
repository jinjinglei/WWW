var skins;
(function (skins) {
    var base;
    (function (base) {
        var VScrollBarThumbSkin = (function (_super) {
            __extends(VScrollBarThumbSkin, _super);
            function VScrollBarThumbSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=VScrollBarThumbSkin,p=c.prototype;
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["fillMode", "percentHeight", "horizontalCenter", "source"], ["scale", 100, 0, "scroll_bar_v_1"]);
                return t;
            };
            return VScrollBarThumbSkin;
        })(egret.gui.Skin);
        base.VScrollBarThumbSkin = VScrollBarThumbSkin;
        egret.registerClass(VScrollBarThumbSkin,"skins.base.VScrollBarThumbSkin");
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
