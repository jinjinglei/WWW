var skins;
(function (skins) {
    var game;
    (function (game) {
        var BagSaleSkin = (function (_super) {
            __extends(BagSaleSkin, _super);
            function BagSaleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__53_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BagSaleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BagSaleSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [6, "middle"]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                t.left = 5;
                t.layout = this.__11_i();
                t.elementsContent = [this.ckb_orange_i(), this.__10_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "y"], ["黑体", 20, "选择未锁", 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 20, "紫色", 0xD569F9, 89, 10]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 2;
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [73, 8]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__13_i(), this.__14_i(), this.label_purple_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [6, "middle"]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "x", "y"], [5, 10, 10]);
                t.layout = this.__17_i();
                t.elementsContent = [this.ckb_purple_i(), this.__16_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "y"], ["黑体", 20, "选择未锁", 0]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 20, "蓝色", 0x2068F8, 89, 10]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 2;
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [73, 8]);
                t.layout = this.__21_i();
                t.elementsContent = [this.__19_i(), this.__20_i(), this.label_blue_i()];
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [6, "middle"]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "x", "y"], [5, 10, 10]);
                t.layout = this.__23_i();
                t.elementsContent = [this.ckb_blue_i(), this.__22_i()];
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "y"], ["黑体", 20, "选择未锁", 0]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 20, "绿色", 0x4ECD48, 89, 10]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 2;
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [73, 8]);
                t.layout = this.__27_i();
                t.elementsContent = [this.__25_i(), this.__26_i(), this.label_green_i()];
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [6, "middle"]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "x", "y"], [5, 20, 20]);
                t.layout = this.__29_i();
                t.elementsContent = [this.ckb_green_i(), this.__28_i()];
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "y"], ["黑体", 20, "选择未锁", 0]);
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 20, "白色", 0x8C8989, 89, 10]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 2;
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [73, 8]);
                t.layout = this.__33_i();
                t.elementsContent = [this.__31_i(), this.__32_i(), this.label_white_i()];
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [6, "middle"]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "x", "y"], [5, 30, 30]);
                t.layout = this.__35_i();
                t.elementsContent = [this.ckb_white_i(), this.__34_i()];
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 20, "选择未锁", -1, 0]);
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 20, "低于人物等级30级的", 0xFFFFFF, 80, 0]);
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [0, 0.31, 0x000000, 0, 0, 0]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [73, 8]);
                t.layout = this.__39_i();
                t.elementsContent = [this.__37_i(), this.__38_i(), this.label_below_i()];
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [6, "middle"]);
                return t;
            };
            p.__42_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "x", "y"], [5, 40, 40]);
                t.layout = this.__41_i();
                t.elementsContent = [this.ckb_below_i(), this.__40_i()];
                return t;
            };
            p.__43_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "paddingLeft", "paddingTop"], [15, 10, 10]);
                return t;
            };
            p.__44_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "y"], [325, 327, 0]);
                t.layout = this.__43_i();
                t.elementsContent = [this.__12_i(), this.__18_i(), this.__24_i(), this.__30_i(), this.__36_i(), this.__42_i()];
                return t;
            };
            p.__45_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [30, "ico_gold_2", 30, 281, 536]);
                return t;
            };
            p.__46_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "middle"]);
                return t;
            };
            p.__47_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [30, "ico_yuanbao2", 33, 281, 536]);
                return t;
            };
            p.__48_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "middle"]);
                return t;
            };
            p.__49_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [-20, 0, 0, egret.gui.getScale9Grid("7,6,292,283"), "s9g_dlg_0", 0]);
                return t;
            };
            p.__50_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [10, "center", "middle"]);
                return t;
            };
            p.__51_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [340, 0, 340]);
                t.layout = this.__50_i();
                t.elementsContent = [this.grp_gold_container_i(), this.grp_items_i(), this.btn_sale_i()];
                return t;
            };
            p.__52_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "top"], [0.5, 80]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.__44_i(), this.__51_i()];
                return t;
            };
            p.__53_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter", "width"], [0, 0.5, 410]);
                t.elementsContent = [this.__4_i(), this.__52_i(), this.btn_info_i(), this.btn_close_i()];
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [330, "s9g_black_0", 352, -9, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "top"], [false, 20, -7, "txt_zhuangbeichushou", -70]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "y"], ["黑体", 20, "选择未锁", 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 20, "橙色", 0xE76B00, 89, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 2;
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 376, 11]);
                return t;
            };
            p.btn_info_i = function () {
                var t = new egret.gui.Button();
                this.btn_info = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_info_Skin, 0, 15]);
                return t;
            };
            p.btn_sale_i = function () {
                var t = new egret.gui.Button();
                this.btn_sale = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0, "btn_txt_b_chushou", skins.comp.Btn_3_0_Skin, 10, 0]);
                return t;
            };
            p.ckb_below_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_below = t;
                t.y = 0;
                return t;
            };
            p.ckb_blue_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_blue = t;
                t.y = 0;
                return t;
            };
            p.ckb_green_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_green = t;
                t.y = 0;
                return t;
            };
            p.ckb_orange_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_orange = t;
                t.y = 0;
                return t;
            };
            p.ckb_purple_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_purple = t;
                t.y = 0;
                return t;
            };
            p.ckb_white_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_white = t;
                t.y = 0;
                return t;
            };
            p.grp_gold_container_i = function () {
                var t = new egret.gui.Group();
                this.grp_gold_container = t;
                this.__s(t, ["x", "y"], [272, 11]);
                t.layout = this.__49_i();
                t.elementsContent = [this.grp_gold_i(), this.grp_yuanbao_i()];
                return t;
            };
            p.grp_gold_i = function () {
                var t = new egret.gui.Group();
                this.grp_gold = t;
                t.y = 0;
                t.layout = this.__46_i();
                t.elementsContent = [this.label_gold_i(), this.__45_i()];
                return t;
            };
            p.grp_items_i = function () {
                var t = new egret.gui.Group();
                this.grp_items = t;
                this.__s(t, ["width", "x", "y"], [340, 26, 26]);
                t.elementsContent = [this.label_items_i()];
                return t;
            };
            p.grp_yuanbao_i = function () {
                var t = new egret.gui.Group();
                this.grp_yuanbao = t;
                this.__s(t, ["x", "y"], [10, 10]);
                t.layout = this.__48_i();
                t.elementsContent = [this.label_yuanbao_i(), this.__47_i()];
                return t;
            };
            p.label_below_i = function () {
                var t = new egret.gui.Label();
                this.label_below = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 20, "装备(剩余999)", -1, 26]);
                return t;
            };
            p.label_blue_i = function () {
                var t = new egret.gui.Label();
                this.label_blue = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 20, "装备(剩余999)", 177, 20]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_gold = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "获得:55125", 0x04FA08, 18, 6]);
                return t;
            };
            p.label_green_i = function () {
                var t = new egret.gui.Label();
                this.label_green = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 20, "装备(剩余999)", 177, 20]);
                return t;
            };
            p.label_items_i = function () {
                var t = new egret.gui.Label();
                this.label_items = t;
                this.__s(t, ["fontFamily", "size", "textAlign", "width"], ["黑体", 18, "center", 340]);
                return t;
            };
            p.label_orange_i = function () {
                var t = new egret.gui.Label();
                this.label_orange = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 20, "装备(剩余999)", 177, 20]);
                return t;
            };
            p.label_purple_i = function () {
                var t = new egret.gui.Label();
                this.label_purple = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 20, "装备(剩余999)", 177, 20]);
                return t;
            };
            p.label_white_i = function () {
                var t = new egret.gui.Label();
                this.label_white = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 20, "装备(剩余999)", 177, 20]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new egret.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "55125", 0x04FA08, 18, 6]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [73, 8]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__7_i(), this.__8_i(), this.label_orange_i()];
                return t;
            };
            BagSaleSkin._skinParts = ["ckb_orange", "label_orange", "ckb_purple", "label_purple", "ckb_blue", "label_blue", "ckb_green", "label_green", "ckb_white", "label_white", "ckb_below", "label_below", "label_gold", "grp_gold", "label_yuanbao", "grp_yuanbao", "grp_gold_container", "label_items", "grp_items", "btn_sale", "btn_info", "btn_close"];
            return BagSaleSkin;
        })(egret.gui.Skin);
        game.BagSaleSkin = BagSaleSkin;
        egret.registerClass(BagSaleSkin,"skins.game.BagSaleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
