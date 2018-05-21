var skins;
(function (skins) {
    var game;
    (function (game) {
        var Activity7DaysSkin = (function (_super) {
            __extends(Activity7DaysSkin, _super);
            function Activity7DaysSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.label_title_i(), this.__3_i(), this.label_date_i(), this.label_desc_i(), this.list_items_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Activity7DaysSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Activity7DaysSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.label_date_i = function () {
                var t = new mo.gui.Label();
                this.label_date = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "活动时间:", 0xFABD24, 135, 206]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "活动描述", 0xFDE9BB, 47, 229]);
                return t;
            };
            p.label_title_i = function () {
                var t = new mo.gui.Label();
                this.label_title = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [4, 24, "活动标题", 0xFABD24, 166]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [467, 0.5, skins.game.Activity7DayItemSkin, 383, 267]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "活动时间:", 0xFABD24, 47, 206]);
                return t;
            };
            Activity7DaysSkin._skinParts = ["label_title", "label_date", "label_desc", "list_items"];
            return Activity7DaysSkin;
        })(egret.gui.Skin);
        game.Activity7DaysSkin = Activity7DaysSkin;
        egret.registerClass(Activity7DaysSkin,"skins.game.Activity7DaysSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
