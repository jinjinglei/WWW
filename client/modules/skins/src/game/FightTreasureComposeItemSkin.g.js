var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureComposeItemSkin = (function (_super) {
            __extends(FightTreasureComposeItemSkin, _super);
            function FightTreasureComposeItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [96, 390]);
                this.elementsContent = [this.ico_bg_i(), this.label_name_i(), this.label_count_i(), this.label_open_hint_i(), this.ico_item_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureComposeItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightTreasureComposeItemSkin._skinParts;
                }
            );
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [-142.5, 0, 20, 20]);
                return t;
            };
            p.label_count_i = function () {
                var t = new mo.gui.Label();
                this.label_count = t;
                this.__s(t, ["fontFamily", "lineSpacing", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "y"], ["黑体", 10, 10, 24, "(14/20)", "right", 0xFFFFFF, "middle", 14]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], ["黑体", 10, 24, "上面上面宝箱", "left", 0xFFFFFF, "middle", 104, 14]);
                return t;
            };
            p.label_open_hint_i = function () {
                var t = new mo.gui.Label();
                this.label_open_hint = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], ["黑体", 10, 17, "开出红色秘宝概率20%", "left", 0xF8F8F8, "middle", 105, 56]);
                return t;
            };
            p.ico_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg = t;
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("48,12,289,75"), "ico_treasure_bg", 0]);
                return t;
            };
            FightTreasureComposeItemSkin._skinParts = ["ico_bg", "label_name", "label_count", "label_open_hint", "ico_item"];
            return FightTreasureComposeItemSkin;
        })(egret.gui.Skin);
        game.FightTreasureComposeItemSkin = FightTreasureComposeItemSkin;
        egret.registerClass(FightTreasureComposeItemSkin,"skins.game.FightTreasureComposeItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
