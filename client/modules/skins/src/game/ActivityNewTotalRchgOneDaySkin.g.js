var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewTotalRchgOneDaySkin = (function (_super) {
            __extends(ActivityNewTotalRchgOneDaySkin, _super);
            function ActivityNewTotalRchgOneDaySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.head_i(), this.btn_close_i(), this.btn_help_i(), this.__6_i(), this.__18_i(), this.__20_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewTotalRchgOneDaySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewTotalRchgOneDaySkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [55, 40]);
                t.elementsContent = [this.__10_i(), this.label_activity_desc_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "您当前已累计充值:", 0xFFE613, 1, 52]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [62, 62]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__12_i(), this.label_all_charge_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 2;
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "width"], [0, 430]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__9_i(), this.__11_i(), this.__14_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "touchChildren", "touchEnabled", "width", "x", "y"], [497, 0, true, true, 430, 10, 209]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__16_i(), this.list_items_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "y"], [45, "panel_danbi", 437, 0]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 712]);
                t.elementsContent = [this.__19_i(), this.label_left_time_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-7, -32, -32, "panel_bg_vip", -2, 20, 20]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 30, -1]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_huodong", 30, 6]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_jianglifafang", 10, 757]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 10;
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "活动时间:", 0xFFE613, 0, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [23, 332, 40, 4]);
                t.elementsContent = [this.__8_i(), this.label_activity_time_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 409, 2]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 2, 3]);
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.game.ActivityNewCenterCellSkin, 73]);
                return t;
            };
            p.label_activity_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 15, "累计充值额度达到指定额度\ras", 0xe6e4a8, 88, 1]);
                return t;
            };
            p.label_activity_time_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_time = t;
                this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["黑体", 18, "02月13日10:00--02月16日12:00", 333, 90, 0]);
                return t;
            };
            p.label_all_charge_i = function () {
                var t = new egret.gui.Label();
                this.label_all_charge = t;
                this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["黑体", 18, "0", 73, 161, 53]);
                return t;
            };
            p.label_left_time_i = function () {
                var t = new egret.gui.Label();
                this.label_left_time = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "verticalAlign", "verticalCenter", "width"], ["黑体", 0.5, 28, "剩余时间", "center", "middle", 0, 360]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "left", "maxHeight", "skinName", "top", "touchEnabled", "width"], [skins.game.ActivityNewSingleRchgItemSkin, 0, 415, skins.comp.List_Empty_Skin, 90, true, 430]);
                t.layout = this.__17_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor"], ["黑体", 18, "活动规则:", 0xFFE613]);
                return t;
            };
            ActivityNewTotalRchgOneDaySkin._skinParts = ["head", "btn_close", "btn_help", "label_activity_time", "label_activity_desc", "label_all_charge", "list_items", "label_left_time"];
            return ActivityNewTotalRchgOneDaySkin;
        })(egret.gui.Skin);
        game.ActivityNewTotalRchgOneDaySkin = ActivityNewTotalRchgOneDaySkin;
        egret.registerClass(ActivityNewTotalRchgOneDaySkin,"skins.game.ActivityNewTotalRchgOneDaySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
