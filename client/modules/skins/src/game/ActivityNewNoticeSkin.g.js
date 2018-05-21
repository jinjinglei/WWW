var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewNoticeSkin = (function (_super) {
            __extends(ActivityNewNoticeSkin, _super);
            function ActivityNewNoticeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.ico_bg_i(), this.head_i(), this.btn_close_i(), this.btn_help_i(), this.group_content_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewNoticeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewNoticeSkin._skinParts;
                }
            );
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
                var t = new egret.gui.HorizontalLayout();
                t.gap = 30;
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
            p.group_content_i = function () {
                var t = new egret.gui.Group();
                this.group_content = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [800, 0, 480, 0]);
                t.layout = this.__6_i();
                return t;
            };
            p.head_i = function () {
                var t = new g_comp.ActivityItem();
                this.head = t;
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [2, skins.game.ActivityNewCenterCellSkin, 10, 73]);
                return t;
            };
            p.ico_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg = t;
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [740, 0, "s9g_black_0", 450, 48]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [-10, -31, -33, "panel_bg_vip", 1, 30, 30]);
                return t;
            };
            ActivityNewNoticeSkin._skinParts = ["ico_bg", "head", "btn_close", "btn_help", "group_content"];
            return ActivityNewNoticeSkin;
        })(egret.gui.Skin);
        game.ActivityNewNoticeSkin = ActivityNewNoticeSkin;
        egret.registerClass(ActivityNewNoticeSkin,"skins.game.ActivityNewNoticeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
