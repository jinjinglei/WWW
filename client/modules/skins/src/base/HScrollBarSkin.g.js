var skins;
(function (skins) {
    var base;
    (function (base) {
        var HScrollBarSkin = (function (_super) {
            __extends(HScrollBarSkin, _super);
            function HScrollBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [10, 20]);
                this.elementsContent = [this.track_i(), this.thumb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HScrollBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HScrollBarSkin._skinParts;
                }
            );
            p.thumb_i = function () {
                var t = new egret.gui.Button();
                this.thumb = t;
                this.__s(t, ["height", "skinName", "verticalCenter", "width"], [10, skins.base.HScrollBarThumbSkin, 0, 24]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["height", "left", "right", "scale9Grid", "source", "verticalCenter", "percentWidth"], [10, 10, 10, egret.gui.getScale9Grid("2,2,1,1"), "scroll_bar_h_0", 0, 100]);
                return t;
            };
            HScrollBarSkin._skinParts = ["track", "thumb"];
            return HScrollBarSkin;
        })(egret.gui.Skin);
        base.HScrollBarSkin = HScrollBarSkin;
        egret.registerClass(HScrollBarSkin,"skins.base.HScrollBarSkin");
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
