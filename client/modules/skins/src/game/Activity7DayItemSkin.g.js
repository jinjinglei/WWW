var skins;
(function (skins) {
    var game;
    (function (game) {
        var Activity7DayItemSkin = (function (_super) {
            __extends(Activity7DayItemSkin, _super);
            function Activity7DayItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 124;
                this.elementsContent = [this.__4_i(), this.label_desc_i(), this.list_items_i(), this.btn_get_i(), this.ico_hasGet_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Activity7DayItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Activity7DayItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_g_get", "领取", skins.comp.Btn_3_7_Skin, 95, 271, 46]);
                return t;
            };
            p.ico_hasGet_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hasGet = t;
                this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.8, 0.8, "ntc_task_getable", 267, 44]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [20, 1, "累计登录1天", 0xFDFDC2, 7, 6]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "scaleX", "scaleY", "x", "y"], [skins.game.BaseItemCellSkin, 0.85, 0.85, 10, 35]);
                t.layout = this.__5_i();
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("15,27,96,164"), "panel_shop_item", 0]);
                return t;
            };
            Activity7DayItemSkin._skinParts = ["label_desc", "list_items", "btn_get", "ico_hasGet"];
            return Activity7DayItemSkin;
        })(egret.gui.Skin);
        game.Activity7DayItemSkin = Activity7DayItemSkin;
        egret.registerClass(Activity7DayItemSkin,"skins.game.Activity7DayItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
