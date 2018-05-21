var skins;
(function (skins) {
    var game;
    (function (game) {
        var BagOpenBoxSkin = (function (_super) {
            __extends(BagOpenBoxSkin, _super);
            function BagOpenBoxSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.btn_sub_i(), this.btn_min_i(), this.btn_add_i(), this.btn_max_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BagOpenBoxSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BagOpenBoxSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [44, 0, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 74, 300]);
                return t;
            };
            p.__5_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "请选择数量", 17, 275]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "消耗：", 53, 8]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [31, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 138, 199, 2]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [392, -3, 38]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.ico_item_i(), this.label_name_i(), this.label_desc_i(), this.label_num_i(), this.__5_i(), this.btn_ok_i(), this.grp_cost_i()];
                return t;
            };
            p.btn_add_i = function () {
                var t = new egret.gui.Button();
                this.btn_add = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "width", "x", "y"], ["txt_buy_plus", "+", 0.6, skins.comp.Btn_3_7_Skin, 83, 283, 496]);
                return t;
            };
            p.btn_max_i = function () {
                var t = new egret.gui.Button();
                this.btn_max = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "x", "y"], ["txt_buy_max", "max", 0.8, skins.comp.Btn_3_7_Skin, 349, 496]);
                return t;
            };
            p.btn_min_i = function () {
                var t = new egret.gui.Button();
                this.btn_min = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "x", "y"], ["txt_buy_minest", "min", 0.8, skins.comp.Btn_3_7_Skin, 46, 496]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_ok", "按钮", skins.comp.Btn_3_0_Skin, 137, 367]);
                return t;
            };
            p.btn_sub_i = function () {
                var t = new egret.gui.Button();
                this.btn_sub = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "width", "x", "y"], ["txt_buy_minus", "-", 0.6, skins.comp.Btn_3_7_Skin, 83, 134, 496]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "skinName", "title", "width", "x", "y"], [480, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_useBox", 398, 39, 152]);
                t.elementsContent = [this.__8_i()];
                return t;
            };
            p.grp_cost_i = function () {
                var t = new egret.gui.Group();
                this.grp_cost = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 408]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.ico_itemCost_i(), this.label_itemCostName_i(), this.label_itemCostNum_i()];
                return t;
            };
            p.ico_itemCost_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_itemCost = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 40, 99, 0]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [15, 0]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "size", "text", "width", "x", "y"], [145, 22, "描述", 345, 24, 110]);
                return t;
            };
            p.label_itemCostName_i = function () {
                var t = new egret.gui.Label();
                this.label_itemCostName = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "三个字", 0xD60F99, 138, 7]);
                return t;
            };
            p.label_itemCostNum_i = function () {
                var t = new egret.gui.Label();
                this.label_itemCostNum = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "标签", "right", 0xFFFFFF, 130, 203, 7]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [26, "名称", 0xB98C07, 99, 3]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0.5, 22, "1", 308]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [167, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 370, 11, 101]);
                return t;
            };
            BagOpenBoxSkin._skinParts = ["ico_item", "label_name", "label_desc", "label_num", "btn_ok", "ico_itemCost", "label_itemCostName", "label_itemCostNum", "grp_cost", "container", "btn_sub", "btn_min", "btn_add", "btn_max"];
            return BagOpenBoxSkin;
        })(egret.gui.Skin);
        game.BagOpenBoxSkin = BagOpenBoxSkin;
        egret.registerClass(BagOpenBoxSkin,"skins.game.BagOpenBoxSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
