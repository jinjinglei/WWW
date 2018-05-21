var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightCoffersBossSkin = (function (_super) {
            __extends(FightCoffersBossSkin, _super);
            function FightCoffersBossSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.ico_win_i(), this.ico_timeout_i(), this.btn_back_i(), this.__3_i(), this.grp_res_i(), this.__12_i(), this.label_noRob_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightCoffersBossSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightCoffersBossSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 424]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__10_i(), this.label_ap_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [88, 25]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "累计伤害：", 0xCCCDB1, false, 141, 25]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_luoduoshouyi", 74]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "个人收益：", 0xCCCDB1, false, 140, 126]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 223, 125]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 223, 162]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "国库收益：", 0xCCCDB1, false, 140, 162]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [0, "返回(0)", 512]);
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["height", "left", "right", "y"], [196, 0, 0, 202]);
                t.elementsContent = [this.__4_i(), this.label_hurt_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.label_gold_i(), this.label_gold2_i(), this.__8_i(), this.__9_i()];
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
            p.label_gold2_i = function () {
                var t = new egret.gui.Label();
                this.label_gold2 = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "9999", 0xCCCDB1, false, 251, 164]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_gold = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "9999999", 0xCCCDB1, false, 251, 125]);
                return t;
            };
            p.label_hurt_i = function () {
                var t = new egret.gui.Label();
                this.label_hurt = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "9999999", 0xCCCDB1, false, 229, 24]);
                return t;
            };
            p.label_noRob_i = function () {
                var t = new egret.gui.Label();
                this.label_noRob = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "width", "y"], [0, 20, "    很遗憾，该服国库已被其他玩家掠夺殆尽，已经没有任何金钱可以掠夺了。", 0xCCCDB1, 249, 250]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "行动力：", 0xCCCDB1, false, 0, 0]);
                return t;
            };
            FightCoffersBossSkin._skinParts = ["ico_win", "ico_timeout", "btn_back", "label_hurt", "label_gold", "label_gold2", "grp_res", "label_ap", "label_noRob"];
            return FightCoffersBossSkin;
        })(egret.gui.Skin);
        game.FightCoffersBossSkin = FightCoffersBossSkin;
        egret.registerClass(FightCoffersBossSkin,"skins.game.FightCoffersBossSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
