var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBenefitsLayerSkin = (function (_super) {
            __extends(GuildBenefitsLayerSkin, _super);
            function GuildBenefitsLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_back_i(), this.btn_help_i(), this.__6_i(), this.__14_i(), this.__18_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBenefitsLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBenefitsLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "当前爵位加成：", 0x00DE7D, 185, 163]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [242, 185]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_hanghuiqizi", 35, 8]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [236, 419, 34, 112]);
                t.elementsContent = [this.__7_i(), this.__8_i(), this.label_nextLv_i(), this.__9_i(), this.label_lv_i(), this.__10_i(), this.label_ennoble_i(), this.__11_i(), this.label_ennobleRate_i(), this.__12_i(), this.__13_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x"], [368, egret.gui.getScale9Grid("37,40,347,37"), "panel_boss_0", 420, 0]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "width", "x", "y"], [16, "本级效果", 139, 63, 42]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "下级效果", 0xFFFFFF, 20, -18]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [375, 0.5, 415, 380]);
                t.elementsContent = [this.__15_i(), this.__16_i(), this.label_maxLv_i(), this.label_value_i(), this.grp_nextLv_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_forge", 0, 40, 40]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 40, 1]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [-3, "tit_txt_g_hanghuijiachen", 40, 8]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "x", "y"], [665, 0, "s9g_dlg_1", 450, 10, 95]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_qizhidiwen", -10, -11]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "旗帜等级：", 0x00DE7D, 185, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [45, 16, "(行会爵位可提升对行会旗帜的使用效果)", 0xFFFFFF, 206, 185, 184]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 418, 5]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 9, -5]);
                return t;
            };
            p.grp_nextLv_i = function () {
                var t = new egret.gui.Group();
                this.grp_nextLv = t;
                this.__s(t, ["x", "y"], [252, 60]);
                t.elementsContent = [this.__17_i(), this.label_next_i()];
                return t;
            };
            p.label_ennobleRate_i = function () {
                var t = new egret.gui.Label();
                this.label_ennobleRate = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "0%", 0x00DE7D, 297, 163]);
                return t;
            };
            p.label_ennoble_i = function () {
                var t = new egret.gui.Label();
                this.label_ennoble = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "无", 0x00DE7D, 265, 106]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "Lv.%s", 0x00DE7D, 264, 10]);
                return t;
            };
            p.label_maxLv_i = function () {
                var t = new egret.gui.Label();
                this.label_maxLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "行会已达最高等级", 0xF41919, 252, 151]);
                return t;
            };
            p.label_nextLv_i = function () {
                var t = new egret.gui.Label();
                this.label_nextLv = t;
                this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [45, 16, "(下级旗帜将在行会达到%s级后自动激活)", 0xFFFFFF, 206, 185, 32]);
                return t;
            };
            p.label_next_i = function () {
                var t = new egret.gui.Label();
                this.label_next = t;
                this.__s(t, ["lineSpacing", "size", "text", "textAlign", "textColor", "width", "x", "y"], [15, 16, "1000", "left", 0xFFC000, 111, 23, 15]);
                return t;
            };
            p.label_value_i = function () {
                var t = new egret.gui.Label();
                this.label_value = t;
                this.__s(t, ["lineSpacing", "size", "text", "width", "x", "y"], [15, 16, "攻击+%s", 139, 64, 75]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "我的爵位：", 0x00DE7D, 185, 106]);
                return t;
            };
            GuildBenefitsLayerSkin._skinParts = ["btn_back", "btn_help", "label_nextLv", "label_lv", "label_ennoble", "label_ennobleRate", "label_maxLv", "label_value", "label_next", "grp_nextLv"];
            return GuildBenefitsLayerSkin;
        })(egret.gui.Skin);
        game.GuildBenefitsLayerSkin = GuildBenefitsLayerSkin;
        egret.registerClass(GuildBenefitsLayerSkin,"skins.game.GuildBenefitsLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
