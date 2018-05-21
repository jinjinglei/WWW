var skins;
(function (skins) {
    var game;
    (function (game) {
        var SignItemSkin = (function (_super) {
            __extends(SignItemSkin, _super);
            function SignItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [100, 86]);
                this.elementsContent = [this.grp_center_i()];
                this.__6_i();
                this.__7_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("img_signed", "visible", false),
                        new egret.gui.SetProperty("img_supplement", "visible", false)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__6", "grp_center", "before", "img_signed"),
                        new egret.gui.SetProperty("img_supplement", "visible", false)
                    ]),
                    new egret.gui.State("canpatch", [
                        new egret.gui.AddItems("__7", "grp_center", "before", "img_signed"),
                        new egret.gui.SetProperty("img_signed", "visible", false)
                    ])
                ];
            }
            var d = __define,c=SignItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SignItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [1.5, -44]);
                t.layout = this.__4_i();
                t.elementsContent = [this.ico_item_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Rect();
                this.__6 = t;
                this.__s(t, ["fillAlpha", "fillColor", "height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [0.36, 0x000000, 73, 1, -8.5, 73, 40, 40]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Rect();
                this.__7 = t;
                this.__s(t, ["fillAlpha", "fillColor", "height", "horizontalCenter", "verticalCenter", "width"], [0.36, 0x000000, 73, 1, -8.5, 73]);
                return t;
            };
            p.grp_center_i = function () {
                var t = new egret.gui.Group();
                this.grp_center = t;
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [0, 0.5, 0, 0]);
                t.elementsContent = [this.__5_i(), this.rect_touch_i(), this.img_signed_i(), this.img_supplement_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [219, -113]);
                return t;
            };
            p.img_signed_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_signed = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [1, "ico_signed", -7]);
                return t;
            };
            p.img_supplement_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_supplement = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [1.5, "ico_supplement", -7, 10, 10]);
                return t;
            };
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [74, "touch_rect", 74, -36, -44]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            SignItemSkin._skinParts = ["ico_item", "rect_touch", "img_signed", "img_supplement", "grp_center"];
            return SignItemSkin;
        })(egret.gui.Skin);
        game.SignItemSkin = SignItemSkin;
        egret.registerClass(SignItemSkin,"skins.game.SignItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
