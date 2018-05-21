var skins;
(function (skins) {
    var base;
    (function (base) {
        var ItemRendererSkin = (function (_super) {
            __extends(ItemRendererSkin, _super);
            function ItemRendererSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.labelDisplay_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "strokeColor", 0x301818),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0xf0f0f0),
                        new egret.gui.SetProperty("labelDisplay", "size", 18)
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ItemRendererSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ItemRendererSkin._skinParts;
                }
            );
            p.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["bottom", "fontFamily", "left", "size", "textColor", "top"], [5, "Tahoma", 0, 17, 0x111111, 5]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Rect();
                this.__4 = t;
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [0, 0.3, 0x807F7F, 0, 0, 0]);
                return t;
            };
            ItemRendererSkin._skinParts = ["labelDisplay"];
            return ItemRendererSkin;
        })(egret.gui.Skin);
        base.ItemRendererSkin = ItemRendererSkin;
        egret.registerClass(ItemRendererSkin,"skins.base.ItemRendererSkin");
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
