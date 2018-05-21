var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewNoticeRewardSkin = (function (_super) {
            __extends(ActivityNewNoticeRewardSkin, _super);
            function ActivityNewNoticeRewardSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__23_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewNoticeRewardSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewNoticeRewardSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "requestedColumnCount", "verticalGap"], [30, 4, 6]);
                return t;
            };
            p.__13_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__14_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__15_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__16_i = function () {
                var t = {};
                t.label = "数据4";
                return t;
            };
            p.__17_i = function () {
                var t = {};
                t.label = "数据5";
                return t;
            };
            p.__18_i = function () {
                var t = {};
                t.label = "数据6";
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                t.horizontalCenter = 0.5;
                t.layout = this.__11_i();
                t.elementsContent = [this.img_reward_i(), this.label_red_i(), this.list_rewards_i()];
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [5, "center"]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "touchChildren", "touchEnabled", "width", "x", "y"], [570, 0, true, true, 440, 20, 209]);
                t.layout = this.__22_i();
                t.elementsContent = [this.__5_i(), this.__10_i(), this.__21_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalAlign", "x", "y"], ["黑体", 18, "活动时间:", 0xFFE613, "bottom", 10, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                t.layout = this.__4_i();
                t.elementsContent = [this.__3_i(), this.label_activity_time_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [294, egret.gui.getScale9Grid("15,15,14,12"), "bg_hongbao", 440, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [409, 119, 17]);
                t.elementsContent = [this.ico_head_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                t.layout = this.__8_i();
                t.elementsContent = [this.__7_i(), this.label_text_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_head = t;
                this.__s(t, ["autoScale", "fillMode", "horizontalCenter", "maxWidth"], [true, "scale", 0, 409]);
                return t;
            };
            p.img_reward_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_reward = t;
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [235, 0, egret.gui.getScale9Grid("16,10,404,45"), "panel_danbi", 440, 0]);
                return t;
            };
            p.label_activity_time_i = function () {
                var t = new egret.gui.Label();
                this.label_activity_time = t;
                this.__s(t, ["fontFamily", "size", "text", "verticalAlign", "width", "x", "y"], ["黑体", 18, "02月13日10:00--02月16日12:00", "bottom", 333, 92, 0]);
                return t;
            };
            p.label_red_i = function () {
                var t = new egret.gui.Label();
                this.label_red = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "x", "y"], [-130.5, 18, "部分奖励展示:", "left", 0xFFE613, 20, 5]);
                return t;
            };
            p.label_text_i = function () {
                var t = new mo.gui.Label();
                this.label_text = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "textColor", "width", "y"], [0, 5, 20, 0xFFFFFF, 409, 23]);
                return t;
            };
            p.list_rewards_i = function () {
                var t = new egret.gui.List();
                this.list_rewards = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "maxHeight", "x", "y"], [194, 0.5, skins.game.BaseItemCellSkin, 120, 10, 31]);
                t.layout = this.__12_i();
                t.dataProvider = this.__20_i();
                return t;
            };
            p.scl_Content_i = function () {
                var t = new egret.gui.Scroller();
                this.scl_Content = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [275, 0.5, 409, 10]);
                t.viewport = this.__9_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [118, 28]);
                t.elementsContent = [this.__6_i(), this.scl_Content_i()];
                return t;
            };
            ActivityNewNoticeRewardSkin._skinParts = ["label_activity_time", "ico_head", "label_text", "scl_Content", "img_reward", "label_red", "list_rewards"];
            return ActivityNewNoticeRewardSkin;
        })(egret.gui.Skin);
        game.ActivityNewNoticeRewardSkin = ActivityNewNoticeRewardSkin;
        egret.registerClass(ActivityNewNoticeRewardSkin,"skins.game.ActivityNewNoticeRewardSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
