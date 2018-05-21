var skins;
(function (skins) {
    var game;
    (function (game) {
        var Create4thRoleSkin = (function (_super) {
            __extends(Create4thRoleSkin, _super);
            function Create4thRoleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_help_i(), this.btn_back_i(), this.pb_exp_i(), this.__5_i(), this.__9_i(), this.__10_i(), this.efx_open_i(), this.img_openTips_i(), this.img_skill42_i(), this.img_skill41_i(), this.img_skill40_i(), this.img_skill39_i(), this.img_skill38_i(), this.efx_hit1_i(), this.efx_hit2_i(), this.grp_inject_i(), this.grp_full_i(), this.__21_i(), this.grp_myZq_i(), this.__25_i(), this.grp_myYB_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Create4thRoleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Create4thRoleSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [252, 0]);
                t.elementsContent = [this.grp_resYB_i(), this.btn_yuanbao_i(), this.label_YBV_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__16_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [131, 92, 0]);
                t.elementsContent = [this.grp_resZQ_i(), this.btn_zq_i(), this.label_ZQV_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 14, "开启此选项，所有获得经验均被用于注入解锁进度", 141]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "进度已完成", 41, 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["gold_round_bg", false, 120, 742]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__23_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["gold_round_bg", false, 299, 742]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__27_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_jiesuojuese", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_jieshuojuesen", 184, 13]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [15, "完成进度解锁角色", "center", 0x2CD19A, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [15, "(1点经验=1点进度)", "center", 0xFFFFFF, 140, 80, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 519]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__6_i(), this.__7_i()];
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_back_Skin, 410, 0]);
                return t;
            };
            p.btn_create_i = function () {
                var t = new egret.gui.Button();
                this.btn_create = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_kaiqijueseg", skins.comp.Btn_3_6_Skin, 0, 30]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_yuanbao_i = function () {
                var t = new egret.gui.Button();
                this.btn_yuanbao = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_gaojizhuru", skins.comp.Btn_3_26_Skin, 10, 38]);
                return t;
            };
            p.btn_zq_i = function () {
                var t = new egret.gui.Button();
                this.btn_zq = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_izhuruzenqi", "Bottom", skins.comp.Btn_3_26_Skin, 0, 37]);
                return t;
            };
            p.cb_auto_i = function () {
                var t = new egret.gui.CheckBox();
                this.cb_auto = t;
                this.__s(t, ["label", "scaleX", "scaleY", "x", "y"], ["自动注入经验", 0.8, 0.8, 162, 108]);
                return t;
            };
            p.efx_hit1_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_hit1 = t;
                this.__s(t, ["effectId", "x", "y"], [2, 233, 550]);
                return t;
            };
            p.efx_hit2_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_hit2 = t;
                this.__s(t, ["effectId", "x", "y"], [3, 240, 500]);
                return t;
            };
            p.efx_open_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_open = t;
                this.__s(t, ["autoPlay", "effectId", "performanceControl", "scaleX", "scaleY", "visible", "x", "y"], [false, 62, false, 1.2, 1.2, false, 258, 296]);
                return t;
            };
            p.grp_full_i = function () {
                var t = new egret.gui.Group();
                this.grp_full = t;
                this.__s(t, ["visible", "x", "y"], [false, 151, 608]);
                t.elementsContent = [this.__20_i(), this.btn_create_i()];
                return t;
            };
            p.grp_inject_i = function () {
                var t = new egret.gui.Group();
                this.grp_inject = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 568]);
                t.elementsContent = [this.__14_i(), this.__18_i(), this.cb_auto_i(), this.__19_i()];
                return t;
            };
            p.grp_myYB_i = function () {
                var t = new egret.gui.Group();
                this.grp_myYB = t;
                this.__s(t, ["height", "x", "y"], [30, 274, 738]);
                t.layout = this.__28_i();
                t.elementsContent = [this.__26_i(), this.__27_i()];
                return t;
            };
            p.grp_myZq_i = function () {
                var t = new egret.gui.Group();
                this.grp_myZq = t;
                this.__s(t, ["height", "x", "y"], [30, 94, 738]);
                t.layout = this.__24_i();
                t.elementsContent = [this.__22_i(), this.__23_i()];
                return t;
            };
            p.grp_resYB_i = function () {
                var t = new egret.gui.Group();
                this.grp_resYB = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [30, 0.5, 0]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__11_i(), this.__12_i()];
                return t;
            };
            p.grp_resZQ_i = function () {
                var t = new egret.gui.Group();
                this.grp_resZQ = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [30, 0, 0]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__15_i(), this.__16_i()];
                return t;
            };
            p.img_openTips_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_openTips = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_feishengerckaq", 385]);
                return t;
            };
            p.img_skill38_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_skill38 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [62, "touch_rect", 63, 360, 439]);
                return t;
            };
            p.img_skill39_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_skill39 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [62, "touch_rect", 63, 288, 437]);
                return t;
            };
            p.img_skill40_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_skill40 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [62, "touch_rect", 63, 214, 439]);
                return t;
            };
            p.img_skill41_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_skill41 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [62, "touch_rect", 63, 138, 439]);
                return t;
            };
            p.img_skill42_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_skill42 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [62, "touch_rect", 63, 61, 439]);
                return t;
            };
            p.label_YBV_i = function () {
                var t = new mo.gui.Label();
                this.label_YBV = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [-10, 14, "获得经验：%s万~%s万", 81]);
                return t;
            };
            p.label_ZQV_i = function () {
                var t = new mo.gui.Label();
                this.label_ZQV = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [-5.5, 14, "获得经验：%s万~%s万", 83]);
                return t;
            };
            p.pb_exp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.pb_exp = t;
                this.__s(t, ["skinName", "value", "x", "y"], [skins.comp.Bar_Recharge_Skin, 0, 93, 536]);
                return t;
            };
            p.__10_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "performanceControl", "x", "y"], [true, 300, false, 240, 390]);
                return t;
            };
            Create4thRoleSkin._skinParts = ["btn_help", "btn_back", "pb_exp", "efx_open", "img_openTips", "img_skill42", "img_skill41", "img_skill40", "img_skill39", "img_skill38", "efx_hit1", "efx_hit2", "grp_resYB", "btn_yuanbao", "label_YBV", "grp_resZQ", "btn_zq", "label_ZQV", "cb_auto", "grp_inject", "btn_create", "grp_full", "grp_myZq", "grp_myYB"];
            return Create4thRoleSkin;
        })(egret.gui.Skin);
        game.Create4thRoleSkin = Create4thRoleSkin;
        egret.registerClass(Create4thRoleSkin,"skins.game.Create4thRoleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
