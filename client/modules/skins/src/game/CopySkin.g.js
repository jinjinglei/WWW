var skins;
(function (skins) {
    var game;
    (function (game) {
        var CopySkin = (function (_super) {
            __extends(CopySkin, _super);
            function CopySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.img_title_i(), this.__5_i(), this.btn_close_i(), this.__7_i(), this.res_bar_i(), this.__8_i(), this.list_copys_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CopySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CopySkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source"], [0, "panel_task_title"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [531, 0, "s9g_dlg_1", 455, 133]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["left", "middle"]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [200, 14, 90]);
                t.layout = this.__6_i();
                t.elementsContent = [this.label_ticket_i(), this.btn_buy_ticket_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [503, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 430, 25, 148]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.btn_buy_ticket_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy_ticket = t;
                this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.8, 0.8, skins.comp.Btn_plus_Skin, 140, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 60]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_equipCopy", 10]);
                return t;
            };
            p.label_ticket_i = function () {
                var t = new mo.gui.Label();
                this.label_ticket = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "装备入场券：5", 14013880, 0, 3]);
                return t;
            };
            p.list_copys_i = function () {
                var t = new egret.gui.List();
                this.list_copys = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [475, -1, skins.game.CopyItemSkin, 410, 162]);
                t.layout = this.__9_i();
                return t;
            };
            p.res_bar_i = function () {
                var t = new g_comp.ResBar();
                this.res_bar = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.comp.ResBarSkin, 675]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            CopySkin._skinParts = ["img_title", "btn_close", "label_ticket", "btn_buy_ticket", "res_bar", "list_copys"];
            return CopySkin;
        })(egret.gui.Skin);
        game.CopySkin = CopySkin;
        egret.registerClass(CopySkin,"skins.game.CopySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
