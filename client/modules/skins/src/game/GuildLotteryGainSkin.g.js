var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildLotteryGainSkin = (function (_super) {
            __extends(GuildLotteryGainSkin, _super);
            function GuildLotteryGainSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.list_items_i(), this.btn_close_i(), this.__9_i(), this.__13_i(), this.btn_again1_i(), this.btn_again2_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildLotteryGainSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildLotteryGainSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "积分", "left", 0xFFFFFF, 34, 10]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "y"], [40, 100, 561]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__10_i(), this.label_cost10_i(), this.__11_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [450, egret.gui.getScale9Grid("7,7,386,253"), "s9g_gold_edge", 479, 1, 166]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["blk_treastuseget", 30, 148]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["paddingLeft", "paddingRight", "paddingTop", "requestedColumnCount", "verticalGap"], [5, 5, 5, 5, 20]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "消耗", "left", 0xFFFFFF, 24, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "积分", "left", 0xFFFFFF, 34, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "y"], [40, -100, 561]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__6_i(), this.label_cost_i(), this.__7_i()];
                return t;
            };
            p.btn_again1_i = function () {
                var t = new egret.gui.Button();
                this.btn_again1 = t;
                this.__s(t, ["horizontalCenter", "icon", "scaleX", "scaleY", "skinName", "y"], [-100, "btn_txt_g_tanbao1", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 523]);
                return t;
            };
            p.btn_again2_i = function () {
                var t = new egret.gui.Button();
                this.btn_again2 = t;
                this.__s(t, ["horizontalCenter", "icon", "scaleX", "scaleY", "skinName", "x", "y"], [100, "btn_txt_g_tanbao10", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 284, 523]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["right", "source", "y"], [2, "btn_close_0", 152]);
                return t;
            };
            p.label_cost10_i = function () {
                var t = new mo.gui.Label();
                this.label_cost10 = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xFFD620, 34, 10]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_cost = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xFFD620, 34, 10]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [220, skins.game.BaseItemCellSkin, 400, 40, 253]);
                t.layout = this.__5_i();
                return t;
            };
            p.__10_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "消耗", "left", 0xFFFFFF, 24, 0]);
                return t;
            };
            GuildLotteryGainSkin._skinParts = ["list_items", "btn_close", "label_cost", "label_cost10", "btn_again1", "btn_again2"];
            return GuildLotteryGainSkin;
        })(egret.gui.Skin);
        game.GuildLotteryGainSkin = GuildLotteryGainSkin;
        egret.registerClass(GuildLotteryGainSkin,"skins.game.GuildLotteryGainSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
