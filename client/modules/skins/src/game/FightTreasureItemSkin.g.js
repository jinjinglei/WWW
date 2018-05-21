var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureItemSkin = (function (_super) {
            __extends(FightTreasureItemSkin, _super);
            function FightTreasureItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [155, 98]);
                this.elementsContent = [this.__4_i(), this.ico_item_i(), this.label_time_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightTreasureItemSkin._skinParts;
                }
            );
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [0.5, -22.5, 10, 10]);
                return t;
            };
            p.label_time_i = function () {
                var t = new mo.gui.Label();
                this.label_time = t;
                this.__s(t, ["height", "right", "size", "textAlign", "textColor", "verticalCenter", "width"], [32, 2, 22, "center", 0xF5B03A, 52.5, 94]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "bottom", "left", "right", "scale9Grid", "source", "top"], [false, 1, 0, -1, egret.gui.getScale9Grid("12,19,75,117"), "ico_treasure_itembg", 0]);
                return t;
            };
            FightTreasureItemSkin._skinParts = ["ico_item", "label_time"];
            return FightTreasureItemSkin;
        })(egret.gui.Skin);
        game.FightTreasureItemSkin = FightTreasureItemSkin;
        egret.registerClass(FightTreasureItemSkin,"skins.game.FightTreasureItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
