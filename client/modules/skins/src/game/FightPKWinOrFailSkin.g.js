var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightPKWinOrFailSkin = (function (_super) {
            __extends(FightPKWinOrFailSkin, _super);
            function FightPKWinOrFailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_win_i(), this.ico_fail_i(), this.ico_timeout_i(), this.__4_i(), this.btn_ok_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.label_gold_i(), this.label_myRank_i(), this.label_winPkValue_i(), this.label_failPkValue_i(), this.__8_i(), this.label_exp_i(), this.list_items_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightPKWinOrFailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightPKWinOrFailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "战利品：", 135, 368]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 211, 368]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_cup", 202, 322]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_exp", 207, 397]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 22, "PK排名", "left", 0xFFC000, false, 159, 281]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 2;
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [1, "确定(0)", 526]);
                return t;
            };
            p.ico_fail_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_fail = t;
                this.__s(t, ["horizontalCenter", "source", "top"], [0.5, "ntc_battlefail", 84]);
                return t;
            };
            p.ico_timeout_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_timeout = t;
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ntc_battlefail", 20, 84]);
                return t;
            };
            p.ico_win_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_win = t;
                this.__s(t, ["horizontalCenter", "source", "top"], [1, "ntc_battlesuccess", 84]);
                return t;
            };
            p.label_exp_i = function () {
                var t = new mo.gui.Label();
                this.label_exp = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 32, 24, "6300", "left", 0xFFC000, false, 80, 253, 390]);
                return t;
            };
            p.label_failPkValue_i = function () {
                var t = new egret.gui.Label();
                this.label_failPkValue = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 32, 24, "+0", "left", 0xC20306, false, 80, 252, 322]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_gold = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 32, 24, "6300", "left", 0xFFC000, false, 80, 254, 365]);
                return t;
            };
            p.label_myRank_i = function () {
                var t = new mo.gui.Label();
                this.label_myRank = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 23, 22, "200", "left", 0xFFC000, false, 80, 253, 281]);
                return t;
            };
            p.label_winPkValue_i = function () {
                var t = new egret.gui.Label();
                this.label_winPkValue = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["宋体", 32, 24, "+0", "left", 0x37D702, false, 80, 252, 322]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [75, -1.5, skins.game.BaseItemCellSkin, 259, 422]);
                t.layout = this.__9_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "visible", "width", "y"], [377, 0.5, "s9g_dlg_1", false, 425, 188]);
                return t;
            };
            FightPKWinOrFailSkin._skinParts = ["ico_win", "ico_fail", "ico_timeout", "btn_ok", "label_gold", "label_myRank", "label_winPkValue", "label_failPkValue", "label_exp", "list_items"];
            return FightPKWinOrFailSkin;
        })(egret.gui.Skin);
        game.FightPKWinOrFailSkin = FightPKWinOrFailSkin;
        egret.registerClass(FightPKWinOrFailSkin,"skins.game.FightPKWinOrFailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
