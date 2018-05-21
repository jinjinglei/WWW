var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_0_2_Skin = (function (_super) {
            __extends(Btn_0_2_Skin, _super);
            function Btn_0_2_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_2_1")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_d")
                    ])
                ];
            }
            var d = __define,c=Btn_0_2_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_0_2_Skin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.layout = this.__4_i();
                t.elementsContent = [this.labelDisplay_i()];
                return t;
            };
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_0_2_0", 0]);
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["paddingLeft", "paddingRight", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "verticalAlign"], [5, 5, 18, 1, 0x000036, "btn_0_2", "center", 0xffffff, "middle"]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return t;
            };
            Btn_0_2_Skin._skinParts = ["bg", "labelDisplay"];
            return Btn_0_2_Skin;
        })(egret.gui.Skin);
        comp.Btn_0_2_Skin = Btn_0_2_Skin;
        egret.registerClass(Btn_0_2_Skin,"skins.comp.Btn_0_2_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
