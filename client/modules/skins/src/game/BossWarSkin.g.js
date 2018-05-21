var skins;
(function (skins) {
    var game;
    (function (game) {
        var BossWarSkin = (function (_super) {
            __extends(BossWarSkin, _super);
            function BossWarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.img_title_i(), this.btn_close_i(), this.btn_help_i(), this.img_worldBoss_i(), this.img_guildBoss_i(), this.img_lmtBoss_i(), this.__5_i(), this.btn_resBack_i(), this.__6_i(), this.label_wboss_fighting_i(), this.label_gboss_fighting_i(), this.label_lmtboss_fighting_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BossWarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BossWarSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bosstou", 41, 92]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "visible", "x", "y"], ["btn_txt_ziyuanzhaohuil", false, false, 185, 667]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, -10]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", -2, -7]);
                return t;
            };
            p.btn_resBack_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_resBack = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_changtiaosfg", false, 48, 656]);
                return t;
            };
            p.img_guildBoss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_guildBoss = t;
                this.__s(t, ["source", "x", "y"], ["ico_hanhuibosstiao", 35, 285.5]);
                return t;
            };
            p.img_lmtBoss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_lmtBoss = t;
                this.__s(t, ["source", "x", "y"], ["ico_xianshiboss", 35, 444]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [7, "tit_txt_g_bosszizan", 13]);
                return t;
            };
            p.img_worldBoss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_worldBoss = t;
                this.__s(t, ["source", "x", "y"], ["ico_shijiebosstiao", 35, 127]);
                return t;
            };
            p.label_gboss_fighting_i = function () {
                var t = new mo.gui.Label();
                this.label_gboss_fighting = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [18, 1, "激战中...", 0xFAE502, 316, 396]);
                return t;
            };
            p.label_lmtboss_fighting_i = function () {
                var t = new mo.gui.Label();
                this.label_lmtboss_fighting = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [18, 1, "激战中...", 0xFAE502, 316, 554]);
                return t;
            };
            p.label_wboss_fighting_i = function () {
                var t = new mo.gui.Label();
                this.label_wboss_fighting = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [18, 1, "激战中...", 0xFAE502, 316, 241]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            BossWarSkin._skinParts = ["img_title", "btn_close", "btn_help", "img_worldBoss", "img_guildBoss", "img_lmtBoss", "btn_resBack", "label_wboss_fighting", "label_gboss_fighting", "label_lmtboss_fighting"];
            return BossWarSkin;
        })(egret.gui.Skin);
        game.BossWarSkin = BossWarSkin;
        egret.registerClass(BossWarSkin,"skins.game.BossWarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
