var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureInfoSkin = (function (_super) {
            __extends(FightTreasureInfoSkin, _super);
            function FightTreasureInfoSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureInfoSkin,p=c.prototype;
            return FightTreasureInfoSkin;
        })(egret.gui.Skin);
        game.FightTreasureInfoSkin = FightTreasureInfoSkin;
        egret.registerClass(FightTreasureInfoSkin,"skins.game.FightTreasureInfoSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
