var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewSingleRchgSkin = (function (_super) {
            __extends(ActivityNewSingleRchgSkin, _super);
            function ActivityNewSingleRchgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.head_i(), this.btn_close_i(), this.btn_help_i(), this.__11_i(), this.__12_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewSingleRchgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewSingleRchgSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [544, 0, 430, 199]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__8_i(), this.list_items_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_jianglifafang", 750]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-7, -32, -32, "panel_bg_vip", -2, 10, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 20, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_huodong", 20, 7]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "活动时间:", 0xffe613, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "活动规则:", 0xFFE613, 1, 28]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "width"], [0, 430]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.label_activity_time_i(), this.label_activity_desc_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 413, -5]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", -1, -2]);
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [0, skins.game.ActivityNewCenterCellSkin, 10, 69]);
                return t;
            };
            p.label_activity_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_desc = t;
                this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["黑体", 18, "标签\r标签", 333, 90, 29]);
                return t;
            };
            p.label_activity_time_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_time = t;
                this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["黑体", 18, "02月13日10:00--02月16日12:00", 333, 90, 0]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "left", "maxHeight", "skinName", "top", "width"], [skins.game.ActivityNewSingleRchgItemSkin, 0, 490, skins.comp.List_Empty_Skin, 79, 431]);
                t.layout = this.__9_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 10;
                return t;
            };
            ActivityNewSingleRchgSkin._skinParts = ["head", "btn_close", "btn_help", "label_activity_time", "label_activity_desc", "list_items"];
            return ActivityNewSingleRchgSkin;
        })(egret.gui.Skin);
        game.ActivityNewSingleRchgSkin = ActivityNewSingleRchgSkin;
        egret.registerClass(ActivityNewSingleRchgSkin,"skins.game.ActivityNewSingleRchgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
