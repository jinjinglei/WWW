var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleMatrixSkin = (function (_super) {
            __extends(RoleMatrixSkin, _super);
            function RoleMatrixSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.effect_round_i(), this.__5_i(), this.label_name_i(), this.label_desc_i(), this.btn_up_i(), this.btn_equipAll_i(), this.btn_close_i(), this.btn_help_i(), this.grp_item_i(), this.effect_word_i(), this.efx_btn_i(), this.label_max_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleMatrixSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleMatrixSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 13, 88]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "width", "x", "y"], [64, "ico_item5", 64, 16, 91]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "width", "x", "y"], [64, "ico_item0", 64, 147, 13]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "width", "x", "y"], [64, "ico_item1", 64, 273, 94]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "width", "x", "y"], [64, "ico_item2", 64, 271, 223]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "width", "x", "y"], [64, "ico_item3", 64, 148, 297]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "width", "x", "y"], [64, "ico_item4", 64, 23, 229]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchChildren", "touchEnabled", "x", "y"], ["ico_plus0", "ico_plus_3", false, false, 157, 26]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchChildren", "touchEnabled", "x", "y"], ["ico_plus1", "ico_plus_3", false, false, 282, 107]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchChildren", "touchEnabled", "x", "y"], ["ico_plus2", "ico_plus_3", false, false, 281, 237]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchChildren", "touchEnabled", "x", "y"], ["ico_plus3", "ico_plus_3", false, false, 158, 312]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchChildren", "touchEnabled", "x", "y"], ["ico_plus4", "ico_plus_3", false, false, 32, 244]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchChildren", "touchEnabled", "x", "y"], ["ico_plus5", "ico_plus_3", false, false, 26, 106]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [396, 0, "panel_role_matrixbg", 375, 233]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "panel_role_name", 174]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 19, 224]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 143, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 268, 91]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 267, 219]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 409, 106]);
                return t;
            };
            p.btn_equipAll_i = function () {
                var t = new egret.gui.Button();
                this.btn_equipAll = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0.5, "btn_txt_g_yijianzhuangbei", skins.comp.Btn_3_6_Skin, 10, 654]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 2, 103]);
                return t;
            };
            p.btn_up_i = function () {
                var t = new egret.gui.Button();
                this.btn_up = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_upmatrix", skins.comp.Btn_3_6_Skin, 654]);
                return t;
            };
            p.effect_round_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_round = t;
                this.__s(t, ["x", "y"], [240, 428]);
                return t;
            };
            p.effect_word_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_word = t;
                this.__s(t, ["x", "y"], [240, 423]);
                return t;
            };
            p.efx_btn_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_btn = t;
                this.__s(t, ["effectId", "x", "y"], [21, 242, 680]);
                return t;
            };
            p.grp_item_i = function () {
                var t = new egret.gui.Group();
                this.grp_item = t;
                this.__s(t, ["x", "y"], [63, 243]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i()];
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "verticalCenter"], [0, 18, "生命", "left", 10132097, 26]);
                return t;
            };
            p.label_max_i = function () {
                var t = new egret.gui.Label();
                this.label_max = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 22, "已达当前最高品级", 0xFF0000, 658]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [34, 0.5, 22, "转生一重", "center", 0xEEE183, 137, 192]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 145, 293]);
                return t;
            };
            RoleMatrixSkin._skinParts = ["effect_round", "label_name", "label_desc", "btn_up", "btn_equipAll", "btn_close", "btn_help", "grp_item", "effect_word", "efx_btn", "label_max"];
            return RoleMatrixSkin;
        })(egret.gui.Skin);
        game.RoleMatrixSkin = RoleMatrixSkin;
        egret.registerClass(RoleMatrixSkin,"skins.game.RoleMatrixSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
