var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseShowTipSkin = (function (_super) {
            __extends(BaseShowTipSkin, _super);
            function BaseShowTipSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseShowTipSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseShowTipSkin._skinParts;
                }
            );
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_close_Skin, 384, -16]);
                return t;
            };
            p.ico_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg = t;
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [60, 0, egret.gui.getScale9Grid("8,8,14,14"), "s9g_failinfo", 413, -6]);
                return t;
            };
            p.label_tips_i = function () {
                var t = new mo.gui.Label();
                this.label_tips = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "textAlign", "textColor", "touchEnabled", "width", "y"], [0, 15, 18, "left", 14013876, false, 370, 26]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, -20]);
                t.elementsContent = [this.ico_bg_i(), this.label_tips_i(), this.btn_close_i()];
                return t;
            };
            BaseShowTipSkin._skinParts = ["ico_bg", "label_tips", "btn_close"];
            return BaseShowTipSkin;
        })(egret.gui.Skin);
        game.BaseShowTipSkin = BaseShowTipSkin;
        egret.registerClass(BaseShowTipSkin,"skins.game.BaseShowTipSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
