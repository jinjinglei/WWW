var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureListSkin = (function (_super) {
            __extends(FightTreasureListSkin, _super);
            function FightTreasureListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_hidden_i(), this.__4_i(), this.__5_i(), this.label_time_i(), this.label_hidden_count_i(), this.__6_i(), this.label_cost_i(), this.__7_i(), this.ico_no_item_i(), this.list_items_i(), this.ico_item_hint_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightTreasureListSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["黑体", 85, 17, "隐姓埋名： 使用后将大幅降低被野外pk搜索到的概率", 0xCDCDCD, "middle", 209, 40, 202]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_hide_time", 43, 177]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 21, "ico_yuanbao", 25, 329, 209]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [410, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 432, 25, 308]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "paddingLeft", "paddingTop", "verticalGap"], [5, 5, 10, 10]);
                return t;
            };
            p.btn_hidden_i = function () {
                var t = new egret.gui.Button();
                this.btn_hidden = t;
                this.__s(t, ["icon", "label", "skinName", "width", "x", "y"], ["txt_btn_hidden", "按钮", skins.comp.Btn_3_6_Skin, 156, 277, 235]);
                return t;
            };
            p.ico_item_hint_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item_hint = t;
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "visible", "width", "x", "y"], [false, 27, 2.5, "ico_jianglifafang", false, 183, 40, 727]);
                return t;
            };
            p.ico_no_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_no_item = t;
                this.__s(t, ["autoScale", "horizontalCenter", "scale9Grid", "source", "y"], [false, 0, egret.gui.getScale9Grid("33,32,20,7"), "ico_no_treasure", 444]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new egret.gui.Label();
                this.label_cost = t;
                this.__s(t, ["height", "size", "text", "x", "y"], [22, 18, "30", 357, 210]);
                return t;
            };
            p.label_hidden_count_i = function () {
                var t = new egret.gui.Label();
                this.label_hidden_count = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [17, "今日隐姓埋名次数:15", 0x6CDF7B, 173, 263, 176]);
                return t;
            };
            p.label_time_i = function () {
                var t = new egret.gui.Label();
                this.label_time = t;
                this.__s(t, ["height", "size", "text", "verticalAlign", "width", "x", "y"], [27, 26, "00:00", "middle", 107, 183, 174]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "left", "maxHeight", "skinName", "top", "width", "x", "y"], [394, skins.game.FightTreasureItemSkin, 34, 485, skins.comp.List_Empty_Skin, 312, 416, 20, 20]);
                t.layout = this.__8_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [142, 0.5, egret.gui.getScale9Grid("151,31,23,32"), "panel_recharge_bg_1", 435, 159]);
                return t;
            };
            FightTreasureListSkin._skinParts = ["btn_hidden", "label_time", "label_hidden_count", "label_cost", "ico_no_item", "list_items", "ico_item_hint"];
            return FightTreasureListSkin;
        })(egret.gui.Skin);
        game.FightTreasureListSkin = FightTreasureListSkin;
        egret.registerClass(FightTreasureListSkin,"skins.game.FightTreasureListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
