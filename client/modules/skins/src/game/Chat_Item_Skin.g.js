var skins;
(function (skins) {
    var game;
    (function (game) {
        var Chat_Item_Skin = (function (_super) {
            __extends(Chat_Item_Skin, _super);
            function Chat_Item_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 380;
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Chat_Item_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Chat_Item_Skin._skinParts;
                }
            );
            p.label_content_i = function () {
                var t = new egret.gui.Label();
                this.label_content = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "我是聊天消息", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [380, 0, 0]);
                t.elementsContent = [this.label_content_i()];
                return t;
            };
            Chat_Item_Skin._skinParts = ["label_content"];
            return Chat_Item_Skin;
        })(egret.gui.Skin);
        game.Chat_Item_Skin = Chat_Item_Skin;
        egret.registerClass(Chat_Item_Skin,"skins.game.Chat_Item_Skin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
