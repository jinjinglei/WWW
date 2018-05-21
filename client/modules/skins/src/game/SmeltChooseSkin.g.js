var skins;
(function (skins) {
    var game;
    (function (game) {
        var SmeltChooseSkin = (function (_super) {
            __extends(SmeltChooseSkin, _super);
            function SmeltChooseSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__6_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SmeltChooseSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SmeltChooseSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [468, 0.5, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 405, 23]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "requestedColumnCount", "requestedRowCount"], ["left", 4, 5]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [522, 0, 438, 94]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.list_items_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 428, 83]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [442, skins.game.BagCellSkin, 369, 34, 33]);
                t.layout = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [12, 0, 0, "s9g_dlg_1", 0]);
                return t;
            };
            SmeltChooseSkin._skinParts = ["list_items", "btn_close"];
            return SmeltChooseSkin;
        })(egret.gui.Skin);
        game.SmeltChooseSkin = SmeltChooseSkin;
        egret.registerClass(SmeltChooseSkin,"skins.game.SmeltChooseSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
