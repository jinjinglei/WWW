var skins;
(function (skins) {
    var game;
    (function (game) {
        var HomeWelcomSkin = (function (_super) {
            __extends(HomeWelcomSkin, _super);
            function HomeWelcomSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.__5_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HomeWelcomSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HomeWelcomSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [367, 0, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 400, 46]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Button();
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_info_Skin, 21, 150]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_notice", 153]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "top", "width"], [491, 0, skins.comp.Dlg_Close_0_Skin, 160, 422]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.label_text_i()];
                return t;
            };
            p.label_text_i = function () {
                var t = new mo.gui.Label();
                this.label_text = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [24, "标签", 381, 20, 57]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Button();
                this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0, "确定", skins.comp.Btn_3_0_Skin, 438]);
                return t;
            };
            HomeWelcomSkin._skinParts = ["label_text", "container"];
            return HomeWelcomSkin;
        })(egret.gui.Skin);
        game.HomeWelcomSkin = HomeWelcomSkin;
        egret.registerClass(HomeWelcomSkin,"skins.game.HomeWelcomSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
