var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewNoticeSimpleSkin = (function (_super) {
            __extends(ActivityNewNoticeSimpleSkin, _super);
            function ActivityNewNoticeSimpleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__7_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewNoticeSimpleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewNoticeSimpleSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [409, 119, 17]);
                t.elementsContent = [this.ico_head_i()];
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                t.layout = this.__5_i();
                t.elementsContent = [this.__4_i(), this.label_text_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "width", "y"], [0, 440, 209]);
                t.elementsContent = [this.__3_i(), this.scl_Content_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_head = t;
                this.__s(t, ["autoScale", "fillMode", "horizontalCenter", "maxWidth"], [true, "scale", 0, 409]);
                return t;
            };
            p.label_text_i = function () {
                var t = new mo.gui.Label();
                this.label_text = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textColor", "width", "y"], [0, 5, 20, "   传奇世界正版IP，年度重磅H5力作\n        “[ubb color=0xF3CB54]传奇世界[/ubb]”王者归来。\n删档测试，震撼开启（10月31日-10月7日24点）。每日登陆有巨额元宝赠送，\n删档期间，冲值双倍返利火热进行中！详情见游戏内活动公告。\n    百万传奇玩家，邀您一起来玩，\n       官方Q群（[ubb color=0xF3CB54]454612729[/ubb]）！", 0xFFFFFF, 409, 23]);
                return t;
            };
            p.scl_Content_i = function () {
                var t = new egret.gui.Scroller();
                this.scl_Content = t;
                this.__s(t, ["height", "horizontalCenter", "width", "x", "y"], [550, 0.5, 409, 10, 14]);
                t.viewport = this.__6_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [570, 0, egret.gui.getScale9Grid("15,15,14,12"), "bg_hongbao", 440, 0]);
                return t;
            };
            ActivityNewNoticeSimpleSkin._skinParts = ["ico_head", "label_text", "scl_Content"];
            return ActivityNewNoticeSimpleSkin;
        })(egret.gui.Skin);
        game.ActivityNewNoticeSimpleSkin = ActivityNewNoticeSimpleSkin;
        egret.registerClass(ActivityNewNoticeSimpleSkin,"skins.game.ActivityNewNoticeSimpleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
