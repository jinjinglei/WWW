var skins;
(function (skins) {
    var game;
    (function (game) {
        var WorldBossRewardItemSkin = (function (_super) {
            __extends(WorldBossRewardItemSkin, _super);
            function WorldBossRewardItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [75, 428]);
                this.elementsContent = [this.__3_i(), this.label_index_i(), this.item0_i(), this.item1_i(), this.item2_i(), this.item3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WorldBossRewardItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WorldBossRewardItemSkin._skinParts;
                }
            );
            p.item0_i = function () {
                var t = new g_comp.Ico_Item();
                this.item0 = t;
                this.__s(t, ["x", "y"], [109, 1]);
                return t;
            };
            p.item1_i = function () {
                var t = new g_comp.Ico_Item();
                this.item1 = t;
                this.__s(t, ["x", "y"], [192, 1]);
                return t;
            };
            p.item2_i = function () {
                var t = new g_comp.Ico_Item();
                this.item2 = t;
                this.__s(t, ["x", "y"], [274, 1]);
                return t;
            };
            p.item3_i = function () {
                var t = new g_comp.Ico_Item();
                this.item3 = t;
                this.__s(t, ["x", "y"], [355, 1]);
                return t;
            };
            p.label_index_i = function () {
                var t = new egret.gui.Label();
                this.label_index = t;
                this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [24, 18, "第6-10名：", 0xF5F7FA, 94, 3, 26]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [75, "panel_wing_prop_bg", 430, -1, 0]);
                return t;
            };
            WorldBossRewardItemSkin._skinParts = ["label_index", "item0", "item1", "item2", "item3"];
            return WorldBossRewardItemSkin;
        })(egret.gui.Skin);
        game.WorldBossRewardItemSkin = WorldBossRewardItemSkin;
        egret.registerClass(WorldBossRewardItemSkin,"skins.game.WorldBossRewardItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
