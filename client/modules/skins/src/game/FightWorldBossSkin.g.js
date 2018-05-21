var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightWorldBossSkin = (function (_super) {
            __extends(FightWorldBossSkin, _super);
            function FightWorldBossSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightWorldBossSkin,p=c.prototype;
            return FightWorldBossSkin;
        })(egret.gui.Skin);
        game.FightWorldBossSkin = FightWorldBossSkin;
        egret.registerClass(FightWorldBossSkin,"skins.game.FightWorldBossSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
