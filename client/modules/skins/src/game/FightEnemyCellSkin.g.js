var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightEnemyCellSkin = (function (_super) {
            __extends(FightEnemyCellSkin, _super);
            function FightEnemyCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [61, 61]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.ico_role_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightEnemyCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightEnemyCellSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "x", "y"], [true, 9, 33, 33]);
                return t;
            };
            p.ico_role_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_role = t;
                this.__s(t, ["height", "width", "x", "y"], [55, 55, 3, 3]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width"], [61, "avatar_bg", 61]);
                return t;
            };
            FightEnemyCellSkin._skinParts = ["ico_role"];
            return FightEnemyCellSkin;
        })(egret.gui.Skin);
        game.FightEnemyCellSkin = FightEnemyCellSkin;
        egret.registerClass(FightEnemyCellSkin,"skins.game.FightEnemyCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
