var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossGrandSkin = (function (_super) {
            __extends(GuildBossGrandSkin, _super);
            function GuildBossGrandSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.img_bg_i(), this.btn_close_i(), this.label_no0_i(), this.label_no1_i(), this.label_no2_i(), this.label_no3_i(), this.label_no4_i(), this.grp_guild_i(), this.label_maxDamage_i(), this.label_lastHit_i(), this.label_myDamage_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossGrandSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossGrandSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zhaohuanhanghui", 0, 38]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [1, "btn_txt_g_back", skins.comp.Btn_3_1_Skin, 673]);
                return t;
            };
            p.grp_guild_i = function () {
                var t = new egret.gui.Group();
                this.grp_guild = t;
                this.__s(t, ["x", "y"], [75, 457]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.label_caller_i(), this.label_guild_i()];
                return t;
            };
            p.img_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_bg = t;
                this.__s(t, ["source", "x", "y"], ["panel_bossshibai", 13, 1]);
                return t;
            };
            p.label_caller_i = function () {
                var t = new mo.gui.Label();
                this.label_caller = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 104, 5]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new mo.gui.Label();
                this.label_guild = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 129, 43]);
                return t;
            };
            p.label_lastHit_i = function () {
                var t = new mo.gui.Label();
                this.label_lastHit = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 242, 591]);
                return t;
            };
            p.label_maxDamage_i = function () {
                var t = new mo.gui.Label();
                this.label_maxDamage = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 242, 551]);
                return t;
            };
            p.label_myDamage_i = function () {
                var t = new mo.gui.Label();
                this.label_myDamage = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 235, 627]);
                return t;
            };
            p.label_no0_i = function () {
                var t = new mo.gui.Label();
                this.label_no0 = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 98, 269]);
                return t;
            };
            p.label_no1_i = function () {
                var t = new mo.gui.Label();
                this.label_no1 = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 98, 309]);
                return t;
            };
            p.label_no2_i = function () {
                var t = new mo.gui.Label();
                this.label_no2 = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 98, 349]);
                return t;
            };
            p.label_no3_i = function () {
                var t = new mo.gui.Label();
                this.label_no3 = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 98, 386]);
                return t;
            };
            p.label_no4_i = function () {
                var t = new mo.gui.Label();
                this.label_no4 = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 98, 422]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zhaohuanzhe", 6, 0]);
                return t;
            };
            GuildBossGrandSkin._skinParts = ["img_bg", "btn_close", "label_no0", "label_no1", "label_no2", "label_no3", "label_no4", "label_caller", "label_guild", "grp_guild", "label_maxDamage", "label_lastHit", "label_myDamage"];
            return GuildBossGrandSkin;
        })(egret.gui.Skin);
        game.GuildBossGrandSkin = GuildBossGrandSkin;
        egret.registerClass(GuildBossGrandSkin,"skins.game.GuildBossGrandSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
