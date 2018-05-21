var skins;
(function (skins) {
    var game;
    (function (game) {
        var CustomPropItemSkin = (function (_super) {
            __extends(CustomPropItemSkin, _super);
            function CustomPropItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [40, 400]);
                this.elementsContent = [this.__4_i(), this.label_prop_i(), this.img_gou_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("img_gou", "visible", false)
                    ]),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("img_gou", "visible", false)
                    ])
                ];
            }
            var d = __define,c=CustomPropItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CustomPropItemSkin._skinParts;
                }
            );
            p.img_gou_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_gou = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_gouxfs", 0, 369]);
                return t;
            };
            p.label_prop_i = function () {
                var t = new mo.gui.Label();
                this.label_prop = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "width", "x"], [18, "%s:%s+%s", "center", 0xFAE102, 0.5, 300, 21]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_disfg", 0, 0]);
                return t;
            };
            CustomPropItemSkin._skinParts = ["label_prop", "img_gou"];
            return CustomPropItemSkin;
        })(egret.gui.Skin);
        game.CustomPropItemSkin = CustomPropItemSkin;
        egret.registerClass(CustomPropItemSkin,"skins.game.CustomPropItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
