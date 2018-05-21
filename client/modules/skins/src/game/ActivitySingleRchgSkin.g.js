var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivitySingleRchgSkin = (function (_super) {
            __extends(ActivitySingleRchgSkin, _super);
            function ActivitySingleRchgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.label_title_i(), this.__3_i(), this.label_date_i(), this.label_desc_i(), this.list_items_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivitySingleRchgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivitySingleRchgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_jianglifafang", 728]);
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
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "活动时间:", 0xFABD24, 48, 200]);
                return t;
            };
            ActivitySingleRchgSkin._skinParts = ["label_title", "label_date", "label_desc", "list_items"];
            return ActivitySingleRchgSkin;
        })(egret.gui.Skin);
        game.ActivitySingleRchgSkin = ActivitySingleRchgSkin;
        egret.registerClass(ActivitySingleRchgSkin,"skins.game.ActivitySingleRchgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
