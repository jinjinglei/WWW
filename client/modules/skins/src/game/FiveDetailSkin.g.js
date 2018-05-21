var skins;
(function (skins) {
    var game;
    (function (game) {
        var FiveDetailSkin = (function (_super) {
            __extends(FiveDetailSkin, _super);
            function FiveDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.title_day_i(), this.btn_close_i(), this.__6_i(), this.__9_i(), this.list_ranks_i(), this.btn_get_i(), this.img_unFinished_i(), this.btn_done_i(), this.btn_outdate_i(), this.__11_i(), this.img_wc_i(), this.img_guild_i(), this.grp_wing_i(), this.grp_arena_i(), this.grp_combat_i(), this.grp_gem_i(), this.grp_realm_i(), this.__24_i(), this.__25_i(), this.__26_i(), this.__27_i(), this.__28_i(), this.ico_title_i(), this.preview_i(), this.label_d_i(), this.label_date_i(), this.img_rank_i(), this.img_red_i(), this.img_wczb_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FiveDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FiveDetailSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_fengenx", 20, 578]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_chibangjingje", 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [45, 156, 2]);
                t.layout = this.__13_i();
                t.elementsContent = [this.label_wingLvlNeed_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_chanyu", 0, 0]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [50, 44, 3]);
                t.layout = this.__16_i();
                t.elementsContent = [this.label_arenaNum_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zhanlidadao", 0, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baosidenjidadao", 0, 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuansenzondjd", 0, 0]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_fenggexian", 560]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_fengenx", 10, 164]);
                return t;
            };
            p.__26_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [2, 15, "排名奖励每日0点结算，结算后1小时内通过邮件发放。", 0xF8051E, 531]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [-2, "ico_liqujiangli", 502]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [69, egret.gui.getScale9Grid("30,27,11,14"), "panel_huawenlasheng", 425, 27, 84]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "x", "y"], [697, 0.5, "s9g_dlg_1", 455, 10, 78]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [102, egret.gui.getScale9Grid("7,7,386,253"), "s9g_gold_edge", 404, 37, 595]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "paddingLeft", "paddingRight"], [10, 5, 5]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [100, 400, 40, 598]);
                t.layout = this.__8_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, -5]);
                return t;
            };
            p.btn_done_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_done = t;
                this.__s(t, ["source", "x", "y"], ["ico_yilinqu", 189, 708]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [5.5, "btn_txt_g_getgift", skins.comp.Btn_Rank_Skin, 717]);
                return t;
            };
            p.btn_outdate_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_outdate = t;
                this.__s(t, ["source", "x", "y"], ["ico_huodonjeshu", 179, 715]);
                return t;
            };
            p.grp_arena_i = function () {
                var t = new egret.gui.Group();
                this.grp_arena = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [25, false, 228, 126, 569]);
                t.elementsContent = [this.__15_i(), this.__17_i()];
                return t;
            };
            p.grp_combat_i = function () {
                var t = new egret.gui.Group();
                this.grp_combat = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [25, false, 400, 40, 569]);
                t.layout = this.__19_i();
                t.elementsContent = [this.__18_i(), this.label_combatNeed_i()];
                return t;
            };
            p.grp_gem_i = function () {
                var t = new egret.gui.Group();
                this.grp_gem = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "y"], [25, 0, false, 569]);
                t.layout = this.__21_i();
                t.elementsContent = [this.__20_i(), this.label_gem_i()];
                return t;
            };
            p.grp_realm_i = function () {
                var t = new egret.gui.Group();
                this.grp_realm = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "y"], [25, 0, false, 569]);
                t.layout = this.__22_i();
                t.elementsContent = [this.__23_i(), this.label_realm_i()];
                return t;
            };
            p.grp_wing_i = function () {
                var t = new egret.gui.Group();
                this.grp_wing = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [25, false, 228, 126, 569]);
                t.elementsContent = [this.__12_i(), this.__14_i()];
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [-5, "ico_tianxia", 93]);
                return t;
            };
            p.img_guild_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_guild = t;
                this.__s(t, ["horizontalCenter", "source", "visible", "x", "y"], [0, "ico_yongyouhuojiarugonghui", false, 10, 569]);
                return t;
            };
            p.img_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_rank = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_jinjichangpm", 155]);
                return t;
            };
            p.img_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 286, 705]);
                return t;
            };
            p.img_unFinished_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_unFinished = t;
                this.__s(t, ["source", "x", "y"], ["ico_weiwanchen", 55, 712]);
                return t;
            };
            p.img_wc_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_wc = t;
                this.__s(t, ["horizontalCenter", "source", "visible", "y"], [0, "ico_canyuleitai", false, 568]);
                return t;
            };
            p.img_wczb_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_wczb = t;
                this.__s(t, ["horizontalCenter", "source", "visible", "y"], [0, "ntc_five_day_bazhu", false, 148]);
                return t;
            };
            p.label_arenaNum_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_arenaNum = t;
                t.setStyle("textAlign", "center");
                this.__s(t, ["font", "text"], ["num_7", "100"]);
                return t;
            };
            p.label_combatNeed_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_combatNeed = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "100", 157, 4]);
                return t;
            };
            p.label_d_i = function () {
                var t = new mo.gui.Label();
                this.label_d = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "今日活动时间：", 0xFC0707, 46, 49]);
                return t;
            };
            p.label_date_i = function () {
                var t = new mo.gui.Label();
                this.label_date = t;
                this.__s(t, ["size", "textColor", "x", "y"], [18, 0xFC0707, 159, 49]);
                return t;
            };
            p.label_gem_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_gem = t;
                this.__s(t, ["font", "horizontalCenter", "text", "y"], ["num_7", 53, "100", 3]);
                return t;
            };
            p.label_realm_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_realm = t;
                this.__s(t, ["font", "horizontalCenter", "text", "y"], ["num_7", 65.5, "100", 4]);
                return t;
            };
            p.label_wingLvlNeed_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_wingLvlNeed = t;
                t.setStyle("textAlign", "center");
                this.__s(t, ["font", "text"], ["num_7", "5"]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "skinName", "x", "y"], [94, skins.game.BaseItemCellSkin, skins.comp.List_Empty_H_Skin, 75, 548]);
                t.layout = this.__7_i();
                return t;
            };
            p.list_ranks_i = function () {
                var t = new egret.gui.List();
                this.list_ranks = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [316, skins.game.FiveRankItemSkin, 440, 20, 183]);
                t.layout = this.__10_i();
                return t;
            };
            p.preview_i = function () {
                var t = new egret.gui.UIAsset();
                this.preview = t;
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.6, 0, "pre_5日活动第五日", 0, false]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.title_day_i = function () {
                var t = new egret.gui.UIAsset();
                this.title_day = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_diwuri", 9]);
                return t;
            };
            FiveDetailSkin._skinParts = ["title_day", "btn_close", "list_items", "list_ranks", "btn_get", "img_unFinished", "btn_done", "btn_outdate", "img_wc", "img_guild", "label_wingLvlNeed", "grp_wing", "label_arenaNum", "grp_arena", "label_combatNeed", "grp_combat", "label_gem", "grp_gem", "label_realm", "grp_realm", "ico_title", "preview", "label_d", "label_date", "img_rank", "img_red", "img_wczb"];
            return FiveDetailSkin;
        })(egret.gui.Skin);
        game.FiveDetailSkin = FiveDetailSkin;
        egret.registerClass(FiveDetailSkin,"skins.game.FiveDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
