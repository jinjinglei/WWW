var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersHeroRecCellSkin = (function (_super) {
            __extends(CoffersHeroRecCellSkin, _super);
            function CoffersHeroRecCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.label_desc_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersHeroRecCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersHeroRecCellSkin._skinParts;
                }
            );
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "horizontalCenter", "lineSpacing", "size", "text", "textColor", "width", "y"], [93, 0, 15, 16, "标签\n标签\n标签", 0xDECBCB, 342, 22]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "icon_yinxiondi";
                return t;
            };
            CoffersHeroRecCellSkin._skinParts = ["label_desc"];
            return CoffersHeroRecCellSkin;
        })(egret.gui.Skin);
        game.CoffersHeroRecCellSkin = CoffersHeroRecCellSkin;
        egret.registerClass(CoffersHeroRecCellSkin,"skins.game.CoffersHeroRecCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
