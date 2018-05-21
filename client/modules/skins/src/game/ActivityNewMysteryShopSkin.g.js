var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewMysteryShopSkin = (function (_super) {
            __extends(ActivityNewMysteryShopSkin, _super);
            function ActivityNewMysteryShopSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.btn_help_i(), this.__62_i(), this.head_i(), this.efx_hit2_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewMysteryShopSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewMysteryShopSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [-162.5, 10, 5]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__10_i(), this.label_curScore_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "需要积分:", 0xf2dfbf, 0, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 99]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__13_i(), this.label_score0_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "已兑换:", 0xB8B0A7, 0, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "次", 0xB8B0A7, 10, 10]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [16, 161]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__16_i(), this.label_exCount0_i(), this.__17_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [129, 0, 0]);
                t.elementsContent = [this.ico_item0_i(), this.label_item0_i(), this.__14_i(), this.btn_exchange0_i(), this.__18_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "需要积分:", 0xF2DFBF, 0, 0]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 99]);
                t.layout = this.__20_i();
                t.elementsContent = [this.__21_i(), this.label_score1_i()];
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "已兑换:", 0xB8B0A7, 0, 0]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "次", 0xB8B0A7, 10, 10]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [16, 161]);
                t.layout = this.__23_i();
                t.elementsContent = [this.__24_i(), this.label_exCount1_i(), this.__25_i()];
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [129, 10, 10]);
                t.elementsContent = [this.ico_item1_i(), this.label_item1_i(), this.__22_i(), this.btn_exchange1_i(), this.__26_i()];
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "需要积分:", 0xF2DFBF, 0, 0]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 99]);
                t.layout = this.__28_i();
                t.elementsContent = [this.__29_i(), this.label_score2_i()];
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "已兑换:", 0xB8B0A7, 0, 0]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "次", 0xB8B0A7, 10, 10]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [16, 161]);
                t.layout = this.__31_i();
                t.elementsContent = [this.__32_i(), this.label_exCount2_i(), this.__33_i()];
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [129, 20, 20]);
                t.elementsContent = [this.ico_item2_i(), this.label_item2_i(), this.__30_i(), this.btn_exchange2_i(), this.__34_i()];
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "paddingBottom", "paddingTop"], ["center", 5, 5]);
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "width", "y"], [0, 430, 27]);
                t.layout = this.__36_i();
                t.elementsContent = [this.__19_i(), this.__27_i(), this.__35_i()];
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [221, 59, 331]);
                t.elementsContent = [this.__8_i(), this.__11_i(), this.__37_i()];
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_yuanbao", false, 6, 5]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-7, -32, -32, "panel_bg_vip", -2, 30, 30]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "bottom", "height", "source", "width", "x"], [false, -3, 28, "tit_txt_g_shuomin", 297, 136]);
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__42_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [24, 432, 15, 488]);
                t.layout = this.__41_i();
                t.elementsContent = [this.__39_i(), this.label_yuanbao_i(), this.__40_i()];
                return t;
            };
            p.__43_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "panel_choujiang1", 0]);
                return t;
            };
            p.__44_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_activity_b2", 52, 144]);
                return t;
            };
            p.__45_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_activity_b1", 12, 213]);
                return t;
            };
            p.__46_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__47_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "x", "y"], ["黑体", 16, 1, 0x481C09, "购买额外赠送", 0, 0]);
                return t;
            };
            p.__48_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "x", "y"], ["黑体", 16, 1, 0x481C09, "积分", 46, 0]);
                return t;
            };
            p.__49_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 217]);
                t.layout = this.__46_i();
                t.elementsContent = [this.__47_i(), this.label_scoreGet0_i(), this.__48_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 40, 0]);
                return t;
            };
            p.__50_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [255, 201, 0, 0]);
                t.elementsContent = [this.__43_i(), this.ico_itemBuy0_i(), this.label_itemBuy0_i(), this.btn_buy0_i(), this.__44_i(), this.__45_i(), this.ico_res0_i(), this.label_rmb0_i(), this.__49_i()];
                return t;
            };
            p.__51_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "panel_choujiang2", 0]);
                return t;
            };
            p.__52_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_activity_b2", 53, 143]);
                return t;
            };
            p.__53_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_activity_b1", 11, 213]);
                return t;
            };
            p.__54_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__55_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "x", "y"], ["黑体", 16, 1, 0x481C09, "购买额外赠送", 0, 0]);
                return t;
            };
            p.__56_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "x", "y"], ["黑体", 16, 1, 0x481C09, "积分", 46, 0]);
                return t;
            };
            p.__57_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 217]);
                t.layout = this.__54_i();
                t.elementsContent = [this.__55_i(), this.label_scoreGet1_i(), this.__56_i()];
                return t;
            };
            p.__58_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [255, 201, 10, 10]);
                t.elementsContent = [this.__51_i(), this.ico_itemBuy1_i(), this.label_itemBuy1_i(), this.btn_buy1_i(), this.__52_i(), this.ico_res1_i(), this.label_rmb1_i(), this.__53_i(), this.__57_i()];
                return t;
            };
            p.__59_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [15, "center"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_huodong", 40, 7]);
                return t;
            };
            p.__60_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [430, 27, 304]);
                t.layout = this.__59_i();
                t.elementsContent = [this.__50_i(), this.__58_i()];
                return t;
            };
            p.__61_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__62_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "width", "y"], [0, 432, 213]);
                t.layout = this.__61_i();
                t.elementsContent = [this.__7_i(), this.__38_i(), this.__42_i(), this.__60_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "活动时间:", 0xFFE613, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [430, 0, 0]);
                t.elementsContent = [this.__6_i(), this.label_activity_desc_i(), this.label_activity_time_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "panel_danbi", 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.btn_buy0_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy0 = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_buy", "购买", skins.comp.Btn_3_13_Skin, 171]);
                return t;
            };
            p.btn_buy1_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy1 = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_buy", "购买", skins.comp.Btn_3_13_Skin, 171]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 411, 7]);
                return t;
            };
            p.btn_exchange0_i = function () {
                var t = new egret.gui.Button();
                this.btn_exchange0 = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_duihuano", "兑换", skins.comp.Btn_3_13_Skin, 122]);
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
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 8]);
                return t;
            };
            p.efx_hit2_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_hit2 = t;
                this.__s(t, ["effectId", "horizontalCenter", "y"], [3, 0, 583]);
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.game.ActivityNewCenterCellSkin, 83]);
                return t;
            };
            p.ico_item0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item0 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 1]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item1 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 1]);
                return t;
            };
            p.ico_item2_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item2 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 1]);
                return t;
            };
            p.ico_itemBuy0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_itemBuy0 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 51]);
                return t;
            };
            p.ico_itemBuy1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_itemBuy1 = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 51]);
                return t;
            };
            p.ico_res0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_res0 = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_gold", false, 58, 143]);
                return t;
            };
            p.ico_res1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_res1 = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_gold", false, 59, 142]);
                return t;
            };
            p.label_activity_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 15, "神行石大放送!", 0xE6E4A8, 0, 28]);
                return t;
            };
            p.label_activity_time_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_time = t;
                this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["黑体", 18, "02月13日10:00--02月16日12:00", 333, 90, 0]);
                return t;
            };
            p.label_curScore_i = function () {
                var t = new egret.gui.Label();
                this.label_curScore = t;
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 18, "0", 46, 0]);
                return t;
            };
            p.label_exCount0_i = function () {
                var t = new egret.gui.Label();
                this.label_exCount0 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "0", 0xB8B0A7, 58, 0]);
                return t;
            };
            p.label_exCount1_i = function () {
                var t = new egret.gui.Label();
                this.label_exCount1 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "0", 0xB8B0A7, 58, 0]);
                return t;
            };
            p.label_exCount2_i = function () {
                var t = new egret.gui.Label();
                this.label_exCount2 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "0", 0xB8B0A7, 58, 0]);
                return t;
            };
            p.label_item0_i = function () {
                var t = new egret.gui.Label();
                this.label_item0 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "y"], ["黑体", 0.5, 15, "物品名称", 76]);
                return t;
            };
            p.label_item1_i = function () {
                var t = new egret.gui.Label();
                this.label_item1 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "y"], ["黑体", 0.5, 15, "物品名称", 76]);
                return t;
            };
            p.label_item2_i = function () {
                var t = new egret.gui.Label();
                this.label_item2 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "y"], ["黑体", 0.5, 15, "物品名称", 76]);
                return t;
            };
            p.label_itemBuy0_i = function () {
                var t = new egret.gui.Label();
                this.label_itemBuy0 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "width", "y"], ["黑体", 0, 19, 1, "物品名称", "center", 0xffe613, 130, 20]);
                return t;
            };
            p.label_itemBuy1_i = function () {
                var t = new egret.gui.Label();
                this.label_itemBuy1 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "width", "y"], ["黑体", 0, 19, 1, "物品名称", "center", 0xFFE613, 130, 20]);
                return t;
            };
            p.label_rmb0_i = function () {
                var t = new egret.gui.Label();
                this.label_rmb0 = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0x2f2f2f, "100", 0xFDB42C, 88, 144]);
                return t;
            };
            p.label_rmb1_i = function () {
                var t = new egret.gui.Label();
                this.label_rmb1 = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0x2f2f2f, "0", 0xFDB42C, 87, 143]);
                return t;
            };
            p.label_score0_i = function () {
                var t = new egret.gui.Label();
                this.label_score0 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "0", 0xb6ff67, 46, 0]);
                return t;
            };
            p.label_score1_i = function () {
                var t = new egret.gui.Label();
                this.label_score1 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "0", 0xB6FF67, 46, 0]);
                return t;
            };
            p.label_score2_i = function () {
                var t = new egret.gui.Label();
                this.label_score2 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "0", 0xB6FF67, 46, 0]);
                return t;
            };
            p.label_scoreGet0_i = function () {
                var t = new egret.gui.Label();
                this.label_scoreGet0 = t;
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "x", "y"], ["黑体", 16, 1, 0x481C09, "1", 10, 10]);
                return t;
            };
            p.label_scoreGet1_i = function () {
                var t = new egret.gui.Label();
                this.label_scoreGet1 = t;
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "x", "y"], ["黑体", 16, 1, 0x481C09, "1", 10, 10]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new egret.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [20, 16, "108921", 0xFDB42C, 35, 3]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 18, "当前积分:", 0, 0]);
                return t;
            };
            ActivityNewMysteryShopSkin._skinParts = ["btn_close", "btn_help", "label_activity_desc", "label_activity_time", "label_curScore", "ico_item0", "label_item0", "label_score0", "btn_exchange0", "label_exCount0", "ico_item1", "label_item1", "label_score1", "btn_exchange1", "label_exCount1", "ico_item2", "label_item2", "label_score2", "btn_exchange2", "label_exCount2", "label_yuanbao", "ico_itemBuy0", "label_itemBuy0", "btn_buy0", "ico_res0", "label_rmb0", "label_scoreGet0", "ico_itemBuy1", "label_itemBuy1", "btn_buy1", "ico_res1", "label_rmb1", "label_scoreGet1", "head", "efx_hit2"];
            return ActivityNewMysteryShopSkin;
        })(egret.gui.Skin);
        game.ActivityNewMysteryShopSkin = ActivityNewMysteryShopSkin;
        egret.registerClass(ActivityNewMysteryShopSkin,"skins.game.ActivityNewMysteryShopSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
