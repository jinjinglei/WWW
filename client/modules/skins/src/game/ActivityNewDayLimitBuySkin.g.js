var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewDayLimitBuySkin = (function (_super) {
            __extends(ActivityNewDayLimitBuySkin, _super);
            function ActivityNewDayLimitBuySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.head_i(), this.btn_close_i(), this.btn_help_i(), this.__6_i(), this.__19_i(), this.__31_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewDayLimitBuySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewDayLimitBuySkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                t.layout = this.__11_i();
                t.elementsContent = [this.__7_i(), this.__10_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "bottom", "scale9Grid", "source", "top", "x"], [false, 0, egret.gui.getScale9Grid("86,120,259,54"), "panel_chaozhiyouhui", 0, -7]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "paddingLeft", "paddingRight"], [6, "center", 0, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 20, 94]);
                t.layout = this.__15_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [332, 96, 191]);
                t.elementsContent = [this.__13_i(), this.__16_i(), this.btn_buy_i(), this.ico_hasGet_i(), this.label_buy_count_i(), this.label_vipHint_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 10;
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "touchChildren", "touchEnabled", "width", "x", "y"], [447, 0, true, true, 433, 20, 209]);
                t.layout = this.__18_i();
                t.elementsContent = [this.__12_i(), this.__17_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, -10, -10, egret.gui.getScale9Grid("26,12,5,7"), "panel_yuanbao", 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "verticalAlign", "x", "y"], ["黑体", 16, "消耗", "middle", 0, 0]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "middle"]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.layout = this.__22_i();
                t.elementsContent = [this.__21_i(), this.ico_cost_icon_i(), this.label_yuanbao_cost_i()];
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Group();
                t.horizontalCenter = -89;
                t.elementsContent = [this.__20_i(), this.__23_i()];
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, -10, -10, egret.gui.getScale9Grid("26,12,5,7"), "panel_yuanbao", 0]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "verticalAlign", "x", "y"], ["黑体", 16, "剩余", "middle", 10, 10]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [3, "center", "middle"]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.layout = this.__27_i();
                t.elementsContent = [this.__26_i(), this.ico_have_icon_i(), this.label_yuanbao_left_i()];
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Group();
                t.horizontalCenter = 80.5;
                t.elementsContent = [this.__25_i(), this.__28_i()];
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 30;
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 686]);
                t.layout = this.__30_i();
                t.elementsContent = [this.__24_i(), this.__29_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-10, -31, -33, "panel_bg_vip", 1, 30, 30]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 40, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_huodong", 40, 7]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_jianglifafang", 20, 753]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "panel_danbi", 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x", "y"], ["黑体", 18, "活动时间:", 0xFFE613, "bottom", 1, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "活动规则:", 0xFFE613, 1, 28]);
                return t;
            };
            p.btn_buy_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy = t;
                this.__s(t, ["height", "horizontalCenter", "icon", "skinName", "width", "y"], [36, 0, "btn_txt_g_buy", skins.comp.Btn_3_12_Skin, 101, 266]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 413, 0]);
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
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [2, skins.game.ActivityNewCenterCellSkin, 10, 73]);
                return t;
            };
            p.ico_cost_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_cost_icon = t;
                this.__s(t, ["autoScale", "source", "touchEnabled", "x"], [false, "ico_yuanbao", false, 0]);
                return t;
            };
            p.ico_hasGet_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hasGet = t;
                this.__s(t, ["autoScale", "height", "horizontalCenter", "scaleX", "scaleY", "source", "y"], [false, 47, 0.9000000000000057, 0.8, 0.8, "tit_txt_g_goumai4", 264]);
                return t;
            };
            p.ico_have_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_have_icon = t;
                this.__s(t, ["source", "touchEnabled", "x"], ["ico_yuanbao", false, 0]);
                return t;
            };
            p.label_activity_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc = t;
                this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["黑体", 18, "标签\r标签\rooo", 333, 90, 30]);
                return t;
            };
            p.label_activity_time_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_time = t;
                this.__s(t, ["fontFamily", "size", "text", "verticalAlign", "width", "x", "y"], ["黑体", 18, "02月13日10:00--02月16日12:00", "bottom", 333, 90, 0]);
                return t;
            };
            p.label_buy_count_i = function () {
                var t = new egret.gui.Label();
                this.label_buy_count = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "width", "y"], [27, 0, 16, "今日购买次数x2", "center", 351, 303]);
                return t;
            };
            p.label_vipHint_i = function () {
                var t = new egret.gui.Label();
                this.label_vipHint = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "x", "y"], [27, 0.5, 16, "vip4及以上才可购买", "center", 0xFF0000, 351, 10, 329]);
                return t;
            };
            p.label_yuanbao_cost_i = function () {
                var t = new egret.gui.Label();
                this.label_yuanbao_cost = t;
                this.__s(t, ["size", "text", "textColor", "verticalAlign", "x"], [16, "99", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.label_yuanbao_left_i = function () {
                var t = new egret.gui.Label();
                this.label_yuanbao_left = t;
                this.__s(t, ["size", "text", "textColor", "verticalAlign", "x"], [16, "123", 0xFDB42C, "middle", 0]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "x", "y"], [105, skins.game.BaseItemCellSkin, 0, 0]);
                t.layout = this.__14_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left", "right", "top"], [10, 0, 0, 10]);
                t.elementsContent = [this.__8_i(), this.__9_i(), this.label_activity_time_i(), this.label_activity_desc_i()];
                return t;
            };
            ActivityNewDayLimitBuySkin._skinParts = ["head", "btn_close", "btn_help", "label_activity_time", "label_activity_desc", "list_items", "btn_buy", "ico_hasGet", "label_buy_count", "label_vipHint", "ico_cost_icon", "label_yuanbao_cost", "ico_have_icon", "label_yuanbao_left"];
            return ActivityNewDayLimitBuySkin;
        })(egret.gui.Skin);
        game.ActivityNewDayLimitBuySkin = ActivityNewDayLimitBuySkin;
        egret.registerClass(ActivityNewDayLimitBuySkin,"skins.game.ActivityNewDayLimitBuySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
