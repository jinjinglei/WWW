var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_close1_Skin = (function (_super) {
            __extends(Btn_close1_Skin, _super);
            function Btn_close1_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_close1_1")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Btn_close1_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_close1_Skin._skinParts;
                }
            );
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_close1_0", 0]);
                return t;
            };
            Btn_close1_Skin._skinParts = ["bg"];
            return Btn_close1_Skin;
        })(egret.gui.Skin);
        comp.Btn_close1_Skin = Btn_close1_Skin;
        egret.registerClass(Btn_close1_Skin,"skins.comp.Btn_close1_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
