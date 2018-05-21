var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightCopyWinOrFailSkin = (function (_super) {
            __extends(FightCopyWinOrFailSkin, _super);
            function FightCopyWinOrFailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_win_i(), this.ico_fail_i(), this.btn_ok_i(), this.upWarn_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__15_i(), this.__17_i(), this.__19_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.__24_i(), this.list_items_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightCopyWinOrFailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightCopyWinOrFailSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_kong", 0, 84]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_kong", 89, 84]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_kong", 177, 84]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_kong", 265, 84]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["visible", "x", "y"], [false, 70, 314]);
                t.elementsContent = [this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_star_gray", 1, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [148, 205]);
                t.elementsContent = [this.__16_i(), this.ico_winStar_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_star_gray", 1, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [148, 236]);
                t.elementsContent = [this.__18_i(), this.ico_noDieStar_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_star_gray", 1, 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [148, 267]);
                t.elementsContent = [this.__20_i(), this.ico_timeLmtStar_i()];
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [2, "line_2", 150, 184, 229]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [2, "line_2", 150, 184, 262]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [2, "line_2", 150, 184, 292]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "verticalGap"], [14, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "visible", "width", "x", "y"], [480, 0.5, "s9g_dlg_1", false, 387, 10, 87]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "战斗胜利", 0xCCCDB1, false, 182, 205]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "无角色死亡", 0xCCCDB1, false, 182, 238]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "30s内通关", 0xCCCDB1, false, 182, 270]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_kong", 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_kong", 89, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_kong", 177, 0]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["horizontalCenter", "label", "x", "y"], [-1, "确定(0)", 10, 482]);
                return t;
            };
            p.ico_fail_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_fail = t;
                this.__s(t, ["autoScale", "horizontalCenter", "source", "y"], [false, -1, "ntc_battlefail", 8]);
                return t;
            };
            p.ico_noDieStar_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_noDieStar = t;
                this.__s(t, ["source", "x", "y"], ["ico_star", 0, 0]);
                return t;
            };
            p.ico_timeLmtStar_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_timeLmtStar = t;
                this.__s(t, ["source", "x", "y"], ["ico_star", 0, 0]);
                return t;
            };
            p.ico_winStar_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_winStar = t;
                this.__s(t, ["source", "x", "y"], ["ico_star", 0, 0]);
                return t;
            };
            p.ico_win_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_win = t;
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "width", "y"], [false, 614, 7, "ntc_battlesuccess", 414, 8]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "width", "x", "y"], [174, 263, 105, 303]);
                t.layout = this.__25_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_kong", 265, 0]);
                return t;
            };
            p.upWarn_i = function () {
                var t = new g_fight.FightUpWarn();
                this.upWarn = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [163, skins.game.FightUpWarnSkin, 431, 25, 577]);
                return t;
            };
            FightCopyWinOrFailSkin._skinParts = ["ico_win", "ico_fail", "btn_ok", "upWarn", "ico_winStar", "ico_noDieStar", "ico_timeLmtStar", "list_items"];
            return FightCopyWinOrFailSkin;
        })(egret.gui.Skin);
        game.FightCopyWinOrFailSkin = FightCopyWinOrFailSkin;
        egret.registerClass(FightCopyWinOrFailSkin,"skins.game.FightCopyWinOrFailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
