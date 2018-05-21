var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityAppMysteryExchangeDlgSkin = (function (_super) {
            __extends(ActivityAppMysteryExchangeDlgSkin, _super);
            function ActivityAppMysteryExchangeDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.__4_i(), this.list_items_i(), this.label_score_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityAppMysteryExchangeDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityAppMysteryExchangeDlgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "btn_txt_g_duihuansg", 35]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                t.horizontalGap = 12;
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 392, 66]);
                return t;
            };
            p.label_score_i = function () {
                var t = new mo.gui.Label();
                this.label_score = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "当前拥有积分：%s", 31, 113]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [549, 0, skins.game.BaseItemCellSkin, 358, 153]);
                t.layout = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_tongyongdiban", 0]);
                return t;
            };
            ActivityAppMysteryExchangeDlgSkin._skinParts = ["btn_close", "list_items", "label_score"];
            return ActivityAppMysteryExchangeDlgSkin;
        })(egret.gui.Skin);
        game.ActivityAppMysteryExchangeDlgSkin = ActivityAppMysteryExchangeDlgSkin;
        egret.registerClass(ActivityAppMysteryExchangeDlgSkin,"skins.game.ActivityAppMysteryExchangeDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
