var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_Recharge_Skin = (function (_super) {
            __extends(Bar_Recharge_Skin, _super);
            function Bar_Recharge_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.thumb_i(), this.track_i(), this.__4_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_Recharge_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_Recharge_Skin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [0, 0, 0, 0, 30, 30]);
                t.elementsContent = [this.labelDisplay_i()];
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new mo.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["horizontalCenter", "maxDisplayedLines", "size", "stroke", "strokeColor", "style", "textAlign", "verticalAlign", "verticalCenter"], [0, 1, 16, 1, 0x000000, 0, "center", "middle", 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "verticalCenter"], [-1, 1, "panel_recharge_bar_bg", 0]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [4, 22, 23, "bar_5_0", 4]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "bottom", "left", "right", "source", "top"], [0, 4, 22, 23, "bar_5_0", 4]);
                return t;
            };
            Bar_Recharge_Skin._skinParts = ["thumb", "track", "labelDisplay"];
            return Bar_Recharge_Skin;
        })(egret.gui.Skin);
        comp.Bar_Recharge_Skin = Bar_Recharge_Skin;
        egret.registerClass(Bar_Recharge_Skin,"skins.comp.Bar_Recharge_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
