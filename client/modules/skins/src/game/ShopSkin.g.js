var skins;
(function (skins) {
    var game;
    (function (game) {
        var ShopSkin = (function (_super) {
            __extends(ShopSkin, _super);
            function ShopSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.list_items_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ShopSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ShopSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [527, 0, skins.game.ShopItemSkin, 390, 174]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [542, 0.5, egret.gui.getScale9Grid("7,7,386,253"), "s9g_gold_edge", 399, 167]);
                return t;
            };
            ShopSkin._skinParts = ["list_items"];
            return ShopSkin;
        })(egret.gui.Skin);
        game.ShopSkin = ShopSkin;
        egret.registerClass(ShopSkin,"skins.game.ShopSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
