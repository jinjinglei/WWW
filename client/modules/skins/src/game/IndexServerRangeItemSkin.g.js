var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexServerRangeItemSkin = (function (_super) {
            __extends(IndexServerRangeItemSkin, _super);
            function IndexServerRangeItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.btn_range_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("btn_range", "source", "btn_0_5_1")
                    ]),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=IndexServerRangeItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexServerRangeItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [0, 0, 10, 10]);
                t.layout = this.__4_i();
                t.elementsContent = [this.label_name_i()];
                return t;
            };
            p.btn_range_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_range = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "btn_0_5_0", 0, 10, 10]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "paddingLeft", "paddingRight", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "verticalAlign"], ["方正粗圆简体", 5, 5, 20, 1, 0x000036, "1服", "center", 0xFFFFFF, "middle"]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return t;
            };
            IndexServerRangeItemSkin._skinParts = ["btn_range", "label_name"];
            return IndexServerRangeItemSkin;
        })(egret.gui.Skin);
        game.IndexServerRangeItemSkin = IndexServerRangeItemSkin;
        egret.registerClass(IndexServerRangeItemSkin,"skins.game.IndexServerRangeItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
