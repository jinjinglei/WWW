var skins;
(function (skins) {
    var game;
    (function (game) {
        var BossCopySkin = (function (_super) {
            __extends(BossCopySkin, _super);
            function BossCopySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.btn_close_i(), this.grp_boss_token_i(), this.grp_boss_token2_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BossCopySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BossCopySkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9", "left", 0xD5D5B8, 100, 221, 579]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [90, 0, egret.gui.getScale9Grid("49,5,300,91"), "s9g_translucent3", 405, 395]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "width", "y"], [0, 461, 118]);
                t.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.titleDisplay_i(), this.label_bossHp_i(), this.label_combat_i(), this.label_rest_i(), this.__7_i(), this.list_copys_i(), this.btn_left_i(), this.btn_right_i(), this.__9_i(), this.btn_enter_i(), this.grp_res_i(), this.__14_i(), this.list_items_i(), this.ico_monster_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new g_comp.ResBar();
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.comp.ResBarSkin, 732]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_bossCopy", 10]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__21_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [16, "Boss令牌:", "left", 0xD5D5B8, 231, 589]);
                return t;
            };
            p.__22_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 16, "9999", "left", 0xD5D5B8, 221, 579]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__25_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [16, "Boss替代令:", "left", 0xD5D5B8, 231, 589]);
                return t;
            };
            p.__26_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 16, "9999", "left", 0xD5D5B8, 221, 579]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [600, 0, "s9g_dlg_1", 455, 3]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [557, 0.5, egret.gui.getScale9Grid("22,17,134,108"), "s9g_black_0", 424, 34]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "y"], [0.5, "bg_hell", 414, 122]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "y"], [0.5, egret.gui.getScale9Grid("37,40,347,37"), "panel_boss_0", 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [47, "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ntc_wrd_ultra_root", 362]);
                return t;
            };
            p.btn_buy_bossTicket_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy_bossTicket = t;
                this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.8, 0.8, skins.comp.Btn_plus_Skin, 150, 10]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 421, 2]);
                return t;
            };
            p.btn_enter_i = function () {
                var t = new egret.gui.Button();
                this.btn_enter = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_enter", skins.comp.Btn_3_0_Skin, 152, 535]);
                return t;
            };
            p.btn_info_i = function () {
                var t = new egret.gui.Button();
                this.btn_info = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_info_Skin, 150, 10]);
                return t;
            };
            p.btn_left_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_left = t;
                this.__s(t, ["source", "x", "y"], ["ntc_page_turner", 30, 46]);
                return t;
            };
            p.btn_right_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_right = t;
                this.__s(t, ["scaleX", "source", "x", "y"], [-1, "ntc_page_turner", 431, 46]);
                return t;
            };
            p.grp_boss_token2_i = function () {
                var t = new egret.gui.Group();
                this.grp_boss_token2 = t;
                this.__s(t, ["height", "x", "y"], [30, 245, 79]);
                t.layout = this.__27_i();
                t.elementsContent = [this.__24_i(), this.__25_i(), this.__26_i(), this.btn_info_i()];
                return t;
            };
            p.grp_boss_token_i = function () {
                var t = new egret.gui.Group();
                this.grp_boss_token = t;
                this.__s(t, ["height", "x", "y"], [30, 15, 79]);
                t.layout = this.__23_i();
                t.elementsContent = [this.__20_i(), this.__21_i(), this.__22_i(), this.btn_buy_bossTicket_i()];
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["height", "x", "y"], [30, 261, 491]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__10_i(), this.__11_i(), this.__12_i()];
                return t;
            };
            p.ico_monster_i = function () {
                var t = new mo.gui.UIAsset();
                this.ico_monster = t;
                this.__s(t, ["height", "width", "x", "y"], [1, 1, 212, 305]);
                return t;
            };
            p.label_bossHp_i = function () {
                var t = new mo.gui.Label();
                this.label_bossHp = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "血量: %s", 0xFFFFFF, 33, 163]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new mo.gui.Label();
                this.label_combat = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "建议战力: %s", "right", 0xDDA600, 250, 173, 313]);
                return t;
            };
            p.label_rest_i = function () {
                var t = new mo.gui.Label();
                this.label_rest = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [18, "剩余次数：%s", 14013880, 125, 41, 493]);
                return t;
            };
            p.list_copys_i = function () {
                var t = new egret.gui.List();
                this.list_copys = t;
                this.__s(t, ["height", "itemRendererSkinName", "skinName", "width", "x", "y"], [100, skins.game.BossCopyItemSkin, skins.comp.List_Empty_H_Skin, 343, 59, 19]);
                t.layout = this.__8_i();
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "scaleX", "scaleY", "width", "x", "y"], [skins.game.BaseItemCellSkin, 0.9, 0.9, 500, 31, 399]);
                t.layout = this.__15_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "消耗:", 14013880, 234, 492]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new mo.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "%s %s", 16112285, 33, 133]);
                return t;
            };
            BossCopySkin._skinParts = ["titleDisplay", "label_bossHp", "label_combat", "label_rest", "list_copys", "btn_left", "btn_right", "btn_enter", "grp_res", "list_items", "ico_monster", "btn_close", "btn_buy_bossTicket", "grp_boss_token", "btn_info", "grp_boss_token2"];
            return BossCopySkin;
        })(egret.gui.Skin);
        game.BossCopySkin = BossCopySkin;
        egret.registerClass(BossCopySkin,"skins.game.BossCopySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
