var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_0_1_Skin = (function (_super) {
            __extends(Bar_0_1_Skin, _super);
            function Bar_0_1_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_0_1_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_0_1_Skin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter", "percentWidth"], [0, 0, 100]);
                t.elementsContent = [this.track_i(), this.thumb_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "verticalCenter"], [-25, 0, "bar_bg_1", 0]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                t.source = "bar_0_1";
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "source", "percentWidth"], [0, "bar_0_1", 100]);
                return t;
            };
            Bar_0_1_Skin._skinParts = ["track", "thumb"];
            return Bar_0_1_Skin;
        })(egret.gui.Skin);
        comp.Bar_0_1_Skin = Bar_0_1_Skin;
        egret.registerClass(Bar_0_1_Skin,"skins.comp.Bar_0_1_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
