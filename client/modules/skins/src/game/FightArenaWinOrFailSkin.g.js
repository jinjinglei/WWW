var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightArenaWinOrFailSkin = (function (_super) {
            __extends(FightArenaWinOrFailSkin, _super);
            function FightArenaWinOrFailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_win_i(), this.ico_fail_i(), this.ico_timeout_i(), this.upWarn_i(), this.label_myName_i(), this.label_enemyName_i(), this.btn_back_i(), this.__4_i(), this.__6_i(), this.__8_i(), this.label_myCombat_i(), this.label_enemyCombat_i(), this.grp_winRank_i(), this.grp_failRank_i(), this.grp_res_i(), this.__14_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightArenaWinOrFailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightArenaWinOrFailSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_hornor", 0, 3]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 127, 6]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "verticalCenter", "width", "x"], [true, 70, "ntc_vs", -102, 94, 191]);
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
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [292, 320]);
                t.elementsContent = [this.__5_i(), this.ico_enemyRole_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [112, 210]);
                t.elementsContent = [this.__7_i(), this.ico_myRole_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 22, "排名上升至", "left", 0x37D702, false, 0, 0]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [0, "返回(0)", 481]);
                return t;
            };
            p.grp_failRank_i = function () {
                var t = new egret.gui.Group();
                this.grp_failRank = t;
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 410]);
                t.layout = this.__11_i();
                t.elementsContent = [this.label_failRank_i(), this.__10_i()];
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["horizontalCenter", "y"], [0.5, 439]);
                t.elementsContent = [this.__12_i(), this.__13_i(), this.label_sw_i(), this.label_gold_i()];
                return t;
            };
            p.grp_winRank_i = function () {
                var t = new egret.gui.Group();
                this.grp_winRank = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 410]);
                t.elementsContent = [this.__9_i(), this.label_winRank_i()];
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
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ntc_battlefail", 8]);
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
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ntc_battlefail", 10, 8]);
                return t;
            };
            p.ico_win_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_win = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [1, "ntc_battlesuccess", 8]);
                return t;
            };
            p.label_enemyCombat_i = function () {
                var t = new mo.gui.Label();
                this.label_enemyCombat = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], [18, "战斗力:%s", "right", 0xDDA600, false, 180, 108, 334]);
                return t;
            };
            p.label_enemyName_i = function () {
                var t = new egret.gui.Label();
                this.label_enemyName = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "名字", "right", 0xECF0D8, 180, 108, 359]);
                return t;
            };
            p.label_failRank_i = function () {
                var t = new egret.gui.Label();
                this.label_failRank = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 22, "竞技场排名50", "left", 0xD79D0C, false, 0, 0]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_gold = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "9999", 0xCCCDB1, false, 152, 5]);
                return t;
            };
            p.label_myCombat_i = function () {
                var t = new mo.gui.Label();
                this.label_myCombat = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], [18, "战斗力:%s", "left", 0xDDA600, false, 191, 239]);
                return t;
            };
            p.label_myName_i = function () {
                var t = new egret.gui.Label();
                this.label_myName = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "名字", "left", 0x0177ED, 191, 212]);
                return t;
            };
            p.label_sw_i = function () {
                var t = new egret.gui.Label();
                this.label_sw = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "9999", 0xCCCDB1, false, 38, 5]);
                return t;
            };
            p.label_winRank_i = function () {
                var t = new egret.gui.Label();
                this.label_winRank = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 22, "50", "left", 0x37D702, false, 120, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 22, "(不变)", "left", 0xFFFFFF, false, 120, 0]);
                return t;
            };
            p.upWarn_i = function () {
                var t = new g_fight.FightUpWarn();
                this.upWarn = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [163, 0.5, skins.game.FightUpWarnSkin, 431, 567]);
                return t;
            };
            FightArenaWinOrFailSkin._skinParts = ["ico_win", "ico_fail", "ico_timeout", "upWarn", "label_myName", "label_enemyName", "btn_back", "ico_enemyRole", "ico_myRole", "label_myCombat", "label_enemyCombat", "label_winRank", "grp_winRank", "label_failRank", "grp_failRank", "label_sw", "label_gold", "grp_res"];
            return FightArenaWinOrFailSkin;
        })(egret.gui.Skin);
        game.FightArenaWinOrFailSkin = FightArenaWinOrFailSkin;
        egret.registerClass(FightArenaWinOrFailSkin,"skins.game.FightArenaWinOrFailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
