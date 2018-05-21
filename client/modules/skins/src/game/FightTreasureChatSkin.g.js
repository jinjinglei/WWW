var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureChatSkin = (function (_super) {
            __extends(FightTreasureChatSkin, _super);
            function FightTreasureChatSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_nothing_i(), this.list_items_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureChatSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightTreasureChatSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.ico_nothing_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_nothing = t;
                this.__s(t, ["autoScale", "horizontalCenter", "scale9Grid", "source", "x", "y"], [false, 0, egret.gui.getScale9Grid("33,32,20,7"), "ico_chat_nothing", 10, 329]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "left", "maxHeight", "skinName", "top", "width", "x", "y"], [522, skins.game.FightTreasureItemSkin, 29, 485, skins.comp.List_Empty_Skin, 169, 421, 30, 30]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [533, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 432, 26, 160]);
                return t;
            };
            FightTreasureChatSkin._skinParts = ["ico_nothing", "list_items"];
            return FightTreasureChatSkin;
        })(egret.gui.Skin);
        game.FightTreasureChatSkin = FightTreasureChatSkin;
        egret.registerClass(FightTreasureChatSkin,"skins.game.FightTreasureChatSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
