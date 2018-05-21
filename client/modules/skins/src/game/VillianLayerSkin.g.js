var skins;
(function (skins) {
    var game;
    (function (game) {
        var VillianLayerSkin = (function (_super) {
            __extends(VillianLayerSkin, _super);
            function VillianLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.ui_Villianbg_i(), this.__3_i(), this.btn_help_i(), this.btn_back_i(), this.__5_i(), this.__8_i(), this.villianEnemy_1_i(), this.villianEnemy_2_i(), this.villianEnemy_3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=VillianLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VillianLayerSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "x", "y"], ["宋体", 21, 15, 1, 0x000000, "进度：%s", "left", 0xF6F3F3, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [202, 61]);
                t.elementsContent = [this.__4_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_normal", -129, 71]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 25, 15, 1, 0x000000, "拥有黑市通货：", "left", 0xF6F3F3, 170, -211, 95]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [280, 572]);
                t.elementsContent = [this.btn_villian_shop_i(), this.__6_i(), this.__7_i(), this.label_today_num_i()];
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, -4]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_villian_shop_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_villian_shop = t;
                this.__s(t, ["source", "x", "y"], ["ico_heishitub", 0, 0]);
                return t;
            };
            p.label_today_num_i = function () {
                var t = new egret.gui.Label();
                this.label_today_num = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 25, 20, 1, 0x000000, "今日剩余尝试次数：%s", "center", 0xE6C41A, 250, -237, 53]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_chuanqizhilu", 185, 14]);
                return t;
            };
            p.ui_Villianbg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ui_Villianbg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_errengudishi1-3", 0]);
                return t;
            };
            p.villianEnemy_1_i = function () {
                var t = new g_comp.VillianEnemy();
                this.villianEnemy_1 = t;
                this.__s(t, ["x", "y"], [229, 431]);
                return t;
            };
            p.villianEnemy_2_i = function () {
                var t = new g_comp.VillianEnemy();
                this.villianEnemy_2 = t;
                this.__s(t, ["x", "y"], [204, 247]);
                return t;
            };
            p.villianEnemy_3_i = function () {
                var t = new g_comp.VillianEnemy();
                this.villianEnemy_3 = t;
                this.__s(t, ["x", "y"], [47, 140]);
                return t;
            };
            VillianLayerSkin._skinParts = ["ui_Villianbg", "btn_help", "btn_back", "btn_villian_shop", "label_today_num", "villianEnemy_1", "villianEnemy_2", "villianEnemy_3"];
            return VillianLayerSkin;
        })(egret.gui.Skin);
        game.VillianLayerSkin = VillianLayerSkin;
        egret.registerClass(VillianLayerSkin,"skins.game.VillianLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
