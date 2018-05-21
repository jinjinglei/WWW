var skins;
(function (skins) {
    var game;
    (function (game) {
        var TuLongWanbaSkin = (function (_super) {
            __extends(TuLongWanbaSkin, _super);
            function TuLongWanbaSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__7_i(), this.bar_recharge_i(), this.__8_i(), this.label_vip_i(), this.grp_equip0_i(), this.grp_equip1_i(), this.grp_equip2_i(), this.btn_close_i(), this.grp_recharge_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TuLongWanbaSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TuLongWanbaSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textColor", "x", "y"], ["label_str_lvl", 18, "强化等级: %s%s", 0xDDA600, 0, 62]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textColor", "x", "y"], ["label_name", 22, "屠龙", 0xDDA600, 20, 82]);
                return t;
            };
            p.__14_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "x", "y"], ["label_desc", 18, "评分", "left", 0, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textColor", "x", "y"], ["label_str_lvl", 18, "强化等级: %s%s", 0xDDA600, 0, 62]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__17_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textColor", "x", "y"], ["label_name", 22, "屠龙", 0xDDA600, 30, 92]);
                return t;
            };
            p.__18_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "x", "y"], ["label_desc", 18, "评分", "left", 0, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textColor", "x", "y"], ["label_str_lvl", 18, "强化等级: %s%s", 0xDDA600, 0, 62]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Button();
                this.__s(t, ["name", "skinName", "x", "y"], ["btn", skins.comp.Btn_0_6_Skin, 0, 0]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled"], ["btn_txt_recharge", false]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["font", "name", "paddingTop", "text", "touchEnabled"], ["num_10", "label_cost", -3, "6", false]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_xingxing";
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 12]);
                t.layout = this.__25_i();
                t.elementsContent = [this.__22_i(), this.__23_i(), this.__24_i()];
                return t;
            };
            p.__27_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "name", "size", "style", "text", "y"], [0.5, "label_get", 16, 5000, "获得%sVIP经验", 45]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["und_phone3r", -5, 12]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [94, egret.gui.getScale9Grid("49,5,300,91"), "s9g_translucent3", 399, 40, 523]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [80, 395, 41, 526]);
                t.layout = this.__6_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 365, 85]);
                return t;
            };
            p.__9_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textColor", "x", "y"], ["label_name", 22, "屠龙", 0xDDA600, 10, 72]);
                return t;
            };
            p.bar_recharge_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_recharge = t;
                this.__s(t, ["maximum", "skinName", "value", "x", "y"], [100, skins.comp.Bar_Recharge_Skin, 20, 61, 82]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 425, 42]);
                return t;
            };
            p.grp_equip0_i = function () {
                var t = new egret.gui.Group();
                this.grp_equip0 = t;
                this.__s(t, ["x", "y"], [50, 320]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__9_i(), this.__10_i(), this.__11_i()];
                return t;
            };
            p.grp_equip1_i = function () {
                var t = new egret.gui.Group();
                this.grp_equip1 = t;
                this.__s(t, ["x", "y"], [180, 320]);
                t.layout = this.__16_i();
                t.elementsContent = [this.__13_i(), this.__14_i(), this.__15_i()];
                return t;
            };
            p.grp_equip2_i = function () {
                var t = new egret.gui.Group();
                this.grp_equip2 = t;
                this.__s(t, ["x", "y"], [315, 320]);
                t.layout = this.__20_i();
                t.elementsContent = [this.__17_i(), this.__18_i(), this.__19_i()];
                return t;
            };
            p.grp_recharge_i = function () {
                var t = new egret.gui.Group();
                this.grp_recharge = t;
                this.__s(t, ["x", "y"], [165, 629]);
                t.elementsContent = [this.__21_i(), this.__26_i(), this.__27_i()];
                return t;
            };
            p.label_vip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vip = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "0", 405, 84]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "scaleX", "scaleY", "skinName", "x", "y"], [skins.game.BaseItemCellSkin, 0.9, 0.9, skins.comp.List_Empty_H_C_Skin, 43, 550]);
                t.layout = this.__5_i();
                return t;
            };
            p.__10_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "x", "y"], ["label_desc", 18, "评分", "left", 0, 0]);
                return t;
            };
            TuLongWanbaSkin._skinParts = ["list_items", "bar_recharge", "label_vip", "grp_equip0", "grp_equip1", "grp_equip2", "btn_close", "grp_recharge"];
            return TuLongWanbaSkin;
        })(egret.gui.Skin);
        game.TuLongWanbaSkin = TuLongWanbaSkin;
        egret.registerClass(TuLongWanbaSkin,"skins.game.TuLongWanbaSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
