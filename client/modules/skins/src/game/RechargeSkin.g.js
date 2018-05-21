var skins;
(function (skins) {
    var game;
    (function (game) {
        var RechargeSkin = (function (_super) {
            __extends(RechargeSkin, _super);
            function RechargeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.list_items_i(), this.__7_i(), this.__15_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RechargeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RechargeSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["txt_formorevipcharge_2", 117, 38]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 183, 41]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["txt_formorevipcharge_1", 117, 8]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 173, 11]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [49, 156]);
                t.elementsContent = [this.__8_i(), this.__9_i(), this.label_vip_i(), this.__10_i(), this.bar_recharge_i(), this.btn_lookVip_i(), this.__11_i(), this.__12_i(), this.label_nextVip_i(), this.__13_i(), this.__14_i(), this.label_nextRecharge_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_bg_vip", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "y"], [534, 0, egret.gui.getScale9Grid("50,120,306,15"), "panel_recharge_bg_3", 150]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "touchEnabled", "y"], [-4, "ntc_tit_rechrage", false, 62]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [-7, "tit_txt_recharge", 90]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_recharge_bg_0", 191, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_recharge_bg", 0, 15]);
                return t;
            };
            p.bar_recharge_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_recharge = t;
                this.__s(t, ["maximum", "skinName", "value", "x", "y"], [100, skins.comp.Bar_Recharge_Skin, 20, 21, 67]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 427, 115]);
                return t;
            };
            p.btn_lookVip_i = function () {
                var t = new egret.gui.Button();
                this.btn_lookVip = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["ico_vip_tequan", skins.comp.Btn_vip_Skin, 315, 0]);
                return t;
            };
            p.label_nextRecharge_i = function () {
                var t = new mo.gui.Label();
                this.label_nextRecharge = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 20, "000000", 0xF4C244, 207, 10]);
                return t;
            };
            p.label_nextVip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_nextVip = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "0", 223, 40]);
                return t;
            };
            p.label_vip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vip = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "0", 56, 21]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [411, -1.5, skins.game.RechargeItemSkin, 390, 268]);
                t.layout = this.__6_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_0", 12, 21]);
                return t;
            };
            RechargeSkin._skinParts = ["btn_close", "list_items", "label_vip", "bar_recharge", "btn_lookVip", "label_nextVip", "label_nextRecharge"];
            return RechargeSkin;
        })(egret.gui.Skin);
        game.RechargeSkin = RechargeSkin;
        egret.registerClass(RechargeSkin,"skins.game.RechargeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
