var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_plus_Skin = (function (_super) {
            __extends(Btn_plus_Skin, _super);
            function Btn_plus_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_plus_1")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Btn_plus_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_plus_Skin._skinParts;
                }
            );
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_plus_0", 0]);
                return t;
            };
            Btn_plus_Skin._skinParts = ["bg"];
            return Btn_plus_Skin;
        })(egret.gui.Skin);
        comp.Btn_plus_Skin = Btn_plus_Skin;
        egret.registerClass(Btn_plus_Skin,"skins.comp.Btn_plus_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
