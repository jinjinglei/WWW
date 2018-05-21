var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildSetEnnobleSkin = (function (_super) {
            __extends(GuildSetEnnobleSkin, _super);
            function GuildSetEnnobleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.list_items_i(), this.__15_i(), this.__20_i(), this.btn_cancel_i(), this.btn_confirm_i(), this.__21_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildSetEnnobleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildSetEnnobleSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__9_i(), this.__10_i(), this.__11_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [141, 101]);
                t.layout = this.__14_i();
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [120, egret.gui.getScale9Grid("37,40,347,37"), "panel_boss_0", 420, 0, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "贡献：", 111, 52]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "战力：", 111, 79]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "爵位：", 291, 79]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [30, 77]);
                t.elementsContent = [this.__16_i(), this.ico_head_i(), this.__17_i(), this.label_myExp_i(), this.__18_i(), this.label_position_i(), this.label_myGuildLv_i(), this.__19_i(), this.label_ennoble_i(), this.label_combat_i(), this.label_name_i(), this.label_lv_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_shouyuhuiyuanxinxi", 20, 69]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_forge", 0, 30, 30]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "x"], [0, "panel_task_title", 0, 20]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_juewei", 8]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "x", "y"], [423, 0.5, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 421, 10, 241]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_shouyujuewei", 10, 230]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.btn_cancel_i = function () {
                var t = new egret.gui.Button();
                this.btn_cancel = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_quxiao", skins.comp.Btn_3_4_Skin, 65, 723]);
                return t;
            };
            p.btn_confirm_i = function () {
                var t = new egret.gui.Button();
                this.btn_confirm = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_querenshouquan", "按钮", skins.comp.Btn_3_4_Skin, 285, 723]);
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["x", "y"], [31, 22]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new egret.gui.Label();
                this.label_combat = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "1111", 161, 79]);
                return t;
            };
            p.label_ennoble_i = function () {
                var t = new egret.gui.Label();
                this.label_ennoble = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "平民", 341, 79]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "Lv.199", 225, 24]);
                return t;
            };
            p.label_myExp_i = function () {
                var t = new egret.gui.Label();
                this.label_myExp = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "100000", 159, 52]);
                return t;
            };
            p.label_myGuildLv_i = function () {
                var t = new egret.gui.Label();
                this.label_myGuildLv = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "一级会员", 291, 52]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "名字六个字啊", 111, 24]);
                return t;
            };
            p.label_position_i = function () {
                var t = new egret.gui.Label();
                this.label_position = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "会长", 291, 24]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "x", "y"], [373, 0, skins.game.GuildEnnobleItemSkin, 10, 278]);
                t.layout = this.__8_i();
                t.dataProvider = this.__13_i();
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            GuildSetEnnobleSkin._skinParts = ["list_items", "ico_head", "label_myExp", "label_position", "label_myGuildLv", "label_ennoble", "label_combat", "label_name", "label_lv", "btn_cancel", "btn_confirm"];
            return GuildSetEnnobleSkin;
        })(egret.gui.Skin);
        game.GuildSetEnnobleSkin = GuildSetEnnobleSkin;
        egret.registerClass(GuildSetEnnobleSkin,"skins.game.GuildSetEnnobleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
