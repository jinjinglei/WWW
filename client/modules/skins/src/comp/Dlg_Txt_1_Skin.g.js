var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Dlg_Txt_1_Skin = (function (_super) {
            __extends(Dlg_Txt_1_Skin, _super);
            function Dlg_Txt_1_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.__3_i(), this.contentGroup_i(), this.titleDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Dlg_Txt_1_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Dlg_Txt_1_Skin._skinParts;
                }
            );
            p.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["bottom", "clipAndEnableScrolling", "left", "right", "top"], [0, true, 0, 0, 50]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-15, -15, -15, "s9g_dlg_2", -15]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new mo.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["horizontalCenter", "size", "text", "top"], [0, 36, "标题", 0]);
                return t;
            };
            Dlg_Txt_1_Skin._skinParts = ["contentGroup", "titleDisplay"];
            return Dlg_Txt_1_Skin;
        })(egret.gui.Skin);
        comp.Dlg_Txt_1_Skin = Dlg_Txt_1_Skin;
        egret.registerClass(Dlg_Txt_1_Skin,"skins.comp.Dlg_Txt_1_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
