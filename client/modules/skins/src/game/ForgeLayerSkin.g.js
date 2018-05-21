var skins;
(function (skins) {
    var game;
    (function (game) {
        var ForgeLayerSkin = (function (_super) {
            __extends(ForgeLayerSkin, _super);
            function ForgeLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.tab_str_i(), this.__9_i(), this.btn_do_i(), this.label_open_i(), this.container_i(), this.__12_i(), this.__15_i(), this.__18_i(), this.__21_i(), this.__24_i(), this.__27_i(), this.__30_i(), this.__33_i(), this.eq_0_i(), this.eq_1_i(), this.eq_2_i(), this.eq_3_i(), this.eq_11_i(), this.eq_10_i(), this.eq_9_i(), this.eq_8_i(), this.img_red0_i(), this.img_red1_i(), this.img_red2_i(), this.btn_help_i(), this.__34_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ForgeLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ForgeLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_weapon", 7, 6]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [42, 262]);
                t.elementsContent = [this.__10_i(), this.__11_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_clothes", 6, 6]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [42, 354]);
                t.elementsContent = [this.__13_i(), this.__14_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_bracelet", 10, 7]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [42, 447]);
                t.elementsContent = [this.__16_i(), this.__17_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring", 7, 5]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [42, 539]);
                t.elementsContent = [this.__19_i(), this.__20_i()];
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_necklace", 7, 5]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [362, 262]);
                t.elementsContent = [this.__22_i(), this.__23_i()];
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_helmet", 9, 6]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [362, 354]);
                t.elementsContent = [this.__25_i(), this.__26_i()];
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_bracelet", 8, 7]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [362, 447]);
                t.elementsContent = [this.__28_i(), this.__29_i()];
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring", 6, 4]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [362, 539]);
                t.elementsContent = [this.__31_i(), this.__32_i()];
                return t;
            };
            p.__34_i = function () {
                var t = new g_comp.ResBar();
                this.__s(t, ["skinName", "x", "y"], [skins.comp.ResBarSkin, 69, 681]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = {};
                t.label = "tab_txt_strength";
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "tab_txt_upstar";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "tab_txt_gem";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__4_i(), this.__5_i(), this.__6_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [445, 0, "s9g_dlg_1", 438, 227]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 60]);
                return t;
            };
            p.btn_do_i = function () {
                var t = new egret.gui.Button();
                this.btn_do = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_strength", skins.comp.Btn_3_0_Skin, 624]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 64]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Group();
                this.container = t;
                this.__s(t, ["bottom", "left", "right", "top"], [1, 0, 0, -1]);
                t.elementsContent = [this.img_border_light_i()];
                return t;
            };
            p.eq_0_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_0 = t;
                this.__s(t, ["x", "y"], [41, 263]);
                return t;
            };
            p.eq_10_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_10 = t;
                this.__s(t, ["verticalCenter", "x"], [-9.5, 361]);
                return t;
            };
            p.eq_11_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_11 = t;
                this.__s(t, ["verticalCenter", "x"], [-101.5, 361]);
                return t;
            };
            p.eq_1_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_1 = t;
                this.__s(t, ["x", "y"], [41, 354]);
                return t;
            };
            p.eq_2_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_2 = t;
                this.__s(t, ["x", "y"], [41, 448]);
                return t;
            };
            p.eq_3_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_3 = t;
                this.__s(t, ["x", "y"], [41, 539]);
                return t;
            };
            p.eq_8_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_8 = t;
                this.__s(t, ["x", "y"], [361, 540]);
                return t;
            };
            p.eq_9_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_9 = t;
                this.__s(t, ["x", "y"], [361, 448]);
                return t;
            };
            p.img_border_light_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_border_light = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [89, "border_light", 89, 35, 256]);
                return t;
            };
            p.img_red0_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red0 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 164, 186]);
                return t;
            };
            p.img_red1_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red1 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 258, 186]);
                return t;
            };
            p.img_red2_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red2 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 353, 186]);
                return t;
            };
            p.label_open_i = function () {
                var t = new mo.gui.Label();
                this.label_open = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 21, 18, "角色%s级才可继续升级", "center", 0xFF0000, 300, 90, 635]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.tab_str_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_str = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "y"], [40, 0, skins.comp.TabBarBtn_1_Skin, skins.comp.TabBar_6_Skin, 194]);
                t.dataProvider = this.__8_i();
                return t;
            };
            ForgeLayerSkin._skinParts = ["tab_str", "btn_do", "label_open", "img_border_light", "container", "eq_0", "eq_1", "eq_2", "eq_3", "eq_11", "eq_10", "eq_9", "eq_8", "img_red0", "img_red1", "img_red2", "btn_help", "btn_back"];
            return ForgeLayerSkin;
        })(egret.gui.Skin);
        game.ForgeLayerSkin = ForgeLayerSkin;
        egret.registerClass(ForgeLayerSkin,"skins.game.ForgeLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
