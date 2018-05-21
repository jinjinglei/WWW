var skins;
(function (skins) {
    var game;
    (function (game) {
        var WBossCallSkin = (function (_super) {
            __extends(WBossCallSkin, _super);
            function WBossCallSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_back_i(), this.btn_help_i(), this.__7_i(), this.__8_i(), this.btn_show_rewards_i(), this.px_hp_i(), this.btn_status_i(), this.__9_i(), this.__10_i(), this.label_desc_i(), this.label_challenge_time_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WBossCallSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WBossCallSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_any", 480, -1, 2]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "y"], [0, "panel_task_title", 0, 40]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "y"], [0, "tit_txt_g_shijieboss", 12, 20]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [45, "ico_rank_bg_red", 217, 173, 48]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [137, 415, 32, 123]);
                t.elementsContent = [this.img_boss_bg_i(), this.__6_i(), this.label_name_i(), this.img_boss_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [424, egret.gui.getScale9Grid("52,3,314,14"), "panel_kuang", 416, 32, 260]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "y"], [173, 0, "panel_dituo", 510]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["right", "source", "top", "x", "y"], [2, "btn_back", 1, 20, 20]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["left", "source", "top", "x", "y"], [1, "ico_help", 3, 20, 20]);
                return t;
            };
            p.btn_show_rewards_i = function () {
                var t = new egret.gui.Button();
                this.btn_show_rewards = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_ckshuojl", "按钮", skins.comp.Btn_3_22_Skin, 333]);
                return t;
            };
            p.btn_status_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_status = t;
                this.__s(t, ["source", "x", "y"], ["ico_guildBoss_win", 341, 322]);
                return t;
            };
            p.img_boss_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss_bg = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-1, -1, -2, "panel_ditus", 1]);
                return t;
            };
            p.img_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [true, 124, "ico_mohuabianjiang", 120, 34, 6]);
                return t;
            };
            p.label_challenge_time_i = function () {
                var t = new egret.gui.Label();
                this.label_challenge_time = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "y"], [0, 20, "挑战时间:%s", "center", 0x04FF00, 448]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["lineSpacing", "size", "text", "textColor", "width", "x", "y"], [5, 16, "1\n2\n3", 0x5487FF, 393, 43, 547]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 27, 24, 1, 0x000000, "(40级) xx武士", "center", 0xF2C65E, 216, 177, 55]);
                return t;
            };
            p.px_hp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.px_hp = t;
                this.__s(t, ["direction", "skinName", "value", "width", "x", "y"], ["rightToLeft", skins.comp.Bar_WorldBoss_Hp_Skin, 100, 399, 40, 267]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "说明：", 0x5487FF, 43, 520]);
                return t;
            };
            WBossCallSkin._skinParts = ["btn_back", "btn_help", "img_boss_bg", "label_name", "img_boss", "btn_show_rewards", "px_hp", "btn_status", "label_desc", "label_challenge_time"];
            return WBossCallSkin;
        })(egret.gui.Skin);
        game.WBossCallSkin = WBossCallSkin;
        egret.registerClass(WBossCallSkin,"skins.game.WBossCallSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
