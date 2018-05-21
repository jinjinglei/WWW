var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaRankSkin = (function (_super) {
            __extends(ArenaRankSkin, _super);
            function ArenaRankSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.container_i(), this.grp_res0_i(), this.grp_res1_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaRankSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaRankSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
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
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_jiesuanjianli", 29, 84]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_wodepaiming", 29, 41]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["cacheAsBitmap", "touchChildren", "touchEnabled", "x", "y"], [false, false, false, 1, 441]);
                t.elementsContent = [this.label_myRank_i(), this.__5_i(), this.__6_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Info_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [579, 0, skins.comp.Dlg_Close_Text_Info_Skin, "tit_txt_g_arenaRank", 440, 34]);
                t.elementsContent = [this.__4_i(), this.__7_i(), this.list_rank_i()];
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 167, 557]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 315, 557]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__12_i(), this.__13_i()];
                return t;
            };
            p.label_myRank_i = function () {
                var t = new mo.gui.Label();
                this.label_myRank = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 32, 24, "6300", "left", 16760832, false, 73, 144, 41]);
                return t;
            };
            p.list_rank_i = function () {
                var t = new egret.gui.List();
                this.list_rank = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "touchEnabled", "width", "y"], [385, 0.5, skins.game.ArenaRankItemSkin, false, 419, 55]);
                t.layout = this.__8_i();
                return t;
            };
            p.__10_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            ArenaRankSkin._skinParts = ["label_myRank", "list_rank", "container", "grp_res0", "grp_res1"];
            return ArenaRankSkin;
        })(egret.gui.Skin);
        game.ArenaRankSkin = ArenaRankSkin;
        egret.registerClass(ArenaRankSkin,"skins.game.ArenaRankSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
