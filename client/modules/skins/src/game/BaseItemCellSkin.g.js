var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseItemCellSkin = (function (_super) {
            __extends(BaseItemCellSkin, _super);
            function BaseItemCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [94, 74]);
                this.elementsContent = [this.__5_i(), this.rect_touch_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseItemCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseItemCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 0]);
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
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [94, "touch_rect", 74, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            BaseItemCellSkin._skinParts = ["ico_item", "rect_touch"];
            return BaseItemCellSkin;
        })(egret.gui.Skin);
        game.BaseItemCellSkin = BaseItemCellSkin;
        egret.registerClass(BaseItemCellSkin,"skins.game.BaseItemCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
