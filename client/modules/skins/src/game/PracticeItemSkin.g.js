var skins;
(function (skins) {
    var game;
    (function (game) {
        var PracticeItemSkin = (function (_super) {
            __extends(PracticeItemSkin, _super);
            function PracticeItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 422;
                this.elementsContent = [this.__4_i(), this.img_icon_i(), this.img_shadow_i(), this.img_title_i(), this.rect_mask_i(), this.label_openLvl_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=PracticeItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PracticeItemSkin._skinParts;
                }
            );
            p.img_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_icon = t;
                this.__s(t, ["source", "x", "y"], ["ico_xinfatubiaos", 30, 38]);
                return t;
            };
            p.img_shadow_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_shadow = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_wenziditug", false, 156, 20]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["source", "x", "y"], ["ico_xinfashengongs", 152, 38]);
                return t;
            };
            p.label_openLvl_i = function () {
                var t = new egret.gui.Label();
                this.label_openLvl = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [61, 18, "%s级开启", 0xF1D430, 88]);
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
            PracticeItemSkin._skinParts = ["img_icon", "img_shadow", "img_title", "rect_mask", "label_openLvl"];
            return PracticeItemSkin;
        })(egret.gui.Skin);
        game.PracticeItemSkin = PracticeItemSkin;
        egret.registerClass(PracticeItemSkin,"skins.game.PracticeItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
