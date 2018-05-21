var skins;
(function (skins) {
    var game;
    (function (game) {
        var ItemMergeSkin = (function (_super) {
            __extends(ItemMergeSkin, _super);
            function ItemMergeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ItemMergeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ItemMergeSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 5;
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [285, 0, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 375, 138]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [11, 45]);
                t.elementsContent = [this.ico_arrow0_i(), this.ico_arrow1_i(), this.ico_light_i(), this.ico_topItem0_i(), this.ico_topItem1_i(), this.ico_topItem2_i()];
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "获得途径：", "left", 0xDDA600, 180, 23, -3]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0, "btn_txt_g_back", skins.comp.Btn_3_0_Skin, 10, 448]);
                return t;
            };
            p.btn_merge_i = function () {
                var t = new egret.gui.Button();
                this.btn_merge = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_hecheng", skins.comp.Btn_3_0_Skin, 448]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [502, skins.comp.Dlg_Close_0_Skin, 396, 42, 140]);
                t.elementsContent = [this.__3_i(), this.btn_merge_i(), this.btn_back_i(), this.__4_i(), this.grp_gain_i(), this.label_name_i(), this.grp_merge_i(), this.list_gainWay_i()];
                return t;
            };
            p.grp_gain_i = function () {
                var t = new egret.gui.Group();
                this.grp_gain = t;
                this.__s(t, ["x", "y"], [11, 201]);
                t.elementsContent = [this.__5_i()];
                return t;
            };
            p.grp_merge_i = function () {
                var t = new egret.gui.Group();
                this.grp_merge = t;
                this.__s(t, ["x", "y"], [75, 153]);
                t.elementsContent = [this.ico_line1_i(), this.ico_line2_i(), this.ico_line3_i(), this.ico_fromItem0_i(), this.ico_fromItem2_i(), this.ico_toItem_i(), this.ico_fromItem1_i()];
                return t;
            };
            p.ico_arrow0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_arrow0 = t;
                this.__s(t, ["source", "x", "y"], ["ico_jiantou", 92, 19]);
                return t;
            };
            p.ico_arrow1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_arrow1 = t;
                this.__s(t, ["source", "x", "y"], ["ico_jiantou", 216, 19]);
                return t;
            };
            p.ico_fromItem0_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_fromItem0 = t;
                this.__s(t, ["x", "y"], [0, 162]);
                return t;
            };
            p.ico_fromItem1_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_fromItem1 = t;
                this.__s(t, ["x", "y"], [174, 162]);
                return t;
            };
            p.ico_fromItem2_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_fromItem2 = t;
                this.__s(t, ["x", "y"], [88, 162]);
                return t;
            };
            p.ico_light_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_light = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [105, "ico_waifaguang", 81, 0, 0]);
                return t;
            };
            p.ico_line1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_line1 = t;
                this.__s(t, ["rotation", "source", "x", "y"], [270, "btn_next2", 101, 151]);
                return t;
            };
            p.ico_line2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_line2 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_xian2", 122]);
                return t;
            };
            p.ico_line3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_line3 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_xian3", 122]);
                return t;
            };
            p.ico_toItem_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_toItem = t;
                this.__s(t, ["x", "y"], [88, 49]);
                return t;
            };
            p.ico_topItem0_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_topItem0 = t;
                this.__s(t, ["x", "y"], [4, 4]);
                return t;
            };
            p.ico_topItem1_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_topItem1 = t;
                this.__s(t, ["x", "y"], [129, 4]);
                return t;
            };
            p.ico_topItem2_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_topItem2 = t;
                this.__s(t, ["x", "y"], [252, 4]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["bold", "size", "text", "textAlign", "textColor", "width", "x", "y"], [true, 24, "巨力斧头", "center", 0xDDA600, 180, 108, 154]);
                return t;
            };
            p.list_gainWay_i = function () {
                var t = new egret.gui.List();
                this.list_gainWay = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "visible", "y"], [177, 0, skins.game.GainWayItemSkin, false, 230]);
                t.layout = this.__11_i();
                t.dataProvider = this.__10_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            ItemMergeSkin._skinParts = ["btn_merge", "btn_back", "ico_arrow0", "ico_arrow1", "ico_light", "ico_topItem0", "ico_topItem1", "ico_topItem2", "grp_gain", "label_name", "ico_line1", "ico_line2", "ico_line3", "ico_fromItem0", "ico_fromItem2", "ico_toItem", "ico_fromItem1", "grp_merge", "list_gainWay", "container"];
            return ItemMergeSkin;
        })(egret.gui.Skin);
        game.ItemMergeSkin = ItemMergeSkin;
        egret.registerClass(ItemMergeSkin,"skins.game.ItemMergeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
