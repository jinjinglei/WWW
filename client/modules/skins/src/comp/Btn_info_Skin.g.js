var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_info_Skin = (function (_super) {
            __extends(Btn_info_Skin, _super);
            function Btn_info_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_info_1")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Btn_info_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_info_Skin._skinParts;
                }
            );
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_info_0", 0]);
                return t;
            };
            Btn_info_Skin._skinParts = ["bg"];
            return Btn_info_Skin;
        })(egret.gui.Skin);
        comp.Btn_info_Skin = Btn_info_Skin;
        egret.registerClass(Btn_info_Skin,"skins.comp.Btn_info_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
