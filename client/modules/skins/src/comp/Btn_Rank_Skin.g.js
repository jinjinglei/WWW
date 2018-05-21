var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_Rank_Skin = (function (_super) {
            __extends(Btn_Rank_Skin, _super);
            function Btn_Rank_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i(), this.__6_i(), this.iconDisplay_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_4_1"),
                        new egret.gui.SetProperty("__6", "source", "btn_rank")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_d"),
                        new egret.gui.SetProperty("__6", "source", "btn_rank")
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__6", "source", "btn_rank_select")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__6", "source", "btn_rank_select")
                    ])
                ];
            }
            var d = __define,c=Btn_Rank_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_Rank_Skin._skinParts;
                }
            );
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_rank", 0]);
                return t;
            };
            p.iconDisplay_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDisplay = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "btn_txt_g_state", 0, 10, 10]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__6 = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return t;
            };
            Btn_Rank_Skin._skinParts = ["bg", "iconDisplay"];
            return Btn_Rank_Skin;
        })(egret.gui.Skin);
        comp.Btn_Rank_Skin = Btn_Rank_Skin;
        egret.registerClass(Btn_Rank_Skin,"skins.comp.Btn_Rank_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
