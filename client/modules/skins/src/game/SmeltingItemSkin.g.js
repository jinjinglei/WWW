var skins;
(function (skins) {
    var game;
    (function (game) {
        var SmeltingItemSkin = (function (_super) {
            __extends(SmeltingItemSkin, _super);
            function SmeltingItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [100, 86]);
                this.elementsContent = [this.grp_add_i(), this.ico_item_i(), this.efx_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SmeltingItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SmeltingItemSkin._skinParts;
                }
            );
            p.efx_i = function () {
                var t = new g_comp.UIEffect();
                this.efx = t;
                this.__s(t, ["effectId", "performanceControl", "x", "y"], [15, false, 43, 40]);
                return t;
            };
            p.grp_add_i = function () {
                var t = new egret.gui.Group();
                this.grp_add = t;
                this.__s(t, ["visible", "x", "y"], [false, 7, 3]);
                t.elementsContent = [this.img_add_i(), this.__4_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0.5, -10]);
                return t;
            };
            p.img_add_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_add = t;
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_plus_3", false, 14, 17]);
                return t;
            };
            SmeltingItemSkin._skinParts = ["img_add", "grp_add", "ico_item", "efx"];
            return SmeltingItemSkin;
        })(egret.gui.Skin);
        game.SmeltingItemSkin = SmeltingItemSkin;
        egret.registerClass(SmeltingItemSkin,"skins.game.SmeltingItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
