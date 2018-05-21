var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaLogItemSkin = (function (_super) {
            __extends(ArenaLogItemSkin, _super);
            function ArenaLogItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 44;
                this.elementsContent = [this.label_log_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaLogItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaLogItemSkin._skinParts;
                }
            );
            p.label_log_i = function () {
                var t = new mo.gui.Label();
                this.label_log = t;
                this.__s(t, ["size", "text", "textColor", "width"], [18, "你胜利了\n你失败了", 0xF3ECB0, 441]);
                return t;
            };
            ArenaLogItemSkin._skinParts = ["label_log"];
            return ArenaLogItemSkin;
        })(egret.gui.Skin);
        game.ArenaLogItemSkin = ArenaLogItemSkin;
        egret.registerClass(ArenaLogItemSkin,"skins.game.ArenaLogItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
