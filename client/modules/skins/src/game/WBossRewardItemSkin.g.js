var skins;
(function (skins) {
    var game;
    (function (game) {
        var WBossRewardItemSkin = (function (_super) {
            __extends(WBossRewardItemSkin, _super);
            function WBossRewardItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [156, 451]);
                this.elementsContent = [this.__4_i(), this.label_index_i(), this.grp_items_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WBossRewardItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WBossRewardItemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "panel_wing_prop_bg", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 75, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 150, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item3", true, 225, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item4", true, 300, 0]);
                return t;
            };
            p.grp_items_i = function () {
                var t = new egret.gui.Group();
                this.grp_items = t;
                this.__s(t, ["width", "x", "y"], [449, 1, 41]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i()];
                return t;
            };
            p.label_index_i = function () {
                var t = new mo.gui.Label();
                this.label_index = t;
                this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [24, 18, "第%s名输出奖励：", 0xF5F7FA, 9, 10]);
                return t;
            };
            p.__10_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item5", true, 376, 0]);
                return t;
            };
            WBossRewardItemSkin._skinParts = ["label_index", "grp_items"];
            return WBossRewardItemSkin;
        })(egret.gui.Skin);
        game.WBossRewardItemSkin = WBossRewardItemSkin;
        egret.registerClass(WBossRewardItemSkin,"skins.game.WBossRewardItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
