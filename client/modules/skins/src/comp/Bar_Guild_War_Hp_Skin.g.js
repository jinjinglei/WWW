var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_Guild_War_Hp_Skin = (function (_super) {
            __extends(Bar_Guild_War_Hp_Skin, _super);
            function Bar_Guild_War_Hp_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.thumb_i(), this.track_i(), this.__4_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_Guild_War_Hp_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_Guild_War_Hp_Skin._skinParts;
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
                this.__s(t, ["horizontalCenter", "maxDisplayedLines", "size", "stroke", "strokeColor", "style", "text", "textAlign", "verticalAlign", "verticalCenter"], [0, 1, 12, 1, 0x000000, 0, "100/100", "center", "middle", -2]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "scale9Grid", "source", "verticalCenter"], [0, 0, egret.gui.getScale9Grid("26,10,224,3"), "ico_cenmengxuetiaodi_0", 0]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["left", "right", "source", "verticalCenter"], [16, 16, "ico_cenmengxuetiaodi_1", -0.5]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "source", "verticalCenter", "width", "x"], [0, "bar_5_0", 0.5, 129, 17]);
                return t;
            };
            Bar_Guild_War_Hp_Skin._skinParts = ["thumb", "track", "labelDisplay"];
            return Bar_Guild_War_Hp_Skin;
        })(egret.gui.Skin);
        comp.Bar_Guild_War_Hp_Skin = Bar_Guild_War_Hp_Skin;
        egret.registerClass(Bar_Guild_War_Hp_Skin,"skins.comp.Bar_Guild_War_Hp_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
