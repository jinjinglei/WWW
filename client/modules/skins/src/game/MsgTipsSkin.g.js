var skins;
(function (skins) {
    var game;
    (function (game) {
        var MsgTipsSkin = (function (_super) {
            __extends(MsgTipsSkin, _super);
            function MsgTipsSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.grp_container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MsgTipsSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MsgTipsSkin._skinParts;
                }
            );
            p.grp_container_i = function () {
                var t = new egret.gui.Group();
                this.grp_container = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                return t;
            };
            MsgTipsSkin._skinParts = ["grp_container"];
            return MsgTipsSkin;
        })(egret.gui.Skin);
        game.MsgTipsSkin = MsgTipsSkin;
        egret.registerClass(MsgTipsSkin,"skins.game.MsgTipsSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
