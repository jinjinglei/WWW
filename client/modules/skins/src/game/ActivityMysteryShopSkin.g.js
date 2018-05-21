var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityMysteryShopSkin = (function (_super) {
            __extends(ActivityMysteryShopSkin, _super);
            function ActivityMysteryShopSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.img_title_bg_i(), this.__7_i(), this.__12_i(), this.__15_i(), this.__23_i(), this.__31_i(), this.__39_i(), this.__40_i(), this.label_date_i(), this.label_desc_i(), this.__41_i(), this.efx_hit2_i(), this.label_title_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityMysteryShopSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityMysteryShopSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 203]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__9_i(), this.label_scoreGet1_i(), this.__10_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [232, 201, 238, 489]);
                t.elementsContent = [this.ico_itemBuy1_i(), this.label_itemBuy1_i(), this.btn_buy1_i(), this.label_rmb1_i(), this.ico_res1_i(), this.__11_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [18, 1, "当前积分:", 0, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 458]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__14_i(), this.label_curScore_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "需要积分:", 0, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 102]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__16_i(), this.label_score0_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "已兑换:", 0, 0]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "次", 10, 10]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [16, 165]);
                t.layout = this.__21_i();
                t.elementsContent = [this.__19_i(), this.label_exCount0_i(), this.__20_i()];
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [129, 47, 257]);
                t.elementsContent = [this.ico_item0_i(), this.label_item0_i(), this.__18_i(), this.btn_exchange0_i(), this.__22_i()];
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "需要积分:", 0, 0]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 102]);
                t.layout = this.__24_i();
                t.elementsContent = [this.__25_i(), this.label_score1_i()];
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "已兑换:", 0, 0]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "次", 10, 10]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [16, 165]);
                t.layout = this.__27_i();
                t.elementsContent = [this.__28_i(), this.label_exCount1_i(), this.__29_i()];
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [129, 177, 257]);
                t.elementsContent = [this.ico_item1_i(), this.label_item1_i(), this.__26_i(), this.btn_exchange1_i(), this.__30_i()];
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "需要积分:", 0, 0]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 102]);
                t.layout = this.__32_i();
                t.elementsContent = [this.__33_i(), this.label_score2_i()];
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "已兑换:", 0, 0]);
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "次", 10, 10]);
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [16, 165]);
                t.layout = this.__35_i();
                t.elementsContent = [this.__36_i(), this.label_exCount2_i(), this.__37_i()];
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [129, 304, 257]);
                t.elementsContent = [this.ico_item2_i(), this.label_item2_i(), this.__34_i(), this.btn_exchange2_i(), this.__38_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [18, 1, "购买额外赠送", 0, 0]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [20, 16, "活动时间: ", 0xFABD24, 51, 179]);
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_shuomin", 730]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [18, 1, "积分", 46, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 203]);
                t.layout = this.__5_i();
                t.elementsContent = [this.__3_i(), this.label_scoreGet0_i(), this.__4_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [255, 201, 42, 489]);
                t.elementsContent = [this.ico_itemBuy0_i(), this.label_itemBuy0_i(), this.btn_buy0_i(), this.ico_res0_i(), this.label_rmb0_i(), this.__6_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [18, 1, "购买额外赠送", 0, 0]);
                return t;
            };
            p.btn_buy0_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy0 = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [1, "btn_txt_g_buy", "购买", skins.comp.Btn_3_13_Skin, 147]);
                return t;
            };
            p.btn_buy1_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy1 = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [1, "btn_txt_g_buy", "购买", skins.comp.Btn_3_13_Skin, 147]);
                return t;
            };
            p.btn_exchange0_i = function () {
                var t = new egret.gui.Button();
                this.btn_exchange0 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_duihuano", skins.comp.Btn_3_13_Skin, 122]);
                return t;
            };
            p.btn_exchange1_i = function () {
                var t = new egret.gui.Button();
                this.btn_exchange1 = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_duihuano", "兑换", skins.comp.Btn_3_13_Skin, 122]);
                return t;
            };
            p.btn_exchange2_i = function () {
                var t = new egret.gui.Button();
                this.btn_exchange2 = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_duihuano", "兑换", skins.comp.Btn_3_13_Skin, 122]);
                return t;
            };
            p.efx_hit2_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_hit2 = t;
                this.__s(t, ["effectId", "x", "y"], [3, 240, 573]);
                return t;
            };
            p.ico_item0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item0 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 25]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item1 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 25]);
                return t;
            };
            p.ico_item2_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item2 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 25]);
                return t;
            };
            p.ico_itemBuy0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_itemBuy0 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 29]);
                return t;
            };
            p.ico_itemBuy1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_itemBuy1 = t;
                this.__s(t, ["horizontalCenter", "y"], [-2, 29]);
                return t;
            };
            p.ico_res0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_res0 = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_gold", false, 58, 117]);
                return t;
            };
            p.ico_res1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_res1 = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_gold", false, 58, 117]);
                return t;
            };
            p.img_title_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title_bg = t;
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "y"], [0, egret.gui.getScale9Grid("19,13,114,79"), "bg_secret_shop_0", 155]);
                return t;
            };
            p.label_curScore_i = function () {
                var t = new egret.gui.Label();
                this.label_curScore = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [18, 1, "0", 46, 0]);
                return t;
            };
            p.label_date_i = function () {
                var t = new egret.gui.Label();
                this.label_date = t;
                this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [20, 16, "活动时间: ", 0xFABD24, 131, 179]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "horizontalCenter", "size", "textColor", "width", "y"], [58, 0, 16, 0xFDE9BB, 376, 198]);
                return t;
            };
            p.label_exCount0_i = function () {
                var t = new egret.gui.Label();
                this.label_exCount0 = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "0", 58, 0]);
                return t;
            };
            p.label_exCount1_i = function () {
                var t = new egret.gui.Label();
                this.label_exCount1 = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "0", 58, 0]);
                return t;
            };
            p.label_exCount2_i = function () {
                var t = new egret.gui.Label();
                this.label_exCount2 = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "0", 58, 0]);
                return t;
            };
            p.label_item0_i = function () {
                var t = new egret.gui.Label();
                this.label_item0 = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "y"], [0.5, 16, 1, "物品名称", 2]);
                return t;
            };
            p.label_item1_i = function () {
                var t = new egret.gui.Label();
                this.label_item1 = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "y"], [0.5, 16, 1, "物品名称", 2]);
                return t;
            };
            p.label_item2_i = function () {
                var t = new egret.gui.Label();
                this.label_item2 = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "y"], [0.5, 16, 1, "物品名称", 2]);
                return t;
            };
            p.label_itemBuy0_i = function () {
                var t = new egret.gui.Label();
                this.label_itemBuy0 = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "y"], [0.5, 16, 1, "物品名称", 7]);
                return t;
            };
            p.label_itemBuy1_i = function () {
                var t = new egret.gui.Label();
                this.label_itemBuy1 = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "x", "y"], [0.5, 16, 1, "物品名称", 10, 7]);
                return t;
            };
            p.label_rmb0_i = function () {
                var t = new egret.gui.Label();
                this.label_rmb0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "0", 0xFDB42C, 84, 118]);
                return t;
            };
            p.label_rmb1_i = function () {
                var t = new egret.gui.Label();
                this.label_rmb1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "0", 0xFDB42C, 84, 118]);
                return t;
            };
            p.label_score0_i = function () {
                var t = new egret.gui.Label();
                this.label_score0 = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "0", 46, 0]);
                return t;
            };
            p.label_score1_i = function () {
                var t = new egret.gui.Label();
                this.label_score1 = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "0", 46, 0]);
                return t;
            };
            p.label_score2_i = function () {
                var t = new egret.gui.Label();
                this.label_score2 = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [16, 1, "0", 46, 0]);
                return t;
            };
            p.label_scoreGet0_i = function () {
                var t = new egret.gui.Label();
                this.label_scoreGet0 = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [18, 1, "1", 10, 10]);
                return t;
            };
            p.label_scoreGet1_i = function () {
                var t = new egret.gui.Label();
                this.label_scoreGet1 = t;
                this.__s(t, ["size", "stroke", "text", "x", "y"], [18, 1, "1", 10, 10]);
                return t;
            };
            p.label_title_i = function () {
                var t = new mo.gui.Label();
                this.label_title = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 22, "活动标题", 0xFABD24, 10, 156]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "x", "y"], [18, 1, "积分", 46, 0]);
                return t;
            };
            ActivityMysteryShopSkin._skinParts = ["img_title_bg", "ico_itemBuy0", "label_itemBuy0", "btn_buy0", "ico_res0", "label_rmb0", "label_scoreGet0", "ico_itemBuy1", "label_itemBuy1", "btn_buy1", "label_rmb1", "ico_res1", "label_scoreGet1", "label_curScore", "ico_item0", "label_item0", "label_score0", "btn_exchange0", "label_exCount0", "ico_item1", "label_item1", "label_score1", "btn_exchange1", "label_exCount1", "ico_item2", "label_item2", "label_score2", "btn_exchange2", "label_exCount2", "label_date", "label_desc", "efx_hit2", "label_title"];
            return ActivityMysteryShopSkin;
        })(egret.gui.Skin);
        game.ActivityMysteryShopSkin = ActivityMysteryShopSkin;
        egret.registerClass(ActivityMysteryShopSkin,"skins.game.ActivityMysteryShopSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
