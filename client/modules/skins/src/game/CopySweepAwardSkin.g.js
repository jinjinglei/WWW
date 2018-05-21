var skins;
(function (skins) {
    var game;
    (function (game) {
        var CopySweepAwardSkin = (function (_super) {
            __extends(CopySweepAwardSkin, _super);
            function CopySweepAwardSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.titleDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CopySweepAwardSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CopySweepAwardSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["saodao_awrad", 114, 41]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "paddingLeft", "paddingRight", "requestedColumnCount"], [23, 15, 15, 4]);
                return t;
            };
            p.btn_enter_i = function () {
                var t = new egret.gui.Button();
                this.btn_enter = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_3_1_Skin, 133, 375]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [480, 0, skins.comp.Dlg_Close_0_Skin, 400, 125]);
                t.elementsContent = [this.__3_i(), this.btn_enter_i(), this.__4_i(), this.label_cost_i(), this.list_items_i(), this.sweep_num_i()];
                return t;
            };
            p.label_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_cost = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [20, "确定（0）", "left", 0xE6CB22, 157, 380]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [220, 0, skins.game.BaseItemCellSkin, 400, 88]);
                t.layout = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [253, 1, "s9g_black_0", 400, 73]);
                return t;
            };
            p.sweep_num_i = function () {
                var t = new egret.gui.Label();
                this.sweep_num = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [20, "本次操作扫荡副本%s次", "left", 0xEFD950, 99, 418]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new egret.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["height", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "verticalAlign", "y"], [42, 0, 22, 1, "1", "center", 0xDEB00F, "middle", 110]);
                return t;
            };
            CopySweepAwardSkin._skinParts = ["btn_enter", "label_cost", "list_items", "sweep_num", "container", "titleDisplay"];
            return CopySweepAwardSkin;
        })(egret.gui.Skin);
        game.CopySweepAwardSkin = CopySweepAwardSkin;
        egret.registerClass(CopySweepAwardSkin,"skins.game.CopySweepAwardSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
