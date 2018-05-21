var skins;
(function (skins) {
    var game;
    (function (game) {
        var MedalSkin = (function (_super) {
            __extends(MedalSkin, _super);
            function MedalSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.tab_medal_i(), this.btn_help_i(), this.btn_close_i(), this.grp_combat_i(), this.grp_print_i(), this.grp_medal_i(), this.grp_achivement_i(), this.__22_i(), this.__23_i(), this.__24_i(), this.__25_i(), this.img_printRed_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MedalSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MedalSkin._skinParts;
                }
            );
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 18, "主战印将显示在角色头顶，点击可更换", 0xF5A938, 20, 127]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["height", "lineSpacing", "name", "size", "textAlign", "width", "x", "y"], [150, 15, "prop_part0", 20, "left", 180, 0, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["height", "lineSpacing", "name", "size", "textAlign", "width", "x", "y"], [150, 15, "prop_part1", 20, "left", 180, 200, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 20;
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zongshuxinjic", 68, 231]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zhuzhanyinsg", 169, 7]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_fenggexianlsg", 11, 182]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [3.5, "ico_shuomings", 321.5]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "requestedColumnCount", "requestedRowCount", "verticalGap"], [15, 3, 5, 15]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "source", "x"], [-37, "ico_gwgfd", -14]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.6, 0, "pre_轩辕战印-战印加成", 0, false]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.5, 0, "pre_轩辕战印-查看战印", 0, false]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.7, 0, "pre_轩辕战印-勋章库", 0, false]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.6, 0, "pre_轩辕战印-更换战印", 0, false]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_xuanyuanzanying", 18]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "tab_txt_xuanyuanzanli";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "tab_txt_zanyingdi";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "tab_txt_xunzhangkui";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "tab_txt_chenjiuxunznang";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 1]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 1, 1]);
                return t;
            };
            p.grp_achivement_i = function () {
                var t = new egret.gui.Group();
                this.grp_achivement = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "x", "y"], [600, 0, false, 400, 10, 160]);
                t.elementsContent = [this.list_achivement_i()];
                return t;
            };
            p.grp_combat_i = function () {
                var t = new egret.gui.Group();
                this.grp_combat = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [600, 0, 400, 150]);
                t.elementsContent = [this.__12_i(), this.grp_props_i(), this.__16_i(), this.img_printBg_i(), this.__17_i(), this.__18_i(), this.ico_medalItem_i(), this.img_onNoPrint_i()];
                return t;
            };
            p.grp_medal_i = function () {
                var t = new egret.gui.Group();
                this.grp_medal = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "y"], [600, 0, false, 400, 150]);
                t.elementsContent = [this.list_medal_i(), this.__21_i(), this.label_noMedal_i()];
                return t;
            };
            p.grp_print_i = function () {
                var t = new egret.gui.Group();
                this.grp_print = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "y"], [600, 0, false, 400, 150]);
                t.elementsContent = [this.list_print_i(), this.__19_i(), this.label_noPrints_i()];
                return t;
            };
            p.grp_props_i = function () {
                var t = new egret.gui.Group();
                this.grp_props = t;
                this.__s(t, ["horizontalCenter", "y"], [20, 284]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__13_i(), this.__14_i()];
                return t;
            };
            p.ico_medalItem_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medalItem = t;
                this.__s(t, ["enabled", "touchEnabled", "x", "y"], [false, false, 125, 45]);
                return t;
            };
            p.img_onNoPrint_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_onNoPrint = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_wuzhanyind", false, 131, 56]);
                return t;
            };
            p.img_printBg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_printBg = t;
                this.__s(t, ["source", "x", "y"], ["ico_zanyingkuang", 68, 2]);
                return t;
            };
            p.img_printRed_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_printRed = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 222, 66]);
                return t;
            };
            p.label_noMedal_i = function () {
                var t = new egret.gui.UIAsset();
                this.label_noMedal = t;
                this.__s(t, ["source", "x", "y"], ["ico_meiyouxunzangg", 119, 228]);
                return t;
            };
            p.label_noPrints_i = function () {
                var t = new egret.gui.UIAsset();
                this.label_noPrints = t;
                this.__s(t, ["source", "x", "y"], ["ico_haiweijihuorenhezanying", 64, 187]);
                return t;
            };
            p.list_achivement_i = function () {
                var t = new egret.gui.List();
                this.list_achivement = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [550, skins.game.MedalAchiItemSkin, 404, -2, -14]);
                return t;
            };
            p.list_medal_i = function () {
                var t = new egret.gui.List();
                this.list_medal = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x"], [550, skins.game.BagCellSkin, 366, 17]);
                t.layout = this.__20_i();
                return t;
            };
            p.list_print_i = function () {
                var t = new egret.gui.List();
                this.list_print = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x"], [550, skins.game.PrintItemSkin, 404, -2]);
                return t;
            };
            p.__11_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            p.tab_medal_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_medal = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "skinName", "y"], [0, skins.comp.TabBarBtn_1_Skin, skins.comp.TabBar_6_Skin, 77]);
                t.dataProvider = this.__11_i();
                return t;
            };
            MedalSkin._skinParts = ["tab_medal", "btn_help", "btn_close", "grp_props", "img_printBg", "ico_medalItem", "img_onNoPrint", "grp_combat", "list_print", "label_noPrints", "grp_print", "list_medal", "label_noMedal", "grp_medal", "list_achivement", "grp_achivement", "img_printRed"];
            return MedalSkin;
        })(egret.gui.Skin);
        game.MedalSkin = MedalSkin;
        egret.registerClass(MedalSkin,"skins.game.MedalSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
