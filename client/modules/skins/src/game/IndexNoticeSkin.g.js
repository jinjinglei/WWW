var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexNoticeSkin = (function (_super) {
            __extends(IndexNoticeSkin, _super);
            function IndexNoticeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=IndexNoticeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexNoticeSkin._skinParts;
                }
            );
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "top", "width"], [491, 0, skins.comp.Dlg_Close_0_Skin, 130, 422]);
                t.elementsContent = [this.__3_i(), this.label_text_i()];
                return t;
            };
            p.label_text_i = function () {
                var t = new mo.gui.Label();
                this.label_text = t;
                this.__s(t, ["height", "size", "text", "width", "x", "y"], [408, 24, "标签", 381, 20, 57]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [433, 0, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 414, 46]);
                return t;
            };
            IndexNoticeSkin._skinParts = ["label_text", "container"];
            return IndexNoticeSkin;
        })(egret.gui.Skin);
        game.IndexNoticeSkin = IndexNoticeSkin;
        egret.registerClass(IndexNoticeSkin,"skins.game.IndexNoticeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
