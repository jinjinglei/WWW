var skins;
(function (skins) {
    var game;
    (function (game) {
        var GainWayItemSkin = (function (_super) {
            __extends(GainWayItemSkin, _super);
            function GainWayItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.label_copyName_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GainWayItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GainWayItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold_box", 0, -5]);
                return t;
            };
            p.label_copyName_i = function () {
                var t = new mo.gui.Label();
                this.label_copyName = t;
                this.__s(t, ["size", "text", "verticalCenter", "x"], [28, "副本名称", 0, 70]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [55, "s9g_translucent", 405, 0, 0]);
                return t;
            };
            GainWayItemSkin._skinParts = ["label_copyName"];
            return GainWayItemSkin;
        })(egret.gui.Skin);
        game.GainWayItemSkin = GainWayItemSkin;
        egret.registerClass(GainWayItemSkin,"skins.game.GainWayItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
