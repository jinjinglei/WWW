var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersScoreSkin = (function (_super) {
            __extends(CoffersScoreSkin, _super);
            function CoffersScoreSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_help_i(), this.btn_close_i(), this.label_scoreServer_i(), this.label_scorePerson_i(), this.label_scoreServerToday_i(), this.label_scorePersonToday_i(), this.label_win_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.label_score_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersScoreSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersScoreSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "说明：", 0x1796E5, 76, 554]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "1、连胜状态下，成功掠夺获得3分", 0x1796E5, 76, 591]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "2、今日积分每日0点到4点清零", 0x1796E5, 76, 627]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 396, 131]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.Button();
                this.btn_help = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_info_Skin, 41, 131]);
                return t;
            };
            p.label_scorePersonToday_i = function () {
                var t = new egret.gui.Label();
                this.label_scorePersonToday = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "000", 264, 371]);
                return t;
            };
            p.label_scorePerson_i = function () {
                var t = new egret.gui.Label();
                this.label_scorePerson = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "000", 266, 243]);
                return t;
            };
            p.label_scoreServerToday_i = function () {
                var t = new egret.gui.Label();
                this.label_scoreServerToday = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "000", 286, 336]);
                return t;
            };
            p.label_scoreServer_i = function () {
                var t = new egret.gui.Label();
                this.label_scoreServer = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "000", 283, 207]);
                return t;
            };
            p.label_score_i = function () {
                var t = new mo.gui.Label();
                this.label_score = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "下次成功掠夺可获得%s积分。", 0xE2BA56, 76, 491]);
                return t;
            };
            p.label_win_i = function () {
                var t = new mo.gui.Label();
                this.label_win = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "当前连胜%s场", 0xE2BA56, 76, 464]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["und_kuafujifengditu", 13, 101]);
                return t;
            };
            CoffersScoreSkin._skinParts = ["btn_help", "btn_close", "label_scoreServer", "label_scorePerson", "label_scoreServerToday", "label_scorePersonToday", "label_win", "label_score"];
            return CoffersScoreSkin;
        })(egret.gui.Skin);
        game.CoffersScoreSkin = CoffersScoreSkin;
        egret.registerClass(CoffersScoreSkin,"skins.game.CoffersScoreSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
