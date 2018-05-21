var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexBgSkin = (function (_super) {
            __extends(IndexBgSkin, _super);
            function IndexBgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=IndexBgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexBgSkin._skinParts;
                }
            );
            p.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "bg_index", 0]);
                return t;
            };
            IndexBgSkin._skinParts = ["contentGroup"];
            return IndexBgSkin;
        })(egret.gui.Skin);
        game.IndexBgSkin = IndexBgSkin;
        egret.registerClass(IndexBgSkin,"skins.game.IndexBgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
