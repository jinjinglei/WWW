var skins;
(function (skins) {
    var game;
    (function (game) {
        var CustomListSkin = (function (_super) {
            __extends(CustomListSkin, _super);
            function CustomListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.img_title_i(), this.btn_close_i(), this.__6_i(), this.btn_help_i(), this.__7_i(), this.label_tickets_i(), this.__8_i(), this.__9_i(), this.tab_bag_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CustomListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CustomListSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = {};
                t.label = "tab_txt_hongzhuangdinzi";
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__10_i(), this.__11_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "bg_chunjiedituw", 10, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "s9g_dlg_1", 0, 10, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [639, 445, 19, 115]);
                t.elementsContent = [this.__4_i(), this.list_items_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.8, 0, "pre_定制装备2", 0, false]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "定制装备出售后可重新获得定制券1张", "center", 0x5487FF, 350, 65, 769]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [25, 15, "VIP14或更高VIP可获赠定制券，活动中也可获得", "center", 0x5487FF, "middle", 350, 65, 53]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, -6]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, -5]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["source", "x", "y"], ["tit_txt_dinzizhuangbei", 181, 13]);
                return t;
            };
            p.label_tickets_i = function () {
                var t = new mo.gui.Label();
                this.label_tickets = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [30, 20, "现有%s定制券:%s张", "center", 0xE7EE36, 200, 140, 125]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [575, skins.game.CustomItemSkin, 410, 18, 43]);
                t.layout = this.__5_i();
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "tab_txt_chenzhuangdinzi";
                return t;
            };
            p.tab_bag_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_bag = t;
                this.__s(t, ["height", "itemRendererSkinName", "scaleX", "skinName", "width", "x", "y"], [40, skins.comp.TabBarBtn_2_Skin, 0.95, skins.comp.TabBar_6_Skin, 232, 130, 78]);
                t.dataProvider = this.__13_i();
                return t;
            };
            CustomListSkin._skinParts = ["img_title", "btn_close", "list_items", "btn_help", "label_tickets", "tab_bag"];
            return CustomListSkin;
        })(egret.gui.Skin);
        game.CustomListSkin = CustomListSkin;
        egret.registerClass(CustomListSkin,"skins.game.CustomListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
