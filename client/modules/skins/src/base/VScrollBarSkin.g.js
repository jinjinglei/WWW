var skins;
(function (skins) {
    var base;
    (function (base) {
        var VScrollBarSkin = (function (_super) {
            __extends(VScrollBarSkin, _super);
            function VScrollBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [10, 10]);
                this.elementsContent = [this.track_i(), this.thumb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=VScrollBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VScrollBarSkin._skinParts;
                }
            );
            p.thumb_i = function () {
                var t = new egret.gui.Button();
                this.thumb = t;
                this.__s(t, ["height", "horizontalCenter", "skinName"], [20, 0, skins.base.VScrollBarThumbSkin]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["bottom", "percentHeight", "horizontalCenter", "scale9Grid", "source", "top"], [10, 100, 0, egret.gui.getScale9Grid("2,2,1,1"), "scroll_bar_v_0", 10]);
                return t;
            };
            VScrollBarSkin._skinParts = ["track", "thumb"];
            return VScrollBarSkin;
        })(egret.gui.Skin);
        base.VScrollBarSkin = VScrollBarSkin;
        egret.registerClass(VScrollBarSkin,"skins.base.VScrollBarSkin");
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
