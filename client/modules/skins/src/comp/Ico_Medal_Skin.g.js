var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Ico_Medal_Skin = (function (_super) {
            __extends(Ico_Medal_Skin, _super);
            function Ico_Medal_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [60, 151]);
                this.elementsContent = [this.ico_medal_i(), this.label_medalTitle_i(), this.efx_medal_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Ico_Medal_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Ico_Medal_Skin._skinParts;
                }
            );
            p.ico_medal_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_medal = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "blk_kong", 0]);
                return t;
            };
            p.label_medalTitle_i = function () {
                var t = new mo.gui.Label();
                this.label_medalTitle = t;
                this.__s(t, ["bold", "fontFamily", "horizontalCenter", "size", "stroke", "strokeColor", "textColor", "verticalCenter"], [true, "Adobe 黑体 Std R", 0.5, 29, 2, 0x583000, 0xF8FF3E, 0]);
                return t;
            };
            p.efx_medal_i = function () {
                var t = new g_comp.EfxAsset();
                this.efx_medal = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "performanceControl", "verticalCenter"], [true, 0, false, 0]);
                return t;
            };
            Ico_Medal_Skin._skinParts = ["ico_medal", "label_medalTitle", "efx_medal"];
            return Ico_Medal_Skin;
        })(egret.gui.Skin);
        comp.Ico_Medal_Skin = Ico_Medal_Skin;
        egret.registerClass(Ico_Medal_Skin,"skins.comp.Ico_Medal_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
