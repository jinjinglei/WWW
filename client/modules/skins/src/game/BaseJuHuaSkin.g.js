var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseJuHuaSkin = (function (_super) {
            __extends(BaseJuHuaSkin, _super);
            function BaseJuHuaSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.grp_juHua_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseJuHuaSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseJuHuaSkin._skinParts;
                }
            );
            p.grp_juHua_i = function () {
                var t = new egret.gui.Group();
                this.grp_juHua = t;
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [1, 0, 0, 1]);
                t.elementsContent = [this.__3_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_loading", 0]);
                return t;
            };
            BaseJuHuaSkin._skinParts = ["grp_juHua"];
            return BaseJuHuaSkin;
        })(egret.gui.Skin);
        game.BaseJuHuaSkin = BaseJuHuaSkin;
        egret.registerClass(BaseJuHuaSkin,"skins.game.BaseJuHuaSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
