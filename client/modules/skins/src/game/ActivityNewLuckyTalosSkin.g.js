var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewLuckyTalosSkin = (function (_super) {
            __extends(ActivityNewLuckyTalosSkin, _super);
            function ActivityNewLuckyTalosSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.head_i(), this.btn_close_i(), this.btn_help_i(), this.__13_i(), this.btn_container_i(), this.image_hint_i(), this.__37_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewLuckyTalosSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewLuckyTalosSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["right", "top"], [80, 41]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__10_i(), this.label_yuanbao_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [20, "middle"]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["right", "y"], [69, 41]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__8_i(), this.__11_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "y"], [false, 58, 0.5, "panel_dianji", 93]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "bottom"]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left"], [41, 68]);
                t.layout = this.__15_i();
                t.elementsContent = [this.ico_cost_icon0_i(), this.label_cost_have0_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "touchEnabled", "width", "x", "y"], [188, true, 184, 57, 50]);
                t.elementsContent = [this.btn_flipped0_i(), this.btn_card0_i(), this.grp_item0_i(), this.card_effect0_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "y"], [false, 58, 0.5, "panel_dianji", 93]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "bottom"]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left"], [41, 71]);
                t.layout = this.__19_i();
                t.elementsContent = [this.ico_cost_icon1_i(), this.label_cost_have1_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "touchEnabled", "width", "x", "y"], [188, true, 184, 67, 60]);
                t.elementsContent = [this.btn_flipped1_i(), this.btn_card1_i(), this.grp_item1_i(), this.card_effect1_i()];
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "y"], [false, 58, 0.5, "panel_dianji", 93]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "bottom"]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left"], [41, 71]);
                t.layout = this.__23_i();
                t.elementsContent = [this.ico_cost_icon2_i(), this.label_cost_have2_i()];
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "touchEnabled", "width", "x", "y"], [188, true, 184, 77, 70]);
                t.elementsContent = [this.btn_flipped2_i(), this.btn_card2_i(), this.grp_item2_i(), this.card_effect2_i()];
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "y"], [false, 58, 0.5, "panel_dianji", 93]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "bottom"]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left"], [41, 71]);
                t.layout = this.__27_i();
                t.elementsContent = [this.ico_cost_icon3_i(), this.label_cost_have3_i()];
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "touchEnabled", "width", "x", "y"], [188, true, 184, 47, 40]);
                t.elementsContent = [this.btn_flipped3_i(), this.btn_card3_i(), this.grp_item3_i(), this.card_effect3_i()];
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnWidth", "horizontalAlign", "horizontalGap", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "requestedColumnCount", "requestedRowCount", "rowAlign", "rowHeight", "verticalAlign", "verticalGap"], [205, "left", 2, 10, 20, 20, 10, 2, 2, "top", 210, "top", 2]);
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "right", "source", "top"], [155, 0, 0, "panel_danbi", -3]);
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [109, 284, 0]);
                t.elementsContent = [this.btn_detail_i()];
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [430, 0, 0]);
                t.elementsContent = [this.label_activity_desc0_i(), this.__32_i()];
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 35;
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "touchChildren", "touchEnabled", "width", "y"], [0, true, true, 432, 42]);
                t.layout = this.__35_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [155, 0, 430, 197]);
                t.elementsContent = [this.__31_i(), this.__33_i(), this.__36_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-10, -31, -33, "panel_bg_vip", 1, 40, 40]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 50, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_huodong", 50, 7]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "touchEnabled", "x"], [false, "ico_gold_2", false, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "middle"]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [-31.5, 1, 10, 10]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__6_i(), this.label_jinbi_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "middle"]);
                return t;
            };
            p.btn_card0_i = function () {
                var t = new egret.gui.Group();
                this.btn_card0 = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.ico_coverd0_i(), this.__14_i(), this.__16_i()];
                return t;
            };
            p.btn_card1_i = function () {
                var t = new egret.gui.Group();
                this.btn_card1 = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.ico_coverd1_i(), this.__18_i(), this.__20_i()];
                return t;
            };
            p.btn_card2_i = function () {
                var t = new egret.gui.Group();
                this.btn_card2 = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.ico_coverd2_i(), this.__22_i(), this.__24_i()];
                return t;
            };
            p.btn_card3_i = function () {
                var t = new egret.gui.Group();
                this.btn_card3 = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.ico_coverd3_i(), this.__26_i(), this.__28_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 413, 0]);
                return t;
            };
            p.btn_container_i = function () {
                var t = new egret.gui.Group();
                this.btn_container = t;
                this.__s(t, ["height", "horizontalCenter", "touchChildren", "touchEnabled", "width", "y"], [418, 0.5, true, true, 435, 369]);
                t.layout = this.__30_i();
                t.elementsContent = [this.__17_i(), this.__21_i(), this.__25_i(), this.__29_i()];
                return t;
            };
            p.btn_detail_i = function () {
                var t = new egret.gui.Button();
                this.btn_detail = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_quanbujiangli", "领取", skins.comp.Btn_3_0_Skin, 95, 0, 0]);
                return t;
            };
            p.btn_flipped0_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_flipped0 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "btn_txt_g_fanpai", 0, 10, 10]);
                return t;
            };
            p.btn_flipped1_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_flipped1 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "btn_txt_g_fanpai", 0, 10, 10]);
                return t;
            };
            p.btn_flipped2_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_flipped2 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "btn_txt_g_fanpai", 0, 10, 10]);
                return t;
            };
            p.btn_flipped3_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_flipped3 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "btn_txt_g_fanpai", 0, 10, 10]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 2, -1]);
                return t;
            };
            p.card_effect0_i = function () {
                var t = new g_comp.UIEffect();
                this.card_effect0 = t;
                this.__s(t, ["effectId", "visible", "x", "y"], [44, false, 92, 94]);
                return t;
            };
            p.card_effect1_i = function () {
                var t = new g_comp.UIEffect();
                this.card_effect1 = t;
                this.__s(t, ["effectId", "visible", "x", "y"], [44, false, 92, 94]);
                return t;
            };
            p.card_effect2_i = function () {
                var t = new g_comp.UIEffect();
                this.card_effect2 = t;
                this.__s(t, ["effectId", "visible", "x", "y"], [44, false, 92, 94]);
                return t;
            };
            p.card_effect3_i = function () {
                var t = new g_comp.UIEffect();
                this.card_effect3 = t;
                this.__s(t, ["effectId", "visible", "x", "y"], [44, false, 92, 94]);
                return t;
            };
            p.grp_item0_i = function () {
                var t = new egret.gui.Group();
                this.grp_item0 = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.ico_item0_i(), this.label_item0_i()];
                return t;
            };
            p.grp_item1_i = function () {
                var t = new egret.gui.Group();
                this.grp_item1 = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.ico_item1_i(), this.label_item1_i()];
                return t;
            };
            p.grp_item2_i = function () {
                var t = new egret.gui.Group();
                this.grp_item2 = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.ico_item2_i(), this.label_item2_i()];
                return t;
            };
            p.grp_item3_i = function () {
                var t = new egret.gui.Group();
                this.grp_item3 = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.ico_item3_i(), this.label_item3_i()];
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.game.ActivityNewCenterCellSkin, 66]);
                return t;
            };
            p.ico_cost_icon0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_cost_icon0 = t;
                this.__s(t, ["autoScale", "measuredWidth", "source", "touchEnabled", "x"], [false, 40, "ico_yuanbao", false, 0]);
                return t;
            };
            p.ico_cost_icon1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_cost_icon1 = t;
                this.__s(t, ["autoScale", "source", "touchEnabled", "x"], [false, "ico_yuanbao", false, 0]);
                return t;
            };
            p.ico_cost_icon2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_cost_icon2 = t;
                this.__s(t, ["autoScale", "source", "touchEnabled", "x"], [false, "ico_yuanbao", false, 0]);
                return t;
            };
            p.ico_cost_icon3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_cost_icon3 = t;
                this.__s(t, ["source", "touchEnabled", "x"], ["ico_yuanbao", false, 0]);
                return t;
            };
            p.ico_coverd0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_coverd0 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_txt_g_fanpai_", 0]);
                return t;
            };
            p.ico_coverd1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_coverd1 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_txt_g_fanpai_", 0]);
                return t;
            };
            p.ico_coverd2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_coverd2 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_txt_g_fanpai_", 0]);
                return t;
            };
            p.ico_coverd3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_coverd3 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "btn_txt_g_fanpai_", 0]);
                return t;
            };
            p.ico_item0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item0 = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0.5, -6]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item1 = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0.5, -6]);
                return t;
            };
            p.ico_item2_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item2 = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0.5, -6]);
                return t;
            };
            p.ico_item3_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item3 = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0.5, -6]);
                return t;
            };
            p.image_hint_i = function () {
                var t = new egret.gui.UIAsset();
                this.image_hint = t;
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "txt_choujiang", 20, 352]);
                return t;
            };
            p.label_activity_desc0_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc0 = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["黑体", 15, "翻牌有机率获得以下物品:", "right", 0xFFFFFF, "middle", 0.5, 180, 12]);
                return t;
            };
            p.label_cost_have0_i = function () {
                var t = new egret.gui.Label();
                this.label_cost_have0 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x"], ["黑体", 16, "0", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.label_cost_have1_i = function () {
                var t = new egret.gui.Label();
                this.label_cost_have1 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x"], ["黑体", 16, "0", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.label_cost_have2_i = function () {
                var t = new egret.gui.Label();
                this.label_cost_have2 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x"], ["黑体", 16, "0", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.label_cost_have3_i = function () {
                var t = new egret.gui.Label();
                this.label_cost_have3 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x"], ["黑体", 16, "0", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.label_item0_i = function () {
                var t = new egret.gui.Label();
                this.label_item0 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "verticalCenter", "visible"], ["黑体", 0, 15, "物品名称", 42.5, false]);
                return t;
            };
            p.label_item1_i = function () {
                var t = new egret.gui.Label();
                this.label_item1 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "verticalCenter", "visible"], ["黑体", 0, 15, "物品名称", 42.5, false]);
                return t;
            };
            p.label_item2_i = function () {
                var t = new egret.gui.Label();
                this.label_item2 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "verticalCenter", "visible"], ["黑体", 0, 15, "物品名称", 42.5, false]);
                return t;
            };
            p.label_item3_i = function () {
                var t = new egret.gui.Label();
                this.label_item3 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "verticalCenter", "visible"], ["黑体", 0, 15, "物品名称", 42.5, false]);
                return t;
            };
            p.label_jinbi_i = function () {
                var t = new egret.gui.Label();
                this.label_jinbi = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x"], ["黑体", 16, "0", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new egret.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x"], ["黑体", 16, "0", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "skinName", "x", "y"], [skins.game.BaseItemCellSkin, skins.comp.List_Empty_H_Skin, 0, 0]);
                t.layout = this.__34_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "touchEnabled", "x"], [false, "ico_yuanbao", false, 0]);
                return t;
            };
            ActivityNewLuckyTalosSkin._skinParts = ["head", "btn_close", "btn_help", "label_jinbi", "label_yuanbao", "btn_flipped0", "ico_coverd0", "ico_cost_icon0", "label_cost_have0", "btn_card0", "ico_item0", "label_item0", "grp_item0", "card_effect0", "btn_flipped1", "ico_coverd1", "ico_cost_icon1", "label_cost_have1", "btn_card1", "ico_item1", "label_item1", "grp_item1", "card_effect1", "btn_flipped2", "ico_coverd2", "ico_cost_icon2", "label_cost_have2", "btn_card2", "ico_item2", "label_item2", "grp_item2", "card_effect2", "btn_flipped3", "ico_coverd3", "ico_cost_icon3", "label_cost_have3", "btn_card3", "ico_item3", "label_item3", "grp_item3", "card_effect3", "btn_container", "image_hint", "label_activity_desc0", "btn_detail", "list_items"];
            return ActivityNewLuckyTalosSkin;
        })(egret.gui.Skin);
        game.ActivityNewLuckyTalosSkin = ActivityNewLuckyTalosSkin;
        egret.registerClass(ActivityNewLuckyTalosSkin,"skins.game.ActivityNewLuckyTalosSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
