var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseFightHpSkin = (function (_super) {
            __extends(BaseFightHpSkin, _super);
            function BaseFightHpSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [115, 173]);
                this.elementsContent = [this.__3_i(), this.img_hp_i(), this.img_mp_i(), this.rect_hp_mask_i(), this.efx_hp_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseFightHpSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseFightHpSkin._skinParts;
                }
            );
            p.efx_hp_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_hp = t;
                this.__s(t, ["autoPlay", "effectId", "scaleX", "scaleY", "x", "y"], [true, 35, 0.74, 0.74, 63, 73]);
                return t;
            };
            p.img_hp_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_hp = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 77, "ico_zandouqiuhong", 35, 25, 35]);
                return t;
            };
            p.img_mp_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_mp = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 77, "ico_zandouqiulan", 35, 67, 35]);
                return t;
            };
            p.rect_hp_mask_i = function () {
                var t = new egret.gui.Rect();
                this.rect_hp_mask = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [94, false, 46, 13, 8]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "source", "top", "width"], [115, 0, "ico_zandouqiu", 0, 173]);
                return t;
            };
            BaseFightHpSkin._skinParts = ["img_hp", "img_mp", "rect_hp_mask", "efx_hp"];
            return BaseFightHpSkin;
        })(egret.gui.Skin);
        game.BaseFightHpSkin = BaseFightHpSkin;
        egret.registerClass(BaseFightHpSkin,"skins.game.BaseFightHpSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
