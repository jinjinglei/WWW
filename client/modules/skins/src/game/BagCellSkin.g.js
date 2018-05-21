var skins;
(function (skins) {
    var game;
    (function (game) {
        var BagCellSkin = (function (_super) {
            __extends(BagCellSkin, _super);
            function BagCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [100, 86]);
                this.elementsContent = [this.__5_i(), this.rect_touch_i(), this.ico_lock_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BagCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BagCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 6]);
                t.layout = this.__4_i();
                t.elementsContent = [this.ico_item_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [219, -113]);
                return t;
            };
            p.ico_lock_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_lock = t;
                this.__s(t, ["autoScale", "source", "visible", "x", "y"], [false, "ico_item_lock", false, 12, 49]);
                return t;
            };
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [100, "touch_rect", 86, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            BagCellSkin._skinParts = ["ico_item", "rect_touch", "ico_lock"];
            return BagCellSkin;
        })(egret.gui.Skin);
        game.BagCellSkin = BagCellSkin;
        egret.registerClass(BagCellSkin,"skins.game.BagCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
