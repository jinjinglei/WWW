var skins;
(function (skins) {
    var game;
    (function (game) {
        var PrintDetailSkin = (function (_super) {
            __extends(PrintDetailSkin, _super);
            function PrintDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.btn_str_i(), this.grp_props_i(), this.label_loot_i(), this.label_strLvl_i(), this.img_print_i(), this.__7_i(), this.ico_medalItem_i()];
                this.states = [
                    new egret.gui.State("white", []),
                    new egret.gui.State("red", [])
                ];
            }
            var d = __define,c=PrintDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PrintDetailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["height", "lineSpacing", "name", "size", "textAlign", "width", "x", "y"], [100, 10, "prop_part0", 20, "left", 180, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["height", "lineSpacing", "name", "size", "textAlign", "width", "x", "y"], [100, 10, "prop_part1", 20, "left", 180, 200, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.6, 0, "pre_轩辕战印-强化战印", 0, false]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 399, 86]);
                return t;
            };
            p.btn_str_i = function () {
                var t = new egret.gui.Button();
                this.btn_str = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_qianwangqianghua", skins.comp.Btn_3_22_Skin, 169, 569]);
                return t;
            };
            p.grp_props_i = function () {
                var t = new egret.gui.Group();
                this.grp_props = t;
                this.__s(t, ["horizontalCenter", "x", "y"], [30, 10, 341]);
                t.layout = this.__6_i();
                t.elementsContent = [this.__4_i(), this.__5_i()];
                return t;
            };
            p.ico_medalItem_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medalItem = t;
                this.__s(t, ["x", "y"], [168, 159]);
                return t;
            };
            p.img_print_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_print = t;
                this.__s(t, ["height", "width", "x", "y"], [20, 20, 236, 183]);
                return t;
            };
            p.label_loot_i = function () {
                var t = new mo.gui.Label();
                this.label_loot = t;
                this.__s(t, ["size", "stroke", "textAlign", "textColor", "width", "x", "y"], [18, 1, "center", 0x00C0FF, 300, 90, 250]);
                return t;
            };
            p.label_strLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_strLvl = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "当前强化等级:+%s", "center", 0xCA9716, 300, 90, 517]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "y"], [1, egret.gui.getScale9Grid("34,382,207,12"), "und_zanyiditugsf", 53]);
                return t;
            };
            PrintDetailSkin._skinParts = ["btn_close", "btn_str", "grp_props", "label_loot", "label_strLvl", "img_print", "ico_medalItem"];
            return PrintDetailSkin;
        })(egret.gui.Skin);
        game.PrintDetailSkin = PrintDetailSkin;
        egret.registerClass(PrintDetailSkin,"skins.game.PrintDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
