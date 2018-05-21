var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexRetrySkin = (function (_super) {
            __extends(IndexRetrySkin, _super);
            function IndexRetrySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.contentGroup_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=IndexRetrySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexRetrySkin._skinParts;
                }
            );
            p.btn_retry_i = function () {
                var t = new egret.gui.Button();
                this.btn_retry = t;
                this.__s(t, ["label", "x", "y"], ["重试", 173, 467]);
                return t;
            };
            p.contentGroup_i = function () {
                var t = new egret.gui.Group();
                this.contentGroup = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.btn_retry_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_index", 0]);
                return t;
            };
            IndexRetrySkin._skinParts = ["btn_retry", "contentGroup"];
            return IndexRetrySkin;
        })(egret.gui.Skin);
        game.IndexRetrySkin = IndexRetrySkin;
        egret.registerClass(IndexRetrySkin,"skins.game.IndexRetrySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
