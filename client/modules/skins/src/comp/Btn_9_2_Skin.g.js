var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_9_2_Skin = (function (_super) {
            __extends(Btn_9_2_Skin, _super);
            function Btn_9_2_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_7_1")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_d")
                    ])
                ];
            }
            var d = __define,c=Btn_9_2_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_9_2_Skin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.layout = this.__4_i();
                t.elementsContent = [this.iconDisplay_i()];
                return t;
            };
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_0_7_0", 0]);
                return t;
            };
            p.iconDisplay_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDisplay = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "btn_txt_g_state", 0, 10, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return t;
            };
            Btn_9_2_Skin._skinParts = ["bg", "iconDisplay"];
            return Btn_9_2_Skin;
        })(egret.gui.Skin);
        comp.Btn_9_2_Skin = Btn_9_2_Skin;
        egret.registerClass(Btn_9_2_Skin,"skins.comp.Btn_9_2_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
