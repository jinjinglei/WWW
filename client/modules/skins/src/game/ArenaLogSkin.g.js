var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaLogSkin = (function (_super) {
            __extends(ArenaLogSkin, _super);
            function ArenaLogSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaLogSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaLogSkin._skinParts;
                }
            );
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "left", "right", "y"], [618, skins.game.ArenaLogItemSkin, 0, 0, 2]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [685, 0.5, skins.comp.Dlg_Close_Txt_1_Skin, 441, 45]);
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            ArenaLogSkin._skinParts = ["list_items", "container"];
            return ArenaLogSkin;
        })(egret.gui.Skin);
        game.ArenaLogSkin = ArenaLogSkin;
        egret.registerClass(ArenaLogSkin,"skins.game.ArenaLogSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
