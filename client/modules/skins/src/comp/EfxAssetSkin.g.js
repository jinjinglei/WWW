var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var EfxAssetSkin = (function (_super) {
            __extends(EfxAssetSkin, _super);
            function EfxAssetSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.ico_i(), this.efx_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EfxAssetSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EfxAssetSkin._skinParts;
                }
            );
            p.ico_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico = t;
                this.__s(t, ["autoScale", "bottom", "left", "right", "source", "top"], [true, 0, 0, 0, "ico_activity", 0]);
                return t;
            };
            p.efx_i = function () {
                var t = new g_comp.UIEffect();
                this.efx = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return t;
            };
            EfxAssetSkin._skinParts = ["ico", "efx"];
            return EfxAssetSkin;
        })(egret.gui.Skin);
        comp.EfxAssetSkin = EfxAssetSkin;
        egret.registerClass(EfxAssetSkin,"skins.comp.EfxAssetSkin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
