var skins;
(function (skins) {
    var game;
    (function (game) {
        var TreasureSkin = (function (_super) {
            __extends(TreasureSkin, _super);
            function TreasureSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.resBar_i(), this.label_date_i(), this.btn_recharge_i(), this.btn_once_i(), this.btn_ten_i(), this.btn_close_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__25_i(), this.__29_i(), this.scroller_i(), this.__33_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TreasureSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TreasureSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 358, 372]);
                t.elementsContent = [this.border_6_i(), this.item_6_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 358, 443]);
                t.elementsContent = [this.border_7_i(), this.item_7_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 358, 513]);
                t.elementsContent = [this.border_8_i(), this.item_8_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 288, 513]);
                t.elementsContent = [this.border_9_i(), this.item_9_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 212, 513]);
                t.elementsContent = [this.border_10_i(), this.item_10_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 135, 513]);
                t.elementsContent = [this.border_11_i(), this.item_11_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 58, 513]);
                t.elementsContent = [this.border_12_i(), this.item_12_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 57, 440]);
                t.elementsContent = [this.border_13_i(), this.item_13_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 57, 365]);
                t.elementsContent = [this.border_14_i(), this.item_14_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 57, 290]);
                t.elementsContent = [this.border_15_i(), this.item_15_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [205, 361]);
                t.elementsContent = [this.border_sp_i(), this.efx_sp_i(), this.item_sp_i()];
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold_bars", 0, 3]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "y"], [0, "ntc_line", 35, 3]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [40, 83, 649]);
                t.layout = this.__24_i();
                t.elementsContent = [this.__22_i(), this.grp_discountOnce_i(), this.label_once_i()];
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold_bars", 0, 3]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "y"], [0, "ntc_line", 35, 3]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [40, 293, 649]);
                t.layout = this.__28_i();
                t.elementsContent = [this.__26_i(), this.grp_discountTen_i(), this.label_ten_i()];
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                t.setStyle("textColor", 0xEFECB5);
                this.__s(t, ["height", "width"], [546, 390]);
                t.elementsContent = [this.label_content_i()];
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dazedi", 0, 0]);
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bazhe", 8, 10]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["rotation", "touchEnabled", "x", "y"], [-15, false, 254, 599]);
                t.elementsContent = [this.__31_i(), this.__32_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "und_phontanbao", 19]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 57, 223]);
                t.elementsContent = [this.border_0_i(), this.item_0_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 133, 221]);
                t.elementsContent = [this.border_1_i(), this.item_1_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 209, 221]);
                t.elementsContent = [this.border_2_i(), this.item_2_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 285, 221]);
                t.elementsContent = [this.border_3_i(), this.item_3_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 360, 221]);
                t.elementsContent = [this.border_4_i(), this.item_4_i()];
                return t;
            };
            p.border_0_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_0 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_10_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_10 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_11_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_11 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_12_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_12 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_13_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_13 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_14_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_14 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_15_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_15 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_1_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_1 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_2_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_2 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_3_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_3 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_4_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_4 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_5_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_5 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_6_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_6 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_7_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_7 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_8_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_8 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_9_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_9 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.border_sp_i = function () {
                var t = new egret.gui.UIAsset();
                this.border_sp = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "border_1", 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 416, 30]);
                return t;
            };
            p.btn_once_i = function () {
                var t = new egret.gui.Button();
                this.btn_once = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["txt_btn_tanbao1", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 75, 611]);
                return t;
            };
            p.btn_recharge_i = function () {
                var t = new egret.gui.Button();
                this.btn_recharge = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["btn_txt_g_goRecharge", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 264, 89]);
                return t;
            };
            p.btn_ten_i = function () {
                var t = new egret.gui.Button();
                this.btn_ten = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["txt_btn_tanbao10", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 284, 611]);
                return t;
            };
            p.efx_sp_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_sp = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "verticalCenter"], [true, 0, 0]);
                return t;
            };
            p.grp_discountOnce_i = function () {
                var t = new egret.gui.Group();
                this.grp_discountOnce = t;
                this.__s(t, ["x", "y"], [57, 137]);
                t.elementsContent = [this.label_discountOnce_i(), this.__23_i()];
                return t;
            };
            p.grp_discountTen_i = function () {
                var t = new egret.gui.Group();
                this.grp_discountTen = t;
                this.__s(t, ["x", "y"], [67, 147]);
                t.elementsContent = [this.label_discountTen_i(), this.__27_i()];
                return t;
            };
            p.item_0_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_0 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_10_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_10 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_11_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_11 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_12_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_12 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_13_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_13 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_14_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_14 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_15_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_15 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_1_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_1 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_2_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_2 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_3_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_3 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_4_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_4 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_5_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_5 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_6_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_6 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_7_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_7 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_8_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_8 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_9_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_9 = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.item_sp_i = function () {
                var t = new g_comp.EfxAsset();
                this.item_sp = t;
                this.__s(t, ["autoPlay", "horizontalCenter", "source", "verticalCenter"], [true, 0, "ico_mail", 0]);
                return t;
            };
            p.label_content_i = function () {
                var t = new mo.gui.Label();
                this.label_content = t;
                this.__s(t, ["size", "width", "y"], [20, 389, 7]);
                return t;
            };
            p.label_date_i = function () {
                var t = new mo.gui.Label();
                this.label_date = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "活动时间:", 0xFABD24, 154, 149]);
                return t;
            };
            p.label_discountOnce_i = function () {
                var t = new egret.gui.Label();
                this.label_discountOnce = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "999", "center", 0x726E61, 0, 0]);
                return t;
            };
            p.label_discountTen_i = function () {
                var t = new egret.gui.Label();
                this.label_discountTen = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "999", "center", 0x726E61, 0, 0]);
                return t;
            };
            p.label_once_i = function () {
                var t = new mo.gui.Label();
                this.label_once = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.label_ten_i = function () {
                var t = new mo.gui.Label();
                this.label_ten = t;
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.resBar_i = function () {
                var t = new g_comp.ResBar();
                this.resBar = t;
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [-197, skins.comp.ResBarSkin, 20, 94]);
                return t;
            };
            p.scroller_i = function () {
                var t = new egret.gui.Scroller();
                this.scroller = t;
                this.__s(t, ["height", "horizontalScrollPolicy", "width", "x", "y"], [58, "off", 390, 45, 694]);
                t.viewport = this.__30_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 358, 295]);
                t.elementsContent = [this.border_5_i(), this.item_5_i()];
                return t;
            };
            TreasureSkin._skinParts = ["resBar", "label_date", "btn_recharge", "btn_once", "btn_ten", "btn_close", "border_0", "item_0", "border_1", "item_1", "border_2", "item_2", "border_3", "item_3", "border_4", "item_4", "border_5", "item_5", "border_6", "item_6", "border_7", "item_7", "border_8", "item_8", "border_9", "item_9", "border_10", "item_10", "border_11", "item_11", "border_12", "item_12", "border_13", "item_13", "border_14", "item_14", "border_15", "item_15", "border_sp", "efx_sp", "item_sp", "label_discountOnce", "grp_discountOnce", "label_once", "label_discountTen", "grp_discountTen", "label_ten", "label_content", "scroller"];
            return TreasureSkin;
        })(egret.gui.Skin);
        game.TreasureSkin = TreasureSkin;
        egret.registerClass(TreasureSkin,"skins.game.TreasureSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
