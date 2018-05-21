var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewCenterCellSkin = (function (_super) {
            __extends(ActivityNewCenterCellSkin, _super);
            function ActivityNewCenterCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [120, 440]);
                this.elementsContent = [this.img_bg_i(), this.img_state_i(), this.img_title_i(), this.img_desc_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewCenterCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewCenterCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["right", "y"], [20, 10]);
                t.elementsContent = [this.__4_i(), this.lbl_time_i()];
                return t;
            };
            p.img_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_bg = t;
                this.__s(t, ["autoScale", "horizontalCenter", "source", "verticalCenter"], [false, 0, "dbcz_3", 0]);
                return t;
            };
            p.img_desc_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_desc = t;
                this.__s(t, ["autoScale", "bottom", "right", "source"], [false, 11, 20, "smsd_2"]);
                return t;
            };
            p.img_state_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_state = t;
                this.__s(t, ["autoScale", "left", "source", "top", "x"], [false, 0, "dbcz_1", 0, 10]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["autoScale", "left", "source", "verticalCenter"], [false, 40, "dbcz_1", 0]);
                return t;
            };
            p.lbl_time_i = function () {
                var t = new egret.gui.Label();
                this.lbl_time = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "verticalAlign", "x"], ["黑体", 23, 15, 1, 0x4F2F2F, "距离活动结束时间:999999天", "left", "middle", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [-1, 0.4, 0x2F2E2E, -1, -1, -1]);
                return t;
            };
            ActivityNewCenterCellSkin._skinParts = ["img_bg", "img_state", "img_title", "img_desc", "lbl_time"];
            return ActivityNewCenterCellSkin;
        })(egret.gui.Skin);
        game.ActivityNewCenterCellSkin = ActivityNewCenterCellSkin;
        egret.registerClass(ActivityNewCenterCellSkin,"skins.game.ActivityNewCenterCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
