var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftForgeSkin = (function (_super) {
            __extends(GiftForgeSkin, _super);
            function GiftForgeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.effect_gift_i(), this.ico_gift_i(), this.ico_giftWord_i(), this.grp_star_i(), this.label_propL_i(), this.__15_i(), this.__16_i(), this.label_propR_i(), this.list_skill_i(), this.__17_i(), this.label_level_i(), this.label_ziZhi_i(), this.btn_lvUp_i(), this.btn_xiLian_i(), this.btn_upStar_i(), this.btn_help_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftForgeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftForgeSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 129, 50]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 139, 60]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 149, 70]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 3;
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "ico_digs", 20, 455]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_fabaojinengs", 20, 450]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_fabaopeiyang", 16]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_fabaobeijin_2", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star2", "ico_star", false, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star1", "ico_star", false, 39, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 79, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 89, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 99, 20]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 109, 30]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 4]);
                return t;
            };
            p.btn_lvUp_i = function () {
                var t = new egret.gui.Button();
                this.btn_lvUp = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_sengji", skins.comp.Btn_3_0s_Skin, 48, 716]);
                return t;
            };
            p.btn_upStar_i = function () {
                var t = new egret.gui.Button();
                this.btn_upStar = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_shenxin", skins.comp.Btn_3_0s_Skin, 311, 716]);
                return t;
            };
            p.btn_xiLian_i = function () {
                var t = new egret.gui.Button();
                this.btn_xiLian = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_xilian", skins.comp.Btn_3_0s_Skin, 180, 716]);
                return t;
            };
            p.effect_gift_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_gift = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 236, 161]);
                return t;
            };
            p.grp_star_i = function () {
                var t = new egret.gui.Group();
                this.grp_star = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 278]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i()];
                return t;
            };
            p.ico_giftWord_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_giftWord = t;
                this.__s(t, ["x", "y"], [92, 79]);
                return t;
            };
            p.ico_gift_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_gift = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [-4, -239, 40, 40]);
                return t;
            };
            p.label_level_i = function () {
                var t = new mo.gui.Label();
                this.label_level = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "等级：%s", 0xE9E5DC, 120, 307]);
                return t;
            };
            p.label_propL_i = function () {
                var t = new mo.gui.Label();
                this.label_propL = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [115, 10, 18, "命中：\n命中：\n命中：\n命中：", 0xFFFFFF, 189, 73, 341]);
                return t;
            };
            p.label_propR_i = function () {
                var t = new mo.gui.Label();
                this.label_propR = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [115, 10, 18, "命中：\n命中：\n命中：\n命中：", 0xFFFFFF, 189, 263, 341]);
                return t;
            };
            p.label_ziZhi_i = function () {
                var t = new mo.gui.Label();
                this.label_ziZhi = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "资质：%s", 0xE9E5DC, 250, 307]);
                return t;
            };
            p.list_skill_i = function () {
                var t = new egret.gui.List();
                this.list_skill = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [190, skins.game.GiftSkillCellSkin, 403, 41, 488]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 119, 40]);
                return t;
            };
            GiftForgeSkin._skinParts = ["effect_gift", "ico_gift", "ico_giftWord", "grp_star", "label_propL", "label_propR", "list_skill", "label_level", "label_ziZhi", "btn_lvUp", "btn_xiLian", "btn_upStar", "btn_help", "btn_back"];
            return GiftForgeSkin;
        })(egret.gui.Skin);
        game.GiftForgeSkin = GiftForgeSkin;
        egret.registerClass(GiftForgeSkin,"skins.game.GiftForgeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
