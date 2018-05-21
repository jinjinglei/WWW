var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_5_0_Skin = (function (_super) {
            __extends(Bar_5_0_Skin, _super);
            function Bar_5_0_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.track_i(), this.thumb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_5_0_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_5_0_Skin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("25,10,210,7"), "bar_bg_5", 0]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [8, 16, 15, "bar_5_0", 7]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "bottom", "left", "right", "source", "top"], [0, 8, 16, 15, "bar_5_0", 7]);
                return t;
            };
            Bar_5_0_Skin._skinParts = ["track", "thumb"];
            return Bar_5_0_Skin;
        })(egret.gui.Skin);
        comp.Bar_5_0_Skin = Bar_5_0_Skin;
        egret.registerClass(Bar_5_0_Skin,"skins.comp.Bar_5_0_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
