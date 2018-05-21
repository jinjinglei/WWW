var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightGuildWarWinOrFailSkin = (function (_super) {
            __extends(FightGuildWarWinOrFailSkin, _super);
            function FightGuildWarWinOrFailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_win_i(), this.ico_fail_i(), this.ico_timeout_i(), this.upWarn_i(), this.label_myServer_i(), this.label_myGuild_i(), this.label_myName_i(), this.label_enemyName_i(), this.label_enemyGuild_i(), this.label_enemyServer_i(), this.btn_back_i(), this.__4_i(), this.grp_enemyFace_i(), this.grp_myFace_i(), this.label_score_i(), this.label_damage_i(), this.__7_i(), this.label_noRob_i(), this.label_end_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightGuildWarWinOrFailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightGuildWarWinOrFailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [88, 25]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "verticalCenter", "width"], [true, 50, 0.5, "ntc_vs", -90, 57]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [0, "返回(0)", 512]);
                return t;
            };
            p.grp_enemyFace_i = function () {
                var t = new egret.gui.Group();
                this.grp_enemyFace = t;
                this.__s(t, ["x", "y"], [292, 330]);
                t.elementsContent = [this.__5_i(), this.ico_enemyRole_i()];
                return t;
            };
            p.grp_myFace_i = function () {
                var t = new egret.gui.Group();
                this.grp_myFace = t;
                this.__s(t, ["x", "y"], [112, 207]);
                t.elementsContent = [this.__6_i(), this.ico_myRole_i()];
                return t;
            };
            p.ico_enemyRole_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_enemyRole = t;
                this.__s(t, ["height", "width", "x", "y"], [61, 61, 6, 6]);
                return t;
            };
            p.ico_fail_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_fail = t;
                this.__s(t, ["horizontalCenter", "source", "visible", "y"], [0.5, "ntc_battlefail", false, 8]);
                return t;
            };
            p.ico_myRole_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_myRole = t;
                this.__s(t, ["height", "width", "x", "y"], [61, 61, 6, 6]);
                return t;
            };
            p.ico_timeout_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_timeout = t;
                this.__s(t, ["horizontalCenter", "source", "visible", "x", "y"], [0.5, "ntc_battlefail", false, 10, 8]);
                return t;
            };
            p.ico_win_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_win = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [1, "ntc_battlesuccess", 8]);
                return t;
            };
            p.label_damage_i = function () {
                var t = new mo.gui.Label();
                this.label_damage = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "touchEnabled", "x", "y"], [2, 18, "对城门造成伤害：%s点", 0xCCCDB1, false, 10, 436]);
                return t;
            };
            p.label_end_i = function () {
                var t = new egret.gui.Label();
                this.label_end = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "width", "x", "y"], [0.5, 18, "活动已经结束", "center", 249, 10, 478]);
                return t;
            };
            p.label_enemyGuild_i = function () {
                var t = new mo.gui.Label();
                this.label_enemyGuild = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "[%s]", "right", 0xC934C1, 169, 117, 356]);
                return t;
            };
            p.label_enemyName_i = function () {
                var t = new egret.gui.Label();
                this.label_enemyName = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "名字", "right", 0x01C9ED, 169, 117, 379]);
                return t;
            };
            p.label_enemyServer_i = function () {
                var t = new mo.gui.Label();
                this.label_enemyServer = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "%s", "right", 0x1CBD03, 194, 92, 333]);
                return t;
            };
            p.label_myGuild_i = function () {
                var t = new mo.gui.Label();
                this.label_myGuild = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "[%s]", "left", 0xC934C1, 169, 188, 233]);
                return t;
            };
            p.label_myName_i = function () {
                var t = new egret.gui.Label();
                this.label_myName = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "名字", "left", 0x01C9ED, 169, 188, 257]);
                return t;
            };
            p.label_myServer_i = function () {
                var t = new mo.gui.Label();
                this.label_myServer = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "%s", "left", 0x1CBD03, 197, 188, 208]);
                return t;
            };
            p.label_noRob_i = function () {
                var t = new egret.gui.Label();
                this.label_noRob = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "width", "y"], [0.5, 18, "城门已被他人攻破\n本次战斗无消耗", "center", 249, 468]);
                return t;
            };
            p.label_score_i = function () {
                var t = new mo.gui.Label();
                this.label_score = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "touchEnabled", "y"], [1.5, 18, "排名点数+%s", 0xCCCDB1, false, 413]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "visible", "width", "y"], [433, 0.5, "s9g_dlg_1", false, 459, 124]);
                return t;
            };
            p.upWarn_i = function () {
                var t = new g_fight.FightUpWarn();
                this.upWarn = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [163, 0.5, skins.game.FightUpWarnSkin, 431, 567]);
                return t;
            };
            FightGuildWarWinOrFailSkin._skinParts = ["ico_win", "ico_fail", "ico_timeout", "upWarn", "label_myServer", "label_myGuild", "label_myName", "label_enemyName", "label_enemyGuild", "label_enemyServer", "btn_back", "ico_enemyRole", "grp_enemyFace", "ico_myRole", "grp_myFace", "label_score", "label_damage", "label_noRob", "label_end"];
            return FightGuildWarWinOrFailSkin;
        })(egret.gui.Skin);
        game.FightGuildWarWinOrFailSkin = FightGuildWarWinOrFailSkin;
        egret.registerClass(FightGuildWarWinOrFailSkin,"skins.game.FightGuildWarWinOrFailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
