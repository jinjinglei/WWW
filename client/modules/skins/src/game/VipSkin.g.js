var skins;
(function (skins) {
    var game;
    (function (game) {
        var VipSkin = (function (_super) {
            __extends(VipSkin, _super);
            function VipSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.scroller_i(), this.list_items_i(), this.__12_i(), this.btn_prev_i(), this.btn_next_i(), this.__13_i(), this.__17_i(), this.__22_i(), this.label_vipCost_i(), this.__30_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=VipSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VipSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_wing_1", 49, 303]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_vip_0", 95]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_vip_0", 0, 3]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_vip_libao", 67, 2]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 550]);
                t.layout = this.__16_i();
                t.elementsContent = [this.__14_i(), this.label_showVip_liBao_i(), this.__15_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("verticalAlign", "bottom");
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 35, "ico_vip", 58, 0, -12]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [29, 76, -139, 413]);
                t.elementsContent = [this.__18_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_vip_fuli", 57, 1]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [27, 0.5, 135, 313]);
                t.layout = this.__21_i();
                t.elementsContent = [this.__19_i(), this.label_showVip_i(), this.__20_i()];
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_recharge_bg", 0, 15]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_0", 12, 21]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_recharge_bg_0", 74, 2]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["txt_formorevipcharge_2", 0, 30]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 66, 33]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["txt_formorevipcharge_1", 0, 0]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 61, 5]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [49, 156]);
                t.elementsContent = [this.__23_i(), this.label_vip_i(), this.__24_i(), this.bar_recharge_i(), this.btn_lookRecharge_i(), this.grp_next_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "panel_bg_vip", 0, 10, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "x", "y"], [534, 0, egret.gui.getScale9Grid("50,120,306,15"), "panel_recharge_bg_3", 10, 150]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "touchEnabled", "y"], [0, "ntc_tit_rechrage", false, 63]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [233, 0, egret.gui.getScale9Grid("26,22,74,177"), "panel_shop_item", 389, 303]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "y"], [30, 0.5, "btn_server_item_1", 273]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "x", "y"], [102, egret.gui.getScale9Grid("7,7,386,253"), "s9g_gold_edge", 40, 572]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["ico_frame_0", 399, 42, 554]);
                return t;
            };
            p.bar_recharge_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_recharge = t;
                this.__s(t, ["maximum", "skinName", "x", "y"], [100, skins.comp.Bar_Recharge_Skin, 21, 67]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 428, 109]);
                return t;
            };
            p.btn_lookRecharge_i = function () {
                var t = new egret.gui.Button();
                this.btn_lookRecharge = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["ico_vip_chongzhi_0", skins.comp.Btn_vip_Skin, 315, 0]);
                return t;
            };
            p.btn_next_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_next = t;
                this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [-1, 0.8, "ntc_page_turner", 368, 302]);
                return t;
            };
            p.btn_prev_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_prev = t;
                this.__s(t, ["scaleY", "source", "x", "y"], [0.8, "ntc_page_turner", 114, 302]);
                return t;
            };
            p.grp_next_i = function () {
                var t = new egret.gui.Group();
                this.grp_next = t;
                this.__s(t, ["x", "y"], [117, 8]);
                t.elementsContent = [this.__25_i(), this.__26_i(), this.__27_i(), this.label_nextVip_i(), this.__28_i(), this.label_nextRecharge_i(), this.__29_i()];
                return t;
            };
            p.label_nextRecharge_i = function () {
                var t = new mo.gui.Label();
                this.label_nextRecharge = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 20, "000000", 0xF4C244, 90, 2]);
                return t;
            };
            p.label_nextVip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_nextVip = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "0", 106, 32]);
                return t;
            };
            p.label_showVip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_showVip = t;
                this.__s(t, ["font", "text", "x", "y"], ["vip_font", "0", 52, 0]);
                return t;
            };
            p.label_showVip_liBao_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_showVip_liBao = t;
                this.__s(t, ["font", "scaleX", "scaleY", "text", "x", "y"], ["vip_font", 0.85, 0.85, "0", 45, 0]);
                return t;
            };
            p.label_vipCost_i = function () {
                var t = new egret.gui.Label();
                this.label_vipCost = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "strokeColor", "text", "textColor", "y"], [0, 20, 1, 0x95641d, "标签", 0xfffaa3, 277]);
                return t;
            };
            p.label_vipInfo_i = function () {
                var t = new mo.gui.Label();
                this.label_vipInfo = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xEABD6F, 5, 4]);
                return t;
            };
            p.label_vip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vip = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "0", 56, 21]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "skinName", "width", "x", "y"], [93, skins.game.BaseItemCellSkin, skins.comp.List_Empty_H_Skin, 394, 42, 577]);
                t.layout = this.__11_i();
                return t;
            };
            p.scroller_i = function () {
                var t = new egret.gui.Scroller();
                this.scroller = t;
                this.__s(t, ["height", "horizontalCenter", "horizontalScrollPolicy", "width", "y"], [174, -0.5, "off", 355, 348]);
                t.viewport = this.__10_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                t.width = 359;
                t.elementsContent = [this.label_vipInfo_i()];
                return t;
            };
            VipSkin._skinParts = ["btn_close", "label_vipInfo", "scroller", "list_items", "btn_prev", "btn_next", "label_showVip_liBao", "label_showVip", "label_vipCost", "label_vip", "bar_recharge", "btn_lookRecharge", "label_nextVip", "label_nextRecharge", "grp_next"];
            return VipSkin;
        })(egret.gui.Skin);
        game.VipSkin = VipSkin;
        egret.registerClass(VipSkin,"skins.game.VipSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
