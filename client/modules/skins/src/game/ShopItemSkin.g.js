var skins;
(function (skins) {
    var game;
    (function (game) {
        var ShopItemSkin = (function (_super) {
            __extends(ShopItemSkin, _super);
            function ShopItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.ico_item_i(), this.img_currency_i(), this.grp_discount_i(), this.label_yb_i(), this.btn_buy_i(), this.__6_i(), this.ico_sellout_i(), this.label_part_i(), this.img_red_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ShopItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ShopItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "y"], [0, "ntc_line", 35, 3]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [67, 0]);
                t.elementsContent = [this.ico_new_i(), this.label_vipCanBuy_i()];
                return t;
            };
            p.btn_buy_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [36, "btn_txt_g_buy", skins.comp.Btn_3_12_Skin, 101, 10, 171]);
                return t;
            };
            p.grp_discount_i = function () {
                var t = new egret.gui.Group();
                this.grp_discount = t;
                this.__s(t, ["width", "x", "y"], [70, 47, 127]);
                t.elementsContent = [this.label_yb0_i(), this.__5_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [25, 29]);
                return t;
            };
            p.ico_new_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_new = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ui_3_discount", false, -65, 2]);
                return t;
            };
            p.ico_sellout_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_sellout = t;
                this.__s(t, ["height", "source", "x", "y"], [32, "ntc_soldout", 22, 172]);
                return t;
            };
            p.img_currency_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_currency = t;
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 10, 146]);
                return t;
            };
            p.img_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [28, "ico_red", 27, 85, 17]);
                return t;
            };
            p.label_part_i = function () {
                var t = new mo.gui.Label();
                this.label_part = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "visible", "width", "y"], [0, 16, "部位：%s", "center", false, 100, 122]);
                return t;
            };
            p.label_vipCanBuy_i = function () {
                var t = new egret.gui.Label();
                this.label_vipCanBuy = t;
                this.__s(t, ["rotation", "size", "stroke", "strokeColor", "text", "textColor", "width", "x", "y"], [45, 18, 1, 0, "V12可买", 16777215, 63, -67, 5]);
                return t;
            };
            p.label_yb0_i = function () {
                var t = new egret.gui.Label();
                this.label_yb0 = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "999", "center", 7499361, 70, 0, 0]);
                return t;
            };
            p.label_yb_i = function () {
                var t = new mo.gui.Label();
                this.label_yb = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "99", "center", 14525952, 82, 34, 146]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "panel_shop_item";
                return t;
            };
            ShopItemSkin._skinParts = ["ico_item", "img_currency", "label_yb0", "grp_discount", "label_yb", "btn_buy", "ico_new", "label_vipCanBuy", "ico_sellout", "label_part", "img_red"];
            return ShopItemSkin;
        })(egret.gui.Skin);
        game.ShopItemSkin = ShopItemSkin;
        egret.registerClass(ShopItemSkin,"skins.game.ShopItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
