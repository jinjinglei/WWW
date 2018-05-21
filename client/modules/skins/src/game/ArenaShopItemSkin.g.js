var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaShopItemSkin = (function (_super) {
            __extends(ArenaShopItemSkin, _super);
            function ArenaShopItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__4_i(), this.ico_item_i(), this.__5_i(), this.label_sw_i(), this.btn_buy_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaShopItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaShopItemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [33, 0, egret.gui.getScale9Grid("6,3,38,23"), "s9g_translucent3", 112, 123]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_hornor", 15, 127]);
                return t;
            };
            p.btn_buy_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "width", "y"], [1, "btn_txt_g_buy", skins.comp.Btn_3_12_Skin, 122, 165]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 16]);
                return t;
            };
            p.label_sw_i = function () {
                var t = new egret.gui.Label();
                this.label_sw = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "999", "center", 14525952, 59, 52, 128]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "panel_shop_item";
                return t;
            };
            ArenaShopItemSkin._skinParts = ["ico_item", "label_sw", "btn_buy"];
            return ArenaShopItemSkin;
        })(egret.gui.Skin);
        game.ArenaShopItemSkin = ArenaShopItemSkin;
        egret.registerClass(ArenaShopItemSkin,"skins.game.ArenaShopItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
