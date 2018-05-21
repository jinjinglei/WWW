var skins;
(function (skins) {
    var game;
    (function (game) {
        var ChuanchenSkin = (function (_super) {
            __extends(ChuanchenSkin, _super);
            function ChuanchenSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.tab_bag_i(), this.__11_i(), this.btn_close_i(), this.preview_i(), this.img_red0_i(), this.img_red1_i(), this.img_red2_i(), this.img_red3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ChuanchenSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ChuanchenSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [639, 445, 19, 125]);
                t.elementsContent = [this.__9_i(), this.list_items_i(), this.label_empty_i()];
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
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_xuanzechuanc", 150, 8]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "tab_txt_beibao";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "s9g_dlg_1", 0, 10, 10]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 419, -1]);
                return t;
            };
            p.img_red0_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red0 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 114, 80]);
                return t;
            };
            p.img_red1_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red1 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 224, 80]);
                return t;
            };
            p.img_red2_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red2 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 334, 80]);
                return t;
            };
            p.img_red3_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red3 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 434, 80]);
                return t;
            };
            p.label_empty_i = function () {
                var t = new egret.gui.Label();
                this.label_empty = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "y"], [34, 0.5, 20, "空空如也，干净如斯", 253]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [611, skins.game.CCEquipChooseItemSkin, 397, 15, 13]);
                t.layout = this.__10_i();
                return t;
            };
            p.preview_i = function () {
                var t = new egret.gui.UIAsset();
                this.preview = t;
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [100, 0, "pre_装备传承2", 0, false]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.tab_bag_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_bag = t;
                this.__s(t, ["height", "itemRendererSkinName", "scaleX", "skinName", "width", "x", "y"], [40, skins.comp.TabBarBtn_2_Skin, 0.95, skins.comp.TabBar_6_Skin, 454, 21, 88]);
                t.dataProvider = this.__8_i();
                return t;
            };
            ChuanchenSkin._skinParts = ["tab_bag", "list_items", "label_empty", "btn_close", "preview", "img_red0", "img_red1", "img_red2", "img_red3"];
            return ChuanchenSkin;
        })(egret.gui.Skin);
        game.ChuanchenSkin = ChuanchenSkin;
        egret.registerClass(ChuanchenSkin,"skins.game.ChuanchenSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
