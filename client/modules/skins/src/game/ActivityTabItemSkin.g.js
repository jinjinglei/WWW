var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityTabItemSkin = (function (_super) {
            __extends(ActivityTabItemSkin, _super);
            function ActivityTabItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__6_i(), this.ico_titile_i(), this.ico_red_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("ico_titile", "horizontalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "verticalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "x", 10),
                        new egret.gui.SetProperty("ico_titile", "y", 10)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__6", "source", "btn_shangdiananliu_0"),
                        new egret.gui.SetProperty("ico_titile", "horizontalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "verticalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "x", 10),
                        new egret.gui.SetProperty("ico_titile", "y", 10)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("ico_titile", "horizontalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "verticalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "x", 10),
                        new egret.gui.SetProperty("ico_titile", "y", 10)
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__6", "source", "btn_shangdiananliu_0"),
                        new egret.gui.SetProperty("ico_titile", "horizontalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "verticalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "x", 10),
                        new egret.gui.SetProperty("ico_titile", "y", 10)
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__6", "source", "btn_shangdiananliu_0"),
                        new egret.gui.SetProperty("ico_titile", "horizontalCenter", 0),
                        new egret.gui.SetProperty("ico_titile", "verticalCenter", 0)
                    ])
                ];
            }
            var d = __define,c=ActivityTabItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityTabItemSkin._skinParts;
                }
            );
            p.ico_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 60, -3]);
                return t;
            };
            p.ico_titile_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_titile = t;
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__6 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "btn_shangdiananliu_1", 0]);
                return t;
            };
            ActivityTabItemSkin._skinParts = ["ico_titile", "ico_red"];
            return ActivityTabItemSkin;
        })(egret.gui.Skin);
        game.ActivityTabItemSkin = ActivityTabItemSkin;
        egret.registerClass(ActivityTabItemSkin,"skins.game.ActivityTabItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
