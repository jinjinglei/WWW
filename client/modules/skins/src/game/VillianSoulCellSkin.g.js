var skins;
(function (skins) {
    var game;
    (function (game) {
        var VillianSoulCellSkin = (function (_super) {
            __extends(VillianSoulCellSkin, _super);
            function VillianSoulCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.currentState = "normal";
                this.elementsContent = [this.__3_i(), this.rect_touch_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("elite", [])
                ];
            }
            var d = __define,c=VillianSoulCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VillianSoulCellSkin._skinParts;
                }
            );
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "touch_rect", 0, 10, 10]);
                return t;
            };
            p.__3_i = function () {
                var t = new g_comp.Ico_Soul();
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            VillianSoulCellSkin._skinParts = ["rect_touch"];
            return VillianSoulCellSkin;
        })(egret.gui.Skin);
        game.VillianSoulCellSkin = VillianSoulCellSkin;
        egret.registerClass(VillianSoulCellSkin,"skins.game.VillianSoulCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
