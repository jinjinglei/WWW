var skins;
(function (skins) {
    var game;
    (function (game) {
        var ShopBuyEquipSkin = (function (_super) {
            __extends(ShopBuyEquipSkin, _super);
            function ShopBuyEquipSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.list_items_i(), this.btn_buyAll_i(), this.btn_refresh_i(), this.label_nextRefreshTime_i(), this.grp_refresh_cost_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ShopBuyEquipSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ShopBuyEquipSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
                return t;
            };
            p.btn_buyAll_i = function () {
                var t = new egret.gui.Button();
                this.btn_buyAll = t;
                this.__s(t, ["icon", "label", "skinName", "width", "x", "y"], ["btn_txt_g_buyall", "按钮", skins.comp.Btn_3_6_Skin, 156, 63, 636]);
                return t;
            };
            p.btn_refresh_i = function () {
                var t = new egret.gui.Button();
                this.btn_refresh = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [45, "btn_txt_g_refresh", "按钮", skins.comp.Btn_3_6_Skin, 138, 273, 638]);
                return t;
            };
            p.grp_refresh_cost_i = function () {
                var t = new egret.gui.Group();
                this.grp_refresh_cost = t;
                this.__s(t, ["height", "width", "x", "y"], [30, 130, 270, 682]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__5_i(), this.__6_i()];
                return t;
            };
            p.label_nextRefreshTime_i = function () {
                var t = new mo.gui.Label();
                this.label_nextRefreshTime = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "y"], [-6.5, 18, 1, 0, "下批商品刷新时间：05:00", "center", 0xF8C00A, 616]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [437, 0, skins.game.ShopItemSkin, 390, 174]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [542, 0.5, egret.gui.getScale9Grid("7,7,386,253"), "s9g_gold_edge", 399, 167]);
                return t;
            };
            ShopBuyEquipSkin._skinParts = ["list_items", "btn_buyAll", "btn_refresh", "label_nextRefreshTime", "grp_refresh_cost"];
            return ShopBuyEquipSkin;
        })(egret.gui.Skin);
        game.ShopBuyEquipSkin = ShopBuyEquipSkin;
        egret.registerClass(ShopBuyEquipSkin,"skins.game.ShopBuyEquipSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
