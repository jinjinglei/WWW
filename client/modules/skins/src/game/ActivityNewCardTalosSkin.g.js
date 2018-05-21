var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewCardTalosSkin = (function (_super) {
            __extends(ActivityNewCardTalosSkin, _super);
            function ActivityNewCardTalosSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.head_i(), this.btn_close_i(), this.btn_help_i(), this.__13_i(), this.btn_container_i(), this.__30_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewCardTalosSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewCardTalosSkin._skinParts;
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
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnWidth", "horizontalAlign", "horizontalGap", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "requestedColumnCount", "requestedRowCount", "rowAlign", "rowHeight", "verticalAlign", "verticalGap"], [140, "left", 6, 10, 0, 0, 10, 3, 2, "top", 150, "top", 6]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "right", "scale9Grid", "source", "y"], [275, 0, 0, egret.gui.getScale9Grid("16,10,404,45"), "panel_danbi", 0]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [109, 284, -2]);
                t.elementsContent = [this.btn_detail_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [430, 0, 5]);
                t.elementsContent = [this.label_activity_desc0_i(), this.__16_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 35;
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["touchChildren", "touchEnabled", "width", "x", "y"], [true, true, 432, 0, 40]);
                t.layout = this.__19_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [125, egret.gui.getScale9Grid("15,15,32,28"), "bg_di", 430, 0, 0]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 35;
                return t;
            };
            p.__23_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__24_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__23_i(), this.__24_i()];
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["黑体", 3, 15, "幸运值收集满时，除了抽牌所得物品外，还必定获得一个额外物品", 0x0FD61C, "middle", 180, 12, 52]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [100, 200, 230, 10]);
                t.elementsContent = [this.progress_luck_i(), this.label_activity_desc2_i(), this.__27_i()];
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [125, 0, 430, 145]);
                t.elementsContent = [this.__21_i(), this.label_activity_desc1_i(), this.list_itemsOther_i(), this.__28_i()];
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [275, 0, 430, 191]);
                t.elementsContent = [this.__15_i(), this.__17_i(), this.__20_i(), this.__29_i()];
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
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 413, 0]);
                return t;
            };
            p.btn_container_i = function () {
                var t = new egret.gui.Group();
                this.btn_container = t;
                this.__s(t, ["height", "horizontalCenter", "touchChildren", "touchEnabled", "width", "y"], [320, 0.5, true, true, 435, 467]);
                t.layout = this.__14_i();
                return t;
            };
            p.btn_detail_i = function () {
                var t = new egret.gui.Button();
                this.btn_detail = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_quanbujiangli", "领取", skins.comp.Btn_3_0_Skin, 95, 0, -2]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 2, -1]);
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.game.ActivityNewCenterCellSkin, 66]);
                return t;
            };
            p.label_activity_desc0_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc0 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "verticalCenter", "width", "x"], ["黑体", 15, "翻牌有机率获得以下物品:", 0xFFFFFF, "middle", -1.5, 180, 11]);
                return t;
            };
            p.label_activity_desc1_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc1 = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["黑体", 15, "有可能额外获得:", 0xE6ED1B, "middle", 180, 17, 4]);
                return t;
            };
            p.label_activity_desc2_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc2 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalCenter", "width"], ["黑体", 0, 15, "幸运值:10/500", "center", 0xFFFFFF, -15.5, 180]);
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
            p.list_itemsOther_i = function () {
                var t = new egret.gui.List();
                this.list_itemsOther = t;
                this.__s(t, ["itemRendererSkinName", "x", "y"], [skins.game.BaseItemCellSkin, 16, 26]);
                t.layout = this.__22_i();
                t.dataProvider = this.__26_i();
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "x", "y"], [105, skins.game.BaseItemCellSkin, 0, 0]);
                t.layout = this.__18_i();
                return t;
            };
            p.progress_luck_i = function () {
                var t = new egret.gui.ProgressBar();
                this.progress_luck = t;
                this.__s(t, ["skinName", "width", "x", "y"], [skins.comp.Bar_5_0_1_Skin, 200, -1, 20]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "touchEnabled", "x"], [false, "ico_yuanbao", false, 0]);
                return t;
            };
            ActivityNewCardTalosSkin._skinParts = ["head", "btn_close", "btn_help", "label_jinbi", "label_yuanbao", "btn_container", "label_activity_desc0", "btn_detail", "list_items", "label_activity_desc1", "list_itemsOther", "progress_luck", "label_activity_desc2"];
            return ActivityNewCardTalosSkin;
        })(egret.gui.Skin);
        game.ActivityNewCardTalosSkin = ActivityNewCardTalosSkin;
        egret.registerClass(ActivityNewCardTalosSkin,"skins.game.ActivityNewCardTalosSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
