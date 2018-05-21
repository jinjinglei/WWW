var skins;
(function (skins) {
    var game;
    (function (game) {
        var DefArenaRankSkin = (function (_super) {
            __extends(DefArenaRankSkin, _super);
            function DefArenaRankSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=DefArenaRankSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return DefArenaRankSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
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
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_jiesuanjianli", 0, 2]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "bg_forge";
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [406, 0, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 442, 46]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_wodepaiming", 29, 41]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["cacheAsBitmap", "touchChildren", "touchEnabled", "x", "y"], [false, false, false, 1, 448]);
                t.elementsContent = [this.label_myRank_i(), this.label_myTime_i(), this.label_noRank_i(), this.label_noFight_i(), this.__6_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__9_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Info_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [579, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_shouleipaihang", 440, 34]);
                t.elementsContent = [this.__4_i(), this.list_rank_i(), this.__7_i(), this.grp_hasRank_i()];
                return t;
            };
            p.grp_hasRank_i = function () {
                var t = new egret.gui.Group();
                this.grp_hasRank = t;
                this.__s(t, ["x", "y"], [29, 537]);
                t.elementsContent = [this.grp_res0_i(), this.grp_res1_i(), this.grp_res2_i(), this.__17_i()];
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 118, 0]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__8_i(), this.__9_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 225, 0]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__11_i(), this.__12_i()];
                return t;
            };
            p.grp_res2_i = function () {
                var t = new egret.gui.Group();
                this.grp_res2 = t;
                this.__s(t, ["height", "x", "y"], [30, 328, 0]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__15_i(), this.__16_i()];
                return t;
            };
            p.label_myRank_i = function () {
                var t = new mo.gui.Label();
                this.label_myRank = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 32, 24, "6300", "left", 16760832, false, 73, 144, 41]);
                return t;
            };
            p.label_myTime_i = function () {
                var t = new mo.gui.Label();
                this.label_myTime = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 20, "守擂最高时长：\n%s", "left", 0xFFC000, false, 150, 264, 29]);
                return t;
            };
            p.label_noFight_i = function () {
                var t = new mo.gui.Label();
                this.label_noFight = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "x", "y"], ["宋体", 24, "未上台守擂", "left", 0xFF0000, false, false, 274, 41]);
                return t;
            };
            p.label_noRank_i = function () {
                var t = new mo.gui.Label();
                this.label_noRank = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "visible", "x", "y"], ["宋体", 24, "未上榜", "left", 0xFF0000, false, false, 144, 41]);
                return t;
            };
            p.list_rank_i = function () {
                var t = new egret.gui.List();
                this.list_rank = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "touchEnabled", "width", "y"], [385, 0.5, skins.game.ArenaRankItemSkin, false, 419, 55]);
                t.layout = this.__5_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            DefArenaRankSkin._skinParts = ["list_rank", "label_myRank", "label_myTime", "label_noRank", "label_noFight", "grp_res0", "grp_res1", "grp_res2", "grp_hasRank", "container"];
            return DefArenaRankSkin;
        })(egret.gui.Skin);
        game.DefArenaRankSkin = DefArenaRankSkin;
        egret.registerClass(DefArenaRankSkin,"skins.game.DefArenaRankSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
