var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityRechargeSkin = (function (_super) {
            __extends(ActivityRechargeSkin, _super);
            function ActivityRechargeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.label_title_i(), this.__3_i(), this.label_date_i(), this.__4_i(), this.label_money_i(), this.label_desc_i(), this.list_items_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityRechargeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityRechargeSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "您当前已累计充值：", 0xFAE632, 48, 250]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.label_date_i = function () {
                var t = new mo.gui.Label();
                this.label_date = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "活动时间:", 0xFABD24, 133, 200]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "活动描述", 0xFDE9BB, 48, 223]);
                return t;
            };
            p.label_money_i = function () {
                var t = new mo.gui.Label();
                this.label_money = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "000", 0xFAF224, 203, 250]);
                return t;
            };
            p.label_title_i = function () {
                var t = new mo.gui.Label();
                this.label_title = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [5, 24, "活动标题", 0xFABD24, 166]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [459, 1, skins.game.ActivityRechargeItemSkin, 384, 278]);
                t.layout = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "活动时间:", 0xFABD24, 48, 200]);
                return t;
            };
            ActivityRechargeSkin._skinParts = ["label_title", "label_date", "label_money", "label_desc", "list_items"];
            return ActivityRechargeSkin;
        })(egret.gui.Skin);
        game.ActivityRechargeSkin = ActivityRechargeSkin;
        egret.registerClass(ActivityRechargeSkin,"skins.game.ActivityRechargeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
