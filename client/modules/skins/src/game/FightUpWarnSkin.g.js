var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightUpWarnSkin = (function (_super) {
            __extends(FightUpWarnSkin, _super);
            function FightUpWarnSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [163, 431]);
                this.elementsContent = [this.__13_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightUpWarnSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightUpWarnSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchChildren", "touchEnabled", "x", "y"], ["btn_chibang", false, false, 226, 43]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchChildren", "touchEnabled", "x", "y"], ["btn_shuangzhuangbei", false, false, 319, 46]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.btn_equip_i(), this.btn_wing_i(), this.btn_stone_i(), this.btn_star_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "刷装备", 0xC9990B, 318, 119]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "翅膀", 0xC9990B, 237, 119]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "宝石", 0xC9990B, 142, 119]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "升星", 0xC9990B, 47, 119]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 20, "很遗憾您失败了，请选择以下方法提升战力", 0xCB950F, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchChildren", "touchEnabled", "x", "y"], ["btn_shengxing", false, false, 38, 45]);
                return t;
            };
            p.btn_equip_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_equip = t;
                this.__s(t, ["source", "x", "y"], ["blk_kong", 316, 40]);
                return t;
            };
            p.btn_star_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_star = t;
                this.__s(t, ["source", "x", "y"], ["blk_kong", 34, 40]);
                return t;
            };
            p.btn_stone_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_stone = t;
                this.__s(t, ["source", "x", "y"], ["blk_kong", 128.5, 40]);
                return t;
            };
            p.btn_wing_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_wing = t;
                this.__s(t, ["source", "x", "y"], ["blk_kong", 222.5, 40]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchChildren", "touchEnabled", "x", "y"], ["btn_baoshi", false, false, 132, 45]);
                return t;
            };
            FightUpWarnSkin._skinParts = ["btn_equip", "btn_wing", "btn_stone", "btn_star"];
            return FightUpWarnSkin;
        })(egret.gui.Skin);
        game.FightUpWarnSkin = FightUpWarnSkin;
        egret.registerClass(FightUpWarnSkin,"skins.game.FightUpWarnSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
