var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_StageInfo_Skin = (function (_super) {
            __extends(Bar_StageInfo_Skin, _super);
            function Bar_StageInfo_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.track_i(), this.thumb_i(), this.__4_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_StageInfo_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_StageInfo_Skin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [0, 0, 0, 0, 40, 40]);
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
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_stageinfo_b", 0, 0]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["source", "x", "y"], ["bar_shop", 58, 21]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "source", "x", "y"], [0, "bar_shop", 58, 21]);
                return t;
            };
            Bar_StageInfo_Skin._skinParts = ["track", "thumb", "labelDisplay"];
            return Bar_StageInfo_Skin;
        })(egret.gui.Skin);
        comp.Bar_StageInfo_Skin = Bar_StageInfo_Skin;
        egret.registerClass(Bar_StageInfo_Skin,"skins.comp.Bar_StageInfo_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
