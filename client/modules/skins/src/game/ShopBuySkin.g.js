var skins;
(function (skins) {
    var game;
    (function (game) {
        var ShopBuySkin = (function (_super) {
            __extends(ShopBuySkin, _super);
            function ShopBuySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ShopBuySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ShopBuySkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [154, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 392, 2, 110]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [44, 0, egret.gui.getScale9Grid("6,3,38,23"), "s9g_translucent3", 74, 296]);
                return t;
            };
            p.__5_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "花费：", 0xB98C07, 114, 358]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [22, "请选择数量", 22, 273]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "name", "source", "top"], [-10, "icon", "ico_yuanbao", 7]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textColor", "x", "y"], ["num", 20, "9999", 0xDA9F00, 18, 3]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.btn_add_i = function () {
                var t = new egret.gui.Button();
                this.btn_add = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "width", "x", "y"], ["txt_buy_plus", "+", 0.6, skins.comp.Btn_3_7_Skin, 83, 256, 303]);
                return t;
            };
            p.btn_max_i = function () {
                var t = new egret.gui.Button();
                this.btn_max = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "x", "y"], ["txt_buy_jiasi", "max", 0.8, skins.comp.Btn_3_7_Skin, 323, 303]);
                return t;
            };
            p.btn_min_i = function () {
                var t = new egret.gui.Button();
                this.btn_min = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "x", "y"], ["txt_buy_jiansi", "min", 0.8, skins.comp.Btn_3_7_Skin, 0, 303]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_ok", "按钮", skins.comp.Btn_3_0_Skin, 139, 401]);
                return t;
            };
            p.btn_sub_i = function () {
                var t = new egret.gui.Button();
                this.btn_sub = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "width", "x", "y"], ["txt_buy_minus", "-", 0.6, skins.comp.Btn_3_7_Skin, 83, 91, 303]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [509, 0, skins.comp.Dlg_Close_0_Skin, 423, 152]);
                t.elementsContent = [this.__10_i()];
                return t;
            };
            p.grp_cost_i = function () {
                var t = new egret.gui.Group();
                this.grp_cost = t;
                this.__s(t, ["x", "y"], [193, 356]);
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["height", "x", "y"], [30, 191, 356]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__7_i(), this.__8_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [24, 0]);
                return t;
            };
            p.label_canBuyNum_i = function () {
                var t = new mo.gui.Label();
                this.label_canBuyNum = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "今日可购买", 111, 38]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "size", "text", "width", "x", "y"], [129, 22, "描述", 359, 18, 121]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [24, "名称", 0xB98C07, 111, 1]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "y"], [0, 22, "1", "left", 304]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [10, 46]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.ico_item_i(), this.label_name_i(), this.__5_i(), this.label_canBuyNum_i(), this.label_desc_i(), this.label_num_i(), this.__6_i(), this.btn_sub_i(), this.btn_min_i(), this.btn_add_i(), this.btn_max_i(), this.btn_ok_i(), this.grp_cost_i(), this.grp_res_i()];
                return t;
            };
            ShopBuySkin._skinParts = ["ico_item", "label_name", "label_canBuyNum", "label_desc", "label_num", "btn_sub", "btn_min", "btn_add", "btn_max", "btn_ok", "grp_cost", "grp_res", "container"];
            return ShopBuySkin;
        })(egret.gui.Skin);
        game.ShopBuySkin = ShopBuySkin;
        egret.registerClass(ShopBuySkin,"skins.game.ShopBuySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
