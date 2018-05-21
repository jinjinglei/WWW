var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_Soul_Skin = (function (_super) {
            __extends(Bar_Soul_Skin, _super);
            function Bar_Soul_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.thumb_i(), this.track_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_Soul_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_Soul_Skin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xuetiaodi_0", 0, 0]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["source", "x", "y"], ["ico_xuetiaodi_1", 0, 0]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "source", "x", "y"], [0, "ico_xuetiaodi_1", 0, 0]);
                return t;
            };
            Bar_Soul_Skin._skinParts = ["thumb", "track"];
            return Bar_Soul_Skin;
        })(egret.gui.Skin);
        comp.Bar_Soul_Skin = Bar_Soul_Skin;
        egret.registerClass(Bar_Soul_Skin,"skins.comp.Bar_Soul_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
