var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewAskSkin = (function (_super) {
            __extends(ActivityNewAskSkin, _super);
            function ActivityNewAskSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_bg_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.head_i(), this.__9_i(), this.btn_close_i(), this.btn_help_i(), this.__17_i(), this.__24_i(), this.btn_container_i(), this.__29_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewAskSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewAskSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "middle"]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [-31.5, 1, 10, 10]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__10_i(), this.label_jinbi_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "middle"]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "touchEnabled", "x"], [false, "ico_yuanbao", false, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["right", "top"], [80, 41]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__14_i(), this.label_yuanbao_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [20, "middle"]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["right", "visible", "y"], [69, false, 41]);
                t.layout = this.__16_i();
                t.elementsContent = [this.__12_i(), this.__15_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "right", "scale9Grid", "source", "y"], [155, 0, 0, egret.gui.getScale9Grid("27,25,16,20"), "panel_huawenlasheng", 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [109, 304, 0]);
                t.elementsContent = [this.btn_detail_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [430, 0, 6]);
                t.elementsContent = [this.label_activity_desc0_i(), this.__19_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 35;
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "touchChildren", "touchEnabled", "width", "y"], [0, true, true, 432, 47]);
                t.layout = this.__22_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [155, 0, 430, 226]);
                t.elementsContent = [this.__18_i(), this.__20_i(), this.__23_i()];
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [330, 0, egret.gui.getScale9Grid("15,15,14,12"), "bg_hongbao", 435, 0]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "verticalCenter", "width", "x"], [310, 0, 435, 0]);
                t.elementsContent = [this.list_questItems_i(), this.img_achive_i()];
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 723]);
                t.elementsContent = [this.btn_sure_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-10, -31, -33, "panel_bg_vip", 1, 40, 40]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_jianglifafang", 20, 760]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 50, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_huodong", 50, 7]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x", "y"], ["黑体", 18, "活动时间:", 0xFFE613, "bottom", 10, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "y"], [28, 194]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__7_i(), this.label_activity_time_i()];
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
                this.__s(t, ["horizontalCenter", "touchChildren", "touchEnabled", "y"], [0.5, true, true, 386]);
                t.layout = this.__28_i();
                t.elementsContent = [this.__25_i(), this.__27_i()];
                return t;
            };
            p.btn_detail_i = function () {
                var t = new egret.gui.Button();
                this.btn_detail = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_quanbujiangli", "领取", skins.comp.Btn_3_0_Skin, 95, 0, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 2, -1]);
                return t;
            };
            p.btn_sure_i = function () {
                var t = new egret.gui.Button();
                this.btn_sure = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_tijiao", "领取", skins.comp.Btn_3_0_Skin, 95, 0, 0]);
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.game.ActivityNewCenterCellSkin, 66]);
                return t;
            };
            p.ico_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg = t;
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "x", "y"], [740, 0, egret.gui.getScale9Grid("23,22,111,134"), "s9g_dlg_1", 460, 10, 49]);
                return t;
            };
            p.img_achive_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_achive = t;
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "verticalCenter"], [0, egret.gui.getScale9Grid("15,15,14,12"), "img_yiwancheng", 0]);
                return t;
            };
            p.label_activity_desc0_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc0 = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "x"], ["黑体", 18, "回答所有问题即可领取以下物品:", "right", 0xFFFFFF, "middle", 0.5, 12]);
                return t;
            };
            p.label_activity_time_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_time = t;
                this.__s(t, ["fontFamily", "size", "text", "verticalAlign", "width", "x", "y"], ["黑体", 18, "02月13日10:00--02月16日12:00", "bottom", 333, 92, 0]);
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
                t.layout = this.__21_i();
                return t;
            };
            p.list_questItems_i = function () {
                var t = new egret.gui.List();
                this.list_questItems = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "maxHeight", "skinName", "touchEnabled", "y"], [0, skins.game.ActivityNewAskItemSkin, 310, skins.comp.List_Empty_Skin, false, 0]);
                t.layout = this.__26_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "touchEnabled", "x"], [false, "ico_gold_2", false, 0]);
                return t;
            };
            ActivityNewAskSkin._skinParts = ["ico_bg", "head", "label_activity_time", "btn_close", "btn_help", "label_jinbi", "label_yuanbao", "label_activity_desc0", "btn_detail", "list_items", "list_questItems", "img_achive", "btn_container", "btn_sure"];
            return ActivityNewAskSkin;
        })(egret.gui.Skin);
        game.ActivityNewAskSkin = ActivityNewAskSkin;
        egret.registerClass(ActivityNewAskSkin,"skins.game.ActivityNewAskSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
