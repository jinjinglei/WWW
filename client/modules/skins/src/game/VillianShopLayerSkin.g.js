var skins;
(function (skins) {
    var game;
    (function (game) {
        var VillianShopLayerSkin = (function (_super) {
            __extends(VillianShopLayerSkin, _super);
            function VillianShopLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.list_items_i(), this.__5_i(), this.btn_close_i(), this.btn_right_i(), this.btn_left_i(), this.label_pages_i(), this.__8_i(), this.__11_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=VillianShopLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VillianShopLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [121, 20, 706]);
                t.elementsContent = [this.__9_i(), this.__10_i(), this.label_sw1_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "touchEnabled", "y"], [0.5, "und_cenjieerren", false, 71]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "verticalGap"], [10, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_heishif", 210, 86]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [30, egret.gui.getScale9Grid("11,3,68,20"), "ico_aocao2", 120, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_normal", -52, -15]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [-77.5, 10, 706]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.label_sw0_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [30, egret.gui.getScale9Grid("11,3,68,20"), "ico_aocao2", 120, 0, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 410, 125]);
                return t;
            };
            p.btn_left_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_left = t;
                this.__s(t, ["scaleX", "source", "x", "y"], [-1, "btn_you", 171, 643]);
                return t;
            };
            p.btn_right_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_right = t;
                this.__s(t, ["source", "x", "y"], ["btn_you", 290, 643]);
                return t;
            };
            p.label_pages_i = function () {
                var t = new mo.gui.Label();
                this.label_pages = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [25, "3/5", "center", 0xF5EE3F, 80, 199, 649]);
                return t;
            };
            p.label_sw0_i = function () {
                var t = new egret.gui.Label();
                this.label_sw0 = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "999", "center", 0xFFFFFF, 120, 3, 3]);
                return t;
            };
            p.label_sw1_i = function () {
                var t = new egret.gui.Label();
                this.label_sw1 = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "999", "center", 0xFFFFFF, 120, 2, 3]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "width", "x", "y"], [457, 0, 400, 10, 174]);
                t.layout = this.__4_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_elite", -52, -17]);
                return t;
            };
            VillianShopLayerSkin._skinParts = ["list_items", "btn_close", "btn_right", "btn_left", "label_pages", "label_sw0", "label_sw1"];
            return VillianShopLayerSkin;
        })(egret.gui.Skin);
        game.VillianShopLayerSkin = VillianShopLayerSkin;
        egret.registerClass(VillianShopLayerSkin,"skins.game.VillianShopLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
