var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Ico_Rune_Skin = (function (_super) {
            __extends(Ico_Rune_Skin, _super);
            function Ico_Rune_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [73, 73]);
                this.elementsContent = [this.ico_border_i(), this.ico_i(), this.label_count_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Ico_Rune_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Ico_Rune_Skin._skinParts;
                }
            );
            p.ico_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return t;
            };
            p.label_count_i = function () {
                var t = new egret.gui.Label();
                this.label_count = t;
                this.__s(t, ["bottom", "horizontalCenter", "size", "text"], [-23, 0.5, 18, "32"]);
                return t;
            };
            p.ico_border_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_border = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "blk_kong", 0]);
                return t;
            };
            Ico_Rune_Skin._skinParts = ["ico_border", "ico", "label_count"];
            return Ico_Rune_Skin;
        })(egret.gui.Skin);
        comp.Ico_Rune_Skin = Ico_Rune_Skin;
        egret.registerClass(Ico_Rune_Skin,"skins.comp.Ico_Rune_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
