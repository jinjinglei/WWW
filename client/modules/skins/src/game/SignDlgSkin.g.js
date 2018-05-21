var skins;
(function (skins) {
    var game;
    (function (game) {
        var SignDlgSkin = (function (_super) {
            __extends(SignDlgSkin, _super);
            function SignDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.__4_i(), this.label_month_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SignDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SignDlgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_sign", 200, 38]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "verticalCenter", "width"], [654, 0, skins.comp.Dlg_Close_0_Skin, -30, 422]);
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.label_month_i = function () {
                var t = new egret.gui.Label();
                this.label_month = t;
                this.__s(t, ["height", "size", "stroke", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [42, 30, 1, "1", "center", 0xDEB00F, "middle", 36, 167, 29]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "verticalCenter", "width"], [600, 0, skins.game.SignItemSkin, 20, 430]);
                t.layout = this.__3_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalAlign", "horizontalGap", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", 0, 5, 6, 0]);
                return t;
            };
            SignDlgSkin._skinParts = ["list_items", "container", "label_month"];
            return SignDlgSkin;
        })(egret.gui.Skin);
        game.SignDlgSkin = SignDlgSkin;
        egret.registerClass(SignDlgSkin,"skins.game.SignDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
