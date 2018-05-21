var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildEnnobleDetailSkin = (function (_super) {
            __extends(GuildEnnobleDetailSkin, _super);
            function GuildEnnobleDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.label_guildLv_i(), this.__8_i(), this.label_myLv_i(), this.__9_i(), this.label_ennoble_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.list_items_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildEnnobleDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildEnnobleDetailSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_shouyuhuiyuanxinxi", 69]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_hanghuijueweixiangqing", 230]);
                return t;
            };
            p.__13_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__14_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__15_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__13_i(), this.__14_i(), this.__15_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_forge", 0, 40, 40]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "x", "y"], [0, "panel_task_title", 0, 30, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "tit_txt_g_shoujue", 10, 8]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [128, 0, egret.gui.getScale9Grid("37,40,347,37"), "panel_boss_0", 420, 75]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "当前行会等级：", 0xE8C247, 67, 106]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "我的会员等级：", 0x43EE43, 67, 137]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "我的爵位：", 0xF19EFC, 67, 167]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 406, -1]);
                return t;
            };
            p.label_ennoble_i = function () {
                var t = new egret.gui.Label();
                this.label_ennoble = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "平民", 0xF19EFC, 150, 167]);
                return t;
            };
            p.label_guildLv_i = function () {
                var t = new egret.gui.Label();
                this.label_guildLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "Lv.30", 0xE8C247, 188, 106]);
                return t;
            };
            p.label_myLv_i = function () {
                var t = new egret.gui.Label();
                this.label_myLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "一级会员", 0x43EE43, 187, 137]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [373, 0, skins.game.GuildEnnobleItemSkin, 278]);
                t.layout = this.__18_i();
                t.dataProvider = this.__17_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [423, 0.5, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 421, 241]);
                return t;
            };
            GuildEnnobleDetailSkin._skinParts = ["label_guildLv", "label_myLv", "label_ennoble", "list_items", "btn_close"];
            return GuildEnnobleDetailSkin;
        })(egret.gui.Skin);
        game.GuildEnnobleDetailSkin = GuildEnnobleDetailSkin;
        egret.registerClass(GuildEnnobleDetailSkin,"skins.game.GuildEnnobleDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
