var skins;
(function (skins) {
    var game;
    (function (game) {
        var BagLayerSkin = (function (_super) {
            __extends(BagLayerSkin, _super);
            function BagLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.tab_bag_i(), this.__17_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("btn_forge", "x", 207),
                        new egret.gui.SetProperty("btn_forge", "y", 6),
                        new egret.gui.SetProperty("btn_plus", "y", 6),
                        new egret.gui.SetProperty("label_grid", "y", 12)
                    ])
                ];
            }
            var d = __define,c=BagLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BagLayerSkin._skinParts;
                }
            );
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "s9g_dlg_1", 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [497, "eqp_forgeMidBg", 422, 6, 8]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "eqp_bottom", 519]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [462, 0.5, "s9g_black_0", 415, 14]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "horizontalGap", "paddingLeft", "paddingRight", "requestedColumnCount", "requestedRowCount"], ["left", 10, 10, 10, 4, 5]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [522, 0, 438, 94]);
                t.elementsContent = [this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.list_items_i(), this.grp_equip_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source"], [0, "panel_task_title"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "mod_txt_bag", 10]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "tab_txt_equip";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "tab_txt_item";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "btn_txt_g_state_n";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "tab_txt_box";
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 419, -1]);
                return t;
            };
            p.btn_forge_i = function () {
                var t = new egret.gui.Button();
                this.btn_forge = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_dissolve", skins.comp.Btn_3_4_Skin, 233, 49]);
                return t;
            };
            p.btn_plus_i = function () {
                var t = new egret.gui.Button();
                this.btn_plus = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_plus_Skin, 314, -1]);
                return t;
            };
            p.btn_sale_i = function () {
                var t = new egret.gui.Button();
                this.btn_sale = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_b_zhuangbeichushou", skins.comp.Btn_3_4_Skin, 4, 49]);
                return t;
            };
            p.grp_equip_i = function () {
                var t = new egret.gui.Group();
                this.grp_equip = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [82, 0, 478]);
                t.elementsContent = [this.btn_forge_i(), this.btn_sale_i(), this.btn_plus_i(), this.label_grid_i()];
                return t;
            };
            p.label_grid_i = function () {
                var t = new mo.gui.Label();
                this.label_grid = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "容量%s/%s", 0xCCCDB1, 200, 4]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [440, skins.game.BagCellSkin, 400, 19, 23]);
                t.layout = this.__16_i();
                return t;
            };
            p.__11_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            p.tab_bag_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_bag = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "skinName", "y"], [-7, skins.comp.TabBarBtn_1_Skin, skins.comp.TabBar_6_Skin, 58]);
                t.dataProvider = this.__11_i();
                return t;
            };
            BagLayerSkin._skinParts = ["tab_bag", "list_items", "btn_forge", "btn_sale", "btn_plus", "label_grid", "grp_equip", "btn_back"];
            return BagLayerSkin;
        })(egret.gui.Skin);
        game.BagLayerSkin = BagLayerSkin;
        egret.registerClass(BagLayerSkin,"skins.game.BagLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
