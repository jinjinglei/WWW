var skins;
(function (skins) {
    var game;
    (function (game) {
        var PrintStrSkin = (function (_super) {
            __extends(PrintStrSkin, _super);
            function PrintStrSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.ico_medalItem_i(), this.btn_close_i(), this.btn_help_i(), this.grp_before_i(), this.grp_after_i(), this.grp_max_i(), this.ico_item_i(), this.grp_strReq_i(), this.btn_str_i(), this.__21_i(), this.label_cannotStr_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=PrintStrSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PrintStrSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "textAlign", "width", "x", "y"], ["label_name_lvl", 20, "center", 181, 0, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["label_score", 18, "评分:%s", "center", 0xE8CA47, 181, 0, 35]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["lineSpacing", "name", "size", "textAlign", "x", "y"], [15, "label_props", 18, "left", 36, 73]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["name", "width", "x", "y"], ["grp_props", 190, -5, 75]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__13_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "强化满级", 0xDAED10, 170, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "当前已达强化最高级", 0xFA0324, 0, 240]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [10, "middle"]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [10, "middle"]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_g_qianghuaxiaohao", 0, 10]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [1, 0, "pre_轩辕战印-战印强化", 0, false]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_xunzangqianghua", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_xunzangqianghua", 186, 14]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "textAlign", "width", "x", "y"], ["label_name_lvl", 20, "center", 181, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["label_score", 18, "评分:%s", "center", 0xE8CA47, 181, 0, 35]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["lineSpacing", "name", "size", "textAlign", "x", "y"], [15, "label_props", 18, "left", 36, 73]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_str_i = function () {
                var t = new egret.gui.Button();
                this.btn_str = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_qianghua", skins.comp.Btn_3_8_Skin, 153, 707]);
                return t;
            };
            p.grp_after_i = function () {
                var t = new egret.gui.Group();
                this.grp_after = t;
                this.__s(t, ["x", "y"], [261, 300]);
                t.elementsContent = [this.__11_i(), this.__12_i(), this.__15_i()];
                return t;
            };
            p.grp_before_i = function () {
                var t = new egret.gui.Group();
                this.grp_before = t;
                this.__s(t, ["x", "y"], [31, 300]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__10_i()];
                return t;
            };
            p.grp_item0_i = function () {
                var t = new egret.gui.Group();
                this.grp_item0 = t;
                this.__s(t, ["x", "y"], [113, 0]);
                t.layout = this.__18_i();
                t.elementsContent = [this.ico_item0_i(), this.label_reqItem0_i()];
                return t;
            };
            p.grp_item1_i = function () {
                var t = new egret.gui.Group();
                this.grp_item1 = t;
                this.__s(t, ["x", "y"], [113, 52]);
                t.layout = this.__19_i();
                t.elementsContent = [this.ico_item1_i(), this.label_reqItem1_i()];
                return t;
            };
            p.grp_max_i = function () {
                var t = new egret.gui.Group();
                this.grp_max = t;
                this.__s(t, ["x", "y"], [138, 391]);
                t.elementsContent = [this.__16_i(), this.__17_i()];
                return t;
            };
            p.grp_strReq_i = function () {
                var t = new egret.gui.Group();
                this.grp_strReq = t;
                this.__s(t, ["x", "y"], [32, 584]);
                t.elementsContent = [this.grp_item0_i(), this.grp_item1_i(), this.__20_i()];
                return t;
            };
            p.ico_item0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item0 = t;
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.6, 0.6, 0, 0]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item1 = t;
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.6, 0.6, 0, 0]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [205, 148]);
                return t;
            };
            p.ico_medalItem_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medalItem = t;
                this.__s(t, ["x", "y"], [165, 65]);
                return t;
            };
            p.label_cannotStr_i = function () {
                var t = new mo.gui.Label();
                this.label_cannotStr = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "%s级可强化", 0xFF0000, 762]);
                return t;
            };
            p.label_reqItem0_i = function () {
                var t = new mo.gui.Label();
                this.label_reqItem0 = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "Label", 82, 16]);
                return t;
            };
            p.label_reqItem1_i = function () {
                var t = new mo.gui.Label();
                this.label_reqItem1 = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "Label", 82, 16]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["name", "width", "x", "y"], ["grp_props", 190, -5, 75]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__8_i()];
                return t;
            };
            PrintStrSkin._skinParts = ["ico_medalItem", "btn_close", "btn_help", "grp_before", "grp_after", "grp_max", "ico_item", "ico_item0", "label_reqItem0", "grp_item0", "ico_item1", "label_reqItem1", "grp_item1", "grp_strReq", "btn_str", "label_cannotStr"];
            return PrintStrSkin;
        })(egret.gui.Skin);
        game.PrintStrSkin = PrintStrSkin;
        egret.registerClass(PrintStrSkin,"skins.game.PrintStrSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
