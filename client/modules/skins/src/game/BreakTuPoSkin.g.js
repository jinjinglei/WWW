var skins;
(function (skins) {
    var game;
    (function (game) {
        var BreakTuPoSkin = (function (_super) {
            __extends(BreakTuPoSkin, _super);
            function BreakTuPoSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BreakTuPoSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BreakTuPoSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [132, 0.5, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 376, 385]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "right", "y"], [0, 0, 50]);
                t.elementsContent = [this.label_name_i(), this.ico_item_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "需求等级:", 0xFF0000, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "right", "y"], [0, 0, 391]);
                t.elementsContent = [this.label_name2_i(), this.ico_item2_i()];
                return t;
            };
            p.btn_tupo_i = function () {
                var t = new egret.gui.Button();
                this.btn_tupo = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "visible", "y"], [0, "btn_txt_g_tupo", "按钮", skins.comp.Btn_3_6_Skin, false, 521]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [569, 0, skins.comp.Dlg_Close_Text_Skin, 385, 74]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.label_name1_i(), this.label_props_i(), this.__5_i(), this.btn_tupo_i(), this.grp_needLv_i(), this.__8_i()];
                return t;
            };
            p.grp_needLv_i = function () {
                var t = new egret.gui.Group();
                this.grp_needLv = t;
                this.__s(t, ["horizontalCenter", "x", "y"], [0.5, 10, 534]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__6_i(), this.label_needLv_i()];
                return t;
            };
            p.ico_item2_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_item2 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 26]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 0]);
                return t;
            };
            p.label_name1_i = function () {
                var t = new egret.gui.Label();
                this.label_name1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "突破材料：", 0xE7C908, 20, 436]);
                return t;
            };
            p.label_name2_i = function () {
                var t = new egret.gui.Label();
                this.label_name2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "道具名称", 0xF0940A, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "道具名称", 0xF0940A, 89]);
                return t;
            };
            p.label_needLv_i = function () {
                var t = new egret.gui.Label();
                this.label_needLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "Lv1", 0xFF0000, 10, 0]);
                return t;
            };
            p.label_props_i = function () {
                var t = new mo.gui.Label();
                this.label_props = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [187, 10, 18, "生    命", 0xBEB7B7, 355, 13, 177]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [208, 0.5, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 376, 167]);
                return t;
            };
            BreakTuPoSkin._skinParts = ["label_name1", "label_props", "label_name", "ico_item", "btn_tupo", "label_needLv", "grp_needLv", "label_name2", "ico_item2", "container"];
            return BreakTuPoSkin;
        })(egret.gui.Skin);
        game.BreakTuPoSkin = BreakTuPoSkin;
        egret.registerClass(BreakTuPoSkin,"skins.game.BreakTuPoSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
