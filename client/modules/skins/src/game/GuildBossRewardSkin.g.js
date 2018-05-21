var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossRewardSkin = (function (_super) {
            __extends(GuildBossRewardSkin, _super);
            function GuildBossRewardSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.btn_back_i(), this.btn_help_i(), this.item0_i(), this.item1_i(), this.item2_i(), this.item3_i(), this.item4_i(), this.item5_i(), this.item6_i(), this.__8_i(), this.__9_i(), this.label_hurt_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossRewardSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossRewardSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "verticalCenter", "width"], [false, 3, 0.5, "panel_yellow_line", 90.5, 387]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 3, "panel_yellow_line", 387, 47, 575.5]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [false, 3, -0.5, "panel_yellow_line", 263.5, 387, 20, 20]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [false, 3, 0.5, "panel_yellow_line", 340.5, 387, 30, 30]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_shijieboss", 480, 0, 1]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "x", "y"], [0, "panel_task_title", 0, 30, 20]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [692, "s9g_dlg_1", 457, 13, 86]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [624, egret.gui.getScale9Grid("60,30,100,63"), "panel_guwu_dikuang2", 429, 27, 102]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "top", "width", "x", "y"], [false, 26, -1.5, "tit_txt_g_jianglishuoming2", 10, 97, 30, 20]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [20, "输出伤害排行奖励", 0xEFB037, 292, 36, 109]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "对BOSS输出伤害将获得相应的金币奖励", 0xEFB037, 35, 743]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["right", "source", "top", "x", "y"], [1, "btn_back", 9, 20, 20]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 9]);
                return t;
            };
            p.item0_i = function () {
                var t = new g_comp.BossRewardPanel();
                this.item0 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.WorldBossRewardItemSkin, 26, 143]);
                return t;
            };
            p.item1_i = function () {
                var t = new g_comp.BossRewardPanel();
                this.item1 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.WorldBossRewardItemSkin, 26, 226]);
                return t;
            };
            p.item2_i = function () {
                var t = new g_comp.BossRewardPanel();
                this.item2 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.WorldBossRewardItemSkin, 27, 308]);
                return t;
            };
            p.item3_i = function () {
                var t = new g_comp.BossRewardPanel();
                this.item3 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.WorldBossRewardItemSkin, 27, 390]);
                return t;
            };
            p.item4_i = function () {
                var t = new g_comp.BossRewardPanel();
                this.item4 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.WorldBossRewardItemSkin, 26, 580]);
                return t;
            };
            p.item5_i = function () {
                var t = new g_comp.BossRewardPanel();
                this.item5 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.WorldBossRewardItemSkin, 26, 665]);
                return t;
            };
            p.item6_i = function () {
                var t = new g_comp.BossRewardPanel();
                this.item6 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.WorldBossRewardItemSkin, 27, 493]);
                return t;
            };
            p.label_hurt_i = function () {
                var t = new egret.gui.Label();
                this.label_hurt = t;
                this.__s(t, ["height", "size", "text", "visible", "width", "x", "y"], [23, 20, "1000伤害/金币", false, 181, 131, 691]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "horizontalCenter", "size", "text", "y"], [23, 0, 14, "排名奖励在活动结束后结算，以邮件形式发送", 59]);
                return t;
            };
            GuildBossRewardSkin._skinParts = ["btn_back", "btn_help", "item0", "item1", "item2", "item3", "item4", "item5", "item6", "label_hurt"];
            return GuildBossRewardSkin;
        })(egret.gui.Skin);
        game.GuildBossRewardSkin = GuildBossRewardSkin;
        egret.registerClass(GuildBossRewardSkin,"skins.game.GuildBossRewardSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
