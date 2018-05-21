var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_dingzizb_Skin = (function (_super) {
            __extends(Btn_dingzizb_Skin, _super);
            function Btn_dingzizb_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("bg", "source", "btn_dingzizb_1")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Btn_dingzizb_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_dingzizb_Skin._skinParts;
                }
            );
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_dingzizb_0", 0]);
                return t;
            };
            Btn_dingzizb_Skin._skinParts = ["bg"];
            return Btn_dingzizb_Skin;
        })(egret.gui.Skin);
        comp.Btn_dingzizb_Skin = Btn_dingzizb_Skin;
        egret.registerClass(Btn_dingzizb_Skin,"skins.comp.Btn_dingzizb_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
