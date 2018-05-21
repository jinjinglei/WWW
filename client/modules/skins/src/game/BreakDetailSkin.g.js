var skins;
(function (skins) {
    var game;
    (function (game) {
        var BreakDetailSkin = (function (_super) {
            __extends(BreakDetailSkin, _super);
            function BreakDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.__9_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BreakDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BreakDetailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [508, 0, "s9g_dlg_1", 374, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [256, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 341, 16, 138]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "textColor", "x", "y"], ["楷体", 20, 16711680, 36, 64]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "需求等级:", 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [55, 195]);
                t.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.label_name_i(), this.label_props_i(), this.ico_item_i(), this.btn_tupo_i(), this.grp_needLv_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 409, 82]);
                return t;
            };
            p.btn_tupo_i = function () {
                var t = new egret.gui.Button();
                this.btn_tupo = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_tupo", skins.comp.Btn_3_6_Skin, 99, 433]);
                return t;
            };
            p.grp_needLv_i = function () {
                var t = new egret.gui.Group();
                this.grp_needLv = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 401]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__7_i(), this.label_needLv_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 13]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "道具名称", 15766538, 110]);
                return t;
            };
            p.label_needLv_i = function () {
                var t = new egret.gui.Label();
                this.label_needLv = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "Lv1", 10, 0]);
                return t;
            };
            p.label_props_i = function () {
                var t = new mo.gui.Label();
                this.label_props = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [243, 10, 20, "生    命", 12498871, 320, 27, 144]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            BreakDetailSkin._skinParts = ["btn_close", "label_name", "label_props", "ico_item", "btn_tupo", "label_needLv", "grp_needLv"];
            return BreakDetailSkin;
        })(egret.gui.Skin);
        game.BreakDetailSkin = BreakDetailSkin;
        egret.registerClass(BreakDetailSkin,"skins.game.BreakDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
