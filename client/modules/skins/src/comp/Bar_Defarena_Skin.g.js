var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_Defarena_Skin = (function (_super) {
            __extends(Bar_Defarena_Skin, _super);
            function Bar_Defarena_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 259;
                this.elementsContent = [this.__3_i(), this.thumb_i(), this.track_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_Defarena_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_Defarena_Skin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jindutiaob", 0, 0]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["source", "x", "y"], ["ico_jindutiao", 13, 7]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "source", "x", "y"], [0, "ico_jindutiao", 14, 7]);
                return t;
            };
            Bar_Defarena_Skin._skinParts = ["thumb", "track"];
            return Bar_Defarena_Skin;
        })(egret.gui.Skin);
        comp.Bar_Defarena_Skin = Bar_Defarena_Skin;
        egret.registerClass(Bar_Defarena_Skin,"skins.comp.Bar_Defarena_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
