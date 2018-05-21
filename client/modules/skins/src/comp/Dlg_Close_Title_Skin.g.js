var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Dlg_Close_Title_Skin = (function (_super) {
            __extends(Dlg_Close_Title_Skin, _super);
            function Dlg_Close_Title_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["maxWidth", "minHeight", "minWidth"], [710, 230, 470]);
                this.elementsContent = [this.__3_i(), this.contentGroup_i(), this.btn_close_i(), this.titleDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Dlg_Close_Title_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Dlg_Close_Title_Skin._skinParts;
                }
            );
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["bottom", "horizontalCenter", "icon", "skinName"], [11, 0, "btn_txt_guanbi", skins.comp.Btn_3_20_Skin]);
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
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-15, -15, -15, "s9g_dlg_0", -15]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new g_comp.IcoLabel();
                this.titleDisplay = t;
                this.__s(t, ["horizontalCenter", "source", "text", "x", "y"], [0, "ntc_wrd_howtoget", "ntc_wrd_howtoget", 10, -6]);
                return t;
            };
            Dlg_Close_Title_Skin._skinParts = ["contentGroup", "btn_close", "titleDisplay"];
            return Dlg_Close_Title_Skin;
        })(egret.gui.Skin);
        comp.Dlg_Close_Title_Skin = Dlg_Close_Title_Skin;
        egret.registerClass(Dlg_Close_Title_Skin,"skins.comp.Dlg_Close_Title_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
