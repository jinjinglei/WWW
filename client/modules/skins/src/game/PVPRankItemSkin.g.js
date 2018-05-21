var skins;
(function (skins) {
    var game;
    (function (game) {
        var PVPRankItemSkin = (function (_super) {
            __extends(PVPRankItemSkin, _super);
            function PVPRankItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 140;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.__8_i(), this.label_name_i(), this.label_guild_i(), this.__11_i(), this.__14_i(), this.label_rank_i(), this.ico_rank_i(), this.__15_i(), this.grp_res0_i(), this.grp_res1_i(), this.ico_head_i(), this.btn_challenge_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=PVPRankItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PVPRankItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [152, 71]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__9_i(), this.label_lvl_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "战斗力:", "left", 0xFFC000, false, 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [217, 71]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__12_i(), this.label_combat_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [22, "ant_jiesuanjianli", 84, 5, 102]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__17_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__20_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "y"], [26, egret.gui.getScale9Grid("6,3,38,23"), "s9g_translucent3", 406, 98]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "y"], [140, egret.gui.getScale9Grid("49,33,296,43"), "panel_arena_item_bg", 416, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_cup", 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [3, "middle"]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [319, 10]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__6_i(), this.label_killValue_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "Lv.", "left", 0xFFC000, false, 0, 0]);
                return t;
            };
            p.btn_challenge_i = function () {
                var t = new egret.gui.Button();
                this.btn_challenge = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [153, "btn_txt_g_tiaozhan", skins.comp.Btn_3_11_Skin, 20, 97]);
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 100, 99]);
                t.layout = this.__18_i();
                t.elementsContent = [this.__16_i(), this.__17_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 204, 99]);
                t.layout = this.__21_i();
                t.elementsContent = [this.__19_i(), this.__20_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["x", "y"], [76, 14]);
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["source", "x", "y"], ["ico_arena_1st", 5, 17]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new mo.gui.Label();
                this.label_combat = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "999999", "left", 0xFFC000, false, 40, 0]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "[行会六个字啊]", 0x9900CD, 149, 40]);
                return t;
            };
            p.label_killValue_i = function () {
                var t = new egret.gui.Label();
                this.label_killValue = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 20, "5500", "left", 16760832, 29, 4]);
                return t;
            };
            p.label_lvl_i = function () {
                var t = new egret.gui.Label();
                this.label_lvl = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "150", "left", 16760832, false, 40, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 4, 18, "玩家名字六字字字字", "left", 0xFFFFFF, false, 152, 16]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new mo.gui.Label();
                this.label_rank = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [-167, 46, "7", "center", 0xDB7618, 55, 23]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            PVPRankItemSkin._skinParts = ["label_killValue", "label_name", "label_guild", "label_lvl", "label_combat", "label_rank", "ico_rank", "grp_res0", "grp_res1", "ico_head", "btn_challenge"];
            return PVPRankItemSkin;
        })(egret.gui.Skin);
        game.PVPRankItemSkin = PVPRankItemSkin;
        egret.registerClass(PVPRankItemSkin,"skins.game.PVPRankItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
