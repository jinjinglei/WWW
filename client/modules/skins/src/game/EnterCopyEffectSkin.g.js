var skins;
(function (skins) {
    var game;
    (function (game) {
        var EnterCopyEffectSkin = (function (_super) {
            __extends(EnterCopyEffectSkin, _super);
            function EnterCopyEffectSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_copy_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EnterCopyEffectSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EnterCopyEffectSkin._skinParts;
                }
            );
            p.grp_copy_i = function () {
                var t = new egret.gui.Group();
                this.grp_copy = t;
                this.__s(t, ["x", "y"], [0, 157]);
                t.elementsContent = [this.__3_i(), this.label_copy_i()];
                return t;
            };
            p.label_copy_i = function () {
                var t = new egret.gui.Label();
                this.label_copy = t;
                this.__s(t, ["horizontalCenter", "stroke", "text", "textColor", "y"], [0, 1, "副本名称", 0xFFFDB2, 51]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_zhanpai_0", 0, 0]);
                return t;
            };
            EnterCopyEffectSkin._skinParts = ["label_copy", "grp_copy"];
            return EnterCopyEffectSkin;
        })(egret.gui.Skin);
        game.EnterCopyEffectSkin = EnterCopyEffectSkin;
        egret.registerClass(EnterCopyEffectSkin,"skins.game.EnterCopyEffectSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
