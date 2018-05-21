var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightCoffersWinOrFailSkin = (function (_super) {
            __extends(FightCoffersWinOrFailSkin, _super);
            function FightCoffersWinOrFailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_win_i(), this.ico_fail_i(), this.ico_timeout_i(), this.upWarn_i(), this.label_myName_i(), this.label_enemyName_i(), this.btn_back_i(), this.__4_i(), this.grp_enemyFace_i(), this.grp_myFace_i(), this.grp_res_i(), this.__9_i(), this.__12_i(), this.label_noRob_i(), this.__13_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightCoffersWinOrFailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightCoffersWinOrFailSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [1, 340]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__10_i(), this.label_ap_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_luoduoshouyi", 361]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "visible", "width", "y"], [433, 0.5, "s9g_dlg_1", false, 459, 124]);
                return t;
            };
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
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [81, 0, "border_wwe", 86, -9]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "跨服积分：", 0xCCCDB1, false, 0, 90]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "verticalCenter", "width"], [true, 66, 0.5, "ntc_vs", -127, 75]);
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
                this.__s(t, ["x", "y"], [292, 260]);
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
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 398]);
                t.elementsContent = [this.__7_i(), this.ico_item_i(), this.label_item_i(), this.__8_i(), this.label_score_i()];
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
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [57, 0, 60, 2]);
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
            p.label_ap_i = function () {
                var t = new egret.gui.Label();
                this.label_ap = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "-2", 0xCCCDB1, false, 60, 0]);
                return t;
            };
            p.label_enemyName_i = function () {
                var t = new egret.gui.Label();
                this.label_enemyName = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "名字", "right", 0xECF0D8, 169, 117, 309]);
                return t;
            };
            p.label_item_i = function () {
                var t = new mo.gui.Label();
                this.label_item = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "守卫宝箱×%s", 0xCC5704, 70]);
                return t;
            };
            p.label_myName_i = function () {
                var t = new egret.gui.Label();
                this.label_myName = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "名字", "left", 0x0177ED, 169, 188, 208]);
                return t;
            };
            p.label_noRob_i = function () {
                var t = new egret.gui.Label();
                this.label_noRob = t;
                this.__s(t, ["horizontalCenter", "size", "text", "visible", "width", "y"], [0.5, 20, "守卫已被其他玩家提前击破，此战无法获得收益。", false, 249, 430]);
                return t;
            };
            p.label_score_i = function () {
                var t = new egret.gui.Label();
                this.label_score = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "9999999", 0xCCCDB1, false, 85, 89]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "行动力：", 0xCCCDB1, false, 0, 0]);
                return t;
            };
            p.upWarn_i = function () {
                var t = new g_fight.FightUpWarn();
                this.upWarn = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [163, 0.5, skins.game.FightUpWarnSkin, 431, 567]);
                return t;
            };
            FightCoffersWinOrFailSkin._skinParts = ["ico_win", "ico_fail", "ico_timeout", "upWarn", "label_myName", "label_enemyName", "btn_back", "ico_enemyRole", "grp_enemyFace", "ico_myRole", "grp_myFace", "ico_item", "label_item", "label_score", "grp_res", "label_ap", "label_noRob"];
            return FightCoffersWinOrFailSkin;
        })(egret.gui.Skin);
        game.FightCoffersWinOrFailSkin = FightCoffersWinOrFailSkin;
        egret.registerClass(FightCoffersWinOrFailSkin,"skins.game.FightCoffersWinOrFailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
