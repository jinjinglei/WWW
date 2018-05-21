var skins;
(function (skins) {
    var game;
    (function (game) {
        var CopyLootSkin = (function (_super) {
            __extends(CopyLootSkin, _super);
            function CopyLootSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.titleDisplay_i(), this.grp_res0_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CopyLootSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CopyLootSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "x", "y"], ["楷体", 22, 20, "消耗", 13750708, 55, 380]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_g_copyloot", 158, 41]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "paddingLeft", "paddingRight", "requestedColumnCount"], [23, 15, 15, 4]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.btn_buy_times_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy_times = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_plus_Skin, 292, 334]);
                return t;
            };
            p.btn_enter_i = function () {
                var t = new egret.gui.Button();
                this.btn_enter = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_enter", skins.comp.Btn_3_1_Skin, 232, 419]);
                return t;
            };
            p.btn_sweep_i = function () {
                var t = new egret.gui.Button();
                this.btn_sweep = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["saodang", skins.comp.Btn_3_1_Skin, 52, 420]);
                return t;
            };
            p.btn_wipe_i = function () {
                var t = new egret.gui.Button();
                this.btn_wipe = t;
                this.__s(t, ["icon", "skinName", "visible", "x", "y"], ["btn_txt_g_wipe", skins.comp.Btn_3_1_Skin, false, 268, 429]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [480, 0, skins.comp.Dlg_Close_0_Skin, 400, 125]);
                t.elementsContent = [this.__3_i(), this.label_rest_i(), this.__4_i(), this.btn_enter_i(), this.btn_sweep_i(), this.btn_wipe_i(), this.__5_i(), this.btn_buy_times_i(), this.label_cost_i(), this.list_items_i(), this.label_saoDang_i()];
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "visible", "x", "y"], [30, false, 147, 503]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__7_i(), this.__8_i()];
                return t;
            };
            p.label_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_cost = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [20, "装备入场券：9/1", "left", 0xD1D1B4, 103, 380]);
                return t;
            };
            p.label_rest_i = function () {
                var t = new mo.gui.Label();
                this.label_rest = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["楷体", 22, 20, "今日剩余挑战次数 %s", 13750708, 237, 54, 341]);
                return t;
            };
            p.label_saoDang_i = function () {
                var t = new mo.gui.Label();
                this.label_saoDang = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [-87, 14, "立即成功挑战副本%s次", 0xFAF33D, 460]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [220, 0, skins.game.BaseItemCellSkin, 400, 88]);
                t.layout = this.__6_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [253, 1, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 400, 73]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new egret.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["height", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "verticalAlign", "y"], [42, 0, 22, 1, "1", "center", 0xDEB00F, "middle", 110]);
                return t;
            };
            CopyLootSkin._skinParts = ["label_rest", "btn_enter", "btn_sweep", "btn_wipe", "btn_buy_times", "label_cost", "list_items", "label_saoDang", "container", "titleDisplay", "grp_res0"];
            return CopyLootSkin;
        })(egret.gui.Skin);
        game.CopyLootSkin = CopyLootSkin;
        egret.registerClass(CopyLootSkin,"skins.game.CopyLootSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
