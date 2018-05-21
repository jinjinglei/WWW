var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Btn_9_1_Skin = (function (_super) {
            __extends(Btn_9_1_Skin, _super);
            function Btn_9_1_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("bg", "source", "btn_0_d")
                    ])
                ];
            }
            var d = __define,c=Btn_9_1_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Btn_9_1_Skin._skinParts;
                }
            );
            p.bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_txt_g_bbs", 0]);
                return t;
            };
            Btn_9_1_Skin._skinParts = ["bg"];
            return Btn_9_1_Skin;
        })(egret.gui.Skin);
        comp.Btn_9_1_Skin = Btn_9_1_Skin;
        egret.registerClass(Btn_9_1_Skin,"skins.comp.Btn_9_1_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
