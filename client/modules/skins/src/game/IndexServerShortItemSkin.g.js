var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexServerShortItemSkin = (function (_super) {
            __extends(IndexServerShortItemSkin, _super);
            function IndexServerShortItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [40, 160]);
                this.elementsContent = [this.__6_i(), this.ico_status_i(), this.label_content_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__6", "source", "btn_server_item_1")
                    ]),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__6", "source", "btn_server_item_1")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__6", "source", "btn_server_item_1")
                    ])
                ];
            }
            var d = __define,c=IndexServerShortItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexServerShortItemSkin._skinParts;
                }
            );
            p.ico_status_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_status = t;
                this.__s(t, ["height", "source", "verticalCenter", "width", "x", "y"], [23, "ntc_huobao", 0.5, 50, 121, 10]);
                return t;
            };
            p.label_content_i = function () {
                var t = new egret.gui.Label();
                this.label_content = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], ["宋体", 20, 17, "太初我来-1000服", "left", 0xFFC119, "justify", 0, 151, 2, 10]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__6 = t;
                this.__s(t, ["bottom", "horizontalCenter", "source", "top", "width"], [0, -0.5, "btn_server_item_0", 0, 217]);
                return t;
            };
            IndexServerShortItemSkin._skinParts = ["ico_status", "label_content"];
            return IndexServerShortItemSkin;
        })(egret.gui.Skin);
        game.IndexServerShortItemSkin = IndexServerShortItemSkin;
        egret.registerClass(IndexServerShortItemSkin,"skins.game.IndexServerShortItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
