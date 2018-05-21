var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildContributeLayerSkin = (function (_super) {
            __extends(GuildContributeLayerSkin, _super);
            function GuildContributeLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.container_i(), this.__8_i(), this.list_items_i(), this.res_bar_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildContributeLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildContributeLayerSkin._skinParts;
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
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_forge", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [76, 0, egret.gui.getScale9Grid("37,40,347,37"), "panel_boss_0", 420, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 63]);
                t.elementsContent = [this.__4_i(), this.bar_exp_i(), this.label_level_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "我的积分：", 241, 702]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "我的贡献：", 23, 702]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["x", "y"], [197, 138]);
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.bar_exp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_exp = t;
                this.__s(t, ["skinName", "verticalCenter", "x"], [skins.comp.Bar_Exp_Skin, 17.5, 71]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [748, 2, skins.comp.Dlg_Close_Text_Skin, "btn_txt_hanghuirichang", -1, 440]);
                t.elementsContent = [this.__5_i(), this.label_exp_i(), this.__6_i(), this.label_myExp2_i(), this.__7_i(), this.label_myGuildLv_i(), this.label_myExp_i()];
                return t;
            };
            p.label_exp_i = function () {
                var t = new egret.gui.Label();
                this.label_exp = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "999999", 0xFAFAFA, 330, 702]);
                return t;
            };
            p.label_level_i = function () {
                var t = new egret.gui.Label();
                this.label_level = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "width", "y"], [0.5, 18, "行会等级 Lv.120", "center", 185, 5]);
                return t;
            };
            p.label_myExp2_i = function () {
                var t = new egret.gui.Label();
                this.label_myExp2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "999999", 0xFAFAFA, 108, 702]);
                return t;
            };
            p.label_myExp_i = function () {
                var t = new egret.gui.Label();
                this.label_myExp = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "200/3000", 108, 654]);
                return t;
            };
            p.label_myGuildLv_i = function () {
                var t = new egret.gui.Label();
                this.label_myGuildLv = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "会员等级：", 24, 654]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [462, 0, skins.game.GuildContributeItemSkin, 177]);
                t.dataProvider = this.__13_i();
                return t;
            };
            p.res_bar_i = function () {
                var t = new g_comp.ResBar();
                this.res_bar = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.comp.ResBarSkin, 54]);
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            GuildContributeLayerSkin._skinParts = ["bar_exp", "label_level", "label_exp", "label_myExp2", "label_myGuildLv", "label_myExp", "container", "list_items", "res_bar"];
            return GuildContributeLayerSkin;
        })(egret.gui.Skin);
        game.GuildContributeLayerSkin = GuildContributeLayerSkin;
        egret.registerClass(GuildContributeLayerSkin,"skins.game.GuildContributeLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
