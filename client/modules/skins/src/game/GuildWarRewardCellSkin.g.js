var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarRewardCellSkin = (function (_super) {
            __extends(GuildWarRewardCellSkin, _super);
            function GuildWarRewardCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.label_index_i(), this.grp_items_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarRewardCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarRewardCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 165, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item3", true, 246, 0]);
                return t;
            };
            p.grp_items_i = function () {
                var t = new egret.gui.Group();
                this.grp_items = t;
                this.__s(t, ["verticalCenter", "x"], [0, 62]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.label_index_i = function () {
                var t = new mo.gui.Label();
                this.label_index = t;
                this.__s(t, ["size", "text", "textColor", "verticalCenter", "width", "x"], [18, "第1名", 0xF5F7FA, 0, 26, 21]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_dituxisl";
                return t;
            };
            GuildWarRewardCellSkin._skinParts = ["label_index", "grp_items"];
            return GuildWarRewardCellSkin;
        })(egret.gui.Skin);
        game.GuildWarRewardCellSkin = GuildWarRewardCellSkin;
        egret.registerClass(GuildWarRewardCellSkin,"skins.game.GuildWarRewardCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
