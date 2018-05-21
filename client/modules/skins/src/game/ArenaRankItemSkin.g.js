var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaRankItemSkin = (function (_super) {
            __extends(ArenaRankItemSkin, _super);
            function ArenaRankItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 124;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.label_name_i(), this.__8_i(), this.__10_i(), this.label_rank_i(), this.__11_i(), this.ico_rank_i(), this.grp_res0_i(), this.grp_res1_i(), this.ico_head_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaRankItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaRankItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [22, "ant_jiesuanjianli", 84, 18, 93]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__16_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "y"], [31, egret.gui.getScale9Grid("6,3,38,23"), "s9g_translucent3", 427, 93]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "y"], [123, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 427, 1]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "Lv.", "left", 0xFFC000, false, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [167, 50]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__6_i(), this.label_lvl_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 125, 89]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__12_i(), this.__13_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 282, 89]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__15_i(), this.__16_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["x", "y"], [84, 12]);
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_arena_1st", false, 10, 15]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new mo.gui.Label();
                this.label_combat = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "999999", "left", 0xFFC000, false, 40, 0]);
                return t;
            };
            p.label_lvl_i = function () {
                var t = new egret.gui.Label();
                this.label_lvl = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "50", "left", 16760832, false, 40, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 24, 4, 20, "玩家名字", "left", 0xFFFFFF, false, 167, 19]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new mo.gui.Label();
                this.label_rank = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [-170, 46, "1", "center", 0xDB7618, 53, 22]);
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "战斗力:", "left", 0xFFC000, false, 0, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                t.setStyle("size", 30);
                this.__s(t, ["x", "y"], [225, 50]);
                t.layout = this.__9_i();
                t.elementsContent = [this.label_title_i(), this.label_combat_i()];
                return t;
            };
            ArenaRankItemSkin._skinParts = ["label_name", "label_lvl", "label_title", "label_combat", "label_rank", "ico_rank", "grp_res0", "grp_res1", "ico_head"];
            return ArenaRankItemSkin;
        })(egret.gui.Skin);
        game.ArenaRankItemSkin = ArenaRankItemSkin;
        egret.registerClass(ArenaRankItemSkin,"skins.game.ArenaRankItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
