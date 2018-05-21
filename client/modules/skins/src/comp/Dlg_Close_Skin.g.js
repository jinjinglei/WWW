var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Dlg_Close_Skin = (function (_super) {
            __extends(Dlg_Close_Skin, _super);
            function Dlg_Close_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.__3_i(), this.contentGroup_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Dlg_Close_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Dlg_Close_Skin._skinParts;
                }
            );
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "right", "skinName", "top"], ["按钮", -30, skins.comp.Btn_close_Skin, -29]);
                return t;
            };
            p.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["bottom", "clipAndEnableScrolling", "left", "right", "top"], [0, true, 0, 0, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-15, -15, -15, "s9g_dlg_2", -15]);
                return t;
            };
            Dlg_Close_Skin._skinParts = ["contentGroup", "btn_close"];
            return Dlg_Close_Skin;
        })(egret.gui.Skin);
        comp.Dlg_Close_Skin = Dlg_Close_Skin;
        egret.registerClass(Dlg_Close_Skin,"skins.comp.Dlg_Close_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
