var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_back_Skin = (function (_super) {
            __extends(Btn_back_Skin, _super);
            function Btn_back_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Btn_back_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_back_Skin._skinParts;
                }
            );
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_back", 0]);
                return t;
            };
            Btn_back_Skin._skinParts = ["bg"];
            return Btn_back_Skin;
        })(egret.gui.Skin);
        comp.Btn_back_Skin = Btn_back_Skin;
        egret.registerClass(Btn_back_Skin,"skins.comp.Btn_back_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
