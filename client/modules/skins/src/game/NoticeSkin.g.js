var skins;
(function (skins) {
    var game;
    (function (game) {
        var NoticeSkin = (function (_super) {
            __extends(NoticeSkin, _super);
            function NoticeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.scl_Content_i(), this.label_title_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=NoticeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return NoticeSkin._skinParts;
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
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 437, 65]);
                return t;
            };
            p.ico_head_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_head = t;
                this.__s(t, ["autoScale", "horizontalCenter", "maxWidth"], [false, 0, 409]);
                return t;
            };
            p.label_text_i = function () {
                var t = new mo.gui.Label();
                this.label_text = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textColor", "width", "y"], [0, 5, 20, "   传奇世界正版IP，年度重磅H5力作\n        “[ubb color=0xF3CB54]传奇世界[/ubb]”王者归来。\n删档测试，震撼开启（10月31日-10月7日24点）。每日登陆有巨额元宝赠送，\n删档期间，冲值双倍返利火热进行中！详情见游戏内活动公告。\n    百万传奇玩家，邀您一起来玩，\n       官方Q群（[ubb color=0xF3CB54]454612729[/ubb]）！", 0xD1D1B4, 409, 23]);
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "width", "y"], [true, 0, 22, 1, "更新公告", "center", 0xF3CB54, 384, 130]);
                return t;
            };
            p.scl_Content_i = function () {
                var t = new egret.gui.Scroller();
                this.scl_Content = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [550, 0.5, 409, 168]);
                t.viewport = this.__6_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [714, "s9g_notice_bg", 480, 0, 41]);
                return t;
            };
            NoticeSkin._skinParts = ["ico_head", "label_text", "scl_Content", "label_title", "btn_close"];
            return NoticeSkin;
        })(egret.gui.Skin);
        game.NoticeSkin = NoticeSkin;
        egret.registerClass(NoticeSkin,"skins.game.NoticeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
