var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightProfitSkin = (function (_super) {
            __extends(FightProfitSkin, _super);
            function FightProfitSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightProfitSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightProfitSkin._skinParts;
                }
            );
            p.img_detail_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_detail = t;
                this.__s(t, ["source", "x", "y"], ["ico_stageinfo", 428, 564]);
                return t;
            };
            p.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.img_detail_i()];
                return t;
            };
            FightProfitSkin._skinParts = ["img_detail", "contentGroup"];
            return FightProfitSkin;
        })(egret.gui.Skin);
        game.FightProfitSkin = FightProfitSkin;
        egret.registerClass(FightProfitSkin,"skins.game.FightProfitSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
