var skins;
(function (skins) {
    var game;
    (function (game) {
        var PVPRankSkin = (function (_super) {
            __extends(PVPRankSkin, _super);
            function PVPRankSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.btn_challengeLog_i(), this.ico_red_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=PVPRankSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PVPRankSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "horizontalCenter", "source", "touchEnabled", "width"], [260, 0, "ntc_split_line", false, 456]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_jiesuanjianli", 59, 624]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_wodepaiming", 59, 581]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "touchEnabled", "width", "x", "y"], [112, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", false, 426, 13, 20]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_cup", false, 285, 38]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "touchChildren", "touchEnabled", "y"], [-6.5, false, false, 510]);
                t.elementsContent = [this.__3_i(), this.label_myKillValue_i(), this.__4_i(), this.label_myRank_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "touchEnabled", "width", "x", "y"], [456, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", false, 442, 3, 39]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.btn_challengeLog_i = function () {
                var t = new egret.gui.Button();
                this.btn_challengeLog = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0, "btn_txt_g_tiaozhanjilu", skins.comp.Btn_3_1_Skin, 10, 673]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Info_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [682, 0, skins.comp.Dlg_Close_Text_Info_Skin, "tit_txt_g_killrank", 450, 26]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.list_rank_i(), this.grp_res0_i(), this.grp_res1_i()];
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 158, 595]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__7_i(), this.__8_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 283, 595]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__10_i(), this.__11_i()];
                return t;
            };
            p.ico_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 270, 667]);
                return t;
            };
            p.label_myKillValue_i = function () {
                var t = new egret.gui.Label();
                this.label_myKillValue = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 32, 24, "6300", "left", 16760832, false, 325, 42]);
                return t;
            };
            p.label_myRank_i = function () {
                var t = new egret.gui.Label();
                this.label_myRank = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 32, 24, "6300", "center", 16760832, false, 73, 156, 44]);
                return t;
            };
            p.list_rank_i = function () {
                var t = new egret.gui.List();
                this.list_rank = t;
                this.__s(t, ["height", "itemRendererSkinName", "touchEnabled", "width", "x", "y"], [442, skins.game.PVPRankItemSkin, false, 416, 16, 47]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            PVPRankSkin._skinParts = ["label_myKillValue", "label_myRank", "list_rank", "grp_res0", "grp_res1", "container", "btn_challengeLog", "ico_red"];
            return PVPRankSkin;
        })(egret.gui.Skin);
        game.PVPRankSkin = PVPRankSkin;
        egret.registerClass(PVPRankSkin,"skins.game.PVPRankSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
