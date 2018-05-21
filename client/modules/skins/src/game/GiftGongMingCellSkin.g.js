var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftGongMingCellSkin = (function (_super) {
            __extends(GiftGongMingCellSkin, _super);
            function GiftGongMingCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.label_name_i(), this.label_effect_i(), this.label_desc_i(), this.__6_i(), this.__7_i(), this.ico_gongMingBg2_i(), this.__8_i(), this.ico_gift1_i(), this.ico_gift0_i(), this.ico_gift2_i(), this.label_noAct1_i(), this.label_noAct0_i(), this.label_noAct2_i(), this.__9_i(), this.__10_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftGongMingCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftGongMingCellSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "y"], ["icon_fabaodin", 28]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_digs", 10]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "border_wwe2", 33]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["border_wwe", 25, 57]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 20, "（主法宝）", 0xECE6E6, 150]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_tielianyou", 264, 70]);
                return t;
            };
            p.ico_gift0_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift0 = t;
                this.__s(t, ["x", "y"], [186, 44]);
                return t;
            };
            p.ico_gift1_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift1 = t;
                this.__s(t, ["x", "y"], [36, 68]);
                return t;
            };
            p.ico_gift2_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift2 = t;
                this.__s(t, ["x", "y"], [337, 66]);
                return t;
            };
            p.ico_gongMingBg2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_gongMingBg2 = t;
                this.__s(t, ["source", "x", "y"], ["border_wwe", 327, 57]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["horizontalCenter", "size", "text", "width", "y"], [0, 20, "共鸣说明", 370, 211]);
                return t;
            };
            p.label_effect_i = function () {
                var t = new mo.gui.Label();
                this.label_effect = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 20, "共鸣特效：%s", 0xEABD0A, 183]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "y"], [-5.5, 24, 2, "标签", 0xFFE679, 0]);
                return t;
            };
            p.label_noAct0_i = function () {
                var t = new egret.gui.Label();
                this.label_noAct0 = t;
                this.__s(t, ["height", "size", "text", "width", "x", "y"], [43, 16, "尚未激活", 38, 206, 61]);
                return t;
            };
            p.label_noAct1_i = function () {
                var t = new egret.gui.Label();
                this.label_noAct1 = t;
                this.__s(t, ["height", "size", "text", "width", "x", "y"], [43, 16, "尚未激活", 38, 56, 85]);
                return t;
            };
            p.label_noAct2_i = function () {
                var t = new egret.gui.Label();
                this.label_noAct2 = t;
                this.__s(t, ["height", "size", "text", "width", "x", "y"], [43, 16, "尚未激活", 38, 358, 82]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_tielianzuo", 114, 70]);
                return t;
            };
            GiftGongMingCellSkin._skinParts = ["label_name", "label_effect", "label_desc", "ico_gongMingBg2", "ico_gift1", "ico_gift0", "ico_gift2", "label_noAct1", "label_noAct0", "label_noAct2"];
            return GiftGongMingCellSkin;
        })(egret.gui.Skin);
        game.GiftGongMingCellSkin = GiftGongMingCellSkin;
        egret.registerClass(GiftGongMingCellSkin,"skins.game.GiftGongMingCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
