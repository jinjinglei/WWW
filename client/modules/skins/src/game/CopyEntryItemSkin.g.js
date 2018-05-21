var skins;
(function (skins) {
    var game;
    (function (game) {
        var CopyEntryItemSkin = (function (_super) {
            __extends(CopyEntryItemSkin, _super);
            function CopyEntryItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 422;
                this.elementsContent = [this.__4_i(), this.img_icon_i(), this.img_shadow_i(), this.img_title_i(), this.rect_mask_i(), this.label_openLvl_i(), this.label_rest_i(), this.label_loot_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CopyEntryItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CopyEntryItemSkin._skinParts;
                }
            );
            p.img_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_icon = t;
                this.__s(t, ["source", "x", "y"], ["ico_maoxianf", 17, 18]);
                return t;
            };
            p.img_shadow_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_shadow = t;
                this.__s(t, ["source", "x", "y"], ["ico_wenziditug", 156, 20]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["source", "x", "y"], ["ico_lianyufubeng", 141, 32]);
                return t;
            };
            p.label_loot_i = function () {
                var t = new mo.gui.Label();
                this.label_loot = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [50, 18, "副本主要掉落:\n%s", "left", 0xF1D430, "middle", 181, 25, 82]);
                return t;
            };
            p.label_openLvl_i = function () {
                var t = new egret.gui.Label();
                this.label_openLvl = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "%s级开启", 0xF1D430, 233, 88]);
                return t;
            };
            p.label_rest_i = function () {
                var t = new egret.gui.Label();
                this.label_rest = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "visible", "width", "x", "y"], [18, "剩余次数", "center", 0xF1D430, "middle", false, 250, 154, 89]);
                return t;
            };
            p.rect_mask_i = function () {
                var t = new egret.gui.Rect();
                this.rect_mask = t;
                this.__s(t, ["alpha", "fillColor", "height", "width", "x", "y"], [0.6, 0x000000, 133, 406, 8, 8]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source"], [0, "icon_fubengtongyongdi"]);
                return t;
            };
            CopyEntryItemSkin._skinParts = ["img_icon", "img_shadow", "img_title", "rect_mask", "label_openLvl", "label_rest", "label_loot"];
            return CopyEntryItemSkin;
        })(egret.gui.Skin);
        game.CopyEntryItemSkin = CopyEntryItemSkin;
        egret.registerClass(CopyEntryItemSkin,"skins.game.CopyEntryItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
