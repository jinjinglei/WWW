var skins;
(function (skins) {
    var game;
    (function (game) {
        var ZhenQiDetailSkin = (function (_super) {
            __extends(ZhenQiDetailSkin, _super);
            function ZhenQiDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.label_desc_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.label_zhenQiAdd_i(), this.label_zhenQiTotal_i(), this.__8_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ZhenQiDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ZhenQiDetailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "说明：", 0x5487FF, 53, 445]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "y"], [0, "ico_hengtiao", 324, 420]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "累计真气：", 0xFBDAB3, 53, 349]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "真气产量：", 0xFBDAB3, 53, 379]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 24, "真气", 299]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 419, 290]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["lineSpacing", "size", "text", "textColor", "width", "x", "y"], [5, 16, "1\n2\n3\n4", 0x5487FF, 382, 54, 472]);
                return t;
            };
            p.label_zhenQiAdd_i = function () {
                var t = new egret.gui.Label();
                this.label_zhenQiAdd = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "9999/分钟", 0xFBDAB3, 144, 379]);
                return t;
            };
            p.label_zhenQiTotal_i = function () {
                var t = new egret.gui.Label();
                this.label_zhenQiTotal = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "99999/999999", 0xFBDAB3, 144, 349]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [293, 0.5, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 421, 292]);
                return t;
            };
            ZhenQiDetailSkin._skinParts = ["label_desc", "label_zhenQiAdd", "label_zhenQiTotal", "btn_close"];
            return ZhenQiDetailSkin;
        })(egret.gui.Skin);
        game.ZhenQiDetailSkin = ZhenQiDetailSkin;
        egret.registerClass(ZhenQiDetailSkin,"skins.game.ZhenQiDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
