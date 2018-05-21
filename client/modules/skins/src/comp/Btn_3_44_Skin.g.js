var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_3_44_Skin = (function (_super) {
            __extends(Btn_3_44_Skin, _super);
            function Btn_3_44_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i(), this.iconDisplay_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_honganliu_1")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("bg", "source", "btn_honganliu_1")
                    ])
                ];
            }
            var d = __define,c=Btn_3_44_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_3_44_Skin._skinParts;
                }
            );
            p.iconDisplay_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDisplay = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_txt_g_state", 0]);
                return t;
            };
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_honganliu_1", 0]);
                return t;
            };
            Btn_3_44_Skin._skinParts = ["bg", "iconDisplay"];
            return Btn_3_44_Skin;
        })(egret.gui.Skin);
        comp.Btn_3_44_Skin = Btn_3_44_Skin;
        egret.registerClass(Btn_3_44_Skin,"skins.comp.Btn_3_44_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
