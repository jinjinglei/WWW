var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewCardItemSkin = (function (_super) {
            __extends(ActivityNewCardItemSkin, _super);
            function ActivityNewCardItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [189, 140]);
                this.elementsContent = [this.__13_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewCardItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewCardItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "middle"]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "y"], [43, 33]);
                t.layout = this.__11_i();
                t.elementsContent = [this.ico_cost_icon_i(), this.label_cost_have_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "touchEnabled", "width", "x", "y"], [189, true, 140, 0, 0]);
                t.elementsContent = [this.btn_flipped_i(), this.group_card_i(), this.grp_item_i(), this.card_effect_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "horizontalCenter", "source", "verticalCenter", "x", "y"], [false, 0, "bg_card_rand", 0, 10, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "verticalCenter", "x"], [false, "txt_fanpai", 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "verticalCenter", "x", "y"], [false, "img_(", 0, 10, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "verticalCenter", "x", "y"], [false, "img_)", 0, 20, 20]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [28, 0, 125, 26]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__5_i(), this.__6_i(), this.label_freenum_i(), this.__7_i()];
                return t;
            };
            p.btn_flipped_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_flipped = t;
                this.__s(t, ["source", "x", "y"], ["card_front2", 0, 0]);
                return t;
            };
            p.card_effect_i = function () {
                var t = new g_comp.UIEffect();
                this.card_effect = t;
                this.__s(t, ["effectId", "visible", "x", "y"], [80002, false, 70, 95]);
                return t;
            };
            p.group_card_i = function () {
                var t = new egret.gui.Group();
                this.group_card = t;
                this.__s(t, ["height", "left", "top", "width"], [189, -2, 0, 140]);
                t.elementsContent = [this.ico_coverd_i(), this.group_free_i(), this.group_money_i()];
                return t;
            };
            p.group_free_i = function () {
                var t = new egret.gui.Group();
                this.group_free = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [58, 0, 125, 66]);
                t.elementsContent = [this.__4_i(), this.__9_i()];
                return t;
            };
            p.group_money_i = function () {
                var t = new egret.gui.Group();
                this.group_money = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [58, false, 125, 8, 66]);
                t.elementsContent = [this.__10_i(), this.__12_i()];
                return t;
            };
            p.grp_item_i = function () {
                var t = new egret.gui.Group();
                this.grp_item = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.rect_textBg_i(), this.ico_item_i()];
                return t;
            };
            p.ico_cost_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_cost_icon = t;
                this.__s(t, ["autoScale", "height", "measuredWidth", "source", "touchEnabled", "width", "x", "y"], [false, 20, 40, "ico_yuanbao", false, 26, 6, 3]);
                return t;
            };
            p.ico_coverd_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_coverd = t;
                this.__s(t, ["left", "source", "top"], [0, "card_back2", 0]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "skinName", "verticalCenter"], [0, skins.comp.Ico_Item_Skin, -1.5]);
                return t;
            };
            p.label_cost_have_i = function () {
                var t = new egret.gui.Label();
                this.label_cost_have = t;
                this.__s(t, ["fontFamily", "left", "size", "text", "textColor", "verticalAlign", "y"], ["黑体", 33, 16, "0", 0xFDB42C, "middle", 1]);
                return t;
            };
            p.label_freenum_i = function () {
                var t = new egret.gui.Label();
                this.label_freenum = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [15, "0/3", 0xFDB42C, 73, 4]);
                return t;
            };
            p.rect_textBg_i = function () {
                var t = new egret.gui.Rect();
                this.rect_textBg = t;
                this.__s(t, ["fillAlpha", "fillColor", "height", "horizontalCenter", "strokeAlpha", "width", "y"], [0.5, 0x000000, 20, 0, 1, 80, 130]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "horizontalCenter", "source", "verticalCenter", "x", "y"], [false, 0, "panel_luck", 0, 10, 10]);
                return t;
            };
            ActivityNewCardItemSkin._skinParts = ["btn_flipped", "ico_coverd", "label_freenum", "group_free", "ico_cost_icon", "label_cost_have", "group_money", "group_card", "rect_textBg", "ico_item", "grp_item", "card_effect"];
            return ActivityNewCardItemSkin;
        })(egret.gui.Skin);
        game.ActivityNewCardItemSkin = ActivityNewCardItemSkin;
        egret.registerClass(ActivityNewCardItemSkin,"skins.game.ActivityNewCardItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
