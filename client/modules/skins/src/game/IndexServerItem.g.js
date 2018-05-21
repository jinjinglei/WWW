var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexServerItem = (function (_super) {
            __extends(IndexServerItem, _super);
            function IndexServerItem() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("imgChoose", "visible", false),
                        new egret.gui.SetProperty("__4", "verticalCenter", 0),
                        new egret.gui.SetProperty("__4", "horizontalCenter", 0),
                        new egret.gui.SetProperty("", "width", 78),
                        new egret.gui.SetProperty("", "height", 78)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__3", "source", "dibanxz_12"),
                        new egret.gui.SetProperty("__4", "left", 0),
                        new egret.gui.SetProperty("__4", "right", 0),
                        new egret.gui.SetProperty("__4", "top", 0),
                        new egret.gui.SetProperty("__4", "bottom", 0)
                    ])
                ];
            }
            var d = __define,c=IndexServerItem,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexServerItem._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__4 = t;
                t.elementsContent = [this.imgChoose_i(), this.towerNode_i()];
                return t;
            };
            p.imgChoose_i = function () {
                var t = new egret.gui.UIAsset();
                this.imgChoose = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "dibanxz_12", 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__3 = t;
                t.source = "dibanct_12";
                return t;
            };
            p.towerNode_i = function () {
                var t = new egret.gui.Group();
                this.towerNode = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.elementsContent = [this.__3_i()];
                return t;
            };
            IndexServerItem._skinParts = ["imgChoose", "towerNode"];
            return IndexServerItem;
        })(egret.gui.Skin);
        game.IndexServerItem = IndexServerItem;
        egret.registerClass(IndexServerItem,"skins.game.IndexServerItem");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
