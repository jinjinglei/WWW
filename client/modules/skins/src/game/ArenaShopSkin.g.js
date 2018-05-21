var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaShopSkin = (function (_super) {
            __extends(ArenaShopSkin, _super);
            function ArenaShopSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaShopSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaShopSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_hornor", 7, 3]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 558]);
                t.elementsContent = [this.__10_i(), this.__11_i(), this.label_sw_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "x", "y"], [556, 0, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 442, 10, 56]);
                return t;
            };
            p.__4_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__4_i(), this.__5_i(), this.__6_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "verticalGap"], [10, 10]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [619, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_arenaShop", 438, 107]);
                t.elementsContent = [this.__3_i(), this.list_items_i(), this.__12_i()];
                return t;
            };
            p.label_sw_i = function () {
                var t = new egret.gui.Label();
                this.label_sw = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "999", "right", 0xFFFFFF, 146, 59, 8]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [457, 0, skins.game.ArenaShopItemSkin, 400, 71]);
                t.layout = this.__9_i();
                t.dataProvider = this.__8_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [39, egret.gui.getScale9Grid("11,3,68,20"), "ico_aocao3", 212, 0, 0]);
                return t;
            };
            ArenaShopSkin._skinParts = ["list_items", "label_sw", "container"];
            return ArenaShopSkin;
        })(egret.gui.Skin);
        game.ArenaShopSkin = ArenaShopSkin;
        egret.registerClass(ArenaShopSkin,"skins.game.ArenaShopSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
