var skins;
(function (skins) {
    var game;
    (function (game) {
        var MedalCellSkin = (function (_super) {
            __extends(MedalCellSkin, _super);
            function MedalCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [115, 112]);
                this.elementsContent = [this.__4_i(), this.__6_i(), this.label_name_i(), this.rect_touch_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MedalCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MedalCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 6]);
                t.layout = this.__5_i();
                t.elementsContent = [this.ico_item_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [219, -113]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["horizontalCenter", "size", "textAlign", "width", "y"], [0, 20, "center", 120, 86]);
                return t;
            };
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["bottom", "height", "source", "width", "x"], [0, 115, "touch_rect", 112, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xunzhangdigwwf", 0, 0]);
                return t;
            };
            MedalCellSkin._skinParts = ["ico_item", "label_name", "rect_touch"];
            return MedalCellSkin;
        })(egret.gui.Skin);
        game.MedalCellSkin = MedalCellSkin;
        egret.registerClass(MedalCellSkin,"skins.game.MedalCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
