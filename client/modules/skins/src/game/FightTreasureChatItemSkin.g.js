var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureChatItemSkin = (function (_super) {
            __extends(FightTreasureChatItemSkin, _super);
            function FightTreasureChatItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [110, 410]);
                this.elementsContent = [this.__4_i(), this.label_time_i(), this.label_content_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureChatItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightTreasureChatItemSkin._skinParts;
                }
            );
            p.label_content_i = function () {
                var t = new mo.gui.Label();
                this.label_content = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textColor", "verticalAlign", "width", "y"], [78, 0.5, 20, "我是聊天消息", 0xF8F8F8, "middle", 359, 4]);
                return t;
            };
            p.label_time_i = function () {
                var t = new egret.gui.Label();
                this.label_time = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [25, 18, "标签", "center", 0xB4AFAF, 378, 6, 82]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [0, 0.57, 0x000000, 0, 0, 0]);
                return t;
            };
            FightTreasureChatItemSkin._skinParts = ["label_time", "label_content"];
            return FightTreasureChatItemSkin;
        })(egret.gui.Skin);
        game.FightTreasureChatItemSkin = FightTreasureChatItemSkin;
        egret.registerClass(FightTreasureChatItemSkin,"skins.game.FightTreasureChatItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
