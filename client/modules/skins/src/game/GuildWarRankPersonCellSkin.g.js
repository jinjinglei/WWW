var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarRankPersonCellSkin = (function (_super) {
            __extends(GuildWarRankPersonCellSkin, _super);
            function GuildWarRankPersonCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 112;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.label_killValue_i(), this.label_guild_i(), this.label_rank_i(), this.ico_rank_i(), this.__19_i(), this.label_name_i(), this.ico_head_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarRankPersonCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarRankPersonCellSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__15_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__18_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [17, 73]);
                t.elementsContent = [this.__6_i(), this.grp_res0_i(), this.grp_res1_i(), this.grp_res2_i(), this.grp_res3_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("49,33,296,43"), "panel_arena_item_bg", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 20, "个人点数", "left", 0xFFFFFF, 303, 13]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_jiesuanjianlis", 0, 2]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__9_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 70, 0]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__8_i(), this.__9_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 148, 0]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__11_i(), this.__12_i()];
                return t;
            };
            p.grp_res2_i = function () {
                var t = new egret.gui.Group();
                this.grp_res2 = t;
                this.__s(t, ["height", "x", "y"], [30, 226, 0]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__14_i(), this.__15_i()];
                return t;
            };
            p.grp_res3_i = function () {
                var t = new egret.gui.Group();
                this.grp_res3 = t;
                this.__s(t, ["height", "x", "y"], [30, 303, 0]);
                t.layout = this.__16_i();
                t.elementsContent = [this.__17_i(), this.__18_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.75, 0.75, 84, 11]);
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
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "[行会六个字啊]", 0x9900CD, 147, 42]);
                return t;
            };
            p.label_killValue_i = function () {
                var t = new egret.gui.Label();
                this.label_killValue = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 20, "5500", "left", 16760832, 322, 41]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 24, 4, 18, "玩家名字六字", "left", 0xFFFFFF, false, 147, 13]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new mo.gui.Label();
                this.label_rank = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [-167, 46, "7", "center", 0xDB7618, 55, 9]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            GuildWarRankPersonCellSkin._skinParts = ["label_killValue", "label_guild", "label_rank", "ico_rank", "grp_res0", "grp_res1", "grp_res2", "grp_res3", "label_name", "ico_head"];
            return GuildWarRankPersonCellSkin;
        })(egret.gui.Skin);
        game.GuildWarRankPersonCellSkin = GuildWarRankPersonCellSkin;
        egret.registerClass(GuildWarRankPersonCellSkin,"skins.game.GuildWarRankPersonCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
