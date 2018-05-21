var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarRankGuildCellSkin = (function (_super) {
            __extends(GuildWarRankGuildCellSkin, _super);
            function GuildWarRankGuildCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [112, 419]);
                this.elementsContent = [this.__4_i(), this.__7_i(), this.label_guild_i(), this.label_rank_i(), this.ico_rank_i(), this.__21_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarRankGuildCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarRankGuildCellSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__14_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__17_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__20_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [17, 73]);
                t.elementsContent = [this.__8_i(), this.grp_res0_i(), this.grp_res1_i(), this.grp_res2_i(), this.grp_res3_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("49,33,296,43"), "panel_arena_item_bg", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 20, "行会点数", "left", 0xFFFFFF, 29, 4]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [284, 16]);
                t.layout = this.__6_i();
                t.elementsContent = [this.__5_i(), this.label_killValue_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_jiesuanjianlis", 0, 2]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 70, 0]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__10_i(), this.__11_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 148, 0]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__13_i(), this.__14_i()];
                return t;
            };
            p.grp_res2_i = function () {
                var t = new egret.gui.Group();
                this.grp_res2 = t;
                this.__s(t, ["height", "x", "y"], [30, 226, 0]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__16_i(), this.__17_i()];
                return t;
            };
            p.grp_res3_i = function () {
                var t = new egret.gui.Group();
                this.grp_res3 = t;
                this.__s(t, ["height", "x", "y"], [30, 303, 0]);
                t.layout = this.__18_i();
                t.elementsContent = [this.__19_i(), this.__20_i()];
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["source", "x", "y"], ["ico_arena_1st", 5, 3]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "[行会六个字啊]", 0x9900CD, 87, 24]);
                return t;
            };
            p.label_killValue_i = function () {
                var t = new egret.gui.Label();
                this.label_killValue = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 20, "5500", "left", 0xFFC000, 39, 14]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new mo.gui.Label();
                this.label_rank = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [-167, 46, "7", "center", 0xDB7618, 55, 9]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            GuildWarRankGuildCellSkin._skinParts = ["label_killValue", "label_guild", "label_rank", "ico_rank", "grp_res0", "grp_res1", "grp_res2", "grp_res3"];
            return GuildWarRankGuildCellSkin;
        })(egret.gui.Skin);
        game.GuildWarRankGuildCellSkin = GuildWarRankGuildCellSkin;
        egret.registerClass(GuildWarRankGuildCellSkin,"skins.game.GuildWarRankGuildCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
