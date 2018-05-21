var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightWorldBossEnterSkin = (function (_super) {
            __extends(FightWorldBossEnterSkin, _super);
            function FightWorldBossEnterSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightWorldBossEnterSkin,p=c.prototype;
            return FightWorldBossEnterSkin;
        })(egret.gui.Skin);
        game.FightWorldBossEnterSkin = FightWorldBossEnterSkin;
        egret.registerClass(FightWorldBossEnterSkin,"skins.game.FightWorldBossEnterSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
