var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivitySignSkin = (function (_super) {
            __extends(ActivitySignSkin, _super);
            function ActivitySignSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.list_items_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivitySignSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivitySignSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_sign", 31, 2]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 169]);
                t.elementsContent = [this.__4_i(), this.label_month_i()];
                return t;
            };
            p.label_month_i = function () {
                var t = new egret.gui.Label();
                this.label_month = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [30, 1, "1", "center", 0xDEB00F, "middle", 36, 2, -3]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "scaleX", "scaleY", "width", "y"], [581, -2.1999999999999886, skins.game.SignItemSkin, 0.92, 0.92, 430, 199]);
                t.layout = this.__3_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalAlign", "horizontalGap", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", 0, 5, 6, 0]);
                return t;
            };
            ActivitySignSkin._skinParts = ["list_items", "label_month"];
            return ActivitySignSkin;
        })(egret.gui.Skin);
        game.ActivitySignSkin = ActivitySignSkin;
        egret.registerClass(ActivitySignSkin,"skins.game.ActivitySignSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
