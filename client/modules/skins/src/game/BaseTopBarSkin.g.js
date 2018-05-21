var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseTopBarSkin = (function (_super) {
            __extends(BaseTopBarSkin, _super);
            function BaseTopBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__12_i(), this.label_yuanbao_i(), this.grp_copyShow_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseTopBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseTopBarSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter"], [95, 0]);
                t.layout = this.__11_i();
                t.elementsContent = [this.img_head_i(), this.__3_i(), this.__4_i(), this.__5_i(), this.label_vip_i(), this.label_gold_i(), this.btn_plus_gold_i(), this.btn_plus_yuanbao_i(), this.label_lvl_i(), this.label_name_i(), this.img_vip_i(), this.pb_exp_i(), this.label_combatbk_i(), this.label_combat_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "scale9Grid", "source", "y"], [-40, -30, egret.gui.getScale9Grid("42,14,43,11"), "ico_copy_diban_0", 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [43, 6]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__13_i(), this.ico_boss_i(), this.label_copyId_i(), this.label_copy_name_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["right", "y"], [0, 0]);
                t.layout = this.__16_i();
                t.elementsContent = [this.__15_i(), this.img_detail_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "touchEnabled", "y"], [false, 94, 0, "diban_0", false, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 296, 8]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold_2", 112, 1]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 17, "ico_exp", 32, 107, 71]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "scaleX", "scaleY", "x", "y"], [true, 36, 0.75, 0.75, 271, 18]);
                return t;
            };
            p.__8_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "scaleX", "scaleY", "x", "y"], [true, 38, 0.75, 0.75, 129, 17]);
                return t;
            };
            p.__9_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "scaleX", "scaleY", "x", "y"], [true, 38, 0.75, 0.75, 310, 16]);
                return t;
            };
            p.btn_plus_gold_i = function () {
                var t = new egret.gui.Button();
                this.btn_plus_gold = t;
                this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.8, 0.8, skins.comp.Btn_plus_Skin, 254, 4]);
                return t;
            };
            p.btn_plus_yuanbao_i = function () {
                var t = new egret.gui.Button();
                this.btn_plus_yuanbao = t;
                this.__s(t, ["label", "scaleX", "scaleY", "skinName", "x", "y"], ["按钮", 0.8, 0.8, skins.comp.Btn_plus_Skin, 426, 4]);
                return t;
            };
            p.grp_copyShow_i = function () {
                var t = new egret.gui.Group();
                this.grp_copyShow = t;
                this.__s(t, ["right", "touchChildren", "touchEnabled", "y"], [3, true, true, 564]);
                t.elementsContent = [this.__17_i()];
                return t;
            };
            p.ico_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_boss = t;
                this.__s(t, ["left", "source", "visible"], [-40, "ico_long", false]);
                return t;
            };
            p.img_detail_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_detail = t;
                this.__s(t, ["source", "x", "y"], ["ico_stageinfo", 118, 8]);
                return t;
            };
            p.img_head_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_head = t;
                this.__s(t, ["height", "scaleX", "scaleY", "source", "width", "x", "y"], [96, 1, 1, "avatar_1_0_1", 96, 14, 5]);
                return t;
            };
            p.img_vip_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_vip = t;
                this.__s(t, ["source", "x", "y"], ["ico_vip", 357, 30]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_combat = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_12", "2222", 190, 43]);
                return t;
            };
            p.label_combatbk_i = function () {
                var t = new egret.gui.Label();
                this.label_combatbk = t;
                this.__s(t, ["bold", "height", "size", "text", "textColor", "touchEnabled", "visible", "width", "x", "y"], [true, 22, 20, "155万", 0xFFB600, false, false, 117, 190, 40]);
                return t;
            };
            p.label_copyId_i = function () {
                var t = new egret.gui.Label();
                this.label_copyId = t;
                this.__s(t, ["bold", "fontFamily", "height", "left", "size", "stroke", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "y"], [true, "宋体", 24, -43, 22, 1, "1", "center", 0xFFAE00, false, "middle", 49, 10]);
                return t;
            };
            p.label_copy_name_i = function () {
                var t = new egret.gui.Label();
                this.label_copy_name = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter"], ["宋体", 2.5, 18, 1, "关卡", "center", 0xE2DFDA, false, 0]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_gold = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["微软雅黑", 22, 16, "0", "center", 0xF8F3E8, false, "middle", 90, 155, 7]);
                return t;
            };
            p.label_lvl_i = function () {
                var t = new mo.gui.Label();
                this.label_lvl = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["微软雅黑", 20, 15, "LV.%s", "center", 0xDA9F00, false, 56, 82, 98]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalCenter", "width"], [17, -9, 15, "标签", "left", 0xF9F7F2, 60, 164]);
                return t;
            };
            p.label_vip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vip = t;
                this.__s(t, ["font", "height", "right", "text", "top", "width"], ["vip_font", 23, 12, "0", 42, 44]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new mo.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "width", "x", "y"], ["微软雅黑", 22, 16, "0", "center", 0xF8F7F6, false, "middle", 90, 316, 5]);
                return t;
            };
            p.pb_exp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.pb_exp = t;
                this.__s(t, ["height", "skinName", "value", "width", "x", "y"], [24, skins.comp.Bar_Exp_Skin, 100, 274, 156, 62]);
                return t;
            };
            p.__10_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "scaleX", "scaleY", "x", "y"], [true, 36, 0.75, 0.75, 443, 17]);
                return t;
            };
            BaseTopBarSkin._skinParts = ["img_head", "label_vip", "label_gold", "btn_plus_gold", "btn_plus_yuanbao", "label_lvl", "label_name", "img_vip", "pb_exp", "label_combatbk", "label_combat", "label_yuanbao", "ico_boss", "label_copyId", "label_copy_name", "img_detail", "grp_copyShow"];
            return BaseTopBarSkin;
        })(egret.gui.Skin);
        game.BaseTopBarSkin = BaseTopBarSkin;
        egret.registerClass(BaseTopBarSkin,"skins.game.BaseTopBarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
