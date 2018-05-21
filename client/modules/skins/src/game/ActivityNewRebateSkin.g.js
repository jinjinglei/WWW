var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewRebateSkin = (function (_super) {
            __extends(ActivityNewRebateSkin, _super);
            function ActivityNewRebateSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.head_i(), this.btn_close_i(), this.btn_help_i(), this.__6_i(), this.__18_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewRebateSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewRebateSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 2;
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "width"], [0, 430]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__8_i(), this.__10_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "您当前累计消耗:", 0xFFE613, 1, 52]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [72, 72]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__13_i(), this.label_all_charge_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 10;
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "touchChildren", "touchEnabled", "width", "x", "y"], [544, 0, true, true, 430, 20, 219]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__12_i(), this.__15_i(), this.list_items_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-7, -32, -32, "panel_bg_vip", -2, 30, 30]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 40, 9]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_huodong", 40, 16]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_jianglifafang", 20, 767]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "活动时间:", 0xFFE613, 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [23, 332, 40, 4]);
                t.elementsContent = [this.__7_i(), this.label_activity_time_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor"], ["黑体", 18, "活动规则:", 0xFFE613]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 419, 12]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 12, 13]);
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [0, skins.game.ActivityNewCenterCellSkin, 10, 83]);
                return t;
            };
            p.label_activity_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 15, "累计充值额度达到指定额度\ras", 0xE6E4A8, 88, 1]);
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
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "left", "maxHeight", "skinName", "top", "touchEnabled", "width"], [skins.game.ActivityNewSingleRchgItemSkin, 0, 460, skins.comp.List_Empty_Skin, 90, true, 430]);
                t.layout = this.__16_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [55, 40]);
                t.elementsContent = [this.__9_i(), this.label_activity_desc_i()];
                return t;
            };
            ActivityNewRebateSkin._skinParts = ["head", "btn_close", "btn_help", "label_activity_time", "label_activity_desc", "label_all_charge", "list_items"];
            return ActivityNewRebateSkin;
        })(egret.gui.Skin);
        game.ActivityNewRebateSkin = ActivityNewRebateSkin;
        egret.registerClass(ActivityNewRebateSkin,"skins.game.ActivityNewRebateSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
