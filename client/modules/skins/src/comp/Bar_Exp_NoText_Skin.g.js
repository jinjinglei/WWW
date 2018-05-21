var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_Exp_NoText_Skin = (function (_super) {
            __extends(Bar_Exp_NoText_Skin, _super);
            function Bar_Exp_NoText_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.thumb_i(), this.track_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_Exp_NoText_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_Exp_NoText_Skin._skinParts;
                }
            );
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "bar_5_0", 0]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "bottom", "left", "right", "source", "top"], [0, 0, 0, 0, "bar_5_0", 0]);
                return t;
            };
            Bar_Exp_NoText_Skin._skinParts = ["thumb", "track"];
            return Bar_Exp_NoText_Skin;
        })(egret.gui.Skin);
        comp.Bar_Exp_NoText_Skin = Bar_Exp_NoText_Skin;
        egret.registerClass(Bar_Exp_NoText_Skin,"skins.comp.Bar_Exp_NoText_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
