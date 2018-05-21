var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewEverydayRchgItemSkin = (function (_super) {
            __extends(ActivityNewEverydayRchgItemSkin, _super);
            function ActivityNewEverydayRchgItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [120, 448]);
                this.elementsContent = [this.__10_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewEverydayRchgItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewEverydayRchgItemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "minHeight", "right", "scale9Grid", "source", "top"], [0, 0, 30, 0, egret.gui.getScale9Grid("117,18,183,27"), "panel_yilingqu", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "requestedColumnCount", "verticalGap"], [5, 4, 6]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.paddingBottom = 6;
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [-50, 14]);
                t.layout = this.__6_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("25,10,18,17"), "tab_txt_dijitian", 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [5, 1]);
                t.elementsContent = [this.__8_i(), this.label_desc_i()];
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["icon", "label", "right", "skinName", "verticalCenter"], ["btn_txt_g_lingqu", "按钮", 15, skins.comp.Btn_3_12_Skin, 0]);
                return t;
            };
            p.ico_bg_can_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg_can = t;
                this.__s(t, ["bottom", "left", "minHeight", "right", "scale9Grid", "source", "top", "visible", "x", "y"], [0, 0, 30, 0, egret.gui.getScale9Grid("46,17,338,39"), "panel_leichong", 0, false, 10, 10]);
                return t;
            };
            p.ico_bg_got_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg_got = t;
                this.__s(t, ["bottom", "left", "minHeight", "right", "scale9Grid", "source", "top", "visible", "x", "y"], [0, 0, 30, 0, egret.gui.getScale9Grid("54,18,325,38"), "panel_yilingqu", 0, false, 20, 20]);
                return t;
            };
            p.ico_got_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_got = t;
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 29, "tit_txt_lingqu3", false, 85, 337, 43]);
                return t;
            };
            p.ico_unreach_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_unreach = t;
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 42, "tit_txt_lingqu2", false, 85, 341, 37]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_desc = t;
                t.setStyle("textAlign", "center");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["font", "horizontalCenter", "maxHeight", "paddingRight", "text", "verticalCenter"], ["num_7", 10, 26, 52, "12", -1]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "verticalCenter", "width"], [102, 0, skins.game.BaseItemCellSkin, -3, 320]);
                t.layout = this.__5_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left", "right", "top", "x", "y"], [0, 0, 0, 0, 10, 10]);
                t.elementsContent = [this.__4_i(), this.ico_bg_can_i(), this.ico_bg_got_i(), this.__7_i(), this.__9_i(), this.btn_get_i(), this.ico_got_i(), this.ico_unreach_i()];
                return t;
            };
            ActivityNewEverydayRchgItemSkin._skinParts = ["ico_bg_can", "ico_bg_got", "list_items", "label_desc", "btn_get", "ico_got", "ico_unreach"];
            return ActivityNewEverydayRchgItemSkin;
        })(egret.gui.Skin);
        game.ActivityNewEverydayRchgItemSkin = ActivityNewEverydayRchgItemSkin;
        egret.registerClass(ActivityNewEverydayRchgItemSkin,"skins.game.ActivityNewEverydayRchgItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
