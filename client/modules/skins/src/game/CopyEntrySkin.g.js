var skins;
(function (skins) {
    var game;
    (function (game) {
        var CopyEntrySkin = (function (_super) {
            __extends(CopyEntrySkin, _super);
            function CopyEntrySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.img_title_i(), this.btn_close_i(), this.list_copys_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CopyEntrySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CopyEntrySkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.8, 0, "pre_冒险副本整合", 0, false]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 10]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_fubengmaoxian", 30]);
                return t;
            };
            p.list_copys_i = function () {
                var t = new egret.gui.List();
                this.list_copys = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [638, -1, skins.game.CopyEntryItemSkin, 422, 102]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_maoxianfbdi", 0]);
                return t;
            };
            CopyEntrySkin._skinParts = ["img_title", "btn_close", "list_copys"];
            return CopyEntrySkin;
        })(egret.gui.Skin);
        game.CopyEntrySkin = CopyEntrySkin;
        egret.registerClass(CopyEntrySkin,"skins.game.CopyEntrySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
