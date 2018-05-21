var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_0_0_Skin = (function (_super) {
            __extends(Bar_0_0_Skin, _super);
            function Bar_0_0_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_0_0_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_0_0_Skin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [0, 0, 0, 0, 20, 20]);
                t.elementsContent = [this.labelDisplay_i()];
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter", "percentWidth"], [0, 0, 100]);
                t.elementsContent = [this.track_i(), this.thumb_i(), this.__4_i()];
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new mo.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["horizontalCenter", "maxDisplayedLines", "size", "textAlign", "verticalAlign", "verticalCenter"], [0, 1, 16, "center", "middle", 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "verticalCenter"], [0, 0, "bar_bg_0", 0]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                t.source = "bar_0_0";
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "source", "percentWidth"], [0, "bar_0_0", 100]);
                return t;
            };
            Bar_0_0_Skin._skinParts = ["track", "thumb", "labelDisplay"];
            return Bar_0_0_Skin;
        })(egret.gui.Skin);
        comp.Bar_0_0_Skin = Bar_0_0_Skin;
        egret.registerClass(Bar_0_0_Skin,"skins.comp.Bar_0_0_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
