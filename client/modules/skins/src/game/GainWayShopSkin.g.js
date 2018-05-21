var skins;
(function (skins) {
    var game;
    (function (game) {
        var GainWayShopSkin = (function (_super) {
            __extends(GainWayShopSkin, _super);
            function GainWayShopSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GainWayShopSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GainWayShopSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 215]);
                t.elementsContent = [this.btn_max_i(), this.btn_add_i(), this.btn_min_i(), this.btn_sub_i(), this.__10_i(), this.label_num_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_yuanbao", 169, 46]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "单价：", 0xFFFFFF, 106, 41]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "right", "y"], [0, 0, 70]);
                t.elementsContent = [this.label_name_i(), this.ico_item_i(), this.__12_i(), this.label_costOne_i(), this.__13_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_fromstore", 40]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_getitbitch", 375]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "y"], [86, 0.5, egret.gui.getScale9Grid("53,4,323,24"), "title_bg", 258]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [38, egret.gui.getScale9Grid("6,3,38,23"), "s9g_translucent3", 140, 123, 260]);
                return t;
            };
            p.__19_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "购买总价：", 0xFFFFFF, 21, 266]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_yuanbao", 129, 271]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [257, 0.5, egret.gui.getScale9Grid("7,7,386,253"), "s9g_gold_edge", 361, 357]);
                return t;
            };
            p.__4_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__4_i(), this.__5_i(), this.__6_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 5;
                return t;
            };
            p.btn_add_i = function () {
                var t = new egret.gui.Button();
                this.btn_add = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "width", "x", "y"], ["txt_buy_plus", "+", 0.6, skins.comp.Btn_3_7_Skin, 83, 256, 3]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_back", "按钮", skins.comp.Btn_3_0_Skin, 629]);
                return t;
            };
            p.btn_max_i = function () {
                var t = new egret.gui.Button();
                this.btn_max = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "x", "y"], ["txt_buy_jiasi", "max", 0.8, skins.comp.Btn_3_7_Skin, 323, 3]);
                return t;
            };
            p.btn_min_i = function () {
                var t = new egret.gui.Button();
                this.btn_min = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "x", "y"], ["txt_buy_jiansi", "min", 0.8, skins.comp.Btn_3_7_Skin, 0, 3]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["icon", "isPopUp", "skinName", "x", "y"], ["btn_txt_g_buy", true, skins.comp.Btn_3_1_Skin, 257, 302]);
                return t;
            };
            p.btn_recharge_i = function () {
                var t = new egret.gui.Button();
                this.btn_recharge = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_recharge", "按钮", skins.comp.Btn_3_1_Skin, 50, 302]);
                return t;
            };
            p.btn_sub_i = function () {
                var t = new egret.gui.Button();
                this.btn_sub = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "width", "x", "y"], ["txt_buy_minus", "-", 0.6, skins.comp.Btn_3_7_Skin, 83, 91, 3]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [668, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_waytoget", 0, 438]);
                t.elementsContent = [this.__3_i(), this.list_gainWay_i(), this.btn_back_i(), this.label_canBuyNum_i(), this.__11_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.label_noOut_i(), this.__20_i(), this.label_costAll_i(), this.btn_recharge_i(), this.btn_ok_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [20, 0]);
                return t;
            };
            p.label_canBuyNum_i = function () {
                var t = new mo.gui.Label();
                this.label_canBuyNum = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "今日可购买", 15, 177]);
                return t;
            };
            p.label_costAll_i = function () {
                var t = new mo.gui.Label();
                this.label_costAll = t;
                this.__s(t, ["size", "text", "x", "y"], [22, "1", 171, 267]);
                return t;
            };
            p.label_costOne_i = function () {
                var t = new mo.gui.Label();
                this.label_costOne = t;
                this.__s(t, ["name", "size", "text", "textColor", "x", "y"], ["num", 20, "9999", 0xFFFFFF, 205, 44]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 24, "巨力斧头", 0xDDA600, 107, 4]);
                return t;
            };
            p.label_noOut_i = function () {
                var t = new mo.gui.Label();
                this.label_noOut = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 30, "暂无产出", 0xFFFFFF, 488]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0.5, 22, "1", 6]);
                return t;
            };
            p.list_gainWay_i = function () {
                var t = new egret.gui.List();
                this.list_gainWay = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "x", "y"], [185, 0.5, skins.game.GainWayItemSkin, 347, 10, 420]);
                t.layout = this.__9_i();
                t.dataProvider = this.__8_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [38, egret.gui.getScale9Grid("6,3,38,23"), "s9g_translucent3", 74, 162, 0]);
                return t;
            };
            GainWayShopSkin._skinParts = ["list_gainWay", "btn_back", "label_canBuyNum", "btn_max", "btn_add", "btn_min", "btn_sub", "label_num", "label_name", "ico_item", "label_costOne", "label_noOut", "label_costAll", "btn_recharge", "btn_ok", "container"];
            return GainWayShopSkin;
        })(egret.gui.Skin);
        game.GainWayShopSkin = GainWayShopSkin;
        egret.registerClass(GainWayShopSkin,"skins.game.GainWayShopSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
