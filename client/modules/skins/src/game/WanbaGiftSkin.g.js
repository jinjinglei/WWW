var skins;
(function (skins) {
    var game;
    (function (game) {
        var WanbaGiftSkin = (function (_super) {
            __extends(WanbaGiftSkin, _super);
            function WanbaGiftSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_hint_i(), this.__4_i(), this.__6_i(), this.__9_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WanbaGiftSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WanbaGiftSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "y"], ["黑体", 0.5, 18, "记得明天继续签到\r玩吧礼包中心领取新的礼包哦!", "center", 549]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "left", "right", "scale9Grid", "source", "y"], [true, 51, -50, -50, egret.gui.getScale9Grid("123,19,41,21"), "ico_wgift_head", 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 304]);
                t.elementsContent = [this.__5_i(), this.ico_hint_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 16;
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "touchChildren", "touchEnabled", "width", "x", "y"], [0, true, true, 370, 10, 409]);
                t.layout = this.__8_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "right", "skinName", "top", "x", "y"], ["按钮", 18, skins.comp.Btn_close_Skin, 253, 10, 10]);
                return t;
            };
            p.ico_hint_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hint = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_wgift_get", 6]);
                return t;
            };
            p.label_hint_i = function () {
                var t = new egret.gui.Label();
                this.label_hint = t;
                this.__s(t, ["fontFamily", "size", "stroke", "text", "x", "y"], ["黑体", 20, 2, "恭喜你获得:", 187, 365]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "skinName", "width", "x", "y"], [skins.game.BaseItemCellSkin, skins.comp.List_Empty_H_Skin, 368, 0, 0]);
                t.layout = this.__7_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "horizontalCenter", "source", "verticalCenter"], [false, 0.5, "ico_wgift_bg", 38.5]);
                return t;
            };
            WanbaGiftSkin._skinParts = ["label_hint", "ico_hint", "list_items", "btn_close"];
            return WanbaGiftSkin;
        })(egret.gui.Skin);
        game.WanbaGiftSkin = WanbaGiftSkin;
        egret.registerClass(WanbaGiftSkin,"skins.game.WanbaGiftSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
