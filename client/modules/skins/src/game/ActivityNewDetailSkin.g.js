var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewDetailSkin = (function (_super) {
            __extends(ActivityNewDetailSkin, _super);
            function ActivityNewDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__4_i(), this.label_red_i(), this.list_rewards_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewDetailSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "requestedColumnCount", "verticalGap"], [12, 4, 18]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 420, 133]);
                return t;
            };
            p.label_red_i = function () {
                var t = new egret.gui.Label();
                this.label_red = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "x", "y"], [-46, 18, "翻牌后有机会获得以下物品:", "left", 10, 208]);
                return t;
            };
            p.list_rewards_i = function () {
                var t = new egret.gui.List();
                this.list_rewards = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "maxHeight", "y"], [0, skins.game.BaseItemCellSkin, 360, 245]);
                t.layout = this.__5_i();
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [500, 0, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", -7, 413, 10, 10]);
                return t;
            };
            ActivityNewDetailSkin._skinParts = ["label_red", "list_rewards", "btn_close"];
            return ActivityNewDetailSkin;
        })(egret.gui.Skin);
        game.ActivityNewDetailSkin = ActivityNewDetailSkin;
        egret.registerClass(ActivityNewDetailSkin,"skins.game.ActivityNewDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
