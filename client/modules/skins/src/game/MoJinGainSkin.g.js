var skins;
(function (skins) {
    var game;
    (function (game) {
        var MoJinGainSkin = (function (_super) {
            __extends(MoJinGainSkin, _super);
            function MoJinGainSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.list_items_i(), this.btn_close_i(), this.__8_i(), this.__11_i(), this.btn_again1_i(), this.btn_again2_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MoJinGainSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MoJinGainSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [40, 290, 601]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__9_i(), this.label_ten_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [536, egret.gui.getScale9Grid("7,7,386,253"), "s9g_gold_edge", 479, 1, 116]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_treastuseget", 30, 98]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "paddingLeft", "paddingRight", "paddingTop", "requestedColumnCount", "verticalGap"], [24, 12, 12, 5, 4, 15]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold_bars", 0, 3]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [40, 83, 601]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__6_i(), this.label_once_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold_bars", 0, 3]);
                return t;
            };
            p.btn_again1_i = function () {
                var t = new egret.gui.Button();
                this.btn_again1 = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["btn_txt_g_tanbao1", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 75, 563]);
                return t;
            };
            p.btn_again2_i = function () {
                var t = new egret.gui.Button();
                this.btn_again2 = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["btn_txt_g_tanbao10", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 284, 563]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["right", "source", "y"], [2, "btn_close_0", 102]);
                return t;
            };
            p.label_once_i = function () {
                var t = new mo.gui.Label();
                this.label_once = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.label_ten_i = function () {
                var t = new mo.gui.Label();
                this.label_ten = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [318, 0, skins.game.BaseItemCellSkin, 400, 203]);
                t.layout = this.__5_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            MoJinGainSkin._skinParts = ["list_items", "btn_close", "label_once", "label_ten", "btn_again1", "btn_again2"];
            return MoJinGainSkin;
        })(egret.gui.Skin);
        game.MoJinGainSkin = MoJinGainSkin;
        egret.registerClass(MoJinGainSkin,"skins.game.MoJinGainSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
