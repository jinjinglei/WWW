var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var ToggleBtnAutoInject_Skin = (function (_super) {
            __extends(ToggleBtnAutoInject_Skin, _super);
            function ToggleBtnAutoInject_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "minWidth"], [60, 140]);
                this.elementsContent = [this.__7_i(), this.__9_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("iconDisplay", "source", "btn_txt_g_kaiqizidong")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "btn_shuodinanliu_0"),
                        new egret.gui.SetProperty("iconDisplay", "source", "btn_txt_g_guanbizidong")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__7", "source", "btn_shuodinanliu_0")
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "btn_shuodinanliu_0"),
                        new egret.gui.SetProperty("iconDisplay", "source", "btn_txt_g_guanbizidong")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "btn_shuodinanliu_0"),
                        new egret.gui.SetProperty("iconDisplay", "source", "btn_txt_g_kaiqizidong")
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "btn_shuodinanliu_0")
                    ])
                ];
            }
            var d = __define,c=ToggleBtnAutoInject_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ToggleBtnAutoInject_Skin._skinParts;
                }
            );
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left", "right", "top"], [10, 10, 10, 10]);
                t.layout = this.__8_i();
                t.elementsContent = [this.iconDisplay_i()];
                return t;
            };
            p.iconDisplay_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDisplay = t;
                t.source = "btn_txt_g_kaiqizidong";
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "btn_shuodinanliu_0", 100]);
                return t;
            };
            ToggleBtnAutoInject_Skin._skinParts = ["iconDisplay"];
            return ToggleBtnAutoInject_Skin;
        })(egret.gui.Skin);
        comp.ToggleBtnAutoInject_Skin = ToggleBtnAutoInject_Skin;
        egret.registerClass(ToggleBtnAutoInject_Skin,"skins.comp.ToggleBtnAutoInject_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
