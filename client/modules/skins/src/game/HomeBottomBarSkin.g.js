var skins;
(function (skins) {
    var game;
    (function (game) {
        var HomeBottomBarSkin = (function (_super) {
            __extends(HomeBottomBarSkin, _super);
            function HomeBottomBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_bottom_i(), this.redpoint_bugchat_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HomeBottomBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HomeBottomBarSkin._skinParts;
                }
            );
            p.btn_bindPhone_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_bindPhone = t;
                this.__s(t, ["source", "x", "y"], ["ico_phone", 127, 667]);
                return t;
            };
            p.btn_bug_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_bug = t;
                this.__s(t, ["source", "x", "y"], ["ico_bug", 10, 12]);
                return t;
            };
            p.btn_chuanchen_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_chuanchen = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [8, 57, 0, false, "ico_heirloom", 0, 57, 10, 10]);
                return t;
            };
            p.btn_desktop_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_desktop = t;
                this.__s(t, ["autoPlay", "effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [false, 8, 57, 0, false, "ico_xiongdi", 0, 57, 50, 50]);
                return t;
            };
            p.btn_mail_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_mail = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [8, 57, 0, false, "ico_mail", 0, 57, 20, 20]);
                return t;
            };
            p.btn_notice_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_notice = t;
                this.__s(t, ["source", "x", "y"], ["ico_notice", 27, 644]);
                return t;
            };
            p.grp_bottom_i = function () {
                var t = new egret.gui.Group();
                this.grp_bottom = t;
                this.__s(t, ["right", "y"], [17, 651]);
                t.layout = this.__3_i();
                t.elementsContent = [this.btn_bindPhone_i(), this.btn_desktop_i(), this.btn_chuanchen_i(), this.btn_mail_i(), this.btn_notice_i(), this.btn_bug_i()];
                return t;
            };
            p.redpoint_bugchat_i = function () {
                var t = new egret.gui.UIAsset();
                this.redpoint_bugchat = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_red", false, 447, 640]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            HomeBottomBarSkin._skinParts = ["btn_bindPhone", "btn_desktop", "btn_chuanchen", "btn_mail", "btn_notice", "btn_bug", "grp_bottom", "redpoint_bugchat"];
            return HomeBottomBarSkin;
        })(egret.gui.Skin);
        game.HomeBottomBarSkin = HomeBottomBarSkin;
        egret.registerClass(HomeBottomBarSkin,"skins.game.HomeBottomBarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
